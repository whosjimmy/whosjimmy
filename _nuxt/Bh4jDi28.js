const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./COT8GIu3.js","./DiYf2Vi_.js","./Bp3Xc-3V.js","./Cwj4XDum.js","./index.CwtG1KP7.css","./CzEERmEB.js","./CnC__Fpy.js","./CtQV8UhJ.js","./CNzRMKMB.js","./Gallery.B_nrwMtm.css","./Film.KBkYyf_R.css","./Film.RcEDhm2u.css","./B2hv4IY9.js","./Bio.BcnN8BQQ.css","./-eSHvuz7.js","./Contact.2xyrHKtO.css","./CQ0fCHl9.js","./Clocks.CkpqjaRE.css","./By7rYGZk.js","./index.BANqCETR.css","./DnXziyre.js","./MrSxr8YU.js","./index.Dbrk1KBP.css","./CeC1hub8.js","./Celebrities.CcuunyNG.css","./CbkC5wMb.js","./Clocks.vUUo-Xqj.css","./BWF0MlKK.js","./index.D3FkaTh1.css","./DnV4vYfi.js","./DxtxgdgH.js","./BUi269rQ.js","./CA8zXyAm.js","./default.BE-W7nGe.css"])))=>i.map(i=>d[i]);
var dT=Object.defineProperty;var pT=(t,e,n)=>e in t?dT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ki=(t,e,n)=>pT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ff(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Be={},Ys=[],rn=()=>{},mT=()=>!1,Xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),df=t=>t.startsWith("onUpdate:"),ht=Object.assign,pf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gT=Object.prototype.hasOwnProperty,Ie=(t,e)=>gT.call(t,e),le=Array.isArray,Xs=t=>Ri(t)==="[object Map]",Ai=t=>Ri(t)==="[object Set]",Hp=t=>Ri(t)==="[object Date]",_T=t=>Ri(t)==="[object RegExp]",de=t=>typeof t=="function",Ke=t=>typeof t=="string",Cn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",yy=t=>(xe(t)||de(t))&&de(t.then)&&de(t.catch),vy=Object.prototype.toString,Ri=t=>vy.call(t),yT=t=>Ri(t).slice(8,-1),Ey=t=>Ri(t)==="[object Object]",mf=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=ff(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vT=/-(\w)/g,pn=Jc(t=>t.replace(vT,(e,n)=>n?n.toUpperCase():"")),ET=/\B([A-Z])/g,Cs=Jc(t=>t.replace(ET,"-$1").toLowerCase()),Zc=Jc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ou=Jc(t=>t?`on${Zc(t)}`:""),Ur=(t,e)=>!Object.is(t,e),Zs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wy=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_c=t=>{const e=parseFloat(t);return isNaN(e)?t:e},by=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let qp;const Ty=()=>qp||(qp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function el(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?IT(r):el(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||xe(t))return t}const wT=/;(?![^(]*\))/g,bT=/:([^]+)/,TT=/\/\*[^]*?\*\//g;function IT(t){const e={};return t.replace(TT,"").split(wT).forEach(n=>{if(n){const r=n.split(bT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jo(t){let e="";if(Ke(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Jo(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function FF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=Jo(e)),n&&(t.style=el(n)),t}const AT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",RT=ff(AT);function Iy(t){return!!t||t===""}function ST(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Zo(t[r],e[r]);return n}function Zo(t,e){if(t===e)return!0;let n=Hp(t),r=Hp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Cn(t),r=Cn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?ST(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Zo(t[o],e[o]))return!1}}return String(t)===String(e)}function gf(t,e){return t.findIndex(n=>Zo(n,e))}const Ay=t=>!!(t&&t.__v_isRef===!0),_f=t=>Ke(t)?t:t==null?"":le(t)||xe(t)&&(t.toString===vy||!de(t.toString))?Ay(t)?_f(t.value):JSON.stringify(t,Ry,2):String(t),Ry=(t,e)=>Ay(e)?Ry(t,e.value):Xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[au(r,i)+" =>"]=s,n),{})}:Ai(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>au(n))}:Cn(e)?au(e):xe(e)&&!le(e)&&!Ey(e)?String(e):e,au=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Sy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yf(t){return new Sy(t)}function PT(t,e=qt){e&&e.active&&e.effects.push(t)}function ea(){return qt}function yc(t){qt&&qt.cleanups.push(t)}let hs;class vf{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,PT(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Gr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(CT(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Or,n=hs;try{return Or=!0,hs=this,this._runnings++,zp(this),this.fn()}finally{Wp(this),this._runnings--,hs=n,Or=e}}stop(){this.active&&(zp(this),Wp(this),this.onStop&&this.onStop(),this.active=!1)}}function CT(t){return t.value}function zp(t){t._trackId++,t._depsLength=0}function Wp(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Py(t.deps[e],t);t.deps.length=t._depsLength}}function Py(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Or=!0,Wu=0;const Cy=[];function Gr(){Cy.push(Or),Or=!1}function Qr(){const t=Cy.pop();Or=t===void 0?!0:t}function Ef(){Wu++}function wf(){for(Wu--;!Wu&&Ku.length;)Ku.shift()()}function ky(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Py(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ku=[];function Oy(t,e,n){Ef();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ku.push(r.scheduler)))}wf()}const Ny=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},vc=new WeakMap,fs=Symbol(""),Gu=Symbol("");function Ut(t,e,n){if(Or&&hs){let r=vc.get(t);r||vc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ny(()=>r.delete(n))),ky(hs,s)}}function Wn(t,e,n,r,s,i){const o=vc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Cn(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?mf(n)&&a.push(o.get("length")):(a.push(o.get(fs)),Xs(t)&&a.push(o.get(Gu)));break;case"delete":le(t)||(a.push(o.get(fs)),Xs(t)&&a.push(o.get(Gu)));break;case"set":Xs(t)&&a.push(o.get(fs));break}Ef();for(const l of a)l&&Oy(l,4);wf()}function kT(t,e){const n=vc.get(t);return n&&n.get(e)}const OT=ff("__proto__,__v_isRef,__isVue"),xy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn)),Kp=NT();function NT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ae(this);for(let i=0,o=this.length;i<o;i++)Ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gr(),Ef();const r=Ae(this)[e].apply(this,n);return wf(),Qr(),r}}),t}function xT(t){Cn(t)||(t=String(t));const e=Ae(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class Dy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?WT:Fy:i?Vy:My).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Ie(Kp,n))return Reflect.get(Kp,n,r);if(n==="hasOwnProperty")return xT}const a=Reflect.get(e,n,r);return(Cn(n)?xy.has(n):OT(n))||(s||Ut(e,"get",n),i)?a:rt(a)?o&&mf(n)?a:a.value:xe(a)?s?Uy(a):Yr(a):a}}class Ly extends Dy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Br(i);if(!ci(r)&&!Br(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&rt(i)&&!rt(r))return l?!1:(i.value=r,!0)}const o=le(e)&&mf(n)?Number(n)<e.length:Ie(e,n),a=Reflect.set(e,n,r,s);return e===Ae(s)&&(o?Ur(r,i)&&Wn(e,"set",n,r):Wn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Cn(n)||!xy.has(n))&&Ut(e,"has",n),r}ownKeys(e){return Ut(e,"iterate",le(e)?"length":fs),Reflect.ownKeys(e)}}class DT extends Dy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const LT=new Ly,MT=new DT,VT=new Ly(!0);const bf=t=>t,tl=t=>Reflect.getPrototypeOf(t);function Na(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(Ur(e,i)&&Ut(s,"get",e),Ut(s,"get",i));const{has:o}=tl(s),a=r?bf:n?Rf:Ro;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function xa(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(Ur(t,s)&&Ut(r,"has",t),Ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Da(t,e=!1){return t=t.__v_raw,!e&&Ut(Ae(t),"iterate",fs),Reflect.get(t,"size",t)}function Gp(t,e=!1){!e&&!ci(t)&&!Br(t)&&(t=Ae(t));const n=Ae(this);return tl(n).has.call(n,t)||(n.add(t),Wn(n,"add",t,t)),this}function Qp(t,e,n=!1){!n&&!ci(e)&&!Br(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=tl(r);let o=s.call(r,t);o||(t=Ae(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Ur(e,a)&&Wn(r,"set",t,e):Wn(r,"add",t,e),this}function Yp(t){const e=Ae(this),{has:n,get:r}=tl(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Wn(e,"delete",t,void 0),i}function Xp(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function La(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ae(o),l=e?bf:t?Rf:Ro;return!t&&Ut(a,"iterate",fs),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function Ma(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Xs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?bf:e?Rf:Ro;return!e&&Ut(i,"iterate",l?Gu:fs),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function lr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function FT(){const t={get(i){return Na(this,i)},get size(){return Da(this)},has:xa,add:Gp,set:Qp,delete:Yp,clear:Xp,forEach:La(!1,!1)},e={get(i){return Na(this,i,!1,!0)},get size(){return Da(this)},has:xa,add(i){return Gp.call(this,i,!0)},set(i,o){return Qp.call(this,i,o,!0)},delete:Yp,clear:Xp,forEach:La(!1,!0)},n={get(i){return Na(this,i,!0)},get size(){return Da(this,!0)},has(i){return xa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:La(!0,!1)},r={get(i){return Na(this,i,!0,!0)},get size(){return Da(this,!0)},has(i){return xa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:La(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ma(i,!1,!1),n[i]=Ma(i,!0,!1),e[i]=Ma(i,!1,!0),r[i]=Ma(i,!0,!0)}),[t,n,e,r]}const[UT,BT,jT,$T]=FT();function Tf(t,e){const n=e?t?$T:jT:t?BT:UT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const HT={get:Tf(!1,!1)},qT={get:Tf(!1,!0)},zT={get:Tf(!0,!1)};const My=new WeakMap,Vy=new WeakMap,Fy=new WeakMap,WT=new WeakMap;function KT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GT(t){return t.__v_skip||!Object.isExtensible(t)?0:KT(yT(t))}function Yr(t){return Br(t)?t:If(t,!1,LT,HT,My)}function jn(t){return If(t,!1,VT,qT,Vy)}function Uy(t){return If(t,!0,MT,zT,Fy)}function If(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=GT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Nr(t){return Br(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function Br(t){return!!(t&&t.__v_isReadonly)}function ci(t){return!!(t&&t.__v_isShallow)}function By(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Af(t){return Object.isExtensible(t)&&wy(t,"__v_skip",!0),t}const Ro=t=>xe(t)?Yr(t):t,Rf=t=>xe(t)?Uy(t):t;class jy{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new vf(()=>e(this._value),()=>co(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Ur(e._value,e._value=e.effect.run())&&co(e,4),Sf(e),e.effect._dirtyLevel>=2&&co(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function QT(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=rn):(r=t.get,s=t.set),new jy(r,s,i||!s,n)}function Sf(t){var e;Or&&hs&&(t=Ae(t),ky(hs,(e=t.dep)!=null?e:t.dep=Ny(()=>t.dep=void 0,t instanceof jy?t:void 0)))}function co(t,e=4,n,r){t=Ae(t);const s=t.dep;s&&Oy(s,e)}function rt(t){return!!(t&&t.__v_isRef===!0)}function Bt(t){return $y(t,!1)}function So(t){return $y(t,!0)}function $y(t,e){return rt(t)?t:new YT(t,e)}class YT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:Ro(e)}get value(){return Sf(this),this._value}set value(e){const n=this.__v_isShallow||ci(e)||Br(e);e=n?e:Ae(e),Ur(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Ro(e),co(this,4))}}function et(t){return rt(t)?t.value:t}const XT={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Hy(t){return Nr(t)?t:new Proxy(t,XT)}class JT{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Sf(this),()=>co(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function ZT(t){return new JT(t)}function eI(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=qy(t,n);return e}class tI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kT(Ae(this._object),this._key)}}class nI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function rI(t,e,n){return rt(t)?t:de(t)?new nI(t):xe(t)&&arguments.length>1?qy(t,e,n):Bt(t)}function qy(t,e,n){const r=t[e];return rt(r)?r:new tI(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xr(t,e,n,r){try{return r?t(...r):t()}catch(s){ta(s,e,n)}}function sn(t,e,n,r){if(de(t)){const s=xr(t,e,n,r);return s&&yy(s)&&s.catch(i=>{ta(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function ta(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Gr(),xr(l,null,10,[t,o,a]),Qr();return}}sI(t,n,s,r)}function sI(t,e,n,r=!0){console.error(t)}let Po=!1,Qu=!1;const At=[];let En=0;const ei=[];let mr=null,cs=0;const zy=Promise.resolve();let Pf=null;function xn(t){const e=Pf||zy;return t?e.then(this?t.bind(this):t):e}function iI(t){let e=En+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=Co(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Cf(t){(!At.length||!At.includes(t,Po&&t.allowRecurse?En+1:En))&&(t.id==null?At.push(t):At.splice(iI(t.id),0,t),Wy())}function Wy(){!Po&&!Qu&&(Qu=!0,Pf=zy.then(Ky))}function oI(t){const e=At.indexOf(t);e>En&&At.splice(e,1)}function Yu(t){le(t)?ei.push(...t):(!mr||!mr.includes(t,t.allowRecurse?cs+1:cs))&&ei.push(t),Wy()}function Jp(t,e,n=Po?En+1:0){for(;n<At.length;n++){const r=At[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r()}}}function Ec(t){if(ei.length){const e=[...new Set(ei)].sort((n,r)=>Co(n)-Co(r));if(ei.length=0,mr){mr.push(...e);return}for(mr=e,cs=0;cs<mr.length;cs++){const n=mr[cs];n.active!==!1&&n()}mr=null,cs=0}}const Co=t=>t.id==null?1/0:t.id,aI=(t,e)=>{const n=Co(t)-Co(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ky(t){Qu=!1,Po=!0,At.sort(aI);try{for(En=0;En<At.length;En++){const e=At[En];e&&e.active!==!1&&xr(e,e.i,e.i?15:14)}}finally{En=0,At.length=0,Ec(),Po=!1,Pf=null,(At.length||ei.length)&&Ky()}}let it=null,nl=null;function wc(t){const e=it;return it=t,nl=t&&t.type.__scopeId||null,e}function Gy(t){nl=t}function Qy(){nl=null}function yn(t,e=it,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lm(-1);const i=wc(e);let o;try{o=t(...s)}finally{wc(i),r._d&&lm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function UF(t,e){if(it===null)return t;const n=ll(it),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Be]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Er(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function vn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Gr(),sn(l,n,8,[t.el,a,t,e]),Qr())}}const gr=Symbol("_leaveCb"),Va=Symbol("_enterCb");function cI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return il(()=>{t.isMounted=!0}),na(()=>{t.isUnmounting=!0}),t}const tn=[Function,Array],Yy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},Xy=t=>{const e=t.subTree;return e.component?Xy(e.component):e},lI={name:"BaseTransition",props:Yy,setup(t,{slots:e}){const n=al(),r=cI();return()=>{const s=e.default&&Zy(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==lt){i=p;break}}const o=Ae(t),{mode:a}=o;if(r.isLeaving)return cu(i);const l=Zp(i);if(!l)return cu(i);let u=Xu(l,o,r,n,p=>u=p);ko(l,u);const h=n.subTree,f=h&&Zp(h);if(f&&f.type!==lt&&!fn(l,f)&&Xy(n).type!==lt){const p=Xu(f,o,r,n);if(ko(f,p),a==="out-in"&&l.type!==lt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},cu(i);a==="in-out"&&l.type!==lt&&(p.delayLeave=(g,I,P)=>{const O=Jy(r,f);O[String(f.key)]=f,g[gr]=()=>{I(),g[gr]=void 0,delete u.delayedLeave},u.delayedLeave=P})}return i}}},uI=lI;function Jy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Xu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:I,onLeaveCancelled:P,onBeforeAppear:O,onAppear:x,onAfterAppear:A,onAppearCancelled:E}=e,N=String(t.key),D=Jy(n,t),M=(y,w)=>{y&&sn(y,r,9,w)},b=(y,w)=>{const C=w[1];M(y,w),le(y)?y.every(S=>S.length<=1)&&C():y.length<=1&&C()},_={mode:o,persisted:a,beforeEnter(y){let w=l;if(!n.isMounted)if(i)w=O||l;else return;y[gr]&&y[gr](!0);const C=D[N];C&&fn(t,C)&&C.el[gr]&&C.el[gr](),M(w,[y])},enter(y){let w=u,C=h,S=f;if(!n.isMounted)if(i)w=x||u,C=A||h,S=E||f;else return;let T=!1;const me=y[Va]=ye=>{T||(T=!0,ye?M(S,[y]):M(C,[y]),_.delayedLeave&&_.delayedLeave(),y[Va]=void 0)};w?b(w,[y,me]):me()},leave(y,w){const C=String(t.key);if(y[Va]&&y[Va](!0),n.isUnmounting)return w();M(p,[y]);let S=!1;const T=y[gr]=me=>{S||(S=!0,w(),me?M(P,[y]):M(I,[y]),y[gr]=void 0,D[C]===t&&delete D[C])};D[C]=t,g?b(g,[y,T]):T()},clone(y){const w=Xu(y,e,n,r,s);return s&&s(w),w}};return _}function cu(t){if(rl(t))return t=Gn(t),t.children=null,t}function Zp(t){if(!rl(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function ko(t,e){t.shapeFlag&6&&t.component?ko(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Nt?(o.patchFlag&128&&s++,r=r.concat(Zy(o.children,e,a))):(e||o.type!==lt)&&r.push(a!=null?Gn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Dn(t,e){return de(t)?ht({name:t.name},e,{setup:t}):t}const ds=t=>!!t.type.__asyncLoader,rl=t=>t.type.__isKeepAlive,hI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=al(),r=n.ctx;if(!r.renderer)return()=>{const A=e.default&&e.default();return A&&A.length===1?A[0]:A};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:f}}}=r,p=f("div");r.activate=(A,E,N,D,M)=>{const b=A.component;u(A,E,N,0,a),l(b.vnode,A,E,N,b,a,D,A.slotScopeIds,M),at(()=>{b.isDeactivated=!1,b.a&&Zs(b.a);const _=A.props&&A.props.onVnodeMounted;_&&Lt(_,b.parent,A)},a)},r.deactivate=A=>{const E=A.component;Ic(E.m),Ic(E.a),u(A,p,null,1,a),at(()=>{E.da&&Zs(E.da);const N=A.props&&A.props.onVnodeUnmounted;N&&Lt(N,E.parent,A),E.isDeactivated=!0},a)};function g(A){lu(A),h(A,n,a,!0)}function I(A){s.forEach((E,N)=>{const D=oh(E.type);D&&(!A||!A(D))&&P(N)})}function P(A){const E=s.get(A);E&&(!o||!fn(E,o))?g(E):o&&lu(o),s.delete(A),i.delete(A)}dn(()=>[t.include,t.exclude],([A,E])=>{A&&I(N=>Ji(A,N)),E&&I(N=>!Ji(E,N))},{flush:"post",deep:!0});let O=null;const x=()=>{O!=null&&(nh(n.subTree.type)?at(()=>{s.set(O,Fa(n.subTree))},n.subTree.suspense):s.set(O,Fa(n.subTree)))};return il(x),rv(x),na(()=>{s.forEach(A=>{const{subTree:E,suspense:N}=n,D=Fa(E);if(A.type===D.type&&A.key===D.key){lu(D);const M=D.component.da;M&&at(M,N);return}g(A)})}),()=>{if(O=null,!e.default)return null;const A=e.default(),E=A[0];if(A.length>1)return o=null,A;if(!ui(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let N=Fa(E);if(N.type===lt)return o=null,N;const D=N.type,M=oh(ds(N)?N.type.__asyncResolved||{}:D),{include:b,exclude:_,max:y}=t;if(b&&(!M||!Ji(b,M))||_&&M&&Ji(_,M))return o=N,E;const w=N.key==null?D:N.key,C=s.get(w);return N.el&&(N=Gn(N),E.shapeFlag&128&&(E.ssContent=N)),O=w,C?(N.el=C.el,N.component=C.component,N.transition&&ko(N,N.transition),N.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),y&&i.size>parseInt(y,10)&&P(i.values().next().value)),N.shapeFlag|=256,o=N,nh(E.type)?E:N}}},fI=hI;function Ji(t,e){return le(t)?t.some(n=>Ji(n,e)):Ke(t)?t.split(",").includes(e):_T(t)?t.test(e):!1}function ev(t,e){nv(t,"a",e)}function tv(t,e){nv(t,"da",e)}function nv(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)rl(s.parent.vnode)&&dI(r,e,n,s),s=s.parent}}function dI(t,e,n,r){const s=sl(e,t,r,!0);sv(()=>{pf(r[e],s)},n)}function lu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Fa(t){return t.shapeFlag&128?t.ssContent:t}function sl(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Gr();const a=ra(n),l=sn(e,n,t,o);return a(),Qr(),l});return r?s.unshift(i):s.push(i),i}}const tr=t=>(e,n=ut)=>{(!cl||t==="sp")&&sl(t,(...r)=>e(...r),n)},pI=tr("bm"),il=tr("m"),mI=tr("bu"),rv=tr("u"),na=tr("bum"),sv=tr("um"),gI=tr("sp"),_I=tr("rtg"),yI=tr("rtc");function iv(t,e=ut){sl("ec",t,e)}const ov="components";function Oo(t,e){return cv(ov,t,!0,e)||t}const av=Symbol.for("v-ndc");function vI(t){return Ke(t)?cv(ov,t,!1)||t:t||av}function cv(t,e,n=!0,r=!1){const s=it||ut;if(s){const i=s.type;{const a=oh(i,!1);if(a&&(a===e||a===pn(e)||a===Zc(pn(e))))return i}const o=em(s[t]||i[t],e)||em(s.appContext[t],e);return!o&&r?i:o}}function em(t,e){return t&&(t[e]||t[pn(e)]||t[Zc(pn(e))])}function BF(t,e,n,r){let s;const i=n;if(le(t)||Ke(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}function jF(t,e,n={},r,s){if(it.isCE||it.parent&&ds(it.parent)&&it.parent.isCE)return Pe("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),Mt();const o=i&&lv(i(n)),a=wr(Nt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),a}function lv(t){return t.some(e=>ui(e)?!(e.type===lt||e.type===Nt&&!lv(e.children)):!0)?t:null}const Ju=t=>t?xv(t)?ll(t):Ju(t.parent):null,lo=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ju(t.parent),$root:t=>Ju(t.root),$emit:t=>t.emit,$options:t=>kf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Cf(t.update)}),$nextTick:t=>t.n||(t.n=xn.bind(t.proxy)),$watch:t=>zI.bind(t)}),uu=(t,e)=>t!==Be&&!t.__isScriptSetup&&Ie(t,e),EI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(uu(r,e))return o[e]=1,r[e];if(s!==Be&&Ie(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ie(u,e))return o[e]=3,i[e];if(n!==Be&&Ie(n,e))return o[e]=4,n[e];Zu&&(o[e]=0)}}const h=lo[e];let f,p;if(h)return e==="$attrs"&&Ut(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Be&&Ie(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ie(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return uu(s,e)?(s[e]=n,!0):r!==Be&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Be&&Ie(t,o)||uu(e,o)||(a=i[0])&&Ie(a,o)||Ie(r,o)||Ie(lo,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tm(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zu=!0;function wI(t){const e=kf(t),n=t.proxy,r=t.ctx;Zu=!1,e.beforeCreate&&nm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:I,activated:P,deactivated:O,beforeDestroy:x,beforeUnmount:A,destroyed:E,unmounted:N,render:D,renderTracked:M,renderTriggered:b,errorCaptured:_,serverPrefetch:y,expose:w,inheritAttrs:C,components:S,directives:T,filters:me}=e;if(u&&bI(u,r,null),o)for(const te in o){const ie=o[te];de(ie)&&(r[te]=ie.bind(n))}if(s){const te=s.call(n,n);xe(te)&&(t.data=Yr(te))}if(Zu=!0,i)for(const te in i){const ie=i[te],qe=de(ie)?ie.bind(n,n):de(ie.get)?ie.get.bind(n,n):rn,cn=!de(ie)&&de(ie.set)?ie.set.bind(n):rn,Jt=Le({get:qe,set:cn});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:ze=>Jt.value=ze})}if(a)for(const te in a)uv(a[te],r,n,te);if(l){const te=de(l)?l.call(n):l;Reflect.ownKeys(te).forEach(ie=>{ms(ie,te[ie])})}h&&nm(h,t,"c");function J(te,ie){le(ie)?ie.forEach(qe=>te(qe.bind(n))):ie&&te(ie.bind(n))}if(J(pI,f),J(il,p),J(mI,g),J(rv,I),J(ev,P),J(tv,O),J(iv,_),J(yI,M),J(_I,b),J(na,A),J(sv,N),J(gI,y),le(w))if(w.length){const te=t.exposed||(t.exposed={});w.forEach(ie=>{Object.defineProperty(te,ie,{get:()=>n[ie],set:qe=>n[ie]=qe})})}else t.exposed||(t.exposed={});D&&t.render===rn&&(t.render=D),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),T&&(t.directives=T)}function bI(t,e,n=rn){le(t)&&(t=eh(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=Rt(s.from||r,s.default,!0):i=Rt(s.from||r):i=Rt(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function nm(t,e,n){sn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function uv(t,e,n,r){const s=r.includes(".")?Av(n,r):()=>n[r];if(Ke(t)){const i=e[t];de(i)&&dn(s,i)}else if(de(t))dn(s,t.bind(n));else if(xe(t))if(le(t))t.forEach(i=>uv(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&dn(s,i,t)}}function kf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>bc(l,u,o,!0)),bc(l,e,o)),xe(e)&&i.set(e,l),l}function bc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&bc(t,i,n,!0),s&&s.forEach(o=>bc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=TI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TI={data:rm,props:sm,emits:sm,methods:Zi,computed:Zi,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Zi,directives:Zi,watch:AI,provide:rm,inject:II};function rm(t,e){return e?t?function(){return ht(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function II(t,e){return Zi(eh(t),eh(e))}function eh(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Zi(t,e){return t?ht(Object.create(null),t,e):e}function sm(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ht(Object.create(null),tm(t),tm(e??{})):e}function AI(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function hv(){return{app:null,config:{isNativeTag:mT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RI=0;function SI(t,e){return function(r,s=null){de(r)||(r=ht({},r)),s!=null&&!xe(s)&&(s=null);const i=hv(),o=new WeakSet;let a=!1;const l=i.app={_uid:RI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Lv,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...h)):de(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,f){if(!a){const p=Pe(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(p,u):t(p,u,f),a=!0,l._container=u,u.__vue_app__=l,ll(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=ps;ps=l;try{return u()}finally{ps=h}}};return l}}let ps=null;function ms(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function Rt(t,e,n=!1){const r=ut||it;if(r||ps){const s=ps?ps._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Of(){return!!(ut||it||ps)}const fv={},dv=()=>Object.create(fv),pv=t=>Object.getPrototypeOf(t)===fv;function PI(t,e,n,r=!1){const s={},i=dv();t.propsDefaults=Object.create(null),mv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:jn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function CI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(ol(t.emitsOptions,p))continue;const g=e[p];if(l)if(Ie(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const I=pn(p);s[I]=th(l,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{mv(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!Ie(e,f)&&((h=Cs(f))===f||!Ie(e,h)))&&(l?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=th(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Ie(e,f))&&(delete i[f],u=!0)}u&&Wn(t.attrs,"set","")}function mv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Js(l))continue;const u=e[l];let h;s&&Ie(s,h=pn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:ol(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=a||Be;for(let h=0;h<i.length;h++){const f=i[h];n[f]=th(s,l,f,u[f],t,!Ie(u,f))}}return o}function th(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ra(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Cs(n))&&(r=!0))}return r}const kI=new WeakMap;function gv(t,e,n=!1){const r=n?kI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=f=>{l=!0;const[p,g]=gv(f,e,!0);ht(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return xe(t)&&r.set(t,Ys),Ys;if(le(i))for(let h=0;h<i.length;h++){const f=pn(i[h]);im(f)&&(o[f]=Be)}else if(i)for(const h in i){const f=pn(h);if(im(f)){const p=i[h],g=o[f]=le(p)||de(p)?{type:p}:ht({},p),I=g.type;let P=!1,O=!0;if(le(I))for(let x=0;x<I.length;++x){const A=I[x],E=de(A)&&A.name;if(E==="Boolean"){P=!0;break}else E==="String"&&(O=!1)}else P=de(I)&&I.name==="Boolean";g[0]=P,g[1]=O,(P||Ie(g,"default"))&&a.push(f)}}const u=[o,a];return xe(t)&&r.set(t,u),u}function im(t){return t[0]!=="$"&&!Js(t)}const _v=t=>t[0]==="_"||t==="$stable",Nf=t=>le(t)?t.map(zt):[zt(t)],OI=(t,e,n)=>{if(e._n)return e;const r=yn((...s)=>Nf(e(...s)),n);return r._c=!1,r},yv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_v(s))continue;const i=t[s];if(de(i))e[s]=OI(s,i,r);else if(i!=null){const o=Nf(i);e[s]=()=>o}}},vv=(t,e)=>{const n=Nf(e);t.slots.default=()=>n},Ev=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},NI=(t,e,n)=>{const r=t.slots=dv();if(t.vnode.shapeFlag&32){const s=e._;s?(Ev(r,e,n),n&&wy(r,"_",s,!0)):yv(e,r)}else e&&vv(t,e)},xI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ev(s,e,n):(i=!e.$stable,yv(e,s)),o=e}else e&&(vv(t,e),o={default:1});if(i)for(const a in s)!_v(a)&&o[a]==null&&delete s[a]};function Tc(t,e,n,r,s=!1){if(le(t)){t.forEach((p,g)=>Tc(p,e&&(le(e)?e[g]:e),n,r,s));return}if(ds(r)&&!s)return;const i=r.shapeFlag&4?ll(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Be?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Ke(u)?(h[u]=null,Ie(f,u)&&(f[u]=null)):rt(u)&&(u.value=null)),de(l))xr(l,a,12,[o,h]);else{const p=Ke(l),g=rt(l);if(p||g){const I=()=>{if(t.f){const P=p?Ie(f,l)?f[l]:h[l]:l.value;s?le(P)&&pf(P,i):le(P)?P.includes(i)||P.push(i):p?(h[l]=[i],Ie(f,l)&&(f[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,Ie(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(I.id=-1,at(I,n)):I()}}}const DI=Symbol("_vte"),LI=t=>t.__isTeleport;let om=!1;const js=()=>{om||(console.error("Hydration completed but contains mismatches."),om=!0)},MI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",VI=t=>t.namespaceURI.includes("MathML"),Ua=t=>{if(MI(t))return"svg";if(VI(t))return"mathml"},Ba=t=>t.nodeType===8;function FI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(E,N)=>{if(!N.hasChildNodes()){n(null,E,N),Ec(),N._vnode=E;return}f(N.firstChild,E,null,null,null),Ec(),N._vnode=E},f=(E,N,D,M,b,_=!1)=>{_=_||!!N.dynamicChildren;const y=Ba(E)&&E.data==="[",w=()=>P(E,N,D,M,b,y),{type:C,ref:S,shapeFlag:T,patchFlag:me}=N;let ye=E.nodeType;N.el=E,me===-2&&(_=!1,N.dynamicChildren=null);let J=null;switch(C){case gs:ye!==3?N.children===""?(l(N.el=s(""),o(E),E),J=E):J=w():(E.data!==N.children&&(js(),E.data=N.children),J=i(E));break;case lt:A(E)?(J=i(E),x(N.el=E.content.firstChild,E,D)):ye!==8||y?J=w():J=i(E);break;case uo:if(y&&(E=i(E),ye=E.nodeType),ye===1||ye===3){J=E;const te=!N.children.length;for(let ie=0;ie<N.staticCount;ie++)te&&(N.children+=J.nodeType===1?J.outerHTML:J.data),ie===N.staticCount-1&&(N.anchor=J),J=i(J);return y?i(J):J}else w();break;case Nt:y?J=I(E,N,D,M,b,_):J=w();break;default:if(T&1)(ye!==1||N.type.toLowerCase()!==E.tagName.toLowerCase())&&!A(E)?J=w():J=p(E,N,D,M,b,_);else if(T&6){N.slotScopeIds=b;const te=o(E);if(y?J=O(E):Ba(E)&&E.data==="teleport start"?J=O(E,E.data,"teleport end"):J=i(E),e(N,te,null,D,M,Ua(te),_),ds(N)){let ie;y?(ie=Pe(Nt),ie.anchor=J?J.previousSibling:te.lastChild):ie=E.nodeType===3?nn(""):Pe("div"),ie.el=E,N.component.subTree=ie}}else T&64?ye!==8?J=w():J=N.type.hydrate(E,N,D,M,b,_,t,g):T&128&&(J=N.type.hydrate(E,N,D,M,Ua(o(E)),b,_,t,f))}return S!=null&&Tc(S,null,M,N),J},p=(E,N,D,M,b,_)=>{_=_||!!N.dynamicChildren;const{type:y,props:w,patchFlag:C,shapeFlag:S,dirs:T,transition:me}=N,ye=y==="input"||y==="option";if(ye||C!==-1){T&&vn(N,null,D,"created");let J=!1;if(A(E)){J=bv(M,me)&&D&&D.vnode.props&&D.vnode.props.appear;const ie=E.content.firstChild;J&&me.beforeEnter(ie),x(ie,E,D),N.el=E=ie}if(S&16&&!(w&&(w.innerHTML||w.textContent))){let ie=g(E.firstChild,N,E,D,M,b,_);for(;ie;){js();const qe=ie;ie=ie.nextSibling,a(qe)}}else S&8&&E.textContent!==N.children&&(js(),E.textContent=N.children);if(w){if(ye||!_||C&48){const ie=E.tagName.includes("-");for(const qe in w)(ye&&(qe.endsWith("value")||qe==="indeterminate")||Xo(qe)&&!Js(qe)||qe[0]==="."||ie)&&r(E,qe,null,w[qe],void 0,D)}else if(w.onClick)r(E,"onClick",null,w.onClick,void 0,D);else if(C&4&&Nr(w.style))for(const ie in w.style)w.style[ie]}let te;(te=w&&w.onVnodeBeforeMount)&&Lt(te,D,N),T&&vn(N,null,D,"beforeMount"),((te=w&&w.onVnodeMounted)||T||J)&&Pv(()=>{te&&Lt(te,D,N),J&&me.enter(E),T&&vn(N,null,D,"mounted")},M)}return E.nextSibling},g=(E,N,D,M,b,_,y)=>{y=y||!!N.dynamicChildren;const w=N.children,C=w.length;for(let S=0;S<C;S++){const T=y?w[S]:w[S]=zt(w[S]),me=T.type===gs;if(E){if(me&&!y){let ye=w[S+1];ye&&(ye=zt(ye)).type===gs&&(l(s(E.data.slice(T.children.length)),D,i(E)),E.data=T.children)}E=f(E,T,M,b,_,y)}else me&&!T.children?l(T.el=s(""),D):(js(),n(null,T,D,null,M,b,Ua(D),_))}return E},I=(E,N,D,M,b,_)=>{const{slotScopeIds:y}=N;y&&(b=b?b.concat(y):y);const w=o(E),C=g(i(E),N,w,D,M,b,_);return C&&Ba(C)&&C.data==="]"?i(N.anchor=C):(js(),l(N.anchor=u("]"),w,C),C)},P=(E,N,D,M,b,_)=>{if(js(),N.el=null,_){const C=O(E);for(;;){const S=i(E);if(S&&S!==C)a(S);else break}}const y=i(E),w=o(E);return a(E),n(null,N,w,y,D,M,Ua(w),b),y},O=(E,N="[",D="]")=>{let M=0;for(;E;)if(E=i(E),E&&Ba(E)&&(E.data===N&&M++,E.data===D)){if(M===0)return i(E);M--}return E},x=(E,N,D)=>{const M=N.parentNode;M&&M.replaceChild(E,N);let b=D;for(;b;)b.vnode.el===N&&(b.vnode.el=b.subTree.el=E),b=b.parent},A=E=>E.nodeType===1&&E.tagName.toLowerCase()==="template";return[h,f]}const at=Pv;function UI(t){return wv(t)}function BI(t){return wv(t,FI)}function wv(t,e){const n=Ty();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=rn,insertStaticContent:I}=t,P=(R,k,V,j=null,U=null,z=null,Q=void 0,W=null,G=!!k.dynamicChildren)=>{if(R===k)return;R&&!fn(R,k)&&(j=B(R),ze(R,U,z,!0),R=null),k.patchFlag===-2&&(G=!1,k.dynamicChildren=null);const{type:q,ref:X,shapeFlag:ae}=k;switch(q){case gs:O(R,k,V,j);break;case lt:x(R,k,V,j);break;case uo:R==null&&A(k,V,j,Q);break;case Nt:S(R,k,V,j,U,z,Q,W,G);break;default:ae&1?D(R,k,V,j,U,z,Q,W,G):ae&6?T(R,k,V,j,U,z,Q,W,G):(ae&64||ae&128)&&q.process(R,k,V,j,U,z,Q,W,G,ee)}X!=null&&U&&Tc(X,R&&R.ref,z,k||R,!k)},O=(R,k,V,j)=>{if(R==null)r(k.el=a(k.children),V,j);else{const U=k.el=R.el;k.children!==R.children&&u(U,k.children)}},x=(R,k,V,j)=>{R==null?r(k.el=l(k.children||""),V,j):k.el=R.el},A=(R,k,V,j)=>{[R.el,R.anchor]=I(R.children,k,V,j,R.el,R.anchor)},E=({el:R,anchor:k},V,j)=>{let U;for(;R&&R!==k;)U=p(R),r(R,V,j),R=U;r(k,V,j)},N=({el:R,anchor:k})=>{let V;for(;R&&R!==k;)V=p(R),s(R),R=V;s(k)},D=(R,k,V,j,U,z,Q,W,G)=>{k.type==="svg"?Q="svg":k.type==="math"&&(Q="mathml"),R==null?M(k,V,j,U,z,Q,W,G):y(R,k,U,z,Q,W,G)},M=(R,k,V,j,U,z,Q,W)=>{let G,q;const{props:X,shapeFlag:ae,transition:oe,dirs:se}=R;if(G=R.el=o(R.type,z,X&&X.is,X),ae&8?h(G,R.children):ae&16&&_(R.children,G,null,j,U,hu(R,z),Q,W),se&&vn(R,null,j,"created"),b(G,R,R.scopeId,Q,j),X){for(const ke in X)ke!=="value"&&!Js(ke)&&i(G,ke,null,X[ke],z,j);"value"in X&&i(G,"value",null,X.value,z),(q=X.onVnodeBeforeMount)&&Lt(q,j,R)}se&&vn(R,null,j,"beforeMount");const ue=bv(U,oe);ue&&oe.beforeEnter(G),r(G,k,V),((q=X&&X.onVnodeMounted)||ue||se)&&at(()=>{q&&Lt(q,j,R),ue&&oe.enter(G),se&&vn(R,null,j,"mounted")},U)},b=(R,k,V,j,U)=>{if(V&&g(R,V),j)for(let z=0;z<j.length;z++)g(R,j[z]);if(U){let z=U.subTree;if(k===z){const Q=U.vnode;b(R,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},_=(R,k,V,j,U,z,Q,W,G=0)=>{for(let q=G;q<R.length;q++){const X=R[q]=W?_r(R[q]):zt(R[q]);P(null,X,k,V,j,U,z,Q,W)}},y=(R,k,V,j,U,z,Q)=>{const W=k.el=R.el;let{patchFlag:G,dynamicChildren:q,dirs:X}=k;G|=R.patchFlag&16;const ae=R.props||Be,oe=k.props||Be;let se;if(V&&rs(V,!1),(se=oe.onVnodeBeforeUpdate)&&Lt(se,V,k,R),X&&vn(k,R,V,"beforeUpdate"),V&&rs(V,!0),(ae.innerHTML&&oe.innerHTML==null||ae.textContent&&oe.textContent==null)&&h(W,""),q?w(R.dynamicChildren,q,W,V,j,hu(k,U),z):Q||ie(R,k,W,null,V,j,hu(k,U),z,!1),G>0){if(G&16)C(W,ae,oe,V,U);else if(G&2&&ae.class!==oe.class&&i(W,"class",null,oe.class,U),G&4&&i(W,"style",ae.style,oe.style,U),G&8){const ue=k.dynamicProps;for(let ke=0;ke<ue.length;ke++){const Te=ue[ke],Ze=ae[Te],jt=oe[Te];(jt!==Ze||Te==="value")&&i(W,Te,Ze,jt,U,V)}}G&1&&R.children!==k.children&&h(W,k.children)}else!Q&&q==null&&C(W,ae,oe,V,U);((se=oe.onVnodeUpdated)||X)&&at(()=>{se&&Lt(se,V,k,R),X&&vn(k,R,V,"updated")},j)},w=(R,k,V,j,U,z,Q)=>{for(let W=0;W<k.length;W++){const G=R[W],q=k[W],X=G.el&&(G.type===Nt||!fn(G,q)||G.shapeFlag&70)?f(G.el):V;P(G,q,X,null,j,U,z,Q,!0)}},C=(R,k,V,j,U)=>{if(k!==V){if(k!==Be)for(const z in k)!Js(z)&&!(z in V)&&i(R,z,k[z],null,U,j);for(const z in V){if(Js(z))continue;const Q=V[z],W=k[z];Q!==W&&z!=="value"&&i(R,z,W,Q,U,j)}"value"in V&&i(R,"value",k.value,V.value,U)}},S=(R,k,V,j,U,z,Q,W,G)=>{const q=k.el=R?R.el:a(""),X=k.anchor=R?R.anchor:a("");let{patchFlag:ae,dynamicChildren:oe,slotScopeIds:se}=k;se&&(W=W?W.concat(se):se),R==null?(r(q,V,j),r(X,V,j),_(k.children||[],V,X,U,z,Q,W,G)):ae>0&&ae&64&&oe&&R.dynamicChildren?(w(R.dynamicChildren,oe,V,U,z,Q,W),(k.key!=null||U&&k===U.subTree)&&Tv(R,k,!0)):ie(R,k,V,X,U,z,Q,W,G)},T=(R,k,V,j,U,z,Q,W,G)=>{k.slotScopeIds=W,R==null?k.shapeFlag&512?U.ctx.activate(k,V,j,Q,G):me(k,V,j,U,z,Q,G):ye(R,k,G)},me=(R,k,V,j,U,z,Q)=>{const W=R.component=lA(R,j,U);if(rl(R)&&(W.ctx.renderer=ee),uA(W,!1,Q),W.asyncDep){if(U&&U.registerDep(W,J,Q),!R.el){const G=W.subTree=Pe(lt);x(null,G,k,V)}}else J(W,R,k,V,U,z,Q)},ye=(R,k,V)=>{const j=k.component=R.component;if(XI(R,k,V))if(j.asyncDep&&!j.asyncResolved){te(j,k,V);return}else j.next=k,oI(j.update),j.effect.dirty=!0,j.update();else k.el=R.el,j.vnode=k},J=(R,k,V,j,U,z,Q)=>{const W=()=>{if(R.isMounted){let{next:X,bu:ae,u:oe,parent:se,vnode:ue}=R;{const Zt=Iv(R);if(Zt){X&&(X.el=ue.el,te(R,X,Q)),Zt.asyncDep.then(()=>{R.isUnmounted||W()});return}}let ke=X,Te;rs(R,!1),X?(X.el=ue.el,te(R,X,Q)):X=ue,ae&&Zs(ae),(Te=X.props&&X.props.onVnodeBeforeUpdate)&&Lt(Te,se,X,ue),rs(R,!0);const Ze=fu(R),jt=R.subTree;R.subTree=Ze,P(jt,Ze,f(jt.el),B(jt),R,U,z),X.el=Ze.el,ke===null&&Df(R,Ze.el),oe&&at(oe,U),(Te=X.props&&X.props.onVnodeUpdated)&&at(()=>Lt(Te,se,X,ue),U)}else{let X;const{el:ae,props:oe}=k,{bm:se,m:ue,parent:ke}=R,Te=ds(k);if(rs(R,!1),se&&Zs(se),!Te&&(X=oe&&oe.onVnodeBeforeMount)&&Lt(X,ke,k),rs(R,!0),ae&&Ne){const Ze=()=>{R.subTree=fu(R),Ne(ae,R.subTree,R,U,null)};Te?k.type.__asyncLoader().then(()=>!R.isUnmounted&&Ze()):Ze()}else{const Ze=R.subTree=fu(R);P(null,Ze,V,j,R,U,z),k.el=Ze.el}if(ue&&at(ue,U),!Te&&(X=oe&&oe.onVnodeMounted)){const Ze=k;at(()=>Lt(X,ke,Ze),U)}(k.shapeFlag&256||ke&&ds(ke.vnode)&&ke.vnode.shapeFlag&256)&&R.a&&at(R.a,U),R.isMounted=!0,k=V=j=null}},G=R.effect=new vf(W,rn,()=>Cf(q),R.scope),q=R.update=()=>{G.dirty&&G.run()};q.i=R,q.id=R.uid,rs(R,!0),q()},te=(R,k,V)=>{k.component=R;const j=R.vnode.props;R.vnode=k,R.next=null,CI(R,k.props,j,V),xI(R,k.children,V),Gr(),Jp(R),Qr()},ie=(R,k,V,j,U,z,Q,W,G=!1)=>{const q=R&&R.children,X=R?R.shapeFlag:0,ae=k.children,{patchFlag:oe,shapeFlag:se}=k;if(oe>0){if(oe&128){cn(q,ae,V,j,U,z,Q,W,G);return}else if(oe&256){qe(q,ae,V,j,U,z,Q,W,G);return}}se&8?(X&16&&xt(q,U,z),ae!==q&&h(V,ae)):X&16?se&16?cn(q,ae,V,j,U,z,Q,W,G):xt(q,U,z,!0):(X&8&&h(V,""),se&16&&_(ae,V,j,U,z,Q,W,G))},qe=(R,k,V,j,U,z,Q,W,G)=>{R=R||Ys,k=k||Ys;const q=R.length,X=k.length,ae=Math.min(q,X);let oe;for(oe=0;oe<ae;oe++){const se=k[oe]=G?_r(k[oe]):zt(k[oe]);P(R[oe],se,V,null,U,z,Q,W,G)}q>X?xt(R,U,z,!0,!1,ae):_(k,V,j,U,z,Q,W,G,ae)},cn=(R,k,V,j,U,z,Q,W,G)=>{let q=0;const X=k.length;let ae=R.length-1,oe=X-1;for(;q<=ae&&q<=oe;){const se=R[q],ue=k[q]=G?_r(k[q]):zt(k[q]);if(fn(se,ue))P(se,ue,V,null,U,z,Q,W,G);else break;q++}for(;q<=ae&&q<=oe;){const se=R[ae],ue=k[oe]=G?_r(k[oe]):zt(k[oe]);if(fn(se,ue))P(se,ue,V,null,U,z,Q,W,G);else break;ae--,oe--}if(q>ae){if(q<=oe){const se=oe+1,ue=se<X?k[se].el:j;for(;q<=oe;)P(null,k[q]=G?_r(k[q]):zt(k[q]),V,ue,U,z,Q,W,G),q++}}else if(q>oe)for(;q<=ae;)ze(R[q],U,z,!0),q++;else{const se=q,ue=q,ke=new Map;for(q=ue;q<=oe;q++){const Pt=k[q]=G?_r(k[q]):zt(k[q]);Pt.key!=null&&ke.set(Pt.key,q)}let Te,Ze=0;const jt=oe-ue+1;let Zt=!1,xi=0;const ir=new Array(jt);for(q=0;q<jt;q++)ir[q]=0;for(q=se;q<=ae;q++){const Pt=R[q];if(Ze>=jt){ze(Pt,U,z,!0);continue}let en;if(Pt.key!=null)en=ke.get(Pt.key);else for(Te=ue;Te<=oe;Te++)if(ir[Te-ue]===0&&fn(Pt,k[Te])){en=Te;break}en===void 0?ze(Pt,U,z,!0):(ir[en-ue]=q+1,en>=xi?xi=en:Zt=!0,P(Pt,k[en],V,null,U,z,Q,W,G),Ze++)}const Ls=Zt?jI(ir):Ys;for(Te=Ls.length-1,q=jt-1;q>=0;q--){const Pt=ue+q,en=k[Pt],Ms=Pt+1<X?k[Pt+1].el:j;ir[q]===0?P(null,en,V,Ms,U,z,Q,W,G):Zt&&(Te<0||q!==Ls[Te]?Jt(en,V,Ms,2):Te--)}}},Jt=(R,k,V,j,U=null)=>{const{el:z,type:Q,transition:W,children:G,shapeFlag:q}=R;if(q&6){Jt(R.component.subTree,k,V,j);return}if(q&128){R.suspense.move(k,V,j);return}if(q&64){Q.move(R,k,V,ee);return}if(Q===Nt){r(z,k,V);for(let ae=0;ae<G.length;ae++)Jt(G[ae],k,V,j);r(R.anchor,k,V);return}if(Q===uo){E(R,k,V);return}if(j!==2&&q&1&&W)if(j===0)W.beforeEnter(z),r(z,k,V),at(()=>W.enter(z),U);else{const{leave:ae,delayLeave:oe,afterLeave:se}=W,ue=()=>r(z,k,V),ke=()=>{ae(z,()=>{ue(),se&&se()})};oe?oe(z,ue,ke):ke()}else r(z,k,V)},ze=(R,k,V,j=!1,U=!1)=>{const{type:z,props:Q,ref:W,children:G,dynamicChildren:q,shapeFlag:X,patchFlag:ae,dirs:oe,cacheIndex:se}=R;if(ae===-2&&(U=!1),W!=null&&Tc(W,null,V,R,!0),se!=null&&(k.renderCache[se]=void 0),X&256){k.ctx.deactivate(R);return}const ue=X&1&&oe,ke=!ds(R);let Te;if(ke&&(Te=Q&&Q.onVnodeBeforeUnmount)&&Lt(Te,k,R),X&6)_n(R.component,V,j);else{if(X&128){R.suspense.unmount(V,j);return}ue&&vn(R,null,k,"beforeUnmount"),X&64?R.type.remove(R,k,V,ee,j):q&&!q.hasOnce&&(z!==Nt||ae>0&&ae&64)?xt(q,k,V,!1,!0):(z===Nt&&ae&384||!U&&X&16)&&xt(G,k,V),j&&We(R)}(ke&&(Te=Q&&Q.onVnodeUnmounted)||ue)&&at(()=>{Te&&Lt(Te,k,R),ue&&vn(R,null,k,"unmounted")},V)},We=R=>{const{type:k,el:V,anchor:j,transition:U}=R;if(k===Nt){sr(V,j);return}if(k===uo){N(R);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(R.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:W}=U,G=()=>Q(V,z);W?W(R.el,z,G):G()}else z()},sr=(R,k)=>{let V;for(;R!==k;)V=p(R),s(R),R=V;s(k)},_n=(R,k,V)=>{const{bum:j,scope:U,update:z,subTree:Q,um:W,m:G,a:q}=R;Ic(G),Ic(q),j&&Zs(j),U.stop(),z&&(z.active=!1,ze(Q,R,k,V)),W&&at(W,k),at(()=>{R.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},xt=(R,k,V,j=!1,U=!1,z=0)=>{for(let Q=z;Q<R.length;Q++)ze(R[Q],k,V,j,U)},B=R=>{if(R.shapeFlag&6)return B(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const k=p(R.anchor||R.el),V=k&&k[DI];return V?p(V):k};let Z=!1;const Y=(R,k,V)=>{R==null?k._vnode&&ze(k._vnode,null,null,!0):P(k._vnode||null,R,k,null,null,null,V),k._vnode=R,Z||(Z=!0,Jp(),Ec(),Z=!1)},ee={p:P,um:ze,m:Jt,r:We,mt:me,mc:_,pc:ie,pbc:w,n:B,o:t};let Ee,Ne;return e&&([Ee,Ne]=e(ee)),{render:Y,hydrate:Ee,createApp:SI(Y,Ee)}}function hu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tv(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_r(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Tv(o,a)),a.type===gs&&(a.el=o.el)}}function jI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Iv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Iv(e)}function Ic(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const $I=Symbol.for("v-scx"),HI=()=>Rt($I);function qI(t,e){return xf(t,null,e)}const ja={};function dn(t,e,n){return xf(t,e,n)}function xf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Be){if(e&&i){const M=e;e=(...b)=>{M(...b),D()}}const l=ut,u=M=>r===!0?M:Er(M,r===!1?1:void 0);let h,f=!1,p=!1;if(rt(t)?(h=()=>t.value,f=ci(t)):Nr(t)?(h=()=>u(t),f=!0):le(t)?(p=!0,f=t.some(M=>Nr(M)||ci(M)),h=()=>t.map(M=>{if(rt(M))return M.value;if(Nr(M))return u(M);if(de(M))return xr(M,l,2)})):de(t)?e?h=()=>xr(t,l,2):h=()=>(g&&g(),sn(t,l,3,[I])):h=rn,e&&r){const M=h;h=()=>Er(M())}let g,I=M=>{g=E.onStop=()=>{xr(M,l,4),g=E.onStop=void 0}},P;if(cl)if(I=rn,e?n&&sn(e,l,3,[h(),p?[]:void 0,I]):h(),s==="sync"){const M=HI();P=M.__watcherHandles||(M.__watcherHandles=[])}else return rn;let O=p?new Array(t.length).fill(ja):ja;const x=()=>{if(!(!E.active||!E.dirty))if(e){const M=E.run();(r||f||(p?M.some((b,_)=>Ur(b,O[_])):Ur(M,O)))&&(g&&g(),sn(e,l,3,[M,O===ja?void 0:p&&O[0]===ja?[]:O,I]),O=M)}else E.run()};x.allowRecurse=!!e;let A;s==="sync"?A=x:s==="post"?A=()=>at(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),A=()=>Cf(x));const E=new vf(h,rn,A),N=ea(),D=()=>{E.stop(),N&&pf(N.effects,E)};return e?n?x():O=E.run():s==="post"?at(E.run.bind(E),l&&l.suspense):E.run(),P&&P.push(D),D}function zI(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?Av(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=ra(this),a=xf(s,i.bind(r),n);return o(),a}function Av(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Er(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,rt(t))Er(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Er(t[r],e,n);else if(Ai(t)||Xs(t))t.forEach(r=>{Er(r,e,n)});else if(Ey(t)){for(const r in t)Er(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Er(t[r],e,n)}return t}const WI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${Cs(e)}Modifiers`];function KI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&WI(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Ke(h)?h.trim():h)),o.number&&(s=n.map(_c)));let a,l=r[a=ou(e)]||r[a=ou(pn(e))];!l&&i&&(l=r[a=ou(Cs(e))]),l&&sn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,sn(u,t,6,s)}}function Rv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=Rv(u,e,!0);h&&(a=!0,ht(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(xe(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):ht(o,i),xe(t)&&r.set(t,o),o)}function ol(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Cs(e))||Ie(t,e))}function fu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:f,data:p,setupState:g,ctx:I,inheritAttrs:P}=t,O=wc(t);let x,A;try{if(n.shapeFlag&4){const N=s||r,D=N;x=zt(u.call(D,N,h,f,g,p,I)),A=a}else{const N=e;x=zt(N.length>1?N(f,{attrs:a,slots:o,emit:l}):N(f,null)),A=e.props?a:QI(a)}}catch(N){ho.length=0,ta(N,t,1),x=Pe(lt)}let E=x;if(A&&P!==!1){const N=Object.keys(A),{shapeFlag:D}=E;N.length&&D&7&&(i&&N.some(df)&&(A=YI(A,i)),E=Gn(E,A,!1,!0))}return n.dirs&&(E=Gn(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),x=E,wc(O),x}function GI(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(ui(s)){if(s.type!==lt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const QI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},YI=(t,e)=>{const n={};for(const r in t)(!df(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function XI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?am(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!ol(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?am(r,o,u):!0:!!o;return!1}function am(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ol(n,i))return!0}return!1}function Df({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const nh=t=>t.__isSuspense;let rh=0;const JI={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)ZI(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}eA(t,e,n,r,s,o,a,l,u)}},hydrate:tA,normalize:nA},Lf=JI;function No(t,e){const n=t.props&&t.props[e];de(n)&&n()}function ZI(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,f=h("div"),p=t.suspense=Sv(t,s,r,e,f,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(No(t,"onPending"),No(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ti(p,t.ssFallback)):p.resolve(!1,!0)}function eA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:I,pendingBranch:P,isInFallback:O,isHydrating:x}=f;if(P)f.pendingBranch=p,fn(p,P)?(l(P,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():O&&(x||(l(I,g,n,r,s,null,i,o,a),ti(f,g)))):(f.pendingId=rh++,x?(f.isHydrating=!1,f.activeBranch=P):u(P,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),O?(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(I,g,n,r,s,null,i,o,a),ti(f,g))):I&&fn(p,I)?(l(I,p,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(I&&fn(p,I))l(I,p,n,r,s,f,i,o,a),ti(f,p);else if(No(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=rh++,l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:A,pendingId:E}=f;A>0?setTimeout(()=>{f.pendingId===E&&f.fallback(g)},A):A===0&&f.fallback(g)}}function Sv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:f,m:p,um:g,n:I,o:{parentNode:P,remove:O}}=u;let x;const A=rA(t);A&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const E=t.props?by(t.props.timeout):void 0,N=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:rh++,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,b=!1){const{vnode:_,activeBranch:y,pendingBranch:w,pendingId:C,effects:S,parentComponent:T,container:me}=D;let ye=!1;D.isHydrating?D.isHydrating=!1:M||(ye=y&&w.transition&&w.transition.mode==="out-in",ye&&(y.transition.afterLeave=()=>{C===D.pendingId&&(p(w,me,i===N?I(y):i,0),Yu(S))}),y&&(P(y.el)!==D.hiddenContainer&&(i=I(y)),g(y,T,D,!0)),ye||p(w,me,i,0)),ti(D,w),D.pendingBranch=null,D.isInFallback=!1;let J=D.parent,te=!1;for(;J;){if(J.pendingBranch){J.effects.push(...S),te=!0;break}J=J.parent}!te&&!ye&&Yu(S),D.effects=[],A&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),No(_,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:b,activeBranch:_,parentComponent:y,container:w,namespace:C}=D;No(b,"onFallback");const S=I(_),T=()=>{D.isInFallback&&(f(null,M,w,S,y,null,C,a,l),ti(D,M))},me=M.transition&&M.transition.mode==="out-in";me&&(_.transition.afterLeave=T),D.isInFallback=!0,g(_,y,null,!0),me||T()},move(M,b,_){D.activeBranch&&p(D.activeBranch,M,b,_),D.container=M},next(){return D.activeBranch&&I(D.activeBranch)},registerDep(M,b,_){const y=!!D.pendingBranch;y&&D.deps++;const w=M.vnode.el;M.asyncDep.catch(C=>{ta(C,M,0)}).then(C=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:S}=M;ih(M,C,!1),w&&(S.el=w);const T=!w&&M.subTree.el;b(M,S,P(w||M.subTree.el),w?null:I(M.subTree),D,o,_),T&&O(T),Df(M,S.el),y&&--D.deps===0&&D.resolve()})},unmount(M,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,b),D.pendingBranch&&g(D.pendingBranch,n,M,b)}};return D}function tA(t,e,n,r,s,i,o,a,l){const u=e.suspense=Sv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function nA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=cm(r?n.default:n),t.ssFallback=r?cm(n.fallback):Pe(lt)}function cm(t){let e;if(de(t)){const n=li&&t._c;n&&(t._d=!1,Mt()),t=t(),n&&(t._d=!0,e=Ft,Cv())}return le(t)&&(t=GI(t)),t=zt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Pv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Yu(t)}function ti(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Df(r,s))}function rA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Nt=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),ho=[];let Ft=null;function Mt(t=!1){ho.push(Ft=t?null:[])}function Cv(){ho.pop(),Ft=ho[ho.length-1]||null}let li=1;function lm(t){li+=t,t<0&&Ft&&(Ft.hasOnce=!0)}function kv(t){return t.dynamicChildren=li>0?Ft||Ys:null,Cv(),li>0&&Ft&&Ft.push(t),t}function xo(t,e,n,r,s,i){return kv(je(t,e,n,r,s,i,!0))}function wr(t,e,n,r,s){return kv(Pe(t,e,n,r,s,!0))}function ui(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}const Ov=({key:t})=>t??null,tc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||rt(t)||de(t)?{i:it,r:t,k:e,f:!!n}:t:null);function je(t,e=null,n=null,r=0,s=null,i=t===Nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ov(e),ref:e&&tc(e),scopeId:nl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return a?(Mf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),li>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const Pe=sA;function sA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===av)&&(t=lt),ui(t)){const a=Gn(t,e,!0);return n&&Mf(a,n),li>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag=-2,a}if(pA(t)&&(t=t.__vccOpts),e){e=iA(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=Jo(a)),xe(l)&&(By(l)&&!le(l)&&(l=ht({},l)),e.style=el(l))}const o=Ke(t)?1:nh(t)?128:LI(t)?64:xe(t)?4:de(t)?2:0;return je(t,e,n,r,s,o,i,!0)}function iA(t){return t?By(t)||pv(t)?ht({},t):t:null}function Gn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Nv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ov(u),ref:e&&e.ref?n&&i?le(i)?i.concat(tc(e)):[i,tc(e)]:tc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ko(h,l.clone(h)),h}function nn(t=" ",e=0){return Pe(gs,null,t,e)}function $F(t,e){const n=Pe(uo,null,t);return n.staticCount=e,n}function oA(t="",e=!1){return e?(Mt(),wr(lt,null,t)):Pe(lt,null,t)}function zt(t){return t==null||typeof t=="boolean"?Pe(lt):le(t)?Pe(Nt,null,t.slice()):typeof t=="object"?_r(t):Pe(gs,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function Mf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pv(e)?e._ctx=it:s===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:it},n=32):(e=String(e),r&64?(n=16,e=[nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jo([e.class,r.class]));else if(s==="style")e.style=el([e.style,r.style]);else if(Xo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){sn(t,e,7,[n,r])}const aA=hv();let cA=0;function lA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||aA,i={uid:cA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gv(r,s),emitsOptions:Rv(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=KI.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const al=()=>ut||it;let Ac,sh;{const t=Ty(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ac=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),sh=e("__VUE_SSR_SETTERS__",n=>cl=n)}const ra=t=>{const e=ut;return Ac(t),t.scope.on(),()=>{t.scope.off(),Ac(e)}},um=()=>{ut&&ut.scope.off(),Ac(null)};function xv(t){return t.vnode.shapeFlag&4}let cl=!1;function uA(t,e=!1,n=!1){e&&sh(e);const{props:r,children:s}=t.vnode,i=xv(t);PI(t,r,i,e),NI(t,s,n);const o=i?hA(t,e):void 0;return e&&sh(!1),o}function hA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,EI);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?dA(t):null,i=ra(t);Gr();const o=xr(r,t,0,[t.props,s]);if(Qr(),i(),yy(o)){if(o.then(um,um),e)return o.then(a=>{ih(t,a,e)}).catch(a=>{ta(a,t,0)});t.asyncDep=o}else ih(t,o,e)}else Dv(t,e)}function ih(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Hy(e)),Dv(t,n)}let hm;function Dv(t,e,n){const r=t.type;if(!t.render){if(!e&&hm&&!r.render){const s=r.template||kf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ht(ht({isCustomElement:i,delimiters:a},o),l);r.render=hm(s,u)}}t.render=r.render||rn}{const s=ra(t);Gr();try{wI(t)}finally{Qr(),s()}}}const fA={get(t,e){return Ut(t,"get",""),t[e]}};function dA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,fA),slots:t.slots,emit:t.emit,expose:e}}function ll(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hy(Af(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lo)return lo[n](t)},has(e,n){return n in e||n in lo}})):t.proxy}function oh(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function pA(t){return de(t)&&"__vccOpts"in t}const Le=(t,e)=>QT(t,e,cl);function gt(t,e,n){const r=arguments.length;return r===2?xe(e)&&!le(e)?ui(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ui(n)&&(n=[n]),Pe(t,e,n))}const Lv="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mA="http://www.w3.org/2000/svg",gA="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,fm=Un&&Un.createElement("template"),_A={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Un.createElementNS(mA,t):e==="mathml"?Un.createElementNS(gA,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fm.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=fm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ur="transition",Gi="animation",Do=Symbol("_vtc"),ul=(t,{slots:e})=>gt(uI,yA(t),e);ul.displayName="Transition";const Mv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ul.props=ht({},Yy,Mv);const ss=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},dm=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function yA(t){const e={};for(const S in t)S in Mv||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,I=vA(s),P=I&&I[0],O=I&&I[1],{onBeforeEnter:x,onEnter:A,onEnterCancelled:E,onLeave:N,onLeaveCancelled:D,onBeforeAppear:M=x,onAppear:b=A,onAppearCancelled:_=E}=e,y=(S,T,me)=>{is(S,T?h:a),is(S,T?u:o),me&&me()},w=(S,T)=>{S._isLeaving=!1,is(S,f),is(S,g),is(S,p),T&&T()},C=S=>(T,me)=>{const ye=S?b:A,J=()=>y(T,S,me);ss(ye,[T,J]),pm(()=>{is(T,S?l:i),hr(T,S?h:a),dm(ye)||mm(T,r,P,J)})};return ht(e,{onBeforeEnter(S){ss(x,[S]),hr(S,i),hr(S,o)},onBeforeAppear(S){ss(M,[S]),hr(S,l),hr(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,T){S._isLeaving=!0;const me=()=>w(S,T);hr(S,f),hr(S,p),bA(),pm(()=>{S._isLeaving&&(is(S,f),hr(S,g),dm(N)||mm(S,r,O,me))}),ss(N,[S,me])},onEnterCancelled(S){y(S,!1),ss(E,[S])},onAppearCancelled(S){y(S,!0),ss(_,[S])},onLeaveCancelled(S){w(S),ss(D,[S])}})}function vA(t){if(t==null)return null;if(xe(t))return[du(t.enter),du(t.leave)];{const e=du(t);return[e,e]}}function du(t){return by(t)}function hr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Do]||(t[Do]=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Do];n&&(n.delete(e),n.size||(t[Do]=void 0))}function pm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let EA=0;function mm(t,e,n,r){const s=t._endId=++EA,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=wA(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&f()};setTimeout(()=>{h<l&&f()},a+1),t.addEventListener(u,p)}function wA(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${ur}Delay`),i=r(`${ur}Duration`),o=gm(s,i),a=r(`${Gi}Delay`),l=r(`${Gi}Duration`),u=gm(a,l);let h=null,f=0,p=0;e===ur?o>0&&(h=ur,f=o,p=i.length):e===Gi?u>0&&(h=Gi,f=u,p=l.length):(f=Math.max(o,u),h=f>0?o>u?ur:Gi:null,p=h?h===ur?i.length:l.length:0);const g=h===ur&&/\b(transform|all)(,|$)/.test(r(`${ur}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:g}}function gm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>_m(n)+_m(t[r])))}function _m(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function bA(){return document.body.offsetHeight}function TA(t,e,n){const r=t[Do];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ym=Symbol("_vod"),IA=Symbol("_vsh"),AA=Symbol(""),RA=/(^|;)\s*display\s*:/;function SA(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&nc(r,a,"")}else for(const o in e)n[o]==null&&nc(r,o,"");for(const o in n)o==="display"&&(i=!0),nc(r,o,n[o])}else if(s){if(e!==n){const o=r[AA];o&&(n+=";"+o),r.cssText=n,i=RA.test(n)}}else e&&t.removeAttribute("style");ym in t&&(t[ym]=i?r.display:"",t[IA]&&(r.display="none"))}const vm=/\s*!important$/;function nc(t,e,n){if(le(n))n.forEach(r=>nc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=PA(t,e);vm.test(n)?t.setProperty(Cs(r),n.replace(vm,""),"important"):t[r]=n}}const Em=["Webkit","Moz","ms"],pu={};function PA(t,e){const n=pu[e];if(n)return n;let r=pn(e);if(r!=="filter"&&r in t)return pu[e]=r;r=Zc(r);for(let s=0;s<Em.length;s++){const i=Em[s]+r;if(i in t)return pu[e]=i}return e}const wm="http://www.w3.org/1999/xlink";function bm(t,e,n,r,s,i=RT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wm,e.slice(6,e.length)):t.setAttributeNS(wm,e,n):n==null||i&&!Iy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function CA(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Iy(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function br(t,e,n,r){t.addEventListener(e,n,r)}function kA(t,e,n,r){t.removeEventListener(e,n,r)}const Tm=Symbol("_vei");function OA(t,e,n,r,s=null){const i=t[Tm]||(t[Tm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=NA(e);if(r){const u=i[e]=LA(r,s);br(t,a,u,l)}else o&&(kA(t,a,o,l),i[e]=void 0)}}const Im=/(?:Once|Passive|Capture)$/;function NA(t){let e;if(Im.test(t)){e={};let r;for(;r=t.match(Im);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cs(t.slice(2)),e]}let mu=0;const xA=Promise.resolve(),DA=()=>mu||(xA.then(()=>mu=0),mu=Date.now());function LA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(MA(r,n.value),e,5,[r])};return n.value=t,n.attached=DA(),n}function MA(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Am=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,VA=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?TA(t,r,o):e==="style"?SA(t,n,r):Xo(e)?df(e)||OA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):FA(t,e,r,o))?(CA(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bm(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bm(t,e,r,o))};function FA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Am(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Am(e)&&Ke(n)?!1:e in t}const hi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Zs(e,n):e};function UA(t){t.target.composing=!0}function Rm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kn=Symbol("_assign"),HF={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kn]=hi(s);const i=r||s.props&&s.props.type==="number";br(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=_c(a)),t[Kn](a)}),n&&br(t,"change",()=>{t.value=t.value.trim()}),e||(br(t,"compositionstart",UA),br(t,"compositionend",Rm),br(t,"change",Rm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Kn]=hi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?_c(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},qF={deep:!0,created(t,e,n){t[Kn]=hi(n),br(t,"change",()=>{const r=t._modelValue,s=Lo(t),i=t.checked,o=t[Kn];if(le(r)){const a=gf(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Ai(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Vv(t,i))})},mounted:Sm,beforeUpdate(t,e,n){t[Kn]=hi(n),Sm(t,e,n)}};function Sm(t,{value:e,oldValue:n},r){t._modelValue=e,le(e)?t.checked=gf(e,r.props.value)>-1:Ai(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Zo(e,Vv(t,!0)))}const zF={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ai(e);br(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?_c(Lo(o)):Lo(o));t[Kn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,xn(()=>{t._assigning=!1})}),t[Kn]=hi(r)},mounted(t,{value:e,modifiers:{number:n}}){Pm(t,e)},beforeUpdate(t,e,n){t[Kn]=hi(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Pm(t,e)}};function Pm(t,e,n){const r=t.multiple,s=le(e);if(!(r&&!s&&!Ai(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=Lo(a);if(r)if(s){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=gf(e,l)>-1}else a.selected=e.has(l);else if(Zo(Lo(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lo(t){return"_value"in t?t._value:t.value}function Vv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const BA=["ctrl","shift","alt","meta"],jA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BA.some(n=>t[`${n}Key`]&&!e.includes(n))},WF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=jA[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Fv=ht({patchProp:VA},_A);let fo,Cm=!1;function $A(){return fo||(fo=UI(Fv))}function HA(){return fo=Cm?fo:BI(Fv),Cm=!0,fo}const qA=(...t)=>{const e=$A().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bv(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Uv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},zA=(...t)=>{const e=HA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bv(r);if(s)return n(s,!0,Uv(s))},e};function Uv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bv(t){return Ke(t)?document.querySelector(t):t}const WA=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,KA=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,GA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function QA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){YA(t);return}return e}function YA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Mo(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!GA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(WA.test(t)||KA.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,QA)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const XA=/#/g,JA=/&/g,ZA=/\//g,e1=/=/g,Vf=/\+/g,t1=/%5e/gi,n1=/%60/gi,r1=/%7c/gi,s1=/%20/gi;function i1(t){return encodeURI(""+t).replace(r1,"|")}function ah(t){return i1(typeof t=="string"?t:JSON.stringify(t)).replace(Vf,"%2B").replace(s1,"+").replace(XA,"%23").replace(JA,"%26").replace(n1,"`").replace(t1,"^").replace(ZA,"%2F")}function gu(t){return ah(t).replace(e1,"%3D")}function Rc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function o1(t){return Rc(t.replace(Vf," "))}function a1(t){return Rc(t.replace(Vf," "))}function jv(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=o1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=a1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function c1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${gu(t)}=${ah(n)}`).join("&"):`${gu(t)}=${ah(e)}`:gu(t)}function l1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>c1(e,t[e])).filter(Boolean).join("&")}const u1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,h1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,f1=/^([/\\]\s*){2,}[^/\\]/,d1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,p1=/\/$|\/\?|\/#/,m1=/^\.?\//;function nr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?u1.test(t):h1.test(t)||(e.acceptRelative?f1.test(t):!1)}function g1(t){return!!t&&d1.test(t)}function ch(t="",e){return e?p1.test(t):t.endsWith("/")}function hl(t="",e){if(!e)return(ch(t)?t.slice(0,-1):t)||"/";if(!ch(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Sc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ch(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function _1(t=""){return t.startsWith("/")}function km(t=""){return _1(t)?t:"/"+t}function y1(t,e){if(Hv(e)||nr(t))return t;const n=hl(e);return t.startsWith(n)?t:fl(n,t)}function Om(t,e){if(Hv(e))return t;const n=hl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function $v(t,e){const n=w1(t),r={...jv(n.search),...e};return n.search=l1(r),b1(n)}function Hv(t){return!t||t==="/"}function v1(t){return t&&t!=="/"}function fl(t,...e){let n=t||"";for(const r of e.filter(s=>v1(s)))if(n){const s=r.replace(m1,"");n=Sc(n)+s}else n=r;return n}function qv(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[f,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&nr(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function E1(t,e,n={}){return n.trailingSlash||(t=Sc(t),e=Sc(e)),n.leadingSlash||(t=km(t),e=km(e)),n.encoding||(t=Rc(t),e=Rc(e)),t===e}const zv=Symbol.for("ufo:protocolRelative");function w1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!nr(t,{acceptRelative:!0}))return Nm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=Nm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[zv]:!r}}function Nm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function b1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[zv]?(t.protocol||"")+"//":"")+s+i+e+n+r}class T1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function I1(t){var l,u,h,f,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((f=t.options)==null?void 0:f.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new T1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[I]}});return a}const A1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function xm(t="GET"){return A1.has(t.toUpperCase())}function R1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const S1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),P1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function C1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return P1.test(e)?"json":S1.has(e)||e.startsWith("text/")?"text":"blob"}function k1(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const O1=new Set([408,409,425,429,500,502,503,504]),N1=new Set([101,204,205,304]);function Wv(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=xm(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):O1.has(f))){const p=a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=I1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:k1(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=y1(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=$v(h.request,{...h.options.params,...h.options.query}))),h.options.body&&xm(h.options.method)&&(R1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const I=new r;f=setTimeout(()=>I.abort(),h.options.timeout),h.options.signal=I.signal}try{h.response=await e(h.request,h.options)}catch(I){return h.error=I,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{f&&clearTimeout(f)}if(h.response.body&&!N1.has(h.response.status)&&h.options.method!=="HEAD"){const I=(h.options.parseResponse?"json":h.options.responseType)||C1(h.response.headers.get("content-type")||"");switch(I){case"json":{const P=await h.response.text(),O=h.options.parseResponse||Mo;h.response._data=O(P);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[I]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>Wv({...t,defaults:{...t.defaults,...a}}),o}const Ff=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),x1=Ff.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),D1=Ff.Headers,L1=Ff.AbortController,M1=Wv({fetch:x1,Headers:D1,AbortController:L1}),V1=M1,F1=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Pc=F1().app,U1=()=>Pc.baseURL,B1=()=>Pc.buildAssetsDir,Uf=(...t)=>qv(Bf(),B1(),...t),Bf=(...t)=>{const e=Pc.cdnURL||Pc.baseURL;return t.length?qv(e,...t):e};globalThis.__buildAssetsURL=Uf,globalThis.__publicAssetsURL=Bf;globalThis.$fetch||(globalThis.$fetch=V1.create({baseURL:U1()}));function lh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?lh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const j1={run:t=>t()},$1=()=>j1,Kv=typeof console.createTask<"u"?console.createTask:$1;function H1(t,e){const n=e.shift(),r=Kv(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function q1(t,e){const n=e.shift(),r=Kv(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function _u(t,e){for(const n of[...t])n(e)}class z1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=lh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=lh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(H1,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(q1,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&_u(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&_u(this._after,s)}):(this._after&&s&&_u(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Gv(){return new z1}function W1(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;uh.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{uh.delete(u)}}}}function K1(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=W1({...t,...r})),e[n],e[n]}}}const Cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Dm="__unctx__",G1=Cc[Dm]||(Cc[Dm]=K1()),Q1=(t,e={})=>G1.get(t,e),Lm="__unctx_async_handlers__",uh=Cc[Lm]||(Cc[Lm]=new Set);function Vo(t){const e=[];for(const s of uh){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const hh={name:"page",mode:"out-in"},Y1=!1,X1=!1,J1={componentName:"NuxtLink"},Z1=null,eR="#__nuxt",Qv="nuxt-app",Mm=36e5;function Yv(t=Qv){return Q1(t,{asyncContext:!1})}const tR="__nuxt_plugin";function nR(t){let e=0;const n={_name:Qv,_scope:yf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.12.4"},get vue(){return n.vueApp.version}},payload:jn({data:jn({}),state:Yr({}),once:new Set,_errors:jn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!ea()?n._scope.run(()=>Vm(n,s)):Vm(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:jn({}),_payloadRevivers:{},...t};if(window.__NUXT__)for(const s in window.__NUXT__)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],window.__NUXT__[s]);break;default:n.payload[s]=window.__NUXT__[s]}n.hooks=Gv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;$a(n,o,i),$a(n.vueApp.config.globalProperties,o,i)},$a(n.vueApp,"$nuxt",n),$a(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Me;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function rR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function sR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function iR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(f=>e.some(p=>p._name===f)&&!n.includes(f)))??[];if(u.length>0)r.push([new Set(u),l]);else{const f=sR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(f.catch(p=>i.push(p))):await f}}for(const l of e)rR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Yt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[tR]:!0,_name:e})}function Vm(t,e,n){const r=()=>e();return Yv(t._name).set(t),t.vueApp.runWithContext(r)}function oR(t){var n;let e;return Of()&&(e=(n=al())==null?void 0:n.appContext.app.$nuxt),e=e||Yv(t).tryUse(),e||null}function Me(t){const e=oR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function ks(t){return Me().$config}function $a(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function aR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||cR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=lR(u,s)}i=a+1}return n}function cR(t){return t.includes("%")?decodeURIComponent(t):t}function lR(t,e){try{return e(t)}catch{return t}}const Ha=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Fm(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Ha.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Ha.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ha.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ha.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!uR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function uR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Um=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Bm(t,e){e?e={...Um,...e}:e=Um;const n=Xv(e);return n.dispatch(t),n.toString()}const hR=Object.freeze(["prototype","__proto__","constructor"]);function Xv(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!jm(s)&&(h=hR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const f=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)f(p);for(const p of h)f(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=Xv(t);u.dispatch(l);for(const[h,f]of u.getContext())o.set(h,f);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),jm(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const Jv="[native code] }",fR=Jv.length;function jm(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-fR)===Jv}function dR(t,e,n={}){return t===e||Bm(t,n)===Bm(e,n)}function pR(t,e){return{ctx:{table:t},matchAll:n=>eE(n,t)}}function Zv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Zv(s)])):new Map(Object.entries(t[n]));return e}function mR(t){return pR(Zv(t))}function eE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of $m(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of $m(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...eE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function $m(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function yu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function fh(t,e,n=".",r){if(!yu(e))return fh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:yu(o)&&yu(s[i])?s[i]=fh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function gR(t){return(...e)=>e.reduce((n,r)=>fh(n,r,"",t),{})}const tE=gR();function _R(t,e){try{return e in t}catch{return!1}}var yR=Object.defineProperty,vR=(t,e,n)=>e in t?yR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,os=(t,e,n)=>(vR(t,typeof e!="symbol"?e+"":e,n),n);class dh extends Error{constructor(e,n={}){super(e,n),os(this,"statusCode",500),os(this,"fatal",!1),os(this,"unhandled",!1),os(this,"statusMessage"),os(this,"data"),os(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:mh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=nE(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}os(dh,"__h3_error__",!0);function ph(t){if(typeof t=="string")return new dh(t);if(ER(t))return t;const e=new dh(t.message??t.statusMessage??"",{cause:t.cause||t});if(_R(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=mh(t.statusCode,e.statusCode):t.status&&(e.statusCode=mh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;nE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function ER(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const wR=/[^\u0009\u0020-\u007E]/g;function nE(t=""){return t.replace(wR,"")}function mh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const rE=Symbol("layout-meta"),sa=Symbol("route"),yt=()=>{var t;return(t=Me())==null?void 0:t.$router},jf=()=>Of()?Rt(sa,Me()._route):Me()._route;function KF(t){return t}const bR=()=>{try{if(Me()._processingMiddleware)return!0}catch{return!1}return!1},TR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?gh(t):yt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([f,p])=>p!==void 0).map(([f,p])=>`${f.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=nr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&g1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=bR();if(!s&&i)return t;const o=yt(),a=Me();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function gh(t){return $v(t.path||"",t.query||{})+(t.hash||"")}const sE="__nuxt_error",dl=()=>rI(Me().payload,"error"),Ks=t=>{const e=pl(t);try{const n=Me(),r=dl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},iE=async(t={})=>{const e=Me(),n=dl();e.callHook("app:error:cleared",t),t.redirect&&await yt().replace(t.redirect),n.value=Z1},IR=t=>!!t&&typeof t=="object"&&sE in t,pl=t=>{const e=ph(t);return Object.defineProperty(e,sE,{value:!0,configurable:!1,writable:!1}),e},AR=-1,RR=-2,SR=-3,PR=-4,CR=-5,kR=-6;function OR(t,e){return NR(JSON.parse(t),e)}function NR(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===AR)return;if(i===SR)return NaN;if(i===PR)return 1/0;if(i===CR)return-1/0;if(i===kR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const f=new Map;r[i]=f;for(let g=1;g<a.length;g+=2)f.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==RR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const xR=new Set(["title","titleTemplate","script","style","noscript"]),rc=new Set(["base","meta","link","style","script","noscript"]),DR=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),LR=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),oE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),MR=typeof window<"u";function kc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Hm(t){if(t._h)return t._h;if(t._d)return kc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${t.props[n]},`;return kc(e)}const VR=["name","property","http-equiv"];function aE(t){const{props:e,tag:n}=t;if(LR.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of VR)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}function qm(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function FR(t,e){return t instanceof Promise?t.then(e):e(t)}function _h(t,e,n,r){const s=r||lE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>_h(t,e,n,o));const i={tag:t,props:s};for(const o of oE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||xR.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function UR(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function cE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=UR(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,cE(t,e,n,s)));if(!e&&!oE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function lE(t,e=!1){const n=cE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const BR=10;function uE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,uE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function jR(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!DR.has(s))){if(Array.isArray(i)){for(const o of i)e.push(_h(s,o,t));continue}e.push(_h(s,i,t))}}if(e.length===0)return[];const r=[];return FR(uE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<BR)+i,s)))}const zm={base:-10,title:10},Wm={critical:-80,high:-10,low:20};function Oc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in zm&&(n=zm[t.tag]),e&&e in Wm?n+Wm[e]:n}const $R=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Km=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),yr="%separator";function HR(t,e){var r;let n;if(e==="s"||e==="pageTitle")n=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");n=(r=t[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else n=t[e];return n!==void 0?(n||"").replace(/"/g,'\\"'):void 0}const qR=new RegExp(`${yr}(?:\\s*${yr})*`,"g");function vu(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const i=t.includes(yr);return t=t.replace(/%\w+(?:\.\w+)?/g,o=>{if(o===yr||!s.includes(o))return o;const a=HR(e,o.slice(1));return a!==void 0?a:o}).trim(),i&&(t.endsWith(yr)&&(t=t.slice(0,-yr.length)),t.startsWith(yr)&&(t=t.slice(yr.length)),t=t.replace(qR,n).trim()),t}async function zR(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(f=>({tag:f,id:rc.has(f.tag)?Hm(f):f.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const p of["body","head"]){const g=(h=n[p])==null?void 0:h.children;for(const I of g){const P=I.tagName.toLowerCase();if(!rc.has(P))continue;const O={tag:P,props:await lE(I.getAttributeNames().reduce((N,D)=>({...N,[D]:I.getAttribute(D)}),{})),innerHTML:I.innerHTML},x=aE(O);let A=x,E=1;for(;A&&f.has(A);)A=`${x}:${E++}`;A&&(O._d=A,f.add(A)),i.elMap[I.getAttribute("data-hid")||Hm(O)]=I}}}i.pendingSideEffects={...i.sideEffects},i.sideEffects={};function o(f,p,g){const I=`${f}:${p}`;i.sideEffects[I]=g,delete i.pendingSideEffects[I]}function a({id:f,$el:p,tag:g}){const I=g.tag.endsWith("Attrs");if(i.elMap[f]=p,I||(g.textContent&&g.textContent!==p.textContent&&(p.textContent=g.textContent),g.innerHTML&&g.innerHTML!==p.innerHTML&&(p.innerHTML=g.innerHTML),o(f,"el",()=>{var P;(P=i.elMap[f])==null||P.remove(),delete i.elMap[f]})),g._eventHandlers)for(const P in g._eventHandlers)Object.prototype.hasOwnProperty.call(g._eventHandlers,P)&&p.getAttribute(`data-${P}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:p).addEventListener(P.substring(2),g._eventHandlers[P].bind(p)),p.setAttribute(`data-${P}`,""));for(const P in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,P))continue;const O=g.props[P],x=`attr:${P}`;if(P==="class"){if(!O)continue;for(const A of O.split(" "))I&&o(f,`${x}:${A}`,()=>p.classList.remove(A)),!p.classList.contains(A)&&p.classList.add(A)}else if(P==="style"){if(!O)continue;for(const A of O.split(";")){const E=A.indexOf(":"),N=A.substring(0,E).trim(),D=A.substring(E+1).trim();o(f,`${x}:${N}`,()=>{p.style.removeProperty(N)}),p.style.setProperty(N,D)}}else p.getAttribute(P)!==O&&p.setAttribute(P,O===!0?"":String(O)),I&&o(f,x,()=>p.removeAttribute(P))}}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:p,shouldRender:g,id:I}=f;if(g){if(p.tag==="title"){n.title=p.textContent;continue}f.$el=f.$el||i.elMap[I],f.$el?a(f):rc.has(p.tag)&&l.push(f)}}for(const f of l){const p=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),u[p]=u[p]||n.createDocumentFragment(),u[p].appendChild(f.$el)}for(const f of s)await t.hooks.callHook("dom:renderTag",f,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const f in i.pendingSideEffects)i.pendingSideEffects[f]();t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}function WR(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(()=>zR(t,e).then(()=>{delete t._domUpdatePromise,r()})))}function KR(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{WR(i,t)}}}}}const GR=new Set(["templateParams","htmlAttrs","bodyAttrs"]),QR={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const n=aE(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&GR.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Oc(r)>Oc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&rc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},YR={mode:"server",hooks:{"tags:resolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},XR=new Set(["script","link","bodyAttrs"]),JR=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!XR.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&Km.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||kc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);Km.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),ZR=new Set(["link","style","script","noscript"]),eS={hooks:{"tag:normalise":({tag:t})=>{t.key&&ZR.has(t.tag)&&(t.props["data-hid"]=t._h=kc(t.key))}}},tS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of $R){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Oc(n),i=Oc(r);return s<i?-1:s>i?1:n._p-r._p})}}},nS={meta:"content",link:"href",htmlAttrs:"lang"},rS=["innerHTML","textContent"],sS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=vu(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=nS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=vu(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of rS)typeof a[u]=="string"&&(a[u]=vu(a[u],s,i))}t._templateParams=s,t._separator=i}}}),iS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=qm(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=qm(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},oS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let hE;function aS(t={}){const e=cS(t);return e.use(KR()),hE=e}function Gm(t,e){return!t||t==="server"&&e||t==="client"&&!e}function cS(t={}){const e=Gv();e.addHooks(t.hooks||{}),t.document=t.document||(MR?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),Gm(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return Gm(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(f=>f._i!==h._i),e.callHook("entries:updated",a),r()},patch(f){for(const p of i)p._i===h._i&&(p.input=h.input=f);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const f of await jR(u)){const p={tag:f,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[QR,YR,JR,eS,tS,sS,iS,oS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function lS(){return hE}const uS=Lv[0]==="3";function hS(t){return typeof t=="function"?t():et(t)}function Nc(t){if(t instanceof Promise)return t;const e=hS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Nc(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=et(e[r]);continue}n[r]=Nc(e[r])}return n}return e}const fS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Nc(e.input)}}},fE="usehead";function dS(t){return{install(n){uS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(fE,t))}}.install}function pS(t={}){t.domDelayFn=t.domDelayFn||(n=>xn(()=>setTimeout(()=>n(),0)));const e=aS(t);return e.use(fS),e.install=dS(e),e}const yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vh="__unhead_injection_handler__";function mS(t){yh[vh]=t}function gS(){if(vh in yh)return yh[vh]();const t=Rt(fE);return t||lS()}function Qm(t,e={}){const n=e.head||gS();if(n)return n.ssr?n.push(t,e):_S(n,t,e)}function _S(t,e,n={}){const r=Bt(!1),s=Bt({});qI(()=>{s.value=r.value?{}:Nc(e)});const i=t.push(s.value,n);return dn(s,a=>{i.patch(a)}),al()&&(na(()=>{i.dispose()}),tv(()=>{r.value=!0}),ev(()=>{r.value=!1})),i}let sc,ic;function yS(){return sc=$fetch(Uf(`builds/meta/${ks().app.buildId}.json`),{responseType:"json"}),sc.then(t=>{ic=mR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),sc}function ml(){return sc||yS()}async function $f(t){if(await ml(),!ic)return console.error("[nuxt] Error creating app manifest matcher.",ic),{};try{return tE({},...ic.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function Ym(t,e={}){const n=await ES(t,e),r=Me(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=pE(t).then(i=>i?dE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const vS="_payload.json";async function ES(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||nr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=ks(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await pE(t)?i:r.app.baseURL;return fl(o,n.pathname,vS+(s?`?${s}`:""))}async function dE(t){const e=fetch(t).then(n=>n.text().then(mE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function pE(t=jf().path){if(t=hl(t),(await ml()).prerendered.includes(t))return!0;const n=await $f(t);return!!n.prerender&&!n.redirect}let qa=null;async function wS(){if(qa)return qa;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await mE(t.textContent||""),n=t.dataset.src?await dE(t.dataset.src):void 0;return qa={...e,...n,...window.__NUXT__},qa}async function mE(t){return await OR(t,Me()._payloadRevivers)}function bS(t,e){Me()._payloadRevivers[t]=e}const Xm={NuxtError:t=>pl(t),EmptyShallowRef:t=>So(t==="_"?void 0:t==="0n"?BigInt(0):Mo(t)),EmptyRef:t=>Bt(t==="_"?void 0:t==="0n"?BigInt(0):Mo(t)),ShallowRef:t=>So(t),ShallowReactive:t=>jn(t),Ref:t=>Bt(t),Reactive:t=>Yr(t)},TS=Yt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in Xm)bS(r,Xm[r]);Object.assign(t.payload,([e,n]=Vo(()=>t.runWithContext(wS)),e=await e,n(),e)),window.__NUXT__=t.payload}}),Eu=["base","meta","link","style","script","noscript"],IS=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],AS=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"];function RS(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Jm(t){return t._h||RS(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function SS(t,e){const{props:n,tag:r}=t;if(IS.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return`${r}:${i}:${o}`}return!1}function PS(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>s.trim()).filter(Boolean).join(n)}async function CS(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=PS(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!AS.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}async function kS(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(f=>({tag:f,id:Eu.includes(f.tag)?Jm(f):f.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const f of["body","head"]){const p=(h=n[f])==null?void 0:h.children,g=[];for(const I of[...p].filter(P=>Eu.includes(P.tagName.toLowerCase()))){const P={tag:I.tagName.toLowerCase(),props:await CS(I.getAttributeNames().reduce((A,E)=>({...A,[E]:I.getAttribute(E)}),{})),innerHTML:I.innerHTML};let O=1,x=SS(P);for(;x&&g.find(A=>A._d===x);)x=`${x}:${O++}`;P._d=x||void 0,g.push(P),i.elMap[I.getAttribute("data-hid")||Jm(P)]=I}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(f,p,g){const I=`${f}:${p}`;i.sideEffects[I]=g,delete i.pendingSideEffects[I]}function a({id:f,$el:p,tag:g}){const I=g.tag.endsWith("Attrs");i.elMap[f]=p,I||(["textContent","innerHTML"].forEach(P=>{g[P]&&g[P]!==p[P]&&(p[P]=g[P])}),o(f,"el",()=>{var P;(P=i.elMap[f])==null||P.remove(),delete i.elMap[f]}));for(const[P,O]of Object.entries(g._eventHandlers||{}))p.getAttribute(`data-${P}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:p).addEventListener(P.replace("on",""),O.bind(p)),p.setAttribute(`data-${P}`,""));Object.entries(g.props).forEach(([P,O])=>{const x=`attr:${P}`;if(P==="class")for(const A of(O||"").split(" ").filter(Boolean))I&&o(f,`${x}:${A}`,()=>p.classList.remove(A)),!p.classList.contains(A)&&p.classList.add(A);else if(P==="style")for(const A of(O||"").split(";").filter(Boolean)){const[E,...N]=A.split(":").map(D=>D.trim());o(f,`${x}:${E}`,()=>{p.style.removeProperty(E)}),p.style.setProperty(E,N.join(":"))}else p.getAttribute(P)!==O&&p.setAttribute(P,O===!0?"":String(O)),I&&o(f,x,()=>p.removeAttribute(P))})}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:p,shouldRender:g,id:I}=f;if(g){if(p.tag==="title"){n.title=p.textContent;continue}f.$el=f.$el||i.elMap[I],f.$el?a(f):Eu.includes(p.tag)&&l.push(f)}}for(const f of l){const p=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),u[p]=u[p]||n.createDocumentFragment(),u[p].appendChild(f.$el)}for(const f of s)await t.hooks.callHook("dom:renderTag",f,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(i.pendingSideEffects).forEach(f=>f()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}const OS=[],NS=Yt({name:"nuxt:head",enforce:"pre",setup(t){const e=pS({plugins:OS});mS(()=>Me().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await kS(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Hs=typeof document<"u";function xS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function wu(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const po=()=>{},mn=Array.isArray,gE=/#/g,DS=/&/g,LS=/\//g,MS=/=/g,VS=/\?/g,_E=/\+/g,FS=/%5B/g,US=/%5D/g,yE=/%5E/g,BS=/%60/g,vE=/%7B/g,jS=/%7C/g,EE=/%7D/g,$S=/%20/g;function Hf(t){return encodeURI(""+t).replace(jS,"|").replace(FS,"[").replace(US,"]")}function HS(t){return Hf(t).replace(vE,"{").replace(EE,"}").replace(yE,"^")}function Eh(t){return Hf(t).replace(_E,"%2B").replace($S,"+").replace(gE,"%23").replace(DS,"%26").replace(BS,"`").replace(vE,"{").replace(EE,"}").replace(yE,"^")}function qS(t){return Eh(t).replace(MS,"%3D")}function zS(t){return Hf(t).replace(gE,"%23").replace(VS,"%3F")}function WS(t){return t==null?"":zS(t).replace(LS,"%2F")}function Fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const KS=/\/$/,GS=t=>t.replace(KS,"");function bu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=JS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fo(o)}}function QS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fi(e.matched[r],n.matched[s])&&wE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XS(t[n],e[n]))return!1;return!0}function XS(t,e){return mn(t)?eg(t,e):mn(e)?eg(e,t):t===e}function eg(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function JS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Uo;(function(t){t.pop="pop",t.push="push"})(Uo||(Uo={}));var mo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mo||(mo={}));function ZS(t){if(!t)if(Hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GS(t)}const eP=/^[^#]+#/;function tP(t,e){return t.replace(eP,"#")+e}function nP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const gl=()=>({left:window.scrollX,top:window.scrollY});function rP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=nP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tg(t,e){return(history.state?history.state.position-e:-1)+t}const wh=new Map;function sP(t,e){wh.set(t,e)}function iP(t){const e=wh.get(t);return wh.delete(t),e}let oP=()=>location.protocol+"//"+location.host;function bE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Zm(l,"")}return Zm(n,t)+r+s}function aP(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=bE(t,location),I=n.value,P=e.value;let O=0;if(p){if(n.value=g,e.value=p,o&&o===I){o=null;return}O=P?p.position-P.position:0}else r(g);s.forEach(x=>{x(n.value,I,{delta:O,type:Uo.pop,direction:O?O>0?mo.forward:mo.back:mo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const I=s.indexOf(p);I>-1&&s.splice(I,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:gl()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function ng(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?gl():null}}function cP(t){const{history:e,location:n}=window,r={value:bE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:oP()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Oe({},e.state,ng(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:gl()});i(h.current,h,!0);const f=Oe({},ng(r.value,l,null),{position:h.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function TE(t){t=ZS(t);const e=cP(t),n=aP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:tP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),TE(t)}function uP(t){return typeof t=="string"||t&&typeof t=="object"}function IE(t){return typeof t=="string"||typeof t=="symbol"}const AE=Symbol("");var rg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rg||(rg={}));function di(t,e){return Oe(new Error,{type:t,[AE]:!0},e)}function Fn(t,e){return t instanceof Error&&AE in t&&(e==null||!!(t.type&e))}const sg="[^/]+?",hP={sensitive:!1,strict:!1,start:!0,end:!0},fP=/[.+*?^${}()[\]/\\]/g;function dP(t,e){const n=Oe({},hP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(fP,"\\$&"),g+=40;else if(p.type===1){const{value:I,repeatable:P,optional:O,regexp:x}=p;i.push({name:I,repeatable:P,optional:O});const A=x||sg;if(A!==sg){g+=10;try{new RegExp(`(${A})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${I}" (${A}): `+N.message)}}let E=P?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(E=O&&u.length<2?`(?:/${E})`:"/"+E),O&&(E+="?"),s+=E,g+=20,O&&(g+=-8),P&&(g+=-20),A===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",I=i[p-1];f[I.name]=g&&I.repeatable?g.split("/"):g}return f}function l(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:I,repeatable:P,optional:O}=g,x=I in u?u[I]:"";if(mn(x)&&!P)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const A=mn(x)?x.join("/"):x;if(!A)if(O)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);h+=A}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function pP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function RE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=pP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ig(r))return 1;if(ig(s))return-1}return s.length-r.length}function ig(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mP={type:0,value:""},gP=/[a-zA-Z0-9_]/;function _P(t){if(!t)return[[]];if(t==="/")return[[mP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:gP.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function yP(t,e,n){const r=dP(_P(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vP(t,e){const n=[],r=new Map;e=cg({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const I=!g,P=EP(f);P.aliasOf=g&&g.record;const O=cg(e,f),x=[P];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of N)x.push(Oe({},P,{components:g?g.record.components:P.components,path:D,aliasOf:g?g.record:P}))}let A,E;for(const N of x){const{path:D}=N;if(p&&D[0]!=="/"){const M=p.record.path,b=M[M.length-1]==="/"?"":"/";N.path=p.record.path+(D&&b+D)}if(A=yP(N,p,O),g?g.alias.push(A):(E=E||A,E!==A&&E.alias.push(A),I&&f.name&&!ag(A)&&o(f.name)),SE(A)&&l(A),P.children){const M=P.children;for(let b=0;b<M.length;b++)i(M[b],A,g&&g.children[b])}g=g||A}return E?()=>{o(E)}:po}function o(f){if(IE(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const p=TP(f,n);n.splice(p,0,f),f.record.name&&!ag(f)&&r.set(f.record.name,f)}function u(f,p){let g,I={},P,O;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw di(1,{location:f});O=g.record.name,I=Oe(og(p.params,g.keys.filter(E=>!E.optional).concat(g.parent?g.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&og(f.params,g.keys.map(E=>E.name))),P=g.stringify(I)}else if(f.path!=null)P=f.path,g=n.find(E=>E.re.test(P)),g&&(I=g.parse(P),O=g.record.name);else{if(g=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!g)throw di(1,{location:f,currentLocation:p});O=g.record.name,I=Oe({},p.params,f.params),P=g.stringify(I)}const x=[];let A=g;for(;A;)x.unshift(A.record),A=A.parent;return{name:O,path:P,params:I,matched:x,meta:bP(x)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function og(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function EP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ag(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function cg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function TP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;RE(t,e[i])<0?r=i:n=i+1}const s=IP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function IP(t){let e=t;for(;e=e.parent;)if(SE(e)&&RE(t,e)===0)return e}function SE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function AP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_E," "),o=i.indexOf("="),a=Fo(o<0?i:i.slice(0,o)),l=o<0?null:Fo(i.slice(o+1));if(a in e){let u=e[a];mn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function lg(t){let e="";for(let n in t){const r=t[n];if(n=qS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&Eh(i)):[r&&Eh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function RP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const SP=Symbol(""),ug=Symbol(""),qf=Symbol(""),zf=Symbol(""),bh=Symbol("");function Qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(di(4,{from:n,to:e})):p instanceof Error?l(p):uP(p)?l(di(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function Tu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(PP(l)){const h=(l.__vccOpts||l)[e];h&&i.push(vr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=xS(h)?h.default:h;o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&vr(g,n,r,o,a,s)()}))}}return i}function PP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hg(t){const e=Rt(qf),n=Rt(zf),r=Le(()=>{const l=et(t.to);return e.resolve(l)}),s=Le(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(fi.bind(null,h));if(p>-1)return p;const g=fg(l[u-2]);return u>1&&fg(h)===g&&f[f.length-1].path!==g?f.findIndex(fi.bind(null,l[u-2])):p}),i=Le(()=>s.value>-1&&NP(n.params,r.value.params)),o=Le(()=>s.value>-1&&s.value===n.matched.length-1&&wE(n.params,r.value.params));function a(l={}){return OP(l)?e[et(t.replace)?"replace":"push"](et(t.to)).catch(po):Promise.resolve()}return{route:r,href:Le(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const CP=Dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hg,setup(t,{slots:e}){const n=Yr(hg(t)),{options:r}=Rt(qf),s=Le(()=>({[dg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:gt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kP=CP;function OP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dg=(t,e,n)=>t??e??n,xP=Dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Rt(bh),s=Le(()=>t.route||r.value),i=Rt(ug,0),o=Le(()=>{let u=et(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Le(()=>s.value.matched[o.value]);ms(ug,Le(()=>o.value+1)),ms(SP,a),ms(bh,s);const l=Bt();return dn(()=>[l.value,a.value,t.name],([u,h,f],[p,g,I])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!fi(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return pg(n.default,{Component:p,route:u});const g=f.props[h],I=g?g===!0?u.params:typeof g=="function"?g(u):g:null,O=gt(p,Oe({},I,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return pg(n.default,{Component:O,route:u})||O}}});function pg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const PE=xP;function DP(t){const e=vP(t.routes,t),n=t.parseQuery||AP,r=t.stringifyQuery||lg,s=t.history,i=Qi(),o=Qi(),a=Qi(),l=So(un);let u=un;Hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=wu.bind(null,B=>""+B),f=wu.bind(null,WS),p=wu.bind(null,Fo);function g(B,Z){let Y,ee;return IE(B)?(Y=e.getRecordMatcher(B),ee=Z):ee=B,e.addRoute(ee,Y)}function I(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function P(){return e.getRoutes().map(B=>B.record)}function O(B){return!!e.getRecordMatcher(B)}function x(B,Z){if(Z=Oe({},Z||l.value),typeof B=="string"){const k=bu(n,B,Z.path),V=e.resolve({path:k.path},Z),j=s.createHref(k.fullPath);return Oe(k,V,{params:p(V.params),hash:Fo(k.hash),redirectedFrom:void 0,href:j})}let Y;if(B.path!=null)Y=Oe({},B,{path:bu(n,B.path,Z.path).path});else{const k=Oe({},B.params);for(const V in k)k[V]==null&&delete k[V];Y=Oe({},B,{params:f(k)}),Z.params=f(Z.params)}const ee=e.resolve(Y,Z),Ee=B.hash||"";ee.params=h(p(ee.params));const Ne=QS(r,Oe({},B,{hash:HS(Ee),path:ee.path})),R=s.createHref(Ne);return Oe({fullPath:Ne,hash:Ee,query:r===lg?RP(B.query):B.query||{}},ee,{redirectedFrom:void 0,href:R})}function A(B){return typeof B=="string"?bu(n,B,l.value.path):Oe({},B)}function E(B,Z){if(u!==B)return di(8,{from:Z,to:B})}function N(B){return b(B)}function D(B){return N(Oe(A(B),{replace:!0}))}function M(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ee=typeof Y=="function"?Y(B):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=A(ee):{path:ee},ee.params={}),Oe({query:B.query,hash:B.hash,params:ee.path!=null?{}:B.params},ee)}}function b(B,Z){const Y=u=x(B),ee=l.value,Ee=B.state,Ne=B.force,R=B.replace===!0,k=M(Y);if(k)return b(Oe(A(k),{state:typeof k=="object"?Oe({},Ee,k.state):Ee,force:Ne,replace:R}),Z||Y);const V=Y;V.redirectedFrom=Z;let j;return!Ne&&YS(r,ee,Y)&&(j=di(16,{to:V,from:ee}),Jt(ee,ee,!0,!1)),(j?Promise.resolve(j):w(V,ee)).catch(U=>Fn(U)?Fn(U,2)?U:cn(U):ie(U,V,ee)).then(U=>{if(U){if(Fn(U,2))return b(Oe({replace:R},A(U.to),{state:typeof U.to=="object"?Oe({},Ee,U.to.state):Ee,force:Ne}),Z||V)}else U=S(V,ee,!0,R,Ee);return C(V,ee,U),U})}function _(B,Z){const Y=E(B,Z);return Y?Promise.reject(Y):Promise.resolve()}function y(B){const Z=sr.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function w(B,Z){let Y;const[ee,Ee,Ne]=LP(B,Z);Y=Tu(ee.reverse(),"beforeRouteLeave",B,Z);for(const k of ee)k.leaveGuards.forEach(V=>{Y.push(vr(V,B,Z))});const R=_.bind(null,B,Z);return Y.push(R),xt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(vr(k,B,Z));return Y.push(R),xt(Y)}).then(()=>{Y=Tu(Ee,"beforeRouteUpdate",B,Z);for(const k of Ee)k.updateGuards.forEach(V=>{Y.push(vr(V,B,Z))});return Y.push(R),xt(Y)}).then(()=>{Y=[];for(const k of Ne)if(k.beforeEnter)if(mn(k.beforeEnter))for(const V of k.beforeEnter)Y.push(vr(V,B,Z));else Y.push(vr(k.beforeEnter,B,Z));return Y.push(R),xt(Y)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),Y=Tu(Ne,"beforeRouteEnter",B,Z,y),Y.push(R),xt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(vr(k,B,Z));return Y.push(R),xt(Y)}).catch(k=>Fn(k,8)?k:Promise.reject(k))}function C(B,Z,Y){a.list().forEach(ee=>y(()=>ee(B,Z,Y)))}function S(B,Z,Y,ee,Ee){const Ne=E(B,Z);if(Ne)return Ne;const R=Z===un,k=Hs?history.state:{};Y&&(ee||R?s.replace(B.fullPath,Oe({scroll:R&&k&&k.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,Jt(B,Z,Y,R),cn()}let T;function me(){T||(T=s.listen((B,Z,Y)=>{if(!_n.listening)return;const ee=x(B),Ee=M(ee);if(Ee){b(Oe(Ee,{replace:!0}),ee).catch(po);return}u=ee;const Ne=l.value;Hs&&sP(tg(Ne.fullPath,Y.delta),gl()),w(ee,Ne).catch(R=>Fn(R,12)?R:Fn(R,2)?(b(R.to,ee).then(k=>{Fn(k,20)&&!Y.delta&&Y.type===Uo.pop&&s.go(-1,!1)}).catch(po),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ie(R,ee,Ne))).then(R=>{R=R||S(ee,Ne,!1),R&&(Y.delta&&!Fn(R,8)?s.go(-Y.delta,!1):Y.type===Uo.pop&&Fn(R,20)&&s.go(-1,!1)),C(ee,Ne,R)}).catch(po)}))}let ye=Qi(),J=Qi(),te;function ie(B,Z,Y){cn(B);const ee=J.list();return ee.length?ee.forEach(Ee=>Ee(B,Z,Y)):console.error(B),Promise.reject(B)}function qe(){return te&&l.value!==un?Promise.resolve():new Promise((B,Z)=>{ye.add([B,Z])})}function cn(B){return te||(te=!B,me(),ye.list().forEach(([Z,Y])=>B?Y(B):Z()),ye.reset()),B}function Jt(B,Z,Y,ee){const{scrollBehavior:Ee}=t;if(!Hs||!Ee)return Promise.resolve();const Ne=!Y&&iP(tg(B.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return xn().then(()=>Ee(B,Z,Ne)).then(R=>R&&rP(R)).catch(R=>ie(R,B,Z))}const ze=B=>s.go(B);let We;const sr=new Set,_n={currentRoute:l,listening:!0,addRoute:g,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:P,resolve:x,options:t,push:N,replace:D,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:qe,install(B){const Z=this;B.component("RouterLink",kP),B.component("RouterView",PE),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>et(l)}),Hs&&!We&&l.value===un&&(We=!0,N(s.location).catch(Ee=>{}));const Y={};for(const Ee in un)Object.defineProperty(Y,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(qf,Z),B.provide(zf,jn(Y)),B.provide(bh,l);const ee=B.unmount;sr.add(B),B.unmount=function(){sr.delete(B),sr.size<1&&(u=un,T&&T(),T=null,l.value=un,We=!1,te=!1),ee()}}};function xt(B){return B.reduce((Z,Y)=>Z.then(()=>y(Y)),Promise.resolve())}return _n}function LP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>fi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>fi(u,l))||s.push(l))}return[n,r,s]}function MP(t){return Rt(zf)}const VP=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Th=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&VP(t.route,n));return typeof r=="function"?r(t.route):r},FP=(t,e)=>({default:()=>t?gt(fI,t===!0?{}:t,e):e});function Wf(t){return Array.isArray(t)?t:[t]}const UP="modulepreload",BP=function(t,e){return t[0]==="."?new URL(t,e).href:t},mg={},jP=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=BP(l,r),l in mg)return;mg[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const I=i[g];if(I.href===l&&(!u||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":UP,u||(p.as="script",p.crossOrigin=""),p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((g,I)=>{p.addEventListener("load",g),p.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ce=(...t)=>jP(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),$P={middleware:"auth"},HP={middleware:"auth"},qP={middleware:"auth"},gg=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Ce(()=>import("./SrtvEIKK.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Ce(()=>import("./BAEYuCSC.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Ce(()=>import("./Dkugig1S.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Home",path:"/Admin/Home",meta:$P||{},component:()=>Ce(()=>import("./COT8GIu3.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default||t)},{name:"Admin",path:"/Admin",meta:HP||{},component:()=>Ce(()=>import("./Cwj4XDum.js"),__vite__mapDeps([3,4]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Ce(()=>import("./Bj87jGp-.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Ce(()=>import("./BXFYA9ig.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:qP||{},component:()=>Ce(()=>import("./CzEERmEB.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Ce(()=>import("./0y-lLM22.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Ce(()=>import("./BNFcxGZc.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Ce(()=>import("./D1oUKcTx.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Ce(()=>import("./DCJhRiI_.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Ce(()=>import("./qita23id.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Bio",path:"/Bio",component:()=>Ce(()=>import("./B2hv4IY9.js"),__vite__mapDeps([12,13]),import.meta.url).then(t=>t.default||t)},{name:"Contact",path:"/Contact",component:()=>Ce(()=>import("./-eSHvuz7.js"),__vite__mapDeps([14,15]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Ce(()=>import("./CQ0fCHl9.js"),__vite__mapDeps([16,8,9,17]),import.meta.url).then(t=>t.default||t)},{name:"ForSale",path:"/ForSale",component:()=>Ce(()=>import("./By7rYGZk.js"),__vite__mapDeps([18,19]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Ce(()=>import("./DnXziyre.js"),__vite__mapDeps([20,8,9]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Ce(()=>import("./CLmma-zf.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",component:()=>Ce(()=>import("./MrSxr8YU.js"),__vite__mapDeps([21,1,22]),import.meta.url).then(t=>t.default||t)},{name:"Login",path:"/Login",component:()=>Ce(()=>import("./DrsOBvAp.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Ce(()=>import("./CeC1hub8.js"),__vite__mapDeps([23,8,9,24]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Ce(()=>import("./CbkC5wMb.js"),__vite__mapDeps([25,8,9,26]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Ce(()=>import("./CtQV8UhJ.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio",path:"/Portfolio",component:()=>Ce(()=>import("./BWF0MlKK.js"),__vite__mapDeps([27,28]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Ce(()=>import("./DnV4vYfi.js"),__vite__mapDeps([29,8,9]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Ce(()=>import("./DxtxgdgH.js"),__vite__mapDeps([30,8,9]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Ce(()=>import("./Bdj8DKpp.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Stuff",path:"/Stuff",component:()=>Ce(()=>import("./BUi269rQ.js"),__vite__mapDeps([31,8,9]),import.meta.url).then(t=>t.default||t)}],CE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?gt(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function _g(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function zP(t,e){return t===e||e===un?!1:_g(t)!==_g(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const WP={scrollBehavior(t,e,n){var u;const r=Me(),s=((u=yt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&zP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:yg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??hh),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(i={el:t.hash,top:yg(t.hash),behavior:s}),h(i)})})}};function yg(t){try{const e=document.querySelector(t);if(e)return Number.parseFloat(getComputedStyle(e).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const KP={hashMode:!1,scrollBehaviorType:"auto"},Ht={...KP,...WP},GP=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Me(),s=yt();if(([e,n]=Vo(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=pl({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Ks(o)),window.history.pushState({},"",t.fullPath)});return!1}})},QP=async t=>{let e,n;const r=([e,n]=Vo(()=>$f(t.path)),e=await e,n(),e);if(r.redirect)return nr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},YP=[GP,QP],go={auth:()=>Ce(()=>import("./CpfQeLvh.js"),[],import.meta.url)};function XP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Om(h,"")}const a=Om(r,t),l=!n||E1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const JP=Yt({name:"nuxt:router",enforce:"pre",async setup(t){var O,x;let e,n,r=ks().app.baseURL;Ht.hashMode&&!r.includes("#")&&(r+="#");const s=((O=Ht.history)==null?void 0:O.call(Ht,r))??(Ht.hashMode?lP(r):TE(r)),i=((x=Ht.routes)==null?void 0:x.call(Ht,gg))??gg;let o;const a=DP({...Ht,scrollBehavior:(A,E,N)=>{if(E===un){o=N;return}if(Ht.scrollBehavior){if(a.options.scrollBehavior=Ht.scrollBehavior,"scrollRestoration"in window.history){const D=a.beforeEach(()=>{D(),window.history.scrollRestoration="manual"})}return Ht.scrollBehavior(A,un,o||N)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=So(a.currentRoute.value);a.afterEach((A,E)=>{l.value=E}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=XP(r,window.location,t.payload.path),h=So(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((A,E)=>{var N,D,M,b;((D=(N=A.matched[0])==null?void 0:N.components)==null?void 0:D.default)===((b=(M=E.matched[0])==null?void 0:M.components)==null?void 0:b.default)&&f()});const p={};for(const A in h.value)Object.defineProperty(p,A,{get:()=>h.value[A]});t._route=jn(p),t._middleware=t._middleware||{global:[],named:{}};const g=dl();a.afterEach(async(A,E,N)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(iE),N&&await t.callHook("page:loading:end"),A.matched.length===0&&await t.runWithContext(()=>Ks(ph({statusCode:404,fatal:!1,statusMessage:`Page not found: ${A.fullPath}`,data:{path:A.fullPath}})))});try{[e,n]=Vo(()=>a.isReady()),await e,n()}catch(A){[e,n]=Vo(()=>t.runWithContext(()=>Ks(A))),await e,n()}const I=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const P=t.payload.state._layout;return a.beforeEach(async(A,E)=>{var N;await t.callHook("page:loading:start"),A.meta=Yr(A.meta),t.isHydrating&&P&&!Br(A.meta.layout)&&(A.meta.layout=P),t._processingMiddleware=!0;{const D=new Set([...YP,...t._middleware.global]);for(const M of A.matched){const b=M.meta.middleware;if(b)for(const _ of Wf(b))D.add(_)}{const M=await t.runWithContext(()=>$f(A.path));if(M.appMiddleware)for(const b in M.appMiddleware)M.appMiddleware[b]?D.add(b):D.delete(b)}for(const M of D){const b=typeof M=="string"?t._middleware.named[M]||await((N=go[M])==null?void 0:N.call(go).then(y=>y.default||y)):M;if(!b)throw new Error(`Unknown route middleware: '${M}'.`);const _=await t.runWithContext(()=>b(A,E));if(!t.payload.serverRendered&&t.isHydrating&&(_===!1||_ instanceof Error)){const y=_||ph({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ks(y)),!1}if(_!==!0&&(_||_===!1))return _}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await a.replace({...I,force:!0}),a.options.scrollBehavior=Ht.scrollBehavior}catch(A){await t.runWithContext(()=>Ks(A))}}),{provide:{router:a}}}}),Ih=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),ZP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),_l=t=>{const e=Me();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Ih(()=>t())}):Ih(()=>t())},eC=Yt({name:"nuxt:payload",setup(t){yt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Ym(e.path);r&&Object.assign(t.static.data,r.data)}),_l(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Ym(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(ml,1e3)})}}),tC=Yt(()=>{const t=yt();_l(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),nC=Yt(t=>{let e;async function n(){const r=await ml();e&&clearTimeout(e),e=setTimeout(n,Mm);try{const s=await $fetch(Uf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}_l(()=>{e=setTimeout(n,Mm)})});function rC(t={}){const e=t.path||window.location.pathname;let n={};try{n=Mo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Me().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const sC=Yt({name:"nuxt:chunk-reload",setup(t){const e=yt(),n=ks(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:fl(n.app.baseURL,i.fullPath);rC({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),iC=Yt({name:"nuxt:global-components"}),Pr={default:()=>Ce(()=>import("./CA8zXyAm.js"),__vite__mapDeps([32,6,1,33]),import.meta.url).then(t=>t.default||t)},oC=Yt({name:"nuxt:prefetch",setup(t){const e=yt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Pr[r]=="function"&&await Pr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(nr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Wf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof go[o]=="function"&&go[o]();s&&typeof Pr[s]=="function"&&Pr[s]()})}});var vg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},OE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new cC;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const I=u<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lC=function(t){const e=kE(t);return OE.encodeByteArray(e,!0)},xc=function(t){return lC(t).replace(/\./g,"")},NE=function(t){try{return OE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hC=()=>uC().__FIREBASE_DEFAULTS__,fC=()=>{if(typeof process>"u"||typeof vg>"u")return;const t=vg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&NE(t[1]);return e&&JSON.parse(e)},yl=()=>{try{return hC()||fC()||dC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xE=t=>{var e,n;return(n=(e=yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DE=t=>{const e=xE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},LE=()=>{var t;return(t=yl())===null||t===void 0?void 0:t.config},ME=t=>{var e;return(e=yl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function VE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xc(JSON.stringify(n)),xc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function gC(){var t;const e=(t=yl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function _C(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vC(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EC(){return!gC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wC(){try{return typeof indexedDB=="object"}catch{return!1}}function bC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TC,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?IC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function IC(t,e){return t.replace(AC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AC=/\{\$([^}]+)}/g;function RC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Eg(i)&&Eg(o)){if(!Dc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Eg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SC(t,e){const n=new PC(t,e);return n.subscribe.bind(n)}class PC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Iu),s.error===void 0&&(s.error=Iu),s.complete===void 0&&(s.complete=Iu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Iu(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NC(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OC(t){return t===as?void 0:t}function NC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const DC={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},LC=we.INFO,MC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},VC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=MC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kf{constructor(e){this.name=e,this._logLevel=LC,this._logHandler=VC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const FC=(t,e)=>e.some(n=>t instanceof n);let wg,bg;function UC(){return wg||(wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BC(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FE=new WeakMap,Ah=new WeakMap,UE=new WeakMap,Au=new WeakMap,Gf=new WeakMap;function jC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FE.set(n,t)}).catch(()=>{}),Gf.set(e,t),e}function $C(t){if(Ah.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ah.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||UE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HC(t){Rh=t(Rh)}function qC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ru(this),e,...n);return UE.set(r,e.sort?e.sort():[e]),Dr(r)}:BC().includes(t)?function(...e){return t.apply(Ru(this),e),Dr(FE.get(this))}:function(...e){return Dr(t.apply(Ru(this),e))}}function zC(t){return typeof t=="function"?qC(t):(t instanceof IDBTransaction&&$C(t),FC(t,UC())?new Proxy(t,Rh):t)}function Dr(t){if(t instanceof IDBRequest)return jC(t);if(Au.has(t))return Au.get(t);const e=zC(t);return e!==t&&(Au.set(t,e),Gf.set(e,t)),e}const Ru=t=>Gf.get(t);function WC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Dr(o.result),l.oldVersion,l.newVersion,Dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const KC=["get","getKey","getAll","getAllKeys","count"],GC=["put","add","delete","clear"],Su=new Map;function Tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Su.get(e))return Su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Su.set(e,i),i}HC(t=>({...t,get:(e,n,r)=>Tg(e,n)||t.get(e,n,r),has:(e,n)=>!!Tg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",Ig="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Kf("@firebase/app"),XC="@firebase/app-compat",JC="@firebase/analytics-compat",ZC="@firebase/analytics",ek="@firebase/app-check-compat",tk="@firebase/app-check",nk="@firebase/auth",rk="@firebase/auth-compat",sk="@firebase/database",ik="@firebase/database-compat",ok="@firebase/functions",ak="@firebase/functions-compat",ck="@firebase/installations",lk="@firebase/installations-compat",uk="@firebase/messaging",hk="@firebase/messaging-compat",fk="@firebase/performance",dk="@firebase/performance-compat",pk="@firebase/remote-config",mk="@firebase/remote-config-compat",gk="@firebase/storage",_k="@firebase/storage-compat",yk="@firebase/firestore",vk="@firebase/vertexai-preview",Ek="@firebase/firestore-compat",wk="firebase",bk="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="[DEFAULT]",Tk={[Sh]:"fire-core",[XC]:"fire-core-compat",[ZC]:"fire-analytics",[JC]:"fire-analytics-compat",[tk]:"fire-app-check",[ek]:"fire-app-check-compat",[nk]:"fire-auth",[rk]:"fire-auth-compat",[sk]:"fire-rtdb",[ik]:"fire-rtdb-compat",[ok]:"fire-fn",[ak]:"fire-fn-compat",[ck]:"fire-iid",[lk]:"fire-iid-compat",[uk]:"fire-fcm",[hk]:"fire-fcm-compat",[fk]:"fire-perf",[dk]:"fire-perf-compat",[pk]:"fire-rc",[mk]:"fire-rc-compat",[gk]:"fire-gcs",[_k]:"fire-gcs-compat",[yk]:"fire-fst",[Ek]:"fire-fst-compat",[vk]:"fire-vertex","fire-js":"fire-js",[wk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map,Ik=new Map,Ch=new Map;function Ag(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(Ch.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Ch.set(e,t);for(const n of Lc.values())Ag(n,t);for(const n of Ik.values())Ag(n,t);return!0}function vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $n(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new ia("app","Firebase",Ak);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=bk;function BE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Lr.create("bad-app-name",{appName:String(s)});if(n||(n=LE()),!n)throw Lr.create("no-options");const i=Lc.get(s);if(i){if(Dc(n,i.options)&&Dc(r,i.config))return i;throw Lr.create("duplicate-app",{appName:s})}const o=new xC(s);for(const l of Ch.values())o.addComponent(l);const a=new Rk(n,r,o);return Lc.set(s,a),a}function Qf(t=Ph){const e=Lc.get(t);if(!e&&t===Ph&&LE())return BE();if(!e)throw Lr.create("no-app",{appName:t});return e}function In(t,e,n){var r;let s=(r=Tk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(a.join(" "));return}ws(new jr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Sk="firebase-heartbeat-database",Pk=1,Bo="firebase-heartbeat-store";let Pu=null;function jE(){return Pu||(Pu=WC(Sk,Pk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),Pu}async function Ck(t){try{const n=(await jE()).transaction(Bo),r=await n.objectStore(Bo).get($E(t));return await n.done,r}catch(e){if(e instanceof Ln)Qn.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Rg(t,e){try{const r=(await jE()).transaction(Bo,"readwrite");await r.objectStore(Bo).put(e,$E(t)),await r.done}catch(n){if(n instanceof Ln)Qn.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function $E(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kk=1024,Ok=30*24*60*60*1e3;class Nk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ok}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sg(),{heartbeatsToSend:r,unsentEntries:s}=xk(this._heartbeatsCache.heartbeats),i=xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function Sg(){return new Date().toISOString().substring(0,10)}function xk(t,e=kk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wC()?bC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ck(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pg(t){return xc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){ws(new jr("platform-logger",e=>new QC(e),"PRIVATE")),ws(new jr("heartbeat",e=>new Nk(e),"PRIVATE")),In(Sh,Ig,t),In(Sh,Ig,"esm2017"),In("fire-js","")}Lk("");var Mk="firebase",Vk="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(Mk,Vk,"app");function Yf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function HE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=HE,qE=new ia("auth","Firebase",HE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Kf("@firebase/auth");function Uk(t,...e){Mc.logLevel<=we.WARN&&Mc.warn(`Auth (${Os}): ${t}`,...e)}function oc(t,...e){Mc.logLevel<=we.ERROR&&Mc.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Xf(t,...e)}function An(t,...e){return Xf(t,...e)}function zE(t,e,n){const r=Object.assign(Object.assign({},Fk()),{[e]:n});return new ia("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return zE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qE.create(t,...e)}function fe(t,e,...n){if(!t)throw Xf(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oc(e),new Error(e)}function Yn(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bk(){return Cg()==="http:"||Cg()==="https:"}function Cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bk()||_C()||"connection"in navigator)?navigator.onLine:!0}function $k(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=mC()||yC()}get(){return jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new aa(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,r,s={}){return KE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=oa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WE.fetch()(GE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function KE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hk),e);try{const s=new Wk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw za(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zE(t,h,u);gn(t,h)}}catch(s){if(s instanceof Ln)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function El(t,e,n,r,s={}){const i=await Xr(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function GE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jf(t.config,s):`${t.config.apiScheme}://${s}`}function zk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),qk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}function kg(t){return t!==void 0&&t.enterprise!==void 0}class Kk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gk(t,e){return Xr(t,"GET","/v2/recaptchaConfig",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function QE(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yk(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Zf(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_o(Cu(s.auth_time)),issuedAtTime:_o(Cu(s.iat)),expirationTime:_o(Cu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cu(t){return Number(t)*1e3}function Zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oc("JWT malformed, contained fewer than 3 sections"),null;try{const s=NE(n);return s?JSON.parse(s):(oc("Failed to decode base64 JWT payload"),null)}catch(s){return oc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Og(t){const e=Zf(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&Xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jo(t,QE(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?YE(i.providerUserInfo):[],a=eO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Zk(t){const e=Ye(t);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function YE(t){return t.map(e=>{var{providerId:n}=e,r=Yf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(t,e){const n=await KE(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=GE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nO(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Og(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ni;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jo(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yk(this,e)}reload(){return Zk(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($n(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await jo(this,Qk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,A=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:N,isAnonymous:D,providerData:M,stsTokenManager:b}=n;fe(E&&b,e,"internal-error");const _=ni.fromJSON(this.name,b);fe(typeof E=="string",e,"internal-error"),fr(f,e.name),fr(p,e.name),fe(typeof N=="boolean",e,"internal-error"),fe(typeof D=="boolean",e,"internal-error"),fr(g,e.name),fr(I,e.name),fr(P,e.name),fr(O,e.name),fr(x,e.name),fr(A,e.name);const y=new qn({uid:E,auth:e,email:p,emailVerified:N,displayName:f,isAnonymous:D,photoURL:I,phoneNumber:g,tenantId:P,stsTokenManager:_,createdAt:x,lastLoginAt:A});return M&&Array.isArray(M)&&(y.providerData=M.map(w=>Object.assign({},w))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ni;s.updateFromServerResponse(n);const i=new qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?YE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ni;a.updateFromIdToken(r);const l=new qn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=new Map;function zn(t){Yn(t instanceof Function,"Expected a class definition");let e=Ng.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ng.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XE.type="NONE";const xg=XE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ac(this.userKey,s.apiKey,i),this.fullPersistenceKey=ac("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ri(zn(xg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(xg);const o=ac(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=qn._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ri(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ri(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rw(e))return"Blackberry";if(sw(e))return"Webos";if(ZE(e))return"Safari";if((e.includes("chrome/")||ew(e))&&!e.includes("edge/"))return"Chrome";if(nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JE(t=St()){return/firefox\//i.test(t)}function ZE(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ew(t=St()){return/crios\//i.test(t)}function tw(t=St()){return/iemobile/i.test(t)}function nw(t=St()){return/android/i.test(t)}function rw(t=St()){return/blackberry/i.test(t)}function sw(t=St()){return/webos/i.test(t)}function ed(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rO(t=St()){var e;return ed(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sO(){return vC()&&document.documentMode===10}function iw(t=St()){return ed(t)||nw(t)||sw(t)||rw(t)||/windows phone/i.test(t)||tw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e=[]){let n;switch(t){case"Browser":n=Dg(St());break;case"Worker":n=`${Dg(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class iO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oO(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Ns(t,e))}/**
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
 */const aO=6;class cO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lg(this),this.idTokenSubscription=new Lg(this),this.beforeStateQueue=new iO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await QE(this,{idToken:e}),r=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($n(this.app))return Promise.reject(Mr(this));const n=e?Ye(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $n(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $n(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oO(this),n=new cO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Uk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Si(t){return Ye(t)}class Lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=SC(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uO(t){wl=t}function aw(t){return wl.loadJS(t)}function hO(){return wl.recaptchaEnterpriseScript}function fO(){return wl.gapiScript}function dO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pO="recaptcha-enterprise",mO="NO_RECAPTCHA";class gO{constructor(e){this.type=pO,this.auth=Si(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Gk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Kk(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;kg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(mO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&kg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hO();l.length!==0&&(l+=a),aw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Mg(t,e,n,r=!1){const s=new gO(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vg(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Mg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Mg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t,e){const n=vl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dc(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function yO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vO(t,e,n){const r=Si(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cw(e),{host:o,port:a}=EO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),wO()}function cw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EO(t){const e=cw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fg(o)}}}function Fg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function bO(t,e){return Xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(t,e){return El(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function AO(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends td{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vg(e,n,"signInWithPassword",TO);case"emailLink":return IO(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vg(e,r,"signUpPassword",bO);case"emailLink":return AO(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e){return El(t,"POST","/v1/accounts:signInWithIdp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO="http://localhost";class bs extends td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new bs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:RO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PO(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,r=eo(to(t)).deep_link_id;return(r?eo(to(r)).link:null)||r||n||e||t}class nd{constructor(e){var n,r,s,i,o,a;const l=eo(to(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=SO((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PO(e);try{return new nd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nd.parseLink(n);return fe(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ca extends lw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ca{constructor(){super("facebook.com")}static credential(e){return bs._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bs._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends ca{constructor(){super("github.com")}static credential(e){return bs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends ca{constructor(){super("twitter.com")}static credential(e,n){return bs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qn._fromIdTokenResponse(e,r,s),o=Ug(r);return new pi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ug(r);return new pi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fc(e,n,r,s)}}function uw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(t,i,e,r):i})}async function CO(t,e,n=!1){const r=await jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(t,e,n=!1){const{auth:r}=t;if($n(r.app))return Promise.reject(Mr(r));const s="reauthenticate";try{const i=await jo(t,uw(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Zf(i.idToken);fe(o,r,"internal-error");const{sub:a}=o;return fe(t.uid===a,r,"user-mismatch"),pi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(t,e,n=!1){if($n(t.app))return Promise.reject(Mr(t));const r="signIn",s=await uw(t,r,e),i=await pi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function OO(t,e){return hw(Si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t){const e=Si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function xO(t,e,n){return $n(t.app)?Promise.reject(Mr(t)):OO(Ye(t),Pi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&NO(t),r})}function DO(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function LO(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function MO(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function VO(t){return Ye(t).signOut()}const Uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=1e3,UO=10;class dw extends fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dw.type="LOCAL";const BO=dw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw extends fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pw.type="SESSION";const mw=pw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await jO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=rd("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function HO(t){Rn().location.href=t}/**
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
 */function gw(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function qO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WO(){return gw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="firebaseLocalStorageDb",KO=1,Bc="firebaseLocalStorage",yw="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function GO(){const t=indexedDB.deleteDatabase(_w);return new la(t).toPromise()}function Nh(){const t=indexedDB.open(_w,KO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bc,{keyPath:yw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await GO(),e(await Nh()))})})}async function Bg(t,e,n){const r=Tl(t,!0).put({[yw]:e,value:n});return new la(r).toPromise()}async function QO(t,e){const n=Tl(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function jg(t,e){const n=Tl(t,!0).delete(e);return new la(n).toPromise()}const YO=800,XO=3;class vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(WO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qO(),!this.activeServiceWorker)return;this.sender=new $O(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await Bg(e,Uc,"1"),await jg(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tl(s,!1).getAll();return new la(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vw.type="LOCAL";const JO=vw;new aa(3e4,6e4);/**
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
 */function ZO(t,e){return e?zn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eN(t){return hw(t.auth,new sd(t),t.bypassAuthState)}function tN(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),kO(n,new sd(t),t.bypassAuthState)}async function nN(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),CO(n,new sd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eN;case"linkViaPopup":case"linkViaRedirect":return nN;case"reauthViaPopup":case"reauthViaRedirect":return tN;default:gn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=new aa(2e3,1e4);class Gs extends Ew{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rN.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN="pendingRedirect",cc=new Map;class iN extends Ew{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const r=await oN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oN(t,e){const n=lN(e),r=cN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aN(t,e){cc.set(t._key(),e)}function cN(t){return zn(t._redirectPersistence)}function lN(t){return ac(sN,t.config.apiKey,t.name)}async function uN(t,e,n=!1){if($n(t.app))return Promise.reject(Mr(t));const r=Si(t),s=ZO(r,e),o=await new iN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=10*60*1e3;class fN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ww(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hN&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(e))}saveEventToCache(e){this.cachedEventUids.add($g(e)),this.lastProcessedEventTime=Date.now()}}function $g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ww({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ww(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gN=/^https?/;async function _N(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pN(t);for(const n of e)try{if(yN(n))return}catch{}gn(t,"unauthorized-domain")}function yN(t){const e=kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gN.test(n))return!1;if(mN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vN=new aa(3e4,6e4);function Hg(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EN(t){return new Promise((e,n)=>{var r,s,i;function o(){Hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hg(),n(An(t,"network-request-failed"))},timeout:vN.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const a=dO("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},aw(`${fO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lc=null,e})}let lc=null;function wN(t){return lc=lc||EN(t),lc}/**
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
 */const bN=new aa(5e3,15e3),TN="__/auth/iframe",IN="emulator/auth/iframe",AN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SN(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jf(e,IN):`https://${t.config.authDomain}/${TN}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=RN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oa(r).slice(1)}`}async function PN(t){const e=await wN(t),n=Rn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:SN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Rn().setTimeout(()=>{i(o)},bN.get());function l(){Rn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const CN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kN=500,ON=600,NN="_blank",xN="http://localhost";class qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DN(t,e,n,r=kN,s=ON){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},CN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=St().toLowerCase();n&&(a=ew(u)?NN:n),JE(u)&&(e=e||xN,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(rO(u)&&a!=="_self")return LN(e||"",a),new qg(null);const f=window.open(e||"",a,h);fe(f,t,"popup-blocked");try{f.focus()}catch{}return new qg(f)}function LN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MN="__/auth/handler",VN="emulator/auth/handler",FN=encodeURIComponent("fac");async function zg(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof lw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ca){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${FN}=${encodeURIComponent(l)}`:"";return`${UN(t)}?${oa(a).slice(1)}${u}`}function UN({config:t}){return t.emulator?Jf(t,VN):`https://${t.authDomain}/${MN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="webStorageSupport";class BN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mw,this._completeRedirectFn=uN,this._overrideRedirectResult=aN}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zg(e,n,r,kh(),s);return DN(e,o,rd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zg(e,n,r,kh(),s);return HO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PN(e),r=new fN(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ku,{type:ku},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ku];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_N(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iw()||ZE()||ed()}}const jN=BN;var Wg="@firebase/auth",Kg="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qN(t){ws(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ow(t)},u=new lO(r,s,i,l);return yO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new jr("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(r=>new $N(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Wg,Kg,HN(t)),In(Wg,Kg,"esm2017")}/**
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
 */const zN=5*60,WN=ME("authIdTokenMaxAge")||zN;let Gg=null;const KN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WN)return;const s=n==null?void 0:n.token;Gg!==s&&(Gg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GN(t=Qf()){const e=vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_O(t,{popupRedirectResolver:jN,persistence:[JO,BO,mw]}),r=ME("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=KN(i.toString());LO(n,o,()=>o(n.currentUser)),DO(n,a=>o(a))}}const s=xE("auth");return s&&vO(n,`http://${s}`),n}function QN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qN("Browser");function hn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=hn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:hn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=hn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=hn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(hn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(hn(i),hn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(hn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const YN={path:"/",watch:!0,decode:t=>Mo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Wa=window.cookieStore;function XN(t,e){var l;const n={...YN,...e},r=Qg(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=hn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?ex(o,s,n.watch&&n.watch!=="shallow"):Bt(o);{let u=null;try{!Wa&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||dR(a.value,r[t])||(ZN(t,a.value,n),r[t]=hn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},f=I=>{var O;const P=I.refresh?(O=Qg(n))==null?void 0:O[t]:n.decode(I.value);p=!0,a.value=P,r[t]=hn(P),xn(()=>{p=!1})};let p=!1;const g=!!ea();if(g&&yc(()=>{p=!0,h(),u==null||u.close()}),Wa){const I=P=>{const O=P.changed.find(x=>x.name===t);O&&f({value:O.value})};Wa.addEventListener("change",I),g&&yc(()=>Wa.removeEventListener("change",I))}else u&&(u.onmessage=({data:I})=>f(I));n.watch?dn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function Qg(t={}){return aR(document.cookie,t)}function JN(t,e,n={}){return e==null?Fm(t,e,{...n,maxAge:-1}):Fm(t,e,n)}function ZN(t,e,n={}){document.cookie=JN(t,e,n)}const Yg=2147483647;function ex(t,e,n){let r,s,i=0;const o=n?Bt(t):{value:t};return ea()&&yc(()=>{s==null||s(),clearTimeout(r)}),ZT((a,l)=>{n&&(s=dn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,f=h<Yg?h:Yg;r=setTimeout(()=>{if(i+=f,i<e)return u();o.value=void 0,l()},f)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function bw(t,e=yt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>bw(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const tx=(...t)=>t.find(e=>e!==void 0);function nx(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return Xg(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:Xg(o,t.trailingSlash)}}function r(s){const i=yt(),o=ks(),a=Le(()=>!!s.target&&s.target!=="_self"),l=Le(()=>{const P=s.to||s.href||"";return typeof P=="string"&&nr(P,{acceptRelative:!0})}),u=Oo("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,f=Le(()=>{if(s.external)return!0;const P=s.to||s.href||"";return typeof P=="object"?!1:P===""||l.value}),p=Le(()=>{const P=s.to||s.href||"";return f.value?P:n(P,i.resolve)}),g=f.value||h==null?void 0:h({...s,to:p}),I=Le(()=>{var P;if(!p.value||l.value)return p.value;if(f.value){const O=typeof p.value=="object"&&"path"in p.value?gh(p.value):p.value,x=typeof O=="object"?i.resolve(O).href:O;return n(x,i.resolve)}return typeof p.value=="object"?((P=i.resolve(p.value))==null?void 0:P.href)??null:n(fl(o.app.baseURL,p.value),i.resolve)});return{to:p,hasTarget:a,isAbsoluteUrl:l,isExternal:f,href:I,isActive:(g==null?void 0:g.isActive)??Le(()=>p.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Le(()=>p.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Le(()=>i.resolve(p.value)),async navigate(){await TR(I.value,{replace:s.replace,external:f.value||a.value})}}}return Dn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=yt(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:f,isAbsoluteUrl:p}=r(s),g=Bt(!1),I=Bt(null),P=O=>{var x;I.value=s.custom?(x=O==null?void 0:O.$el)==null?void 0:x.nextElementSibling:O==null?void 0:O.$el};if(s.prefetch!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!ix()){const x=Me();let A,E=null;il(()=>{const N=sx();_l(()=>{A=Ih(()=>{var D;(D=I==null?void 0:I.value)!=null&&D.tagName&&(E=N.observe(I.value,async()=>{E==null||E(),E=null;const M=typeof a.value=="string"?a.value:h.value?gh(a.value):o.resolve(a.value).fullPath;await Promise.all([x.hooks.callHook("link:prefetch",M).catch(()=>{}),!h.value&&!f.value&&bw(a.value,o).catch(()=>{})]),g.value=!0}))})})}),na(()=>{A&&ZP(A),E==null||E(),E=null})}return()=>{var A;if(!h.value&&!f.value){const E={ref:P,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(g.value&&(E.class=s.prefetchedClass||t.prefetchedClass),E.rel=s.rel||void 0),gt(Oo("RouterLink"),E,i.default)}const O=s.target||null,x=tx(s.noRel?"":s.rel,t.externalRelAttribute,p.value||f.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,get route(){if(!l.value)return;const E=new URL(l.value,window.location.href);return{path:E.pathname,fullPath:E.pathname,get query(){return jv(E.search)},hash:E.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:x,target:O,isExternal:h.value||f.value,isActive:!1,isExactActive:!1}):null:gt("a",{ref:I,href:l.value||null,rel:x,target:O},(A=i.default)==null?void 0:A.call(i))}}})}const rx=nx(J1);function Xg(t,e){const n=e==="append"?Sc:hl;return nr(t)&&!t.startsWith("http")?t:n(t,!0)}function sx(){const t=Me();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}function ix(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}var Jg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,Tw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function y(){}y.prototype=_.prototype,b.D=_.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(w,C,S){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return _.prototype[C].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)w[C]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(C=0;16>C;++C)w[C]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=b.g[0],y=b.g[1],C=b.g[2];var S=b.g[3],T=_+(S^y&(C^S))+w[0]+3614090360&4294967295;_=y+(T<<7&4294967295|T>>>25),T=S+(C^_&(y^C))+w[1]+3905402710&4294967295,S=_+(T<<12&4294967295|T>>>20),T=C+(y^S&(_^y))+w[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=y+(_^C&(S^_))+w[3]+3250441966&4294967295,y=C+(T<<22&4294967295|T>>>10),T=_+(S^y&(C^S))+w[4]+4118548399&4294967295,_=y+(T<<7&4294967295|T>>>25),T=S+(C^_&(y^C))+w[5]+1200080426&4294967295,S=_+(T<<12&4294967295|T>>>20),T=C+(y^S&(_^y))+w[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=y+(_^C&(S^_))+w[7]+4249261313&4294967295,y=C+(T<<22&4294967295|T>>>10),T=_+(S^y&(C^S))+w[8]+1770035416&4294967295,_=y+(T<<7&4294967295|T>>>25),T=S+(C^_&(y^C))+w[9]+2336552879&4294967295,S=_+(T<<12&4294967295|T>>>20),T=C+(y^S&(_^y))+w[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=y+(_^C&(S^_))+w[11]+2304563134&4294967295,y=C+(T<<22&4294967295|T>>>10),T=_+(S^y&(C^S))+w[12]+1804603682&4294967295,_=y+(T<<7&4294967295|T>>>25),T=S+(C^_&(y^C))+w[13]+4254626195&4294967295,S=_+(T<<12&4294967295|T>>>20),T=C+(y^S&(_^y))+w[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=y+(_^C&(S^_))+w[15]+1236535329&4294967295,y=C+(T<<22&4294967295|T>>>10),T=_+(C^S&(y^C))+w[1]+4129170786&4294967295,_=y+(T<<5&4294967295|T>>>27),T=S+(y^C&(_^y))+w[6]+3225465664&4294967295,S=_+(T<<9&4294967295|T>>>23),T=C+(_^y&(S^_))+w[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=y+(S^_&(C^S))+w[0]+3921069994&4294967295,y=C+(T<<20&4294967295|T>>>12),T=_+(C^S&(y^C))+w[5]+3593408605&4294967295,_=y+(T<<5&4294967295|T>>>27),T=S+(y^C&(_^y))+w[10]+38016083&4294967295,S=_+(T<<9&4294967295|T>>>23),T=C+(_^y&(S^_))+w[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=y+(S^_&(C^S))+w[4]+3889429448&4294967295,y=C+(T<<20&4294967295|T>>>12),T=_+(C^S&(y^C))+w[9]+568446438&4294967295,_=y+(T<<5&4294967295|T>>>27),T=S+(y^C&(_^y))+w[14]+3275163606&4294967295,S=_+(T<<9&4294967295|T>>>23),T=C+(_^y&(S^_))+w[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=y+(S^_&(C^S))+w[8]+1163531501&4294967295,y=C+(T<<20&4294967295|T>>>12),T=_+(C^S&(y^C))+w[13]+2850285829&4294967295,_=y+(T<<5&4294967295|T>>>27),T=S+(y^C&(_^y))+w[2]+4243563512&4294967295,S=_+(T<<9&4294967295|T>>>23),T=C+(_^y&(S^_))+w[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=y+(S^_&(C^S))+w[12]+2368359562&4294967295,y=C+(T<<20&4294967295|T>>>12),T=_+(y^C^S)+w[5]+4294588738&4294967295,_=y+(T<<4&4294967295|T>>>28),T=S+(_^y^C)+w[8]+2272392833&4294967295,S=_+(T<<11&4294967295|T>>>21),T=C+(S^_^y)+w[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=y+(C^S^_)+w[14]+4259657740&4294967295,y=C+(T<<23&4294967295|T>>>9),T=_+(y^C^S)+w[1]+2763975236&4294967295,_=y+(T<<4&4294967295|T>>>28),T=S+(_^y^C)+w[4]+1272893353&4294967295,S=_+(T<<11&4294967295|T>>>21),T=C+(S^_^y)+w[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=y+(C^S^_)+w[10]+3200236656&4294967295,y=C+(T<<23&4294967295|T>>>9),T=_+(y^C^S)+w[13]+681279174&4294967295,_=y+(T<<4&4294967295|T>>>28),T=S+(_^y^C)+w[0]+3936430074&4294967295,S=_+(T<<11&4294967295|T>>>21),T=C+(S^_^y)+w[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=y+(C^S^_)+w[6]+76029189&4294967295,y=C+(T<<23&4294967295|T>>>9),T=_+(y^C^S)+w[9]+3654602809&4294967295,_=y+(T<<4&4294967295|T>>>28),T=S+(_^y^C)+w[12]+3873151461&4294967295,S=_+(T<<11&4294967295|T>>>21),T=C+(S^_^y)+w[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=y+(C^S^_)+w[2]+3299628645&4294967295,y=C+(T<<23&4294967295|T>>>9),T=_+(C^(y|~S))+w[0]+4096336452&4294967295,_=y+(T<<6&4294967295|T>>>26),T=S+(y^(_|~C))+w[7]+1126891415&4294967295,S=_+(T<<10&4294967295|T>>>22),T=C+(_^(S|~y))+w[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=y+(S^(C|~_))+w[5]+4237533241&4294967295,y=C+(T<<21&4294967295|T>>>11),T=_+(C^(y|~S))+w[12]+1700485571&4294967295,_=y+(T<<6&4294967295|T>>>26),T=S+(y^(_|~C))+w[3]+2399980690&4294967295,S=_+(T<<10&4294967295|T>>>22),T=C+(_^(S|~y))+w[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=y+(S^(C|~_))+w[1]+2240044497&4294967295,y=C+(T<<21&4294967295|T>>>11),T=_+(C^(y|~S))+w[8]+1873313359&4294967295,_=y+(T<<6&4294967295|T>>>26),T=S+(y^(_|~C))+w[15]+4264355552&4294967295,S=_+(T<<10&4294967295|T>>>22),T=C+(_^(S|~y))+w[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=y+(S^(C|~_))+w[13]+1309151649&4294967295,y=C+(T<<21&4294967295|T>>>11),T=_+(C^(y|~S))+w[4]+4149444226&4294967295,_=y+(T<<6&4294967295|T>>>26),T=S+(y^(_|~C))+w[11]+3174756917&4294967295,S=_+(T<<10&4294967295|T>>>22),T=C+(_^(S|~y))+w[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=y+(S^(C|~_))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var y=_-this.blockSize,w=this.B,C=this.h,S=0;S<_;){if(C==0)for(;S<=y;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<_;)if(w[C++]=b.charCodeAt(S++),C==this.blockSize){s(this,w),C=0;break}}else for(;S<_;)if(w[C++]=b[S++],C==this.blockSize){s(this,w),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var y=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.u(b),b=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)b[y++]=this.g[_]>>>w&255;return b};function i(b,_){var y=a;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=_(b)}function o(b,_){this.h=_;for(var y=[],w=!0,C=b.length-1;0<=C;C--){var S=b[C]|0;w&&S==_||(y[C]=S,w=!1)}this.g=y}var a={};function l(b){return-128<=b&&128>b?i(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return O(u(-b));for(var _=[],y=1,w=0;b>=y;w++)_[w]=b/y|0,y*=4294967296;return new o(_,0)}function h(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return O(h(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(_,8)),w=f,C=0;C<b.length;C+=8){var S=Math.min(8,b.length-C),T=parseInt(b.substring(C,C+S),_);8>S?(S=u(Math.pow(_,S)),w=w.j(S).add(u(T))):(w=w.j(y),w=w.add(u(T)))}return w}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var b=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);b+=(0<=w?w:4294967296+w)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I(this))return"0";if(P(this))return"-"+O(this).toString(b);for(var _=u(Math.pow(b,6)),y=this,w="";;){var C=N(y,_).g;y=x(y,C.j(_));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=C,I(y))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function I(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=x(this,b),P(b)?-1:I(b)?0:1};function O(b){for(var _=b.g.length,y=[],w=0;w<_;w++)y[w]=~b.g[w];return new o(y,~b.h).add(p)}t.abs=function(){return P(this)?O(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0,C=0;C<=_;C++){var S=w+(this.i(C)&65535)+(b.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);w=T>>>16,S&=65535,T&=65535,y[C]=T<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function x(b,_){return b.add(O(_))}t.j=function(b){if(I(this)||I(b))return f;if(P(this))return P(b)?O(this).j(O(b)):O(O(this).j(b));if(P(b))return O(this.j(O(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var _=this.g.length+b.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<b.g.length;C++){var S=this.i(w)>>>16,T=this.i(w)&65535,me=b.i(C)>>>16,ye=b.i(C)&65535;y[2*w+2*C]+=T*ye,A(y,2*w+2*C),y[2*w+2*C+1]+=S*ye,A(y,2*w+2*C+1),y[2*w+2*C+1]+=T*me,A(y,2*w+2*C+1),y[2*w+2*C+2]+=S*me,A(y,2*w+2*C+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new o(y,0)};function A(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function E(b,_){this.g=b,this.h=_}function N(b,_){if(I(_))throw Error("division by zero");if(I(b))return new E(f,f);if(P(b))return _=N(O(b),_),new E(O(_.g),O(_.h));if(P(_))return _=N(b,O(_)),new E(O(_.g),_.h);if(30<b.g.length){if(P(b)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var y=p,w=_;0>=w.l(b);)y=D(y),w=D(w);var C=M(y,1),S=M(w,1);for(w=M(w,2),y=M(y,2);!I(w);){var T=S.add(w);0>=T.l(b)&&(C=C.add(y),S=T),w=M(w,1),y=M(y,1)}return _=x(b,C.j(_)),new E(C,_)}for(C=f;0<=b.l(_);){for(y=Math.max(1,Math.floor(b.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=u(y),T=S.j(_);P(T)||0<T.l(b);)y-=w,S=u(y),T=S.j(_);I(S)&&(S=p),C=C.add(S),b=x(b,T)}return new E(C,b)}t.A=function(b){return N(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&b.i(w);return new o(y,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|b.i(w);return new o(y,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^b.i(w);return new o(y,this.h^b.h)};function D(b){for(var _=b.g.length+1,y=[],w=0;w<_;w++)y[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(y,b.h)}function M(b,_){var y=_>>5;_%=32;for(var w=b.g.length-y,C=[],S=0;S<w;S++)C[S]=0<_?b.i(S+y)>>>_|b.i(S+y+1)<<32-_:b.i(S+y);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,_s=o}).apply(typeof Jg<"u"?Jg:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iw,Aw,no,Rw,uc,xh,Sw,Pw,Cw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,m){return c==Array.prototype||c==Object.prototype||(c[d]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var d=0;d<c.length;++d){var m=c[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,d){if(d)e:{var m=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var L=c[v];if(!(L in m))break e;m=m[L]}c=c[c.length-1],v=m[c],d=d(v),d!=v&&d!=null&&e(m,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var m=0,v=!1,L={next:function(){if(!v&&m<c.length){var F=m++;return{value:d(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function u(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,m){return c.call.apply(c.bind,arguments)}function f(c,d,m){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),c.apply(d,L)}}return function(){return c.apply(d,arguments)}}function p(c,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(c,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function I(c,d){function m(){}m.prototype=d.prototype,c.aa=d.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(v,L,F){for(var K=Array(arguments.length-2),De=2;De<arguments.length;De++)K[De-2]=arguments[De];return d.prototype[L].apply(v,K)}}function P(c){const d=c.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=c[v];return m}return[]}function O(c,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const L=c.length||0,F=v.length||0;c.length=L+F;for(let K=0;K<F;K++)c[L+K]=v[K]}else c.push(v)}}class x{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function A(c){return/^[\s\xa0]*$/.test(c)}function E(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function N(c){return N[" "](c),c}N[" "]=function(){};var D=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(c,d,m){for(const v in c)d.call(m,c[v],v,c)}function b(c,d){for(const m in c)d.call(void 0,c[m],m,c)}function _(c){const d={};for(const m in c)d[m]=c[m];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,d){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)c[m]=v[m];for(let F=0;F<y.length;F++)m=y[F],Object.prototype.hasOwnProperty.call(v,m)&&(c[m]=v[m])}}function C(c){var d=1;c=c.split(":");const m=[];for(;0<d&&c.length;)m.push(c.shift()),d--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function T(){var c=qe;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,m){const v=ye.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new x(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ie=!1,qe=new me,cn=()=>{const c=a.Promise.resolve(void 0);te=()=>{c.then(Jt)}};var Jt=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){S(m)}var d=ye;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}ie=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var sr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return c}();function _n(c,d){if(We.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(D){e:{try{N(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else m=="mouseover"?d=c.fromElement:m=="mouseout"&&(d=c.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:xt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&_n.aa.h.call(this)}}I(_n,We);var xt={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(c,d,m,v,L){this.listener=c,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=L,this.key=++Z,this.da=this.fa=!1}function ee(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ee(c){this.src=c,this.g={},this.h=0}Ee.prototype.add=function(c,d,m,v,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var K=R(c,d,v,L);return-1<K?(d=c[K],m||(d.fa=!1)):(d=new Y(d,this.src,F,!!v,L),d.fa=m,c.push(d)),d};function Ne(c,d){var m=d.type;if(m in c.g){var v=c.g[m],L=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(ee(d),c.g[m].length==0&&(delete c.g[m],c.h--))}}function R(c,d,m,v){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==v)return L}return-1}var k="closure_lm_"+(1e6*Math.random()|0),V={};function j(c,d,m,v,L){if(Array.isArray(d)){for(var F=0;F<d.length;F++)j(c,d[F],m,v,L);return null}return m=oe(m),c&&c[B]?c.K(d,m,u(v)?!!v.capture:!!v,L):U(c,d,m,!1,v,L)}function U(c,d,m,v,L,F){if(!d)throw Error("Invalid event type");var K=u(L)?!!L.capture:!!L,De=X(c);if(De||(c[k]=De=new Ee(c)),m=De.add(d,m,v,K,F),m.proxy)return m;if(v=z(),m.proxy=v,v.src=c,v.listener=m,c.addEventListener)sr||(L=K),L===void 0&&(L=!1),c.addEventListener(d.toString(),v,L);else if(c.attachEvent)c.attachEvent(G(d.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function z(){function c(m){return d.call(c.src,c.listener,m)}const d=q;return c}function Q(c,d,m,v,L){if(Array.isArray(d))for(var F=0;F<d.length;F++)Q(c,d[F],m,v,L);else v=u(v)?!!v.capture:!!v,m=oe(m),c&&c[B]?(c=c.i,d=String(d).toString(),d in c.g&&(F=c.g[d],m=R(F,m,v,L),-1<m&&(ee(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[d],c.h--)))):c&&(c=X(c))&&(d=c.g[d.toString()],c=-1,d&&(c=R(d,m,v,L)),(m=-1<c?d[c]:null)&&W(m))}function W(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[B])Ne(d.i,c);else{var m=c.type,v=c.proxy;d.removeEventListener?d.removeEventListener(m,v,c.capture):d.detachEvent?d.detachEvent(G(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=X(d))?(Ne(m,c),m.h==0&&(m.src=null,d[k]=null)):ee(c)}}}function G(c){return c in V?V[c]:V[c]="on"+c}function q(c,d){if(c.da)c=!0;else{d=new _n(d,this);var m=c.listener,v=c.ha||c.src;c.fa&&W(c),c=m.call(v,d)}return c}function X(c){return c=c[k],c instanceof Ee?c:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[ae]||(c[ae]=function(d){return c.handleEvent(d)}),c[ae])}function se(){ze.call(this),this.i=new Ee(this),this.M=this,this.F=null}I(se,ze),se.prototype[B]=!0,se.prototype.removeEventListener=function(c,d,m,v){Q(this,c,d,m,v)};function ue(c,d){var m,v=c.F;if(v)for(m=[];v;v=v.F)m.push(v);if(c=c.M,v=d.type||d,typeof d=="string")d=new We(d,c);else if(d instanceof We)d.target=d.target||c;else{var L=d;d=new We(v,c),w(d,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var K=d.g=m[F];L=ke(K,v,!0,d)&&L}if(K=d.g=c,L=ke(K,v,!0,d)&&L,L=ke(K,v,!1,d)&&L,m)for(F=0;F<m.length;F++)K=d.g=m[F],L=ke(K,v,!1,d)&&L}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var m=c.g[d],v=0;v<m.length;v++)ee(m[v]);delete c.g[d],c.h--}}this.F=null},se.prototype.K=function(c,d,m,v){return this.i.add(String(c),d,!1,m,v)},se.prototype.L=function(c,d,m,v){return this.i.add(String(c),d,!0,m,v)};function ke(c,d,m,v){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,F=0;F<d.length;++F){var K=d[F];if(K&&!K.da&&K.capture==m){var De=K.listener,ft=K.ha||K.src;K.fa&&Ne(c.i,K),L=De.call(ft,v)!==!1&&L}}return L&&!v.defaultPrevented}function Te(c,d,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function Ze(c){c.g=Te(()=>{c.g=null,c.i&&(c.i=!1,Ze(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class jt extends ze{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(c){ze.call(this),this.h=c,this.g={}}I(Zt,ze);var xi=[];function ir(c){M(c.g,function(d,m){this.g.hasOwnProperty(m)&&W(d)},c),c.g={}}Zt.prototype.N=function(){Zt.aa.N.call(this),ir(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ls=a.JSON.stringify,Pt=a.JSON.parse,en=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Ms(){}Ms.prototype.h=null;function Jd(c){return c.h||(c.h=c.i())}function Zd(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wl(){We.call(this,"d")}I(Wl,We);function Kl(){We.call(this,"c")}I(Kl,We);var Zr={},ep=null;function ya(){return ep=ep||new se}Zr.La="serverreachability";function tp(c){We.call(this,Zr.La,c)}I(tp,We);function Li(c){const d=ya();ue(d,new tp(d))}Zr.STAT_EVENT="statevent";function np(c,d){We.call(this,Zr.STAT_EVENT,c),this.stat=d}I(np,We);function Ct(c){const d=ya();ue(d,new np(d,c))}Zr.Ma="timingevent";function rp(c,d){We.call(this,Zr.Ma,c),this.size=d}I(rp,We);function Mi(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function qb(c,d,m,v,L,F){c.info(function(){if(c.g)if(F)for(var K="",De=F.split("&"),ft=0;ft<De.length;ft++){var Re=De[ft].split("=");if(1<Re.length){var Et=Re[0];Re=Re[1];var wt=Et.split("_");K=2<=wt.length&&wt[1]=="type"?K+(Et+"="+Re+"&"):K+(Et+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+d+`
`+m+`
`+K})}function zb(c,d,m,v,L,F,K){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+d+`
`+m+`
`+F+" "+K})}function Vs(c,d,m,v){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+Kb(c,m)+(v?" "+v:"")})}function Wb(c,d){c.info(function(){return"TIMEOUT: "+d})}Vi.prototype.info=function(){};function Kb(c,d){if(!c.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var v=m[c];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<L.length;K++)L[K]=""}}}}return Ls(m)}catch{return d}}var va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gl;function Ea(){}I(Ea,Ms),Ea.prototype.g=function(){return new XMLHttpRequest},Ea.prototype.i=function(){return{}},Gl=new Ea;function or(c,d,m,v){this.j=c,this.i=d,this.l=m,this.R=v||1,this.U=new Zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var op={},Ql={};function Yl(c,d,m){c.L=1,c.v=Ia(Mn(d)),c.m=m,c.P=!0,ap(c,null)}function ap(c,d){c.F=Date.now(),wa(c),c.A=Mn(c.v);var m=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),wp(m.i,"t",v),c.C=0,m=c.j.J,c.h=new ip,c.g=Up(c.j,m?d:null,!c.m),0<c.O&&(c.M=new jt(p(c.Y,c,c.g),c.O)),d=c.U,m=c.g,v=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(xi[0]=L.toString()),L=xi);for(var F=0;F<L.length;F++){var K=j(m,L[F],v||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=c.H?_(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),Li(),qb(c.i,c.u,c.A,c.l,c.R,c.m)}or.prototype.ca=function(c){c=c.target;const d=this.M;d&&Vn(c)==3?d.j():this.Y(c)},or.prototype.Y=function(c){try{if(c==this.g)e:{const wt=Vn(this.g);var d=this.g.Ba();const Bs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Pp(this.g)))){this.J||wt!=4||d==7||(d==8||0>=Bs?Li(3):Li(2)),Xl(this);var m=this.g.Z();this.X=m;t:if(cp(this)){var v=Pp(this.g);c="";var L=v.length,F=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),Fi(this);var K="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,c+=this.h.i.decode(v[d],{stream:!(F&&d==L-1)});v.length=0,this.h.g+=c,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=m==200,zb(this.i,this.u,this.A,this.l,this.R,wt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var De,ft=this.g;if((De=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(De)){var Re=De;break t}}Re=null}if(m=Re)Vs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jl(this,m);else{this.o=!1,this.s=3,Ct(12),es(this),Fi(this);break e}}if(this.P){m=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=Gb(this,K),ln==Ql){wt==4&&(this.s=4,Ct(14),m=!1),Vs(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==op){this.s=4,Ct(15),Vs(this.i,this.l,K,"[Invalid Chunk]"),m=!1;break}else Vs(this.i,this.l,ln,null),Jl(this,ln);if(cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||K.length!=0||this.h.h||(this.s=1,Ct(16),m=!1),this.o=this.o&&m,!m)Vs(this.i,this.l,K,"[Invalid Chunked Response]"),es(this),Fi(this);else if(0<K.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),su(Et),Et.M=!0,Ct(11))}}else Vs(this.i,this.l,K,null),Jl(this,K);wt==4&&es(this),this.o&&!this.J&&(wt==4?Lp(this.j,this):(this.o=!1,wa(this)))}else hT(this.g),m==400&&0<K.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),es(this),Fi(this)}}}catch{}finally{}};function cp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Gb(c,d){var m=c.C,v=d.indexOf(`
`,m);return v==-1?Ql:(m=Number(d.substring(m,v)),isNaN(m)?op:(v+=1,v+m>d.length?Ql:(d=d.slice(v,v+m),c.C=v+m,d)))}or.prototype.cancel=function(){this.J=!0,es(this)};function wa(c){c.S=Date.now()+c.I,lp(c,c.I)}function lp(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Mi(p(c.ba,c),d)}function Xl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}or.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Wb(this.i,this.A),this.L!=2&&(Li(),Ct(17)),es(this),this.s=2,Fi(this)):lp(this,this.S-c)};function Fi(c){c.j.G==0||c.J||Lp(c.j,c)}function es(c){Xl(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,ir(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function Jl(c,d){try{var m=c.j;if(m.G!=0&&(m.g==c||Zl(m.h,c))){if(!c.K&&Zl(m.h,c)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Ca(m),Sa(m);else break e;ru(m),Ct(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Mi(p(m.Za,m),6e3));if(1>=fp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ns(m,11)}else if((c.K||m.g==c)&&Ca(m),!A(d))for(L=m.Da.g.parse(d),d=0;d<L.length;d++){let Re=L[d];if(m.T=Re[0],Re=Re[1],m.G==2)if(Re[0]=="c"){m.K=Re[1],m.ia=Re[2];const Et=Re[3];Et!=null&&(m.la=Et,m.j.info("VER="+m.la));const wt=Re[4];wt!=null&&(m.Aa=wt,m.j.info("SVER="+m.Aa));const Bs=Re[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(v=1.5*Bs,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const ln=c.g;if(ln){const Oa=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var F=v.h;F.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(eu(F,F.h),F.h=null))}if(v.D){const iu=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;iu&&(v.ya=iu,Fe(v.I,v.D,iu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var K=c;if(v.qa=Fp(v,v.J?v.ia:null,v.W),K.K){dp(v.h,K);var De=K,ft=v.L;ft&&(De.I=ft),De.B&&(Xl(De),wa(De)),v.g=K}else xp(v);0<m.i.length&&Pa(m)}else Re[0]!="stop"&&Re[0]!="close"||ns(m,7);else m.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?ns(m,7):nu(m):Re[0]!="noop"&&m.l&&m.l.ta(Re),m.v=0)}}Li(4)}catch{}}var Qb=class{constructor(c,d){this.g=c,this.map=d}};function up(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function fp(c){return c.h?1:c.g?c.g.size:0}function Zl(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function eu(c,d){c.g?c.g.add(d):c.h=d}function dp(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}up.prototype.cancel=function(){if(this.i=pp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function pp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const m of c.g.values())d=d.concat(m.D);return d}return P(c.i)}function Yb(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],m=c.length,v=0;v<m;v++)d.push(c[v]);return d}d=[],m=0;for(v in c)d[m++]=c[v];return d}function Xb(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var m=0;m<c;m++)d.push(m);return d}d=[],m=0;for(const v in c)d[m++]=v;return d}}}function mp(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var m=Xb(c),v=Yb(c),L=v.length,F=0;F<L;F++)d.call(void 0,v[F],m&&m[F],c)}var gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jb(c,d){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var v=c[m].indexOf("="),L=null;if(0<=v){var F=c[m].substring(0,v);L=c[m].substring(v+1)}else F=c[m];d(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ts(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ts){this.h=c.h,ba(this,c.j),this.o=c.o,this.g=c.g,Ta(this,c.s),this.l=c.l;var d=c.i,m=new ji;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),_p(this,m),this.m=c.m}else c&&(d=String(c).match(gp))?(this.h=!1,ba(this,d[1]||"",!0),this.o=Ui(d[2]||""),this.g=Ui(d[3]||"",!0),Ta(this,d[4]),this.l=Ui(d[5]||"",!0),_p(this,d[6]||"",!0),this.m=Ui(d[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}ts.prototype.toString=function(){var c=[],d=this.j;d&&c.push(Bi(d,yp,!0),":");var m=this.g;return(m||d=="file")&&(c.push("//"),(d=this.o)&&c.push(Bi(d,yp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Bi(m,m.charAt(0)=="/"?tT:eT,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Bi(m,rT)),c.join("")};function Mn(c){return new ts(c)}function ba(c,d,m){c.j=m?Ui(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Ta(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function _p(c,d,m){d instanceof ji?(c.i=d,sT(c.i,c.h)):(m||(d=Bi(d,nT)),c.i=new ji(d,c.h))}function Fe(c,d,m){c.i.set(d,m)}function Ia(c){return Fe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ui(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Bi(c,d,m){return typeof c=="string"?(c=encodeURI(c).replace(d,Zb),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Zb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var yp=/[#\/\?@]/g,eT=/[#\?:]/g,tT=/[#\?]/g,nT=/[#\?@]/g,rT=/#/g;function ji(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function ar(c){c.g||(c.g=new Map,c.h=0,c.i&&Jb(c.i,function(d,m){c.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=ji.prototype,t.add=function(c,d){ar(this),this.i=null,c=Fs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(d),this.h+=1,this};function vp(c,d){ar(c),d=Fs(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function Ep(c,d){return ar(c),d=Fs(c,d),c.g.has(d)}t.forEach=function(c,d){ar(this),this.g.forEach(function(m,v){m.forEach(function(L){c.call(d,L,v,this)},this)},this)},t.na=function(){ar(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const L=c[v];for(let F=0;F<L.length;F++)m.push(d[v])}return m},t.V=function(c){ar(this);let d=[];if(typeof c=="string")Ep(this,c)&&(d=d.concat(this.g.get(Fs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)d=d.concat(c[m])}return d},t.set=function(c,d){return ar(this),this.i=null,c=Fs(this,c),Ep(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function wp(c,d,m){vp(c,d),0<m.length&&(c.i=null,c.g.set(Fs(c,d),P(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const F=encodeURIComponent(String(v)),K=this.V(v);for(v=0;v<K.length;v++){var L=F;K[v]!==""&&(L+="="+encodeURIComponent(String(K[v]))),c.push(L)}}return this.i=c.join("&")};function Fs(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function sT(c,d){d&&!c.j&&(ar(c),c.i=null,c.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(vp(this,v),wp(this,L,m))},c)),c.j=d}function iT(c,d){const m=new Vi;if(a.Image){const v=new Image;v.onload=g(cr,m,"TestLoadImage: loaded",!0,d,v),v.onerror=g(cr,m,"TestLoadImage: error",!1,d,v),v.onabort=g(cr,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=g(cr,m,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else d(!1)}function oT(c,d){const m=new Vi,v=new AbortController,L=setTimeout(()=>{v.abort(),cr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?cr(m,"TestPingServer: ok",!0,d):cr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),cr(m,"TestPingServer: error",!1,d)})}function cr(c,d,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function aT(){this.g=new en}function cT(c,d,m){const v=m||"";try{mp(c,function(L,F){let K=L;u(L)&&(K=Ls(L)),d.push(v+F+"="+encodeURIComponent(K))})}catch(L){throw d.push(v+"type="+encodeURIComponent("_badmap")),L}}function $i(c){this.l=c.Ub||null,this.j=c.eb||!1}I($i,Ms),$i.prototype.g=function(){return new Aa(this.l,this.j)},$i.prototype.i=function(c){return function(){return c}}({});function Aa(c,d){se.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Aa,se),t=Aa.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,qi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function bp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Hi(this):qi(this),this.readyState==3&&bp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Hi(this))},t.Qa=function(c){this.g&&(this.response=c,Hi(this))},t.ga=function(){this.g&&Hi(this)};function Hi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,qi(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=d.next();return c.join(`\r
`)};function qi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Tp(c){let d="";return M(c,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function tu(c,d,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Tp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Fe(c,d,m))}function Qe(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Qe,se);var lT=/^https?$/i,uT=["POST","PUT"];t=Qe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gl.g(),this.v=this.o?Jd(this.o):Jd(Gl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(F){Ip(this,F);return}if(c=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(uT,d,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of m)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Ip(this,F)}};function Ip(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Ap(c),Ra(c)}function Ap(c){c.A||(c.A=!0,ue(c,"complete"),ue(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ue(this,"complete"),ue(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Rp(this):this.bb())},t.bb=function(){Rp(this)};function Rp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Vn(c)!=4||c.Z()!=2)){if(c.u&&Vn(c)==4)Te(c.Ea,0,c);else if(ue(c,"readystatechange"),Vn(c)==4){c.h=!1;try{const K=c.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var v;if(v=K===0){var L=String(c.D).match(gp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!lT.test(L?L.toLowerCase():"")}m=v}if(m)ue(c,"complete"),ue(c,"success");else{c.m=6;try{var F=2<Vn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Ap(c)}}finally{Ra(c)}}}}function Ra(c,d){if(c.g){Sp(c);const m=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||ue(c,"ready");try{m.onreadystatechange=v}catch{}}}function Sp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Vn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Pt(d)}};function Pp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function hT(c){const d={};c=(c.g&&2<=Vn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(A(c[v]))continue;var m=C(c[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[L]||[];d[L]=F,F.push(m)}b(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zi(c,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||d}function Cp(c){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zi("baseRetryDelayMs",5e3,c),this.cb=zi("retryDelaySeedMs",1e4,c),this.Wa=zi("forwardChannelMaxRetries",2,c),this.wa=zi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new up(c&&c.concurrentRequestLimit),this.Da=new aT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cp.prototype,t.la=8,t.G=1,t.connect=function(c,d,m,v){Ct(0),this.W=c,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Fp(this,null,this.W),Pa(this)};function nu(c){if(kp(c),c.G==3){var d=c.U++,m=Mn(c.I);if(Fe(m,"SID",c.K),Fe(m,"RID",d),Fe(m,"TYPE","terminate"),Wi(c,m),d=new or(c,c.j,d),d.L=2,d.v=Ia(Mn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Up(d.j,null),d.g.ea(d.v)),d.F=Date.now(),wa(d)}Vp(c)}function Sa(c){c.g&&(su(c),c.g.cancel(),c.g=null)}function kp(c){Sa(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Pa(c){if(!hp(c.h)&&!c.s){c.s=!0;var d=c.Ga;te||cn(),ie||(te(),ie=!0),qe.add(d,c),c.B=0}}function fT(c,d){return fp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Mi(p(c.Ga,c,d),Mp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new or(this,this.j,c);let F=this.o;if(this.S&&(F?(F=_(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Np(this,L,d),m=Mn(this.I),Fe(m,"RID",c),Fe(m,"CVER",22),this.D&&Fe(m,"X-HTTP-Session-Id",this.D),Wi(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(Tp(F)))+"&"+d:this.m&&tu(m,this.m,F)),eu(this.h,L),this.Ua&&Fe(m,"TYPE","init"),this.P?(Fe(m,"$req",d),Fe(m,"SID","null"),L.T=!0,Yl(L,m,null)):Yl(L,m,d),this.G=2}}else this.G==3&&(c?Op(this,c):this.i.length==0||hp(this.h)||Op(this))};function Op(c,d){var m;d?m=d.l:m=c.U++;const v=Mn(c.I);Fe(v,"SID",c.K),Fe(v,"RID",m),Fe(v,"AID",c.T),Wi(c,v),c.m&&c.o&&tu(v,c.m,c.o),m=new or(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),d&&(c.i=d.D.concat(c.i)),d=Np(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),eu(c.h,m),Yl(m,v,d)}function Wi(c,d){c.H&&M(c.H,function(m,v){Fe(d,v,m)}),c.l&&mp({},function(m,v){Fe(d,v,m)})}function Np(c,d,m){m=Math.min(c.i.length,m);var v=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const K=["count="+m];F==-1?0<m?(F=L[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let De=!0;for(let ft=0;ft<m;ft++){let Re=L[ft].g;const Et=L[ft].map;if(Re-=F,0>Re)F=Math.max(0,L[ft].g-100),De=!1;else try{cT(Et,K,"req"+Re+"_")}catch{v&&v(Et)}}if(De){v=K.join("&");break e}}}return c=c.i.splice(0,m),d.D=c,v}function xp(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;te||cn(),ie||(te(),ie=!0),qe.add(d,c),c.v=0}}function ru(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Mi(p(c.Fa,c),Mp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Dp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Mi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),Sa(this),Dp(this))};function su(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Dp(c){c.g=new or(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=Mn(c.qa);Fe(d,"RID","rpc"),Fe(d,"SID",c.K),Fe(d,"AID",c.T),Fe(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&Fe(d,"TO",c.ja),Fe(d,"TYPE","xmlhttp"),Wi(c,d),c.m&&c.o&&tu(d,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Ia(Mn(d)),m.m=null,m.P=!0,ap(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),ru(this),Ct(19))};function Ca(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Lp(c,d){var m=null;if(c.g==d){Ca(c),su(c),c.g=null;var v=2}else if(Zl(c.h,d))m=d.D,dp(c.h,d),v=1;else return;if(c.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var L=c.B;v=ya(),ue(v,new rp(v,m)),Pa(c)}else xp(c);else if(L=d.s,L==3||L==0&&0<d.X||!(v==1&&fT(c,d)||v==2&&ru(c)))switch(m&&0<m.length&&(d=c.h,d.i=d.i.concat(m)),L){case 1:ns(c,5);break;case 4:ns(c,10);break;case 3:ns(c,6);break;default:ns(c,2)}}}function Mp(c,d){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*d}function ns(c,d){if(c.j.info("Error code "+d),d==2){var m=p(c.fb,c),v=c.Xa;const L=!v;v=new ts(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ba(v,"https"),Ia(v),L?iT(v.toString(),m):oT(v.toString(),m)}else Ct(2);c.G=0,c.l&&c.l.sa(d),Vp(c),kp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Vp(c){if(c.G=0,c.ka=[],c.l){const d=pp(c.h);(d.length!=0||c.i.length!=0)&&(O(c.ka,d),O(c.ka,c.i),c.h.i.length=0,P(c.i),c.i.length=0),c.l.ra()}}function Fp(c,d,m){var v=m instanceof ts?Mn(m):new ts(m);if(v.g!="")d&&(v.g=d+"."+v.g),Ta(v,v.s);else{var L=a.location;v=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var F=new ts(null);v&&ba(F,v),d&&(F.g=d),L&&Ta(F,L),m&&(F.l=m),v=F}return m=c.D,d=c.ya,m&&d&&Fe(v,m,d),Fe(v,"VER",c.la),Wi(c,v),v}function Up(c,d,m){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new Qe(new $i({eb:m})):new Qe(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bp(){}t=Bp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ka(){}ka.prototype.g=function(c,d){return new $t(c,d)};function $t(c,d){se.call(this),this.g=new Cp(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!A(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!A(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Us(this)}I($t,se),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){nu(this.g)},$t.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Ls(c),c=m);d.i.push(new Qb(d.Ya++,c)),d.G==3&&Pa(d)},$t.prototype.N=function(){this.g.l=null,delete this.j,nu(this.g),delete this.g,$t.aa.N.call(this)};function jp(c){Wl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const m in d){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}I(jp,Wl);function $p(){Kl.call(this),this.status=1}I($p,Kl);function Us(c){this.g=c}I(Us,Bp),Us.prototype.ua=function(){ue(this.g,"a")},Us.prototype.ta=function(c){ue(this.g,new jp(c))},Us.prototype.sa=function(c){ue(this.g,new $p)},Us.prototype.ra=function(){ue(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Cw=function(){return new ka},Pw=function(){return ya()},Sw=Zr,xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},va.NO_ERROR=0,va.TIMEOUT=8,va.HTTP_ERROR=6,uc=va,sp.COMPLETE="complete",Rw=sp,Zd.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",se.prototype.listen=se.prototype.K,no=Zd,Aw=$i,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Iw=Qe}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});const Zg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Kf("@firebase/firestore");function Yi(){return Ts.logLevel}function ne(t,...e){if(Ts.logLevel<=we.DEBUG){const n=e.map(id);Ts.debug(`Firestore (${Ci}): ${t}`,...n)}}function Xn(t,...e){if(Ts.logLevel<=we.ERROR){const n=e.map(id);Ts.error(`Firestore (${Ci}): ${t}`,...n)}}function mi(t,...e){if(Ts.logLevel<=we.WARN){const n=e.map(id);Ts.warn(`Firestore (${Ci}): ${t}`,...n)}}function id(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function Ve(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class ax{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cx{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new kw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Tt(e)}}class lx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ux{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new hx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ot(0,0))}static max(){return new ge(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ho?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Ho{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const px=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Ho{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return px.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he($e.fromString(e))}static fromName(e){return new he($e.fromString(e).popFirst(5))}static empty(){return new he($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new $e(e.slice()))}}function mx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new $r(s,he.empty(),e)}function gx(t){return new $r(t.readTime,t.key,-1)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(ge.min(),he.empty(),-1)}static max(){return new $r(ge.max(),he.empty(),-1)}}function _x(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==yx)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ex(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ha(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class od{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}od.oe=-1;function Il(t){return t==null}function jc(t){return t===0&&1/t==-1/0}function wx(t){return typeof t=="number"&&Number.isInteger(t)&&!jc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t_(this.data.getIterator())}getIteratorFrom(e){return new t_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class t_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new _t(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xw("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const bx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=bx.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cd(t){const e=t.mapValue.fields.__previous_value__;return ad(e)?cd(e):e}function qo(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ad(t)?4:Ax(t)?9007199254740991:Ix(t)?10:11:pe()}function kn(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hr(s.timestampValue),a=Hr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Is(s.bytesValue).isEqual(Is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return tt(s.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return tt(s.integerValue)===tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=tt(s.doubleValue),a=tt(i.doubleValue);return o===a?jc(o)===jc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(e_(o)!==e_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!kn(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function Wo(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=As(t),r=As(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=tt(i.integerValue||i.doubleValue),l=tt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return n_(t.timestampValue,e.timestampValue);case 4:return n_(qo(t),qo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Is(i),l=Is(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Se(a[u],l[u]);if(h!==0)return h}return Se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Se(tt(i.latitude),tt(o.latitude));return a!==0?a:Se(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return r_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const f=i.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=Se(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:r_(g,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Qa.mapValue&&o===Qa.mapValue)return 0;if(i===Qa.mapValue)return 1;if(o===Qa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=Se(l[f],h[f]);if(p!==0)return p;const g=_i(a[l[f]],u[h[f]]);if(g!==0)return g}return Se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function n_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Hr(t),r=Hr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function r_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_i(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function yi(t){return Dh(t)}function Dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dh(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Lh(t){return!!t&&"integerValue"in t}function ld(t){return!!t&&"arrayValue"in t}function s_(t){return!!t&&"nullValue"in t}function i_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hc(t){return!!t&&"mapValue"in t}function Ix(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ax(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=yo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());hc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];hc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(yo(this.value))}}function Dw(t){const e=[];return xs(t.fields,(n,r)=>{const s=new mt([n]);if(hc(r)){const i=Dw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new It(e,0,ge.min(),ge.min(),ge.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new It(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new It(e,2,n,ge.min(),ge.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,ge.min(),ge.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $c{constructor(e,n){this.position=e,this.inclusive=n}}function o_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=_i(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function a_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lw{}class st extends Lw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Px(e,n,r):n==="array-contains"?new Ox(e,r):n==="in"?new Nx(e,r):n==="not-in"?new xx(e,r):n==="array-contains-any"?new Dx(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Cx(e,r):new kx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_i(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(_i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Lw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return Mw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Mw(t){return t.op==="and"}function Vw(t){return Sx(t)&&Mw(t)}function Sx(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Mh(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(Vw(t))return t.filters.map(e=>Mh(e)).join(",");{const e=t.filters.map(n=>Mh(n)).join(",");return`${t.op}(${e})`}}function Fw(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)}(t,e):t instanceof On?function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Fw(o,s.filters[a]),!0):!1}(t,e):void pe()}function Uw(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(Uw).join(" ,")+"}"}(t):"Filter"}class Px extends st{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class Cx extends st{constructor(e,n){super(e,"in",n),this.keys=Bw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kx extends st{constructor(e,n){super(e,"not-in",n),this.keys=Bw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class Ox extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ld(n)&&Wo(n.arrayValue,this.value)}}class Nx extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class xx extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wo(this.value.arrayValue,n)}}class Dx extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ld(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function c_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Lx(t,e,n,r,s,i,o)}function ud(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.ue=n}return e.ue}function hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!a_(t.startAt,e.startAt)&&a_(t.endAt,e.endAt)}function Vh(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mx(t,e,n,r,s,i,o,a){return new Al(t,e,n,r,s,i,o,a)}function jw(t){return new Al(t)}function l_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vx(t){return t.collectionGroup!==null}function vo(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _t(mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Hc(i,r))}),n.has(mt.keyField().canonicalString())||e.ce.push(new Hc(mt.keyField(),r))}return e.ce}function Sn(t){const e=_e(t);return e.le||(e.le=Fx(e,vo(t))),e.le}function Fx(t,e){if(t.limitType==="F")return c_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hc(s.field,i)});const n=t.endAt?new $c(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $c(t.startAt.position,t.startAt.inclusive):null;return c_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fh(t,e,n){return new Al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return hd(Sn(t),Sn(e))&&t.limitType===e.limitType}function $w(t){return`${ud(Sn(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Uw(s)).join(", ")}]`),Il(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yi(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Sl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=o_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,vo(r),s)||r.endAt&&!function(o,a,l){const u=o_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,vo(r),s))}(t,e)}function Ux(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hw(t){return(e,n)=>{let r=!1;for(const s of vo(t)){const i=Bx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Bx(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?_i(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new Ge(he.comparator);function Jn(){return jx}const qw=new Ge(he.comparator);function ro(...t){let e=qw;for(const n of t)e=e.insert(n.key,n);return e}function zw(t){let e=qw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function us(){return Eo()}function Ww(){return Eo()}function Eo(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const $x=new Ge(he.comparator),Hx=new _t(he.comparator);function ve(...t){let e=Hx;for(const n of t)e=e.add(n);return e}const qx=new _t(Se);function zx(){return qx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(e)?"-0":e}}function Kw(t){return{integerValue:""+t}}function Wx(t,e){return wx(e)?Kw(e):fd(t,e)}/**
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
 */class Pl{constructor(){this._=void 0}}function Kx(t,e,n){return t instanceof qc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ad(i)&&(i=cd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ko?Qw(t,e):t instanceof Go?Yw(t,e):function(s,i){const o=Gw(s,i),a=u_(o)+u_(s.Pe);return Lh(o)&&Lh(s.Pe)?Kw(a):fd(s.serializer,a)}(t,e)}function Gx(t,e,n){return t instanceof Ko?Qw(t,e):t instanceof Go?Yw(t,e):n}function Gw(t,e){return t instanceof zc?function(r){return Lh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qc extends Pl{}class Ko extends Pl{constructor(e){super(),this.elements=e}}function Qw(t,e){const n=Xw(e);for(const r of t.elements)n.some(s=>kn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends Pl{constructor(e){super(),this.elements=e}}function Yw(t,e){let n=Xw(e);for(const r of t.elements)n=n.filter(s=>!kn(s,r));return{arrayValue:{values:n}}}class zc extends Pl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function u_(t){return tt(t.integerValue||t.doubleValue)}function Xw(t){return ld(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qx(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ko&&s instanceof Ko||r instanceof Go&&s instanceof Go?gi(r.elements,s.elements,kn):r instanceof zc&&s instanceof zc?kn(r.Pe,s.Pe):r instanceof qc&&s instanceof qc}(t.transform,e.transform)}class Yx{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cl{}function Jw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dd(t.key,on.none()):new fa(t.key,t.data,on.none());{const n=t.data,r=Vt.empty();let s=new _t(mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new Wt(s.toArray()),on.none())}}function Xx(t,e,n){t instanceof fa?function(s,i,o){const a=s.value.clone(),l=f_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(s,i,o){if(!fc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=f_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Zw(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,r){return t instanceof fa?function(i,o,a,l){if(!fc(i.precondition,o))return a;const u=i.value.clone(),h=d_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,o,a,l){if(!fc(i.precondition,o))return a;const u=d_(i.fieldTransforms,l,o),h=o.data;return h.setAll(Zw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return fc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Jx(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Gw(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function h_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gi(r,s,(i,o)=>Qx(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fa extends Cl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends Cl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f_(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Gx(o,a,n[s]))}return r}function d_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Kx(i,o,e))}return r}class dd extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zx extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Xx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ww();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Jw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>h_(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>h_(n,r))}}class pd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return $x}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new pd(e,n,r,s)}}/**
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
 */class t2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,be;function r2(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function e0(t){if(t===void 0)return Xn("GRPC error has no .code"),$.UNKNOWN;switch(t){case nt.OK:return $.OK;case nt.CANCELLED:return $.CANCELLED;case nt.UNKNOWN:return $.UNKNOWN;case nt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case nt.INTERNAL:return $.INTERNAL;case nt.UNAVAILABLE:return $.UNAVAILABLE;case nt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case nt.NOT_FOUND:return $.NOT_FOUND;case nt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case nt.ABORTED:return $.ABORTED;case nt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case nt.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(be=nt||(nt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s2(){return new TextEncoder}/**
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
 */const i2=new _s([4294967295,4294967295],0);function p_(t){const e=s2().encode(t),n=new Tw;return n.update(e),new Uint8Array(n.digest())}function m_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,r],0),new _s([s,i],0)]}class md{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(r<0)throw new so(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_s.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(_s.fromNumber(r)));return s.compare(i2)===1&&(s=new _s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=p_(e),[r,s]=m_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new md(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=p_(e),[r,s]=m_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kl(ge.min(),s,new Ge(Se),Jn(),ve())}}class da{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class t0{constructor(e,n){this.targetId=e,this.me=n}}class n0{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class g_{constructor(){this.fe=0,this.ge=y_(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new da(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=y_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class o2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jn(),this.qe=__(),this.Qe=new Ge(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Vh(i))if(r===0){const o=new he(i.path);this.Ue(n,o,It.newNoDocument(o,ge.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Is(r).toUint8Array()}catch(l){if(l instanceof xw)return mi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new md(o,s,i)}catch(l){return mi(l instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Vh(a.target)){const l=new he(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,It.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new kl(e,n,this.Qe,this.ke,r);return this.ke=Jn(),this.qe=__(),this.Qe=new Ge(Se),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new g_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new g_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function __(){return new Ge(he.comparator)}function y_(){return new Ge(he.comparator)}const a2={asc:"ASCENDING",desc:"DESCENDING"},c2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l2={and:"AND",or:"OR"};class u2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uh(t,e){return t.useProto3Json||Il(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function h2(t,e){return Wc(t,e.toTimestamp())}function Pn(t){return Ve(!!t),ge.fromTimestamp(function(n){const r=Hr(n);return new ot(r.seconds,r.nanos)}(t))}function gd(t,e){return Bh(t,e).canonicalString()}function Bh(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function s0(t){const e=$e.fromString(t);return Ve(l0(e)),e}function jh(t,e){return gd(t.databaseId,e.path)}function Ou(t,e){const n=s0(e);if(n.get(1)!==t.databaseId.projectId)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(o0(n))}function i0(t,e){return gd(t.databaseId,e)}function f2(t){const e=s0(t);return e.length===4?$e.emptyPath():o0(e)}function $h(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o0(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function v_(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function d2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ve(h===void 0||typeof h=="string"),vt.fromBase64String(h||"")):(Ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),vt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:e0(u.code);return new ce(h,u.message||"")}(o);n=new n0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ou(t,r.document.name),i=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):ge.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=It.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new dc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ou(t,r.document),i=r.readTime?Pn(r.readTime):ge.min(),o=It.newNoDocument(s,i),a=r.removedTargetIds||[];n=new dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ou(t,r.document),i=r.removedTargetIds||[];n=new dc([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new n2(s,i),a=r.targetId;n=new t0(a,o)}}return n}function p2(t,e){let n;if(e instanceof fa)n={update:v_(t,e.key,e.value)};else if(e instanceof dd)n={delete:jh(t,e.key)};else if(e instanceof Jr)n={update:v_(t,e.key,e.data),updateMask:T2(e.fieldMask)};else{if(!(e instanceof Zx))return pe();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof qc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:h2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function m2(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Pn(s.updateTime):Pn(i);return o.isEqual(ge.min())&&(o=Pn(i)),new Yx(o,s.transformResults||[])}(n,e))):[]}function g2(t,e){return{documents:[i0(t,e.path)]}}function _2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i0(t,s);const i=function(u){if(u.length!==0)return c0(On.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:zs(p.field),direction:E2(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Uh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function y2(t){let e=f2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=a0(f);return p instanceof On&&Vw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(I){return new Hc(Ws(I.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Il(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new $c(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new $c(g,p)}(n.endAt)),Mx(e,s,o,i,a,"F",l,u)}function v2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function a0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ws(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ws(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ws(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ws(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return st.create(Ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>a0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function E2(t){return a2[t]}function w2(t){return c2[t]}function b2(t){return l2[t]}function zs(t){return{fieldPath:t.canonicalString()}}function Ws(t){return mt.fromServerFormat(t.fieldPath)}function c0(t){return t instanceof st?function(n){if(n.op==="=="){if(i_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(s_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(s_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:w2(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(s=>c0(s));return r.length===1?r[0]:{compositeFilter:{op:b2(n.op),filters:r}}}(t):pe()}function T2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function l0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.ct=e}}function A2(t){const e=y2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.un=new S2}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve($r.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class S2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vi(0)}static kn(){return new vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class C2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wo(r.mutation,s,Wt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ro();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Jn();const o=Eo(),a=function(){return Eo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Jr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),wo(h.mutation,u,h.mutation.getFieldMask(),ot.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new C2(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Eo();let s=new Ge((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Wt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(s.get(a.batchId)||ve()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=Ww();h.forEach(p=>{if(!i.has(p)){const g=Jw(n.get(p),r.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(us());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:a,changes:zw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=ro();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ro();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(f,p){return new Al(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,It.newInvalidDocument(h)))});let a=ro();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&wo(h.mutation,u,Wt.empty(),ot.now()),Sl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:A2(s.bundledQuery),readTime:Pn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class N2{constructor(){this.overlays=new Ge(he.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=us();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=us(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=us(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=us(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new t2(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class x2{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.Tr=new _t(ct.Er),this.dr=new _t(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ct(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new he(new $e([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new he(new $e([])),r=new ct(n,e),s=new ct(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return he.comparator(e.key,n.key)||Se(e.wr,n.wr)}static Ar(e,n){return Se(e.wr,n.wr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _t(ct.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new e2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(Se);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ct(new he(i),0);let a=new _t(Se);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ct(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.Mr=e,this.docs=function(){return new Ge(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():It.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_x(gx(h),r)<=0||(s.has(h.key)||Sl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new M2(this)}getSize(e){return H.resolve(this.size)}}class M2 extends P2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.persistence=e,this.Nr=new ki(n=>ud(n),hd),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _d,this.targetCount=0,this.kr=vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new od(0),this.Kr=!1,this.Kr=!0,this.$r=new x2,this.referenceDelegate=e(this),this.Ur=new V2(this),this.indexManager=new R2,this.remoteDocumentCache=function(s){return new L2(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new I2(n),this.Gr=new O2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new N2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new D2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new U2(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class U2 extends vx{constructor(e){super(),this.currentSequenceNumber=e}}class yd{constructor(e){this.persistence=e,this.Jr=new _d,this.Yr=null}static Zr(e){return new yd(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=he.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vd(e,n.fromCache,r,s)}}/**
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
 */class B2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return EC()?8:Ex(St())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new B2;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Yi()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(Yi()<=we.DEBUG&&ne("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Yi()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):H.resolve())}Yi(e,n){if(l_(n))return H.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fh(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,Fh(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return l_(n)||s.isEqual(ge.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(Yi()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qs(n)),this.rs(e,o,n,mx(s,-1)).next(a=>a))})}ts(e,n){let r=new _t(Hw(e));return n.forEach((s,i)=>{Sl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Yi()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",qs(n)),this.Ji.getDocumentsMatchingQuery(e,n,$r.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ge(Se),this._s=new ki(i=>ud(i),hd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function H2(t,e,n,r){return new $2(t,e,n,r)}async function u0(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function q2(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,p=f.keys();let g=H.resolve();return p.forEach(I=>{g=g.next(()=>h.getEntry(l,I)).next(P=>{const O=u.docVersions.get(I);Ve(O!==null),P.version.compareTo(O)<0&&(f.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function h0(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function z2(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(vt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(P,O,x){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(i,g))});let l=Jn(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(W2(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function W2(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function K2(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function G2(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Hh(t,e,n){const r=_e(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ha(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function E_(t,e,n){const r=_e(t);let s=ge.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=_e(l),p=f._s.get(h);return p!==void 0?H.resolve(f.os.get(p)):f.Ur.getTargetData(u,h)}(r,o,Sn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ve())).next(a=>(Q2(r,Ux(e),a),{documents:a,Ts:i})))}function Q2(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class w_{constructor(){this.activeTargetIds=zx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Y2{constructor(){this.so=new w_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new w_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ya=null;function Nu(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class eD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Nu(),l=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw mi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=J2[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Nu();return new Promise((o,a)=>{const l=new Iw;l.setWithCredentials(!0),l.listenOnce(Rw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uc.NO_ERROR:const h=l.getResponseJson();ne(bt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case uc.TIMEOUT:ne(bt,`RPC '${e}' ${i} timed out`),a(new ce($.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const f=l.getStatus();if(ne(bt,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(g.status);a(new ce(I,g.message))}else a(new ce($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ne(bt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(bt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Nu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cw(),a=Pw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Aw({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ne(bt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const I=new Z2({Io:O=>{g?ne(bt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(p||(ne(bt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),ne(bt,`RPC '${e}' stream ${s} sending:`,O),f.send(O))},To:()=>f.close()}),P=(O,x,A)=>{O.listen(x,E=>{try{A(E)}catch(N){setTimeout(()=>{throw N},0)}})};return P(f,no.EventType.OPEN,()=>{g||(ne(bt,`RPC '${e}' stream ${s} transport opened.`),I.yo())}),P(f,no.EventType.CLOSE,()=>{g||(g=!0,ne(bt,`RPC '${e}' stream ${s} transport closed`),I.So())}),P(f,no.EventType.ERROR,O=>{g||(g=!0,mi(bt,`RPC '${e}' stream ${s} transport errored:`,O),I.So(new ce($.UNAVAILABLE,"The operation could not be completed")))}),P(f,no.EventType.MESSAGE,O=>{var x;if(!g){const A=O.data[0];Ve(!!A);const E=A,N=E.error||((x=E[0])===null||x===void 0?void 0:x.error);if(N){ne(bt,`RPC '${e}' stream ${s} received error:`,N);const D=N.status;let M=function(y){const w=nt[y];if(w!==void 0)return e0(w)}(D),b=N.message;M===void 0&&(M=$.INTERNAL,b="Unknown error status: "+D+" with message "+N.message),g=!0,I.So(new ce(M,b)),f.close()}else ne(bt,`RPC '${e}' stream ${s} received:`,A),I.bo(A)}}),P(a,Sw.STAT_EVENT,O=>{O.stat===xh.PROXY?ne(bt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===xh.NOPROXY&&ne(bt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function xu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){return new u2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new f0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ce($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tD extends d0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=d2(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Pn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=$h(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Vh(l)?{documents:g2(i,l)}:{query:_2(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=r0(i,o.resumeToken);const u=Uh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Wc(i,o.snapshotVersion.toTimestamp());const u=Uh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=v2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=$h(this.serializer),n.removeTarget=e,this.a_(n)}}class nD extends d0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=m2(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=$h(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>p2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Bh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Bh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xn(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ds(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.L_.add(4),await pa(u),u.q_.set("Unknown"),u.L_.delete(4),await Nl(u)}(this))})}),this.q_=new sD(r,s)}}async function Nl(t){if(Ds(t))for(const e of t.B_)await e(!0)}async function pa(t){for(const e of t.B_)await e(!1)}function p0(t,e){const n=_e(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Td(n)?bd(n):Oi(n).r_()&&wd(n,e))}function Ed(t,e){const n=_e(t),r=Oi(n);n.N_.delete(e),r.r_()&&m0(n,e),n.N_.size===0&&(r.r_()?r.o_():Ds(n)&&n.q_.set("Unknown"))}function wd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).A_(e)}function m0(t,e){t.Q_.xe(e),Oi(t).R_(e)}function bd(t){t.Q_=new o2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.q_.v_()}function Td(t){return Ds(t)&&!Oi(t).n_()&&t.N_.size>0}function Ds(t){return _e(t).L_.size===0}function g0(t){t.Q_=void 0}async function oD(t){t.q_.set("Online")}async function aD(t){t.N_.forEach((e,n)=>{wd(t,e)})}async function cD(t,e){g0(t),Td(t)?(t.q_.M_(e),bd(t)):t.q_.set("Unknown")}async function lD(t,e,n){if(t.q_.set("Online"),e instanceof n0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kc(t,r)}else if(e instanceof dc?t.Q_.Ke(e):e instanceof t0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await h0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(vt.EMPTY_BYTE_STRING,h.snapshotVersion)),m0(i,l);const f=new Cr(h.target,l,u,h.sequenceNumber);wd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Kc(t,r)}}async function Kc(t,e,n){if(!ha(e))throw e;t.L_.add(1),await pa(t),t.q_.set("Offline"),n||(n=()=>h0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nl(t)})}function _0(t,e){return e().catch(n=>Kc(t,n,e))}async function xl(t){const e=_e(t),n=qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uD(e);)try{const s=await K2(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,hD(e,s)}catch(s){await Kc(e,s)}y0(e)&&v0(e)}function uD(t){return Ds(t)&&t.O_.length<10}function hD(t,e){t.O_.push(e);const n=qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function y0(t){return Ds(t)&&!qr(t).n_()&&t.O_.length>0}function v0(t){qr(t).start()}async function fD(t){qr(t).p_()}async function dD(t){const e=qr(t);for(const n of t.O_)e.m_(n.mutations)}async function pD(t,e,n){const r=t.O_.shift(),s=pd.from(r,e,n);await _0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xl(t)}async function mD(t,e){e&&qr(t).V_&&await async function(r,s){if(function(o){return r2(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();qr(r).s_(),await _0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xl(r)}}(t,e),y0(t)&&v0(t)}async function T_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Ds(n);n.L_.add(3),await pa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nl(n)}async function gD(t,e){const n=_e(t);e?(n.L_.delete(2),await Nl(n)):e||(n.L_.add(2),await pa(n),n.q_.set("Unknown"))}function Oi(t){return t.K_||(t.K_=function(n,r,s){const i=_e(n);return i.w_(),new tD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:oD.bind(null,t),Ro:aD.bind(null,t),mo:cD.bind(null,t),d_:lD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Td(t)?bd(t):t.q_.set("Unknown")):(await t.K_.stop(),g0(t))})),t.K_}function qr(t){return t.U_||(t.U_=function(n,r,s){const i=_e(n);return i.w_(),new nD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fD.bind(null,t),mo:mD.bind(null,t),f_:dD.bind(null,t),g_:pD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xl(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Id(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ad(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),ha(t))return new ce($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=ro(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.W_=new Ge(he.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ei{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ei(e,n,ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yD{constructor(){this.queries=A_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=A_(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ce($.ABORTED,"Firestore shutting down"))}}function A_(){return new ki(t=>$w(t),Rl)}async function vD(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new _D,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ad(o,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Rd(n)}async function ED(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wD(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Rd(n)}function bD(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Rd(t){t.Y_.forEach(e=>{e.next()})}var qh,R_;(R_=qh||(qh={})).ea="default",R_.Cache="cache";class TD{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.key=e}}class w0{constructor(e){this.key=e}}class ID{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=Hw(e),this.Ra=new ii(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new I_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),g=Sl(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;p&&g?p.data.isEqual(g.data)?I!==P&&(r.track({type:3,doc:g}),O=!0):this.ga(p,g)||(r.track({type:2,doc:g}),O=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),O=!0):p&&!g&&(r.track({type:1,doc:p}),O=!0,(l||u)&&(a=!0)),O&&(g?(o=o.add(g),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,I){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return P(g)-P(I)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ei(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new I_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new w0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new E0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ei.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RD{constructor(e){this.key=e,this.va=!1}}class SD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ki(a=>$w(a),Rl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ge(he.comparator),this.Na=new Map,this.La=new _d,this.Ba={},this.ka=new Map,this.qa=vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function PD(t,e,n=!0){const r=S0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await b0(r,e,n,!0),s}async function CD(t,e){const n=S0(t);await b0(n,e,!0,!1)}async function b0(t,e,n,r){const s=await G2(t.localStore,Sn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await kD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&p0(t.remoteStore,s),a}async function kD(t,e,n,r,s){t.Ka=(f,p,g)=>async function(P,O,x,A){let E=O.view.ma(x);E.ns&&(E=await E_(P.localStore,O.query,!1).then(({documents:b})=>O.view.ma(b,E)));const N=A&&A.targetChanges.get(O.targetId),D=A&&A.targetMismatches.get(O.targetId)!=null,M=O.view.applyChanges(E,P.isPrimaryClient,N,D);return P_(P,O.targetId,M.wa),M.snapshot}(t,f,p,g);const i=await E_(t.localStore,e,!0),o=new ID(e,i.Ts),a=o.ma(i.documents),l=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);P_(t,n,u.wa);const h=new AD(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function OD(t,e,n){const r=_e(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Rl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ed(r.remoteStore,s.targetId),zh(r,s.targetId)}).catch(ua)):(zh(r,s.targetId),await Hh(r.localStore,s.targetId,!0))}async function ND(t,e){const n=_e(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ed(n.remoteStore,r.targetId))}async function xD(t,e,n){const r=BD(t);try{const s=await function(o,a){const l=_e(o),u=ot.now(),h=a.reduce((g,I)=>g.add(I.key),ve());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=Jn(),P=ve();return l.cs.getEntries(g,h).next(O=>{I=O,I.forEach((x,A)=>{A.isValidDocument()||(P=P.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,I)).next(O=>{f=O;const x=[];for(const A of a){const E=Jx(A,f.get(A.key).overlayedDocument);E!=null&&x.push(new Jr(A.key,E,Dw(E.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,x,a)}).next(O=>{p=O;const x=O.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(g,O.batchId,x)})}).then(()=>({batchId:p.batchId,changes:zw(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ge(Se)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await ma(r,s.changes),await xl(r.remoteStore)}catch(s){const i=Ad(s,"Failed to persist write");n.reject(i)}}async function T0(t,e){const n=_e(t);try{const r=await z2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ve(o.va):s.removedDocuments.size>0&&(Ve(o.va),o.va=!1))}),await ma(n,r,e)}catch(r){await ua(r)}}function S_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(u=!0)}),u&&Rd(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DD(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ge(he.comparator);o=o.insert(i,It.newNoDocument(i,ge.min()));const a=ve().add(i),l=new kl(ge.min(),new Map,new Ge(Se),o,a);await T0(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Sd(r)}else await Hh(r.localStore,e,!1).then(()=>zh(r,e,n)).catch(ua)}async function LD(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await q2(n.localStore,e);A0(n,r,null),I0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ma(n,s)}catch(s){await ua(s)}}async function MD(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ve(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);A0(r,e,n),I0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ma(r,s)}catch(s){await ua(s)}}function I0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function A0(t,e,n){const r=_e(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||R0(t,r)})}function R0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ed(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Sd(t))}function P_(t,e,n){for(const r of n)r instanceof E0?(t.La.addReference(r.key,e),VD(t,r)):r instanceof w0?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||R0(t,r.key)):pe()}function VD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),Sd(t))}function Sd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new he($e.fromString(e)),r=t.qa.next();t.Na.set(r,new RD(n)),t.Oa=t.Oa.insert(n,r),p0(t.remoteStore,new Cr(Sn(jw(n.path)),r,"TargetPurposeLimboResolution",od.oe))}}async function ma(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=vd.Wi(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,p=>H.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>H.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!ha(f))throw f;ne("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),I=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(p,P)}}}(r.localStore,i))}async function FD(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await u0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new ce($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ma(n,r.hs)}}function UD(t,e){const n=_e(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function S0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=T0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DD.bind(null,e),e.Ca.d_=wD.bind(null,e.eventManager),e.Ca.$a=bD.bind(null,e.eventManager),e}function BD(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MD.bind(null,e),e}class C_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ol(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return H2(this.persistence,new j2,e.initialUser,this.serializer)}createPersistence(e){return new F2(yd.Zr,this.serializer)}createSharedClientState(e){return new Y2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>S_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FD.bind(null,this.syncEngine),await gD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yD}()}createDatastore(e){const n=Ol(e.databaseInfo.databaseId),r=function(i){return new eD(i)}(e.databaseInfo);return function(i,o,a,l){return new rD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new iD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>S_(this.syncEngine,n,0),function(){return b_.D()?new b_:new X2}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const f=new SD(s,i,o,a,l,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);ne("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await pa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $D{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Ow.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ne("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ne("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ad(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Du(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await u0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function k_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zD(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>T_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>T_(e.remoteStore,s)),t._onlineComponents=e}function qD(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Du(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qD(n))throw n;mi("Error using user provided cache. Falling back to memory cache: "+n),await Du(t,new C_)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Du(t,new C_);return t._offlineComponents}async function P0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await k_(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await k_(t,new jD))),t._onlineComponents}function WD(t){return P0(t).then(e=>e.syncEngine)}async function KD(t){const e=await P0(t),n=e.eventManager;return n.onListen=PD.bind(null,e.syncEngine),n.onUnlisten=OD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ND.bind(null,e.syncEngine),n}function GD(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new $D({next:p=>{o.enqueueAndForget(()=>ED(i,f)),p.fromCache&&l.source==="server"?u.reject(new ce($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new TD(a,h,{includeMetadataChanges:!0,_a:!0});return vD(i,f)}(await KD(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function C0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t,e,n){if(!n)throw new ce($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QD(t,e,n,r){if(e===!0&&r===!0)throw new ce($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N_(t){if(!he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function x_(t){if(he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pd(t);throw new ce($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=C0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ox;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=O_.get(n);r&&(ne("ComponentProvider","Removing Datastore"),O_.delete(n),r.terminate())}(this),Promise.resolve()}}function YD(t,e,n,r={}){var s;const i=(t=wi(t,Dl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Tt.MOCK_USER;else{a=VE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Tt(u)}t._authCredentials=new ax(new kw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ll(this.firestore,e,this._query)}}class an{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class Fr extends Ll{constructor(e,n,r){super(e,n,jw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new he(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function XF(t,e,...n){if(t=Ye(t),k0("collection","path",e),t instanceof Dl){const r=$e.fromString(e,...n);return x_(r),new Fr(t,null,r)}{if(!(t instanceof an||t instanceof Fr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return x_(r),new Fr(t.firestore,null,r)}}function JF(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Ow.newId()),k0("doc","path",e),t instanceof Dl){const r=$e.fromString(e,...n);return N_(r),new an(t,null,new he(r))}{if(!(t instanceof an||t instanceof Fr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return N_(r),new an(t.firestore,t instanceof Fr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new f0(this,"async_queue_retry"),this.Eu=()=>{const n=xu();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=xu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Vr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ha(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Id.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&pe()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Ml extends Dl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new XD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||O0(this),this._firestoreClient.terminate()}}function JD(t,e){const n=typeof t=="object"?t:Qf(),r=typeof t=="string"?t:"(default)",s=vl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=DE("firestore");i&&YD(s,...i)}return s}function Cd(t){return t._firestoreClient||O0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function O0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new Tx(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,C0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new HD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi(vt.fromBase64String(e))}catch(n){throw new ce($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bi(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class Nd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/^__.*__$/;class eL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fa(e,this.data,n,this.fieldTransforms)}}class N0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function x0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class xd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new xd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Gc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(x0(this.wu)&&ZD.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class tL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ol(e)}Nu(e,n,r,s=!1){return new xd({wu:e,methodName:n,Ou:r,path:mt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function D0(t){const e=t._freezeSettings(),n=Ol(t._databaseId);return new tL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L0(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Dd("Data must be an object, but it was:",o,r);const a=M0(r,o);let l,u;if(i.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=Wh(e,f,n);if(!o.contains(p))throw new ce($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);F0(h,p)||h.push(p)}l=new Wt(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new eL(new Vt(a),l,u)}class Fl extends kd{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fl}}function nL(t,e,n,r){const s=t.Nu(1,e,n);Dd("Data must be an object, but it was:",s,r);const i=[],o=Vt.empty();xs(r,(l,u)=>{const h=Ld(e,l,n);u=Ye(u);const f=s.Cu(h);if(u instanceof Fl)i.push(h);else{const p=Ul(u,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new Wt(i);return new N0(o,a,s.fieldTransforms)}function rL(t,e,n,r,s,i){const o=t.Nu(1,e,n),a=[Wh(e,r,n)],l=[s];if(i.length%2!=0)throw new ce($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Wh(e,i[p])),l.push(i[p+1]);const u=[],h=Vt.empty();for(let p=a.length-1;p>=0;--p)if(!F0(u,a[p])){const g=a[p];let I=l[p];I=Ye(I);const P=o.Cu(g);if(I instanceof Fl)u.push(g);else{const O=Ul(I,P);O!=null&&(u.push(g),h.set(g,O))}}const f=new Wt(u);return new N0(h,f,o.fieldTransforms)}function Ul(t,e){if(V0(t=Ye(t)))return Dd("Unsupported field value:",e,t),M0(t,e);if(t instanceof kd)return function(r,s){if(!x0(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ul(a,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Wc(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wc(s.serializer,i)}}if(r instanceof Od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bi)return{bytesValue:r0(s.serializer,r._byteString)};if(r instanceof an){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return fd(a.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Pd(r)}`)}(t,e)}function M0(t,e){const n={};return Nw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,s)=>{const i=Ul(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function V0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Od||t instanceof bi||t instanceof an||t instanceof kd||t instanceof Nd)}function Dd(t,e,n){if(!V0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pd(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Wh(t,e,n){if((e=Ye(e))instanceof Vl)return e._internalPath;if(typeof e=="string")return Ld(t,e);throw Gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const sL=new RegExp("[~\\*/\\[\\]]");function Ld(t,e,n){if(e.search(sL)>=0)throw Gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vl(...e.split("."))._internalPath}catch{throw Gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce($.INVALID_ARGUMENT,a+t+l)}function F0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(B0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iL extends U0{data(){return super.data()}}function B0(t,e){return typeof e=="string"?Ld(t,e):e instanceof Vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aL{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new Nd(i)}convertGeoPoint(e){return new Od(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ve(l0(r));const s=new zo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cL extends U0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(B0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pc extends cL{data(e={}){return super.data(e)}}class lL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pc(this._firestore,this._userDataWriter,r.key,r,new Xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new pc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new pc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:uL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class hL extends aL{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,n)}}function ZF(t){t=wi(t,Ll);const e=wi(t.firestore,Ml),n=Cd(e),r=new hL(e);return oL(t._query),GD(n,t._query).then(s=>new lL(e,r,t,s))}function eU(t,e,n){t=wi(t,an);const r=wi(t.firestore,Ml),s=j0(t.converter,e,n);return $0(r,[L0(D0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function $0(t,e){return function(r,s){const i=new Vr;return r.asyncQueue.enqueueAndForget(async()=>xD(await WD(r),s,i)),i.promise}(Cd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=D0(e)}set(e,n,r){this._verifyNotCommitted();const s=Lu(e,this._firestore),i=j0(s.converter,n,r),o=L0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,on.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Lu(e,this._firestore);let o;return o=typeof(n=Ye(n))=="string"||n instanceof Vl?rL(this._dataReader,"WriteBatch.update",i._key,n,r,s):nL(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,on.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Lu(e,this._firestore);return this._mutations=this._mutations.concat(new dd(n._key,on.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lu(t,e){if((t=Ye(t)).firestore!==e)throw new ce($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(t){return Cd(t=wi(t,Ml)),new fL(t,e=>$0(t,e))}(function(e,n=!0){(function(s){Ci=s})(Os),ws(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ml(new cx(r.getProvider("auth-internal")),new fx(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),In(Zg,"4.7.1",e),In(Zg,"4.7.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebasestorage.googleapis.com",q0="storageBucket",dL=2*60*1e3,pL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ln{constructor(e,n,r=0){super(Mu(e),`Firebase Storage: ${n} (${Mu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xe||(Xe={}));function Mu(t){return"storage/"+t}function Md(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Xe.UNKNOWN,t)}function mL(t){return new Je(Xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function gL(t){return new Je(Xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _L(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Xe.UNAUTHENTICATED,t)}function yL(){return new Je(Xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vL(t){return new Je(Xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function EL(){return new Je(Xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wL(){return new Je(Xe.CANCELED,"User canceled the upload/download.")}function bL(t){return new Je(Xe.INVALID_URL,"Invalid URL '"+t+"'.")}function TL(t){return new Je(Xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function IL(){return new Je(Xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+q0+"' property when initializing the app?")}function AL(){return new Je(Xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function RL(){return new Je(Xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function SL(t){return new Je(Xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Kh(t){return new Je(Xe.INVALID_ARGUMENT,t)}function z0(){return new Je(Xe.APP_DELETED,"The Firebase app was deleted.")}function PL(t){return new Je(Xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bo(t,e){return new Je(Xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xi(t){throw new Je(Xe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw TL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),I={bucket:1,path:3},P=n===H0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",x=new RegExp(`^https?://${P}/${s}/${O}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:g,indices:I,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<E.length;N++){const D=E[N],M=D.regex.exec(e);if(M){const b=M[D.indices.bucket];let _=M[D.indices.path];_||(_=""),r=new Kt(b,_),D.postModify(r);break}}if(r==null)throw bL(e);return r}}class CL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...O){u||(u=!0,e.apply(null,O))}function f(O){s=setTimeout(()=>{s=null,t(g,l())},O)}function p(){i&&clearTimeout(i)}function g(O,...x){if(u){p();return}if(O){p(),h.call(null,O,...x);return}if(l()||o){p(),h.call(null,O,...x);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let I=!1;function P(O){I||(I=!0,p(),!u&&(s!==null?(O||(a=2),clearTimeout(s),f(0)):O||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function OL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t){return t!==void 0}function xL(t){return typeof t=="object"&&!Array.isArray(t)}function Vd(t){return typeof t=="string"||t instanceof String}function L_(t){return Fd()&&t instanceof Blob}function Fd(){return typeof Blob<"u"}function M_(t,e,n,r){if(r<e)throw Kh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Kh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function W0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ys;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ys||(ys={}));/**
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
 */function DL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n,r,s,i,o,a,l,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ja(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ys.NO_ERROR,l=i.getStatus();if(!a||DL(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ys.ABORT;r(!1,new Ja(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ja(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());NL(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Md();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?z0():wL();o(l)}else{const l=EL();o(l)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=kL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ML(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function VL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BL(t,e,n,r,s,i,o=!0){const a=W0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return FL(u,e),ML(u,n),VL(u,i),UL(u,r),new LL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $L(...t){const e=jL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Fd())return new Blob(t);throw new Je(Xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function qL(t){if(typeof atob>"u")throw SL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vu{constructor(e,n){this.data=e,this.contentType=n||null}}function zL(t,e){switch(t){case wn.RAW:return new Vu(K0(e));case wn.BASE64:case wn.BASE64URL:return new Vu(G0(t,e));case wn.DATA_URL:return new Vu(KL(e),GL(e))}throw Md()}function K0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function WL(t){let e;try{e=decodeURIComponent(t)}catch{throw bo(wn.DATA_URL,"Malformed data URL.")}return K0(e)}function G0(t,e){switch(t){case wn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw bo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case wn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw bo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=qL(e)}catch(s){throw s.message.includes("polyfill")?s:bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Q0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bo(wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=QL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function KL(t){const e=new Q0(t);return e.base64?G0(wn.BASE64,e.rest):WL(e.rest)}function GL(t){return new Q0(t).contentType}function QL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){let r=0,s="";L_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(L_(this.data_)){const r=this.data_,s=HL(r,e,n);return s===null?null:new Sr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Sr(r,!0)}}static getBlob(...e){if(Fd()){const n=e.map(r=>r instanceof Sr?r.data_:r);return new Sr($L.apply(null,n))}else{const n=e.map(o=>Vd(o)?zL(wn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Sr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){let e;try{e=JSON.parse(t)}catch{return null}return xL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function XL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function X0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t,e){return e}class kt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||JL}}let Za=null;function ZL(t){return!Vd(t)||t.length<2?t:X0(t)}function J0(){if(Za)return Za;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(i,o){return ZL(o)}const n=new kt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new kt("size");return s.xform=r,t.push(s),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),Za=t,Za}function eM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Kt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function tM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return eM(r,t),r}function Z0(t,e,n){const r=Y0(e);return r===null?null:tM(t,r,n)}function nM(t,e,n,r){const s=Y0(e);if(s===null||!Vd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=Ud(p,n,r),I=W0({alt:"media",token:u});return g+I})[0]}function rM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class eb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){if(!t)throw Md()}function sM(t,e){function n(r,s){const i=Z0(t,s,e);return tb(i!==null),i}return n}function iM(t,e){function n(r,s){const i=Z0(t,s,e);return tb(i!==null),nM(i,s,t.host,t._protocol)}return n}function nb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=yL():s=_L():n.getStatus()===402?s=gL(t.bucket):n.getStatus()===403?s=vL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function oM(t){const e=nb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=mL(t.path)),i.serverResponse=s.serverResponse,i}return n}function aM(t,e,n){const r=e.fullServerUrl(),s=Ud(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new eb(s,i,iM(t,n),o);return a.errorHandler=oM(e),a}function cM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=cM(null,e)),r}function uM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let N=0;N<2;N++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=lM(e,r,s),h=rM(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Sr.getBlob(f,r,p);if(g===null)throw AL();const I={name:u.fullPath},P=Ud(i,t.host,t._protocol),O="POST",x=t.maxUploadRetryTime,A=new eb(P,O,sM(t,n),x);return A.urlParams=I,A.headers=o,A.body=g.uploadData(),A.errorHandler=nb(e),A}class hM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fM extends hM{initXhr(){this.xhr_.responseType="text"}}function rb(){return new fM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rs(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X0(this._location.path)}get storage(){return this._service}get parent(){const e=YL(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new Rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PL(e)}}function dM(t,e,n){t._throwIfRoot("uploadBytes");const r=uM(t.storage,t._location,J0(),new Sr(e,!0),n);return t.storage.makeRequestWithTokens(r,rb).then(s=>({metadata:s,ref:t}))}function pM(t){t._throwIfRoot("getDownloadURL");const e=aM(t.storage,t._location,J0());return t.storage.makeRequestWithTokens(e,rb).then(n=>{if(n===null)throw RL();return n})}function mM(t,e){const n=XL(t._location.path,e),r=new Kt(t._location.bucket,n);return new Rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t){return/^[A-Za-z]+:\/\//.test(t)}function _M(t,e){return new Rs(t,e)}function sb(t,e){if(t instanceof Bd){const n=t;if(n._bucket==null)throw IL();const r=new Rs(n,n._bucket);return e!=null?sb(r,e):r}else return e!==void 0?mM(t,e):t}function yM(t,e){if(e&&gM(e)){if(t instanceof Bd)return _M(t,e);throw Kh("To use ref(service, url), the first argument must be a Storage instance.")}else return sb(t,e)}function V_(t,e){const n=e==null?void 0:e[q0];return n==null?null:Kt.makeFromBucketSpec(n,t)}function vM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:VE(s,t.app.options.projectId))}class Bd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=H0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dL,this._maxUploadRetryTime=pL,this._requests=new Set,s!=null?this._bucket=Kt.makeFromBucketSpec(s,this._host):this._bucket=V_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=V_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){M_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){M_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new CL(z0());{const o=BL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const F_="@firebase/storage",U_="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="storage";function nU(t,e,n){return t=Ye(t),dM(t,e,n)}function rU(t){return t=Ye(t),pM(t)}function sU(t,e){return t=Ye(t),yM(t,e)}function EM(t=Qf(),e){t=Ye(t);const r=vl(t,ib).getImmediate({identifier:e}),s=DE("storage");return s&&wM(r,...s),r}function wM(t,e,n,r={}){vM(t,e,n,r)}function bM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Bd(n,r,s,e,Os)}function TM(){ws(new jr(ib,bM,"PUBLIC").setMultipleInstances(!0)),In(F_,U_,""),In(F_,U_,"esm2017")}TM();const IM=Yt(t=>{const e=ks(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=BE(n),s=GN(r),i=JD(r),o=EM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)}),B_=()=>{};let jd={},ob={},ab=null,cb={mark:B_,measure:B_};try{typeof window<"u"&&(jd=window),typeof document<"u"&&(ob=document),typeof MutationObserver<"u"&&(ab=MutationObserver),typeof performance<"u"&&(cb=performance)}catch{}const{userAgent:j_=""}=jd.navigator||{},zr=jd,Ue=ob,$_=ab,ec=cb;zr.document;const rr=!!Ue.documentElement&&!!Ue.head&&typeof Ue.addEventListener=="function"&&typeof Ue.createElement=="function",lb=~j_.indexOf("MSIE")||~j_.indexOf("Trident/");var He="classic",ub="duotone",Gt="sharp",Qt="sharp-duotone",AM=[He,ub,Gt,Qt],RM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},H_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},SM=["kit"],PM=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,CM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,kM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},OM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},NM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},xM={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},DM={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},LM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},hb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},MM=["solid","regular","light","thin","duotone","brands"],fb=[1,2,3,4,5,6,7,8,9,10],VM=fb.concat([11,12,13,14,15,16,17,18,19,20]),io={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},FM=[...Object.keys(xM),...MM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",io.GROUP,io.SWAP_OPACITY,io.PRIMARY,io.SECONDARY].concat(fb.map(t=>"".concat(t,"x"))).concat(VM.map(t=>"w-".concat(t))),UM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},BM={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},jM={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},q_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Zn="___FONT_AWESOME___",Gh=16,db="fa",pb="svg-inline--fa",Ss="data-fa-i2svg",Qh="data-fa-pseudo-element",$M="data-fa-pseudo-element-pending",$d="data-prefix",Hd="data-icon",z_="fontawesome-i2svg",HM="async",qM=["HTML","HEAD","STYLE","SCRIPT"],mb=(()=>{try{return!0}catch{return!1}})(),gb=[He,Gt,Qt];function ga(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[He]}})}const _b={...hb};_b[He]={...hb[He],...H_.kit,...H_["kit-duotone"]};const vs=ga(_b),Yh={...LM};Yh[He]={...Yh[He],...q_.kit,...q_["kit-duotone"]};const Qo=ga(Yh),Xh={...DM};Xh[He]={...Xh[He],...jM.kit};const Es=ga(Xh),Jh={...NM};Jh[He]={...Jh[He],...BM.kit};const zM=ga(Jh),WM=PM,yb="fa-layers-text",KM=CM,GM={...RM};ga(GM);const QM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fu=io,Ti=new Set;Object.keys(Qo[He]).map(Ti.add.bind(Ti));Object.keys(Qo[Gt]).map(Ti.add.bind(Ti));Object.keys(Qo[Qt]).map(Ti.add.bind(Ti));const YM=[...SM,...FM],To=zr.FontAwesomeConfig||{};function XM(t){var e=Ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function JM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ue&&typeof Ue.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=JM(XM(n));s!=null&&(To[r]=s)});const vb={styleDefault:"solid",familyDefault:"classic",cssPrefix:db,replacementClass:pb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};To.familyPrefix&&(To.cssPrefix=To.familyPrefix);const Ii={...vb,...To};Ii.autoReplaceSvg||(Ii.observeMutations=!1);const re={};Object.keys(vb).forEach(t=>{Object.defineProperty(re,t,{enumerable:!0,set:function(e){Ii[t]=e,Io.forEach(n=>n(re))},get:function(){return Ii[t]}})});Object.defineProperty(re,"familyPrefix",{enumerable:!0,set:function(t){Ii.cssPrefix=t,Io.forEach(e=>e(re))},get:function(){return Ii.cssPrefix}});zr.FontAwesomeConfig=re;const Io=[];function ZM(t){return Io.push(t),()=>{Io.splice(Io.indexOf(t),1)}}const dr=Gh,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eV(t){if(!t||!rr)return;const e=Ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ue.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ue.head.insertBefore(e,r),t}const tV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yo(){let t=12,e="";for(;t-- >0;)e+=tV[Math.random()*62|0];return e}function Ni(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function qd(t){return t.classList?Ni(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Eb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Eb(t[n]),'" '),"").trim()}function Bl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function zd(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function rV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function sV(t){let{transform:e,width:n=Gh,height:r=Gh,startCentered:s=!1}=t,i="";return s&&lb?i+="translate(".concat(e.x/dr-n/2,"em, ").concat(e.y/dr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/dr,"em), calc(-50% + ").concat(e.y/dr,"em)) "):i+="translate(".concat(e.x/dr,"em, ").concat(e.y/dr,"em) "),i+="scale(".concat(e.size/dr*(e.flipX?-1:1),", ").concat(e.size/dr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var iV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wb(){const t=db,e=pb,n=re.cssPrefix,r=re.replacementClass;let s=iV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let W_=!1;function Uu(){re.autoAddCss&&!W_&&(eV(wb()),W_=!0)}var oV={mixout(){return{dom:{css:wb,insertCss:Uu}}},hooks(){return{beforeDOMElementCreation(){Uu()},beforeI2svg(){Uu()}}}};const er=zr||{};er[Zn]||(er[Zn]={});er[Zn].styles||(er[Zn].styles={});er[Zn].hooks||(er[Zn].hooks={});er[Zn].shims||(er[Zn].shims=[]);var Tn=er[Zn];const bb=[],Tb=function(){Ue.removeEventListener("DOMContentLoaded",Tb),Qc=1,bb.map(t=>t())};let Qc=!1;rr&&(Qc=(Ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ue.readyState),Qc||Ue.addEventListener("DOMContentLoaded",Tb));function aV(t){rr&&(Qc?setTimeout(t,0):bb.push(t))}function _a(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Eb(t):"<".concat(e," ").concat(nV(n),">").concat(r.map(_a).join(""),"</").concat(e,">")}function K_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Bu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function cV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Zh(t){const e=cV(t);return e.length===1?e[0].toString(16):null}function lV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function G_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function ef(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=G_(e);typeof Tn.hooks.addPack=="function"&&!r?Tn.hooks.addPack(t,G_(e)):Tn.styles[t]={...Tn.styles[t]||{},...s},t==="fas"&&ef("fa",e)}const{styles:ls,shims:uV}=Tn,hV={[He]:Object.values(Es[He]),[Gt]:Object.values(Es[Gt]),[Qt]:Object.values(Es[Qt])};let Wd=null,Ib={},Ab={},Rb={},Sb={},Pb={};const fV={[He]:Object.keys(vs[He]),[Gt]:Object.keys(vs[Gt]),[Qt]:Object.keys(vs[Qt])};function dV(t){return~YM.indexOf(t)}function pV(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!dV(s)?s:null}const Cb=()=>{const t=r=>Bu(ls,(s,i,o)=>(s[o]=Bu(i,r,{}),s),{});Ib=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Ab=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Pb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ls||re.autoFetchSvg,n=Bu(uV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Rb=n.names,Sb=n.unicodes,Wd=jl(re.styleDefault,{family:re.familyDefault})};ZM(t=>{Wd=jl(t.styleDefault,{family:re.familyDefault})});Cb();function Kd(t,e){return(Ib[t]||{})[e]}function mV(t,e){return(Ab[t]||{})[e]}function kr(t,e){return(Pb[t]||{})[e]}function kb(t){return Rb[t]||{prefix:null,iconName:null}}function gV(t){const e=Sb[t],n=Kd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return Wd}const Gd=()=>({prefix:null,iconName:null,rest:[]});function jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=He}=e,r=vs[n][t],s=Qo[n][t]||Qo[n][r],i=t in Tn.styles?t:null;return s||i||null}const _V={[He]:Object.keys(Es[He]),[Gt]:Object.keys(Es[Gt]),[Qt]:Object.keys(Es[Qt])};function $l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[He]:"".concat(re.cssPrefix,"-").concat(He),[Gt]:"".concat(re.cssPrefix,"-").concat(Gt),[Qt]:"".concat(re.cssPrefix,"-").concat(Qt)};let s=null,i=He;const o=AM.filter(l=>l!==ub);o.forEach(l=>{(t.includes(r[l])||t.some(u=>_V[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const h=pV(re.cssPrefix,u);if(ls[u]?(u=hV[i].includes(u)?zM[i][u]:u,s=u,l.prefix=u):fV[i].indexOf(u)>-1?(s=u,l.prefix=jl(u,{family:i})):h?l.iconName=h:u!==re.replacementClass&&!o.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=s==="fa"?kb(l.iconName):{},p=kr(l.prefix,l.iconName);f.prefix&&(s=null),l.iconName=f.iconName||p||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!ls.far&&ls.fas&&!re.autoFetchSvg&&(l.prefix="fas")}return l},Gd());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Gt&&(ls.fass||re.autoFetchSvg)&&(a.prefix="fass",a.iconName=kr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===Qt&&(ls.fasds||re.autoFetchSvg)&&(a.prefix="fasds",a.iconName=kr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Wr()||"fas"),a}class yV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},ef(i,s[i]);const o=Es[He][i];o&&ef(o,s[i]),Cb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let Q_=[],Qs={};const oi={},vV=Object.keys(oi);function EV(t,e){let{mixoutsTo:n}=e;return Q_=t,Qs={},Object.keys(oi).forEach(r=>{vV.indexOf(r)===-1&&delete oi[r]}),Q_.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Qs[o]||(Qs[o]=[]),Qs[o].push(i[o])})}r.provides&&r.provides(oi)}),n}function tf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Qs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ps(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Qs[t]||[]).forEach(i=>{i.apply(null,n)})}function Kr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return oi[t]?oi[t].apply(null,e):void 0}function nf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Wr();if(e)return e=kr(n,e)||e,K_(Ob.definitions,n,e)||K_(Tn.styles,n,e)}const Ob=new yV,wV=()=>{re.autoReplaceSvg=!1,re.observeMutations=!1,Ps("noAuto")},bV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(Ps("beforeI2svg",t),Kr("pseudoElements2svg",t),Kr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;re.autoReplaceSvg===!1&&(re.autoReplaceSvg=!0),re.observeMutations=!0,aV(()=>{IV({autoReplaceSvgRoot:e}),Ps("watch",t)})}},TV={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=jl(t[0]);return{prefix:n,iconName:kr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(re.cssPrefix,"-"))>-1||t.match(WM))){const e=$l(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Wr(),iconName:kr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Wr();return{prefix:e,iconName:kr(e,t)||t}}}},Xt={noAuto:wV,config:re,dom:bV,parse:TV,library:Ob,findIconDefinition:nf,toHtml:_a},IV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ue}=t;(Object.keys(Tn.styles).length>0||re.autoFetchSvg)&&rr&&re.autoReplaceSvg&&Xt.dom.i2svg({node:e})};function Hl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>_a(n))}}),Object.defineProperty(t,"node",{get:function(){if(!rr)return;const n=Ue.createElement("div");return n.innerHTML=t.html,n.children}}),t}function AV(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(zd(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Bl({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function RV(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(re.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function Qd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:f=!1}=t,{width:p,height:g}=n.found?n:e,I=r==="fak",P=[re.replacementClass,s?"".concat(re.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let O={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:P,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const x=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};f&&(O.attributes[Ss]=""),a&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Yo())},children:[a]}),delete O.attributes.title);const A={...O,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...x,...h.styles}},{children:E,attributes:N}=n.found&&e.found?Kr("generateAbstractMask",A)||{children:[],attributes:{}}:Kr("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=E,A.attributes=N,o?RV(A):AV(A)}function Y_(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[Ss]="");const u={...o.styles};zd(s)&&(u.transform=sV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Bl(u);h.length>0&&(l.style=h);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function SV(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Bl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ju}=Tn;function rf(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(re.cssPrefix,"-").concat(Fu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Fu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Fu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const PV={found:!1,width:512,height:512};function CV(t,e){!mb&&!re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function sf(t,e){let n=e;return e==="fa"&&re.styleDefault!==null&&(e=Wr()),new Promise((r,s)=>{if(n==="fa"){const i=kb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ju[e]&&ju[e][t]){const i=ju[e][t];return r(rf(i))}CV(t,e),r({...PV,icon:re.showMissingIcons&&t?Kr("missingIconAbstract")||{}:{}})})}const X_=()=>{},of=re.measurePerformance&&ec&&ec.mark&&ec.measure?ec:{mark:X_,measure:X_},oo='FA "6.6.0"',kV=t=>(of.mark("".concat(oo," ").concat(t," begins")),()=>Nb(t)),Nb=t=>{of.mark("".concat(oo," ").concat(t," ends")),of.measure("".concat(oo," ").concat(t),"".concat(oo," ").concat(t," begins"),"".concat(oo," ").concat(t," ends"))};var Yd={begin:kV,end:Nb};const mc=()=>{};function J_(t){return typeof(t.getAttribute?t.getAttribute(Ss):null)=="string"}function OV(t){const e=t.getAttribute?t.getAttribute($d):null,n=t.getAttribute?t.getAttribute(Hd):null;return e&&n}function NV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(re.replacementClass)}function xV(){return re.autoReplaceSvg===!0?gc.replace:gc[re.autoReplaceSvg]||gc.replace}function DV(t){return Ue.createElementNS("http://www.w3.org/2000/svg",t)}function LV(t){return Ue.createElement(t)}function xb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?DV:LV}=e;if(typeof t=="string")return Ue.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(xb(i,{ceFn:n}))}),r}function MV(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const gc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(xb(n),e)}),e.getAttribute(Ss)===null&&re.keepOriginalSource){let n=Ue.createComment(MV(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~qd(e).indexOf(re.replacementClass))return gc.replace(t);const r=new RegExp("".concat(re.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===re.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>_a(i)).join(`
`);e.setAttribute(Ss,""),e.innerHTML=s}};function Z_(t){t()}function Db(t,e){const n=typeof e=="function"?e:mc;if(t.length===0)n();else{let r=Z_;re.mutateApproach===HM&&(r=zr.requestAnimationFrame||Z_),r(()=>{const s=xV(),i=Yd.begin("mutate");t.map(s),i(),n()})}}let Xd=!1;function Lb(){Xd=!0}function af(){Xd=!1}let Yc=null;function ey(t){if(!$_||!re.observeMutations)return;const{treeCallback:e=mc,nodeCallback:n=mc,pseudoElementsCallback:r=mc,observeMutationsRoot:s=Ue}=t;Yc=new $_(i=>{if(Xd)return;const o=Wr();Ni(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!J_(a.addedNodes[0])&&(re.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&re.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&J_(a.target)&&~QM.indexOf(a.attributeName))if(a.attributeName==="class"&&OV(a.target)){const{prefix:l,iconName:u}=$l(qd(a.target));a.target.setAttribute($d,l||o),u&&a.target.setAttribute(Hd,u)}else NV(a.target)&&n(a.target)})}),rr&&Yc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function VV(){Yc&&Yc.disconnect()}function FV(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function UV(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=$l(qd(t));return s.prefix||(s.prefix=Wr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=mV(s.prefix,t.innerText)||Kd(s.prefix,Zh(t.innerText))),!s.iconName&&re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function BV(t){const e=Ni(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return re.autoA11y&&(n?e["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(r||Yo()):(e["aria-hidden"]="true",e.focusable="false")),e}function jV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ty(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=UV(t),i=BV(t),o=tf("parseNodeAttributes",{},t);let a=e.styleParser?FV(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:$V}=Tn;function Mb(t){const e=re.autoReplaceSvg==="nest"?ty(t,{styleParser:!1}):ty(t);return~e.extra.classes.indexOf(yb)?Kr("generateLayersText",t,e):Kr("generateSvgReplacementMutation",t,e)}let Nn=new Set;gb.map(t=>{Nn.add("fa-".concat(t))});Object.keys(vs[He]).map(Nn.add.bind(Nn));Object.keys(vs[Gt]).map(Nn.add.bind(Nn));Object.keys(vs[Qt]).map(Nn.add.bind(Nn));Nn=[...Nn];function ny(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();const n=Ue.documentElement.classList,r=h=>n.add("".concat(z_,"-").concat(h)),s=h=>n.remove("".concat(z_,"-").concat(h)),i=re.autoFetchSvg?Nn:gb.map(h=>"fa-".concat(h)).concat(Object.keys($V));i.includes("fa")||i.push("fa");const o=[".".concat(yb,":not([").concat(Ss,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ss,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ni(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Yd.begin("onTree"),u=a.reduce((h,f)=>{try{const p=Mb(f);p&&h.push(p)}catch(p){mb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,f)=>{Promise.all(u).then(p=>{Db(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),f(p)})})}function HV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mb(t).then(n=>{n&&Db([n],e)})}function qV(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:nf(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:nf(s||{})),t(r,{...n,mask:s})}}const zV=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=bn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:g}=t;return Hl({type:"icon",...t},()=>(Ps("beforeDOMElementCreation",{iconDefinition:t,params:e}),re.autoA11y&&(o?u["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(a||Yo()):(u["aria-hidden"]="true",u.focusable="false")),Qd({icons:{main:rf(g),mask:s?rf(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:{...bn,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var WV={mixout(){return{icon:qV(zV)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ny,t.nodeCallback=HV,t}}},provides(t){t.i2svg=function(e){const{node:n=Ue,callback:r=()=>{}}=e;return ny(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:f}=n;return new Promise((p,g)=>{Promise.all([sf(r,o),u.iconName?sf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[P,O]=I;p([e,Qd({icons:{main:P,mask:O},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Bl(o);a.length>0&&(r.style=a);let l;return zd(i)&&(l=Kr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},KV={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Hl({type:"layer"},()=>{Ps("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(re.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},GV={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Hl({type:"counter",content:t},()=>(Ps("beforeDOMElementCreation",{content:t,params:e}),SV({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(re.cssPrefix,"-layers-counter"),...r]}})))}}}},QV={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=bn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Hl({type:"text",content:t},()=>(Ps("beforeDOMElementCreation",{content:t,params:e}),Y_({content:t,transform:{...bn,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(re.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(lb){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return re.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Y_({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const YV=new RegExp('"',"ug"),ry=[1105920,1112319],sy={FontAwesome:{normal:"fas",400:"fas"},...OM,...kM,...UM},cf=Object.keys(sy).reduce((t,e)=>(t[e.toLowerCase()]=sy[e],t),{}),XV=Object.keys(cf).reduce((t,e)=>{const n=cf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function JV(t){const e=t.replace(YV,""),n=lV(e,0),r=n>=ry[0]&&n<=ry[1],s=e.length===2?e[0]===e[1]:!1;return{value:Zh(s?e[0]:e),isSecondary:r||s}}function ZV(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(cf[n]||{})[s]||XV[n]}function iy(t,e){const n="".concat($M).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ni(t.children).filter(p=>p.getAttribute(Qh)===e)[0],a=zr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(KM),h=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){const p=a.getPropertyValue("content");let g=ZV(l,h);const{value:I,isSecondary:P}=JV(p),O=u[0].startsWith("FontAwesome");let x=Kd(g,I),A=x;if(O){const E=gV(I);E.iconName&&E.prefix&&(x=E.iconName,g=E.prefix)}if(x&&!P&&(!o||o.getAttribute($d)!==g||o.getAttribute(Hd)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);const E=jV(),{extra:N}=E;N.attributes[Qh]=e,sf(x,g).then(D=>{const M=Qd({...E,icons:{main:D,mask:Gd()},prefix:g,iconName:A,extra:N,watchable:!0}),b=Ue.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=M.map(_=>_a(_)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function e4(t){return Promise.all([iy(t,"::before"),iy(t,"::after")])}function t4(t){return t.parentNode!==document.head&&!~qM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Qh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function oy(t){if(rr)return new Promise((e,n)=>{const r=Ni(t.querySelectorAll("*")).filter(t4).map(e4),s=Yd.begin("searchPseudoElements");Lb(),Promise.all(r).then(()=>{s(),af(),e()}).catch(()=>{s(),af(),n()})})}var n4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=oy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ue}=e;re.searchPseudoElements&&oy(n)}}};let ay=!1;var r4={mixout(){return{dom:{unwatch(){Lb(),ay=!0}}}},hooks(){return{bootstrap(){ey(tf("mutationObserverCallbacks",{}))},noAuto(){VV()},watch(t){const{observeMutationsRoot:e}=t;ay?af():ey(tf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const cy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var s4={mixout(){return{parse:{transform:t=>cy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=cy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:f};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const $u={x:0,y:0,width:"100%",height:"100%"};function ly(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function i4(t){return t.tag==="g"?t.children:[t]}var o4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?$l(n.split(" ").map(s=>s.trim())):Gd();return r.prefix||(r.prefix=Wr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:f}=i,p=rV({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...$u,fill:"white"}},I=u.children?{children:u.children.map(ly)}:{},P={tag:"g",attributes:{...p.inner},children:[ly({tag:u.tag,attributes:{...u.attributes,...p.path},...I})]},O={tag:"g",attributes:{...p.outer},children:[P]},x="mask-".concat(o||Yo()),A="clip-".concat(o||Yo()),E={tag:"mask",attributes:{...$u,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,O]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:i4(f)},E]};return n.push(N,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")"),...$u}}),{children:n,attributes:r}}}},a4={provides(t){let e=!1;zr.matchMedia&&(e=zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},c4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},l4=[oV,WV,KV,GV,QV,n4,r4,s4,o4,a4,c4];EV(l4,{mixoutsTo:Xt});Xt.noAuto;const u4=Xt.config,h4=Xt.library;Xt.dom;const lf=Xt.parse;Xt.findIconDefinition;Xt.toHtml;const f4=Xt.icon;Xt.layer;Xt.text;Xt.counter;function uy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Bn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?uy(Object(n),!0).forEach(function(r){Dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):uy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function d4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function p4(t){var e=d4(t,"string");return typeof e=="symbol"?e:e+""}function Xc(t){"@babel/helpers - typeof";return Xc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xc(t)}function Dt(t,e,n){return e=p4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function g4(t,e){if(t==null)return{};var n=m4(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var _4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vb={exports:{}};(function(t){(function(e){var n=function(x,A,E){if(!u(A)||f(A)||p(A)||g(A)||l(A))return A;var N,D=0,M=0;if(h(A))for(N=[],M=A.length;D<M;D++)N.push(n(x,A[D],E));else{N={};for(var b in A)Object.prototype.hasOwnProperty.call(A,b)&&(N[x(b,E)]=n(x,A[b],E))}return N},r=function(x,A){A=A||{};var E=A.separator||"_",N=A.split||/(?=[A-Z])/;return x.split(N).join(E)},s=function(x){return I(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(A,E){return E?E.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var A=s(x);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(x,A){return r(x,A).toLowerCase()},a=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},h=function(x){return a.call(x)=="[object Array]"},f=function(x){return a.call(x)=="[object Date]"},p=function(x){return a.call(x)=="[object RegExp]"},g=function(x){return a.call(x)=="[object Boolean]"},I=function(x){return x=x-0,x===x},P=function(x,A){var E=A&&"process"in A?A.process:A;return typeof E!="function"?x:function(N,D){return E(N,x,D)}},O={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,A){return n(P(s,A),x)},decamelizeKeys:function(x,A){return n(P(o,A),x,A)},pascalizeKeys:function(x,A){return n(P(i,A),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(_4)})(Vb);var y4=Vb.exports,v4=["class","style"];function E4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=y4.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function w4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Fb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Fb(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=w4(h);break;case"style":l.style=E4(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=g4(n,v4);return gt(t.tag,Bn(Bn(Bn({},e),{},{class:s.class,style:Bn(Bn({},s.style),o)},s.attrs),a),r)}var Ub=!1;try{Ub=!0}catch{}function b4(){if(!Ub&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Hu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Dt({},t,e):{}}function T4(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Dt(Dt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function hy(t){if(t&&Xc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(lf.icon)return lf.icon(t);if(t===null)return null;if(Xc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var I4=Dn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Le(function(){return hy(e.icon)}),i=Le(function(){return Hu("classes",T4(e))}),o=Le(function(){return Hu("transform",typeof e.transform=="string"?lf.transform(e.transform):e.transform)}),a=Le(function(){return Hu("mask",hy(e.mask))}),l=Le(function(){return f4(s.value,Bn(Bn(Bn(Bn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});dn(l,function(h){if(!h)return b4("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Le(function(){return l.value?Fb(l.value.abstract[0],{},r):null});return function(){return u.value}}});const A4={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},R4={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},S4=R4,P4={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},C4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},k4={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};u4.autoAddCss=!1;h4.add(A4,C4,S4,k4,P4);const O4=Yt(t=>{t.vueApp.component("font-awesome-icon",I4)}),N4=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Bb;const ql=t=>Bb=t,jb=Symbol();function uf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ao;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ao||(Ao={}));function x4(){const t=yf(!0),e=t.run(()=>Bt({}));let n=[],r=[];const s=Af({install(i){ql(s),s._a=i,i.provide(jb,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!N4?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const $b=()=>{};function fy(t,e,n,r=$b){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ea()&&yc(s),s}function $s(t,...e){t.slice().forEach(n=>{n(...e)})}const D4=t=>t(),dy=Symbol(),qu=Symbol();function hf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];uf(s)&&uf(r)&&t.hasOwnProperty(n)&&!rt(r)&&!Nr(r)?t[n]=hf(s,r):t[n]=r}return t}const L4=Symbol();function M4(t){return!uf(t)||!t.hasOwnProperty(L4)}const{assign:pr}=Object;function V4(t){return!!(rt(t)&&t.effect)}function F4(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=eI(n.state.value[t]);return pr(h,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=Af(Le(()=>{ql(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return l=Hb(t,u,e,n,r,!0),l}function Hb(t,e,n={},r,s,i){let o;const a=pr({actions:{}},n),l={deep:!0};let u,h,f=[],p=[],g;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),Bt({});let P;function O(_){let y;u=h=!1,typeof _=="function"?(_(r.state.value[t]),y={type:Ao.patchFunction,storeId:t,events:g}):(hf(r.state.value[t],_),y={type:Ao.patchObject,payload:_,storeId:t,events:g});const w=P=Symbol();xn().then(()=>{P===w&&(u=!0)}),h=!0,$s(f,y,r.state.value[t])}const x=i?function(){const{state:y}=n,w=y?y():{};this.$patch(C=>{pr(C,w)})}:$b;function A(){o.stop(),f=[],p=[],r._s.delete(t)}const E=(_,y="")=>{if(dy in _)return _[qu]=y,_;const w=function(){ql(r);const C=Array.from(arguments),S=[],T=[];function me(te){S.push(te)}function ye(te){T.push(te)}$s(p,{args:C,name:w[qu],store:D,after:me,onError:ye});let J;try{J=_.apply(this&&this.$id===t?this:D,C)}catch(te){throw $s(T,te),te}return J instanceof Promise?J.then(te=>($s(S,te),te)).catch(te=>($s(T,te),Promise.reject(te))):($s(S,J),J)};return w[dy]=!0,w[qu]=y,w},N={_p:r,$id:t,$onAction:fy.bind(null,p),$patch:O,$reset:x,$subscribe(_,y={}){const w=fy(f,_,y.detached,()=>C()),C=o.run(()=>dn(()=>r.state.value[t],S=>{(y.flush==="sync"?h:u)&&_({storeId:t,type:Ao.direct,events:g},S)},pr({},l,y)));return w},$dispose:A},D=Yr(N);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||D4)(()=>r._e.run(()=>(o=yf()).run(()=>e({action:E}))));for(const _ in b){const y=b[_];if(rt(y)&&!V4(y)||Nr(y))i||(I&&M4(y)&&(rt(y)?y.value=I[_]:hf(y,I[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const w=E(y,_);b[_]=w,a.actions[_]=y}}return pr(D,b),pr(Ae(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:_=>{O(y=>{pr(y,_)})}}),r._p.forEach(_=>{pr(D,o.run(()=>_({store:D,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(D.$state,I),u=!0,h=!0,D}function U4(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=Of();return a=a||(u?Rt(jb,null):null),a&&ql(a),a=Bb,a._s.has(r)||(i?Hb(r,e,s,a):F4(r,s,a)),a._s.get(r)}return o.$id=r,o}function B4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function j4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const $4=Yt(t=>{const e=x4();t.vueApp.use(e)});var py=/^(GTM|G)-[0-9A-Z]+$/;function zu(t){if(typeof t!="string"||!py.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${py}).${n}`)}}function ao(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function ai(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(ao(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function H4(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var q4=class{constructor(t){Ki(this,"id");Ki(this,"options");Ki(this,"scriptElements",[]);Ki(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)zu(typeof e=="string"?e:e.id);else zu(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!H4(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=ai(n,{...this.options}):r=ai(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=ai(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?ao(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&ao(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&ao(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&ao(window,this.options.dataLayerName).push(t)}},dt;function z4(t,e={id:""}){e={trackOnNextTick:!1,...e},dt=new q4(e),t.config.globalProperties.$gtm=dt,dt.isInBrowserContext()&&(e.vueRouter&&W4(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),dt.options.enabled&&dt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")ai(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),ai(n.id,r)}}):ai(e.id,e))),t.provide("gtm",e)}function W4(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,I;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?dt!=null&&dt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(dt!=null&&dt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},f=((I=(g=e.options)==null?void 0:g.history)==null?void 0:I.base)??"";f.endsWith("/")||(f+="/"),f+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?xn(()=>{dt==null||dt.trackView(u,f,h)}):dt==null||dt.trackView(u,f,h)})}function K4(t){return{install:e=>z4(e,t)}}const G4=Yt(t=>{const e=ks().public,n=XN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(K4({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:yt(),trackOnNextTick:!1}))}),Q4=[TS,NS,JP,eC,tC,nC,sC,iC,oC,IM,O4,$4,G4],Y4=Dn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return ms(sa,jn(r)),()=>gt(t.vnode,{ref:t.vnodeRef})}}),X4=Dn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Me(),i=Bt(),o=Rt(sa,null);let a;r({pageRef:i});const l=Rt(rE,null);let u;const h=s.deferHydration();if(s.isHydrating){const f=s.hooks.hookOnce("app:error",h);yt().beforeEach(f)}return t.pageKey&&dn(()=>t.pageKey,(f,p)=>{f!==p&&s.callHook("page:loading:start")}),()=>gt(PE,{name:t.name,route:t.route,...e},{default:f=>{const p=Z4(o,f.route,f.Component),g=o&&o.matched.length===f.route.matched.length;if(!f.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(f.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const I=Th(f,t.pageKey);!s.isHydrating&&!eF(o,f.route,f.Component)&&a===I&&s.callHook("page:loading:end"),a=I;const P=!!(t.transition??f.route.meta.pageTransition??hh),O=P&&J4([t.transition,f.route.meta.pageTransition,hh,{onAfterLeave:()=>{s.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),x=t.keepalive??f.route.meta.keepalive??X1;return u=CE(ul,P&&O,FP(x,gt(Lf,{suspensible:!0,onPending:()=>s.callHook("page:start",f.Component),onResolve:()=>{xn(()=>s.callHook("page:finish",f.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const A=gt(Y4,{key:I||void 0,vnode:n.default?gt(Nt,void 0,n.default(f)):f.Component,route:f.route,renderKey:I||void 0,trackRootNodes:P,vnodeRef:i});return x&&(A.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),A}}))).default(),u}})}});function J4(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Wf(n.onAfterLeave):void 0}));return tE(...e)}function Z4(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Th({route:e,Component:n})!==Th({route:t,Component:n})}function eF(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const tF=Dn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Pr[t.name]().then(r=>r.default||r);return()=>gt(n,t.layoutProps,e.slots)}}),nF=Dn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Me(),r=Rt(sa),s=r===jf()?MP():r,i=Le(()=>{let l=et(t.name)??s.meta.layout??"default";return l&&!(l in Pr)&&t.fallback&&(l=et(t.fallback)),l}),o=Bt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);yt().beforeEach(l)}return()=>{const l=i.value&&i.value in Pr,u=s.meta.layoutTransition??Y1;return CE(ul,l&&u,{default:()=>gt(Lf,{suspensible:!0,onResolve:()=>{xn(a)}},{default:()=>gt(rF,{layoutProps:Nv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),rF=Dn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&ms(rE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Pr)?(s=(r=e.slots).default)==null?void 0:s.call(r):gt(tF,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),zl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sF={};function iF(t,e){const n=X4,r=nF;return Mt(),wr(r,null,{default:yn(()=>[Pe(n)]),_:1})}const oF=zl(sF,[["render",iF]]),aF=Bf("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),my=U4("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Me(),r=yt();try{const s=await xO(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Me();try{await VO(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Me();MO(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),cF={class:"navbar navbar-expand-md navbar-light bg-light"},lF=je("span",{class:"navbar-toggler-icon"},null,-1),uF=[lF],hF={class:"navbar-nav"},fF={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},dF={class:"navbar-nav ml-auto"};function pF(t,e,n,r,s,i){const o=rx;return Mt(),xo("nav",cF,[Pe(o,{class:"navbar-brand",to:"/"},{default:yn(()=>[nn("Who's Jimmy")]),_:1}),je("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},uF),je("div",{class:Jo(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[je("ul",hF,[Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:yn(()=>[nn("Bio")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:yn(()=>[nn("Portfolio ")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:yn(()=>[nn("For Sale")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:yn(()=>[nn("Cool Stuff")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:yn(()=>[nn("Contact Us")]),_:1})])],2),s.isAuth?(Mt(),xo("div",fF,[je("ul",dF,[Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:yn(()=>[nn(_f(t.user?t.user.email:""),1)]),_:1}),je("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):oA("",!0)])}const mF={data(){return{visible:!1,isAuth:!1}},computed:{...B4(my,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...j4(my,{signOut:"signOut"})}},gF=zl(mF,[["render",pF]]),_F=t=>(Gy("data-v-063d9b19"),t=t(),Qy(),t),yF={class:"page-footer font-small bg-light navbar-fixed-bottom"},vF={class:"container"},EF={class:"py-3 pt-3"},wF={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},bF={href:"https://www.facebook.com/whosjimmy"},TF={href:"https://twitter.com/jimmyclaws"},IF={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"},AF=_F(()=>je("div",{class:"footer-copyright text-center font-small"},[je("div",null,[nn("© 2024 Copyright: "),je("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),je("div",null,"Disclaimer: All images are copyright to their respective owners."),je("div",null,[nn("A "),je("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),nn(" creation.")])],-1));function RF(t,e){const n=Oo("font-awesome-icon");return Mt(),xo("footer",yF,[je("div",vF,[je("div",EF,[je("a",wF,[Pe(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),je("a",bF,[Pe(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),je("a",TF,[Pe(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),je("a",IF,[Pe(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),AF])}const SF={},PF=zl(SF,[["render",RF],["__scopeId","data-v-063d9b19"]]),CF=t=>(Gy("data-v-5f25e24b"),t=t(),Qy(),t),kF={class:"text-center my-0 page"},OF={class:"body"},NF=CF(()=>je("img",{src:aF,alt:"Error Image"},null,-1)),xF={head(){return{title:"Error"}},components:{appHeader:gF,appFooter:PF}},DF=Dn({...xF,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Me();Qm({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{Qm({title:n.public.SITE_TITLE}),iE({redirect:"/"})};return(i,o)=>{var u;const a=Oo("app-header"),l=Oo("app-footer");return Mt(),xo("div",kF,[Pe(a),je("div",OF,[NF,je("h2",null,"Error: "+_f((u=t.error)==null?void 0:u.statusCode),1),je("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Pe(l)])}}}),LF=zl(DF,[["__scopeId","data-v-5f25e24b"]]),MF={key:0},gy={__name:"nuxt-root",setup(t){const e=()=>null,n=Me(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);yt().beforeEach(l)}const s=!1;ms(sa,jf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=dl(),o=!1;iv((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),IR(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Ks(l)),!1});const a=!1;return(l,u)=>(Mt(),wr(Lf,{onResolve:et(r)},{default:yn(()=>[et(o)?(Mt(),xo("div",MF)):et(i)?(Mt(),wr(et(LF),{key:1,error:et(i)},null,8,["error"])):et(a)?(Mt(),wr(et(e),{key:2,context:et(a)},null,8,["context"])):et(s)?(Mt(),wr(vI(et(s)),{key:3})):(Mt(),wr(et(oF),{key:4}))]),_:1},8,["onResolve"]))}};let _y;{let t;_y=async function(){var o,a;if(t)return t;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?zA(gy):qA(gy),s=nR({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||pl(l)}r.config.errorHandler=i;try{await iR(s,Q4)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(eR),await s.hooks.callHook("app:mounted",r),await xn()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=_y().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{qF as $,pI as A,dn as B,rt as C,Yr as D,na as E,Nt as F,Le as G,Nr as H,Br as I,Rt as J,ms as K,xn as L,Bf as M,Oo as N,$F as O,el as P,wr as Q,jF as R,Jo as S,ul as T,FF as U,iA as V,sa as W,KF as X,TR as Y,XN as Z,zl as _,j4 as a,gF as a0,PF as a1,X4 as a2,U4 as a3,Me as a4,XF as a5,ZF as a6,eU as a7,JF as a8,tU as a9,je as b,xo as c,Pe as d,yn as e,rx as f,nn as g,Qy as h,et as i,WF as j,zF as k,oA as l,B4 as m,EM as n,Mt as o,Gy as p,sU as q,BF as r,nU as s,_f as t,my as u,HF as v,UF as w,rU as x,al as y,Bt as z};
