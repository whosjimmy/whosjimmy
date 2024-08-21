const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DGIQxSdg.js","./DtK9rYMb.js","./b_BOGTgr.js","./RjvQRQLJ.js","./index.CwtG1KP7.css","./b4CWjEYb.js","./BxLJdw46.js","./BkqUFQQF.js","./BfU7NINW.js","./Gallery.B_nrwMtm.css","./Film.KBkYyf_R.css","./Film.RcEDhm2u.css","./THvapVTu.js","./Bio.BcnN8BQQ.css","./DQg5gR2V.js","./Contact.2xyrHKtO.css","./BCS0-IVd.js","./Clocks.CkpqjaRE.css","./lsnCe5c5.js","./index.BANqCETR.css","./J4cwIexG.js","./BgYKEN8c.js","./index.Dbrk1KBP.css","./-kLK5xNa.js","./Celebrities.CcuunyNG.css","./DIvCElMY.js","./Clocks.vUUo-Xqj.css","./BQ_FG_dK.js","./index.D3FkaTh1.css","./QMYSRjgt.js","./l5rWqoeC.js","./D-zGqkok.js","./Ca6Ae744.js","./default.BE-W7nGe.css"])))=>i.map(i=>d[i]);
var lT=Object.defineProperty;var uT=(t,e,n)=>e in t?lT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ki=(t,e,n)=>uT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lf(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Be={},Ys=[],rn=()=>{},hT=()=>!1,Xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uf=t=>t.startsWith("onUpdate:"),ht=Object.assign,hf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fT=Object.prototype.hasOwnProperty,Ie=(t,e)=>fT.call(t,e),le=Array.isArray,Xs=t=>Ri(t)==="[object Map]",Ai=t=>Ri(t)==="[object Set]",jp=t=>Ri(t)==="[object Date]",dT=t=>Ri(t)==="[object RegExp]",de=t=>typeof t=="function",Ke=t=>typeof t=="string",Cn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",my=t=>(xe(t)||de(t))&&de(t.then)&&de(t.catch),gy=Object.prototype.toString,Ri=t=>gy.call(t),pT=t=>Ri(t).slice(8,-1),_y=t=>Ri(t)==="[object Object]",ff=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=lf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mT=/-(\w)/g,pn=Jc(t=>t.replace(mT,(e,n)=>n?n.toUpperCase():"")),gT=/\B([A-Z])/g,Cs=Jc(t=>t.replace(gT,"-$1").toLowerCase()),Zc=Jc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ou=Jc(t=>t?`on${Zc(t)}`:""),Ur=(t,e)=>!Object.is(t,e),Zs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yy=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},yc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vy=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let $p;const Ey=()=>$p||($p=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function el(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?ET(r):el(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||xe(t))return t}const _T=/;(?![^(]*\))/g,yT=/:([^]+)/,vT=/\/\*[^]*?\*\//g;function ET(t){const e={};return t.replace(vT,"").split(_T).forEach(n=>{if(n){const r=n.split(yT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jo(t){let e="";if(Ke(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Jo(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function TF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=Jo(e)),n&&(t.style=el(n)),t}const wT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bT=lf(wT);function wy(t){return!!t||t===""}function TT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Zo(t[r],e[r]);return n}function Zo(t,e){if(t===e)return!0;let n=jp(t),r=jp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Cn(t),r=Cn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?TT(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Zo(t[o],e[o]))return!1}}return String(t)===String(e)}function df(t,e){return t.findIndex(n=>Zo(n,e))}const by=t=>!!(t&&t.__v_isRef===!0),pf=t=>Ke(t)?t:t==null?"":le(t)||xe(t)&&(t.toString===gy||!de(t.toString))?by(t)?pf(t.value):JSON.stringify(t,Ty,2):String(t),Ty=(t,e)=>by(e)?Ty(t,e.value):Xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[au(r,i)+" =>"]=s,n),{})}:Ai(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>au(n))}:Cn(e)?au(e):xe(e)&&!le(e)&&!_y(e)?String(e):e,au=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Iy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function mf(t){return new Iy(t)}function IT(t,e=qt){e&&e.active&&e.effects.push(t)}function ea(){return qt}function vc(t){qt&&qt.cleanups.push(t)}let hs;class gf{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,IT(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Gr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(AT(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Or,n=hs;try{return Or=!0,hs=this,this._runnings++,Hp(this),this.fn()}finally{qp(this),this._runnings--,hs=n,Or=e}}stop(){this.active&&(Hp(this),qp(this),this.onStop&&this.onStop(),this.active=!1)}}function AT(t){return t.value}function Hp(t){t._trackId++,t._depsLength=0}function qp(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ay(t.deps[e],t);t.deps.length=t._depsLength}}function Ay(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Or=!0,qu=0;const Ry=[];function Gr(){Ry.push(Or),Or=!1}function Qr(){const t=Ry.pop();Or=t===void 0?!0:t}function _f(){qu++}function yf(){for(qu--;!qu&&zu.length;)zu.shift()()}function Sy(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ay(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const zu=[];function Py(t,e,n){_f();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&zu.push(r.scheduler)))}yf()}const Cy=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ec=new WeakMap,fs=Symbol(""),Wu=Symbol("");function Ut(t,e,n){if(Or&&hs){let r=Ec.get(t);r||Ec.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Cy(()=>r.delete(n))),Sy(hs,s)}}function Wn(t,e,n,r,s,i){const o=Ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Cn(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?ff(n)&&a.push(o.get("length")):(a.push(o.get(fs)),Xs(t)&&a.push(o.get(Wu)));break;case"delete":le(t)||(a.push(o.get(fs)),Xs(t)&&a.push(o.get(Wu)));break;case"set":Xs(t)&&a.push(o.get(fs));break}_f();for(const l of a)l&&Py(l,4);yf()}function RT(t,e){const n=Ec.get(t);return n&&n.get(e)}const ST=lf("__proto__,__v_isRef,__isVue"),ky=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn)),zp=PT();function PT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ae(this);for(let i=0,o=this.length;i<o;i++)Ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gr(),_f();const r=Ae(this)[e].apply(this,n);return yf(),Qr(),r}}),t}function CT(t){Cn(t)||(t=String(t));const e=Ae(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class Oy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?$T:Ly:i?Dy:xy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Ie(zp,n))return Reflect.get(zp,n,r);if(n==="hasOwnProperty")return CT}const a=Reflect.get(e,n,r);return(Cn(n)?ky.has(n):ST(n))||(s||Ut(e,"get",n),i)?a:rt(a)?o&&ff(n)?a:a.value:xe(a)?s?My(a):Yr(a):a}}class Ny extends Oy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Br(i);if(!ci(r)&&!Br(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&rt(i)&&!rt(r))return l?!1:(i.value=r,!0)}const o=le(e)&&ff(n)?Number(n)<e.length:Ie(e,n),a=Reflect.set(e,n,r,s);return e===Ae(s)&&(o?Ur(r,i)&&Wn(e,"set",n,r):Wn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Cn(n)||!ky.has(n))&&Ut(e,"has",n),r}ownKeys(e){return Ut(e,"iterate",le(e)?"length":fs),Reflect.ownKeys(e)}}class kT extends Oy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const OT=new Ny,NT=new kT,xT=new Ny(!0);const vf=t=>t,tl=t=>Reflect.getPrototypeOf(t);function Na(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(Ur(e,i)&&Ut(s,"get",e),Ut(s,"get",i));const{has:o}=tl(s),a=r?vf:n?Tf:Ro;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function xa(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(Ur(t,s)&&Ut(r,"has",t),Ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Da(t,e=!1){return t=t.__v_raw,!e&&Ut(Ae(t),"iterate",fs),Reflect.get(t,"size",t)}function Wp(t,e=!1){!e&&!ci(t)&&!Br(t)&&(t=Ae(t));const n=Ae(this);return tl(n).has.call(n,t)||(n.add(t),Wn(n,"add",t,t)),this}function Kp(t,e,n=!1){!n&&!ci(e)&&!Br(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=tl(r);let o=s.call(r,t);o||(t=Ae(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Ur(e,a)&&Wn(r,"set",t,e):Wn(r,"add",t,e),this}function Gp(t){const e=Ae(this),{has:n,get:r}=tl(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Wn(e,"delete",t,void 0),i}function Qp(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function La(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ae(o),l=e?vf:t?Tf:Ro;return!t&&Ut(a,"iterate",fs),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function Ma(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Xs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?vf:e?Tf:Ro;return!e&&Ut(i,"iterate",l?Wu:fs),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function lr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function DT(){const t={get(i){return Na(this,i)},get size(){return Da(this)},has:xa,add:Wp,set:Kp,delete:Gp,clear:Qp,forEach:La(!1,!1)},e={get(i){return Na(this,i,!1,!0)},get size(){return Da(this)},has:xa,add(i){return Wp.call(this,i,!0)},set(i,o){return Kp.call(this,i,o,!0)},delete:Gp,clear:Qp,forEach:La(!1,!0)},n={get(i){return Na(this,i,!0)},get size(){return Da(this,!0)},has(i){return xa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:La(!0,!1)},r={get(i){return Na(this,i,!0,!0)},get size(){return Da(this,!0)},has(i){return xa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:La(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ma(i,!1,!1),n[i]=Ma(i,!0,!1),e[i]=Ma(i,!1,!0),r[i]=Ma(i,!0,!0)}),[t,n,e,r]}const[LT,MT,VT,FT]=DT();function Ef(t,e){const n=e?t?FT:VT:t?MT:LT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const UT={get:Ef(!1,!1)},BT={get:Ef(!1,!0)},jT={get:Ef(!0,!1)};const xy=new WeakMap,Dy=new WeakMap,Ly=new WeakMap,$T=new WeakMap;function HT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qT(t){return t.__v_skip||!Object.isExtensible(t)?0:HT(pT(t))}function Yr(t){return Br(t)?t:wf(t,!1,OT,UT,xy)}function jn(t){return wf(t,!1,xT,BT,Dy)}function My(t){return wf(t,!0,NT,jT,Ly)}function wf(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Nr(t){return Br(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function Br(t){return!!(t&&t.__v_isReadonly)}function ci(t){return!!(t&&t.__v_isShallow)}function Vy(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function bf(t){return Object.isExtensible(t)&&yy(t,"__v_skip",!0),t}const Ro=t=>xe(t)?Yr(t):t,Tf=t=>xe(t)?My(t):t;class Fy{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new gf(()=>e(this._value),()=>co(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Ur(e._value,e._value=e.effect.run())&&co(e,4),If(e),e.effect._dirtyLevel>=2&&co(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function zT(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=rn):(r=t.get,s=t.set),new Fy(r,s,i||!s,n)}function If(t){var e;Or&&hs&&(t=Ae(t),Sy(hs,(e=t.dep)!=null?e:t.dep=Cy(()=>t.dep=void 0,t instanceof Fy?t:void 0)))}function co(t,e=4,n,r){t=Ae(t);const s=t.dep;s&&Py(s,e)}function rt(t){return!!(t&&t.__v_isRef===!0)}function Bt(t){return Uy(t,!1)}function So(t){return Uy(t,!0)}function Uy(t,e){return rt(t)?t:new WT(t,e)}class WT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:Ro(e)}get value(){return If(this),this._value}set value(e){const n=this.__v_isShallow||ci(e)||Br(e);e=n?e:Ae(e),Ur(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Ro(e),co(this,4))}}function et(t){return rt(t)?t.value:t}const KT={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function By(t){return Nr(t)?t:new Proxy(t,KT)}class GT{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>If(this),()=>co(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function QT(t){return new GT(t)}function YT(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=jy(t,n);return e}class XT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return RT(Ae(this._object),this._key)}}class JT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ZT(t,e,n){return rt(t)?t:de(t)?new JT(t):xe(t)&&arguments.length>1?jy(t,e,n):Bt(t)}function jy(t,e,n){const r=t[e];return rt(r)?r:new XT(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xr(t,e,n,r){try{return r?t(...r):t()}catch(s){ta(s,e,n)}}function sn(t,e,n,r){if(de(t)){const s=xr(t,e,n,r);return s&&my(s)&&s.catch(i=>{ta(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function ta(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Gr(),xr(l,null,10,[t,o,a]),Qr();return}}eI(t,n,s,r)}function eI(t,e,n,r=!0){console.error(t)}let Po=!1,Ku=!1;const At=[];let En=0;const ei=[];let gr=null,cs=0;const $y=Promise.resolve();let Af=null;function xn(t){const e=Af||$y;return t?e.then(this?t.bind(this):t):e}function tI(t){let e=En+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=Co(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Rf(t){(!At.length||!At.includes(t,Po&&t.allowRecurse?En+1:En))&&(t.id==null?At.push(t):At.splice(tI(t.id),0,t),Hy())}function Hy(){!Po&&!Ku&&(Ku=!0,Af=$y.then(qy))}function nI(t){const e=At.indexOf(t);e>En&&At.splice(e,1)}function Gu(t){le(t)?ei.push(...t):(!gr||!gr.includes(t,t.allowRecurse?cs+1:cs))&&ei.push(t),Hy()}function Yp(t,e,n=Po?En+1:0){for(;n<At.length;n++){const r=At[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r()}}}function wc(t){if(ei.length){const e=[...new Set(ei)].sort((n,r)=>Co(n)-Co(r));if(ei.length=0,gr){gr.push(...e);return}for(gr=e,cs=0;cs<gr.length;cs++){const n=gr[cs];n.active!==!1&&n()}gr=null,cs=0}}const Co=t=>t.id==null?1/0:t.id,rI=(t,e)=>{const n=Co(t)-Co(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qy(t){Ku=!1,Po=!0,At.sort(rI);try{for(En=0;En<At.length;En++){const e=At[En];e&&e.active!==!1&&xr(e,e.i,e.i?15:14)}}finally{En=0,At.length=0,wc(),Po=!1,Af=null,(At.length||ei.length)&&qy()}}let it=null,nl=null;function bc(t){const e=it;return it=t,nl=t&&t.type.__scopeId||null,e}function zy(t){nl=t}function Wy(){nl=null}function yn(t,e=it,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&am(-1);const i=bc(e);let o;try{o=t(...s)}finally{bc(i),r._d&&am(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function IF(t,e){if(it===null)return t;const n=ll(it),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Be]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Er(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function vn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Gr(),sn(l,n,8,[t.el,a,t,e]),Qr())}}const _r=Symbol("_leaveCb"),Va=Symbol("_enterCb");function sI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return il(()=>{t.isMounted=!0}),na(()=>{t.isUnmounting=!0}),t}const tn=[Function,Array],Ky={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},Gy=t=>{const e=t.subTree;return e.component?Gy(e.component):e},iI={name:"BaseTransition",props:Ky,setup(t,{slots:e}){const n=al(),r=sI();return()=>{const s=e.default&&Yy(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==lt){i=p;break}}const o=Ae(t),{mode:a}=o;if(r.isLeaving)return cu(i);const l=Xp(i);if(!l)return cu(i);let u=Qu(l,o,r,n,p=>u=p);ko(l,u);const h=n.subTree,d=h&&Xp(h);if(d&&d.type!==lt&&!fn(l,d)&&Gy(n).type!==lt){const p=Qu(d,o,r,n);if(ko(d,p),a==="out-in"&&l.type!==lt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},cu(i);a==="in-out"&&l.type!==lt&&(p.delayLeave=(g,R,k)=>{const N=Qy(r,d);N[String(d.key)]=d,g[_r]=()=>{R(),g[_r]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return i}}},oI=iI;function Qy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Qu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:R,onLeaveCancelled:k,onBeforeAppear:N,onAppear:x,onAfterAppear:S,onAppearCancelled:E}=e,O=String(t.key),D=Qy(n,t),M=(y,w)=>{y&&sn(y,r,9,w)},b=(y,w)=>{const P=w[1];M(y,w),le(y)?y.every(A=>A.length<=1)&&P():y.length<=1&&P()},_={mode:o,persisted:a,beforeEnter(y){let w=l;if(!n.isMounted)if(i)w=N||l;else return;y[_r]&&y[_r](!0);const P=D[O];P&&fn(t,P)&&P.el[_r]&&P.el[_r](),M(w,[y])},enter(y){let w=u,P=h,A=d;if(!n.isMounted)if(i)w=x||u,P=S||h,A=E||d;else return;let T=!1;const me=y[Va]=ye=>{T||(T=!0,ye?M(A,[y]):M(P,[y]),_.delayedLeave&&_.delayedLeave(),y[Va]=void 0)};w?b(w,[y,me]):me()},leave(y,w){const P=String(t.key);if(y[Va]&&y[Va](!0),n.isUnmounting)return w();M(p,[y]);let A=!1;const T=y[_r]=me=>{A||(A=!0,w(),me?M(k,[y]):M(R,[y]),y[_r]=void 0,D[P]===t&&delete D[P])};D[P]=t,g?b(g,[y,T]):T()},clone(y){const w=Qu(y,e,n,r,s);return s&&s(w),w}};return _}function cu(t){if(rl(t))return t=Gn(t),t.children=null,t}function Xp(t){if(!rl(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function ko(t,e){t.shapeFlag&6&&t.component?ko(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Yy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Nt?(o.patchFlag&128&&s++,r=r.concat(Yy(o.children,e,a))):(e||o.type!==lt)&&r.push(a!=null?Gn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Dn(t,e){return de(t)?ht({name:t.name},e,{setup:t}):t}const ds=t=>!!t.type.__asyncLoader,rl=t=>t.type.__isKeepAlive,aI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=al(),r=n.ctx;if(!r.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(S,E,O,D,M)=>{const b=S.component;u(S,E,O,0,a),l(b.vnode,S,E,O,b,a,D,S.slotScopeIds,M),at(()=>{b.isDeactivated=!1,b.a&&Zs(b.a);const _=S.props&&S.props.onVnodeMounted;_&&Lt(_,b.parent,S)},a)},r.deactivate=S=>{const E=S.component;Ac(E.m),Ac(E.a),u(S,p,null,1,a),at(()=>{E.da&&Zs(E.da);const O=S.props&&S.props.onVnodeUnmounted;O&&Lt(O,E.parent,S),E.isDeactivated=!0},a)};function g(S){lu(S),h(S,n,a,!0)}function R(S){s.forEach((E,O)=>{const D=sh(E.type);D&&(!S||!S(D))&&k(O)})}function k(S){const E=s.get(S);E&&(!o||!fn(E,o))?g(E):o&&lu(o),s.delete(S),i.delete(S)}dn(()=>[t.include,t.exclude],([S,E])=>{S&&R(O=>Ji(S,O)),E&&R(O=>!Ji(E,O))},{flush:"post",deep:!0});let N=null;const x=()=>{N!=null&&(eh(n.subTree.type)?at(()=>{s.set(N,Fa(n.subTree))},n.subTree.suspense):s.set(N,Fa(n.subTree)))};return il(x),ev(x),na(()=>{s.forEach(S=>{const{subTree:E,suspense:O}=n,D=Fa(E);if(S.type===D.type&&S.key===D.key){lu(D);const M=D.component.da;M&&at(M,O);return}g(S)})}),()=>{if(N=null,!e.default)return null;const S=e.default(),E=S[0];if(S.length>1)return o=null,S;if(!ui(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let O=Fa(E);if(O.type===lt)return o=null,O;const D=O.type,M=sh(ds(O)?O.type.__asyncResolved||{}:D),{include:b,exclude:_,max:y}=t;if(b&&(!M||!Ji(b,M))||_&&M&&Ji(_,M))return o=O,E;const w=O.key==null?D:O.key,P=s.get(w);return O.el&&(O=Gn(O),E.shapeFlag&128&&(E.ssContent=O)),N=w,P?(O.el=P.el,O.component=P.component,O.transition&&ko(O,O.transition),O.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),y&&i.size>parseInt(y,10)&&k(i.values().next().value)),O.shapeFlag|=256,o=O,eh(E.type)?E:O}}},cI=aI;function Ji(t,e){return le(t)?t.some(n=>Ji(n,e)):Ke(t)?t.split(",").includes(e):dT(t)?t.test(e):!1}function Xy(t,e){Zy(t,"a",e)}function Jy(t,e){Zy(t,"da",e)}function Zy(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)rl(s.parent.vnode)&&lI(r,e,n,s),s=s.parent}}function lI(t,e,n,r){const s=sl(e,t,r,!0);tv(()=>{hf(r[e],s)},n)}function lu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Fa(t){return t.shapeFlag&128?t.ssContent:t}function sl(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Gr();const a=ra(n),l=sn(e,n,t,o);return a(),Qr(),l});return r?s.unshift(i):s.push(i),i}}const tr=t=>(e,n=ut)=>{(!cl||t==="sp")&&sl(t,(...r)=>e(...r),n)},uI=tr("bm"),il=tr("m"),hI=tr("bu"),ev=tr("u"),na=tr("bum"),tv=tr("um"),fI=tr("sp"),dI=tr("rtg"),pI=tr("rtc");function nv(t,e=ut){sl("ec",t,e)}const rv="components";function Oo(t,e){return iv(rv,t,!0,e)||t}const sv=Symbol.for("v-ndc");function mI(t){return Ke(t)?iv(rv,t,!1)||t:t||sv}function iv(t,e,n=!0,r=!1){const s=it||ut;if(s){const i=s.type;{const a=sh(i,!1);if(a&&(a===e||a===pn(e)||a===Zc(pn(e))))return i}const o=Jp(s[t]||i[t],e)||Jp(s.appContext[t],e);return!o&&r?i:o}}function Jp(t,e){return t&&(t[e]||t[pn(e)]||t[Zc(pn(e))])}function AF(t,e,n,r){let s;const i=n;if(le(t)||Ke(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}function RF(t,e,n={},r,s){if(it.isCE||it.parent&&ds(it.parent)&&it.parent.isCE)return Pe("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),Mt();const o=i&&ov(i(n)),a=wr(Nt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),a}function ov(t){return t.some(e=>ui(e)?!(e.type===lt||e.type===Nt&&!ov(e.children)):!0)?t:null}const Yu=t=>t?kv(t)?ll(t):Yu(t.parent):null,lo=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yu(t.parent),$root:t=>Yu(t.root),$emit:t=>t.emit,$options:t=>Sf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Rf(t.update)}),$nextTick:t=>t.n||(t.n=xn.bind(t.proxy)),$watch:t=>jI.bind(t)}),uu=(t,e)=>t!==Be&&!t.__isScriptSetup&&Ie(t,e),gI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(uu(r,e))return o[e]=1,r[e];if(s!==Be&&Ie(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ie(u,e))return o[e]=3,i[e];if(n!==Be&&Ie(n,e))return o[e]=4,n[e];Xu&&(o[e]=0)}}const h=lo[e];let d,p;if(h)return e==="$attrs"&&Ut(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Be&&Ie(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ie(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return uu(s,e)?(s[e]=n,!0):r!==Be&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Be&&Ie(t,o)||uu(e,o)||(a=i[0])&&Ie(a,o)||Ie(r,o)||Ie(lo,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zp(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xu=!0;function _I(t){const e=Sf(t),n=t.proxy,r=t.ctx;Xu=!1,e.beforeCreate&&em(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:R,activated:k,deactivated:N,beforeDestroy:x,beforeUnmount:S,destroyed:E,unmounted:O,render:D,renderTracked:M,renderTriggered:b,errorCaptured:_,serverPrefetch:y,expose:w,inheritAttrs:P,components:A,directives:T,filters:me}=e;if(u&&yI(u,r,null),o)for(const te in o){const ie=o[te];de(ie)&&(r[te]=ie.bind(n))}if(s){const te=s.call(n,n);xe(te)&&(t.data=Yr(te))}if(Xu=!0,i)for(const te in i){const ie=i[te],qe=de(ie)?ie.bind(n,n):de(ie.get)?ie.get.bind(n,n):rn,cn=!de(ie)&&de(ie.set)?ie.set.bind(n):rn,Jt=Le({get:qe,set:cn});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:ze=>Jt.value=ze})}if(a)for(const te in a)av(a[te],r,n,te);if(l){const te=de(l)?l.call(n):l;Reflect.ownKeys(te).forEach(ie=>{ms(ie,te[ie])})}h&&em(h,t,"c");function J(te,ie){le(ie)?ie.forEach(qe=>te(qe.bind(n))):ie&&te(ie.bind(n))}if(J(uI,d),J(il,p),J(hI,g),J(ev,R),J(Xy,k),J(Jy,N),J(nv,_),J(pI,M),J(dI,b),J(na,S),J(tv,O),J(fI,y),le(w))if(w.length){const te=t.exposed||(t.exposed={});w.forEach(ie=>{Object.defineProperty(te,ie,{get:()=>n[ie],set:qe=>n[ie]=qe})})}else t.exposed||(t.exposed={});D&&t.render===rn&&(t.render=D),P!=null&&(t.inheritAttrs=P),A&&(t.components=A),T&&(t.directives=T)}function yI(t,e,n=rn){le(t)&&(t=Ju(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=Rt(s.from||r,s.default,!0):i=Rt(s.from||r):i=Rt(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function em(t,e,n){sn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function av(t,e,n,r){const s=r.includes(".")?bv(n,r):()=>n[r];if(Ke(t)){const i=e[t];de(i)&&dn(s,i)}else if(de(t))dn(s,t.bind(n));else if(xe(t))if(le(t))t.forEach(i=>av(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&dn(s,i,t)}}function Sf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Tc(l,u,o,!0)),Tc(l,e,o)),xe(e)&&i.set(e,l),l}function Tc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Tc(t,i,n,!0),s&&s.forEach(o=>Tc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vI={data:tm,props:nm,emits:nm,methods:Zi,computed:Zi,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Zi,directives:Zi,watch:wI,provide:tm,inject:EI};function tm(t,e){return e?t?function(){return ht(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function EI(t,e){return Zi(Ju(t),Ju(e))}function Ju(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Zi(t,e){return t?ht(Object.create(null),t,e):e}function nm(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ht(Object.create(null),Zp(t),Zp(e??{})):e}function wI(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function cv(){return{app:null,config:{isNativeTag:hT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bI=0;function TI(t,e){return function(r,s=null){de(r)||(r=ht({},r)),s!=null&&!xe(s)&&(s=null);const i=cv(),o=new WeakSet;let a=!1;const l=i.app={_uid:bI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nv,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...h)):de(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,d){if(!a){const p=Pe(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),a=!0,l._container=u,u.__vue_app__=l,ll(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=ps;ps=l;try{return u()}finally{ps=h}}};return l}}let ps=null;function ms(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function Rt(t,e,n=!1){const r=ut||it;if(r||ps){const s=ps?ps._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Pf(){return!!(ut||it||ps)}const lv={},uv=()=>Object.create(lv),hv=t=>Object.getPrototypeOf(t)===lv;function II(t,e,n,r=!1){const s={},i=uv();t.propsDefaults=Object.create(null),fv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:jn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function AI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(ol(t.emitsOptions,p))continue;const g=e[p];if(l)if(Ie(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const R=pn(p);s[R]=Zu(l,a,R,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{fv(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ie(e,d)&&((h=Cs(d))===d||!Ie(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Zu(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ie(e,d))&&(delete i[d],u=!0)}u&&Wn(t.attrs,"set","")}function fv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Js(l))continue;const u=e[l];let h;s&&Ie(s,h=pn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:ol(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=a||Be;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Zu(s,l,d,u[d],t,!Ie(u,d))}}return o}function Zu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ra(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Cs(n))&&(r=!0))}return r}const RI=new WeakMap;function dv(t,e,n=!1){const r=n?RI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=d=>{l=!0;const[p,g]=dv(d,e,!0);ht(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return xe(t)&&r.set(t,Ys),Ys;if(le(i))for(let h=0;h<i.length;h++){const d=pn(i[h]);rm(d)&&(o[d]=Be)}else if(i)for(const h in i){const d=pn(h);if(rm(d)){const p=i[h],g=o[d]=le(p)||de(p)?{type:p}:ht({},p),R=g.type;let k=!1,N=!0;if(le(R))for(let x=0;x<R.length;++x){const S=R[x],E=de(S)&&S.name;if(E==="Boolean"){k=!0;break}else E==="String"&&(N=!1)}else k=de(R)&&R.name==="Boolean";g[0]=k,g[1]=N,(k||Ie(g,"default"))&&a.push(d)}}const u=[o,a];return xe(t)&&r.set(t,u),u}function rm(t){return t[0]!=="$"&&!Js(t)}const pv=t=>t[0]==="_"||t==="$stable",Cf=t=>le(t)?t.map(zt):[zt(t)],SI=(t,e,n)=>{if(e._n)return e;const r=yn((...s)=>Cf(e(...s)),n);return r._c=!1,r},mv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pv(s))continue;const i=t[s];if(de(i))e[s]=SI(s,i,r);else if(i!=null){const o=Cf(i);e[s]=()=>o}}},gv=(t,e)=>{const n=Cf(e);t.slots.default=()=>n},_v=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},PI=(t,e,n)=>{const r=t.slots=uv();if(t.vnode.shapeFlag&32){const s=e._;s?(_v(r,e,n),n&&yy(r,"_",s,!0)):mv(e,r)}else e&&gv(t,e)},CI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:_v(s,e,n):(i=!e.$stable,mv(e,s)),o=e}else e&&(gv(t,e),o={default:1});if(i)for(const a in s)!pv(a)&&o[a]==null&&delete s[a]};function Ic(t,e,n,r,s=!1){if(le(t)){t.forEach((p,g)=>Ic(p,e&&(le(e)?e[g]:e),n,r,s));return}if(ds(r)&&!s)return;const i=r.shapeFlag&4?ll(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Be?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==l&&(Ke(u)?(h[u]=null,Ie(d,u)&&(d[u]=null)):rt(u)&&(u.value=null)),de(l))xr(l,a,12,[o,h]);else{const p=Ke(l),g=rt(l);if(p||g){const R=()=>{if(t.f){const k=p?Ie(d,l)?d[l]:h[l]:l.value;s?le(k)&&hf(k,i):le(k)?k.includes(i)||k.push(i):p?(h[l]=[i],Ie(d,l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,Ie(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(R.id=-1,at(R,n)):R()}}}const kI=Symbol("_vte"),OI=t=>t.__isTeleport;let sm=!1;const js=()=>{sm||(console.error("Hydration completed but contains mismatches."),sm=!0)},NI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",xI=t=>t.namespaceURI.includes("MathML"),Ua=t=>{if(NI(t))return"svg";if(xI(t))return"mathml"},Ba=t=>t.nodeType===8;function DI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(E,O)=>{if(!O.hasChildNodes()){n(null,E,O),wc(),O._vnode=E;return}d(O.firstChild,E,null,null,null),wc(),O._vnode=E},d=(E,O,D,M,b,_=!1)=>{_=_||!!O.dynamicChildren;const y=Ba(E)&&E.data==="[",w=()=>k(E,O,D,M,b,y),{type:P,ref:A,shapeFlag:T,patchFlag:me}=O;let ye=E.nodeType;O.el=E,me===-2&&(_=!1,O.dynamicChildren=null);let J=null;switch(P){case gs:ye!==3?O.children===""?(l(O.el=s(""),o(E),E),J=E):J=w():(E.data!==O.children&&(js(),E.data=O.children),J=i(E));break;case lt:S(E)?(J=i(E),x(O.el=E.content.firstChild,E,D)):ye!==8||y?J=w():J=i(E);break;case uo:if(y&&(E=i(E),ye=E.nodeType),ye===1||ye===3){J=E;const te=!O.children.length;for(let ie=0;ie<O.staticCount;ie++)te&&(O.children+=J.nodeType===1?J.outerHTML:J.data),ie===O.staticCount-1&&(O.anchor=J),J=i(J);return y?i(J):J}else w();break;case Nt:y?J=R(E,O,D,M,b,_):J=w();break;default:if(T&1)(ye!==1||O.type.toLowerCase()!==E.tagName.toLowerCase())&&!S(E)?J=w():J=p(E,O,D,M,b,_);else if(T&6){O.slotScopeIds=b;const te=o(E);if(y?J=N(E):Ba(E)&&E.data==="teleport start"?J=N(E,E.data,"teleport end"):J=i(E),e(O,te,null,D,M,Ua(te),_),ds(O)){let ie;y?(ie=Pe(Nt),ie.anchor=J?J.previousSibling:te.lastChild):ie=E.nodeType===3?nn(""):Pe("div"),ie.el=E,O.component.subTree=ie}}else T&64?ye!==8?J=w():J=O.type.hydrate(E,O,D,M,b,_,t,g):T&128&&(J=O.type.hydrate(E,O,D,M,Ua(o(E)),b,_,t,d))}return A!=null&&Ic(A,null,M,O),J},p=(E,O,D,M,b,_)=>{_=_||!!O.dynamicChildren;const{type:y,props:w,patchFlag:P,shapeFlag:A,dirs:T,transition:me}=O,ye=y==="input"||y==="option";if(ye||P!==-1){T&&vn(O,null,D,"created");let J=!1;if(S(E)){J=vv(M,me)&&D&&D.vnode.props&&D.vnode.props.appear;const ie=E.content.firstChild;J&&me.beforeEnter(ie),x(ie,E,D),O.el=E=ie}if(A&16&&!(w&&(w.innerHTML||w.textContent))){let ie=g(E.firstChild,O,E,D,M,b,_);for(;ie;){js();const qe=ie;ie=ie.nextSibling,a(qe)}}else A&8&&E.textContent!==O.children&&(js(),E.textContent=O.children);if(w){if(ye||!_||P&48){const ie=E.tagName.includes("-");for(const qe in w)(ye&&(qe.endsWith("value")||qe==="indeterminate")||Xo(qe)&&!Js(qe)||qe[0]==="."||ie)&&r(E,qe,null,w[qe],void 0,D)}else if(w.onClick)r(E,"onClick",null,w.onClick,void 0,D);else if(P&4&&Nr(w.style))for(const ie in w.style)w.style[ie]}let te;(te=w&&w.onVnodeBeforeMount)&&Lt(te,D,O),T&&vn(O,null,D,"beforeMount"),((te=w&&w.onVnodeMounted)||T||J)&&Av(()=>{te&&Lt(te,D,O),J&&me.enter(E),T&&vn(O,null,D,"mounted")},M)}return E.nextSibling},g=(E,O,D,M,b,_,y)=>{y=y||!!O.dynamicChildren;const w=O.children,P=w.length;for(let A=0;A<P;A++){const T=y?w[A]:w[A]=zt(w[A]),me=T.type===gs;if(E){if(me&&!y){let ye=w[A+1];ye&&(ye=zt(ye)).type===gs&&(l(s(E.data.slice(T.children.length)),D,i(E)),E.data=T.children)}E=d(E,T,M,b,_,y)}else me&&!T.children?l(T.el=s(""),D):(js(),n(null,T,D,null,M,b,Ua(D),_))}return E},R=(E,O,D,M,b,_)=>{const{slotScopeIds:y}=O;y&&(b=b?b.concat(y):y);const w=o(E),P=g(i(E),O,w,D,M,b,_);return P&&Ba(P)&&P.data==="]"?i(O.anchor=P):(js(),l(O.anchor=u("]"),w,P),P)},k=(E,O,D,M,b,_)=>{if(js(),O.el=null,_){const P=N(E);for(;;){const A=i(E);if(A&&A!==P)a(A);else break}}const y=i(E),w=o(E);return a(E),n(null,O,w,y,D,M,Ua(w),b),y},N=(E,O="[",D="]")=>{let M=0;for(;E;)if(E=i(E),E&&Ba(E)&&(E.data===O&&M++,E.data===D)){if(M===0)return i(E);M--}return E},x=(E,O,D)=>{const M=O.parentNode;M&&M.replaceChild(E,O);let b=D;for(;b;)b.vnode.el===O&&(b.vnode.el=b.subTree.el=E),b=b.parent},S=E=>E.nodeType===1&&E.tagName.toLowerCase()==="template";return[h,d]}const at=Av;function LI(t){return yv(t)}function MI(t){return yv(t,DI)}function yv(t,e){const n=Ey();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=rn,insertStaticContent:R}=t,k=(I,C,V,j=null,U=null,z=null,Q=void 0,W=null,G=!!C.dynamicChildren)=>{if(I===C)return;I&&!fn(I,C)&&(j=B(I),ze(I,U,z,!0),I=null),C.patchFlag===-2&&(G=!1,C.dynamicChildren=null);const{type:q,ref:X,shapeFlag:ae}=C;switch(q){case gs:N(I,C,V,j);break;case lt:x(I,C,V,j);break;case uo:I==null&&S(C,V,j,Q);break;case Nt:A(I,C,V,j,U,z,Q,W,G);break;default:ae&1?D(I,C,V,j,U,z,Q,W,G):ae&6?T(I,C,V,j,U,z,Q,W,G):(ae&64||ae&128)&&q.process(I,C,V,j,U,z,Q,W,G,ee)}X!=null&&U&&Ic(X,I&&I.ref,z,C||I,!C)},N=(I,C,V,j)=>{if(I==null)r(C.el=a(C.children),V,j);else{const U=C.el=I.el;C.children!==I.children&&u(U,C.children)}},x=(I,C,V,j)=>{I==null?r(C.el=l(C.children||""),V,j):C.el=I.el},S=(I,C,V,j)=>{[I.el,I.anchor]=R(I.children,C,V,j,I.el,I.anchor)},E=({el:I,anchor:C},V,j)=>{let U;for(;I&&I!==C;)U=p(I),r(I,V,j),I=U;r(C,V,j)},O=({el:I,anchor:C})=>{let V;for(;I&&I!==C;)V=p(I),s(I),I=V;s(C)},D=(I,C,V,j,U,z,Q,W,G)=>{C.type==="svg"?Q="svg":C.type==="math"&&(Q="mathml"),I==null?M(C,V,j,U,z,Q,W,G):y(I,C,U,z,Q,W,G)},M=(I,C,V,j,U,z,Q,W)=>{let G,q;const{props:X,shapeFlag:ae,transition:oe,dirs:se}=I;if(G=I.el=o(I.type,z,X&&X.is,X),ae&8?h(G,I.children):ae&16&&_(I.children,G,null,j,U,hu(I,z),Q,W),se&&vn(I,null,j,"created"),b(G,I,I.scopeId,Q,j),X){for(const ke in X)ke!=="value"&&!Js(ke)&&i(G,ke,null,X[ke],z,j);"value"in X&&i(G,"value",null,X.value,z),(q=X.onVnodeBeforeMount)&&Lt(q,j,I)}se&&vn(I,null,j,"beforeMount");const ue=vv(U,oe);ue&&oe.beforeEnter(G),r(G,C,V),((q=X&&X.onVnodeMounted)||ue||se)&&at(()=>{q&&Lt(q,j,I),ue&&oe.enter(G),se&&vn(I,null,j,"mounted")},U)},b=(I,C,V,j,U)=>{if(V&&g(I,V),j)for(let z=0;z<j.length;z++)g(I,j[z]);if(U){let z=U.subTree;if(C===z){const Q=U.vnode;b(I,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},_=(I,C,V,j,U,z,Q,W,G=0)=>{for(let q=G;q<I.length;q++){const X=I[q]=W?yr(I[q]):zt(I[q]);k(null,X,C,V,j,U,z,Q,W)}},y=(I,C,V,j,U,z,Q)=>{const W=C.el=I.el;let{patchFlag:G,dynamicChildren:q,dirs:X}=C;G|=I.patchFlag&16;const ae=I.props||Be,oe=C.props||Be;let se;if(V&&rs(V,!1),(se=oe.onVnodeBeforeUpdate)&&Lt(se,V,C,I),X&&vn(C,I,V,"beforeUpdate"),V&&rs(V,!0),(ae.innerHTML&&oe.innerHTML==null||ae.textContent&&oe.textContent==null)&&h(W,""),q?w(I.dynamicChildren,q,W,V,j,hu(C,U),z):Q||ie(I,C,W,null,V,j,hu(C,U),z,!1),G>0){if(G&16)P(W,ae,oe,V,U);else if(G&2&&ae.class!==oe.class&&i(W,"class",null,oe.class,U),G&4&&i(W,"style",ae.style,oe.style,U),G&8){const ue=C.dynamicProps;for(let ke=0;ke<ue.length;ke++){const Te=ue[ke],Ze=ae[Te],jt=oe[Te];(jt!==Ze||Te==="value")&&i(W,Te,Ze,jt,U,V)}}G&1&&I.children!==C.children&&h(W,C.children)}else!Q&&q==null&&P(W,ae,oe,V,U);((se=oe.onVnodeUpdated)||X)&&at(()=>{se&&Lt(se,V,C,I),X&&vn(C,I,V,"updated")},j)},w=(I,C,V,j,U,z,Q)=>{for(let W=0;W<C.length;W++){const G=I[W],q=C[W],X=G.el&&(G.type===Nt||!fn(G,q)||G.shapeFlag&70)?d(G.el):V;k(G,q,X,null,j,U,z,Q,!0)}},P=(I,C,V,j,U)=>{if(C!==V){if(C!==Be)for(const z in C)!Js(z)&&!(z in V)&&i(I,z,C[z],null,U,j);for(const z in V){if(Js(z))continue;const Q=V[z],W=C[z];Q!==W&&z!=="value"&&i(I,z,W,Q,U,j)}"value"in V&&i(I,"value",C.value,V.value,U)}},A=(I,C,V,j,U,z,Q,W,G)=>{const q=C.el=I?I.el:a(""),X=C.anchor=I?I.anchor:a("");let{patchFlag:ae,dynamicChildren:oe,slotScopeIds:se}=C;se&&(W=W?W.concat(se):se),I==null?(r(q,V,j),r(X,V,j),_(C.children||[],V,X,U,z,Q,W,G)):ae>0&&ae&64&&oe&&I.dynamicChildren?(w(I.dynamicChildren,oe,V,U,z,Q,W),(C.key!=null||U&&C===U.subTree)&&Ev(I,C,!0)):ie(I,C,V,X,U,z,Q,W,G)},T=(I,C,V,j,U,z,Q,W,G)=>{C.slotScopeIds=W,I==null?C.shapeFlag&512?U.ctx.activate(C,V,j,Q,G):me(C,V,j,U,z,Q,G):ye(I,C,G)},me=(I,C,V,j,U,z,Q)=>{const W=I.component=iA(I,j,U);if(rl(I)&&(W.ctx.renderer=ee),oA(W,!1,Q),W.asyncDep){if(U&&U.registerDep(W,J,Q),!I.el){const G=W.subTree=Pe(lt);x(null,G,C,V)}}else J(W,I,C,V,U,z,Q)},ye=(I,C,V)=>{const j=C.component=I.component;if(KI(I,C,V))if(j.asyncDep&&!j.asyncResolved){te(j,C,V);return}else j.next=C,nI(j.update),j.effect.dirty=!0,j.update();else C.el=I.el,j.vnode=C},J=(I,C,V,j,U,z,Q)=>{const W=()=>{if(I.isMounted){let{next:X,bu:ae,u:oe,parent:se,vnode:ue}=I;{const Zt=wv(I);if(Zt){X&&(X.el=ue.el,te(I,X,Q)),Zt.asyncDep.then(()=>{I.isUnmounted||W()});return}}let ke=X,Te;rs(I,!1),X?(X.el=ue.el,te(I,X,Q)):X=ue,ae&&Zs(ae),(Te=X.props&&X.props.onVnodeBeforeUpdate)&&Lt(Te,se,X,ue),rs(I,!0);const Ze=fu(I),jt=I.subTree;I.subTree=Ze,k(jt,Ze,d(jt.el),B(jt),I,U,z),X.el=Ze.el,ke===null&&Of(I,Ze.el),oe&&at(oe,U),(Te=X.props&&X.props.onVnodeUpdated)&&at(()=>Lt(Te,se,X,ue),U)}else{let X;const{el:ae,props:oe}=C,{bm:se,m:ue,parent:ke}=I,Te=ds(C);if(rs(I,!1),se&&Zs(se),!Te&&(X=oe&&oe.onVnodeBeforeMount)&&Lt(X,ke,C),rs(I,!0),ae&&Ne){const Ze=()=>{I.subTree=fu(I),Ne(ae,I.subTree,I,U,null)};Te?C.type.__asyncLoader().then(()=>!I.isUnmounted&&Ze()):Ze()}else{const Ze=I.subTree=fu(I);k(null,Ze,V,j,I,U,z),C.el=Ze.el}if(ue&&at(ue,U),!Te&&(X=oe&&oe.onVnodeMounted)){const Ze=C;at(()=>Lt(X,ke,Ze),U)}(C.shapeFlag&256||ke&&ds(ke.vnode)&&ke.vnode.shapeFlag&256)&&I.a&&at(I.a,U),I.isMounted=!0,C=V=j=null}},G=I.effect=new gf(W,rn,()=>Rf(q),I.scope),q=I.update=()=>{G.dirty&&G.run()};q.i=I,q.id=I.uid,rs(I,!0),q()},te=(I,C,V)=>{C.component=I;const j=I.vnode.props;I.vnode=C,I.next=null,AI(I,C.props,j,V),CI(I,C.children,V),Gr(),Yp(I),Qr()},ie=(I,C,V,j,U,z,Q,W,G=!1)=>{const q=I&&I.children,X=I?I.shapeFlag:0,ae=C.children,{patchFlag:oe,shapeFlag:se}=C;if(oe>0){if(oe&128){cn(q,ae,V,j,U,z,Q,W,G);return}else if(oe&256){qe(q,ae,V,j,U,z,Q,W,G);return}}se&8?(X&16&&xt(q,U,z),ae!==q&&h(V,ae)):X&16?se&16?cn(q,ae,V,j,U,z,Q,W,G):xt(q,U,z,!0):(X&8&&h(V,""),se&16&&_(ae,V,j,U,z,Q,W,G))},qe=(I,C,V,j,U,z,Q,W,G)=>{I=I||Ys,C=C||Ys;const q=I.length,X=C.length,ae=Math.min(q,X);let oe;for(oe=0;oe<ae;oe++){const se=C[oe]=G?yr(C[oe]):zt(C[oe]);k(I[oe],se,V,null,U,z,Q,W,G)}q>X?xt(I,U,z,!0,!1,ae):_(C,V,j,U,z,Q,W,G,ae)},cn=(I,C,V,j,U,z,Q,W,G)=>{let q=0;const X=C.length;let ae=I.length-1,oe=X-1;for(;q<=ae&&q<=oe;){const se=I[q],ue=C[q]=G?yr(C[q]):zt(C[q]);if(fn(se,ue))k(se,ue,V,null,U,z,Q,W,G);else break;q++}for(;q<=ae&&q<=oe;){const se=I[ae],ue=C[oe]=G?yr(C[oe]):zt(C[oe]);if(fn(se,ue))k(se,ue,V,null,U,z,Q,W,G);else break;ae--,oe--}if(q>ae){if(q<=oe){const se=oe+1,ue=se<X?C[se].el:j;for(;q<=oe;)k(null,C[q]=G?yr(C[q]):zt(C[q]),V,ue,U,z,Q,W,G),q++}}else if(q>oe)for(;q<=ae;)ze(I[q],U,z,!0),q++;else{const se=q,ue=q,ke=new Map;for(q=ue;q<=oe;q++){const Pt=C[q]=G?yr(C[q]):zt(C[q]);Pt.key!=null&&ke.set(Pt.key,q)}let Te,Ze=0;const jt=oe-ue+1;let Zt=!1,xi=0;const ir=new Array(jt);for(q=0;q<jt;q++)ir[q]=0;for(q=se;q<=ae;q++){const Pt=I[q];if(Ze>=jt){ze(Pt,U,z,!0);continue}let en;if(Pt.key!=null)en=ke.get(Pt.key);else for(Te=ue;Te<=oe;Te++)if(ir[Te-ue]===0&&fn(Pt,C[Te])){en=Te;break}en===void 0?ze(Pt,U,z,!0):(ir[en-ue]=q+1,en>=xi?xi=en:Zt=!0,k(Pt,C[en],V,null,U,z,Q,W,G),Ze++)}const Ls=Zt?VI(ir):Ys;for(Te=Ls.length-1,q=jt-1;q>=0;q--){const Pt=ue+q,en=C[Pt],Ms=Pt+1<X?C[Pt+1].el:j;ir[q]===0?k(null,en,V,Ms,U,z,Q,W,G):Zt&&(Te<0||q!==Ls[Te]?Jt(en,V,Ms,2):Te--)}}},Jt=(I,C,V,j,U=null)=>{const{el:z,type:Q,transition:W,children:G,shapeFlag:q}=I;if(q&6){Jt(I.component.subTree,C,V,j);return}if(q&128){I.suspense.move(C,V,j);return}if(q&64){Q.move(I,C,V,ee);return}if(Q===Nt){r(z,C,V);for(let ae=0;ae<G.length;ae++)Jt(G[ae],C,V,j);r(I.anchor,C,V);return}if(Q===uo){E(I,C,V);return}if(j!==2&&q&1&&W)if(j===0)W.beforeEnter(z),r(z,C,V),at(()=>W.enter(z),U);else{const{leave:ae,delayLeave:oe,afterLeave:se}=W,ue=()=>r(z,C,V),ke=()=>{ae(z,()=>{ue(),se&&se()})};oe?oe(z,ue,ke):ke()}else r(z,C,V)},ze=(I,C,V,j=!1,U=!1)=>{const{type:z,props:Q,ref:W,children:G,dynamicChildren:q,shapeFlag:X,patchFlag:ae,dirs:oe,cacheIndex:se}=I;if(ae===-2&&(U=!1),W!=null&&Ic(W,null,V,I,!0),se!=null&&(C.renderCache[se]=void 0),X&256){C.ctx.deactivate(I);return}const ue=X&1&&oe,ke=!ds(I);let Te;if(ke&&(Te=Q&&Q.onVnodeBeforeUnmount)&&Lt(Te,C,I),X&6)_n(I.component,V,j);else{if(X&128){I.suspense.unmount(V,j);return}ue&&vn(I,null,C,"beforeUnmount"),X&64?I.type.remove(I,C,V,ee,j):q&&!q.hasOnce&&(z!==Nt||ae>0&&ae&64)?xt(q,C,V,!1,!0):(z===Nt&&ae&384||!U&&X&16)&&xt(G,C,V),j&&We(I)}(ke&&(Te=Q&&Q.onVnodeUnmounted)||ue)&&at(()=>{Te&&Lt(Te,C,I),ue&&vn(I,null,C,"unmounted")},V)},We=I=>{const{type:C,el:V,anchor:j,transition:U}=I;if(C===Nt){sr(V,j);return}if(C===uo){O(I);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:W}=U,G=()=>Q(V,z);W?W(I.el,z,G):G()}else z()},sr=(I,C)=>{let V;for(;I!==C;)V=p(I),s(I),I=V;s(C)},_n=(I,C,V)=>{const{bum:j,scope:U,update:z,subTree:Q,um:W,m:G,a:q}=I;Ac(G),Ac(q),j&&Zs(j),U.stop(),z&&(z.active=!1,ze(Q,I,C,V)),W&&at(W,C),at(()=>{I.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},xt=(I,C,V,j=!1,U=!1,z=0)=>{for(let Q=z;Q<I.length;Q++)ze(I[Q],C,V,j,U)},B=I=>{if(I.shapeFlag&6)return B(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=p(I.anchor||I.el),V=C&&C[kI];return V?p(V):C};let Z=!1;const Y=(I,C,V)=>{I==null?C._vnode&&ze(C._vnode,null,null,!0):k(C._vnode||null,I,C,null,null,null,V),C._vnode=I,Z||(Z=!0,Yp(),wc(),Z=!1)},ee={p:k,um:ze,m:Jt,r:We,mt:me,mc:_,pc:ie,pbc:w,n:B,o:t};let Ee,Ne;return e&&([Ee,Ne]=e(ee)),{render:Y,hydrate:Ee,createApp:TI(Y,Ee)}}function hu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ev(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ev(o,a)),a.type===gs&&(a.el=o.el)}}function VI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function wv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wv(e)}function Ac(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const FI=Symbol.for("v-scx"),UI=()=>Rt(FI);function BI(t,e){return kf(t,null,e)}const ja={};function dn(t,e,n){return kf(t,e,n)}function kf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Be){if(e&&i){const M=e;e=(...b)=>{M(...b),D()}}const l=ut,u=M=>r===!0?M:Er(M,r===!1?1:void 0);let h,d=!1,p=!1;if(rt(t)?(h=()=>t.value,d=ci(t)):Nr(t)?(h=()=>u(t),d=!0):le(t)?(p=!0,d=t.some(M=>Nr(M)||ci(M)),h=()=>t.map(M=>{if(rt(M))return M.value;if(Nr(M))return u(M);if(de(M))return xr(M,l,2)})):de(t)?e?h=()=>xr(t,l,2):h=()=>(g&&g(),sn(t,l,3,[R])):h=rn,e&&r){const M=h;h=()=>Er(M())}let g,R=M=>{g=E.onStop=()=>{xr(M,l,4),g=E.onStop=void 0}},k;if(cl)if(R=rn,e?n&&sn(e,l,3,[h(),p?[]:void 0,R]):h(),s==="sync"){const M=UI();k=M.__watcherHandles||(M.__watcherHandles=[])}else return rn;let N=p?new Array(t.length).fill(ja):ja;const x=()=>{if(!(!E.active||!E.dirty))if(e){const M=E.run();(r||d||(p?M.some((b,_)=>Ur(b,N[_])):Ur(M,N)))&&(g&&g(),sn(e,l,3,[M,N===ja?void 0:p&&N[0]===ja?[]:N,R]),N=M)}else E.run()};x.allowRecurse=!!e;let S;s==="sync"?S=x:s==="post"?S=()=>at(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),S=()=>Rf(x));const E=new gf(h,rn,S),O=ea(),D=()=>{E.stop(),O&&hf(O.effects,E)};return e?n?x():N=E.run():s==="post"?at(E.run.bind(E),l&&l.suspense):E.run(),k&&k.push(D),D}function jI(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?bv(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=ra(this),a=kf(s,i.bind(r),n);return o(),a}function bv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Er(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,rt(t))Er(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Er(t[r],e,n);else if(Ai(t)||Xs(t))t.forEach(r=>{Er(r,e,n)});else if(_y(t)){for(const r in t)Er(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Er(t[r],e,n)}return t}const $I=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${Cs(e)}Modifiers`];function HI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&$I(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Ke(h)?h.trim():h)),o.number&&(s=n.map(yc)));let a,l=r[a=ou(e)]||r[a=ou(pn(e))];!l&&i&&(l=r[a=ou(Cs(e))]),l&&sn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,sn(u,t,6,s)}}function Tv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=Tv(u,e,!0);h&&(a=!0,ht(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(xe(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):ht(o,i),xe(t)&&r.set(t,o),o)}function ol(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Cs(e))||Ie(t,e))}function fu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:R,inheritAttrs:k}=t,N=bc(t);let x,S;try{if(n.shapeFlag&4){const O=s||r,D=O;x=zt(u.call(D,O,h,d,g,p,R)),S=a}else{const O=e;x=zt(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),S=e.props?a:zI(a)}}catch(O){ho.length=0,ta(O,t,1),x=Pe(lt)}let E=x;if(S&&k!==!1){const O=Object.keys(S),{shapeFlag:D}=E;O.length&&D&7&&(i&&O.some(uf)&&(S=WI(S,i)),E=Gn(E,S,!1,!0))}return n.dirs&&(E=Gn(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),x=E,bc(N),x}function qI(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(ui(s)){if(s.type!==lt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const zI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},WI=(t,e)=>{const n={};for(const r in t)(!uf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function KI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?im(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!ol(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?im(r,o,u):!0:!!o;return!1}function im(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ol(n,i))return!0}return!1}function Of({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const eh=t=>t.__isSuspense;let th=0;const GI={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)QI(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}YI(t,e,n,r,s,o,a,l,u)}},hydrate:XI,normalize:JI},Nf=GI;function No(t,e){const n=t.props&&t.props[e];de(n)&&n()}function QI(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=Iv(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(No(t,"onPending"),No(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ti(p,t.ssFallback)):p.resolve(!1,!0)}function YI(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:R,pendingBranch:k,isInFallback:N,isHydrating:x}=d;if(k)d.pendingBranch=p,fn(p,k)?(l(k,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(x||(l(R,g,n,r,s,null,i,o,a),ti(d,g)))):(d.pendingId=th++,x?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(R,g,n,r,s,null,i,o,a),ti(d,g))):R&&fn(p,R)?(l(R,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(R&&fn(p,R))l(R,p,n,r,s,d,i,o,a),ti(d,p);else if(No(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=th++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:S,pendingId:E}=d;S>0?setTimeout(()=>{d.pendingId===E&&d.fallback(g)},S):S===0&&d.fallback(g)}}function Iv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:R,o:{parentNode:k,remove:N}}=u;let x;const S=ZI(t);S&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const E=t.props?vy(t.props.timeout):void 0,O=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:th++,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,b=!1){const{vnode:_,activeBranch:y,pendingBranch:w,pendingId:P,effects:A,parentComponent:T,container:me}=D;let ye=!1;D.isHydrating?D.isHydrating=!1:M||(ye=y&&w.transition&&w.transition.mode==="out-in",ye&&(y.transition.afterLeave=()=>{P===D.pendingId&&(p(w,me,i===O?R(y):i,0),Gu(A))}),y&&(k(y.el)!==D.hiddenContainer&&(i=R(y)),g(y,T,D,!0)),ye||p(w,me,i,0)),ti(D,w),D.pendingBranch=null,D.isInFallback=!1;let J=D.parent,te=!1;for(;J;){if(J.pendingBranch){J.effects.push(...A),te=!0;break}J=J.parent}!te&&!ye&&Gu(A),D.effects=[],S&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),No(_,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:b,activeBranch:_,parentComponent:y,container:w,namespace:P}=D;No(b,"onFallback");const A=R(_),T=()=>{D.isInFallback&&(d(null,M,w,A,y,null,P,a,l),ti(D,M))},me=M.transition&&M.transition.mode==="out-in";me&&(_.transition.afterLeave=T),D.isInFallback=!0,g(_,y,null,!0),me||T()},move(M,b,_){D.activeBranch&&p(D.activeBranch,M,b,_),D.container=M},next(){return D.activeBranch&&R(D.activeBranch)},registerDep(M,b,_){const y=!!D.pendingBranch;y&&D.deps++;const w=M.vnode.el;M.asyncDep.catch(P=>{ta(P,M,0)}).then(P=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:A}=M;rh(M,P,!1),w&&(A.el=w);const T=!w&&M.subTree.el;b(M,A,k(w||M.subTree.el),w?null:R(M.subTree),D,o,_),T&&N(T),Of(M,A.el),y&&--D.deps===0&&D.resolve()})},unmount(M,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,b),D.pendingBranch&&g(D.pendingBranch,n,M,b)}};return D}function XI(t,e,n,r,s,i,o,a,l){const u=e.suspense=Iv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function JI(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=om(r?n.default:n),t.ssFallback=r?om(n.fallback):Pe(lt)}function om(t){let e;if(de(t)){const n=li&&t._c;n&&(t._d=!1,Mt()),t=t(),n&&(t._d=!0,e=Ft,Rv())}return le(t)&&(t=qI(t)),t=zt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Av(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Gu(t)}function ti(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Of(r,s))}function ZI(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Nt=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),ho=[];let Ft=null;function Mt(t=!1){ho.push(Ft=t?null:[])}function Rv(){ho.pop(),Ft=ho[ho.length-1]||null}let li=1;function am(t){li+=t,t<0&&Ft&&(Ft.hasOnce=!0)}function Sv(t){return t.dynamicChildren=li>0?Ft||Ys:null,Rv(),li>0&&Ft&&Ft.push(t),t}function xo(t,e,n,r,s,i){return Sv(je(t,e,n,r,s,i,!0))}function wr(t,e,n,r,s){return Sv(Pe(t,e,n,r,s,!0))}function ui(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}const Pv=({key:t})=>t??null,tc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||rt(t)||de(t)?{i:it,r:t,k:e,f:!!n}:t:null);function je(t,e=null,n=null,r=0,s=null,i=t===Nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pv(e),ref:e&&tc(e),scopeId:nl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return a?(xf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),li>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const Pe=eA;function eA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sv)&&(t=lt),ui(t)){const a=Gn(t,e,!0);return n&&xf(a,n),li>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag=-2,a}if(uA(t)&&(t=t.__vccOpts),e){e=tA(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=Jo(a)),xe(l)&&(Vy(l)&&!le(l)&&(l=ht({},l)),e.style=el(l))}const o=Ke(t)?1:eh(t)?128:OI(t)?64:xe(t)?4:de(t)?2:0;return je(t,e,n,r,s,o,i,!0)}function tA(t){return t?Vy(t)||hv(t)?ht({},t):t:null}function Gn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Cv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Pv(u),ref:e&&e.ref?n&&i?le(i)?i.concat(tc(e)):[i,tc(e)]:tc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ko(h,l.clone(h)),h}function nn(t=" ",e=0){return Pe(gs,null,t,e)}function SF(t,e){const n=Pe(uo,null,t);return n.staticCount=e,n}function nA(t="",e=!1){return e?(Mt(),wr(lt,null,t)):Pe(lt,null,t)}function zt(t){return t==null||typeof t=="boolean"?Pe(lt):le(t)?Pe(Nt,null,t.slice()):typeof t=="object"?yr(t):Pe(gs,null,String(t))}function yr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function xf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!hv(e)?e._ctx=it:s===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:it},n=32):(e=String(e),r&64?(n=16,e=[nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jo([e.class,r.class]));else if(s==="style")e.style=el([e.style,r.style]);else if(Xo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){sn(t,e,7,[n,r])}const rA=cv();let sA=0;function iA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||rA,i={uid:sA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Iy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dv(r,s),emitsOptions:Tv(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=HI.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const al=()=>ut||it;let Rc,nh;{const t=Ey(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rc=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),nh=e("__VUE_SSR_SETTERS__",n=>cl=n)}const ra=t=>{const e=ut;return Rc(t),t.scope.on(),()=>{t.scope.off(),Rc(e)}},cm=()=>{ut&&ut.scope.off(),Rc(null)};function kv(t){return t.vnode.shapeFlag&4}let cl=!1;function oA(t,e=!1,n=!1){e&&nh(e);const{props:r,children:s}=t.vnode,i=kv(t);II(t,r,i,e),PI(t,s,n);const o=i?aA(t,e):void 0;return e&&nh(!1),o}function aA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gI);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?lA(t):null,i=ra(t);Gr();const o=xr(r,t,0,[t.props,s]);if(Qr(),i(),my(o)){if(o.then(cm,cm),e)return o.then(a=>{rh(t,a,e)}).catch(a=>{ta(a,t,0)});t.asyncDep=o}else rh(t,o,e)}else Ov(t,e)}function rh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=By(e)),Ov(t,n)}let lm;function Ov(t,e,n){const r=t.type;if(!t.render){if(!e&&lm&&!r.render){const s=r.template||Sf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ht(ht({isCustomElement:i,delimiters:a},o),l);r.render=lm(s,u)}}t.render=r.render||rn}{const s=ra(t);Gr();try{_I(t)}finally{Qr(),s()}}}const cA={get(t,e){return Ut(t,"get",""),t[e]}};function lA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cA),slots:t.slots,emit:t.emit,expose:e}}function ll(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(By(bf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lo)return lo[n](t)},has(e,n){return n in e||n in lo}})):t.proxy}function sh(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function uA(t){return de(t)&&"__vccOpts"in t}const Le=(t,e)=>zT(t,e,cl);function gt(t,e,n){const r=arguments.length;return r===2?xe(e)&&!le(e)?ui(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ui(n)&&(n=[n]),Pe(t,e,n))}const Nv="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const hA="http://www.w3.org/2000/svg",fA="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,um=Un&&Un.createElement("template"),dA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Un.createElementNS(hA,t):e==="mathml"?Un.createElementNS(fA,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{um.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=um.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ur="transition",Gi="animation",Do=Symbol("_vtc"),ul=(t,{slots:e})=>gt(oI,pA(t),e);ul.displayName="Transition";const xv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ul.props=ht({},Ky,xv);const ss=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},hm=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function pA(t){const e={};for(const A in t)A in xv||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,R=mA(s),k=R&&R[0],N=R&&R[1],{onBeforeEnter:x,onEnter:S,onEnterCancelled:E,onLeave:O,onLeaveCancelled:D,onBeforeAppear:M=x,onAppear:b=S,onAppearCancelled:_=E}=e,y=(A,T,me)=>{is(A,T?h:a),is(A,T?u:o),me&&me()},w=(A,T)=>{A._isLeaving=!1,is(A,d),is(A,g),is(A,p),T&&T()},P=A=>(T,me)=>{const ye=A?b:S,J=()=>y(T,A,me);ss(ye,[T,J]),fm(()=>{is(T,A?l:i),hr(T,A?h:a),hm(ye)||dm(T,r,k,J)})};return ht(e,{onBeforeEnter(A){ss(x,[A]),hr(A,i),hr(A,o)},onBeforeAppear(A){ss(M,[A]),hr(A,l),hr(A,u)},onEnter:P(!1),onAppear:P(!0),onLeave(A,T){A._isLeaving=!0;const me=()=>w(A,T);hr(A,d),hr(A,p),yA(),fm(()=>{A._isLeaving&&(is(A,d),hr(A,g),hm(O)||dm(A,r,N,me))}),ss(O,[A,me])},onEnterCancelled(A){y(A,!1),ss(E,[A])},onAppearCancelled(A){y(A,!0),ss(_,[A])},onLeaveCancelled(A){w(A),ss(D,[A])}})}function mA(t){if(t==null)return null;if(xe(t))return[du(t.enter),du(t.leave)];{const e=du(t);return[e,e]}}function du(t){return vy(t)}function hr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Do]||(t[Do]=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Do];n&&(n.delete(e),n.size||(t[Do]=void 0))}function fm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let gA=0;function dm(t,e,n,r){const s=t._endId=++gA,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=_A(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function _A(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${ur}Delay`),i=r(`${ur}Duration`),o=pm(s,i),a=r(`${Gi}Delay`),l=r(`${Gi}Duration`),u=pm(a,l);let h=null,d=0,p=0;e===ur?o>0&&(h=ur,d=o,p=i.length):e===Gi?u>0&&(h=Gi,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?ur:Gi:null,p=h?h===ur?i.length:l.length:0);const g=h===ur&&/\b(transform|all)(,|$)/.test(r(`${ur}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function pm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>mm(n)+mm(t[r])))}function mm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yA(){return document.body.offsetHeight}function vA(t,e,n){const r=t[Do];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gm=Symbol("_vod"),EA=Symbol("_vsh"),wA=Symbol(""),bA=/(^|;)\s*display\s*:/;function TA(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&nc(r,a,"")}else for(const o in e)n[o]==null&&nc(r,o,"");for(const o in n)o==="display"&&(i=!0),nc(r,o,n[o])}else if(s){if(e!==n){const o=r[wA];o&&(n+=";"+o),r.cssText=n,i=bA.test(n)}}else e&&t.removeAttribute("style");gm in t&&(t[gm]=i?r.display:"",t[EA]&&(r.display="none"))}const _m=/\s*!important$/;function nc(t,e,n){if(le(n))n.forEach(r=>nc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=IA(t,e);_m.test(n)?t.setProperty(Cs(r),n.replace(_m,""),"important"):t[r]=n}}const ym=["Webkit","Moz","ms"],pu={};function IA(t,e){const n=pu[e];if(n)return n;let r=pn(e);if(r!=="filter"&&r in t)return pu[e]=r;r=Zc(r);for(let s=0;s<ym.length;s++){const i=ym[s]+r;if(i in t)return pu[e]=i}return e}const vm="http://www.w3.org/1999/xlink";function Em(t,e,n,r,s,i=bT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vm,e.slice(6,e.length)):t.setAttributeNS(vm,e,n):n==null||i&&!wy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function AA(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=wy(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function br(t,e,n,r){t.addEventListener(e,n,r)}function RA(t,e,n,r){t.removeEventListener(e,n,r)}const wm=Symbol("_vei");function SA(t,e,n,r,s=null){const i=t[wm]||(t[wm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=PA(e);if(r){const u=i[e]=OA(r,s);br(t,a,u,l)}else o&&(RA(t,a,o,l),i[e]=void 0)}}const bm=/(?:Once|Passive|Capture)$/;function PA(t){let e;if(bm.test(t)){e={};let r;for(;r=t.match(bm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cs(t.slice(2)),e]}let mu=0;const CA=Promise.resolve(),kA=()=>mu||(CA.then(()=>mu=0),mu=Date.now());function OA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(NA(r,n.value),e,5,[r])};return n.value=t,n.attached=kA(),n}function NA(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Tm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xA=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?vA(t,r,o):e==="style"?TA(t,n,r):Xo(e)?uf(e)||SA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DA(t,e,r,o))?(AA(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Em(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Em(t,e,r,o))};function DA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tm(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tm(e)&&Ke(n)?!1:e in t}const hi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Zs(e,n):e};function LA(t){t.target.composing=!0}function Im(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kn=Symbol("_assign"),PF={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kn]=hi(s);const i=r||s.props&&s.props.type==="number";br(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=yc(a)),t[Kn](a)}),n&&br(t,"change",()=>{t.value=t.value.trim()}),e||(br(t,"compositionstart",LA),br(t,"compositionend",Im),br(t,"change",Im))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Kn]=hi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?yc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},CF={deep:!0,created(t,e,n){t[Kn]=hi(n),br(t,"change",()=>{const r=t._modelValue,s=Lo(t),i=t.checked,o=t[Kn];if(le(r)){const a=df(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Ai(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Dv(t,i))})},mounted:Am,beforeUpdate(t,e,n){t[Kn]=hi(n),Am(t,e,n)}};function Am(t,{value:e,oldValue:n},r){t._modelValue=e,le(e)?t.checked=df(e,r.props.value)>-1:Ai(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Zo(e,Dv(t,!0)))}const kF={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ai(e);br(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?yc(Lo(o)):Lo(o));t[Kn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,xn(()=>{t._assigning=!1})}),t[Kn]=hi(r)},mounted(t,{value:e,modifiers:{number:n}}){Rm(t,e)},beforeUpdate(t,e,n){t[Kn]=hi(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Rm(t,e)}};function Rm(t,e,n){const r=t.multiple,s=le(e);if(!(r&&!s&&!Ai(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=Lo(a);if(r)if(s){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=df(e,l)>-1}else a.selected=e.has(l);else if(Zo(Lo(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lo(t){return"_value"in t?t._value:t.value}function Dv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const MA=["ctrl","shift","alt","meta"],VA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>MA.some(n=>t[`${n}Key`]&&!e.includes(n))},OF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=VA[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Lv=ht({patchProp:xA},dA);let fo,Sm=!1;function FA(){return fo||(fo=LI(Lv))}function UA(){return fo=Sm?fo:MI(Lv),Sm=!0,fo}const BA=(...t)=>{const e=FA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vv(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},jA=(...t)=>{const e=UA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vv(r);if(s)return n(s,!0,Mv(s))},e};function Mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Vv(t){return Ke(t)?document.querySelector(t):t}const $A=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,HA=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,qA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function zA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){WA(t);return}return e}function WA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Mo(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!qA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if($A.test(t)||HA.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,zA)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const KA=/#/g,GA=/&/g,QA=/\//g,YA=/=/g,Df=/\+/g,XA=/%5e/gi,JA=/%60/gi,ZA=/%7c/gi,e1=/%20/gi;function t1(t){return encodeURI(""+t).replace(ZA,"|")}function ih(t){return t1(typeof t=="string"?t:JSON.stringify(t)).replace(Df,"%2B").replace(e1,"+").replace(KA,"%23").replace(GA,"%26").replace(JA,"`").replace(XA,"^").replace(QA,"%2F")}function gu(t){return ih(t).replace(YA,"%3D")}function Sc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function n1(t){return Sc(t.replace(Df," "))}function r1(t){return Sc(t.replace(Df," "))}function Fv(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=n1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=r1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function s1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${gu(t)}=${ih(n)}`).join("&"):`${gu(t)}=${ih(e)}`:gu(t)}function i1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>s1(e,t[e])).filter(Boolean).join("&")}const o1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,a1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,c1=/^([/\\]\s*){2,}[^/\\]/,l1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,u1=/\/$|\/\?|\/#/,h1=/^\.?\//;function nr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?o1.test(t):a1.test(t)||(e.acceptRelative?c1.test(t):!1)}function f1(t){return!!t&&l1.test(t)}function oh(t="",e){return e?u1.test(t):t.endsWith("/")}function hl(t="",e){if(!e)return(oh(t)?t.slice(0,-1):t)||"/";if(!oh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Pc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(oh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function d1(t=""){return t.startsWith("/")}function Pm(t=""){return d1(t)?t:"/"+t}function p1(t,e){if(Bv(e)||nr(t))return t;const n=hl(e);return t.startsWith(n)?t:fl(n,t)}function Cm(t,e){if(Bv(e))return t;const n=hl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Uv(t,e){const n=_1(t),r={...Fv(n.search),...e};return n.search=i1(r),y1(n)}function Bv(t){return!t||t==="/"}function m1(t){return t&&t!=="/"}function fl(t,...e){let n=t||"";for(const r of e.filter(s=>m1(s)))if(n){const s=r.replace(h1,"");n=Pc(n)+s}else n=r;return n}function jv(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&nr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function g1(t,e,n={}){return n.trailingSlash||(t=Pc(t),e=Pc(e)),n.leadingSlash||(t=Pm(t),e=Pm(e)),n.encoding||(t=Sc(t),e=Sc(e)),t===e}const $v=Symbol.for("ufo:protocolRelative");function _1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!nr(t,{acceptRelative:!0}))return km(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=km(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[$v]:!r}}function km(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function y1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[$v]?(t.protocol||"")+"//":"")+s+i+e+n+r}class v1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function E1(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new v1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,R]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[R]}});return a}const w1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Om(t="GET"){return w1.has(t.toUpperCase())}function b1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const T1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),I1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function A1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return I1.test(e)?"json":T1.has(e)||e.startsWith("text/")?"text":"blob"}function R1(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const S1=new Set([408,409,425,429,500,502,503,504]),P1=new Set([101,204,205,304]);function Hv(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=Om(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):S1.has(d))){const p=a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=E1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:R1(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=p1(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=Uv(h.request,{...h.options.params,...h.options.query}))),h.options.body&&Om(h.options.method)&&(b1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const R=new r;d=setTimeout(()=>R.abort(),h.options.timeout),h.options.signal=R.signal}try{h.response=await e(h.request,h.options)}catch(R){return h.error=R,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{d&&clearTimeout(d)}if(h.response.body&&!P1.has(h.response.status)&&h.options.method!=="HEAD"){const R=(h.options.parseResponse?"json":h.options.responseType)||A1(h.response.headers.get("content-type")||"");switch(R){case"json":{const k=await h.response.text(),N=h.options.parseResponse||Mo;h.response._data=N(k);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[R]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>Hv({...t,defaults:{...t.defaults,...a}}),o}const Lf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),C1=Lf.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),k1=Lf.Headers,O1=Lf.AbortController,N1=Hv({fetch:C1,Headers:k1,AbortController:O1}),x1=N1,D1=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Cc=D1().app,L1=()=>Cc.baseURL,M1=()=>Cc.buildAssetsDir,Mf=(...t)=>jv(Vf(),M1(),...t),Vf=(...t)=>{const e=Cc.cdnURL||Cc.baseURL;return t.length?jv(e,...t):e};globalThis.__buildAssetsURL=Mf,globalThis.__publicAssetsURL=Vf;globalThis.$fetch||(globalThis.$fetch=x1.create({baseURL:L1()}));function ah(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?ah(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const V1={run:t=>t()},F1=()=>V1,qv=typeof console.createTask<"u"?console.createTask:F1;function U1(t,e){const n=e.shift(),r=qv(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function B1(t,e){const n=e.shift(),r=qv(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function _u(t,e){for(const n of[...t])n(e)}class j1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ah(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=ah(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(U1,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(B1,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&_u(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&_u(this._after,s)}):(this._after&&s&&_u(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function zv(){return new j1}function $1(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;ch.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{ch.delete(u)}}}}function H1(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=$1({...t,...r})),e[n],e[n]}}}const kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Nm="__unctx__",q1=kc[Nm]||(kc[Nm]=H1()),z1=(t,e={})=>q1.get(t,e),xm="__unctx_async_handlers__",ch=kc[xm]||(kc[xm]=new Set);function Vo(t){const e=[];for(const s of ch){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const lh={name:"page",mode:"out-in"},W1=!1,K1=!1,G1={componentName:"NuxtLink"},Q1=null,Y1="#__nuxt",Wv="nuxt-app",Dm=36e5;function Kv(t=Wv){return z1(t,{asyncContext:!1})}const X1="__nuxt_plugin";function J1(t){let e=0;const n={_name:Wv,_scope:mf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.12.4"},get vue(){return n.vueApp.version}},payload:jn({data:jn({}),state:Yr({}),once:new Set,_errors:jn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!ea()?n._scope.run(()=>Lm(n,s)):Lm(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:jn({}),_payloadRevivers:{},...t};if(window.__NUXT__)for(const s in window.__NUXT__)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],window.__NUXT__[s]);break;default:n.payload[s]=window.__NUXT__[s]}n.hooks=zv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;$a(n,o,i),$a(n.vueApp.config.globalProperties,o,i)},$a(n.vueApp,"$nuxt",n),$a(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Me;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function Z1(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function eR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function tR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=eR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)Z1(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Yt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[X1]:!0,_name:e})}function Lm(t,e,n){const r=()=>e();return Kv(t._name).set(t),t.vueApp.runWithContext(r)}function nR(t){var n;let e;return Pf()&&(e=(n=al())==null?void 0:n.appContext.app.$nuxt),e=e||Kv(t).tryUse(),e||null}function Me(t){const e=nR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function ks(t){return Me().$config}function $a(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function rR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||sR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=iR(u,s)}i=a+1}return n}function sR(t){return t.includes("%")?decodeURIComponent(t):t}function iR(t,e){try{return e(t)}catch{return t}}const Ha=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Mm(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Ha.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Ha.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ha.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ha.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!oR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function oR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Vm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Fm(t,e){e?e={...Vm,...e}:e=Vm;const n=Gv(e);return n.dispatch(t),n.toString()}const aR=Object.freeze(["prototype","__proto__","constructor"]);function Gv(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!Um(s)&&(h=aR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=Gv(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),Um(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const Qv="[native code] }",cR=Qv.length;function Um(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-cR)===Qv}function lR(t,e,n={}){return t===e||Fm(t,n)===Fm(e,n)}function uR(t,e){return{ctx:{table:t},matchAll:n=>Xv(n,t)}}function Yv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Yv(s)])):new Map(Object.entries(t[n]));return e}function hR(t){return uR(Yv(t))}function Xv(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Bm(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Bm(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Xv(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Bm(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function yu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function uh(t,e,n=".",r){if(!yu(e))return uh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:yu(o)&&yu(s[i])?s[i]=uh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function fR(t){return(...e)=>e.reduce((n,r)=>uh(n,r,"",t),{})}const Jv=fR();function dR(t,e){try{return e in t}catch{return!1}}var pR=Object.defineProperty,mR=(t,e,n)=>e in t?pR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,os=(t,e,n)=>(mR(t,typeof e!="symbol"?e+"":e,n),n);class hh extends Error{constructor(e,n={}){super(e,n),os(this,"statusCode",500),os(this,"fatal",!1),os(this,"unhandled",!1),os(this,"statusMessage"),os(this,"data"),os(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:dh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Zv(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}os(hh,"__h3_error__",!0);function fh(t){if(typeof t=="string")return new hh(t);if(gR(t))return t;const e=new hh(t.message??t.statusMessage??"",{cause:t.cause||t});if(dR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=dh(t.statusCode,e.statusCode):t.status&&(e.statusCode=dh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Zv(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function gR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const _R=/[^\u0009\u0020-\u007E]/g;function Zv(t=""){return t.replace(_R,"")}function dh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const eE=Symbol("layout-meta"),sa=Symbol("route"),yt=()=>{var t;return(t=Me())==null?void 0:t.$router},Ff=()=>Pf()?Rt(sa,Me()._route):Me()._route;function NF(t){return t}const yR=()=>{try{if(Me()._processingMiddleware)return!0}catch{return!1}return!1},vR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?ph(t):yt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=nr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&f1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=yR();if(!s&&i)return t;const o=yt(),a=Me();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function ph(t){return Uv(t.path||"",t.query||{})+(t.hash||"")}const tE="__nuxt_error",dl=()=>ZT(Me().payload,"error"),Ks=t=>{const e=pl(t);try{const n=Me(),r=dl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},nE=async(t={})=>{const e=Me(),n=dl();e.callHook("app:error:cleared",t),t.redirect&&await yt().replace(t.redirect),n.value=Q1},ER=t=>!!t&&typeof t=="object"&&tE in t,pl=t=>{const e=fh(t);return Object.defineProperty(e,tE,{value:!0,configurable:!1,writable:!1}),e},wR=-1,bR=-2,TR=-3,IR=-4,AR=-5,RR=-6;function SR(t,e){return PR(JSON.parse(t),e)}function PR(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===wR)return;if(i===TR)return NaN;if(i===IR)return 1/0;if(i===AR)return-1/0;if(i===RR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==bR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}function CR(t){return Array.isArray(t)?t:[t]}const kR=["title","titleTemplate","script","style","noscript"],rc=["base","meta","link","style","script","noscript"],OR=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],NR=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],rE=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],xR=typeof window<"u";function Uf(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function jm(t){return t._h||Uf(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function sE(t,e){const{props:n,tag:r}=t;if(NR.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return`${r}:${i}:${o}`}return!1}function $m(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function DR(t,e,n){const r={tag:t,props:await iE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return rE.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||kR.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function LR(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>s.trim()).filter(Boolean).join(n)}async function iE(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=LR(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!rE.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const MR=10;async function VR(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&OR.includes(n)).forEach(([n,r])=>{const s=CR(r);e.push(...s.map(i=>DR(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<MR)+r,n))}const Hm={base:-10,title:10},qm={critical:-80,high:-10,low:20};function Oc(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in Hm&&(e=Hm[t.tag]),typeof n=="string"&&n in qm?e+qm[n]:e)}const FR=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],zm=["onload","onerror","onabort","onprogress","onloadstart"],fr="%separator";function sc(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,u)=>l&&l[u]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,u)=>`${a}${u}`).trim())}),t.includes(fr)&&(t.endsWith(fr)&&(t=t.slice(0,-fr.length).trim()),t.startsWith(fr)&&(t=t.slice(fr.length).trim()),t=t.replace(new RegExp(`\\${fr}\\s*\\${fr}`,"g"),fr),t=sc(t,{separator:n},n)),t}async function oE(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(d=>({tag:d,id:rc.includes(d.tag)?jm(d):d.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const d of["body","head"]){const p=(h=n[d])==null?void 0:h.children,g=[];for(const R of[...p].filter(k=>rc.includes(k.tagName.toLowerCase()))){const k={tag:R.tagName.toLowerCase(),props:await iE(R.getAttributeNames().reduce((S,E)=>({...S,[E]:R.getAttribute(E)}),{})),innerHTML:R.innerHTML};let N=1,x=sE(k);for(;x&&g.find(S=>S._d===x);)x=`${x}:${N++}`;k._d=x||void 0,g.push(k),i.elMap[R.getAttribute("data-hid")||jm(k)]=R}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(d,p,g){const R=`${d}:${p}`;i.sideEffects[R]=g,delete i.pendingSideEffects[R]}function a({id:d,$el:p,tag:g}){const R=g.tag.endsWith("Attrs");i.elMap[d]=p,R||(["textContent","innerHTML"].forEach(k=>{g[k]&&g[k]!==p[k]&&(p[k]=g[k])}),o(d,"el",()=>{var k;(k=i.elMap[d])==null||k.remove(),delete i.elMap[d]}));for(const[k,N]of Object.entries(g._eventHandlers||{}))p.getAttribute(`data-${k}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:p).addEventListener(k.replace("on",""),N.bind(p)),p.setAttribute(`data-${k}`,""));Object.entries(g.props).forEach(([k,N])=>{const x=`attr:${k}`;if(k==="class")for(const S of(N||"").split(" ").filter(Boolean))R&&o(d,`${x}:${S}`,()=>p.classList.remove(S)),!p.classList.contains(S)&&p.classList.add(S);else if(k==="style")for(const S of(N||"").split(";").filter(Boolean)){const[E,...O]=S.split(":").map(D=>D.trim());o(d,`${x}:${E}`,()=>{p.style.removeProperty(E)}),p.style.setProperty(E,O.join(":"))}else p.getAttribute(k)!==N&&p.setAttribute(k,N===!0?"":String(N)),R&&o(d,x,()=>p.removeAttribute(k))})}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of s){const{tag:p,shouldRender:g,id:R}=d;if(g){if(p.tag==="title"){n.title=p.textContent;continue}d.$el=d.$el||i.elMap[R],d.$el?a(d):rc.includes(p.tag)&&l.push(d)}}for(const d of l){const p=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),a(d),u[p]=u[p]||n.createDocumentFragment(),u[p].appendChild(d.$el)}for(const d of s)await t.hooks.callHook("dom:renderTag",d,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(i.pendingSideEffects).forEach(d=>d()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function UR(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await oE(t,e),delete t._domUpdatePromise,r()}))}function BR(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){UR(i,t)}}}}}const jR=["templateParams","htmlAttrs","bodyAttrs"],$R={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=sE(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&jR.includes(r.tag)&&(a="merge"),a==="merge"){const l=i.props;["class","style"].forEach(u=>{l[u]&&(r.props[u]?(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),r.props[u]=`${l[u]} ${r.props[u]}`):r.props[u]=l[u])}),e[s].props={...l,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(Oc(r)>Oc(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(rc.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},HR={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},qR=["script","link","bodyAttrs"],zR=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(r=>qR.includes(r.tag)))Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(t.ssr&&zm.includes(r)?n.props[r]=`this.dataset.${r}fired = true`:delete n.props[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Uf(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var r,s;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>zm.some(a=>`${a}fired`===o))){const o=i.replace("fired","");(s=(r=n._eventHandlers)==null?void 0:r[o])==null||s.call(e,new Event(o.replace("on","")))}}}}),WR=["link","style","script","noscript"],KR={hooks:{"tag:normalise":({tag:t})=>{t.key&&WR.includes(t.tag)&&(t.props["data-hid"]=t._h=Uf(t.key))}}},GR={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of FR)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Oc(n)-Oc(r))}}},QR={meta:"content",link:"href",htmlAttrs:"lang"},YR=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,r=(a=n.find(l=>l.tag==="title"))==null?void 0:a.textContent,s=n.findIndex(l=>l.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=sc(i.pageTitle||r||"",i,o);for(const l of n.filter(u=>u.processTemplateParams!==!1)){const u=QR[l.tag];u&&typeof l.props[u]=="string"?l.props[u]=sc(l.props[u],i,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(h=>{typeof l[h]=="string"&&(l[h]=sc(l[h],i,o))})}t._templateParams=i,t._separator=o,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),XR={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=$m(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=$m(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},JR={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let aE;function ZR(t={}){const e=eS(t);return e.use(BR()),aE=e}function Wm(t,e){return!t||t==="server"&&e||t==="client"&&!e}function eS(t={}){const e=zv();e.addHooks(t.hooks||{}),t.document=t.document||(xR?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),Wm(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return Wm(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),e.callHook("entries:updated",a),r()},patch(d){i=i.map(p=>(p._i===h._i&&(p.input=h.input=d),p)),r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await VR(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[$R,HR,zR,KR,GR,YR,XR,JR,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function tS(){return aE}const nS=Nv.startsWith("3");function rS(t){return typeof t=="function"?t():et(t)}function Nc(t,e=""){if(t instanceof Promise)return t;const n=rS(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Nc(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,et(s)]:[r,Nc(s,r)])):n}const sS={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Nc(e.input)}}},cE="usehead";function iS(t){return{install(n){nS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(cE,t))}}.install}function oS(t={}){t.domDelayFn=t.domDelayFn||(n=>xn(()=>setTimeout(()=>n(),0)));const e=ZR(t);return e.use(sS),e.install=iS(e),e}const mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gh="__unhead_injection_handler__";function aS(t){mh[gh]=t}function cS(){if(gh in mh)return mh[gh]();const t=Rt(cE);return t||tS()}function Km(t,e={}){const n=e.head||cS();if(n)return n.ssr?n.push(t,e):lS(n,t,e)}function lS(t,e,n={}){const r=Bt(!1),s=Bt({});BI(()=>{s.value=r.value?{}:Nc(e)});const i=t.push(s.value,n);return dn(s,a=>{i.patch(a)}),al()&&(na(()=>{i.dispose()}),Jy(()=>{r.value=!0}),Xy(()=>{r.value=!1})),i}let ic,oc;function uS(){return ic=$fetch(Mf(`builds/meta/${ks().app.buildId}.json`),{responseType:"json"}),ic.then(t=>{oc=hR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),ic}function ml(){return ic||uS()}async function Bf(t){if(await ml(),!oc)return console.error("[nuxt] Error creating app manifest matcher.",oc),{};try{return Jv({},...oc.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function Gm(t,e={}){const n=await fS(t,e),r=Me(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=uE(t).then(i=>i?lE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const hS="_payload.json";async function fS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||nr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=ks(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await uE(t)?i:r.app.baseURL;return fl(o,n.pathname,hS+(s?`?${s}`:""))}async function lE(t){const e=fetch(t).then(n=>n.text().then(hE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function uE(t=Ff().path){if(t=hl(t),(await ml()).prerendered.includes(t))return!0;const n=await Bf(t);return!!n.prerender&&!n.redirect}let qa=null;async function dS(){if(qa)return qa;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await hE(t.textContent||""),n=t.dataset.src?await lE(t.dataset.src):void 0;return qa={...e,...n,...window.__NUXT__},qa}async function hE(t){return await SR(t,Me()._payloadRevivers)}function pS(t,e){Me()._payloadRevivers[t]=e}const Qm={NuxtError:t=>pl(t),EmptyShallowRef:t=>So(t==="_"?void 0:t==="0n"?BigInt(0):Mo(t)),EmptyRef:t=>Bt(t==="_"?void 0:t==="0n"?BigInt(0):Mo(t)),ShallowRef:t=>So(t),ShallowReactive:t=>jn(t),Ref:t=>Bt(t),Reactive:t=>Yr(t)},mS=Yt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in Qm)pS(r,Qm[r]);Object.assign(t.payload,([e,n]=Vo(()=>t.runWithContext(dS)),e=await e,n(),e)),window.__NUXT__=t.payload}}),gS=[],_S=Yt({name:"nuxt:head",enforce:"pre",setup(t){const e=oS({plugins:gS});aS(()=>Me().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await oE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Hs=typeof document<"u";function yS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function vu(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const po=()=>{},mn=Array.isArray,fE=/#/g,vS=/&/g,ES=/\//g,wS=/=/g,bS=/\?/g,dE=/\+/g,TS=/%5B/g,IS=/%5D/g,pE=/%5E/g,AS=/%60/g,mE=/%7B/g,RS=/%7C/g,gE=/%7D/g,SS=/%20/g;function jf(t){return encodeURI(""+t).replace(RS,"|").replace(TS,"[").replace(IS,"]")}function PS(t){return jf(t).replace(mE,"{").replace(gE,"}").replace(pE,"^")}function _h(t){return jf(t).replace(dE,"%2B").replace(SS,"+").replace(fE,"%23").replace(vS,"%26").replace(AS,"`").replace(mE,"{").replace(gE,"}").replace(pE,"^")}function CS(t){return _h(t).replace(wS,"%3D")}function kS(t){return jf(t).replace(fE,"%23").replace(bS,"%3F")}function OS(t){return t==null?"":kS(t).replace(ES,"%2F")}function Fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NS=/\/$/,xS=t=>t.replace(NS,"");function Eu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=VS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fo(o)}}function DS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ym(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fi(e.matched[r],n.matched[s])&&_E(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _E(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!MS(t[n],e[n]))return!1;return!0}function MS(t,e){return mn(t)?Xm(t,e):mn(e)?Xm(e,t):t===e}function Xm(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function VS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Uo;(function(t){t.pop="pop",t.push="push"})(Uo||(Uo={}));var mo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mo||(mo={}));function FS(t){if(!t)if(Hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xS(t)}const US=/^[^#]+#/;function BS(t,e){return t.replace(US,"#")+e}function jS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const gl=()=>({left:window.scrollX,top:window.scrollY});function $S(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Jm(t,e){return(history.state?history.state.position-e:-1)+t}const yh=new Map;function HS(t,e){yh.set(t,e)}function qS(t){const e=yh.get(t);return yh.delete(t),e}let zS=()=>location.protocol+"//"+location.host;function yE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ym(l,"")}return Ym(n,t)+r+s}function WS(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=yE(t,location),R=n.value,k=e.value;let N=0;if(p){if(n.value=g,e.value=p,o&&o===R){o=null;return}N=k?p.position-k.position:0}else r(g);s.forEach(x=>{x(n.value,R,{delta:N,type:Uo.pop,direction:N?N>0?mo.forward:mo.back:mo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:gl()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Zm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?gl():null}}function KS(t){const{history:e,location:n}=window,r={value:yE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:zS()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Oe({},e.state,Zm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:gl()});i(h.current,h,!0);const d=Oe({},Zm(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function vE(t){t=FS(t);const e=KS(t),n=WS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:BS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function GS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),vE(t)}function QS(t){return typeof t=="string"||t&&typeof t=="object"}function EE(t){return typeof t=="string"||typeof t=="symbol"}const wE=Symbol("");var eg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(eg||(eg={}));function di(t,e){return Oe(new Error,{type:t,[wE]:!0},e)}function Fn(t,e){return t instanceof Error&&wE in t&&(e==null||!!(t.type&e))}const tg="[^/]+?",YS={sensitive:!1,strict:!1,start:!0,end:!0},XS=/[.+*?^${}()[\]/\\]/g;function JS(t,e){const n=Oe({},YS,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(XS,"\\$&"),g+=40;else if(p.type===1){const{value:R,repeatable:k,optional:N,regexp:x}=p;i.push({name:R,repeatable:k,optional:N});const S=x||tg;if(S!==tg){g+=10;try{new RegExp(`(${S})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${S}): `+O.message)}}let E=k?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(E=N&&u.length<2?`(?:/${E})`:"/"+E),N&&(E+="?"),s+=E,g+=20,N&&(g+=-8),k&&(g+=-20),S===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",R=i[p-1];d[R.name]=g&&R.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:N}=g,x=R in u?u[R]:"";if(mn(x)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const S=mn(x)?x.join("/"):x;if(!S)if(N)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);h+=S}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function ZS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ZS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ng(r))return 1;if(ng(s))return-1}return s.length-r.length}function ng(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eP={type:0,value:""},tP=/[a-zA-Z0-9_]/;function nP(t){if(!t)return[[]];if(t==="/")return[[eP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:tP.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function rP(t,e,n){const r=JS(nP(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sP(t,e){const n=[],r=new Map;e=ig({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const R=!g,k=iP(d);k.aliasOf=g&&g.record;const N=ig(e,d),x=[k];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of O)x.push(Oe({},k,{components:g?g.record.components:k.components,path:D,aliasOf:g?g.record:k}))}let S,E;for(const O of x){const{path:D}=O;if(p&&D[0]!=="/"){const M=p.record.path,b=M[M.length-1]==="/"?"":"/";O.path=p.record.path+(D&&b+D)}if(S=rP(O,p,N),g?g.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),R&&d.name&&!sg(S)&&o(d.name)),TE(S)&&l(S),k.children){const M=k.children;for(let b=0;b<M.length;b++)i(M[b],S,g&&g.children[b])}g=g||S}return E?()=>{o(E)}:po}function o(d){if(EE(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=cP(d,n);n.splice(p,0,d),d.record.name&&!sg(d)&&r.set(d.record.name,d)}function u(d,p){let g,R={},k,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw di(1,{location:d});N=g.record.name,R=Oe(rg(p.params,g.keys.filter(E=>!E.optional).concat(g.parent?g.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&rg(d.params,g.keys.map(E=>E.name))),k=g.stringify(R)}else if(d.path!=null)k=d.path,g=n.find(E=>E.re.test(k)),g&&(R=g.parse(k),N=g.record.name);else{if(g=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!g)throw di(1,{location:d,currentLocation:p});N=g.record.name,R=Oe({},p.params,d.params),k=g.stringify(R)}const x=[];let S=g;for(;S;)x.unshift(S.record),S=S.parent;return{name:N,path:k,params:R,matched:x,meta:aP(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function rg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function iP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function sg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function ig(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bE(t,e[i])<0?r=i:n=i+1}const s=lP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function lP(t){let e=t;for(;e=e.parent;)if(TE(e)&&bE(t,e)===0)return e}function TE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dE," "),o=i.indexOf("="),a=Fo(o<0?i:i.slice(0,o)),l=o<0?null:Fo(i.slice(o+1));if(a in e){let u=e[a];mn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function og(t){let e="";for(let n in t){const r=t[n];if(n=CS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&_h(i)):[r&&_h(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fP=Symbol(""),ag=Symbol(""),$f=Symbol(""),Hf=Symbol(""),vh=Symbol("");function Qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(di(4,{from:n,to:e})):p instanceof Error?l(p):QS(p)?l(di(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function wu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(dP(l)){const h=(l.__vccOpts||l)[e];h&&i.push(vr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=yS(h)?h.default:h;o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&vr(g,n,r,o,a,s)()}))}}return i}function dP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cg(t){const e=Rt($f),n=Rt(Hf),r=Le(()=>{const l=et(t.to);return e.resolve(l)}),s=Le(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(fi.bind(null,h));if(p>-1)return p;const g=lg(l[u-2]);return u>1&&lg(h)===g&&d[d.length-1].path!==g?d.findIndex(fi.bind(null,l[u-2])):p}),i=Le(()=>s.value>-1&&_P(n.params,r.value.params)),o=Le(()=>s.value>-1&&s.value===n.matched.length-1&&_E(n.params,r.value.params));function a(l={}){return gP(l)?e[et(t.replace)?"replace":"push"](et(t.to)).catch(po):Promise.resolve()}return{route:r,href:Le(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const pP=Dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cg,setup(t,{slots:e}){const n=Yr(cg(t)),{options:r}=Rt($f),s=Le(()=>({[ug(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ug(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:gt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),mP=pP;function gP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _P(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function lg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ug=(t,e,n)=>t??e??n,yP=Dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Rt(vh),s=Le(()=>t.route||r.value),i=Rt(ag,0),o=Le(()=>{let u=et(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Le(()=>s.value.matched[o.value]);ms(ag,Le(()=>o.value+1)),ms(fP,a),ms(vh,s);const l=Bt();return dn(()=>[l.value,a.value,t.name],([u,h,d],[p,g,R])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!fi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return hg(n.default,{Component:p,route:u});const g=d.props[h],R=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=gt(p,Oe({},R,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return hg(n.default,{Component:N,route:u})||N}}});function hg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const IE=yP;function vP(t){const e=sP(t.routes,t),n=t.parseQuery||uP,r=t.stringifyQuery||og,s=t.history,i=Qi(),o=Qi(),a=Qi(),l=So(un);let u=un;Hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=vu.bind(null,B=>""+B),d=vu.bind(null,OS),p=vu.bind(null,Fo);function g(B,Z){let Y,ee;return EE(B)?(Y=e.getRecordMatcher(B),ee=Z):ee=B,e.addRoute(ee,Y)}function R(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function k(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function x(B,Z){if(Z=Oe({},Z||l.value),typeof B=="string"){const C=Eu(n,B,Z.path),V=e.resolve({path:C.path},Z),j=s.createHref(C.fullPath);return Oe(C,V,{params:p(V.params),hash:Fo(C.hash),redirectedFrom:void 0,href:j})}let Y;if(B.path!=null)Y=Oe({},B,{path:Eu(n,B.path,Z.path).path});else{const C=Oe({},B.params);for(const V in C)C[V]==null&&delete C[V];Y=Oe({},B,{params:d(C)}),Z.params=d(Z.params)}const ee=e.resolve(Y,Z),Ee=B.hash||"";ee.params=h(p(ee.params));const Ne=DS(r,Oe({},B,{hash:PS(Ee),path:ee.path})),I=s.createHref(Ne);return Oe({fullPath:Ne,hash:Ee,query:r===og?hP(B.query):B.query||{}},ee,{redirectedFrom:void 0,href:I})}function S(B){return typeof B=="string"?Eu(n,B,l.value.path):Oe({},B)}function E(B,Z){if(u!==B)return di(8,{from:Z,to:B})}function O(B){return b(B)}function D(B){return O(Oe(S(B),{replace:!0}))}function M(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ee=typeof Y=="function"?Y(B):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=S(ee):{path:ee},ee.params={}),Oe({query:B.query,hash:B.hash,params:ee.path!=null?{}:B.params},ee)}}function b(B,Z){const Y=u=x(B),ee=l.value,Ee=B.state,Ne=B.force,I=B.replace===!0,C=M(Y);if(C)return b(Oe(S(C),{state:typeof C=="object"?Oe({},Ee,C.state):Ee,force:Ne,replace:I}),Z||Y);const V=Y;V.redirectedFrom=Z;let j;return!Ne&&LS(r,ee,Y)&&(j=di(16,{to:V,from:ee}),Jt(ee,ee,!0,!1)),(j?Promise.resolve(j):w(V,ee)).catch(U=>Fn(U)?Fn(U,2)?U:cn(U):ie(U,V,ee)).then(U=>{if(U){if(Fn(U,2))return b(Oe({replace:I},S(U.to),{state:typeof U.to=="object"?Oe({},Ee,U.to.state):Ee,force:Ne}),Z||V)}else U=A(V,ee,!0,I,Ee);return P(V,ee,U),U})}function _(B,Z){const Y=E(B,Z);return Y?Promise.reject(Y):Promise.resolve()}function y(B){const Z=sr.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function w(B,Z){let Y;const[ee,Ee,Ne]=EP(B,Z);Y=wu(ee.reverse(),"beforeRouteLeave",B,Z);for(const C of ee)C.leaveGuards.forEach(V=>{Y.push(vr(V,B,Z))});const I=_.bind(null,B,Z);return Y.push(I),xt(Y).then(()=>{Y=[];for(const C of i.list())Y.push(vr(C,B,Z));return Y.push(I),xt(Y)}).then(()=>{Y=wu(Ee,"beforeRouteUpdate",B,Z);for(const C of Ee)C.updateGuards.forEach(V=>{Y.push(vr(V,B,Z))});return Y.push(I),xt(Y)}).then(()=>{Y=[];for(const C of Ne)if(C.beforeEnter)if(mn(C.beforeEnter))for(const V of C.beforeEnter)Y.push(vr(V,B,Z));else Y.push(vr(C.beforeEnter,B,Z));return Y.push(I),xt(Y)}).then(()=>(B.matched.forEach(C=>C.enterCallbacks={}),Y=wu(Ne,"beforeRouteEnter",B,Z,y),Y.push(I),xt(Y))).then(()=>{Y=[];for(const C of o.list())Y.push(vr(C,B,Z));return Y.push(I),xt(Y)}).catch(C=>Fn(C,8)?C:Promise.reject(C))}function P(B,Z,Y){a.list().forEach(ee=>y(()=>ee(B,Z,Y)))}function A(B,Z,Y,ee,Ee){const Ne=E(B,Z);if(Ne)return Ne;const I=Z===un,C=Hs?history.state:{};Y&&(ee||I?s.replace(B.fullPath,Oe({scroll:I&&C&&C.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,Jt(B,Z,Y,I),cn()}let T;function me(){T||(T=s.listen((B,Z,Y)=>{if(!_n.listening)return;const ee=x(B),Ee=M(ee);if(Ee){b(Oe(Ee,{replace:!0}),ee).catch(po);return}u=ee;const Ne=l.value;Hs&&HS(Jm(Ne.fullPath,Y.delta),gl()),w(ee,Ne).catch(I=>Fn(I,12)?I:Fn(I,2)?(b(I.to,ee).then(C=>{Fn(C,20)&&!Y.delta&&Y.type===Uo.pop&&s.go(-1,!1)}).catch(po),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ie(I,ee,Ne))).then(I=>{I=I||A(ee,Ne,!1),I&&(Y.delta&&!Fn(I,8)?s.go(-Y.delta,!1):Y.type===Uo.pop&&Fn(I,20)&&s.go(-1,!1)),P(ee,Ne,I)}).catch(po)}))}let ye=Qi(),J=Qi(),te;function ie(B,Z,Y){cn(B);const ee=J.list();return ee.length?ee.forEach(Ee=>Ee(B,Z,Y)):console.error(B),Promise.reject(B)}function qe(){return te&&l.value!==un?Promise.resolve():new Promise((B,Z)=>{ye.add([B,Z])})}function cn(B){return te||(te=!B,me(),ye.list().forEach(([Z,Y])=>B?Y(B):Z()),ye.reset()),B}function Jt(B,Z,Y,ee){const{scrollBehavior:Ee}=t;if(!Hs||!Ee)return Promise.resolve();const Ne=!Y&&qS(Jm(B.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return xn().then(()=>Ee(B,Z,Ne)).then(I=>I&&$S(I)).catch(I=>ie(I,B,Z))}const ze=B=>s.go(B);let We;const sr=new Set,_n={currentRoute:l,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:x,options:t,push:O,replace:D,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:qe,install(B){const Z=this;B.component("RouterLink",mP),B.component("RouterView",IE),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>et(l)}),Hs&&!We&&l.value===un&&(We=!0,O(s.location).catch(Ee=>{}));const Y={};for(const Ee in un)Object.defineProperty(Y,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide($f,Z),B.provide(Hf,jn(Y)),B.provide(vh,l);const ee=B.unmount;sr.add(B),B.unmount=function(){sr.delete(B),sr.size<1&&(u=un,T&&T(),T=null,l.value=un,We=!1,te=!1),ee()}}};function xt(B){return B.reduce((Z,Y)=>Z.then(()=>y(Y)),Promise.resolve())}return _n}function EP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>fi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>fi(u,l))||s.push(l))}return[n,r,s]}function wP(t){return Rt(Hf)}const bP=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Eh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&bP(t.route,n));return typeof r=="function"?r(t.route):r},TP=(t,e)=>({default:()=>t?gt(cI,t===!0?{}:t,e):e});function qf(t){return Array.isArray(t)?t:[t]}const IP="modulepreload",AP=function(t,e){return t[0]==="."?new URL(t,e).href:t},fg={},RP=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=AP(l,r),l in fg)return;fg[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const R=i[g];if(R.href===l&&(!u||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":IP,u||(p.as="script",p.crossOrigin=""),p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((g,R)=>{p.addEventListener("load",g),p.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ce=(...t)=>RP(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),SP={middleware:"auth"},PP={middleware:"auth"},CP={middleware:"auth"},dg=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Ce(()=>import("./D5aJrLew.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Ce(()=>import("./YoBK5qOu.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Ce(()=>import("./B9sIr6bE.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Home",path:"/Admin/Home",meta:SP||{},component:()=>Ce(()=>import("./DGIQxSdg.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default||t)},{name:"Admin",path:"/Admin",meta:PP||{},component:()=>Ce(()=>import("./RjvQRQLJ.js"),__vite__mapDeps([3,4]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Ce(()=>import("./BViUJaV6.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Ce(()=>import("./Dlytkcpa.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:CP||{},component:()=>Ce(()=>import("./b4CWjEYb.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Ce(()=>import("./D5Dcuzc6.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Ce(()=>import("./D9E4Jw43.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Ce(()=>import("./Zmfe_RQE.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Ce(()=>import("./k5zRy15q.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Ce(()=>import("./DvbmBExW.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Bio",path:"/Bio",component:()=>Ce(()=>import("./THvapVTu.js"),__vite__mapDeps([12,13]),import.meta.url).then(t=>t.default||t)},{name:"Contact",path:"/Contact",component:()=>Ce(()=>import("./DQg5gR2V.js"),__vite__mapDeps([14,15]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Ce(()=>import("./BCS0-IVd.js"),__vite__mapDeps([16,8,9,17]),import.meta.url).then(t=>t.default||t)},{name:"ForSale",path:"/ForSale",component:()=>Ce(()=>import("./lsnCe5c5.js"),__vite__mapDeps([18,19]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Ce(()=>import("./J4cwIexG.js"),__vite__mapDeps([20,8,9]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Ce(()=>import("./7ZqI6yK3.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",component:()=>Ce(()=>import("./BgYKEN8c.js"),__vite__mapDeps([21,1,22]),import.meta.url).then(t=>t.default||t)},{name:"Login",path:"/Login",component:()=>Ce(()=>import("./I_-BwYXu.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Ce(()=>import("./-kLK5xNa.js"),__vite__mapDeps([23,8,9,24]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Ce(()=>import("./DIvCElMY.js"),__vite__mapDeps([25,8,9,26]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Ce(()=>import("./BkqUFQQF.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio",path:"/Portfolio",component:()=>Ce(()=>import("./BQ_FG_dK.js"),__vite__mapDeps([27,28]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Ce(()=>import("./QMYSRjgt.js"),__vite__mapDeps([29,8,9]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Ce(()=>import("./l5rWqoeC.js"),__vite__mapDeps([30,8,9]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Ce(()=>import("./DDH6TgFE.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Stuff",path:"/Stuff",component:()=>Ce(()=>import("./D-zGqkok.js"),__vite__mapDeps([31,8,9]),import.meta.url).then(t=>t.default||t)}],AE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?gt(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function pg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function kP(t,e){return t===e||e===un?!1:pg(t)!==pg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const OP={scrollBehavior(t,e,n){var u;const r=Me(),s=((u=yt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&kP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:mg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??lh),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:mg(t.hash),behavior:s}),h(i)})})}};function mg(t){try{const e=document.querySelector(t);if(e)return Number.parseFloat(getComputedStyle(e).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const NP={hashMode:!1,scrollBehaviorType:"auto"},Ht={...NP,...OP},xP=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Me(),s=yt();if(([e,n]=Vo(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=pl({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Ks(o)),window.history.pushState({},"",t.fullPath)});return!1}})},DP=async t=>{let e,n;const r=([e,n]=Vo(()=>Bf(t.path)),e=await e,n(),e);if(r.redirect)return nr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},LP=[xP,DP],go={auth:()=>Ce(()=>import("./DD38LGuA.js"),[],import.meta.url)};function MP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Cm(h,"")}const a=Cm(r,t),l=!n||g1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const VP=Yt({name:"nuxt:router",enforce:"pre",async setup(t){var N,x;let e,n,r=ks().app.baseURL;Ht.hashMode&&!r.includes("#")&&(r+="#");const s=((N=Ht.history)==null?void 0:N.call(Ht,r))??(Ht.hashMode?GS(r):vE(r)),i=((x=Ht.routes)==null?void 0:x.call(Ht,dg))??dg;let o;const a=vP({...Ht,scrollBehavior:(S,E,O)=>{if(E===un){o=O;return}if(Ht.scrollBehavior){if(a.options.scrollBehavior=Ht.scrollBehavior,"scrollRestoration"in window.history){const D=a.beforeEach(()=>{D(),window.history.scrollRestoration="manual"})}return Ht.scrollBehavior(S,un,o||O)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=So(a.currentRoute.value);a.afterEach((S,E)=>{l.value=E}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=MP(r,window.location,t.payload.path),h=So(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((S,E)=>{var O,D,M,b;((D=(O=S.matched[0])==null?void 0:O.components)==null?void 0:D.default)===((b=(M=E.matched[0])==null?void 0:M.components)==null?void 0:b.default)&&d()});const p={};for(const S in h.value)Object.defineProperty(p,S,{get:()=>h.value[S]});t._route=jn(p),t._middleware=t._middleware||{global:[],named:{}};const g=dl();a.afterEach(async(S,E,O)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(nE),O&&await t.callHook("page:loading:end"),S.matched.length===0&&await t.runWithContext(()=>Ks(fh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))});try{[e,n]=Vo(()=>a.isReady()),await e,n()}catch(S){[e,n]=Vo(()=>t.runWithContext(()=>Ks(S))),await e,n()}const R=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const k=t.payload.state._layout;return a.beforeEach(async(S,E)=>{var O;await t.callHook("page:loading:start"),S.meta=Yr(S.meta),t.isHydrating&&k&&!Br(S.meta.layout)&&(S.meta.layout=k),t._processingMiddleware=!0;{const D=new Set([...LP,...t._middleware.global]);for(const M of S.matched){const b=M.meta.middleware;if(b)for(const _ of qf(b))D.add(_)}{const M=await t.runWithContext(()=>Bf(S.path));if(M.appMiddleware)for(const b in M.appMiddleware)M.appMiddleware[b]?D.add(b):D.delete(b)}for(const M of D){const b=typeof M=="string"?t._middleware.named[M]||await((O=go[M])==null?void 0:O.call(go).then(y=>y.default||y)):M;if(!b)throw new Error(`Unknown route middleware: '${M}'.`);const _=await t.runWithContext(()=>b(S,E));if(!t.payload.serverRendered&&t.isHydrating&&(_===!1||_ instanceof Error)){const y=_||fh({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ks(y)),!1}if(_!==!0&&(_||_===!1))return _}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in R&&(R.name=void 0),await a.replace({...R,force:!0}),a.options.scrollBehavior=Ht.scrollBehavior}catch(S){await t.runWithContext(()=>Ks(S))}}),{provide:{router:a}}}}),wh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),FP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),_l=t=>{const e=Me();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{wh(()=>t())}):wh(()=>t())},UP=Yt({name:"nuxt:payload",setup(t){yt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Gm(e.path);r&&Object.assign(t.static.data,r.data)}),_l(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Gm(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(ml,1e3)})}}),BP=Yt(()=>{const t=yt();_l(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),jP=Yt(t=>{let e;async function n(){const r=await ml();e&&clearTimeout(e),e=setTimeout(n,Dm);try{const s=await $fetch(Mf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}_l(()=>{e=setTimeout(n,Dm)})});function $P(t={}){const e=t.path||window.location.pathname;let n={};try{n=Mo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Me().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const HP=Yt({name:"nuxt:chunk-reload",setup(t){const e=yt(),n=ks(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:fl(n.app.baseURL,i.fullPath);$P({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),qP=Yt({name:"nuxt:global-components"}),Pr={default:()=>Ce(()=>import("./Ca6Ae744.js"),__vite__mapDeps([32,6,1,33]),import.meta.url).then(t=>t.default||t)},zP=Yt({name:"nuxt:prefetch",setup(t){const e=yt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Pr[r]=="function"&&await Pr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(nr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=qf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof go[o]=="function"&&go[o]();s&&typeof Pr[s]=="function"&&Pr[s]()})}});var gg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},WP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},SE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new KP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const R=u<<6&192|d;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GP=function(t){const e=RE(t);return SE.encodeByteArray(e,!0)},xc=function(t){return GP(t).replace(/\./g,"")},PE=function(t){try{return SE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const YP=()=>QP().__FIREBASE_DEFAULTS__,XP=()=>{if(typeof process>"u"||typeof gg>"u")return;const t=gg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&PE(t[1]);return e&&JSON.parse(e)},yl=()=>{try{return YP()||XP()||JP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CE=t=>{var e,n;return(n=(e=yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kE=t=>{const e=CE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OE=()=>{var t;return(t=yl())===null||t===void 0?void 0:t.config},NE=t=>{var e;return(e=yl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xc(JSON.stringify(n)),xc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function tC(){var t;const e=(t=yl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function nC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sC(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iC(){return!tC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oC(){try{return typeof indexedDB=="object"}catch{return!1}}function aC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cC,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function lC(t,e){return t.replace(uC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uC=/\{\$([^}]+)}/g;function hC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_g(i)&&_g(o)){if(!Dc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fC(t,e){const n=new dC(t,e);return n.subscribe.bind(n)}class dC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bu),s.error===void 0&&(s.error=bu),s.complete===void 0&&(s.complete=bu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bu(){}/**
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
 */class mC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_C(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gC(t){return t===as?void 0:t}function _C(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const vC={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},EC=we.INFO,wC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},bC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zf{constructor(e){this.name=e,this._logLevel=EC,this._logHandler=bC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const TC=(t,e)=>e.some(n=>t instanceof n);let yg,vg;function IC(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AC(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DE=new WeakMap,bh=new WeakMap,LE=new WeakMap,Tu=new WeakMap,Wf=new WeakMap;function RC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&DE.set(n,t)}).catch(()=>{}),Wf.set(e,t),e}function SC(t){if(bh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bh.set(t,e)}let Th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PC(t){Th=t(Th)}function CC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Iu(this),e,...n);return LE.set(r,e.sort?e.sort():[e]),Dr(r)}:AC().includes(t)?function(...e){return t.apply(Iu(this),e),Dr(DE.get(this))}:function(...e){return Dr(t.apply(Iu(this),e))}}function kC(t){return typeof t=="function"?CC(t):(t instanceof IDBTransaction&&SC(t),TC(t,IC())?new Proxy(t,Th):t)}function Dr(t){if(t instanceof IDBRequest)return RC(t);if(Tu.has(t))return Tu.get(t);const e=kC(t);return e!==t&&(Tu.set(t,e),Wf.set(e,t)),e}const Iu=t=>Wf.get(t);function OC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Dr(o.result),l.oldVersion,l.newVersion,Dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const NC=["get","getKey","getAll","getAllKeys","count"],xC=["put","add","delete","clear"],Au=new Map;function Eg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Au.get(e))return Au.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||NC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Au.set(e,i),i}PC(t=>({...t,get:(e,n,r)=>Eg(e,n)||t.get(e,n,r),has:(e,n)=>!!Eg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ih="@firebase/app",wg="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new zf("@firebase/app"),MC="@firebase/app-compat",VC="@firebase/analytics-compat",FC="@firebase/analytics",UC="@firebase/app-check-compat",BC="@firebase/app-check",jC="@firebase/auth",$C="@firebase/auth-compat",HC="@firebase/database",qC="@firebase/database-compat",zC="@firebase/functions",WC="@firebase/functions-compat",KC="@firebase/installations",GC="@firebase/installations-compat",QC="@firebase/messaging",YC="@firebase/messaging-compat",XC="@firebase/performance",JC="@firebase/performance-compat",ZC="@firebase/remote-config",ek="@firebase/remote-config-compat",tk="@firebase/storage",nk="@firebase/storage-compat",rk="@firebase/firestore",sk="@firebase/vertexai-preview",ik="@firebase/firestore-compat",ok="firebase",ak="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="[DEFAULT]",ck={[Ih]:"fire-core",[MC]:"fire-core-compat",[FC]:"fire-analytics",[VC]:"fire-analytics-compat",[BC]:"fire-app-check",[UC]:"fire-app-check-compat",[jC]:"fire-auth",[$C]:"fire-auth-compat",[HC]:"fire-rtdb",[qC]:"fire-rtdb-compat",[zC]:"fire-fn",[WC]:"fire-fn-compat",[KC]:"fire-iid",[GC]:"fire-iid-compat",[QC]:"fire-fcm",[YC]:"fire-fcm-compat",[XC]:"fire-perf",[JC]:"fire-perf-compat",[ZC]:"fire-rc",[ek]:"fire-rc-compat",[tk]:"fire-gcs",[nk]:"fire-gcs-compat",[rk]:"fire-fst",[ik]:"fire-fst-compat",[sk]:"fire-vertex","fire-js":"fire-js",[ok]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map,lk=new Map,Rh=new Map;function bg(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(Rh.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Rh.set(e,t);for(const n of Lc.values())bg(n,t);for(const n of lk.values())bg(n,t);return!0}function vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $n(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new ia("app","Firebase",uk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=ak;function ME(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ah,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Lr.create("bad-app-name",{appName:String(s)});if(n||(n=OE()),!n)throw Lr.create("no-options");const i=Lc.get(s);if(i){if(Dc(n,i.options)&&Dc(r,i.config))return i;throw Lr.create("duplicate-app",{appName:s})}const o=new yC(s);for(const l of Rh.values())o.addComponent(l);const a=new hk(n,r,o);return Lc.set(s,a),a}function Kf(t=Ah){const e=Lc.get(t);if(!e&&t===Ah&&OE())return ME();if(!e)throw Lr.create("no-app",{appName:t});return e}function In(t,e,n){var r;let s=(r=ck[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(a.join(" "));return}ws(new jr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fk="firebase-heartbeat-database",dk=1,Bo="firebase-heartbeat-store";let Ru=null;function VE(){return Ru||(Ru=OC(fk,dk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),Ru}async function pk(t){try{const n=(await VE()).transaction(Bo),r=await n.objectStore(Bo).get(FE(t));return await n.done,r}catch(e){if(e instanceof Ln)Qn.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Tg(t,e){try{const r=(await VE()).transaction(Bo,"readwrite");await r.objectStore(Bo).put(e,FE(t)),await r.done}catch(n){if(n instanceof Ln)Qn.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function FE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mk=1024,gk=30*24*60*60*1e3;class _k{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ig();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=gk}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Qn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ig(),{heartbeatsToSend:r,unsentEntries:s}=yk(this._heartbeatsCache.heartbeats),i=xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function Ig(){return new Date().toISOString().substring(0,10)}function yk(t,e=mk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ag(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ag(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oC()?aC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ag(t){return xc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){ws(new jr("platform-logger",e=>new DC(e),"PRIVATE")),ws(new jr("heartbeat",e=>new _k(e),"PRIVATE")),In(Ih,wg,t),In(Ih,wg,"esm2017"),In("fire-js","")}Ek("");var wk="firebase",bk="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(wk,bk,"app");function Gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function UE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tk=UE,BE=new ia("auth","Firebase",UE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new zf("@firebase/auth");function Ik(t,...e){Mc.logLevel<=we.WARN&&Mc.warn(`Auth (${Os}): ${t}`,...e)}function ac(t,...e){Mc.logLevel<=we.ERROR&&Mc.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Qf(t,...e)}function An(t,...e){return Qf(t,...e)}function jE(t,e,n){const r=Object.assign(Object.assign({},Tk()),{[e]:n});return new ia("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return jE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BE.create(t,...e)}function fe(t,e,...n){if(!t)throw Qf(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ac(e),new Error(e)}function Yn(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ak(){return Rg()==="http:"||Rg()==="https:"}function Rg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ak()||nC()||"connection"in navigator)?navigator.onLine:!0}function Sk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=eC()||rC()}get(){return Rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new aa(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,r,s={}){return HE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=oa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$E.fetch()(qE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function HE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Pk),e);try{const s=new Ok(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw za(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jE(t,h,u);gn(t,h)}}catch(s){if(s instanceof Ln)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function El(t,e,n,r,s={}){const i=await Xr(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Yf(t.config,s):`${t.config.apiScheme}://${s}`}function kk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ok{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),Ck.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}function Sg(t){return t!==void 0&&t.enterprise!==void 0}class Nk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xk(t,e){return Xr(t,"GET","/v2/recaptchaConfig",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function zE(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lk(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Xf(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_o(Su(s.auth_time)),issuedAtTime:_o(Su(s.iat)),expirationTime:_o(Su(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Su(t){return Number(t)*1e3}function Xf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const s=PE(n);return s?JSON.parse(s):(ac("Failed to decode base64 JWT payload"),null)}catch(s){return ac("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pg(t){const e=Xf(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&Mk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jo(t,zE(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?WE(i.providerUserInfo):[],a=Uk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ph(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Fk(t){const e=Ye(t);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function WE(t){return t.map(e=>{var{providerId:n}=e,r=Gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e){const n=await HE(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$E.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jk(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Pg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ni;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ph(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jo(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lk(this,e)}reload(){return Fk(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($n(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await jo(this,Dk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:O,isAnonymous:D,providerData:M,stsTokenManager:b}=n;fe(E&&b,e,"internal-error");const _=ni.fromJSON(this.name,b);fe(typeof E=="string",e,"internal-error"),dr(d,e.name),dr(p,e.name),fe(typeof O=="boolean",e,"internal-error"),fe(typeof D=="boolean",e,"internal-error"),dr(g,e.name),dr(R,e.name),dr(k,e.name),dr(N,e.name),dr(x,e.name),dr(S,e.name);const y=new qn({uid:E,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:D,photoURL:R,phoneNumber:g,tenantId:k,stsTokenManager:_,createdAt:x,lastLoginAt:S});return M&&Array.isArray(M)&&(y.providerData=M.map(w=>Object.assign({},w))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ni;s.updateFromServerResponse(n);const i=new qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?WE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ni;a.updateFromIdToken(r);const l=new qn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ph(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Map;function zn(t){Yn(t instanceof Function,"Expected a class definition");let e=Cg.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KE.type="NONE";const kg=KE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cc(this.userKey,s.apiKey,i),this.fullPersistenceKey=cc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ri(zn(kg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(kg);const o=cc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=qn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ri(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ri(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZE(e))return"Blackberry";if(ew(e))return"Webos";if(QE(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(JE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GE(t=St()){return/firefox\//i.test(t)}function QE(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=St()){return/crios\//i.test(t)}function XE(t=St()){return/iemobile/i.test(t)}function JE(t=St()){return/android/i.test(t)}function ZE(t=St()){return/blackberry/i.test(t)}function ew(t=St()){return/webos/i.test(t)}function Jf(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $k(t=St()){var e;return Jf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hk(){return sC()&&document.documentMode===10}function tw(t=St()){return Jf(t)||JE(t)||ew(t)||ZE(t)||/windows phone/i.test(t)||XE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e=[]){let n;switch(t){case"Browser":n=Og(St());break;case"Worker":n=`${Og(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zk(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Ns(t,e))}/**
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
 */const Wk=6;class Kk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ng(this),this.idTokenSubscription=new Ng(this),this.beforeStateQueue=new qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zE(this,{idToken:e}),r=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($n(this.app))return Promise.reject(Mr(this));const n=e?Ye(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $n(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $n(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zk(this),n=new Kk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ik(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Si(t){return Ye(t)}class Ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=fC(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qk(t){wl=t}function rw(t){return wl.loadJS(t)}function Yk(){return wl.recaptchaEnterpriseScript}function Xk(){return wl.gapiScript}function Jk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Zk="recaptcha-enterprise",eO="NO_RECAPTCHA";class tO{constructor(e){this.type=Zk,this.auth=Si(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{xk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Nk(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Sg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(eO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Sg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Yk();l.length!==0&&(l+=a),rw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function xg(t,e,n,r=!1){const s=new tO(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Dg(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await xg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t,e){const n=vl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dc(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function rO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sO(t,e,n){const r=Si(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sw(e),{host:o,port:a}=iO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),oO()}function sw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iO(t){const e=sw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lg(o)}}}function Lg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function aO(t,e){return Xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t,e){return El(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function uO(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Zf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dg(e,n,"signInWithPassword",cO);case"emailLink":return lO(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dg(e,r,"signUpPassword",aO);case"emailLink":return uO(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const hO="http://localhost";class bs extends Zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new bs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:hO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dO(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,r=eo(to(t)).deep_link_id;return(r?eo(to(r)).link:null)||r||n||e||t}class ed{constructor(e){var n,r,s,i,o,a;const l=eo(to(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=fO((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dO(e);try{return new ed(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ed.parseLink(n);return fe(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends iw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qn._fromIdTokenResponse(e,r,s),o=Mg(r);return new pi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mg(r);return new pi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fc(e,n,r,s)}}function ow(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(t,i,e,r):i})}async function pO(t,e,n=!1){const r=await jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(t,e,n=!1){const{auth:r}=t;if($n(r.app))return Promise.reject(Mr(r));const s="reauthenticate";try{const i=await jo(t,ow(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Xf(i.idToken);fe(o,r,"internal-error");const{sub:a}=o;return fe(t.uid===a,r,"user-mismatch"),pi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e,n=!1){if($n(t.app))return Promise.reject(Mr(t));const r="signIn",s=await ow(t,r,e),i=await pi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gO(t,e){return aw(Si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t){const e=Si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yO(t,e,n){return $n(t.app)?Promise.reject(Mr(t)):gO(Ye(t),Pi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_O(t),r})}function vO(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function EO(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function wO(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function bO(t){return Ye(t).signOut()}const Uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=1e3,IO=10;class lw extends cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Hk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lw.type="LOCAL";const AO=lw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw extends cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uw.type="SESSION";const hw=uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await RO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=td("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function PO(t){Rn().location.href=t}/**
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
 */function fw(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function CO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OO(){return fw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="firebaseLocalStorageDb",NO=1,Bc="firebaseLocalStorage",pw="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function xO(){const t=indexedDB.deleteDatabase(dw);return new la(t).toPromise()}function Ch(){const t=indexedDB.open(dw,NO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bc,{keyPath:pw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await xO(),e(await Ch()))})})}async function Vg(t,e,n){const r=Tl(t,!0).put({[pw]:e,value:n});return new la(r).toPromise()}async function DO(t,e){const n=Tl(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function Fg(t,e){const n=Tl(t,!0).delete(e);return new la(n).toPromise()}const LO=800,MO=3;class mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(OO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CO(),!this.activeServiceWorker)return;this.sender=new SO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await Vg(e,Uc,"1"),await Fg(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tl(s,!1).getAll();return new la(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mw.type="LOCAL";const VO=mw;new aa(3e4,6e4);/**
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
 */function FO(t,e){return e?zn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends Zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UO(t){return aw(t.auth,new nd(t),t.bypassAuthState)}function BO(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),mO(n,new nd(t),t.bypassAuthState)}async function jO(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),pO(n,new nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UO;case"linkViaPopup":case"linkViaRedirect":return jO;case"reauthViaPopup":case"reauthViaRedirect":return BO;default:gn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=new aa(2e3,1e4);class Gs extends gw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$O.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="pendingRedirect",lc=new Map;class qO extends gw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lc.get(this.auth._key());if(!e){try{const r=await zO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lc.set(this.auth._key(),e)}return this.bypassAuthState||lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zO(t,e){const n=GO(e),r=KO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function WO(t,e){lc.set(t._key(),e)}function KO(t){return zn(t._redirectPersistence)}function GO(t){return cc(HO,t.config.apiKey,t.name)}async function QO(t,e,n=!1){if($n(t.app))return Promise.reject(Mr(t));const r=Si(t),s=FO(r,e),o=await new qO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=10*60*1e3;class XO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_w(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ug(e))}saveEventToCache(e){this.cachedEventUids.add(Ug(e)),this.lastProcessedEventTime=Date.now()}}function Ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _w({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _w(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tN=/^https?/;async function nN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZO(t);for(const n of e)try{if(rN(n))return}catch{}gn(t,"unauthorized-domain")}function rN(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tN.test(n))return!1;if(eN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const sN=new aa(3e4,6e4);function Bg(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iN(t){return new Promise((e,n)=>{var r,s,i;function o(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),n(An(t,"network-request-failed"))},timeout:sN.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const a=Jk("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},rw(`${Xk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw uc=null,e})}let uc=null;function oN(t){return uc=uc||iN(t),uc}/**
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
 */const aN=new aa(5e3,15e3),cN="__/auth/iframe",lN="emulator/auth/iframe",uN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fN(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yf(e,lN):`https://${t.config.authDomain}/${cN}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=hN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oa(r).slice(1)}`}async function dN(t){const e=await oN(t),n=Rn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:fN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Rn().setTimeout(()=>{i(o)},aN.get());function l(){Rn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const pN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mN=500,gN=600,_N="_blank",yN="http://localhost";class jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vN(t,e,n,r=mN,s=gN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=St().toLowerCase();n&&(a=YE(u)?_N:n),GE(u)&&(e=e||yN,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,R])=>`${p}${g}=${R},`,"");if($k(u)&&a!=="_self")return EN(e||"",a),new jg(null);const d=window.open(e||"",a,h);fe(d,t,"popup-blocked");try{d.focus()}catch{}return new jg(d)}function EN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wN="__/auth/handler",bN="emulator/auth/handler",TN=encodeURIComponent("fac");async function $g(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof iw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ca){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${TN}=${encodeURIComponent(l)}`:"";return`${IN(t)}?${oa(a).slice(1)}${u}`}function IN({config:t}){return t.emulator?Yf(t,bN):`https://${t.authDomain}/${wN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="webStorageSupport";class AN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hw,this._completeRedirectFn=QO,this._overrideRedirectResult=WO}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $g(e,n,r,Sh(),s);return vN(e,o,td())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $g(e,n,r,Sh(),s);return PO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dN(e),r=new XO(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pu,{type:Pu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pu];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tw()||QE()||Jf()}}const RN=AN;var Hg="@firebase/auth",qg="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CN(t){ws(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(t)},u=new Gk(r,s,i,l);return rO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new jr("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(r=>new SN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Hg,qg,PN(t)),In(Hg,qg,"esm2017")}/**
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
 */const kN=5*60,ON=NE("authIdTokenMaxAge")||kN;let zg=null;const NN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ON)return;const s=n==null?void 0:n.token;zg!==s&&(zg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xN(t=Kf()){const e=vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nO(t,{popupRedirectResolver:RN,persistence:[VO,AO,hw]}),r=NE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=NN(i.toString());EO(n,o,()=>o(n.currentUser)),vO(n,a=>o(a))}}const s=CE("auth");return s&&sO(n,`http://${s}`),n}function DN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Qk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",DN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CN("Browser");function hn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=hn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:hn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=hn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=hn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(hn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(hn(i),hn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(hn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const LN={path:"/",watch:!0,decode:t=>Mo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Wa=window.cookieStore;function MN(t,e){var l;const n={...LN,...e},r=Wg(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=hn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?UN(o,s,n.watch&&n.watch!=="shallow"):Bt(o);{let u=null;try{!Wa&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||lR(a.value,r[t])||(FN(t,a.value,n),r[t]=hn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=R=>{var N;const k=R.refresh?(N=Wg(n))==null?void 0:N[t]:n.decode(R.value);p=!0,a.value=k,r[t]=hn(k),xn(()=>{p=!1})};let p=!1;const g=!!ea();if(g&&vc(()=>{p=!0,h(),u==null||u.close()}),Wa){const R=k=>{const N=k.changed.find(x=>x.name===t);N&&d({value:N.value})};Wa.addEventListener("change",R),g&&vc(()=>Wa.removeEventListener("change",R))}else u&&(u.onmessage=({data:R})=>d(R));n.watch?dn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function Wg(t={}){return rR(document.cookie,t)}function VN(t,e,n={}){return e==null?Mm(t,e,{...n,maxAge:-1}):Mm(t,e,n)}function FN(t,e,n={}){document.cookie=VN(t,e,n)}const Kg=2147483647;function UN(t,e,n){let r,s,i=0;const o=n?Bt(t):{value:t};return ea()&&vc(()=>{s==null||s(),clearTimeout(r)}),QT((a,l)=>{n&&(s=dn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<Kg?h:Kg;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function yw(t,e=yt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>yw(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const BN=(...t)=>t.find(e=>e!==void 0);function jN(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return Gg(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:Gg(o,t.trailingSlash)}}function r(s){const i=yt(),o=ks(),a=Le(()=>!!s.target&&s.target!=="_self"),l=Le(()=>{const k=s.to||s.href||"";return typeof k=="string"&&nr(k,{acceptRelative:!0})}),u=Oo("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,d=Le(()=>{if(s.external)return!0;const k=s.to||s.href||"";return typeof k=="object"?!1:k===""||l.value}),p=Le(()=>{const k=s.to||s.href||"";return d.value?k:n(k,i.resolve)}),g=d.value||h==null?void 0:h({...s,to:p}),R=Le(()=>{var k;if(!p.value||l.value)return p.value;if(d.value){const N=typeof p.value=="object"&&"path"in p.value?ph(p.value):p.value,x=typeof N=="object"?i.resolve(N).href:N;return n(x,i.resolve)}return typeof p.value=="object"?((k=i.resolve(p.value))==null?void 0:k.href)??null:n(fl(o.app.baseURL,p.value),i.resolve)});return{to:p,hasTarget:a,isAbsoluteUrl:l,isExternal:d,href:R,isActive:(g==null?void 0:g.isActive)??Le(()=>p.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Le(()=>p.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Le(()=>i.resolve(p.value)),async navigate(){await vR(R.value,{replace:s.replace,external:d.value||a.value})}}}return Dn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=yt(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:d,isAbsoluteUrl:p}=r(s),g=Bt(!1),R=Bt(null),k=N=>{var x;R.value=s.custom?(x=N==null?void 0:N.$el)==null?void 0:x.nextElementSibling:N==null?void 0:N.$el};if(s.prefetch!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!qN()){const x=Me();let S,E=null;il(()=>{const O=HN();_l(()=>{S=wh(()=>{var D;(D=R==null?void 0:R.value)!=null&&D.tagName&&(E=O.observe(R.value,async()=>{E==null||E(),E=null;const M=typeof a.value=="string"?a.value:h.value?ph(a.value):o.resolve(a.value).fullPath;await Promise.all([x.hooks.callHook("link:prefetch",M).catch(()=>{}),!h.value&&!d.value&&yw(a.value,o).catch(()=>{})]),g.value=!0}))})})}),na(()=>{S&&FP(S),E==null||E(),E=null})}return()=>{var S;if(!h.value&&!d.value){const E={ref:k,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(g.value&&(E.class=s.prefetchedClass||t.prefetchedClass),E.rel=s.rel||void 0),gt(Oo("RouterLink"),E,i.default)}const N=s.target||null,x=BN(s.noRel?"":s.rel,t.externalRelAttribute,p.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,get route(){if(!l.value)return;const E=new URL(l.value,window.location.href);return{path:E.pathname,fullPath:E.pathname,get query(){return Fv(E.search)},hash:E.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:x,target:N,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:gt("a",{ref:R,href:l.value||null,rel:x,target:N},(S=i.default)==null?void 0:S.call(i))}}})}const $N=jN(G1);function Gg(t,e){const n=e==="append"?Pc:hl;return nr(t)&&!t.startsWith("http")?t:n(t,!0)}function HN(){const t=Me();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}function qN(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}var Qg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,vw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function y(){}y.prototype=_.prototype,b.D=_.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(w,P,A){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return _.prototype[P].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)w[P]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(P=0;16>P;++P)w[P]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=b.g[0],y=b.g[1],P=b.g[2];var A=b.g[3],T=_+(A^y&(P^A))+w[0]+3614090360&4294967295;_=y+(T<<7&4294967295|T>>>25),T=A+(P^_&(y^P))+w[1]+3905402710&4294967295,A=_+(T<<12&4294967295|T>>>20),T=P+(y^A&(_^y))+w[2]+606105819&4294967295,P=A+(T<<17&4294967295|T>>>15),T=y+(_^P&(A^_))+w[3]+3250441966&4294967295,y=P+(T<<22&4294967295|T>>>10),T=_+(A^y&(P^A))+w[4]+4118548399&4294967295,_=y+(T<<7&4294967295|T>>>25),T=A+(P^_&(y^P))+w[5]+1200080426&4294967295,A=_+(T<<12&4294967295|T>>>20),T=P+(y^A&(_^y))+w[6]+2821735955&4294967295,P=A+(T<<17&4294967295|T>>>15),T=y+(_^P&(A^_))+w[7]+4249261313&4294967295,y=P+(T<<22&4294967295|T>>>10),T=_+(A^y&(P^A))+w[8]+1770035416&4294967295,_=y+(T<<7&4294967295|T>>>25),T=A+(P^_&(y^P))+w[9]+2336552879&4294967295,A=_+(T<<12&4294967295|T>>>20),T=P+(y^A&(_^y))+w[10]+4294925233&4294967295,P=A+(T<<17&4294967295|T>>>15),T=y+(_^P&(A^_))+w[11]+2304563134&4294967295,y=P+(T<<22&4294967295|T>>>10),T=_+(A^y&(P^A))+w[12]+1804603682&4294967295,_=y+(T<<7&4294967295|T>>>25),T=A+(P^_&(y^P))+w[13]+4254626195&4294967295,A=_+(T<<12&4294967295|T>>>20),T=P+(y^A&(_^y))+w[14]+2792965006&4294967295,P=A+(T<<17&4294967295|T>>>15),T=y+(_^P&(A^_))+w[15]+1236535329&4294967295,y=P+(T<<22&4294967295|T>>>10),T=_+(P^A&(y^P))+w[1]+4129170786&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^P&(_^y))+w[6]+3225465664&4294967295,A=_+(T<<9&4294967295|T>>>23),T=P+(_^y&(A^_))+w[11]+643717713&4294967295,P=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(P^A))+w[0]+3921069994&4294967295,y=P+(T<<20&4294967295|T>>>12),T=_+(P^A&(y^P))+w[5]+3593408605&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^P&(_^y))+w[10]+38016083&4294967295,A=_+(T<<9&4294967295|T>>>23),T=P+(_^y&(A^_))+w[15]+3634488961&4294967295,P=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(P^A))+w[4]+3889429448&4294967295,y=P+(T<<20&4294967295|T>>>12),T=_+(P^A&(y^P))+w[9]+568446438&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^P&(_^y))+w[14]+3275163606&4294967295,A=_+(T<<9&4294967295|T>>>23),T=P+(_^y&(A^_))+w[3]+4107603335&4294967295,P=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(P^A))+w[8]+1163531501&4294967295,y=P+(T<<20&4294967295|T>>>12),T=_+(P^A&(y^P))+w[13]+2850285829&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^P&(_^y))+w[2]+4243563512&4294967295,A=_+(T<<9&4294967295|T>>>23),T=P+(_^y&(A^_))+w[7]+1735328473&4294967295,P=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(P^A))+w[12]+2368359562&4294967295,y=P+(T<<20&4294967295|T>>>12),T=_+(y^P^A)+w[5]+4294588738&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^P)+w[8]+2272392833&4294967295,A=_+(T<<11&4294967295|T>>>21),T=P+(A^_^y)+w[11]+1839030562&4294967295,P=A+(T<<16&4294967295|T>>>16),T=y+(P^A^_)+w[14]+4259657740&4294967295,y=P+(T<<23&4294967295|T>>>9),T=_+(y^P^A)+w[1]+2763975236&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^P)+w[4]+1272893353&4294967295,A=_+(T<<11&4294967295|T>>>21),T=P+(A^_^y)+w[7]+4139469664&4294967295,P=A+(T<<16&4294967295|T>>>16),T=y+(P^A^_)+w[10]+3200236656&4294967295,y=P+(T<<23&4294967295|T>>>9),T=_+(y^P^A)+w[13]+681279174&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^P)+w[0]+3936430074&4294967295,A=_+(T<<11&4294967295|T>>>21),T=P+(A^_^y)+w[3]+3572445317&4294967295,P=A+(T<<16&4294967295|T>>>16),T=y+(P^A^_)+w[6]+76029189&4294967295,y=P+(T<<23&4294967295|T>>>9),T=_+(y^P^A)+w[9]+3654602809&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^P)+w[12]+3873151461&4294967295,A=_+(T<<11&4294967295|T>>>21),T=P+(A^_^y)+w[15]+530742520&4294967295,P=A+(T<<16&4294967295|T>>>16),T=y+(P^A^_)+w[2]+3299628645&4294967295,y=P+(T<<23&4294967295|T>>>9),T=_+(P^(y|~A))+w[0]+4096336452&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~P))+w[7]+1126891415&4294967295,A=_+(T<<10&4294967295|T>>>22),T=P+(_^(A|~y))+w[14]+2878612391&4294967295,P=A+(T<<15&4294967295|T>>>17),T=y+(A^(P|~_))+w[5]+4237533241&4294967295,y=P+(T<<21&4294967295|T>>>11),T=_+(P^(y|~A))+w[12]+1700485571&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~P))+w[3]+2399980690&4294967295,A=_+(T<<10&4294967295|T>>>22),T=P+(_^(A|~y))+w[10]+4293915773&4294967295,P=A+(T<<15&4294967295|T>>>17),T=y+(A^(P|~_))+w[1]+2240044497&4294967295,y=P+(T<<21&4294967295|T>>>11),T=_+(P^(y|~A))+w[8]+1873313359&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~P))+w[15]+4264355552&4294967295,A=_+(T<<10&4294967295|T>>>22),T=P+(_^(A|~y))+w[6]+2734768916&4294967295,P=A+(T<<15&4294967295|T>>>17),T=y+(A^(P|~_))+w[13]+1309151649&4294967295,y=P+(T<<21&4294967295|T>>>11),T=_+(P^(y|~A))+w[4]+4149444226&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~P))+w[11]+3174756917&4294967295,A=_+(T<<10&4294967295|T>>>22),T=P+(_^(A|~y))+w[2]+718787259&4294967295,P=A+(T<<15&4294967295|T>>>17),T=y+(A^(P|~_))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var y=_-this.blockSize,w=this.B,P=this.h,A=0;A<_;){if(P==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<_;)if(w[P++]=b.charCodeAt(A++),P==this.blockSize){s(this,w),P=0;break}}else for(;A<_;)if(w[P++]=b[A++],P==this.blockSize){s(this,w),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var y=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.u(b),b=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)b[y++]=this.g[_]>>>w&255;return b};function i(b,_){var y=a;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=_(b)}function o(b,_){this.h=_;for(var y=[],w=!0,P=b.length-1;0<=P;P--){var A=b[P]|0;w&&A==_||(y[P]=A,w=!1)}this.g=y}var a={};function l(b){return-128<=b&&128>b?i(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return N(u(-b));for(var _=[],y=1,w=0;b>=y;w++)_[w]=b/y|0,y*=4294967296;return new o(_,0)}function h(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return N(h(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(_,8)),w=d,P=0;P<b.length;P+=8){var A=Math.min(8,b.length-P),T=parseInt(b.substring(P,P+A),_);8>A?(A=u(Math.pow(_,A)),w=w.j(A).add(u(T))):(w=w.j(y),w=w.add(u(T)))}return w}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var b=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);b+=(0<=w?w:4294967296+w)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(k(this))return"-"+N(this).toString(b);for(var _=u(Math.pow(b,6)),y=this,w="";;){var P=O(y,_).g;y=x(y,P.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=P,R(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=x(this,b),k(b)?-1:R(b)?0:1};function N(b){for(var _=b.g.length,y=[],w=0;w<_;w++)y[w]=~b.g[w];return new o(y,~b.h).add(p)}t.abs=function(){return k(this)?N(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0,P=0;P<=_;P++){var A=w+(this.i(P)&65535)+(b.i(P)&65535),T=(A>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);w=T>>>16,A&=65535,T&=65535,y[P]=T<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function x(b,_){return b.add(N(_))}t.j=function(b){if(R(this)||R(b))return d;if(k(this))return k(b)?N(this).j(N(b)):N(N(this).j(b));if(k(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var _=this.g.length+b.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var P=0;P<b.g.length;P++){var A=this.i(w)>>>16,T=this.i(w)&65535,me=b.i(P)>>>16,ye=b.i(P)&65535;y[2*w+2*P]+=T*ye,S(y,2*w+2*P),y[2*w+2*P+1]+=A*ye,S(y,2*w+2*P+1),y[2*w+2*P+1]+=T*me,S(y,2*w+2*P+1),y[2*w+2*P+2]+=A*me,S(y,2*w+2*P+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new o(y,0)};function S(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function E(b,_){this.g=b,this.h=_}function O(b,_){if(R(_))throw Error("division by zero");if(R(b))return new E(d,d);if(k(b))return _=O(N(b),_),new E(N(_.g),N(_.h));if(k(_))return _=O(b,N(_)),new E(N(_.g),_.h);if(30<b.g.length){if(k(b)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var y=p,w=_;0>=w.l(b);)y=D(y),w=D(w);var P=M(y,1),A=M(w,1);for(w=M(w,2),y=M(y,2);!R(w);){var T=A.add(w);0>=T.l(b)&&(P=P.add(y),A=T),w=M(w,1),y=M(y,1)}return _=x(b,P.j(_)),new E(P,_)}for(P=d;0<=b.l(_);){for(y=Math.max(1,Math.floor(b.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=u(y),T=A.j(_);k(T)||0<T.l(b);)y-=w,A=u(y),T=A.j(_);R(A)&&(A=p),P=P.add(A),b=x(b,T)}return new E(P,b)}t.A=function(b){return O(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&b.i(w);return new o(y,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|b.i(w);return new o(y,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^b.i(w);return new o(y,this.h^b.h)};function D(b){for(var _=b.g.length+1,y=[],w=0;w<_;w++)y[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(y,b.h)}function M(b,_){var y=_>>5;_%=32;for(var w=b.g.length-y,P=[],A=0;A<w;A++)P[A]=0<_?b.i(A+y)>>>_|b.i(A+y+1)<<32-_:b.i(A+y);return new o(P,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,_s=o}).apply(typeof Qg<"u"?Qg:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ew,ww,no,bw,hc,kh,Tw,Iw,Aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var L=c[v];if(!(L in m))break e;m=m[L]}c=c[c.length-1],v=m[c],f=f(v),f!=v&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,v=!1,L={next:function(){if(!v&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function R(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(v,L,F){for(var K=Array(arguments.length-2),De=2;De<arguments.length;De++)K[De-2]=arguments[De];return f.prototype[L].apply(v,K)}}function k(c){const f=c.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=c[v];return m}return[]}function N(c,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const L=c.length||0,F=v.length||0;c.length=L+F;for(let K=0;K<F;K++)c[L+K]=v[K]}else c.push(v)}}class x{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(c){return/^[\s\xa0]*$/.test(c)}function E(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function O(c){return O[" "](c),c}O[" "]=function(){};var D=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(c,f,m){for(const v in c)f.call(m,c[v],v,c)}function b(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function _(c){const f={};for(const m in c)f[m]=c[m];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,f){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)c[m]=v[m];for(let F=0;F<y.length;F++)m=y[F],Object.prototype.hasOwnProperty.call(v,m)&&(c[m]=v[m])}}function P(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function A(c){a.setTimeout(()=>{throw c},0)}function T(){var c=qe;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class me{constructor(){this.h=this.g=null}add(f,m){const v=ye.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new x(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ie=!1,qe=new me,cn=()=>{const c=a.Promise.resolve(void 0);te=()=>{c.then(Jt)}};var Jt=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){A(m)}var f=ye;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ie=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var sr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function _n(c,f){if(We.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{O(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:xt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&_n.aa.h.call(this)}}R(_n,We);var xt={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(c,f,m,v,L){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=L,this.key=++Z,this.da=this.fa=!1}function ee(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ee(c){this.src=c,this.g={},this.h=0}Ee.prototype.add=function(c,f,m,v,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var K=I(c,f,v,L);return-1<K?(f=c[K],m||(f.fa=!1)):(f=new Y(f,this.src,F,!!v,L),f.fa=m,c.push(f)),f};function Ne(c,f){var m=f.type;if(m in c.g){var v=c.g[m],L=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(ee(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function I(c,f,m,v){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==v)return L}return-1}var C="closure_lm_"+(1e6*Math.random()|0),V={};function j(c,f,m,v,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)j(c,f[F],m,v,L);return null}return m=oe(m),c&&c[B]?c.K(f,m,u(v)?!!v.capture:!!v,L):U(c,f,m,!1,v,L)}function U(c,f,m,v,L,F){if(!f)throw Error("Invalid event type");var K=u(L)?!!L.capture:!!L,De=X(c);if(De||(c[C]=De=new Ee(c)),m=De.add(f,m,v,K,F),m.proxy)return m;if(v=z(),m.proxy=v,v.src=c,v.listener=m,c.addEventListener)sr||(L=K),L===void 0&&(L=!1),c.addEventListener(f.toString(),v,L);else if(c.attachEvent)c.attachEvent(G(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function z(){function c(m){return f.call(c.src,c.listener,m)}const f=q;return c}function Q(c,f,m,v,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Q(c,f[F],m,v,L);else v=u(v)?!!v.capture:!!v,m=oe(m),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=I(F,m,v,L),-1<m&&(ee(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=X(c))&&(f=c.g[f.toString()],c=-1,f&&(c=I(f,m,v,L)),(m=-1<c?f[c]:null)&&W(m))}function W(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])Ne(f.i,c);else{var m=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(m,v,c.capture):f.detachEvent?f.detachEvent(G(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=X(f))?(Ne(m,c),m.h==0&&(m.src=null,f[C]=null)):ee(c)}}}function G(c){return c in V?V[c]:V[c]="on"+c}function q(c,f){if(c.da)c=!0;else{f=new _n(f,this);var m=c.listener,v=c.ha||c.src;c.fa&&W(c),c=m.call(v,f)}return c}function X(c){return c=c[C],c instanceof Ee?c:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[ae]||(c[ae]=function(f){return c.handleEvent(f)}),c[ae])}function se(){ze.call(this),this.i=new Ee(this),this.M=this,this.F=null}R(se,ze),se.prototype[B]=!0,se.prototype.removeEventListener=function(c,f,m,v){Q(this,c,f,m,v)};function ue(c,f){var m,v=c.F;if(v)for(m=[];v;v=v.F)m.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new We(f,c);else if(f instanceof We)f.target=f.target||c;else{var L=f;f=new We(v,c),w(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var K=f.g=m[F];L=ke(K,v,!0,f)&&L}if(K=f.g=c,L=ke(K,v,!0,f)&&L,L=ke(K,v,!1,f)&&L,m)for(F=0;F<m.length;F++)K=f.g=m[F],L=ke(K,v,!1,f)&&L}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],v=0;v<m.length;v++)ee(m[v]);delete c.g[f],c.h--}}this.F=null},se.prototype.K=function(c,f,m,v){return this.i.add(String(c),f,!1,m,v)},se.prototype.L=function(c,f,m,v){return this.i.add(String(c),f,!0,m,v)};function ke(c,f,m,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var K=f[F];if(K&&!K.da&&K.capture==m){var De=K.listener,ft=K.ha||K.src;K.fa&&Ne(c.i,K),L=De.call(ft,v)!==!1&&L}}return L&&!v.defaultPrevented}function Te(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Ze(c){c.g=Te(()=>{c.g=null,c.i&&(c.i=!1,Ze(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class jt extends ze{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(c){ze.call(this),this.h=c,this.g={}}R(Zt,ze);var xi=[];function ir(c){M(c.g,function(f,m){this.g.hasOwnProperty(m)&&W(f)},c),c.g={}}Zt.prototype.N=function(){Zt.aa.N.call(this),ir(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ls=a.JSON.stringify,Pt=a.JSON.parse,en=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Ms(){}Ms.prototype.h=null;function Yd(c){return c.h||(c.h=c.i())}function Xd(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wl(){We.call(this,"d")}R(Wl,We);function Kl(){We.call(this,"c")}R(Kl,We);var Zr={},Jd=null;function ya(){return Jd=Jd||new se}Zr.La="serverreachability";function Zd(c){We.call(this,Zr.La,c)}R(Zd,We);function Li(c){const f=ya();ue(f,new Zd(f))}Zr.STAT_EVENT="statevent";function ep(c,f){We.call(this,Zr.STAT_EVENT,c),this.stat=f}R(ep,We);function Ct(c){const f=ya();ue(f,new ep(f,c))}Zr.Ma="timingevent";function tp(c,f){We.call(this,Zr.Ma,c),this.size=f}R(tp,We);function Mi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function Bb(c,f,m,v,L,F){c.info(function(){if(c.g)if(F)for(var K="",De=F.split("&"),ft=0;ft<De.length;ft++){var Re=De[ft].split("=");if(1<Re.length){var Et=Re[0];Re=Re[1];var wt=Et.split("_");K=2<=wt.length&&wt[1]=="type"?K+(Et+"="+Re+"&"):K+(Et+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+f+`
`+m+`
`+K})}function jb(c,f,m,v,L,F,K){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+K})}function Vs(c,f,m,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+Hb(c,m)+(v?" "+v:"")})}function $b(c,f){c.info(function(){return"TIMEOUT: "+f})}Vi.prototype.info=function(){};function Hb(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var v=m[c];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<L.length;K++)L[K]=""}}}}return Ls(m)}catch{return f}}var va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},np={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gl;function Ea(){}R(Ea,Ms),Ea.prototype.g=function(){return new XMLHttpRequest},Ea.prototype.i=function(){return{}},Gl=new Ea;function or(c,f,m,v){this.j=c,this.i=f,this.l=m,this.R=v||1,this.U=new Zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rp}function rp(){this.i=null,this.g="",this.h=!1}var sp={},Ql={};function Yl(c,f,m){c.L=1,c.v=Ia(Mn(f)),c.m=m,c.P=!0,ip(c,null)}function ip(c,f){c.F=Date.now(),wa(c),c.A=Mn(c.v);var m=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),vp(m.i,"t",v),c.C=0,m=c.j.J,c.h=new rp,c.g=Vp(c.j,m?f:null,!c.m),0<c.O&&(c.M=new jt(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,v=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(xi[0]=L.toString()),L=xi);for(var F=0;F<L.length;F++){var K=j(m,L[F],v||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=c.H?_(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Li(),Bb(c.i,c.u,c.A,c.l,c.R,c.m)}or.prototype.ca=function(c){c=c.target;const f=this.M;f&&Vn(c)==3?f.j():this.Y(c)},or.prototype.Y=function(c){try{if(c==this.g)e:{const wt=Vn(this.g);var f=this.g.Ba();const Bs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Rp(this.g)))){this.J||wt!=4||f==7||(f==8||0>=Bs?Li(3):Li(2)),Xl(this);var m=this.g.Z();this.X=m;t:if(op(this)){var v=Rp(this.g);c="";var L=v.length,F=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),Fi(this);var K="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(v[f],{stream:!(F&&f==L-1)});v.length=0,this.h.g+=c,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=m==200,jb(this.i,this.u,this.A,this.l,this.R,wt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var De,ft=this.g;if((De=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(De)){var Re=De;break t}}Re=null}if(m=Re)Vs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jl(this,m);else{this.o=!1,this.s=3,Ct(12),es(this),Fi(this);break e}}if(this.P){m=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=qb(this,K),ln==Ql){wt==4&&(this.s=4,Ct(14),m=!1),Vs(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==sp){this.s=4,Ct(15),Vs(this.i,this.l,K,"[Invalid Chunk]"),m=!1;break}else Vs(this.i,this.l,ln,null),Jl(this,ln);if(op(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||K.length!=0||this.h.h||(this.s=1,Ct(16),m=!1),this.o=this.o&&m,!m)Vs(this.i,this.l,K,"[Invalid Chunked Response]"),es(this),Fi(this);else if(0<K.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),su(Et),Et.M=!0,Ct(11))}}else Vs(this.i,this.l,K,null),Jl(this,K);wt==4&&es(this),this.o&&!this.J&&(wt==4?xp(this.j,this):(this.o=!1,wa(this)))}else aT(this.g),m==400&&0<K.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),es(this),Fi(this)}}}catch{}finally{}};function op(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function qb(c,f){var m=c.C,v=f.indexOf(`
`,m);return v==-1?Ql:(m=Number(f.substring(m,v)),isNaN(m)?sp:(v+=1,v+m>f.length?Ql:(f=f.slice(v,v+m),c.C=v+m,f)))}or.prototype.cancel=function(){this.J=!0,es(this)};function wa(c){c.S=Date.now()+c.I,ap(c,c.I)}function ap(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Mi(p(c.ba,c),f)}function Xl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}or.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?($b(this.i,this.A),this.L!=2&&(Li(),Ct(17)),es(this),this.s=2,Fi(this)):ap(this,this.S-c)};function Fi(c){c.j.G==0||c.J||xp(c.j,c)}function es(c){Xl(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,ir(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function Jl(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||Zl(m.h,c))){if(!c.K&&Zl(m.h,c)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Ca(m),Sa(m);else break e;ru(m),Ct(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Mi(p(m.Za,m),6e3));if(1>=up(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ns(m,11)}else if((c.K||m.g==c)&&Ca(m),!S(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Re=L[f];if(m.T=Re[0],Re=Re[1],m.G==2)if(Re[0]=="c"){m.K=Re[1],m.ia=Re[2];const Et=Re[3];Et!=null&&(m.la=Et,m.j.info("VER="+m.la));const wt=Re[4];wt!=null&&(m.Aa=wt,m.j.info("SVER="+m.Aa));const Bs=Re[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(v=1.5*Bs,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const ln=c.g;if(ln){const Oa=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var F=v.h;F.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(eu(F,F.h),F.h=null))}if(v.D){const iu=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;iu&&(v.ya=iu,Fe(v.I,v.D,iu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var K=c;if(v.qa=Mp(v,v.J?v.ia:null,v.W),K.K){hp(v.h,K);var De=K,ft=v.L;ft&&(De.I=ft),De.B&&(Xl(De),wa(De)),v.g=K}else Op(v);0<m.i.length&&Pa(m)}else Re[0]!="stop"&&Re[0]!="close"||ns(m,7);else m.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?ns(m,7):nu(m):Re[0]!="noop"&&m.l&&m.l.ta(Re),m.v=0)}}Li(4)}catch{}}var zb=class{constructor(c,f){this.g=c,this.map=f}};function cp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function up(c){return c.h?1:c.g?c.g.size:0}function Zl(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function eu(c,f){c.g?c.g.add(f):c.h=f}function hp(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}cp.prototype.cancel=function(){if(this.i=fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function fp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return k(c.i)}function Wb(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,v=0;v<m;v++)f.push(c[v]);return f}f=[],m=0;for(v in c)f[m++]=c[v];return f}function Kb(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const v in c)f[m++]=v;return f}}}function dp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=Kb(c),v=Wb(c),L=v.length,F=0;F<L;F++)f.call(void 0,v[F],m&&m[F],c)}var pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gb(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var v=c[m].indexOf("="),L=null;if(0<=v){var F=c[m].substring(0,v);L=c[m].substring(v+1)}else F=c[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ts(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ts){this.h=c.h,ba(this,c.j),this.o=c.o,this.g=c.g,Ta(this,c.s),this.l=c.l;var f=c.i,m=new ji;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),mp(this,m),this.m=c.m}else c&&(f=String(c).match(pp))?(this.h=!1,ba(this,f[1]||"",!0),this.o=Ui(f[2]||""),this.g=Ui(f[3]||"",!0),Ta(this,f[4]),this.l=Ui(f[5]||"",!0),mp(this,f[6]||"",!0),this.m=Ui(f[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}ts.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Bi(f,gp,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Bi(f,gp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Bi(m,m.charAt(0)=="/"?Xb:Yb,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Bi(m,Zb)),c.join("")};function Mn(c){return new ts(c)}function ba(c,f,m){c.j=m?Ui(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Ta(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function mp(c,f,m){f instanceof ji?(c.i=f,eT(c.i,c.h)):(m||(f=Bi(f,Jb)),c.i=new ji(f,c.h))}function Fe(c,f,m){c.i.set(f,m)}function Ia(c){return Fe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ui(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Bi(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,Qb),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Qb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var gp=/[#\/\?@]/g,Yb=/[#\?:]/g,Xb=/[#\?]/g,Jb=/[#\?@]/g,Zb=/#/g;function ji(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function ar(c){c.g||(c.g=new Map,c.h=0,c.i&&Gb(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=ji.prototype,t.add=function(c,f){ar(this),this.i=null,c=Fs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function _p(c,f){ar(c),f=Fs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function yp(c,f){return ar(c),f=Fs(c,f),c.g.has(f)}t.forEach=function(c,f){ar(this),this.g.forEach(function(m,v){m.forEach(function(L){c.call(f,L,v,this)},this)},this)},t.na=function(){ar(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const L=c[v];for(let F=0;F<L.length;F++)m.push(f[v])}return m},t.V=function(c){ar(this);let f=[];if(typeof c=="string")yp(this,c)&&(f=f.concat(this.g.get(Fs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return ar(this),this.i=null,c=Fs(this,c),yp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function vp(c,f,m){_p(c,f),0<m.length&&(c.i=null,c.g.set(Fs(c,f),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const F=encodeURIComponent(String(v)),K=this.V(v);for(v=0;v<K.length;v++){var L=F;K[v]!==""&&(L+="="+encodeURIComponent(String(K[v]))),c.push(L)}}return this.i=c.join("&")};function Fs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function eT(c,f){f&&!c.j&&(ar(c),c.i=null,c.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(_p(this,v),vp(this,L,m))},c)),c.j=f}function tT(c,f){const m=new Vi;if(a.Image){const v=new Image;v.onload=g(cr,m,"TestLoadImage: loaded",!0,f,v),v.onerror=g(cr,m,"TestLoadImage: error",!1,f,v),v.onabort=g(cr,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=g(cr,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function nT(c,f){const m=new Vi,v=new AbortController,L=setTimeout(()=>{v.abort(),cr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?cr(m,"TestPingServer: ok",!0,f):cr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),cr(m,"TestPingServer: error",!1,f)})}function cr(c,f,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function rT(){this.g=new en}function sT(c,f,m){const v=m||"";try{dp(c,function(L,F){let K=L;u(L)&&(K=Ls(L)),f.push(v+F+"="+encodeURIComponent(K))})}catch(L){throw f.push(v+"type="+encodeURIComponent("_badmap")),L}}function $i(c){this.l=c.Ub||null,this.j=c.eb||!1}R($i,Ms),$i.prototype.g=function(){return new Aa(this.l,this.j)},$i.prototype.i=function(c){return function(){return c}}({});function Aa(c,f){se.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Aa,se),t=Aa.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,qi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ep(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ep(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Hi(this):qi(this),this.readyState==3&&Ep(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Hi(this))},t.Qa=function(c){this.g&&(this.response=c,Hi(this))},t.ga=function(){this.g&&Hi(this)};function Hi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,qi(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function qi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wp(c){let f="";return M(c,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function tu(c,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=wp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Fe(c,f,m))}function Qe(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Qe,se);var iT=/^https?$/i,oT=["POST","PUT"];t=Qe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gl.g(),this.v=this.o?Yd(this.o):Yd(Gl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){bp(this,F);return}if(c=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(oT,f,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of m)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ap(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){bp(this,F)}};function bp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Tp(c),Ra(c)}function Tp(c){c.A||(c.A=!0,ue(c,"complete"),ue(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ue(this,"complete"),ue(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ip(this):this.bb())},t.bb=function(){Ip(this)};function Ip(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Vn(c)!=4||c.Z()!=2)){if(c.u&&Vn(c)==4)Te(c.Ea,0,c);else if(ue(c,"readystatechange"),Vn(c)==4){c.h=!1;try{const K=c.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=K===0){var L=String(c.D).match(pp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!iT.test(L?L.toLowerCase():"")}m=v}if(m)ue(c,"complete"),ue(c,"success");else{c.m=6;try{var F=2<Vn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Tp(c)}}finally{Ra(c)}}}}function Ra(c,f){if(c.g){Ap(c);const m=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ue(c,"ready");try{m.onreadystatechange=v}catch{}}}function Ap(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Vn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Pt(f)}};function Rp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function aT(c){const f={};c=(c.g&&2<=Vn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(S(c[v]))continue;var m=P(c[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}b(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Sp(c){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zi("baseRetryDelayMs",5e3,c),this.cb=zi("retryDelaySeedMs",1e4,c),this.Wa=zi("forwardChannelMaxRetries",2,c),this.wa=zi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new cp(c&&c.concurrentRequestLimit),this.Da=new rT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sp.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,v){Ct(0),this.W=c,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Mp(this,null,this.W),Pa(this)};function nu(c){if(Pp(c),c.G==3){var f=c.U++,m=Mn(c.I);if(Fe(m,"SID",c.K),Fe(m,"RID",f),Fe(m,"TYPE","terminate"),Wi(c,m),f=new or(c,c.j,f),f.L=2,f.v=Ia(Mn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Vp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),wa(f)}Lp(c)}function Sa(c){c.g&&(su(c),c.g.cancel(),c.g=null)}function Pp(c){Sa(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Pa(c){if(!lp(c.h)&&!c.s){c.s=!0;var f=c.Ga;te||cn(),ie||(te(),ie=!0),qe.add(f,c),c.B=0}}function cT(c,f){return up(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Mi(p(c.Ga,c,f),Dp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new or(this,this.j,c);let F=this.o;if(this.S&&(F?(F=_(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=kp(this,L,f),m=Mn(this.I),Fe(m,"RID",c),Fe(m,"CVER",22),this.D&&Fe(m,"X-HTTP-Session-Id",this.D),Wi(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(wp(F)))+"&"+f:this.m&&tu(m,this.m,F)),eu(this.h,L),this.Ua&&Fe(m,"TYPE","init"),this.P?(Fe(m,"$req",f),Fe(m,"SID","null"),L.T=!0,Yl(L,m,null)):Yl(L,m,f),this.G=2}}else this.G==3&&(c?Cp(this,c):this.i.length==0||lp(this.h)||Cp(this))};function Cp(c,f){var m;f?m=f.l:m=c.U++;const v=Mn(c.I);Fe(v,"SID",c.K),Fe(v,"RID",m),Fe(v,"AID",c.T),Wi(c,v),c.m&&c.o&&tu(v,c.m,c.o),m=new or(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=kp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),eu(c.h,m),Yl(m,v,f)}function Wi(c,f){c.H&&M(c.H,function(m,v){Fe(f,v,m)}),c.l&&dp({},function(m,v){Fe(f,v,m)})}function kp(c,f,m){m=Math.min(c.i.length,m);var v=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const K=["count="+m];F==-1?0<m?(F=L[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let De=!0;for(let ft=0;ft<m;ft++){let Re=L[ft].g;const Et=L[ft].map;if(Re-=F,0>Re)F=Math.max(0,L[ft].g-100),De=!1;else try{sT(Et,K,"req"+Re+"_")}catch{v&&v(Et)}}if(De){v=K.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,v}function Op(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;te||cn(),ie||(te(),ie=!0),qe.add(f,c),c.v=0}}function ru(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Mi(p(c.Fa,c),Dp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Np(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Mi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),Sa(this),Np(this))};function su(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Np(c){c.g=new or(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Mn(c.qa);Fe(f,"RID","rpc"),Fe(f,"SID",c.K),Fe(f,"AID",c.T),Fe(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Fe(f,"TO",c.ja),Fe(f,"TYPE","xmlhttp"),Wi(c,f),c.m&&c.o&&tu(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Ia(Mn(f)),m.m=null,m.P=!0,ip(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),ru(this),Ct(19))};function Ca(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function xp(c,f){var m=null;if(c.g==f){Ca(c),su(c),c.g=null;var v=2}else if(Zl(c.h,f))m=f.D,hp(c.h,f),v=1;else return;if(c.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;v=ya(),ue(v,new tp(v,m)),Pa(c)}else Op(c);else if(L=f.s,L==3||L==0&&0<f.X||!(v==1&&cT(c,f)||v==2&&ru(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),L){case 1:ns(c,5);break;case 4:ns(c,10);break;case 3:ns(c,6);break;default:ns(c,2)}}}function Dp(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function ns(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),v=c.Xa;const L=!v;v=new ts(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ba(v,"https"),Ia(v),L?tT(v.toString(),m):nT(v.toString(),m)}else Ct(2);c.G=0,c.l&&c.l.sa(f),Lp(c),Pp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Lp(c){if(c.G=0,c.ka=[],c.l){const f=fp(c.h);(f.length!=0||c.i.length!=0)&&(N(c.ka,f),N(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function Mp(c,f,m){var v=m instanceof ts?Mn(m):new ts(m);if(v.g!="")f&&(v.g=f+"."+v.g),Ta(v,v.s);else{var L=a.location;v=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new ts(null);v&&ba(F,v),f&&(F.g=f),L&&Ta(F,L),m&&(F.l=m),v=F}return m=c.D,f=c.ya,m&&f&&Fe(v,m,f),Fe(v,"VER",c.la),Wi(c,v),v}function Vp(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Qe(new $i({eb:m})):new Qe(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fp(){}t=Fp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ka(){}ka.prototype.g=function(c,f){return new $t(c,f)};function $t(c,f){se.call(this),this.g=new Sp(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!S(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!S(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Us(this)}R($t,se),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){nu(this.g)},$t.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Ls(c),c=m);f.i.push(new zb(f.Ya++,c)),f.G==3&&Pa(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,nu(this.g),delete this.g,$t.aa.N.call(this)};function Up(c){Wl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}R(Up,Wl);function Bp(){Kl.call(this),this.status=1}R(Bp,Kl);function Us(c){this.g=c}R(Us,Fp),Us.prototype.ua=function(){ue(this.g,"a")},Us.prototype.ta=function(c){ue(this.g,new Up(c))},Us.prototype.sa=function(c){ue(this.g,new Bp)},Us.prototype.ra=function(){ue(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Aw=function(){return new ka},Iw=function(){return ya()},Tw=Zr,kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},va.NO_ERROR=0,va.TIMEOUT=8,va.HTTP_ERROR=6,hc=va,np.COMPLETE="complete",bw=np,Xd.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",se.prototype.listen=se.prototype.K,no=Xd,ww=$i,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Ew=Qe}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});const Yg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ci="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new zf("@firebase/firestore");function Yi(){return Ts.logLevel}function ne(t,...e){if(Ts.logLevel<=we.DEBUG){const n=e.map(rd);Ts.debug(`Firestore (${Ci}): ${t}`,...n)}}function Xn(t,...e){if(Ts.logLevel<=we.ERROR){const n=e.map(rd);Ts.error(`Firestore (${Ci}): ${t}`,...n)}}function mi(t,...e){if(Ts.logLevel<=we.WARN){const n=e.map(rd);Ts.warn(`Firestore (${Ci}): ${t}`,...n)}}function rd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */class Rw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class WN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KN{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new Rw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Tt(e)}}class GN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new GN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new YN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=JN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ho{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ho?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Ho{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const ZN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Ho{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return ZN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he($e.fromString(e))}static fromName(e){return new he($e.fromString(e).popFirst(5))}static empty(){return new he($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new $e(e.slice()))}}function ex(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new $r(s,he.empty(),e)}function tx(t){return new $r(t.readTime,t.key,-1)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(ge.min(),he.empty(),-1)}static max(){return new $r(ge.max(),he.empty(),-1)}}function nx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==rx)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ix(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ha(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sd.oe=-1;function Il(t){return t==null}function jc(t){return t===0&&1/t==-1/0}function ox(t){return typeof t=="number"&&Number.isInteger(t)&&!jc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _t{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jg(this.data.getIterator())}getIteratorFrom(e){return new Jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class Jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cw("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const ax=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=ax.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function od(t){const e=t.mapValue.fields.__previous_value__;return id(e)?od(e):e}function qo(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?id(t)?4:ux(t)?9007199254740991:lx(t)?10:11:pe()}function kn(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hr(s.timestampValue),a=Hr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Is(s.bytesValue).isEqual(Is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return tt(s.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return tt(s.integerValue)===tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=tt(s.doubleValue),a=tt(i.doubleValue);return o===a?jc(o)===jc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Xg(o)!==Xg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!kn(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function Wo(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=As(t),r=As(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=tt(i.integerValue||i.doubleValue),l=tt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Zg(t.timestampValue,e.timestampValue);case 4:return Zg(qo(t),qo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Is(i),l=Is(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Se(a[u],l[u]);if(h!==0)return h}return Se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Se(tt(i.latitude),tt(o.latitude));return a!==0?a:Se(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return e_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,R=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=Se(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:e_(g,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Qa.mapValue&&o===Qa.mapValue)return 0;if(i===Qa.mapValue)return 1;if(o===Qa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Se(l[d],h[d]);if(p!==0)return p;const g=_i(a[l[d]],u[h[d]]);if(g!==0)return g}return Se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function Zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Hr(t),r=Hr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function e_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_i(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function yi(t){return Oh(t)}function Oh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Oh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Oh(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Nh(t){return!!t&&"integerValue"in t}function ad(t){return!!t&&"arrayValue"in t}function t_(t){return!!t&&"nullValue"in t}function n_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fc(t){return!!t&&"mapValue"in t}function lx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ux(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=yo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(yo(this.value))}}function kw(t){const e=[];return xs(t.fields,(n,r)=>{const s=new mt([n]);if(fc(r)){const i=kw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $c{constructor(e,n){this.position=e,this.inclusive=n}}function r_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=_i(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function s_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hc{constructor(e,n="asc"){this.field=e,this.dir=n}}function hx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ow{}class st extends Ow{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dx(e,n,r):n==="array-contains"?new gx(e,r):n==="in"?new _x(e,r):n==="not-in"?new yx(e,r):n==="array-contains-any"?new vx(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new px(e,r):new mx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_i(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(_i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Ow{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return Nw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Nw(t){return t.op==="and"}function xw(t){return fx(t)&&Nw(t)}function fx(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function xh(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(xw(t))return t.filters.map(e=>xh(e)).join(",");{const e=t.filters.map(n=>xh(n)).join(",");return`${t.op}(${e})`}}function Dw(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)}(t,e):t instanceof On?function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Dw(o,s.filters[a]),!0):!1}(t,e):void pe()}function Lw(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(Lw).join(" ,")+"}"}(t):"Filter"}class dx extends st{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class px extends st{constructor(e,n){super(e,"in",n),this.keys=Mw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mx extends st{constructor(e,n){super(e,"not-in",n),this.keys=Mw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Mw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class gx extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ad(n)&&Wo(n.arrayValue,this.value)}}class _x extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class yx extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wo(this.value.arrayValue,n)}}class vx extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ad(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function i_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ex(t,e,n,r,s,i,o)}function cd(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.ue=n}return e.ue}function ld(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s_(t.startAt,e.startAt)&&s_(t.endAt,e.endAt)}function Dh(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wx(t,e,n,r,s,i,o,a){return new Al(t,e,n,r,s,i,o,a)}function Vw(t){return new Al(t)}function o_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bx(t){return t.collectionGroup!==null}function vo(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _t(mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Hc(i,r))}),n.has(mt.keyField().canonicalString())||e.ce.push(new Hc(mt.keyField(),r))}return e.ce}function Sn(t){const e=_e(t);return e.le||(e.le=Tx(e,vo(t))),e.le}function Tx(t,e){if(t.limitType==="F")return i_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hc(s.field,i)});const n=t.endAt?new $c(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $c(t.startAt.position,t.startAt.inclusive):null;return i_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lh(t,e,n){return new Al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return ld(Sn(t),Sn(e))&&t.limitType===e.limitType}function Fw(t){return`${cd(Sn(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Lw(s)).join(", ")}]`),Il(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yi(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Sl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=r_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,vo(r),s)||r.endAt&&!function(o,a,l){const u=r_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,vo(r),s))}(t,e)}function Ix(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Uw(t){return(e,n)=>{let r=!1;for(const s of vo(t)){const i=Ax(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ax(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?_i(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Pw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=new Ge(he.comparator);function Jn(){return Rx}const Bw=new Ge(he.comparator);function ro(...t){let e=Bw;for(const n of t)e=e.insert(n.key,n);return e}function jw(t){let e=Bw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function us(){return Eo()}function $w(){return Eo()}function Eo(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sx=new Ge(he.comparator),Px=new _t(he.comparator);function ve(...t){let e=Px;for(const n of t)e=e.add(n);return e}const Cx=new _t(Se);function kx(){return Cx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(e)?"-0":e}}function Hw(t){return{integerValue:""+t}}function Ox(t,e){return ox(e)?Hw(e):ud(t,e)}/**
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
 */class Pl{constructor(){this._=void 0}}function Nx(t,e,n){return t instanceof qc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&id(i)&&(i=od(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ko?zw(t,e):t instanceof Go?Ww(t,e):function(s,i){const o=qw(s,i),a=a_(o)+a_(s.Pe);return Nh(o)&&Nh(s.Pe)?Hw(a):ud(s.serializer,a)}(t,e)}function xx(t,e,n){return t instanceof Ko?zw(t,e):t instanceof Go?Ww(t,e):n}function qw(t,e){return t instanceof zc?function(r){return Nh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qc extends Pl{}class Ko extends Pl{constructor(e){super(),this.elements=e}}function zw(t,e){const n=Kw(e);for(const r of t.elements)n.some(s=>kn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends Pl{constructor(e){super(),this.elements=e}}function Ww(t,e){let n=Kw(e);for(const r of t.elements)n=n.filter(s=>!kn(s,r));return{arrayValue:{values:n}}}class zc extends Pl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function a_(t){return tt(t.integerValue||t.doubleValue)}function Kw(t){return ad(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Dx(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ko&&s instanceof Ko||r instanceof Go&&s instanceof Go?gi(r.elements,s.elements,kn):r instanceof zc&&s instanceof zc?kn(r.Pe,s.Pe):r instanceof qc&&s instanceof qc}(t.transform,e.transform)}class Lx{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cl{}function Gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hd(t.key,on.none()):new fa(t.key,t.data,on.none());{const n=t.data,r=Vt.empty();let s=new _t(mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new Wt(s.toArray()),on.none())}}function Mx(t,e,n){t instanceof fa?function(s,i,o){const a=s.value.clone(),l=l_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(s,i,o){if(!dc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=l_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Qw(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,r){return t instanceof fa?function(i,o,a,l){if(!dc(i.precondition,o))return a;const u=i.value.clone(),h=u_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,o,a,l){if(!dc(i.precondition,o))return a;const u=u_(i.fieldTransforms,l,o),h=o.data;return h.setAll(Qw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return dc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Vx(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qw(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function c_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gi(r,s,(i,o)=>Dx(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fa extends Cl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends Cl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function l_(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xx(o,a,n[s]))}return r}function u_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Nx(i,o,e))}return r}class hd extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fx extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Mx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$w();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Gw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>c_(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>c_(n,r))}}class fd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return Sx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fd(e,n,r,s)}}/**
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
 */class Bx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,be;function $x(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Yw(t){if(t===void 0)return Xn("GRPC error has no .code"),$.UNKNOWN;switch(t){case nt.OK:return $.OK;case nt.CANCELLED:return $.CANCELLED;case nt.UNKNOWN:return $.UNKNOWN;case nt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case nt.INTERNAL:return $.INTERNAL;case nt.UNAVAILABLE:return $.UNAVAILABLE;case nt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case nt.NOT_FOUND:return $.NOT_FOUND;case nt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case nt.ABORTED:return $.ABORTED;case nt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case nt.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(be=nt||(nt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Hx(){return new TextEncoder}/**
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
 */const qx=new _s([4294967295,4294967295],0);function h_(t){const e=Hx().encode(t),n=new vw;return n.update(e),new Uint8Array(n.digest())}function f_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,r],0),new _s([s,i],0)]}class dd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(r<0)throw new so(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_s.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(_s.fromNumber(r)));return s.compare(qx)===1&&(s=new _s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=h_(e),[r,s]=f_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new dd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=h_(e),[r,s]=f_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Xw{constructor(e,n){this.targetId=e,this.me=n}}class Jw{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class d_{constructor(){this.fe=0,this.ge=m_(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new da(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=m_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jn(),this.qe=p_(),this.Qe=new Ge(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Dh(i))if(r===0){const o=new he(i.path);this.Ue(n,o,It.newNoDocument(o,ge.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Is(r).toUint8Array()}catch(l){if(l instanceof Cw)return mi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new dd(o,s,i)}catch(l){return mi(l instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Dh(a.target)){const l=new he(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,It.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new kl(e,n,this.Qe,this.ke,r);return this.ke=Jn(),this.qe=p_(),this.Qe=new Ge(Se),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new d_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new d_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p_(){return new Ge(he.comparator)}function m_(){return new Ge(he.comparator)}const Wx={asc:"ASCENDING",desc:"DESCENDING"},Kx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gx={and:"AND",or:"OR"};class Qx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||Il(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Yx(t,e){return Wc(t,e.toTimestamp())}function Pn(t){return Ve(!!t),ge.fromTimestamp(function(n){const r=Hr(n);return new ot(r.seconds,r.nanos)}(t))}function pd(t,e){return Vh(t,e).canonicalString()}function Vh(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function e0(t){const e=$e.fromString(t);return Ve(i0(e)),e}function Fh(t,e){return pd(t.databaseId,e.path)}function Cu(t,e){const n=e0(e);if(n.get(1)!==t.databaseId.projectId)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(n0(n))}function t0(t,e){return pd(t.databaseId,e)}function Xx(t){const e=e0(t);return e.length===4?$e.emptyPath():n0(e)}function Uh(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function n0(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g_(t,e,n){return{name:Fh(t,e),fields:n.value.mapValue.fields}}function Jx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ve(h===void 0||typeof h=="string"),vt.fromBase64String(h||"")):(Ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),vt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:Yw(u.code);return new ce(h,u.message||"")}(o);n=new Jw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cu(t,r.document.name),i=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):ge.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=It.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new pc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cu(t,r.document),i=r.readTime?Pn(r.readTime):ge.min(),o=It.newNoDocument(s,i),a=r.removedTargetIds||[];n=new pc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cu(t,r.document),i=r.removedTargetIds||[];n=new pc([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jx(s,i),a=r.targetId;n=new Xw(a,o)}}return n}function Zx(t,e){let n;if(e instanceof fa)n={update:g_(t,e.key,e.value)};else if(e instanceof hd)n={delete:Fh(t,e.key)};else if(e instanceof Jr)n={update:g_(t,e.key,e.data),updateMask:c2(e.fieldMask)};else{if(!(e instanceof Fx))return pe();n={verify:Fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof qc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Yx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function e2(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Pn(s.updateTime):Pn(i);return o.isEqual(ge.min())&&(o=Pn(i)),new Lx(o,s.transformResults||[])}(n,e))):[]}function t2(t,e){return{documents:[t0(t,e.path)]}}function n2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=t0(t,s);const i=function(u){if(u.length!==0)return s0(On.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:zs(p.field),direction:i2(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Mh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function r2(t){let e=Xx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=r0(d);return p instanceof On&&xw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(R){return new Hc(Ws(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Il(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new $c(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new $c(g,p)}(n.endAt)),wx(e,s,o,i,a,"F",l,u)}function s2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function r0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ws(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ws(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ws(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ws(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return st.create(Ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>r0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function i2(t){return Wx[t]}function o2(t){return Kx[t]}function a2(t){return Gx[t]}function zs(t){return{fieldPath:t.canonicalString()}}function Ws(t){return mt.fromServerFormat(t.fieldPath)}function s0(t){return t instanceof st?function(n){if(n.op==="=="){if(n_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(t_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(t_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:o2(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(s=>s0(s));return r.length===1?r[0]:{compositeFilter:{op:a2(n.op),filters:r}}}(t):pe()}function c2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function i0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class l2{constructor(e){this.ct=e}}function u2(t){const e=r2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(){this.un=new f2}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve($r.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class f2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class d2{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class p2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wo(r.mutation,s,Wt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ro();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Jn();const o=Eo(),a=function(){return Eo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Jr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),wo(h.mutation,u,h.mutation.getFieldMask(),ot.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new p2(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Eo();let s=new Ge((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Wt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||ve()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=$w();h.forEach(p=>{if(!i.has(p)){const g=Gw(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(us());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:a,changes:jw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=ro();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ro();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(d,p){return new Al(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,It.newInvalidDocument(h)))});let a=ro();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&wo(h.mutation,u,Wt.empty(),ot.now()),Sl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:u2(s.bundledQuery),readTime:Pn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class _2{constructor(){this.overlays=new Ge(he.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=us();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=us(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=us(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=us(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bx(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class y2{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.Tr=new _t(ct.Er),this.dr=new _t(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ct(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new he(new $e([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new he(new $e([])),r=new ct(n,e),s=new ct(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return he.comparator(e.key,n.key)||Se(e.wr,n.wr)}static Ar(e,n){return Se(e.wr,n.wr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _t(ct.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ux(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(Se);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ct(new he(i),0);let a=new _t(Se);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ct(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.Mr=e,this.docs=function(){return new Ge(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():It.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nx(tx(h),r)<=0||(s.has(h.key)||Sl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new w2(this)}getSize(e){return H.resolve(this.size)}}class w2 extends d2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.persistence=e,this.Nr=new ki(n=>cd(n),ld),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new md,this.targetCount=0,this.kr=vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new sd(0),this.Kr=!1,this.Kr=!0,this.$r=new y2,this.referenceDelegate=e(this),this.Ur=new b2(this),this.indexManager=new h2,this.remoteDocumentCache=function(s){return new E2(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new l2(n),this.Gr=new g2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new v2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new I2(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class I2 extends sx{constructor(e){super(),this.currentSequenceNumber=e}}class gd{constructor(e){this.persistence=e,this.Jr=new md,this.Yr=null}static Zr(e){return new gd(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=he.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _d(e,n.fromCache,r,s)}}/**
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
 */class A2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return iC()?8:ix(St())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new A2;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Yi()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(Yi()<=we.DEBUG&&ne("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Yi()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):H.resolve())}Yi(e,n){if(o_(n))return H.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lh(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,Lh(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return o_(n)||s.isEqual(ge.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(Yi()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qs(n)),this.rs(e,o,n,ex(s,-1)).next(a=>a))})}ts(e,n){let r=new _t(Uw(e));return n.forEach((s,i)=>{Sl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Yi()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",qs(n)),this.Ji.getDocumentsMatchingQuery(e,n,$r.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ge(Se),this._s=new ki(i=>cd(i),ld),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function P2(t,e,n,r){return new S2(t,e,n,r)}async function o0(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function C2(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=H.resolve();return p.forEach(R=>{g=g.next(()=>h.getEntry(l,R)).next(k=>{const N=u.docVersions.get(R);Ve(N!==null),k.version.compareTo(N)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function a0(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function k2(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(vt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(k,N,x){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(i,g))});let l=Jn(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(O2(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function O2(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function N2(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function x2(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Bh(t,e,n){const r=_e(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ha(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function __(t,e,n){const r=_e(t);let s=ge.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=_e(l),p=d._s.get(h);return p!==void 0?H.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(r,o,Sn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ve())).next(a=>(D2(r,Ix(e),a),{documents:a,Ts:i})))}function D2(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class y_{constructor(){this.activeTargetIds=kx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L2{constructor(){this.so=new y_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new y_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ya=null;function ku(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class U2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=ku(),l=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw mi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=V2[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ku();return new Promise((o,a)=>{const l=new Ew;l.setWithCredentials(!0),l.listenOnce(bw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hc.NO_ERROR:const h=l.getResponseJson();ne(bt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case hc.TIMEOUT:ne(bt,`RPC '${e}' ${i} timed out`),a(new ce($.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const d=l.getStatus();if(ne(bt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const R=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(g.status);a(new ce(R,g.message))}else a(new ce($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ne(bt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(bt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=ku(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Aw(),a=Iw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new ww({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ne(bt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const R=new F2({Io:N=>{g?ne(bt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(ne(bt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),ne(bt,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},To:()=>d.close()}),k=(N,x,S)=>{N.listen(x,E=>{try{S(E)}catch(O){setTimeout(()=>{throw O},0)}})};return k(d,no.EventType.OPEN,()=>{g||(ne(bt,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),k(d,no.EventType.CLOSE,()=>{g||(g=!0,ne(bt,`RPC '${e}' stream ${s} transport closed`),R.So())}),k(d,no.EventType.ERROR,N=>{g||(g=!0,mi(bt,`RPC '${e}' stream ${s} transport errored:`,N),R.So(new ce($.UNAVAILABLE,"The operation could not be completed")))}),k(d,no.EventType.MESSAGE,N=>{var x;if(!g){const S=N.data[0];Ve(!!S);const E=S,O=E.error||((x=E[0])===null||x===void 0?void 0:x.error);if(O){ne(bt,`RPC '${e}' stream ${s} received error:`,O);const D=O.status;let M=function(y){const w=nt[y];if(w!==void 0)return Yw(w)}(D),b=O.message;M===void 0&&(M=$.INTERNAL,b="Unknown error status: "+D+" with message "+O.message),g=!0,R.So(new ce(M,b)),d.close()}else ne(bt,`RPC '${e}' stream ${s} received:`,S),R.bo(S)}}),k(a,Tw.STAT_EVENT,N=>{N.stat===kh.PROXY?ne(bt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===kh.NOPROXY&&ne(bt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Ou(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){return new Qx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new c0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ce($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B2 extends l0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Jx(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Pn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Uh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Dh(l)?{documents:t2(i,l)}:{query:n2(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Zw(i,o.resumeToken);const u=Mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Wc(i,o.snapshotVersion.toTimestamp());const u=Mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=s2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Uh(this.serializer),n.removeTarget=e,this.a_(n)}}class j2 extends l0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=e2(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Uh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Zx(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Vh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Vh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class H2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class q2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ds(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.L_.add(4),await pa(u),u.q_.set("Unknown"),u.L_.delete(4),await Nl(u)}(this))})}),this.q_=new H2(r,s)}}async function Nl(t){if(Ds(t))for(const e of t.B_)await e(!0)}async function pa(t){for(const e of t.B_)await e(!1)}function u0(t,e){const n=_e(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),wd(n)?Ed(n):Oi(n).r_()&&vd(n,e))}function yd(t,e){const n=_e(t),r=Oi(n);n.N_.delete(e),r.r_()&&h0(n,e),n.N_.size===0&&(r.r_()?r.o_():Ds(n)&&n.q_.set("Unknown"))}function vd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).A_(e)}function h0(t,e){t.Q_.xe(e),Oi(t).R_(e)}function Ed(t){t.Q_=new zx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.q_.v_()}function wd(t){return Ds(t)&&!Oi(t).n_()&&t.N_.size>0}function Ds(t){return _e(t).L_.size===0}function f0(t){t.Q_=void 0}async function z2(t){t.q_.set("Online")}async function W2(t){t.N_.forEach((e,n)=>{vd(t,e)})}async function K2(t,e){f0(t),wd(t)?(t.q_.M_(e),Ed(t)):t.q_.set("Unknown")}async function G2(t,e,n){if(t.q_.set("Online"),e instanceof Jw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kc(t,r)}else if(e instanceof pc?t.Q_.Ke(e):e instanceof Xw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await a0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(vt.EMPTY_BYTE_STRING,h.snapshotVersion)),h0(i,l);const d=new Cr(h.target,l,u,h.sequenceNumber);vd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Kc(t,r)}}async function Kc(t,e,n){if(!ha(e))throw e;t.L_.add(1),await pa(t),t.q_.set("Offline"),n||(n=()=>a0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nl(t)})}function d0(t,e){return e().catch(n=>Kc(t,n,e))}async function xl(t){const e=_e(t),n=qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Q2(e);)try{const s=await N2(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Y2(e,s)}catch(s){await Kc(e,s)}p0(e)&&m0(e)}function Q2(t){return Ds(t)&&t.O_.length<10}function Y2(t,e){t.O_.push(e);const n=qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function p0(t){return Ds(t)&&!qr(t).n_()&&t.O_.length>0}function m0(t){qr(t).start()}async function X2(t){qr(t).p_()}async function J2(t){const e=qr(t);for(const n of t.O_)e.m_(n.mutations)}async function Z2(t,e,n){const r=t.O_.shift(),s=fd.from(r,e,n);await d0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xl(t)}async function eD(t,e){e&&qr(t).V_&&await async function(r,s){if(function(o){return $x(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();qr(r).s_(),await d0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xl(r)}}(t,e),p0(t)&&m0(t)}async function E_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Ds(n);n.L_.add(3),await pa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nl(n)}async function tD(t,e){const n=_e(t);e?(n.L_.delete(2),await Nl(n)):e||(n.L_.add(2),await pa(n),n.q_.set("Unknown"))}function Oi(t){return t.K_||(t.K_=function(n,r,s){const i=_e(n);return i.w_(),new B2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:z2.bind(null,t),Ro:W2.bind(null,t),mo:K2.bind(null,t),d_:G2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),wd(t)?Ed(t):t.q_.set("Unknown")):(await t.K_.stop(),f0(t))})),t.K_}function qr(t){return t.U_||(t.U_=function(n,r,s){const i=_e(n);return i.w_(),new j2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:X2.bind(null,t),mo:eD.bind(null,t),f_:J2.bind(null,t),g_:Z2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xl(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Td(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),ha(t))return new ce($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class w_{constructor(){this.W_=new Ge(he.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ei{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ei(e,n,ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class rD{constructor(){this.queries=b_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=b_(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ce($.ABORTED,"Firestore shutting down"))}}function b_(){return new ki(t=>Fw(t),Rl)}async function sD(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new nD,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Td(o,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Id(n)}async function iD(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oD(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Id(n)}function aD(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Id(t){t.Y_.forEach(e=>{e.next()})}var jh,T_;(T_=jh||(jh={})).ea="default",T_.Cache="cache";class cD{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==jh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.key=e}}class _0{constructor(e){this.key=e}}class lD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=Uw(e),this.Ra=new ii(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new w_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Sl(this.query,d)?d:null,R=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;p&&g?p.data.isEqual(g.data)?R!==k&&(r.track({type:3,doc:g}),N=!0):this.ga(p,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),N=!0):p&&!g&&(r.track({type:1,doc:p}),N=!0,(l||u)&&(a=!0)),N&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(g,R){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return k(g)-k(R)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ei(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new w_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new g0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ei.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hD{constructor(e){this.key=e,this.va=!1}}class fD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ki(a=>Fw(a),Rl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ge(he.comparator),this.Na=new Map,this.La=new md,this.Ba={},this.ka=new Map,this.qa=vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dD(t,e,n=!0){const r=T0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await y0(r,e,n,!0),s}async function pD(t,e){const n=T0(t);await y0(n,e,!0,!1)}async function y0(t,e,n,r){const s=await x2(t.localStore,Sn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await mD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&u0(t.remoteStore,s),a}async function mD(t,e,n,r,s){t.Ka=(d,p,g)=>async function(k,N,x,S){let E=N.view.ma(x);E.ns&&(E=await __(k.localStore,N.query,!1).then(({documents:b})=>N.view.ma(b,E)));const O=S&&S.targetChanges.get(N.targetId),D=S&&S.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(E,k.isPrimaryClient,O,D);return A_(k,N.targetId,M.wa),M.snapshot}(t,d,p,g);const i=await __(t.localStore,e,!0),o=new lD(e,i.Ts),a=o.ma(i.documents),l=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);A_(t,n,u.wa);const h=new uD(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function gD(t,e,n){const r=_e(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Rl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yd(r.remoteStore,s.targetId),$h(r,s.targetId)}).catch(ua)):($h(r,s.targetId),await Bh(r.localStore,s.targetId,!0))}async function _D(t,e){const n=_e(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yd(n.remoteStore,r.targetId))}async function yD(t,e,n){const r=AD(t);try{const s=await function(o,a){const l=_e(o),u=ot.now(),h=a.reduce((g,R)=>g.add(R.key),ve());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=Jn(),k=ve();return l.cs.getEntries(g,h).next(N=>{R=N,R.forEach((x,S)=>{S.isValidDocument()||(k=k.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,R)).next(N=>{d=N;const x=[];for(const S of a){const E=Vx(S,d.get(S.key).overlayedDocument);E!=null&&x.push(new Jr(S.key,E,kw(E.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,x,a)}).next(N=>{p=N;const x=N.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(g,N.batchId,x)})}).then(()=>({batchId:p.batchId,changes:jw(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ge(Se)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await ma(r,s.changes),await xl(r.remoteStore)}catch(s){const i=Td(s,"Failed to persist write");n.reject(i)}}async function v0(t,e){const n=_e(t);try{const r=await k2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ve(o.va):s.removedDocuments.size>0&&(Ve(o.va),o.va=!1))}),await ma(n,r,e)}catch(r){await ua(r)}}function I_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&Id(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vD(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ge(he.comparator);o=o.insert(i,It.newNoDocument(i,ge.min()));const a=ve().add(i),l=new kl(ge.min(),new Map,new Ge(Se),o,a);await v0(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ad(r)}else await Bh(r.localStore,e,!1).then(()=>$h(r,e,n)).catch(ua)}async function ED(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await C2(n.localStore,e);w0(n,r,null),E0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ma(n,s)}catch(s){await ua(s)}}async function wD(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ve(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);w0(r,e,n),E0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ma(r,s)}catch(s){await ua(s)}}function E0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function w0(t,e,n){const r=_e(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function $h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||b0(t,r)})}function b0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ad(t))}function A_(t,e,n){for(const r of n)r instanceof g0?(t.La.addReference(r.key,e),bD(t,r)):r instanceof _0?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||b0(t,r.key)):pe()}function bD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ad(t))}function Ad(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new he($e.fromString(e)),r=t.qa.next();t.Na.set(r,new hD(n)),t.Oa=t.Oa.insert(n,r),u0(t.remoteStore,new Cr(Sn(Vw(n.path)),r,"TargetPurposeLimboResolution",sd.oe))}}async function ma(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=_d.Wi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>H.forEach(u,p=>H.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>H.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!ha(d))throw d;ne("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.os.get(p),R=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(R);h.os=h.os.insert(p,k)}}}(r.localStore,i))}async function TD(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await o0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new ce($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ma(n,r.hs)}}function ID(t,e){const n=_e(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function T0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ID.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vD.bind(null,e),e.Ca.d_=oD.bind(null,e.eventManager),e.Ca.$a=aD.bind(null,e.eventManager),e}function AD(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ED.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wD.bind(null,e),e}class R_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ol(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P2(this.persistence,new R2,e.initialUser,this.serializer)}createPersistence(e){return new T2(gd.Zr,this.serializer)}createSharedClientState(e){return new L2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>I_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TD.bind(null,this.syncEngine),await tD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rD}()}createDatastore(e){const n=Ol(e.databaseInfo.databaseId),r=function(i){return new U2(i)}(e.databaseInfo);return function(i,o,a,l){return new $2(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new q2(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>I_(this.syncEngine,n,0),function(){return v_.D()?new v_:new M2}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new fD(s,i,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);ne("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await pa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class SD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Sw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ne("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ne("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Td(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nu(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await o0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kD(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>E_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>E_(e.remoteStore,s)),t._onlineComponents=e}function CD(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!CD(n))throw n;mi("Error using user provided cache. Falling back to memory cache: "+n),await Nu(t,new R_)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Nu(t,new R_);return t._offlineComponents}async function I0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await S_(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await S_(t,new RD))),t._onlineComponents}function OD(t){return I0(t).then(e=>e.syncEngine)}async function ND(t){const e=await I0(t),n=e.eventManager;return n.onListen=dD.bind(null,e.syncEngine),n.onUnlisten=gD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_D.bind(null,e.syncEngine),n}function xD(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new SD({next:p=>{o.enqueueAndForget(()=>iD(i,d)),p.fromCache&&l.source==="server"?u.reject(new ce($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new cD(a,h,{includeMetadataChanges:!0,_a:!0});return sD(i,d)}(await ND(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const P_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e,n){if(!n)throw new ce($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DD(t,e,n,r){if(e===!0&&r===!0)throw new ce($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function C_(t){if(!he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k_(t){if(he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rd(t);throw new ce($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zN;switch(r.type){case"firstParty":return new QN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=P_.get(n);r&&(ne("ComponentProvider","Removing Datastore"),P_.delete(n),r.terminate())}(this),Promise.resolve()}}function LD(t,e,n,r={}){var s;const i=(t=wi(t,Dl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Tt.MOCK_USER;else{a=xE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Tt(u)}t._authCredentials=new WN(new Rw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ll(this.firestore,e,this._query)}}class an{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class Fr extends Ll{constructor(e,n,r){super(e,n,Vw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new he(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function MF(t,e,...n){if(t=Ye(t),R0("collection","path",e),t instanceof Dl){const r=$e.fromString(e,...n);return k_(r),new Fr(t,null,r)}{if(!(t instanceof an||t instanceof Fr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return k_(r),new Fr(t.firestore,null,r)}}function VF(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Sw.newId()),R0("doc","path",e),t instanceof Dl){const r=$e.fromString(e,...n);return C_(r),new an(t,null,new he(r))}{if(!(t instanceof an||t instanceof Fr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return C_(r),new an(t.firestore,t instanceof Fr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new c0(this,"async_queue_retry"),this.Eu=()=>{const n=Ou();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Ou();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Vr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ha(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=bd.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&pe()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Ml extends Dl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new MD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||S0(this),this._firestoreClient.terminate()}}function VD(t,e){const n=typeof t=="object"?t:Kf(),r=typeof t=="string"?t:"(default)",s=vl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kE("firestore");i&&LD(s,...i)}return s}function Sd(t){return t._firestoreClient||S0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function S0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new cx(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,A0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new PD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class kd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=/^__.*__$/;class UD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fa(e,this.data,n,this.fieldTransforms)}}class P0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function C0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Od{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Gc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(C0(this.wu)&&FD.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class BD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ol(e)}Nu(e,n,r,s=!1){return new Od({wu:e,methodName:n,Ou:r,path:mt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function k0(t){const e=t._freezeSettings(),n=Ol(t._databaseId);return new BD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O0(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Nd("Data must be an object, but it was:",o,r);const a=N0(r,o);let l,u;if(i.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=Hh(e,d,n);if(!o.contains(p))throw new ce($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);D0(h,p)||h.push(p)}l=new Wt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new UD(new Vt(a),l,u)}class Fl extends Pd{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fl}}function jD(t,e,n,r){const s=t.Nu(1,e,n);Nd("Data must be an object, but it was:",s,r);const i=[],o=Vt.empty();xs(r,(l,u)=>{const h=xd(e,l,n);u=Ye(u);const d=s.Cu(h);if(u instanceof Fl)i.push(h);else{const p=Ul(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Wt(i);return new P0(o,a,s.fieldTransforms)}function $D(t,e,n,r,s,i){const o=t.Nu(1,e,n),a=[Hh(e,r,n)],l=[s];if(i.length%2!=0)throw new ce($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Hh(e,i[p])),l.push(i[p+1]);const u=[],h=Vt.empty();for(let p=a.length-1;p>=0;--p)if(!D0(u,a[p])){const g=a[p];let R=l[p];R=Ye(R);const k=o.Cu(g);if(R instanceof Fl)u.push(g);else{const N=Ul(R,k);N!=null&&(u.push(g),h.set(g,N))}}const d=new Wt(u);return new P0(h,d,o.fieldTransforms)}function Ul(t,e){if(x0(t=Ye(t)))return Nd("Unsupported field value:",e,t),N0(t,e);if(t instanceof Pd)return function(r,s){if(!C0(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ul(a,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ox(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Wc(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wc(s.serializer,i)}}if(r instanceof Cd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bi)return{bytesValue:Zw(s.serializer,r._byteString)};if(r instanceof an){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return ud(a.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Rd(r)}`)}(t,e)}function N0(t,e){const n={};return Pw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,s)=>{const i=Ul(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function x0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Cd||t instanceof bi||t instanceof an||t instanceof Pd||t instanceof kd)}function Nd(t,e,n){if(!x0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Rd(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Hh(t,e,n){if((e=Ye(e))instanceof Vl)return e._internalPath;if(typeof e=="string")return xd(t,e);throw Gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const HD=new RegExp("[~\\*/\\[\\]]");function xd(t,e,n){if(e.search(HD)>=0)throw Gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vl(...e.split("."))._internalPath}catch{throw Gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce($.INVALID_ARGUMENT,a+t+l)}function D0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(M0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qD extends L0{data(){return super.data()}}function M0(t,e){return typeof e=="string"?xd(t,e):e instanceof Vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WD{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new kd(i)}convertGeoPoint(e){return new Cd(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=od(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ve(i0(r));const s=new zo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KD extends L0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(M0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mc extends KD{data(e={}){return super.data(e)}}class GD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mc(this._firestore,this._userDataWriter,r.key,r,new Xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new mc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new mc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:QD(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class YD extends WD{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,n)}}function FF(t){t=wi(t,Ll);const e=wi(t.firestore,Ml),n=Sd(e),r=new YD(e);return zD(t._query),xD(n,t._query).then(s=>new GD(e,r,t,s))}function UF(t,e,n){t=wi(t,an);const r=wi(t.firestore,Ml),s=V0(t.converter,e,n);return F0(r,[O0(k0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function F0(t,e){return function(r,s){const i=new Vr;return r.asyncQueue.enqueueAndForget(async()=>yD(await OD(r),s,i)),i.promise}(Sd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=k0(e)}set(e,n,r){this._verifyNotCommitted();const s=xu(e,this._firestore),i=V0(s.converter,n,r),o=O0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,on.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=xu(e,this._firestore);let o;return o=typeof(n=Ye(n))=="string"||n instanceof Vl?$D(this._dataReader,"WriteBatch.update",i._key,n,r,s):jD(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,on.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=xu(e,this._firestore);return this._mutations=this._mutations.concat(new hd(n._key,on.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xu(t,e){if((t=Ye(t)).firestore!==e)throw new ce($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BF(t){return Sd(t=wi(t,Ml)),new XD(t,e=>F0(t,e))}(function(e,n=!0){(function(s){Ci=s})(Os),ws(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ml(new KN(r.getProvider("auth-internal")),new XN(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),In(Yg,"4.7.0",e),In(Yg,"4.7.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="firebasestorage.googleapis.com",B0="storageBucket",JD=2*60*1e3,ZD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ln{constructor(e,n,r=0){super(Du(e),`Firebase Storage: ${n} (${Du(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xe||(Xe={}));function Du(t){return"storage/"+t}function Dd(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Xe.UNKNOWN,t)}function eL(t){return new Je(Xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tL(t){return new Je(Xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Xe.UNAUTHENTICATED,t)}function rL(){return new Je(Xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sL(t){return new Je(Xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function iL(){return new Je(Xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oL(){return new Je(Xe.CANCELED,"User canceled the upload/download.")}function aL(t){return new Je(Xe.INVALID_URL,"Invalid URL '"+t+"'.")}function cL(t){return new Je(Xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lL(){return new Je(Xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+B0+"' property when initializing the app?")}function uL(){return new Je(Xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hL(){return new Je(Xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fL(t){return new Je(Xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qh(t){return new Je(Xe.INVALID_ARGUMENT,t)}function j0(){return new Je(Xe.APP_DELETED,"The Firebase app was deleted.")}function dL(t){return new Je(Xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bo(t,e){return new Je(Xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xi(t){throw new Je(Xe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw cL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),R={bucket:1,path:3},k=n===U0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",x=new RegExp(`^https?://${k}/${s}/${N}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:g,indices:R,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<E.length;O++){const D=E[O],M=D.regex.exec(e);if(M){const b=M[D.indices.bucket];let _=M[D.indices.path];_||(_=""),r=new Kt(b,_),D.postModify(r);break}}if(r==null)throw aL(e);return r}}class pL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function d(N){s=setTimeout(()=>{s=null,t(g,l())},N)}function p(){i&&clearTimeout(i)}function g(N,...x){if(u){p();return}if(N){p(),h.call(null,N,...x);return}if(l()||o){p(),h.call(null,N,...x);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,d(E)}let R=!1;function k(N){R||(R=!0,p(),!u&&(s!==null?(N||(a=2),clearTimeout(s),d(0)):N||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function gL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){return t!==void 0}function yL(t){return typeof t=="object"&&!Array.isArray(t)}function Ld(t){return typeof t=="string"||t instanceof String}function N_(t){return Md()&&t instanceof Blob}function Md(){return typeof Blob<"u"}function x_(t,e,n,r){if(r<e)throw qh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ys;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ys||(ys={}));/**
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
 */function vL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,R)=>{this.resolve_=g,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ja(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ys.NO_ERROR,l=i.getStatus();if(!a||vL(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ys.ABORT;r(!1,new Ja(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ja(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_L(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Dd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?j0():oL();o(l)}else{const l=iL();o(l)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=mL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function IL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AL(t,e,n,r,s,i,o=!0){const a=$0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return TL(u,e),wL(u,n),bL(u,i),IL(u,r),new EL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function SL(...t){const e=RL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Md())return new Blob(t);throw new Je(Xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function PL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function CL(t){if(typeof atob>"u")throw fL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Lu{constructor(e,n){this.data=e,this.contentType=n||null}}function kL(t,e){switch(t){case wn.RAW:return new Lu(H0(e));case wn.BASE64:case wn.BASE64URL:return new Lu(q0(t,e));case wn.DATA_URL:return new Lu(NL(e),xL(e))}throw Dd()}function H0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function OL(t){let e;try{e=decodeURIComponent(t)}catch{throw bo(wn.DATA_URL,"Malformed data URL.")}return H0(e)}function q0(t,e){switch(t){case wn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw bo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case wn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw bo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=CL(e)}catch(s){throw s.message.includes("polyfill")?s:bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class z0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bo(wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=DL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function NL(t){const e=new z0(t);return e.base64?q0(wn.BASE64,e.rest):OL(e.rest)}function xL(t){return new z0(t).contentType}function DL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){let r=0,s="";N_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(N_(this.data_)){const r=this.data_,s=PL(r,e,n);return s===null?null:new Sr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Sr(r,!0)}}static getBlob(...e){if(Md()){const n=e.map(r=>r instanceof Sr?r.data_:r);return new Sr(SL.apply(null,n))}else{const n=e.map(o=>Ld(o)?kL(wn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Sr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){let e;try{e=JSON.parse(t)}catch{return null}return yL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ML(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function K0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t,e){return e}class kt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||VL}}let Za=null;function FL(t){return!Ld(t)||t.length<2?t:K0(t)}function G0(){if(Za)return Za;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(i,o){return FL(o)}const n=new kt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new kt("size");return s.xform=r,t.push(s),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),Za=t,Za}function UL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Kt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function BL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return UL(r,t),r}function Q0(t,e,n){const r=W0(e);return r===null?null:BL(t,r,n)}function jL(t,e,n,r){const s=W0(e);if(s===null||!Ld(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=Vd(p,n,r),R=$0({alt:"media",token:u});return g+R})[0]}function $L(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Y0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){if(!t)throw Dd()}function HL(t,e){function n(r,s){const i=Q0(t,s,e);return X0(i!==null),i}return n}function qL(t,e){function n(r,s){const i=Q0(t,s,e);return X0(i!==null),jL(i,s,t.host,t._protocol)}return n}function J0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=rL():s=nL():n.getStatus()===402?s=tL(t.bucket):n.getStatus()===403?s=sL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function zL(t){const e=J0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=eL(t.path)),i.serverResponse=s.serverResponse,i}return n}function WL(t,e,n){const r=e.fullServerUrl(),s=Vd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Y0(s,i,qL(t,n),o);return a.errorHandler=zL(e),a}function KL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function GL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KL(null,e)),r}function QL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let O=0;O<2;O++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=GL(e,r,s),h=$L(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Sr.getBlob(d,r,p);if(g===null)throw uL();const R={name:u.fullPath},k=Vd(i,t.host,t._protocol),N="POST",x=t.maxUploadRetryTime,S=new Y0(k,N,HL(t,n),x);return S.urlParams=R,S.headers=o,S.body=g.uploadData(),S.errorHandler=J0(e),S}class YL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XL extends YL{initXhr(){this.xhr_.responseType="text"}}function Z0(){return new XL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rs(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return K0(this._location.path)}get storage(){return this._service}get parent(){const e=LL(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new Rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dL(e)}}function JL(t,e,n){t._throwIfRoot("uploadBytes");const r=QL(t.storage,t._location,G0(),new Sr(e,!0),n);return t.storage.makeRequestWithTokens(r,Z0).then(s=>({metadata:s,ref:t}))}function ZL(t){t._throwIfRoot("getDownloadURL");const e=WL(t.storage,t._location,G0());return t.storage.makeRequestWithTokens(e,Z0).then(n=>{if(n===null)throw hL();return n})}function eM(t,e){const n=ML(t._location.path,e),r=new Kt(t._location.bucket,n);return new Rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t){return/^[A-Za-z]+:\/\//.test(t)}function nM(t,e){return new Rs(t,e)}function eb(t,e){if(t instanceof Fd){const n=t;if(n._bucket==null)throw lL();const r=new Rs(n,n._bucket);return e!=null?eb(r,e):r}else return e!==void 0?eM(t,e):t}function rM(t,e){if(e&&tM(e)){if(t instanceof Fd)return nM(t,e);throw qh("To use ref(service, url), the first argument must be a Storage instance.")}else return eb(t,e)}function D_(t,e){const n=e==null?void 0:e[B0];return n==null?null:Kt.makeFromBucketSpec(n,t)}function sM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:xE(s,t.app.options.projectId))}class Fd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=U0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JD,this._maxUploadRetryTime=ZD,this._requests=new Set,s!=null?this._bucket=Kt.makeFromBucketSpec(s,this._host):this._bucket=D_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=D_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){x_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){x_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new pL(j0());{const o=AL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const L_="@firebase/storage",M_="0.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="storage";function jF(t,e,n){return t=Ye(t),JL(t,e,n)}function $F(t){return t=Ye(t),ZL(t)}function HF(t,e){return t=Ye(t),rM(t,e)}function iM(t=Kf(),e){t=Ye(t);const r=vl(t,tb).getImmediate({identifier:e}),s=kE("storage");return s&&oM(r,...s),r}function oM(t,e,n,r={}){sM(t,e,n,r)}function aM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fd(n,r,s,e,Os)}function cM(){ws(new jr(tb,aM,"PUBLIC").setMultipleInstances(!0)),In(L_,M_,""),In(L_,M_,"esm2017")}cM();const lM=Yt(t=>{const e=ks(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=ME(n),s=xN(r),i=VD(r),o=iM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)}),V_=()=>{};let Ud={},nb={},rb=null,sb={mark:V_,measure:V_};try{typeof window<"u"&&(Ud=window),typeof document<"u"&&(nb=document),typeof MutationObserver<"u"&&(rb=MutationObserver),typeof performance<"u"&&(sb=performance)}catch{}const{userAgent:F_=""}=Ud.navigator||{},zr=Ud,Ue=nb,U_=rb,ec=sb;zr.document;const rr=!!Ue.documentElement&&!!Ue.head&&typeof Ue.addEventListener=="function"&&typeof Ue.createElement=="function",ib=~F_.indexOf("MSIE")||~F_.indexOf("Trident/");var He="classic",ob="duotone",Gt="sharp",Qt="sharp-duotone",uM=[He,ob,Gt,Qt],hM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},B_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fM=["kit"],dM=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,pM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,mM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},gM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},_M={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},yM={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},vM={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},EM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ab={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},wM=["solid","regular","light","thin","duotone","brands"],cb=[1,2,3,4,5,6,7,8,9,10],bM=cb.concat([11,12,13,14,15,16,17,18,19,20]),io={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},TM=[...Object.keys(yM),...wM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",io.GROUP,io.SWAP_OPACITY,io.PRIMARY,io.SECONDARY].concat(cb.map(t=>"".concat(t,"x"))).concat(bM.map(t=>"w-".concat(t))),IM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},AM={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},RM={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},j_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Zn="___FONT_AWESOME___",zh=16,lb="fa",ub="svg-inline--fa",Ss="data-fa-i2svg",Wh="data-fa-pseudo-element",SM="data-fa-pseudo-element-pending",Bd="data-prefix",jd="data-icon",$_="fontawesome-i2svg",PM="async",CM=["HTML","HEAD","STYLE","SCRIPT"],hb=(()=>{try{return!0}catch{return!1}})(),fb=[He,Gt,Qt];function ga(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[He]}})}const db={...ab};db[He]={...ab[He],...B_.kit,...B_["kit-duotone"]};const vs=ga(db),Kh={...EM};Kh[He]={...Kh[He],...j_.kit,...j_["kit-duotone"]};const Qo=ga(Kh),Gh={...vM};Gh[He]={...Gh[He],...RM.kit};const Es=ga(Gh),Qh={..._M};Qh[He]={...Qh[He],...AM.kit};const kM=ga(Qh),OM=dM,pb="fa-layers-text",NM=pM,xM={...hM};ga(xM);const DM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mu=io,Ti=new Set;Object.keys(Qo[He]).map(Ti.add.bind(Ti));Object.keys(Qo[Gt]).map(Ti.add.bind(Ti));Object.keys(Qo[Qt]).map(Ti.add.bind(Ti));const LM=[...fM,...TM],To=zr.FontAwesomeConfig||{};function MM(t){var e=Ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function VM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ue&&typeof Ue.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=VM(MM(n));s!=null&&(To[r]=s)});const mb={styleDefault:"solid",familyDefault:"classic",cssPrefix:lb,replacementClass:ub,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};To.familyPrefix&&(To.cssPrefix=To.familyPrefix);const Ii={...mb,...To};Ii.autoReplaceSvg||(Ii.observeMutations=!1);const re={};Object.keys(mb).forEach(t=>{Object.defineProperty(re,t,{enumerable:!0,set:function(e){Ii[t]=e,Io.forEach(n=>n(re))},get:function(){return Ii[t]}})});Object.defineProperty(re,"familyPrefix",{enumerable:!0,set:function(t){Ii.cssPrefix=t,Io.forEach(e=>e(re))},get:function(){return Ii.cssPrefix}});zr.FontAwesomeConfig=re;const Io=[];function FM(t){return Io.push(t),()=>{Io.splice(Io.indexOf(t),1)}}const pr=zh,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function UM(t){if(!t||!rr)return;const e=Ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ue.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ue.head.insertBefore(e,r),t}const BM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yo(){let t=12,e="";for(;t-- >0;)e+=BM[Math.random()*62|0];return e}function Ni(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $d(t){return t.classList?Ni(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function gb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jM(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(gb(t[n]),'" '),"").trim()}function Bl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Hd(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function $M(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function HM(t){let{transform:e,width:n=zh,height:r=zh,startCentered:s=!1}=t,i="";return s&&ib?i+="translate(".concat(e.x/pr-n/2,"em, ").concat(e.y/pr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/pr,"em), calc(-50% + ").concat(e.y/pr,"em)) "):i+="translate(".concat(e.x/pr,"em, ").concat(e.y/pr,"em) "),i+="scale(".concat(e.size/pr*(e.flipX?-1:1),", ").concat(e.size/pr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var qM=`:root, :host {
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
}`;function _b(){const t=lb,e=ub,n=re.cssPrefix,r=re.replacementClass;let s=qM;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let H_=!1;function Vu(){re.autoAddCss&&!H_&&(UM(_b()),H_=!0)}var zM={mixout(){return{dom:{css:_b,insertCss:Vu}}},hooks(){return{beforeDOMElementCreation(){Vu()},beforeI2svg(){Vu()}}}};const er=zr||{};er[Zn]||(er[Zn]={});er[Zn].styles||(er[Zn].styles={});er[Zn].hooks||(er[Zn].hooks={});er[Zn].shims||(er[Zn].shims=[]);var Tn=er[Zn];const yb=[],vb=function(){Ue.removeEventListener("DOMContentLoaded",vb),Qc=1,yb.map(t=>t())};let Qc=!1;rr&&(Qc=(Ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ue.readyState),Qc||Ue.addEventListener("DOMContentLoaded",vb));function WM(t){rr&&(Qc?setTimeout(t,0):yb.push(t))}function _a(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?gb(t):"<".concat(e," ").concat(jM(n),">").concat(r.map(_a).join(""),"</").concat(e,">")}function q_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Fu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function KM(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Yh(t){const e=KM(t);return e.length===1?e[0].toString(16):null}function GM(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function z_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Xh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=z_(e);typeof Tn.hooks.addPack=="function"&&!r?Tn.hooks.addPack(t,z_(e)):Tn.styles[t]={...Tn.styles[t]||{},...s},t==="fas"&&Xh("fa",e)}const{styles:ls,shims:QM}=Tn,YM={[He]:Object.values(Es[He]),[Gt]:Object.values(Es[Gt]),[Qt]:Object.values(Es[Qt])};let qd=null,Eb={},wb={},bb={},Tb={},Ib={};const XM={[He]:Object.keys(vs[He]),[Gt]:Object.keys(vs[Gt]),[Qt]:Object.keys(vs[Qt])};function JM(t){return~LM.indexOf(t)}function ZM(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!JM(s)?s:null}const Ab=()=>{const t=r=>Fu(ls,(s,i,o)=>(s[o]=Fu(i,r,{}),s),{});Eb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),wb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Ib=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ls||re.autoFetchSvg,n=Fu(QM,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});bb=n.names,Tb=n.unicodes,qd=jl(re.styleDefault,{family:re.familyDefault})};FM(t=>{qd=jl(t.styleDefault,{family:re.familyDefault})});Ab();function zd(t,e){return(Eb[t]||{})[e]}function eV(t,e){return(wb[t]||{})[e]}function kr(t,e){return(Ib[t]||{})[e]}function Rb(t){return bb[t]||{prefix:null,iconName:null}}function tV(t){const e=Tb[t],n=zd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return qd}const Wd=()=>({prefix:null,iconName:null,rest:[]});function jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=He}=e,r=vs[n][t],s=Qo[n][t]||Qo[n][r],i=t in Tn.styles?t:null;return s||i||null}const nV={[He]:Object.keys(Es[He]),[Gt]:Object.keys(Es[Gt]),[Qt]:Object.keys(Es[Qt])};function $l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[He]:"".concat(re.cssPrefix,"-").concat(He),[Gt]:"".concat(re.cssPrefix,"-").concat(Gt),[Qt]:"".concat(re.cssPrefix,"-").concat(Qt)};let s=null,i=He;const o=uM.filter(l=>l!==ob);o.forEach(l=>{(t.includes(r[l])||t.some(u=>nV[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const h=ZM(re.cssPrefix,u);if(ls[u]?(u=YM[i].includes(u)?kM[i][u]:u,s=u,l.prefix=u):XM[i].indexOf(u)>-1?(s=u,l.prefix=jl(u,{family:i})):h?l.iconName=h:u!==re.replacementClass&&!o.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=s==="fa"?Rb(l.iconName):{},p=kr(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!ls.far&&ls.fas&&!re.autoFetchSvg&&(l.prefix="fas")}return l},Wd());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Gt&&(ls.fass||re.autoFetchSvg)&&(a.prefix="fass",a.iconName=kr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===Qt&&(ls.fasds||re.autoFetchSvg)&&(a.prefix="fasds",a.iconName=kr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Wr()||"fas"),a}class rV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},Xh(i,s[i]);const o=Es[He][i];o&&Xh(o,s[i]),Ab()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let W_=[],Qs={};const oi={},sV=Object.keys(oi);function iV(t,e){let{mixoutsTo:n}=e;return W_=t,Qs={},Object.keys(oi).forEach(r=>{sV.indexOf(r)===-1&&delete oi[r]}),W_.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Qs[o]||(Qs[o]=[]),Qs[o].push(i[o])})}r.provides&&r.provides(oi)}),n}function Jh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Qs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ps(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Qs[t]||[]).forEach(i=>{i.apply(null,n)})}function Kr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return oi[t]?oi[t].apply(null,e):void 0}function Zh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Wr();if(e)return e=kr(n,e)||e,q_(Sb.definitions,n,e)||q_(Tn.styles,n,e)}const Sb=new rV,oV=()=>{re.autoReplaceSvg=!1,re.observeMutations=!1,Ps("noAuto")},aV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(Ps("beforeI2svg",t),Kr("pseudoElements2svg",t),Kr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;re.autoReplaceSvg===!1&&(re.autoReplaceSvg=!0),re.observeMutations=!0,WM(()=>{lV({autoReplaceSvgRoot:e}),Ps("watch",t)})}},cV={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=jl(t[0]);return{prefix:n,iconName:kr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(re.cssPrefix,"-"))>-1||t.match(OM))){const e=$l(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Wr(),iconName:kr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Wr();return{prefix:e,iconName:kr(e,t)||t}}}},Xt={noAuto:oV,config:re,dom:aV,parse:cV,library:Sb,findIconDefinition:Zh,toHtml:_a},lV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ue}=t;(Object.keys(Tn.styles).length>0||re.autoFetchSvg)&&rr&&re.autoReplaceSvg&&Xt.dom.i2svg({node:e})};function Hl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>_a(n))}}),Object.defineProperty(t,"node",{get:function(){if(!rr)return;const n=Ue.createElement("div");return n.innerHTML=t.html,n.children}}),t}function uV(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Hd(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Bl({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function hV(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(re.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function Kd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,R=r==="fak",k=[re.replacementClass,s?"".concat(re.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let N={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const x=R&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(N.attributes[Ss]=""),a&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||Yo())},children:[a]}),delete N.attributes.title);const S={...N,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...x,...h.styles}},{children:E,attributes:O}=n.found&&e.found?Kr("generateAbstractMask",S)||{children:[],attributes:{}}:Kr("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=E,S.attributes=O,o?hV(S):uV(S)}function K_(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[Ss]="");const u={...o.styles};Hd(s)&&(u.transform=HM({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Bl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function fV(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Bl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Uu}=Tn;function ef(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(re.cssPrefix,"-").concat(Mu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Mu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Mu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const dV={found:!1,width:512,height:512};function pV(t,e){!hb&&!re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function tf(t,e){let n=e;return e==="fa"&&re.styleDefault!==null&&(e=Wr()),new Promise((r,s)=>{if(n==="fa"){const i=Rb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Uu[e]&&Uu[e][t]){const i=Uu[e][t];return r(ef(i))}pV(t,e),r({...dV,icon:re.showMissingIcons&&t?Kr("missingIconAbstract")||{}:{}})})}const G_=()=>{},nf=re.measurePerformance&&ec&&ec.mark&&ec.measure?ec:{mark:G_,measure:G_},oo='FA "6.6.0"',mV=t=>(nf.mark("".concat(oo," ").concat(t," begins")),()=>Pb(t)),Pb=t=>{nf.mark("".concat(oo," ").concat(t," ends")),nf.measure("".concat(oo," ").concat(t),"".concat(oo," ").concat(t," begins"),"".concat(oo," ").concat(t," ends"))};var Gd={begin:mV,end:Pb};const gc=()=>{};function Q_(t){return typeof(t.getAttribute?t.getAttribute(Ss):null)=="string"}function gV(t){const e=t.getAttribute?t.getAttribute(Bd):null,n=t.getAttribute?t.getAttribute(jd):null;return e&&n}function _V(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(re.replacementClass)}function yV(){return re.autoReplaceSvg===!0?_c.replace:_c[re.autoReplaceSvg]||_c.replace}function vV(t){return Ue.createElementNS("http://www.w3.org/2000/svg",t)}function EV(t){return Ue.createElement(t)}function Cb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?vV:EV}=e;if(typeof t=="string")return Ue.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Cb(i,{ceFn:n}))}),r}function wV(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const _c={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Cb(n),e)}),e.getAttribute(Ss)===null&&re.keepOriginalSource){let n=Ue.createComment(wV(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~$d(e).indexOf(re.replacementClass))return _c.replace(t);const r=new RegExp("".concat(re.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===re.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>_a(i)).join(`
`);e.setAttribute(Ss,""),e.innerHTML=s}};function Y_(t){t()}function kb(t,e){const n=typeof e=="function"?e:gc;if(t.length===0)n();else{let r=Y_;re.mutateApproach===PM&&(r=zr.requestAnimationFrame||Y_),r(()=>{const s=yV(),i=Gd.begin("mutate");t.map(s),i(),n()})}}let Qd=!1;function Ob(){Qd=!0}function rf(){Qd=!1}let Yc=null;function X_(t){if(!U_||!re.observeMutations)return;const{treeCallback:e=gc,nodeCallback:n=gc,pseudoElementsCallback:r=gc,observeMutationsRoot:s=Ue}=t;Yc=new U_(i=>{if(Qd)return;const o=Wr();Ni(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Q_(a.addedNodes[0])&&(re.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&re.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Q_(a.target)&&~DM.indexOf(a.attributeName))if(a.attributeName==="class"&&gV(a.target)){const{prefix:l,iconName:u}=$l($d(a.target));a.target.setAttribute(Bd,l||o),u&&a.target.setAttribute(jd,u)}else _V(a.target)&&n(a.target)})}),rr&&Yc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bV(){Yc&&Yc.disconnect()}function TV(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function IV(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=$l($d(t));return s.prefix||(s.prefix=Wr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=eV(s.prefix,t.innerText)||zd(s.prefix,Yh(t.innerText))),!s.iconName&&re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function AV(t){const e=Ni(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return re.autoA11y&&(n?e["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(r||Yo()):(e["aria-hidden"]="true",e.focusable="false")),e}function RV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=IV(t),i=AV(t),o=Jh("parseNodeAttributes",{},t);let a=e.styleParser?TV(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:SV}=Tn;function Nb(t){const e=re.autoReplaceSvg==="nest"?J_(t,{styleParser:!1}):J_(t);return~e.extra.classes.indexOf(pb)?Kr("generateLayersText",t,e):Kr("generateSvgReplacementMutation",t,e)}let Nn=new Set;fb.map(t=>{Nn.add("fa-".concat(t))});Object.keys(vs[He]).map(Nn.add.bind(Nn));Object.keys(vs[Gt]).map(Nn.add.bind(Nn));Object.keys(vs[Qt]).map(Nn.add.bind(Nn));Nn=[...Nn];function Z_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();const n=Ue.documentElement.classList,r=h=>n.add("".concat($_,"-").concat(h)),s=h=>n.remove("".concat($_,"-").concat(h)),i=re.autoFetchSvg?Nn:fb.map(h=>"fa-".concat(h)).concat(Object.keys(SV));i.includes("fa")||i.push("fa");const o=[".".concat(pb,":not([").concat(Ss,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ss,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ni(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Gd.begin("onTree"),u=a.reduce((h,d)=>{try{const p=Nb(d);p&&h.push(p)}catch(p){hb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{kb(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function PV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nb(t).then(n=>{n&&kb([n],e)})}function CV(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Zh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Zh(s||{})),t(r,{...n,mask:s})}}const kV=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=bn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return Hl({type:"icon",...t},()=>(Ps("beforeDOMElementCreation",{iconDefinition:t,params:e}),re.autoA11y&&(o?u["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(a||Yo()):(u["aria-hidden"]="true",u.focusable="false")),Kd({icons:{main:ef(g),mask:s?ef(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{...bn,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var OV={mixout(){return{icon:CV(kV)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Z_,t.nodeCallback=PV,t}}},provides(t){t.i2svg=function(e){const{node:n=Ue,callback:r=()=>{}}=e;return Z_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([tf(r,o),u.iconName?tf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[k,N]=R;p([e,Kd({icons:{main:k,mask:N},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Bl(o);a.length>0&&(r.style=a);let l;return Hd(i)&&(l=Kr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},NV={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Hl({type:"layer"},()=>{Ps("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(re.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},xV={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Hl({type:"counter",content:t},()=>(Ps("beforeDOMElementCreation",{content:t,params:e}),fV({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(re.cssPrefix,"-layers-counter"),...r]}})))}}}},DV={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=bn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Hl({type:"text",content:t},()=>(Ps("beforeDOMElementCreation",{content:t,params:e}),K_({content:t,transform:{...bn,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(re.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(ib){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return re.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,K_({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const LV=new RegExp('"',"ug"),ey=[1105920,1112319],ty={FontAwesome:{normal:"fas",400:"fas"},...gM,...mM,...IM},sf=Object.keys(ty).reduce((t,e)=>(t[e.toLowerCase()]=ty[e],t),{}),MV=Object.keys(sf).reduce((t,e)=>{const n=sf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function VV(t){const e=t.replace(LV,""),n=GM(e,0),r=n>=ey[0]&&n<=ey[1],s=e.length===2?e[0]===e[1]:!1;return{value:Yh(s?e[0]:e),isSecondary:r||s}}function FV(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(sf[n]||{})[s]||MV[n]}function ny(t,e){const n="".concat(SM).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ni(t.children).filter(p=>p.getAttribute(Wh)===e)[0],a=zr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(NM),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=FV(l,h);const{value:R,isSecondary:k}=VV(p),N=u[0].startsWith("FontAwesome");let x=zd(g,R),S=x;if(N){const E=tV(R);E.iconName&&E.prefix&&(x=E.iconName,g=E.prefix)}if(x&&!k&&(!o||o.getAttribute(Bd)!==g||o.getAttribute(jd)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);const E=RV(),{extra:O}=E;O.attributes[Wh]=e,tf(x,g).then(D=>{const M=Kd({...E,icons:{main:D,mask:Wd()},prefix:g,iconName:S,extra:O,watchable:!0}),b=Ue.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=M.map(_=>_a(_)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function UV(t){return Promise.all([ny(t,"::before"),ny(t,"::after")])}function BV(t){return t.parentNode!==document.head&&!~CM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ry(t){if(rr)return new Promise((e,n)=>{const r=Ni(t.querySelectorAll("*")).filter(BV).map(UV),s=Gd.begin("searchPseudoElements");Ob(),Promise.all(r).then(()=>{s(),rf(),e()}).catch(()=>{s(),rf(),n()})})}var jV={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ry,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ue}=e;re.searchPseudoElements&&ry(n)}}};let sy=!1;var $V={mixout(){return{dom:{unwatch(){Ob(),sy=!0}}}},hooks(){return{bootstrap(){X_(Jh("mutationObserverCallbacks",{}))},noAuto(){bV()},watch(t){const{observeMutationsRoot:e}=t;sy?rf():X_(Jh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const iy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var HV={mixout(){return{parse:{transform:t=>iy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=iy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const Bu={x:0,y:0,width:"100%",height:"100%"};function oy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qV(t){return t.tag==="g"?t.children:[t]}var zV={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?$l(n.split(" ").map(s=>s.trim())):Wd();return r.prefix||(r.prefix=Wr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=$M({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...Bu,fill:"white"}},R=u.children?{children:u.children.map(oy)}:{},k={tag:"g",attributes:{...p.inner},children:[oy({tag:u.tag,attributes:{...u.attributes,...p.path},...R})]},N={tag:"g",attributes:{...p.outer},children:[k]},x="mask-".concat(o||Yo()),S="clip-".concat(o||Yo()),E={tag:"mask",attributes:{...Bu,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,N]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:qV(d)},E]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(x,")"),...Bu}}),{children:n,attributes:r}}}},WV={provides(t){let e=!1;zr.matchMedia&&(e=zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},KV={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},GV=[zM,OV,NV,xV,DV,jV,$V,HV,zV,WV,KV];iV(GV,{mixoutsTo:Xt});Xt.noAuto;const QV=Xt.config,YV=Xt.library;Xt.dom;const of=Xt.parse;Xt.findIconDefinition;Xt.toHtml;const XV=Xt.icon;Xt.layer;Xt.text;Xt.counter;function ay(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Bn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ay(Object(n),!0).forEach(function(r){Dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ay(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function JV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ZV(t){var e=JV(t,"string");return typeof e=="symbol"?e:e+""}function Xc(t){"@babel/helpers - typeof";return Xc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xc(t)}function Dt(t,e,n){return e=ZV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function t4(t,e){if(t==null)return{};var n=e4(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var n4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xb={exports:{}};(function(t){(function(e){var n=function(x,S,E){if(!u(S)||d(S)||p(S)||g(S)||l(S))return S;var O,D=0,M=0;if(h(S))for(O=[],M=S.length;D<M;D++)O.push(n(x,S[D],E));else{O={};for(var b in S)Object.prototype.hasOwnProperty.call(S,b)&&(O[x(b,E)]=n(x,S[b],E))}return O},r=function(x,S){S=S||{};var E=S.separator||"_",O=S.split||/(?=[A-Z])/;return x.split(O).join(E)},s=function(x){return R(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(S,E){return E?E.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var S=s(x);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(x,S){return r(x,S).toLowerCase()},a=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},h=function(x){return a.call(x)=="[object Array]"},d=function(x){return a.call(x)=="[object Date]"},p=function(x){return a.call(x)=="[object RegExp]"},g=function(x){return a.call(x)=="[object Boolean]"},R=function(x){return x=x-0,x===x},k=function(x,S){var E=S&&"process"in S?S.process:S;return typeof E!="function"?x:function(O,D){return E(O,x,D)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,S){return n(k(s,S),x)},decamelizeKeys:function(x,S){return n(k(o,S),x,S)},pascalizeKeys:function(x,S){return n(k(i,S),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(n4)})(xb);var r4=xb.exports,s4=["class","style"];function i4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=r4.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function o4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Db(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Db(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=o4(h);break;case"style":l.style=i4(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=t4(n,s4);return gt(t.tag,Bn(Bn(Bn({},e),{},{class:s.class,style:Bn(Bn({},s.style),o)},s.attrs),a),r)}var Lb=!1;try{Lb=!0}catch{}function a4(){if(!Lb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ju(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Dt({},t,e):{}}function c4(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Dt(Dt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function cy(t){if(t&&Xc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(of.icon)return of.icon(t);if(t===null)return null;if(Xc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var l4=Dn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Le(function(){return cy(e.icon)}),i=Le(function(){return ju("classes",c4(e))}),o=Le(function(){return ju("transform",typeof e.transform=="string"?of.transform(e.transform):e.transform)}),a=Le(function(){return ju("mask",cy(e.mask))}),l=Le(function(){return XV(s.value,Bn(Bn(Bn(Bn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});dn(l,function(h){if(!h)return a4("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Le(function(){return l.value?Db(l.value.abstract[0],{},r):null});return function(){return u.value}}});const u4={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},h4={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},f4=h4,d4={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},p4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},m4={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};QV.autoAddCss=!1;YV.add(u4,p4,f4,m4,d4);const g4=Yt(t=>{t.vueApp.component("font-awesome-icon",l4)}),_4=!1;/*!
 * pinia v2.2.1
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Mb;const ql=t=>Mb=t,Vb=Symbol();function af(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ao;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ao||(Ao={}));function y4(){const t=mf(!0),e=t.run(()=>Bt({}));let n=[],r=[];const s=bf({install(i){ql(s),s._a=i,i.provide(Vb,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_4?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Fb=()=>{};function ly(t,e,n,r=Fb){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ea()&&vc(s),s}function $s(t,...e){t.slice().forEach(n=>{n(...e)})}const v4=t=>t(),uy=Symbol(),$u=Symbol();function cf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];af(s)&&af(r)&&t.hasOwnProperty(n)&&!rt(r)&&!Nr(r)?t[n]=cf(s,r):t[n]=r}return t}const E4=Symbol();function w4(t){return!af(t)||!t.hasOwnProperty(E4)}const{assign:mr}=Object;function b4(t){return!!(rt(t)&&t.effect)}function T4(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=YT(n.state.value[t]);return mr(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=bf(Le(()=>{ql(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=Ub(t,u,e,n,r,!0),l}function Ub(t,e,n={},r,s,i){let o;const a=mr({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Bt({});let k;function N(_){let y;u=h=!1,typeof _=="function"?(_(r.state.value[t]),y={type:Ao.patchFunction,storeId:t,events:g}):(cf(r.state.value[t],_),y={type:Ao.patchObject,payload:_,storeId:t,events:g});const w=k=Symbol();xn().then(()=>{k===w&&(u=!0)}),h=!0,$s(d,y,r.state.value[t])}const x=i?function(){const{state:y}=n,w=y?y():{};this.$patch(P=>{mr(P,w)})}:Fb;function S(){o.stop(),d=[],p=[],r._s.delete(t)}const E=(_,y="")=>{if(uy in _)return _[$u]=y,_;const w=function(){ql(r);const P=Array.from(arguments),A=[],T=[];function me(te){A.push(te)}function ye(te){T.push(te)}$s(p,{args:P,name:w[$u],store:D,after:me,onError:ye});let J;try{J=_.apply(this&&this.$id===t?this:D,P)}catch(te){throw $s(T,te),te}return J instanceof Promise?J.then(te=>($s(A,te),te)).catch(te=>($s(T,te),Promise.reject(te))):($s(A,J),J)};return w[uy]=!0,w[$u]=y,w},O={_p:r,$id:t,$onAction:ly.bind(null,p),$patch:N,$reset:x,$subscribe(_,y={}){const w=ly(d,_,y.detached,()=>P()),P=o.run(()=>dn(()=>r.state.value[t],A=>{(y.flush==="sync"?h:u)&&_({storeId:t,type:Ao.direct,events:g},A)},mr({},l,y)));return w},$dispose:S},D=Yr(O);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||v4)(()=>r._e.run(()=>(o=mf()).run(()=>e({action:E}))));for(const _ in b){const y=b[_];if(rt(y)&&!b4(y)||Nr(y))i||(R&&w4(y)&&(rt(y)?y.value=R[_]:cf(y,R[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const w=E(y,_);b[_]=w,a.actions[_]=y}}return mr(D,b),mr(Ae(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:_=>{N(y=>{mr(y,_)})}}),r._p.forEach(_=>{mr(D,o.run(()=>_({store:D,app:r._a,pinia:r,options:a})))}),R&&i&&n.hydrate&&n.hydrate(D.$state,R),u=!0,h=!0,D}function I4(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=Pf();return a=a||(u?Rt(Vb,null):null),a&&ql(a),a=Mb,a._s.has(r)||(i?Ub(r,e,s,a):T4(r,s,a)),a._s.get(r)}return o.$id=r,o}function A4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function R4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const S4=Yt(t=>{const e=y4();t.vueApp.use(e)});var hy=/^(GTM|G)-[0-9A-Z]+$/;function Hu(t){if(typeof t!="string"||!hy.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${hy}).${n}`)}}function ao(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function ai(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(ao(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function P4(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var C4=class{constructor(t){Ki(this,"id");Ki(this,"options");Ki(this,"scriptElements",[]);Ki(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)Hu(typeof e=="string"?e:e.id);else Hu(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!P4(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=ai(n,{...this.options}):r=ai(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=ai(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?ao(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&ao(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&ao(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&ao(window,this.options.dataLayerName).push(t)}},dt;function k4(t,e={id:""}){e={trackOnNextTick:!1,...e},dt=new C4(e),t.config.globalProperties.$gtm=dt,dt.isInBrowserContext()&&(e.vueRouter&&O4(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),dt.options.enabled&&dt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")ai(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),ai(n.id,r)}}):ai(e.id,e))),t.provide("gtm",e)}function O4(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,R;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?dt!=null&&dt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(dt!=null&&dt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((R=(g=e.options)==null?void 0:g.history)==null?void 0:R.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?xn(()=>{dt==null||dt.trackView(u,d,h)}):dt==null||dt.trackView(u,d,h)})}function N4(t){return{install:e=>k4(e,t)}}const x4=Yt(t=>{const e=ks().public,n=MN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(N4({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:yt(),trackOnNextTick:!1}))}),D4=[mS,_S,VP,UP,BP,jP,HP,qP,zP,lM,g4,S4,x4],L4=Dn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return ms(sa,jn(r)),()=>gt(t.vnode,{ref:t.vnodeRef})}}),M4=Dn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Me(),i=Bt(),o=Rt(sa,null);let a;r({pageRef:i});const l=Rt(eE,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);yt().beforeEach(d)}return t.pageKey&&dn(()=>t.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")}),()=>gt(IE,{name:t.name,route:t.route,...e},{default:d=>{const p=F4(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const R=Eh(d,t.pageKey);!s.isHydrating&&!U4(o,d.route,d.Component)&&a===R&&s.callHook("page:loading:end"),a=R;const k=!!(t.transition??d.route.meta.pageTransition??lh),N=k&&V4([t.transition,d.route.meta.pageTransition,lh,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),x=t.keepalive??d.route.meta.keepalive??K1;return u=AE(ul,k&&N,TP(x,gt(Nf,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{xn(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const S=gt(L4,{key:R||void 0,vnode:n.default?gt(Nt,void 0,n.default(d)):d.Component,route:d.route,renderKey:R||void 0,trackRootNodes:k,vnodeRef:i});return x&&(S.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),S}}))).default(),u}})}});function V4(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?qf(n.onAfterLeave):void 0}));return Jv(...e)}function F4(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Eh({route:e,Component:n})!==Eh({route:t,Component:n})}function U4(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const B4=Dn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Pr[t.name]().then(r=>r.default||r);return()=>gt(n,t.layoutProps,e.slots)}}),j4=Dn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Me(),r=Rt(sa),s=r===Ff()?wP():r,i=Le(()=>{let l=et(t.name)??s.meta.layout??"default";return l&&!(l in Pr)&&t.fallback&&(l=et(t.fallback)),l}),o=Bt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);yt().beforeEach(l)}return()=>{const l=i.value&&i.value in Pr,u=s.meta.layoutTransition??W1;return AE(ul,l&&u,{default:()=>gt(Nf,{suspensible:!0,onResolve:()=>{xn(a)}},{default:()=>gt($4,{layoutProps:Cv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),$4=Dn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&ms(eE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Pr)?(s=(r=e.slots).default)==null?void 0:s.call(r):gt(B4,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),zl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},H4={};function q4(t,e){const n=M4,r=j4;return Mt(),wr(r,null,{default:yn(()=>[Pe(n)]),_:1})}const z4=zl(H4,[["render",q4]]),W4=Vf("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),fy=I4("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Me(),r=yt();try{const s=await yO(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Me();try{await bO(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Me();wO(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),K4={class:"navbar navbar-expand-md navbar-light bg-light"},G4=je("span",{class:"navbar-toggler-icon"},null,-1),Q4=[G4],Y4={class:"navbar-nav"},X4={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},J4={class:"navbar-nav ml-auto"};function Z4(t,e,n,r,s,i){const o=$N;return Mt(),xo("nav",K4,[Pe(o,{class:"navbar-brand",to:"/"},{default:yn(()=>[nn("Who's Jimmy")]),_:1}),je("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},Q4),je("div",{class:Jo(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[je("ul",Y4,[Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:yn(()=>[nn("Bio")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:yn(()=>[nn("Portfolio ")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:yn(()=>[nn("For Sale")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:yn(()=>[nn("Cool Stuff")]),_:1}),Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:yn(()=>[nn("Contact Us")]),_:1})])],2),s.isAuth?(Mt(),xo("div",X4,[je("ul",J4,[Pe(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:yn(()=>[nn(pf(t.user?t.user.email:""),1)]),_:1}),je("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):nA("",!0)])}const eF={data(){return{visible:!1,isAuth:!1}},computed:{...A4(fy,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...R4(fy,{signOut:"signOut"})}},tF=zl(eF,[["render",Z4]]),nF=t=>(zy("data-v-063d9b19"),t=t(),Wy(),t),rF={class:"page-footer font-small bg-light navbar-fixed-bottom"},sF={class:"container"},iF={class:"py-3 pt-3"},oF={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},aF={href:"https://www.facebook.com/whosjimmy"},cF={href:"https://twitter.com/jimmyclaws"},lF={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"},uF=nF(()=>je("div",{class:"footer-copyright text-center font-small"},[je("div",null,[nn("© 2024 Copyright: "),je("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),je("div",null,"Disclaimer: All images are copyright to their respective owners."),je("div",null,[nn("A "),je("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),nn(" creation.")])],-1));function hF(t,e){const n=Oo("font-awesome-icon");return Mt(),xo("footer",rF,[je("div",sF,[je("div",iF,[je("a",oF,[Pe(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),je("a",aF,[Pe(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),je("a",cF,[Pe(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),je("a",lF,[Pe(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),uF])}const fF={},dF=zl(fF,[["render",hF],["__scopeId","data-v-063d9b19"]]),pF=t=>(zy("data-v-5f25e24b"),t=t(),Wy(),t),mF={class:"text-center my-0 page"},gF={class:"body"},_F=pF(()=>je("img",{src:W4,alt:"Error Image"},null,-1)),yF={head(){return{title:"Error"}},components:{appHeader:tF,appFooter:dF}},vF=Dn({...yF,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Me();Km({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{Km({title:n.public.SITE_TITLE}),nE({redirect:"/"})};return(i,o)=>{var u;const a=Oo("app-header"),l=Oo("app-footer");return Mt(),xo("div",mF,[Pe(a),je("div",gF,[_F,je("h2",null,"Error: "+pf((u=t.error)==null?void 0:u.statusCode),1),je("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Pe(l)])}}}),EF=zl(vF,[["__scopeId","data-v-5f25e24b"]]),wF={key:0},dy={__name:"nuxt-root",setup(t){const e=()=>null,n=Me(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);yt().beforeEach(l)}const s=!1;ms(sa,Ff()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=dl(),o=!1;nv((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),ER(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Ks(l)),!1});const a=!1;return(l,u)=>(Mt(),wr(Nf,{onResolve:et(r)},{default:yn(()=>[et(o)?(Mt(),xo("div",wF)):et(i)?(Mt(),wr(et(EF),{key:1,error:et(i)},null,8,["error"])):et(a)?(Mt(),wr(et(e),{key:2,context:et(a)},null,8,["context"])):et(s)?(Mt(),wr(mI(et(s)),{key:3})):(Mt(),wr(et(z4),{key:4}))]),_:1},8,["onResolve"]))}};let py;{let t;py=async function(){var o,a;if(t)return t;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?jA(dy):BA(dy),s=J1({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||pl(l)}r.config.errorHandler=i;try{await tR(s,D4)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(Y1),await s.hooks.callHook("app:mounted",r),await xn()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=py().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{CF as $,uI as A,dn as B,rt as C,Yr as D,na as E,Nt as F,Le as G,Nr as H,Br as I,Rt as J,ms as K,xn as L,Vf as M,Oo as N,SF as O,el as P,wr as Q,RF as R,Jo as S,ul as T,TF as U,tA as V,sa as W,NF as X,vR as Y,MN as Z,zl as _,R4 as a,tF as a0,dF as a1,M4 as a2,I4 as a3,Me as a4,MF as a5,FF as a6,UF as a7,VF as a8,BF as a9,je as b,xo as c,Pe as d,yn as e,$N as f,nn as g,Wy as h,et as i,OF as j,kF as k,nA as l,A4 as m,iM as n,Mt as o,zy as p,HF as q,AF as r,jF as s,pf as t,fy as u,PF as v,IF as w,$F as x,al as y,Bt as z};
