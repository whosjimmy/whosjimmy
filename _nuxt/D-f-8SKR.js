const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GfeIQoQ1.js","./DrIqeI70.js","./DD0RLWHn.js","./D97F16TI.js","./index.ASLudlX-.css","./CpsHDvc4.js","./D9ZRSrBe.js","./CruA6yfE.js","./CxSXvRby.js","./Gallery.BdWwPq4R.css","./Film.D8qa6UOd.css","./Film.CyscwsSS.css","./CV4L8cOd.js","./Bio.BaV4dkSc.css","./_KRs4F4_.js","./Contact.Bq_tjq4M.css","./BJ2Qt9NR.js","./Clocks.CaZdgkmv.css","./CUL_a4fS.js","./index.EfND0qCY.css","./BXUT2tkC.js","./GWgEwf_I.js","./index.CAtFJWG6.css","./-NZ0FXGD.js","./Celebrities.BS01JuXe.css","./HlsOBxV_.js","./Clocks.Dmp-oUCd.css","./BnmKwpUV.js","./index.ByThmlNc.css","./CbJcfYkT.js","./BMiAfIiV.js","./DKUNRheX.js","./CJPeWTPS.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var NT=Object.defineProperty;var DT=(t,e,n)=>e in t?NT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Qi=(t,e,n)=>DT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ei=[],Cn=()=>{},LT=()=>!1,Zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kf=t=>t.startsWith("onUpdate:"),st=Object.assign,Of=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},MT=Object.prototype.hasOwnProperty,Oe=(t,e)=>MT.call(t,e),le=Array.isArray,ti=t=>Ci(t)==="[object Map]",Pi=t=>Ci(t)==="[object Set]",Zp=t=>Ci(t)==="[object Date]",VT=t=>Ci(t)==="[object RegExp]",pe=t=>typeof t=="function",ze=t=>typeof t=="string",yn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",xy=t=>(Me(t)||pe(t))&&pe(t.then)&&pe(t.catch),Ny=Object.prototype.toString,Ci=t=>Ny.call(t),FT=t=>Ci(t).slice(8,-1),Dy=t=>Ci(t)==="[object Object]",xf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=Cf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},UT=/-(\w)/g,un=ol(t=>t.replace(UT,(e,n)=>n?n.toUpperCase():"")),BT=/\B([A-Z])/g,ks=ol(t=>t.replace(BT,"-$1").toLowerCase()),al=ol(t=>t.charAt(0).toUpperCase()+t.slice(1)),_u=ol(t=>t?`on${al(t)}`:""),Mr=(t,e)=>!Object.is(t,e),ri=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ly=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},My=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let em;const cl=()=>em||(em=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?qT(r):ll(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Me(t))return t}const jT=/;(?![^(]*\))/g,$T=/:([^]+)/,HT=/\/\*[^]*?\*\//g;function qT(t){const e={};return t.replace(HT,"").split(jT).forEach(n=>{if(n){const r=n.split($T);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ea(t){let e="";if(ze(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=ea(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function RU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=ea(e)),n&&(t.style=ll(n)),t}const zT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",WT=Cf(zT);function Vy(t){return!!t||t===""}function KT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ta(t[r],e[r]);return n}function ta(t,e){if(t===e)return!0;let n=Zp(t),r=Zp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=yn(t),r=yn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?KT(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ta(t[o],e[o]))return!1}}return String(t)===String(e)}function Nf(t,e){return t.findIndex(n=>ta(n,e))}const Fy=t=>!!(t&&t.__v_isRef===!0),Df=t=>ze(t)?t:t==null?"":le(t)||Me(t)&&(t.toString===Ny||!pe(t.toString))?Fy(t)?Df(t.value):JSON.stringify(t,Uy,2):String(t),Uy=(t,e)=>Fy(e)?Uy(t,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yu(r,i)+" =>"]=s,n),{})}:Pi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yu(n))}:yn(e)?yu(e):Me(e)&&!le(e)&&!Dy(e)?String(e):e,yu=(t,e="")=>{var n;return yn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class By{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lf(t){return new By(t)}function na(){return Ut}function bc(t,e=!1){Ut&&Ut.cleanups.push(t)}let Be;const vu=new WeakSet;class jy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&Ut.active&&Ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vu.has(this)&&(vu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tm(this),qy(this);const e=Be,n=gn;Be=this,gn=!0;try{return this.fn()}finally{zy(this),Be=e,gn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ff(e);this.deps=this.depsTail=void 0,tm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ih(this)&&this.run()}get dirty(){return ih(this)}}let $y=0,lo,uo;function Hy(t,e=!1){if(t.flags|=8,e){t.next=uo,uo=t;return}t.next=lo,lo=t}function Mf(){$y++}function Vf(){if(--$y>0)return;if(uo){let e=uo;for(uo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;lo;){let e=lo;for(lo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ff(r),GT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ih(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Po))return;t.globalVersion=Po;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ih(t)){t.flags&=-3;return}const n=Be,r=gn;Be=t,gn=!0;try{qy(t);const s=t.fn(t._value);(e.version===0||Mr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,gn=r,zy(t),t.flags&=-3}}function Ff(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ff(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function GT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let gn=!0;const Ky=[];function Zr(){Ky.push(gn),gn=!1}function es(){const t=Ky.pop();gn=t===void 0?!0:t}function tm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let Po=0;class QT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!gn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new QT(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,Gy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,Po++,this.notify(e)}notify(e){Mf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vf()}}}function Gy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tc=new WeakMap,_s=Symbol(""),oh=Symbol(""),Co=Symbol("");function Pt(t,e,n){if(gn&&Be){let r=Tc.get(t);r||Tc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ul),s.map=r,s.key=n),s.track()}}function Wn(t,e,n,r,s,i){const o=Tc.get(t);if(!o){Po++;return}const a=l=>{l&&l.trigger()};if(Mf(),e==="clear")o.forEach(a);else{const l=le(t),u=l&&xf(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===Co||!yn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Co)),e){case"add":l?u&&a(o.get("length")):(a(o.get(_s)),ti(t)&&a(o.get(oh)));break;case"delete":l||(a(o.get(_s)),ti(t)&&a(o.get(oh)));break;case"set":ti(t)&&a(o.get(_s));break}}Vf()}function YT(t,e){const n=Tc.get(t);return n&&n.get(e)}function $s(t){const e=Ae(t);return e===t?e:(Pt(e,"iterate",Co),an(t)?e:e.map(Ct))}function hl(t){return Pt(t=Ae(t),"iterate",Co),t}const XT={__proto__:null,[Symbol.iterator](){return Eu(this,Symbol.iterator,Ct)},concat(...t){return $s(this).concat(...t.map(e=>le(e)?$s(e):e))},entries(){return Eu(this,"entries",t=>(t[1]=Ct(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Ct),arguments)},find(t,e){return $n(this,"find",t,e,Ct,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Ct,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return wu(this,"includes",t)},indexOf(...t){return wu(this,"indexOf",t)},join(t){return $s(this).join(t)},lastIndexOf(...t){return wu(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return Yi(this,"pop")},push(...t){return Yi(this,"push",t)},reduce(t,...e){return nm(this,"reduce",t,e)},reduceRight(t,...e){return nm(this,"reduceRight",t,e)},shift(){return Yi(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return Yi(this,"splice",t)},toReversed(){return $s(this).toReversed()},toSorted(t){return $s(this).toSorted(t)},toSpliced(...t){return $s(this).toSpliced(...t)},unshift(...t){return Yi(this,"unshift",t)},values(){return Eu(this,"values",Ct)}};function Eu(t,e,n){const r=hl(t),s=r[e]();return r!==t&&!an(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const JT=Array.prototype;function $n(t,e,n,r,s,i){const o=hl(t),a=o!==t&&!an(t),l=o[e];if(l!==JT[e]){const d=l.apply(t,i);return a?Ct(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,Ct(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function nm(t,e,n,r){const s=hl(t);let i=n;return s!==t&&(an(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Ct(a),l,t)}),s[e](i,...r)}function wu(t,e,n){const r=Ae(t);Pt(r,"iterate",Co);const s=r[e](...n);return(s===-1||s===!1)&&jf(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Yi(t,e,n=[]){Zr(),Mf();const r=Ae(t)[e].apply(t,n);return Vf(),es(),r}const ZT=Cf("__proto__,__v_isRef,__isVue"),Qy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yn));function eI(t){yn(t)||(t=String(t));const e=Ae(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class Yy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uI:ev:i?Zy:Jy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=XT[n]))return l;if(n==="hasOwnProperty")return eI}const a=Reflect.get(e,n,Je(e)?e:r);return(yn(n)?Qy.has(n):ZT(n))||(s||Pt(e,"get",n),i)?a:Je(a)?o&&xf(n)?a:a.value:Me(a)?s?tv(a):ur(a):a}}class Xy extends Yy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Hr(i);if(!an(r)&&!Hr(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&Je(i)&&!Je(r))return l?!1:(i.value=r,!0)}const o=le(e)&&xf(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,r,Je(e)?e:s);return e===Ae(s)&&(o?Mr(r,i)&&Wn(e,"set",n,r):Wn(e,"add",n,r)),a}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!yn(n)||!Qy.has(n))&&Pt(e,"has",n),r}ownKeys(e){return Pt(e,"iterate",le(e)?"length":_s),Reflect.ownKeys(e)}}class tI extends Yy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const nI=new Xy,rI=new tI,sI=new Xy(!0);const ah=t=>t,Da=t=>Reflect.getPrototypeOf(t);function iI(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=ti(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?ah:e?ch:Ct;return!e&&Pt(i,"iterate",l?oh:_s),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function La(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function oI(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),a=Ae(s);t||(Mr(s,a)&&Pt(o,"get",s),Pt(o,"get",a));const{has:l}=Da(o),u=e?ah:t?ch:Ct;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Pt(Ae(s),"iterate",_s),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),a=Ae(s);return t||(Mr(s,a)&&Pt(o,"has",s),Pt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Ae(a),u=e?ah:t?ch:Ct;return!t&&Pt(l,"iterate",_s),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return st(n,t?{add:La("add"),set:La("set"),delete:La("delete"),clear:La("clear")}:{add(s){!e&&!an(s)&&!Hr(s)&&(s=Ae(s));const i=Ae(this);return Da(i).has.call(i,s)||(i.add(s),Wn(i,"add",s,s)),this},set(s,i){!e&&!an(i)&&!Hr(i)&&(i=Ae(i));const o=Ae(this),{has:a,get:l}=Da(o);let u=a.call(o,s);u||(s=Ae(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Mr(i,h)&&Wn(o,"set",s,i):Wn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:a}=Da(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Wn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Wn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=iI(s,t,e)}),n}function Uf(t,e){const n=oI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const aI={get:Uf(!1,!1)},cI={get:Uf(!1,!0)},lI={get:Uf(!0,!1)};const Jy=new WeakMap,Zy=new WeakMap,ev=new WeakMap,uI=new WeakMap;function hI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fI(t){return t.__v_skip||!Object.isExtensible(t)?0:hI(FT(t))}function ur(t){return Hr(t)?t:Bf(t,!1,nI,aI,Jy)}function Yn(t){return Bf(t,!1,sI,cI,Zy)}function tv(t){return Bf(t,!0,rI,lI,ev)}function Bf(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=fI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tr(t){return Hr(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Hr(t){return!!(t&&t.__v_isReadonly)}function an(t){return!!(t&&t.__v_isShallow)}function jf(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function $f(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Ly(t,"__v_skip",!0),t}const Ct=t=>Me(t)?ur(t):t,ch=t=>Me(t)?tv(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Gt(t){return nv(t,!1)}function ko(t){return nv(t,!0)}function nv(t,e){return Je(t)?t:new dI(t,e)}class dI{constructor(e,n){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||an(e)||Hr(e);e=r?e:Ae(e),Mr(e,n)&&(this._rawValue=e,this._value=r?e:Ct(e),this.dep.trigger())}}function Qe(t){return Je(t)?t.value:t}const pI={get:(t,e,n)=>e==="__v_raw"?t:Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rv(t){return tr(t)?t:new Proxy(t,pI)}class mI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ul,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function gI(t){return new mI(t)}function _I(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=sv(t,n);return e}class yI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return YT(Ae(this._object),this._key)}}class vI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function EI(t,e,n){return Je(t)?t:pe(t)?new vI(t):Me(t)&&arguments.length>1?sv(t,e,n):Gt(t)}function sv(t,e,n){const r=t[e];return Je(r)?r:new yI(t,e,n)}class wI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return Hy(this,!0),!0}get value(){const e=this.dep.track();return Wy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bI(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new wI(r,s,n)}const Ma={},Ic=new WeakMap;let fs;function TI(t,e=!1,n=fs){if(n){let r=Ic.get(n);r||Ic.set(n,r=[]),r.push(t)}}function II(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:an(R)||s===!1||s===0?Kn(R,1):Kn(R);let h,d,p,g,I=!1,O=!1;if(Je(t)?(d=()=>t.value,I=an(t)):tr(t)?(d=()=>u(t),I=!0):le(t)?(O=!0,I=t.some(R=>tr(R)||an(R)),d=()=>t.map(R=>{if(Je(R))return R.value;if(tr(R))return u(R);if(pe(R))return l?l(R,2):R()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){Zr();try{p()}finally{es()}}const R=fs;fs=h;try{return l?l(t,3,[g]):t(g)}finally{fs=R}}:d=Cn,e&&s){const R=d,D=s===!0?1/0:s;d=()=>Kn(R(),D)}const N=na(),x=()=>{h.stop(),N&&N.active&&Of(N.effects,h)};if(i&&e){const R=e;e=(...D)=>{R(...D),x()}}let P=O?new Array(t.length).fill(Ma):Ma;const E=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const D=h.run();if(s||I||(O?D.some((V,b)=>Mr(V,P[b])):Mr(D,P))){p&&p();const V=fs;fs=h;try{const b=[D,P===Ma?void 0:O&&P[0]===Ma?[]:P,g];l?l(e,3,b):e(...b),P=D}finally{fs=V}}}else h.run()};return a&&a(E),h=new jy(d),h.scheduler=o?()=>o(E,!1):E,g=R=>TI(R,!1,h),p=h.onStop=()=>{const R=Ic.get(h);if(R){if(l)l(R,4);else for(const D of R)D();Ic.delete(h)}},e?r?E(!0):P=h.run():o?o(E.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Kn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Kn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Kn(t[r],e,n);else if(Pi(t)||ti(t))t.forEach(r=>{Kn(r,e,n)});else if(Dy(t)){for(const r in t)Kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ra(t,e,n,r){try{return r?t(...r):t()}catch(s){sa(s,e,n)}}function vn(t,e,n,r){if(pe(t)){const s=ra(t,e,n,r);return s&&xy(s)&&s.catch(i=>{sa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(vn(t[i],e,n,r));return s}}function sa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){Zr(),ra(i,null,10,[t,l,u]),es();return}}AI(t,n,s,r,o)}function AI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Bt=[];let Tn=-1;const si=[];let Tr=null,zs=0;const iv=Promise.resolve();let Ac=null;function Vn(t){const e=Ac||iv;return t?e.then(this?t.bind(this):t):e}function RI(t){let e=Tn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,s=Bt[r],i=Oo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hf(t){if(!(t.flags&1)){const e=Oo(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=Oo(n)?Bt.push(t):Bt.splice(RI(e),0,t),t.flags|=1,ov()}}function ov(){Ac||(Ac=iv.then(av))}function lh(t){le(t)?si.push(...t):Tr&&t.id===-1?Tr.splice(zs+1,0,t):t.flags&1||(si.push(t),t.flags|=1),ov()}function rm(t,e,n=Tn+1){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rc(t){if(si.length){const e=[...new Set(si)].sort((n,r)=>Oo(n)-Oo(r));if(si.length=0,Tr){Tr.push(...e);return}for(Tr=e,zs=0;zs<Tr.length;zs++){const n=Tr[zs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tr=null,zs=0}}const Oo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function av(t){try{for(Tn=0;Tn<Bt.length;Tn++){const e=Bt[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Bt.length;Tn++){const e=Bt[Tn];e&&(e.flags&=-2)}Tn=-1,Bt.length=0,Rc(),Ac=null,(Bt.length||si.length)&&av()}}let at=null,cv=null;function Sc(t){const e=at;return at=t,cv=t&&t.type.__scopeId||null,e}function In(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mm(-1);const i=Sc(e);let o;try{o=t(...s)}finally{Sc(i),r._d&&mm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function SU(t,e){if(at===null)return t;const n=yl(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Fe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function An(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Zr(),vn(l,n,8,[t.el,a,t,e]),es())}}const SI=Symbol("_vte"),lv=t=>t.__isTeleport,Ir=Symbol("_leaveCb"),Va=Symbol("_enterCb");function PI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pl(()=>{t.isMounted=!0}),ia(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],uv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},hv=t=>{const e=t.subTree;return e.component?hv(e.component):e},CI={name:"BaseTransition",props:uv,setup(t,{slots:e}){const n=_l(),r=PI();return()=>{const s=e.default&&pv(e.default(),!0);if(!s||!s.length)return;const i=fv(s),o=Ae(t),{mode:a}=o;if(r.isLeaving)return bu(i);const l=sm(i);if(!l)return bu(i);let u=uh(l,o,r,n,d=>u=d);l.type!==it&&di(l,u);let h=n.subTree&&sm(n.subTree);if(h&&h.type!==it&&!mn(l,h)&&hv(n).type!==it){let d=uh(h,o,r,n);if(di(h,d),a==="out-in"&&l.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},bu(i);a==="in-out"&&l.type!==it?d.delayLeave=(p,g,I)=>{const O=dv(r,h);O[String(h.key)]=h,p[Ir]=()=>{g(),p[Ir]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{I(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function fv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const kI=CI;function dv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function uh(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:I,onLeaveCancelled:O,onBeforeAppear:N,onAppear:x,onAfterAppear:P,onAppearCancelled:E}=e,R=String(t.key),D=dv(n,t),V=(_,w)=>{_&&vn(_,r,9,w)},b=(_,w)=>{const C=w[1];V(_,w),le(_)?_.every(S=>S.length<=1)&&C():_.length<=1&&C()},y={mode:o,persisted:a,beforeEnter(_){let w=l;if(!n.isMounted)if(i)w=N||l;else return;_[Ir]&&_[Ir](!0);const C=D[R];C&&mn(t,C)&&C.el[Ir]&&C.el[Ir](),V(w,[_])},enter(_){let w=u,C=h,S=d;if(!n.isMounted)if(i)w=x||u,C=P||h,S=E||d;else return;let T=!1;const ge=_[Va]=ve=>{T||(T=!0,ve?V(S,[_]):V(C,[_]),y.delayedLeave&&y.delayedLeave(),_[Va]=void 0)};w?b(w,[_,ge]):ge()},leave(_,w){const C=String(t.key);if(_[Va]&&_[Va](!0),n.isUnmounting)return w();V(p,[_]);let S=!1;const T=_[Ir]=ge=>{S||(S=!0,w(),ge?V(O,[_]):V(I,[_]),_[Ir]=void 0,D[C]===t&&delete D[C])};D[C]=t,g?b(g,[_,T]):T()},clone(_){const w=uh(_,e,n,r,s);return s&&s(w),w}};return y}function bu(t){if(fl(t))return t=rr(t),t.children=null,t}function sm(t){if(!fl(t))return lv(t.type)&&t.children?fv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function di(t,e){t.shapeFlag&6&&t.component?(t.transition=e,di(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&s++,r=r.concat(pv(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?rr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Fn(t,e){return pe(t)?st({name:t.name},e,{setup:t}):t}function mv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xo(t,e,n,r,s=!1){if(le(t)){t.forEach((I,O)=>xo(I,e&&(le(e)?e[O]:e),n,r,s));return}if(Vr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?yl(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,d=a.setupState,p=Ae(d),g=d===Fe?()=>!1:I=>Oe(p,I);if(u!=null&&u!==l&&(ze(u)?(h[u]=null,g(u)&&(d[u]=null)):Je(u)&&(u.value=null)),pe(l))ra(l,a,12,[o,h]);else{const I=ze(l),O=Je(l);if(I||O){const N=()=>{if(t.f){const x=I?g(l)?d[l]:h[l]:l.value;s?le(x)&&Of(x,i):le(x)?x.includes(i)||x.push(i):I?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else I?(h[l]=o,g(l)&&(d[l]=o)):O&&(l.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,gt(N,n)):N()}}}let im=!1;const Hs=()=>{im||(console.error("Hydration completed but contains mismatches."),im=!0)},OI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",xI=t=>t.namespaceURI.includes("MathML"),Fa=t=>{if(t.nodeType===1){if(OI(t))return"svg";if(xI(t))return"mathml"}},Ua=t=>t.nodeType===8;function NI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(E,R)=>{if(!R.hasChildNodes()){n(null,E,R),Rc(),R._vnode=E;return}d(R.firstChild,E,null,null,null),Rc(),R._vnode=E},d=(E,R,D,V,b,y=!1)=>{y=y||!!R.dynamicChildren;const _=Ua(E)&&E.data==="[",w=()=>O(E,R,D,V,b,_),{type:C,ref:S,shapeFlag:T,patchFlag:ge}=R;let ve=E.nodeType;R.el=E,ge===-2&&(y=!1,R.dynamicChildren=null);let Z=null;switch(C){case Es:ve!==3?R.children===""?(l(R.el=s(""),o(E),E),Z=E):Z=w():(E.data!==R.children&&(Hs(),E.data=R.children),Z=i(E));break;case it:P(E)?(Z=i(E),x(R.el=E.content.firstChild,E,D)):ve!==8||_?Z=w():Z=i(E);break;case fo:if(_&&(E=i(E),ve=E.nodeType),ve===1||ve===3){Z=E;const se=!R.children.length;for(let ne=0;ne<R.staticCount;ne++)se&&(R.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===R.staticCount-1&&(R.anchor=Z),Z=i(Z);return _?i(Z):Z}else w();break;case kt:_?Z=I(E,R,D,V,b,y):Z=w();break;default:if(T&1)(ve!==1||R.type.toLowerCase()!==E.tagName.toLowerCase())&&!P(E)?Z=w():Z=p(E,R,D,V,b,y);else if(T&6){R.slotScopeIds=b;const se=o(E);if(_?Z=N(E):Ua(E)&&E.data==="teleport start"?Z=N(E,E.data,"teleport end"):Z=i(E),e(R,se,null,D,V,Fa(se),y),Vr(R)&&!R.type.__asyncResolved){let ne;_?(ne=Pe(kt),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=E.nodeType===3?on(""):Pe("div"),ne.el=E,R.component.subTree=ne}}else T&64?ve!==8?Z=w():Z=R.type.hydrate(E,R,D,V,b,y,t,g):T&128&&(Z=R.type.hydrate(E,R,D,V,Fa(o(E)),b,y,t,d))}return S!=null&&xo(S,null,V,R),Z},p=(E,R,D,V,b,y)=>{y=y||!!R.dynamicChildren;const{type:_,props:w,patchFlag:C,shapeFlag:S,dirs:T,transition:ge}=R,ve=_==="input"||_==="option";if(ve||C!==-1){T&&An(R,null,D,"created");let Z=!1;if(P(E)){Z=Fv(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=E.content.firstChild;Z&&ge.beforeEnter(ne),x(ne,E,D),R.el=E=ne}if(S&16&&!(w&&(w.innerHTML||w.textContent))){let ne=g(E.firstChild,R,E,D,V,b,y);for(;ne;){Ba(E,1)||Hs();const We=ne;ne=ne.nextSibling,a(We)}}else if(S&8){let ne=R.children;ne[0]===`
`&&(E.tagName==="PRE"||E.tagName==="TEXTAREA")&&(ne=ne.slice(1)),E.textContent!==ne&&(Ba(E,0)||Hs(),E.textContent=R.children)}if(w){if(ve||!y||C&48){const ne=E.tagName.includes("-");for(const We in w)(ve&&(We.endsWith("value")||We==="indeterminate")||Zo(We)&&!ni(We)||We[0]==="."||ne)&&r(E,We,null,w[We],void 0,D)}else if(w.onClick)r(E,"onClick",null,w.onClick,void 0,D);else if(C&4&&tr(w.style))for(const ne in w.style)w.style[ne]}let se;(se=w&&w.onVnodeBeforeMount)&&qt(se,D,R),T&&An(R,null,D,"beforeMount"),((se=w&&w.onVnodeMounted)||T||Z)&&qv(()=>{se&&qt(se,D,R),Z&&ge.enter(E),T&&An(R,null,D,"mounted")},V)}return E.nextSibling},g=(E,R,D,V,b,y,_)=>{_=_||!!R.dynamicChildren;const w=R.children,C=w.length;for(let S=0;S<C;S++){const T=_?w[S]:w[S]=Yt(w[S]),ge=T.type===Es;E?(ge&&!_&&S+1<C&&Yt(w[S+1]).type===Es&&(l(s(E.data.slice(T.children.length)),D,i(E)),E.data=T.children),E=d(E,T,V,b,y,_)):ge&&!T.children?l(T.el=s(""),D):(Ba(D,1)||Hs(),n(null,T,D,null,V,b,Fa(D),y))}return E},I=(E,R,D,V,b,y)=>{const{slotScopeIds:_}=R;_&&(b=b?b.concat(_):_);const w=o(E),C=g(i(E),R,w,D,V,b,y);return C&&Ua(C)&&C.data==="]"?i(R.anchor=C):(Hs(),l(R.anchor=u("]"),w,C),C)},O=(E,R,D,V,b,y)=>{if(Ba(E.parentElement,1)||Hs(),R.el=null,y){const C=N(E);for(;;){const S=i(E);if(S&&S!==C)a(S);else break}}const _=i(E),w=o(E);return a(E),n(null,R,w,_,D,V,Fa(w),b),D&&(D.vnode.el=R.el,gl(D,R.el)),_},N=(E,R="[",D="]")=>{let V=0;for(;E;)if(E=i(E),E&&Ua(E)&&(E.data===R&&V++,E.data===D)){if(V===0)return i(E);V--}return E},x=(E,R,D)=>{const V=R.parentNode;V&&V.replaceChild(E,R);let b=D;for(;b;)b.vnode.el===R&&(b.vnode.el=b.subTree.el=E),b=b.parent},P=E=>E.nodeType===1&&E.tagName==="TEMPLATE";return[h,d]}const om="data-allow-mismatch",DI={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ba(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(om);)t=t.parentElement;const n=t&&t.getAttribute(om);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(DI[e])}}cl().requestIdleCallback;cl().cancelIdleCallback;const Vr=t=>!!t.type.__asyncLoader,fl=t=>t.type.__isKeepAlive,LI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=_l(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(P,E,R,D,V)=>{const b=P.component;u(P,E,R,0,a),l(b.vnode,P,E,R,b,a,D,P.slotScopeIds,V),gt(()=>{b.isDeactivated=!1,b.a&&ri(b.a);const y=P.props&&P.props.onVnodeMounted;y&&qt(y,b.parent,P)},a)},r.deactivate=P=>{const E=P.component;Cc(E.m),Cc(E.a),u(P,p,null,1,a),gt(()=>{E.da&&ri(E.da);const R=P.props&&P.props.onVnodeUnmounted;R&&qt(R,E.parent,P),E.isDeactivated=!0},a)};function g(P){Tu(P),h(P,n,a,!0)}function I(P){s.forEach((E,R)=>{const D=yh(E.type);D&&!P(D)&&O(R)})}function O(P){const E=s.get(P);E&&(!o||!mn(E,o))?g(E):o&&Tu(o),s.delete(P),i.delete(P)}_n(()=>[t.include,t.exclude],([P,E])=>{P&&I(R=>eo(P,R)),E&&I(R=>!eo(E,R))},{flush:"post",deep:!0});let N=null;const x=()=>{N!=null&&(kc(n.subTree.type)?gt(()=>{s.set(N,ja(n.subTree))},n.subTree.suspense):s.set(N,ja(n.subTree)))};return pl(x),vv(x),ia(()=>{s.forEach(P=>{const{subTree:E,suspense:R}=n,D=ja(E);if(P.type===D.type&&P.key===D.key){Tu(D);const V=D.component.da;V&&gt(V,R);return}g(P)})}),()=>{if(N=null,!e.default)return o=null;const P=e.default(),E=P[0];if(P.length>1)return o=null,P;if(!Ts(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let R=ja(E);if(R.type===it)return o=null,R;const D=R.type,V=yh(Vr(R)?R.type.__asyncResolved||{}:D),{include:b,exclude:y,max:_}=t;if(b&&(!V||!eo(b,V))||y&&V&&eo(y,V))return R.shapeFlag&=-257,o=R,E;const w=R.key==null?D:R.key,C=s.get(w);return R.el&&(R=rr(R),E.shapeFlag&128&&(E.ssContent=R)),N=w,C?(R.el=C.el,R.component=C.component,R.transition&&di(R,R.transition),R.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),_&&i.size>parseInt(_,10)&&O(i.values().next().value)),R.shapeFlag|=256,o=R,kc(E.type)?E:R}}},MI=LI;function eo(t,e){return le(t)?t.some(n=>eo(n,e)):ze(t)?t.split(",").includes(e):VT(t)?(t.lastIndex=0,t.test(e)):!1}function gv(t,e){yv(t,"a",e)}function _v(t,e){yv(t,"da",e)}function yv(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(dl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fl(s.parent.vnode)&&VI(r,e,n,s),s=s.parent}}function VI(t,e,n,r){const s=dl(e,t,r,!0);Ev(()=>{Of(r[e],s)},n)}function Tu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ja(t){return t.shapeFlag&128?t.ssContent:t}function dl(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Zr();const a=oa(n),l=vn(e,n,t,o);return a(),es(),l});return r?s.unshift(i):s.push(i),i}}const hr=t=>(e,n=ft)=>{(!Mo||t==="sp")&&dl(t,(...r)=>e(...r),n)},FI=hr("bm"),pl=hr("m"),UI=hr("bu"),vv=hr("u"),ia=hr("bum"),Ev=hr("um"),BI=hr("sp"),jI=hr("rtg"),$I=hr("rtc");function wv(t,e=ft){dl("ec",t,e)}const bv="components";function No(t,e){return Iv(bv,t,!0,e)||t}const Tv=Symbol.for("v-ndc");function HI(t){return ze(t)?Iv(bv,t,!1)||t:t||Tv}function Iv(t,e,n=!0,r=!1){const s=at||ft;if(s){const i=s.type;{const a=yh(i,!1);if(a&&(a===e||a===un(e)||a===al(un(e))))return i}const o=am(s[t]||i[t],e)||am(s.appContext[t],e);return!o&&r?i:o}}function am(t,e){return t&&(t[e]||t[un(e)]||t[al(un(e))])}function PU(t,e,n,r){let s;const i=n,o=le(t);if(o||ze(t)){const a=o&&tr(t);let l=!1;a&&(l=!an(t),t=hl(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?Ct(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function CU(t,e,n={},r,s){if(at.ce||at.parent&&Vr(at.parent)&&at.parent.ce)return jt(),Gn(kt,null,[Pe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),jt();const o=i&&Av(i(n)),a=n.key||o&&o.key,l=Gn(kt,{key:(a&&!yn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Av(t){return t.some(e=>Ts(e)?!(e.type===it||e.type===kt&&!Av(e.children)):!0)?t:null}const hh=t=>t?Qv(t)?yl(t):hh(t.parent):null,ho=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hh(t.parent),$root:t=>hh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qf(t),$forceUpdate:t=>t.f||(t.f=()=>{Hf(t.update)}),$nextTick:t=>t.n||(t.n=Vn.bind(t.proxy)),$watch:t=>uA.bind(t)}),Iu=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),qI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Iu(r,e))return o[e]=1,r[e];if(s!==Fe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];fh&&(o[e]=0)}}const h=ho[e];let d,p;if(h)return e==="$attrs"&&Pt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Iu(s,e)?(s[e]=n,!0):r!==Fe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&Oe(t,o)||Iu(e,o)||(a=i[0])&&Oe(a,o)||Oe(r,o)||Oe(ho,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cm(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fh=!0;function zI(t){const e=qf(t),n=t.proxy,r=t.ctx;fh=!1,e.beforeCreate&&lm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:I,activated:O,deactivated:N,beforeDestroy:x,beforeUnmount:P,destroyed:E,unmounted:R,render:D,renderTracked:V,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:w,inheritAttrs:C,components:S,directives:T,filters:ge}=e;if(u&&WI(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Me(se)&&(t.data=ur(se))}if(fh=!0,i)for(const se in i){const ne=i[se],We=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Cn,hn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Cn,tn=Ue({get:We,set:hn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const se in a)Rv(a[se],r,n,se);if(l){const se=pe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{vs(ne,se[ne])})}h&&lm(h,t,"c");function Z(se,ne){le(ne)?ne.forEach(We=>se(We.bind(n))):ne&&se(ne.bind(n))}if(Z(FI,d),Z(pl,p),Z(UI,g),Z(vv,I),Z(gv,O),Z(_v,N),Z(wv,y),Z($I,V),Z(jI,b),Z(ia,P),Z(Ev,R),Z(BI,_),le(w))if(w.length){const se=t.exposed||(t.exposed={});w.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});D&&t.render===Cn&&(t.render=D),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),T&&(t.directives=T),_&&mv(t)}function WI(t,e,n=Cn){le(t)&&(t=dh(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=xt(s.from||r,s.default,!0):i=xt(s.from||r):i=xt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function lm(t,e,n){vn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rv(t,e,n,r){let s=r.includes(".")?jv(n,r):()=>n[r];if(ze(t)){const i=e[t];pe(i)&&_n(s,i)}else if(pe(t))_n(s,t.bind(n));else if(Me(t))if(le(t))t.forEach(i=>Rv(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&_n(s,i,t)}}function qf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Pc(l,u,o,!0)),Pc(l,e,o)),Me(e)&&i.set(e,l),l}function Pc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pc(t,i,n,!0),s&&s.forEach(o=>Pc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=KI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const KI={data:um,props:hm,emits:hm,methods:to,computed:to,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:to,directives:to,watch:QI,provide:um,inject:GI};function um(t,e){return e?t?function(){return st(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function GI(t,e){return to(dh(t),dh(e))}function dh(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function to(t,e){return t?st(Object.create(null),t,e):e}function hm(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:st(Object.create(null),cm(t),cm(e??{})):e}function QI(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Ft(t[r],e[r]);return n}function Sv(){return{app:null,config:{isNativeTag:LT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let YI=0;function XI(t,e){return function(r,s=null){pe(r)||(r=st({},r)),s!=null&&!Me(s)&&(s=null);const i=Sv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:YI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xv,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||Pe(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,yl(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(vn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=ys;ys=u;try{return h()}finally{ys=d}}};return u}}let ys=null;function vs(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=ft||at;if(r||ys){const s=ys?ys._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function zf(){return!!(ft||at||ys)}const Pv={},Cv=()=>Object.create(Pv),kv=t=>Object.getPrototypeOf(t)===Pv;function JI(t,e,n,r=!1){const s={},i=Cv();t.propsDefaults=Object.create(null),Ov(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ZI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(ml(t.emitsOptions,p))continue;const g=e[p];if(l)if(Oe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const I=un(p);s[I]=ph(l,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Ov(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Oe(e,d)&&((h=ks(d))===d||!Oe(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=ph(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Oe(e,d))&&(delete i[d],u=!0)}u&&Wn(t.attrs,"set","")}function Ov(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ni(l))continue;const u=e[l];let h;s&&Oe(s,h=un(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:ml(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=a||Fe;for(let h=0;h<i.length;h++){const d=i[h];n[d]=ph(s,l,d,u[d],t,!Oe(u,d))}}return o}function ph(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=oa(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ks(n))&&(r=!0))}return r}const eA=new WeakMap;function xv(t,e,n=!1){const r=n?eA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const h=d=>{l=!0;const[p,g]=xv(d,e,!0);st(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Me(t)&&r.set(t,ei),ei;if(le(i))for(let h=0;h<i.length;h++){const d=un(i[h]);fm(d)&&(o[d]=Fe)}else if(i)for(const h in i){const d=un(h);if(fm(d)){const p=i[h],g=o[d]=le(p)||pe(p)?{type:p}:st({},p),I=g.type;let O=!1,N=!0;if(le(I))for(let x=0;x<I.length;++x){const P=I[x],E=pe(P)&&P.name;if(E==="Boolean"){O=!0;break}else E==="String"&&(N=!1)}else O=pe(I)&&I.name==="Boolean";g[0]=O,g[1]=N,(O||Oe(g,"default"))&&a.push(d)}}const u=[o,a];return Me(t)&&r.set(t,u),u}function fm(t){return t[0]!=="$"&&!ni(t)}const Nv=t=>t[0]==="_"||t==="$stable",Wf=t=>le(t)?t.map(Yt):[Yt(t)],tA=(t,e,n)=>{if(e._n)return e;const r=In((...s)=>Wf(e(...s)),n);return r._c=!1,r},Dv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nv(s))continue;const i=t[s];if(pe(i))e[s]=tA(s,i,r);else if(i!=null){const o=Wf(i);e[s]=()=>o}}},Lv=(t,e)=>{const n=Wf(e);t.slots.default=()=>n},Mv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},nA=(t,e,n)=>{const r=t.slots=Cv();if(t.vnode.shapeFlag&32){const s=e._;s?(Mv(r,e,n),n&&Ly(r,"_",s,!0)):Dv(e,r)}else e&&Lv(t,e)},rA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Mv(s,e,n):(i=!e.$stable,Dv(e,s)),o=e}else e&&(Lv(t,e),o={default:1});if(i)for(const a in s)!Nv(a)&&o[a]==null&&delete s[a]},gt=qv;function sA(t){return Vv(t)}function iA(t){return Vv(t,NI)}function Vv(t,e){const n=cl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Cn,insertStaticContent:I}=t,O=(A,k,M,$=null,U=null,q=null,Y=void 0,G=null,K=!!k.dynamicChildren)=>{if(A===k)return;A&&!mn(A,k)&&($=B(A),Ke(A,U,q,!0),A=null),k.patchFlag===-2&&(K=!1,k.dynamicChildren=null);const{type:z,ref:ue,shapeFlag:J}=k;switch(z){case Es:N(A,k,M,$);break;case it:x(A,k,M,$);break;case fo:A==null&&P(k,M,$,Y);break;case kt:S(A,k,M,$,U,q,Y,G,K);break;default:J&1?D(A,k,M,$,U,q,Y,G,K):J&6?T(A,k,M,$,U,q,Y,G,K):(J&64||J&128)&&z.process(A,k,M,$,U,q,Y,G,K,re)}ue!=null&&U&&xo(ue,A&&A.ref,q,k||A,!k)},N=(A,k,M,$)=>{if(A==null)r(k.el=a(k.children),M,$);else{const U=k.el=A.el;k.children!==A.children&&u(U,k.children)}},x=(A,k,M,$)=>{A==null?r(k.el=l(k.children||""),M,$):k.el=A.el},P=(A,k,M,$)=>{[A.el,A.anchor]=I(A.children,k,M,$,A.el,A.anchor)},E=({el:A,anchor:k},M,$)=>{let U;for(;A&&A!==k;)U=p(A),r(A,M,$),A=U;r(k,M,$)},R=({el:A,anchor:k})=>{let M;for(;A&&A!==k;)M=p(A),s(A),A=M;s(k)},D=(A,k,M,$,U,q,Y,G,K)=>{k.type==="svg"?Y="svg":k.type==="math"&&(Y="mathml"),A==null?V(k,M,$,U,q,Y,G,K):_(A,k,U,q,Y,G,K)},V=(A,k,M,$,U,q,Y,G)=>{let K,z;const{props:ue,shapeFlag:J,transition:oe,dirs:ie}=A;if(K=A.el=o(A.type,q,ue&&ue.is,ue),J&8?h(K,A.children):J&16&&y(A.children,K,null,$,U,Au(A,q),Y,G),ie&&An(A,null,$,"created"),b(K,A,A.scopeId,Y,$),ue){for(const Ce in ue)Ce!=="value"&&!ni(Ce)&&i(K,Ce,null,ue[Ce],q,$);"value"in ue&&i(K,"value",null,ue.value,q),(z=ue.onVnodeBeforeMount)&&qt(z,$,A)}ie&&An(A,null,$,"beforeMount");const fe=Fv(U,oe);fe&&oe.beforeEnter(K),r(K,k,M),((z=ue&&ue.onVnodeMounted)||fe||ie)&&gt(()=>{z&&qt(z,$,A),fe&&oe.enter(K),ie&&An(A,null,$,"mounted")},U)},b=(A,k,M,$,U)=>{if(M&&g(A,M),$)for(let q=0;q<$.length;q++)g(A,$[q]);if(U){let q=U.subTree;if(k===q||kc(q.type)&&(q.ssContent===k||q.ssFallback===k)){const Y=U.vnode;b(A,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},y=(A,k,M,$,U,q,Y,G,K=0)=>{for(let z=K;z<A.length;z++){const ue=A[z]=G?Ar(A[z]):Yt(A[z]);O(null,ue,k,M,$,U,q,Y,G)}},_=(A,k,M,$,U,q,Y)=>{const G=k.el=A.el;let{patchFlag:K,dynamicChildren:z,dirs:ue}=k;K|=A.patchFlag&16;const J=A.props||Fe,oe=k.props||Fe;let ie;if(M&&cs(M,!1),(ie=oe.onVnodeBeforeUpdate)&&qt(ie,M,k,A),ue&&An(k,A,M,"beforeUpdate"),M&&cs(M,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&h(G,""),z?w(A.dynamicChildren,z,G,M,$,Au(k,U),q):Y||ne(A,k,G,null,M,$,Au(k,U),q,!1),K>0){if(K&16)C(G,J,oe,M,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const fe=k.dynamicProps;for(let Ce=0;Ce<fe.length;Ce++){const Re=fe[Ce],bt=J[Re],ut=oe[Re];(ut!==bt||Re==="value")&&i(G,Re,bt,ut,U,M)}}K&1&&A.children!==k.children&&h(G,k.children)}else!Y&&z==null&&C(G,J,oe,M,U);((ie=oe.onVnodeUpdated)||ue)&&gt(()=>{ie&&qt(ie,M,k,A),ue&&An(k,A,M,"updated")},$)},w=(A,k,M,$,U,q,Y)=>{for(let G=0;G<k.length;G++){const K=A[G],z=k[G],ue=K.el&&(K.type===kt||!mn(K,z)||K.shapeFlag&70)?d(K.el):M;O(K,z,ue,null,$,U,q,Y,!0)}},C=(A,k,M,$,U)=>{if(k!==M){if(k!==Fe)for(const q in k)!ni(q)&&!(q in M)&&i(A,q,k[q],null,U,$);for(const q in M){if(ni(q))continue;const Y=M[q],G=k[q];Y!==G&&q!=="value"&&i(A,q,G,Y,U,$)}"value"in M&&i(A,"value",k.value,M.value,U)}},S=(A,k,M,$,U,q,Y,G,K)=>{const z=k.el=A?A.el:a(""),ue=k.anchor=A?A.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=k;ie&&(G=G?G.concat(ie):ie),A==null?(r(z,M,$),r(ue,M,$),y(k.children||[],M,ue,U,q,Y,G,K)):J>0&&J&64&&oe&&A.dynamicChildren?(w(A.dynamicChildren,oe,M,U,q,Y,G),(k.key!=null||U&&k===U.subTree)&&Uv(A,k,!0)):ne(A,k,M,ue,U,q,Y,G,K)},T=(A,k,M,$,U,q,Y,G,K)=>{k.slotScopeIds=G,A==null?k.shapeFlag&512?U.ctx.activate(k,M,$,Y,K):ge(k,M,$,U,q,Y,K):ve(A,k,K)},ge=(A,k,M,$,U,q,Y)=>{const G=A.component=PA(A,$,U);if(fl(A)&&(G.ctx.renderer=re),CA(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,Z,Y),!A.el){const K=G.subTree=Pe(it);x(null,K,k,M)}}else Z(G,A,k,M,U,q,Y)},ve=(A,k,M)=>{const $=k.component=A.component;if(gA(A,k,M))if($.asyncDep&&!$.asyncResolved){se($,k,M);return}else $.next=k,$.update();else k.el=A.el,$.vnode=k},Z=(A,k,M,$,U,q,Y)=>{const G=()=>{if(A.isMounted){let{next:J,bu:oe,u:ie,parent:fe,vnode:Ce}=A;{const Tt=Bv(A);if(Tt){J&&(J.el=Ce.el,se(A,J,Y)),Tt.asyncDep.then(()=>{A.isUnmounted||G()});return}}let Re=J,bt;cs(A,!1),J?(J.el=Ce.el,se(A,J,Y)):J=Ce,oe&&ri(oe),(bt=J.props&&J.props.onVnodeBeforeUpdate)&&qt(bt,fe,J,Ce),cs(A,!0);const ut=Ru(A),dt=A.subTree;A.subTree=ut,O(dt,ut,d(dt.el),B(dt),A,U,q),J.el=ut.el,Re===null&&gl(A,ut.el),ie&&gt(ie,U),(bt=J.props&&J.props.onVnodeUpdated)&&gt(()=>qt(bt,fe,J,Ce),U)}else{let J;const{el:oe,props:ie}=k,{bm:fe,m:Ce,parent:Re,root:bt,type:ut}=A,dt=Vr(k);if(cs(A,!1),fe&&ri(fe),!dt&&(J=ie&&ie.onVnodeBeforeMount)&&qt(J,Re,k),cs(A,!0),oe&&De){const Tt=()=>{A.subTree=Ru(A),De(oe,A.subTree,A,U,null)};dt&&ut.__asyncHydrate?ut.__asyncHydrate(oe,A,Tt):Tt()}else{bt.ce&&bt.ce._injectChildStyle(ut);const Tt=A.subTree=Ru(A);O(null,Tt,M,$,A,U,q),k.el=Tt.el}if(Ce&&gt(Ce,U),!dt&&(J=ie&&ie.onVnodeMounted)){const Tt=k;gt(()=>qt(J,Re,Tt),U)}(k.shapeFlag&256||Re&&Vr(Re.vnode)&&Re.vnode.shapeFlag&256)&&A.a&&gt(A.a,U),A.isMounted=!0,k=M=$=null}};A.scope.on();const K=A.effect=new jy(G);A.scope.off();const z=A.update=K.run.bind(K),ue=A.job=K.runIfDirty.bind(K);ue.i=A,ue.id=A.uid,K.scheduler=()=>Hf(ue),cs(A,!0),z()},se=(A,k,M)=>{k.component=A;const $=A.vnode.props;A.vnode=k,A.next=null,ZI(A,k.props,$,M),rA(A,k.children,M),Zr(),rm(A),es()},ne=(A,k,M,$,U,q,Y,G,K=!1)=>{const z=A&&A.children,ue=A?A.shapeFlag:0,J=k.children,{patchFlag:oe,shapeFlag:ie}=k;if(oe>0){if(oe&128){hn(z,J,M,$,U,q,Y,G,K);return}else if(oe&256){We(z,J,M,$,U,q,Y,G,K);return}}ie&8?(ue&16&&$t(z,U,q),J!==z&&h(M,J)):ue&16?ie&16?hn(z,J,M,$,U,q,Y,G,K):$t(z,U,q,!0):(ue&8&&h(M,""),ie&16&&y(J,M,$,U,q,Y,G,K))},We=(A,k,M,$,U,q,Y,G,K)=>{A=A||ei,k=k||ei;const z=A.length,ue=k.length,J=Math.min(z,ue);let oe;for(oe=0;oe<J;oe++){const ie=k[oe]=K?Ar(k[oe]):Yt(k[oe]);O(A[oe],ie,M,null,U,q,Y,G,K)}z>ue?$t(A,U,q,!0,!1,J):y(k,M,$,U,q,Y,G,K,J)},hn=(A,k,M,$,U,q,Y,G,K)=>{let z=0;const ue=k.length;let J=A.length-1,oe=ue-1;for(;z<=J&&z<=oe;){const ie=A[z],fe=k[z]=K?Ar(k[z]):Yt(k[z]);if(mn(ie,fe))O(ie,fe,M,null,U,q,Y,G,K);else break;z++}for(;z<=J&&z<=oe;){const ie=A[J],fe=k[oe]=K?Ar(k[oe]):Yt(k[oe]);if(mn(ie,fe))O(ie,fe,M,null,U,q,Y,G,K);else break;J--,oe--}if(z>J){if(z<=oe){const ie=oe+1,fe=ie<ue?k[ie].el:$;for(;z<=oe;)O(null,k[z]=K?Ar(k[z]):Yt(k[z]),M,fe,U,q,Y,G,K),z++}}else if(z>oe)for(;z<=J;)Ke(A[z],U,q,!0),z++;else{const ie=z,fe=z,Ce=new Map;for(z=fe;z<=oe;z++){const Lt=k[z]=K?Ar(k[z]):Yt(k[z]);Lt.key!=null&&Ce.set(Lt.key,z)}let Re,bt=0;const ut=oe-fe+1;let dt=!1,Tt=0;const mr=new Array(ut);for(z=0;z<ut;z++)mr[z]=0;for(z=ie;z<=J;z++){const Lt=A[z];if(bt>=ut){Ke(Lt,U,q,!0);continue}let nn;if(Lt.key!=null)nn=Ce.get(Lt.key);else for(Re=fe;Re<=oe;Re++)if(mr[Re-fe]===0&&mn(Lt,k[Re])){nn=Re;break}nn===void 0?Ke(Lt,U,q,!0):(mr[nn-fe]=z+1,nn>=Tt?Tt=nn:dt=!0,O(Lt,k[nn],M,null,U,q,Y,G,K),bt++)}const Ms=dt?oA(mr):ei;for(Re=Ms.length-1,z=ut-1;z>=0;z--){const Lt=fe+z,nn=k[Lt],Vs=Lt+1<ue?k[Lt+1].el:$;mr[z]===0?O(null,nn,M,Vs,U,q,Y,G,K):dt&&(Re<0||z!==Ms[Re]?tn(nn,M,Vs,2):Re--)}}},tn=(A,k,M,$,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:z}=A;if(z&6){tn(A.component.subTree,k,M,$);return}if(z&128){A.suspense.move(k,M,$);return}if(z&64){Y.move(A,k,M,re);return}if(Y===kt){r(q,k,M);for(let J=0;J<K.length;J++)tn(K[J],k,M,$);r(A.anchor,k,M);return}if(Y===fo){E(A,k,M);return}if($!==2&&z&1&&G)if($===0)G.beforeEnter(q),r(q,k,M),gt(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,fe=()=>r(q,k,M),Ce=()=>{J(q,()=>{fe(),ie&&ie()})};oe?oe(q,fe,Ce):Ce()}else r(q,k,M)},Ke=(A,k,M,$=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:z,shapeFlag:ue,patchFlag:J,dirs:oe,cacheIndex:ie}=A;if(J===-2&&(U=!1),G!=null&&xo(G,null,M,A,!0),ie!=null&&(k.renderCache[ie]=void 0),ue&256){k.ctx.deactivate(A);return}const fe=ue&1&&oe,Ce=!Vr(A);let Re;if(Ce&&(Re=Y&&Y.onVnodeBeforeUnmount)&&qt(Re,k,A),ue&6)bn(A.component,M,$);else{if(ue&128){A.suspense.unmount(M,$);return}fe&&An(A,null,k,"beforeUnmount"),ue&64?A.type.remove(A,k,M,re,$):z&&!z.hasOnce&&(q!==kt||J>0&&J&64)?$t(z,k,M,!1,!0):(q===kt&&J&384||!U&&ue&16)&&$t(K,k,M),$&&Ge(A)}(Ce&&(Re=Y&&Y.onVnodeUnmounted)||fe)&&gt(()=>{Re&&qt(Re,k,A),fe&&An(A,null,k,"unmounted")},M)},Ge=A=>{const{type:k,el:M,anchor:$,transition:U}=A;if(k===kt){pr(M,$);return}if(k===fo){R(A);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(M,q);G?G(A.el,q,K):K()}else q()},pr=(A,k)=>{let M;for(;A!==k;)M=p(A),s(A),A=M;s(k)},bn=(A,k,M)=>{const{bum:$,scope:U,job:q,subTree:Y,um:G,m:K,a:z}=A;Cc(K),Cc(z),$&&ri($),U.stop(),q&&(q.flags|=8,Ke(Y,A,k,M)),G&&gt(G,k),gt(()=>{A.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},$t=(A,k,M,$=!1,U=!1,q=0)=>{for(let Y=q;Y<A.length;Y++)Ke(A[Y],k,M,$,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const k=p(A.anchor||A.el),M=k&&k[SI];return M?p(M):k};let ee=!1;const X=(A,k,M)=>{A==null?k._vnode&&Ke(k._vnode,null,null,!0):O(k._vnode||null,A,k,null,null,null,M),k._vnode=A,ee||(ee=!0,rm(),Rc(),ee=!1)},re={p:O,um:Ke,m:tn,r:Ge,mt:ge,mc:y,pc:ne,pbc:w,n:B,o:t};let be,De;return e&&([be,De]=e(re)),{render:X,hydrate:be,createApp:XI(X,be)}}function Au({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uv(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ar(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Uv(o,a)),a.type===Es&&(a.el=o.el)}}function oA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bv(e)}function Cc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const aA=Symbol.for("v-scx"),cA=()=>xt(aA);function lA(t,e){return Kf(t,null,e)}function _n(t,e,n){return Kf(t,e,n)}function Kf(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=st({},n),l=e&&r||!e&&i!=="post";let u;if(Mo){if(i==="sync"){const g=cA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Cn,g.resume=Cn,g.pause=Cn,g}}const h=ft;a.call=(g,I,O)=>vn(g,h,I,O);let d=!1;i==="post"?a.scheduler=g=>{gt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,I)=>{I?g():Hf(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=II(t,e,a);return Mo&&(u?u.push(p):l&&p()),p}function uA(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?jv(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=oa(this),a=Kf(s,i.bind(r),n);return o(),a}function jv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const hA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${un(e)}Modifiers`]||t[`${ks(e)}Modifiers`];function fA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&hA(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ze(h)?h.trim():h)),o.number&&(s=n.map(wc)));let a,l=r[a=_u(e)]||r[a=_u(un(e))];!l&&i&&(l=r[a=_u(ks(e))]),l&&vn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vn(u,t,6,s)}}function $v(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const h=$v(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Me(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):st(o,i),Me(t)&&r.set(t,o),o)}function ml(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,ks(e))||Oe(t,e))}function Ru(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:I,inheritAttrs:O}=t,N=Sc(t);let x,P;try{if(n.shapeFlag&4){const R=s||r,D=R;x=Yt(u.call(D,R,h,d,g,p,I)),P=a}else{const R=e;x=Yt(R.length>1?R(d,{attrs:a,slots:o,emit:l}):R(d,null)),P=e.props?a:pA(a)}}catch(R){po.length=0,sa(R,t,1),x=Pe(it)}let E=x;if(P&&O!==!1){const R=Object.keys(P),{shapeFlag:D}=E;R.length&&D&7&&(i&&R.some(kf)&&(P=mA(P,i)),E=rr(E,P,!1,!0))}return n.dirs&&(E=rr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&di(E,n.transition),x=E,Sc(N),x}function dA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ts(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const pA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},mA=(t,e)=>{const n={};for(const r in t)(!kf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?dm(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!ml(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?dm(r,o,u):!0:!!o;return!1}function dm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ml(n,i))return!0}return!1}function gl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const kc=t=>t.__isSuspense;let mh=0;const _A={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)yA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}vA(t,e,n,r,s,o,a,l,u)}},hydrate:EA,normalize:wA},Gf=_A;function Do(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function yA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=Hv(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Do(t,"onPending"),Do(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ii(p,t.ssFallback)):p.resolve(!1,!0)}function vA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:I,pendingBranch:O,isInFallback:N,isHydrating:x}=d;if(O)d.pendingBranch=p,mn(p,O)?(l(O,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(x||(l(I,g,n,r,s,null,i,o,a),ii(d,g)))):(d.pendingId=mh++,x?(d.isHydrating=!1,d.activeBranch=O):u(O,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(I,g,n,r,s,null,i,o,a),ii(d,g))):I&&mn(p,I)?(l(I,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(I&&mn(p,I))l(I,p,n,r,s,d,i,o,a),ii(d,p);else if(Do(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=mh++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:P,pendingId:E}=d;P>0?setTimeout(()=>{d.pendingId===E&&d.fallback(g)},P):P===0&&d.fallback(g)}}function Hv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:I,o:{parentNode:O,remove:N}}=u;let x;const P=bA(t);P&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const E=t.props?My(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:mh++,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(V=!1,b=!1){const{vnode:y,activeBranch:_,pendingBranch:w,pendingId:C,effects:S,parentComponent:T,container:ge}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:V||(ve=_&&w.transition&&w.transition.mode==="out-in",ve&&(_.transition.afterLeave=()=>{C===D.pendingId&&(p(w,ge,i===R?I(_):i,0),lh(S))}),_&&(O(_.el)===ge&&(i=I(_)),g(_,T,D,!0)),ve||p(w,ge,i,0)),ii(D,w),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...S),se=!0;break}Z=Z.parent}!se&&!ve&&lh(S),D.effects=[],P&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Do(y,"onResolve")},fallback(V){if(!D.pendingBranch)return;const{vnode:b,activeBranch:y,parentComponent:_,container:w,namespace:C}=D;Do(b,"onFallback");const S=I(y),T=()=>{D.isInFallback&&(d(null,V,w,S,_,null,C,a,l),ii(D,V))},ge=V.transition&&V.transition.mode==="out-in";ge&&(y.transition.afterLeave=T),D.isInFallback=!0,g(y,_,null,!0),ge||T()},move(V,b,y){D.activeBranch&&p(D.activeBranch,V,b,y),D.container=V},next(){return D.activeBranch&&I(D.activeBranch)},registerDep(V,b,y){const _=!!D.pendingBranch;_&&D.deps++;const w=V.vnode.el;V.asyncDep.catch(C=>{sa(C,V,0)}).then(C=>{if(V.isUnmounted||D.isUnmounted||D.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:S}=V;_h(V,C,!1),w&&(S.el=w);const T=!w&&V.subTree.el;b(V,S,O(w||V.subTree.el),w?null:I(V.subTree),D,o,y),T&&N(T),gl(V,S.el),_&&--D.deps===0&&D.resolve()})},unmount(V,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,V,b),D.pendingBranch&&g(D.pendingBranch,n,V,b)}};return D}function EA(t,e,n,r,s,i,o,a,l){const u=e.suspense=Hv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function wA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=pm(r?n.default:n),t.ssFallback=r?pm(n.fallback):Pe(it)}function pm(t){let e;if(pe(t)){const n=pi&&t._c;n&&(t._d=!1,jt()),t=t(),n&&(t._d=!0,e=Kt,zv())}return le(t)&&(t=dA(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function qv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):lh(t)}function ii(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,gl(r,s))}function bA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const kt=Symbol.for("v-fgt"),Es=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),fo=Symbol.for("v-stc"),po=[];let Kt=null;function jt(t=!1){po.push(Kt=t?null:[])}function zv(){po.pop(),Kt=po[po.length-1]||null}let pi=1;function mm(t,e=!1){pi+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function Wv(t){return t.dynamicChildren=pi>0?Kt||ei:null,zv(),pi>0&&Kt&&Kt.push(t),t}function Lo(t,e,n,r,s,i){return Wv(He(t,e,n,r,s,i,!0))}function Gn(t,e,n,r,s){return Wv(Pe(t,e,n,r,s,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const Kv=({key:t})=>t??null,sc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Je(t)||pe(t)?{i:at,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kv(e),ref:e&&sc(e),scopeId:cv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return a?(Qf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),pi>0&&!o&&Kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Kt.push(l),l}const Pe=TA;function TA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tv)&&(t=it),Ts(t)){const a=rr(t,e,!0);return n&&Qf(a,n),pi>0&&!i&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(t)]=a:Kt.push(a)),a.patchFlag=-2,a}if(NA(t)&&(t=t.__vccOpts),e){e=IA(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=ea(a)),Me(l)&&(jf(l)&&!le(l)&&(l=st({},l)),e.style=ll(l))}const o=ze(t)?1:kc(t)?128:lv(t)?64:Me(t)?4:pe(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function IA(t){return t?jf(t)||kv(t)?st({},t):t:null}function rr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Gv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Kv(u),ref:e&&e.ref?n&&i?le(i)?i.concat(sc(e)):[i,sc(e)]:sc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rr(t.ssContent),ssFallback:t.ssFallback&&rr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&di(h,l.clone(h)),h}function on(t=" ",e=0){return Pe(Es,null,t,e)}function kU(t,e){const n=Pe(fo,null,t);return n.staticCount=e,n}function AA(t="",e=!1){return e?(jt(),Gn(it,null,t)):Pe(it,null,t)}function Yt(t){return t==null||typeof t=="boolean"?Pe(it):le(t)?Pe(kt,null,t.slice()):Ts(t)?Ar(t):Pe(Es,null,String(t))}function Ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rr(t)}function Qf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!kv(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ea([e.class,r.class]));else if(s==="style")e.style=ll([e.style,r.style]);else if(Zo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){vn(t,e,7,[n,r])}const RA=Sv();let SA=0;function PA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||RA,i={uid:SA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new By(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xv(r,s),emitsOptions:$v(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fA.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const _l=()=>ft||at;let Oc,gh;{const t=cl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oc=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),gh=e("__VUE_SSR_SETTERS__",n=>Mo=n)}const oa=t=>{const e=ft;return Oc(t),t.scope.on(),()=>{t.scope.off(),Oc(e)}},gm=()=>{ft&&ft.scope.off(),Oc(null)};function Qv(t){return t.vnode.shapeFlag&4}let Mo=!1;function CA(t,e=!1,n=!1){e&&gh(e);const{props:r,children:s}=t.vnode,i=Qv(t);JI(t,r,i,e),nA(t,s,n);const o=i?kA(t,e):void 0;return e&&gh(!1),o}function kA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qI);const{setup:r}=n;if(r){Zr();const s=t.setupContext=r.length>1?xA(t):null,i=oa(t),o=ra(r,t,0,[t.props,s]),a=xy(o);if(es(),i(),(a||t.sp)&&!Vr(t)&&mv(t),a){if(o.then(gm,gm),e)return o.then(l=>{_h(t,l,e)}).catch(l=>{sa(l,t,0)});t.asyncDep=o}else _h(t,o,e)}else Yv(t,e)}function _h(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=rv(e)),Yv(t,n)}let _m;function Yv(t,e,n){const r=t.type;if(!t.render){if(!e&&_m&&!r.render){const s=r.template||qf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=st(st({isCustomElement:i,delimiters:a},o),l);r.render=_m(s,u)}}t.render=r.render||Cn}{const s=oa(t);Zr();try{zI(t)}finally{es(),s()}}}const OA={get(t,e){return Pt(t,"get",""),t[e]}};function xA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,OA),slots:t.slots,emit:t.emit,expose:e}}function yl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rv($f(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ho)return ho[n](t)},has(e,n){return n in e||n in ho}})):t.proxy}function yh(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function NA(t){return pe(t)&&"__vccOpts"in t}const Ue=(t,e)=>bI(t,e,Mo);function vt(t,e,n){const r=arguments.length;return r===2?Me(e)&&!le(e)?Ts(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ts(n)&&(n=[n]),Pe(t,e,n))}const Xv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vh;const ym=typeof window<"u"&&window.trustedTypes;if(ym)try{vh=ym.createPolicy("vue",{createHTML:t=>t})}catch{}const Jv=vh?t=>vh.createHTML(t):t=>t,DA="http://www.w3.org/2000/svg",LA="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,vm=zn&&zn.createElement("template"),MA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?zn.createElementNS(DA,t):e==="mathml"?zn.createElementNS(LA,t):n?zn.createElement(t,{is:n}):zn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>zn.createTextNode(t),createComment:t=>zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vm.innerHTML=Jv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=vm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vr="transition",Xi="animation",Vo=Symbol("_vtc"),Zv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},VA=st({},uv,Zv),FA=t=>(t.displayName="Transition",t.props=VA,t),eE=FA((t,{slots:e})=>vt(kI,UA(t),e)),ls=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Em=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function UA(t){const e={};for(const S in t)S in Zv||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,I=BA(s),O=I&&I[0],N=I&&I[1],{onBeforeEnter:x,onEnter:P,onEnterCancelled:E,onLeave:R,onLeaveCancelled:D,onBeforeAppear:V=x,onAppear:b=P,onAppearCancelled:y=E}=e,_=(S,T,ge,ve)=>{S._enterCancelled=ve,us(S,T?h:a),us(S,T?u:o),ge&&ge()},w=(S,T)=>{S._isLeaving=!1,us(S,d),us(S,g),us(S,p),T&&T()},C=S=>(T,ge)=>{const ve=S?b:P,Z=()=>_(T,S,ge);ls(ve,[T,Z]),wm(()=>{us(T,S?l:i),Hn(T,S?h:a),Em(ve)||bm(T,r,O,Z)})};return st(e,{onBeforeEnter(S){ls(x,[S]),Hn(S,i),Hn(S,o)},onBeforeAppear(S){ls(V,[S]),Hn(S,l),Hn(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,T){S._isLeaving=!0;const ge=()=>w(S,T);Hn(S,d),S._enterCancelled?(Hn(S,p),Am()):(Am(),Hn(S,p)),wm(()=>{S._isLeaving&&(us(S,d),Hn(S,g),Em(R)||bm(S,r,N,ge))}),ls(R,[S,ge])},onEnterCancelled(S){_(S,!1,void 0,!0),ls(E,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),ls(y,[S])},onLeaveCancelled(S){w(S),ls(D,[S])}})}function BA(t){if(t==null)return null;if(Me(t))return[Su(t.enter),Su(t.leave)];{const e=Su(t);return[e,e]}}function Su(t){return My(t)}function Hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vo]||(t[Vo]=new Set)).add(e)}function us(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Vo];n&&(n.delete(e),n.size||(t[Vo]=void 0))}function wm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let jA=0;function bm(t,e,n,r){const s=t._endId=++jA,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=$A(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function $A(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${vr}Delay`),i=r(`${vr}Duration`),o=Tm(s,i),a=r(`${Xi}Delay`),l=r(`${Xi}Duration`),u=Tm(a,l);let h=null,d=0,p=0;e===vr?o>0&&(h=vr,d=o,p=i.length):e===Xi?u>0&&(h=Xi,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?vr:Xi:null,p=h?h===vr?i.length:l.length:0);const g=h===vr&&/\b(transform|all)(,|$)/.test(r(`${vr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function Tm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Im(n)+Im(t[r])))}function Im(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Am(){return document.body.offsetHeight}function HA(t,e,n){const r=t[Vo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rm=Symbol("_vod"),qA=Symbol("_vsh"),zA=Symbol(""),WA=/(^|;)\s*display\s*:/;function KA(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ic(r,a,"")}else for(const o in e)n[o]==null&&ic(r,o,"");for(const o in n)o==="display"&&(i=!0),ic(r,o,n[o])}else if(s){if(e!==n){const o=r[zA];o&&(n+=";"+o),r.cssText=n,i=WA.test(n)}}else e&&t.removeAttribute("style");Rm in t&&(t[Rm]=i?r.display:"",t[qA]&&(r.display="none"))}const Sm=/\s*!important$/;function ic(t,e,n){if(le(n))n.forEach(r=>ic(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=GA(t,e);Sm.test(n)?t.setProperty(ks(r),n.replace(Sm,""),"important"):t[r]=n}}const Pm=["Webkit","Moz","ms"],Pu={};function GA(t,e){const n=Pu[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return Pu[e]=r;r=al(r);for(let s=0;s<Pm.length;s++){const i=Pm[s]+r;if(i in t)return Pu[e]=i}return e}const Cm="http://www.w3.org/1999/xlink";function km(t,e,n,r,s,i=WT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cm,e.slice(6,e.length)):t.setAttributeNS(Cm,e,n):n==null||i&&!Vy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":yn(n)?String(n):n)}function Om(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Vy(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Pr(t,e,n,r){t.addEventListener(e,n,r)}function QA(t,e,n,r){t.removeEventListener(e,n,r)}const xm=Symbol("_vei");function YA(t,e,n,r,s=null){const i=t[xm]||(t[xm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=XA(e);if(r){const u=i[e]=e1(r,s);Pr(t,a,u,l)}else o&&(QA(t,a,o,l),i[e]=void 0)}}const Nm=/(?:Once|Passive|Capture)$/;function XA(t){let e;if(Nm.test(t)){e={};let r;for(;r=t.match(Nm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ks(t.slice(2)),e]}let Cu=0;const JA=Promise.resolve(),ZA=()=>Cu||(JA.then(()=>Cu=0),Cu=Date.now());function e1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;vn(t1(r,n.value),e,5,[r])};return n.value=t,n.attached=ZA(),n}function t1(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Dm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,n1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?HA(t,r,o):e==="style"?KA(t,n,r):Zo(e)?kf(e)||YA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):r1(t,e,r,o))?(Om(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&km(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Om(t,un(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),km(t,e,r,o))};function r1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dm(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dm(e)&&ze(n)?!1:e in t}const mi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ri(e,n):e};function s1(t){t.target.composing=!0}function Lm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nr=Symbol("_assign"),OU={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[nr]=mi(s);const i=r||s.props&&s.props.type==="number";Pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=wc(a)),t[nr](a)}),n&&Pr(t,"change",()=>{t.value=t.value.trim()}),e||(Pr(t,"compositionstart",s1),Pr(t,"compositionend",Lm),Pr(t,"change",Lm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[nr]=mi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?wc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},xU={deep:!0,created(t,e,n){t[nr]=mi(n),Pr(t,"change",()=>{const r=t._modelValue,s=Fo(t),i=t.checked,o=t[nr];if(le(r)){const a=Nf(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Pi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(tE(t,i))})},mounted:Mm,beforeUpdate(t,e,n){t[nr]=mi(n),Mm(t,e,n)}};function Mm(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Nf(e,r.props.value)>-1;else if(Pi(e))s=e.has(r.props.value);else{if(e===n)return;s=ta(e,tE(t,!0))}t.checked!==s&&(t.checked=s)}const NU={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Pi(e);Pr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wc(Fo(o)):Fo(o));t[nr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Vn(()=>{t._assigning=!1})}),t[nr]=mi(r)},mounted(t,{value:e}){Vm(t,e)},beforeUpdate(t,e,n){t[nr]=mi(n)},updated(t,{value:e}){t._assigning||Vm(t,e)}};function Vm(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Pi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Fo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Nf(e,a)>-1}else o.selected=e.has(a);else if(ta(Fo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fo(t){return"_value"in t?t._value:t.value}function tE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const i1=["ctrl","shift","alt","meta"],o1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>i1.some(n=>t[`${n}Key`]&&!e.includes(n))},DU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=o1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},nE=st({patchProp:n1},MA);let mo,Fm=!1;function a1(){return mo||(mo=sA(nE))}function c1(){return mo=Fm?mo:iA(nE),Fm=!0,mo}const l1=(...t)=>{const e=a1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},u1=(...t)=>{const e=c1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(s)return n(s,!0,rE(s))},e};function rE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sE(t){return ze(t)?document.querySelector(t):t}const h1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,f1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,d1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function p1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){m1(t);return}return e}function m1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Uo(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!d1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(h1.test(t)||f1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,p1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const g1=/#/g,_1=/&/g,y1=/\//g,v1=/=/g,Yf=/\+/g,E1=/%5e/gi,w1=/%60/gi,b1=/%7c/gi,T1=/%20/gi;function I1(t){return encodeURI(""+t).replace(b1,"|")}function Eh(t){return I1(typeof t=="string"?t:JSON.stringify(t)).replace(Yf,"%2B").replace(T1,"+").replace(g1,"%23").replace(_1,"%26").replace(w1,"`").replace(E1,"^").replace(y1,"%2F")}function ku(t){return Eh(t).replace(v1,"%3D")}function xc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function A1(t){return xc(t.replace(Yf," "))}function R1(t){return xc(t.replace(Yf," "))}function iE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=A1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=R1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function S1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ku(t)}=${Eh(n)}`).join("&"):`${ku(t)}=${Eh(e)}`:ku(t)}function P1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>S1(e,t[e])).filter(Boolean).join("&")}const C1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,k1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,O1=/^([/\\]\s*){2,}[^/\\]/,x1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,N1=/\/$|\/\?|\/#/,D1=/^\.?\//;function fr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?C1.test(t):k1.test(t)||(e.acceptRelative?O1.test(t):!1)}function L1(t){return!!t&&x1.test(t)}function wh(t="",e){return e?N1.test(t):t.endsWith("/")}function vl(t="",e){if(!e)return(wh(t)?t.slice(0,-1):t)||"/";if(!wh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Nc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(wh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function M1(t=""){return t.startsWith("/")}function Um(t=""){return M1(t)?t:"/"+t}function V1(t,e){if(aE(e)||fr(t))return t;const n=vl(e);return t.startsWith(n)?t:El(n,t)}function Bm(t,e){if(aE(e))return t;const n=vl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function oE(t,e){const n=B1(t),r={...iE(n.search),...e};return n.search=P1(r),j1(n)}function aE(t){return!t||t==="/"}function F1(t){return t&&t!=="/"}function El(t,...e){let n=t||"";for(const r of e.filter(s=>F1(s)))if(n){const s=r.replace(D1,"");n=Nc(n)+s}else n=r;return n}function cE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&fr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function U1(t,e,n={}){return n.trailingSlash||(t=Nc(t),e=Nc(e)),n.leadingSlash||(t=Um(t),e=Um(e)),n.encoding||(t=xc(t),e=xc(e)),t===e}const lE=Symbol.for("ufo:protocolRelative");function B1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!fr(t,{acceptRelative:!0}))return jm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=jm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[lE]:!r}}function jm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function j1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[lE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class $1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function H1(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new $1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[I]}});return a}const q1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function $m(t="GET"){return q1.has(t.toUpperCase())}function z1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const W1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),K1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function G1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return K1.test(e)?"json":W1.has(e)||e.startsWith("text/")?"text":"blob"}function Q1(t,e,n,r){const s=Y1((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function Y1(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function $a(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const X1=new Set([408,409,425,429,500,502,503,504]),J1=new Set([101,204,205,304]);function uE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=$m(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):X1.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=H1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:Q1(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await $a(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=V1(h.request,h.options.baseURL)),h.options.query&&(h.request=oE(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&$m(h.options.method)&&(z1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const g=new r;d=setTimeout(()=>{const I=new Error("[TimeoutError]: The operation was aborted due to timeout");I.name="TimeoutError",I.code=23,g.abort(I)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await $a(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!J1.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||G1(h.response.headers.get("content-type")||"");switch(g){case"json":{const I=await h.response.text(),O=h.options.parseResponse||Uo;h.response._data=O(I);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await $a(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await $a(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>uE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Dc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Z1=Dc.fetch?(...t)=>Dc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),eR=Dc.Headers,tR=Dc.AbortController,nR=uE({fetch:Z1,Headers:eR,AbortController:tR}),rR=nR,sR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Lc=sR().app,iR=()=>Lc.baseURL,oR=()=>Lc.buildAssetsDir,Xf=(...t)=>cE(Jf(),oR(),...t),Jf=(...t)=>{const e=Lc.cdnURL||Lc.baseURL;return t.length?cE(e,...t):e};globalThis.__buildAssetsURL=Xf,globalThis.__publicAssetsURL=Jf;globalThis.$fetch||(globalThis.$fetch=rR.create({baseURL:iR()}));function bh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?bh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const aR={run:t=>t()},cR=()=>aR,hE=typeof console.createTask<"u"?console.createTask:cR;function lR(t,e){const n=e.shift(),r=hE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function uR(t,e){const n=e.shift(),r=hE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Ou(t,e){for(const n of[...t])n(e)}class hR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=bh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=bh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(lR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(uR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Ou(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Ou(this._after,s)}):(this._after&&s&&Ou(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function fE(){return new hR}function fR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Th.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Th.delete(u)}}}}function dR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=fR({...t,...r})),e[n],e[n]}}}const Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Hm="__unctx__",pR=Mc[Hm]||(Mc[Hm]=dR()),mR=(t,e={})=>pR.get(t,e),qm="__unctx_async_handlers__",Th=Mc[qm]||(Mc[qm]=new Set);function oi(t){const e=[];for(const s of Th){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ih={name:"page",mode:"out-in"},gR=!1,_R=!1,yR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},vR=null,ER="#__nuxt",dE="nuxt-app",zm=36e5,wR="vite:preloadError";function pE(t=dE){return mR(t,{asyncContext:!1})}const bR="__nuxt_plugin";function TR(t){var s;let e=0;const n={_id:t.id||dE||"nuxt-app",_scope:Lf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.159"},get vue(){return n.vueApp.version}},payload:Yn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Yn({}),state:ur({}),once:new Set,_errors:Yn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!na()?n._scope.run(()=>Wm(n,i)):Wm(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Yn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=fE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ha(n,a,o),Ha(n.vueApp.config.globalProperties,a,o)},Ha(n.vueApp,"$nuxt",n),Ha(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(wR,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Le;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function IR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function AR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function RR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=AR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)IR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[bR]:!0,_name:e})}function Wm(t,e,n){const r=()=>e();return pE(t._id).set(t),t.vueApp.runWithContext(r)}function SR(t){var n;let e;return zf()&&(e=(n=_l())==null?void 0:n.appContext.app.$nuxt),e=e||pE(t).tryUse(),e||null}function Le(t){const e=SR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Os(t){return Le().$config}function Ha(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function PR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||CR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=kR(u,s)}i=a+1}return n}function CR(t){return t.includes("%")?decodeURIComponent(t):t}function kR(t,e){try{return e(t)}catch{return t}}const qa=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Km(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!qa.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!qa.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!qa.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!qa.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!OR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function OR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Gm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Qm(t,e){e?e={...Gm,...e}:e=Gm;const n=mE(e);return n.dispatch(t),n.toString()}const xR=Object.freeze(["prototype","__proto__","constructor"]);function mE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!Ym(s)&&(h=xR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=mE(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),Ym(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const gE="[native code] }",NR=gE.length;function Ym(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-NR)===gE}function DR(t,e,n={}){return t===e||Qm(t,n)===Qm(e,n)}function LR(t,e){return{ctx:{table:t},matchAll:n=>yE(n,t)}}function _E(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,_E(s)])):new Map(Object.entries(t[n]));return e}function MR(t){return LR(_E(t))}function yE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Xm(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Xm(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...yE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Xm(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function xu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ah(t,e,n=".",r){if(!xu(e))return Ah(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:xu(o)&&xu(s[i])?s[i]=Ah(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function VR(t){return(...e)=>e.reduce((n,r)=>Ah(n,r,"",t),{})}const vE=VR();function FR(t,e){try{return e in t}catch{return!1}}var UR=Object.defineProperty,BR=(t,e,n)=>e in t?UR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ds=(t,e,n)=>(BR(t,typeof e!="symbol"?e+"":e,n),n);class Rh extends Error{constructor(e,n={}){super(e,n),ds(this,"statusCode",500),ds(this,"fatal",!1),ds(this,"unhandled",!1),ds(this,"statusMessage"),ds(this,"data"),ds(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Ph(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=EE(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}ds(Rh,"__h3_error__",!0);function Sh(t){if(typeof t=="string")return new Rh(t);if(jR(t))return t;const e=new Rh(t.message??t.statusMessage??"",{cause:t.cause||t});if(FR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Ph(t.statusCode,e.statusCode):t.status&&(e.statusCode=Ph(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;EE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function jR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const $R=/[^\u0009\u0020-\u007E]/g;function EE(t=""){return t.replace($R,"")}function Ph(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const wE=Symbol("layout-meta"),aa=Symbol("route"),Et=()=>{var t;return(t=Le())==null?void 0:t.$router},Zf=()=>zf()?xt(aa,Le()._route):Le()._route;function LU(t){return t}const HR=()=>{try{if(Le()._processingMiddleware)return!0}catch{return!1}return!1},qR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Ch(t):Et().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=fr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&L1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=HR();if(!s&&i)return t;const o=Et(),a=Le();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Ch(t){return oE(t.path||"",t.query||{})+(t.hash||"")}const bE="__nuxt_error",wl=()=>EI(Le().payload,"error"),Xs=t=>{const e=bl(t);try{const n=Le(),r=wl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},TE=async(t={})=>{const e=Le(),n=wl();e.callHook("app:error:cleared",t),t.redirect&&await Et().replace(t.redirect),n.value=vR},zR=t=>!!t&&typeof t=="object"&&bE in t,bl=t=>{const e=Sh(t);return Object.defineProperty(e,bE,{value:!0,configurable:!1,writable:!1}),e};function Jm(t){const e=KR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const WR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function KR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=WR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const GR=-1,QR=-2,YR=-3,XR=-4,JR=-5,ZR=-6;function eS(t,e){return tS(JSON.parse(t),e)}function tS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===GR)return;if(i===YR)return NaN;if(i===XR)return 1/0;if(i===JR)return-1/0;if(i===ZR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],I=a[1],O=Jm(I),N=new g(O);r[i]=N;break}case"ArrayBuffer":{const g=a[1],I=Jm(g);r[i]=I;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==QR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const nS=new Set(["title","titleTemplate","script","style","noscript"]),oc=new Set(["base","meta","link","style","script","noscript"]),rS=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),sS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),IE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),iS=typeof window<"u";function Vc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function kh(t){if(t._h)return t._h;if(t._d)return Vc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Vc(e)}function oS(t,e){return t instanceof Promise?t.then(e):e(t)}function Oh(t,e,n,r){const s=r||RE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Oh(t,e,n,o));const i={tag:t,props:s};for(const o of IE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||nS.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function aS(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function AE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=aS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,AE(t,e,n,s)));if(!e&&!IE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function RE(t,e=!1){const n=AE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const cS=10;function SE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,SE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function lS(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!rS.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Oh(s,o,t));continue}e.push(Oh(s,i,t))}}if(e.length===0)return[];const r=[];return oS(SE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<cS)+i,s)))}const Zm=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),eg={base:-10,title:10},tg={critical:-80,high:-10,low:20};function Fc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in eg&&(n=eg[t.tag]),e&&e in tg?n+tg[e]:n}const uS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],hS=["name","property","http-equiv"];function PE(t){const{props:e,tag:n}=t;if(sS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of hS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Rr="%separator";function fS(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const dS=new RegExp(`${Rr}(?:\\s*${Rr})*`,"g");function za(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Rr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Rr||!i.includes(a))return a;const l=fS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Rr)&&(t=t.slice(0,-Rr.length)),t.startsWith(Rr)&&(t=t.slice(Rr.length)),t=t.replace(dS,n).trim()),t}function ng(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function CE(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:oc.has(p.tag)?kh(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const g of["body","head"]){const I=(d=n[g])==null?void 0:d.children;for(const O of I){const N=O.tagName.toLowerCase();if(!oc.has(N))continue;const x={tag:N,props:await RE(O.getAttributeNames().reduce((D,V)=>({...D,[V]:O.getAttribute(V)}),{})),innerHTML:O.innerHTML},P=PE(x);let E=P,R=1;for(;E&&p.has(E);)E=`${P}:${R++}`;E&&(x._d=E,p.add(E)),o.elMap[O.getAttribute("data-hid")||kh(x)]=O}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,g,I){const O=`${p}:${g}`;o.sideEffects[O]=I,delete o.pendingSideEffects[O]}function l({id:p,$el:g,tag:I}){const O=I.tag.endsWith("Attrs");if(o.elMap[p]=g,O||(I.textContent&&I.textContent!==g.textContent&&(g.textContent=I.textContent),I.innerHTML&&I.innerHTML!==g.innerHTML&&(g.innerHTML=I.innerHTML),a(p,"el",()=>{var N;(N=o.elMap[p])==null||N.remove(),delete o.elMap[p]})),I._eventHandlers)for(const N in I._eventHandlers)Object.prototype.hasOwnProperty.call(I._eventHandlers,N)&&g.getAttribute(`data-${N}`)!==""&&((I.tag==="bodyAttrs"?n.defaultView:g).addEventListener(N.substring(2),I._eventHandlers[N].bind(g)),g.setAttribute(`data-${N}`,""));for(const N in I.props){if(!Object.prototype.hasOwnProperty.call(I.props,N))continue;const x=I.props[N],P=`attr:${N}`;if(N==="class"){if(!x)continue;for(const E of x.split(" "))O&&a(p,`${P}:${E}`,()=>g.classList.remove(E)),!g.classList.contains(E)&&g.classList.add(E)}else if(N==="style"){if(!x)continue;for(const E of x.split(";")){const R=E.indexOf(":"),D=E.substring(0,R).trim(),V=E.substring(R+1).trim();a(p,`${P}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,V)}}else g.getAttribute(N)!==x&&g.setAttribute(N,x===!0?"":String(x)),O&&a(p,P,()=>g.removeAttribute(N))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:g,shouldRender:I,id:O}=p;if(I){if(g.tag==="title"){n.title=g.textContent;continue}p.$el=p.$el||o.elMap[O],p.$el?l(p):oc.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function pS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>CE(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function mS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{pS(i,t)}}}}}const gS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),_S={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=PE(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||kh(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&gS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Fc(r)>Fc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&oc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},yS=new Set(["script","link","bodyAttrs"]),vS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!yS.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&Zm.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Vc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);Zm.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),ES=new Set(["link","style","script","noscript"]),wS={hooks:{"tag:normalise":({tag:t})=>{t.key&&ES.has(t.tag)&&(t.props["data-hid"]=t._h=Vc(t.key))}}},bS={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},TS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of uS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Fc(n),i=Fc(r);return s<i?-1:s>i?1:n._p-r._p})}}},IS={meta:"content",link:"href",htmlAttrs:"lang"},AS=["innerHTML","textContent"],RS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=za(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=IS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=za(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of AS)typeof a[u]=="string"&&(a[u]=za(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=za(n.textContent,t._templateParams,t._separator))}}}),SS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=ng(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=ng(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},PS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};function CS(t={}){const e=kS(t);return e.use(mS()),e}function rg(t,e){return!t||t==="server"&&e||t==="client"&&!e}function kS(t={}){const e=fE();e.addHooks(t.hooks||{}),t.document=t.document||(iS?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),rg(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return rg(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const p of i)p._i===h._i&&(p.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await lS(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[_S,bS,vS,wS,TS,RS,SS,PS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}const OS=Xv[0]==="3";function xS(t){return typeof t=="function"?t():Qe(t)}function xh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=xS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>xh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=xh(e[r])}return n}return e}const NS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=xh(e.input)}}},DS="usehead";function LS(t){return{install(n){OS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(DS,t))}}.install}function MS(t={}){t.domDelayFn=t.domDelayFn||(n=>Vn(()=>setTimeout(()=>n(),0)));const e=CS(t);return e.use(NS),e.install=LS(e),e}const VS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},FS="__unhead_injection_handler__";function US(t){VS[FS]=t}let ac,cc;function BS(){return ac=$fetch(Xf(`builds/meta/${Os().app.buildId}.json`),{responseType:"json"}),ac.then(t=>{cc=MR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),ac}function Tl(){return ac||BS()}async function ed(t){if(await Tl(),!cc)return console.error("[nuxt] Error creating app manifest matcher.",cc),{};try{return vE({},...cc.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function sg(t,e={}){const n=await $S(t,e),r=Le(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=OE(t).then(i=>i?kE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const jS="_payload.json";async function $S(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||fr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Os(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await OE(t)?i:r.app.baseURL;return El(o,n.pathname,jS+(s?`?${s}`:""))}async function kE(t){const e=fetch(t).then(n=>n.text().then(xE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function OE(t=Zf().path){if(t=vl(t),(await Tl()).prerendered.includes(t))return!0;const n=await ed(t);return!!n.prerender&&!n.redirect}let hs=null;async function HS(){var r;if(hs)return hs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await xE(t.textContent||""),n=t.dataset.src?await kE(t.dataset.src):void 0;return hs={...e,...n,...window.__NUXT__},(r=hs.config)!=null&&r.public&&(hs.config.public=ur(hs.config.public)),hs}async function xE(t){return await eS(t,Le()._payloadRevivers)}function qS(t,e){Le()._payloadRevivers[t]=e}const zS=[["NuxtError",t=>bl(t)],["EmptyShallowRef",t=>ko(t==="_"?void 0:t==="0n"?BigInt(0):Uo(t))],["EmptyRef",t=>Gt(t==="_"?void 0:t==="0n"?BigInt(0):Uo(t))],["ShallowRef",t=>ko(t)],["ShallowReactive",t=>Yn(t)],["Ref",t=>Gt(t)],["Reactive",t=>ur(t)]],WS=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of zS)qS(r,s);Object.assign(t.payload,([e,n]=oi(()=>t.runWithContext(HS)),e=await e,n(),e)),window.__NUXT__=t.payload}});let KS;function GS(){return KS}function QS(t){return typeof t=="function"?t():Qe(t)}function Nh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=QS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Nh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Nh(e[r])}return n}return e}const YS="usehead",ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},og="__unhead_injection_handler__";function XS(){if(og in ig)return ig[og]();const t=xt(YS);return t||GS()}function ag(t,e={}){const n=e.head||XS();if(n)return n.ssr?n.push(t,e):JS(n,t,e)}function JS(t,e,n={}){const r=Gt(!1),s=Gt({});lA(()=>{s.value=r.value?{}:Nh(e)});const i=t.push(s.value,n);return _n(s,a=>{i.patch(a)}),_l()&&(ia(()=>{i.dispose()}),_v(()=>{r.value=!0}),gv(()=>{r.value=!1})),i}const ZS=[],eP=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=MS({plugins:ZS});US(()=>Le().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await CE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ws=typeof document<"u";function NE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&NE(t.default)}const Ne=Object.assign;function Nu(t,e){const n={};for(const r in e){const s=e[r];n[r]=En(s)?s.map(t):t(s)}return n}const go=()=>{},En=Array.isArray,DE=/#/g,nP=/&/g,rP=/\//g,sP=/=/g,iP=/\?/g,LE=/\+/g,oP=/%5B/g,aP=/%5D/g,ME=/%5E/g,cP=/%60/g,VE=/%7B/g,lP=/%7C/g,FE=/%7D/g,uP=/%20/g;function td(t){return encodeURI(""+t).replace(lP,"|").replace(oP,"[").replace(aP,"]")}function hP(t){return td(t).replace(VE,"{").replace(FE,"}").replace(ME,"^")}function Dh(t){return td(t).replace(LE,"%2B").replace(uP,"+").replace(DE,"%23").replace(nP,"%26").replace(cP,"`").replace(VE,"{").replace(FE,"}").replace(ME,"^")}function fP(t){return Dh(t).replace(sP,"%3D")}function dP(t){return td(t).replace(DE,"%23").replace(iP,"%3F")}function pP(t){return t==null?"":dP(t).replace(rP,"%2F")}function Bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const mP=/\/$/,gP=t=>t.replace(mP,"");function Du(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=EP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bo(o)}}function _P(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gi(e.matched[r],n.matched[s])&&UE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function UE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vP(t[n],e[n]))return!1;return!0}function vP(t,e){return En(t)?lg(t,e):En(e)?lg(e,t):t===e}function lg(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function EP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jo;(function(t){t.pop="pop",t.push="push"})(jo||(jo={}));var _o;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_o||(_o={}));function wP(t){if(!t)if(Ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gP(t)}const bP=/^[^#]+#/;function TP(t,e){return t.replace(bP,"#")+e}function IP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Il=()=>({left:window.scrollX,top:window.scrollY});function AP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=IP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ug(t,e){return(history.state?history.state.position-e:-1)+t}const Lh=new Map;function RP(t,e){Lh.set(t,e)}function SP(t){const e=Lh.get(t);return Lh.delete(t),e}let PP=()=>location.protocol+"//"+location.host;function BE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),cg(l,"")}return cg(n,t)+r+s}function CP(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=BE(t,location),I=n.value,O=e.value;let N=0;if(p){if(n.value=g,e.value=p,o&&o===I){o=null;return}N=O?p.position-O.position:0}else r(g);s.forEach(x=>{x(n.value,I,{delta:N,type:jo.pop,direction:N?N>0?_o.forward:_o.back:_o.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const I=s.indexOf(p);I>-1&&s.splice(I,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Ne({},p.state,{scroll:Il()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function hg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Il():null}}function kP(t){const{history:e,location:n}=window,r={value:BE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:PP()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Ne({},e.state,hg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Ne({},s.value,e.state,{forward:l,scroll:Il()});i(h.current,h,!0);const d=Ne({},hg(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function jE(t){t=wP(t);const e=kP(t),n=CP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:TP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function OP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jE(t)}function xP(t){return typeof t=="string"||t&&typeof t=="object"}function $E(t){return typeof t=="string"||typeof t=="symbol"}const HE=Symbol("");var fg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fg||(fg={}));function _i(t,e){return Ne(new Error,{type:t,[HE]:!0},e)}function qn(t,e){return t instanceof Error&&HE in t&&(e==null||!!(t.type&e))}const dg="[^/]+?",NP={sensitive:!1,strict:!1,start:!0,end:!0},DP=/[.+*?^${}()[\]/\\]/g;function LP(t,e){const n=Ne({},NP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(DP,"\\$&"),g+=40;else if(p.type===1){const{value:I,repeatable:O,optional:N,regexp:x}=p;i.push({name:I,repeatable:O,optional:N});const P=x||dg;if(P!==dg){g+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${I}" (${P}): `+R.message)}}let E=O?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(E=N&&u.length<2?`(?:/${E})`:"/"+E),N&&(E+="?"),s+=E,g+=20,N&&(g+=-8),O&&(g+=-20),P===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",I=i[p-1];d[I.name]=g&&I.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:I,repeatable:O,optional:N}=g,x=I in u?u[I]:"";if(En(x)&&!O)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const P=En(x)?x.join("/"):x;if(!P)if(N)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);h+=P}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function MP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=MP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pg(r))return 1;if(pg(s))return-1}return s.length-r.length}function pg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VP={type:0,value:""},FP=/[a-zA-Z0-9_]/;function UP(t){if(!t)return[[]];if(t==="/")return[[VP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:FP.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function BP(t,e,n){const r=LP(UP(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function jP(t,e){const n=[],r=new Map;e=yg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const I=!g,O=gg(d);O.aliasOf=g&&g.record;const N=yg(e,d),x=[O];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)x.push(gg(Ne({},O,{components:g?g.record.components:O.components,path:D,aliasOf:g?g.record:O})))}let P,E;for(const R of x){const{path:D}=R;if(p&&D[0]!=="/"){const V=p.record.path,b=V[V.length-1]==="/"?"":"/";R.path=p.record.path+(D&&b+D)}if(P=BP(R,p,N),g?g.alias.push(P):(E=E||P,E!==P&&E.alias.push(P),I&&d.name&&!_g(P)&&o(d.name)),zE(P)&&l(P),O.children){const V=O.children;for(let b=0;b<V.length;b++)i(V[b],P,g&&g.children[b])}g=g||P}return E?()=>{o(E)}:go}function o(d){if($E(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=qP(d,n);n.splice(p,0,d),d.record.name&&!_g(d)&&r.set(d.record.name,d)}function u(d,p){let g,I={},O,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw _i(1,{location:d});N=g.record.name,I=Ne(mg(p.params,g.keys.filter(E=>!E.optional).concat(g.parent?g.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&mg(d.params,g.keys.map(E=>E.name))),O=g.stringify(I)}else if(d.path!=null)O=d.path,g=n.find(E=>E.re.test(O)),g&&(I=g.parse(O),N=g.record.name);else{if(g=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!g)throw _i(1,{location:d,currentLocation:p});N=g.record.name,I=Ne({},p.params,d.params),O=g.stringify(I)}const x=[];let P=g;for(;P;)x.unshift(P.record),P=P.parent;return{name:N,path:O,params:I,matched:x,meta:HP(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function mg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:$P(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $P(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _g(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HP(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function yg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;qE(t,e[i])<0?r=i:n=i+1}const s=zP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function zP(t){let e=t;for(;e=e.parent;)if(zE(e)&&qE(t,e)===0)return e}function zE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function WP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(LE," "),o=i.indexOf("="),a=Bo(o<0?i:i.slice(0,o)),l=o<0?null:Bo(i.slice(o+1));if(a in e){let u=e[a];En(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function vg(t){let e="";for(let n in t){const r=t[n];if(n=fP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(i=>i&&Dh(i)):[r&&Dh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function KP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const GP=Symbol(""),Eg=Symbol(""),nd=Symbol(""),rd=Symbol(""),Mh=Symbol("");function Ji(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(_i(4,{from:n,to:e})):p instanceof Error?l(p):xP(p)?l(_i(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Lu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(NE(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Sr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=tP(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Sr(g,n,r,o,a,s)()}))}}return i}function wg(t){const e=xt(nd),n=xt(rd),r=Ue(()=>{const l=Qe(t.to);return e.resolve(l)}),s=Ue(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(gi.bind(null,h));if(p>-1)return p;const g=bg(l[u-2]);return u>1&&bg(h)===g&&d[d.length-1].path!==g?d.findIndex(gi.bind(null,l[u-2])):p}),i=Ue(()=>s.value>-1&&JP(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&UE(n.params,r.value.params));function a(l={}){return XP(l)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(go):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const QP=Fn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wg,setup(t,{slots:e}){const n=ur(wg(t)),{options:r}=xt(nd),s=Ue(()=>({[Tg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Tg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YP=QP;function XP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function JP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!En(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tg=(t,e,n)=>t??e??n,ZP=Fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(Mh),s=Ue(()=>t.route||r.value),i=xt(Eg,0),o=Ue(()=>{let u=Qe(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ue(()=>s.value.matched[o.value]);vs(Eg,Ue(()=>o.value+1)),vs(GP,a),vs(Mh,s);const l=Gt();return _n(()=>[l.value,a.value,t.name],([u,h,d],[p,g,I])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!gi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Ig(n.default,{Component:p,route:u});const g=d.props[h],I=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=vt(p,Ne({},I,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Ig(n.default,{Component:N,route:u})||N}}});function Ig(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WE=ZP;function eC(t){const e=jP(t.routes,t),n=t.parseQuery||WP,r=t.stringifyQuery||vg,s=t.history,i=Ji(),o=Ji(),a=Ji(),l=ko(dn);let u=dn;Ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Nu.bind(null,B=>""+B),d=Nu.bind(null,pP),p=Nu.bind(null,Bo);function g(B,ee){let X,re;return $E(B)?(X=e.getRecordMatcher(B),re=ee):re=B,e.addRoute(re,X)}function I(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function O(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function x(B,ee){if(ee=Ne({},ee||l.value),typeof B=="string"){const k=Du(n,B,ee.path),M=e.resolve({path:k.path},ee),$=s.createHref(k.fullPath);return Ne(k,M,{params:p(M.params),hash:Bo(k.hash),redirectedFrom:void 0,href:$})}let X;if(B.path!=null)X=Ne({},B,{path:Du(n,B.path,ee.path).path});else{const k=Ne({},B.params);for(const M in k)k[M]==null&&delete k[M];X=Ne({},B,{params:d(k)}),ee.params=d(ee.params)}const re=e.resolve(X,ee),be=B.hash||"";re.params=h(p(re.params));const De=_P(r,Ne({},B,{hash:hP(be),path:re.path})),A=s.createHref(De);return Ne({fullPath:De,hash:be,query:r===vg?KP(B.query):B.query||{}},re,{redirectedFrom:void 0,href:A})}function P(B){return typeof B=="string"?Du(n,B,l.value.path):Ne({},B)}function E(B,ee){if(u!==B)return _i(8,{from:ee,to:B})}function R(B){return b(B)}function D(B){return R(Ne(P(B),{replace:!0}))}function V(B){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(B):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=P(re):{path:re},re.params={}),Ne({query:B.query,hash:B.hash,params:re.path!=null?{}:B.params},re)}}function b(B,ee){const X=u=x(B),re=l.value,be=B.state,De=B.force,A=B.replace===!0,k=V(X);if(k)return b(Ne(P(k),{state:typeof k=="object"?Ne({},be,k.state):be,force:De,replace:A}),ee||X);const M=X;M.redirectedFrom=ee;let $;return!De&&yP(r,re,X)&&($=_i(16,{to:M,from:re}),tn(re,re,!0,!1)),($?Promise.resolve($):w(M,re)).catch(U=>qn(U)?qn(U,2)?U:hn(U):ne(U,M,re)).then(U=>{if(U){if(qn(U,2))return b(Ne({replace:A},P(U.to),{state:typeof U.to=="object"?Ne({},be,U.to.state):be,force:De}),ee||M)}else U=S(M,re,!0,A,be);return C(M,re,U),U})}function y(B,ee){const X=E(B,ee);return X?Promise.reject(X):Promise.resolve()}function _(B){const ee=pr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function w(B,ee){let X;const[re,be,De]=tC(B,ee);X=Lu(re.reverse(),"beforeRouteLeave",B,ee);for(const k of re)k.leaveGuards.forEach(M=>{X.push(Sr(M,B,ee))});const A=y.bind(null,B,ee);return X.push(A),$t(X).then(()=>{X=[];for(const k of i.list())X.push(Sr(k,B,ee));return X.push(A),$t(X)}).then(()=>{X=Lu(be,"beforeRouteUpdate",B,ee);for(const k of be)k.updateGuards.forEach(M=>{X.push(Sr(M,B,ee))});return X.push(A),$t(X)}).then(()=>{X=[];for(const k of De)if(k.beforeEnter)if(En(k.beforeEnter))for(const M of k.beforeEnter)X.push(Sr(M,B,ee));else X.push(Sr(k.beforeEnter,B,ee));return X.push(A),$t(X)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),X=Lu(De,"beforeRouteEnter",B,ee,_),X.push(A),$t(X))).then(()=>{X=[];for(const k of o.list())X.push(Sr(k,B,ee));return X.push(A),$t(X)}).catch(k=>qn(k,8)?k:Promise.reject(k))}function C(B,ee,X){a.list().forEach(re=>_(()=>re(B,ee,X)))}function S(B,ee,X,re,be){const De=E(B,ee);if(De)return De;const A=ee===dn,k=Ws?history.state:{};X&&(re||A?s.replace(B.fullPath,Ne({scroll:A&&k&&k.scroll},be)):s.push(B.fullPath,be)),l.value=B,tn(B,ee,X,A),hn()}let T;function ge(){T||(T=s.listen((B,ee,X)=>{if(!bn.listening)return;const re=x(B),be=V(re);if(be){b(Ne(be,{replace:!0}),re).catch(go);return}u=re;const De=l.value;Ws&&RP(ug(De.fullPath,X.delta),Il()),w(re,De).catch(A=>qn(A,12)?A:qn(A,2)?(b(A.to,re).then(k=>{qn(k,20)&&!X.delta&&X.type===jo.pop&&s.go(-1,!1)}).catch(go),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(A,re,De))).then(A=>{A=A||S(re,De,!1),A&&(X.delta&&!qn(A,8)?s.go(-X.delta,!1):X.type===jo.pop&&qn(A,20)&&s.go(-1,!1)),C(re,De,A)}).catch(go)}))}let ve=Ji(),Z=Ji(),se;function ne(B,ee,X){hn(B);const re=Z.list();return re.length?re.forEach(be=>be(B,ee,X)):console.error(B),Promise.reject(B)}function We(){return se&&l.value!==dn?Promise.resolve():new Promise((B,ee)=>{ve.add([B,ee])})}function hn(B){return se||(se=!B,ge(),ve.list().forEach(([ee,X])=>B?X(B):ee()),ve.reset()),B}function tn(B,ee,X,re){const{scrollBehavior:be}=t;if(!Ws||!be)return Promise.resolve();const De=!X&&SP(ug(B.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return Vn().then(()=>be(B,ee,De)).then(A=>A&&AP(A)).catch(A=>ne(A,B,ee))}const Ke=B=>s.go(B);let Ge;const pr=new Set,bn={currentRoute:l,listening:!0,addRoute:g,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:O,resolve:x,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:We,install(B){const ee=this;B.component("RouterLink",YP),B.component("RouterView",WE),B.config.globalProperties.$router=ee,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),Ws&&!Ge&&l.value===dn&&(Ge=!0,R(s.location).catch(be=>{}));const X={};for(const be in dn)Object.defineProperty(X,be,{get:()=>l.value[be],enumerable:!0});B.provide(nd,ee),B.provide(rd,Yn(X)),B.provide(Mh,l);const re=B.unmount;pr.add(B),B.unmount=function(){pr.delete(B),pr.size<1&&(u=dn,T&&T(),T=null,l.value=dn,Ge=!1,se=!1),re()}}};function $t(B){return B.reduce((ee,X)=>ee.then(()=>_(X)),Promise.resolve())}return bn}function tC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>gi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>gi(u,l))||s.push(l))}return[n,r,s]}function nC(t){return xt(rd)}const rC=/(:\w+)\([^)]+\)/g,sC=/(:\w+)[?+*]/g,iC=/:\w+/g,oC=(t,e)=>e.path.replace(rC,"$1").replace(sC,"$1").replace(iC,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Vh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&oC(t.route,n));return typeof r=="function"?r(t.route):r},aC=(t,e)=>({default:()=>t?vt(MI,t===!0?{}:t,e):e});function sd(t){return Array.isArray(t)?t:[t]}const cC="modulepreload",lC=function(t,e){return new URL(t,e).href},Ag={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=lC(u,r),u in Ag)return;Ag[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let I=o.length-1;I>=0;I--){const O=o[I];if(O.href===u&&(!h||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":cC,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((I,O)=>{g.addEventListener("load",I),g.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},uC={middleware:"auth"},hC={middleware:"auth"},fC={middleware:"auth"},Mu=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./DBVXR6RO.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./DAj-QNx_.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./BwwMMA7y.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:uC||{},component:()=>ke(()=>import("./GfeIQoQ1.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"Admin",path:"/Admin",meta:hC||{},component:()=>ke(()=>import("./D97F16TI.js"),__vite__mapDeps([3,4]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./DcKssvFK.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./BMV0wNot.js"),[],import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:fC||{},component:()=>ke(()=>import("./CpsHDvc4.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./CQjQF0Km.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./DC393d96.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./ByDCcSDi.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./vQf7wpqB.js"),[],import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./uXgPhVAl.js"),[],import.meta.url)},{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./CV4L8cOd.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./_KRs4F4_.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./BJ2Qt9NR.js"),__vite__mapDeps([16,8,9,17]),import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./CUL_a4fS.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./BXUT2tkC.js"),__vite__mapDeps([20,8,9]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./BdEmYmRX.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./GWgEwf_I.js"),__vite__mapDeps([21,1,22]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./BvCR-_O2.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./-NZ0FXGD.js"),__vite__mapDeps([23,8,9,24]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./HlsOBxV_.js"),__vite__mapDeps([25,8,9,26]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./CruA6yfE.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./BnmKwpUV.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./CbJcfYkT.js"),__vite__mapDeps([29,8,9]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./BMiAfIiV.js"),__vite__mapDeps([30,8,9]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./BXyE944-.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./DKUNRheX.js"),__vite__mapDeps([31,8,9]),import.meta.url)}],KE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?vt(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),dC=/(:\w+)\([^)]+\)/g,pC=/(:\w+)[?+*]/g,mC=/:\w+/g;function Rg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(dC,"$1").replace(pC,"$1").replace(mC,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function gC(t,e){return t===e||e===dn?!1:Rg(t)!==Rg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const _C={scrollBehavior(t,e,n){var u;const r=Le(),s=((u=Et().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&gC(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Sg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Ih),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Sg(t.hash),behavior:s}),h(i)})})}};function Sg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const yC={hashMode:!1,scrollBehaviorType:"auto"},sn={...yC,..._C},vC=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Le(),s=Et(),i=([e,n]=oi(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=bl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Xs(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},EC=async t=>{let e,n;const r=([e,n]=oi(()=>ed(t.path)),e=await e,n(),e);if(r.redirect)return fr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},wC=[vC,EC],yo={auth:()=>ke(()=>import("./BDPamtGD.js"),[],import.meta.url)};function bC(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Bm(h,"")}const a=Bm(r,t),l=!n||U1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const TC=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=Os().app.baseURL;sn.hashMode&&!r.includes("#")&&(r+="#");const s=((N=sn.history)==null?void 0:N.call(sn,r))??(sn.hashMode?OP(r):jE(r)),i=sn.routes?([e,n]=oi(()=>sn.routes(Mu)),e=await e,n(),e??Mu):Mu;let o;const a=eC({...sn,scrollBehavior:(x,P,E)=>{if(P===dn){o=E;return}if(sn.scrollBehavior){if(a.options.scrollBehavior=sn.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return sn.scrollBehavior(x,dn,o||E)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=ko(a.currentRoute.value);a.afterEach((x,P)=>{l.value=P}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=bC(r,window.location,t.payload.path),h=ko(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((x,P)=>{var E,R,D,V;((R=(E=x.matched[0])==null?void 0:E.components)==null?void 0:R.default)===((V=(D=P.matched[0])==null?void 0:D.components)==null?void 0:V.default)&&d()});const p={};for(const x in h.value)Object.defineProperty(p,x,{get:()=>h.value[x],enumerable:!0});t._route=Yn(p),t._middleware=t._middleware||{global:[],named:{}};const g=wl();a.afterEach(async(x,P,E)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(TE),E&&await t.callHook("page:loading:end")});try{[e,n]=oi(()=>a.isReady()),await e,n()}catch(x){[e,n]=oi(()=>t.runWithContext(()=>Xs(x))),await e,n()}const I=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const O=t.payload.state._layout;return a.beforeEach(async(x,P)=>{var E;await t.callHook("page:loading:start"),x.meta=ur(x.meta),t.isHydrating&&O&&!Hr(x.meta.layout)&&(x.meta.layout=O),t._processingMiddleware=!0;{const R=new Set([...wC,...t._middleware.global]);for(const D of x.matched){const V=D.meta.middleware;if(V)for(const b of sd(V))R.add(b)}{const D=await t.runWithContext(()=>ed(x.path));if(D.appMiddleware)for(const V in D.appMiddleware)D.appMiddleware[V]?R.add(V):R.delete(V)}for(const D of R){const V=typeof D=="string"?t._middleware.named[D]||await((E=yo[D])==null?void 0:E.call(yo).then(y=>y.default||y)):D;if(!V)throw new Error(`Unknown route middleware: '${D}'.`);const b=await t.runWithContext(()=>V(x,P));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const y=b||Sh({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Xs(y)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(x,P)=>{x.matched.length===0&&await t.runWithContext(()=>Xs(Sh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`,data:{path:x.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await a.replace({...I,force:!0}),a.options.scrollBehavior=sn.scrollBehavior}catch(x){await t.runWithContext(()=>Xs(x))}}),{provide:{router:a}}}}),Fh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),IC=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Al=t=>{const e=Le();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Fh(()=>t())}):Fh(()=>t())},AC=Zt({name:"nuxt:payload",setup(t){Et().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await sg(e.path);r&&Object.assign(t.static.data,r.data)}),Al(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await sg(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Tl,1e3)})}}),RC=Zt(()=>{const t=Et();Al(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),SC=Zt(t=>{let e;async function n(){const r=await Tl();e&&clearTimeout(e),e=setTimeout(n,zm);try{const s=await $fetch(Xf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Al(()=>{e=setTimeout(n,zm)})});function PC(t={}){const e=t.path||window.location.pathname;let n={};try{n=Uo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Le().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const CC=Zt({name:"nuxt:chunk-reload",setup(t){const e=Et(),n=Os(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:El(n.app.baseURL,i.fullPath);PC({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),kC=Zt({name:"nuxt:global-components"}),Dr={default:()=>ke(()=>import("./CJPeWTPS.js"),__vite__mapDeps([32,6,1,33]),import.meta.url)},OC=Zt({name:"nuxt:prefetch",setup(t){const e=Et();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Dr[r]=="function"&&await Dr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(fr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=sd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof yo[o]=="function"&&yo[o]();s&&typeof Dr[s]=="function"&&Dr[s]()})}});var Pg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},QE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(GE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new NC;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const I=u<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DC=function(t){const e=GE(t);return QE.encodeByteArray(e,!0)},Uc=function(t){return DC(t).replace(/\./g,"")},YE=function(t){try{return QE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MC=()=>LC().__FIREBASE_DEFAULTS__,VC=()=>{if(typeof process>"u"||typeof Pg>"u")return;const t=Pg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&YE(t[1]);return e&&JSON.parse(e)},Rl=()=>{try{return MC()||VC()||FC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XE=t=>{var e,n;return(n=(e=Rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JE=t=>{const e=XE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ZE=()=>{var t;return(t=Rl())===null||t===void 0?void 0:t.config},e0=t=>{var e;return(e=Rl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function t0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Uc(JSON.stringify(n)),Uc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function jC(){var t;const e=(t=Rl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function $C(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zC(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WC(){return!jC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KC(){try{return typeof indexedDB=="object"}catch{return!1}}function GC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QC,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ca.prototype.create)}}class ca{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?YC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Un(s,a,r)}}function YC(t,e){return t.replace(XC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const XC=/\{\$([^}]+)}/g;function JC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Cg(i)&&Cg(o)){if(!Bc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Cg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function no(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZC(t,e){const n=new ek(t,e);return n.subscribe.bind(n)}class ek{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vu),s.error===void 0&&(s.error=Vu),s.complete===void 0&&(s.complete=Vu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vu(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sk(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rk(t){return t===ps?void 0:t}function sk(t){return t.instantiationMode==="EAGER"}/**
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
 */class ik{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const ok={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},ak=Ee.INFO,ck={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},lk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ck[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=ak,this._logHandler=lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ok[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const uk=(t,e)=>e.some(n=>t instanceof n);let kg,Og;function hk(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fk(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n0=new WeakMap,Uh=new WeakMap,r0=new WeakMap,Fu=new WeakMap,od=new WeakMap;function dk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n0.set(n,t)}).catch(()=>{}),od.set(e,t),e}function pk(t){if(Uh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uh.set(t,e)}let Bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mk(t){Bh=t(Bh)}function gk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uu(this),e,...n);return r0.set(r,e.sort?e.sort():[e]),Fr(r)}:fk().includes(t)?function(...e){return t.apply(Uu(this),e),Fr(n0.get(this))}:function(...e){return Fr(t.apply(Uu(this),e))}}function _k(t){return typeof t=="function"?gk(t):(t instanceof IDBTransaction&&pk(t),uk(t,hk())?new Proxy(t,Bh):t)}function Fr(t){if(t instanceof IDBRequest)return dk(t);if(Fu.has(t))return Fu.get(t);const e=_k(t);return e!==t&&(Fu.set(t,e),od.set(e,t)),e}const Uu=t=>od.get(t);function yk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fr(o.result),l.oldVersion,l.newVersion,Fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vk=["get","getKey","getAll","getAllKeys","count"],Ek=["put","add","delete","clear"],Bu=new Map;function xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bu.get(e))return Bu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Bu.set(e,i),i}mk(t=>({...t,get:(e,n,r)=>xg(e,n)||t.get(e,n,r),has:(e,n)=>!!xg(e,n)||t.has(e,n)}));/**
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
 */class wk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",Ng="0.10.16";/**
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
 */const sr=new id("@firebase/app"),Tk="@firebase/app-compat",Ik="@firebase/analytics-compat",Ak="@firebase/analytics",Rk="@firebase/app-check-compat",Sk="@firebase/app-check",Pk="@firebase/auth",Ck="@firebase/auth-compat",kk="@firebase/database",Ok="@firebase/data-connect",xk="@firebase/database-compat",Nk="@firebase/functions",Dk="@firebase/functions-compat",Lk="@firebase/installations",Mk="@firebase/installations-compat",Vk="@firebase/messaging",Fk="@firebase/messaging-compat",Uk="@firebase/performance",Bk="@firebase/performance-compat",jk="@firebase/remote-config",$k="@firebase/remote-config-compat",Hk="@firebase/storage",qk="@firebase/storage-compat",zk="@firebase/firestore",Wk="@firebase/vertexai",Kk="@firebase/firestore-compat",Gk="firebase",Qk="11.0.2";/**
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
 */const $h="[DEFAULT]",Yk={[jh]:"fire-core",[Tk]:"fire-core-compat",[Ak]:"fire-analytics",[Ik]:"fire-analytics-compat",[Sk]:"fire-app-check",[Rk]:"fire-app-check-compat",[Pk]:"fire-auth",[Ck]:"fire-auth-compat",[kk]:"fire-rtdb",[Ok]:"fire-data-connect",[xk]:"fire-rtdb-compat",[Nk]:"fire-fn",[Dk]:"fire-fn-compat",[Lk]:"fire-iid",[Mk]:"fire-iid-compat",[Vk]:"fire-fcm",[Fk]:"fire-fcm-compat",[Uk]:"fire-perf",[Bk]:"fire-perf-compat",[jk]:"fire-rc",[$k]:"fire-rc-compat",[Hk]:"fire-gcs",[qk]:"fire-gcs-compat",[zk]:"fire-fst",[Kk]:"fire-fst-compat",[Wk]:"fire-vertex","fire-js":"fire-js",[Gk]:"fire-js-all"};/**
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
 */const jc=new Map,Xk=new Map,Hh=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(Hh.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Hh.set(e,t);for(const n of jc.values())Dg(n,t);for(const n of Xk.values())Dg(n,t);return!0}function Sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xn(t){return t.settings!==void 0}/**
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
 */const Jk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new ca("app","Firebase",Jk);/**
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
 */class Zk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=Qk;function s0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$h,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ur.create("bad-app-name",{appName:String(s)});if(n||(n=ZE()),!n)throw Ur.create("no-options");const i=jc.get(s);if(i){if(Bc(n,i.options)&&Bc(r,i.config))return i;throw Ur.create("duplicate-app",{appName:s})}const o=new ik(s);for(const l of Hh.values())o.addComponent(l);const a=new Zk(n,r,o);return jc.set(s,a),a}function ad(t=$h){const e=jc.get(t);if(!e&&t===$h&&ZE())return s0();if(!e)throw Ur.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let s=(r=Yk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}Is(new qr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eO="firebase-heartbeat-database",tO=1,$o="firebase-heartbeat-store";let ju=null;function i0(){return ju||(ju=yk(eO,tO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),ju}async function nO(t){try{const n=(await i0()).transaction($o),r=await n.objectStore($o).get(o0(t));return await n.done,r}catch(e){if(e instanceof Un)sr.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function Lg(t,e){try{const r=(await i0()).transaction($o,"readwrite");await r.objectStore($o).put(e,o0(t)),await r.done}catch(n){if(n instanceof Un)sr.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function o0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rO=1024,sO=30*24*60*60*1e3;class iO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=sO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mg(),{heartbeatsToSend:r,unsentEntries:s}=oO(this._heartbeatsCache.heartbeats),i=Uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sr.warn(n),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function oO(t,e=rO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KC()?GC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vg(t){return Uc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cO(t){Is(new qr("platform-logger",e=>new wk(e),"PRIVATE")),Is(new qr("heartbeat",e=>new iO(e),"PRIVATE")),kn(jh,Ng,t),kn(jh,Ng,"esm2017"),kn("fire-js","")}cO("");var lO="firebase",uO="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(lO,uO,"app");function cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hO=a0,c0=new ca("auth","Firebase",a0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new id("@firebase/auth");function fO(t,...e){$c.logLevel<=Ee.WARN&&$c.warn(`Auth (${xs}): ${t}`,...e)}function lc(t,...e){$c.logLevel<=Ee.ERROR&&$c.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw ld(t,...e)}function On(t,...e){return ld(t,...e)}function l0(t,e,n){const r=Object.assign(Object.assign({},hO()),{[e]:n});return new ca("auth","Firebase",r).create(e,{appName:t.name})}function Br(t){return l0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c0.create(t,...e)}function de(t,e,...n){if(!t)throw ld(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function ir(t,e){t||Jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dO(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dO()||HC()||"connection"in navigator)?navigator.onLine:!0}function mO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=BC()||qC()}get(){return pO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=new ua(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ts(t,e,n,r,s={}){return h0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=la(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return $C()||(u.referrerPolicy="no-referrer"),u0.fetch()(f0(t,t.config.apiHost,n,a),u)})}async function h0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gO),e);try{const s=new vO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wa(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw l0(t,h,u);wn(t,h)}}catch(s){if(s instanceof Un)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function Pl(t,e,n,r,s={}){const i=await ts(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function f0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,s):`${t.config.apiScheme}://${s}`}function yO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),_O.get())})}}function Wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=On(t,e,r);return s.customData._tokenResponse=n,s}function Ug(t){return t!==void 0&&t.enterprise!==void 0}class EO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wO(t,e){return ts(t,"GET","/v2/recaptchaConfig",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(t,e){return ts(t,"POST","/v1/accounts:delete",e)}async function d0(t,e){return ts(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TO(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=hd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vo($u(s.auth_time)),issuedAtTime:vo($u(s.iat)),expirationTime:vo($u(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $u(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const s=YE(n);return s?JSON.parse(s):(lc("Failed to decode base64 JWT payload"),null)}catch(s){return lc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bg(t){const e=hd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&IO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vo(this.lastLoginAt),this.creationTime=vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ho(t,d0(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?p0(i.providerUserInfo):[],a=SO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function RO(t){const e=Ze(t);await Hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function p0(t){return t.map(e=>{var{providerId:n}=e,r=cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t,e){const n=await h0(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=f0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",u0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CO(t,e){return ts(t,"POST","/v2/accounts:revokeToken",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Bg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ai;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TO(this,e)}reload(){return RO(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Br(this.auth));const e=await this.getIdToken();return await Ho(this,bO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:R,isAnonymous:D,providerData:V,stsTokenManager:b}=n;de(E&&b,e,"internal-error");const y=ai.fromJSON(this.name,b);de(typeof E=="string",e,"internal-error"),Er(d,e.name),Er(p,e.name),de(typeof R=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),Er(g,e.name),Er(I,e.name),Er(O,e.name),Er(N,e.name),Er(x,e.name),Er(P,e.name);const _=new Zn({uid:E,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:I,phoneNumber:g,tenantId:O,stsTokenManager:y,createdAt:x,lastLoginAt:P});return V&&Array.isArray(V)&&(_.providerData=V.map(w=>Object.assign({},w))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ai;s.updateFromServerResponse(n);const i=new Zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?p0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ai;a.updateFromIdToken(r);const l=new Zn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Map;function er(t){ir(t instanceof Function,"Expected a class definition");let e=jg.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jg.set(t,e),e)}/**
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
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const $g=m0;/**
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
 */function uc(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uc(this.userKey,s.apiKey,i),this.fullPersistenceKey=uc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci(er($g),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||er($g);const o=uc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Zn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ci(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ci(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w0(e))return"Blackberry";if(b0(e))return"Webos";if(_0(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g0(t=Nt()){return/firefox\//i.test(t)}function _0(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(t=Nt()){return/crios\//i.test(t)}function v0(t=Nt()){return/iemobile/i.test(t)}function E0(t=Nt()){return/android/i.test(t)}function w0(t=Nt()){return/blackberry/i.test(t)}function b0(t=Nt()){return/webos/i.test(t)}function fd(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kO(t=Nt()){var e;return fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OO(){return zC()&&document.documentMode===10}function T0(t=Nt()){return fd(t)||E0(t)||b0(t)||w0(t)||/windows phone/i.test(t)||v0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e=[]){let n;switch(t){case"Browser":n=Hg(Nt());break;case"Worker":n=`${Hg(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class xO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function NO(t,e={}){return ts(t,"GET","/v2/passwordPolicy",Ns(t,e))}/**
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
 */const DO=6;class LO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new xO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await d0(this,{idToken:e}),r=await Zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Br(this));const n=e?Ze(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NO(this),n=new LO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ca("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ki(t){return Ze(t)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZC(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VO(t){Cl=t}function A0(t){return Cl.loadJS(t)}function FO(){return Cl.recaptchaEnterpriseScript}function UO(){return Cl.gapiScript}function BO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jO{constructor(){this.enterprise=new $O}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $O{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const HO="recaptcha-enterprise",R0="NO_RECAPTCHA";class qO{constructor(e){this.type=HO,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{wO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new EO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(R0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jO().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ug(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FO();l.length!==0&&(l+=a),A0(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function zg(t,e,n,r=!1,s=!1){const i=new qO(t);let o;if(s)o=R0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wg(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await zg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await zg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t,e){const n=Sl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Bc(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function WO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KO(t,e,n){const r=ki(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=S0(e),{host:o,port:a}=GO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),QO()}function S0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GO(t){const e=S0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kg(o)}}}function Kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}async function YO(t,e){return ts(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){return Pl(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e){return Pl(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function ZO(t,e){return Pl(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends dd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wg(e,n,"signInWithPassword",XO);case"emailLink":return JO(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wg(e,r,"signUpPassword",YO);case"emailLink":return ZO(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return Pl(t,"POST","/v1/accounts:signInWithIdp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="http://localhost";class As extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new As(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:ex,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nx(t){const e=no(ro(t)).link,n=e?no(ro(e)).deep_link_id:null,r=no(ro(t)).deep_link_id;return(r?no(ro(r)).link:null)||r||n||e||t}class pd{constructor(e){var n,r,s,i,o,a;const l=no(ro(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=tx((s=l.mode)!==null&&s!==void 0?s:null);de(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nx(e);try{return new pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.providerId=Oi.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pd.parseLink(n);return de(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}Oi.PROVIDER_ID="password";Oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ha extends P0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ha{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com";kr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends ha{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ha{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zn._fromIdTokenResponse(e,r,s),o=Gg(r);return new yi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gg(r);return new yi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends Un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qc(e,n,r,s)}}function C0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,i,e,r):i})}async function rx(t,e,n=!1){const r=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
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
 */async function sx(t,e,n=!1){const{auth:r}=t;if(Xn(r.app))return Promise.reject(Br(r));const s="reauthenticate";try{const i=await Ho(t,C0(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=hd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),yi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e,n=!1){if(Xn(t.app))return Promise.reject(Br(t));const r="signIn",s=await C0(t,r,e),i=await yi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ix(t,e){return k0(ki(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ax(t,e,n){return Xn(t.app)?Promise.reject(Br(t)):ix(Ze(t),Oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ox(t),r})}function cx(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function lx(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function ux(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function hx(t){return Ze(t).signOut()}const zc="__sak";/**
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
 */class O0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=1e3,dx=10;class x0 extends O0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);OO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const px=x0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function mx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await mx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=md("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function _x(t){xn().location.href=t}/**
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
 */function L0(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function yx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ex(){return L0()?self:null}/**
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
 */const M0="firebaseLocalStorageDb",wx=1,Wc="firebaseLocalStorage",V0="fbase_key";class fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([Wc],e?"readwrite":"readonly").objectStore(Wc)}function bx(){const t=indexedDB.deleteDatabase(M0);return new fa(t).toPromise()}function Wh(){const t=indexedDB.open(M0,wx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wc,{keyPath:V0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wc)?e(r):(r.close(),await bx(),e(await Wh()))})})}async function Qg(t,e,n){const r=Ol(t,!0).put({[V0]:e,value:n});return new fa(r).toPromise()}async function Tx(t,e){const n=Ol(t,!1).get(e),r=await new fa(n).toPromise();return r===void 0?null:r.value}function Yg(t,e){const n=Ol(t,!0).delete(e);return new fa(n).toPromise()}const Ix=800,Ax=3;class F0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(Ex()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yx(),!this.activeServiceWorker)return;this.sender=new gx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wh();return await Qg(e,zc,"1"),await Yg(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ol(s,!1).getAll();return new fa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ix)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F0.type="LOCAL";const Rx=F0;new ua(3e4,6e4);/**
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
 */function Sx(t,e){return e?er(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gd extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Px(t){return k0(t.auth,new gd(t),t.bypassAuthState)}function Cx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),sx(n,new gd(t),t.bypassAuthState)}async function kx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),rx(n,new gd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Px;case"linkViaPopup":case"linkViaRedirect":return kx;case"reauthViaPopup":case"reauthViaRedirect":return Cx;default:wn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new ua(2e3,1e4);class Js extends U0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ox.get())};e()}}Js.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="pendingRedirect",hc=new Map;class Nx extends U0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const r=await Dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dx(t,e){const n=Vx(e),r=Mx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lx(t,e){hc.set(t._key(),e)}function Mx(t){return er(t._redirectPersistence)}function Vx(t){return uc(xx,t.config.apiKey,t.name)}async function Fx(t,e,n=!1){if(Xn(t.app))return Promise.reject(Br(t));const r=ki(t),s=Sx(r,e),o=await new Nx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=10*60*1e3;class Bx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ux&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e={}){return ts(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qx=/^https?/;async function zx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $x(t);for(const n of e)try{if(Wx(n))return}catch{}wn(t,"unauthorized-domain")}function Wx(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qx.test(n))return!1;if(Hx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Kx=new ua(3e4,6e4);function Jg(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gx(t){return new Promise((e,n)=>{var r,s,i;function o(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(On(t,"network-request-failed"))},timeout:Kx.get()})}if(!((s=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xn().gapi)===null||i===void 0)&&i.load)o();else{const a=BO("iframefcb");return xn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},A0(`${UO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fc=null,e})}let fc=null;function Qx(t){return fc=fc||Gx(t),fc}/**
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
 */const Yx=new ua(5e3,15e3),Xx="__/auth/iframe",Jx="emulator/auth/iframe",Zx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,Jx):`https://${t.config.authDomain}/${Xx}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=eN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${la(r).slice(1)}`}async function nN(t){const e=await Qx(t),n=xn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:tN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=xn().setTimeout(()=>{i(o)},Yx.get());function l(){xn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const rN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sN=500,iN=600,oN="_blank",aN="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cN(t,e,n,r=sN,s=iN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Nt().toLowerCase();n&&(a=y0(u)?oN:n),g0(u)&&(e=e||aN,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(kO(u)&&a!=="_self")return lN(e||"",a),new Zg(null);const d=window.open(e||"",a,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new Zg(d)}function lN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uN="__/auth/handler",hN="emulator/auth/handler",fN=encodeURIComponent("fac");async function e_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof P0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ha){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${fN}=${encodeURIComponent(l)}`:"";return`${dN(t)}?${la(a).slice(1)}${u}`}function dN({config:t}){return t.emulator?ud(t,hN):`https://${t.authDomain}/${uN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="webStorageSupport";class pN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D0,this._completeRedirectFn=Fx,this._overrideRedirectResult=Lx}async _openPopup(e,n,r,s){var i;ir((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await e_(e,n,r,qh(),s);return cN(e,o,md())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await e_(e,n,r,qh(),s);return _x(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nN(e),r=new Bx(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hu];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T0()||_0()||fd()}}const mN=pN;var t_="@firebase/auth",n_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yN(t){Is(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I0(t)},u=new MO(r,s,i,l);return WO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Is(new qr("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new gN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(t_,n_,_N(t)),kn(t_,n_,"esm2017")}/**
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
 */const vN=5*60,EN=e0("authIdTokenMaxAge")||vN;let r_=null;const wN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>EN)return;const s=n==null?void 0:n.token;r_!==s&&(r_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bN(t=ad()){const e=Sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zO(t,{popupRedirectResolver:mN,persistence:[Rx,px,D0]}),r=e0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wN(i.toString());lx(n,o,()=>o(n.currentUser)),cx(n,a=>o(a))}}const s=XE("auth");return s&&KO(n,`http://${s}`),n}function TN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=On("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yN("Browser");function pn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=pn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:pn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=pn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=pn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(pn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(pn(i),pn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(pn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const IN={path:"/",watch:!0,decode:t=>Uo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Ka=window.cookieStore;function AN(t,e){var l;const n={...IN,...e};n.filter??(n.filter=u=>u===t);const r=s_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=pn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?PN(o,s,n.watch&&n.watch!=="shallow"):Gt(o);{let u=null;try{!Ka&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||DR(a.value,r[t])||(SN(t,a.value,n),r[t]=pn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=I=>{var N;const O=I.refresh?(N=s_(n))==null?void 0:N[t]:n.decode(I.value);p=!0,a.value=O,r[t]=pn(O),Vn(()=>{p=!1})};let p=!1;const g=!!na();if(g&&bc(()=>{p=!0,h(),u==null||u.close()}),Ka){const I=O=>{const N=O.changed.find(P=>P.name===t),x=O.deleted.find(P=>P.name===t);N&&d({value:N.value}),x&&d({value:null})};Ka.addEventListener("change",I),g&&bc(()=>Ka.removeEventListener("change",I))}else u&&(u.onmessage=({data:I})=>d(I));n.watch?_n(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function s_(t={}){return PR(document.cookie,t)}function RN(t,e,n={}){return e==null?Km(t,e,{...n,maxAge:-1}):Km(t,e,n)}function SN(t,e,n={}){document.cookie=RN(t,e,n)}const i_=2147483647;function PN(t,e,n){let r,s,i=0;const o=n?Gt(t):{value:t};return na()&&bc(()=>{s==null||s(),clearTimeout(r)}),gI((a,l)=>{n&&(s=_n(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<i_?h:i_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function j0(t,e=Et()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>j0(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const CN=(...t)=>t.find(e=>e!==void 0);function kN(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return o_(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:o_(o,t.trailingSlash)}}function r(s){const i=Et(),o=Os(),a=Ue(()=>!!s.target&&s.target!=="_self"),l=Ue(()=>{const O=s.to||s.href||"";return typeof O=="string"&&fr(O,{acceptRelative:!0})}),u=No("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,d=Ue(()=>{if(s.external)return!0;const O=s.to||s.href||"";return typeof O=="object"?!1:O===""||l.value}),p=Ue(()=>{const O=s.to||s.href||"";return d.value?O:n(O,i.resolve)}),g=d.value||h==null?void 0:h({...s,to:p}),I=Ue(()=>{var O;if(!p.value||l.value)return p.value;if(d.value){const N=typeof p.value=="object"&&"path"in p.value?Ch(p.value):p.value,x=typeof N=="object"?i.resolve(N).href:N;return n(x,i.resolve)}return typeof p.value=="object"?((O=i.resolve(p.value))==null?void 0:O.href)??null:n(El(o.app.baseURL,p.value),i.resolve)});return{to:p,hasTarget:a,isAbsoluteUrl:l,isExternal:d,href:I,isActive:(g==null?void 0:g.isActive)??Ue(()=>p.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Ue(()=>p.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Ue(()=>i.resolve(p.value)),async navigate(){await qR(I.value,{replace:s.replace,external:d.value||a.value})}}}return Fn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=Et(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:d,isAbsoluteUrl:p}=r(s),g=Gt(!1),I=Gt(null),O=P=>{var E;I.value=s.custom?(E=P==null?void 0:P.$el)==null?void 0:E.nextElementSibling:P==null?void 0:P.$el};function N(P){var E,R;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===P:((E=s.prefetchOn)==null?void 0:E[P])??((R=t.prefetchOn)==null?void 0:R[P]))&&(s.prefetch??t.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!DN()}async function x(P=Le()){if(g.value)return;g.value=!0;const E=typeof a.value=="string"?a.value:h.value?Ch(a.value):o.resolve(a.value).fullPath,R=h.value?new URL(E,window.location.href).href:E;await Promise.all([P.hooks.callHook("link:prefetch",R).catch(()=>{}),!h.value&&!d.value&&j0(a.value,o).catch(()=>{})])}if(N("visibility")){const P=Le();let E,R=null;pl(()=>{const D=xN();Al(()=>{E=Fh(()=>{var V;(V=I==null?void 0:I.value)!=null&&V.tagName&&(R=D.observe(I.value,async()=>{R==null||R(),R=null,await x(P)}))})})}),ia(()=>{E&&IC(E),R==null||R(),R=null})}return()=>{var R;if(!h.value&&!d.value){const D={ref:O,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(N("interaction")&&(D.onPointerenter=x.bind(null,void 0),D.onFocus=x.bind(null,void 0)),g.value&&(D.class=s.prefetchedClass||t.prefetchedClass),D.rel=s.rel||void 0),vt(No("RouterLink"),D,i.default)}const P=s.target||null,E=CN(s.noRel?"":s.rel,t.externalRelAttribute,p.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,prefetch:x,get route(){if(!l.value)return;const D=new URL(l.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return iE(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:E,target:P,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:vt("a",{ref:I,href:l.value||null,rel:E,target:P},(R=i.default)==null?void 0:R.call(i))}}})}const ON=kN(yR);function o_(t,e){const n=e==="append"?Nc:vl;return fr(t)&&!t.startsWith("http")?t:n(t,!0)}function xN(){const t=Le();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}const NN=/2g/;function DN(){const t=navigator.connection;return!!(t&&(t.saveData||NN.test(t.effectiveType)))}var a_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ws,$0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(w,C,S){for(var T=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)T[ge-2]=arguments[ge];return y.prototype[C].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var w=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)w[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)w[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],C=b.g[2];var S=b.g[3],T=y+(S^_&(C^S))+w[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+w[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+w[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+w[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^S&(_^C))+w[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+w[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+w[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+w[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^S)+w[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+w[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+w[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+w[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~S))+w[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+w[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+w[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+w[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,w=this.B,C=this.h,S=0;S<y;){if(C==0)for(;S<=_;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(w[C++]=b.charCodeAt(S++),C==this.blockSize){s(this,w),C=0;break}}else for(;S<y;)if(w[C++]=b[S++],C==this.blockSize){s(this,w),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var w=0;32>w;w+=8)b[_++]=this.g[y]>>>w&255;return b};function i(b,y){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],w=!0,C=b.length-1;0<=C;C--){var S=b[C]|0;w&&S==y||(_[C]=S,w=!1)}this.g=_}var a={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return N(u(-b));for(var y=[],_=1,w=0;b>=_;w++)y[w]=b/_|0,_*=4294967296;return new o(y,0)}function h(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(h(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),w=d,C=0;C<b.length;C+=8){var S=Math.min(8,b.length-C),T=parseInt(b.substring(C,C+S),y);8>S?(S=u(Math.pow(y,S)),w=w.j(S).add(u(T))):(w=w.j(_),w=w.add(u(T)))}return w}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-N(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var w=this.i(_);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I(this))return"0";if(O(this))return"-"+N(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,w="";;){var C=R(_,y).g;_=x(_,C.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=C,I(_))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function I(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=x(this,b),O(b)?-1:I(b)?0:1};function N(b){for(var y=b.g.length,_=[],w=0;w<y;w++)_[w]=~b.g[w];return new o(_,~b.h).add(p)}t.abs=function(){return O(this)?N(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0,C=0;C<=y;C++){var S=w+(this.i(C)&65535)+(b.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);w=T>>>16,S&=65535,T&=65535,_[C]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(b,y){return b.add(N(y))}t.j=function(b){if(I(this)||I(b))return d;if(O(this))return O(b)?N(this).j(N(b)):N(N(this).j(b));if(O(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<b.g.length;C++){var S=this.i(w)>>>16,T=this.i(w)&65535,ge=b.i(C)>>>16,ve=b.i(C)&65535;_[2*w+2*C]+=T*ve,P(_,2*w+2*C),_[2*w+2*C+1]+=S*ve,P(_,2*w+2*C+1),_[2*w+2*C+1]+=T*ge,P(_,2*w+2*C+1),_[2*w+2*C+2]+=S*ge,P(_,2*w+2*C+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function P(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function E(b,y){this.g=b,this.h=y}function R(b,y){if(I(y))throw Error("division by zero");if(I(b))return new E(d,d);if(O(b))return y=R(N(b),y),new E(N(y.g),N(y.h));if(O(y))return y=R(b,N(y)),new E(N(y.g),y.h);if(30<b.g.length){if(O(b)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,w=y;0>=w.l(b);)_=D(_),w=D(w);var C=V(_,1),S=V(w,1);for(w=V(w,2),_=V(_,2);!I(w);){var T=S.add(w);0>=T.l(b)&&(C=C.add(_),S=T),w=V(w,1),_=V(_,1)}return y=x(b,C.j(y)),new E(C,y)}for(C=d;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=u(_),T=S.j(y);O(T)||0<T.l(b);)_-=w,S=u(_),T=S.j(y);I(S)&&(S=p),C=C.add(S),b=x(b,T)}return new E(C,b)}t.A=function(b){return R(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)&b.i(w);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)|b.i(w);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)^b.i(w);return new o(_,this.h^b.h)};function D(b){for(var y=b.g.length+1,_=[],w=0;w<y;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(_,b.h)}function V(b,y){var _=y>>5;y%=32;for(var w=b.g.length-_,C=[],S=0;S<w;S++)C[S]=0<y?b.i(S+_)>>>y|b.i(S+_+1)<<32-y:b.i(S+_);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ws=o}).apply(typeof a_<"u"?a_:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H0,so,q0,dc,Kh,z0,W0,K0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var L=c[v];if(!(L in m))break e;m=m[L]}c=c[c.length-1],v=m[c],f=f(v),f!=v&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,v=!1,L={next:function(){if(!v&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function I(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(v,L,F){for(var Q=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Q[Ve-2]=arguments[Ve];return f.prototype[L].apply(v,Q)}}function O(c){const f=c.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=c[v];return m}return[]}function N(c,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const L=c.length||0,F=v.length||0;c.length=L+F;for(let Q=0;Q<F;Q++)c[L+Q]=v[Q]}else c.push(v)}}class x{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(c){return/^[\s\xa0]*$/.test(c)}function E(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function V(c,f,m){for(const v in c)f.call(m,c[v],v,c)}function b(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function y(c){const f={};for(const m in c)f[m]=c[m];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,f){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)c[m]=v[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(v,m)&&(c[m]=v[m])}}function C(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function T(){var c=We;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class ge{constructor(){this.h=this.g=null}add(f,m){const v=ve.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var ve=new x(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,We=new ge,hn=()=>{const c=a.Promise.resolve(void 0);se=()=>{c.then(tn)}};var tn=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){S(m)}var f=ve;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ne=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var pr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function bn(c,f){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{R(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:$t[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&bn.aa.h.call(this)}}I(bn,Ge);var $t={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(c,f,m,v,L){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function be(c){this.src=c,this.g={},this.h=0}be.prototype.add=function(c,f,m,v,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Q=A(c,f,v,L);return-1<Q?(f=c[Q],m||(f.fa=!1)):(f=new X(f,this.src,F,!!v,L),f.fa=m,c.push(f)),f};function De(c,f){var m=f.type;if(m in c.g){var v=c.g[m],L=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(re(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function A(c,f,m,v){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==v)return L}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function $(c,f,m,v,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)$(c,f[F],m,v,L);return null}return m=oe(m),c&&c[B]?c.K(f,m,u(v)?!!v.capture:!!v,L):U(c,f,m,!1,v,L)}function U(c,f,m,v,L,F){if(!f)throw Error("Invalid event type");var Q=u(L)?!!L.capture:!!L,Ve=ue(c);if(Ve||(c[k]=Ve=new be(c)),m=Ve.add(f,m,v,Q,F),m.proxy)return m;if(v=q(),m.proxy=v,v.src=c,v.listener=m,c.addEventListener)pr||(L=Q),L===void 0&&(L=!1),c.addEventListener(f.toString(),v,L);else if(c.attachEvent)c.attachEvent(K(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return f.call(c.src,c.listener,m)}const f=z;return c}function Y(c,f,m,v,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(c,f[F],m,v,L);else v=u(v)?!!v.capture:!!v,m=oe(m),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=A(F,m,v,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=ue(c))&&(f=c.g[f.toString()],c=-1,f&&(c=A(f,m,v,L)),(m=-1<c?f[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])De(f.i,c);else{var m=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(m,v,c.capture):f.detachEvent?f.detachEvent(K(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=ue(f))?(De(m,c),m.h==0&&(m.src=null,f[k]=null)):re(c)}}}function K(c){return c in M?M[c]:M[c]="on"+c}function z(c,f){if(c.da)c=!0;else{f=new bn(f,this);var m=c.listener,v=c.ha||c.src;c.fa&&G(c),c=m.call(v,f)}return c}function ue(c){return c=c[k],c instanceof be?c:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[J]||(c[J]=function(f){return c.handleEvent(f)}),c[J])}function ie(){Ke.call(this),this.i=new be(this),this.M=this,this.F=null}I(ie,Ke),ie.prototype[B]=!0,ie.prototype.removeEventListener=function(c,f,m,v){Y(this,c,f,m,v)};function fe(c,f){var m,v=c.F;if(v)for(m=[];v;v=v.F)m.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new Ge(f,c);else if(f instanceof Ge)f.target=f.target||c;else{var L=f;f=new Ge(v,c),w(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Q=f.g=m[F];L=Ce(Q,v,!0,f)&&L}if(Q=f.g=c,L=Ce(Q,v,!0,f)&&L,L=Ce(Q,v,!1,f)&&L,m)for(F=0;F<m.length;F++)Q=f.g=m[F],L=Ce(Q,v,!1,f)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],v=0;v<m.length;v++)re(m[v]);delete c.g[f],c.h--}}this.F=null},ie.prototype.K=function(c,f,m,v){return this.i.add(String(c),f,!1,m,v)},ie.prototype.L=function(c,f,m,v){return this.i.add(String(c),f,!0,m,v)};function Ce(c,f,m,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var Q=f[F];if(Q&&!Q.da&&Q.capture==m){var Ve=Q.listener,pt=Q.ha||Q.src;Q.fa&&De(c.i,Q),L=Ve.call(pt,v)!==!1&&L}}return L&&!v.defaultPrevented}function Re(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function bt(c){c.g=Re(()=>{c.g=null,c.i&&(c.i=!1,bt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class ut extends Ke{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:bt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(c){Ke.call(this),this.h=c,this.g={}}I(dt,Ke);var Tt=[];function mr(c){V(c.g,function(f,m){this.g.hasOwnProperty(m)&&G(f)},c),c.g={}}dt.prototype.N=function(){dt.aa.N.call(this),mr(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ms=a.JSON.stringify,Lt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Vs(){}Vs.prototype.h=null;function cp(c){return c.h||(c.h=c.i())}function lp(){}var Vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ru(){Ge.call(this,"d")}I(ru,Ge);function su(){Ge.call(this,"c")}I(su,Ge);var ss={},up=null;function va(){return up=up||new ie}ss.La="serverreachability";function hp(c){Ge.call(this,ss.La,c)}I(hp,Ge);function Fi(c){const f=va();fe(f,new hp(f))}ss.STAT_EVENT="statevent";function fp(c,f){Ge.call(this,ss.STAT_EVENT,c),this.stat=f}I(fp,Ge);function Mt(c){const f=va();fe(f,new fp(f,c))}ss.Ma="timingevent";function dp(c,f){Ge.call(this,ss.Ma,c),this.size=f}I(dp,Ge);function Ui(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Bi(){this.g=!0}Bi.prototype.xa=function(){this.g=!1};function uT(c,f,m,v,L,F){c.info(function(){if(c.g)if(F)for(var Q="",Ve=F.split("&"),pt=0;pt<Ve.length;pt++){var Se=Ve[pt].split("=");if(1<Se.length){var It=Se[0];Se=Se[1];var At=It.split("_");Q=2<=At.length&&At[1]=="type"?Q+(It+"="+Se+"&"):Q+(It+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+f+`
`+m+`
`+Q})}function hT(c,f,m,v,L,F,Q){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+Q})}function Fs(c,f,m,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+dT(c,m)+(v?" "+v:"")})}function fT(c,f){c.info(function(){return"TIMEOUT: "+f})}Bi.prototype.info=function(){};function dT(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var v=m[c];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Ms(m)}catch{return f}}var Ea={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},iu;function wa(){}I(wa,Vs),wa.prototype.g=function(){return new XMLHttpRequest},wa.prototype.i=function(){return{}},iu=new wa;function gr(c,f,m,v){this.j=c,this.i=f,this.l=m,this.R=v||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mp}function mp(){this.i=null,this.g="",this.h=!1}var gp={},ou={};function au(c,f,m){c.L=1,c.v=Aa(Bn(f)),c.m=m,c.P=!0,_p(c,null)}function _p(c,f){c.F=Date.now(),ba(c),c.A=Bn(c.v);var m=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),Op(m.i,"t",v),c.C=0,m=c.j.J,c.h=new mp,c.g=Qp(c.j,m?f:null,!c.m),0<c.O&&(c.M=new ut(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,v=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(Tt[0]=L.toString()),L=Tt);for(var F=0;F<L.length;F++){var Q=$(m,L[F],v||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Fi(),uT(c.i,c.u,c.A,c.l,c.R,c.m)}gr.prototype.ca=function(c){c=c.target;const f=this.M;f&&jn(c)==3?f.j():this.Y(c)},gr.prototype.Y=function(c){try{if(c==this.g)e:{const At=jn(this.g);var f=this.g.Ba();const js=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Fp(this.g)))){this.J||At!=4||f==7||(f==8||0>=js?Fi(3):Fi(2)),cu(this);var m=this.g.Z();this.X=m;t:if(yp(this)){var v=Fp(this.g);c="";var L=v.length,F=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),ji(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(v[f],{stream:!(F&&f==L-1)});v.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,hT(this.i,this.u,this.A,this.l,this.R,At,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,pt=this.g;if((Ve=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Ve)){var Se=Ve;break t}}Se=null}if(m=Se)Fs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lu(this,m);else{this.o=!1,this.s=3,Mt(12),is(this),ji(this);break e}}if(this.P){m=!0;let fn;for(;!this.J&&this.C<Q.length;)if(fn=pT(this,Q),fn==ou){At==4&&(this.s=4,Mt(14),m=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==gp){this.s=4,Mt(15),Fs(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else Fs(this.i,this.l,fn,null),lu(this,fn);if(yp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||Q.length!=0||this.h.h||(this.s=1,Mt(16),m=!1),this.o=this.o&&m,!m)Fs(this.i,this.l,Q,"[Invalid Chunked Response]"),is(this),ji(this);else if(0<Q.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),mu(It),It.M=!0,Mt(11))}}else Fs(this.i,this.l,Q,null),lu(this,Q);At==4&&is(this),this.o&&!this.J&&(At==4?zp(this.j,this):(this.o=!1,ba(this)))}else OT(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),is(this),ji(this)}}}catch{}finally{}};function yp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function pT(c,f){var m=c.C,v=f.indexOf(`
`,m);return v==-1?ou:(m=Number(f.substring(m,v)),isNaN(m)?gp:(v+=1,v+m>f.length?ou:(f=f.slice(v,v+m),c.C=v+m,f)))}gr.prototype.cancel=function(){this.J=!0,is(this)};function ba(c){c.S=Date.now()+c.I,vp(c,c.I)}function vp(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ui(p(c.ba,c),f)}function cu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}gr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(fT(this.i,this.A),this.L!=2&&(Fi(),Mt(17)),is(this),this.s=2,ji(this)):vp(this,this.S-c)};function ji(c){c.j.G==0||c.J||zp(c.j,c)}function is(c){cu(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,mr(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function lu(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||uu(m.h,c))){if(!c.K&&uu(m.h,c)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Oa(m),Ca(m);else break e;pu(m),Mt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ui(p(m.Za,m),6e3));if(1>=bp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else as(m,11)}else if((c.K||m.g==c)&&Oa(m),!P(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Se=L[f];if(m.T=Se[0],Se=Se[1],m.G==2)if(Se[0]=="c"){m.K=Se[1],m.ia=Se[2];const It=Se[3];It!=null&&(m.la=It,m.j.info("VER="+m.la));const At=Se[4];At!=null&&(m.Aa=At,m.j.info("SVER="+m.Aa));const js=Se[5];js!=null&&typeof js=="number"&&0<js&&(v=1.5*js,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const fn=c.g;if(fn){const Na=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Na){var F=v.h;F.g||Na.indexOf("spdy")==-1&&Na.indexOf("quic")==-1&&Na.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(hu(F,F.h),F.h=null))}if(v.D){const gu=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;gu&&(v.ya=gu,je(v.I,v.D,gu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var Q=c;if(v.qa=Gp(v,v.J?v.ia:null,v.W),Q.K){Tp(v.h,Q);var Ve=Q,pt=v.L;pt&&(Ve.I=pt),Ve.B&&(cu(Ve),ba(Ve)),v.g=Q}else Hp(v);0<m.i.length&&ka(m)}else Se[0]!="stop"&&Se[0]!="close"||as(m,7);else m.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?as(m,7):du(m):Se[0]!="noop"&&m.l&&m.l.ta(Se),m.v=0)}}Fi(4)}catch{}}var mT=class{constructor(c,f){this.g=c,this.map=f}};function Ep(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function bp(c){return c.h?1:c.g?c.g.size:0}function uu(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function hu(c,f){c.g?c.g.add(f):c.h=f}function Tp(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Ep.prototype.cancel=function(){if(this.i=Ip(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ip(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return O(c.i)}function gT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,v=0;v<m;v++)f.push(c[v]);return f}f=[],m=0;for(v in c)f[m++]=c[v];return f}function _T(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const v in c)f[m++]=v;return f}}}function Ap(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=_T(c),v=gT(c),L=v.length,F=0;F<L;F++)f.call(void 0,v[F],m&&m[F],c)}var Rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yT(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var v=c[m].indexOf("="),L=null;if(0<=v){var F=c[m].substring(0,v);L=c[m].substring(v+1)}else F=c[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function os(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof os){this.h=c.h,Ta(this,c.j),this.o=c.o,this.g=c.g,Ia(this,c.s),this.l=c.l;var f=c.i,m=new qi;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Sp(this,m),this.m=c.m}else c&&(f=String(c).match(Rp))?(this.h=!1,Ta(this,f[1]||"",!0),this.o=$i(f[2]||""),this.g=$i(f[3]||"",!0),Ia(this,f[4]),this.l=$i(f[5]||"",!0),Sp(this,f[6]||"",!0),this.m=$i(f[7]||"")):(this.h=!1,this.i=new qi(null,this.h))}os.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Hi(f,Pp,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Hi(f,Pp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Hi(m,m.charAt(0)=="/"?wT:ET,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Hi(m,TT)),c.join("")};function Bn(c){return new os(c)}function Ta(c,f,m){c.j=m?$i(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Ia(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Sp(c,f,m){f instanceof qi?(c.i=f,IT(c.i,c.h)):(m||(f=Hi(f,bT)),c.i=new qi(f,c.h))}function je(c,f,m){c.i.set(f,m)}function Aa(c){return je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function $i(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Hi(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,vT),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function vT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Pp=/[#\/\?@]/g,ET=/[#\?:]/g,wT=/[#\?]/g,bT=/[#\?@]/g,TT=/#/g;function qi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function _r(c){c.g||(c.g=new Map,c.h=0,c.i&&yT(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=qi.prototype,t.add=function(c,f){_r(this),this.i=null,c=Us(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Cp(c,f){_r(c),f=Us(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function kp(c,f){return _r(c),f=Us(c,f),c.g.has(f)}t.forEach=function(c,f){_r(this),this.g.forEach(function(m,v){m.forEach(function(L){c.call(f,L,v,this)},this)},this)},t.na=function(){_r(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const L=c[v];for(let F=0;F<L.length;F++)m.push(f[v])}return m},t.V=function(c){_r(this);let f=[];if(typeof c=="string")kp(this,c)&&(f=f.concat(this.g.get(Us(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return _r(this),this.i=null,c=Us(this,c),kp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Op(c,f,m){Cp(c,f),0<m.length&&(c.i=null,c.g.set(Us(c,f),O(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const F=encodeURIComponent(String(v)),Q=this.V(v);for(v=0;v<Q.length;v++){var L=F;Q[v]!==""&&(L+="="+encodeURIComponent(String(Q[v]))),c.push(L)}}return this.i=c.join("&")};function Us(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function IT(c,f){f&&!c.j&&(_r(c),c.i=null,c.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(Cp(this,v),Op(this,L,m))},c)),c.j=f}function AT(c,f){const m=new Bi;if(a.Image){const v=new Image;v.onload=g(yr,m,"TestLoadImage: loaded",!0,f,v),v.onerror=g(yr,m,"TestLoadImage: error",!1,f,v),v.onabort=g(yr,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=g(yr,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function RT(c,f){const m=new Bi,v=new AbortController,L=setTimeout(()=>{v.abort(),yr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?yr(m,"TestPingServer: ok",!0,f):yr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),yr(m,"TestPingServer: error",!1,f)})}function yr(c,f,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function ST(){this.g=new nn}function PT(c,f,m){const v=m||"";try{Ap(c,function(L,F){let Q=L;u(L)&&(Q=Ms(L)),f.push(v+F+"="+encodeURIComponent(Q))})}catch(L){throw f.push(v+"type="+encodeURIComponent("_badmap")),L}}function Ra(c){this.l=c.Ub||null,this.j=c.eb||!1}I(Ra,Vs),Ra.prototype.g=function(){return new Sa(this.l,this.j)},Ra.prototype.i=function(c){return function(){return c}}({});function Sa(c,f){ie.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Sa,ie),t=Sa.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Wi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Wi(this)),this.g&&(this.readyState=3,Wi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function xp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?zi(this):Wi(this),this.readyState==3&&xp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,zi(this))},t.Qa=function(c){this.g&&(this.response=c,zi(this))},t.ga=function(){this.g&&zi(this)};function zi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Wi(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Wi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Np(c){let f="";return V(c,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function fu(c,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Np(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):je(c,f,m))}function Xe(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Xe,ie);var CT=/^https?$/i,kT=["POST","PUT"];t=Xe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():iu.g(),this.v=this.o?cp(this.o):cp(iu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){Dp(this,F);return}if(c=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(kT,f,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of m)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Dp(this,F)}};function Dp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Lp(c),Pa(c)}function Lp(c){c.A||(c.A=!0,fe(c,"complete"),fe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,fe(this,"complete"),fe(this,"abort"),Pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pa(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mp(this):this.bb())},t.bb=function(){Mp(this)};function Mp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||jn(c)!=4||c.Z()!=2)){if(c.u&&jn(c)==4)Re(c.Ea,0,c);else if(fe(c,"readystatechange"),jn(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=Q===0){var L=String(c.D).match(Rp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!CT.test(L?L.toLowerCase():"")}m=v}if(m)fe(c,"complete"),fe(c,"success");else{c.m=6;try{var F=2<jn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Lp(c)}}finally{Pa(c)}}}}function Pa(c,f){if(c.g){Vp(c);const m=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||fe(c,"ready");try{m.onreadystatechange=v}catch{}}}function Vp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function jn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Lt(f)}};function Fp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function OT(c){const f={};c=(c.g&&2<=jn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(P(c[v]))continue;var m=C(c[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}b(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ki(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Up(c){this.Aa=0,this.i=[],this.j=new Bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ki("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ki("baseRetryDelayMs",5e3,c),this.cb=Ki("retryDelaySeedMs",1e4,c),this.Wa=Ki("forwardChannelMaxRetries",2,c),this.wa=Ki("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ep(c&&c.concurrentRequestLimit),this.Da=new ST,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Up.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,v){Mt(0),this.W=c,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Gp(this,null,this.W),ka(this)};function du(c){if(Bp(c),c.G==3){var f=c.U++,m=Bn(c.I);if(je(m,"SID",c.K),je(m,"RID",f),je(m,"TYPE","terminate"),Gi(c,m),f=new gr(c,c.j,f),f.L=2,f.v=Aa(Bn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Qp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ba(f)}Kp(c)}function Ca(c){c.g&&(mu(c),c.g.cancel(),c.g=null)}function Bp(c){Ca(c),c.u&&(a.clearTimeout(c.u),c.u=null),Oa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function ka(c){if(!wp(c.h)&&!c.s){c.s=!0;var f=c.Ga;se||hn(),ne||(se(),ne=!0),We.add(f,c),c.B=0}}function xT(c,f){return bp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ui(p(c.Ga,c,f),Wp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new gr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=$p(this,L,f),m=Bn(this.I),je(m,"RID",c),je(m,"CVER",22),this.D&&je(m,"X-HTTP-Session-Id",this.D),Gi(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Np(F)))+"&"+f:this.m&&fu(m,this.m,F)),hu(this.h,L),this.Ua&&je(m,"TYPE","init"),this.P?(je(m,"$req",f),je(m,"SID","null"),L.T=!0,au(L,m,null)):au(L,m,f),this.G=2}}else this.G==3&&(c?jp(this,c):this.i.length==0||wp(this.h)||jp(this))};function jp(c,f){var m;f?m=f.l:m=c.U++;const v=Bn(c.I);je(v,"SID",c.K),je(v,"RID",m),je(v,"AID",c.T),Gi(c,v),c.m&&c.o&&fu(v,c.m,c.o),m=new gr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=$p(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),hu(c.h,m),au(m,v,f)}function Gi(c,f){c.H&&V(c.H,function(m,v){je(f,v,m)}),c.l&&Ap({},function(m,v){je(f,v,m)})}function $p(c,f,m){m=Math.min(c.i.length,m);var v=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Q=["count="+m];F==-1?0<m?(F=L[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Ve=!0;for(let pt=0;pt<m;pt++){let Se=L[pt].g;const It=L[pt].map;if(Se-=F,0>Se)F=Math.max(0,L[pt].g-100),Ve=!1;else try{PT(It,Q,"req"+Se+"_")}catch{v&&v(It)}}if(Ve){v=Q.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,v}function Hp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;se||hn(),ne||(se(),ne=!0),We.add(f,c),c.v=0}}function pu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ui(p(c.Fa,c),Wp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,qp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ui(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),Ca(this),qp(this))};function mu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function qp(c){c.g=new gr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Bn(c.qa);je(f,"RID","rpc"),je(f,"SID",c.K),je(f,"AID",c.T),je(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&je(f,"TO",c.ja),je(f,"TYPE","xmlhttp"),Gi(c,f),c.m&&c.o&&fu(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Aa(Bn(f)),m.m=null,m.P=!0,_p(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Ca(this),pu(this),Mt(19))};function Oa(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function zp(c,f){var m=null;if(c.g==f){Oa(c),mu(c),c.g=null;var v=2}else if(uu(c.h,f))m=f.D,Tp(c.h,f),v=1;else return;if(c.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;v=va(),fe(v,new dp(v,m)),ka(c)}else Hp(c);else if(L=f.s,L==3||L==0&&0<f.X||!(v==1&&xT(c,f)||v==2&&pu(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),L){case 1:as(c,5);break;case 4:as(c,10);break;case 3:as(c,6);break;default:as(c,2)}}}function Wp(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function as(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),v=c.Xa;const L=!v;v=new os(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ta(v,"https"),Aa(v),L?AT(v.toString(),m):RT(v.toString(),m)}else Mt(2);c.G=0,c.l&&c.l.sa(f),Kp(c),Bp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Kp(c){if(c.G=0,c.ka=[],c.l){const f=Ip(c.h);(f.length!=0||c.i.length!=0)&&(N(c.ka,f),N(c.ka,c.i),c.h.i.length=0,O(c.i),c.i.length=0),c.l.ra()}}function Gp(c,f,m){var v=m instanceof os?Bn(m):new os(m);if(v.g!="")f&&(v.g=f+"."+v.g),Ia(v,v.s);else{var L=a.location;v=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new os(null);v&&Ta(F,v),f&&(F.g=f),L&&Ia(F,L),m&&(F.l=m),v=F}return m=c.D,f=c.ya,m&&f&&je(v,m,f),je(v,"VER",c.la),Gi(c,v),v}function Qp(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Xe(new Ra({eb:m})):new Xe(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yp(){}t=Yp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xa(){}xa.prototype.g=function(c,f){return new Qt(c,f)};function Qt(c,f){ie.call(this),this.g=new Up(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!P(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!P(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Bs(this)}I(Qt,ie),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){du(this.g)},Qt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Ms(c),c=m);f.i.push(new mT(f.Ya++,c)),f.G==3&&ka(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,du(this.g),delete this.g,Qt.aa.N.call(this)};function Xp(c){ru.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}I(Xp,ru);function Jp(){su.call(this),this.status=1}I(Jp,su);function Bs(c){this.g=c}I(Bs,Yp),Bs.prototype.ua=function(){fe(this.g,"a")},Bs.prototype.ta=function(c){fe(this.g,new Xp(c))},Bs.prototype.sa=function(c){fe(this.g,new Jp)},Bs.prototype.ra=function(){fe(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,K0=function(){return new xa},W0=function(){return va()},z0=ss,Kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ea.NO_ERROR=0,Ea.TIMEOUT=8,Ea.HTTP_ERROR=6,dc=Ea,pp.COMPLETE="complete",q0=pp,lp.EventType=Vi,Vi.OPEN="a",Vi.CLOSE="b",Vi.ERROR="c",Vi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,so=lp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,H0=Xe}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});const c_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new id("@firebase/firestore");function Ks(){return Rs.logLevel}function te(t,...e){if(Rs.logLevel<=Ee.DEBUG){const n=e.map(_d);Rs.debug(`Firestore (${xi}): ${t}`,...n)}}function or(t,...e){if(Rs.logLevel<=Ee.ERROR){const n=e.map(_d);Rs.error(`Firestore (${xi}): ${t}`,...n)}}function vi(t,...e){if(Rs.logLevel<=Ee.WARN){const n=e.map(_d);Rs.warn(`Firestore (${xi}): ${t}`,...n)}}function _d(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function xe(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class MN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VN{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new G0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new St(e)}}class FN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class UN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new FN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new BN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$N(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new ct(0,0))}static max(){return new _e(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends zo{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const HN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends zo{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return HN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(qe.fromString(e))}static fromName(e){return new he(qe.fromString(e).popFirst(5))}static empty(){return new he(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new qe(e.slice()))}}function qN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new zr(s,he.empty(),e)}function zN(t){return new zr(t.readTime,t.key,-1)}class zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zr(_e.min(),he.empty(),-1)}static max(){return new zr(_e.max(),he.empty(),-1)}}function WN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==KN)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function QN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xl.oe=-1;function Nl(t){return t==null}function Kc(t){return t===0&&1/t==-1/0}function YN(t){return typeof t=="number"&&Number.isInteger(t)&&!Kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=l_(e)),e=JN(t.get(n),e);return l_(e)}function JN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function l_(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new h_(this.data.getIterator())}getIteratorFrom(e){return new h_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class h_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new lt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new X0("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const ZN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=ZN.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dl(t){const e=t.mapValue.fields.__previous_value__;return yd(e)?Dl(e):e}function Wo(t){const e=Wr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yd(t)?4:n2(t)?9007199254740991:t2(t)?10:11:me()}function Ln(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Wr(s.timestampValue),a=Wr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Kr(s.bytesValue).isEqual(Kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Kc(o)===Kc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(u_(o)!==u_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ln(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function Go(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return f_(t.timestampValue,e.timestampValue);case 4:return f_(Wo(t),Wo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Kr(i),l=Kr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Te(a[u],l[u]);if(h!==0)return h}return Te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Te(nt(i.latitude),nt(o.latitude));return a!==0?a:Te(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return d_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,O=Te(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return O!==0?O:d_(g,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ya.mapValue&&o===Ya.mapValue)return 0;if(i===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Te(l[d],h[d]);if(p!==0)return p;const g=wi(a[l[d]],u[h[d]]);if(g!==0)return g}return Te(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function f_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Wr(t),r=Wr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function d_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=wi(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function bi(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gh(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function pc(t){switch(Gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dl(t);return e?16+pc(e):16;case 5:return 2*t.stringValue.length;case 6:return Kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+pc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ns(r.fields,(i,o)=>{s+=i.length+pc(o)}),s}(t.mapValue);default:throw me()}}function Qh(t){return!!t&&"integerValue"in t}function vd(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mc(t){return!!t&&"mapValue"in t}function t2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!mc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Eo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];mc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ns(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(Eo(this.value))}}function J0(t){const e=[];return ns(t.fields,(n,r)=>{const s=new yt([n]);if(mc(r)){const i=J0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ot(e,0,_e.min(),_e.min(),_e.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ot(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new Ot(e,2,n,_e.min(),_e.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,_e.min(),_e.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gc{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function __(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qc{constructor(e,n="asc"){this.field=e,this.dir=n}}function r2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Z0{}class ot extends Z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new i2(e,n,r):n==="array-contains"?new c2(e,r):n==="in"?new l2(e,r):n==="not-in"?new u2(e,r):n==="array-contains-any"?new h2(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o2(e,r):new a2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wi(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends Z0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return ew(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ew(t){return t.op==="and"}function tw(t){return s2(t)&&ew(t)}function s2(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Yh(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+bi(t.value);if(tw(t))return t.filters.map(e=>Yh(e)).join(",");{const e=t.filters.map(n=>Yh(n)).join(",");return`${t.op}(${e})`}}function nw(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&Ln(r.value,s.value)}(t,e):t instanceof Mn?function(r,s){return s instanceof Mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&nw(o,s.filters[a]),!0):!1}(t,e):void me()}function rw(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${bi(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(rw).join(" ,")+"}"}(t):"Filter"}class i2 extends ot{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class o2 extends ot{constructor(e,n){super(e,"in",n),this.keys=sw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a2 extends ot{constructor(e,n){super(e,"not-in",n),this.keys=sw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class c2 extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vd(n)&&Go(n.arrayValue,this.value)}}class l2 extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class u2 extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Go(this.value.arrayValue,n)}}class h2 extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
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
 */class f2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function y_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new f2(t,e,n,r,s,i,o)}function Ed(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bi(r)).join(",")),e.ue=n}return e.ue}function wd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!__(t.startAt,e.startAt)&&__(t.endAt,e.endAt)}function Xh(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function d2(t,e,n,r,s,i,o,a){return new Ll(t,e,n,r,s,i,o,a)}function iw(t){return new Ll(t)}function v_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p2(t){return t.collectionGroup!==null}function wo(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Qc(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new Qc(yt.keyField(),r))}return e.ce}function Nn(t){const e=ye(t);return e.le||(e.le=m2(e,wo(t))),e.le}function m2(t,e){if(t.limitType==="F")return y_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qc(s.field,i)});const n=t.endAt?new Gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gc(t.startAt.position,t.startAt.inclusive):null;return y_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jh(t,e,n){return new Ll(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ml(t,e){return wd(Nn(t),Nn(e))&&t.limitType===e.limitType}function ow(t){return`${Ed(Nn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rw(s)).join(", ")}]`),Nl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bi(s)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function Vl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of wo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=g_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,wo(r),s)||r.endAt&&!function(o,a,l){const u=g_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,wo(r),s))}(t,e)}function g2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aw(t){return(e,n)=>{let r=!1;for(const s of wo(t)){const i=_2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _2(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?wi(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Y0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Ye(he.comparator);function ar(){return y2}const cw=new Ye(he.comparator);function io(...t){let e=cw;for(const n of t)e=e.insert(n.key,n);return e}function lw(t){let e=cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ms(){return bo()}function uw(){return bo()}function bo(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const v2=new Ye(he.comparator),E2=new lt(he.comparator);function we(...t){let e=E2;for(const n of t)e=e.add(n);return e}const w2=new lt(Te);function b2(){return w2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kc(e)?"-0":e}}function hw(t){return{integerValue:""+t}}function T2(t,e){return YN(e)?hw(e):bd(t,e)}/**
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
 */class Fl{constructor(){this._=void 0}}function I2(t,e,n){return t instanceof Yc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yd(i)&&(i=Dl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Qo?dw(t,e):t instanceof Yo?pw(t,e):function(s,i){const o=fw(s,i),a=E_(o)+E_(s.Pe);return Qh(o)&&Qh(s.Pe)?hw(a):bd(s.serializer,a)}(t,e)}function A2(t,e,n){return t instanceof Qo?dw(t,e):t instanceof Yo?pw(t,e):n}function fw(t,e){return t instanceof Xc?function(r){return Qh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yc extends Fl{}class Qo extends Fl{constructor(e){super(),this.elements=e}}function dw(t,e){const n=mw(e);for(const r of t.elements)n.some(s=>Ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yo extends Fl{constructor(e){super(),this.elements=e}}function pw(t,e){let n=mw(e);for(const r of t.elements)n=n.filter(s=>!Ln(s,r));return{arrayValue:{values:n}}}class Xc extends Fl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function E_(t){return nt(t.integerValue||t.doubleValue)}function mw(t){return vd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function R2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Qo&&s instanceof Qo||r instanceof Yo&&s instanceof Yo?Ei(r.elements,s.elements,Ln):r instanceof Xc&&s instanceof Xc?Ln(r.Pe,s.Pe):r instanceof Yc&&s instanceof Yc}(t.transform,e.transform)}class S2{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Td(t.key,cn.none()):new da(t.key,t.data,cn.none());{const n=t.data,r=Wt.empty();let s=new lt(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rs(t.key,r,new Xt(s.toArray()),cn.none())}}function P2(t,e,n){t instanceof da?function(s,i,o){const a=s.value.clone(),l=b_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(s,i,o){if(!gc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=b_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(_w(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n,r){return t instanceof da?function(i,o,a,l){if(!gc(i.precondition,o))return a;const u=i.value.clone(),h=T_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof rs?function(i,o,a,l){if(!gc(i.precondition,o))return a;const u=T_(i.fieldTransforms,l,o),h=o.data;return h.setAll(_w(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return gc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function C2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fw(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function w_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ei(r,s,(i,o)=>R2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class da extends Ul{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rs extends Ul{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function b_(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,A2(o,a,n[s]))}return r}function T_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,I2(i,o,e))}return r}class Td extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k2 extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&P2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=gw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,r)=>w_(n,r))&&Ei(this.baseMutations,e.baseMutations,(n,r)=>w_(n,r))}}class Id{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return v2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Id(e,n,r,s)}}/**
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
 */class x2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class N2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,Ie;function D2(t){switch(t){default:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function yw(t){if(t===void 0)return or("GRPC error has no .code"),H.UNKNOWN;switch(t){case rt.OK:return H.OK;case rt.CANCELLED:return H.CANCELLED;case rt.UNKNOWN:return H.UNKNOWN;case rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case rt.INTERNAL:return H.INTERNAL;case rt.UNAVAILABLE:return H.UNAVAILABLE;case rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case rt.NOT_FOUND:return H.NOT_FOUND;case rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case rt.ABORTED:return H.ABORTED;case rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case rt.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Ie=rt||(rt={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function L2(){return new TextEncoder}/**
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
 */const M2=new ws([4294967295,4294967295],0);function I_(t){const e=L2().encode(t),n=new $0;return n.update(e),new Uint8Array(n.digest())}function A_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ws([n,r],0),new ws([s,i],0)]}class Ad{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oo(`Invalid padding: ${n}`);if(r<0)throw new oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ws.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(ws.fromNumber(r)));return s.compare(M2)===1&&(s=new ws([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=I_(e),[r,s]=A_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ad(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=I_(e),[r,s]=A_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,pa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bl(_e.min(),s,new Ye(Te),ar(),we())}}class pa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new pa(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class vw{constructor(e,n){this.targetId=e,this.me=n}}class Ew{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class R_{constructor(){this.fe=0,this.ge=S_(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new pa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=S_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class V2{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=Xa(),this.Qe=Xa(),this.Ke=new Ye(Te)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Xh(i))if(r===0){const o=new he(i.path);this.We(n,o,Ot.newNoDocument(o,_e.min()))}else xe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Kr(r).toUint8Array()}catch(l){if(l instanceof X0)return vi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ad(o,s,i)}catch(l){return vi(l instanceof oo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Xh(a.target)){const l=new he(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,Ot.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Bl(e,n,this.Ke,this.ke,r);return this.ke=ar(),this.qe=Xa(),this.Qe=Xa(),this.Ke=new Ye(Te),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new R_,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new lt(Te),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(Te),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new R_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new Ye(he.comparator)}function S_(){return new Ye(he.comparator)}const F2={asc:"ASCENDING",desc:"DESCENDING"},U2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},B2={and:"AND",or:"OR"};class j2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zh(t,e){return t.useProto3Json||Nl(e)?e:{value:e}}function Jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ww(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $2(t,e){return Jc(t,e.toTimestamp())}function Dn(t){return xe(!!t),_e.fromTimestamp(function(n){const r=Wr(n);return new ct(r.seconds,r.nanos)}(t))}function Rd(t,e){return ef(t,e).canonicalString()}function ef(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bw(t){const e=qe.fromString(t);return xe(Sw(e)),e}function tf(t,e){return Rd(t.databaseId,e.path)}function qu(t,e){const n=bw(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Iw(n))}function Tw(t,e){return Rd(t.databaseId,e)}function H2(t){const e=bw(t);return e.length===4?qe.emptyPath():Iw(e)}function nf(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iw(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P_(t,e,n){return{name:tf(t,e),fields:n.value.mapValue.fields}}function q2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string"),wt.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),wt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:yw(u.code);return new ce(h,u.message||"")}(o);n=new Ew(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qu(t,r.document.name),i=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):_e.min(),a=new Wt({mapValue:{fields:r.document.fields}}),l=Ot.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new _c(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qu(t,r.document),i=r.readTime?Dn(r.readTime):_e.min(),o=Ot.newNoDocument(s,i),a=r.removedTargetIds||[];n=new _c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qu(t,r.document),i=r.removedTargetIds||[];n=new _c([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new N2(s,i),a=r.targetId;n=new vw(a,o)}}return n}function z2(t,e){let n;if(e instanceof da)n={update:P_(t,e.key,e.value)};else if(e instanceof Td)n={delete:tf(t,e.key)};else if(e instanceof rs)n={update:P_(t,e.key,e.data),updateMask:eD(e.fieldMask)};else{if(!(e instanceof k2))return me();n={verify:tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Yc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function W2(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Dn(s.updateTime):Dn(i);return o.isEqual(_e.min())&&(o=Dn(i)),new S2(o,s.transformResults||[])}(n,e))):[]}function K2(t,e){return{documents:[Tw(t,e.path)]}}function G2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tw(t,s);const i=function(u){if(u.length!==0)return Rw(Mn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Qs(p.field),direction:X2(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Zh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function Q2(t){let e=H2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=Aw(d);return p instanceof Mn&&tw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(I){return new Qc(Ys(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Nl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Gc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Gc(g,p)}(n.endAt)),d2(e,s,o,i,a,"F",l,u)}function Y2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Aw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ys(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ys(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ys(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(Ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>Aw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function X2(t){return F2[t]}function J2(t){return U2[t]}function Z2(t){return B2[t]}function Qs(t){return{fieldPath:t.canonicalString()}}function Ys(t){return yt.fromServerFormat(t.fieldPath)}function Rw(t){return t instanceof ot?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:J2(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(s=>Rw(s));return r.length===1?r[0]:{compositeFilter:{op:Z2(n.op),filters:r}}}(t):me()}function eD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.ht=e}}function nD(t){const e=Q2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jh(e,e.limit,"L"):e}/**
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
 */class rD{constructor(){this.ln=new sD}addToCollectionParentIndex(e,n){return this.ln.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(zr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(zr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class sD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(qe.comparator)).toArray()}}/**
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
 */const C_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(41943040,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ti(0)}static Qn(){return new Ti(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class iD{constructor(e){this.Gn=e,this.buffer=new lt(k_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();k_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Di(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ni(n)}await this.Yn(3e5)})}}class aD{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(xl.oe);const r=new iD(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(C_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),C_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Ks()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function cD(t,e){return new aD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&To(r.mutation,s,Xt.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=io();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ar();const o=bo(),a=function(){return bo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof rs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),To(h.mutation,u,h.mutation.getFieldMask(),ct.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new uD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=bo();let s=new Ye((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Xt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||we()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=uw();h.forEach(p=>{if(!i.has(p)){const g=gw(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(ms());let a=-1,l=i;return o.next(u=>j.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,we())).next(h=>({batchId:a,changes:lw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=io();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(d,p){return new Ll(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ot.newInvalidDocument(h)))});let a=io();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&To(h.mutation,u,Xt.empty(),ct.now()),Vl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return j.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:nD(s.bundledQuery),readTime:Dn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class dD{constructor(){this.overlays=new Ye(he.comparator),this.Er=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ms();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=ms(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ms(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ms(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return j.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new x2(n,r));let i=this.Er.get(n);i===void 0&&(i=we(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class pD{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.dr=new lt(ht.Ar),this.Rr=new lt(ht.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ht(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new he(new qe([])),r=new ht(n,e),s=new ht(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new he(new qe([])),r=new ht(n,e),s=new ht(n,e+1);let i=we();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return he.comparator(e.key,n.key)||Te(e.br,n.br)}static Vr(e,n){return Te(e.br,n.br)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new lt(ht.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new O2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Te);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),j.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ht(new he(i),0);let a=new lt(Te);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.br)),!0)},o),j.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return j.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ht(n,0),s=this.vr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.Nr=e,this.docs=function(){return new Ye(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ot.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WN(zN(h),r)<=0||(s.has(h.key)||Vl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Lr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _D(this)}getSize(e){return j.resolve(this.size)}}class _D extends lD{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.persistence=e,this.Br=new Ds(n=>Ed(n),wd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new Sd,this.targetCount=0,this.Qr=Ti.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),j.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Un(n),j.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.Kr={},this.overlays={},this.$r=new xl(0),this.Ur=!1,this.Ur=!0,this.Wr=new pD,this.referenceDelegate=e(this),this.Gr=new yD(this),this.indexManager=new rD,this.remoteDocumentCache=function(s){return new gD(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new tD(n),this.jr=new fD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new mD(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new vD(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return j.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class vD extends GN{constructor(e){super(),this.currentSequenceNumber=e}}class Pd{constructor(e){this.persistence=e,this.Zr=new Sd,this.Xr=null}static ei(e){return new Pd(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),j.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,r=>{const s=he.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return j.or([()=>j.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Zc{constructor(e,n){this.persistence=e,this.ri=new Ds(r=>XN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cD(this,n)}static ei(e,n){return new Zc(e,n)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return j.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pc(e.data.value)),n}ir(e,n,r){return j.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cd(e,n.fromCache,r,s)}}/**
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
 */class ED{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wD{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return WC()?8:QN(Nt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ED;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Ks()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(Ks()<=Ee.DEBUG&&te("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Ks()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):j.resolve())}Xi(e,n){if(v_(n))return j.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jh(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(e,Jh(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,r,s){return v_(n)||s.isEqual(_e.min())?j.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?j.resolve(null):(Ks()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.os(e,o,n,qN(s,-1)).next(a=>a))})}rs(e,n){let r=new lt(aw(e));return n.forEach((s,i)=>{Vl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Ks()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.Zi.getDocumentsMatchingQuery(e,n,zr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(Te),this.cs=new Ds(i=>Ed(i),wd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function TD(t,e,n,r){return new bD(t,e,n,r)}async function Cw(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=we();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function ID(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=j.resolve();return p.forEach(I=>{g=g.next(()=>h.getEntry(l,I)).next(O=>{const N=u.docVersions.get(I);xe(N!==null),O.version.compareTo(N)<0&&(d.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),h.addEntry(O)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kw(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function AD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(wt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(O,N,x){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let l=ar(),u=we();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(RD(i,o,e.documentUpdates).next(h=>{l=h.Is,u=h.Es})),!r.isEqual(_e.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.us=s,i))}function RD(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ar();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,Es:s}})}function SD(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PD(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function rf(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Di(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function O_(t,e,n){const r=ye(t);let s=_e.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=ye(l),p=d.cs.get(h);return p!==void 0?j.resolve(d.us.get(p)):d.Gr.getTargetData(u,h)}(r,o,Nn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:we())).next(a=>(CD(r,g2(e),a),{documents:a,ds:i})))}function CD(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class x_{constructor(){this.activeTargetIds=b2()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kD{constructor(){this._o=new x_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new x_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OD{uo(e){}shutdown(){}}/**
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
 */class N_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ja=null;function zu(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class DD extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=zu(),l=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,l,u,s).then(h=>(te("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw vi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=xD[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=zu();return new Promise((o,a)=>{const l=new H0;l.setWithCredentials(!0),l.listenOnce(q0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dc.NO_ERROR:const h=l.getResponseJson();te(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case dc.TIMEOUT:te(Rt,`RPC '${e}' ${i} timed out`),a(new ce(H.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const d=l.getStatus();if(te(Rt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN}(g.status);a(new ce(I,g.message))}else a(new ce(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(Rt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}qo(e,n,r){const s=zu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K0(),a=W0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");te(Rt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const I=new ND({Eo:N=>{g?te(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(te(Rt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(Rt,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Ao:()=>d.close()}),O=(N,x,P)=>{N.listen(x,E=>{try{P(E)}catch(R){setTimeout(()=>{throw R},0)}})};return O(d,so.EventType.OPEN,()=>{g||(te(Rt,`RPC '${e}' stream ${s} transport opened.`),I.So())}),O(d,so.EventType.CLOSE,()=>{g||(g=!0,te(Rt,`RPC '${e}' stream ${s} transport closed`),I.Do())}),O(d,so.EventType.ERROR,N=>{g||(g=!0,vi(Rt,`RPC '${e}' stream ${s} transport errored:`,N),I.Do(new ce(H.UNAVAILABLE,"The operation could not be completed")))}),O(d,so.EventType.MESSAGE,N=>{var x;if(!g){const P=N.data[0];xe(!!P);const E=P,R=(E==null?void 0:E.error)||((x=E[0])===null||x===void 0?void 0:x.error);if(R){te(Rt,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let V=function(_){const w=rt[_];if(w!==void 0)return yw(w)}(D),b=R.message;V===void 0&&(V=H.INTERNAL,b="Unknown error status: "+D+" with message "+R.message),g=!0,I.Do(new ce(V,b)),d.close()}else te(Rt,`RPC '${e}' stream ${s} received:`,P),I.vo(P)}}),O(a,z0.STAT_EVENT,N=>{N.stat===Kh.PROXY?te(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Kh.NOPROXY&&te(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.bo()},0),I}}function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){return new j2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xw{constructor(e,n,r,s,i,o,a,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ow(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ce(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LD extends xw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=q2(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Dn(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=nf(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Xh(l)?{documents:K2(i,l)}:{query:G2(i,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ww(i,o.resumeToken);const u=Zh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=Jc(i,o.snapshotVersion.toTimestamp());const u=Zh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Y2(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=nf(this.serializer),n.removeTarget=e,this.c_(n)}}class MD extends xw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=W2(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=nf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>z2(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,ef(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(H.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,ef(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(H.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class FD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(or(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Ls(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.k_.add(4),await ma(u),u.K_.set("Unknown"),u.k_.delete(4),await $l(u)}(this))})}),this.K_=new FD(r,s)}}async function $l(t){if(Ls(t))for(const e of t.q_)await e(!0)}async function ma(t){for(const e of t.q_)await e(!1)}function Nw(t,e){const n=ye(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Nd(n)?xd(n):Li(n).s_()&&Od(n,e))}function kd(t,e){const n=ye(t),r=Li(n);n.B_.delete(e),r.s_()&&Dw(n,e),n.B_.size===0&&(r.s_()?r.a_():Ls(n)&&n.K_.set("Unknown"))}function Od(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).V_(e)}function Dw(t,e){t.U_.xe(e),Li(t).m_(e)}function xd(t){t.U_=new V2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.K_.F_()}function Nd(t){return Ls(t)&&!Li(t).i_()&&t.B_.size>0}function Ls(t){return ye(t).k_.size===0}function Lw(t){t.U_=void 0}async function BD(t){t.K_.set("Online")}async function jD(t){t.B_.forEach((e,n)=>{Od(t,e)})}async function $D(t,e){Lw(t),Nd(t)?(t.K_.O_(e),xd(t)):t.K_.set("Unknown")}async function HD(t,e,n){if(t.K_.set("Online"),e instanceof Ew&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await el(t,r)}else if(e instanceof _c?t.U_.$e(e):e instanceof vw?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await kw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.B_.get(l);if(!h)return;i.B_.set(l,h.withResumeToken(wt.EMPTY_BYTE_STRING,h.snapshotVersion)),Dw(i,l);const d=new Lr(h.target,l,u,h.sequenceNumber);Od(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await el(t,r)}}async function el(t,e,n){if(!Di(e))throw e;t.k_.add(1),await ma(t),t.K_.set("Offline"),n||(n=()=>kw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await $l(t)})}function Mw(t,e){return e().catch(n=>el(t,n,e))}async function Hl(t){const e=ye(t),n=Qr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;qD(e);)try{const s=await SD(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,zD(e,s)}catch(s){await el(e,s)}Vw(e)&&Fw(e)}function qD(t){return Ls(t)&&t.L_.length<10}function zD(t,e){t.L_.push(e);const n=Qr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Vw(t){return Ls(t)&&!Qr(t).i_()&&t.L_.length>0}function Fw(t){Qr(t).start()}async function WD(t){Qr(t).w_()}async function KD(t){const e=Qr(t);for(const n of t.L_)e.g_(n.mutations)}async function GD(t,e,n){const r=t.L_.shift(),s=Id.from(r,e,n);await Mw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hl(t)}async function QD(t,e){e&&Qr(t).f_&&await async function(r,s){if(function(o){return D2(o)&&o!==H.ABORTED}(s.code)){const i=r.L_.shift();Qr(r).__(),await Mw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hl(r)}}(t,e),Vw(t)&&Fw(t)}async function D_(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Ls(n);n.k_.add(3),await ma(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await $l(n)}async function YD(t,e){const n=ye(t);e?(n.k_.delete(2),await $l(n)):e||(n.k_.add(2),await ma(n),n.K_.set("Unknown"))}function Li(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new LD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:BD.bind(null,t),mo:jD.bind(null,t),po:$D.bind(null,t),R_:HD.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Nd(t)?xd(t):t.K_.set("Unknown")):(await t.W_.stop(),Lw(t))})),t.W_}function Qr(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new MD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:WD.bind(null,t),po:QD.bind(null,t),p_:KD.bind(null,t),y_:GD.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Hl(t)):(await t.G_.stop(),t.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Dd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ld(t,e){if(or("AsyncQueue",`${e}: ${t}`),Di(t))return new ce(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{static emptySet(e){return new ui(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=io(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.z_=new Ye(he.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ii(e,n,ui.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ml(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class JD{constructor(){this.queries=M_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=M_(),i.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new ce(H.ABORTED,"Firestore shutting down"))}}function M_(){return new Ds(t=>ow(t),Ml)}async function ZD(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new XD,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ld(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Md(n)}async function eL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tL(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&Md(n)}function nL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Md(t){t.X_.forEach(e=>{e.next()})}var sf,V_;(V_=sf||(sf={})).na="default",V_.Cache="cache";class rL{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==sf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.key=e}}class Bw{constructor(e){this.key=e}}class sL{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=aw(e),this.ma=new ui(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new L_,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Vl(this.query,d)?d:null,I=!!p&&this.mutatedKeys.has(p.key),O=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;p&&g?p.data.isEqual(g.data)?I!==O&&(r.track({type:3,doc:g}),N=!0):this.ya(p,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Va(g,l)>0||u&&this.Va(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),N=!0):p&&!g&&(r.track({type:1,doc:p}),N=!0,(l||u)&&(a=!0)),N&&(g?(o=o.add(g),i=O?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,I){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return O(g)-O(I)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new Ii(this.query,e.ma,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new L_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Bw(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Uw(r))}),n}va(e){this.da=e.ds,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ii.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class iL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oL{constructor(e){this.key=e,this.Fa=!1}}class aL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ds(a=>ow(a),Ml),this.Oa=new Map,this.Na=new Set,this.La=new Ye(he.comparator),this.Ba=new Map,this.ka=new Sd,this.qa={},this.Qa=new Map,this.Ka=Ti.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function cL(t,e,n=!0){const r=Ww(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await jw(r,e,n,!0),s}async function lL(t,e){const n=Ww(t);await jw(n,e,!0,!1)}async function jw(t,e,n,r){const s=await PD(t.localStore,Nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await uL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Nw(t.remoteStore,s),a}async function uL(t,e,n,r,s){t.Ua=(d,p,g)=>async function(O,N,x,P){let E=N.view.ga(x);E.ss&&(E=await O_(O.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,E)));const R=P&&P.targetChanges.get(N.targetId),D=P&&P.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(E,O.isPrimaryClient,R,D);return U_(O,N.targetId,V.ba),V.snapshot}(t,d,p,g);const i=await O_(t.localStore,e,!0),o=new sL(e,i.ds),a=o.ga(i.documents),l=pa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);U_(t,n,u.ba);const h=new iL(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function hL(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Ml(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&kd(r.remoteStore,s.targetId),of(r,s.targetId)}).catch(Ni)):(of(r,s.targetId),await rf(r.localStore,s.targetId,!0))}async function fL(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),kd(n.remoteStore,r.targetId))}async function dL(t,e,n){const r=EL(t);try{const s=await function(o,a){const l=ye(o),u=ct.now(),h=a.reduce((g,I)=>g.add(I.key),we());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=ar(),O=we();return l.hs.getEntries(g,h).next(N=>{I=N,I.forEach((x,P)=>{P.isValidDocument()||(O=O.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,I)).next(N=>{d=N;const x=[];for(const P of a){const E=C2(P,d.get(P.key).overlayedDocument);E!=null&&x.push(new rs(P.key,E,J0(E.value.mapValue),cn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,x,a)}).next(N=>{p=N;const x=N.applyToLocalDocumentSet(d,O);return l.documentOverlayCache.saveOverlays(g,N.batchId,x)})}).then(()=>({batchId:p.batchId,changes:lw(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(Te)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await ga(r,s.changes),await Hl(r.remoteStore)}catch(s){const i=Ld(s,"Failed to persist write");n.reject(i)}}async function $w(t,e){const n=ye(t);try{const r=await AD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?xe(o.Fa):s.removedDocuments.size>0&&(xe(o.Fa),o.Fa=!1))}),await ga(n,r,e)}catch(r){await Ni(r)}}function F_(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.J_)p.ea(a)&&(u=!0)}),u&&Md(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pL(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ye(he.comparator);o=o.insert(i,Ot.newNoDocument(i,_e.min()));const a=we().add(i),l=new Bl(_e.min(),new Map,new Ye(Te),o,a);await $w(r,l),r.La=r.La.remove(i),r.Ba.delete(e),Vd(r)}else await rf(r.localStore,e,!1).then(()=>of(r,e,n)).catch(Ni)}async function mL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await ID(n.localStore,e);qw(n,r,null),Hw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ga(n,s)}catch(s){await Ni(s)}}async function gL(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(xe(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);qw(r,e,n),Hw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ga(r,s)}catch(s){await Ni(s)}}function Hw(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function qw(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||zw(t,r)})}function zw(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(kd(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Vd(t))}function U_(t,e,n){for(const r of n)r instanceof Uw?(t.ka.addReference(r.key,e),_L(t,r)):r instanceof Bw?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||zw(t,r.key)):me()}function _L(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),Vd(t))}function Vd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new he(qe.fromString(e)),r=t.Ka.next();t.Ba.set(r,new oL(n)),t.La=t.La.insert(n,r),Nw(t.remoteStore,new Lr(Nn(iw(n.path)),r,"TargetPurposeLimboResolution",xl.oe))}}async function ga(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Cd.zi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,u){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(u,p=>j.forEach(p.Wi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>j.forEach(p.Gi,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Di(d))throw d;te("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.us.get(p),I=g.snapshotVersion,O=g.withLastLimboFreeSnapshotVersion(I);h.us=h.us.insert(p,O)}}}(r.localStore,i))}async function yL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Cw(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(l=>{l.reject(new ce(H.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ga(n,r.Ts)}}function vL(t,e){const n=ye(t),r=n.Ba.get(e);if(r&&r.Fa)return we().add(r.key);{let s=we();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function Ww(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pL.bind(null,e),e.Ma.R_=tL.bind(null,e.eventManager),e.Ma.Wa=nL.bind(null,e.eventManager),e}function EL(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gL.bind(null,e),e}class tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return TD(this.persistence,new wD,e.initialUser,this.serializer)}ja(e){return new Pw(Pd.ei,this.serializer)}za(e){return new kD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tl.provider={build:()=>new tl};class wL extends tl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){xe(this.persistence.referenceDelegate instanceof Zc);const r=this.persistence.referenceDelegate.garbageCollector;return new oD(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new Pw(r=>Zc.ei(r,n),this.serializer)}}class af{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yL.bind(null,this.syncEngine),await YD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JD}()}createDatastore(e){const n=jl(e.databaseInfo.databaseId),r=function(i){return new DD(i)}(e.databaseInfo);return function(i,o,a,l){return new VD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new UD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>F_(this.syncEngine,n,0),function(){return N_.p()?new N_:new OD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new aL(s,i,o,a,l,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ma(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}af.provider={build:()=>new af};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Q0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ld(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ku(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IL(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>D_(e.remoteStore,s)),t._onlineComponents=e}async function IL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await Ku(t,new tl)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Ku(t,new wL(void 0));return t._offlineComponents}async function Kw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await B_(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await B_(t,new af))),t._onlineComponents}function AL(t){return Kw(t).then(e=>e.syncEngine)}async function RL(t){const e=await Kw(t),n=e.eventManager;return n.onListen=cL.bind(null,e.syncEngine),n.onUnlisten=hL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fL.bind(null,e.syncEngine),n}function SL(t,e,n={}){const r=new jr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new bL({next:p=>{h.eu(),o.enqueueAndForget(()=>eL(i,d)),p.fromCache&&l.source==="server"?u.reject(new ce(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new rL(a,h,{includeMetadataChanges:!0,ua:!0});return ZD(i,d)}(await RL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const j_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e,n){if(!n)throw new ce(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PL(t,e,n,r){if(e===!0&&r===!0)throw new ce(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $_(t){if(!he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H_(t){if(he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Ai(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fd(t);throw new ce(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ql{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new q_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new q_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LN;switch(r.type){case"firstParty":return new UN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j_.get(n);r&&(te("ComponentProvider","Removing Datastore"),j_.delete(n),r.terminate())}(this),Promise.resolve()}}function CL(t,e,n,r={}){var s;const i=(t=Ai(t,ql))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=St.MOCK_USER;else{a=t0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new St(u)}t._authCredentials=new MN(new G0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zl(this.firestore,e,this._query)}}class ln{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class $r extends zl{constructor(e,n,r){super(e,n,iw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new he(e))}withConverter(e){return new $r(this.firestore,e,this._path)}}function UU(t,e,...n){if(t=Ze(t),Qw("collection","path",e),t instanceof ql){const r=qe.fromString(e,...n);return H_(r),new $r(t,null,r)}{if(!(t instanceof ln||t instanceof $r))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return H_(r),new $r(t.firestore,null,r)}}function BU(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=Q0.newId()),Qw("doc","path",e),t instanceof ql){const r=qe.fromString(e,...n);return $_(r),new ln(t,null,new he(r))}{if(!(t instanceof ln||t instanceof $r))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return $_(r),new ln(t.firestore,t instanceof $r?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ow(this,"async_queue_retry"),this.fu=()=>{const r=Wu();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new jr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Di(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw or("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Dd.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Wl extends ql{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new z_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new z_(e),this._firestoreClient=void 0,await e}}}function kL(t,e){const n=typeof t=="object"?t:ad(),r=typeof t=="string"?t:"(default)",s=Sl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=JE("firestore");i&&CL(s,...i)}return s}function Ud(t){if(t._terminated)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||OL(t),t._firestoreClient}function OL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new e2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Gw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new TL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(wt.fromBase64String(e))}catch(n){throw new ce(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class $d{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=/^__.*__$/;class NL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new da(e,this.data,n,this.fieldTransforms)}}class Yw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Hd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return nl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Xw(this.Mu)&&xL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class DL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jl(e)}$u(e,n,r,s=!1){return new Hd({Mu:e,methodName:n,Ku:r,path:yt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jw(t){const e=t._freezeSettings(),n=jl(t._databaseId);return new DL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zw(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);qd("Data must be an object, but it was:",o,r);const a=eb(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=cf(e,d,n);if(!o.contains(p))throw new ce(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);nb(h,p)||h.push(p)}l=new Xt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new NL(new Wt(a),l,u)}class Gl extends Bd{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gl}}function LL(t,e,n,r){const s=t.$u(1,e,n);qd("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();ns(r,(l,u)=>{const h=zd(e,l,n);u=Ze(u);const d=s.Bu(h);if(u instanceof Gl)i.push(h);else{const p=Ql(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Xt(i);return new Yw(o,a,s.fieldTransforms)}function ML(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[cf(e,r,n)],l=[s];if(i.length%2!=0)throw new ce(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(cf(e,i[p])),l.push(i[p+1]);const u=[],h=Wt.empty();for(let p=a.length-1;p>=0;--p)if(!nb(u,a[p])){const g=a[p];let I=l[p];I=Ze(I);const O=o.Bu(g);if(I instanceof Gl)u.push(g);else{const N=Ql(I,O);N!=null&&(u.push(g),h.set(g,N))}}const d=new Xt(u);return new Yw(h,d,o.fieldTransforms)}function Ql(t,e){if(tb(t=Ze(t)))return qd("Unsupported field value:",e,t),eb(t,e);if(t instanceof Bd)return function(r,s){if(!Xw(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ql(a,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:Jc(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jc(s.serializer,i)}}if(r instanceof jd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ri)return{bytesValue:ww(s.serializer,r._byteString)};if(r instanceof ln){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $d)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return bd(a.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Fd(r)}`)}(t,e)}function eb(t,e){const n={};return Y0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,(r,s)=>{const i=Ql(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function tb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof jd||t instanceof Ri||t instanceof ln||t instanceof Bd||t instanceof $d)}function qd(t,e,n){if(!tb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Fd(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function cf(t,e,n){if((e=Ze(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return zd(t,e);throw nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const VL=new RegExp("[~\\*/\\[\\]]");function zd(t,e,n){if(e.search(VL)>=0)throw nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce(H.INVALID_ARGUMENT,a+t+l)}function nb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FL extends rb{data(){return super.data()}}function sb(t,e){return typeof e=="string"?zd(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class BL{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ns(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new $d(i)}convertGeoPoint(e){return new jd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=Wr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);xe(Sw(r));const s=new Ko(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Za{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jL extends rb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yc extends jL{data(e={}){return super.data(e)}}class $L{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Za(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yc(this._firestore,this._userDataWriter,r.key,r,new Za(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new yc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Za(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new yc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Za(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:HL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class qL extends BL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,n)}}function jU(t){t=Ai(t,zl);const e=Ai(t.firestore,Wl),n=Ud(e),r=new qL(e);return UL(t._query),SL(n,t._query).then(s=>new $L(e,r,t,s))}function $U(t,e,n){t=Ai(t,ln);const r=Ai(t.firestore,Wl),s=ib(t.converter,e,n);return ob(r,[Zw(Jw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,cn.none())])}function ob(t,e){return function(r,s){const i=new jr;return r.asyncQueue.enqueueAndForget(async()=>dL(await AL(r),s,i)),i.promise}(Ud(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Jw(e)}set(e,n,r){this._verifyNotCommitted();const s=Gu(e,this._firestore),i=ib(s.converter,n,r),o=Zw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,cn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Gu(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof Kl?ML(this._dataReader,"WriteBatch.update",i._key,n,r,s):LL(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,cn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Gu(e,this._firestore);return this._mutations=this._mutations.concat(new Td(n._key,cn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Gu(t,e){if((t=Ze(t)).firestore!==e)throw new ce(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t){return Ud(t=Ai(t,Wl)),new zL(t,e=>ob(t,e))}(function(e,n=!0){(function(s){xi=s})(xs),Is(new qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Wl(new VN(r.getProvider("auth-internal")),new jN(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),kn(c_,"4.7.5",e),kn(c_,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebasestorage.googleapis.com",cb="storageBucket",WL=2*60*1e3,KL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Un{constructor(e,n,r=0){super(Qu(e),`Firebase Storage: ${n} (${Qu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function Qu(t){return"storage/"+t}function Wd(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function GL(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function QL(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function YL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function XL(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function JL(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ZL(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eM(){return new tt(et.CANCELED,"User canceled the upload/download.")}function tM(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function nM(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cb+"' property when initializing the app?")}function sM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function iM(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lf(t){return new tt(et.INVALID_ARGUMENT,t)}function lb(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function aM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Io(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Zi(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw nM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),I={bucket:1,path:3},O=n===ab?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",x=new RegExp(`^https?://${O}/${s}/${N}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:g,indices:I,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<E.length;R++){const D=E[R],V=D.regex.exec(e);if(V){const b=V[D.indices.bucket];let y=V[D.indices.path];y||(y=""),r=new Jt(b,y),D.postModify(r);break}}if(r==null)throw tM(e);return r}}class cM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function d(N){s=setTimeout(()=>{s=null,t(g,l())},N)}function p(){i&&clearTimeout(i)}function g(N,...x){if(u){p();return}if(N){p(),h.call(null,N,...x);return}if(l()||o){p(),h.call(null,N,...x);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,d(E)}let I=!1;function O(N){I||(I=!0,p(),!u&&(s!==null?(N||(a=2),clearTimeout(s),d(0)):N||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function uM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){return t!==void 0}function fM(t){return typeof t=="object"&&!Array.isArray(t)}function Kd(t){return typeof t=="string"||t instanceof String}function W_(t){return Gd()&&t instanceof Blob}function Gd(){return typeof Blob<"u"}function K_(t,e,n,r){if(r<e)throw lf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw lf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ub(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var bs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bs||(bs={}));/**
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
 */function dM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ec(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===bs.NO_ERROR,l=i.getStatus();if(!a||dM(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===bs.ABORT;r(!1,new ec(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ec(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Wd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lb():eM();o(l)}else{const l=ZL();o(l)}};this.canceled_?n(!1,new ec(!1,null,!0)):this.backoffId_=lM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ec{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _M(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vM(t,e,n,r,s,i,o=!0){const a=ub(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return _M(u,e),mM(u,n),gM(u,i),yM(u,r),new pM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wM(...t){const e=EM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gd())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function TM(t){if(typeof atob>"u")throw oM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yu{constructor(e,n){this.data=e,this.contentType=n||null}}function IM(t,e){switch(t){case Rn.RAW:return new Yu(hb(e));case Rn.BASE64:case Rn.BASE64URL:return new Yu(fb(t,e));case Rn.DATA_URL:return new Yu(RM(e),SM(e))}throw Wd()}function hb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function AM(t){let e;try{e=decodeURIComponent(t)}catch{throw Io(Rn.DATA_URL,"Malformed data URL.")}return hb(e)}function fb(t,e){switch(t){case Rn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Io(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Io(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=TM(e)}catch(s){throw s.message.includes("polyfill")?s:Io(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class db{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Io(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=PM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function RM(t){const e=new db(t);return e.base64?fb(Rn.BASE64,e.rest):AM(e.rest)}function SM(t){return new db(t).contentType}function PM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){let r=0,s="";W_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(W_(this.data_)){const r=this.data_,s=bM(r,e,n);return s===null?null:new Nr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Nr(r,!0)}}static getBlob(...e){if(Gd()){const n=e.map(r=>r instanceof Nr?r.data_:r);return new Nr(wM.apply(null,n))}else{const n=e.map(o=>Kd(o)?IM(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Nr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){let e;try{e=JSON.parse(t)}catch{return null}return fM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t,e){return e}class Vt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||OM}}let tc=null;function xM(t){return!Kd(t)||t.length<2?t:mb(t)}function gb(){if(tc)return tc;const t=[];t.push(new Vt("bucket")),t.push(new Vt("generation")),t.push(new Vt("metageneration")),t.push(new Vt("name","fullPath",!0));function e(i,o){return xM(o)}const n=new Vt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Vt("size");return s.xform=r,t.push(s),t.push(new Vt("timeCreated")),t.push(new Vt("updated")),t.push(new Vt("md5Hash",null,!0)),t.push(new Vt("cacheControl",null,!0)),t.push(new Vt("contentDisposition",null,!0)),t.push(new Vt("contentEncoding",null,!0)),t.push(new Vt("contentLanguage",null,!0)),t.push(new Vt("contentType",null,!0)),t.push(new Vt("metadata","customMetadata",!0)),tc=t,tc}function NM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function DM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return NM(r,t),r}function _b(t,e,n){const r=pb(e);return r===null?null:DM(t,r,n)}function LM(t,e,n,r){const s=pb(e);if(s===null||!Kd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=Qd(p,n,r),I=ub({alt:"media",token:u});return g+I})[0]}function MM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class yb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){if(!t)throw Wd()}function VM(t,e){function n(r,s){const i=_b(t,s,e);return vb(i!==null),i}return n}function FM(t,e){function n(r,s){const i=_b(t,s,e);return vb(i!==null),LM(i,s,t.host,t._protocol)}return n}function Eb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=XL():s=YL():n.getStatus()===402?s=QL(t.bucket):n.getStatus()===403?s=JL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function UM(t){const e=Eb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=GL(t.path)),i.serverResponse=s.serverResponse,i}return n}function BM(t,e,n){const r=e.fullServerUrl(),s=Qd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new yb(s,i,FM(t,n),o);return a.errorHandler=UM(e),a}function jM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $M(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=jM(null,e)),r}function HM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let R=0;R<2;R++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=$M(e,r,s),h=MM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Nr.getBlob(d,r,p);if(g===null)throw sM();const I={name:u.fullPath},O=Qd(i,t.host,t._protocol),N="POST",x=t.maxUploadRetryTime,P=new yb(O,N,VM(t,n),x);return P.urlParams=I,P.headers=o,P.body=g.uploadData(),P.errorHandler=Eb(e),P}class qM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Zi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zM extends qM{initXhr(){this.xhr_.responseType="text"}}function wb(){return new zM}/**
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
 */class Ss{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ss(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mb(this._location.path)}get storage(){return this._service}get parent(){const e=CM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Ss(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aM(e)}}function WM(t,e,n){t._throwIfRoot("uploadBytes");const r=HM(t.storage,t._location,gb(),new Nr(e,!0),n);return t.storage.makeRequestWithTokens(r,wb).then(s=>({metadata:s,ref:t}))}function KM(t){t._throwIfRoot("getDownloadURL");const e=BM(t.storage,t._location,gb());return t.storage.makeRequestWithTokens(e,wb).then(n=>{if(n===null)throw iM();return n})}function GM(t,e){const n=kM(t._location.path,e),r=new Jt(t._location.bucket,n);return new Ss(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t){return/^[A-Za-z]+:\/\//.test(t)}function YM(t,e){return new Ss(t,e)}function bb(t,e){if(t instanceof Yd){const n=t;if(n._bucket==null)throw rM();const r=new Ss(n,n._bucket);return e!=null?bb(r,e):r}else return e!==void 0?GM(t,e):t}function XM(t,e){if(e&&QM(e)){if(t instanceof Yd)return YM(t,e);throw lf("To use ref(service, url), the first argument must be a Storage instance.")}else return bb(t,e)}function G_(t,e){const n=e==null?void 0:e[cb];return n==null?null:Jt.makeFromBucketSpec(n,t)}function JM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:t0(s,t.app.options.projectId))}class Yd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ab,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WL,this._maxUploadRetryTime=KL,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=G_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=G_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){K_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){K_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ss(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new cM(lb());{const o=vM(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Q_="@firebase/storage",Y_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="storage";function qU(t,e,n){return t=Ze(t),WM(t,e,n)}function zU(t){return t=Ze(t),KM(t)}function WU(t,e){return t=Ze(t),XM(t,e)}function ZM(t=ad(),e){t=Ze(t);const r=Sl(t,Tb).getImmediate({identifier:e}),s=JE("storage");return s&&eV(r,...s),r}function eV(t,e,n,r={}){JM(t,e,n,r)}function tV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Yd(n,r,s,e,xs)}function nV(){Is(new qr(Tb,tV,"PUBLIC").setMultipleInstances(!0)),kn(Q_,Y_,""),kn(Q_,Y_,"esm2017")}nV();const rV=Zt(t=>{const e=Os(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=s0(n),s=bN(r),i=kL(r),o=ZM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function sV(t,e,n){return(e=oV(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function X_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X_(Object(n),!0).forEach(function(r){sV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function iV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function oV(t){var e=iV(t,"string");return typeof e=="symbol"?e:e+""}const J_=()=>{};let Xd={},Ib={},Ab=null,Rb={mark:J_,measure:J_};try{typeof window<"u"&&(Xd=window),typeof document<"u"&&(Ib=document),typeof MutationObserver<"u"&&(Ab=MutationObserver),typeof performance<"u"&&(Rb=performance)}catch{}const{userAgent:Z_=""}=Xd.navigator||{},Yr=Xd,$e=Ib,ey=Ab,nc=Rb;Yr.document;const dr=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",Sb=~Z_.indexOf("MSIE")||~Z_.indexOf("Trident/");var aV=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,cV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Pb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},lV={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Dt="classic",Yl="duotone",uV="sharp",hV="sharp-duotone",kb=[Dt,Yl,uV,hV],fV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},dV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},pV=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),mV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},gV=["fak","fa-kit","fakd","fa-kit-duotone"],ty={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_V=["kit"],yV={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},vV=["fak","fakd"],EV={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ny={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wV=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],bV=["fak","fa-kit","fakd","fa-kit-duotone"],TV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},IV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},AV={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},uf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},RV=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],hf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...wV,...RV],SV=["solid","regular","light","thin","duotone","brands"],Ob=[1,2,3,4,5,6,7,8,9,10],PV=Ob.concat([11,12,13,14,15,16,17,18,19,20]),CV=[...Object.keys(AV),...SV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rc.GROUP,rc.SWAP_OPACITY,rc.PRIMARY,rc.SECONDARY].concat(Ob.map(t=>"".concat(t,"x"))).concat(PV.map(t=>"w-".concat(t))),kV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const cr="___FONT_AWESOME___",ff=16,xb="fa",Nb="svg-inline--fa",Ps="data-fa-i2svg",df="data-fa-pseudo-element",OV="data-fa-pseudo-element-pending",Jd="data-prefix",Zd="data-icon",ry="fontawesome-i2svg",xV="async",NV=["HTML","HEAD","STYLE","SCRIPT"],Db=(()=>{try{return!0}catch{return!1}})();function _a(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Dt]}})}const Lb=W({},Pb);Lb[Dt]=W(W(W(W({},{"fa-duotone":"duotone"}),Pb[Dt]),ty.kit),ty["kit-duotone"]);const DV=_a(Lb),pf=W({},mV);pf[Dt]=W(W(W(W({},{duotone:"fad"}),pf[Dt]),ny.kit),ny["kit-duotone"]);const sy=_a(pf),mf=W({},uf);mf[Dt]=W(W({},mf[Dt]),EV.kit);const ep=_a(mf),gf=W({},IV);gf[Dt]=W(W({},gf[Dt]),yV.kit);_a(gf);const LV=aV,Mb="fa-layers-text",MV=cV,VV=W({},fV);_a(VV);const FV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xu=lV,UV=[..._V,...CV],Ao=Yr.FontAwesomeConfig||{};function BV(t){var e=$e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$e&&typeof $e.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=jV(BV(n));s!=null&&(Ao[r]=s)});const Vb={styleDefault:"solid",familyDefault:Dt,cssPrefix:xb,replacementClass:Nb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ao.familyPrefix&&(Ao.cssPrefix=Ao.familyPrefix);const Si=W(W({},Vb),Ao);Si.autoReplaceSvg||(Si.observeMutations=!1);const ae={};Object.keys(Vb).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){Si[t]=e,Ro.forEach(n=>n(ae))},get:function(){return Si[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){Si.cssPrefix=t,Ro.forEach(e=>e(ae))},get:function(){return Si.cssPrefix}});Yr.FontAwesomeConfig=ae;const Ro=[];function $V(t){return Ro.push(t),()=>{Ro.splice(Ro.indexOf(t),1)}}const wr=ff,Sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HV(t){if(!t||!dr)return;const e=$e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$e.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $e.head.insertBefore(e,r),t}const qV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xo(){let t=12,e="";for(;t-- >0;)e+=qV[Math.random()*62|0];return e}function Mi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function tp(t){return t.classList?Mi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Fb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Fb(t[n]),'" '),"").trim()}function Xl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function np(t){return t.size!==Sn.size||t.x!==Sn.x||t.y!==Sn.y||t.rotate!==Sn.rotate||t.flipX||t.flipY}function WV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function KV(t){let{transform:e,width:n=ff,height:r=ff,startCentered:s=!1}=t,i="";return s&&Sb?i+="translate(".concat(e.x/wr-n/2,"em, ").concat(e.y/wr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/wr,"em), calc(-50% + ").concat(e.y/wr,"em)) "):i+="translate(".concat(e.x/wr,"em, ").concat(e.y/wr,"em) "),i+="scale(".concat(e.size/wr*(e.flipX?-1:1),", ").concat(e.size/wr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var GV=`:root, :host {
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
}`;function Ub(){const t=xb,e=Nb,n=ae.cssPrefix,r=ae.replacementClass;let s=GV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let iy=!1;function Ju(){ae.autoAddCss&&!iy&&(HV(Ub()),iy=!0)}var QV={mixout(){return{dom:{css:Ub,insertCss:Ju}}},hooks(){return{beforeDOMElementCreation(){Ju()},beforeI2svg(){Ju()}}}};const lr=Yr||{};lr[cr]||(lr[cr]={});lr[cr].styles||(lr[cr].styles={});lr[cr].hooks||(lr[cr].hooks={});lr[cr].shims||(lr[cr].shims=[]);var Pn=lr[cr];const Bb=[],jb=function(){$e.removeEventListener("DOMContentLoaded",jb),rl=1,Bb.map(t=>t())};let rl=!1;dr&&(rl=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),rl||$e.addEventListener("DOMContentLoaded",jb));function YV(t){dr&&(rl?setTimeout(t,0):Bb.push(t))}function ya(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Fb(t):"<".concat(e," ").concat(zV(n),">").concat(r.map(ya).join(""),"</").concat(e,">")}function oy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Zu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function XV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function _f(t){const e=XV(t);return e.length===1?e[0].toString(16):null}function JV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function ay(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function yf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=ay(e);typeof Pn.hooks.addPack=="function"&&!r?Pn.hooks.addPack(t,ay(e)):Pn.styles[t]=W(W({},Pn.styles[t]||{}),s),t==="fas"&&yf("fa",e)}const{styles:Jo,shims:ZV}=Pn,$b=Object.keys(ep),e4=$b.reduce((t,e)=>(t[e]=Object.keys(ep[e]),t),{});let rp=null,Hb={},qb={},zb={},Wb={},Kb={};function t4(t){return~UV.indexOf(t)}function n4(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!t4(s)?s:null}const Gb=()=>{const t=r=>Zu(Jo,(s,i,o)=>(s[o]=Zu(i,r,{}),s),{});Hb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),qb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Kb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in Jo||ae.autoFetchSvg,n=Zu(ZV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});zb=n.names,Wb=n.unicodes,rp=Jl(ae.styleDefault,{family:ae.familyDefault})};$V(t=>{rp=Jl(t.styleDefault,{family:ae.familyDefault})});Gb();function sp(t,e){return(Hb[t]||{})[e]}function r4(t,e){return(qb[t]||{})[e]}function gs(t,e){return(Kb[t]||{})[e]}function Qb(t){return zb[t]||{prefix:null,iconName:null}}function s4(t){const e=Wb[t],n=sp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xr(){return rp}const Yb=()=>({prefix:null,iconName:null,rest:[]});function i4(t){let e=Dt;const n=$b.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return kb.forEach(r=>{(t.includes(n[r])||t.some(s=>e4[r].includes(s)))&&(e=r)}),e}function Jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Dt}=e,r=DV[n][t];if(n===Yl&&!t)return"fad";const s=sy[n][t]||sy[n][r],i=t in Pn.styles?t:null;return s||i||null}function o4(t){let e=[],n=null;return t.forEach(r=>{const s=n4(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function cy(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Zl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=hf.concat(bV),i=cy(t.filter(d=>s.includes(d))),o=cy(t.filter(d=>!hf.includes(d))),a=i.filter(d=>(r=d,!Cb.includes(d))),[l=null]=a,u=i4(i),h=W(W({},o4(o)),{},{prefix:Jl(l,{family:u})});return W(W(W({},h),u4({values:t,family:u,styles:Jo,config:ae,canonical:h,givenPrefix:r})),a4(n,r,h))}function a4(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Qb(s):{},o=gs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Jo.far&&Jo.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const c4=kb.filter(t=>t!==Dt||t!==Yl),l4=Object.keys(uf).filter(t=>t!==Dt).map(t=>Object.keys(uf[t])).flat();function u4(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===Yl,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&c4.includes(n)&&(Object.keys(i).find(p=>l4.includes(p))||o.autoFetchSvg)){const p=pV.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=gs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Xr()||"fas"),r}class h4{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),yf(i,s[i]);const o=ep[Dt][i];o&&yf(o,s[i]),Gb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let ly=[],Zs={};const hi={},f4=Object.keys(hi);function d4(t,e){let{mixoutsTo:n}=e;return ly=t,Zs={},Object.keys(hi).forEach(r=>{f4.indexOf(r)===-1&&delete hi[r]}),ly.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Zs[o]||(Zs[o]=[]),Zs[o].push(i[o])})}r.provides&&r.provides(hi)}),n}function vf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Zs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Cs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Zs[t]||[]).forEach(i=>{i.apply(null,n)})}function Jr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return hi[t]?hi[t].apply(null,e):void 0}function Ef(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Xr();if(e)return e=gs(n,e)||e,oy(Xb.definitions,n,e)||oy(Pn.styles,n,e)}const Xb=new h4,p4=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,Cs("noAuto")},m4={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?(Cs("beforeI2svg",t),Jr("pseudoElements2svg",t),Jr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,YV(()=>{_4({autoReplaceSvgRoot:e}),Cs("watch",t)})}},g4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Jl(t[0]);return{prefix:n,iconName:gs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(LV))){const e=Zl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Xr(),iconName:gs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Xr();return{prefix:e,iconName:gs(e,t)||t}}}},en={noAuto:p4,config:ae,dom:m4,parse:g4,library:Xb,findIconDefinition:Ef,toHtml:ya},_4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$e}=t;(Object.keys(Pn.styles).length>0||ae.autoFetchSvg)&&dr&&ae.autoReplaceSvg&&en.dom.i2svg({node:e})};function eu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ya(n))}}),Object.defineProperty(t,"node",{get:function(){if(!dr)return;const n=$e.createElement("div");return n.innerHTML=t.html,n.children}}),t}function y4(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(np(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Xl(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function v4(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function ip(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,I=vV.includes(r),O=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let N={children:[],attributes:W(W({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:O,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const x=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(N.attributes[Ps]=""),a&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||Xo())},children:[a]}),delete N.attributes.title);const P=W(W({},N),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:W(W({},x),h.styles)}),{children:E,attributes:R}=n.found&&e.found?Jr("generateAbstractMask",P)||{children:[],attributes:{}}:Jr("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=E,P.attributes=R,o?v4(P):y4(P)}function uy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Ps]="");const u=W({},o.styles);np(s)&&(u.transform=KV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Xl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function E4(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:eh}=Pn;function wf(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Xu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Xu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Xu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const w4={found:!1,width:512,height:512};function b4(t,e){!Db&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function bf(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=Xr()),new Promise((r,s)=>{if(n==="fa"){const i=Qb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&eh[e]&&eh[e][t]){const i=eh[e][t];return r(wf(i))}b4(t,e),r(W(W({},w4),{},{icon:ae.showMissingIcons&&t?Jr("missingIconAbstract")||{}:{}}))})}const hy=()=>{},Tf=ae.measurePerformance&&nc&&nc.mark&&nc.measure?nc:{mark:hy,measure:hy},ao='FA "6.7.0"',T4=t=>(Tf.mark("".concat(ao," ").concat(t," begins")),()=>Jb(t)),Jb=t=>{Tf.mark("".concat(ao," ").concat(t," ends")),Tf.measure("".concat(ao," ").concat(t),"".concat(ao," ").concat(t," begins"),"".concat(ao," ").concat(t," ends"))};var op={begin:T4,end:Jb};const vc=()=>{};function fy(t){return typeof(t.getAttribute?t.getAttribute(Ps):null)=="string"}function I4(t){const e=t.getAttribute?t.getAttribute(Jd):null,n=t.getAttribute?t.getAttribute(Zd):null;return e&&n}function A4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function R4(){return ae.autoReplaceSvg===!0?Ec.replace:Ec[ae.autoReplaceSvg]||Ec.replace}function S4(t){return $e.createElementNS("http://www.w3.org/2000/svg",t)}function P4(t){return $e.createElement(t)}function Zb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?S4:P4}=e;if(typeof t=="string")return $e.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Zb(i,{ceFn:n}))}),r}function C4(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ec={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Zb(n),e)}),e.getAttribute(Ps)===null&&ae.keepOriginalSource){let n=$e.createComment(C4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~tp(e).indexOf(ae.replacementClass))return Ec.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ya(i)).join(`
`);e.setAttribute(Ps,""),e.innerHTML=s}};function dy(t){t()}function eT(t,e){const n=typeof e=="function"?e:vc;if(t.length===0)n();else{let r=dy;ae.mutateApproach===xV&&(r=Yr.requestAnimationFrame||dy),r(()=>{const s=R4(),i=op.begin("mutate");t.map(s),i(),n()})}}let ap=!1;function tT(){ap=!0}function If(){ap=!1}let sl=null;function py(t){if(!ey||!ae.observeMutations)return;const{treeCallback:e=vc,nodeCallback:n=vc,pseudoElementsCallback:r=vc,observeMutationsRoot:s=$e}=t;sl=new ey(i=>{if(ap)return;const o=Xr();Mi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!fy(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&fy(a.target)&&~FV.indexOf(a.attributeName))if(a.attributeName==="class"&&I4(a.target)){const{prefix:l,iconName:u}=Zl(tp(a.target));a.target.setAttribute(Jd,l||o),u&&a.target.setAttribute(Zd,u)}else A4(a.target)&&n(a.target)})}),dr&&sl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function k4(){sl&&sl.disconnect()}function O4(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function x4(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Zl(tp(t));return s.prefix||(s.prefix=Xr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=r4(s.prefix,t.innerText)||sp(s.prefix,_f(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function N4(t){const e=Mi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||Xo()):(e["aria-hidden"]="true",e.focusable="false")),e}function D4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function my(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=x4(t),i=N4(t),o=vf("parseNodeAttributes",{},t);let a=e.styleParser?O4(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:L4}=Pn;function nT(t){const e=ae.autoReplaceSvg==="nest"?my(t,{styleParser:!1}):my(t);return~e.extra.classes.indexOf(Mb)?Jr("generateLayersText",t,e):Jr("generateSvgReplacementMutation",t,e)}function M4(){return[...gV,...hf]}function gy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();const n=$e.documentElement.classList,r=h=>n.add("".concat(ry,"-").concat(h)),s=h=>n.remove("".concat(ry,"-").concat(h)),i=ae.autoFetchSvg?M4():Cb.concat(Object.keys(L4));i.includes("fa")||i.push("fa");const o=[".".concat(Mb,":not([").concat(Ps,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ps,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Mi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=op.begin("onTree"),u=a.reduce((h,d)=>{try{const p=nT(d);p&&h.push(p)}catch(p){Db||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{eT(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function V4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nT(t).then(n=>{n&&eT([n],e)})}function F4(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ef(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Ef(s||{})),t(r,W(W({},n),{},{mask:s}))}}const U4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Sn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return eu(W({type:"icon"},t),()=>(Cs("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||Xo()):(u["aria-hidden"]="true",u.focusable="false")),ip({icons:{main:wf(g),mask:s?wf(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:W(W({},Sn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var B4={mixout(){return{icon:F4(U4)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=gy,t.nodeCallback=V4,t}}},provides(t){t.i2svg=function(e){const{node:n=$e,callback:r=()=>{}}=e;return gy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([bf(r,o),u.iconName?bf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[O,N]=I;p([e,ip({icons:{main:O,mask:N},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Xl(o);a.length>0&&(r.style=a);let l;return np(i)&&(l=Jr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},j4={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return eu({type:"layer"},()=>{Cs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},$4={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return eu({type:"counter",content:t},()=>(Cs("beforeDOMElementCreation",{content:t,params:e}),E4({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},H4={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Sn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return eu({type:"text",content:t},()=>(Cs("beforeDOMElementCreation",{content:t,params:e}),uy({content:t,transform:W(W({},Sn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Sb){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,uy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const q4=new RegExp('"',"ug"),_y=[1105920,1112319],yy=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),dV),kV),TV),Af=Object.keys(yy).reduce((t,e)=>(t[e.toLowerCase()]=yy[e],t),{}),z4=Object.keys(Af).reduce((t,e)=>{const n=Af[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function W4(t){const e=t.replace(q4,""),n=JV(e,0),r=n>=_y[0]&&n<=_y[1],s=e.length===2?e[0]===e[1]:!1;return{value:_f(s?e[0]:e),isSecondary:r||s}}function K4(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Af[n]||{})[s]||z4[n]}function vy(t,e){const n="".concat(OV).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Mi(t.children).filter(p=>p.getAttribute(df)===e)[0],a=Yr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(MV),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=K4(l,h);const{value:I,isSecondary:O}=W4(p),N=u[0].startsWith("FontAwesome");let x=sp(g,I),P=x;if(N){const E=s4(I);E.iconName&&E.prefix&&(x=E.iconName,g=E.prefix)}if(x&&!O&&(!o||o.getAttribute(Jd)!==g||o.getAttribute(Zd)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);const E=D4(),{extra:R}=E;R.attributes[df]=e,bf(x,g).then(D=>{const V=ip(W(W({},E),{},{icons:{main:D,mask:Yb()},prefix:g,iconName:P,extra:R,watchable:!0})),b=$e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=V.map(y=>ya(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function G4(t){return Promise.all([vy(t,"::before"),vy(t,"::after")])}function Q4(t){return t.parentNode!==document.head&&!~NV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(df)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ey(t){if(dr)return new Promise((e,n)=>{const r=Mi(t.querySelectorAll("*")).filter(Q4).map(G4),s=op.begin("searchPseudoElements");tT(),Promise.all(r).then(()=>{s(),If(),e()}).catch(()=>{s(),If(),n()})})}var Y4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ey,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$e}=e;ae.searchPseudoElements&&Ey(n)}}};let wy=!1;var X4={mixout(){return{dom:{unwatch(){tT(),wy=!0}}}},hooks(){return{bootstrap(){py(vf("mutationObserverCallbacks",{}))},noAuto(){k4()},watch(t){const{observeMutationsRoot:e}=t;wy?If():py(vf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const by=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var J4={mixout(){return{parse:{transform:t=>by(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=by(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:W({},p.outer),children:[{tag:"g",attributes:W({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),p.path)}]}]}}}};const th={x:0,y:0,width:"100%",height:"100%"};function Ty(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Z4(t){return t.tag==="g"?t.children:[t]}var eF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Zl(n.split(" ").map(s=>s.trim())):Yb();return r.prefix||(r.prefix=Xr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=WV({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:W(W({},th),{},{fill:"white"})},I=u.children?{children:u.children.map(Ty)}:{},O={tag:"g",attributes:W({},p.inner),children:[Ty(W({tag:u.tag,attributes:W(W({},u.attributes),p.path)},I))]},N={tag:"g",attributes:W({},p.outer),children:[O]},x="mask-".concat(o||Xo()),P="clip-".concat(o||Xo()),E={tag:"mask",attributes:W(W({},th),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,N]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Z4(d)},E]};return n.push(R,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(x,")")},th)}),{children:n,attributes:r}}}},tF={provides(t){let e=!1;Yr.matchMedia&&(e=Yr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},nF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},rF=[QV,B4,j4,$4,H4,Y4,X4,J4,eF,tF,nF];d4(rF,{mixoutsTo:en});en.noAuto;const sF=en.config,iF=en.library;en.dom;const Rf=en.parse;en.findIconDefinition;en.toHtml;const oF=en.icon;en.layer;en.text;en.counter;function Iy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Qn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Iy(Object(n),!0).forEach(function(r){Ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Iy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function aF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cF(t){var e=aF(t,"string");return typeof e=="symbol"?e:e+""}function il(t){"@babel/helpers - typeof";return il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},il(t)}function Ht(t,e,n){return e=cF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function uF(t,e){if(t==null)return{};var n=lF(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var hF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rT={exports:{}};(function(t){(function(e){var n=function(x,P,E){if(!u(P)||d(P)||p(P)||g(P)||l(P))return P;var R,D=0,V=0;if(h(P))for(R=[],V=P.length;D<V;D++)R.push(n(x,P[D],E));else{R={};for(var b in P)Object.prototype.hasOwnProperty.call(P,b)&&(R[x(b,E)]=n(x,P[b],E))}return R},r=function(x,P){P=P||{};var E=P.separator||"_",R=P.split||/(?=[A-Z])/;return x.split(R).join(E)},s=function(x){return I(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var P=s(x);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(x,P){return r(x,P).toLowerCase()},a=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},h=function(x){return a.call(x)=="[object Array]"},d=function(x){return a.call(x)=="[object Date]"},p=function(x){return a.call(x)=="[object RegExp]"},g=function(x){return a.call(x)=="[object Boolean]"},I=function(x){return x=x-0,x===x},O=function(x,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?x:function(R,D){return E(R,x,D)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,P){return n(O(s,P),x)},decamelizeKeys:function(x,P){return n(O(o,P),x,P)},pascalizeKeys:function(x,P){return n(O(i,P),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(hF)})(rT);var fF=rT.exports,dF=["class","style"];function pF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=fF.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function mF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function sT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return sT(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=mF(h);break;case"style":l.style=pF(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=uF(n,dF);return vt(t.tag,Qn(Qn(Qn({},e),{},{class:s.class,style:Qn(Qn({},s.style),o)},s.attrs),a),r)}var iT=!1;try{iT=!0}catch{}function gF(){if(!iT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function nh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ht({},t,e):{}}function _F(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ht(Ht(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ay(t){if(t&&il(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Rf.icon)return Rf.icon(t);if(t===null)return null;if(il(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var yF=Fn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return Ay(e.icon)}),i=Ue(function(){return nh("classes",_F(e))}),o=Ue(function(){return nh("transform",typeof e.transform=="string"?Rf.transform(e.transform):e.transform)}),a=Ue(function(){return nh("mask",Ay(e.mask))}),l=Ue(function(){return oF(s.value,Qn(Qn(Qn(Qn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});_n(l,function(h){if(!h)return gF("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ue(function(){return l.value?sT(l.value.abstract[0],{},r):null});return function(){return u.value}}});const vF={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},EF={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},wF=EF,bF={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},TF={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},IF={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};sF.autoAddCss=!1;iF.add(vF,TF,wF,IF,bF);const AF=Zt(t=>{t.vueApp.component("font-awesome-icon",yF)}),RF=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let oT;const tu=t=>oT=t,aT=Symbol();function Sf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var So;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(So||(So={}));function SF(){const t=Lf(!0),e=t.run(()=>Gt({}));let n=[],r=[];const s=$f({install(i){tu(s),s._a=i,i.provide(aT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!RF?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const cT=()=>{};function Ry(t,e,n,r=cT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&na()&&bc(s),s}function qs(t,...e){t.slice().forEach(n=>{n(...e)})}const PF=t=>t(),Sy=Symbol(),rh=Symbol();function Pf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Sf(s)&&Sf(r)&&t.hasOwnProperty(n)&&!Je(r)&&!tr(r)?t[n]=Pf(s,r):t[n]=r}return t}const CF=Symbol();function kF(t){return!Sf(t)||!t.hasOwnProperty(CF)}const{assign:br}=Object;function OF(t){return!!(Je(t)&&t.effect)}function xF(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=_I(n.state.value[t]);return br(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=$f(Ue(()=>{tu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=lT(t,u,e,n,r,!0),l}function lT(t,e,n={},r,s,i){let o;const a=br({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),Gt({});let O;function N(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:So.patchFunction,storeId:t,events:g}):(Pf(r.state.value[t],y),_={type:So.patchObject,payload:y,storeId:t,events:g});const w=O=Symbol();Vn().then(()=>{O===w&&(u=!0)}),h=!0,qs(d,_,r.state.value[t])}const x=i?function(){const{state:_}=n,w=_?_():{};this.$patch(C=>{br(C,w)})}:cT;function P(){o.stop(),d=[],p=[],r._s.delete(t)}const E=(y,_="")=>{if(Sy in y)return y[rh]=_,y;const w=function(){tu(r);const C=Array.from(arguments),S=[],T=[];function ge(se){S.push(se)}function ve(se){T.push(se)}qs(p,{args:C,name:w[rh],store:D,after:ge,onError:ve});let Z;try{Z=y.apply(this&&this.$id===t?this:D,C)}catch(se){throw qs(T,se),se}return Z instanceof Promise?Z.then(se=>(qs(S,se),se)).catch(se=>(qs(T,se),Promise.reject(se))):(qs(S,Z),Z)};return w[Sy]=!0,w[rh]=_,w},R={_p:r,$id:t,$onAction:Ry.bind(null,p),$patch:N,$reset:x,$subscribe(y,_={}){const w=Ry(d,y,_.detached,()=>C()),C=o.run(()=>_n(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:So.direct,events:g},S)},br({},l,_)));return w},$dispose:P},D=ur(R);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||PF)(()=>r._e.run(()=>(o=Lf()).run(()=>e({action:E}))));for(const y in b){const _=b[y];if(Je(_)&&!OF(_)||tr(_))i||(I&&kF(_)&&(Je(_)?_.value=I[y]:Pf(_,I[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const w=E(_,y);b[y]=w,a.actions[y]=_}}return br(D,b),br(Ae(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{br(_,y)})}}),r._p.forEach(y=>{br(D,o.run(()=>y({store:D,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(D.$state,I),u=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function NF(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=zf();return a=a||(u?xt(aT,null):null),a&&tu(a),a=oT,a._s.has(r)||(i?lT(r,e,s,a):xF(r,s,a)),a._s.get(r)}return o.$id=r,o}function DF(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function LF(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const MF=Zt(t=>{const e=SF();t.vueApp.use(e)});var Py=/^(GTM|G)-[0-9A-Z]+$/;function sh(t){if(typeof t!="string"||!Py.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Py}).${n}`)}}function co(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function fi(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(co(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function VF(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var FF=class{constructor(t){Qi(this,"id");Qi(this,"options");Qi(this,"scriptElements",[]);Qi(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)sh(typeof e=="string"?e:e.id);else sh(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!VF(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=fi(n,{...this.options}):r=fi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=fi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?co(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&co(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&co(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&co(window,this.options.dataLayerName).push(t)}},mt;function UF(t,e={id:""}){e={trackOnNextTick:!1,...e},mt=new FF(e),t.config.globalProperties.$gtm=mt,mt.isInBrowserContext()&&(e.vueRouter&&BF(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),mt.options.enabled&&mt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")fi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),fi(n.id,r)}}):fi(e.id,e))),t.provide("gtm",e)}function BF(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,I;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?mt!=null&&mt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(mt!=null&&mt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((I=(g=e.options)==null?void 0:g.history)==null?void 0:I.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Vn(()=>{mt==null||mt.trackView(u,d,h)}):mt==null||mt.trackView(u,d,h)})}function jF(t){return{install:e=>UF(e,t)}}const $F=Zt(t=>{const e=Os().public,n=AN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(jF({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:Et(),trackOnNextTick:!1}))}),HF=[WS,eP,TC,AC,RC,SC,CC,kC,OC,rV,AF,MF,$F],qF=Fn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return vs(aa,Yn(r)),()=>vt(t.vnode,{ref:t.vnodeRef})}}),zF=Fn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Le(),i=Gt(),o=xt(aa,null);let a;r({pageRef:i});const l=xt(wE,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Et().beforeEach(d)}return t.pageKey&&_n(()=>t.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")}),()=>vt(WE,{name:t.name,route:t.route,...e},{default:d=>{const p=KF(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const I=Vh(d,t.pageKey);!s.isHydrating&&!GF(o,d.route,d.Component)&&a===I&&s.callHook("page:loading:end"),a=I;const O=!!(t.transition??d.route.meta.pageTransition??Ih),N=O&&WF([t.transition,d.route.meta.pageTransition,Ih,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),x=t.keepalive??d.route.meta.keepalive??_R;return u=KE(eE,O&&N,aC(x,vt(Gf,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Vn(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const P=vt(qF,{key:I||void 0,vnode:n.default?vt(kt,void 0,n.default(d)):d.Component,route:d.route,renderKey:I||void 0,trackRootNodes:O,vnodeRef:i});return x&&(P.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),P}}))).default(),u}})}});function WF(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?sd(n.onAfterLeave):void 0}));return vE(...e)}function KF(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Vh({route:e,Component:n})!==Vh({route:t,Component:n})}function GF(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const QF=Fn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Dr[t.name]().then(r=>r.default||r);return()=>vt(n,t.layoutProps,e.slots)}}),YF=Fn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Le(),r=xt(aa),s=r===Zf()?nC():r,i=Ue(()=>{let l=Qe(t.name)??s.meta.layout??"default";return l&&!(l in Dr)&&t.fallback&&(l=Qe(t.fallback)),l}),o=Gt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);Et().beforeEach(l)}return()=>{const l=i.value&&i.value in Dr,u=s.meta.layoutTransition??gR;return KE(eE,l&&u,{default:()=>vt(Gf,{suspensible:!0,onResolve:()=>{Vn(a)}},{default:()=>vt(XF,{layoutProps:Gv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),XF=Fn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&vs(wE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Dr)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(QF,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),nu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},JF={};function ZF(t,e){const n=zF,r=YF;return jt(),Gn(r,null,{default:In(()=>[Pe(n)]),_:1})}const eU=nu(JF,[["render",ZF]]),tU=Jf("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Cy=NF("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Le(),r=Et();try{const s=await ax(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Le();try{await hx(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Le();ux(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),nU={class:"navbar navbar-expand-md navbar-light bg-light"},rU={class:"navbar-nav"},sU={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},iU={class:"navbar-nav ml-auto"};function oU(t,e,n,r,s,i){const o=ON;return jt(),Lo("nav",nU,[Pe(o,{class:"navbar-brand",to:"/"},{default:In(()=>e[2]||(e[2]=[on("Who's Jimmy")])),_:1}),He("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[He("span",{class:"navbar-toggler-icon"},null,-1)])),He("div",{class:ea(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[He("ul",rU,[Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:In(()=>e[4]||(e[4]=[on("Bio")])),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:In(()=>e[5]||(e[5]=[on("Portfolio ")])),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:In(()=>e[6]||(e[6]=[on("For Sale")])),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:In(()=>e[7]||(e[7]=[on("Cool Stuff")])),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:In(()=>e[8]||(e[8]=[on("Contact Us")])),_:1})])],2),s.isAuth?(jt(),Lo("div",sU,[He("ul",iU,[Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:In(()=>[on(Df(t.user?t.user.email:""),1)]),_:1}),He("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):AA("",!0)])}const aU={data(){return{visible:!1,isAuth:!1}},computed:{...DF(Cy,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...LF(Cy,{signOut:"signOut"})}},cU=nu(aU,[["render",oU]]),lU={class:"page-footer font-small bg-light navbar-fixed-bottom"},uU={class:"container"},hU={class:"py-3 pt-3"},fU={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},dU={href:"https://www.facebook.com/whosjimmy"},pU={href:"https://twitter.com/jimmyclaws"},mU={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function gU(t,e){const n=No("font-awesome-icon");return jt(),Lo("footer",lU,[He("div",uU,[He("div",hU,[He("a",fU,[Pe(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),He("a",dU,[Pe(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),He("a",pU,[Pe(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),He("a",mU,[Pe(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=He("div",{class:"footer-copyright text-center font-small"},[He("div",null,[on("© 2024 Copyright: "),He("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),He("div",null,"Disclaimer: All images are copyright to their respective owners."),He("div",null,[on("A "),He("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),on(" creation.")])],-1))])}const _U={},yU=nu(_U,[["render",gU],["__scopeId","data-v-063d9b19"]]),vU={class:"text-center my-0 page"},EU={class:"body"},wU={components:{appHeader:cU,appFooter:yU},head(){return{title:"Error"}}},bU=Fn({...wU,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Le();ag({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{ag({title:n.public.SITE_TITLE}),TE({redirect:"/"})};return(i,o)=>{var u;const a=No("app-header"),l=No("app-footer");return jt(),Lo("div",vU,[Pe(a),He("div",EU,[o[0]||(o[0]=He("img",{src:tU,alt:"Error Image"},null,-1)),He("h2",null,"Error: "+Df((u=t.error)==null?void 0:u.statusCode),1),He("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Pe(l)])}}}),TU=nu(bU,[["__scopeId","data-v-a467a495"]]),IU={key:0},ky={__name:"nuxt-root",setup(t){const e=()=>null,n=Le(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Et().beforeEach(l)}const s=!1;vs(aa,Zf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=wl(),o=!1;wv((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),zR(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Xs(l)),!1});const a=!1;return(l,u)=>(jt(),Gn(Gf,{onResolve:Qe(r)},{default:In(()=>[Qe(o)?(jt(),Lo("div",IU)):Qe(i)?(jt(),Gn(Qe(TU),{key:1,error:Qe(i)},null,8,["error"])):Qe(a)?(jt(),Gn(Qe(e),{key:2,context:Qe(a)},null,8,["context"])):Qe(s)?(jt(),Gn(HI(Qe(s)),{key:3})):(jt(),Gn(Qe(eU),{key:4}))]),_:1},8,["onResolve"]))}};let Oy;{let t;Oy=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?u1(ky):l1(ky),s=TR({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||bl(l)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await RR(s,HF)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(ER),await s.hooks.callHook("app:mounted",r),await Vn()}catch(l){i(l)}return r},t=Oy().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{yU as $,Je as A,ur as B,ia as C,Ue as D,tr as E,kt as F,Hr as G,xt as H,vs as I,Vn as J,Jf as K,No as L,kU as M,ll as N,Gn as O,CU as P,ea as Q,RU as R,IA as S,eE as T,aa as U,LU as V,qR as W,AN as X,xU as Y,cU as Z,nu as _,LF as a,zF as a0,NF as a1,Le as a2,UU as a3,jU as a4,$U as a5,BU as a6,HU as a7,He as b,Lo as c,Pe as d,In as e,ON as f,on as g,Qe as h,DU as i,NU as j,AA as k,ZM as l,DF as m,WU as n,jt as o,qU as p,zU as q,PU as r,_l as s,Df as t,Cy as u,OU as v,SU as w,Gt as x,FI as y,_n as z};
