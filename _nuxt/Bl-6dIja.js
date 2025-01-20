const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D6SzPSWf.js","./BU4_0zgW.js","./DsnXnaRs.js","./DgXRNTi4.js","./index.ASLudlX-.css","./BW58wK8l.js","./D6tFZi2Y.js","./BeIlGV1j.js","./B_-KwXOP.js","./Gallery.BdWwPq4R.css","./Film.D8qa6UOd.css","./Film.CyscwsSS.css","./DhgDZZyd.js","./Bio.BaV4dkSc.css","./CHQTJ_1S.js","./Contact.Bq_tjq4M.css","./pMP2VqQy.js","./Clocks.CaZdgkmv.css","./YHaFfPk3.js","./index.EfND0qCY.css","./Btz0jBW6.js","./Ct_Qa2R-.js","./index.CAtFJWG6.css","./C4Eg6-T4.js","./Celebrities.BS01JuXe.css","./BOe9m24Q.js","./Clocks.Dmp-oUCd.css","./eGPusp-A.js","./index.ByThmlNc.css","./CNGvI-ui.js","./dSmFCKnP.js","./DeJ8KwtY.js","./CQG52Aot.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var NT=Object.defineProperty;var DT=(t,e,n)=>e in t?NT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Zi=(t,e,n)=>DT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function kf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ni=[],On=()=>{},LT=()=>!1,ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Of=t=>t.startsWith("onUpdate:"),st=Object.assign,xf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},MT=Object.prototype.hasOwnProperty,xe=(t,e)=>MT.call(t,e),le=Array.isArray,ri=t=>xi(t)==="[object Map]",Oi=t=>xi(t)==="[object Set]",tm=t=>xi(t)==="[object Date]",VT=t=>xi(t)==="[object RegExp]",pe=t=>typeof t=="function",ze=t=>typeof t=="string",_n=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Dy=t=>(Me(t)||pe(t))&&pe(t.then)&&pe(t.catch),Ly=Object.prototype.toString,xi=t=>Ly.call(t),FT=t=>xi(t).slice(8,-1),My=t=>xi(t)==="[object Object]",Nf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=kf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},UT=/-(\w)/g,ln=al(t=>t.replace(UT,(e,n)=>n?n.toUpperCase():"")),BT=/\B([A-Z])/g,Os=al(t=>t.replace(BT,"-$1").toLowerCase()),cl=al(t=>t.charAt(0).toUpperCase()+t.slice(1)),_u=al(t=>t?`on${cl(t)}`:""),Vr=(t,e)=>!Object.is(t,e),ii=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vy=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Fy=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let nm;const ll=()=>nm||(nm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ul(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?qT(r):ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Me(t))return t}const jT=/;(?![^(]*\))/g,$T=/:([^]+)/,HT=/\/\*[^]*?\*\//g;function qT(t){const e={};return t.replace(HT,"").split(jT).forEach(n=>{if(n){const r=n.split($T);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function na(t){let e="";if(ze(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=na(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function PU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=na(e)),n&&(t.style=ul(n)),t}const zT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",WT=kf(zT);function Uy(t){return!!t||t===""}function KT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ra(t[r],e[r]);return n}function ra(t,e){if(t===e)return!0;let n=tm(t),r=tm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_n(t),r=_n(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?KT(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ra(t[o],e[o]))return!1}}return String(t)===String(e)}function Df(t,e){return t.findIndex(n=>ra(n,e))}const By=t=>!!(t&&t.__v_isRef===!0),Lf=t=>ze(t)?t:t==null?"":le(t)||Me(t)&&(t.toString===Ly||!pe(t.toString))?By(t)?Lf(t.value):JSON.stringify(t,jy,2):String(t),jy=(t,e)=>By(e)?jy(t,e.value):ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yu(r,i)+" =>"]=s,n),{})}:Oi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yu(n))}:_n(e)?yu(e):Me(e)&&!le(e)&&!My(e)?String(e):e,yu=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class $y{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Mf(t){return new $y(t)}function sa(){return Bt}function Tc(t,e=!1){Bt&&Bt.cleanups.push(t)}let Be;const vu=new WeakSet;class Hy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vu.has(this)&&(vu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rm(this),Wy(this);const e=Be,n=mn;Be=this,mn=!0;try{return this.fn()}finally{Ky(this),Be=e,mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uf(e);this.deps=this.depsTail=void 0,rm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oh(this)&&this.run()}get dirty(){return oh(this)}}let qy=0,po,mo;function zy(t,e=!1){if(t.flags|=8,e){t.next=mo,mo=t;return}t.next=po,po=t}function Vf(){qy++}function Ff(){if(--qy>0)return;if(mo){let e=mo;for(mo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;po;){let e=po;for(po=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Wy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ky(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Uf(r),GT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function oh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xo))return;t.globalVersion=xo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!oh(t)){t.flags&=-3;return}const n=Be,r=mn;Be=t,mn=!0;try{Wy(t);const s=t.fn(t._value);(e.version===0||Vr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,mn=r,Ky(t),t.flags&=-3}}function Uf(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Uf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function GT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mn=!0;const Qy=[];function ts(){Qy.push(mn),mn=!1}function ns(){const t=Qy.pop();mn=t===void 0?!0:t}function rm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let xo=0;class QT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!mn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new QT(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,Yy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,xo++,this.notify(e)}notify(e){Vf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ff()}}}function Yy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ic=new WeakMap,vs=Symbol(""),ah=Symbol(""),No=Symbol("");function Pt(t,e,n){if(mn&&Be){let r=Ic.get(t);r||Ic.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hl),s.map=r,s.key=n),s.track()}}function Kn(t,e,n,r,s,i){const o=Ic.get(t);if(!o){xo++;return}const a=l=>{l&&l.trigger()};if(Vf(),e==="clear")o.forEach(a);else{const l=le(t),u=l&&Nf(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===No||!_n(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(No)),e){case"add":l?u&&a(o.get("length")):(a(o.get(vs)),ri(t)&&a(o.get(ah)));break;case"delete":l||(a(o.get(vs)),ri(t)&&a(o.get(ah)));break;case"set":ri(t)&&a(o.get(vs));break}}Ff()}function YT(t,e){const n=Ic.get(t);return n&&n.get(e)}function Hs(t){const e=Re(t);return e===t?e:(Pt(e,"iterate",No),on(t)?e:e.map(kt))}function fl(t){return Pt(t=Re(t),"iterate",No),t}const XT={__proto__:null,[Symbol.iterator](){return Eu(this,Symbol.iterator,kt)},concat(...t){return Hs(this).concat(...t.map(e=>le(e)?Hs(e):e))},entries(){return Eu(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return Hn(this,"every",t,e,void 0,arguments)},filter(t,e){return Hn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return Hn(this,"find",t,e,kt,arguments)},findIndex(t,e){return Hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Hn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return Hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return wu(this,"includes",t)},indexOf(...t){return wu(this,"indexOf",t)},join(t){return Hs(this).join(t)},lastIndexOf(...t){return wu(this,"lastIndexOf",t)},map(t,e){return Hn(this,"map",t,e,void 0,arguments)},pop(){return eo(this,"pop")},push(...t){return eo(this,"push",t)},reduce(t,...e){return sm(this,"reduce",t,e)},reduceRight(t,...e){return sm(this,"reduceRight",t,e)},shift(){return eo(this,"shift")},some(t,e){return Hn(this,"some",t,e,void 0,arguments)},splice(...t){return eo(this,"splice",t)},toReversed(){return Hs(this).toReversed()},toSorted(t){return Hs(this).toSorted(t)},toSpliced(...t){return Hs(this).toSpliced(...t)},unshift(...t){return eo(this,"unshift",t)},values(){return Eu(this,"values",kt)}};function Eu(t,e,n){const r=fl(t),s=r[e]();return r!==t&&!on(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const JT=Array.prototype;function Hn(t,e,n,r,s,i){const o=fl(t),a=o!==t&&!on(t),l=o[e];if(l!==JT[e]){const d=l.apply(t,i);return a?kt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,kt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function sm(t,e,n,r){const s=fl(t);let i=n;return s!==t&&(on(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,kt(a),l,t)}),s[e](i,...r)}function wu(t,e,n){const r=Re(t);Pt(r,"iterate",No);const s=r[e](...n);return(s===-1||s===!1)&&$f(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function eo(t,e,n=[]){ts(),Vf();const r=Re(t)[e].apply(t,n);return Ff(),ns(),r}const ZT=kf("__proto__,__v_isRef,__isVue"),Xy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function eI(t){_n(t)||(t=String(t));const e=Re(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class Jy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uI:nv:i?tv:ev).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=XT[n]))return l;if(n==="hasOwnProperty")return eI}const a=Reflect.get(e,n,Je(e)?e:r);return(_n(n)?Xy.has(n):ZT(n))||(s||Pt(e,"get",n),i)?a:Je(a)?o&&Nf(n)?a:a.value:Me(a)?s?rv(a):hr(a):a}}class Zy extends Jy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=zr(i);if(!on(r)&&!zr(r)&&(i=Re(i),r=Re(r)),!le(e)&&Je(i)&&!Je(r))return l?!1:(i.value=r,!0)}const o=le(e)&&Nf(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Je(e)?e:s);return e===Re(s)&&(o?Vr(r,i)&&Kn(e,"set",n,r):Kn(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Kn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_n(n)||!Xy.has(n))&&Pt(e,"has",n),r}ownKeys(e){return Pt(e,"iterate",le(e)?"length":vs),Reflect.ownKeys(e)}}class tI extends Jy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const nI=new Zy,rI=new tI,sI=new Zy(!0);const ch=t=>t,Ma=t=>Reflect.getPrototypeOf(t);function iI(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ri(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?ch:e?lh:kt;return!e&&Pt(i,"iterate",l?ah:vs),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function Va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function oI(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(Vr(s,a)&&Pt(o,"get",s),Pt(o,"get",a));const{has:l}=Ma(o),u=e?ch:t?lh:kt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Pt(Re(s),"iterate",vs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(Vr(s,a)&&Pt(o,"has",s),Pt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Re(a),u=e?ch:t?lh:kt;return!t&&Pt(l,"iterate",vs),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return st(n,t?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(s){!e&&!on(s)&&!zr(s)&&(s=Re(s));const i=Re(this);return Ma(i).has.call(i,s)||(i.add(s),Kn(i,"add",s,s)),this},set(s,i){!e&&!on(i)&&!zr(i)&&(i=Re(i));const o=Re(this),{has:a,get:l}=Ma(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Vr(i,h)&&Kn(o,"set",s,i):Kn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=Ma(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Kn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=iI(s,t,e)}),n}function Bf(t,e){const n=oI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const aI={get:Bf(!1,!1)},cI={get:Bf(!1,!0)},lI={get:Bf(!0,!1)};const ev=new WeakMap,tv=new WeakMap,nv=new WeakMap,uI=new WeakMap;function hI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fI(t){return t.__v_skip||!Object.isExtensible(t)?0:hI(FT(t))}function hr(t){return zr(t)?t:jf(t,!1,nI,aI,ev)}function Xn(t){return jf(t,!1,sI,cI,tv)}function rv(t){return jf(t,!0,rI,lI,nv)}function jf(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=fI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function nr(t){return zr(t)?nr(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function $f(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Hf(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&Vy(t,"__v_skip",!0),t}const kt=t=>Me(t)?hr(t):t,lh=t=>Me(t)?rv(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Et(t){return sv(t,!1)}function Do(t){return sv(t,!0)}function sv(t,e){return Je(t)?t:new dI(t,e)}class dI{constructor(e,n){this.dep=new hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||on(e)||zr(e);e=r?e:Re(e),Vr(e,n)&&(this._rawValue=e,this._value=r?e:kt(e),this.dep.trigger())}}function Qe(t){return Je(t)?t.value:t}const pI={get:(t,e,n)=>e==="__v_raw"?t:Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function iv(t){return nr(t)?t:new Proxy(t,pI)}class mI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new hl,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function gI(t){return new mI(t)}function _I(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=ov(t,n);return e}class yI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return YT(Re(this._object),this._key)}}class vI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function EI(t,e,n){return Je(t)?t:pe(t)?new vI(t):Me(t)&&arguments.length>1?ov(t,e,n):Et(t)}function ov(t,e,n){const r=t[e];return Je(r)?r:new yI(t,e,n)}class wI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return zy(this,!0),!0}get value(){const e=this.dep.track();return Gy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bI(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new wI(r,s,n)}const Fa={},Ac=new WeakMap;let ps;function TI(t,e=!1,n=ps){if(n){let r=Ac.get(n);r||Ac.set(n,r=[]),r.push(t)}}function II(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:on(R)||s===!1||s===0?Gn(R,1):Gn(R);let h,d,p,g,w=!1,k=!1;if(Je(t)?(d=()=>t.value,w=on(t)):nr(t)?(d=()=>u(t),w=!0):le(t)?(k=!0,w=t.some(R=>nr(R)||on(R)),d=()=>t.map(R=>{if(Je(R))return R.value;if(nr(R))return u(R);if(pe(R))return l?l(R,2):R()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){ts();try{p()}finally{ns()}}const R=ps;ps=h;try{return l?l(t,3,[g]):t(g)}finally{ps=R}}:d=On,e&&s){const R=d,D=s===!0?1/0:s;d=()=>Gn(R(),D)}const x=sa(),N=()=>{h.stop(),x&&x.active&&xf(x.effects,h)};if(i&&e){const R=e;e=(...D)=>{R(...D),N()}}let C=k?new Array(t.length).fill(Fa):Fa;const v=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const D=h.run();if(s||w||(k?D.some((M,T)=>Vr(M,C[T])):Vr(D,C))){p&&p();const M=ps;ps=h;try{const T=[D,C===Fa?void 0:k&&C[0]===Fa?[]:C,g];l?l(e,3,T):e(...T),C=D}finally{ps=M}}}else h.run()};return a&&a(v),h=new Hy(d),h.scheduler=o?()=>o(v,!1):v,g=R=>TI(R,!1,h),p=h.onStop=()=>{const R=Ac.get(h);if(R){if(l)l(R,4);else for(const D of R)D();Ac.delete(h)}},e?r?v(!0):C=h.run():o?o(v.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function Gn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Gn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Gn(t[r],e,n);else if(Oi(t)||ri(t))t.forEach(r=>{Gn(r,e,n)});else if(My(t)){for(const r in t)Gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ia(t,e,n,r){try{return r?t(...r):t()}catch(s){Ni(s,e,n)}}function yn(t,e,n,r){if(pe(t)){const s=ia(t,e,n,r);return s&&Dy(s)&&s.catch(i=>{Ni(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function Ni(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){ts(),ia(i,null,10,[t,l,u]),ns();return}}AI(t,n,s,r,o)}function AI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const jt=[];let In=-1;const oi=[];let Ir=null,Ws=0;const av=Promise.resolve();let Rc=null;function Un(t){const e=Rc||av;return t?e.then(this?t.bind(this):t):e}function RI(t){let e=In+1,n=jt.length;for(;e<n;){const r=e+n>>>1,s=jt[r],i=Lo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function qf(t){if(!(t.flags&1)){const e=Lo(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=Lo(n)?jt.push(t):jt.splice(RI(e),0,t),t.flags|=1,cv()}}function cv(){Rc||(Rc=av.then(lv))}function uh(t){le(t)?oi.push(...t):Ir&&t.id===-1?Ir.splice(Ws+1,0,t):t.flags&1||(oi.push(t),t.flags|=1),cv()}function im(t,e,n=In+1){for(;n<jt.length;n++){const r=jt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;jt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sc(t){if(oi.length){const e=[...new Set(oi)].sort((n,r)=>Lo(n)-Lo(r));if(oi.length=0,Ir){Ir.push(...e);return}for(Ir=e,Ws=0;Ws<Ir.length;Ws++){const n=Ir[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ir=null,Ws=0}}const Lo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lv(t){try{for(In=0;In<jt.length;In++){const e=jt[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ia(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<jt.length;In++){const e=jt[In];e&&(e.flags&=-2)}In=-1,jt.length=0,Sc(),Rc=null,(jt.length||oi.length)&&lv()}}let ct=null,uv=null;function Cc(t){const e=ct;return ct=t,uv=t&&t.type.__scopeId||null,e}function An(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_m(-1);const i=Cc(e);let o;try{o=t(...s)}finally{Cc(i),r._d&&_m(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kU(t,e){if(ct===null)return t;const n=yl(ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Fe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Rn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ts(),yn(l,n,8,[t.el,a,t,e]),ns())}}const SI=Symbol("_vte"),hv=t=>t.__isTeleport,Ar=Symbol("_leaveCb"),Ua=Symbol("_enterCb");function CI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pl(()=>{t.isMounted=!0}),aa(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],fv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},dv=t=>{const e=t.subTree;return e.component?dv(e.component):e},PI={name:"BaseTransition",props:fv,setup(t,{slots:e}){const n=_l(),r=CI();return()=>{const s=e.default&&gv(e.default(),!0);if(!s||!s.length)return;const i=pv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return bu(i);const l=om(i);if(!l)return bu(i);let u=hh(l,o,r,n,d=>u=d);l.type!==it&&mi(l,u);let h=n.subTree&&om(n.subTree);if(h&&h.type!==it&&!pn(l,h)&&dv(n).type!==it){let d=hh(h,o,r,n);if(mi(h,d),a==="out-in"&&l.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},bu(i);a==="in-out"&&l.type!==it?d.delayLeave=(p,g,w)=>{const k=mv(r,h);k[String(h.key)]=h,p[Ar]=()=>{g(),p[Ar]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function pv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const kI=PI;function mv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function hh(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:w,onLeaveCancelled:k,onBeforeAppear:x,onAppear:N,onAfterAppear:C,onAppearCancelled:v}=e,R=String(t.key),D=mv(n,t),M=(_,b)=>{_&&yn(_,r,9,b)},T=(_,b)=>{const P=b[1];M(_,b),le(_)?_.every(S=>S.length<=1)&&P():_.length<=1&&P()},y={mode:o,persisted:a,beforeEnter(_){let b=l;if(!n.isMounted)if(i)b=x||l;else return;_[Ar]&&_[Ar](!0);const P=D[R];P&&pn(t,P)&&P.el[Ar]&&P.el[Ar](),M(b,[_])},enter(_){let b=u,P=h,S=d;if(!n.isMounted)if(i)b=N||u,P=C||h,S=v||d;else return;let I=!1;const ge=_[Ua]=ve=>{I||(I=!0,ve?M(S,[_]):M(P,[_]),y.delayedLeave&&y.delayedLeave(),_[Ua]=void 0)};b?T(b,[_,ge]):ge()},leave(_,b){const P=String(t.key);if(_[Ua]&&_[Ua](!0),n.isUnmounting)return b();M(p,[_]);let S=!1;const I=_[Ar]=ge=>{S||(S=!0,b(),ge?M(k,[_]):M(w,[_]),_[Ar]=void 0,D[P]===t&&delete D[P])};D[P]=t,g?T(g,[_,I]):I()},clone(_){const b=hh(_,e,n,r,s);return s&&s(b),b}};return y}function bu(t){if(oa(t))return t=sr(t),t.children=null,t}function om(t){if(!oa(t))return hv(t.type)&&t.children?pv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(gv(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?sr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function wn(t,e){return pe(t)?st({name:t.name},e,{setup:t}):t}function zf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mo(t,e,n,r,s=!1){if(le(t)){t.forEach((w,k)=>Mo(w,e&&(le(e)?e[k]:e),n,r,s));return}if(Fr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?yl(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,d=a.setupState,p=Re(d),g=d===Fe?()=>!1:w=>xe(p,w);if(u!=null&&u!==l&&(ze(u)?(h[u]=null,g(u)&&(d[u]=null)):Je(u)&&(u.value=null)),pe(l))ia(l,a,12,[o,h]);else{const w=ze(l),k=Je(l);if(w||k){const x=()=>{if(t.f){const N=w?g(l)?d[l]:h[l]:l.value;s?le(N)&&xf(N,i):le(N)?N.includes(i)||N.push(i):w?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else w?(h[l]=o,g(l)&&(d[l]=o)):k&&(l.value=o,t.k&&(h[t.k]=o))};o?(x.id=-1,gt(x,n)):x()}}}let am=!1;const qs=()=>{am||(console.error("Hydration completed but contains mismatches."),am=!0)},OI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",xI=t=>t.namespaceURI.includes("MathML"),Ba=t=>{if(t.nodeType===1){if(OI(t))return"svg";if(xI(t))return"mathml"}},Js=t=>t.nodeType===8;function NI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(v,R)=>{if(!R.hasChildNodes()){n(null,v,R),Sc(),R._vnode=v;return}d(R.firstChild,v,null,null,null),Sc(),R._vnode=v},d=(v,R,D,M,T,y=!1)=>{y=y||!!R.dynamicChildren;const _=Js(v)&&v.data==="[",b=()=>k(v,R,D,M,T,_),{type:P,ref:S,shapeFlag:I,patchFlag:ge}=R;let ve=v.nodeType;R.el=v,ge===-2&&(y=!1,R.dynamicChildren=null);let Z=null;switch(P){case bs:ve!==3?R.children===""?(l(R.el=s(""),o(v),v),Z=v):Z=b():(v.data!==R.children&&(qs(),v.data=R.children),Z=i(v));break;case it:C(v)?(Z=i(v),N(R.el=v.content.firstChild,v,D)):ve!==8||_?Z=b():Z=i(v);break;case _o:if(_&&(v=i(v),ve=v.nodeType),ve===1||ve===3){Z=v;const se=!R.children.length;for(let ne=0;ne<R.staticCount;ne++)se&&(R.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===R.staticCount-1&&(R.anchor=Z),Z=i(Z);return _?i(Z):Z}else b();break;case Ot:_?Z=w(v,R,D,M,T,y):Z=b();break;default:if(I&1)(ve!==1||R.type.toLowerCase()!==v.tagName.toLowerCase())&&!C(v)?Z=b():Z=p(v,R,D,M,T,y);else if(I&6){R.slotScopeIds=T;const se=o(v);if(_?Z=x(v):Js(v)&&v.data==="teleport start"?Z=x(v,v.data,"teleport end"):Z=i(v),e(R,se,null,D,M,Ba(se),y),Fr(R)&&!R.type.__asyncResolved){let ne;_?(ne=we(Ot),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=v.nodeType===3?sn(""):we("div"),ne.el=v,R.component.subTree=ne}}else I&64?ve!==8?Z=b():Z=R.type.hydrate(v,R,D,M,T,y,t,g):I&128&&(Z=R.type.hydrate(v,R,D,M,Ba(o(v)),T,y,t,d))}return S!=null&&Mo(S,null,M,R),Z},p=(v,R,D,M,T,y)=>{y=y||!!R.dynamicChildren;const{type:_,props:b,patchFlag:P,shapeFlag:S,dirs:I,transition:ge}=R,ve=_==="input"||_==="option";if(ve||P!==-1){I&&Rn(R,null,D,"created");let Z=!1;if(C(v)){Z=Uv(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=v.content.firstChild;Z&&ge.beforeEnter(ne),N(ne,v,D),R.el=v=ne}if(S&16&&!(b&&(b.innerHTML||b.textContent))){let ne=g(v.firstChild,R,v,D,M,T,y);for(;ne;){ja(v,1)||qs();const We=ne;ne=ne.nextSibling,a(We)}}else if(S&8){let ne=R.children;ne[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(ne=ne.slice(1)),v.textContent!==ne&&(ja(v,0)||qs(),v.textContent=R.children)}if(b){if(ve||!y||P&48){const ne=v.tagName.includes("-");for(const We in b)(ve&&(We.endsWith("value")||We==="indeterminate")||ta(We)&&!si(We)||We[0]==="."||ne)&&r(v,We,null,b[We],void 0,D)}else if(b.onClick)r(v,"onClick",null,b.onClick,void 0,D);else if(P&4&&nr(b.style))for(const ne in b.style)b.style[ne]}let se;(se=b&&b.onVnodeBeforeMount)&&zt(se,D,R),I&&Rn(R,null,D,"beforeMount"),((se=b&&b.onVnodeMounted)||I||Z)&&zv(()=>{se&&zt(se,D,R),Z&&ge.enter(v),I&&Rn(R,null,D,"mounted")},M)}return v.nextSibling},g=(v,R,D,M,T,y,_)=>{_=_||!!R.dynamicChildren;const b=R.children,P=b.length;for(let S=0;S<P;S++){const I=_?b[S]:b[S]=Yt(b[S]),ge=I.type===bs;v?(ge&&!_&&S+1<P&&Yt(b[S+1]).type===bs&&(l(s(v.data.slice(I.children.length)),D,i(v)),v.data=I.children),v=d(v,I,M,T,y,_)):ge&&!I.children?l(I.el=s(""),D):(ja(D,1)||qs(),n(null,I,D,null,M,T,Ba(D),y))}return v},w=(v,R,D,M,T,y)=>{const{slotScopeIds:_}=R;_&&(T=T?T.concat(_):_);const b=o(v),P=g(i(v),R,b,D,M,T,y);return P&&Js(P)&&P.data==="]"?i(R.anchor=P):(qs(),l(R.anchor=u("]"),b,P),P)},k=(v,R,D,M,T,y)=>{if(ja(v.parentElement,1)||qs(),R.el=null,y){const P=x(v);for(;;){const S=i(v);if(S&&S!==P)a(S);else break}}const _=i(v),b=o(v);return a(v),n(null,R,b,_,D,M,Ba(b),T),D&&(D.vnode.el=R.el,gl(D,R.el)),_},x=(v,R="[",D="]")=>{let M=0;for(;v;)if(v=i(v),v&&Js(v)&&(v.data===R&&M++,v.data===D)){if(M===0)return i(v);M--}return v},N=(v,R,D)=>{const M=R.parentNode;M&&M.replaceChild(v,R);let T=D;for(;T;)T.vnode.el===R&&(T.vnode.el=T.subTree.el=v),T=T.parent},C=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[h,d]}const cm="data-allow-mismatch",DI={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ja(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(cm);)t=t.parentElement;const n=t&&t.getAttribute(cm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(DI[e])}}ll().requestIdleCallback;ll().cancelIdleCallback;function LI(t,e){if(Js(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Js(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Fr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function MI(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const p=()=>(d++,u=null,g()),g=()=>{let w;return u||(w=u=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),l)return new Promise((x,N)=>{l(k,()=>x(p()),()=>N(k),d+1)});throw k}).then(k=>w!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),h=k,k)))};return wn({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(w,k,x){const N=i?()=>{const C=i(x,v=>LI(w,v));C&&(k.bum||(k.bum=[])).push(C)}:x;h?N():g().then(()=>!k.isUnmounted&&N())},get __asyncResolved(){return h},setup(){const w=ot;if(zf(w),h)return()=>Tu(h,w);const k=v=>{u=null,Ni(v,w,13,!r)};if(a&&w.suspense||_i)return g().then(v=>()=>Tu(v,w)).catch(v=>(k(v),()=>r?we(r,{error:v}):null));const x=Et(!1),N=Et(),C=Et(!!s);return s&&setTimeout(()=>{C.value=!1},s),o!=null&&setTimeout(()=>{if(!x.value&&!N.value){const v=new Error(`Async component timed out after ${o}ms.`);k(v),N.value=v}},o),g().then(()=>{x.value=!0,w.parent&&oa(w.parent.vnode)&&w.parent.update()}).catch(v=>{k(v),N.value=v}),()=>{if(x.value&&h)return Tu(h,w);if(N.value&&r)return we(r,{error:N.value});if(n&&!C.value)return we(n)}}})}function Tu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=we(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const oa=t=>t.type.__isKeepAlive,VI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=_l(),r=n.ctx;if(!r.renderer)return()=>{const C=e.default&&e.default();return C&&C.length===1?C[0]:C};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(C,v,R,D,M)=>{const T=C.component;u(C,v,R,0,a),l(T.vnode,C,v,R,T,a,D,C.slotScopeIds,M),gt(()=>{T.isDeactivated=!1,T.a&&ii(T.a);const y=C.props&&C.props.onVnodeMounted;y&&zt(y,T.parent,C)},a)},r.deactivate=C=>{const v=C.component;kc(v.m),kc(v.a),u(C,p,null,1,a),gt(()=>{v.da&&ii(v.da);const R=C.props&&C.props.onVnodeUnmounted;R&&zt(R,v.parent,C),v.isDeactivated=!0},a)};function g(C){Iu(C),h(C,n,a,!0)}function w(C){s.forEach((v,R)=>{const D=vh(v.type);D&&!C(D)&&k(R)})}function k(C){const v=s.get(C);v&&(!o||!pn(v,o))?g(v):o&&Iu(o),s.delete(C),i.delete(C)}gn(()=>[t.include,t.exclude],([C,v])=>{C&&w(R=>so(C,R)),v&&w(R=>!so(v,R))},{flush:"post",deep:!0});let x=null;const N=()=>{x!=null&&(Oc(n.subTree.type)?gt(()=>{s.set(x,$a(n.subTree))},n.subTree.suspense):s.set(x,$a(n.subTree)))};return pl(N),Ev(N),aa(()=>{s.forEach(C=>{const{subTree:v,suspense:R}=n,D=$a(v);if(C.type===D.type&&C.key===D.key){Iu(D);const M=D.component.da;M&&gt(M,R);return}g(C)})}),()=>{if(x=null,!e.default)return o=null;const C=e.default(),v=C[0];if(C.length>1)return o=null,C;if(!Is(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let R=$a(v);if(R.type===it)return o=null,R;const D=R.type,M=vh(Fr(R)?R.type.__asyncResolved||{}:D),{include:T,exclude:y,max:_}=t;if(T&&(!M||!so(T,M))||y&&M&&so(y,M))return R.shapeFlag&=-257,o=R,v;const b=R.key==null?D:R.key,P=s.get(b);return R.el&&(R=sr(R),v.shapeFlag&128&&(v.ssContent=R)),x=b,P?(R.el=P.el,R.component=P.component,R.transition&&mi(R,R.transition),R.shapeFlag|=512,i.delete(b),i.add(b)):(i.add(b),_&&i.size>parseInt(_,10)&&k(i.values().next().value)),R.shapeFlag|=256,o=R,Oc(v.type)?v:R}}},FI=VI;function so(t,e){return le(t)?t.some(n=>so(n,e)):ze(t)?t.split(",").includes(e):VT(t)?(t.lastIndex=0,t.test(e)):!1}function _v(t,e){vv(t,"a",e)}function yv(t,e){vv(t,"da",e)}function vv(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(dl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)oa(s.parent.vnode)&&UI(r,e,n,s),s=s.parent}}function UI(t,e,n,r){const s=dl(e,t,r,!0);wv(()=>{xf(r[e],s)},n)}function Iu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function $a(t){return t.shapeFlag&128?t.ssContent:t}function dl(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ts();const a=ca(n),l=yn(e,n,t,o);return a(),ns(),l});return r?s.unshift(i):s.push(i),i}}const fr=t=>(e,n=ot)=>{(!_i||t==="sp")&&dl(t,(...r)=>e(...r),n)},BI=fr("bm"),pl=fr("m"),jI=fr("bu"),Ev=fr("u"),aa=fr("bum"),wv=fr("um"),$I=fr("sp"),HI=fr("rtg"),qI=fr("rtc");function bv(t,e=ot){dl("ec",t,e)}const Tv="components";function Vo(t,e){return Av(Tv,t,!0,e)||t}const Iv=Symbol.for("v-ndc");function zI(t){return ze(t)?Av(Tv,t,!1)||t:t||Iv}function Av(t,e,n=!0,r=!1){const s=ct||ot;if(s){const i=s.type;{const a=vh(i,!1);if(a&&(a===e||a===ln(e)||a===cl(ln(e))))return i}const o=lm(s[t]||i[t],e)||lm(s.appContext[t],e);return!o&&r?i:o}}function lm(t,e){return t&&(t[e]||t[ln(e)]||t[cl(ln(e))])}function OU(t,e,n,r){let s;const i=n,o=le(t);if(o||ze(t)){const a=o&&nr(t);let l=!1;a&&(l=!on(t),t=fl(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?kt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function xU(t,e,n={},r,s){if(ct.ce||ct.parent&&Fr(ct.parent)&&ct.parent.ce)return $t(),Qn(Ot,null,[we("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),$t();const o=i&&Rv(i(n)),a=n.key||o&&o.key,l=Qn(Ot,{key:(a&&!_n(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Rv(t){return t.some(e=>Is(e)?!(e.type===it||e.type===Ot&&!Rv(e.children)):!0)?t:null}const fh=t=>t?Yv(t)?yl(t):fh(t.parent):null,go=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fh(t.parent),$root:t=>fh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wf(t),$forceUpdate:t=>t.f||(t.f=()=>{qf(t.update)}),$nextTick:t=>t.n||(t.n=Un.bind(t.proxy)),$watch:t=>fA.bind(t)}),Au=(t,e)=>t!==Fe&&!t.__isScriptSetup&&xe(t,e),WI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Au(r,e))return o[e]=1,r[e];if(s!==Fe&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==Fe&&xe(n,e))return o[e]=4,n[e];dh&&(o[e]=0)}}const h=go[e];let d,p;if(h)return e==="$attrs"&&Pt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Fe&&xe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Au(s,e)?(s[e]=n,!0):r!==Fe&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&xe(t,o)||Au(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(go,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function um(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dh=!0;function KI(t){const e=Wf(t),n=t.proxy,r=t.ctx;dh=!1,e.beforeCreate&&hm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:k,deactivated:x,beforeDestroy:N,beforeUnmount:C,destroyed:v,unmounted:R,render:D,renderTracked:M,renderTriggered:T,errorCaptured:y,serverPrefetch:_,expose:b,inheritAttrs:P,components:S,directives:I,filters:ge}=e;if(u&&GI(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Me(se)&&(t.data=hr(se))}if(dh=!0,i)for(const se in i){const ne=i[se],We=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):On,un=!pe(ne)&&pe(ne.set)?ne.set.bind(n):On,tn=Ue({get:We,set:un});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const se in a)Sv(a[se],r,n,se);if(l){const se=pe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{ws(ne,se[ne])})}h&&hm(h,t,"c");function Z(se,ne){le(ne)?ne.forEach(We=>se(We.bind(n))):ne&&se(ne.bind(n))}if(Z(BI,d),Z(pl,p),Z(jI,g),Z(Ev,w),Z(_v,k),Z(yv,x),Z(bv,y),Z(qI,M),Z(HI,T),Z(aa,C),Z(wv,R),Z($I,_),le(b))if(b.length){const se=t.exposed||(t.exposed={});b.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});D&&t.render===On&&(t.render=D),P!=null&&(t.inheritAttrs=P),S&&(t.components=S),I&&(t.directives=I),_&&zf(t)}function GI(t,e,n=On){le(t)&&(t=ph(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Nt(s.from||r,s.default,!0):i=Nt(s.from||r):i=Nt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function hm(t,e,n){yn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sv(t,e,n,r){let s=r.includes(".")?$v(n,r):()=>n[r];if(ze(t)){const i=e[t];pe(i)&&gn(s,i)}else if(pe(t))gn(s,t.bind(n));else if(Me(t))if(le(t))t.forEach(i=>Sv(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&gn(s,i,t)}}function Wf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Pc(l,u,o,!0)),Pc(l,e,o)),Me(e)&&i.set(e,l),l}function Pc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pc(t,i,n,!0),s&&s.forEach(o=>Pc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=QI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const QI={data:fm,props:dm,emits:dm,methods:io,computed:io,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:io,directives:io,watch:XI,provide:fm,inject:YI};function fm(t,e){return e?t?function(){return st(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function YI(t,e){return io(ph(t),ph(e))}function ph(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?st(Object.create(null),t,e):e}function dm(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:st(Object.create(null),um(t),um(e??{})):e}function XI(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function Cv(){return{app:null,config:{isNativeTag:LT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let JI=0;function ZI(t,e){return function(r,s=null){pe(r)||(r=st({},r)),s!=null&&!Me(s)&&(s=null);const i=Cv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:JI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jv,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||we(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,yl(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(yn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Es;Es=u;try{return h()}finally{Es=d}}};return u}}let Es=null;function ws(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=ot||ct;if(r||Es){const s=Es?Es._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Kf(){return!!(ot||ct||Es)}const Pv={},kv=()=>Object.create(Pv),Ov=t=>Object.getPrototypeOf(t)===Pv;function eA(t,e,n,r=!1){const s={},i=kv();t.propsDefaults=Object.create(null),xv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function tA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(ml(t.emitsOptions,p))continue;const g=e[p];if(l)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const w=ln(p);s[w]=mh(l,a,w,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{xv(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!xe(e,d)&&((h=Os(d))===d||!xe(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=mh(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&Kn(t.attrs,"set","")}function xv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(si(l))continue;const u=e[l];let h;s&&xe(s,h=ln(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:ml(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=a||Fe;for(let h=0;h<i.length;h++){const d=i[h];n[d]=mh(s,l,d,u[d],t,!xe(u,d))}}return o}function mh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ca(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Os(n))&&(r=!0))}return r}const nA=new WeakMap;function Nv(t,e,n=!1){const r=n?nA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const h=d=>{l=!0;const[p,g]=Nv(d,e,!0);st(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Me(t)&&r.set(t,ni),ni;if(le(i))for(let h=0;h<i.length;h++){const d=ln(i[h]);pm(d)&&(o[d]=Fe)}else if(i)for(const h in i){const d=ln(h);if(pm(d)){const p=i[h],g=o[d]=le(p)||pe(p)?{type:p}:st({},p),w=g.type;let k=!1,x=!0;if(le(w))for(let N=0;N<w.length;++N){const C=w[N],v=pe(C)&&C.name;if(v==="Boolean"){k=!0;break}else v==="String"&&(x=!1)}else k=pe(w)&&w.name==="Boolean";g[0]=k,g[1]=x,(k||xe(g,"default"))&&a.push(d)}}const u=[o,a];return Me(t)&&r.set(t,u),u}function pm(t){return t[0]!=="$"&&!si(t)}const Dv=t=>t[0]==="_"||t==="$stable",Gf=t=>le(t)?t.map(Yt):[Yt(t)],rA=(t,e,n)=>{if(e._n)return e;const r=An((...s)=>Gf(e(...s)),n);return r._c=!1,r},Lv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Dv(s))continue;const i=t[s];if(pe(i))e[s]=rA(s,i,r);else if(i!=null){const o=Gf(i);e[s]=()=>o}}},Mv=(t,e)=>{const n=Gf(e);t.slots.default=()=>n},Vv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},sA=(t,e,n)=>{const r=t.slots=kv();if(t.vnode.shapeFlag&32){const s=e._;s?(Vv(r,e,n),n&&Vy(r,"_",s,!0)):Lv(e,r)}else e&&Mv(t,e)},iA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Vv(s,e,n):(i=!e.$stable,Lv(e,s)),o=e}else e&&(Mv(t,e),o={default:1});if(i)for(const a in s)!Dv(a)&&o[a]==null&&delete s[a]},gt=zv;function oA(t){return Fv(t)}function aA(t){return Fv(t,NI)}function Fv(t,e){const n=ll();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=On,insertStaticContent:w}=t,k=(A,O,V,$=null,U=null,q=null,Y=void 0,G=null,K=!!O.dynamicChildren)=>{if(A===O)return;A&&!pn(A,O)&&($=B(A),Ke(A,U,q,!0),A=null),O.patchFlag===-2&&(K=!1,O.dynamicChildren=null);const{type:z,ref:ue,shapeFlag:J}=O;switch(z){case bs:x(A,O,V,$);break;case it:N(A,O,V,$);break;case _o:A==null&&C(O,V,$,Y);break;case Ot:S(A,O,V,$,U,q,Y,G,K);break;default:J&1?D(A,O,V,$,U,q,Y,G,K):J&6?I(A,O,V,$,U,q,Y,G,K):(J&64||J&128)&&z.process(A,O,V,$,U,q,Y,G,K,re)}ue!=null&&U&&Mo(ue,A&&A.ref,q,O||A,!O)},x=(A,O,V,$)=>{if(A==null)r(O.el=a(O.children),V,$);else{const U=O.el=A.el;O.children!==A.children&&u(U,O.children)}},N=(A,O,V,$)=>{A==null?r(O.el=l(O.children||""),V,$):O.el=A.el},C=(A,O,V,$)=>{[A.el,A.anchor]=w(A.children,O,V,$,A.el,A.anchor)},v=({el:A,anchor:O},V,$)=>{let U;for(;A&&A!==O;)U=p(A),r(A,V,$),A=U;r(O,V,$)},R=({el:A,anchor:O})=>{let V;for(;A&&A!==O;)V=p(A),s(A),A=V;s(O)},D=(A,O,V,$,U,q,Y,G,K)=>{O.type==="svg"?Y="svg":O.type==="math"&&(Y="mathml"),A==null?M(O,V,$,U,q,Y,G,K):_(A,O,U,q,Y,G,K)},M=(A,O,V,$,U,q,Y,G)=>{let K,z;const{props:ue,shapeFlag:J,transition:oe,dirs:ie}=A;if(K=A.el=o(A.type,q,ue&&ue.is,ue),J&8?h(K,A.children):J&16&&y(A.children,K,null,$,U,Ru(A,q),Y,G),ie&&Rn(A,null,$,"created"),T(K,A,A.scopeId,Y,$),ue){for(const Pe in ue)Pe!=="value"&&!si(Pe)&&i(K,Pe,null,ue[Pe],q,$);"value"in ue&&i(K,"value",null,ue.value,q),(z=ue.onVnodeBeforeMount)&&zt(z,$,A)}ie&&Rn(A,null,$,"beforeMount");const fe=Uv(U,oe);fe&&oe.beforeEnter(K),r(K,O,V),((z=ue&&ue.onVnodeMounted)||fe||ie)&&gt(()=>{z&&zt(z,$,A),fe&&oe.enter(K),ie&&Rn(A,null,$,"mounted")},U)},T=(A,O,V,$,U)=>{if(V&&g(A,V),$)for(let q=0;q<$.length;q++)g(A,$[q]);if(U){let q=U.subTree;if(O===q||Oc(q.type)&&(q.ssContent===O||q.ssFallback===O)){const Y=U.vnode;T(A,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},y=(A,O,V,$,U,q,Y,G,K=0)=>{for(let z=K;z<A.length;z++){const ue=A[z]=G?Rr(A[z]):Yt(A[z]);k(null,ue,O,V,$,U,q,Y,G)}},_=(A,O,V,$,U,q,Y)=>{const G=O.el=A.el;let{patchFlag:K,dynamicChildren:z,dirs:ue}=O;K|=A.patchFlag&16;const J=A.props||Fe,oe=O.props||Fe;let ie;if(V&&us(V,!1),(ie=oe.onVnodeBeforeUpdate)&&zt(ie,V,O,A),ue&&Rn(O,A,V,"beforeUpdate"),V&&us(V,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&h(G,""),z?b(A.dynamicChildren,z,G,V,$,Ru(O,U),q):Y||ne(A,O,G,null,V,$,Ru(O,U),q,!1),K>0){if(K&16)P(G,J,oe,V,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const fe=O.dynamicProps;for(let Pe=0;Pe<fe.length;Pe++){const Se=fe[Pe],Tt=J[Se],ht=oe[Se];(ht!==Tt||Se==="value")&&i(G,Se,Tt,ht,U,V)}}K&1&&A.children!==O.children&&h(G,O.children)}else!Y&&z==null&&P(G,J,oe,V,U);((ie=oe.onVnodeUpdated)||ue)&&gt(()=>{ie&&zt(ie,V,O,A),ue&&Rn(O,A,V,"updated")},$)},b=(A,O,V,$,U,q,Y)=>{for(let G=0;G<O.length;G++){const K=A[G],z=O[G],ue=K.el&&(K.type===Ot||!pn(K,z)||K.shapeFlag&70)?d(K.el):V;k(K,z,ue,null,$,U,q,Y,!0)}},P=(A,O,V,$,U)=>{if(O!==V){if(O!==Fe)for(const q in O)!si(q)&&!(q in V)&&i(A,q,O[q],null,U,$);for(const q in V){if(si(q))continue;const Y=V[q],G=O[q];Y!==G&&q!=="value"&&i(A,q,G,Y,U,$)}"value"in V&&i(A,"value",O.value,V.value,U)}},S=(A,O,V,$,U,q,Y,G,K)=>{const z=O.el=A?A.el:a(""),ue=O.anchor=A?A.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=O;ie&&(G=G?G.concat(ie):ie),A==null?(r(z,V,$),r(ue,V,$),y(O.children||[],V,ue,U,q,Y,G,K)):J>0&&J&64&&oe&&A.dynamicChildren?(b(A.dynamicChildren,oe,V,U,q,Y,G),(O.key!=null||U&&O===U.subTree)&&Bv(A,O,!0)):ne(A,O,V,ue,U,q,Y,G,K)},I=(A,O,V,$,U,q,Y,G,K)=>{O.slotScopeIds=G,A==null?O.shapeFlag&512?U.ctx.activate(O,V,$,Y,K):ge(O,V,$,U,q,Y,K):ve(A,O,K)},ge=(A,O,V,$,U,q,Y)=>{const G=A.component=kA(A,$,U);if(oa(A)&&(G.ctx.renderer=re),OA(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,Z,Y),!A.el){const K=G.subTree=we(it);N(null,K,O,V)}}else Z(G,A,O,V,U,q,Y)},ve=(A,O,V)=>{const $=O.component=A.component;if(yA(A,O,V))if($.asyncDep&&!$.asyncResolved){se($,O,V);return}else $.next=O,$.update();else O.el=A.el,$.vnode=O},Z=(A,O,V,$,U,q,Y)=>{const G=()=>{if(A.isMounted){let{next:J,bu:oe,u:ie,parent:fe,vnode:Pe}=A;{const It=jv(A);if(It){J&&(J.el=Pe.el,se(A,J,Y)),It.asyncDep.then(()=>{A.isUnmounted||G()});return}}let Se=J,Tt;us(A,!1),J?(J.el=Pe.el,se(A,J,Y)):J=Pe,oe&&ii(oe),(Tt=J.props&&J.props.onVnodeBeforeUpdate)&&zt(Tt,fe,J,Pe),us(A,!0);const ht=Su(A),dt=A.subTree;A.subTree=ht,k(dt,ht,d(dt.el),B(dt),A,U,q),J.el=ht.el,Se===null&&gl(A,ht.el),ie&&gt(ie,U),(Tt=J.props&&J.props.onVnodeUpdated)&&gt(()=>zt(Tt,fe,J,Pe),U)}else{let J;const{el:oe,props:ie}=O,{bm:fe,m:Pe,parent:Se,root:Tt,type:ht}=A,dt=Fr(O);if(us(A,!1),fe&&ii(fe),!dt&&(J=ie&&ie.onVnodeBeforeMount)&&zt(J,Se,O),us(A,!0),oe&&Le){const It=()=>{A.subTree=Su(A),Le(oe,A.subTree,A,U,null)};dt&&ht.__asyncHydrate?ht.__asyncHydrate(oe,A,It):It()}else{Tt.ce&&Tt.ce._injectChildStyle(ht);const It=A.subTree=Su(A);k(null,It,V,$,A,U,q),O.el=It.el}if(Pe&&gt(Pe,U),!dt&&(J=ie&&ie.onVnodeMounted)){const It=O;gt(()=>zt(J,Se,It),U)}(O.shapeFlag&256||Se&&Fr(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&gt(A.a,U),A.isMounted=!0,O=V=$=null}};A.scope.on();const K=A.effect=new Hy(G);A.scope.off();const z=A.update=K.run.bind(K),ue=A.job=K.runIfDirty.bind(K);ue.i=A,ue.id=A.uid,K.scheduler=()=>qf(ue),us(A,!0),z()},se=(A,O,V)=>{O.component=A;const $=A.vnode.props;A.vnode=O,A.next=null,tA(A,O.props,$,V),iA(A,O.children,V),ts(),im(A),ns()},ne=(A,O,V,$,U,q,Y,G,K=!1)=>{const z=A&&A.children,ue=A?A.shapeFlag:0,J=O.children,{patchFlag:oe,shapeFlag:ie}=O;if(oe>0){if(oe&128){un(z,J,V,$,U,q,Y,G,K);return}else if(oe&256){We(z,J,V,$,U,q,Y,G,K);return}}ie&8?(ue&16&&Ht(z,U,q),J!==z&&h(V,J)):ue&16?ie&16?un(z,J,V,$,U,q,Y,G,K):Ht(z,U,q,!0):(ue&8&&h(V,""),ie&16&&y(J,V,$,U,q,Y,G,K))},We=(A,O,V,$,U,q,Y,G,K)=>{A=A||ni,O=O||ni;const z=A.length,ue=O.length,J=Math.min(z,ue);let oe;for(oe=0;oe<J;oe++){const ie=O[oe]=K?Rr(O[oe]):Yt(O[oe]);k(A[oe],ie,V,null,U,q,Y,G,K)}z>ue?Ht(A,U,q,!0,!1,J):y(O,V,$,U,q,Y,G,K,J)},un=(A,O,V,$,U,q,Y,G,K)=>{let z=0;const ue=O.length;let J=A.length-1,oe=ue-1;for(;z<=J&&z<=oe;){const ie=A[z],fe=O[z]=K?Rr(O[z]):Yt(O[z]);if(pn(ie,fe))k(ie,fe,V,null,U,q,Y,G,K);else break;z++}for(;z<=J&&z<=oe;){const ie=A[J],fe=O[oe]=K?Rr(O[oe]):Yt(O[oe]);if(pn(ie,fe))k(ie,fe,V,null,U,q,Y,G,K);else break;J--,oe--}if(z>J){if(z<=oe){const ie=oe+1,fe=ie<ue?O[ie].el:$;for(;z<=oe;)k(null,O[z]=K?Rr(O[z]):Yt(O[z]),V,fe,U,q,Y,G,K),z++}}else if(z>oe)for(;z<=J;)Ke(A[z],U,q,!0),z++;else{const ie=z,fe=z,Pe=new Map;for(z=fe;z<=oe;z++){const Mt=O[z]=K?Rr(O[z]):Yt(O[z]);Mt.key!=null&&Pe.set(Mt.key,z)}let Se,Tt=0;const ht=oe-fe+1;let dt=!1,It=0;const gr=new Array(ht);for(z=0;z<ht;z++)gr[z]=0;for(z=ie;z<=J;z++){const Mt=A[z];if(Tt>=ht){Ke(Mt,U,q,!0);continue}let nn;if(Mt.key!=null)nn=Pe.get(Mt.key);else for(Se=fe;Se<=oe;Se++)if(gr[Se-fe]===0&&pn(Mt,O[Se])){nn=Se;break}nn===void 0?Ke(Mt,U,q,!0):(gr[nn-fe]=z+1,nn>=It?It=nn:dt=!0,k(Mt,O[nn],V,null,U,q,Y,G,K),Tt++)}const Vs=dt?cA(gr):ni;for(Se=Vs.length-1,z=ht-1;z>=0;z--){const Mt=fe+z,nn=O[Mt],Fs=Mt+1<ue?O[Mt+1].el:$;gr[z]===0?k(null,nn,V,Fs,U,q,Y,G,K):dt&&(Se<0||z!==Vs[Se]?tn(nn,V,Fs,2):Se--)}}},tn=(A,O,V,$,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:z}=A;if(z&6){tn(A.component.subTree,O,V,$);return}if(z&128){A.suspense.move(O,V,$);return}if(z&64){Y.move(A,O,V,re);return}if(Y===Ot){r(q,O,V);for(let J=0;J<K.length;J++)tn(K[J],O,V,$);r(A.anchor,O,V);return}if(Y===_o){v(A,O,V);return}if($!==2&&z&1&&G)if($===0)G.beforeEnter(q),r(q,O,V),gt(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,fe=()=>r(q,O,V),Pe=()=>{J(q,()=>{fe(),ie&&ie()})};oe?oe(q,fe,Pe):Pe()}else r(q,O,V)},Ke=(A,O,V,$=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:z,shapeFlag:ue,patchFlag:J,dirs:oe,cacheIndex:ie}=A;if(J===-2&&(U=!1),G!=null&&Mo(G,null,V,A,!0),ie!=null&&(O.renderCache[ie]=void 0),ue&256){O.ctx.deactivate(A);return}const fe=ue&1&&oe,Pe=!Fr(A);let Se;if(Pe&&(Se=Y&&Y.onVnodeBeforeUnmount)&&zt(Se,O,A),ue&6)bn(A.component,V,$);else{if(ue&128){A.suspense.unmount(V,$);return}fe&&Rn(A,null,O,"beforeUnmount"),ue&64?A.type.remove(A,O,V,re,$):z&&!z.hasOnce&&(q!==Ot||J>0&&J&64)?Ht(z,O,V,!1,!0):(q===Ot&&J&384||!U&&ue&16)&&Ht(K,O,V),$&&Ge(A)}(Pe&&(Se=Y&&Y.onVnodeUnmounted)||fe)&&gt(()=>{Se&&zt(Se,O,A),fe&&Rn(A,null,O,"unmounted")},V)},Ge=A=>{const{type:O,el:V,anchor:$,transition:U}=A;if(O===Ot){mr(V,$);return}if(O===_o){R(A);return}const q=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(V,q);G?G(A.el,q,K):K()}else q()},mr=(A,O)=>{let V;for(;A!==O;)V=p(A),s(A),A=V;s(O)},bn=(A,O,V)=>{const{bum:$,scope:U,job:q,subTree:Y,um:G,m:K,a:z}=A;kc(K),kc(z),$&&ii($),U.stop(),q&&(q.flags|=8,Ke(Y,A,O,V)),G&&gt(G,O),gt(()=>{A.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Ht=(A,O,V,$=!1,U=!1,q=0)=>{for(let Y=q;Y<A.length;Y++)Ke(A[Y],O,V,$,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const O=p(A.anchor||A.el),V=O&&O[SI];return V?p(V):O};let ee=!1;const X=(A,O,V)=>{A==null?O._vnode&&Ke(O._vnode,null,null,!0):k(O._vnode||null,A,O,null,null,null,V),O._vnode=A,ee||(ee=!0,im(),Sc(),ee=!1)},re={p:k,um:Ke,m:tn,r:Ge,mt:ge,mc:y,pc:ne,pbc:b,n:B,o:t};let Te,Le;return e&&([Te,Le]=e(re)),{render:X,hydrate:Te,createApp:ZI(X,Te)}}function Ru({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Uv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bv(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Bv(o,a)),a.type===bs&&(a.el=o.el)}}function cA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jv(e)}function kc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const lA=Symbol.for("v-scx"),uA=()=>Nt(lA);function hA(t,e){return Qf(t,null,e)}function gn(t,e,n){return Qf(t,e,n)}function Qf(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=st({},n),l=e&&r||!e&&i!=="post";let u;if(_i){if(i==="sync"){const g=uA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=On,g.resume=On,g.pause=On,g}}const h=ot;a.call=(g,w,k)=>yn(g,h,w,k);let d=!1;i==="post"?a.scheduler=g=>{gt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,w)=>{w?g():qf(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=II(t,e,a);return _i&&(u?u.push(p):l&&p()),p}function fA(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?$v(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=ca(this),a=Qf(s,i.bind(r),n);return o(),a}function $v(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const dA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${Os(e)}Modifiers`];function pA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&dA(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ze(h)?h.trim():h)),o.number&&(s=n.map(bc)));let a,l=r[a=_u(e)]||r[a=_u(ln(e))];!l&&i&&(l=r[a=_u(Os(e))]),l&&yn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(u,t,6,s)}}function Hv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const h=Hv(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Me(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):st(o,i),Me(t)&&r.set(t,o),o)}function ml(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Os(e))||xe(t,e))}function Su(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:w,inheritAttrs:k}=t,x=Cc(t);let N,C;try{if(n.shapeFlag&4){const R=s||r,D=R;N=Yt(u.call(D,R,h,d,g,p,w)),C=a}else{const R=e;N=Yt(R.length>1?R(d,{attrs:a,slots:o,emit:l}):R(d,null)),C=e.props?a:gA(a)}}catch(R){yo.length=0,Ni(R,t,1),N=we(it)}let v=N;if(C&&k!==!1){const R=Object.keys(C),{shapeFlag:D}=v;R.length&&D&7&&(i&&R.some(Of)&&(C=_A(C,i)),v=sr(v,C,!1,!0))}return n.dirs&&(v=sr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&mi(v,n.transition),N=v,Cc(x),N}function mA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Is(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const gA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},_A=(t,e)=>{const n={};for(const r in t)(!Of(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mm(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!ml(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mm(r,o,u):!0:!!o;return!1}function mm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ml(n,i))return!0}return!1}function gl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Oc=t=>t.__isSuspense;let gh=0;const vA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)EA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}wA(t,e,n,r,s,o,a,l,u)}},hydrate:bA,normalize:TA},Yf=vA;function Fo(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function EA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=qv(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Fo(t,"onPending"),Fo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ai(p,t.ssFallback)):p.resolve(!1,!0)}function wA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:w,pendingBranch:k,isInFallback:x,isHydrating:N}=d;if(k)d.pendingBranch=p,pn(p,k)?(l(k,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():x&&(N||(l(w,g,n,r,s,null,i,o,a),ai(d,g)))):(d.pendingId=gh++,N?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),x?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(w,g,n,r,s,null,i,o,a),ai(d,g))):w&&pn(p,w)?(l(w,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(w&&pn(p,w))l(w,p,n,r,s,d,i,o,a),ai(d,p);else if(Fo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=gh++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:C,pendingId:v}=d;C>0?setTimeout(()=>{d.pendingId===v&&d.fallback(g)},C):C===0&&d.fallback(g)}}function qv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:w,o:{parentNode:k,remove:x}}=u;let N;const C=IA(t);C&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const v=t.props?Fy(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:gh++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,T=!1){const{vnode:y,activeBranch:_,pendingBranch:b,pendingId:P,effects:S,parentComponent:I,container:ge}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:M||(ve=_&&b.transition&&b.transition.mode==="out-in",ve&&(_.transition.afterLeave=()=>{P===D.pendingId&&(p(b,ge,i===R?w(_):i,0),uh(S))}),_&&(k(_.el)===ge&&(i=w(_)),g(_,I,D,!0)),ve||p(b,ge,i,0)),ai(D,b),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...S),se=!0;break}Z=Z.parent}!se&&!ve&&uh(S),D.effects=[],C&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),Fo(y,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:T,activeBranch:y,parentComponent:_,container:b,namespace:P}=D;Fo(T,"onFallback");const S=w(y),I=()=>{D.isInFallback&&(d(null,M,b,S,_,null,P,a,l),ai(D,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(y.transition.afterLeave=I),D.isInFallback=!0,g(y,_,null,!0),ge||I()},move(M,T,y){D.activeBranch&&p(D.activeBranch,M,T,y),D.container=M},next(){return D.activeBranch&&w(D.activeBranch)},registerDep(M,T,y){const _=!!D.pendingBranch;_&&D.deps++;const b=M.vnode.el;M.asyncDep.catch(P=>{Ni(P,M,0)}).then(P=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:S}=M;yh(M,P,!1),b&&(S.el=b);const I=!b&&M.subTree.el;T(M,S,k(b||M.subTree.el),b?null:w(M.subTree),D,o,y),I&&x(I),gl(M,S.el),_&&--D.deps===0&&D.resolve()})},unmount(M,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,T),D.pendingBranch&&g(D.pendingBranch,n,M,T)}};return D}function bA(t,e,n,r,s,i,o,a,l){const u=e.suspense=qv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function TA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=gm(r?n.default:n),t.ssFallback=r?gm(n.fallback):we(it)}function gm(t){let e;if(pe(t)){const n=gi&&t._c;n&&(t._d=!1,$t()),t=t(),n&&(t._d=!0,e=Gt,Wv())}return le(t)&&(t=mA(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function zv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):uh(t)}function ai(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,gl(r,s))}function IA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ot=Symbol.for("v-fgt"),bs=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),yo=[];let Gt=null;function $t(t=!1){yo.push(Gt=t?null:[])}function Wv(){yo.pop(),Gt=yo[yo.length-1]||null}let gi=1;function _m(t,e=!1){gi+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function Kv(t){return t.dynamicChildren=gi>0?Gt||ni:null,Wv(),gi>0&&Gt&&Gt.push(t),t}function Uo(t,e,n,r,s,i){return Kv(He(t,e,n,r,s,i,!0))}function Qn(t,e,n,r,s){return Kv(we(t,e,n,r,s,!0))}function Is(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const Gv=({key:t})=>t??null,ic=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Je(t)||pe(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gv(e),ref:e&&ic(e),scopeId:uv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return a?(Xf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),gi>0&&!o&&Gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Gt.push(l),l}const we=AA;function AA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Iv)&&(t=it),Is(t)){const a=sr(t,e,!0);return n&&Xf(a,n),gi>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag=-2,a}if(LA(t)&&(t=t.__vccOpts),e){e=RA(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=na(a)),Me(l)&&($f(l)&&!le(l)&&(l=st({},l)),e.style=ul(l))}const o=ze(t)?1:Oc(t)?128:hv(t)?64:Me(t)?4:pe(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function RA(t){return t?$f(t)||Ov(t)?st({},t):t:null}function sr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Qv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Gv(u),ref:e&&e.ref?n&&i?le(i)?i.concat(ic(e)):[i,ic(e)]:ic(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&mi(h,l.clone(h)),h}function sn(t=" ",e=0){return we(bs,null,t,e)}function NU(t,e){const n=we(_o,null,t);return n.staticCount=e,n}function SA(t="",e=!1){return e?($t(),Qn(it,null,t)):we(it,null,t)}function Yt(t){return t==null||typeof t=="boolean"?we(it):le(t)?we(Ot,null,t.slice()):Is(t)?Rr(t):we(bs,null,String(t))}function Rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sr(t)}function Xf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ov(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[sn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=na([e.class,r.class]));else if(s==="style")e.style=ul([e.style,r.style]);else if(ta(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){yn(t,e,7,[n,r])}const CA=Cv();let PA=0;function kA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||CA,i={uid:PA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $y(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nv(r,s),emitsOptions:Hv(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pA.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const _l=()=>ot||ct;let xc,_h;{const t=ll(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};xc=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),_h=e("__VUE_SSR_SETTERS__",n=>_i=n)}const ca=t=>{const e=ot;return xc(t),t.scope.on(),()=>{t.scope.off(),xc(e)}},ym=()=>{ot&&ot.scope.off(),xc(null)};function Yv(t){return t.vnode.shapeFlag&4}let _i=!1;function OA(t,e=!1,n=!1){e&&_h(e);const{props:r,children:s}=t.vnode,i=Yv(t);eA(t,r,i,e),sA(t,s,n);const o=i?xA(t,e):void 0;return e&&_h(!1),o}function xA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,WI);const{setup:r}=n;if(r){ts();const s=t.setupContext=r.length>1?DA(t):null,i=ca(t),o=ia(r,t,0,[t.props,s]),a=Dy(o);if(ns(),i(),(a||t.sp)&&!Fr(t)&&zf(t),a){if(o.then(ym,ym),e)return o.then(l=>{yh(t,l,e)}).catch(l=>{Ni(l,t,0)});t.asyncDep=o}else yh(t,o,e)}else Xv(t,e)}function yh(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=iv(e)),Xv(t,n)}let vm;function Xv(t,e,n){const r=t.type;if(!t.render){if(!e&&vm&&!r.render){const s=r.template||Wf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=st(st({isCustomElement:i,delimiters:a},o),l);r.render=vm(s,u)}}t.render=r.render||On}{const s=ca(t);ts();try{KI(t)}finally{ns(),s()}}}const NA={get(t,e){return Pt(t,"get",""),t[e]}};function DA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,NA),slots:t.slots,emit:t.emit,expose:e}}function yl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(iv(Hf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in go)return go[n](t)},has(e,n){return n in e||n in go}})):t.proxy}function vh(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function LA(t){return pe(t)&&"__vccOpts"in t}const Ue=(t,e)=>bI(t,e,_i);function vt(t,e,n){const r=arguments.length;return r===2?Me(e)&&!le(e)?Is(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Is(n)&&(n=[n]),we(t,e,n))}const Jv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Eh;const Em=typeof window<"u"&&window.trustedTypes;if(Em)try{Eh=Em.createPolicy("vue",{createHTML:t=>t})}catch{}const Zv=Eh?t=>Eh.createHTML(t):t=>t,MA="http://www.w3.org/2000/svg",VA="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,wm=Wn&&Wn.createElement("template"),FA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Wn.createElementNS(MA,t):e==="mathml"?Wn.createElementNS(VA,t):n?Wn.createElement(t,{is:n}):Wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wm.innerHTML=Zv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=wm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Er="transition",to="animation",Bo=Symbol("_vtc"),eE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},UA=st({},fv,eE),BA=t=>(t.displayName="Transition",t.props=UA,t),tE=BA((t,{slots:e})=>vt(kI,jA(t),e)),hs=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},bm=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function jA(t){const e={};for(const S in t)S in eE||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=$A(s),k=w&&w[0],x=w&&w[1],{onBeforeEnter:N,onEnter:C,onEnterCancelled:v,onLeave:R,onLeaveCancelled:D,onBeforeAppear:M=N,onAppear:T=C,onAppearCancelled:y=v}=e,_=(S,I,ge,ve)=>{S._enterCancelled=ve,fs(S,I?h:a),fs(S,I?u:o),ge&&ge()},b=(S,I)=>{S._isLeaving=!1,fs(S,d),fs(S,g),fs(S,p),I&&I()},P=S=>(I,ge)=>{const ve=S?T:C,Z=()=>_(I,S,ge);hs(ve,[I,Z]),Tm(()=>{fs(I,S?l:i),qn(I,S?h:a),bm(ve)||Im(I,r,k,Z)})};return st(e,{onBeforeEnter(S){hs(N,[S]),qn(S,i),qn(S,o)},onBeforeAppear(S){hs(M,[S]),qn(S,l),qn(S,u)},onEnter:P(!1),onAppear:P(!0),onLeave(S,I){S._isLeaving=!0;const ge=()=>b(S,I);qn(S,d),S._enterCancelled?(qn(S,p),Sm()):(Sm(),qn(S,p)),Tm(()=>{S._isLeaving&&(fs(S,d),qn(S,g),bm(R)||Im(S,r,x,ge))}),hs(R,[S,ge])},onEnterCancelled(S){_(S,!1,void 0,!0),hs(v,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),hs(y,[S])},onLeaveCancelled(S){b(S),hs(D,[S])}})}function $A(t){if(t==null)return null;if(Me(t))return[Cu(t.enter),Cu(t.leave)];{const e=Cu(t);return[e,e]}}function Cu(t){return Fy(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bo]||(t[Bo]=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bo];n&&(n.delete(e),n.size||(t[Bo]=void 0))}function Tm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let HA=0;function Im(t,e,n,r){const s=t._endId=++HA,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=qA(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function qA(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${Er}Delay`),i=r(`${Er}Duration`),o=Am(s,i),a=r(`${to}Delay`),l=r(`${to}Duration`),u=Am(a,l);let h=null,d=0,p=0;e===Er?o>0&&(h=Er,d=o,p=i.length):e===to?u>0&&(h=to,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?Er:to:null,p=h?h===Er?i.length:l.length:0);const g=h===Er&&/\b(transform|all)(,|$)/.test(r(`${Er}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function Am(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rm(n)+Rm(t[r])))}function Rm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Sm(){return document.body.offsetHeight}function zA(t,e,n){const r=t[Bo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cm=Symbol("_vod"),WA=Symbol("_vsh"),KA=Symbol(""),GA=/(^|;)\s*display\s*:/;function QA(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&oc(r,a,"")}else for(const o in e)n[o]==null&&oc(r,o,"");for(const o in n)o==="display"&&(i=!0),oc(r,o,n[o])}else if(s){if(e!==n){const o=r[KA];o&&(n+=";"+o),r.cssText=n,i=GA.test(n)}}else e&&t.removeAttribute("style");Cm in t&&(t[Cm]=i?r.display:"",t[WA]&&(r.display="none"))}const Pm=/\s*!important$/;function oc(t,e,n){if(le(n))n.forEach(r=>oc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=YA(t,e);Pm.test(n)?t.setProperty(Os(r),n.replace(Pm,""),"important"):t[r]=n}}const km=["Webkit","Moz","ms"],Pu={};function YA(t,e){const n=Pu[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return Pu[e]=r;r=cl(r);for(let s=0;s<km.length;s++){const i=km[s]+r;if(i in t)return Pu[e]=i}return e}const Om="http://www.w3.org/1999/xlink";function xm(t,e,n,r,s,i=WT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Om,e.slice(6,e.length)):t.setAttributeNS(Om,e,n):n==null||i&&!Uy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":_n(n)?String(n):n)}function Nm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Uy(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Pr(t,e,n,r){t.addEventListener(e,n,r)}function XA(t,e,n,r){t.removeEventListener(e,n,r)}const Dm=Symbol("_vei");function JA(t,e,n,r,s=null){const i=t[Dm]||(t[Dm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=ZA(e);if(r){const u=i[e]=n1(r,s);Pr(t,a,u,l)}else o&&(XA(t,a,o,l),i[e]=void 0)}}const Lm=/(?:Once|Passive|Capture)$/;function ZA(t){let e;if(Lm.test(t)){e={};let r;for(;r=t.match(Lm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Os(t.slice(2)),e]}let ku=0;const e1=Promise.resolve(),t1=()=>ku||(e1.then(()=>ku=0),ku=Date.now());function n1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(r1(r,n.value),e,5,[r])};return n.value=t,n.attached=t1(),n}function r1(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,s1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?zA(t,r,o):e==="style"?QA(t,n,r):ta(e)?Of(e)||JA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):i1(t,e,r,o))?(Nm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Nm(t,ln(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xm(t,e,r,o))};function i1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mm(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mm(e)&&ze(n)?!1:e in t}const yi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ii(e,n):e};function o1(t){t.target.composing=!0}function Vm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rr=Symbol("_assign"),DU={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rr]=yi(s);const i=r||s.props&&s.props.type==="number";Pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=bc(a)),t[rr](a)}),n&&Pr(t,"change",()=>{t.value=t.value.trim()}),e||(Pr(t,"compositionstart",o1),Pr(t,"compositionend",Vm),Pr(t,"change",Vm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rr]=yi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?bc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},LU={deep:!0,created(t,e,n){t[rr]=yi(n),Pr(t,"change",()=>{const r=t._modelValue,s=jo(t),i=t.checked,o=t[rr];if(le(r)){const a=Df(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Oi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(nE(t,i))})},mounted:Fm,beforeUpdate(t,e,n){t[rr]=yi(n),Fm(t,e,n)}};function Fm(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Df(e,r.props.value)>-1;else if(Oi(e))s=e.has(r.props.value);else{if(e===n)return;s=ra(e,nE(t,!0))}t.checked!==s&&(t.checked=s)}const MU={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Oi(e);Pr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?bc(jo(o)):jo(o));t[rr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Un(()=>{t._assigning=!1})}),t[rr]=yi(r)},mounted(t,{value:e}){Um(t,e)},beforeUpdate(t,e,n){t[rr]=yi(n)},updated(t,{value:e}){t._assigning||Um(t,e)}};function Um(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Oi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=jo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Df(e,a)>-1}else o.selected=e.has(a);else if(ra(jo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function jo(t){return"_value"in t?t._value:t.value}function nE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const a1=["ctrl","shift","alt","meta"],c1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>a1.some(n=>t[`${n}Key`]&&!e.includes(n))},VU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=c1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},rE=st({patchProp:s1},FA);let vo,Bm=!1;function l1(){return vo||(vo=oA(rE))}function u1(){return vo=Bm?vo:aA(rE),Bm=!0,vo}const h1=(...t)=>{const e=l1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=iE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,sE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},f1=(...t)=>{const e=u1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=iE(r);if(s)return n(s,!0,sE(s))},e};function sE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function iE(t){return ze(t)?document.querySelector(t):t}const d1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,p1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,m1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function g1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){_1(t);return}return e}function _1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function $o(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!m1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(d1.test(t)||p1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,g1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const y1=/#/g,v1=/&/g,E1=/\//g,w1=/=/g,Jf=/\+/g,b1=/%5e/gi,T1=/%60/gi,I1=/%7c/gi,A1=/%20/gi;function R1(t){return encodeURI(""+t).replace(I1,"|")}function wh(t){return R1(typeof t=="string"?t:JSON.stringify(t)).replace(Jf,"%2B").replace(A1,"+").replace(y1,"%23").replace(v1,"%26").replace(T1,"`").replace(b1,"^").replace(E1,"%2F")}function Ou(t){return wh(t).replace(w1,"%3D")}function Nc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function S1(t){return Nc(t.replace(Jf," "))}function C1(t){return Nc(t.replace(Jf," "))}function oE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=S1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=C1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function P1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ou(t)}=${wh(n)}`).join("&"):`${Ou(t)}=${wh(e)}`:Ou(t)}function k1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>P1(e,t[e])).filter(Boolean).join("&")}const O1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,x1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,N1=/^([/\\]\s*){2,}[^/\\]/,D1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,L1=/\/$|\/\?|\/#/,M1=/^\.?\//;function dr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?O1.test(t):x1.test(t)||(e.acceptRelative?N1.test(t):!1)}function V1(t){return!!t&&D1.test(t)}function bh(t="",e){return e?L1.test(t):t.endsWith("/")}function vl(t="",e){if(!e)return(bh(t)?t.slice(0,-1):t)||"/";if(!bh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Dc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(bh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function F1(t=""){return t.startsWith("/")}function jm(t=""){return F1(t)?t:"/"+t}function U1(t,e){if(cE(e)||dr(t))return t;const n=vl(e);return t.startsWith(n)?t:El(n,t)}function $m(t,e){if(cE(e))return t;const n=vl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function aE(t,e){const n=$1(t),r={...oE(n.search),...e};return n.search=k1(r),H1(n)}function cE(t){return!t||t==="/"}function B1(t){return t&&t!=="/"}function El(t,...e){let n=t||"";for(const r of e.filter(s=>B1(s)))if(n){const s=r.replace(M1,"");n=Dc(n)+s}else n=r;return n}function lE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&dr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function j1(t,e,n={}){return n.trailingSlash||(t=Dc(t),e=Dc(e)),n.leadingSlash||(t=jm(t),e=jm(e)),n.encoding||(t=Nc(t),e=Nc(e)),t===e}const uE=Symbol.for("ufo:protocolRelative");function $1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!dr(t,{acceptRelative:!0}))return Hm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=Hm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[uE]:!r}}function Hm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function H1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[uE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class q1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function z1(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new q1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,w]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[w]}});return a}const W1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function qm(t="GET"){return W1.has(t.toUpperCase())}function K1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const G1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Q1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Y1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Q1.test(e)?"json":G1.has(e)||e.startsWith("text/")?"text":"blob"}function X1(t,e,n,r){const s=J1((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function J1(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Ha(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const Z1=new Set([408,409,425,429,500,502,503,504]),eR=new Set([101,204,205,304]);function hE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=qm(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):Z1.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=z1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:X1(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Ha(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=U1(h.request,h.options.baseURL)),h.options.query&&(h.request=aE(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&qm(h.options.method)&&(K1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const g=new r;d=setTimeout(()=>{const w=new Error("[TimeoutError]: The operation was aborted due to timeout");w.name="TimeoutError",w.code=23,g.abort(w)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await Ha(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!eR.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||Y1(h.response.headers.get("content-type")||"");switch(g){case"json":{const w=await h.response.text(),k=h.options.parseResponse||$o;h.response._data=k(w);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await Ha(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Ha(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>hE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Lc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),tR=Lc.fetch?(...t)=>Lc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),nR=Lc.Headers,rR=Lc.AbortController,sR=hE({fetch:tR,Headers:nR,AbortController:rR}),iR=sR,oR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Mc=oR().app,aR=()=>Mc.baseURL,cR=()=>Mc.buildAssetsDir,Zf=(...t)=>lE(ed(),cR(),...t),ed=(...t)=>{const e=Mc.cdnURL||Mc.baseURL;return t.length?lE(e,...t):e};globalThis.__buildAssetsURL=Zf,globalThis.__publicAssetsURL=ed;globalThis.$fetch||(globalThis.$fetch=iR.create({baseURL:aR()}));function Th(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Th(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const lR={run:t=>t()},uR=()=>lR,fE=typeof console.createTask<"u"?console.createTask:uR;function hR(t,e){const n=e.shift(),r=fE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function fR(t,e){const n=e.shift(),r=fE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function xu(t,e){for(const n of[...t])n(e)}class dR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Th(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Th(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(hR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(fR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&xu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&xu(this._after,s)}):(this._after&&s&&xu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function dE(){return new dR}function pR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Ih.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Ih.delete(u)}}}}function mR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=pR({...t,...r})),e[n]}}}const Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},zm="__unctx__",gR=Vc[zm]||(Vc[zm]=mR()),_R=(t,e={})=>gR.get(t,e),Wm="__unctx_async_handlers__",Ih=Vc[Wm]||(Vc[Wm]=new Set);function ci(t){const e=[];for(const s of Ih){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ah={name:"page",mode:"out-in"},yR=!1,vR=!1,ER={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},wR=null,bR="#__nuxt",pE="nuxt-app",Km=36e5,TR="vite:preloadError";function mE(t=pE){return _R(t,{asyncContext:!1})}const IR="__nuxt_plugin";function AR(t){var s;let e=0;const n={_id:t.id||pE||"nuxt-app",_scope:Mf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.0"},get vue(){return n.vueApp.version}},payload:Xn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Xn({}),state:hr({}),once:new Set,_errors:Xn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!sa()?n._scope.run(()=>Gm(n,i)):Gm(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Xn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=dE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;qa(n,a,o),qa(n.vueApp.config.globalProperties,a,o)},qa(n.vueApp,"$nuxt",n),qa(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(TR,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||De;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function RR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function SR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function CR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=SR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)RR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[IR]:!0,_name:e})}function Gm(t,e,n){const r=()=>e();return mE(t._id).set(t),t.vueApp.runWithContext(r)}function PR(t){var n;let e;return Kf()&&(e=(n=_l())==null?void 0:n.appContext.app.$nuxt),e=e||mE(t).tryUse(),e||null}function De(t){const e=PR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function xs(t){return De().$config}function qa(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function kR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||OR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=xR(u,s)}i=a+1}return n}function OR(t){return t.includes("%")?decodeURIComponent(t):t}function xR(t,e){try{return e(t)}catch{return t}}const za=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Qm(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!za.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!za.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!za.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!za.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!NR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function NR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Ym=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Xm(t,e){e?e={...Ym,...e}:e=Ym;const n=gE(e);return n.dispatch(t),n.toString()}const DR=Object.freeze(["prototype","__proto__","constructor"]);function gE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!Jm(s)&&(h=DR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=gE(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),Jm(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const _E="[native code] }",LR=_E.length;function Jm(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-LR)===_E}function MR(t,e,n={}){return t===e||Xm(t,n)===Xm(e,n)}function VR(t,e){return{ctx:{table:t},matchAll:n=>vE(n,t)}}function yE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,yE(s)])):new Map(Object.entries(t[n]));return e}function FR(t){return VR(yE(t))}function vE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Zm(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Zm(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...vE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Zm(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Nu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Rh(t,e,n=".",r){if(!Nu(e))return Rh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Nu(o)&&Nu(s[i])?s[i]=Rh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function UR(t){return(...e)=>e.reduce((n,r)=>Rh(n,r,"",t),{})}const EE=UR();function BR(t,e){try{return e in t}catch{return!1}}var jR=Object.defineProperty,$R=(t,e,n)=>e in t?jR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ms=(t,e,n)=>($R(t,typeof e!="symbol"?e+"":e,n),n);class Sh extends Error{constructor(e,n={}){super(e,n),ms(this,"statusCode",500),ms(this,"fatal",!1),ms(this,"unhandled",!1),ms(this,"statusMessage"),ms(this,"data"),ms(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Ph(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=wE(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}ms(Sh,"__h3_error__",!0);function Ch(t){if(typeof t=="string")return new Sh(t);if(HR(t))return t;const e=new Sh(t.message??t.statusMessage??"",{cause:t.cause||t});if(BR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Ph(t.statusCode,e.statusCode):t.status&&(e.statusCode=Ph(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;wE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function HR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const qR=/[^\u0009\u0020-\u007E]/g;function wE(t=""){return t.replace(qR,"")}function Ph(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const bE=Symbol("layout-meta"),la=Symbol("route"),wt=()=>{var t;return(t=De())==null?void 0:t.$router},td=()=>Kf()?Nt(la,De()._route):De()._route;function FU(t){return t}const zR=()=>{try{if(De()._processingMiddleware)return!0}catch{return!1}return!1},WR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?kh(t):wt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=dr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&V1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=zR();if(!s&&i)return e!=null&&e.replace?typeof t=="string"?{path:t,replace:!0}:{...t,replace:!0}:t;const o=wt(),a=De();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function kh(t){return aE(t.path||"",t.query||{})+(t.hash||"")}const TE="__nuxt_error",wl=()=>EI(De().payload,"error"),Zs=t=>{const e=bl(t);try{const n=De(),r=wl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},IE=async(t={})=>{const e=De(),n=wl();e.callHook("app:error:cleared",t),t.redirect&&await wt().replace(t.redirect),n.value=wR},KR=t=>!!t&&typeof t=="object"&&TE in t,bl=t=>{const e=Ch(t);return Object.defineProperty(e,TE,{value:!0,configurable:!1,writable:!1}),e};function eg(t){const e=QR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const GR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function QR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=GR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const YR=-1,XR=-2,JR=-3,ZR=-4,eS=-5,tS=-6;function nS(t,e){return rS(JSON.parse(t),e)}function rS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===YR)return;if(i===JR)return NaN;if(i===ZR)return 1/0;if(i===eS)return-1/0;if(i===tS)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],w=a[1],k=eg(w),x=new g(k);r[i]=x;break}case"ArrayBuffer":{const g=a[1],w=eg(g);r[i]=w;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==XR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const sS=new Set(["title","titleTemplate","script","style","noscript"]),ac=new Set(["base","meta","link","style","script","noscript"]),iS=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),oS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),AE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),aS=typeof window<"u";function Fc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Oh(t){if(t._h)return t._h;if(t._d)return Fc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Fc(e)}function cS(t,e){return t instanceof Promise?t.then(e):e(t)}function xh(t,e,n,r){const s=r||SE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>xh(t,e,n,o));const i={tag:t,props:s};for(const o of AE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||sS.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function lS(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function RE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=lS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,RE(t,e,n,s)));if(!e&&!AE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function SE(t,e=!1){const n=RE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const uS=10;function CE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,CE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function hS(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!iS.has(s))){if(Array.isArray(i)){for(const o of i)e.push(xh(s,o,t));continue}e.push(xh(s,i,t))}}if(e.length===0)return[];const r=[];return cS(CE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<uS)+i,s)))}const tg=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),ng={base:-10,title:10},rg={critical:-80,high:-10,low:20};function Uc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in ng&&(n=ng[t.tag]),e&&e in rg?n+rg[e]:n}const fS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],dS=["name","property","http-equiv"];function PE(t){const{props:e,tag:n}=t;if(oS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of dS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Sr="%separator";function pS(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const mS=new RegExp(`${Sr}(?:\\s*${Sr})*`,"g");function Wa(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Sr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Sr||!i.includes(a))return a;const l=pS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Sr)&&(t=t.slice(0,-Sr.length)),t.startsWith(Sr)&&(t=t.slice(Sr.length)),t=t.replace(mS,n).trim()),t}function sg(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function kE(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:ac.has(p.tag)?Oh(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const g of["body","head"]){const w=(d=n[g])==null?void 0:d.children;for(const k of w){const x=k.tagName.toLowerCase();if(!ac.has(x))continue;const N={tag:x,props:await SE(k.getAttributeNames().reduce((D,M)=>({...D,[M]:k.getAttribute(M)}),{})),innerHTML:k.innerHTML},C=PE(N);let v=C,R=1;for(;v&&p.has(v);)v=`${C}:${R++}`;v&&(N._d=v,p.add(v)),o.elMap[k.getAttribute("data-hid")||Oh(N)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,g,w){const k=`${p}:${g}`;o.sideEffects[k]=w,delete o.pendingSideEffects[k]}function l({id:p,$el:g,tag:w}){const k=w.tag.endsWith("Attrs");if(o.elMap[p]=g,k||(w.textContent&&w.textContent!==g.textContent&&(g.textContent=w.textContent),w.innerHTML&&w.innerHTML!==g.innerHTML&&(g.innerHTML=w.innerHTML),a(p,"el",()=>{var x;(x=o.elMap[p])==null||x.remove(),delete o.elMap[p]})),w._eventHandlers)for(const x in w._eventHandlers)Object.prototype.hasOwnProperty.call(w._eventHandlers,x)&&g.getAttribute(`data-${x}`)!==""&&((w.tag==="bodyAttrs"?n.defaultView:g).addEventListener(x.substring(2),w._eventHandlers[x].bind(g)),g.setAttribute(`data-${x}`,""));for(const x in w.props){if(!Object.prototype.hasOwnProperty.call(w.props,x))continue;const N=w.props[x],C=`attr:${x}`;if(x==="class"){if(!N)continue;for(const v of N.split(" "))k&&a(p,`${C}:${v}`,()=>g.classList.remove(v)),!g.classList.contains(v)&&g.classList.add(v)}else if(x==="style"){if(!N)continue;for(const v of N.split(";")){const R=v.indexOf(":"),D=v.substring(0,R).trim(),M=v.substring(R+1).trim();a(p,`${C}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,M)}}else g.getAttribute(x)!==N&&g.setAttribute(x,N===!0?"":String(N)),k&&a(p,C,()=>g.removeAttribute(x))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:g,shouldRender:w,id:k}=p;if(w){if(g.tag==="title"){n.title=g.textContent;continue}p.$el=p.$el||o.elMap[k],p.$el?l(p):ac.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function gS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>kE(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function _S(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{gS(i,t)}}}}}const yS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),vS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=PE(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Oh(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&yS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Uc(r)>Uc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&ac.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},ES=new Set(["script","link","bodyAttrs"]),wS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!ES.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&tg.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Fc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);tg.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),bS=new Set(["link","style","script","noscript"]),TS={hooks:{"tag:normalise":({tag:t})=>{t.key&&bS.has(t.tag)&&(t.props["data-hid"]=t._h=Fc(t.key))}}},IS={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},AS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of fS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Uc(n),i=Uc(r);return s<i?-1:s>i?1:n._p-r._p})}}},RS={meta:"content",link:"href",htmlAttrs:"lang"},SS=["innerHTML","textContent"],CS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Wa(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=RS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Wa(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of SS)typeof a[u]=="string"&&(a[u]=Wa(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Wa(n.textContent,t._templateParams,t._separator))}}}),PS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=sg(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=sg(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},kS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};function OS(t={}){const e=xS(t);return e.use(_S()),e}function ig(t,e){return!t||t==="server"&&e||t==="client"&&!e}function xS(t={}){const e=dE();e.addHooks(t.hooks||{}),t.document=t.document||(aS?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),ig(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return ig(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const p of i)p._i===h._i&&(p.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await hS(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[vS,IS,wS,TS,AS,CS,PS,kS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}const NS=Jv[0]==="3";function DS(t){return typeof t=="function"?t():Qe(t)}function Nh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=DS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Nh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Nh(e[r])}return n}return e}const LS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Nh(e.input)}}},MS="usehead";function VS(t){return{install(n){NS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(MS,t))}}.install}function FS(t={}){t.domDelayFn=t.domDelayFn||(n=>Un(()=>setTimeout(()=>n(),0)));const e=OS(t);return e.use(LS),e.install=VS(e),e}const US=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},BS="__unhead_injection_handler__";function jS(t){US[BS]=t}const $S="modulepreload",HS=function(t,e){return new URL(t,e).href},og={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=HS(u,r),u in og)return;og[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const k=o[w];if(k.href===u&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":$S,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((w,k)=>{g.addEventListener("load",w),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let cc,lc;function qS(){return cc=$fetch(Zf(`builds/meta/${xs().app.buildId}.json`),{responseType:"json"}),cc.then(t=>{lc=FR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),cc}function Tl(){return cc||qS()}async function nd(t){const e=typeof t=="string"?t:t.path;if(await Tl(),!lc)return console.error("[nuxt] Error creating app manifest matcher.",lc),{};try{return EE({},...lc.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function ag(t,e={}){const n=await WS(t,e),r=De(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=xE(t).then(i=>i?OE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const zS="_payload.json";async function WS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||dr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=xs(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await xE(t)?i:r.app.baseURL;return El(o,n.pathname,zS+(s?`?${s}`:""))}async function OE(t){const e=fetch(t).then(n=>n.text().then(NE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function xE(t=td().path){const e=De();return t=vl(t),(await Tl()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await nd({path:t});return!!r.prerender&&!r.redirect})}let ds=null;async function KS(){var r;if(ds)return ds;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await NE(t.textContent||""),n=t.dataset.src?await OE(t.dataset.src):void 0;return ds={...e,...n,...window.__NUXT__},(r=ds.config)!=null&&r.public&&(ds.config.public=hr(ds.config.public)),ds}async function NE(t){return await nS(t,De()._payloadRevivers)}function GS(t,e){De()._payloadRevivers[t]=e}const QS=[["NuxtError",t=>bl(t)],["EmptyShallowRef",t=>Do(t==="_"?void 0:t==="0n"?BigInt(0):$o(t))],["EmptyRef",t=>Et(t==="_"?void 0:t==="0n"?BigInt(0):$o(t))],["ShallowRef",t=>Do(t)],["ShallowReactive",t=>Xn(t)],["Ref",t=>Et(t)],["Reactive",t=>hr(t)]],YS=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of QS)GS(r,s);Object.assign(t.payload,([e,n]=ci(()=>t.runWithContext(KS)),e=await e,n(),e)),window.__NUXT__=t.payload}});let XS;function JS(){return XS}function ZS(t){return typeof t=="function"?t():Qe(t)}function Dh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=ZS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Dh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Dh(e[r])}return n}return e}const eC="usehead",cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lg="__unhead_injection_handler__";function tC(){return lg in cg?cg[lg]():Nt(eC)||JS()}function ug(t,e={}){const n=e.head||tC();if(n)return n.ssr?n.push(t,e):nC(n,t,e)}function nC(t,e,n={}){const r=Et(!1),s=Et({});hA(()=>{s.value=r.value?{}:Dh(e)});const i=t.push(s.value,n);return gn(s,a=>{i.patch(a)}),_l()&&(aa(()=>{i.dispose()}),yv(()=>{r.value=!0}),_v(()=>{r.value=!1})),i}const rC=[],sC=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=FS({plugins:rC});jS(()=>De().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await kE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof document<"u";function DE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&DE(t.default)}const Oe=Object.assign;function Du(t,e){const n={};for(const r in e){const s=e[r];n[r]=vn(s)?s.map(t):t(s)}return n}const Eo=()=>{},vn=Array.isArray,LE=/#/g,oC=/&/g,aC=/\//g,cC=/=/g,lC=/\?/g,ME=/\+/g,uC=/%5B/g,hC=/%5D/g,VE=/%5E/g,fC=/%60/g,FE=/%7B/g,dC=/%7C/g,UE=/%7D/g,pC=/%20/g;function rd(t){return encodeURI(""+t).replace(dC,"|").replace(uC,"[").replace(hC,"]")}function mC(t){return rd(t).replace(FE,"{").replace(UE,"}").replace(VE,"^")}function Lh(t){return rd(t).replace(ME,"%2B").replace(pC,"+").replace(LE,"%23").replace(oC,"%26").replace(fC,"`").replace(FE,"{").replace(UE,"}").replace(VE,"^")}function gC(t){return Lh(t).replace(cC,"%3D")}function _C(t){return rd(t).replace(LE,"%23").replace(lC,"%3F")}function yC(t){return t==null?"":_C(t).replace(aC,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const vC=/\/$/,EC=t=>t.replace(vC,"");function Lu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=IC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ho(o)}}function wC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vi(e.matched[r],n.matched[s])&&BE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function BE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TC(t[n],e[n]))return!1;return!0}function TC(t,e){return vn(t)?fg(t,e):vn(e)?fg(e,t):t===e}function fg(t,e){return vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function IC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qo;(function(t){t.pop="pop",t.push="push"})(qo||(qo={}));var wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wo||(wo={}));function AC(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),EC(t)}const RC=/^[^#]+#/;function SC(t,e){return t.replace(RC,"#")+e}function CC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Il=()=>({left:window.scrollX,top:window.scrollY});function PC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=CC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dg(t,e){return(history.state?history.state.position-e:-1)+t}const Mh=new Map;function kC(t,e){Mh.set(t,e)}function OC(t){const e=Mh.get(t);return Mh.delete(t),e}let xC=()=>location.protocol+"//"+location.host;function jE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),hg(l,"")}return hg(n,t)+r+s}function NC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=jE(t,location),w=n.value,k=e.value;let x=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}x=k?p.position-k.position:0}else r(g);s.forEach(N=>{N(n.value,w,{delta:x,type:qo.pop,direction:x?x>0?wo.forward:wo.back:wo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Il()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function pg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Il():null}}function DC(t){const{history:e,location:n}=window,r={value:jE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:xC()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Oe({},e.state,pg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:Il()});i(h.current,h,!0);const d=Oe({},pg(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function LC(t){t=AC(t);const e=DC(t),n=NC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:SC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function MC(t){return typeof t=="string"||t&&typeof t=="object"}function $E(t){return typeof t=="string"||typeof t=="symbol"}const HE=Symbol("");var mg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mg||(mg={}));function Ei(t,e){return Oe(new Error,{type:t,[HE]:!0},e)}function zn(t,e){return t instanceof Error&&HE in t&&(e==null||!!(t.type&e))}const gg="[^/]+?",VC={sensitive:!1,strict:!1,start:!0,end:!0},FC=/[.+*?^${}()[\]/\\]/g;function UC(t,e){const n=Oe({},VC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(FC,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:k,optional:x,regexp:N}=p;i.push({name:w,repeatable:k,optional:x});const C=N||gg;if(C!==gg){g+=10;try{new RegExp(`(${C})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${w}" (${C}): `+R.message)}}let v=k?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(v=x&&u.length<2?`(?:/${v})`:"/"+v),x&&(v+="?"),s+=v,g+=20,x&&(g+=-8),k&&(g+=-20),C===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",w=i[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:w,repeatable:k,optional:x}=g,N=w in u?u[w]:"";if(vn(N)&&!k)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const C=vn(N)?N.join("/"):N;if(!C)if(x)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);h+=C}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function BC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=BC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(_g(r))return 1;if(_g(s))return-1}return s.length-r.length}function _g(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jC={type:0,value:""},$C=/[a-zA-Z0-9_]/;function HC(t){if(!t)return[[]];if(t==="/")return[[jC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:$C.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function qC(t,e,n){const r=UC(HC(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zC(t,e){const n=[],r=new Map;e=wg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const w=!g,k=vg(d);k.aliasOf=g&&g.record;const x=wg(e,d),N=[k];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)N.push(vg(Oe({},k,{components:g?g.record.components:k.components,path:D,aliasOf:g?g.record:k})))}let C,v;for(const R of N){const{path:D}=R;if(p&&D[0]!=="/"){const M=p.record.path,T=M[M.length-1]==="/"?"":"/";R.path=p.record.path+(D&&T+D)}if(C=qC(R,p,x),g?g.alias.push(C):(v=v||C,v!==C&&v.alias.push(C),w&&d.name&&!Eg(C)&&o(d.name)),zE(C)&&l(C),k.children){const M=k.children;for(let T=0;T<M.length;T++)i(M[T],C,g&&g.children[T])}g=g||C}return v?()=>{o(v)}:Eo}function o(d){if($E(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=GC(d,n);n.splice(p,0,d),d.record.name&&!Eg(d)&&r.set(d.record.name,d)}function u(d,p){let g,w={},k,x;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Ei(1,{location:d});x=g.record.name,w=Oe(yg(p.params,g.keys.filter(v=>!v.optional).concat(g.parent?g.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),d.params&&yg(d.params,g.keys.map(v=>v.name))),k=g.stringify(w)}else if(d.path!=null)k=d.path,g=n.find(v=>v.re.test(k)),g&&(w=g.parse(k),x=g.record.name);else{if(g=p.name?r.get(p.name):n.find(v=>v.re.test(p.path)),!g)throw Ei(1,{location:d,currentLocation:p});x=g.record.name,w=Oe({},p.params,d.params),k=g.stringify(w)}const N=[];let C=g;for(;C;)N.unshift(C.record),C=C.parent;return{name:x,path:k,params:w,matched:N,meta:KC(N)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function yg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:WC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function WC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Eg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KC(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function wg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function GC(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;qE(t,e[i])<0?r=i:n=i+1}const s=QC(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function QC(t){let e=t;for(;e=e.parent;)if(zE(e)&&qE(t,e)===0)return e}function zE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function YC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ME," "),o=i.indexOf("="),a=Ho(o<0?i:i.slice(0,o)),l=o<0?null:Ho(i.slice(o+1));if(a in e){let u=e[a];vn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function bg(t){let e="";for(let n in t){const r=t[n];if(n=gC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(r)?r.map(i=>i&&Lh(i)):[r&&Lh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function XC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=vn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JC=Symbol(""),Tg=Symbol(""),sd=Symbol(""),id=Symbol(""),Vh=Symbol("");function no(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ei(4,{from:n,to:e})):p instanceof Error?l(p):MC(p)?l(Ei(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Mu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(DE(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Cr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=iC(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Cr(g,n,r,o,a,s)()}))}}return i}function Ig(t){const e=Nt(sd),n=Nt(id),r=Ue(()=>{const l=Qe(t.to);return e.resolve(l)}),s=Ue(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(vi.bind(null,h));if(p>-1)return p;const g=Ag(l[u-2]);return u>1&&Ag(h)===g&&d[d.length-1].path!==g?d.findIndex(vi.bind(null,l[u-2])):p}),i=Ue(()=>s.value>-1&&rP(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&BE(n.params,r.value.params));function a(l={}){if(nP(l)){const u=e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(Eo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function ZC(t){return t.length===1?t[0]:t}const eP=wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ig,setup(t,{slots:e}){const n=hr(Ig(t)),{options:r}=Nt(sd),s=Ue(()=>({[Rg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&ZC(e.default(n));return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tP=eP;function nP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!vn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ag(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rg=(t,e,n)=>t??e??n,sP=wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Vh),s=Ue(()=>t.route||r.value),i=Nt(Tg,0),o=Ue(()=>{let u=Qe(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ue(()=>s.value.matched[o.value]);ws(Tg,Ue(()=>o.value+1)),ws(JC,a),ws(Vh,s);const l=Et();return gn(()=>[l.value,a.value,t.name],([u,h,d],[p,g,w])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!vi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Sg(n.default,{Component:p,route:u});const g=d.props[h],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=vt(p,Oe({},w,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Sg(n.default,{Component:x,route:u})||x}}});function Sg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WE=sP;function iP(t){const e=zC(t.routes,t),n=t.parseQuery||YC,r=t.stringifyQuery||bg,s=t.history,i=no(),o=no(),a=no(),l=Do(fn);let u=fn;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Du.bind(null,B=>""+B),d=Du.bind(null,yC),p=Du.bind(null,Ho);function g(B,ee){let X,re;return $E(B)?(X=e.getRecordMatcher(B),re=ee):re=B,e.addRoute(re,X)}function w(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function k(){return e.getRoutes().map(B=>B.record)}function x(B){return!!e.getRecordMatcher(B)}function N(B,ee){if(ee=Oe({},ee||l.value),typeof B=="string"){const O=Lu(n,B,ee.path),V=e.resolve({path:O.path},ee),$=s.createHref(O.fullPath);return Oe(O,V,{params:p(V.params),hash:Ho(O.hash),redirectedFrom:void 0,href:$})}let X;if(B.path!=null)X=Oe({},B,{path:Lu(n,B.path,ee.path).path});else{const O=Oe({},B.params);for(const V in O)O[V]==null&&delete O[V];X=Oe({},B,{params:d(O)}),ee.params=d(ee.params)}const re=e.resolve(X,ee),Te=B.hash||"";re.params=h(p(re.params));const Le=wC(r,Oe({},B,{hash:mC(Te),path:re.path})),A=s.createHref(Le);return Oe({fullPath:Le,hash:Te,query:r===bg?XC(B.query):B.query||{}},re,{redirectedFrom:void 0,href:A})}function C(B){return typeof B=="string"?Lu(n,B,l.value.path):Oe({},B)}function v(B,ee){if(u!==B)return Ei(8,{from:ee,to:B})}function R(B){return T(B)}function D(B){return R(Oe(C(B),{replace:!0}))}function M(B){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(B):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=C(re):{path:re},re.params={}),Oe({query:B.query,hash:B.hash,params:re.path!=null?{}:B.params},re)}}function T(B,ee){const X=u=N(B),re=l.value,Te=B.state,Le=B.force,A=B.replace===!0,O=M(X);if(O)return T(Oe(C(O),{state:typeof O=="object"?Oe({},Te,O.state):Te,force:Le,replace:A}),ee||X);const V=X;V.redirectedFrom=ee;let $;return!Le&&bC(r,re,X)&&($=Ei(16,{to:V,from:re}),tn(re,re,!0,!1)),($?Promise.resolve($):b(V,re)).catch(U=>zn(U)?zn(U,2)?U:un(U):ne(U,V,re)).then(U=>{if(U){if(zn(U,2))return T(Oe({replace:A},C(U.to),{state:typeof U.to=="object"?Oe({},Te,U.to.state):Te,force:Le}),ee||V)}else U=S(V,re,!0,A,Te);return P(V,re,U),U})}function y(B,ee){const X=v(B,ee);return X?Promise.reject(X):Promise.resolve()}function _(B){const ee=mr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function b(B,ee){let X;const[re,Te,Le]=oP(B,ee);X=Mu(re.reverse(),"beforeRouteLeave",B,ee);for(const O of re)O.leaveGuards.forEach(V=>{X.push(Cr(V,B,ee))});const A=y.bind(null,B,ee);return X.push(A),Ht(X).then(()=>{X=[];for(const O of i.list())X.push(Cr(O,B,ee));return X.push(A),Ht(X)}).then(()=>{X=Mu(Te,"beforeRouteUpdate",B,ee);for(const O of Te)O.updateGuards.forEach(V=>{X.push(Cr(V,B,ee))});return X.push(A),Ht(X)}).then(()=>{X=[];for(const O of Le)if(O.beforeEnter)if(vn(O.beforeEnter))for(const V of O.beforeEnter)X.push(Cr(V,B,ee));else X.push(Cr(O.beforeEnter,B,ee));return X.push(A),Ht(X)}).then(()=>(B.matched.forEach(O=>O.enterCallbacks={}),X=Mu(Le,"beforeRouteEnter",B,ee,_),X.push(A),Ht(X))).then(()=>{X=[];for(const O of o.list())X.push(Cr(O,B,ee));return X.push(A),Ht(X)}).catch(O=>zn(O,8)?O:Promise.reject(O))}function P(B,ee,X){a.list().forEach(re=>_(()=>re(B,ee,X)))}function S(B,ee,X,re,Te){const Le=v(B,ee);if(Le)return Le;const A=ee===fn,O=Ks?history.state:{};X&&(re||A?s.replace(B.fullPath,Oe({scroll:A&&O&&O.scroll},Te)):s.push(B.fullPath,Te)),l.value=B,tn(B,ee,X,A),un()}let I;function ge(){I||(I=s.listen((B,ee,X)=>{if(!bn.listening)return;const re=N(B),Te=M(re);if(Te){T(Oe(Te,{replace:!0,force:!0}),re).catch(Eo);return}u=re;const Le=l.value;Ks&&kC(dg(Le.fullPath,X.delta),Il()),b(re,Le).catch(A=>zn(A,12)?A:zn(A,2)?(T(Oe(C(A.to),{force:!0}),re).then(O=>{zn(O,20)&&!X.delta&&X.type===qo.pop&&s.go(-1,!1)}).catch(Eo),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(A,re,Le))).then(A=>{A=A||S(re,Le,!1),A&&(X.delta&&!zn(A,8)?s.go(-X.delta,!1):X.type===qo.pop&&zn(A,20)&&s.go(-1,!1)),P(re,Le,A)}).catch(Eo)}))}let ve=no(),Z=no(),se;function ne(B,ee,X){un(B);const re=Z.list();return re.length?re.forEach(Te=>Te(B,ee,X)):console.error(B),Promise.reject(B)}function We(){return se&&l.value!==fn?Promise.resolve():new Promise((B,ee)=>{ve.add([B,ee])})}function un(B){return se||(se=!B,ge(),ve.list().forEach(([ee,X])=>B?X(B):ee()),ve.reset()),B}function tn(B,ee,X,re){const{scrollBehavior:Te}=t;if(!Ks||!Te)return Promise.resolve();const Le=!X&&OC(dg(B.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return Un().then(()=>Te(B,ee,Le)).then(A=>A&&PC(A)).catch(A=>ne(A,B,ee))}const Ke=B=>s.go(B);let Ge;const mr=new Set,bn={currentRoute:l,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:N,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:We,install(B){const ee=this;B.component("RouterLink",tP),B.component("RouterView",WE),B.config.globalProperties.$router=ee,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),Ks&&!Ge&&l.value===fn&&(Ge=!0,R(s.location).catch(Te=>{}));const X={};for(const Te in fn)Object.defineProperty(X,Te,{get:()=>l.value[Te],enumerable:!0});B.provide(sd,ee),B.provide(id,Xn(X)),B.provide(Vh,l);const re=B.unmount;mr.add(B),B.unmount=function(){mr.delete(B),mr.size<1&&(u=fn,I&&I(),I=null,l.value=fn,Ge=!1,se=!1),re()}}};function Ht(B){return B.reduce((ee,X)=>ee.then(()=>_(X)),Promise.resolve())}return bn}function oP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>vi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>vi(u,l))||s.push(l))}return[n,r,s]}function aP(t){return Nt(id)}const cP=/(:\w+)\([^)]+\)/g,lP=/(:\w+)[?+*]/g,uP=/:\w+/g,hP=(t,e)=>e.path.replace(cP,"$1").replace(lP,"$1").replace(uP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Fh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&hP(t.route,n));return typeof r=="function"?r(t.route):r},fP=(t,e)=>({default:()=>t?vt(FI,t===!0?{}:t,e):e});function od(t){return Array.isArray(t)?t:[t]}const dP={middleware:"auth"},pP={middleware:"auth"},mP={middleware:"auth"},Vu=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./DGGhgLDq.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./5ZmzmeCW.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./CzShFPQU.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:dP,component:()=>ke(()=>import("./D6SzPSWf.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"Admin",path:"/Admin",meta:pP,component:()=>ke(()=>import("./DgXRNTi4.js"),__vite__mapDeps([3,4]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./BbNA1pBu.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./Ca9LaSno.js"),[],import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:mP,component:()=>ke(()=>import("./BW58wK8l.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./BRtr-VTZ.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./J-akR-cP.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./_2Pajg6y.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./CQ-BLhae.js"),[],import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./BFPPKNEO.js"),[],import.meta.url)},{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./DhgDZZyd.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./CHQTJ_1S.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./pMP2VqQy.js"),__vite__mapDeps([16,8,9,17]),import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./YHaFfPk3.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./Btz0jBW6.js"),__vite__mapDeps([20,8,9]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./BtLtp7BG.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./Ct_Qa2R-.js"),__vite__mapDeps([21,1,22]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./DR7ID-xN.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./C4Eg6-T4.js"),__vite__mapDeps([23,8,9,24]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./BOe9m24Q.js"),__vite__mapDeps([25,8,9,26]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./BeIlGV1j.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./eGPusp-A.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./CNGvI-ui.js"),__vite__mapDeps([29,8,9]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./dSmFCKnP.js"),__vite__mapDeps([30,8,9]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./_VnuwBKW.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./DeJ8KwtY.js"),__vite__mapDeps([31,8,9]),import.meta.url)}],KE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?vt(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),gP=/(:\w+)\([^)]+\)/g,_P=/(:\w+)[?+*]/g,yP=/:\w+/g;function Cg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(gP,"$1").replace(_P,"$1").replace(yP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function vP(t,e){return t===e||e===fn?!1:Cg(t)!==Cg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const EP={scrollBehavior(t,e,n){var u;const r=De(),s=((u=wt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&vP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Pg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Ah),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Pg(t.hash),behavior:s}),h(i)})})}};function Pg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const wP={hashMode:!1,scrollBehaviorType:"auto"},Tn={...wP,...EP},bP=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=De(),s=wt(),i=([e,n]=ci(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=bl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Zs(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},TP=async t=>{let e,n;const r=([e,n]=ci(()=>nd({path:t.path})),e=await e,n(),e);if(r.redirect)return dr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},IP=[bP,TP],bo={auth:()=>ke(()=>import("./BqI-muoT.js"),[],import.meta.url)};function AP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),$m(h,"")}const a=$m(r,t),l=!n||j1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const RP=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var x;let e,n,r=xs().app.baseURL;const s=((x=Tn.history)==null?void 0:x.call(Tn,r))??LC(r),i=Tn.routes?([e,n]=ci(()=>Tn.routes(Vu)),e=await e,n(),e??Vu):Vu;let o;const a=iP({...Tn,scrollBehavior:(N,C,v)=>{if(C===fn){o=v;return}if(Tn.scrollBehavior){if(a.options.scrollBehavior=Tn.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return Tn.scrollBehavior(N,fn,o||v)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Do(a.currentRoute.value);a.afterEach((N,C)=>{l.value=C}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=AP(r,window.location,t.payload.path),h=Do(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((N,C)=>{var v,R,D,M;((R=(v=N.matched[0])==null?void 0:v.components)==null?void 0:R.default)===((M=(D=C.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&d()});const p={};for(const N in h.value)Object.defineProperty(p,N,{get:()=>h.value[N],enumerable:!0});t._route=Xn(p),t._middleware=t._middleware||{global:[],named:{}};const g=wl();a.afterEach(async(N,C,v)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(IE),v&&await t.callHook("page:loading:end")});try{[e,n]=ci(()=>a.isReady()),await e,n()}catch(N){[e,n]=ci(()=>t.runWithContext(()=>Zs(N))),await e,n()}const w=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const k=t.payload.state._layout;return a.beforeEach(async(N,C)=>{var v;await t.callHook("page:loading:start"),N.meta=hr(N.meta),t.isHydrating&&k&&!zr(N.meta.layout)&&(N.meta.layout=k),t._processingMiddleware=!0;{const R=new Set([...IP,...t._middleware.global]);for(const D of N.matched){const M=D.meta.middleware;if(M)for(const T of od(M))R.add(T)}{const D=await t.runWithContext(()=>nd({path:N.path}));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?R.add(M):R.delete(M)}for(const D of R){const M=typeof D=="string"?t._middleware.named[D]||await((v=bo[D])==null?void 0:v.call(bo).then(y=>y.default||y)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);const T=await t.runWithContext(()=>M(N,C));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const y=T||Ch({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Zs(y)),!1}if(T!==!0&&(T||T===!1))return T}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(N,C)=>{N.matched.length===0&&await t.runWithContext(()=>Zs(Ch({statusCode:404,fatal:!1,statusMessage:`Page not found: ${N.fullPath}`,data:{path:N.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in w&&(w.name=void 0),await a.replace({...w,force:!0}),a.options.scrollBehavior=Tn.scrollBehavior}catch(N){await t.runWithContext(()=>Zs(N))}}),{provide:{router:a}}}}),Uh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),SP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Al=t=>{const e=De();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Uh(()=>t())}):Uh(()=>t())},CP=Zt({name:"nuxt:payload",setup(t){wt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await ag(e.path);r&&Object.assign(t.static.data,r.data)}),Al(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await ag(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Tl,1e3)})}}),PP=Zt(()=>{const t=wt();Al(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),kP=Zt(t=>{let e;async function n(){const r=await Tl();e&&clearTimeout(e),e=setTimeout(n,Km);try{const s=await $fetch(Zf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Al(()=>{e=setTimeout(n,Km)})});function OP(t={}){const e=t.path||window.location.pathname;let n={};try{n=$o(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:De().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const xP=Zt({name:"nuxt:chunk-reload",setup(t){const e=wt(),n=xs(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:El(n.app.baseURL,i.fullPath);OP({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),NP=Zt({name:"nuxt:global-components"}),Lr={default:MI(()=>ke(()=>import("./CQG52Aot.js"),__vite__mapDeps([32,6,1,33]),import.meta.url).then(t=>t.default||t))},DP=Zt({name:"nuxt:prefetch",setup(t){const e=wt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Lr[r]=="function"&&await Lr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(dr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=od(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof bo[o]=="function"&&bo[o]();s&&typeof Lr[s]=="function"&&Lr[s]()})}});var kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},LP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},QE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(GE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new MP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VP=function(t){const e=GE(t);return QE.encodeByteArray(e,!0)},Bc=function(t){return VP(t).replace(/\./g,"")},YE=function(t){try{return QE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UP=()=>FP().__FIREBASE_DEFAULTS__,BP=()=>{if(typeof process>"u"||typeof kg>"u")return;const t=kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&YE(t[1]);return e&&JSON.parse(e)},Rl=()=>{try{return UP()||BP()||jP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XE=t=>{var e,n;return(n=(e=Rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JE=t=>{const e=XE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ZE=()=>{var t;return(t=Rl())===null||t===void 0?void 0:t.config},e0=t=>{var e;return(e=Rl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function t0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bc(JSON.stringify(n)),Bc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function qP(){var t;const e=(t=Rl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function zP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GP(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QP(){return!qP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YP(){try{return typeof indexedDB=="object"}catch{return!1}}function XP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JP,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,a,r)}}function ZP(t,e){return t.replace(ek,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ek=/\{\$([^}]+)}/g;function tk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Og(i)&&Og(o)){if(!jc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Og(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nk(t,e){const n=new rk(t,e);return n.subscribe.bind(n)}class rk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fu),s.error===void 0&&(s.error=Fu),s.complete===void 0&&(s.complete=Fu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fu(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gs="[DEFAULT]";/**
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
 */class ik{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $P;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ak(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ok(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ok(t){return t===gs?void 0:t}function ak(t){return t.instantiationMode==="EAGER"}/**
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
 */class ck{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ik(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const lk={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},uk=Ee.INFO,hk={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},fk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ad{constructor(e){this.name=e,this._logLevel=uk,this._logHandler=fk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const dk=(t,e)=>e.some(n=>t instanceof n);let xg,Ng;function pk(){return xg||(xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mk(){return Ng||(Ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n0=new WeakMap,Bh=new WeakMap,r0=new WeakMap,Uu=new WeakMap,cd=new WeakMap;function gk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n0.set(n,t)}).catch(()=>{}),cd.set(e,t),e}function _k(t){if(Bh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bh.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yk(t){jh=t(jh)}function vk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bu(this),e,...n);return r0.set(r,e.sort?e.sort():[e]),Ur(r)}:mk().includes(t)?function(...e){return t.apply(Bu(this),e),Ur(n0.get(this))}:function(...e){return Ur(t.apply(Bu(this),e))}}function Ek(t){return typeof t=="function"?vk(t):(t instanceof IDBTransaction&&_k(t),dk(t,pk())?new Proxy(t,jh):t)}function Ur(t){if(t instanceof IDBRequest)return gk(t);if(Uu.has(t))return Uu.get(t);const e=Ek(t);return e!==t&&(Uu.set(t,e),cd.set(e,t)),e}const Bu=t=>cd.get(t);function wk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const bk=["get","getKey","getAll","getAllKeys","count"],Tk=["put","add","delete","clear"],ju=new Map;function Dg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Tk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return ju.set(e,i),i}yk(t=>({...t,get:(e,n,r)=>Dg(e,n)||t.get(e,n,r),has:(e,n)=>!!Dg(e,n)||t.has(e,n)}));/**
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
 */class Ik{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ak(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ak(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",Lg="0.10.18";/**
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
 */const ir=new ad("@firebase/app"),Rk="@firebase/app-compat",Sk="@firebase/analytics-compat",Ck="@firebase/analytics",Pk="@firebase/app-check-compat",kk="@firebase/app-check",Ok="@firebase/auth",xk="@firebase/auth-compat",Nk="@firebase/database",Dk="@firebase/data-connect",Lk="@firebase/database-compat",Mk="@firebase/functions",Vk="@firebase/functions-compat",Fk="@firebase/installations",Uk="@firebase/installations-compat",Bk="@firebase/messaging",jk="@firebase/messaging-compat",$k="@firebase/performance",Hk="@firebase/performance-compat",qk="@firebase/remote-config",zk="@firebase/remote-config-compat",Wk="@firebase/storage",Kk="@firebase/storage-compat",Gk="@firebase/firestore",Qk="@firebase/vertexai",Yk="@firebase/firestore-compat",Xk="firebase",Jk="11.2.0";/**
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
 */const Hh="[DEFAULT]",Zk={[$h]:"fire-core",[Rk]:"fire-core-compat",[Ck]:"fire-analytics",[Sk]:"fire-analytics-compat",[kk]:"fire-app-check",[Pk]:"fire-app-check-compat",[Ok]:"fire-auth",[xk]:"fire-auth-compat",[Nk]:"fire-rtdb",[Dk]:"fire-data-connect",[Lk]:"fire-rtdb-compat",[Mk]:"fire-fn",[Vk]:"fire-fn-compat",[Fk]:"fire-iid",[Uk]:"fire-iid-compat",[Bk]:"fire-fcm",[jk]:"fire-fcm-compat",[$k]:"fire-perf",[Hk]:"fire-perf-compat",[qk]:"fire-rc",[zk]:"fire-rc-compat",[Wk]:"fire-gcs",[Kk]:"fire-gcs-compat",[Gk]:"fire-fst",[Yk]:"fire-fst-compat",[Qk]:"fire-vertex","fire-js":"fire-js",[Xk]:"fire-js-all"};/**
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
 */const $c=new Map,eO=new Map,qh=new Map;function Mg(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(qh.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of $c.values())Mg(n,t);for(const n of eO.values())Mg(n,t);return!0}function Sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jn(t){return t.settings!==void 0}/**
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
 */const tO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new ua("app","Firebase",tO);/**
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
 */class nO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=Jk;function s0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Br.create("bad-app-name",{appName:String(s)});if(n||(n=ZE()),!n)throw Br.create("no-options");const i=$c.get(s);if(i){if(jc(n,i.options)&&jc(r,i.config))return i;throw Br.create("duplicate-app",{appName:s})}const o=new ck(s);for(const l of qh.values())o.addComponent(l);const a=new nO(n,r,o);return $c.set(s,a),a}function ld(t=Hh){const e=$c.get(t);if(!e&&t===Hh&&ZE())return s0();if(!e)throw Br.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let s=(r=Zk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}As(new Wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rO="firebase-heartbeat-database",sO=1,zo="firebase-heartbeat-store";let $u=null;function i0(){return $u||($u=wk(rO,sO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),$u}async function iO(t){try{const n=(await i0()).transaction(zo),r=await n.objectStore(zo).get(o0(t));return await n.done,r}catch(e){if(e instanceof Bn)ir.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function Vg(t,e){try{const r=(await i0()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,o0(t)),await r.done}catch(n){if(n instanceof Bn)ir.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function o0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oO=1024,aO=30*24*60*60*1e3;class cO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=aO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:r,unsentEntries:s}=lO(this._heartbeatsCache.heartbeats),i=Bc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ir.warn(n),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function lO(t,e=oO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ug(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YP()?XP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return Bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hO(t){As(new Wr("platform-logger",e=>new Ik(e),"PRIVATE")),As(new Wr("heartbeat",e=>new cO(e),"PRIVATE")),xn($h,Lg,t),xn($h,Lg,"esm2017"),xn("fire-js","")}hO("");var fO="firebase",dO="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(fO,dO,"app");function ud(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pO=a0,c0=new ua("auth","Firebase",a0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new ad("@firebase/auth");function mO(t,...e){Hc.logLevel<=Ee.WARN&&Hc.warn(`Auth (${Ns}): ${t}`,...e)}function uc(t,...e){Hc.logLevel<=Ee.ERROR&&Hc.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw hd(t,...e)}function Nn(t,...e){return hd(t,...e)}function l0(t,e,n){const r=Object.assign(Object.assign({},pO()),{[e]:n});return new ua("auth","Firebase",r).create(e,{appName:t.name})}function jr(t){return l0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c0.create(t,...e)}function de(t,e,...n){if(!t)throw hd(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uc(e),new Error(e)}function or(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gO(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gO()||WP()||"connection"in navigator)?navigator.onLine:!0}function yO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=HP()||KP()}get(){return _O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=new fa(3e4,6e4);function Ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rs(t,e,n,r,s={}){return h0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ha(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return zP()||(u.referrerPolicy="no-referrer"),u0.fetch()(f0(t,t.config.apiHost,n,a),u)})}async function h0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vO),e);try{const s=new bO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ka(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw l0(t,h,u);En(t,h)}}catch(s){if(s instanceof Bn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function Cl(t,e,n,r,s={}){const i=await rs(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function f0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fd(t.config,s):`${t.config.apiScheme}://${s}`}function wO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),EO.get())})}}function Ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nn(t,e,r);return s.customData._tokenResponse=n,s}function jg(t){return t!==void 0&&t.enterprise!==void 0}class TO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IO(t,e){return rs(t,"GET","/v2/recaptchaConfig",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e){return rs(t,"POST","/v1/accounts:delete",e)}async function d0(t,e){return rs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RO(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=dd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:To(Hu(s.auth_time)),issuedAtTime:To(Hu(s.iat)),expirationTime:To(Hu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hu(t){return Number(t)*1e3}function dd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uc("JWT malformed, contained fewer than 3 sections"),null;try{const s=YE(n);return s?JSON.parse(s):(uc("Failed to decode base64 JWT payload"),null)}catch(s){return uc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $g(t){const e=dd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&SO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Wo(t,d0(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?p0(i.providerUserInfo):[],a=kO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function PO(t){const e=Ze(t);await qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function p0(t){return t.map(e=>{var{providerId:n}=e,r=ud(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e){const n=await h0(t,{},async()=>{const r=ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=f0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",u0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xO(t,e){return rs(t,"POST","/v2/accounts:revokeToken",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=$g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new li;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wo(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RO(this,e)}reload(){return PO(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await Wo(this,AO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:R,isAnonymous:D,providerData:M,stsTokenManager:T}=n;de(v&&T,e,"internal-error");const y=li.fromJSON(this.name,T);de(typeof v=="string",e,"internal-error"),wr(d,e.name),wr(p,e.name),de(typeof R=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),wr(g,e.name),wr(w,e.name),wr(k,e.name),wr(x,e.name),wr(N,e.name),wr(C,e.name);const _=new er({uid:v,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:w,phoneNumber:g,tenantId:k,stsTokenManager:y,createdAt:N,lastLoginAt:C});return M&&Array.isArray(M)&&(_.providerData=M.map(b=>Object.assign({},b))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new li;s.updateFromServerResponse(n);const i=new er({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?p0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new li;a.updateFromIdToken(r);const l=new er({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;function tr(t){or(t instanceof Function,"Expected a class definition");let e=Hg.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hg.set(t,e),e)}/**
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
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const qg=m0;/**
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
 */function hc(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hc(this.userKey,s.apiKey,i),this.fullPersistenceKey=hc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(tr(qg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tr(qg);const o=hc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=er._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ui(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ui(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w0(e))return"Blackberry";if(b0(e))return"Webos";if(_0(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g0(t=Dt()){return/firefox\//i.test(t)}function _0(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(t=Dt()){return/crios\//i.test(t)}function v0(t=Dt()){return/iemobile/i.test(t)}function E0(t=Dt()){return/android/i.test(t)}function w0(t=Dt()){return/blackberry/i.test(t)}function b0(t=Dt()){return/webos/i.test(t)}function pd(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NO(t=Dt()){var e;return pd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DO(){return GP()&&document.documentMode===10}function T0(t=Dt()){return pd(t)||E0(t)||b0(t)||w0(t)||/windows phone/i.test(t)||v0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e=[]){let n;switch(t){case"Browser":n=zg(Dt());break;case"Worker":n=`${zg(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
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
 */class LO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MO(t,e={}){return rs(t,"GET","/v2/passwordPolicy",Ds(t,e))}/**
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
 */const VO=6;class FO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new LO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await d0(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(jr(this));const n=e?Ze(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MO(this),n=new FO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(t){return Ze(t)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=nk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BO(t){Pl=t}function A0(t){return Pl.loadJS(t)}function jO(){return Pl.recaptchaEnterpriseScript}function $O(){return Pl.gapiScript}function HO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qO{constructor(){this.enterprise=new zO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WO="recaptcha-enterprise",R0="NO_RECAPTCHA";class KO{constructor(e){this.type=WO,this.auth=Di(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{IO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new TO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;jg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(R0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qO().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&jg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jO();l.length!==0&&(l+=a),A0(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Kg(t,e,n,r=!1,s=!1){const i=new KO(t);let o;if(s)o=R0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Gg(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Kg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t,e){const n=Sl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jc(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function QO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YO(t,e,n){const r=Di(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=S0(e),{host:o,port:a}=XO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),JO()}function S0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XO(t){const e=S0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function ZO(t,e){return rs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}async function nx(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends md{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,n,"signInWithPassword",ex);case"emailLink":return tx(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,r,"signUpPassword",ZO);case"emailLink":return nx(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="http://localhost";class Rs extends md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ud(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:rx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ha(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ix(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class gd{constructor(e){var n,r,s,i,o,a;const l=oo(ao(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=sx((s=l.mode)!==null&&s!==void 0?s:null);de(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ix(e);try{return new gd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return Ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gd.parseLink(n);return de(r,"argument-error"),Ko._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class da extends C0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends da{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends da{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends da{constructor(){super("twitter.com")}static credential(e,n){return Rs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await er._fromIdTokenResponse(e,r,s),o=Yg(r);return new wi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yg(r);return new wi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zc(e,n,r,s)}}function P0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(t,i,e,r):i})}async function ox(t,e,n=!1){const r=await Wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",r)}/**
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
 */async function ax(t,e,n=!1){const{auth:r}=t;if(Jn(r.app))return Promise.reject(jr(r));const s="reauthenticate";try{const i=await Wo(t,P0(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=dd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),wi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e,n=!1){if(Jn(t.app))return Promise.reject(jr(t));const r="signIn",s=await P0(t,r,e),i=await wi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cx(t,e){return k0(Di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t){const e=Di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ux(t,e,n){return Jn(t.app)?Promise.reject(jr(t)):cx(Ze(t),Li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lx(t),r})}function hx(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function fx(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function dx(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function px(t){return Ze(t).signOut()}const Wc="__sak";/**
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
 */class O0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=1e3,gx=10;class x0 extends O0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);DO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const _x=x0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0 extends O0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N0.type="SESSION";const D0=N0;/**
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
 */function yx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await yx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=_d("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function Ex(t){Dn().location.href=t}/**
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
 */function L0(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function wx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tx(){return L0()?self:null}/**
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
 */const M0="firebaseLocalStorageDb",Ix=1,Kc="firebaseLocalStorage",V0="fbase_key";class pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function Ax(){const t=indexedDB.deleteDatabase(M0);return new pa(t).toPromise()}function Kh(){const t=indexedDB.open(M0,Ix);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kc,{keyPath:V0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await Ax(),e(await Kh()))})})}async function Xg(t,e,n){const r=Ol(t,!0).put({[V0]:e,value:n});return new pa(r).toPromise()}async function Rx(t,e){const n=Ol(t,!1).get(e),r=await new pa(n).toPromise();return r===void 0?null:r.value}function Jg(t,e){const n=Ol(t,!0).delete(e);return new pa(n).toPromise()}const Sx=800,Cx=3;class F0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(Tx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wx(),!this.activeServiceWorker)return;this.sender=new vx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kh();return await Xg(e,Wc,"1"),await Jg(e,Wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ol(s,!1).getAll();return new pa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F0.type="LOCAL";const Px=F0;new fa(3e4,6e4);/**
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
 */function kx(t,e){return e?tr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yd extends md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ox(t){return k0(t.auth,new yd(t),t.bypassAuthState)}function xx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),ax(n,new yd(t),t.bypassAuthState)}async function Nx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),ox(n,new yd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ox;case"linkViaPopup":case"linkViaRedirect":return Nx;case"reauthViaPopup":case"reauthViaRedirect":return xx;default:En(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=new fa(2e3,1e4);class ei extends U0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dx.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="pendingRedirect",fc=new Map;class Mx extends U0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const r=await Vx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vx(t,e){const n=Bx(e),r=Ux(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Fx(t,e){fc.set(t._key(),e)}function Ux(t){return tr(t._redirectPersistence)}function Bx(t){return hc(Lx,t.config.apiKey,t.name)}async function jx(t,e,n=!1){if(Jn(t.app))return Promise.reject(jr(t));const r=Di(t),s=kx(r,e),o=await new Mx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=10*60*1e3;class Hx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$x&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zg(e))}saveEventToCache(e){this.cachedEventUids.add(Zg(e)),this.lastProcessedEventTime=Date.now()}}function Zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx(t,e={}){return rs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kx=/^https?/;async function Gx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zx(t);for(const n of e)try{if(Qx(n))return}catch{}En(t,"unauthorized-domain")}function Qx(t){const e=zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kx.test(n))return!1;if(Wx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Yx=new fa(3e4,6e4);function e_(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xx(t){return new Promise((e,n)=>{var r,s,i;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(Nn(t,"network-request-failed"))},timeout:Yx.get()})}if(!((s=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Dn().gapi)===null||i===void 0)&&i.load)o();else{const a=HO("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},A0(`${$O()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dc=null,e})}let dc=null;function Jx(t){return dc=dc||Xx(t),dc}/**
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
 */const Zx=new fa(5e3,15e3),eN="__/auth/iframe",tN="emulator/auth/iframe",nN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fd(e,tN):`https://${t.config.authDomain}/${eN}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=rN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ha(r).slice(1)}`}async function iN(t){const e=await Jx(t),n=Dn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:sN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=Dn().setTimeout(()=>{i(o)},Zx.get());function l(){Dn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const oN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aN=500,cN=600,lN="_blank",uN="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hN(t,e,n,r=aN,s=cN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=y0(u)?lN:n),g0(u)&&(e=e||uN,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(NO(u)&&a!=="_self")return fN(e||"",a),new t_(null);const d=window.open(e||"",a,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new t_(d)}function fN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dN="__/auth/handler",pN="emulator/auth/handler",mN=encodeURIComponent("fac");async function n_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof C0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof da){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${mN}=${encodeURIComponent(l)}`:"";return`${gN(t)}?${ha(a).slice(1)}${u}`}function gN({config:t}){return t.emulator?fd(t,pN):`https://${t.authDomain}/${dN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="webStorageSupport";class _N{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D0,this._completeRedirectFn=jx,this._overrideRedirectResult=Fx}async _openPopup(e,n,r,s){var i;or((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,zh(),s);return hN(e,o,_d())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await n_(e,n,r,zh(),s);return Ex(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(or(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iN(e),r=new Hx(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qu,{type:qu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qu];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T0()||_0()||pd()}}const yN=_N;var r_="@firebase/auth",s_="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wN(t){As(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I0(t)},u=new UO(r,s,i,l);return QO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Wr("auth-internal",e=>{const n=Di(e.getProvider("auth").getImmediate());return(r=>new vN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(r_,s_,EN(t)),xn(r_,s_,"esm2017")}/**
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
 */const bN=5*60,TN=e0("authIdTokenMaxAge")||bN;let i_=null;const IN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TN)return;const s=n==null?void 0:n.token;i_!==s&&(i_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AN(t=ld()){const e=Sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GO(t,{popupRedirectResolver:yN,persistence:[Px,_x,D0]}),r=e0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IN(i.toString());fx(n,o,()=>o(n.currentUser)),hx(n,a=>o(a))}}const s=XE("auth");return s&&YO(n,`http://${s}`),n}function RN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",RN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wN("Browser");function dn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=dn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:dn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=dn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=dn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(dn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(dn(i),dn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(dn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const SN={path:"/",watch:!0,decode:t=>$o(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Ga=window.cookieStore;function CN(t,e){var l;const n={...SN,...e};n.filter??(n.filter=u=>u===t);const r=o_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=dn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?ON(o,s,n.watch&&n.watch!=="shallow"):Et(o);{let u=null;try{!Ga&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||MR(a.value,r[t])||(kN(t,a.value,n),r[t]=dn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=w=>{var x;const k=w.refresh?(x=o_(n))==null?void 0:x[t]:n.decode(w.value);p=!0,a.value=k,r[t]=dn(k),Un(()=>{p=!1})};let p=!1;const g=!!sa();if(g&&Tc(()=>{p=!0,h(),u==null||u.close()}),Ga){const w=k=>{const x=k.changed.find(C=>C.name===t),N=k.deleted.find(C=>C.name===t);x&&d({value:x.value}),N&&d({value:null})};Ga.addEventListener("change",w),g&&Tc(()=>Ga.removeEventListener("change",w))}else u&&(u.onmessage=({data:w})=>d(w));n.watch?gn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function o_(t={}){return kR(document.cookie,t)}function PN(t,e,n={}){return e==null?Qm(t,e,{...n,maxAge:-1}):Qm(t,e,n)}function kN(t,e,n={}){document.cookie=PN(t,e,n)}const a_=2147483647;function ON(t,e,n){let r,s,i=0;const o=n?Et(t):{value:t};return sa()&&Tc(()=>{s==null||s(),clearTimeout(r)}),gI((a,l)=>{n&&(s=gn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<a_?h:a_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function j0(t,e=wt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>j0(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const xN=(...t)=>t.find(e=>e!==void 0);function NN(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return c_(i,t.trailingSlash);const a="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:c_(a,t.trailingSlash)}}function s(i){const o=wt(),a=xs(),l=Ue(()=>!!i.target&&i.target!=="_self"),u=Ue(()=>{const x=i.to||i.href||"";return typeof x=="string"&&dr(x,{acceptRelative:!0})}),h=Vo("RouterLink"),d=h&&typeof h!="string"?h.useLink:void 0,p=Ue(()=>{if(i.external)return!0;const x=i.to||i.href||"";return typeof x=="object"?!1:x===""||u.value}),g=Ue(()=>{const x=i.to||i.href||"";return p.value?x:r(x,o.resolve)}),w=p.value||d==null?void 0:d({...i,to:g}),k=Ue(()=>{var x;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const N=typeof g.value=="object"&&"path"in g.value?kh(g.value):g.value,C=typeof N=="object"?o.resolve(N).href:N;return r(C,o.resolve)}return typeof g.value=="object"?((x=o.resolve(g.value))==null?void 0:x.href)??null:r(El(a.app.baseURL,g.value),o.resolve)});return{to:g,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:k,isActive:(w==null?void 0:w.isActive)??Ue(()=>g.value===o.currentRoute.value.path),isExactActive:(w==null?void 0:w.isExactActive)??Ue(()=>g.value===o.currentRoute.value.path),route:(w==null?void 0:w.route)??Ue(()=>o.resolve(g.value)),async navigate(){await WR(k.value,{replace:i.replace,external:p.value||l.value})}}}return wn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=wt(),{to:l,href:u,navigate:h,isExternal:d,hasTarget:p,isAbsoluteUrl:g}=s(i),w=Et(!1),k=Et(null),x=v=>{var R;k.value=i.custom?(R=v==null?void 0:v.$el)==null?void 0:R.nextElementSibling:v==null?void 0:v.$el};function N(v){var R,D;return!w.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===v:((R=i.prefetchOn)==null?void 0:R[v])??((D=t.prefetchOn)==null?void 0:D[v]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!VN()}async function C(v=De()){if(w.value)return;w.value=!0;const R=typeof l.value=="string"?l.value:d.value?kh(l.value):a.resolve(l.value).fullPath,D=d.value?new URL(R,window.location.href).href:R;await Promise.all([v.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&j0(l.value,a).catch(()=>{})])}if(N("visibility")){const v=De();let R,D=null;pl(()=>{const M=LN();Al(()=>{R=Uh(()=>{var T;(T=k==null?void 0:k.value)!=null&&T.tagName&&(D=M.observe(k.value,async()=>{D==null||D(),D=null,await C(v)}))})})}),aa(()=>{R&&SP(R),D==null||D(),D=null})}return()=>{var D;if(!d.value&&!p.value&&!n(l.value)){const M={ref:x,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(N("interaction")&&(M.onPointerenter=C.bind(null,void 0),M.onFocus=C.bind(null,void 0)),w.value&&(M.class=i.prefetchedClass||t.prefetchedClass),M.rel=i.rel||void 0),vt(Vo("RouterLink"),M,o.default)}const v=i.target||null,R=xN(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:h,prefetch:C,get route(){if(!u.value)return;const M=new URL(u.value,window.location.href);return{path:M.pathname,fullPath:M.pathname,get query(){return oE(M.search)},hash:M.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:R,target:v,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:vt("a",{ref:k,href:u.value||null,rel:R,target:v},(D=o.default)==null?void 0:D.call(o))}}})}const DN=NN(ER);function c_(t,e){const n=e==="append"?Dc:vl;return dr(t)&&!t.startsWith("http")?t:n(t,!0)}function LN(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const MN=/2g/;function VN(){const t=navigator.connection;return!!(t&&(t.saveData||MN.test(t.effectiveType)))}var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,$0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function _(){}_.prototype=y.prototype,T.D=y.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(b,P,S){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return y.prototype[P].apply(b,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)b[P]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(P=0;16>P;++P)b[P]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=T.g[0],_=T.g[1],P=T.g[2];var S=T.g[3],I=y+(S^_&(P^S))+b[0]+3614090360&4294967295;y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[1]+3905402710&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[2]+606105819&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[3]+3250441966&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(S^_&(P^S))+b[4]+4118548399&4294967295,y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[5]+1200080426&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[6]+2821735955&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[7]+4249261313&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(S^_&(P^S))+b[8]+1770035416&4294967295,y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[9]+2336552879&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[10]+4294925233&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[11]+2304563134&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(S^_&(P^S))+b[12]+1804603682&4294967295,y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[13]+4254626195&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[14]+2792965006&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[15]+1236535329&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(P^S&(_^P))+b[1]+4129170786&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[6]+3225465664&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[11]+643717713&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[0]+3921069994&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(P^S&(_^P))+b[5]+3593408605&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[10]+38016083&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[15]+3634488961&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[4]+3889429448&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(P^S&(_^P))+b[9]+568446438&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[14]+3275163606&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[3]+4107603335&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[8]+1163531501&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(P^S&(_^P))+b[13]+2850285829&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[2]+4243563512&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[7]+1735328473&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[12]+2368359562&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(_^P^S)+b[5]+4294588738&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[8]+2272392833&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[11]+1839030562&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[14]+4259657740&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(_^P^S)+b[1]+2763975236&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[4]+1272893353&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[7]+4139469664&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[10]+3200236656&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(_^P^S)+b[13]+681279174&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[0]+3936430074&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[3]+3572445317&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[6]+76029189&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(_^P^S)+b[9]+3654602809&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[12]+3873151461&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[15]+530742520&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[2]+3299628645&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(P^(_|~S))+b[0]+4096336452&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[7]+1126891415&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[14]+2878612391&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[5]+4237533241&4294967295,_=P+(I<<21&4294967295|I>>>11),I=y+(P^(_|~S))+b[12]+1700485571&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[3]+2399980690&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[10]+4293915773&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[1]+2240044497&4294967295,_=P+(I<<21&4294967295|I>>>11),I=y+(P^(_|~S))+b[8]+1873313359&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[15]+4264355552&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[6]+2734768916&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[13]+1309151649&4294967295,_=P+(I<<21&4294967295|I>>>11),I=y+(P^(_|~S))+b[4]+4149444226&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[11]+3174756917&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[2]+718787259&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var _=y-this.blockSize,b=this.B,P=this.h,S=0;S<y;){if(P==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<y;)if(b[P++]=T.charCodeAt(S++),P==this.blockSize){s(this,b),P=0;break}}else for(;S<y;)if(b[P++]=T[S++],P==this.blockSize){s(this,b),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var _=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=_&255,_/=256;for(this.u(T),T=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)T[_++]=this.g[y]>>>b&255;return T};function i(T,y){var _=a;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=y(T)}function o(T,y){this.h=y;for(var _=[],b=!0,P=T.length-1;0<=P;P--){var S=T[P]|0;b&&S==y||(_[P]=S,b=!1)}this.g=_}var a={};function l(T){return-128<=T&&128>T?i(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return x(u(-T));for(var y=[],_=1,b=0;T>=_;b++)y[b]=T/_|0,_*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return x(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),b=d,P=0;P<T.length;P+=8){var S=Math.min(8,T.length-P),I=parseInt(T.substring(P,P+S),y);8>S?(S=u(Math.pow(y,S)),b=b.j(S).add(u(I))):(b=b.j(_),b=b.add(u(I)))}return b}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var T=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);T+=(0<=b?b:4294967296+b)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w(this))return"0";if(k(this))return"-"+x(this).toString(T);for(var y=u(Math.pow(T,6)),_=this,b="";;){var P=R(_,y).g;_=N(_,P.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=P,w(_))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function w(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=N(this,T),k(T)?-1:w(T)?0:1};function x(T){for(var y=T.g.length,_=[],b=0;b<y;b++)_[b]=~T.g[b];return new o(_,~T.h).add(p)}t.abs=function(){return k(this)?x(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0,P=0;P<=y;P++){var S=b+(this.i(P)&65535)+(T.i(P)&65535),I=(S>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);b=I>>>16,S&=65535,I&=65535,_[P]=I<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function N(T,y){return T.add(x(y))}t.j=function(T){if(w(this)||w(T))return d;if(k(this))return k(T)?x(this).j(x(T)):x(x(this).j(T));if(k(T))return x(this.j(x(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var y=this.g.length+T.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var P=0;P<T.g.length;P++){var S=this.i(b)>>>16,I=this.i(b)&65535,ge=T.i(P)>>>16,ve=T.i(P)&65535;_[2*b+2*P]+=I*ve,C(_,2*b+2*P),_[2*b+2*P+1]+=S*ve,C(_,2*b+2*P+1),_[2*b+2*P+1]+=I*ge,C(_,2*b+2*P+1),_[2*b+2*P+2]+=S*ge,C(_,2*b+2*P+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new o(_,0)};function C(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function v(T,y){this.g=T,this.h=y}function R(T,y){if(w(y))throw Error("division by zero");if(w(T))return new v(d,d);if(k(T))return y=R(x(T),y),new v(x(y.g),x(y.h));if(k(y))return y=R(T,x(y)),new v(x(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,b=y;0>=b.l(T);)_=D(_),b=D(b);var P=M(_,1),S=M(b,1);for(b=M(b,2),_=M(_,2);!w(b);){var I=S.add(b);0>=I.l(T)&&(P=P.add(_),S=I),b=M(b,1),_=M(_,1)}return y=N(T,P.j(y)),new v(P,y)}for(P=d;0<=T.l(y);){for(_=Math.max(1,Math.floor(T.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=u(_),I=S.j(y);k(I)||0<I.l(T);)_-=b,S=u(_),I=S.j(y);w(S)&&(S=p),P=P.add(S),T=N(T,I)}return new v(P,T)}t.A=function(T){return R(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&T.i(b);return new o(_,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|T.i(b);return new o(_,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^T.i(b);return new o(_,this.h^T.h)};function D(T){for(var y=T.g.length+1,_=[],b=0;b<y;b++)_[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(_,T.h)}function M(T,y){var _=y>>5;y%=32;for(var b=T.g.length-_,P=[],S=0;S<b;S++)P[S]=0<y?T.i(S+_)>>>y|T.i(S+_+1)<<32-y:T.i(S+_);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,$r=o}).apply(typeof l_<"u"?l_:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H0,co,q0,pc,Gh,z0,W0,K0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var E=0;E<c.length-1;E++){var L=c[E];if(!(L in m))break e;m=m[L]}c=c[c.length-1],E=m[c],f=f(E),f!=E&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,E=!1,L={next:function(){if(!E&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function w(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(E,L,F){for(var Q=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Q[Ve-2]=arguments[Ve];return f.prototype[L].apply(E,Q)}}function k(c){const f=c.length;if(0<f){const m=Array(f);for(let E=0;E<f;E++)m[E]=c[E];return m}return[]}function x(c,f){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const L=c.length||0,F=E.length||0;c.length=L+F;for(let Q=0;Q<F;Q++)c[L+Q]=E[Q]}else c.push(E)}}class N{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function C(c){return/^[\s\xa0]*$/.test(c)}function v(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function M(c,f,m){for(const E in c)f.call(m,c[E],E,c)}function T(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function y(c){const f={};for(const m in c)f[m]=c[m];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,f){let m,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(m in E)c[m]=E[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(E,m)&&(c[m]=E[m])}}function P(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function I(){var c=We;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class ge{constructor(){this.h=this.g=null}add(f,m){const E=ve.get();E.set(f,m),this.h?this.h.next=E:this.g=E,this.h=E}}var ve=new N(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,We=new ge,un=()=>{const c=a.Promise.resolve(void 0);se=()=>{c.then(tn)}};var tn=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(m){S(m)}var f=ve;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ne=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var mr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function bn(c,f){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{R(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ht[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&bn.aa.h.call(this)}}w(bn,Ge);var Ht={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(c,f,m,E,L){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!E,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,f,m,E,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Q=A(c,f,E,L);return-1<Q?(f=c[Q],m||(f.fa=!1)):(f=new X(f,this.src,F,!!E,L),f.fa=m,c.push(f)),f};function Le(c,f){var m=f.type;if(m in c.g){var E=c.g[m],L=Array.prototype.indexOf.call(E,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(E,L,1),F&&(re(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function A(c,f,m,E){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==E)return L}return-1}var O="closure_lm_"+(1e6*Math.random()|0),V={};function $(c,f,m,E,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)$(c,f[F],m,E,L);return null}return m=oe(m),c&&c[B]?c.K(f,m,u(E)?!!E.capture:!!E,L):U(c,f,m,!1,E,L)}function U(c,f,m,E,L,F){if(!f)throw Error("Invalid event type");var Q=u(L)?!!L.capture:!!L,Ve=ue(c);if(Ve||(c[O]=Ve=new Te(c)),m=Ve.add(f,m,E,Q,F),m.proxy)return m;if(E=q(),m.proxy=E,E.src=c,E.listener=m,c.addEventListener)mr||(L=Q),L===void 0&&(L=!1),c.addEventListener(f.toString(),E,L);else if(c.attachEvent)c.attachEvent(K(f.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return f.call(c.src,c.listener,m)}const f=z;return c}function Y(c,f,m,E,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(c,f[F],m,E,L);else E=u(E)?!!E.capture:!!E,m=oe(m),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=A(F,m,E,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=ue(c))&&(f=c.g[f.toString()],c=-1,f&&(c=A(f,m,E,L)),(m=-1<c?f[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])Le(f.i,c);else{var m=c.type,E=c.proxy;f.removeEventListener?f.removeEventListener(m,E,c.capture):f.detachEvent?f.detachEvent(K(m),E):f.addListener&&f.removeListener&&f.removeListener(E),(m=ue(f))?(Le(m,c),m.h==0&&(m.src=null,f[O]=null)):re(c)}}}function K(c){return c in V?V[c]:V[c]="on"+c}function z(c,f){if(c.da)c=!0;else{f=new bn(f,this);var m=c.listener,E=c.ha||c.src;c.fa&&G(c),c=m.call(E,f)}return c}function ue(c){return c=c[O],c instanceof Te?c:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[J]||(c[J]=function(f){return c.handleEvent(f)}),c[J])}function ie(){Ke.call(this),this.i=new Te(this),this.M=this,this.F=null}w(ie,Ke),ie.prototype[B]=!0,ie.prototype.removeEventListener=function(c,f,m,E){Y(this,c,f,m,E)};function fe(c,f){var m,E=c.F;if(E)for(m=[];E;E=E.F)m.push(E);if(c=c.M,E=f.type||f,typeof f=="string")f=new Ge(f,c);else if(f instanceof Ge)f.target=f.target||c;else{var L=f;f=new Ge(E,c),b(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Q=f.g=m[F];L=Pe(Q,E,!0,f)&&L}if(Q=f.g=c,L=Pe(Q,E,!0,f)&&L,L=Pe(Q,E,!1,f)&&L,m)for(F=0;F<m.length;F++)Q=f.g=m[F],L=Pe(Q,E,!1,f)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],E=0;E<m.length;E++)re(m[E]);delete c.g[f],c.h--}}this.F=null},ie.prototype.K=function(c,f,m,E){return this.i.add(String(c),f,!1,m,E)},ie.prototype.L=function(c,f,m,E){return this.i.add(String(c),f,!0,m,E)};function Pe(c,f,m,E){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var Q=f[F];if(Q&&!Q.da&&Q.capture==m){var Ve=Q.listener,pt=Q.ha||Q.src;Q.fa&&Le(c.i,Q),L=Ve.call(pt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Se(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Tt(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,Tt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class ht extends Ke{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(c){Ke.call(this),this.h=c,this.g={}}w(dt,Ke);var It=[];function gr(c){M(c.g,function(f,m){this.g.hasOwnProperty(m)&&G(f)},c),c.g={}}dt.prototype.N=function(){dt.aa.N.call(this),gr(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vs=a.JSON.stringify,Mt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Fs(){}Fs.prototype.h=null;function up(c){return c.h||(c.h=c.i())}function hp(){}var ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ru(){Ge.call(this,"d")}w(ru,Ge);function su(){Ge.call(this,"c")}w(su,Ge);var os={},fp=null;function wa(){return fp=fp||new ie}os.La="serverreachability";function dp(c){Ge.call(this,os.La,c)}w(dp,Ge);function $i(c){const f=wa();fe(f,new dp(f))}os.STAT_EVENT="statevent";function pp(c,f){Ge.call(this,os.STAT_EVENT,c),this.stat=f}w(pp,Ge);function Vt(c){const f=wa();fe(f,new pp(f,c))}os.Ma="timingevent";function mp(c,f){Ge.call(this,os.Ma,c),this.size=f}w(mp,Ge);function Hi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function qi(){this.g=!0}qi.prototype.xa=function(){this.g=!1};function uT(c,f,m,E,L,F){c.info(function(){if(c.g)if(F)for(var Q="",Ve=F.split("&"),pt=0;pt<Ve.length;pt++){var Ce=Ve[pt].split("=");if(1<Ce.length){var At=Ce[0];Ce=Ce[1];var Rt=At.split("_");Q=2<=Rt.length&&Rt[1]=="type"?Q+(At+"="+Ce+"&"):Q+(At+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+m+`
`+Q})}function hT(c,f,m,E,L,F,Q){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+Q})}function Us(c,f,m,E){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+dT(c,m)+(E?" "+E:"")})}function fT(c,f){c.info(function(){return"TIMEOUT: "+f})}qi.prototype.info=function(){};function dT(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var E=m[c];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Vs(m)}catch{return f}}var ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},iu;function Ta(){}w(Ta,Fs),Ta.prototype.g=function(){return new XMLHttpRequest},Ta.prototype.i=function(){return{}},iu=new Ta;function _r(c,f,m,E){this.j=c,this.i=f,this.l=m,this.R=E||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _p}function _p(){this.i=null,this.g="",this.h=!1}var yp={},ou={};function au(c,f,m){c.L=1,c.v=Sa(jn(f)),c.m=m,c.P=!0,vp(c,null)}function vp(c,f){c.F=Date.now(),Ia(c),c.A=jn(c.v);var m=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),Np(m.i,"t",E),c.C=0,m=c.j.J,c.h=new _p,c.g=Xp(c.j,m?f:null,!c.m),0<c.O&&(c.M=new ht(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,E=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(It[0]=L.toString()),L=It);for(var F=0;F<L.length;F++){var Q=$(m,L[F],E||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),$i(),uT(c.i,c.u,c.A,c.l,c.R,c.m)}_r.prototype.ca=function(c){c=c.target;const f=this.M;f&&$n(c)==3?f.j():this.Y(c)},_r.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=$n(this.g);var f=this.g.Ba();const $s=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Bp(this.g)))){this.J||Rt!=4||f==7||(f==8||0>=$s?$i(3):$i(2)),cu(this);var m=this.g.Z();this.X=m;t:if(Ep(this)){var E=Bp(this.g);c="";var L=E.length,F=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),zi(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(E[f],{stream:!(F&&f==L-1)});E.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,hT(this.i,this.u,this.A,this.l,this.R,Rt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,pt=this.g;if((Ve=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(Ve)){var Ce=Ve;break t}}Ce=null}if(m=Ce)Us(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lu(this,m);else{this.o=!1,this.s=3,Vt(12),as(this),zi(this);break e}}if(this.P){m=!0;let hn;for(;!this.J&&this.C<Q.length;)if(hn=pT(this,Q),hn==ou){Rt==4&&(this.s=4,Vt(14),m=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==yp){this.s=4,Vt(15),Us(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else Us(this.i,this.l,hn,null),lu(this,hn);if(Ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||Q.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)Us(this.i,this.l,Q,"[Invalid Chunked Response]"),as(this),zi(this);else if(0<Q.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),mu(At),At.M=!0,Vt(11))}}else Us(this.i,this.l,Q,null),lu(this,Q);Rt==4&&as(this),this.o&&!this.J&&(Rt==4?Kp(this.j,this):(this.o=!1,Ia(this)))}else OT(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),as(this),zi(this)}}}catch{}finally{}};function Ep(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function pT(c,f){var m=c.C,E=f.indexOf(`
`,m);return E==-1?ou:(m=Number(f.substring(m,E)),isNaN(m)?yp:(E+=1,E+m>f.length?ou:(f=f.slice(E,E+m),c.C=E+m,f)))}_r.prototype.cancel=function(){this.J=!0,as(this)};function Ia(c){c.S=Date.now()+c.I,wp(c,c.I)}function wp(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Hi(p(c.ba,c),f)}function cu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}_r.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(fT(this.i,this.A),this.L!=2&&($i(),Vt(17)),as(this),this.s=2,zi(this)):wp(this,this.S-c)};function zi(c){c.j.G==0||c.J||Kp(c.j,c)}function as(c){cu(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,gr(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function lu(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||uu(m.h,c))){if(!c.K&&uu(m.h,c)&&m.G==3){try{var E=m.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Na(m),Oa(m);else break e;pu(m),Vt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Hi(p(m.Za,m),6e3));if(1>=Ip(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ls(m,11)}else if((c.K||m.g==c)&&Na(m),!C(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Ce=L[f];if(m.T=Ce[0],Ce=Ce[1],m.G==2)if(Ce[0]=="c"){m.K=Ce[1],m.ia=Ce[2];const At=Ce[3];At!=null&&(m.la=At,m.j.info("VER="+m.la));const Rt=Ce[4];Rt!=null&&(m.Aa=Rt,m.j.info("SVER="+m.Aa));const $s=Ce[5];$s!=null&&typeof $s=="number"&&0<$s&&(E=1.5*$s,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const hn=c.g;if(hn){const La=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var F=E.h;F.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(hu(F,F.h),F.h=null))}if(E.D){const gu=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;gu&&(E.ya=gu,je(E.I,E.D,gu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var Q=c;if(E.qa=Yp(E,E.J?E.ia:null,E.W),Q.K){Ap(E.h,Q);var Ve=Q,pt=E.L;pt&&(Ve.I=pt),Ve.B&&(cu(Ve),Ia(Ve)),E.g=Q}else zp(E);0<m.i.length&&xa(m)}else Ce[0]!="stop"&&Ce[0]!="close"||ls(m,7);else m.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?ls(m,7):du(m):Ce[0]!="noop"&&m.l&&m.l.ta(Ce),m.v=0)}}$i(4)}catch{}}var mT=class{constructor(c,f){this.g=c,this.map=f}};function bp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ip(c){return c.h?1:c.g?c.g.size:0}function uu(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function hu(c,f){c.g?c.g.add(f):c.h=f}function Ap(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}bp.prototype.cancel=function(){if(this.i=Rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Rp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return k(c.i)}function gT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,E=0;E<m;E++)f.push(c[E]);return f}f=[],m=0;for(E in c)f[m++]=c[E];return f}function _T(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const E in c)f[m++]=E;return f}}}function Sp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=_T(c),E=gT(c),L=E.length,F=0;F<L;F++)f.call(void 0,E[F],m&&m[F],c)}var Cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yT(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var E=c[m].indexOf("="),L=null;if(0<=E){var F=c[m].substring(0,E);L=c[m].substring(E+1)}else F=c[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function cs(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof cs){this.h=c.h,Aa(this,c.j),this.o=c.o,this.g=c.g,Ra(this,c.s),this.l=c.l;var f=c.i,m=new Gi;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Pp(this,m),this.m=c.m}else c&&(f=String(c).match(Cp))?(this.h=!1,Aa(this,f[1]||"",!0),this.o=Wi(f[2]||""),this.g=Wi(f[3]||"",!0),Ra(this,f[4]),this.l=Wi(f[5]||"",!0),Pp(this,f[6]||"",!0),this.m=Wi(f[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}cs.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Ki(f,kp,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Ki(f,kp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Ki(m,m.charAt(0)=="/"?wT:ET,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Ki(m,TT)),c.join("")};function jn(c){return new cs(c)}function Aa(c,f,m){c.j=m?Wi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Ra(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Pp(c,f,m){f instanceof Gi?(c.i=f,IT(c.i,c.h)):(m||(f=Ki(f,bT)),c.i=new Gi(f,c.h))}function je(c,f,m){c.i.set(f,m)}function Sa(c){return je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Wi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ki(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,vT),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function vT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var kp=/[#\/\?@]/g,ET=/[#\?:]/g,wT=/[#\?]/g,bT=/[#\?@]/g,TT=/#/g;function Gi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function yr(c){c.g||(c.g=new Map,c.h=0,c.i&&yT(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Gi.prototype,t.add=function(c,f){yr(this),this.i=null,c=Bs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Op(c,f){yr(c),f=Bs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function xp(c,f){return yr(c),f=Bs(c,f),c.g.has(f)}t.forEach=function(c,f){yr(this),this.g.forEach(function(m,E){m.forEach(function(L){c.call(f,L,E,this)},this)},this)},t.na=function(){yr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let E=0;E<f.length;E++){const L=c[E];for(let F=0;F<L.length;F++)m.push(f[E])}return m},t.V=function(c){yr(this);let f=[];if(typeof c=="string")xp(this,c)&&(f=f.concat(this.g.get(Bs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return yr(this),this.i=null,c=Bs(this,c),xp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Np(c,f,m){Op(c,f),0<m.length&&(c.i=null,c.g.set(Bs(c,f),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var E=f[m];const F=encodeURIComponent(String(E)),Q=this.V(E);for(E=0;E<Q.length;E++){var L=F;Q[E]!==""&&(L+="="+encodeURIComponent(String(Q[E]))),c.push(L)}}return this.i=c.join("&")};function Bs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function IT(c,f){f&&!c.j&&(yr(c),c.i=null,c.g.forEach(function(m,E){var L=E.toLowerCase();E!=L&&(Op(this,E),Np(this,L,m))},c)),c.j=f}function AT(c,f){const m=new qi;if(a.Image){const E=new Image;E.onload=g(vr,m,"TestLoadImage: loaded",!0,f,E),E.onerror=g(vr,m,"TestLoadImage: error",!1,f,E),E.onabort=g(vr,m,"TestLoadImage: abort",!1,f,E),E.ontimeout=g(vr,m,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else f(!1)}function RT(c,f){const m=new qi,E=new AbortController,L=setTimeout(()=>{E.abort(),vr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:E.signal}).then(F=>{clearTimeout(L),F.ok?vr(m,"TestPingServer: ok",!0,f):vr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),vr(m,"TestPingServer: error",!1,f)})}function vr(c,f,m,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(m)}catch{}}function ST(){this.g=new nn}function CT(c,f,m){const E=m||"";try{Sp(c,function(L,F){let Q=L;u(L)&&(Q=Vs(L)),f.push(E+F+"="+encodeURIComponent(Q))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function Ca(c){this.l=c.Ub||null,this.j=c.eb||!1}w(Ca,Fs),Ca.prototype.g=function(){return new Pa(this.l,this.j)},Ca.prototype.i=function(c){return function(){return c}}({});function Pa(c,f){ie.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Pa,ie),t=Pa.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Yi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Qi(this):Yi(this),this.readyState==3&&Dp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Qi(this))},t.Qa=function(c){this.g&&(this.response=c,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Yi(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Yi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Lp(c){let f="";return M(c,function(m,E){f+=E,f+=":",f+=m,f+=`\r
`}),f}function fu(c,f,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=Lp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):je(c,f,m))}function Xe(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Xe,ie);var PT=/^https?$/i,kT=["POST","PUT"];t=Xe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():iu.g(),this.v=this.o?up(this.o):up(iu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){Mp(this,F);return}if(c=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)m.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())m.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(kT,f,void 0))||E||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of m)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Up(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Mp(this,F)}};function Mp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Vp(c),ka(c)}function Vp(c){c.A||(c.A=!0,fe(c,"complete"),fe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,fe(this,"complete"),fe(this,"abort"),ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ka(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fp(this):this.bb())},t.bb=function(){Fp(this)};function Fp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||$n(c)!=4||c.Z()!=2)){if(c.u&&$n(c)==4)Se(c.Ea,0,c);else if(fe(c,"readystatechange"),$n(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var E;if(E=Q===0){var L=String(c.D).match(Cp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),E=!PT.test(L?L.toLowerCase():"")}m=E}if(m)fe(c,"complete"),fe(c,"success");else{c.m=6;try{var F=2<$n(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Vp(c)}}finally{ka(c)}}}}function ka(c,f){if(c.g){Up(c);const m=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||fe(c,"ready");try{m.onreadystatechange=E}catch{}}}function Up(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function $n(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Mt(f)}};function Bp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function OT(c){const f={};c=(c.g&&2<=$n(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(C(c[E]))continue;var m=P(c[E]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}T(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function jp(c){this.Aa=0,this.i=[],this.j=new qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xi("baseRetryDelayMs",5e3,c),this.cb=Xi("retryDelaySeedMs",1e4,c),this.Wa=Xi("forwardChannelMaxRetries",2,c),this.wa=Xi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new bp(c&&c.concurrentRequestLimit),this.Da=new ST,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jp.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,E){Vt(0),this.W=c,this.H=f||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=Yp(this,null,this.W),xa(this)};function du(c){if($p(c),c.G==3){var f=c.U++,m=jn(c.I);if(je(m,"SID",c.K),je(m,"RID",f),je(m,"TYPE","terminate"),Ji(c,m),f=new _r(c,c.j,f),f.L=2,f.v=Sa(jn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Xp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ia(f)}Qp(c)}function Oa(c){c.g&&(mu(c),c.g.cancel(),c.g=null)}function $p(c){Oa(c),c.u&&(a.clearTimeout(c.u),c.u=null),Na(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function xa(c){if(!Tp(c.h)&&!c.s){c.s=!0;var f=c.Ga;se||un(),ne||(se(),ne=!0),We.add(f,c),c.B=0}}function xT(c,f){return Ip(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Hi(p(c.Ga,c,f),Gp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new _r(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),b(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=qp(this,L,f),m=jn(this.I),je(m,"RID",c),je(m,"CVER",22),this.D&&je(m,"X-HTTP-Session-Id",this.D),Ji(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Lp(F)))+"&"+f:this.m&&fu(m,this.m,F)),hu(this.h,L),this.Ua&&je(m,"TYPE","init"),this.P?(je(m,"$req",f),je(m,"SID","null"),L.T=!0,au(L,m,null)):au(L,m,f),this.G=2}}else this.G==3&&(c?Hp(this,c):this.i.length==0||Tp(this.h)||Hp(this))};function Hp(c,f){var m;f?m=f.l:m=c.U++;const E=jn(c.I);je(E,"SID",c.K),je(E,"RID",m),je(E,"AID",c.T),Ji(c,E),c.m&&c.o&&fu(E,c.m,c.o),m=new _r(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=qp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),hu(c.h,m),au(m,E,f)}function Ji(c,f){c.H&&M(c.H,function(m,E){je(f,E,m)}),c.l&&Sp({},function(m,E){je(f,E,m)})}function qp(c,f,m){m=Math.min(c.i.length,m);var E=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Q=["count="+m];F==-1?0<m?(F=L[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Ve=!0;for(let pt=0;pt<m;pt++){let Ce=L[pt].g;const At=L[pt].map;if(Ce-=F,0>Ce)F=Math.max(0,L[pt].g-100),Ve=!1;else try{CT(At,Q,"req"+Ce+"_")}catch{E&&E(At)}}if(Ve){E=Q.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,E}function zp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;se||un(),ne||(se(),ne=!0),We.add(f,c),c.v=0}}function pu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Hi(p(c.Fa,c),Gp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Wp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Hi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Oa(this),Wp(this))};function mu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Wp(c){c.g=new _r(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=jn(c.qa);je(f,"RID","rpc"),je(f,"SID",c.K),je(f,"AID",c.T),je(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&je(f,"TO",c.ja),je(f,"TYPE","xmlhttp"),Ji(c,f),c.m&&c.o&&fu(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Sa(jn(f)),m.m=null,m.P=!0,vp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Oa(this),pu(this),Vt(19))};function Na(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Kp(c,f){var m=null;if(c.g==f){Na(c),mu(c),c.g=null;var E=2}else if(uu(c.h,f))m=f.D,Ap(c.h,f),E=1;else return;if(c.G!=0){if(f.o)if(E==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;E=wa(),fe(E,new mp(E,m)),xa(c)}else zp(c);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&xT(c,f)||E==2&&pu(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),L){case 1:ls(c,5);break;case 4:ls(c,10);break;case 3:ls(c,6);break;default:ls(c,2)}}}function Gp(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function ls(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),E=c.Xa;const L=!E;E=new cs(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Aa(E,"https"),Sa(E),L?AT(E.toString(),m):RT(E.toString(),m)}else Vt(2);c.G=0,c.l&&c.l.sa(f),Qp(c),$p(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Qp(c){if(c.G=0,c.ka=[],c.l){const f=Rp(c.h);(f.length!=0||c.i.length!=0)&&(x(c.ka,f),x(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function Yp(c,f,m){var E=m instanceof cs?jn(m):new cs(m);if(E.g!="")f&&(E.g=f+"."+E.g),Ra(E,E.s);else{var L=a.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new cs(null);E&&Aa(F,E),f&&(F.g=f),L&&Ra(F,L),m&&(F.l=m),E=F}return m=c.D,f=c.ya,m&&f&&je(E,m,f),je(E,"VER",c.la),Ji(c,E),E}function Xp(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Xe(new Ca({eb:m})):new Xe(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jp(){}t=Jp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Da(){}Da.prototype.g=function(c,f){return new Qt(c,f)};function Qt(c,f){ie.call(this),this.g=new jp(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!C(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!C(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new js(this)}w(Qt,ie),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){du(this.g)},Qt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Vs(c),c=m);f.i.push(new mT(f.Ya++,c)),f.G==3&&xa(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,du(this.g),delete this.g,Qt.aa.N.call(this)};function Zp(c){ru.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}w(Zp,ru);function em(){su.call(this),this.status=1}w(em,su);function js(c){this.g=c}w(js,Jp),js.prototype.ua=function(){fe(this.g,"a")},js.prototype.ta=function(c){fe(this.g,new Zp(c))},js.prototype.sa=function(c){fe(this.g,new em)},js.prototype.ra=function(){fe(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,K0=function(){return new Da},W0=function(){return wa()},z0=os,Gh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ba.NO_ERROR=0,ba.TIMEOUT=8,ba.HTTP_ERROR=6,pc=ba,gp.COMPLETE="complete",q0=gp,hp.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",ie.prototype.listen=ie.prototype.K,co=hp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,H0=Xe}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});const u_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Mi="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new ad("@firebase/firestore");function Gs(){return Ss.logLevel}function te(t,...e){if(Ss.logLevel<=Ee.DEBUG){const n=e.map(vd);Ss.debug(`Firestore (${Mi}): ${t}`,...n)}}function ar(t,...e){if(Ss.logLevel<=Ee.ERROR){const n=e.map(vd);Ss.error(`Firestore (${Mi}): ${t}`,...n)}}function bi(t,...e){if(Ss.logLevel<=Ee.WARN){const n=e.map(vd);Ss.warn(`Firestore (${Mi}): ${t}`,...n)}}function vd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function Ne(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class UN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BN{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new G0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Ct(e)}}class jN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class $N{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new jN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new HN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=zN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Sn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Sn.isNumericId(e),s=Sn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $r.fromString(e.substring(4,e.length-2))}}class qe extends Sn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const WN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Sn{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return WN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(qe.fromString(e))}static fromName(e){return new he(qe.fromString(e).popFirst(5))}static empty(){return new he(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new qe(e.slice()))}}function KN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Kr(s,he.empty(),e)}function GN(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(_e.min(),he.empty(),-1)}static max(){return new Kr(_e.max(),he.empty(),-1)}}function QN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==YN)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function JN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xl.oe=-1;function Nl(t){return t==null}function Gc(t){return t===0&&1/t==-1/0}function ZN(t){return typeof t=="number"&&Number.isInteger(t)&&!Gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=h_(e)),e=t2(t.get(n),e);return h_(e)}function t2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function h_(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ut(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class X0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new X0("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const n2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=n2.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dl(t){const e=t.mapValue.fields.__previous_value__;return Ed(e)?Dl(e):e}function Go(t){const e=Gr(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ed(t)?4:i2(t)?9007199254740991:s2(t)?10:11:me()}function Vn(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gr(s.timestampValue),a=Gr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qr(s.bytesValue).isEqual(Qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Gc(o)===Gc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(f_(o)!==f_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Vn(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function Yo(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return p_(t.timestampValue,e.timestampValue);case 4:return p_(Go(t),Go(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Qr(i),l=Qr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Ie(a[u],l[u]);if(h!==0)return h}return Ie(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ie(nt(i.latitude),nt(o.latitude));return a!==0?a:Ie(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return m_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=Ie(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:m_(g,w)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xa.mapValue&&o===Xa.mapValue)return 0;if(i===Xa.mapValue)return 1;if(o===Xa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Ie(l[d],h[d]);if(p!==0)return p;const g=Ii(a[l[d]],u[h[d]]);if(g!==0)return g}return Ie(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function p_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Gr(t),r=Gr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function m_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ii(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function Ai(t){return Qh(t)}function Qh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qh(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function mc(t){switch(Yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dl(t);return e?16+mc(e):16;case 5:return 2*t.stringValue.length;case 6:return Qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+mc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ss(r.fields,(i,o)=>{s+=i.length+mc(o)}),s}(t.mapValue);default:throw me()}}function Yh(t){return!!t&&"integerValue"in t}function wd(t){return!!t&&"arrayValue"in t}function g_(t){return!!t&&"nullValue"in t}function __(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gc(t){return!!t&&"mapValue"in t}function s2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function i2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Io(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];gc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(Io(this.value))}}function J0(t){const e=[];return ss(t.fields,(n,r)=>{const s=new yt([n]);if(gc(r)){const i=J0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qc{constructor(e,n){this.position=e,this.inclusive=n}}function y_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Ii(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function v_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yc{constructor(e,n="asc"){this.field=e,this.dir=n}}function o2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Z0{}class at extends Z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new c2(e,n,r):n==="array-contains"?new h2(e,r):n==="in"?new f2(e,r):n==="not-in"?new d2(e,r):n==="array-contains-any"?new p2(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new l2(e,r):new u2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ii(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(Ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends Z0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Fn(e,n)}matches(e){return ew(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ew(t){return t.op==="and"}function tw(t){return a2(t)&&ew(t)}function a2(t){for(const e of t.filters)if(e instanceof Fn)return!1;return!0}function Xh(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Ai(t.value);if(tw(t))return t.filters.map(e=>Xh(e)).join(",");{const e=t.filters.map(n=>Xh(n)).join(",");return`${t.op}(${e})`}}function nw(t,e){return t instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&Vn(r.value,s.value)}(t,e):t instanceof Fn?function(r,s){return s instanceof Fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&nw(o,s.filters[a]),!0):!1}(t,e):void me()}function rw(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Ai(n.value)}`}(t):t instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(rw).join(" ,")+"}"}(t):"Filter"}class c2 extends at{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class l2 extends at{constructor(e,n){super(e,"in",n),this.keys=sw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class u2 extends at{constructor(e,n){super(e,"not-in",n),this.keys=sw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class h2 extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wd(n)&&Yo(n.arrayValue,this.value)}}class f2 extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yo(this.value.arrayValue,n)}}class d2 extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yo(this.value.arrayValue,n)}}class p2 extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yo(this.value.arrayValue,r))}}/**
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
 */class m2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function E_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new m2(t,e,n,r,s,i,o)}function bd(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ai(r)).join(",")),e.ue=n}return e.ue}function Td(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!o2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!v_(t.startAt,e.startAt)&&v_(t.endAt,e.endAt)}function Jh(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function g2(t,e,n,r,s,i,o,a){return new Ll(t,e,n,r,s,i,o,a)}function iw(t){return new Ll(t)}function w_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _2(t){return t.collectionGroup!==null}function Ao(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Yc(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new Yc(yt.keyField(),r))}return e.ce}function Ln(t){const e=ye(t);return e.le||(e.le=y2(e,Ao(t))),e.le}function y2(t,e){if(t.limitType==="F")return E_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yc(s.field,i)});const n=t.endAt?new Qc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qc(t.startAt.position,t.startAt.inclusive):null;return E_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zh(t,e,n){return new Ll(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ml(t,e){return Td(Ln(t),Ln(e))&&t.limitType===e.limitType}function ow(t){return`${bd(Ln(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rw(s)).join(", ")}]`),Nl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ai(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ai(s)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function Vl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=y_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ao(r),s)||r.endAt&&!function(o,a,l){const u=y_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ao(r),s))}(t,e)}function v2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aw(t){return(e,n)=>{let r=!1;for(const s of Ao(t)){const i=E2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function E2(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ii(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Y0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=new Ye(he.comparator);function cr(){return w2}const cw=new Ye(he.comparator);function lo(...t){let e=cw;for(const n of t)e=e.insert(n.key,n);return e}function lw(t){let e=cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _s(){return Ro()}function uw(){return Ro()}function Ro(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const b2=new Ye(he.comparator),T2=new ut(he.comparator);function be(...t){let e=T2;for(const n of t)e=e.add(n);return e}const I2=new ut(Ie);function A2(){return I2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gc(e)?"-0":e}}function hw(t){return{integerValue:""+t}}function R2(t,e){return ZN(e)?hw(e):Id(t,e)}/**
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
 */class Fl{constructor(){this._=void 0}}function S2(t,e,n){return t instanceof Xc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ed(i)&&(i=Dl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Xo?dw(t,e):t instanceof Jo?pw(t,e):function(s,i){const o=fw(s,i),a=b_(o)+b_(s.Pe);return Yh(o)&&Yh(s.Pe)?hw(a):Id(s.serializer,a)}(t,e)}function C2(t,e,n){return t instanceof Xo?dw(t,e):t instanceof Jo?pw(t,e):n}function fw(t,e){return t instanceof Jc?function(r){return Yh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xc extends Fl{}class Xo extends Fl{constructor(e){super(),this.elements=e}}function dw(t,e){const n=mw(e);for(const r of t.elements)n.some(s=>Vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Jo extends Fl{constructor(e){super(),this.elements=e}}function pw(t,e){let n=mw(e);for(const r of t.elements)n=n.filter(s=>!Vn(s,r));return{arrayValue:{values:n}}}class Jc extends Fl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function b_(t){return nt(t.integerValue||t.doubleValue)}function mw(t){return wd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function P2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xo&&s instanceof Xo||r instanceof Jo&&s instanceof Jo?Ti(r.elements,s.elements,Vn):r instanceof Jc&&s instanceof Jc?Vn(r.Pe,s.Pe):r instanceof Xc&&s instanceof Xc}(t.transform,e.transform)}class k2{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ad(t.key,an.none()):new ma(t.key,t.data,an.none());{const n=t.data,r=Kt.empty();let s=new ut(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new is(t.key,r,new Xt(s.toArray()),an.none())}}function O2(t,e,n){t instanceof ma?function(s,i,o){const a=s.value.clone(),l=I_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,i,o){if(!_c(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=I_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(_w(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof ma?function(i,o,a,l){if(!_c(i.precondition,o))return a;const u=i.value.clone(),h=A_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof is?function(i,o,a,l){if(!_c(i.precondition,o))return a;const u=A_(i.fieldTransforms,l,o),h=o.data;return h.setAll(_w(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return _c(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function x2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fw(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function T_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ti(r,s,(i,o)=>P2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends Ul{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class is extends Ul{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function I_(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,C2(o,a,n[s]))}return r}function A_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,S2(i,o,e))}return r}class Ad extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class N2 extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&O2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=gw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(n,r)=>T_(n,r))&&Ti(this.baseMutations,e.baseMutations,(n,r)=>T_(n,r))}}class Rd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return b2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Rd(e,n,r,s)}}/**
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
 */class L2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class M2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,Ae;function V2(t){switch(t){default:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function yw(t){if(t===void 0)return ar("GRPC error has no .code"),H.UNKNOWN;switch(t){case rt.OK:return H.OK;case rt.CANCELLED:return H.CANCELLED;case rt.UNKNOWN:return H.UNKNOWN;case rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case rt.INTERNAL:return H.INTERNAL;case rt.UNAVAILABLE:return H.UNAVAILABLE;case rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case rt.NOT_FOUND:return H.NOT_FOUND;case rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case rt.ABORTED:return H.ABORTED;case rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case rt.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Ae=rt||(rt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function F2(){return new TextEncoder}/**
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
 */const U2=new $r([4294967295,4294967295],0);function R_(t){const e=F2().encode(t),n=new $0;return n.update(e),new Uint8Array(n.digest())}function S_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $r([n,r],0),new $r([s,i],0)]}class Sd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=$r.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply($r.fromNumber(r)));return s.compare(U2)===1&&(s=new $r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=R_(e),[r,s]=S_(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ee(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=R_(e),[r,s]=S_(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bl(_e.min(),s,new Ye(Ie),cr(),be())}}class ga{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class vw{constructor(e,n){this.targetId=e,this.me=n}}class Ew{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class C_{constructor(){this.fe=0,this.ge=P_(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),n=be(),r=be();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new ga(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=P_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class B2{constructor(e){this.Be=e,this.Le=new Map,this.ke=cr(),this.qe=Ja(),this.Qe=Ja(),this.Ke=new Ye(Ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Jh(i))if(r===0){const o=new he(i.path);this.We(n,o,xt.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Qr(r).toUint8Array()}catch(l){if(l instanceof X0)return bi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Sd(o,s,i)}catch(l){return bi(l instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Le.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Jh(a.target)){const l=new he(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,xt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=be();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Bl(e,n,this.Ke,this.ke,r);return this.ke=cr(),this.qe=Ja(),this.Qe=Ja(),this.Ke=new Ye(Ie),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new C_,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ut(Ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new C_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Ja(){return new Ye(he.comparator)}function P_(){return new Ye(he.comparator)}const j2={asc:"ASCENDING",desc:"DESCENDING"},$2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H2={and:"AND",or:"OR"};class q2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ef(t,e){return t.useProto3Json||Nl(e)?e:{value:e}}function Zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ww(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function z2(t,e){return Zc(t,e.toTimestamp())}function Mn(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=Gr(n);return new lt(r.seconds,r.nanos)}(t))}function Cd(t,e){return tf(t,e).canonicalString()}function tf(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bw(t){const e=qe.fromString(t);return Ne(Sw(e)),e}function nf(t,e){return Cd(t.databaseId,e.path)}function zu(t,e){const n=bw(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Iw(n))}function Tw(t,e){return Cd(t.databaseId,e)}function W2(t){const e=bw(t);return e.length===4?qe.emptyPath():Iw(e)}function rf(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iw(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function k_(t,e,n){return{name:nf(t,e),fields:n.value.mapValue.fields}}function K2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ne(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(Ne(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:yw(u.code);return new ce(h,u.message||"")}(o);n=new Ew(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zu(t,r.document.name),i=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):_e.min(),a=new Kt({mapValue:{fields:r.document.fields}}),l=xt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new yc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zu(t,r.document),i=r.readTime?Mn(r.readTime):_e.min(),o=xt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new yc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zu(t,r.document),i=r.removedTargetIds||[];n=new yc([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new M2(s,i),a=r.targetId;n=new vw(a,o)}}return n}function G2(t,e){let n;if(e instanceof ma)n={update:k_(t,e.key,e.value)};else if(e instanceof Ad)n={delete:nf(t,e.key)};else if(e instanceof is)n={update:k_(t,e.key,e.data),updateMask:rD(e.fieldMask)};else{if(!(e instanceof N2))return me();n={verify:nf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Xc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:z2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function Q2(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Mn(s.updateTime):Mn(i);return o.isEqual(_e.min())&&(o=Mn(i)),new k2(o,s.transformResults||[])}(n,e))):[]}function Y2(t,e){return{documents:[Tw(t,e.path)]}}function X2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tw(t,s);const i=function(u){if(u.length!==0)return Rw(Fn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ys(p.field),direction:eD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ef(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function J2(t){let e=W2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=Aw(d);return p instanceof Fn&&tw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(w){return new Yc(Xs(w.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Nl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Qc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Qc(g,p)}(n.endAt)),g2(e,s,o,i,a,"F",l,u)}function Z2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Aw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xs(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(r=>Aw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function eD(t){return j2[t]}function tD(t){return $2[t]}function nD(t){return H2[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return yt.fromServerFormat(t.fieldPath)}function Rw(t){return t instanceof at?function(n){if(n.op==="=="){if(__(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(g_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(__(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(g_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:tD(n.op),value:n.value}}}(t):t instanceof Fn?function(n){const r=n.getFilters().map(s=>Rw(s));return r.length===1?r[0]:{compositeFilter:{op:nD(n.op),filters:r}}}(t):me()}function rD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sD{constructor(e){this.ht=e}}function iD(t){const e=J2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zh(e,e.limit,"L"):e}/**
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
 */class oD{constructor(){this.ln=new aD}addToCollectionParentIndex(e,n){return this.ln.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Kr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class aD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(qe.comparator)).toArray()}}/**
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
 */const O_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(41943040,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ri(0)}static Qn(){return new Ri(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class cD{constructor(e){this.Gn=e,this.buffer=new ut(x_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();x_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fi(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Yn(3e5)})}}class uD{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(xl.oe);const r=new cD(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(O_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),O_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Gs()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function hD(t,e){return new uD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&So(r.mutation,s,Xt.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=lo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=cr();const o=Ro(),a=function(){return Ro()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof is)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),So(h.mutation,u,h.mutation.getFieldMask(),lt.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new dD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ro();let s=new Ye((o,a)=>o-a),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Xt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||be()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=uw();h.forEach(p=>{if(!i.has(p)){const g=gw(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(_s());let a=-1,l=i;return o.next(u=>j.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,be())).next(h=>({batchId:a,changes:lw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=lo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(d,p){return new Ll(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,xt.newInvalidDocument(h)))});let a=lo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&So(h.mutation,u,Xt.empty(),lt.now()),Vl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return j.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Mn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:iD(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class gD{constructor(){this.overlays=new Ye(he.comparator),this.dr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_s();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=_s(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=_s(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=_s(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return j.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new L2(n,r));let i=this.dr.get(n);i===void 0&&(i=be(),this.dr.set(n,i)),this.dr.set(n,i.add(r.key))}}/**
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
 */class _D{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.Er=new ut(ft.Ar),this.Rr=new ut(ft.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ft(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new he(new qe([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new he(new qe([])),r=new ft(n,e),s=new ft(n,e+1);let i=be();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Er.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return he.comparator(e.key,n.key)||Ie(e.br,n.br)}static Vr(e,n){return Ie(e.br,n.br)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ut(ft.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new D2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new ft(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ie);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),j.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ft(new he(i),0);let a=new ut(Ie);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.br)),!0)},o),j.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return j.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,n){const r=new ft(n,0),s=this.vr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.Nr=e,this.docs=function(){return new Ye(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cr();const o=n.path,a=new he(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||QN(GN(h),r)<=0||(s.has(h.key)||Vl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Br(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ED(this)}getSize(e){return j.resolve(this.size)}}class ED extends fD{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.persistence=e,this.Lr=new Ls(n=>bd(n),Td),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new Pd,this.targetCount=0,this.Qr=Ri.qn()}forEachTarget(e,n){return this.Lr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),j.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Un(n),j.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Lr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Lr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Lr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.Kr={},this.overlays={},this.$r=new xl(0),this.Ur=!1,this.Ur=!0,this.Wr=new _D,this.referenceDelegate=e(this),this.Gr=new wD(this),this.indexManager=new oD,this.remoteDocumentCache=function(s){return new vD(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new sD(n),this.jr=new mD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new yD(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new bD(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return j.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class bD extends XN{constructor(e){super(),this.currentSequenceNumber=e}}class kd{constructor(e){this.persistence=e,this.Zr=new Pd,this.Xr=null}static ei(e){return new kd(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),j.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,r=>{const s=he.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return j.or([()=>j.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class el{constructor(e,n){this.persistence=e,this.ri=new Ls(r=>e2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hD(this,n)}static ei(e,n){return new el(e,n)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return j.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Br(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mc(e.data.value)),n}ir(e,n,r){return j.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Od(e,n.fromCache,r,s)}}/**
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
 */class TD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ID{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return QP()?8:JN(Dt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TD;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Gs()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(Gs()<=Ee.DEBUG&&te("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Gs()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):j.resolve())}Xi(e,n){if(w_(n))return j.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zh(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(e,Zh(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,r,s){return w_(n)||s.isEqual(_e.min())?j.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?j.resolve(null):(Gs()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qs(n)),this.os(e,o,n,KN(s,-1)).next(a=>a))})}rs(e,n){let r=new ut(aw(e));return n.forEach((s,i)=>{Vl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Gs()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.Zi.getDocumentsMatchingQuery(e,n,Kr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(Ie),this.cs=new Ls(i=>bd(i),Td),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function RD(t,e,n,r){return new AD(t,e,n,r)}async function Pw(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=be();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function SD(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=j.resolve();return p.forEach(w=>{g=g.next(()=>h.getEntry(l,w)).next(k=>{const x=u.docVersions.get(w);Ne(x!==null),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=be();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kw(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function CD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let l=cr(),u=be();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(PD(i,o,e.documentUpdates).next(h=>{l=h.Is,u=h.ds})),!r.isEqual(_e.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.us=s,i))}function PD(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,ds:s}})}function kD(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OD(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function sf(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function N_(t,e,n){const r=ye(t);let s=_e.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=ye(l),p=d.cs.get(h);return p!==void 0?j.resolve(d.us.get(p)):d.Gr.getTargetData(u,h)}(r,o,Ln(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:be())).next(a=>(xD(r,v2(e),a),{documents:a,Es:i})))}function xD(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class D_{constructor(){this.activeTargetIds=A2()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ND{constructor(){this._o=new D_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new D_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DD{uo(e){}shutdown(){}}/**
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
 */class L_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Za=null;function Wu(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class VD extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=Wu(),l=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,i,o),this.Lo(n,l,u,s).then(h=>(te("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw bi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=LD[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,r,s){const i=Wu();return new Promise((o,a)=>{const l=new H0;l.setWithCredentials(!0),l.listenOnce(q0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case pc.NO_ERROR:const h=l.getResponseJson();te(St,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case pc.TIMEOUT:te(St,`RPC '${e}' ${i} timed out`),a(new ce(H.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const d=l.getStatus();if(te(St,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const w=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(N)>=0?N:H.UNKNOWN}(g.status);a(new ce(w,g.message))}else a(new ce(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(St,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(St,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Wu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K0(),a=W0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");te(St,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const w=new MD({Eo:x=>{g?te(St,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(p||(te(St,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(St,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},Ao:()=>d.close()}),k=(x,N,C)=>{x.listen(N,v=>{try{C(v)}catch(R){setTimeout(()=>{throw R},0)}})};return k(d,co.EventType.OPEN,()=>{g||(te(St,`RPC '${e}' stream ${s} transport opened.`),w.So())}),k(d,co.EventType.CLOSE,()=>{g||(g=!0,te(St,`RPC '${e}' stream ${s} transport closed`),w.Do())}),k(d,co.EventType.ERROR,x=>{g||(g=!0,bi(St,`RPC '${e}' stream ${s} transport errored:`,x),w.Do(new ce(H.UNAVAILABLE,"The operation could not be completed")))}),k(d,co.EventType.MESSAGE,x=>{var N;if(!g){const C=x.data[0];Ne(!!C);const v=C,R=(v==null?void 0:v.error)||((N=v[0])===null||N===void 0?void 0:N.error);if(R){te(St,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let M=function(_){const b=rt[_];if(b!==void 0)return yw(b)}(D),T=R.message;M===void 0&&(M=H.INTERNAL,T="Unknown error status: "+D+" with message "+R.message),g=!0,w.Do(new ce(M,T)),d.close()}else te(St,`RPC '${e}' stream ${s} received:`,C),w.vo(C)}}),k(a,z0.STAT_EVENT,x=>{x.stat===Gh.PROXY?te(St,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Gh.NOPROXY&&te(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.bo()},0),w}}function Ku(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){return new q2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n,r,s,i,o,a,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ow(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ce(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FD extends xw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=K2(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Mn(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=rf(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Jh(l)?{documents:Y2(i,l)}:{query:X2(i,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ww(i,o.resumeToken);const u=ef(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=Zc(i,o.snapshotVersion.toTimestamp());const u=ef(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Z2(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=rf(this.serializer),n.removeTarget=e,this.c_(n)}}class UD extends xw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=Q2(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=rf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>G2(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,tf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(H.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,tf(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(H.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class jD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ar(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.k_.add(4),await _a(u),u.K_.set("Unknown"),u.k_.delete(4),await $l(u)}(this))})}),this.K_=new jD(r,s)}}async function $l(t){if(Ms(t))for(const e of t.q_)await e(!0)}async function _a(t){for(const e of t.q_)await e(!1)}function Nw(t,e){const n=ye(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Ld(n)?Dd(n):Ui(n).s_()&&Nd(n,e))}function xd(t,e){const n=ye(t),r=Ui(n);n.L_.delete(e),r.s_()&&Dw(n,e),n.L_.size===0&&(r.s_()?r.a_():Ms(n)&&n.K_.set("Unknown"))}function Nd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ui(t).V_(e)}function Dw(t,e){t.U_.xe(e),Ui(t).m_(e)}function Dd(t){t.U_=new B2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ui(t).start(),t.K_.F_()}function Ld(t){return Ms(t)&&!Ui(t).i_()&&t.L_.size>0}function Ms(t){return ye(t).k_.size===0}function Lw(t){t.U_=void 0}async function HD(t){t.K_.set("Online")}async function qD(t){t.L_.forEach((e,n)=>{Nd(t,e)})}async function zD(t,e){Lw(t),Ld(t)?(t.K_.O_(e),Dd(t)):t.K_.set("Unknown")}async function WD(t,e,n){if(t.K_.set("Online"),e instanceof Ew&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.L_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.L_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tl(t,r)}else if(e instanceof yc?t.U_.$e(e):e instanceof vw?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await kw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.L_.get(u);h&&i.L_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.L_.get(l);if(!h)return;i.L_.set(l,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),Dw(i,l);const d=new Mr(h.target,l,u,h.sequenceNumber);Nd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await tl(t,r)}}async function tl(t,e,n){if(!Fi(e))throw e;t.k_.add(1),await _a(t),t.K_.set("Offline"),n||(n=()=>kw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await $l(t)})}function Mw(t,e){return e().catch(n=>tl(t,n,e))}async function Hl(t){const e=ye(t),n=Xr(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;KD(e);)try{const s=await kD(e.localStore,r);if(s===null){e.B_.length===0&&n.a_();break}r=s.batchId,GD(e,s)}catch(s){await tl(e,s)}Vw(e)&&Fw(e)}function KD(t){return Ms(t)&&t.B_.length<10}function GD(t,e){t.B_.push(e);const n=Xr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Vw(t){return Ms(t)&&!Xr(t).i_()&&t.B_.length>0}function Fw(t){Xr(t).start()}async function QD(t){Xr(t).w_()}async function YD(t){const e=Xr(t);for(const n of t.B_)e.g_(n.mutations)}async function XD(t,e,n){const r=t.B_.shift(),s=Rd.from(r,e,n);await Mw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hl(t)}async function JD(t,e){e&&Xr(t).f_&&await async function(r,s){if(function(o){return V2(o)&&o!==H.ABORTED}(s.code)){const i=r.B_.shift();Xr(r).__(),await Mw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hl(r)}}(t,e),Vw(t)&&Fw(t)}async function M_(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Ms(n);n.k_.add(3),await _a(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await $l(n)}async function ZD(t,e){const n=ye(t);e?(n.k_.delete(2),await $l(n)):e||(n.k_.add(2),await _a(n),n.K_.set("Unknown"))}function Ui(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new FD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:HD.bind(null,t),mo:qD.bind(null,t),po:zD.bind(null,t),R_:WD.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Ld(t)?Dd(t):t.K_.set("Unknown")):(await t.W_.stop(),Lw(t))})),t.W_}function Xr(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new UD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:QD.bind(null,t),po:JD.bind(null,t),p_:YD.bind(null,t),y_:XD.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Hl(t)):(await t.G_.stop(),t.B_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Md(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vd(t,e){if(ar("AsyncQueue",`${e}: ${t}`),Fi(t))return new ce(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{static emptySet(e){return new fi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.z_=new Ye(he.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Si(e,n,fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ml(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class tL{constructor(){this.queries=F_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=F_(),i.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new ce(H.ABORTED,"Firestore shutting down"))}}function F_(){return new Ls(t=>ow(t),Ml)}async function nL(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new eL,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Vd(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Fd(n)}async function rL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sL(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&Fd(n)}function iL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Fd(t){t.X_.forEach(e=>{e.next()})}var of,U_;(U_=of||(of={})).na="default",U_.Cache="cache";class oL{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==of.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.key=e}}class Bw{constructor(e){this.key=e}}class aL{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=aw(e),this.ma=new fi(this.Va)}get fa(){return this.Ea}ga(e,n){const r=n?n.pa:new V_,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Vl(this.query,d)?d:null,w=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?w!==k&&(r.track({type:3,doc:g}),x=!0):this.ya(p,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.Va(g,l)>0||u&&this.Va(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),x=!0):p&&!g&&(r.track({type:1,doc:p}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,w){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return k(g)-k(w)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new Si(this.query,e.ma,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new V_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Bw(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Uw(r))}),n}va(e){this.Ea=e.Es,this.Ra=be();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Si.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class cL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lL{constructor(e){this.key=e,this.Fa=!1}}class uL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ls(a=>ow(a),Ml),this.Oa=new Map,this.Na=new Set,this.Ba=new Ye(he.comparator),this.La=new Map,this.ka=new Pd,this.qa={},this.Qa=new Map,this.Ka=Ri.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function hL(t,e,n=!0){const r=Ww(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await jw(r,e,n,!0),s}async function fL(t,e){const n=Ww(t);await jw(n,e,!0,!1)}async function jw(t,e,n,r){const s=await OD(t.localStore,Ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await dL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Nw(t.remoteStore,s),a}async function dL(t,e,n,r,s){t.Ua=(d,p,g)=>async function(k,x,N,C){let v=x.view.ga(N);v.ss&&(v=await N_(k.localStore,x.query,!1).then(({documents:T})=>x.view.ga(T,v)));const R=C&&C.targetChanges.get(x.targetId),D=C&&C.targetMismatches.get(x.targetId)!=null,M=x.view.applyChanges(v,k.isPrimaryClient,R,D);return j_(k,x.targetId,M.ba),M.snapshot}(t,d,p,g);const i=await N_(t.localStore,e,!0),o=new aL(e,i.Es),a=o.ga(i.documents),l=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);j_(t,n,u.ba);const h=new cL(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function pL(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Ml(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xd(r.remoteStore,s.targetId),af(r,s.targetId)}).catch(Vi)):(af(r,s.targetId),await sf(r.localStore,s.targetId,!0))}async function mL(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xd(n.remoteStore,r.targetId))}async function gL(t,e,n){const r=TL(t);try{const s=await function(o,a){const l=ye(o),u=lt.now(),h=a.reduce((g,w)=>g.add(w.key),be());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=cr(),k=be();return l.hs.getEntries(g,h).next(x=>{w=x,w.forEach((N,C)=>{C.isValidDocument()||(k=k.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(x=>{d=x;const N=[];for(const C of a){const v=x2(C,d.get(C.key).overlayedDocument);v!=null&&N.push(new is(C.key,v,J0(v.value.mapValue),an.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,a)}).next(x=>{p=x;const N=x.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:p.batchId,changes:lw(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(Ie)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await ya(r,s.changes),await Hl(r.remoteStore)}catch(s){const i=Vd(s,"Failed to persist write");n.reject(i)}}async function $w(t,e){const n=ye(t);try{const r=await CD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.La.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await ya(n,r,e)}catch(r){await Vi(r)}}function B_(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.J_)p.ea(a)&&(u=!0)}),u&&Fd(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _L(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.La.get(e),i=s&&s.key;if(i){let o=new Ye(he.comparator);o=o.insert(i,xt.newNoDocument(i,_e.min()));const a=be().add(i),l=new Bl(_e.min(),new Map,new Ye(Ie),o,a);await $w(r,l),r.Ba=r.Ba.remove(i),r.La.delete(e),Ud(r)}else await sf(r.localStore,e,!1).then(()=>af(r,e,n)).catch(Vi)}async function yL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await SD(n.localStore,e);qw(n,r,null),Hw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ya(n,s)}catch(s){await Vi(s)}}async function vL(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ne(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);qw(r,e,n),Hw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ya(r,s)}catch(s){await Vi(s)}}function Hw(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function qw(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function af(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||zw(t,r)})}function zw(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(xd(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),Ud(t))}function j_(t,e,n){for(const r of n)r instanceof Uw?(t.ka.addReference(r.key,e),EL(t,r)):r instanceof Bw?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||zw(t,r.key)):me()}function EL(t,e){const n=e.key,r=n.path.canonicalString();t.Ba.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),Ud(t))}function Ud(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new he(qe.fromString(e)),r=t.Ka.next();t.La.set(r,new lL(n)),t.Ba=t.Ba.insert(n,r),Nw(t.remoteStore,new Mr(Ln(iw(n.path)),r,"TargetPurposeLimboResolution",xl.oe))}}async function ya(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Od.zi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,u){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(u,p=>j.forEach(p.Wi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>j.forEach(p.Gi,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Fi(d))throw d;te("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.us.get(p),w=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(w);h.us=h.us.insert(p,k)}}}(r.localStore,i))}async function wL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Pw(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(l=>{l.reject(new ce(H.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ya(n,r.Ts)}}function bL(t,e){const n=ye(t),r=n.La.get(e);if(r&&r.Fa)return be().add(r.key);{let s=be();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function Ww(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_L.bind(null,e),e.Ma.R_=sL.bind(null,e.eventManager),e.Ma.Wa=iL.bind(null,e.eventManager),e}function TL(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vL.bind(null,e),e}class nl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return RD(this.persistence,new ID,e.initialUser,this.serializer)}ja(e){return new Cw(kd.ei,this.serializer)}za(e){return new ND}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nl.provider={build:()=>new nl};class IL extends nl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof el);const r=this.persistence.referenceDelegate.garbageCollector;return new lD(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Cw(r=>el.ei(r,n),this.serializer)}}class cf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>B_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wL.bind(null,this.syncEngine),await ZD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tL}()}createDatastore(e){const n=jl(e.databaseInfo.databaseId),r=function(i){return new VD(i)}(e.databaseInfo);return function(i,o,a,l){return new BD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new $D(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>B_(this.syncEngine,n,0),function(){return L_.p()?new L_:new DD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new uL(s,i,o,a,l,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await _a(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cf.provider={build:()=>new cf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=Q0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gu(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Pw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SL(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>M_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>M_(e.remoteStore,s)),t._onlineComponents=e}async function SL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;bi("Error using user provided cache. Falling back to memory cache: "+n),await Gu(t,new nl)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Gu(t,new IL(void 0));return t._offlineComponents}async function Kw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await $_(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await $_(t,new cf))),t._onlineComponents}function CL(t){return Kw(t).then(e=>e.syncEngine)}async function PL(t){const e=await Kw(t),n=e.eventManager;return n.onListen=hL.bind(null,e.syncEngine),n.onUnlisten=pL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mL.bind(null,e.syncEngine),n}function kL(t,e,n={}){const r=new Hr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new AL({next:p=>{h.eu(),o.enqueueAndForget(()=>rL(i,d)),p.fromCache&&l.source==="server"?u.reject(new ce(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new oL(a,h,{includeMetadataChanges:!0,ua:!0});return nL(i,d)}(await PL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Gw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e,n){if(!n)throw new ce(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OL(t,e,n,r){if(e===!0&&r===!0)throw new ce(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function q_(t){if(!he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function z_(t){if(he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Ci(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bd(t);throw new ce(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ql{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FN;switch(r.type){case"firstParty":return new $N(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H_.get(n);r&&(te("ComponentProvider","Removing Datastore"),H_.delete(n),r.terminate())}(this),Promise.resolve()}}function xL(t,e,n,r={}){var s;const i=(t=Ci(t,ql))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ct.MOCK_USER;else{a=t0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ct(u)}t._authCredentials=new UN(new G0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zl(this.firestore,e,this._query)}}class cn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class qr extends zl{constructor(e,n,r){super(e,n,iw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new he(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function $U(t,e,...n){if(t=Ze(t),Qw("collection","path",e),t instanceof ql){const r=qe.fromString(e,...n);return z_(r),new qr(t,null,r)}{if(!(t instanceof cn||t instanceof qr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return z_(r),new qr(t.firestore,null,r)}}function HU(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=Q0.newId()),Qw("doc","path",e),t instanceof ql){const r=qe.fromString(e,...n);return q_(r),new cn(t,null,new he(r))}{if(!(t instanceof cn||t instanceof qr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return q_(r),new cn(t.firestore,t instanceof qr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ow(this,"async_queue_retry"),this.fu=()=>{const r=Ku();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Ku();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Hr;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Fi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ar("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Md.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.Eu.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class Wl extends ql{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new K_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K_(e),this._firestoreClient=void 0,await e}}}function NL(t,e){const n=typeof t=="object"?t:ld(),r=typeof t=="string"?t:"(default)",s=Sl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=JE("firestore");i&&xL(s,...i)}return s}function jd(t){if(t._terminated)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DL(t),t._firestoreClient}function DL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new r2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Gw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new RL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(bt.fromBase64String(e))}catch(n){throw new ce(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pi(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class qd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=/^__.*__$/;class ML{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}class Yw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class zd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new zd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return rl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Xw(this.Mu)&&LL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class VL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jl(e)}$u(e,n,r,s=!1){return new zd({Mu:e,methodName:n,Ku:r,path:yt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jw(t){const e=t._freezeSettings(),n=jl(t._databaseId);return new VL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zw(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Wd("Data must be an object, but it was:",o,r);const a=eb(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=lf(e,d,n);if(!o.contains(p))throw new ce(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);nb(h,p)||h.push(p)}l=new Xt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new ML(new Kt(a),l,u)}class Gl extends $d{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gl}}function FL(t,e,n,r){const s=t.$u(1,e,n);Wd("Data must be an object, but it was:",s,r);const i=[],o=Kt.empty();ss(r,(l,u)=>{const h=Kd(e,l,n);u=Ze(u);const d=s.Lu(h);if(u instanceof Gl)i.push(h);else{const p=Ql(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Xt(i);return new Yw(o,a,s.fieldTransforms)}function UL(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[lf(e,r,n)],l=[s];if(i.length%2!=0)throw new ce(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(lf(e,i[p])),l.push(i[p+1]);const u=[],h=Kt.empty();for(let p=a.length-1;p>=0;--p)if(!nb(u,a[p])){const g=a[p];let w=l[p];w=Ze(w);const k=o.Lu(g);if(w instanceof Gl)u.push(g);else{const x=Ql(w,k);x!=null&&(u.push(g),h.set(g,x))}}const d=new Xt(u);return new Yw(h,d,o.fieldTransforms)}function Ql(t,e){if(tb(t=Ze(t)))return Wd("Unsupported field value:",e,t),eb(t,e);if(t instanceof $d)return function(r,s){if(!Xw(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ql(a,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return R2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:Zc(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zc(s.serializer,i)}}if(r instanceof Hd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pi)return{bytesValue:ww(s.serializer,r._byteString)};if(r instanceof cn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return Id(a.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Bd(r)}`)}(t,e)}function eb(t,e){const n={};return Y0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,s)=>{const i=Ql(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function tb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Hd||t instanceof Pi||t instanceof cn||t instanceof $d||t instanceof qd)}function Wd(t,e,n){if(!tb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Bd(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function lf(t,e,n){if((e=Ze(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return Kd(t,e);throw rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const BL=new RegExp("[~\\*/\\[\\]]");function Kd(t,e,n){if(e.search(BL)>=0)throw rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce(H.INVALID_ARGUMENT,a+t+l)}function nb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jL extends rb{data(){return super.data()}}function sb(t,e){return typeof e=="string"?Kd(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class HL{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new qd(i)}convertGeoPoint(e){return new Hd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Ne(Sw(r));const s=new Qo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qL extends rb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vc extends qL{data(e={}){return super.data(e)}}class zL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ec(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vc(this._firestore,this._userDataWriter,r.key,r,new ec(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new vc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ec(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new vc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ec(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:WL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class KL extends HL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,n)}}function qU(t){t=Ci(t,zl);const e=Ci(t.firestore,Wl),n=jd(e),r=new KL(e);return $L(t._query),kL(n,t._query).then(s=>new zL(e,r,t,s))}function zU(t,e,n){t=Ci(t,cn);const r=Ci(t.firestore,Wl),s=ib(t.converter,e,n);return ob(r,[Zw(Jw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function ob(t,e){return function(r,s){const i=new Hr;return r.asyncQueue.enqueueAndForget(async()=>gL(await CL(r),s,i)),i.promise}(jd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Jw(e)}set(e,n,r){this._verifyNotCommitted();const s=Qu(e,this._firestore),i=ib(s.converter,n,r),o=Zw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,an.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Qu(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof Kl?UL(this._dataReader,"WriteBatch.update",i._key,n,r,s):FL(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,an.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Qu(e,this._firestore);return this._mutations=this._mutations.concat(new Ad(n._key,an.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qu(t,e){if((t=Ze(t)).firestore!==e)throw new ce(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WU(t){return jd(t=Ci(t,Wl)),new GL(t,e=>ob(t,e))}(function(e,n=!0){(function(s){Mi=s})(Ns),As(new Wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Wl(new BN(r.getProvider("auth-internal")),new qN(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xn(u_,"4.7.6",e),xn(u_,"4.7.6","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebasestorage.googleapis.com",cb="storageBucket",QL=2*60*1e3,YL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Bn{constructor(e,n,r=0){super(Yu(e),`Firebase Storage: ${n} (${Yu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function Yu(t){return"storage/"+t}function Gd(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function XL(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function JL(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ZL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function eM(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tM(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nM(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rM(){return new tt(et.CANCELED,"User canceled the upload/download.")}function sM(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function iM(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function oM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cb+"' property when initializing the app?")}function aM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function cM(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function uf(t){return new tt(et.INVALID_ARGUMENT,t)}function lb(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function uM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Co(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ro(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw iM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),w={bucket:1,path:3},k=n===ab?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",N=new RegExp(`^https?://${k}/${s}/${x}`,"i"),v=[{regex:a,indices:l,postModify:i},{regex:g,indices:w,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<v.length;R++){const D=v[R],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let y=M[D.indices.path];y||(y=""),r=new Jt(T,y),D.postModify(r);break}}if(r==null)throw sM(e);return r}}class hM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...x){u||(u=!0,e.apply(null,x))}function d(x){s=setTimeout(()=>{s=null,t(g,l())},x)}function p(){i&&clearTimeout(i)}function g(x,...N){if(u){p();return}if(x){p(),h.call(null,x,...N);return}if(l()||o){p(),h.call(null,x,...N);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let w=!1;function k(x){w||(w=!0,p(),!u&&(s!==null?(x||(a=2),clearTimeout(s),d(0)):x||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function dM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){return t!==void 0}function mM(t){return typeof t=="object"&&!Array.isArray(t)}function Qd(t){return typeof t=="string"||t instanceof String}function G_(t){return Yd()&&t instanceof Blob}function Yd(){return typeof Blob<"u"}function Q_(t,e,n,r){if(r<e)throw uf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw uf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ub(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ts||(Ts={}));/**
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
 */function gM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new tc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ts.NO_ERROR,l=i.getStatus();if(!a||gM(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Ts.ABORT;r(!1,new tc(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new tc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());pM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Gd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lb():rM();o(l)}else{const l=nM();o(l)}};this.canceled_?n(!1,new tc(!1,null,!0)):this.backoffId_=fM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function yM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function EM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bM(t,e,n,r,s,i,o=!0){const a=ub(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return EM(u,e),yM(u,n),vM(u,i),wM(u,r),new _M(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IM(...t){const e=TM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yd())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function RM(t){if(typeof atob>"u")throw lM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xu{constructor(e,n){this.data=e,this.contentType=n||null}}function SM(t,e){switch(t){case Cn.RAW:return new Xu(hb(e));case Cn.BASE64:case Cn.BASE64URL:return new Xu(fb(t,e));case Cn.DATA_URL:return new Xu(PM(e),kM(e))}throw Gd()}function hb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CM(t){let e;try{e=decodeURIComponent(t)}catch{throw Co(Cn.DATA_URL,"Malformed data URL.")}return hb(e)}function fb(t,e){switch(t){case Cn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Co(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Cn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Co(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=RM(e)}catch(s){throw s.message.includes("polyfill")?s:Co(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class db{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Co(Cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=OM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PM(t){const e=new db(t);return e.base64?fb(Cn.BASE64,e.rest):CM(e.rest)}function kM(t){return new db(t).contentType}function OM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){let r=0,s="";G_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(G_(this.data_)){const r=this.data_,s=AM(r,e,n);return s===null?null:new Dr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(Yd()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(IM.apply(null,n))}else{const n=e.map(o=>Qd(o)?SM(Cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Dr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){let e;try{e=JSON.parse(t)}catch{return null}return mM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t,e){return e}class Ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||DM}}let nc=null;function LM(t){return!Qd(t)||t.length<2?t:mb(t)}function gb(){if(nc)return nc;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(i,o){return LM(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ft("size");return s.xform=r,t.push(s),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),nc=t,nc}function MM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function VM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return MM(r,t),r}function _b(t,e,n){const r=pb(e);return r===null?null:VM(t,r,n)}function FM(t,e,n,r){const s=pb(e);if(s===null||!Qd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=Xd(p,n,r),w=ub({alt:"media",token:u});return g+w})[0]}function UM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class yb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){if(!t)throw Gd()}function BM(t,e){function n(r,s){const i=_b(t,s,e);return vb(i!==null),i}return n}function jM(t,e){function n(r,s){const i=_b(t,s,e);return vb(i!==null),FM(i,s,t.host,t._protocol)}return n}function Eb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=eM():s=ZL():n.getStatus()===402?s=JL(t.bucket):n.getStatus()===403?s=tM(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function $M(t){const e=Eb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=XL(t.path)),i.serverResponse=s.serverResponse,i}return n}function HM(t,e,n){const r=e.fullServerUrl(),s=Xd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new yb(s,i,jM(t,n),o);return a.errorHandler=$M(e),a}function qM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qM(null,e)),r}function WM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let R=0;R<2;R++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=zM(e,r,s),h=UM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Dr.getBlob(d,r,p);if(g===null)throw aM();const w={name:u.fullPath},k=Xd(i,t.host,t._protocol),x="POST",N=t.maxUploadRetryTime,C=new yb(k,x,BM(t,n),N);return C.urlParams=w,C.headers=o,C.body=g.uploadData(),C.errorHandler=Eb(e),C}class KM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ro("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GM extends KM{initXhr(){this.xhr_.responseType="text"}}function wb(){return new GM}/**
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
 */class Cs{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cs(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mb(this._location.path)}get storage(){return this._service}get parent(){const e=xM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Cs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uM(e)}}function QM(t,e,n){t._throwIfRoot("uploadBytes");const r=WM(t.storage,t._location,gb(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,wb).then(s=>({metadata:s,ref:t}))}function YM(t){t._throwIfRoot("getDownloadURL");const e=HM(t.storage,t._location,gb());return t.storage.makeRequestWithTokens(e,wb).then(n=>{if(n===null)throw cM();return n})}function XM(t,e){const n=NM(t._location.path,e),r=new Jt(t._location.bucket,n);return new Cs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(t){return/^[A-Za-z]+:\/\//.test(t)}function ZM(t,e){return new Cs(t,e)}function bb(t,e){if(t instanceof Jd){const n=t;if(n._bucket==null)throw oM();const r=new Cs(n,n._bucket);return e!=null?bb(r,e):r}else return e!==void 0?XM(t,e):t}function eV(t,e){if(e&&JM(e)){if(t instanceof Jd)return ZM(t,e);throw uf("To use ref(service, url), the first argument must be a Storage instance.")}else return bb(t,e)}function Y_(t,e){const n=e==null?void 0:e[cb];return n==null?null:Jt.makeFromBucketSpec(n,t)}function tV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:t0(s,t.app.options.projectId))}class Jd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ab,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QL,this._maxUploadRetryTime=YL,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=Y_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=Y_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Q_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Q_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new hM(lb());{const o=bM(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const X_="@firebase/storage",J_="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="storage";function KU(t,e,n){return t=Ze(t),QM(t,e,n)}function GU(t){return t=Ze(t),YM(t)}function QU(t,e){return t=Ze(t),eV(t,e)}function nV(t=ld(),e){t=Ze(t);const r=Sl(t,Tb).getImmediate({identifier:e}),s=JE("storage");return s&&rV(r,...s),r}function rV(t,e,n,r={}){tV(t,e,n,r)}function sV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Jd(n,r,s,e,Ns)}function iV(){As(new Wr(Tb,sV,"PUBLIC").setMultipleInstances(!0)),xn(X_,J_,""),xn(X_,J_,"esm2017")}iV();const oV=Zt(t=>{const e=xs(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=s0(n),s=AN(r),i=NL(r),o=nV(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function aV(t,e,n){return(e=lV(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z_(Object(n),!0).forEach(function(r){aV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function lV(t){var e=cV(t,"string");return typeof e=="symbol"?e:e+""}const ey=()=>{};let Zd={},Ib={},Ab=null,Rb={mark:ey,measure:ey};try{typeof window<"u"&&(Zd=window),typeof document<"u"&&(Ib=document),typeof MutationObserver<"u"&&(Ab=MutationObserver),typeof performance<"u"&&(Rb=performance)}catch{}const{userAgent:ty=""}=Zd.navigator||{},Jr=Zd,$e=Ib,ny=Ab,rc=Rb;Jr.document;const pr=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",Sb=~ty.indexOf("MSIE")||~ty.indexOf("Trident/");var uV=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,hV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Cb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},fV={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Lt="classic",Yl="duotone",dV="sharp",pV="sharp-duotone",kb=[Lt,Yl,dV,pV],mV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},gV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},_V=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),yV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},vV=["fak","fa-kit","fakd","fa-kit-duotone"],ry={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},EV=["kit"],wV={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},bV=["fak","fakd"],TV={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},sy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},sc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},IV=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],AV=["fak","fa-kit","fakd","fa-kit-duotone"],RV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},SV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},CV={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},hf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},PV=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ff=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...IV,...PV],kV=["solid","regular","light","thin","duotone","brands"],Ob=[1,2,3,4,5,6,7,8,9,10],OV=Ob.concat([11,12,13,14,15,16,17,18,19,20]),xV=[...Object.keys(CV),...kV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",sc.GROUP,sc.SWAP_OPACITY,sc.PRIMARY,sc.SECONDARY].concat(Ob.map(t=>"".concat(t,"x"))).concat(OV.map(t=>"w-".concat(t))),NV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const lr="___FONT_AWESOME___",df=16,xb="fa",Nb="svg-inline--fa",Ps="data-fa-i2svg",pf="data-fa-pseudo-element",DV="data-fa-pseudo-element-pending",ep="data-prefix",tp="data-icon",iy="fontawesome-i2svg",LV="async",MV=["HTML","HEAD","STYLE","SCRIPT"],Db=(()=>{try{return!0}catch{return!1}})();function va(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Lt]}})}const Lb=W({},Cb);Lb[Lt]=W(W(W(W({},{"fa-duotone":"duotone"}),Cb[Lt]),ry.kit),ry["kit-duotone"]);const VV=va(Lb),mf=W({},yV);mf[Lt]=W(W(W(W({},{duotone:"fad"}),mf[Lt]),sy.kit),sy["kit-duotone"]);const oy=va(mf),gf=W({},hf);gf[Lt]=W(W({},gf[Lt]),TV.kit);const np=va(gf),_f=W({},SV);_f[Lt]=W(W({},_f[Lt]),wV.kit);va(_f);const FV=uV,Mb="fa-layers-text",UV=hV,BV=W({},mV);va(BV);const jV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ju=fV,$V=[...EV,...xV],Po=Jr.FontAwesomeConfig||{};function HV(t){var e=$e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$e&&typeof $e.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=qV(HV(n));s!=null&&(Po[r]=s)});const Vb={styleDefault:"solid",familyDefault:Lt,cssPrefix:xb,replacementClass:Nb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Po.familyPrefix&&(Po.cssPrefix=Po.familyPrefix);const ki=W(W({},Vb),Po);ki.autoReplaceSvg||(ki.observeMutations=!1);const ae={};Object.keys(Vb).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){ki[t]=e,ko.forEach(n=>n(ae))},get:function(){return ki[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){ki.cssPrefix=t,ko.forEach(e=>e(ae))},get:function(){return ki.cssPrefix}});Jr.FontAwesomeConfig=ae;const ko=[];function zV(t){return ko.push(t),()=>{ko.splice(ko.indexOf(t),1)}}const br=df,Pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WV(t){if(!t||!pr)return;const e=$e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$e.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $e.head.insertBefore(e,r),t}const KV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zo(){let t=12,e="";for(;t-- >0;)e+=KV[Math.random()*62|0];return e}function Bi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function rp(t){return t.classList?Bi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Fb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function GV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Fb(t[n]),'" '),"").trim()}function Xl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function sp(t){return t.size!==Pn.size||t.x!==Pn.x||t.y!==Pn.y||t.rotate!==Pn.rotate||t.flipX||t.flipY}function QV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function YV(t){let{transform:e,width:n=df,height:r=df,startCentered:s=!1}=t,i="";return s&&Sb?i+="translate(".concat(e.x/br-n/2,"em, ").concat(e.y/br-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/br,"em), calc(-50% + ").concat(e.y/br,"em)) "):i+="translate(".concat(e.x/br,"em, ").concat(e.y/br,"em) "),i+="scale(".concat(e.size/br*(e.flipX?-1:1),", ").concat(e.size/br*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var XV=`:root, :host {
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
}`;function Ub(){const t=xb,e=Nb,n=ae.cssPrefix,r=ae.replacementClass;let s=XV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let ay=!1;function Zu(){ae.autoAddCss&&!ay&&(WV(Ub()),ay=!0)}var JV={mixout(){return{dom:{css:Ub,insertCss:Zu}}},hooks(){return{beforeDOMElementCreation(){Zu()},beforeI2svg(){Zu()}}}};const ur=Jr||{};ur[lr]||(ur[lr]={});ur[lr].styles||(ur[lr].styles={});ur[lr].hooks||(ur[lr].hooks={});ur[lr].shims||(ur[lr].shims=[]);var kn=ur[lr];const Bb=[],jb=function(){$e.removeEventListener("DOMContentLoaded",jb),sl=1,Bb.map(t=>t())};let sl=!1;pr&&(sl=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),sl||$e.addEventListener("DOMContentLoaded",jb));function ZV(t){pr&&(sl?setTimeout(t,0):Bb.push(t))}function Ea(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Fb(t):"<".concat(e," ").concat(GV(n),">").concat(r.map(Ea).join(""),"</").concat(e,">")}function cy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var eh=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function e4(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yf(t){const e=e4(t);return e.length===1?e[0].toString(16):null}function t4(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function ly(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function vf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=ly(e);typeof kn.hooks.addPack=="function"&&!r?kn.hooks.addPack(t,ly(e)):kn.styles[t]=W(W({},kn.styles[t]||{}),s),t==="fas"&&vf("fa",e)}const{styles:ea,shims:n4}=kn,$b=Object.keys(np),r4=$b.reduce((t,e)=>(t[e]=Object.keys(np[e]),t),{});let ip=null,Hb={},qb={},zb={},Wb={},Kb={};function s4(t){return~$V.indexOf(t)}function i4(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!s4(s)?s:null}const Gb=()=>{const t=r=>eh(ea,(s,i,o)=>(s[o]=eh(i,r,{}),s),{});Hb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),qb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Kb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ea||ae.autoFetchSvg,n=eh(n4,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});zb=n.names,Wb=n.unicodes,ip=Jl(ae.styleDefault,{family:ae.familyDefault})};zV(t=>{ip=Jl(t.styleDefault,{family:ae.familyDefault})});Gb();function op(t,e){return(Hb[t]||{})[e]}function o4(t,e){return(qb[t]||{})[e]}function ys(t,e){return(Kb[t]||{})[e]}function Qb(t){return zb[t]||{prefix:null,iconName:null}}function a4(t){const e=Wb[t],n=op("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zr(){return ip}const Yb=()=>({prefix:null,iconName:null,rest:[]});function c4(t){let e=Lt;const n=$b.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return kb.forEach(r=>{(t.includes(n[r])||t.some(s=>r4[r].includes(s)))&&(e=r)}),e}function Jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Lt}=e,r=VV[n][t];if(n===Yl&&!t)return"fad";const s=oy[n][t]||oy[n][r],i=t in kn.styles?t:null;return s||i||null}function l4(t){let e=[],n=null;return t.forEach(r=>{const s=i4(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function uy(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Zl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=ff.concat(AV),i=uy(t.filter(d=>s.includes(d))),o=uy(t.filter(d=>!ff.includes(d))),a=i.filter(d=>(r=d,!Pb.includes(d))),[l=null]=a,u=c4(i),h=W(W({},l4(o)),{},{prefix:Jl(l,{family:u})});return W(W(W({},h),d4({values:t,family:u,styles:ea,config:ae,canonical:h,givenPrefix:r})),u4(n,r,h))}function u4(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Qb(s):{},o=ys(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!ea.far&&ea.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const h4=kb.filter(t=>t!==Lt||t!==Yl),f4=Object.keys(hf).filter(t=>t!==Lt).map(t=>Object.keys(hf[t])).flat();function d4(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===Yl,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&h4.includes(n)&&(Object.keys(i).find(p=>f4.includes(p))||o.autoFetchSvg)){const p=_V.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=ys(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Zr()||"fas"),r}class p4{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),vf(i,s[i]);const o=np[Lt][i];o&&vf(o,s[i]),Gb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let hy=[],ti={};const di={},m4=Object.keys(di);function g4(t,e){let{mixoutsTo:n}=e;return hy=t,ti={},Object.keys(di).forEach(r=>{m4.indexOf(r)===-1&&delete di[r]}),hy.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ti[o]||(ti[o]=[]),ti[o].push(i[o])})}r.provides&&r.provides(di)}),n}function Ef(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ti[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ti[t]||[]).forEach(i=>{i.apply(null,n)})}function es(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return di[t]?di[t].apply(null,e):void 0}function wf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Zr();if(e)return e=ys(n,e)||e,cy(Xb.definitions,n,e)||cy(kn.styles,n,e)}const Xb=new p4,_4=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,ks("noAuto")},y4={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pr?(ks("beforeI2svg",t),es("pseudoElements2svg",t),es("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,ZV(()=>{E4({autoReplaceSvgRoot:e}),ks("watch",t)})}},v4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ys(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Jl(t[0]);return{prefix:n,iconName:ys(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(FV))){const e=Zl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Zr(),iconName:ys(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Zr();return{prefix:e,iconName:ys(e,t)||t}}}},en={noAuto:_4,config:ae,dom:y4,parse:v4,library:Xb,findIconDefinition:wf,toHtml:Ea},E4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$e}=t;(Object.keys(kn.styles).length>0||ae.autoFetchSvg)&&pr&&ae.autoReplaceSvg&&en.dom.i2svg({node:e})};function eu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ea(n))}}),Object.defineProperty(t,"node",{get:function(){if(!pr)return;const n=$e.createElement("div");return n.innerHTML=t.html,n.children}}),t}function w4(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(sp(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Xl(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function b4(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function ap(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,w=bV.includes(r),k=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let x={children:[],attributes:W(W({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const N=w&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(x.attributes[Ps]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Zo())},children:[a]}),delete x.attributes.title);const C=W(W({},x),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:W(W({},N),h.styles)}),{children:v,attributes:R}=n.found&&e.found?es("generateAbstractMask",C)||{children:[],attributes:{}}:es("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=v,C.attributes=R,o?b4(C):w4(C)}function fy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Ps]="");const u=W({},o.styles);sp(s)&&(u.transform=YV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Xl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function T4(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:th}=kn;function bf(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Ju.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Ju.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Ju.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const I4={found:!1,width:512,height:512};function A4(t,e){!Db&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tf(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=Zr()),new Promise((r,s)=>{if(n==="fa"){const i=Qb(t);t=i.iconName||t,e=i.prefix||e}if(t&&e&&th[e]&&th[e][t]){const i=th[e][t];return r(bf(i))}A4(t,e),r(W(W({},I4),{},{icon:ae.showMissingIcons&&t?es("missingIconAbstract")||{}:{}}))})}const dy=()=>{},If=ae.measurePerformance&&rc&&rc.mark&&rc.measure?rc:{mark:dy,measure:dy},ho='FA "6.7.2"',R4=t=>(If.mark("".concat(ho," ").concat(t," begins")),()=>Jb(t)),Jb=t=>{If.mark("".concat(ho," ").concat(t," ends")),If.measure("".concat(ho," ").concat(t),"".concat(ho," ").concat(t," begins"),"".concat(ho," ").concat(t," ends"))};var cp={begin:R4,end:Jb};const Ec=()=>{};function py(t){return typeof(t.getAttribute?t.getAttribute(Ps):null)=="string"}function S4(t){const e=t.getAttribute?t.getAttribute(ep):null,n=t.getAttribute?t.getAttribute(tp):null;return e&&n}function C4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function P4(){return ae.autoReplaceSvg===!0?wc.replace:wc[ae.autoReplaceSvg]||wc.replace}function k4(t){return $e.createElementNS("http://www.w3.org/2000/svg",t)}function O4(t){return $e.createElement(t)}function Zb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?k4:O4}=e;if(typeof t=="string")return $e.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Zb(i,{ceFn:n}))}),r}function x4(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const wc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Zb(n),e)}),e.getAttribute(Ps)===null&&ae.keepOriginalSource){let n=$e.createComment(x4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~rp(e).indexOf(ae.replacementClass))return wc.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Ea(i)).join(`
`);e.setAttribute(Ps,""),e.innerHTML=s}};function my(t){t()}function eT(t,e){const n=typeof e=="function"?e:Ec;if(t.length===0)n();else{let r=my;ae.mutateApproach===LV&&(r=Jr.requestAnimationFrame||my),r(()=>{const s=P4(),i=cp.begin("mutate");t.map(s),i(),n()})}}let lp=!1;function tT(){lp=!0}function Af(){lp=!1}let il=null;function gy(t){if(!ny||!ae.observeMutations)return;const{treeCallback:e=Ec,nodeCallback:n=Ec,pseudoElementsCallback:r=Ec,observeMutationsRoot:s=$e}=t;il=new ny(i=>{if(lp)return;const o=Zr();Bi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!py(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&py(a.target)&&~jV.indexOf(a.attributeName))if(a.attributeName==="class"&&S4(a.target)){const{prefix:l,iconName:u}=Zl(rp(a.target));a.target.setAttribute(ep,l||o),u&&a.target.setAttribute(tp,u)}else C4(a.target)&&n(a.target)})}),pr&&il.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function N4(){il&&il.disconnect()}function D4(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function L4(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Zl(rp(t));return s.prefix||(s.prefix=Zr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=o4(s.prefix,t.innerText)||op(s.prefix,yf(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function M4(t){const e=Bi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||Zo()):(e["aria-hidden"]="true",e.focusable="false")),e}function V4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _y(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=L4(t),i=M4(t),o=Ef("parseNodeAttributes",{},t);let a=e.styleParser?D4(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Pn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:F4}=kn;function nT(t){const e=ae.autoReplaceSvg==="nest"?_y(t,{styleParser:!1}):_y(t);return~e.extra.classes.indexOf(Mb)?es("generateLayersText",t,e):es("generateSvgReplacementMutation",t,e)}function U4(){return[...vV,...ff]}function yy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pr)return Promise.resolve();const n=$e.documentElement.classList,r=h=>n.add("".concat(iy,"-").concat(h)),s=h=>n.remove("".concat(iy,"-").concat(h)),i=ae.autoFetchSvg?U4():Pb.concat(Object.keys(F4));i.includes("fa")||i.push("fa");const o=[".".concat(Mb,":not([").concat(Ps,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ps,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Bi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=cp.begin("onTree"),u=a.reduce((h,d)=>{try{const p=nT(d);p&&h.push(p)}catch(p){Db||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{eT(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function B4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nT(t).then(n=>{n&&eT([n],e)})}function j4(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:wf(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:wf(s||{})),t(r,W(W({},n),{},{mask:s}))}}const $4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Pn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return eu(W({type:"icon"},t),()=>(ks("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||Zo()):(u["aria-hidden"]="true",u.focusable="false")),ap({icons:{main:bf(g),mask:s?bf(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:W(W({},Pn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var H4={mixout(){return{icon:j4($4)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=yy,t.nodeCallback=B4,t}}},provides(t){t.i2svg=function(e){const{node:n=$e,callback:r=()=>{}}=e;return yy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([Tf(r,o),u.iconName?Tf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[k,x]=w;p([e,ap({icons:{main:k,mask:x},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Xl(o);a.length>0&&(r.style=a);let l;return sp(i)&&(l=es("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},q4={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return eu({type:"layer"},()=>{ks("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},z4={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return eu({type:"counter",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),T4({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},W4={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Pn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return eu({type:"text",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),fy({content:t,transform:W(W({},Pn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Sb){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,fy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const K4=new RegExp('"',"ug"),vy=[1105920,1112319],Ey=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),gV),NV),RV),Rf=Object.keys(Ey).reduce((t,e)=>(t[e.toLowerCase()]=Ey[e],t),{}),G4=Object.keys(Rf).reduce((t,e)=>{const n=Rf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Q4(t){const e=t.replace(K4,""),n=t4(e,0),r=n>=vy[0]&&n<=vy[1],s=e.length===2?e[0]===e[1]:!1;return{value:yf(s?e[0]:e),isSecondary:r||s}}function Y4(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Rf[n]||{})[s]||G4[n]}function wy(t,e){const n="".concat(DV).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Bi(t.children).filter(p=>p.getAttribute(pf)===e)[0],a=Jr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(UV),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=Y4(l,h);const{value:w,isSecondary:k}=Q4(p),x=u[0].startsWith("FontAwesome");let N=op(g,w),C=N;if(x){const v=a4(w);v.iconName&&v.prefix&&(N=v.iconName,g=v.prefix)}if(N&&!k&&(!o||o.getAttribute(ep)!==g||o.getAttribute(tp)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);const v=V4(),{extra:R}=v;R.attributes[pf]=e,Tf(N,g).then(D=>{const M=ap(W(W({},v),{},{icons:{main:D,mask:Yb()},prefix:g,iconName:C,extra:R,watchable:!0})),T=$e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=M.map(y=>Ea(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function X4(t){return Promise.all([wy(t,"::before"),wy(t,"::after")])}function J4(t){return t.parentNode!==document.head&&!~MV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(pf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function by(t){if(pr)return new Promise((e,n)=>{const r=Bi(t.querySelectorAll("*")).filter(J4).map(X4),s=cp.begin("searchPseudoElements");tT(),Promise.all(r).then(()=>{s(),Af(),e()}).catch(()=>{s(),Af(),n()})})}var Z4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=by,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$e}=e;ae.searchPseudoElements&&by(n)}}};let Ty=!1;var eF={mixout(){return{dom:{unwatch(){tT(),Ty=!0}}}},hooks(){return{bootstrap(){gy(Ef("mutationObserverCallbacks",{}))},noAuto(){N4()},watch(t){const{observeMutationsRoot:e}=t;Ty?Af():gy(Ef("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Iy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var tF={mixout(){return{parse:{transform:t=>Iy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Iy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:W({},p.outer),children:[{tag:"g",attributes:W({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),p.path)}]}]}}}};const nh={x:0,y:0,width:"100%",height:"100%"};function Ay(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nF(t){return t.tag==="g"?t.children:[t]}var rF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Zl(n.split(" ").map(s=>s.trim())):Yb();return r.prefix||(r.prefix=Zr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=QV({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:W(W({},nh),{},{fill:"white"})},w=u.children?{children:u.children.map(Ay)}:{},k={tag:"g",attributes:W({},p.inner),children:[Ay(W({tag:u.tag,attributes:W(W({},u.attributes),p.path)},w))]},x={tag:"g",attributes:W({},p.outer),children:[k]},N="mask-".concat(o||Zo()),C="clip-".concat(o||Zo()),v={tag:"mask",attributes:W(W({},nh),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:nF(d)},v]};return n.push(R,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(N,")")},nh)}),{children:n,attributes:r}}}},sF={provides(t){let e=!1;Jr.matchMedia&&(e=Jr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},iF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},oF=[JV,H4,q4,z4,W4,Z4,eF,tF,rF,sF,iF];g4(oF,{mixoutsTo:en});en.noAuto;const aF=en.config,cF=en.library;en.dom;const Sf=en.parse;en.findIconDefinition;en.toHtml;const lF=en.icon;en.layer;en.text;en.counter;function Ry(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Yn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ry(Object(n),!0).forEach(function(r){qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ry(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hF(t){var e=uF(t,"string");return typeof e=="symbol"?e:e+""}function ol(t){"@babel/helpers - typeof";return ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ol(t)}function qt(t,e,n){return e=hF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function dF(t,e){if(t==null)return{};var n=fF(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var pF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rT={exports:{}};(function(t){(function(e){var n=function(N,C,v){if(!u(C)||d(C)||p(C)||g(C)||l(C))return C;var R,D=0,M=0;if(h(C))for(R=[],M=C.length;D<M;D++)R.push(n(N,C[D],v));else{R={};for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(R[N(T,v)]=n(N,C[T],v))}return R},r=function(N,C){C=C||{};var v=C.separator||"_",R=C.split||/(?=[A-Z])/;return N.split(R).join(v)},s=function(N){return w(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(C,v){return v?v.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var C=s(N);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(N,C){return r(N,C).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return a.call(N)=="[object Array]"},d=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},w=function(N){return N=N-0,N===N},k=function(N,C){var v=C&&"process"in C?C.process:C;return typeof v!="function"?N:function(R,D){return v(R,N,D)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,C){return n(k(s,C),N)},decamelizeKeys:function(N,C){return n(k(o,C),N,C)},pascalizeKeys:function(N,C){return n(k(i,C),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(pF)})(rT);var mF=rT.exports,gF=["class","style"];function _F(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=mF.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function yF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function sT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return sT(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=yF(h);break;case"style":l.style=_F(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=dF(n,gF);return vt(t.tag,Yn(Yn(Yn({},e),{},{class:s.class,style:Yn(Yn({},s.style),o)},s.attrs),a),r)}var iT=!1;try{iT=!0}catch{}function vF(){if(!iT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function rh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qt({},t,e):{}}function EF(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qt(qt(qt(qt(qt(qt(qt(qt(qt(qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),qt(qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Sy(t){if(t&&ol(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sf.icon)return Sf.icon(t);if(t===null)return null;if(ol(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var wF=wn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return Sy(e.icon)}),i=Ue(function(){return rh("classes",EF(e))}),o=Ue(function(){return rh("transform",typeof e.transform=="string"?Sf.transform(e.transform):e.transform)}),a=Ue(function(){return rh("mask",Sy(e.mask))}),l=Ue(function(){return lF(s.value,Yn(Yn(Yn(Yn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});gn(l,function(h){if(!h)return vF("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ue(function(){return l.value?sT(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const bF={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const TF={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},IF=TF,AF={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},RF={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},SF={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};aF.autoAddCss=!1;cF.add(bF,RF,IF,SF,AF);const CF=Zt(t=>{t.vueApp.component("font-awesome-icon",wF)}),PF=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let oT;const tu=t=>oT=t,aT=Symbol();function Cf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Oo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Oo||(Oo={}));function kF(){const t=Mf(!0),e=t.run(()=>Et({}));let n=[],r=[];const s=Hf({install(i){tu(s),s._a=i,i.provide(aT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!PF?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const cT=()=>{};function Cy(t,e,n,r=cT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&sa()&&Tc(s),s}function zs(t,...e){t.slice().forEach(n=>{n(...e)})}const OF=t=>t(),Py=Symbol(),sh=Symbol();function Pf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Cf(s)&&Cf(r)&&t.hasOwnProperty(n)&&!Je(r)&&!nr(r)?t[n]=Pf(s,r):t[n]=r}return t}const xF=Symbol();function NF(t){return!Cf(t)||!t.hasOwnProperty(xF)}const{assign:Tr}=Object;function DF(t){return!!(Je(t)&&t.effect)}function LF(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=_I(n.state.value[t]);return Tr(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Hf(Ue(()=>{tu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=lT(t,u,e,n,r,!0),l}function lT(t,e,n={},r,s,i){let o;const a=Tr({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Et({});let k;function x(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Oo.patchFunction,storeId:t,events:g}):(Pf(r.state.value[t],y),_={type:Oo.patchObject,payload:y,storeId:t,events:g});const b=k=Symbol();Un().then(()=>{k===b&&(u=!0)}),h=!0,zs(d,_,r.state.value[t])}const N=i?function(){const{state:_}=n,b=_?_():{};this.$patch(P=>{Tr(P,b)})}:cT;function C(){o.stop(),d=[],p=[],r._s.delete(t)}const v=(y,_="")=>{if(Py in y)return y[sh]=_,y;const b=function(){tu(r);const P=Array.from(arguments),S=[],I=[];function ge(se){S.push(se)}function ve(se){I.push(se)}zs(p,{args:P,name:b[sh],store:D,after:ge,onError:ve});let Z;try{Z=y.apply(this&&this.$id===t?this:D,P)}catch(se){throw zs(I,se),se}return Z instanceof Promise?Z.then(se=>(zs(S,se),se)).catch(se=>(zs(I,se),Promise.reject(se))):(zs(S,Z),Z)};return b[Py]=!0,b[sh]=_,b},R={_p:r,$id:t,$onAction:Cy.bind(null,p),$patch:x,$reset:N,$subscribe(y,_={}){const b=Cy(d,y,_.detached,()=>P()),P=o.run(()=>gn(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:Oo.direct,events:g},S)},Tr({},l,_)));return b},$dispose:C},D=hr(R);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||OF)(()=>r._e.run(()=>(o=Mf()).run(()=>e({action:v}))));for(const y in T){const _=T[y];if(Je(_)&&!DF(_)||nr(_))i||(w&&NF(_)&&(Je(_)?_.value=w[y]:Pf(_,w[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const b=v(_,y);T[y]=b,a.actions[y]=_}}return Tr(D,T),Tr(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:y=>{x(_=>{Tr(_,y)})}}),r._p.forEach(y=>{Tr(D,o.run(()=>y({store:D,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(D.$state,w),u=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function MF(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=Kf();return a=a||(u?Nt(aT,null):null),a&&tu(a),a=oT,a._s.has(r)||(i?lT(r,e,s,a):LF(r,s,a)),a._s.get(r)}return o.$id=r,o}function VF(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function FF(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const UF=Zt(t=>{const e=kF();t.vueApp.use(e)});var ky=/^(GTM|G)-[0-9A-Z]+$/;function ih(t){if(typeof t!="string"||!ky.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${ky}).${n}`)}}function fo(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function pi(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(fo(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function BF(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var jF=class{constructor(t){Zi(this,"id");Zi(this,"options");Zi(this,"scriptElements",[]);Zi(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)ih(typeof e=="string"?e:e.id);else ih(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!BF(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=pi(n,{...this.options}):r=pi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=pi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?fo(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&fo(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&fo(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&fo(window,this.options.dataLayerName).push(t)}},mt;function $F(t,e={id:""}){e={trackOnNextTick:!1,...e},mt=new jF(e),t.config.globalProperties.$gtm=mt,mt.isInBrowserContext()&&(e.vueRouter&&HF(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),mt.options.enabled&&mt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")pi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),pi(n.id,r)}}):pi(e.id,e))),t.provide("gtm",e)}function HF(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,w;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?mt!=null&&mt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(mt!=null&&mt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((w=(g=e.options)==null?void 0:g.history)==null?void 0:w.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Un(()=>{mt==null||mt.trackView(u,d,h)}):mt==null||mt.trackView(u,d,h)})}function qF(t){return{install:e=>$F(e,t)}}const zF=Zt(t=>{const e=xs().public,n=CN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(qF({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:wt(),trackOnNextTick:!1}))}),WF=[YS,sC,RP,CP,PP,kP,xP,NP,DP,oV,CF,UF,zF],KF=wn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return ws(la,Xn(r)),()=>vt(t.vnode,{ref:t.vnodeRef})}}),GF=wn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=De(),i=Et(),o=Nt(la,null);let a;r({pageRef:i});const l=Nt(bE,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);wt().beforeEach(d)}return t.pageKey&&gn(()=>t.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")}),()=>vt(WE,{name:t.name,route:t.route,...e},{default:d=>{const p=YF(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const w=Fh(d,t.pageKey);!s.isHydrating&&!XF(o,d.route,d.Component)&&a===w&&s.callHook("page:loading:end"),a=w;const k=!!(t.transition??d.route.meta.pageTransition??Ah),x=k&&QF([t.transition,d.route.meta.pageTransition,Ah,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),N=t.keepalive??d.route.meta.keepalive??vR;return u=KE(tE,k&&x,fP(N,vt(Yf,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Un(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const C=vt(KF,{key:w||void 0,vnode:n.default?vt(Ot,void 0,n.default(d)):d.Component,route:d.route,renderKey:w||void 0,trackRootNodes:k,vnodeRef:i});return N&&(C.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),C}}))).default(),u}})}});function QF(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?od(n.onAfterLeave):void 0}));return EE(...e)}function YF(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Fh({route:e,Component:n})!==Fh({route:t,Component:n})}function XF(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const JF=wn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>vt(Lr[t.name],t.layoutProps,e.slots)}}),ZF=wn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=De(),r=Nt(la),s=r===td()?aP():r,i=Ue(()=>{let l=Qe(t.name)??s.meta.layout??"default";return l&&!(l in Lr)&&t.fallback&&(l=Qe(t.fallback)),l}),o=Et();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);wt().beforeEach(l)}return()=>{const l=i.value&&i.value in Lr,u=s.meta.layoutTransition??yR;return KE(tE,l&&u,{default:()=>vt(Yf,{suspensible:!0,onResolve:()=>{Un(a)}},{default:()=>vt(eU,{layoutProps:Qv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),eU=wn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&ws(bE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Lr)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(JF,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),nu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tU={};function nU(t,e){const n=GF,r=ZF;return $t(),Qn(r,null,{default:An(()=>[we(n)]),_:1})}const rU=nu(tU,[["render",nU]]),sU=ed("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Oy=MF("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=De(),r=wt();try{const s=await ux(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=De();try{await px(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=De();dx(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),iU={class:"navbar navbar-expand-md navbar-light bg-light"},oU={class:"navbar-nav"},aU={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},cU={class:"navbar-nav ml-auto"};function lU(t,e,n,r,s,i){const o=DN;return $t(),Uo("nav",iU,[we(o,{class:"navbar-brand",to:"/"},{default:An(()=>e[2]||(e[2]=[sn("Who's Jimmy")])),_:1}),He("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[He("span",{class:"navbar-toggler-icon"},null,-1)])),He("div",{class:na(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[He("ul",oU,[we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:An(()=>e[4]||(e[4]=[sn("Bio")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:An(()=>e[5]||(e[5]=[sn("Portfolio ")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:An(()=>e[6]||(e[6]=[sn("For Sale")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:An(()=>e[7]||(e[7]=[sn("Cool Stuff")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:An(()=>e[8]||(e[8]=[sn("Contact Us")])),_:1})])],2),s.isAuth?($t(),Uo("div",aU,[He("ul",cU,[we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:An(()=>[sn(Lf(t.user?t.user.email:""),1)]),_:1}),He("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):SA("",!0)])}const uU={data(){return{visible:!1,isAuth:!1}},computed:{...VF(Oy,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...FF(Oy,{signOut:"signOut"})}},hU=nu(uU,[["render",lU]]),fU={class:"page-footer font-small bg-light navbar-fixed-bottom"},dU={class:"container"},pU={class:"py-3 pt-3"},mU={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},gU={href:"https://www.facebook.com/whosjimmy"},_U={href:"https://twitter.com/jimmyclaws"},yU={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function vU(t,e){const n=Vo("font-awesome-icon");return $t(),Uo("footer",fU,[He("div",dU,[He("div",pU,[He("a",mU,[we(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),He("a",gU,[we(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),He("a",_U,[we(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),He("a",yU,[we(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=He("div",{class:"footer-copyright text-center font-small"},[He("div",null,[sn("© 2024 Copyright: "),He("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),He("div",null,"Disclaimer: All images are copyright to their respective owners."),He("div",null,[sn("A "),He("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),sn(" creation.")])],-1))])}const EU={},wU=nu(EU,[["render",vU],["__scopeId","data-v-063d9b19"]]),bU={class:"text-center my-0 page"},TU={class:"body"},IU={components:{appHeader:hU,appFooter:wU},head(){return{title:"Error"}}},AU=wn({...IU,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=De();ug({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{ug({title:n.public.SITE_TITLE}),IE({redirect:"/"})};return(i,o)=>{var u;const a=Vo("app-header"),l=Vo("app-footer");return $t(),Uo("div",bU,[we(a),He("div",TU,[o[0]||(o[0]=He("img",{src:sU,alt:"Error Image"},null,-1)),He("h2",null,"Error: "+Lf((u=t.error)==null?void 0:u.statusCode),1),He("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),we(l)])}}}),RU=nu(AU,[["__scopeId","data-v-a467a495"]]),SU={key:0},xy={__name:"nuxt-root",setup(t){const e=()=>null,n=De(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);wt().beforeEach(l)}const s=!1;ws(la,td()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=wl(),o=!1;bv((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),KR(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Zs(l)),!1});const a=!1;return(l,u)=>($t(),Qn(Yf,{onResolve:Qe(r)},{default:An(()=>[Qe(o)?($t(),Uo("div",SU)):Qe(i)?($t(),Qn(Qe(RU),{key:1,error:Qe(i)},null,8,["error"])):Qe(a)?($t(),Qn(Qe(e),{key:2,context:Qe(a)},null,8,["context"])):Qe(s)?($t(),Qn(zI(Qe(s)),{key:3})):($t(),Qn(Qe(rU),{key:4}))]),_:1},8,["onResolve"]))}};let Ny;{let t;Ny=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?f1(xy):h1(xy),s=AR({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||bl(l)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await CR(s,WF)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(bR),await s.hooks.callHook("app:mounted",r),await Un()}catch(l){i(l)}return r},t=Ny().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{wU as $,Je as A,hr as B,aa as C,Ue as D,nr as E,Ot as F,zr as G,Nt as H,ws as I,Un as J,ed as K,Vo as L,NU as M,ul as N,Qn as O,xU as P,na as Q,PU as R,RA as S,tE as T,la as U,FU as V,WR as W,CN as X,LU as Y,hU as Z,nu as _,FF as a,GF as a0,MF as a1,De as a2,$U as a3,qU as a4,zU as a5,HU as a6,WU as a7,He as b,Uo as c,we as d,An as e,DN as f,sn as g,Qe as h,VU as i,MU as j,SA as k,nV as l,VF as m,QU as n,$t as o,KU as p,GU as q,OU as r,_l as s,Lf as t,Oy as u,DU as v,kU as w,Et as x,BI as y,gn as z};
