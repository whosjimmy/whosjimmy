const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BSZGArSQ.js","./B1zJQImU.js","./CkLQ4ts3.js","./index.BeIzcci7.css","./xJQAd6lo.js","./DHMaF4X-.js","./Film.RcEDhm2u.css","./B4ad6F_1.js","./Bio.BcnN8BQQ.css","./Cxr09imb.js","./Contact.BEX4NZs-.css","./CX9gYIVc.js","./BfBwBt4b.js","./Gallery.B_nrwMtm.css","./Clocks.CkpqjaRE.css","./Bk2A6gcA.js","./index.BANqCETR.css","./CIkzHDyX.js","./DxIDV-H5.js","./C_rP3vrE.js","./Celebrities.CcuunyNG.css","./BVkyZRtG.js","./Clocks.vUUo-Xqj.css","./C5jOpqYX.js","./Film.KBkYyf_R.css","./gOd_GNqW.js","./index.ujuS6ZRo.css","./tH0yfPFp.js","./DD0aUdeA.js","./9WsWg0B2.js","./BQLcABa4.js","./DiYk8G18.js","./default.D3rkgctM.css","./xDoVEs-w.js","./iFL9GIXl.js","./error-404.CjGVuf6H.css","./CmNRB8Iy.js","./error-500.DFBAsgKS.css"])))=>i.map(i=>d[i]);
var iT=Object.defineProperty;var oT=(t,e,n)=>e in t?iT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Vi=(t,e,n)=>oT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Lh(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ve={},Ms=[],Yt=()=>{},aT=()=>!1,Vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mh=t=>t.startsWith("onUpdate:"),at=Object.assign,Vh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cT=Object.prototype.hasOwnProperty,Ie=(t,e)=>cT.call(t,e),le=Array.isArray,Vs=t=>di(t)==="[object Map]",fi=t=>di(t)==="[object Set]",hp=t=>di(t)==="[object Date]",lT=t=>di(t)==="[object RegExp]",de=t=>typeof t=="function",qe=t=>typeof t=="string",En=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",x_=t=>(Oe(t)||de(t))&&de(t.then)&&de(t.catch),N_=Object.prototype.toString,di=t=>N_.call(t),uT=t=>di(t).slice(8,-1),D_=t=>di(t)==="[object Object]",Fh=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=Lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hT=/-(\w)/g,an=Nc(t=>t.replace(hT,(e,n)=>n?n.toUpperCase():"")),fT=/\B([A-Z])/g,gs=Nc(t=>t.replace(fT,"-$1").toLowerCase()),Dc=Nc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ll=Nc(t=>t?`on${Dc(t)}`:""),Cr=(t,e)=>!Object.is(t,e),Us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},L_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},tc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},M_=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let fp;const V_=()=>fp||(fp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?gT(r):Lc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Oe(t))return t}const dT=/;(?![^(]*\))/g,pT=/:([^]+)/,mT=/\/\*[^]*?\*\//g;function gT(t){const e={};return t.replace(mT,"").split(dT).forEach(n=>{if(n){const r=n.split(pT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Mc(t){let e="";if(qe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Mc(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function _T(t){if(!t)return null;let{class:e,style:n}=t;return e&&!qe(e)&&(t.class=Mc(e)),n&&(t.style=Lc(n)),t}const yT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vT=Lh(yT);function F_(t){return!!t||t===""}function ET(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Fo(t[r],e[r]);return n}function Fo(t,e){if(t===e)return!0;let n=hp(t),r=hp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=En(t),r=En(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?ET(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fo(t[o],e[o]))return!1}}return String(t)===String(e)}function Uh(t,e){return t.findIndex(n=>Fo(n,e))}const U_=t=>!!(t&&t.__v_isRef===!0),wT=t=>qe(t)?t:t==null?"":le(t)||Oe(t)&&(t.toString===N_||!de(t.toString))?U_(t)?wT(t.value):JSON.stringify(t,j_,2):String(t),j_=(t,e)=>U_(e)?j_(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ml(r,i)+" =>"]=s,n),{})}:fi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ml(n))}:En(e)?Ml(e):Oe(e)&&!le(e)&&!D_(e)?String(e):e,Ml=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class B_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jh(t){return new B_(t)}function TT(t,e=Vt){e&&e.active&&e.effects.push(t)}function Uo(){return Vt}function nc(t){Vt&&Vt.cleanups.push(t)}let Zr;class Bh{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,TT(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Mr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(bT(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Vr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=vr,n=Zr;try{return vr=!0,Zr=this,this._runnings++,dp(this),this.fn()}finally{pp(this),this._runnings--,Zr=n,vr=e}}stop(){this.active&&(dp(this),pp(this),this.onStop&&this.onStop(),this.active=!1)}}function bT(t){return t.value}function dp(t){t._trackId++,t._depsLength=0}function pp(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)$_(t.deps[e],t);t.deps.length=t._depsLength}}function $_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let vr=!0,yu=0;const H_=[];function Mr(){H_.push(vr),vr=!1}function Vr(){const t=H_.pop();vr=t===void 0?!0:t}function $h(){yu++}function Hh(){for(yu--;!yu&&vu.length;)vu.shift()()}function q_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&$_(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const vu=[];function z_(t,e,n){$h();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&vu.push(r.scheduler)))}Hh()}const W_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},rc=new WeakMap,es=Symbol(""),Eu=Symbol("");function Nt(t,e,n){if(vr&&Zr){let r=rc.get(t);r||rc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=W_(()=>r.delete(n))),q_(Zr,s)}}function Mn(t,e,n,r,s,i){const o=rc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!En(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Fh(n)&&a.push(o.get("length")):(a.push(o.get(es)),Vs(t)&&a.push(o.get(Eu)));break;case"delete":le(t)||(a.push(o.get(es)),Vs(t)&&a.push(o.get(Eu)));break;case"set":Vs(t)&&a.push(o.get(es));break}$h();for(const l of a)l&&z_(l,4);Hh()}function IT(t,e){const n=rc.get(t);return n&&n.get(e)}const AT=Lh("__proto__,__v_isRef,__isVue"),K_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En)),mp=RT();function RT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ae(this);for(let i=0,o=this.length;i<o;i++)Nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mr(),$h();const r=Ae(this)[e].apply(this,n);return Hh(),Vr(),r}}),t}function ST(t){En(t)||(t=String(t));const e=Ae(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class G_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?jT:J_:i?X_:Y_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Ie(mp,n))return Reflect.get(mp,n,r);if(n==="hasOwnProperty")return ST}const a=Reflect.get(e,n,r);return(En(n)?K_.has(n):AT(n))||(s||Nt(e,"get",n),i)?a:Je(a)?o&&Fh(n)?a:a.value:Oe(a)?s?Z_(a):Fr(a):a}}class Q_ extends G_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Pr(i);if(!Gs(r)&&!Pr(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&Je(i)&&!Je(r))return l?!1:(i.value=r,!0)}const o=le(e)&&Fh(n)?Number(n)<e.length:Ie(e,n),a=Reflect.set(e,n,r,s);return e===Ae(s)&&(o?Cr(r,i)&&Mn(e,"set",n,r):Mn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!En(n)||!K_.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",le(e)?"length":es),Reflect.ownKeys(e)}}class CT extends G_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const PT=new Q_,kT=new CT,OT=new Q_(!0);const qh=t=>t,Vc=t=>Reflect.getPrototypeOf(t);function _a(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(Cr(e,i)&&Nt(s,"get",e),Nt(s,"get",i));const{has:o}=Vc(s),a=r?qh:n?Gh:po;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ya(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(Cr(t,s)&&Nt(r,"has",t),Nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function va(t,e=!1){return t=t.__v_raw,!e&&Nt(Ae(t),"iterate",es),Reflect.get(t,"size",t)}function gp(t,e=!1){!e&&!Gs(t)&&!Pr(t)&&(t=Ae(t));const n=Ae(this);return Vc(n).has.call(n,t)||(n.add(t),Mn(n,"add",t,t)),this}function _p(t,e,n=!1){!n&&!Gs(e)&&!Pr(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=Vc(r);let o=s.call(r,t);o||(t=Ae(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Cr(e,a)&&Mn(r,"set",t,e):Mn(r,"add",t,e),this}function yp(t){const e=Ae(this),{has:n,get:r}=Vc(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Mn(e,"delete",t,void 0),i}function vp(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&Mn(t,"clear",void 0,void 0),n}function Ea(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ae(o),l=e?qh:t?Gh:po;return!t&&Nt(a,"iterate",es),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function wa(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Vs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?qh:e?Gh:po;return!e&&Nt(i,"iterate",l?Eu:es),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xT(){const t={get(i){return _a(this,i)},get size(){return va(this)},has:ya,add:gp,set:_p,delete:yp,clear:vp,forEach:Ea(!1,!1)},e={get(i){return _a(this,i,!1,!0)},get size(){return va(this)},has:ya,add(i){return gp.call(this,i,!0)},set(i,o){return _p.call(this,i,o,!0)},delete:yp,clear:vp,forEach:Ea(!1,!0)},n={get(i){return _a(this,i,!0)},get size(){return va(this,!0)},has(i){return ya.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Ea(!0,!1)},r={get(i){return _a(this,i,!0,!0)},get size(){return va(this,!0)},has(i){return ya.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Ea(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wa(i,!1,!1),n[i]=wa(i,!0,!1),e[i]=wa(i,!1,!0),r[i]=wa(i,!0,!0)}),[t,n,e,r]}const[NT,DT,LT,MT]=xT();function zh(t,e){const n=e?t?MT:LT:t?DT:NT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const VT={get:zh(!1,!1)},FT={get:zh(!1,!0)},UT={get:zh(!0,!1)};const Y_=new WeakMap,X_=new WeakMap,J_=new WeakMap,jT=new WeakMap;function BT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $T(t){return t.__v_skip||!Object.isExtensible(t)?0:BT(uT(t))}function Fr(t){return Pr(t)?t:Wh(t,!1,PT,VT,Y_)}function On(t){return Wh(t,!1,OT,FT,X_)}function Z_(t){return Wh(t,!0,kT,UT,J_)}function Wh(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$T(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Er(t){return Pr(t)?Er(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function Gs(t){return!!(t&&t.__v_isShallow)}function ey(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Kh(t){return Object.isExtensible(t)&&L_(t,"__v_skip",!0),t}const po=t=>Oe(t)?Fr(t):t,Gh=t=>Oe(t)?Z_(t):t;class ty{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Bh(()=>e(this._value),()=>Xi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Cr(e._value,e._value=e.effect.run())&&Xi(e,4),Qh(e),e.effect._dirtyLevel>=2&&Xi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function HT(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Yt):(r=t.get,s=t.set),new ty(r,s,i||!s,n)}function Qh(t){var e;vr&&Zr&&(t=Ae(t),q_(Zr,(e=t.dep)!=null?e:t.dep=W_(()=>t.dep=void 0,t instanceof ty?t:void 0)))}function Xi(t,e=4,n,r){t=Ae(t);const s=t.dep;s&&z_(s,e)}function Je(t){return!!(t&&t.__v_isRef===!0)}function jt(t){return ny(t,!1)}function mo(t){return ny(t,!0)}function ny(t,e){return Je(t)?t:new qT(t,e)}class qT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:po(e)}get value(){return Qh(this),this._value}set value(e){const n=this.__v_isShallow||Gs(e)||Pr(e);e=n?e:Ae(e),Cr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:po(e),Xi(this,4))}}function De(t){return Je(t)?t.value:t}const zT={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ry(t){return Er(t)?t:new Proxy(t,zT)}class WT{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Qh(this),()=>Xi(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function KT(t){return new WT(t)}function GT(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=sy(t,n);return e}class QT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return IT(Ae(this._object),this._key)}}class YT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function XT(t,e,n){return Je(t)?t:de(t)?new YT(t):Oe(t)&&arguments.length>1?sy(t,e,n):jt(t)}function sy(t,e,n){const r=t[e];return Je(r)?r:new QT(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wr(t,e,n,r){try{return r?t(...r):t()}catch(s){pi(s,e,n)}}function Xt(t,e,n,r){if(de(t)){const s=wr(t,e,n,r);return s&&x_(s)&&s.catch(i=>{pi(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function pi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Mr(),wr(l,null,10,[t,o,a]),Vr();return}}JT(t,n,s,r)}function JT(t,e,n,r=!0){console.error(t)}let go=!1,wu=!1;const wt=[];let fn=0;const js=[];let or=null,Yr=0;const iy=Promise.resolve();let Yh=null;function In(t){const e=Yh||iy;return t?e.then(this?t.bind(this):t):e}function ZT(t){let e=fn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=_o(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Fc(t){(!wt.length||!wt.includes(t,go&&t.allowRecurse?fn+1:fn))&&(t.id==null?wt.push(t):wt.splice(ZT(t.id),0,t),oy())}function oy(){!go&&!wu&&(wu=!0,Yh=iy.then(ay))}function eb(t){const e=wt.indexOf(t);e>fn&&wt.splice(e,1)}function Tu(t){le(t)?js.push(...t):(!or||!or.includes(t,t.allowRecurse?Yr+1:Yr))&&js.push(t),oy()}function Ep(t,e,n=go?fn+1:0){for(;n<wt.length;n++){const r=wt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r()}}}function sc(t){if(js.length){const e=[...new Set(js)].sort((n,r)=>_o(n)-_o(r));if(js.length=0,or){or.push(...e);return}for(or=e,Yr=0;Yr<or.length;Yr++){const n=or[Yr];n.active!==!1&&n()}or=null,Yr=0}}const _o=t=>t.id==null?1/0:t.id,tb=(t,e)=>{const n=_o(t)-_o(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ay(t){wu=!1,go=!0,wt.sort(tb);try{for(fn=0;fn<wt.length;fn++){const e=wt[fn];e&&e.active!==!1&&wr(e,e.i,e.i?15:14)}}finally{fn=0,wt.length=0,sc(),go=!1,Yh=null,(wt.length||js.length)&&ay()}}let nt=null,Uc=null;function ic(t){const e=nt;return nt=t,Uc=t&&t.type.__scopeId||null,e}function RM(t){Uc=t}function SM(){Uc=null}function Xh(t,e=nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xp(-1);const i=ic(e);let o;try{o=t(...s)}finally{ic(i),r._d&&xp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function CM(t,e){if(nt===null)return t;const n=$c(nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ve]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&ur(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function hn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Mr(),Xt(l,n,8,[t.el,a,t,e]),Vr())}}const ar=Symbol("_leaveCb"),Ta=Symbol("_enterCb");function nb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jh(()=>{t.isMounted=!0}),Zh(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],cy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},ly=t=>{const e=t.subTree;return e.component?ly(e.component):e},rb={name:"BaseTransition",props:cy,setup(t,{slots:e}){const n=cf(),r=nb();return()=>{const s=e.default&&hy(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==ot){i=m;break}}const o=Ae(t),{mode:a}=o;if(r.isLeaving)return Vl(i);const l=wp(i);if(!l)return Vl(i);let u=bu(l,o,r,n,m=>u=m);yo(l,u);const h=n.subTree,d=h&&wp(h);if(d&&d.type!==ot&&!on(l,d)&&ly(n).type!==ot){const m=bu(d,o,r,n);if(yo(d,m),a==="out-in"&&l.type!==ot)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Vl(i);a==="in-out"&&l.type!==ot&&(m.delayLeave=(g,R,k)=>{const x=uy(r,d);x[String(d.key)]=d,g[ar]=()=>{R(),g[ar]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return i}}},sb=rb;function uy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:R,onLeaveCancelled:k,onBeforeAppear:x,onAppear:N,onAfterAppear:S,onAppearCancelled:b}=e,O=String(t.key),L=uy(n,t),M=(_,E)=>{_&&Xt(_,r,9,E)},w=(_,E)=>{const C=E[1];M(_,E),le(_)?_.every(A=>A.length<=1)&&C():_.length<=1&&C()},y={mode:o,persisted:a,beforeEnter(_){let E=l;if(!n.isMounted)if(i)E=x||l;else return;_[ar]&&_[ar](!0);const C=L[O];C&&on(t,C)&&C.el[ar]&&C.el[ar](),M(E,[_])},enter(_){let E=u,C=h,A=d;if(!n.isMounted)if(i)E=N||u,C=S||h,A=b||d;else return;let T=!1;const me=_[Ta]=ye=>{T||(T=!0,ye?M(A,[_]):M(C,[_]),y.delayedLeave&&y.delayedLeave(),_[Ta]=void 0)};E?w(E,[_,me]):me()},leave(_,E){const C=String(t.key);if(_[Ta]&&_[Ta](!0),n.isUnmounting)return E();M(m,[_]);let A=!1;const T=_[ar]=me=>{A||(A=!0,E(),me?M(k,[_]):M(R,[_]),_[ar]=void 0,L[C]===t&&delete L[C])};L[C]=t,g?w(g,[_,T]):T()},clone(_){const E=bu(_,e,n,r,s);return s&&s(E),E}};return y}function Vl(t){if(jo(t))return t=Fn(t),t.children=null,t}function wp(t){if(!jo(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function yo(t,e){t.shapeFlag&6&&t.component?yo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Rt?(o.patchFlag&128&&s++,r=r.concat(hy(o.children,e,a))):(e||o.type!==ot)&&r.push(a!=null?Fn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function qn(t,e){return de(t)?at({name:t.name},e,{setup:t}):t}const ts=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Tp(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,u,h=0;const d=()=>(h++,l=null,m()),m=()=>{let g;return l||(g=l=e().catch(R=>{if(R=R instanceof Error?R:new Error(String(R)),a)return new Promise((k,x)=>{a(R,()=>k(d()),()=>x(R),h+1)});throw R}).then(R=>g!==l&&l?l:(R&&(R.__esModule||R[Symbol.toStringTag]==="Module")&&(R=R.default),u=R,R)))};return qn({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return u},setup(){const g=et;if(u)return()=>Fl(u,g);const R=S=>{l=null,pi(S,g,13,!r)};if(o&&g.suspense||$o)return m().then(S=>()=>Fl(S,g)).catch(S=>(R(S),()=>r?He(r,{error:S}):null));const k=jt(!1),x=jt(),N=jt(!!s);return s&&setTimeout(()=>{N.value=!1},s),i!=null&&setTimeout(()=>{if(!k.value&&!x.value){const S=new Error(`Async component timed out after ${i}ms.`);R(S),x.value=S}},i),m().then(()=>{k.value=!0,g.parent&&jo(g.parent.vnode)&&(g.parent.effect.dirty=!0,Fc(g.parent.update))}).catch(S=>{R(S),x.value=S}),()=>{if(k.value&&u)return Fl(u,g);if(x.value&&r)return He(r,{error:x.value});if(n&&!N.value)return He(n)}}})}function Fl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=He(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const jo=t=>t.type.__isKeepAlive,ib={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=cf(),r=n.ctx;if(!r.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,m=d("div");r.activate=(S,b,O,L,M)=>{const w=S.component;u(S,b,O,0,a),l(w.vnode,S,b,O,w,a,L,S.slotScopeIds,M),st(()=>{w.isDeactivated=!1,w.a&&Us(w.a);const y=S.props&&S.props.onVnodeMounted;y&&kt(y,w.parent,S)},a)},r.deactivate=S=>{const b=S.component;cc(b.m),cc(b.a),u(S,m,null,1,a),st(()=>{b.da&&Us(b.da);const O=S.props&&S.props.onVnodeUnmounted;O&&kt(O,b.parent,S),b.isDeactivated=!0},a)};function g(S){Ul(S),h(S,n,a,!0)}function R(S){s.forEach((b,O)=>{const L=xu(b.type);L&&(!S||!S(L))&&k(O)})}function k(S){const b=s.get(S);b&&(!o||!on(b,o))?g(b):o&&Ul(o),s.delete(S),i.delete(S)}mn(()=>[t.include,t.exclude],([S,b])=>{S&&R(O=>Bi(S,O)),b&&R(O=>!Bi(b,O))},{flush:"post",deep:!0});let x=null;const N=()=>{x!=null&&(Cu(n.subTree.type)?st(()=>{s.set(x,ba(n.subTree))},n.subTree.suspense):s.set(x,ba(n.subTree)))};return Jh(N),dy(N),Zh(()=>{s.forEach(S=>{const{subTree:b,suspense:O}=n,L=ba(b);if(S.type===L.type&&S.key===L.key){Ul(L);const M=L.component.da;M&&st(M,O);return}g(S)})}),()=>{if(x=null,!e.default)return null;const S=e.default(),b=S[0];if(S.length>1)return o=null,S;if(!Ys(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let O=ba(b);if(O.type===ot)return o=null,O;const L=O.type,M=xu(ts(O)?O.type.__asyncResolved||{}:L),{include:w,exclude:y,max:_}=t;if(w&&(!M||!Bi(w,M))||y&&M&&Bi(y,M))return o=O,b;const E=O.key==null?L:O.key,C=s.get(E);return O.el&&(O=Fn(O),b.shapeFlag&128&&(b.ssContent=O)),x=E,C?(O.el=C.el,O.component=C.component,O.transition&&yo(O,O.transition),O.shapeFlag|=512,i.delete(E),i.add(E)):(i.add(E),_&&i.size>parseInt(_,10)&&k(i.values().next().value)),O.shapeFlag|=256,o=O,Cu(b.type)?b:O}}},ob=ib;function Bi(t,e){return le(t)?t.some(n=>Bi(n,e)):qe(t)?t.split(",").includes(e):lT(t)?t.test(e):!1}function ab(t,e){fy(t,"a",e)}function cb(t,e){fy(t,"da",e)}function fy(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jo(s.parent.vnode)&&lb(r,e,n,s),s=s.parent}}function lb(t,e,n,r){const s=jc(e,t,r,!0);py(()=>{Vh(r[e],s)},n)}function Ul(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ba(t){return t.shapeFlag&128?t.ssContent:t}function jc(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Mr();const a=Bo(n),l=Xt(e,n,t,o);return a(),Vr(),l});return r?s.unshift(i):s.push(i),i}}const zn=t=>(e,n=et)=>{(!$o||t==="sp")&&jc(t,(...r)=>e(...r),n)},ub=zn("bm"),Jh=zn("m"),hb=zn("bu"),dy=zn("u"),Zh=zn("bum"),py=zn("um"),fb=zn("sp"),db=zn("rtg"),pb=zn("rtc");function my(t,e=et){jc("ec",t,e)}const gy="components";function PM(t,e){return yy(gy,t,!0,e)||t}const _y=Symbol.for("v-ndc");function mb(t){return qe(t)?yy(gy,t,!1)||t:t||_y}function yy(t,e,n=!0,r=!1){const s=nt||et;if(s){const i=s.type;{const a=xu(i,!1);if(a&&(a===e||a===an(e)||a===Dc(an(e))))return i}const o=bp(s[t]||i[t],e)||bp(s.appContext[t],e);return!o&&r?i:o}}function bp(t,e){return t&&(t[e]||t[an(e)]||t[Dc(an(e))])}function kM(t,e,n,r){let s;const i=n;if(le(t)||qe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}function OM(t,e,n={},r,s){if(nt.isCE||nt.parent&&ts(nt.parent)&&nt.parent.isCE)return He("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),sn();const o=i&&vy(i(n)),a=Pn(Rt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),a}function vy(t){return t.some(e=>Ys(e)?!(e.type===ot||e.type===Rt&&!vy(e.children)):!0)?t:null}const Iu=t=>t?Wy(t)?$c(t):Iu(t.parent):null,Ji=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Iu(t.parent),$root:t=>Iu(t.root),$emit:t=>t.emit,$options:t=>ef(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Fc(t.update)}),$nextTick:t=>t.n||(t.n=In.bind(t.proxy)),$watch:t=>jb.bind(t)}),jl=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Ie(t,e),gb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(jl(r,e))return o[e]=1,r[e];if(s!==Ve&&Ie(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ie(u,e))return o[e]=3,i[e];if(n!==Ve&&Ie(n,e))return o[e]=4,n[e];Au&&(o[e]=0)}}const h=Ji[e];let d,m;if(h)return e==="$attrs"&&Nt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&Ie(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ie(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return jl(s,e)?(s[e]=n,!0):r!==Ve&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&Ie(t,o)||jl(e,o)||(a=i[0])&&Ie(a,o)||Ie(r,o)||Ie(Ji,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ip(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Au=!0;function _b(t){const e=ef(t),n=t.proxy,r=t.ctx;Au=!1,e.beforeCreate&&Ap(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:R,activated:k,deactivated:x,beforeDestroy:N,beforeUnmount:S,destroyed:b,unmounted:O,render:L,renderTracked:M,renderTriggered:w,errorCaptured:y,serverPrefetch:_,expose:E,inheritAttrs:C,components:A,directives:T,filters:me}=e;if(u&&yb(u,r,null),o)for(const te in o){const ie=o[te];de(ie)&&(r[te]=ie.bind(n))}if(s){const te=s.call(n,n);Oe(te)&&(t.data=Fr(te))}if(Au=!0,i)for(const te in i){const ie=i[te],je=de(ie)?ie.bind(n,n):de(ie.get)?ie.get.bind(n,n):Yt,en=!de(ie)&&de(ie.set)?ie.set.bind(n):Yt,Wt=Ze({get:je,set:en});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Be=>Wt.value=Be})}if(a)for(const te in a)Ey(a[te],r,n,te);if(l){const te=de(l)?l.call(n):l;Reflect.ownKeys(te).forEach(ie=>{rs(ie,te[ie])})}h&&Ap(h,t,"c");function J(te,ie){le(ie)?ie.forEach(je=>te(je.bind(n))):ie&&te(ie.bind(n))}if(J(ub,d),J(Jh,m),J(hb,g),J(dy,R),J(ab,k),J(cb,x),J(my,y),J(pb,M),J(db,w),J(Zh,S),J(py,O),J(fb,_),le(E))if(E.length){const te=t.exposed||(t.exposed={});E.forEach(ie=>{Object.defineProperty(te,ie,{get:()=>n[ie],set:je=>n[ie]=je})})}else t.exposed||(t.exposed={});L&&t.render===Yt&&(t.render=L),C!=null&&(t.inheritAttrs=C),A&&(t.components=A),T&&(t.directives=T)}function yb(t,e,n=Yt){le(t)&&(t=Ru(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Tt(s.from||r,s.default,!0):i=Tt(s.from||r):i=Tt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ap(t,e,n){Xt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ey(t,e,n,r){const s=r.includes(".")?Ly(n,r):()=>n[r];if(qe(t)){const i=e[t];de(i)&&mn(s,i)}else if(de(t))mn(s,t.bind(n));else if(Oe(t))if(le(t))t.forEach(i=>Ey(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&mn(s,i,t)}}function ef(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>oc(l,u,o,!0)),oc(l,e,o)),Oe(e)&&i.set(e,l),l}function oc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oc(t,i,n,!0),s&&s.forEach(o=>oc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vb={data:Rp,props:Sp,emits:Sp,methods:$i,computed:$i,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:$i,directives:$i,watch:wb,provide:Rp,inject:Eb};function Rp(t,e){return e?t?function(){return at(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Eb(t,e){return $i(Ru(t),Ru(e))}function Ru(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function $i(t,e){return t?at(Object.create(null),t,e):e}function Sp(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:at(Object.create(null),Ip(t),Ip(e??{})):e}function wb(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function wy(){return{app:null,config:{isNativeTag:aT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tb=0;function bb(t,e){return function(r,s=null){de(r)||(r=at({},r)),s!=null&&!Oe(s)&&(s=null);const i=wy(),o=new WeakSet;let a=!1;const l=i.app={_uid:Tb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gy,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...h)):de(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,d){if(!a){const m=He(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(m,u):t(m,u,d),a=!0,l._container=u,u.__vue_app__=l,$c(m.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=ns;ns=l;try{return u()}finally{ns=h}}};return l}}let ns=null;function rs(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Tt(t,e,n=!1){const r=et||nt;if(r||ns){const s=ns?ns._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function tf(){return!!(et||nt||ns)}const Ty={},by=()=>Object.create(Ty),Iy=t=>Object.getPrototypeOf(t)===Ty;function Ib(t,e,n,r=!1){const s={},i=by();t.propsDefaults=Object.create(null),Ay(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:On(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ab(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Bc(t.emitsOptions,m))continue;const g=e[m];if(l)if(Ie(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const R=an(m);s[R]=Su(l,a,R,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Ay(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ie(e,d)&&((h=gs(d))===d||!Ie(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Su(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ie(e,d))&&(delete i[d],u=!0)}u&&Mn(t.attrs,"set","")}function Ay(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fs(l))continue;const u=e[l];let h;s&&Ie(s,h=an(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Bc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=a||Ve;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Su(s,l,d,u[d],t,!Ie(u,d))}}return o}function Su(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Bo(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gs(n))&&(r=!0))}return r}const Rb=new WeakMap;function Ry(t,e,n=!1){const r=n?Rb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=d=>{l=!0;const[m,g]=Ry(d,e,!0);at(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Oe(t)&&r.set(t,Ms),Ms;if(le(i))for(let h=0;h<i.length;h++){const d=an(i[h]);Cp(d)&&(o[d]=Ve)}else if(i)for(const h in i){const d=an(h);if(Cp(d)){const m=i[h],g=o[d]=le(m)||de(m)?{type:m}:at({},m),R=g.type;let k=!1,x=!0;if(le(R))for(let N=0;N<R.length;++N){const S=R[N],b=de(S)&&S.name;if(b==="Boolean"){k=!0;break}else b==="String"&&(x=!1)}else k=de(R)&&R.name==="Boolean";g[0]=k,g[1]=x,(k||Ie(g,"default"))&&a.push(d)}}const u=[o,a];return Oe(t)&&r.set(t,u),u}function Cp(t){return t[0]!=="$"&&!Fs(t)}const Sy=t=>t[0]==="_"||t==="$stable",nf=t=>le(t)?t.map(Ft):[Ft(t)],Sb=(t,e,n)=>{if(e._n)return e;const r=Xh((...s)=>nf(e(...s)),n);return r._c=!1,r},Cy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sy(s))continue;const i=t[s];if(de(i))e[s]=Sb(s,i,r);else if(i!=null){const o=nf(i);e[s]=()=>o}}},Py=(t,e)=>{const n=nf(e);t.slots.default=()=>n},ky=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Cb=(t,e,n)=>{const r=t.slots=by();if(t.vnode.shapeFlag&32){const s=e._;s?(ky(r,e,n),n&&L_(r,"_",s,!0)):Cy(e,r)}else e&&Py(t,e)},Pb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ky(s,e,n):(i=!e.$stable,Cy(e,s)),o=e}else e&&(Py(t,e),o={default:1});if(i)for(const a in s)!Sy(a)&&o[a]==null&&delete s[a]};function ac(t,e,n,r,s=!1){if(le(t)){t.forEach((m,g)=>ac(m,e&&(le(e)?e[g]:e),n,r,s));return}if(ts(r)&&!s)return;const i=r.shapeFlag&4?$c(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Ve?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==l&&(qe(u)?(h[u]=null,Ie(d,u)&&(d[u]=null)):Je(u)&&(u.value=null)),de(l))wr(l,a,12,[o,h]);else{const m=qe(l),g=Je(l);if(m||g){const R=()=>{if(t.f){const k=m?Ie(d,l)?d[l]:h[l]:l.value;s?le(k)&&Vh(k,i):le(k)?k.includes(i)||k.push(i):m?(h[l]=[i],Ie(d,l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else m?(h[l]=o,Ie(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(R.id=-1,st(R,n)):R()}}}const kb=Symbol("_vte"),Ob=t=>t.__isTeleport;let Pp=!1;const Ss=()=>{Pp||(console.error("Hydration completed but contains mismatches."),Pp=!0)},xb=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Nb=t=>t.namespaceURI.includes("MathML"),Ia=t=>{if(xb(t))return"svg";if(Nb(t))return"mathml"},Aa=t=>t.nodeType===8;function Db(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(b,O)=>{if(!O.hasChildNodes()){n(null,b,O),sc(),O._vnode=b;return}d(O.firstChild,b,null,null,null),sc(),O._vnode=b},d=(b,O,L,M,w,y=!1)=>{y=y||!!O.dynamicChildren;const _=Aa(b)&&b.data==="[",E=()=>k(b,O,L,M,w,_),{type:C,ref:A,shapeFlag:T,patchFlag:me}=O;let ye=b.nodeType;O.el=b,me===-2&&(y=!1,O.dynamicChildren=null);let J=null;switch(C){case ss:ye!==3?O.children===""?(l(O.el=s(""),o(b),b),J=b):J=E():(b.data!==O.children&&(Ss(),b.data=O.children),J=i(b));break;case ot:S(b)?(J=i(b),N(O.el=b.content.firstChild,b,L)):ye!==8||_?J=E():J=i(b);break;case Zi:if(_&&(b=i(b),ye=b.nodeType),ye===1||ye===3){J=b;const te=!O.children.length;for(let ie=0;ie<O.staticCount;ie++)te&&(O.children+=J.nodeType===1?J.outerHTML:J.data),ie===O.staticCount-1&&(O.anchor=J),J=i(J);return _?i(J):J}else E();break;case Rt:_?J=R(b,O,L,M,w,y):J=E();break;default:if(T&1)(ye!==1||O.type.toLowerCase()!==b.tagName.toLowerCase())&&!S(b)?J=E():J=m(b,O,L,M,w,y);else if(T&6){O.slotScopeIds=w;const te=o(b);if(_?J=x(b):Aa(b)&&b.data==="teleport start"?J=x(b,b.data,"teleport end"):J=i(b),e(O,te,null,L,M,Ia(te),y),ts(O)){let ie;_?(ie=He(Rt),ie.anchor=J?J.previousSibling:te.lastChild):ie=b.nodeType===3?qy(""):He("div"),ie.el=b,O.component.subTree=ie}}else T&64?ye!==8?J=E():J=O.type.hydrate(b,O,L,M,w,y,t,g):T&128&&(J=O.type.hydrate(b,O,L,M,Ia(o(b)),w,y,t,d))}return A!=null&&ac(A,null,M,O),J},m=(b,O,L,M,w,y)=>{y=y||!!O.dynamicChildren;const{type:_,props:E,patchFlag:C,shapeFlag:A,dirs:T,transition:me}=O,ye=_==="input"||_==="option";if(ye||C!==-1){T&&hn(O,null,L,"created");let J=!1;if(S(b)){J=xy(M,me)&&L&&L.vnode.props&&L.vnode.props.appear;const ie=b.content.firstChild;J&&me.beforeEnter(ie),N(ie,b,L),O.el=b=ie}if(A&16&&!(E&&(E.innerHTML||E.textContent))){let ie=g(b.firstChild,O,b,L,M,w,y);for(;ie;){Ss();const je=ie;ie=ie.nextSibling,a(je)}}else A&8&&b.textContent!==O.children&&(Ss(),b.textContent=O.children);if(E){if(ye||!y||C&48){const ie=b.tagName.includes("-");for(const je in E)(ye&&(je.endsWith("value")||je==="indeterminate")||Vo(je)&&!Fs(je)||je[0]==="."||ie)&&r(b,je,null,E[je],void 0,L)}else if(E.onClick)r(b,"onClick",null,E.onClick,void 0,L);else if(C&4&&Er(E.style))for(const ie in E.style)E.style[ie]}let te;(te=E&&E.onVnodeBeforeMount)&&kt(te,L,O),T&&hn(O,null,L,"beforeMount"),((te=E&&E.onVnodeMounted)||T||J)&&Fy(()=>{te&&kt(te,L,O),J&&me.enter(b),T&&hn(O,null,L,"mounted")},M)}return b.nextSibling},g=(b,O,L,M,w,y,_)=>{_=_||!!O.dynamicChildren;const E=O.children,C=E.length;for(let A=0;A<C;A++){const T=_?E[A]:E[A]=Ft(E[A]),me=T.type===ss;if(b){if(me&&!_){let ye=E[A+1];ye&&(ye=Ft(ye)).type===ss&&(l(s(b.data.slice(T.children.length)),L,i(b)),b.data=T.children)}b=d(b,T,M,w,y,_)}else me&&!T.children?l(T.el=s(""),L):(Ss(),n(null,T,L,null,M,w,Ia(L),y))}return b},R=(b,O,L,M,w,y)=>{const{slotScopeIds:_}=O;_&&(w=w?w.concat(_):_);const E=o(b),C=g(i(b),O,E,L,M,w,y);return C&&Aa(C)&&C.data==="]"?i(O.anchor=C):(Ss(),l(O.anchor=u("]"),E,C),C)},k=(b,O,L,M,w,y)=>{if(Ss(),O.el=null,y){const C=x(b);for(;;){const A=i(b);if(A&&A!==C)a(A);else break}}const _=i(b),E=o(b);return a(b),n(null,O,E,_,L,M,Ia(E),w),_},x=(b,O="[",L="]")=>{let M=0;for(;b;)if(b=i(b),b&&Aa(b)&&(b.data===O&&M++,b.data===L)){if(M===0)return i(b);M--}return b},N=(b,O,L)=>{const M=O.parentNode;M&&M.replaceChild(b,O);let w=L;for(;w;)w.vnode.el===O&&(w.vnode.el=w.subTree.el=b),w=w.parent},S=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[h,d]}const st=Fy;function Lb(t){return Oy(t)}function Mb(t){return Oy(t,Db)}function Oy(t,e){const n=V_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=Yt,insertStaticContent:R}=t,k=(I,P,V,B=null,U=null,z=null,Q=void 0,W=null,G=!!P.dynamicChildren)=>{if(I===P)return;I&&!on(I,P)&&(B=j(I),Be(I,U,z,!0),I=null),P.patchFlag===-2&&(G=!1,P.dynamicChildren=null);const{type:q,ref:X,shapeFlag:ae}=P;switch(q){case ss:x(I,P,V,B);break;case ot:N(I,P,V,B);break;case Zi:I==null&&S(P,V,B,Q);break;case Rt:A(I,P,V,B,U,z,Q,W,G);break;default:ae&1?L(I,P,V,B,U,z,Q,W,G):ae&6?T(I,P,V,B,U,z,Q,W,G):(ae&64||ae&128)&&q.process(I,P,V,B,U,z,Q,W,G,ee)}X!=null&&U&&ac(X,I&&I.ref,z,P||I,!P)},x=(I,P,V,B)=>{if(I==null)r(P.el=a(P.children),V,B);else{const U=P.el=I.el;P.children!==I.children&&u(U,P.children)}},N=(I,P,V,B)=>{I==null?r(P.el=l(P.children||""),V,B):P.el=I.el},S=(I,P,V,B)=>{[I.el,I.anchor]=R(I.children,P,V,B,I.el,I.anchor)},b=({el:I,anchor:P},V,B)=>{let U;for(;I&&I!==P;)U=m(I),r(I,V,B),I=U;r(P,V,B)},O=({el:I,anchor:P})=>{let V;for(;I&&I!==P;)V=m(I),s(I),I=V;s(P)},L=(I,P,V,B,U,z,Q,W,G)=>{P.type==="svg"?Q="svg":P.type==="math"&&(Q="mathml"),I==null?M(P,V,B,U,z,Q,W,G):_(I,P,U,z,Q,W,G)},M=(I,P,V,B,U,z,Q,W)=>{let G,q;const{props:X,shapeFlag:ae,transition:oe,dirs:se}=I;if(G=I.el=o(I.type,z,X&&X.is,X),ae&8?h(G,I.children):ae&16&&y(I.children,G,null,B,U,Bl(I,z),Q,W),se&&hn(I,null,B,"created"),w(G,I,I.scopeId,Q,B),X){for(const Ce in X)Ce!=="value"&&!Fs(Ce)&&i(G,Ce,null,X[Ce],z,B);"value"in X&&i(G,"value",null,X.value,z),(q=X.onVnodeBeforeMount)&&kt(q,B,I)}se&&hn(I,null,B,"beforeMount");const ue=xy(U,oe);ue&&oe.beforeEnter(G),r(G,P,V),((q=X&&X.onVnodeMounted)||ue||se)&&st(()=>{q&&kt(q,B,I),ue&&oe.enter(G),se&&hn(I,null,B,"mounted")},U)},w=(I,P,V,B,U)=>{if(V&&g(I,V),B)for(let z=0;z<B.length;z++)g(I,B[z]);if(U){let z=U.subTree;if(P===z){const Q=U.vnode;w(I,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(I,P,V,B,U,z,Q,W,G=0)=>{for(let q=G;q<I.length;q++){const X=I[q]=W?cr(I[q]):Ft(I[q]);k(null,X,P,V,B,U,z,Q,W)}},_=(I,P,V,B,U,z,Q)=>{const W=P.el=I.el;let{patchFlag:G,dynamicChildren:q,dirs:X}=P;G|=I.patchFlag&16;const ae=I.props||Ve,oe=P.props||Ve;let se;if(V&&zr(V,!1),(se=oe.onVnodeBeforeUpdate)&&kt(se,V,P,I),X&&hn(P,I,V,"beforeUpdate"),V&&zr(V,!0),(ae.innerHTML&&oe.innerHTML==null||ae.textContent&&oe.textContent==null)&&h(W,""),q?E(I.dynamicChildren,q,W,V,B,Bl(P,U),z):Q||ie(I,P,W,null,V,B,Bl(P,U),z,!1),G>0){if(G&16)C(W,ae,oe,V,U);else if(G&2&&ae.class!==oe.class&&i(W,"class",null,oe.class,U),G&4&&i(W,"style",ae.style,oe.style,U),G&8){const ue=P.dynamicProps;for(let Ce=0;Ce<ue.length;Ce++){const be=ue[Ce],Ke=ae[be],Dt=oe[be];(Dt!==Ke||be==="value")&&i(W,be,Ke,Dt,U,V)}}G&1&&I.children!==P.children&&h(W,P.children)}else!Q&&q==null&&C(W,ae,oe,V,U);((se=oe.onVnodeUpdated)||X)&&st(()=>{se&&kt(se,V,P,I),X&&hn(P,I,V,"updated")},B)},E=(I,P,V,B,U,z,Q)=>{for(let W=0;W<P.length;W++){const G=I[W],q=P[W],X=G.el&&(G.type===Rt||!on(G,q)||G.shapeFlag&70)?d(G.el):V;k(G,q,X,null,B,U,z,Q,!0)}},C=(I,P,V,B,U)=>{if(P!==V){if(P!==Ve)for(const z in P)!Fs(z)&&!(z in V)&&i(I,z,P[z],null,U,B);for(const z in V){if(Fs(z))continue;const Q=V[z],W=P[z];Q!==W&&z!=="value"&&i(I,z,W,Q,U,B)}"value"in V&&i(I,"value",P.value,V.value,U)}},A=(I,P,V,B,U,z,Q,W,G)=>{const q=P.el=I?I.el:a(""),X=P.anchor=I?I.anchor:a("");let{patchFlag:ae,dynamicChildren:oe,slotScopeIds:se}=P;se&&(W=W?W.concat(se):se),I==null?(r(q,V,B),r(X,V,B),y(P.children||[],V,X,U,z,Q,W,G)):ae>0&&ae&64&&oe&&I.dynamicChildren?(E(I.dynamicChildren,oe,V,U,z,Q,W),(P.key!=null||U&&P===U.subTree)&&Ny(I,P,!0)):ie(I,P,V,X,U,z,Q,W,G)},T=(I,P,V,B,U,z,Q,W,G)=>{P.slotScopeIds=W,I==null?P.shapeFlag&512?U.ctx.activate(P,V,B,Q,G):me(P,V,B,U,z,Q,G):ye(I,P,G)},me=(I,P,V,B,U,z,Q)=>{const W=I.component=rI(I,B,U);if(jo(I)&&(W.ctx.renderer=ee),sI(W,!1,Q),W.asyncDep){if(U&&U.registerDep(W,J,Q),!I.el){const G=W.subTree=He(ot);N(null,G,P,V)}}else J(W,I,P,V,U,z,Q)},ye=(I,P,V)=>{const B=P.component=I.component;if(Wb(I,P,V))if(B.asyncDep&&!B.asyncResolved){te(B,P,V);return}else B.next=P,eb(B.update),B.effect.dirty=!0,B.update();else P.el=I.el,B.vnode=P},J=(I,P,V,B,U,z,Q)=>{const W=()=>{if(I.isMounted){let{next:X,bu:ae,u:oe,parent:se,vnode:ue}=I;{const Kt=Dy(I);if(Kt){X&&(X.el=ue.el,te(I,X,Q)),Kt.asyncDep.then(()=>{I.isUnmounted||W()});return}}let Ce=X,be;zr(I,!1),X?(X.el=ue.el,te(I,X,Q)):X=ue,ae&&Us(ae),(be=X.props&&X.props.onVnodeBeforeUpdate)&&kt(be,se,X,ue),zr(I,!0);const Ke=$l(I),Dt=I.subTree;I.subTree=Ke,k(Dt,Ke,d(Dt.el),j(Dt),I,U,z),X.el=Ke.el,Ce===null&&sf(I,Ke.el),oe&&st(oe,U),(be=X.props&&X.props.onVnodeUpdated)&&st(()=>kt(be,se,X,ue),U)}else{let X;const{el:ae,props:oe}=P,{bm:se,m:ue,parent:Ce}=I,be=ts(P);if(zr(I,!1),se&&Us(se),!be&&(X=oe&&oe.onVnodeBeforeMount)&&kt(X,Ce,P),zr(I,!0),ae&&ke){const Ke=()=>{I.subTree=$l(I),ke(ae,I.subTree,I,U,null)};be?P.type.__asyncLoader().then(()=>!I.isUnmounted&&Ke()):Ke()}else{const Ke=I.subTree=$l(I);k(null,Ke,V,B,I,U,z),P.el=Ke.el}if(ue&&st(ue,U),!be&&(X=oe&&oe.onVnodeMounted)){const Ke=P;st(()=>kt(X,Ce,Ke),U)}(P.shapeFlag&256||Ce&&ts(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&I.a&&st(I.a,U),I.isMounted=!0,P=V=B=null}},G=I.effect=new Bh(W,Yt,()=>Fc(q),I.scope),q=I.update=()=>{G.dirty&&G.run()};q.i=I,q.id=I.uid,zr(I,!0),q()},te=(I,P,V)=>{P.component=I;const B=I.vnode.props;I.vnode=P,I.next=null,Ab(I,P.props,B,V),Pb(I,P.children,V),Mr(),Ep(I),Vr()},ie=(I,P,V,B,U,z,Q,W,G=!1)=>{const q=I&&I.children,X=I?I.shapeFlag:0,ae=P.children,{patchFlag:oe,shapeFlag:se}=P;if(oe>0){if(oe&128){en(q,ae,V,B,U,z,Q,W,G);return}else if(oe&256){je(q,ae,V,B,U,z,Q,W,G);return}}se&8?(X&16&&Ct(q,U,z),ae!==q&&h(V,ae)):X&16?se&16?en(q,ae,V,B,U,z,Q,W,G):Ct(q,U,z,!0):(X&8&&h(V,""),se&16&&y(ae,V,B,U,z,Q,W,G))},je=(I,P,V,B,U,z,Q,W,G)=>{I=I||Ms,P=P||Ms;const q=I.length,X=P.length,ae=Math.min(q,X);let oe;for(oe=0;oe<ae;oe++){const se=P[oe]=G?cr(P[oe]):Ft(P[oe]);k(I[oe],se,V,null,U,z,Q,W,G)}q>X?Ct(I,U,z,!0,!1,ae):y(P,V,B,U,z,Q,W,G,ae)},en=(I,P,V,B,U,z,Q,W,G)=>{let q=0;const X=P.length;let ae=I.length-1,oe=X-1;for(;q<=ae&&q<=oe;){const se=I[q],ue=P[q]=G?cr(P[q]):Ft(P[q]);if(on(se,ue))k(se,ue,V,null,U,z,Q,W,G);else break;q++}for(;q<=ae&&q<=oe;){const se=I[ae],ue=P[oe]=G?cr(P[oe]):Ft(P[oe]);if(on(se,ue))k(se,ue,V,null,U,z,Q,W,G);else break;ae--,oe--}if(q>ae){if(q<=oe){const se=oe+1,ue=se<X?P[se].el:B;for(;q<=oe;)k(null,P[q]=G?cr(P[q]):Ft(P[q]),V,ue,U,z,Q,W,G),q++}}else if(q>oe)for(;q<=ae;)Be(I[q],U,z,!0),q++;else{const se=q,ue=q,Ce=new Map;for(q=ue;q<=oe;q++){const bt=P[q]=G?cr(P[q]):Ft(P[q]);bt.key!=null&&Ce.set(bt.key,q)}let be,Ke=0;const Dt=oe-ue+1;let Kt=!1,bi=0;const Qn=new Array(Dt);for(q=0;q<Dt;q++)Qn[q]=0;for(q=se;q<=ae;q++){const bt=I[q];if(Ke>=Dt){Be(bt,U,z,!0);continue}let Gt;if(bt.key!=null)Gt=Ce.get(bt.key);else for(be=ue;be<=oe;be++)if(Qn[be-ue]===0&&on(bt,P[be])){Gt=be;break}Gt===void 0?Be(bt,U,z,!0):(Qn[Gt-ue]=q+1,Gt>=bi?bi=Gt:Kt=!0,k(bt,P[Gt],V,null,U,z,Q,W,G),Ke++)}const ws=Kt?Vb(Qn):Ms;for(be=ws.length-1,q=Dt-1;q>=0;q--){const bt=ue+q,Gt=P[bt],Ts=bt+1<X?P[bt+1].el:B;Qn[q]===0?k(null,Gt,V,Ts,U,z,Q,W,G):Kt&&(be<0||q!==ws[be]?Wt(Gt,V,Ts,2):be--)}}},Wt=(I,P,V,B,U=null)=>{const{el:z,type:Q,transition:W,children:G,shapeFlag:q}=I;if(q&6){Wt(I.component.subTree,P,V,B);return}if(q&128){I.suspense.move(P,V,B);return}if(q&64){Q.move(I,P,V,ee);return}if(Q===Rt){r(z,P,V);for(let ae=0;ae<G.length;ae++)Wt(G[ae],P,V,B);r(I.anchor,P,V);return}if(Q===Zi){b(I,P,V);return}if(B!==2&&q&1&&W)if(B===0)W.beforeEnter(z),r(z,P,V),st(()=>W.enter(z),U);else{const{leave:ae,delayLeave:oe,afterLeave:se}=W,ue=()=>r(z,P,V),Ce=()=>{ae(z,()=>{ue(),se&&se()})};oe?oe(z,ue,Ce):Ce()}else r(z,P,V)},Be=(I,P,V,B=!1,U=!1)=>{const{type:z,props:Q,ref:W,children:G,dynamicChildren:q,shapeFlag:X,patchFlag:ae,dirs:oe,cacheIndex:se}=I;if(ae===-2&&(U=!1),W!=null&&ac(W,null,V,I,!0),se!=null&&(P.renderCache[se]=void 0),X&256){P.ctx.deactivate(I);return}const ue=X&1&&oe,Ce=!ts(I);let be;if(Ce&&(be=Q&&Q.onVnodeBeforeUnmount)&&kt(be,P,I),X&6)un(I.component,V,B);else{if(X&128){I.suspense.unmount(V,B);return}ue&&hn(I,null,P,"beforeUnmount"),X&64?I.type.remove(I,P,V,ee,B):q&&!q.hasOnce&&(z!==Rt||ae>0&&ae&64)?Ct(q,P,V,!1,!0):(z===Rt&&ae&384||!U&&X&16)&&Ct(G,P,V),B&&$e(I)}(Ce&&(be=Q&&Q.onVnodeUnmounted)||ue)&&st(()=>{be&&kt(be,P,I),ue&&hn(I,null,P,"unmounted")},V)},$e=I=>{const{type:P,el:V,anchor:B,transition:U}=I;if(P===Rt){Gn(V,B);return}if(P===Zi){O(I);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:W}=U,G=()=>Q(V,z);W?W(I.el,z,G):G()}else z()},Gn=(I,P)=>{let V;for(;I!==P;)V=m(I),s(I),I=V;s(P)},un=(I,P,V)=>{const{bum:B,scope:U,update:z,subTree:Q,um:W,m:G,a:q}=I;cc(G),cc(q),B&&Us(B),U.stop(),z&&(z.active=!1,Be(Q,I,P,V)),W&&st(W,P),st(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ct=(I,P,V,B=!1,U=!1,z=0)=>{for(let Q=z;Q<I.length;Q++)Be(I[Q],P,V,B,U)},j=I=>{if(I.shapeFlag&6)return j(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=m(I.anchor||I.el),V=P&&P[kb];return V?m(V):P};let Z=!1;const Y=(I,P,V)=>{I==null?P._vnode&&Be(P._vnode,null,null,!0):k(P._vnode||null,I,P,null,null,null,V),P._vnode=I,Z||(Z=!0,Ep(),sc(),Z=!1)},ee={p:k,um:Be,m:Wt,r:$e,mt:me,mc:y,pc:ie,pbc:E,n:j,o:t};let Ee,ke;return e&&([Ee,ke]=e(ee)),{render:Y,hydrate:Ee,createApp:bb(Y,Ee)}}function Bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ny(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=cr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ny(o,a)),a.type===ss&&(a.el=o.el)}}function Vb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Dy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dy(e)}function cc(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Fb=Symbol.for("v-scx"),Ub=()=>Tt(Fb);function xM(t,e){return rf(t,null,e)}const Ra={};function mn(t,e,n){return rf(t,e,n)}function rf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ve){if(e&&i){const M=e;e=(...w)=>{M(...w),L()}}const l=et,u=M=>r===!0?M:ur(M,r===!1?1:void 0);let h,d=!1,m=!1;if(Je(t)?(h=()=>t.value,d=Gs(t)):Er(t)?(h=()=>u(t),d=!0):le(t)?(m=!0,d=t.some(M=>Er(M)||Gs(M)),h=()=>t.map(M=>{if(Je(M))return M.value;if(Er(M))return u(M);if(de(M))return wr(M,l,2)})):de(t)?e?h=()=>wr(t,l,2):h=()=>(g&&g(),Xt(t,l,3,[R])):h=Yt,e&&r){const M=h;h=()=>ur(M())}let g,R=M=>{g=b.onStop=()=>{wr(M,l,4),g=b.onStop=void 0}},k;if($o)if(R=Yt,e?n&&Xt(e,l,3,[h(),m?[]:void 0,R]):h(),s==="sync"){const M=Ub();k=M.__watcherHandles||(M.__watcherHandles=[])}else return Yt;let x=m?new Array(t.length).fill(Ra):Ra;const N=()=>{if(!(!b.active||!b.dirty))if(e){const M=b.run();(r||d||(m?M.some((w,y)=>Cr(w,x[y])):Cr(M,x)))&&(g&&g(),Xt(e,l,3,[M,x===Ra?void 0:m&&x[0]===Ra?[]:x,R]),x=M)}else b.run()};N.allowRecurse=!!e;let S;s==="sync"?S=N:s==="post"?S=()=>st(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),S=()=>Fc(N));const b=new Bh(h,Yt,S),O=Uo(),L=()=>{b.stop(),O&&Vh(O.effects,b)};return e?n?N():x=b.run():s==="post"?st(b.run.bind(b),l&&l.suspense):b.run(),k&&k.push(L),L}function jb(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Ly(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Bo(this),a=rf(s,i.bind(r),n);return o(),a}function Ly(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ur(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))ur(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)ur(t[r],e,n);else if(fi(t)||Vs(t))t.forEach(r=>{ur(r,e,n)});else if(D_(t)){for(const r in t)ur(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ur(t[r],e,n)}return t}const Bb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${gs(e)}Modifiers`];function $b(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&Bb(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>qe(h)?h.trim():h)),o.number&&(s=n.map(tc)));let a,l=r[a=Ll(e)]||r[a=Ll(an(e))];!l&&i&&(l=r[a=Ll(gs(e))]),l&&Xt(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(u,t,6,s)}}function My(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=My(u,e,!0);h&&(a=!0,at(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):at(o,i),Oe(t)&&r.set(t,o),o)}function Bc(t,e){return!t||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,gs(e))||Ie(t,e))}function $l(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:R,inheritAttrs:k}=t,x=ic(t);let N,S;try{if(n.shapeFlag&4){const O=s||r,L=O;N=Ft(u.call(L,O,h,d,g,m,R)),S=a}else{const O=e;N=Ft(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),S=e.props?a:qb(a)}}catch(O){eo.length=0,pi(O,t,1),N=He(ot)}let b=N;if(S&&k!==!1){const O=Object.keys(S),{shapeFlag:L}=b;O.length&&L&7&&(i&&O.some(Mh)&&(S=zb(S,i)),b=Fn(b,S,!1,!0))}return n.dirs&&(b=Fn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),N=b,ic(x),N}function Hb(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ys(s)){if(s.type!==ot||s.children==="v-if"){if(n)return;n=s}}else return}return n}const qb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vo(n))&&((e||(e={}))[n]=t[n]);return e},zb=(t,e)=>{const n={};for(const r in t)(!Mh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?kp(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==r[m]&&!Bc(u,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?kp(r,o,u):!0:!!o;return!1}function kp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Bc(n,i))return!0}return!1}function sf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Cu=t=>t.__isSuspense;let Pu=0;const Kb={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)Gb(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Qb(t,e,n,r,s,o,a,l,u)}},hydrate:Yb,normalize:Xb},of=Kb;function vo(t,e){const n=t.props&&t.props[e];de(n)&&n()}function Gb(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),m=t.suspense=Vy(t,s,r,e,d,n,i,o,a,l);u(null,m.pendingBranch=t.ssContent,d,null,r,m,i,o),m.deps>0?(vo(t,"onPending"),vo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Bs(m,t.ssFallback)):m.resolve(!1,!0)}function Qb(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const m=e.ssContent,g=e.ssFallback,{activeBranch:R,pendingBranch:k,isInFallback:x,isHydrating:N}=d;if(k)d.pendingBranch=m,on(m,k)?(l(k,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():x&&(N||(l(R,g,n,r,s,null,i,o,a),Bs(d,g)))):(d.pendingId=Pu++,N?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),x?(l(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(R,g,n,r,s,null,i,o,a),Bs(d,g))):R&&on(m,R)?(l(R,m,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(R&&on(m,R))l(R,m,n,r,s,d,i,o,a),Bs(d,m);else if(vo(e,"onPending"),d.pendingBranch=m,m.shapeFlag&512?d.pendingId=m.component.suspenseId:d.pendingId=Pu++,l(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:S,pendingId:b}=d;S>0?setTimeout(()=>{d.pendingId===b&&d.fallback(g)},S):S===0&&d.fallback(g)}}function Vy(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m,um:g,n:R,o:{parentNode:k,remove:x}}=u;let N;const S=Jb(t);S&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const b=t.props?M_(t.props.timeout):void 0,O=i,L={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Pu++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,w=!1){const{vnode:y,activeBranch:_,pendingBranch:E,pendingId:C,effects:A,parentComponent:T,container:me}=L;let ye=!1;L.isHydrating?L.isHydrating=!1:M||(ye=_&&E.transition&&E.transition.mode==="out-in",ye&&(_.transition.afterLeave=()=>{C===L.pendingId&&(m(E,me,i===O?R(_):i,0),Tu(A))}),_&&(k(_.el)!==L.hiddenContainer&&(i=R(_)),g(_,T,L,!0)),ye||m(E,me,i,0)),Bs(L,E),L.pendingBranch=null,L.isInFallback=!1;let J=L.parent,te=!1;for(;J;){if(J.pendingBranch){J.effects.push(...A),te=!0;break}J=J.parent}!te&&!ye&&Tu(A),L.effects=[],S&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),vo(y,"onResolve")},fallback(M){if(!L.pendingBranch)return;const{vnode:w,activeBranch:y,parentComponent:_,container:E,namespace:C}=L;vo(w,"onFallback");const A=R(y),T=()=>{L.isInFallback&&(d(null,M,E,A,_,null,C,a,l),Bs(L,M))},me=M.transition&&M.transition.mode==="out-in";me&&(y.transition.afterLeave=T),L.isInFallback=!0,g(y,_,null,!0),me||T()},move(M,w,y){L.activeBranch&&m(L.activeBranch,M,w,y),L.container=M},next(){return L.activeBranch&&R(L.activeBranch)},registerDep(M,w,y){const _=!!L.pendingBranch;_&&L.deps++;const E=M.vnode.el;M.asyncDep.catch(C=>{pi(C,M,0)}).then(C=>{if(M.isUnmounted||L.isUnmounted||L.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:A}=M;Ou(M,C,!1),E&&(A.el=E);const T=!E&&M.subTree.el;w(M,A,k(E||M.subTree.el),E?null:R(M.subTree),L,o,y),T&&x(T),sf(M,A.el),_&&--L.deps===0&&L.resolve()})},unmount(M,w){L.isUnmounted=!0,L.activeBranch&&g(L.activeBranch,n,M,w),L.pendingBranch&&g(L.pendingBranch,n,M,w)}};return L}function Yb(t,e,n,r,s,i,o,a,l){const u=e.suspense=Vy(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function Xb(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Op(r?n.default:n),t.ssFallback=r?Op(n.fallback):He(ot)}function Op(t){let e;if(de(t)){const n=Qs&&t._c;n&&(t._d=!1,sn()),t=t(),n&&(t._d=!0,e=xt,Uy())}return le(t)&&(t=Hb(t)),t=Ft(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Fy(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Tu(t)}function Bs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,sf(r,s))}function Jb(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Rt=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),Zi=Symbol.for("v-stc"),eo=[];let xt=null;function sn(t=!1){eo.push(xt=t?null:[])}function Uy(){eo.pop(),xt=eo[eo.length-1]||null}let Qs=1;function xp(t){Qs+=t,t<0&&xt&&(xt.hasOnce=!0)}function jy(t){return t.dynamicChildren=Qs>0?xt||Ms:null,Uy(),Qs>0&&xt&&xt.push(t),t}function Zb(t,e,n,r,s,i){return jy($y(t,e,n,r,s,i,!0))}function Pn(t,e,n,r,s){return jy(He(t,e,n,r,s,!0))}function Ys(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const By=({key:t})=>t??null,Fa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Je(t)||de(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function $y(t,e=null,n=null,r=0,s=null,i=t===Rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&By(e),ref:e&&Fa(e),scopeId:Uc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return a?(af(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),Qs>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const He=eI;function eI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_y)&&(t=ot),Ys(t)){const a=Fn(t,e,!0);return n&&af(a,n),Qs>0&&!i&&xt&&(a.shapeFlag&6?xt[xt.indexOf(t)]=a:xt.push(a)),a.patchFlag=-2,a}if(cI(t)&&(t=t.__vccOpts),e){e=Hy(e);let{class:a,style:l}=e;a&&!qe(a)&&(e.class=Mc(a)),Oe(l)&&(ey(l)&&!le(l)&&(l=at({},l)),e.style=Lc(l))}const o=qe(t)?1:Cu(t)?128:Ob(t)?64:Oe(t)?4:de(t)?2:0;return $y(t,e,n,r,s,o,i,!0)}function Hy(t){return t?ey(t)||Iy(t)?at({},t):t:null}function Fn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?zy(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&By(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Fa(e)):[i,Fa(e)]:Fa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&yo(h,l.clone(h)),h}function qy(t=" ",e=0){return He(ss,null,t,e)}function NM(t,e){const n=He(Zi,null,t);return n.staticCount=e,n}function DM(t="",e=!1){return e?(sn(),Pn(ot,null,t)):He(ot,null,t)}function Ft(t){return t==null||typeof t=="boolean"?He(ot):le(t)?He(Rt,null,t.slice()):typeof t=="object"?cr(t):He(ss,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function af(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),af(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Iy(e)?e._ctx=nt:s===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),r&64?(n=16,e=[qy(e)]):n=8);t.children=e,t.shapeFlag|=n}function zy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Mc([e.class,r.class]));else if(s==="style")e.style=Lc([e.style,r.style]);else if(Vo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function kt(t,e,n,r=null){Xt(t,e,7,[n,r])}const tI=wy();let nI=0;function rI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||tI,i={uid:nI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new B_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ry(r,s),emitsOptions:My(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$b.bind(null,i),t.ce&&t.ce(i),i}let et=null;const cf=()=>et||nt;let lc,ku;{const t=V_(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};lc=e("__VUE_INSTANCE_SETTERS__",n=>et=n),ku=e("__VUE_SSR_SETTERS__",n=>$o=n)}const Bo=t=>{const e=et;return lc(t),t.scope.on(),()=>{t.scope.off(),lc(e)}},Np=()=>{et&&et.scope.off(),lc(null)};function Wy(t){return t.vnode.shapeFlag&4}let $o=!1;function sI(t,e=!1,n=!1){e&&ku(e);const{props:r,children:s}=t.vnode,i=Wy(t);Ib(t,r,i,e),Cb(t,s,n);const o=i?iI(t,e):void 0;return e&&ku(!1),o}function iI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gb);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?aI(t):null,i=Bo(t);Mr();const o=wr(r,t,0,[t.props,s]);if(Vr(),i(),x_(o)){if(o.then(Np,Np),e)return o.then(a=>{Ou(t,a,e)}).catch(a=>{pi(a,t,0)});t.asyncDep=o}else Ou(t,o,e)}else Ky(t,e)}function Ou(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=ry(e)),Ky(t,n)}let Dp;function Ky(t,e,n){const r=t.type;if(!t.render){if(!e&&Dp&&!r.render){const s=r.template||ef(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=at(at({isCustomElement:i,delimiters:a},o),l);r.render=Dp(s,u)}}t.render=r.render||Yt}{const s=Bo(t);Mr();try{_b(t)}finally{Vr(),s()}}}const oI={get(t,e){return Nt(t,"get",""),t[e]}};function aI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,oI),slots:t.slots,emit:t.emit,expose:e}}function $c(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ry(Kh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ji)return Ji[n](t)},has(e,n){return n in e||n in Ji}})):t.proxy}function xu(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function cI(t){return de(t)&&"__vccOpts"in t}const Ze=(t,e)=>HT(t,e,$o);function St(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!le(e)?Ys(e)?He(t,null,[e]):He(t,e):He(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ys(n)&&(n=[n]),He(t,e,n))}const Gy="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const lI="http://www.w3.org/2000/svg",uI="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,Lp=Cn&&Cn.createElement("template"),hI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(lI,t):e==="mathml"?Cn.createElementNS(uI,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lp.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Lp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},er="transition",Fi="animation",Eo=Symbol("_vtc"),Hc=(t,{slots:e})=>St(sb,fI(t),e);Hc.displayName="Transition";const Qy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Hc.props=at({},cy,Qy);const Wr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Mp=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function fI(t){const e={};for(const A in t)A in Qy||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,R=dI(s),k=R&&R[0],x=R&&R[1],{onBeforeEnter:N,onEnter:S,onEnterCancelled:b,onLeave:O,onLeaveCancelled:L,onBeforeAppear:M=N,onAppear:w=S,onAppearCancelled:y=b}=e,_=(A,T,me)=>{Kr(A,T?h:a),Kr(A,T?u:o),me&&me()},E=(A,T)=>{A._isLeaving=!1,Kr(A,d),Kr(A,g),Kr(A,m),T&&T()},C=A=>(T,me)=>{const ye=A?w:S,J=()=>_(T,A,me);Wr(ye,[T,J]),Vp(()=>{Kr(T,A?l:i),tr(T,A?h:a),Mp(ye)||Fp(T,r,k,J)})};return at(e,{onBeforeEnter(A){Wr(N,[A]),tr(A,i),tr(A,o)},onBeforeAppear(A){Wr(M,[A]),tr(A,l),tr(A,u)},onEnter:C(!1),onAppear:C(!0),onLeave(A,T){A._isLeaving=!0;const me=()=>E(A,T);tr(A,d),tr(A,m),gI(),Vp(()=>{A._isLeaving&&(Kr(A,d),tr(A,g),Mp(O)||Fp(A,r,x,me))}),Wr(O,[A,me])},onEnterCancelled(A){_(A,!1),Wr(b,[A])},onAppearCancelled(A){_(A,!0),Wr(y,[A])},onLeaveCancelled(A){E(A),Wr(L,[A])}})}function dI(t){if(t==null)return null;if(Oe(t))return[Hl(t.enter),Hl(t.leave)];{const e=Hl(t);return[e,e]}}function Hl(t){return M_(t)}function tr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Eo]||(t[Eo]=new Set)).add(e)}function Kr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Eo];n&&(n.delete(e),n.size||(t[Eo]=void 0))}function Vp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let pI=0;function Fp(t,e,n,r){const s=t._endId=++pI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=mI(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,m)}function mI(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${er}Delay`),i=r(`${er}Duration`),o=Up(s,i),a=r(`${Fi}Delay`),l=r(`${Fi}Duration`),u=Up(a,l);let h=null,d=0,m=0;e===er?o>0&&(h=er,d=o,m=i.length):e===Fi?u>0&&(h=Fi,d=u,m=l.length):(d=Math.max(o,u),h=d>0?o>u?er:Fi:null,m=h?h===er?i.length:l.length:0);const g=h===er&&/\b(transform|all)(,|$)/.test(r(`${er}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function Up(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>jp(n)+jp(t[r])))}function jp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function gI(){return document.body.offsetHeight}function _I(t,e,n){const r=t[Eo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bp=Symbol("_vod"),yI=Symbol("_vsh"),vI=Symbol(""),EI=/(^|;)\s*display\s*:/;function wI(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ua(r,a,"")}else for(const o in e)n[o]==null&&Ua(r,o,"");for(const o in n)o==="display"&&(i=!0),Ua(r,o,n[o])}else if(s){if(e!==n){const o=r[vI];o&&(n+=";"+o),r.cssText=n,i=EI.test(n)}}else e&&t.removeAttribute("style");Bp in t&&(t[Bp]=i?r.display:"",t[yI]&&(r.display="none"))}const $p=/\s*!important$/;function Ua(t,e,n){if(le(n))n.forEach(r=>Ua(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=TI(t,e);$p.test(n)?t.setProperty(gs(r),n.replace($p,""),"important"):t[r]=n}}const Hp=["Webkit","Moz","ms"],ql={};function TI(t,e){const n=ql[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return ql[e]=r;r=Dc(r);for(let s=0;s<Hp.length;s++){const i=Hp[s]+r;if(i in t)return ql[e]=i}return e}const qp="http://www.w3.org/1999/xlink";function zp(t,e,n,r,s,i=vT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qp,e.slice(6,e.length)):t.setAttributeNS(qp,e,n):n==null||i&&!F_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":En(n)?String(n):n)}function bI(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=F_(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function hr(t,e,n,r){t.addEventListener(e,n,r)}function II(t,e,n,r){t.removeEventListener(e,n,r)}const Wp=Symbol("_vei");function AI(t,e,n,r,s=null){const i=t[Wp]||(t[Wp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=RI(e);if(r){const u=i[e]=PI(r,s);hr(t,a,u,l)}else o&&(II(t,a,o,l),i[e]=void 0)}}const Kp=/(?:Once|Passive|Capture)$/;function RI(t){let e;if(Kp.test(t)){e={};let r;for(;r=t.match(Kp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let zl=0;const SI=Promise.resolve(),CI=()=>zl||(SI.then(()=>zl=0),zl=Date.now());function PI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(kI(r,n.value),e,5,[r])};return n.value=t,n.attached=CI(),n}function kI(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,OI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?_I(t,r,o):e==="style"?wI(t,n,r):Vo(e)?Mh(e)||AI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xI(t,e,r,o))?(bI(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zp(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zp(t,e,r,o))};function xI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gp(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gp(e)&&qe(n)?!1:e in t}const Xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Us(e,n):e};function NI(t){t.target.composing=!0}function Qp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vn=Symbol("_assign"),LM={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Vn]=Xs(s);const i=r||s.props&&s.props.type==="number";hr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=tc(a)),t[Vn](a)}),n&&hr(t,"change",()=>{t.value=t.value.trim()}),e||(hr(t,"compositionstart",NI),hr(t,"compositionend",Qp),hr(t,"change",Qp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Vn]=Xs(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?tc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},MM={deep:!0,created(t,e,n){t[Vn]=Xs(n),hr(t,"change",()=>{const r=t._modelValue,s=wo(t),i=t.checked,o=t[Vn];if(le(r)){const a=Uh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(fi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Yy(t,i))})},mounted:Yp,beforeUpdate(t,e,n){t[Vn]=Xs(n),Yp(t,e,n)}};function Yp(t,{value:e,oldValue:n},r){t._modelValue=e,le(e)?t.checked=Uh(e,r.props.value)>-1:fi(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Fo(e,Yy(t,!0)))}const VM={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=fi(e);hr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?tc(wo(o)):wo(o));t[Vn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,In(()=>{t._assigning=!1})}),t[Vn]=Xs(r)},mounted(t,{value:e,modifiers:{number:n}}){Xp(t,e)},beforeUpdate(t,e,n){t[Vn]=Xs(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Xp(t,e)}};function Xp(t,e,n){const r=t.multiple,s=le(e);if(!(r&&!s&&!fi(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=wo(a);if(r)if(s){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Uh(e,l)>-1}else a.selected=e.has(l);else if(Fo(wo(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wo(t){return"_value"in t?t._value:t.value}function Yy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const DI=["ctrl","shift","alt","meta"],LI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>DI.some(n=>t[`${n}Key`]&&!e.includes(n))},FM=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=LI[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Xy=at({patchProp:OI},hI);let to,Jp=!1;function MI(){return to||(to=Lb(Xy))}function VI(){return to=Jp?to:Mb(Xy),Jp=!0,to}const FI=(...t)=>{const e=MI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zy(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Jy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},UI=(...t)=>{const e=VI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zy(r);if(s)return n(s,!0,Jy(s))},e};function Jy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zy(t){return qe(t)?document.querySelector(t):t}const jI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,BI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,$I=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function HI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){qI(t);return}return e}function qI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function To(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!$I.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(jI.test(t)||BI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,HI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const zI=/#/g,WI=/&/g,KI=/\//g,GI=/=/g,lf=/\+/g,QI=/%5e/gi,YI=/%60/gi,XI=/%7c/gi,JI=/%20/gi;function ZI(t){return encodeURI(""+t).replace(XI,"|")}function Nu(t){return ZI(typeof t=="string"?t:JSON.stringify(t)).replace(lf,"%2B").replace(JI,"+").replace(zI,"%23").replace(WI,"%26").replace(YI,"`").replace(QI,"^").replace(KI,"%2F")}function Wl(t){return Nu(t).replace(GI,"%3D")}function uc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function eA(t){return uc(t.replace(lf," "))}function tA(t){return uc(t.replace(lf," "))}function nA(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=eA(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=tA(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function rA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Wl(t)}=${Nu(n)}`).join("&"):`${Wl(t)}=${Nu(e)}`:Wl(t)}function sA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>rA(e,t[e])).filter(Boolean).join("&")}const iA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,oA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,aA=/^([/\\]\s*){2,}[^/\\]/,cA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,lA=/\/$|\/\?|\/#/,uA=/^\.?\//;function _s(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?iA.test(t):oA.test(t)||(e.acceptRelative?aA.test(t):!1)}function hA(t){return!!t&&cA.test(t)}function Du(t="",e){return e?lA.test(t):t.endsWith("/")}function uf(t="",e){if(!e)return(Du(t)?t.slice(0,-1):t)||"/";if(!Du(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Lu(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Du(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function fA(t=""){return t.startsWith("/")}function Zp(t=""){return fA(t)?t:"/"+t}function dA(t,e){if(tv(e)||_s(t))return t;const n=uf(e);return t.startsWith(n)?t:hf(n,t)}function em(t,e){if(tv(e))return t;const n=uf(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function ev(t,e){const n=gA(t),r={...nA(n.search),...e};return n.search=sA(r),_A(n)}function tv(t){return!t||t==="/"}function pA(t){return t&&t!=="/"}function hf(t,...e){let n=t||"";for(const r of e.filter(s=>pA(s)))if(n){const s=r.replace(uA,"");n=Lu(n)+s}else n=r;return n}function nv(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,m]of h.split(e).entries())if(!(!m||m===".")){if(m===".."){if(r.length===1&&_s(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+m;continue}r.push(m),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function mA(t,e,n={}){return n.trailingSlash||(t=Lu(t),e=Lu(e)),n.leadingSlash||(t=Zp(t),e=Zp(e)),n.encoding||(t=uc(t),e=uc(e)),t===e}const rv=Symbol.for("ufo:protocolRelative");function gA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,m=""]=n;return{protocol:d.toLowerCase(),pathname:m,href:d+m,auth:"",host:"",search:"",hash:""}}if(!_s(t,{acceptRelative:!0}))return tm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=tm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[rv]:!r}}function tm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function _A(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[rv]?(t.protocol||"")+"//":"")+s+i+e+n+r}class yA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function vA(t){var l,u,h,d,m;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((m=t.request)==null?void 0:m.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new yA(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,R]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[R]}});return a}const EA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function nm(t="GET"){return EA.has(t.toUpperCase())}function wA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const TA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),bA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function IA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return bA.test(e)?"json":TA.has(e)||e.startsWith("text/")?"text":"blob"}function AA(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const RA=new Set([408,409,425,429,500,502,503,504]),SA=new Set([101,204,205,304]);function sv(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=nm(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):RA.has(d))){const m=a.options.retryDelay||0;return m>0&&await new Promise(g=>setTimeout(g,m)),i(a.request,{...a.options,retry:h-1})}}const u=vA(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:AA(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=dA(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=ev(h.request,{...h.options.params,...h.options.query}))),h.options.body&&nm(h.options.method)&&(wA(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const R=new r;d=setTimeout(()=>R.abort(),h.options.timeout),h.options.signal=R.signal}try{h.response=await e(h.request,h.options)}catch(R){return h.error=R,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{d&&clearTimeout(d)}if(h.response.body&&!SA.has(h.response.status)&&h.options.method!=="HEAD"){const R=(h.options.parseResponse?"json":h.options.responseType)||IA(h.response.headers.get("content-type")||"");switch(R){case"json":{const k=await h.response.text(),x=h.options.parseResponse||To;h.response._data=x(k);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[R]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>sv({...t,defaults:{...t.defaults,...a}}),o}const ff=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),CA=ff.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),PA=ff.Headers,kA=ff.AbortController,OA=sv({fetch:CA,Headers:PA,AbortController:kA}),xA=OA,NA=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},hc=NA().app,DA=()=>hc.baseURL,LA=()=>hc.buildAssetsDir,df=(...t)=>nv(iv(),LA(),...t),iv=(...t)=>{const e=hc.cdnURL||hc.baseURL;return t.length?nv(e,...t):e};globalThis.__buildAssetsURL=df,globalThis.__publicAssetsURL=iv;globalThis.$fetch||(globalThis.$fetch=xA.create({baseURL:DA()}));function Mu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Mu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const MA={run:t=>t()},VA=()=>MA,ov=typeof console.createTask<"u"?console.createTask:VA;function FA(t,e){const n=e.shift(),r=ov(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function UA(t,e){const n=e.shift(),r=ov(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Kl(t,e){for(const n of[...t])n(e)}class jA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Mu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Mu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(FA,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(UA,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Kl(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Kl(this._after,s)}):(this._after&&s&&Kl(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function av(){return new jA}function BA(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Vu.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Vu.delete(u)}}}}function $A(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=BA({...t,...r})),e[n],e[n]}}}const fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},rm="__unctx__",HA=fc[rm]||(fc[rm]=$A()),qA=(t,e={})=>HA.get(t,e),sm="__unctx_async_handlers__",Vu=fc[sm]||(fc[sm]=new Set);function bo(t){const e=[];for(const s of Vu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Fu={name:"page",mode:"out-in"},zA=!1,WA=!1,UM={componentName:"NuxtLink"},KA=null,GA="#__nuxt",cv="nuxt-app",im=36e5;function lv(t=cv){return qA(t,{asyncContext:!1})}const QA="__nuxt_plugin";function YA(t){let e=0;const n={_name:cv,_scope:jh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.12.4"},get vue(){return n.vueApp.version}},payload:On({data:On({}),state:Fr({}),once:new Set,_errors:On({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Uo()?n._scope.run(()=>om(n,s)):om(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:On({}),_payloadRevivers:{},...t};if(window.__NUXT__)for(const s in window.__NUXT__)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],window.__NUXT__[s]);break;default:n.payload[s]=window.__NUXT__[s]}n.hooks=av(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;Sa(n,o,i),Sa(n.vueApp.config.globalProperties,o,i)},Sa(n.vueApp,"$nuxt",n),Sa(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Qe;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function XA(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function JA(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function ZA(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(m=>m._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=JA(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([m,g])=>{m.has(l._name)&&(m.delete(l._name),m.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(m=>i.push(m))):await d}}for(const l of e)XA(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function qt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[QA]:!0,_name:e})}function om(t,e,n){const r=()=>e();return lv(t._name).set(t),t.vueApp.runWithContext(r)}function e1(t){var n;let e;return tf()&&(e=(n=cf())==null?void 0:n.appContext.app.$nuxt),e=e||lv(t).tryUse(),e||null}function Qe(t){const e=e1(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function mi(t){return Qe().$config}function Sa(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function t1(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||n1;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=r1(u,s)}i=a+1}return n}function n1(t){return t.includes("%")?decodeURIComponent(t):t}function r1(t,e){try{return e(t)}catch{return t}}const Ca=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function am(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Ca.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Ca.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ca.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ca.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!s1(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function s1(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const cm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function lm(t,e){e?e={...cm,...e}:e=cm;const n=uv(e);return n.dispatch(t),n.toString()}const i1=Object.freeze(["prototype","__proto__","constructor"]);function uv(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!um(s)&&(h=i1),t.excludeKeys&&(u=u.filter(m=>!t.excludeKeys(m)),h=h.filter(m=>!t.excludeKeys(m))),r("object:"+(u.length+h.length)+":");const d=m=>{this.dispatch(m),r(":"),t.excludeValues||this.dispatch(s[m]),r(",")};for(const m of u)d(m);for(const m of h)d(m)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=uv(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),um(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const hv="[native code] }",o1=hv.length;function um(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-o1)===hv}function a1(t,e,n={}){return t===e||lm(t,n)===lm(e,n)}function c1(t,e){return{ctx:{table:t},matchAll:n=>dv(n,t)}}function fv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,fv(s)])):new Map(Object.entries(t[n]));return e}function l1(t){return c1(fv(t))}function dv(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of hm(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of hm(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...dv(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function hm(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Gl(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Uu(t,e,n=".",r){if(!Gl(e))return Uu(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Gl(o)&&Gl(s[i])?s[i]=Uu(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function u1(t){return(...e)=>e.reduce((n,r)=>Uu(n,r,"",t),{})}const pv=u1();function h1(t,e){try{return e in t}catch{return!1}}var f1=Object.defineProperty,d1=(t,e,n)=>e in t?f1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Gr=(t,e,n)=>(d1(t,typeof e!="symbol"?e+"":e,n),n);class ju extends Error{constructor(e,n={}){super(e,n),Gr(this,"statusCode",500),Gr(this,"fatal",!1),Gr(this,"unhandled",!1),Gr(this,"statusMessage"),Gr(this,"data"),Gr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:$u(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=mv(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Gr(ju,"__h3_error__",!0);function Bu(t){if(typeof t=="string")return new ju(t);if(p1(t))return t;const e=new ju(t.message??t.statusMessage??"",{cause:t.cause||t});if(h1(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=$u(t.statusCode,e.statusCode):t.status&&(e.statusCode=$u(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;mv(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function p1(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const m1=/[^\u0009\u0020-\u007E]/g;function mv(t=""){return t.replace(m1,"")}function $u(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const gv=Symbol("layout-meta"),Ho=Symbol("route"),Ht=()=>{var t;return(t=Qe())==null?void 0:t.$router},pf=()=>tf()?Tt(Ho,Qe()._route):Qe()._route;function jM(t){return t}const g1=()=>{try{if(Qe()._processingMiddleware)return!0}catch{return!1}return!1},BM=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?_1(t):Ht().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,m])=>m!==void 0).map(([d,m])=>`${d.toLowerCase()}=${m}`).join(", ");return open(n,l,h),Promise.resolve()}const r=_s(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&hA(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=g1();if(!s&&i)return t;const o=Ht(),a=Qe();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function _1(t){return ev(t.path||"",t.query||{})+(t.hash||"")}const _v="__nuxt_error",qc=()=>XT(Qe().payload,"error"),Ns=t=>{const e=zc(t);try{const n=Qe(),r=qc();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},y1=async(t={})=>{const e=Qe(),n=qc();e.callHook("app:error:cleared",t),t.redirect&&await Ht().replace(t.redirect),n.value=KA},v1=t=>!!t&&typeof t=="object"&&_v in t,zc=t=>{const e=Bu(t);return Object.defineProperty(e,_v,{value:!0,configurable:!1,writable:!1}),e},E1=-1,w1=-2,T1=-3,b1=-4,I1=-5,A1=-6;function R1(t,e){return S1(JSON.parse(t),e)}function S1(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===E1)return;if(i===T1)return NaN;if(i===b1)return 1/0;if(i===I1)return-1/0;if(i===A1)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const m=Object.create(null);r[i]=m;for(let g=1;g<a.length;g+=2)m[a[g]]=s(a[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==w1&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}function C1(t){return Array.isArray(t)?t:[t]}const P1=["title","titleTemplate","script","style","noscript"],ja=["base","meta","link","style","script","noscript"],k1=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],O1=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],yv=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],x1=typeof window<"u";function mf(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function fm(t){return t._h||mf(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function vv(t,e){const{props:n,tag:r}=t;if(O1.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return`${r}:${i}:${o}`}return!1}function dm(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function N1(t,e,n){const r={tag:t,props:await Ev(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return yv.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||P1.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function D1(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>s.trim()).filter(Boolean).join(n)}async function Ev(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=D1(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!yv.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const L1=10;async function M1(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&k1.includes(n)).forEach(([n,r])=>{const s=C1(r);e.push(...s.map(i=>N1(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<L1)+r,n))}const pm={base:-10,title:10},mm={critical:-80,high:-10,low:20};function dc(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in pm&&(e=pm[t.tag]),typeof n=="string"&&n in mm?e+mm[n]:e)}const V1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],gm=["onload","onerror","onabort","onprogress","onloadstart"],nr="%separator";function Ba(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,u)=>l&&l[u]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,u)=>`${a}${u}`).trim())}),t.includes(nr)&&(t.endsWith(nr)&&(t=t.slice(0,-nr.length).trim()),t.startsWith(nr)&&(t=t.slice(nr.length).trim()),t=t.replace(new RegExp(`\\${nr}\\s*\\${nr}`,"g"),nr),t=Ba(t,{separator:n},n)),t}async function wv(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(d=>({tag:d,id:ja.includes(d.tag)?fm(d):d.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const d of["body","head"]){const m=(h=n[d])==null?void 0:h.children,g=[];for(const R of[...m].filter(k=>ja.includes(k.tagName.toLowerCase()))){const k={tag:R.tagName.toLowerCase(),props:await Ev(R.getAttributeNames().reduce((S,b)=>({...S,[b]:R.getAttribute(b)}),{})),innerHTML:R.innerHTML};let x=1,N=vv(k);for(;N&&g.find(S=>S._d===N);)N=`${N}:${x++}`;k._d=N||void 0,g.push(k),i.elMap[R.getAttribute("data-hid")||fm(k)]=R}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(d,m,g){const R=`${d}:${m}`;i.sideEffects[R]=g,delete i.pendingSideEffects[R]}function a({id:d,$el:m,tag:g}){const R=g.tag.endsWith("Attrs");i.elMap[d]=m,R||(["textContent","innerHTML"].forEach(k=>{g[k]&&g[k]!==m[k]&&(m[k]=g[k])}),o(d,"el",()=>{var k;(k=i.elMap[d])==null||k.remove(),delete i.elMap[d]}));for(const[k,x]of Object.entries(g._eventHandlers||{}))m.getAttribute(`data-${k}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:m).addEventListener(k.replace("on",""),x.bind(m)),m.setAttribute(`data-${k}`,""));Object.entries(g.props).forEach(([k,x])=>{const N=`attr:${k}`;if(k==="class")for(const S of(x||"").split(" ").filter(Boolean))R&&o(d,`${N}:${S}`,()=>m.classList.remove(S)),!m.classList.contains(S)&&m.classList.add(S);else if(k==="style")for(const S of(x||"").split(";").filter(Boolean)){const[b,...O]=S.split(":").map(L=>L.trim());o(d,`${N}:${b}`,()=>{m.style.removeProperty(b)}),m.style.setProperty(b,O.join(":"))}else m.getAttribute(k)!==x&&m.setAttribute(k,x===!0?"":String(x)),R&&o(d,N,()=>m.removeAttribute(k))})}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of s){const{tag:m,shouldRender:g,id:R}=d;if(g){if(m.tag==="title"){n.title=m.textContent;continue}d.$el=d.$el||i.elMap[R],d.$el?a(d):ja.includes(m.tag)&&l.push(d)}}for(const d of l){const m=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),a(d),u[m]=u[m]||n.createDocumentFragment(),u[m].appendChild(d.$el)}for(const d of s)await t.hooks.callHook("dom:renderTag",d,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(i.pendingSideEffects).forEach(d=>d()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function F1(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await wv(t,e),delete t._domUpdatePromise,r()}))}function U1(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){F1(i,t)}}}}}const j1=["templateParams","htmlAttrs","bodyAttrs"],B1={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=vv(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&j1.includes(r.tag)&&(a="merge"),a==="merge"){const l=i.props;["class","style"].forEach(u=>{l[u]&&(r.props[u]?(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),r.props[u]=`${l[u]} ${r.props[u]}`):r.props[u]=l[u])}),e[s].props={...l,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(dc(r)>dc(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(ja.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},$1={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},H1=["script","link","bodyAttrs"],q1=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(r=>H1.includes(r.tag)))Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(t.ssr&&gm.includes(r)?n.props[r]=`this.dataset.${r}fired = true`:delete n.props[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||mf(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var r,s;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>gm.some(a=>`${a}fired`===o))){const o=i.replace("fired","");(s=(r=n._eventHandlers)==null?void 0:r[o])==null||s.call(e,new Event(o.replace("on","")))}}}}),z1=["link","style","script","noscript"],W1={hooks:{"tag:normalise":({tag:t})=>{t.key&&z1.includes(t.tag)&&(t.props["data-hid"]=t._h=mf(t.key))}}},K1={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of V1)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>dc(n)-dc(r))}}},G1={meta:"content",link:"href",htmlAttrs:"lang"},Q1=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,r=(a=n.find(l=>l.tag==="title"))==null?void 0:a.textContent,s=n.findIndex(l=>l.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=Ba(i.pageTitle||r||"",i,o);for(const l of n.filter(u=>u.processTemplateParams!==!1)){const u=G1[l.tag];u&&typeof l.props[u]=="string"?l.props[u]=Ba(l.props[u],i,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(h=>{typeof l[h]=="string"&&(l[h]=Ba(l[h],i,o))})}t._templateParams=i,t._separator=o,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),Y1={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=dm(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=dm(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},X1={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Tv;function J1(t={}){const e=Z1(t);return e.use(U1()),Tv=e}function _m(t,e){return!t||t==="server"&&e||t==="client"&&!e}function Z1(t={}){const e=av();e.addHooks(t.hooks||{}),t.document=t.document||(x1?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),_m(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return _m(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),e.callHook("entries:updated",a),r()},patch(d){i=i.map(m=>(m._i===h._i&&(m.input=h.input=d),m)),r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await M1(u)){const m={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",m),l.tags.push(m.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[B1,$1,q1,W1,K1,Q1,Y1,X1,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function eR(){return Tv}const tR=Gy.startsWith("3");function nR(t){return typeof t=="function"?t():De(t)}function Hu(t,e=""){if(t instanceof Promise)return t;const n=nR(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Hu(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,De(s)]:[r,Hu(s,r)])):n}const rR={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Hu(e.input)}}},bv="usehead";function sR(t){return{install(n){tR&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(bv,t))}}.install}function iR(t={}){t.domDelayFn=t.domDelayFn||(n=>In(()=>setTimeout(()=>n(),0)));const e=J1(t);return e.use(rR),e.install=sR(e),e}const qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zu="__unhead_injection_handler__";function oR(t){qu[zu]=t}function $M(){if(zu in qu)return qu[zu]();const t=Tt(bv);return t||eR()}let $a,Ha;function aR(){return $a=$fetch(df(`builds/meta/${mi().app.buildId}.json`),{responseType:"json"}),$a.then(t=>{Ha=l1(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),$a}function Wc(){return $a||aR()}async function gf(t){if(await Wc(),!Ha)return console.error("[nuxt] Error creating app manifest matcher.",Ha),{};try{return pv({},...Ha.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function ym(t,e={}){const n=await lR(t,e),r=Qe(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=Av(t).then(i=>i?Iv(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const cR="_payload.json";async function lR(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||_s(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=mi(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Av(t)?i:r.app.baseURL;return hf(o,n.pathname,cR+(s?`?${s}`:""))}async function Iv(t){const e=fetch(t).then(n=>n.text().then(Rv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Av(t=pf().path){if(t=uf(t),(await Wc()).prerendered.includes(t))return!0;const n=await gf(t);return!!n.prerender&&!n.redirect}let Pa=null;async function uR(){if(Pa)return Pa;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Rv(t.textContent||""),n=t.dataset.src?await Iv(t.dataset.src):void 0;return Pa={...e,...n,...window.__NUXT__},Pa}async function Rv(t){return await R1(t,Qe()._payloadRevivers)}function hR(t,e){Qe()._payloadRevivers[t]=e}const vm={NuxtError:t=>zc(t),EmptyShallowRef:t=>mo(t==="_"?void 0:t==="0n"?BigInt(0):To(t)),EmptyRef:t=>jt(t==="_"?void 0:t==="0n"?BigInt(0):To(t)),ShallowRef:t=>mo(t),ShallowReactive:t=>On(t),Ref:t=>jt(t),Reactive:t=>Fr(t)},fR=qt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in vm)hR(r,vm[r]);Object.assign(t.payload,([e,n]=bo(()=>t.runWithContext(uR)),e=await e,n(),e)),window.__NUXT__=t.payload}}),dR=[],pR=qt({name:"nuxt:head",enforce:"pre",setup(t){const e=iR({plugins:dR});oR(()=>Qe().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await wv(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof document<"u";function mR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Ql(t,e){const n={};for(const r in e){const s=e[r];n[r]=cn(s)?s.map(t):t(s)}return n}const no=()=>{},cn=Array.isArray,Sv=/#/g,gR=/&/g,_R=/\//g,yR=/=/g,vR=/\?/g,Cv=/\+/g,ER=/%5B/g,wR=/%5D/g,Pv=/%5E/g,TR=/%60/g,kv=/%7B/g,bR=/%7C/g,Ov=/%7D/g,IR=/%20/g;function _f(t){return encodeURI(""+t).replace(bR,"|").replace(ER,"[").replace(wR,"]")}function AR(t){return _f(t).replace(kv,"{").replace(Ov,"}").replace(Pv,"^")}function Wu(t){return _f(t).replace(Cv,"%2B").replace(IR,"+").replace(Sv,"%23").replace(gR,"%26").replace(TR,"`").replace(kv,"{").replace(Ov,"}").replace(Pv,"^")}function RR(t){return Wu(t).replace(yR,"%3D")}function SR(t){return _f(t).replace(Sv,"%23").replace(vR,"%3F")}function CR(t){return t==null?"":SR(t).replace(_R,"%2F")}function Io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const PR=/\/$/,kR=t=>t.replace(PR,"");function Yl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=DR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Io(o)}}function OR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Em(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Js(e.matched[r],n.matched[s])&&xv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!NR(t[n],e[n]))return!1;return!0}function NR(t,e){return cn(t)?wm(t,e):cn(e)?wm(e,t):t===e}function wm(t,e){return cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function DR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ao;(function(t){t.pop="pop",t.push="push"})(Ao||(Ao={}));var ro;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ro||(ro={}));function LR(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kR(t)}const MR=/^[^#]+#/;function VR(t,e){return t.replace(MR,"#")+e}function FR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Kc=()=>({left:window.scrollX,top:window.scrollY});function UR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=FR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tm(t,e){return(history.state?history.state.position-e:-1)+t}const Ku=new Map;function jR(t,e){Ku.set(t,e)}function BR(t){const e=Ku.get(t);return Ku.delete(t),e}let $R=()=>location.protocol+"//"+location.host;function Nv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Em(l,"")}return Em(n,t)+r+s}function HR(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=Nv(t,location),R=n.value,k=e.value;let x=0;if(m){if(n.value=g,e.value=m,o&&o===R){o=null;return}x=k?m.position-k.position:0}else r(g);s.forEach(N=>{N(n.value,R,{delta:x,type:Ao.pop,direction:x?x>0?ro.forward:ro.back:ro.unknown})})};function l(){o=n.value}function u(m){s.push(m);const g=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:Kc()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function bm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Kc():null}}function qR(t){const{history:e,location:n}=window,r={value:Nv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:$R()+t+l;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(l,u){const h=Pe({},e.state,bm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Pe({},s.value,e.state,{forward:l,scroll:Kc()});i(h.current,h,!0);const d=Pe({},bm(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Dv(t){t=LR(t);const e=qR(t),n=HR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:VR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zR(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Dv(t)}function WR(t){return typeof t=="string"||t&&typeof t=="object"}function Lv(t){return typeof t=="string"||typeof t=="symbol"}const Mv=Symbol("");var Im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Im||(Im={}));function Zs(t,e){return Pe(new Error,{type:t,[Mv]:!0},e)}function Sn(t,e){return t instanceof Error&&Mv in t&&(e==null||!!(t.type&e))}const Am="[^/]+?",KR={sensitive:!1,strict:!1,start:!0,end:!0},GR=/[.+*?^${}()[\]/\\]/g;function QR(t,e){const n=Pe({},KR,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(GR,"\\$&"),g+=40;else if(m.type===1){const{value:R,repeatable:k,optional:x,regexp:N}=m;i.push({name:R,repeatable:k,optional:x});const S=N||Am;if(S!==Am){g+=10;try{new RegExp(`(${S})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${S}): `+O.message)}}let b=k?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(b=x&&u.length<2?`(?:/${b})`:"/"+b),x&&(b+="?"),s+=b,g+=20,x&&(g+=-8),k&&(g+=-20),S===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",R=i[m-1];d[R.name]=g&&R.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:x}=g,N=R in u?u[R]:"";if(cn(N)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const S=cn(N)?N.join("/"):N;if(!S)if(x)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);h+=S}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function YR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Vv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=YR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Rm(r))return 1;if(Rm(s))return-1}return s.length-r.length}function Rm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XR={type:0,value:""},JR=/[a-zA-Z0-9_]/;function ZR(t){if(!t)return[[]];if(t==="/")return[[XR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:JR.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function eS(t,e,n){const r=QR(ZR(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tS(t,e){const n=[],r=new Map;e=Pm({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const R=!g,k=nS(d);k.aliasOf=g&&g.record;const x=Pm(e,d),N=[k];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of O)N.push(Pe({},k,{components:g?g.record.components:k.components,path:L,aliasOf:g?g.record:k}))}let S,b;for(const O of N){const{path:L}=O;if(m&&L[0]!=="/"){const M=m.record.path,w=M[M.length-1]==="/"?"":"/";O.path=m.record.path+(L&&w+L)}if(S=eS(O,m,x),g?g.alias.push(S):(b=b||S,b!==S&&b.alias.push(S),R&&d.name&&!Cm(S)&&o(d.name)),Fv(S)&&l(S),k.children){const M=k.children;for(let w=0;w<M.length;w++)i(M[w],S,g&&g.children[w])}g=g||S}return b?()=>{o(b)}:no}function o(d){if(Lv(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const m=iS(d,n);n.splice(m,0,d),d.record.name&&!Cm(d)&&r.set(d.record.name,d)}function u(d,m){let g,R={},k,x;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Zs(1,{location:d});x=g.record.name,R=Pe(Sm(m.params,g.keys.filter(b=>!b.optional).concat(g.parent?g.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),d.params&&Sm(d.params,g.keys.map(b=>b.name))),k=g.stringify(R)}else if(d.path!=null)k=d.path,g=n.find(b=>b.re.test(k)),g&&(R=g.parse(k),x=g.record.name);else{if(g=m.name?r.get(m.name):n.find(b=>b.re.test(m.path)),!g)throw Zs(1,{location:d,currentLocation:m});x=g.record.name,R=Pe({},m.params,d.params),k=g.stringify(R)}const N=[];let S=g;for(;S;)N.unshift(S.record),S=S.parent;return{name:x,path:k,params:R,matched:N,meta:sS(N)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Sm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function nS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Cm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sS(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Pm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function iS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Vv(t,e[i])<0?r=i:n=i+1}const s=oS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function oS(t){let e=t;for(;e=e.parent;)if(Fv(e)&&Vv(t,e)===0)return e}function Fv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function aS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cv," "),o=i.indexOf("="),a=Io(o<0?i:i.slice(0,o)),l=o<0?null:Io(i.slice(o+1));if(a in e){let u=e[a];cn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function km(t){let e="";for(let n in t){const r=t[n];if(n=RR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(r)?r.map(i=>i&&Wu(i)):[r&&Wu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const lS=Symbol(""),Om=Symbol(""),yf=Symbol(""),vf=Symbol(""),Gu=Symbol("");function Ui(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function lr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=m=>{m===!1?l(Zs(4,{from:n,to:e})):m instanceof Error?l(m):WR(m)?l(Zs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function Xl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(uS(l)){const h=(l.__vccOpts||l)[e];h&&i.push(lr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=mR(h)?h.default:h;o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&lr(g,n,r,o,a,s)()}))}}return i}function uS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xm(t){const e=Tt(yf),n=Tt(vf),r=Ze(()=>{const l=De(t.to);return e.resolve(l)}),s=Ze(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(Js.bind(null,h));if(m>-1)return m;const g=Nm(l[u-2]);return u>1&&Nm(h)===g&&d[d.length-1].path!==g?d.findIndex(Js.bind(null,l[u-2])):m}),i=Ze(()=>s.value>-1&&pS(n.params,r.value.params)),o=Ze(()=>s.value>-1&&s.value===n.matched.length-1&&xv(n.params,r.value.params));function a(l={}){return dS(l)?e[De(t.replace)?"replace":"push"](De(t.to)).catch(no):Promise.resolve()}return{route:r,href:Ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const hS=qn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xm,setup(t,{slots:e}){const n=Fr(xm(t)),{options:r}=Tt(yf),s=Ze(()=>({[Dm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Dm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:St("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),fS=hS;function dS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!cn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Nm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dm=(t,e,n)=>t??e??n,mS=qn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Tt(Gu),s=Ze(()=>t.route||r.value),i=Tt(Om,0),o=Ze(()=>{let u=De(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ze(()=>s.value.matched[o.value]);rs(Om,Ze(()=>o.value+1)),rs(lS,a),rs(Gu,s);const l=jt();return mn(()=>[l.value,a.value,t.name],([u,h,d],[m,g,R])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Js(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,m=d&&d.components[h];if(!m)return Lm(n.default,{Component:m,route:u});const g=d.props[h],R=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=St(m,Pe({},R,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Lm(n.default,{Component:x,route:u})||x}}});function Lm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Uv=mS;function gS(t){const e=tS(t.routes,t),n=t.parseQuery||aS,r=t.stringifyQuery||km,s=t.history,i=Ui(),o=Ui(),a=Ui(),l=mo(nn);let u=nn;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ql.bind(null,j=>""+j),d=Ql.bind(null,CR),m=Ql.bind(null,Io);function g(j,Z){let Y,ee;return Lv(j)?(Y=e.getRecordMatcher(j),ee=Z):ee=j,e.addRoute(ee,Y)}function R(j){const Z=e.getRecordMatcher(j);Z&&e.removeRoute(Z)}function k(){return e.getRoutes().map(j=>j.record)}function x(j){return!!e.getRecordMatcher(j)}function N(j,Z){if(Z=Pe({},Z||l.value),typeof j=="string"){const P=Yl(n,j,Z.path),V=e.resolve({path:P.path},Z),B=s.createHref(P.fullPath);return Pe(P,V,{params:m(V.params),hash:Io(P.hash),redirectedFrom:void 0,href:B})}let Y;if(j.path!=null)Y=Pe({},j,{path:Yl(n,j.path,Z.path).path});else{const P=Pe({},j.params);for(const V in P)P[V]==null&&delete P[V];Y=Pe({},j,{params:d(P)}),Z.params=d(Z.params)}const ee=e.resolve(Y,Z),Ee=j.hash||"";ee.params=h(m(ee.params));const ke=OR(r,Pe({},j,{hash:AR(Ee),path:ee.path})),I=s.createHref(ke);return Pe({fullPath:ke,hash:Ee,query:r===km?cS(j.query):j.query||{}},ee,{redirectedFrom:void 0,href:I})}function S(j){return typeof j=="string"?Yl(n,j,l.value.path):Pe({},j)}function b(j,Z){if(u!==j)return Zs(8,{from:Z,to:j})}function O(j){return w(j)}function L(j){return O(Pe(S(j),{replace:!0}))}function M(j){const Z=j.matched[j.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ee=typeof Y=="function"?Y(j):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=S(ee):{path:ee},ee.params={}),Pe({query:j.query,hash:j.hash,params:ee.path!=null?{}:j.params},ee)}}function w(j,Z){const Y=u=N(j),ee=l.value,Ee=j.state,ke=j.force,I=j.replace===!0,P=M(Y);if(P)return w(Pe(S(P),{state:typeof P=="object"?Pe({},Ee,P.state):Ee,force:ke,replace:I}),Z||Y);const V=Y;V.redirectedFrom=Z;let B;return!ke&&xR(r,ee,Y)&&(B=Zs(16,{to:V,from:ee}),Wt(ee,ee,!0,!1)),(B?Promise.resolve(B):E(V,ee)).catch(U=>Sn(U)?Sn(U,2)?U:en(U):ie(U,V,ee)).then(U=>{if(U){if(Sn(U,2))return w(Pe({replace:I},S(U.to),{state:typeof U.to=="object"?Pe({},Ee,U.to.state):Ee,force:ke}),Z||V)}else U=A(V,ee,!0,I,Ee);return C(V,ee,U),U})}function y(j,Z){const Y=b(j,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(j){const Z=Gn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(j):j()}function E(j,Z){let Y;const[ee,Ee,ke]=_S(j,Z);Y=Xl(ee.reverse(),"beforeRouteLeave",j,Z);for(const P of ee)P.leaveGuards.forEach(V=>{Y.push(lr(V,j,Z))});const I=y.bind(null,j,Z);return Y.push(I),Ct(Y).then(()=>{Y=[];for(const P of i.list())Y.push(lr(P,j,Z));return Y.push(I),Ct(Y)}).then(()=>{Y=Xl(Ee,"beforeRouteUpdate",j,Z);for(const P of Ee)P.updateGuards.forEach(V=>{Y.push(lr(V,j,Z))});return Y.push(I),Ct(Y)}).then(()=>{Y=[];for(const P of ke)if(P.beforeEnter)if(cn(P.beforeEnter))for(const V of P.beforeEnter)Y.push(lr(V,j,Z));else Y.push(lr(P.beforeEnter,j,Z));return Y.push(I),Ct(Y)}).then(()=>(j.matched.forEach(P=>P.enterCallbacks={}),Y=Xl(ke,"beforeRouteEnter",j,Z,_),Y.push(I),Ct(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(lr(P,j,Z));return Y.push(I),Ct(Y)}).catch(P=>Sn(P,8)?P:Promise.reject(P))}function C(j,Z,Y){a.list().forEach(ee=>_(()=>ee(j,Z,Y)))}function A(j,Z,Y,ee,Ee){const ke=b(j,Z);if(ke)return ke;const I=Z===nn,P=Ps?history.state:{};Y&&(ee||I?s.replace(j.fullPath,Pe({scroll:I&&P&&P.scroll},Ee)):s.push(j.fullPath,Ee)),l.value=j,Wt(j,Z,Y,I),en()}let T;function me(){T||(T=s.listen((j,Z,Y)=>{if(!un.listening)return;const ee=N(j),Ee=M(ee);if(Ee){w(Pe(Ee,{replace:!0}),ee).catch(no);return}u=ee;const ke=l.value;Ps&&jR(Tm(ke.fullPath,Y.delta),Kc()),E(ee,ke).catch(I=>Sn(I,12)?I:Sn(I,2)?(w(I.to,ee).then(P=>{Sn(P,20)&&!Y.delta&&Y.type===Ao.pop&&s.go(-1,!1)}).catch(no),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ie(I,ee,ke))).then(I=>{I=I||A(ee,ke,!1),I&&(Y.delta&&!Sn(I,8)?s.go(-Y.delta,!1):Y.type===Ao.pop&&Sn(I,20)&&s.go(-1,!1)),C(ee,ke,I)}).catch(no)}))}let ye=Ui(),J=Ui(),te;function ie(j,Z,Y){en(j);const ee=J.list();return ee.length?ee.forEach(Ee=>Ee(j,Z,Y)):console.error(j),Promise.reject(j)}function je(){return te&&l.value!==nn?Promise.resolve():new Promise((j,Z)=>{ye.add([j,Z])})}function en(j){return te||(te=!j,me(),ye.list().forEach(([Z,Y])=>j?Y(j):Z()),ye.reset()),j}function Wt(j,Z,Y,ee){const{scrollBehavior:Ee}=t;if(!Ps||!Ee)return Promise.resolve();const ke=!Y&&BR(Tm(j.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return In().then(()=>Ee(j,Z,ke)).then(I=>I&&UR(I)).catch(I=>ie(I,j,Z))}const Be=j=>s.go(j);let $e;const Gn=new Set,un={currentRoute:l,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:N,options:t,push:O,replace:L,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:je,install(j){const Z=this;j.component("RouterLink",fS),j.component("RouterView",Uv),j.config.globalProperties.$router=Z,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>De(l)}),Ps&&!$e&&l.value===nn&&($e=!0,O(s.location).catch(Ee=>{}));const Y={};for(const Ee in nn)Object.defineProperty(Y,Ee,{get:()=>l.value[Ee],enumerable:!0});j.provide(yf,Z),j.provide(vf,On(Y)),j.provide(Gu,l);const ee=j.unmount;Gn.add(j),j.unmount=function(){Gn.delete(j),Gn.size<1&&(u=nn,T&&T(),T=null,l.value=nn,$e=!1,te=!1),ee()}}};function Ct(j){return j.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return un}function _S(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Js(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Js(u,l))||s.push(l))}return[n,r,s]}function yS(t){return Tt(vf)}const vS=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Qu=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&vS(t.route,n));return typeof r=="function"?r(t.route):r},ES=(t,e)=>({default:()=>t?St(ob,t===!0?{}:t,e):e});function Ef(t){return Array.isArray(t)?t:[t]}const wS="modulepreload",TS=function(t,e){return t[0]==="."?new URL(t,e).href:t},Mm={},bS=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=TS(l,r),l in Mm)return;Mm[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const R=i[g];if(R.href===l&&(!u||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":wS,u||(m.as="script",m.crossOrigin=""),m.href=l,a&&m.setAttribute("nonce",a),document.head.appendChild(m),u)return new Promise((g,R)=>{m.addEventListener("load",g),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ge=(...t)=>bS(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),IS={middleware:"auth"},AS={middleware:"auth"},Vm=[{name:"Admin",path:"/Admin",meta:IS||{},component:()=>Ge(()=>import("./BSZGArSQ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:AS||{},component:()=>Ge(()=>import("./xJQAd6lo.js"),__vite__mapDeps([4,5,2,6]),import.meta.url).then(t=>t.default||t)},{name:"Bio",path:"/Bio",component:()=>Ge(()=>import("./B4ad6F_1.js"),__vite__mapDeps([7,8]),import.meta.url).then(t=>t.default||t)},{name:"Contact",path:"/Contact",component:()=>Ge(()=>import("./Cxr09imb.js"),__vite__mapDeps([9,10]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Ge(()=>import("./CX9gYIVc.js"),__vite__mapDeps([11,12,13,14]),import.meta.url).then(t=>t.default||t)},{name:"ForSale",path:"/ForSale",component:()=>Ge(()=>import("./Bk2A6gcA.js"),__vite__mapDeps([15,1,16]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Ge(()=>import("./CIkzHDyX.js"),__vite__mapDeps([17,12,13]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Ge(()=>import("./C4dgKlbx.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",component:()=>Ge(()=>import("./DdS1IDXF.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Login",path:"/Login",component:()=>Ge(()=>import("./DxIDV-H5.js"),__vite__mapDeps([18,2]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Ge(()=>import("./C_rP3vrE.js"),__vite__mapDeps([19,12,13,20]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Ge(()=>import("./BVkyZRtG.js"),__vite__mapDeps([21,12,13,22]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Ge(()=>import("./C5jOpqYX.js"),__vite__mapDeps([23,5,12,13,24]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio",path:"/Portfolio",component:()=>Ge(()=>import("./gOd_GNqW.js"),__vite__mapDeps([25,1,26]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Ge(()=>import("./tH0yfPFp.js"),__vite__mapDeps([27,12,13]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Ge(()=>import("./DD0aUdeA.js"),__vite__mapDeps([28,12,13]),import.meta.url).then(t=>t.default||t)},{name:"Stuff",path:"/Stuff",component:()=>Ge(()=>import("./9WsWg0B2.js"),__vite__mapDeps([29,12,13]),import.meta.url).then(t=>t.default||t)}],jv=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?St(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Fm(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function RS(t,e){return t===e||e===nn?!1:Fm(t)!==Fm(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const SS={scrollBehavior(t,e,n){var u;const r=Qe(),s=((u=Ht().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&RS(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Um(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Fu),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Um(t.hash),behavior:s}),h(i)})})}};function Um(t){try{const e=document.querySelector(t);if(e)return Number.parseFloat(getComputedStyle(e).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const CS={hashMode:!1,scrollBehaviorType:"auto"},Mt={...CS,...SS},PS=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Qe(),s=Ht();if(([e,n]=bo(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=zc({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Ns(o)),window.history.pushState({},"",t.fullPath)});return!1}})},kS=async t=>{let e,n;const r=([e,n]=bo(()=>gf(t.path)),e=await e,n(),e);if(r.redirect)return _s(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},OS=[PS,kS],so={auth:()=>Ge(()=>import("./BQLcABa4.js"),__vite__mapDeps([30,2]),import.meta.url)};function xS(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),em(h,"")}const a=em(r,t),l=!n||mA(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const NS=qt({name:"nuxt:router",enforce:"pre",async setup(t){var x,N;let e,n,r=mi().app.baseURL;Mt.hashMode&&!r.includes("#")&&(r+="#");const s=((x=Mt.history)==null?void 0:x.call(Mt,r))??(Mt.hashMode?zR(r):Dv(r)),i=((N=Mt.routes)==null?void 0:N.call(Mt,Vm))??Vm;let o;const a=gS({...Mt,scrollBehavior:(S,b,O)=>{if(b===nn){o=O;return}if(Mt.scrollBehavior){if(a.options.scrollBehavior=Mt.scrollBehavior,"scrollRestoration"in window.history){const L=a.beforeEach(()=>{L(),window.history.scrollRestoration="manual"})}return Mt.scrollBehavior(S,nn,o||O)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=mo(a.currentRoute.value);a.afterEach((S,b)=>{l.value=b}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=xS(r,window.location,t.payload.path),h=mo(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((S,b)=>{var O,L,M,w;((L=(O=S.matched[0])==null?void 0:O.components)==null?void 0:L.default)===((w=(M=b.matched[0])==null?void 0:M.components)==null?void 0:w.default)&&d()});const m={};for(const S in h.value)Object.defineProperty(m,S,{get:()=>h.value[S]});t._route=On(m),t._middleware=t._middleware||{global:[],named:{}};const g=qc();a.afterEach(async(S,b,O)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(y1),O&&await t.callHook("page:loading:end"),S.matched.length===0&&await t.runWithContext(()=>Ns(Bu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))});try{[e,n]=bo(()=>a.isReady()),await e,n()}catch(S){[e,n]=bo(()=>t.runWithContext(()=>Ns(S))),await e,n()}const R=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const k=t.payload.state._layout;return a.beforeEach(async(S,b)=>{var O;await t.callHook("page:loading:start"),S.meta=Fr(S.meta),t.isHydrating&&k&&!Pr(S.meta.layout)&&(S.meta.layout=k),t._processingMiddleware=!0;{const L=new Set([...OS,...t._middleware.global]);for(const M of S.matched){const w=M.meta.middleware;if(w)for(const y of Ef(w))L.add(y)}{const M=await t.runWithContext(()=>gf(S.path));if(M.appMiddleware)for(const w in M.appMiddleware)M.appMiddleware[w]?L.add(w):L.delete(w)}for(const M of L){const w=typeof M=="string"?t._middleware.named[M]||await((O=so[M])==null?void 0:O.call(so).then(_=>_.default||_)):M;if(!w)throw new Error(`Unknown route middleware: '${M}'.`);const y=await t.runWithContext(()=>w(S,b));if(!t.payload.serverRendered&&t.isHydrating&&(y===!1||y instanceof Error)){const _=y||Bu({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ns(_)),!1}if(y!==!0&&(y||y===!1))return y}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in R&&(R.name=void 0),await a.replace({...R,force:!0}),a.options.scrollBehavior=Mt.scrollBehavior}catch(S){await t.runWithContext(()=>Ns(S))}}),{provide:{router:a}}}}),jm=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),HM=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),wf=t=>{const e=Qe();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{jm(()=>t())}):jm(()=>t())},DS=qt({name:"nuxt:payload",setup(t){Ht().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await ym(e.path);r&&Object.assign(t.static.data,r.data)}),wf(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await ym(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Wc,1e3)})}}),LS=qt(()=>{const t=Ht();wf(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),MS=qt(t=>{let e;async function n(){const r=await Wc();e&&clearTimeout(e),e=setTimeout(n,im);try{const s=await $fetch(df("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}wf(()=>{e=setTimeout(n,im)})});function VS(t={}){const e=t.path||window.location.pathname;let n={};try{n=To(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Qe().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const FS=qt({name:"nuxt:chunk-reload",setup(t){const e=Ht(),n=mi(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:hf(n.app.baseURL,i.fullPath);VS({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),US=qt({name:"nuxt:global-components"}),gr={default:()=>Ge(()=>import("./DiYk8G18.js"),__vite__mapDeps([31,2,5,1,32]),import.meta.url).then(t=>t.default||t)},jS=qt({name:"nuxt:prefetch",setup(t){const e=Ht();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof gr[r]=="function"&&await gr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(_s(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Ef(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof so[o]=="function"&&so[o]();s&&typeof gr[s]=="function"&&gr[s]()})}});var Bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new $S;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const R=u<<6&192|d;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HS=function(t){const e=Bv(t);return $v.encodeByteArray(e,!0)},pc=function(t){return HS(t).replace(/\./g,"")},Hv=function(t){try{return $v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zS=()=>qS().__FIREBASE_DEFAULTS__,WS=()=>{if(typeof process>"u"||typeof Bm>"u")return;const t=Bm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hv(t[1]);return e&&JSON.parse(e)},Gc=()=>{try{return zS()||WS()||KS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qv=t=>{var e,n;return(n=(e=Gc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GS=t=>{const e=qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zv=()=>{var t;return(t=Gc())===null||t===void 0?void 0:t.config},Wv=t=>{var e;return(e=Gc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function YS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pc(JSON.stringify(n)),pc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function JS(){var t;const e=(t=Gc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function ZS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tC(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nC(){return!JS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rC(){try{return typeof indexedDB=="object"}catch{return!1}}function sC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iC,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?oC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,a,r)}}function oC(t,e){return t.replace(aC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aC=/\{\$([^}]+)}/g;function cC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($m(i)&&$m(o)){if(!mc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $m(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lC(t,e){const n=new uC(t,e);return n.subscribe.bind(n)}class uC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jl),s.error===void 0&&(s.error=Jl),s.complete===void 0&&(s.complete=Jl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jl(){}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pC(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dC(t){return t===Qr?void 0:t}function pC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const gC={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},_C=we.INFO,yC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},vC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=_C,this._logHandler=vC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const EC=(t,e)=>e.some(n=>t instanceof n);let Hm,qm;function wC(){return Hm||(Hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TC(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,Yu=new WeakMap,Gv=new WeakMap,Zl=new WeakMap,bf=new WeakMap;function bC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),bf.set(e,t),e}function IC(t){if(Yu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yu.set(t,e)}let Xu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AC(t){Xu=t(Xu)}function RC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eu(this),e,...n);return Gv.set(r,e.sort?e.sort():[e]),Tr(r)}:TC().includes(t)?function(...e){return t.apply(eu(this),e),Tr(Kv.get(this))}:function(...e){return Tr(t.apply(eu(this),e))}}function SC(t){return typeof t=="function"?RC(t):(t instanceof IDBTransaction&&IC(t),EC(t,wC())?new Proxy(t,Xu):t)}function Tr(t){if(t instanceof IDBRequest)return bC(t);if(Zl.has(t))return Zl.get(t);const e=SC(t);return e!==t&&(Zl.set(t,e),bf.set(e,t)),e}const eu=t=>bf.get(t);function CC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tr(o.result),l.oldVersion,l.newVersion,Tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const PC=["get","getKey","getAll","getAllKeys","count"],kC=["put","add","delete","clear"],tu=new Map;function zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tu.get(e))return tu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||PC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return tu.set(e,i),i}AC(t=>({...t,get:(e,n,r)=>zm(e,n)||t.get(e,n,r),has:(e,n)=>!!zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ju="@firebase/app",Wm="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Tf("@firebase/app"),NC="@firebase/app-compat",DC="@firebase/analytics-compat",LC="@firebase/analytics",MC="@firebase/app-check-compat",VC="@firebase/app-check",FC="@firebase/auth",UC="@firebase/auth-compat",jC="@firebase/database",BC="@firebase/database-compat",$C="@firebase/functions",HC="@firebase/functions-compat",qC="@firebase/installations",zC="@firebase/installations-compat",WC="@firebase/messaging",KC="@firebase/messaging-compat",GC="@firebase/performance",QC="@firebase/performance-compat",YC="@firebase/remote-config",XC="@firebase/remote-config-compat",JC="@firebase/storage",ZC="@firebase/storage-compat",eP="@firebase/firestore",tP="@firebase/vertexai-preview",nP="@firebase/firestore-compat",rP="firebase",sP="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="[DEFAULT]",iP={[Ju]:"fire-core",[NC]:"fire-core-compat",[LC]:"fire-analytics",[DC]:"fire-analytics-compat",[VC]:"fire-app-check",[MC]:"fire-app-check-compat",[FC]:"fire-auth",[UC]:"fire-auth-compat",[jC]:"fire-rtdb",[BC]:"fire-rtdb-compat",[$C]:"fire-fn",[HC]:"fire-fn-compat",[qC]:"fire-iid",[zC]:"fire-iid-compat",[WC]:"fire-fcm",[KC]:"fire-fcm-compat",[GC]:"fire-perf",[QC]:"fire-perf-compat",[YC]:"fire-rc",[XC]:"fire-rc-compat",[JC]:"fire-gcs",[ZC]:"fire-gcs-compat",[eP]:"fire-fst",[nP]:"fire-fst-compat",[tP]:"fire-vertex","fire-js":"fire-js",[rP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map,oP=new Map,eh=new Map;function Km(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(eh.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;eh.set(e,t);for(const n of gc.values())Km(n,t);for(const n of oP.values())Km(n,t);return!0}function If(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new qo("app","Firebase",aP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=sP;function Qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=zv()),!n)throw br.create("no-options");const i=gc.get(s);if(i){if(mc(n,i.options)&&mc(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new mC(s);for(const l of eh.values())o.addComponent(l);const a=new cP(n,r,o);return gc.set(s,a),a}function Yv(t=Zu){const e=gc.get(t);if(!e&&t===Zu&&zv())return Qv();if(!e)throw br.create("no-app",{appName:t});return e}function Ir(t,e,n){var r;let s=(r=iP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}ei(new cs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const lP="firebase-heartbeat-database",uP=1,Ro="firebase-heartbeat-store";let nu=null;function Xv(){return nu||(nu=CC(lP,uP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),nu}async function hP(t){try{const n=(await Xv()).transaction(Ro),r=await n.objectStore(Ro).get(Jv(t));return await n.done,r}catch(e){if(e instanceof Wn)ls.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function Gm(t,e){try{const r=(await Xv()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,Jv(t)),await r.done}catch(n){if(n instanceof Wn)ls.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(r.message)}}}function Jv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fP=1024,dP=30*24*60*60*1e3;class pP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qm(),{heartbeatsToSend:r,unsentEntries:s}=mP(this._heartbeatsCache.heartbeats),i=pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qm(){return new Date().toISOString().substring(0,10)}function mP(t,e=fP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ym(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ym(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rC()?sC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ym(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){ei(new cs("platform-logger",e=>new OC(e),"PRIVATE")),ei(new cs("heartbeat",e=>new pP(e),"PRIVATE")),Ir(Ju,Wm,t),Ir(Ju,Wm,"esm2017"),Ir("fire-js","")}_P("");var yP="firebase",vP="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir(yP,vP,"app");function Af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EP=Zv,eE=new qo("auth","Firebase",Zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Tf("@firebase/auth");function wP(t,...e){_c.logLevel<=we.WARN&&_c.warn(`Auth (${gi}): ${t}`,...e)}function qa(t,...e){_c.logLevel<=we.ERROR&&_c.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Rf(t,...e)}function gn(t,...e){return Rf(t,...e)}function tE(t,e,n){const r=Object.assign(Object.assign({},EP()),{[e]:n});return new qo("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return tE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eE.create(t,...e)}function fe(t,e,...n){if(!t)throw Rf(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function Un(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TP(){return Xm()==="http:"||Xm()==="https:"}function Xm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TP()||ZS()||"connection"in navigator)?navigator.onLine:!0}function IP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=XS()||eC()}get(){return bP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new Wo(3e4,6e4);function ys(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ur(t,e,n,r,s={}){return rE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nE.fetch()(sE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function rE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AP),e);try{const s=new CP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ka(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tE(t,h,u);ln(t,h)}}catch(s){if(s instanceof Wn)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function Qc(t,e,n,r,s={}){const i=await Ur(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Sf(t.config,s):`${t.config.apiScheme}://${s}`}function SP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),RP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function Jm(t){return t!==void 0&&t.enterprise!==void 0}class PP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kP(t,e){return Ur(t,"GET","/v2/recaptchaConfig",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return Ur(t,"POST","/v1/accounts:delete",e)}async function iE(t,e){return Ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xP(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=Cf(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:io(ru(s.auth_time)),issuedAtTime:io(ru(s.iat)),expirationTime:io(ru(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ru(t){return Number(t)*1e3}function Cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hv(n);return s?JSON.parse(s):(qa("Failed to decode base64 JWT payload"),null)}catch(s){return qa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zm(t){const e=Cf(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&NP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await So(t,iE(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?oE(i.providerUserInfo):[],a=MP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function LP(t){const e=ct(t);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oE(t){return t.map(e=>{var{providerId:n}=e,r=Af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){const n=await rE(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=sE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FP(t,e){return Ur(t,"POST","/v2/accounts:revokeToken",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await So(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await So(this,OP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:b,emailVerified:O,isAnonymous:L,providerData:M,stsTokenManager:w}=n;fe(b&&w,e,"internal-error");const y=$s.fromJSON(this.name,w);fe(typeof b=="string",e,"internal-error"),rr(d,e.name),rr(m,e.name),fe(typeof O=="boolean",e,"internal-error"),fe(typeof L=="boolean",e,"internal-error"),rr(g,e.name),rr(R,e.name),rr(k,e.name),rr(x,e.name),rr(N,e.name),rr(S,e.name);const _=new Dn({uid:b,auth:e,email:m,emailVerified:O,displayName:d,isAnonymous:L,photoURL:R,phoneNumber:g,tenantId:k,stsTokenManager:y,createdAt:N,lastLoginAt:S});return M&&Array.isArray(M)&&(_.providerData=M.map(E=>Object.assign({},E))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?oE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new $s;a.updateFromIdToken(r);const l=new Dn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new nh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;function Ln(t){Un(t instanceof Function,"Expected a class definition");let e=eg.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aE.type="NONE";const tg=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=za(this.userKey,s.apiKey,i),this.fullPersistenceKey=za("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(Ln(tg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(tg);const o=za(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Dn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Hs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Hs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fE(e))return"Blackberry";if(dE(e))return"Webos";if(Pf(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(hE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cE(t=pt()){return/firefox\//i.test(t)}function Pf(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=pt()){return/crios\//i.test(t)}function uE(t=pt()){return/iemobile/i.test(t)}function hE(t=pt()){return/android/i.test(t)}function fE(t=pt()){return/blackberry/i.test(t)}function dE(t=pt()){return/webos/i.test(t)}function Yc(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UP(t=pt()){var e;return Yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jP(){return tC()&&document.documentMode===10}function pE(t=pt()){return Yc(t)||hE(t)||dE(t)||fE(t)||/windows phone/i.test(t)||uE(t)}function BP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e=[]){let n;switch(t){case"Browser":n=ng(pt());break;case"Worker":n=`${ng(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
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
 */class $P{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HP(t,e={}){return Ur(t,"GET","/v2/passwordPolicy",ys(t,e))}/**
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
 */const qP=6;class zP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rg(this),this.idTokenSubscription=new rg(this),this.beforeStateQueue=new $P(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await iE(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(Ar(this));const n=e?ct(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HP(this),n=new zP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _i(t){return ct(t)}class rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=lC(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KP(t){Xc=t}function gE(t){return Xc.loadJS(t)}function GP(){return Xc.recaptchaEnterpriseScript}function QP(){return Xc.gapiScript}function YP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XP="recaptcha-enterprise",JP="NO_RECAPTCHA";class ZP{constructor(e){this.type=XP,this.auth=_i(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{kP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new PP(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Jm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(JP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Jm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=GP();l.length!==0&&(l+=a),gE(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function sg(t,e,n,r=!1){const s=new ZP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ig(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t,e){const n=If(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mc(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function tk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nk(t,e,n){const r=_i(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_E(e),{host:o,port:a}=rk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),sk()}function _E(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rk(t){const e=_E(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:og(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:og(o)}}}function og(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function ik(t,e){return Ur(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e){return Qc(t,"POST","/v1/accounts:signInWithPassword",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e){return Qc(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}async function ck(t,e){return Qc(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends kf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ig(e,n,"signInWithPassword",ok);case"emailLink":return ak(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ig(e,r,"signUpPassword",ik);case"emailLink":return ck(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Qc(t,"POST","/v1/accounts:signInWithIdp",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="http://localhost";class us extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Af(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hk(t){const e=Hi(qi(t)).link,n=e?Hi(qi(e)).deep_link_id:null,r=Hi(qi(t)).deep_link_id;return(r?Hi(qi(r)).link:null)||r||n||e||t}class Of{constructor(e){var n,r,s,i,o,a;const l=Hi(qi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=uk((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hk(e);try{return new Of(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return Co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Of.parseLink(n);return fe(r,"argument-error"),Co._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends yE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ko{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ko{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ko{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=ag(r);return new ti({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ag(r);return new ti({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ag(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vc(e,n,r,s)}}function vE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vc._fromErrorAndOperation(t,i,e,r):i})}async function fk(t,e,n=!1){const r=await So(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(t,e,n=!1){const{auth:r}=t;if(xn(r.app))return Promise.reject(Ar(r));const s="reauthenticate";try{const i=await So(t,vE(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Cf(i.idToken);fe(o,r,"internal-error");const{sub:a}=o;return fe(t.uid===a,r,"user-mismatch"),ti._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t,e,n=!1){if(xn(t.app))return Promise.reject(Ar(t));const r="signIn",s=await vE(t,r,e),i=await ti._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function pk(t,e){return EE(_i(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t){const e=_i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function qM(t,e,n){return xn(t.app)?Promise.reject(Ar(t)):pk(ct(t),yi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mk(t),r})}function gk(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function _k(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function zM(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function WM(t){return ct(t).signOut()}const Ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(){const t=pt();return Pf(t)||Yc(t)}const vk=1e3,Ek=10;class TE extends wE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yk()&&BP(),this.fallbackToPolling=pE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ek):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const wk=TE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE extends wE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bE.type="SESSION";const IE=bE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await Tk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=xf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function Ik(t){_n().location.href=t}/**
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
 */function AE(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function Ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sk(){return AE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="firebaseLocalStorageDb",Ck=1,wc="firebaseLocalStorage",SE="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(t,e){return t.transaction([wc],e?"readwrite":"readonly").objectStore(wc)}function Pk(){const t=indexedDB.deleteDatabase(RE);return new Go(t).toPromise()}function rh(){const t=indexedDB.open(RE,Ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wc,{keyPath:SE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wc)?e(r):(r.close(),await Pk(),e(await rh()))})})}async function cg(t,e,n){const r=Zc(t,!0).put({[SE]:e,value:n});return new Go(r).toPromise()}async function kk(t,e){const n=Zc(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function lg(t,e){const n=Zc(t,!0).delete(e);return new Go(n).toPromise()}const Ok=800,xk=3;class CE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(Sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ak(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rh();return await cg(e,Ec,"1"),await lg(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zc(s,!1).getAll();return new Go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CE.type="LOCAL";const Nk=CE;new Wo(3e4,6e4);/**
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
 */function Dk(t,e){return e?Ln(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lk(t){return EE(t.auth,new Nf(t),t.bypassAuthState)}function Mk(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),dk(n,new Nf(t),t.bypassAuthState)}async function Vk(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),fk(n,new Nf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lk;case"linkViaPopup":case"linkViaRedirect":return Vk;case"reauthViaPopup":case"reauthViaRedirect":return Mk;default:ln(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=new Wo(2e3,1e4);class Ds extends PE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fk.get())};e()}}Ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="pendingRedirect",Wa=new Map;class jk extends PE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await Bk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bk(t,e){const n=qk(e),r=Hk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $k(t,e){Wa.set(t._key(),e)}function Hk(t){return Ln(t._redirectPersistence)}function qk(t){return za(Uk,t.config.apiKey,t.name)}async function zk(t,e,n=!1){if(xn(t.app))return Promise.reject(Ar(t));const r=_i(t),s=Dk(r,e),o=await new jk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=10*60*1e3;class Kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ug(e))}saveEventToCache(e){this.cachedEventUids.add(ug(e)),this.lastProcessedEventTime=Date.now()}}function ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e={}){return Ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xk=/^https?/;async function Jk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qk(t);for(const n of e)try{if(Zk(n))return}catch{}ln(t,"unauthorized-domain")}function Zk(t){const e=th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xk.test(n))return!1;if(Yk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eO=new Wo(3e4,6e4);function hg(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tO(t){return new Promise((e,n)=>{var r,s,i;function o(){hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hg(),n(gn(t,"network-request-failed"))},timeout:eO.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const a=YP("iframefcb");return _n()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},gE(`${QP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function nO(t){return Ka=Ka||tO(t),Ka}/**
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
 */const rO=new Wo(5e3,15e3),sO="__/auth/iframe",iO="emulator/auth/iframe",oO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cO(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sf(e,iO):`https://${t.config.authDomain}/${sO}`,r={apiKey:e.apiKey,appName:t.name,v:gi},s=aO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zo(r).slice(1)}`}async function lO(t){const e=await nO(t),n=_n().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:cO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=_n().setTimeout(()=>{i(o)},rO.get());function l(){_n().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const uO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,fO=600,dO="_blank",pO="http://localhost";class fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mO(t,e,n,r=hO,s=fO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=pt().toLowerCase();n&&(a=lE(u)?dO:n),cE(u)&&(e=e||pO,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[g,R])=>`${m}${g}=${R},`,"");if(UP(u)&&a!=="_self")return gO(e||"",a),new fg(null);const d=window.open(e||"",a,h);fe(d,t,"popup-blocked");try{d.focus()}catch{}return new fg(d)}function gO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _O="__/auth/handler",yO="emulator/auth/handler",vO=encodeURIComponent("fac");async function dg(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:s};if(e instanceof yE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ko){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${vO}=${encodeURIComponent(l)}`:"";return`${EO(t)}?${zo(a).slice(1)}${u}`}function EO({config:t}){return t.emulator?Sf(t,yO):`https://${t.authDomain}/${_O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="webStorageSupport";class wO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IE,this._completeRedirectFn=zk,this._overrideRedirectResult=$k}async _openPopup(e,n,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dg(e,n,r,th(),s);return mO(e,o,xf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dg(e,n,r,th(),s);return Ik(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lO(e),r=new Kk(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[su];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pE()||Pf()||Yc()}}const TO=wO;var pg="@firebase/auth",mg="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AO(t){ei(new cs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mE(t)},u=new WP(r,s,i,l);return tk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new cs("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(r=>new bO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ir(pg,mg,IO(t)),Ir(pg,mg,"esm2017")}/**
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
 */const RO=5*60,SO=Wv("authIdTokenMaxAge")||RO;let gg=null;const CO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SO)return;const s=n==null?void 0:n.token;gg!==s&&(gg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PO(t=Yv()){const e=If(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ek(t,{popupRedirectResolver:TO,persistence:[Nk,wk,IE]}),r=Wv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CO(i.toString());_k(n,o,()=>o(n.currentUser)),gk(n,a=>o(a))}}const s=qv("auth");return s&&nk(n,`http://${s}`),n}function kO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AO("Browser");function rn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=rn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:rn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=rn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=rn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(rn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(rn(i),rn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(rn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const OO={path:"/",watch:!0,decode:t=>To(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Oa=window.cookieStore;function xO(t,e){var l;const n={...OO,...e},r=_g(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=rn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?LO(o,s,n.watch&&n.watch!=="shallow"):jt(o);{let u=null;try{!Oa&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||a1(a.value,r[t])||(DO(t,a.value,n),r[t]=rn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=R=>{var x;const k=R.refresh?(x=_g(n))==null?void 0:x[t]:n.decode(R.value);m=!0,a.value=k,r[t]=rn(k),In(()=>{m=!1})};let m=!1;const g=!!Uo();if(g&&nc(()=>{m=!0,h(),u==null||u.close()}),Oa){const R=k=>{const x=k.changed.find(N=>N.name===t);x&&d({value:x.value})};Oa.addEventListener("change",R),g&&nc(()=>Oa.removeEventListener("change",R))}else u&&(u.onmessage=({data:R})=>d(R));n.watch?mn(a,()=>{m||h()},{deep:n.watch!=="shallow"}):h()}return a}function _g(t={}){return t1(document.cookie,t)}function NO(t,e,n={}){return e==null?am(t,e,{...n,maxAge:-1}):am(t,e,n)}function DO(t,e,n={}){document.cookie=NO(t,e,n)}const yg=2147483647;function LO(t,e,n){let r,s,i=0;const o=n?jt(t):{value:t};return Uo()&&nc(()=>{s==null||s(),clearTimeout(r)}),KT((a,l)=>{n&&(s=mn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<yg?h:yg;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,OE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,C,A){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return y.prototype[C].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,_){_||(_=0);var E=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)E[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)E[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],C=w.g[2];var A=w.g[3],T=y+(A^_&(C^A))+E[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[1]+3905402710&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[2]+606105819&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(A^_&(C^A))+E[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[5]+1200080426&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[6]+2821735955&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(A^_&(C^A))+E[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[9]+2336552879&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[10]+4294925233&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(A^_&(C^A))+E[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[13]+4254626195&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[14]+2792965006&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^A&(_^C))+E[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[6]+3225465664&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[11]+643717713&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^A&(_^C))+E[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[10]+38016083&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[15]+3634488961&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^A&(_^C))+E[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[14]+3275163606&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[3]+4107603335&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^A&(_^C))+E[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[2]+4243563512&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[7]+1735328473&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^A)+E[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[8]+2272392833&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[11]+1839030562&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^A)+E[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[4]+1272893353&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[7]+4139469664&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^A)+E[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[0]+3936430074&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[3]+3572445317&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^A)+E[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[12]+3873151461&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[15]+530742520&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~A))+E[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[7]+1126891415&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[14]+2878612391&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~A))+E[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[3]+2399980690&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[10]+4293915773&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~A))+E[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[15]+4264355552&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[6]+2734768916&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~A))+E[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[11]+3174756917&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[2]+718787259&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,E=this.B,C=this.h,A=0;A<y;){if(C==0)for(;A<=_;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(E[C++]=w.charCodeAt(A++),C==this.blockSize){s(this,E),C=0;break}}else for(;A<y;)if(E[C++]=w[A++],C==this.blockSize){s(this,E),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var E=0;32>E;E+=8)w[_++]=this.g[y]>>>E&255;return w};function i(w,y){var _=a;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],E=!0,C=w.length-1;0<=C;C--){var A=w[C]|0;E&&A==y||(_[C]=A,E=!1)}this.g=_}var a={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return d;if(0>w)return x(u(-w));for(var y=[],_=1,E=0;w>=_;E++)y[E]=w/_|0,_*=4294967296;return new o(y,0)}function h(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(h(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),E=d,C=0;C<w.length;C+=8){var A=Math.min(8,w.length-C),T=parseInt(w.substring(C,C+A),y);8>A?(A=u(Math.pow(y,A)),E=E.j(A).add(u(T))):(E=E.j(_),E=E.add(u(T)))}return E}var d=l(0),m=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(k(this))return"-"+x(this).toString(w);for(var y=u(Math.pow(w,6)),_=this,E="";;){var C=O(_,y).g;_=N(_,C.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=C,R(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=N(this,w),k(w)?-1:R(w)?0:1};function x(w){for(var y=w.g.length,_=[],E=0;E<y;E++)_[E]=~w.g[E];return new o(_,~w.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0,C=0;C<=y;C++){var A=E+(this.i(C)&65535)+(w.i(C)&65535),T=(A>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);E=T>>>16,A&=65535,T&=65535,_[C]=T<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function N(w,y){return w.add(x(y))}t.j=function(w){if(R(this)||R(w))return d;if(k(this))return k(w)?x(this).j(x(w)):x(x(this).j(w));if(k(w))return x(this.j(x(w)));if(0>this.l(g)&&0>w.l(g))return u(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<w.g.length;C++){var A=this.i(E)>>>16,T=this.i(E)&65535,me=w.i(C)>>>16,ye=w.i(C)&65535;_[2*E+2*C]+=T*ye,S(_,2*E+2*C),_[2*E+2*C+1]+=A*ye,S(_,2*E+2*C+1),_[2*E+2*C+1]+=T*me,S(_,2*E+2*C+1),_[2*E+2*C+2]+=A*me,S(_,2*E+2*C+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new o(_,0)};function S(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function b(w,y){this.g=w,this.h=y}function O(w,y){if(R(y))throw Error("division by zero");if(R(w))return new b(d,d);if(k(w))return y=O(x(w),y),new b(x(y.g),x(y.h));if(k(y))return y=O(w,x(y)),new b(x(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,E=y;0>=E.l(w);)_=L(_),E=L(E);var C=M(_,1),A=M(E,1);for(E=M(E,2),_=M(_,2);!R(E);){var T=A.add(E);0>=T.l(w)&&(C=C.add(_),A=T),E=M(E,1),_=M(_,1)}return y=N(w,C.j(y)),new b(C,y)}for(C=d;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=u(_),T=A.j(y);k(T)||0<T.l(w);)_-=E,A=u(_),T=A.j(y);R(A)&&(A=m),C=C.add(A),w=N(w,T)}return new b(C,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)&w.i(E);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)|w.i(E);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)^w.i(E);return new o(_,this.h^w.h)};function L(w){for(var y=w.g.length+1,_=[],E=0;E<y;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(_,w.h)}function M(w,y){var _=y>>5;y%=32;for(var E=w.g.length-_,C=[],A=0;A<E;A++)C[A]=0<y?w.i(A+_)>>>y|w.i(A+_+1)<<32-y:w.i(A+_);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,OE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,is=o}).apply(typeof vg<"u"?vg:typeof self<"u"?self:typeof window<"u"?window:{});var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xE,NE,zi,DE,Ga,sh,LE,ME,VE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,p){return c==Array.prototype||c==Object.prototype||(c[f]=p.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof xa=="object"&&xa];for(var f=0;f<c.length;++f){var p=c[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var p=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in p))break e;p=p[D]}c=c[c.length-1],v=p[c],f=f(v),f!=v&&f!=null&&e(p,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var p=0,v=!1,D={next:function(){if(!v&&p<c.length){var F=p++;return{value:f(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,p){return c.call.apply(c.bind,arguments)}function d(c,f,p){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),c.apply(f,D)}}return function(){return c.apply(f,arguments)}}function m(c,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(c,f){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function R(c,f){function p(){}p.prototype=f.prototype,c.aa=f.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(v,D,F){for(var K=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)K[xe-2]=arguments[xe];return f.prototype[D].apply(v,K)}}function k(c){const f=c.length;if(0<f){const p=Array(f);for(let v=0;v<f;v++)p[v]=c[v];return p}return[]}function x(c,f){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(l(v)){const D=c.length||0,F=v.length||0;c.length=D+F;for(let K=0;K<F;K++)c[D+K]=v[K]}else c.push(v)}}class N{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(c){return/^[\s\xa0]*$/.test(c)}function b(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function O(c){return O[" "](c),c}O[" "]=function(){};var L=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function M(c,f,p){for(const v in c)f.call(p,c[v],v,c)}function w(c,f){for(const p in c)f.call(void 0,c[p],p,c)}function y(c){const f={};for(const p in c)f[p]=c[p];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(c,f){let p,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(p in v)c[p]=v[p];for(let F=0;F<_.length;F++)p=_[F],Object.prototype.hasOwnProperty.call(v,p)&&(c[p]=v[p])}}function C(c){var f=1;c=c.split(":");const p=[];for(;0<f&&c.length;)p.push(c.shift()),f--;return c.length&&p.push(c.join(":")),p}function A(c){a.setTimeout(()=>{throw c},0)}function T(){var c=je;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class me{constructor(){this.h=this.g=null}add(f,p){const v=ye.get();v.set(f,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new N(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ie=!1,je=new me,en=()=>{const c=a.Promise.resolve(void 0);te=()=>{c.then(Wt)}};var Wt=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(p){A(p)}var f=ye;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ie=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Gn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return c}();function un(c,f){if($e.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(L){e:{try{O(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else p=="mouseover"?f=c.fromElement:p=="mouseout"&&(f=c.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ct[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&un.aa.h.call(this)}}R(un,$e);var Ct={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(c,f,p,v,D){this.listener=c,this.proxy=null,this.src=f,this.type=p,this.capture=!!v,this.ha=D,this.key=++Z,this.da=this.fa=!1}function ee(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ee(c){this.src=c,this.g={},this.h=0}Ee.prototype.add=function(c,f,p,v,D){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var K=I(c,f,v,D);return-1<K?(f=c[K],p||(f.fa=!1)):(f=new Y(f,this.src,F,!!v,D),f.fa=p,c.push(f)),f};function ke(c,f){var p=f.type;if(p in c.g){var v=c.g[p],D=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=D)&&Array.prototype.splice.call(v,D,1),F&&(ee(f),c.g[p].length==0&&(delete c.g[p],c.h--))}}function I(c,f,p,v){for(var D=0;D<c.length;++D){var F=c[D];if(!F.da&&F.listener==f&&F.capture==!!p&&F.ha==v)return D}return-1}var P="closure_lm_"+(1e6*Math.random()|0),V={};function B(c,f,p,v,D){if(Array.isArray(f)){for(var F=0;F<f.length;F++)B(c,f[F],p,v,D);return null}return p=oe(p),c&&c[j]?c.K(f,p,u(v)?!!v.capture:!!v,D):U(c,f,p,!1,v,D)}function U(c,f,p,v,D,F){if(!f)throw Error("Invalid event type");var K=u(D)?!!D.capture:!!D,xe=X(c);if(xe||(c[P]=xe=new Ee(c)),p=xe.add(f,p,v,K,F),p.proxy)return p;if(v=z(),p.proxy=v,v.src=c,v.listener=p,c.addEventListener)Gn||(D=K),D===void 0&&(D=!1),c.addEventListener(f.toString(),v,D);else if(c.attachEvent)c.attachEvent(G(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function z(){function c(p){return f.call(c.src,c.listener,p)}const f=q;return c}function Q(c,f,p,v,D){if(Array.isArray(f))for(var F=0;F<f.length;F++)Q(c,f[F],p,v,D);else v=u(v)?!!v.capture:!!v,p=oe(p),c&&c[j]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],p=I(F,p,v,D),-1<p&&(ee(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=X(c))&&(f=c.g[f.toString()],c=-1,f&&(c=I(f,p,v,D)),(p=-1<c?f[c]:null)&&W(p))}function W(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[j])ke(f.i,c);else{var p=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(p,v,c.capture):f.detachEvent?f.detachEvent(G(p),v):f.addListener&&f.removeListener&&f.removeListener(v),(p=X(f))?(ke(p,c),p.h==0&&(p.src=null,f[P]=null)):ee(c)}}}function G(c){return c in V?V[c]:V[c]="on"+c}function q(c,f){if(c.da)c=!0;else{f=new un(f,this);var p=c.listener,v=c.ha||c.src;c.fa&&W(c),c=p.call(v,f)}return c}function X(c){return c=c[P],c instanceof Ee?c:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[ae]||(c[ae]=function(f){return c.handleEvent(f)}),c[ae])}function se(){Be.call(this),this.i=new Ee(this),this.M=this,this.F=null}R(se,Be),se.prototype[j]=!0,se.prototype.removeEventListener=function(c,f,p,v){Q(this,c,f,p,v)};function ue(c,f){var p,v=c.F;if(v)for(p=[];v;v=v.F)p.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new $e(f,c);else if(f instanceof $e)f.target=f.target||c;else{var D=f;f=new $e(v,c),E(f,D)}if(D=!0,p)for(var F=p.length-1;0<=F;F--){var K=f.g=p[F];D=Ce(K,v,!0,f)&&D}if(K=f.g=c,D=Ce(K,v,!0,f)&&D,D=Ce(K,v,!1,f)&&D,p)for(F=0;F<p.length;F++)K=f.g=p[F],D=Ce(K,v,!1,f)&&D}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var p=c.g[f],v=0;v<p.length;v++)ee(p[v]);delete c.g[f],c.h--}}this.F=null},se.prototype.K=function(c,f,p,v){return this.i.add(String(c),f,!1,p,v)},se.prototype.L=function(c,f,p,v){return this.i.add(String(c),f,!0,p,v)};function Ce(c,f,p,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,F=0;F<f.length;++F){var K=f[F];if(K&&!K.da&&K.capture==p){var xe=K.listener,lt=K.ha||K.src;K.fa&&ke(c.i,K),D=xe.call(lt,v)!==!1&&D}}return D&&!v.defaultPrevented}function be(c,f,p){if(typeof c=="function")p&&(c=m(c,p));else if(c&&typeof c.handleEvent=="function")c=m(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Ke(c){c.g=be(()=>{c.g=null,c.i&&(c.i=!1,Ke(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Dt extends Be{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ke(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(c){Be.call(this),this.h=c,this.g={}}R(Kt,Be);var bi=[];function Qn(c){M(c.g,function(f,p){this.g.hasOwnProperty(p)&&W(f)},c),c.g={}}Kt.prototype.N=function(){Kt.aa.N.call(this),Qn(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ws=a.JSON.stringify,bt=a.JSON.parse,Gt=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Ts(){}Ts.prototype.h=null;function Ed(c){return c.h||(c.h=c.i())}function wd(){}var Ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wl(){$e.call(this,"d")}R(wl,$e);function Tl(){$e.call(this,"c")}R(Tl,$e);var Br={},Td=null;function ra(){return Td=Td||new se}Br.La="serverreachability";function bd(c){$e.call(this,Br.La,c)}R(bd,$e);function Ai(c){const f=ra();ue(f,new bd(f))}Br.STAT_EVENT="statevent";function Id(c,f){$e.call(this,Br.STAT_EVENT,c),this.stat=f}R(Id,$e);function It(c){const f=ra();ue(f,new Id(f,c))}Br.Ma="timingevent";function Ad(c,f){$e.call(this,Br.Ma,c),this.size=f}R(Ad,$e);function Ri(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Si(){this.g=!0}Si.prototype.xa=function(){this.g=!1};function M0(c,f,p,v,D,F){c.info(function(){if(c.g)if(F)for(var K="",xe=F.split("&"),lt=0;lt<xe.length;lt++){var Re=xe[lt].split("=");if(1<Re.length){var gt=Re[0];Re=Re[1];var _t=gt.split("_");K=2<=_t.length&&_t[1]=="type"?K+(gt+"="+Re+"&"):K+(gt+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+f+`
`+p+`
`+K})}function V0(c,f,p,v,D,F,K){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+f+`
`+p+`
`+F+" "+K})}function bs(c,f,p,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+U0(c,p)+(v?" "+v:"")})}function F0(c,f){c.info(function(){return"TIMEOUT: "+f})}Si.prototype.info=function(){};function U0(c,f){if(!c.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var v=p[c];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<D.length;K++)D[K]=""}}}}return ws(p)}catch{return f}}var sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bl;function ia(){}R(ia,Ts),ia.prototype.g=function(){return new XMLHttpRequest},ia.prototype.i=function(){return{}},bl=new ia;function Yn(c,f,p,v){this.j=c,this.i=f,this.l=p,this.R=v||1,this.U=new Kt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sd}function Sd(){this.i=null,this.g="",this.h=!1}var Cd={},Il={};function Al(c,f,p){c.L=1,c.v=la(An(f)),c.m=p,c.P=!0,Pd(c,null)}function Pd(c,f){c.F=Date.now(),oa(c),c.A=An(c.v);var p=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),Hd(p.i,"t",v),c.C=0,p=c.j.J,c.h=new Sd,c.g=ap(c.j,p?f:null,!c.m),0<c.O&&(c.M=new Dt(m(c.Y,c,c.g),c.O)),f=c.U,p=c.g,v=c.ca;var D="readystatechange";Array.isArray(D)||(D&&(bi[0]=D.toString()),D=bi);for(var F=0;F<D.length;F++){var K=B(p,D[F],v||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Ai(),M0(c.i,c.u,c.A,c.l,c.R,c.m)}Yn.prototype.ca=function(c){c=c.target;const f=this.M;f&&Rn(c)==3?f.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)e:{const _t=Rn(this.g);var f=this.g.Ba();const Rs=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Yd(this.g)))){this.J||_t!=4||f==7||(f==8||0>=Rs?Ai(3):Ai(2)),Rl(this);var p=this.g.Z();this.X=p;t:if(kd(this)){var v=Yd(this.g);c="";var D=v.length,F=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),Ci(this);var K="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,c+=this.h.i.decode(v[f],{stream:!(F&&f==D-1)});v.length=0,this.h.g+=c,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,V0(this.i,this.u,this.A,this.l,this.R,_t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,lt=this.g;if((xe=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(xe)){var Re=xe;break t}}Re=null}if(p=Re)bs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,p);else{this.o=!1,this.s=3,It(12),$r(this),Ci(this);break e}}if(this.P){p=!0;let tn;for(;!this.J&&this.C<K.length;)if(tn=j0(this,K),tn==Il){_t==4&&(this.s=4,It(14),p=!1),bs(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Cd){this.s=4,It(15),bs(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else bs(this.i,this.l,tn,null),Sl(this,tn);if(kd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||K.length!=0||this.h.h||(this.s=1,It(16),p=!1),this.o=this.o&&p,!p)bs(this.i,this.l,K,"[Invalid Chunked Response]"),$r(this),Ci(this);else if(0<K.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Nl(gt),gt.M=!0,It(11))}}else bs(this.i,this.l,K,null),Sl(this,K);_t==4&&$r(this),this.o&&!this.J&&(_t==4?rp(this.j,this):(this.o=!1,oa(this)))}else rT(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),$r(this),Ci(this)}}}catch{}finally{}};function kd(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function j0(c,f){var p=c.C,v=f.indexOf(`
`,p);return v==-1?Il:(p=Number(f.substring(p,v)),isNaN(p)?Cd:(v+=1,v+p>f.length?Il:(f=f.slice(v,v+p),c.C=v+p,f)))}Yn.prototype.cancel=function(){this.J=!0,$r(this)};function oa(c){c.S=Date.now()+c.I,Od(c,c.I)}function Od(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ri(m(c.ba,c),f)}function Rl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Yn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(F0(this.i,this.A),this.L!=2&&(Ai(),It(17)),$r(this),this.s=2,Ci(this)):Od(this,this.S-c)};function Ci(c){c.j.G==0||c.J||rp(c.j,c)}function $r(c){Rl(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,Qn(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function Sl(c,f){try{var p=c.j;if(p.G!=0&&(p.g==c||Cl(p.h,c))){if(!c.K&&Cl(p.h,c)&&p.G==3){try{var v=p.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)pa(p),fa(p);else break e;xl(p),It(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ri(m(p.Za,p),6e3));if(1>=Dd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else qr(p,11)}else if((c.K||p.g==c)&&pa(p),!S(f))for(D=p.Da.g.parse(f),f=0;f<D.length;f++){let Re=D[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const gt=Re[3];gt!=null&&(p.la=gt,p.j.info("VER="+p.la));const _t=Re[4];_t!=null&&(p.Aa=_t,p.j.info("SVER="+p.Aa));const Rs=Re[5];Rs!=null&&typeof Rs=="number"&&0<Rs&&(v=1.5*Rs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const tn=c.g;if(tn){const ga=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var F=v.h;F.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Pl(F,F.h),F.h=null))}if(v.D){const Dl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(v.ya=Dl,Le(v.I,v.D,Dl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var K=c;if(v.qa=op(v,v.J?v.ia:null,v.W),K.K){Ld(v.h,K);var xe=K,lt=v.L;lt&&(xe.I=lt),xe.B&&(Rl(xe),oa(xe)),v.g=K}else tp(v);0<p.i.length&&da(p)}else Re[0]!="stop"&&Re[0]!="close"||qr(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?qr(p,7):Ol(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}Ai(4)}catch{}}var B0=class{constructor(c,f){this.g=c,this.map=f}};function xd(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nd(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Dd(c){return c.h?1:c.g?c.g.size:0}function Cl(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Pl(c,f){c.g?c.g.add(f):c.h=f}function Ld(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}xd.prototype.cancel=function(){if(this.i=Md(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Md(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const p of c.g.values())f=f.concat(p.D);return f}return k(c.i)}function $0(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],p=c.length,v=0;v<p;v++)f.push(c[v]);return f}f=[],p=0;for(v in c)f[p++]=c[v];return f}function H0(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var p=0;p<c;p++)f.push(p);return f}f=[],p=0;for(const v in c)f[p++]=v;return f}}}function Vd(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var p=H0(c),v=$0(c),D=v.length,F=0;F<D;F++)f.call(void 0,v[F],p&&p[F],c)}var Fd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q0(c,f){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var v=c[p].indexOf("="),D=null;if(0<=v){var F=c[p].substring(0,v);D=c[p].substring(v+1)}else F=c[p];f(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Hr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Hr){this.h=c.h,aa(this,c.j),this.o=c.o,this.g=c.g,ca(this,c.s),this.l=c.l;var f=c.i,p=new Oi;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Ud(this,p),this.m=c.m}else c&&(f=String(c).match(Fd))?(this.h=!1,aa(this,f[1]||"",!0),this.o=Pi(f[2]||""),this.g=Pi(f[3]||"",!0),ca(this,f[4]),this.l=Pi(f[5]||"",!0),Ud(this,f[6]||"",!0),this.m=Pi(f[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}Hr.prototype.toString=function(){var c=[],f=this.j;f&&c.push(ki(f,jd,!0),":");var p=this.g;return(p||f=="file")&&(c.push("//"),(f=this.o)&&c.push(ki(f,jd,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(ki(p,p.charAt(0)=="/"?K0:W0,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",ki(p,Q0)),c.join("")};function An(c){return new Hr(c)}function aa(c,f,p){c.j=p?Pi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function ca(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Ud(c,f,p){f instanceof Oi?(c.i=f,Y0(c.i,c.h)):(p||(f=ki(f,G0)),c.i=new Oi(f,c.h))}function Le(c,f,p){c.i.set(f,p)}function la(c){return Le(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Pi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ki(c,f,p){return typeof c=="string"?(c=encodeURI(c).replace(f,z0),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function z0(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var jd=/[#\/\?@]/g,W0=/[#\?:]/g,K0=/[#\?]/g,G0=/[#\?@]/g,Q0=/#/g;function Oi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Xn(c){c.g||(c.g=new Map,c.h=0,c.i&&q0(c.i,function(f,p){c.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Oi.prototype,t.add=function(c,f){Xn(this),this.i=null,c=Is(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(f),this.h+=1,this};function Bd(c,f){Xn(c),f=Is(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function $d(c,f){return Xn(c),f=Is(c,f),c.g.has(f)}t.forEach=function(c,f){Xn(this),this.g.forEach(function(p,v){p.forEach(function(D){c.call(f,D,v,this)},this)},this)},t.na=function(){Xn(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let v=0;v<f.length;v++){const D=c[v];for(let F=0;F<D.length;F++)p.push(f[v])}return p},t.V=function(c){Xn(this);let f=[];if(typeof c=="string")$d(this,c)&&(f=f.concat(this.g.get(Is(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)f=f.concat(c[p])}return f},t.set=function(c,f){return Xn(this),this.i=null,c=Is(this,c),$d(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Hd(c,f,p){Bd(c,f),0<p.length&&(c.i=null,c.g.set(Is(c,f),k(p)),c.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var v=f[p];const F=encodeURIComponent(String(v)),K=this.V(v);for(v=0;v<K.length;v++){var D=F;K[v]!==""&&(D+="="+encodeURIComponent(String(K[v]))),c.push(D)}}return this.i=c.join("&")};function Is(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function Y0(c,f){f&&!c.j&&(Xn(c),c.i=null,c.g.forEach(function(p,v){var D=v.toLowerCase();v!=D&&(Bd(this,v),Hd(this,D,p))},c)),c.j=f}function X0(c,f){const p=new Si;if(a.Image){const v=new Image;v.onload=g(Jn,p,"TestLoadImage: loaded",!0,f,v),v.onerror=g(Jn,p,"TestLoadImage: error",!1,f,v),v.onabort=g(Jn,p,"TestLoadImage: abort",!1,f,v),v.ontimeout=g(Jn,p,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function J0(c,f){const p=new Si,v=new AbortController,D=setTimeout(()=>{v.abort(),Jn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(D),F.ok?Jn(p,"TestPingServer: ok",!0,f):Jn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Jn(p,"TestPingServer: error",!1,f)})}function Jn(c,f,p,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(p)}catch{}}function Z0(){this.g=new Gt}function eT(c,f,p){const v=p||"";try{Vd(c,function(D,F){let K=D;u(D)&&(K=ws(D)),f.push(v+F+"="+encodeURIComponent(K))})}catch(D){throw f.push(v+"type="+encodeURIComponent("_badmap")),D}}function xi(c){this.l=c.Ub||null,this.j=c.eb||!1}R(xi,Ts),xi.prototype.g=function(){return new ua(this.l,this.j)},xi.prototype.i=function(c){return function(){return c}}({});function ua(c,f){se.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ua,se),t=ua.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Di(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qd(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function qd(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Ni(this):Di(this),this.readyState==3&&qd(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Ni(this))},t.Qa=function(c){this.g&&(this.response=c,Ni(this))},t.ga=function(){this.g&&Ni(this)};function Ni(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Di(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=f.next();return c.join(`\r
`)};function Di(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function zd(c){let f="";return M(c,function(p,v){f+=v,f+=":",f+=p,f+=`\r
`}),f}function kl(c,f,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=zd(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):Le(c,f,p))}function We(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(We,se);var tT=/^https?$/i,nT=["POST","PUT"];t=We.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bl.g(),this.v=this.o?Ed(this.o):Ed(bl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){Wd(this,F);return}if(c=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)p.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())p.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),D=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(nT,f,void 0))||v||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of p)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qd(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Wd(this,F)}};function Wd(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Kd(c),ha(c)}function Kd(c){c.A||(c.A=!0,ue(c,"complete"),ue(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ue(this,"complete"),ue(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gd(this):this.bb())},t.bb=function(){Gd(this)};function Gd(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Rn(c)!=4||c.Z()!=2)){if(c.u&&Rn(c)==4)be(c.Ea,0,c);else if(ue(c,"readystatechange"),Rn(c)==4){c.h=!1;try{const K=c.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var v;if(v=K===0){var D=String(c.D).match(Fd)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),v=!tT.test(D?D.toLowerCase():"")}p=v}if(p)ue(c,"complete"),ue(c,"success");else{c.m=6;try{var F=2<Rn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Kd(c)}}finally{ha(c)}}}}function ha(c,f){if(c.g){Qd(c);const p=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ue(c,"ready");try{p.onreadystatechange=v}catch{}}}function Qd(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Rn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),bt(f)}};function Yd(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function rT(c){const f={};c=(c.g&&2<=Rn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(S(c[v]))continue;var p=C(c[v]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=f[D]||[];f[D]=F,F.push(p)}w(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Li(c,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||f}function Xd(c){this.Aa=0,this.i=[],this.j=new Si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Li("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Li("baseRetryDelayMs",5e3,c),this.cb=Li("retryDelaySeedMs",1e4,c),this.Wa=Li("forwardChannelMaxRetries",2,c),this.wa=Li("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new xd(c&&c.concurrentRequestLimit),this.Da=new Z0,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xd.prototype,t.la=8,t.G=1,t.connect=function(c,f,p,v){It(0),this.W=c,this.H=f||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=op(this,null,this.W),da(this)};function Ol(c){if(Jd(c),c.G==3){var f=c.U++,p=An(c.I);if(Le(p,"SID",c.K),Le(p,"RID",f),Le(p,"TYPE","terminate"),Mi(c,p),f=new Yn(c,c.j,f),f.L=2,f.v=la(An(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=ap(f.j,null),f.g.ea(f.v)),f.F=Date.now(),oa(f)}ip(c)}function fa(c){c.g&&(Nl(c),c.g.cancel(),c.g=null)}function Jd(c){fa(c),c.u&&(a.clearTimeout(c.u),c.u=null),pa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function da(c){if(!Nd(c.h)&&!c.s){c.s=!0;var f=c.Ga;te||en(),ie||(te(),ie=!0),je.add(f,c),c.B=0}}function sT(c,f){return Dd(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ri(m(c.Ga,c,f),sp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const D=new Yn(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),E(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=ep(this,D,f),p=An(this.I),Le(p,"RID",c),Le(p,"CVER",22),this.D&&Le(p,"X-HTTP-Session-Id",this.D),Mi(this,p),F&&(this.O?f="headers="+encodeURIComponent(String(zd(F)))+"&"+f:this.m&&kl(p,this.m,F)),Pl(this.h,D),this.Ua&&Le(p,"TYPE","init"),this.P?(Le(p,"$req",f),Le(p,"SID","null"),D.T=!0,Al(D,p,null)):Al(D,p,f),this.G=2}}else this.G==3&&(c?Zd(this,c):this.i.length==0||Nd(this.h)||Zd(this))};function Zd(c,f){var p;f?p=f.l:p=c.U++;const v=An(c.I);Le(v,"SID",c.K),Le(v,"RID",p),Le(v,"AID",c.T),Mi(c,v),c.m&&c.o&&kl(v,c.m,c.o),p=new Yn(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),f&&(c.i=f.D.concat(c.i)),f=ep(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Pl(c.h,p),Al(p,v,f)}function Mi(c,f){c.H&&M(c.H,function(p,v){Le(f,v,p)}),c.l&&Vd({},function(p,v){Le(f,v,p)})}function ep(c,f,p){p=Math.min(c.i.length,p);var v=c.l?m(c.l.Na,c.l,c):null;e:{var D=c.i;let F=-1;for(;;){const K=["count="+p];F==-1?0<p?(F=D[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let xe=!0;for(let lt=0;lt<p;lt++){let Re=D[lt].g;const gt=D[lt].map;if(Re-=F,0>Re)F=Math.max(0,D[lt].g-100),xe=!1;else try{eT(gt,K,"req"+Re+"_")}catch{v&&v(gt)}}if(xe){v=K.join("&");break e}}}return c=c.i.splice(0,p),f.D=c,v}function tp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;te||en(),ie||(te(),ie=!0),je.add(f,c),c.v=0}}function xl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ri(m(c.Fa,c),sp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,np(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ri(m(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),fa(this),np(this))};function Nl(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function np(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=An(c.qa);Le(f,"RID","rpc"),Le(f,"SID",c.K),Le(f,"AID",c.T),Le(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Le(f,"TO",c.ja),Le(f,"TYPE","xmlhttp"),Mi(c,f),c.m&&c.o&&kl(f,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=la(An(f)),p.m=null,p.P=!0,Pd(p,c)}t.Za=function(){this.C!=null&&(this.C=null,fa(this),xl(this),It(19))};function pa(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function rp(c,f){var p=null;if(c.g==f){pa(c),Nl(c),c.g=null;var v=2}else if(Cl(c.h,f))p=f.D,Ld(c.h,f),v=1;else return;if(c.G!=0){if(f.o)if(v==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var D=c.B;v=ra(),ue(v,new Ad(v,p)),da(c)}else tp(c);else if(D=f.s,D==3||D==0&&0<f.X||!(v==1&&sT(c,f)||v==2&&xl(c)))switch(p&&0<p.length&&(f=c.h,f.i=f.i.concat(p)),D){case 1:qr(c,5);break;case 4:qr(c,10);break;case 3:qr(c,6);break;default:qr(c,2)}}}function sp(c,f){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*f}function qr(c,f){if(c.j.info("Error code "+f),f==2){var p=m(c.fb,c),v=c.Xa;const D=!v;v=new Hr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||aa(v,"https"),la(v),D?X0(v.toString(),p):J0(v.toString(),p)}else It(2);c.G=0,c.l&&c.l.sa(f),ip(c),Jd(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function ip(c){if(c.G=0,c.ka=[],c.l){const f=Md(c.h);(f.length!=0||c.i.length!=0)&&(x(c.ka,f),x(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function op(c,f,p){var v=p instanceof Hr?An(p):new Hr(p);if(v.g!="")f&&(v.g=f+"."+v.g),ca(v,v.s);else{var D=a.location;v=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var F=new Hr(null);v&&aa(F,v),f&&(F.g=f),D&&ca(F,D),p&&(F.l=p),v=F}return p=c.D,f=c.ya,p&&f&&Le(v,p,f),Le(v,"VER",c.la),Mi(c,v),v}function ap(c,f,p){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new We(new xi({eb:p})):new We(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cp(){}t=cp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ma(){}ma.prototype.g=function(c,f){return new Lt(c,f)};function Lt(c,f){se.call(this),this.g=new Xd(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!S(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!S(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new As(this)}R(Lt,se),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Ol(this.g)},Lt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=ws(c),c=p);f.i.push(new B0(f.Ya++,c)),f.G==3&&da(f)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Ol(this.g),delete this.g,Lt.aa.N.call(this)};function lp(c){wl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const p in f){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}R(lp,wl);function up(){Tl.call(this),this.status=1}R(up,Tl);function As(c){this.g=c}R(As,cp),As.prototype.ua=function(){ue(this.g,"a")},As.prototype.ta=function(c){ue(this.g,new lp(c))},As.prototype.sa=function(c){ue(this.g,new up)},As.prototype.ra=function(){ue(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,VE=function(){return new ma},ME=function(){return ra()},LE=Br,sh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sa.NO_ERROR=0,sa.TIMEOUT=8,sa.HTTP_ERROR=6,Ga=sa,Rd.COMPLETE="complete",DE=Rd,wd.EventType=Ii,Ii.OPEN="a",Ii.CLOSE="b",Ii.ERROR="c",Ii.MESSAGE="d",se.prototype.listen=se.prototype.K,zi=wd,NE=xi,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,xE=We}).apply(typeof xa<"u"?xa:typeof self<"u"?self:typeof window<"u"?window:{});const Eg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Tf("@firebase/firestore");function ji(){return hs.logLevel}function ne(t,...e){if(hs.logLevel<=we.DEBUG){const n=e.map(Df);hs.debug(`Firestore (${vi}): ${t}`,...n)}}function jn(t,...e){if(hs.logLevel<=we.ERROR){const n=e.map(Df);hs.error(`Firestore (${vi}): ${t}`,...n)}}function ni(t,...e){if(hs.logLevel<=we.WARN){const n=e.map(Df);hs.warn(`Firestore (${vi}): ${t}`,...n)}}function Df(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Ne(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class VO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FO{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new FE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new vt(e)}}class UO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $O{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new BO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=HO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new rt(0,0))}static max(){return new ge(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Po{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const qO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Po{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return qO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Fe.fromString(e))}static fromName(e){return new he(Fe.fromString(e).popFirst(5))}static empty(){return new he(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Fe(e.slice()))}}function zO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new kr(s,he.empty(),e)}function WO(t){return new kr(t.readTime,t.key,-1)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(ge.min(),he.empty(),-1)}static max(){return new kr(ge.max(),he.empty(),-1)}}function KO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==GO)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function YO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lf.oe=-1;function el(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function XO(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tg(this.data.getIterator())}getIteratorFrom(e){return new Tg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Tg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new dt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class BE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new BE("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const JO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=JO.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vf(t){const e=t.mapValue.fields.__previous_value__;return Mf(e)?Vf(e):e}function ko(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:e2(t)?9007199254740991:10:pe()}function wn(t,e){if(t===e)return!0;const n=ds(t);if(n!==ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ko(t).isEqual(ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Or(s.timestampValue),a=Or(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fs(s.bytesValue).isEqual(fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),a=Xe(i.doubleValue);return o===a?Tc(o)===Tc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(wg(o)!==wg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!wn(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function xo(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=ds(t),r=ds(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Xe(i.integerValue||i.doubleValue),l=Xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return bg(t.timestampValue,e.timestampValue);case 4:return bg(ko(t),ko(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const a=fs(i),l=fs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Se(a[u],l[u]);if(h!==0)return h}return Se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Se(Xe(i.latitude),Xe(o.latitude));return a!==0?a:Se(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=si(a[u],l[u]);if(h)return h}return Se(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Da.mapValue&&o===Da.mapValue)return 0;if(i===Da.mapValue)return 1;if(o===Da.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const m=Se(l[d],h[d]);if(m!==0)return m;const g=si(a[l[d]],u[h[d]]);if(g!==0)return g}return Se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Or(t),r=Or(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function ii(t){return ih(t)}function ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ih(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ih(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function oh(t){return!!t&&"integerValue"in t}function Ff(t){return!!t&&"arrayValue"in t}function Ig(t){return!!t&&"nullValue"in t}function Ag(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function e2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oo(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(oo(this.value))}}function $E(t){const e=[];return vs(t.fields,(n,r)=>{const s=new ft([n]);if(Qa(r)){const i=$E(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,ge.min(),ge.min(),ge.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,ge.min(),ge.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ge.min(),ge.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bc{constructor(e,n){this.position=e,this.inclusive=n}}function Rg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ic{constructor(e,n="asc"){this.field=e,this.dir=n}}function t2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class HE{}class tt extends HE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new r2(e,n,r):n==="array-contains"?new o2(e,r):n==="in"?new a2(e,r):n==="not-in"?new c2(e,r):n==="array-contains-any"?new l2(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new s2(e,r):new i2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&ds(this.value)===ds(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends HE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return qE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qE(t){return t.op==="and"}function zE(t){return n2(t)&&qE(t)}function n2(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function ah(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+ii(t.value);if(zE(t))return t.filters.map(e=>ah(e)).join(",");{const e=t.filters.map(n=>ah(n)).join(",");return`${t.op}(${e})`}}function WE(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&WE(o,s.filters[a]),!0):!1}(t,e):void pe()}function KE(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${ii(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(KE).join(" ,")+"}"}(t):"Filter"}class r2 extends tt{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class s2 extends tt{constructor(e,n){super(e,"in",n),this.keys=GE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class i2 extends tt{constructor(e,n){super(e,"not-in",n),this.keys=GE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function GE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class o2 extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ff(n)&&xo(n.arrayValue,this.value)}}class a2 extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xo(this.value.arrayValue,n)}}class c2 extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xo(this.value.arrayValue,n)}}class l2 extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Cg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new u2(t,e,n,r,s,i,o)}function Uf(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ah(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),el(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ii(r)).join(",")),e.ue=n}return e.ue}function jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!t2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function ch(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function h2(t,e,n,r,s,i,o,a){return new tl(t,e,n,r,s,i,o,a)}function QE(t){return new tl(t)}function Pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function f2(t){return t.collectionGroup!==null}function ao(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dt(ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ic(i,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new Ic(ft.keyField(),r))}return e.ce}function yn(t){const e=_e(t);return e.le||(e.le=d2(e,ao(t))),e.le}function d2(t,e){if(t.limitType==="F")return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ic(s.field,i)});const n=t.endAt?new bc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bc(t.startAt.position,t.startAt.inclusive):null;return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lh(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nl(t,e){return jf(yn(t),yn(e))&&t.limitType===e.limitType}function YE(t){return`${Uf(yn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>KE(s)).join(", ")}]`),el(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ii(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ii(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function rl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Rg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ao(r),s)||r.endAt&&!function(o,a,l){const u=Rg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ao(r),s))}(t,e)}function p2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XE(t){return(e,n)=>{let r=!1;for(const s of ao(t)){const i=m2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function m2(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?si(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new ze(he.comparator);function Bn(){return g2}const JE=new ze(he.comparator);function Wi(...t){let e=JE;for(const n of t)e=e.insert(n.key,n);return e}function ZE(t){let e=JE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return co()}function ew(){return co()}function co(){return new Ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const _2=new ze(he.comparator),y2=new dt(he.comparator);function ve(...t){let e=y2;for(const n of t)e=e.add(n);return e}const v2=new dt(Se);function E2(){return v2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function nw(t){return{integerValue:""+t}}function w2(t,e){return XO(e)?nw(e):tw(t,e)}/**
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
 */class sl{constructor(){this._=void 0}}function T2(t,e,n){return t instanceof Ac?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mf(i)&&(i=Vf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof No?sw(t,e):t instanceof Do?iw(t,e):function(s,i){const o=rw(s,i),a=kg(o)+kg(s.Pe);return oh(o)&&oh(s.Pe)?nw(a):tw(s.serializer,a)}(t,e)}function b2(t,e,n){return t instanceof No?sw(t,e):t instanceof Do?iw(t,e):n}function rw(t,e){return t instanceof Rc?function(r){return oh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ac extends sl{}class No extends sl{constructor(e){super(),this.elements=e}}function sw(t,e){const n=ow(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends sl{constructor(e){super(),this.elements=e}}function iw(t,e){let n=ow(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class Rc extends sl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function kg(t){return Xe(t.integerValue||t.doubleValue)}function ow(t){return Ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function I2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof No&&s instanceof No||r instanceof Do&&s instanceof Do?ri(r.elements,s.elements,wn):r instanceof Rc&&s instanceof Rc?wn(r.Pe,s.Pe):r instanceof Ac&&s instanceof Ac}(t.transform,e.transform)}class A2{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class il{}function aw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bf(t.key,Jt.none()):new Xo(t.key,t.data,Jt.none());{const n=t.data,r=Ot.empty();let s=new dt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new jr(t.key,r,new Ut(s.toArray()),Jt.none())}}function R2(t,e,n){t instanceof Xo?function(s,i,o){const a=s.value.clone(),l=xg(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(s,i,o){if(!Ya(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=xg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(cw(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof Xo?function(i,o,a,l){if(!Ya(i.precondition,o))return a;const u=i.value.clone(),h=Ng(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,o,a,l){if(!Ya(i.precondition,o))return a;const u=Ng(i.fieldTransforms,l,o),h=o.data;return h.setAll(cw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Ya(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function S2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=rw(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function Og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ri(r,s,(i,o)=>I2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends il{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jr extends il{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xg(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,b2(o,a,n[s]))}return r}function Ng(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,T2(i,o,e))}return r}class Bf extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class C2 extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&R2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ew();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=aw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,r)=>Og(n,r))&&ri(this.baseMutations,e.baseMutations,(n,r)=>Og(n,r))}}class $f{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return _2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $f(e,n,r,s)}}/**
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
 */class k2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class O2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,Te;function x2(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function lw(t){if(t===void 0)return jn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ye.OK:return $.OK;case Ye.CANCELLED:return $.CANCELLED;case Ye.UNKNOWN:return $.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return $.INTERNAL;case Ye.UNAVAILABLE:return $.UNAVAILABLE;case Ye.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ye.NOT_FOUND:return $.NOT_FOUND;case Ye.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ye.ABORTED:return $.ABORTED;case Ye.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ye.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(Te=Ye||(Ye={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function N2(){return new TextEncoder}/**
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
 */const D2=new is([4294967295,4294967295],0);function Dg(t){const e=N2().encode(t),n=new OE;return n.update(e),new Uint8Array(n.digest())}function Lg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new is([n,r],0),new is([s,i],0)]}class Hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ki(`Invalid padding: ${n}`);if(r<0)throw new Ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=is.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(is.fromNumber(r)));return s.compare(D2)===1&&(s=new is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Dg(e),[r,s]=Lg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Hf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Dg(e),[r,s]=Lg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ol(ge.min(),s,new ze(Se),Bn(),ve())}}class Jo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class uw{constructor(e,n){this.targetId=e,this.me=n}}class hw{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Mg{constructor(){this.fe=0,this.ge=Fg(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Jo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Fg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class L2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=Vg(),this.Qe=new ze(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ch(i))if(r===0){const o=new he(i.path);this.Ue(n,o,Et.newNoDocument(o,ge.min()))}else Ne(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=fs(r).toUint8Array()}catch(l){if(l instanceof BE)return ni("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Hf(o,s,i)}catch(l){return ni(l instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&ch(a.target)){const l=new he(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Et.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ve();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ol(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=Vg(),this.Qe=new ze(Se),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Mg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new dt(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Mg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Vg(){return new ze(he.comparator)}function Fg(){return new ze(he.comparator)}const M2={asc:"ASCENDING",desc:"DESCENDING"},V2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},F2={and:"AND",or:"OR"};class U2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uh(t,e){return t.useProto3Json||el(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function j2(t,e){return Sc(t,e.toTimestamp())}function vn(t){return Ne(!!t),ge.fromTimestamp(function(n){const r=Or(n);return new rt(r.seconds,r.nanos)}(t))}function qf(t,e){return hh(t,e).canonicalString()}function hh(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dw(t){const e=Fe.fromString(t);return Ne(yw(e)),e}function fh(t,e){return qf(t.databaseId,e.path)}function iu(t,e){const n=dw(e);if(n.get(1)!==t.databaseId.projectId)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(mw(n))}function pw(t,e){return qf(t.databaseId,e)}function B2(t){const e=dw(t);return e.length===4?Fe.emptyPath():mw(e)}function dh(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mw(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ug(t,e,n){return{name:fh(t,e),fields:n.value.mapValue.fields}}function $2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ne(h===void 0||typeof h=="string"),mt.fromBase64String(h||"")):(Ne(h===void 0||h instanceof Buffer||h instanceof Uint8Array),mt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:lw(u.code);return new ce(h,u.message||"")}(o);n=new hw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=iu(t,r.document.name),i=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ge.min(),a=new Ot({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Xa(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=iu(t,r.document),i=r.readTime?vn(r.readTime):ge.min(),o=Et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=iu(t,r.document),i=r.removedTargetIds||[];n=new Xa([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new O2(s,i),a=r.targetId;n=new uw(a,o)}}return n}function H2(t,e){let n;if(e instanceof Xo)n={update:Ug(t,e.key,e.value)};else if(e instanceof Bf)n={delete:fh(t,e.key)};else if(e instanceof jr)n={update:Ug(t,e.key,e.data),updateMask:J2(e.fieldMask)};else{if(!(e instanceof C2))return pe();n={verify:fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:j2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function q2(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?vn(s.updateTime):vn(i);return o.isEqual(ge.min())&&(o=vn(i)),new A2(o,s.transformResults||[])}(n,e))):[]}function z2(t,e){return{documents:[pw(t,e.path)]}}function W2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pw(t,s);const i=function(u){if(u.length!==0)return _w(Tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Os(m.field),direction:Q2(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=uh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function K2(t){let e=B2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=gw(d);return m instanceof Tn&&zE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(R){return new Ic(xs(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,el(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,g=d.values||[];return new bc(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new bc(g,m)}(n.endAt)),h2(e,s,o,i,a,"F",l,u)}function G2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xs(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>gw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function Q2(t){return M2[t]}function Y2(t){return V2[t]}function X2(t){return F2[t]}function Os(t){return{fieldPath:t.canonicalString()}}function xs(t){return ft.fromServerFormat(t.fieldPath)}function _w(t){return t instanceof tt?function(n){if(n.op==="=="){if(Ag(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(Ig(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ag(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(Ig(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:Y2(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>_w(s));return r.length===1?r[0]:{compositeFilter:{op:X2(n.op),filters:r}}}(t):pe()}function J2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.ct=e}}function ex(t){const e=K2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this.an=new nx}addToCollectionParentIndex(e,n){return this.an.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(kr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class nx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new oi(0)}static Bn(){return new oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.changes=new Ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&lo(r.mutation,s,Ut.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Bn();const o=co(),a=function(){return co()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof jr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),lo(h.mutation,u,h.mutation.getFieldMask(),rt.now())):o.set(u.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new sx(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=co();let s=new ze((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Ut.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||ve()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=ew();h.forEach(m=>{if(!i.has(m)){const g=aw(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):f2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(Jr());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:a,changes:ZE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=Wi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Wi();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(d,m){return new tl(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Et.newInvalidDocument(h)))});let a=Wi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&lo(h.mutation,u,Ut.empty(),rt.now()),rl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return H.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:vn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:ex(s.bundledQuery),readTime:vn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class ax{constructor(){this.overlays=new ze(he.comparator),this.Pr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=Jr(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Jr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new k2(n,r));let i=this.Pr.get(n);i===void 0&&(i=ve(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class cx{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.Ir=new dt(it.Tr),this.Er=new dt(it.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new it(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new it(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new he(new Fe([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Er.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new he(new Fe([])),r=new it(n,e),s=new it(n,e+1);let i=ve();return this.Er.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return he.comparator(e.key,n.key)||Se(e.yr,n.yr)}static dr(e,n){return Se(e.yr,n.yr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new dt(it.Tr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new P2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Se);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new it(new he(i),0);let a=new dt(Se);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.yr)),!0)},o),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return H.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new it(n,0),s=this.Sr.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.Fr=e,this.docs=function(){return new ze(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||KO(WO(h),r)<=0||(s.has(h.key)||rl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Mr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hx(this)}getSize(e){return H.resolve(this.size)}}class hx extends rx{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.persistence=e,this.Or=new Ei(n=>Uf(n),jf),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new zf,this.targetCount=0,this.Br=oi.Ln()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),H.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Qn(n),H.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n){this.kr={},this.overlays={},this.qr=new Lf(0),this.Qr=!1,this.Qr=!0,this.Kr=new cx,this.referenceDelegate=e(this),this.$r=new fx(this),this.indexManager=new tx,this.remoteDocumentCache=function(s){return new ux(s)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Z2(n),this.Wr=new ox(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ax,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new lx(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new px(this.qr.next());return this.referenceDelegate.Gr(),r(s).next(i=>this.referenceDelegate.zr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}jr(e,n){return H.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class px extends QO{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.Hr=new zf,this.Jr=null}static Yr(e){return new Wf(e)}get Zr(){if(this.Jr)return this.Jr;throw pe()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(s=>this.Zr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Zr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Zr,r=>{const s=he.fromPath(r);return this.Xr(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return H.or([()=>H.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=s}static Ui(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kf(e,n.fromCache,r,s)}}/**
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
 */class mx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return nC()?8:YO(pt())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Yi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new mx;return this.Zi(e,n,o).next(a=>{if(i.result=a,this.Gi)return this.Xi(e,n,o,a.size)})}).next(()=>i.result)}Xi(e,n,r,s){return r.documentReadCount<this.zi?(ji()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),H.resolve()):(ji()<=we.DEBUG&&ne("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ji*s?(ji()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):H.resolve())}Ji(e,n){if(Pg(n))return H.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=lh(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Hi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.es(n,a);return this.ts(n,u,o,l.readTime)?this.Ji(e,lh(n,null,"F")):this.ns(e,u,n,l)}))})))}Yi(e,n,r,s){return Pg(n)||s.isEqual(ge.min())?H.resolve(null):this.Hi.getDocuments(e,r).next(i=>{const o=this.es(n,i);return this.ts(n,o,r,s)?H.resolve(null):(ji()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(n)),this.ns(e,o,n,zO(s,-1)).next(a=>a))})}es(e,n){let r=new dt(XE(e));return n.forEach((s,i)=>{rl(e,i)&&(r=r.add(i))}),r}ts(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zi(e,n,r){return ji()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ks(n)),this.Hi.getDocumentsMatchingQuery(e,n,kr.min(),r)}ns(e,n,r,s){return this.Hi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,n,r,s){this.persistence=e,this.rs=n,this.serializer=s,this.ss=new ze(Se),this.os=new Ei(i=>Uf(i),jf),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ix(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function yx(t,e,n,r){return new _x(t,e,n,r)}async function vw(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function vx(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.us.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,m=d.keys();let g=H.resolve();return m.forEach(R=>{g=g.next(()=>h.getEntry(l,R)).next(k=>{const x=u.docVersions.get(R);Ne(x!==null),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ew(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function Ex(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.us.newChangeBuffer({trackRemovals:!0});s=n.ss;const a=[];e.targetChanges.forEach((h,d)=>{const m=s.get(d);if(!m)return;a.push(n.$r.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.$r.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,g,h)&&a.push(n.$r.updateTargetData(i,g))});let l=Bn(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(wx(i,o,e.documentUpdates).next(h=>{l=h.hs,u=h.Ps})),!r.isEqual(ge.min())){const h=n.$r.getLastRemoteSnapshotVersion(i).next(d=>n.$r.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ss=s,i))}function wx(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{hs:o,Ps:s}})}function Tx(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bx(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.$r.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.$r.allocateTargetId(r).next(o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function ph(t,e,n){const r=_e(t),s=r.ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Yo(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(s.target)}function jg(t,e,n){const r=_e(t);let s=ge.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=_e(l),m=d.os.get(h);return m!==void 0?H.resolve(d.ss.get(m)):d.$r.getTargetData(u,h)}(r,o,yn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ve())).next(a=>(Ix(r,p2(e),a),{documents:a,Is:i})))}function Ix(t,e,n){let r=t._s.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t._s.set(e,r)}class Bg{constructor(){this.activeTargetIds=E2()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ax{constructor(){this.io=new Bg,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Bg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let La=null;function ou(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class Px extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get vo(){return!1}Fo(n,r,s,i,o){const a=ou(),l=this.Mo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(u,i,o),this.Oo(n,l,u,s).then(h=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ni("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}No(n,r,s,i,o,a){return this.Fo(n,r,s,i,o)}xo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Mo(n,r){const s=Sx[n];return`${this.bo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,s){const i=ou();return new Promise((o,a)=>{const l=new xE;l.setWithCredentials(!0),l.listenOnce(DE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ga.NO_ERROR:const h=l.getResponseJson();ne(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Ga.TIMEOUT:ne(yt,`RPC '${e}' ${i} timed out`),a(new ce($.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const d=l.getStatus();if(ne(yt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const R=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(N)>=0?N:$.UNKNOWN}(g.status);a(new ce(R,g.message))}else a(new ce($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ne(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(yt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Lo(e,n,r){const s=ou(),i=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=VE(),a=ME(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new NE({})),this.xo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ne(yt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let m=!1,g=!1;const R=new Cx({Po:x=>{g?ne(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(ne(yt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ne(yt,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},Io:()=>d.close()}),k=(x,N,S)=>{x.listen(N,b=>{try{S(b)}catch(O){setTimeout(()=>{throw O},0)}})};return k(d,zi.EventType.OPEN,()=>{g||(ne(yt,`RPC '${e}' stream ${s} transport opened.`),R.po())}),k(d,zi.EventType.CLOSE,()=>{g||(g=!0,ne(yt,`RPC '${e}' stream ${s} transport closed`),R.wo())}),k(d,zi.EventType.ERROR,x=>{g||(g=!0,ni(yt,`RPC '${e}' stream ${s} transport errored:`,x),R.wo(new ce($.UNAVAILABLE,"The operation could not be completed")))}),k(d,zi.EventType.MESSAGE,x=>{var N;if(!g){const S=x.data[0];Ne(!!S);const b=S,O=b.error||((N=b[0])===null||N===void 0?void 0:N.error);if(O){ne(yt,`RPC '${e}' stream ${s} received error:`,O);const L=O.status;let M=function(_){const E=Ye[_];if(E!==void 0)return lw(E)}(L),w=O.message;M===void 0&&(M=$.INTERNAL,w="Unknown error status: "+L+" with message "+O.message),g=!0,R.wo(new ce(M,w)),d.close()}else ne(yt,`RPC '${e}' stream ${s} received:`,S),R.So(S)}}),k(a,LE.STAT_EVENT,x=>{x.stat===sh.PROXY?ne(yt,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===sh.NOPROXY&&ne(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.yo()},0),R}}function au(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){return new U2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=s,this.qo=i,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,r,s,i,o,a,l){this.ai=e,this.jo=r,this.Ho=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new ww(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Jo===n&&this.h_(r,s)},r=>{e(()=>{const s=new ce($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(s)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(s=>{r(()=>this.P_(s))}),this.stream.onMessage(s=>{r(()=>++this.Xo==1?this.T_(s):this.onNext(s))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kx extends Tw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=$2(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?vn(o.readTime):ge.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=dh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=ch(l)?{documents:z2(i,l)}:{query:W2(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=fw(i,o.resumeToken);const u=uh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Sc(i,o.snapshotVersion.toTimestamp());const u=uh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=G2(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=dh(this.serializer),n.removeTarget=e,this.__(n)}}class Ox extends Tw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=q2(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=dh(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>H2(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.p_=!1}y_(){if(this.p_)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,hh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce($.UNKNOWN,i.toString())})}No(e,n,r,s,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.No(e,hh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce($.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class Nx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(jn(n),this.b_=!1):ne("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=i,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Es(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.N_.add(4),await Zo(u),u.k_.set("Unknown"),u.N_.delete(4),await cl(u)}(this))})}),this.k_=new Nx(r,s)}}async function cl(t){if(Es(t))for(const e of t.L_)await e(!0)}async function Zo(t){for(const e of t.L_)await e(!1)}function bw(t,e){const n=_e(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),Xf(n)?Yf(n):wi(n).n_()&&Qf(n,e))}function Gf(t,e){const n=_e(t),r=wi(n);n.O_.delete(e),r.n_()&&Iw(n,e),n.O_.size===0&&(r.n_()?r.s_():Es(n)&&n.k_.set("Unknown"))}function Qf(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wi(t).d_(e)}function Iw(t,e){t.q_.xe(e),wi(t).A_(e)}function Yf(t){t.q_=new L2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),wi(t).start(),t.k_.D_()}function Xf(t){return Es(t)&&!wi(t).t_()&&t.O_.size>0}function Es(t){return _e(t).N_.size===0}function Aw(t){t.q_=void 0}async function Lx(t){t.k_.set("Online")}async function Mx(t){t.O_.forEach((e,n)=>{Qf(t,e)})}async function Vx(t,e){Aw(t),Xf(t)?(t.k_.F_(e),Yf(t)):t.k_.set("Unknown")}async function Fx(t,e,n){if(t.k_.set("Online"),e instanceof hw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.O_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.O_.delete(a),s.q_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof Xa?t.q_.Ke(e):e instanceof uw?t.q_.He(e):t.q_.We(e),!n.isEqual(ge.min()))try{const r=await Ew(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.O_.get(u);h&&i.O_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.O_.get(l);if(!h)return;i.O_.set(l,h.withResumeToken(mt.EMPTY_BYTE_STRING,h.snapshotVersion)),Iw(i,l);const d=new _r(h.target,l,u,h.sequenceNumber);Qf(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!Yo(e))throw e;t.N_.add(1),await Zo(t),t.k_.set("Offline"),n||(n=()=>Ew(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await cl(t)})}function Rw(t,e){return e().catch(n=>Cc(t,n,e))}async function ll(t){const e=_e(t),n=xr(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;Ux(e);)try{const s=await Tx(e.localStore,r);if(s===null){e.x_.length===0&&n.s_();break}r=s.batchId,jx(e,s)}catch(s){await Cc(e,s)}Sw(e)&&Cw(e)}function Ux(t){return Es(t)&&t.x_.length<10}function jx(t,e){t.x_.push(e);const n=xr(t);n.n_()&&n.R_&&n.V_(e.mutations)}function Sw(t){return Es(t)&&!xr(t).t_()&&t.x_.length>0}function Cw(t){xr(t).start()}async function Bx(t){xr(t).g_()}async function $x(t){const e=xr(t);for(const n of t.x_)e.V_(n.mutations)}async function Hx(t,e,n){const r=t.x_.shift(),s=$f.from(r,e,n);await Rw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ll(t)}async function qx(t,e){e&&xr(t).R_&&await async function(r,s){if(function(o){return x2(o)&&o!==$.ABORTED}(s.code)){const i=r.x_.shift();xr(r).i_(),await Rw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ll(r)}}(t,e),Sw(t)&&Cw(t)}async function Hg(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.N_.add(3),await Zo(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await cl(n)}async function zx(t,e){const n=_e(t);e?(n.N_.delete(2),await cl(n)):e||(n.N_.add(2),await Zo(n),n.k_.set("Unknown"))}function wi(t){return t.Q_||(t.Q_=function(n,r,s){const i=_e(n);return i.y_(),new kx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{To:Lx.bind(null,t),Ao:Mx.bind(null,t),Vo:Vx.bind(null,t),E_:Fx.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),Xf(t)?Yf(t):t.k_.set("Unknown")):(await t.Q_.stop(),Aw(t))})),t.Q_}function xr(t){return t.K_||(t.K_=function(n,r,s){const i=_e(n);return i.y_(),new Ox(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:Bx.bind(null,t),Vo:qx.bind(null,t),m_:$x.bind(null,t),f_:Hx.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await ll(t)):(await t.K_.stop(),t.x_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Jf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Yo(t))return new ce($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Wi(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.U_=new ze(he.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):pe():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ai(e,n,zs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class Kx{constructor(){this.queries=zg(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=zg(),i.forEach((o,a)=>{for(const l of a.z_)l.onError(r)})})(this,new ce($.ABORTED,"Firestore shutting down"))}}function zg(){return new Ei(t=>YE(t),nl)}async function Gx(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.j_()&&e.H_()&&(r=2):(i=new Wx,r=e.H_()?0:1);try{switch(r){case 0:i.G_=await n.onListen(s,!0);break;case 1:i.G_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Zf(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.z_.push(e),e.Y_(n.onlineState),i.G_&&e.Z_(i.G_)&&ed(n)}async function Qx(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.z_.indexOf(e);o>=0&&(i.z_.splice(o,1),i.z_.length===0?s=e.H_()?0:1:!i.j_()&&e.H_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Yx(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.z_)a.Z_(s)&&(r=!0);o.G_=s}}r&&ed(n)}function Xx(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.z_)i.onError(n);r.queries.delete(e)}function ed(t){t.J_.forEach(e=>{e.next()})}var mh,Wg;(Wg=mh||(mh={})).X_="default",Wg.Cache="cache";class Jx{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==mh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.key=e}}class kw{constructor(e){this.key=e}}class Zx{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=ve(),this.mutatedKeys=ve(),this.da=XE(e),this.Aa=new zs(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new qg,s=n?n.Aa:this.Aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const m=s.get(h),g=rl(this.query,d)?d:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;m&&g?m.data.isEqual(g.data)?R!==k&&(r.track({type:3,doc:g}),x=!0):this.fa(m,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.da(g,l)>0||u&&this.da(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),x=!0):m&&!g&&(r.track({type:1,doc:m}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Aa:o,ma:r,ts:a,mutatedKeys:i}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((h,d)=>function(g,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return k(g)-k(R)}(h.type,d.type)||this.da(h.doc,d.doc)),this.ga(r),s=s!=null&&s;const a=n&&!s?this.pa():[],l=this.Ea.size===0&&this.current&&!s?1:0,u=l!==this.Ta;return this.Ta=l,o.length!==0||u?{snapshot:new ai(this.query,e.Aa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new qg,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=ve(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new kw(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new Pw(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=ve();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return ai.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class eN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tN{constructor(e){this.key=e,this.Da=!1}}class nN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Ei(a=>YE(a),nl),this.Fa=new Map,this.Ma=new Set,this.xa=new ze(he.comparator),this.Oa=new Map,this.Na=new zf,this.La={},this.Ba=new Map,this.ka=oi.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function rN(t,e,n=!0){const r=Mw(t);let s;const i=r.va.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ba()):s=await Ow(r,e,n,!0),s}async function sN(t,e){const n=Mw(t);await Ow(n,e,!0,!1)}async function Ow(t,e,n,r){const s=await bx(t.localStore,yn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await iN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&bw(t.remoteStore,s),a}async function iN(t,e,n,r,s){t.Qa=(d,m,g)=>async function(k,x,N,S){let b=x.view.Va(N);b.ts&&(b=await jg(k.localStore,x.query,!1).then(({documents:w})=>x.view.Va(w,b)));const O=S&&S.targetChanges.get(x.targetId),L=S&&S.targetMismatches.get(x.targetId)!=null,M=x.view.applyChanges(b,k.isPrimaryClient,O,L);return Gg(k,x.targetId,M.ya),M.snapshot}(t,d,m,g);const i=await jg(t.localStore,e,!0),o=new Zx(e,i.Is),a=o.Va(i.documents),l=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);Gg(t,n,u.ya);const h=new eN(e,n,o);return t.va.set(e,h),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),u.snapshot}async function oN(t,e,n){const r=_e(t),s=r.va.get(e),i=r.Fa.get(s.targetId);if(i.length>1)return r.Fa.set(s.targetId,i.filter(o=>!nl(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ph(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gf(r.remoteStore,s.targetId),gh(r,s.targetId)}).catch(Qo)):(gh(r,s.targetId),await ph(r.localStore,s.targetId,!0))}async function aN(t,e){const n=_e(t),r=n.va.get(e),s=n.Fa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gf(n.remoteStore,r.targetId))}async function cN(t,e,n){const r=mN(t);try{const s=await function(o,a){const l=_e(o),u=rt.now(),h=a.reduce((g,R)=>g.add(R.key),ve());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=Bn(),k=ve();return l.us.getEntries(g,h).next(x=>{R=x,R.forEach((N,S)=>{S.isValidDocument()||(k=k.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,R)).next(x=>{d=x;const N=[];for(const S of a){const b=S2(S,d.get(S.key).overlayedDocument);b!=null&&N.push(new jr(S.key,b,$E(b.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,a)}).next(x=>{m=x;const N=x.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:m.batchId,changes:ZE(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.La[o.currentUser.toKey()];u||(u=new ze(Se)),u=u.insert(a,l),o.La[o.currentUser.toKey()]=u}(r,s.batchId,n),await ea(r,s.changes),await ll(r.remoteStore)}catch(s){const i=Zf(s,"Failed to persist write");n.reject(i)}}async function xw(t,e){const n=_e(t);try{const r=await Ex(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Oa.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Da=!0:s.modifiedDocuments.size>0?Ne(o.Da):s.removedDocuments.size>0&&(Ne(o.Da),o.Da=!1))}),await ea(n,r,e)}catch(r){await Qo(r)}}function Kg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.va.forEach((i,o)=>{const a=o.view.Y_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const m of d.z_)m.Y_(a)&&(u=!0)}),u&&ed(l)}(r.eventManager,e),s.length&&r.Ca.E_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lN(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Oa.get(e),i=s&&s.key;if(i){let o=new ze(he.comparator);o=o.insert(i,Et.newNoDocument(i,ge.min()));const a=ve().add(i),l=new ol(ge.min(),new Map,new ze(Se),o,a);await xw(r,l),r.xa=r.xa.remove(i),r.Oa.delete(e),td(r)}else await ph(r.localStore,e,!1).then(()=>gh(r,e,n)).catch(Qo)}async function uN(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await vx(n.localStore,e);Dw(n,r,null),Nw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,s)}catch(s){await Qo(s)}}async function hN(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ne(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Dw(r,e,n),Nw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,s)}catch(s){await Qo(s)}}function Nw(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function Dw(t,e,n){const r=_e(t);let s=r.La[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.La[r.currentUser.toKey()]=s}}function gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||Lw(t,r)})}function Lw(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(Gf(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),td(t))}function Gg(t,e,n){for(const r of n)r instanceof Pw?(t.Na.addReference(r.key,e),fN(t,r)):r instanceof kw?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||Lw(t,r.key)):pe()}function fN(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Ma.add(r),td(t))}function td(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new he(Fe.fromString(e)),r=t.ka.next();t.Oa.set(r,new tN(n)),t.xa=t.xa.insert(n,r),bw(t.remoteStore,new _r(yn(QE(n.path)),r,"TargetPurposeLimboResolution",Lf.oe))}}async function ea(t,e,n){const r=_e(t),s=[],i=[],o=[];r.va.isEmpty()||(r.va.forEach((a,l)=>{o.push(r.Qa(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Kf.Ui(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.E_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>H.forEach(u,m=>H.forEach(m.Ki,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>H.forEach(m.$i,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!Yo(d))throw d;ne("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.ss.get(m),R=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(R);h.ss=h.ss.insert(m,k)}}}(r.localStore,i))}async function dN(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await vw(n.localStore,e);n.currentUser=e,function(i,o){i.Ba.forEach(a=>{a.forEach(l=>{l.reject(new ce($.CANCELLED,o))})}),i.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.ls)}}function pN(t,e){const n=_e(t),r=n.Oa.get(e);if(r&&r.Da)return ve().add(r.key);{let s=ve();const i=n.Fa.get(e);if(!i)return s;for(const o of i){const a=n.va.get(o);s=s.unionWith(a.view.Ra)}return s}}function Mw(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lN.bind(null,e),e.Ca.E_=Yx.bind(null,e.eventManager),e.Ca.Ka=Xx.bind(null,e.eventManager),e}function mN(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hN.bind(null,e),e}class Qg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=al(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yx(this.persistence,new gx,e.initialUser,this.serializer)}createPersistence(e){return new dx(Wf.Yr,this.serializer)}createSharedClientState(e){return new Ax}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dN.bind(null,this.syncEngine),await zx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Kx}()}createDatastore(e){const n=al(e.databaseInfo.databaseId),r=function(i){return new Px(i)}(e.databaseInfo);return function(i,o,a,l){return new xx(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Dx(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Kg(this.syncEngine,n,0),function(){return $g.D()?new $g:new Rx}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new nN(s,i,o,a,l,u);return h&&(d.qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);ne("RemoteStore","RemoteStore shutting down."),i.N_.add(5),await Zo(i),i.B_.shutdown(),i.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _N{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=UE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ne("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ne("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cu(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EN(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Hg(e.remoteStore,s)),t._onlineComponents=e}function vN(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function EN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vN(n))throw n;ni("Error using user provided cache. Falling back to memory cache: "+n),await cu(t,new Qg)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await cu(t,new Qg);return t._offlineComponents}async function Vw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Yg(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Yg(t,new gN))),t._onlineComponents}function wN(t){return Vw(t).then(e=>e.syncEngine)}async function TN(t){const e=await Vw(t),n=e.eventManager;return n.onListen=rN.bind(null,e.syncEngine),n.onUnlisten=oN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aN.bind(null,e.syncEngine),n}function bN(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new _N({next:m=>{o.enqueueAndForget(()=>Qx(i,d)),m.fromCache&&l.source==="server"?u.reject(new ce($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Jx(a,h,{includeMetadataChanges:!0,oa:!0});return Gx(i,d)}(await TN(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Fw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e,n){if(!n)throw new ce($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IN(t,e,n,r){if(e===!0&&r===!0)throw new ce($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jg(t){if(!he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zg(t){if(he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function ci(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nd(t);throw new ce($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ul{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MO;switch(r.type){case"firstParty":return new jO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xg.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Xg.delete(n),r.terminate())}(this),Promise.resolve()}}function AN(t,e,n,r={}){var s;const i=(t=ci(t,ul))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=vt.MOCK_USER;else{a=YS(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(u)}t._authCredentials=new VO(new FE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hl(this.firestore,e,this._query)}}class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class Sr extends hl{constructor(e,n,r){super(e,n,QE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new he(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function YM(t,e,...n){if(t=ct(t),Uw("collection","path",e),t instanceof ul){const r=Fe.fromString(e,...n);return Zg(r),new Sr(t,null,r)}{if(!(t instanceof Zt||t instanceof Sr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Zg(r),new Sr(t.firestore,null,r)}}function XM(t,e,...n){if(t=ct(t),arguments.length===1&&(e=UE.newId()),Uw("doc","path",e),t instanceof ul){const r=Fe.fromString(e,...n);return Jg(r),new Zt(t,null,new he(r))}{if(!(t instanceof Zt||t instanceof Sr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Jg(r),new Zt(t.firestore,t instanceof Sr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new ww(this,"async_queue_retry"),this.Tu=()=>{const n=au();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=au();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=au();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Rr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Yo(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const s=Jf.createAndSchedule(this,e,n,r,i=>this.Ru(i));return this.cu.push(s),s}Eu(){this.lu&&pe()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}class fl extends ul{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new RN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jw(this),this._firestoreClient.terminate()}}function SN(t,e){const n=typeof t=="object"?t:Yv(),r=typeof t=="string"?t:"(default)",s=If(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=GS("firestore");i&&AN(s,...i)}return s}function rd(t){return t._firestoreClient||jw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jw(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new ZO(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Fw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new yN(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new li(mt.fromBase64String(e))}catch(n){throw new ce($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new li(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=/^__.*__$/;class PN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class Bw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $w(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class od{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.wu({path:r,bu:!1});return s.Du(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.wu({path:r,bu:!1});return s.pu(),s}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return Pc(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if($w(this.yu)&&CN.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class kN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||al(e)}Ou(e,n,r,s=!1){return new od({yu:e,methodName:n,xu:r,path:ft.emptyPath(),bu:!1,Mu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hw(t){const e=t._freezeSettings(),n=al(t._databaseId);return new kN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qw(t,e,n,r,s,i={}){const o=t.Ou(i.merge||i.mergeFields?2:0,e,n,s);ad("Data must be an object, but it was:",o,r);const a=zw(r,o);let l,u;if(i.merge)l=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=_h(e,d,n);if(!o.contains(m))throw new ce($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Kw(h,m)||h.push(m)}l=new Ut(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new PN(new Ot(a),l,u)}class pl extends sd{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pl}}function ON(t,e,n,r){const s=t.Ou(1,e,n);ad("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();vs(r,(l,u)=>{const h=cd(e,l,n);u=ct(u);const d=s.Cu(h);if(u instanceof pl)i.push(h);else{const m=ml(u,d);m!=null&&(i.push(h),o.set(h,m))}});const a=new Ut(i);return new Bw(o,a,s.fieldTransforms)}function xN(t,e,n,r,s,i){const o=t.Ou(1,e,n),a=[_h(e,r,n)],l=[s];if(i.length%2!=0)throw new ce($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(_h(e,i[m])),l.push(i[m+1]);const u=[],h=Ot.empty();for(let m=a.length-1;m>=0;--m)if(!Kw(u,a[m])){const g=a[m];let R=l[m];R=ct(R);const k=o.Cu(g);if(R instanceof pl)u.push(g);else{const x=ml(R,k);x!=null&&(u.push(g),h.set(g,x))}}const d=new Ut(u);return new Bw(h,d,o.fieldTransforms)}function ml(t,e){if(Ww(t=ct(t)))return ad("Unsupported field value:",e,t),zw(t,e);if(t instanceof sd)return function(r,s){if(!$w(s.yu))throw s.Fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Fu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ml(a,s.vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return w2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:Sc(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sc(s.serializer,i)}}if(r instanceof id)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof li)return{bytesValue:fw(s.serializer,r._byteString)};if(r instanceof Zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qf(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Fu(`Unsupported field value: ${nd(r)}`)}(t,e)}function zw(t,e){const n={};return jE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,s)=>{const i=ml(s,e.Su(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ww(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof id||t instanceof li||t instanceof Zt||t instanceof sd)}function ad(t,e,n){if(!Ww(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=nd(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function _h(t,e,n){if((e=ct(e))instanceof dl)return e._internalPath;if(typeof e=="string")return cd(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const NN=new RegExp("[~\\*/\\[\\]]");function cd(t,e,n){if(e.search(NN)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dl(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce($.INVALID_ARGUMENT,a+t+l)}function Kw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DN extends Gw{data(){return super.data()}}function Qw(t,e){return typeof e=="string"?cd(t,e):e instanceof dl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class MN{convertValue(e,n="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new id(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const n=Or(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Ne(yw(r));const s=new Oo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VN extends Gw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends VN{data(e={}){return super.data(e)}}class FN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ma(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Ma(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ja(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ma(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ja(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ma(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:UN(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class jN extends MN{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}function JM(t){t=ci(t,hl);const e=ci(t.firestore,fl),n=rd(e),r=new jN(e);return LN(t._query),bN(n,t._query).then(s=>new FN(e,r,t,s))}function ZM(t,e,n){t=ci(t,Zt);const r=ci(t.firestore,fl),s=Yw(t.converter,e,n);return Xw(r,[qw(Hw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Jt.none())])}function Xw(t,e){return function(r,s){const i=new Rr;return r.asyncQueue.enqueueAndForget(async()=>cN(await wN(r),s,i)),i.promise}(rd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Hw(e)}set(e,n,r){this._verifyNotCommitted();const s=lu(e,this._firestore),i=Yw(s.converter,n,r),o=qw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Jt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=lu(e,this._firestore);let o;return o=typeof(n=ct(n))=="string"||n instanceof dl?xN(this._dataReader,"WriteBatch.update",i._key,n,r,s):ON(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Jt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=lu(e,this._firestore);return this._mutations=this._mutations.concat(new Bf(n._key,Jt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lu(t,e){if((t=ct(t)).firestore!==e)throw new ce($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t){return rd(t=ci(t,fl)),new BN(t,e=>Xw(t,e))}(function(e,n=!0){(function(s){vi=s})(gi),ei(new cs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new fl(new FO(r.getProvider("auth-internal")),new $O(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ir(Eg,"4.6.5",e),Ir(Eg,"4.6.5","esm2017")})();const $N=qt(t=>{const e=mi(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Qv(n),s=PO(r),i=SN(r);t.provide("auth",s),t.provide("firestore",i)}),t_=()=>{};let ld={},Jw={},Zw=null,e0={mark:t_,measure:t_};try{typeof window<"u"&&(ld=window),typeof document<"u"&&(Jw=document),typeof MutationObserver<"u"&&(Zw=MutationObserver),typeof performance<"u"&&(e0=performance)}catch{}const{userAgent:n_=""}=ld.navigator||{},Nr=ld,Me=Jw,r_=Zw,Va=e0;Nr.document;const Kn=!!Me.documentElement&&!!Me.head&&typeof Me.addEventListener=="function"&&typeof Me.createElement=="function",t0=~n_.indexOf("MSIE")||~n_.indexOf("Trident/");var Ue="classic",n0="duotone",Bt="sharp",$t="sharp-duotone",HN=[Ue,n0,Bt,$t],qN={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},s_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},zN=["kit"],WN=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,KN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,GN={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},QN={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},YN={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},XN={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},JN={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ZN={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},r0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},eD=["solid","regular","light","thin","duotone","brands"],s0=[1,2,3,4,5,6,7,8,9,10],tD=s0.concat([11,12,13,14,15,16,17,18,19,20]),Gi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nD=[...Object.keys(XN),...eD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gi.GROUP,Gi.SWAP_OPACITY,Gi.PRIMARY,Gi.SECONDARY].concat(s0.map(t=>"".concat(t,"x"))).concat(tD.map(t=>"w-".concat(t))),rD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},sD={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},iD={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},i_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const $n="___FONT_AWESOME___",yh=16,i0="fa",o0="svg-inline--fa",ps="data-fa-i2svg",vh="data-fa-pseudo-element",oD="data-fa-pseudo-element-pending",ud="data-prefix",hd="data-icon",o_="fontawesome-i2svg",aD="async",cD=["HTML","HEAD","STYLE","SCRIPT"],a0=(()=>{try{return!0}catch{return!1}})(),c0=[Ue,Bt,$t];function ta(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ue]}})}const l0={...r0};l0[Ue]={...r0[Ue],...s_.kit,...s_["kit-duotone"]};const os=ta(l0),Eh={...ZN};Eh[Ue]={...Eh[Ue],...i_.kit,...i_["kit-duotone"]};const Lo=ta(Eh),wh={...JN};wh[Ue]={...wh[Ue],...iD.kit};const as=ta(wh),Th={...YN};Th[Ue]={...Th[Ue],...sD.kit};const lD=ta(Th),uD=WN,u0="fa-layers-text",hD=KN,fD={...qN};ta(fD);const dD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],uu=Gi,ui=new Set;Object.keys(Lo[Ue]).map(ui.add.bind(ui));Object.keys(Lo[Bt]).map(ui.add.bind(ui));Object.keys(Lo[$t]).map(ui.add.bind(ui));const pD=[...zN,...nD],uo=Nr.FontAwesomeConfig||{};function mD(t){var e=Me.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function gD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Me&&typeof Me.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=gD(mD(n));s!=null&&(uo[r]=s)});const h0={styleDefault:"solid",familyDefault:"classic",cssPrefix:i0,replacementClass:o0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};uo.familyPrefix&&(uo.cssPrefix=uo.familyPrefix);const hi={...h0,...uo};hi.autoReplaceSvg||(hi.observeMutations=!1);const re={};Object.keys(h0).forEach(t=>{Object.defineProperty(re,t,{enumerable:!0,set:function(e){hi[t]=e,ho.forEach(n=>n(re))},get:function(){return hi[t]}})});Object.defineProperty(re,"familyPrefix",{enumerable:!0,set:function(t){hi.cssPrefix=t,ho.forEach(e=>e(re))},get:function(){return hi.cssPrefix}});Nr.FontAwesomeConfig=re;const ho=[];function _D(t){return ho.push(t),()=>{ho.splice(ho.indexOf(t),1)}}const sr=yh,dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yD(t){if(!t||!Kn)return;const e=Me.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Me.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Me.head.insertBefore(e,r),t}const vD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mo(){let t=12,e="";for(;t-- >0;)e+=vD[Math.random()*62|0];return e}function Ti(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fd(t){return t.classList?Ti(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function f0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ED(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(f0(t[n]),'" '),"").trim()}function gl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function dd(t){return t.size!==dn.size||t.x!==dn.x||t.y!==dn.y||t.rotate!==dn.rotate||t.flipX||t.flipY}function wD(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function TD(t){let{transform:e,width:n=yh,height:r=yh,startCentered:s=!1}=t,i="";return s&&t0?i+="translate(".concat(e.x/sr-n/2,"em, ").concat(e.y/sr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/sr,"em), calc(-50% + ").concat(e.y/sr,"em)) "):i+="translate(".concat(e.x/sr,"em, ").concat(e.y/sr,"em) "),i+="scale(".concat(e.size/sr*(e.flipX?-1:1),", ").concat(e.size/sr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var bD=`:root, :host {
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
}`;function d0(){const t=i0,e=o0,n=re.cssPrefix,r=re.replacementClass;let s=bD;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let a_=!1;function hu(){re.autoAddCss&&!a_&&(yD(d0()),a_=!0)}var ID={mixout(){return{dom:{css:d0,insertCss:hu}}},hooks(){return{beforeDOMElementCreation(){hu()},beforeI2svg(){hu()}}}};const Hn=Nr||{};Hn[$n]||(Hn[$n]={});Hn[$n].styles||(Hn[$n].styles={});Hn[$n].hooks||(Hn[$n].hooks={});Hn[$n].shims||(Hn[$n].shims=[]);var pn=Hn[$n];const p0=[],m0=function(){Me.removeEventListener("DOMContentLoaded",m0),kc=1,p0.map(t=>t())};let kc=!1;Kn&&(kc=(Me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Me.readyState),kc||Me.addEventListener("DOMContentLoaded",m0));function AD(t){Kn&&(kc?setTimeout(t,0):p0.push(t))}function na(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?f0(t):"<".concat(e," ").concat(ED(n),">").concat(r.map(na).join(""),"</").concat(e,">")}function c_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var fu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function RD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function bh(t){const e=RD(t);return e.length===1?e[0].toString(16):null}function SD(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function l_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ih(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=l_(e);typeof pn.hooks.addPack=="function"&&!r?pn.hooks.addPack(t,l_(e)):pn.styles[t]={...pn.styles[t]||{},...s},t==="fas"&&Ih("fa",e)}const{styles:Xr,shims:CD}=pn,PD={[Ue]:Object.values(as[Ue]),[Bt]:Object.values(as[Bt]),[$t]:Object.values(as[$t])};let pd=null,g0={},_0={},y0={},v0={},E0={};const kD={[Ue]:Object.keys(os[Ue]),[Bt]:Object.keys(os[Bt]),[$t]:Object.keys(os[$t])};function OD(t){return~pD.indexOf(t)}function xD(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!OD(s)?s:null}const w0=()=>{const t=r=>fu(Xr,(s,i,o)=>(s[o]=fu(i,r,{}),s),{});g0=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),_0=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),E0=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in Xr||re.autoFetchSvg,n=fu(CD,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});y0=n.names,v0=n.unicodes,pd=_l(re.styleDefault,{family:re.familyDefault})};_D(t=>{pd=_l(t.styleDefault,{family:re.familyDefault})});w0();function md(t,e){return(g0[t]||{})[e]}function ND(t,e){return(_0[t]||{})[e]}function yr(t,e){return(E0[t]||{})[e]}function T0(t){return y0[t]||{prefix:null,iconName:null}}function DD(t){const e=v0[t],n=md("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return pd}const gd=()=>({prefix:null,iconName:null,rest:[]});function _l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ue}=e,r=os[n][t],s=Lo[n][t]||Lo[n][r],i=t in pn.styles?t:null;return s||i||null}const LD={[Ue]:Object.keys(as[Ue]),[Bt]:Object.keys(as[Bt]),[$t]:Object.keys(as[$t])};function yl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ue]:"".concat(re.cssPrefix,"-").concat(Ue),[Bt]:"".concat(re.cssPrefix,"-").concat(Bt),[$t]:"".concat(re.cssPrefix,"-").concat($t)};let s=null,i=Ue;const o=HN.filter(l=>l!==n0);o.forEach(l=>{(t.includes(r[l])||t.some(u=>LD[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const h=xD(re.cssPrefix,u);if(Xr[u]?(u=PD[i].includes(u)?lD[i][u]:u,s=u,l.prefix=u):kD[i].indexOf(u)>-1?(s=u,l.prefix=_l(u,{family:i})):h?l.iconName=h:u!==re.replacementClass&&!o.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=s==="fa"?T0(l.iconName):{},m=yr(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Xr.far&&Xr.fas&&!re.autoFetchSvg&&(l.prefix="fas")}return l},gd());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Bt&&(Xr.fass||re.autoFetchSvg)&&(a.prefix="fass",a.iconName=yr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===$t&&(Xr.fasds||re.autoFetchSvg)&&(a.prefix="fasds",a.iconName=yr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Dr()||"fas"),a}class MD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},Ih(i,s[i]);const o=as[Ue][i];o&&Ih(o,s[i]),w0()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let u_=[],Ls={};const Ws={},VD=Object.keys(Ws);function FD(t,e){let{mixoutsTo:n}=e;return u_=t,Ls={},Object.keys(Ws).forEach(r=>{VD.indexOf(r)===-1&&delete Ws[r]}),u_.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Ls[o]||(Ls[o]=[]),Ls[o].push(i[o])})}r.provides&&r.provides(Ws)}),n}function Ah(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Ls[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ms(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Ls[t]||[]).forEach(i=>{i.apply(null,n)})}function Lr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ws[t]?Ws[t].apply(null,e):void 0}function Rh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Dr();if(e)return e=yr(n,e)||e,c_(b0.definitions,n,e)||c_(pn.styles,n,e)}const b0=new MD,UD=()=>{re.autoReplaceSvg=!1,re.observeMutations=!1,ms("noAuto")},jD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kn?(ms("beforeI2svg",t),Lr("pseudoElements2svg",t),Lr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;re.autoReplaceSvg===!1&&(re.autoReplaceSvg=!0),re.observeMutations=!0,AD(()=>{$D({autoReplaceSvgRoot:e}),ms("watch",t)})}},BD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=_l(t[0]);return{prefix:n,iconName:yr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(re.cssPrefix,"-"))>-1||t.match(uD))){const e=yl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Dr(),iconName:yr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Dr();return{prefix:e,iconName:yr(e,t)||t}}}},zt={noAuto:UD,config:re,dom:jD,parse:BD,library:b0,findIconDefinition:Rh,toHtml:na},$D=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Me}=t;(Object.keys(pn.styles).length>0||re.autoFetchSvg)&&Kn&&re.autoReplaceSvg&&zt.dom.i2svg({node:e})};function vl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>na(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Kn)return;const n=Me.createElement("div");return n.innerHTML=t.html,n.children}}),t}function HD(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(dd(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=gl({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function qD(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(re.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function _d(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,R=r==="fak",k=[re.replacementClass,s?"".concat(re.cssPrefix,"-").concat(s):""].filter(L=>h.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(h.classes).join(" ");let x={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)}};const N=R&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(x.attributes[ps]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Mo())},children:[a]}),delete x.attributes.title);const S={...x,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...N,...h.styles}},{children:b,attributes:O}=n.found&&e.found?Lr("generateAbstractMask",S)||{children:[],attributes:{}}:Lr("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=b,S.attributes=O,o?qD(S):HD(S)}function h_(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[ps]="");const u={...o.styles};dd(s)&&(u.transform=TD({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=gl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function zD(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=gl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:du}=pn;function Sh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(re.cssPrefix,"-").concat(uu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(uu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(uu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const WD={found:!1,width:512,height:512};function KD(t,e){!a0&&!re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ch(t,e){let n=e;return e==="fa"&&re.styleDefault!==null&&(e=Dr()),new Promise((r,s)=>{if(n==="fa"){const i=T0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&du[e]&&du[e][t]){const i=du[e][t];return r(Sh(i))}KD(t,e),r({...WD,icon:re.showMissingIcons&&t?Lr("missingIconAbstract")||{}:{}})})}const f_=()=>{},Ph=re.measurePerformance&&Va&&Va.mark&&Va.measure?Va:{mark:f_,measure:f_},Qi='FA "6.6.0"',GD=t=>(Ph.mark("".concat(Qi," ").concat(t," begins")),()=>I0(t)),I0=t=>{Ph.mark("".concat(Qi," ").concat(t," ends")),Ph.measure("".concat(Qi," ").concat(t),"".concat(Qi," ").concat(t," begins"),"".concat(Qi," ").concat(t," ends"))};var yd={begin:GD,end:I0};const Za=()=>{};function d_(t){return typeof(t.getAttribute?t.getAttribute(ps):null)=="string"}function QD(t){const e=t.getAttribute?t.getAttribute(ud):null,n=t.getAttribute?t.getAttribute(hd):null;return e&&n}function YD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(re.replacementClass)}function XD(){return re.autoReplaceSvg===!0?ec.replace:ec[re.autoReplaceSvg]||ec.replace}function JD(t){return Me.createElementNS("http://www.w3.org/2000/svg",t)}function ZD(t){return Me.createElement(t)}function A0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?JD:ZD}=e;if(typeof t=="string")return Me.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(A0(i,{ceFn:n}))}),r}function eL(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ec={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(A0(n),e)}),e.getAttribute(ps)===null&&re.keepOriginalSource){let n=Me.createComment(eL(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~fd(e).indexOf(re.replacementClass))return ec.replace(t);const r=new RegExp("".concat(re.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===re.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>na(i)).join(`
`);e.setAttribute(ps,""),e.innerHTML=s}};function p_(t){t()}function R0(t,e){const n=typeof e=="function"?e:Za;if(t.length===0)n();else{let r=p_;re.mutateApproach===aD&&(r=Nr.requestAnimationFrame||p_),r(()=>{const s=XD(),i=yd.begin("mutate");t.map(s),i(),n()})}}let vd=!1;function S0(){vd=!0}function kh(){vd=!1}let Oc=null;function m_(t){if(!r_||!re.observeMutations)return;const{treeCallback:e=Za,nodeCallback:n=Za,pseudoElementsCallback:r=Za,observeMutationsRoot:s=Me}=t;Oc=new r_(i=>{if(vd)return;const o=Dr();Ti(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!d_(a.addedNodes[0])&&(re.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&re.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&d_(a.target)&&~dD.indexOf(a.attributeName))if(a.attributeName==="class"&&QD(a.target)){const{prefix:l,iconName:u}=yl(fd(a.target));a.target.setAttribute(ud,l||o),u&&a.target.setAttribute(hd,u)}else YD(a.target)&&n(a.target)})}),Kn&&Oc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function tL(){Oc&&Oc.disconnect()}function nL(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function rL(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=yl(fd(t));return s.prefix||(s.prefix=Dr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=ND(s.prefix,t.innerText)||md(s.prefix,bh(t.innerText))),!s.iconName&&re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function sL(t){const e=Ti(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return re.autoA11y&&(n?e["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(r||Mo()):(e["aria-hidden"]="true",e.focusable="false")),e}function iL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=rL(t),i=sL(t),o=Ah("parseNodeAttributes",{},t);let a=e.styleParser?nL(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:oL}=pn;function C0(t){const e=re.autoReplaceSvg==="nest"?g_(t,{styleParser:!1}):g_(t);return~e.extra.classes.indexOf(u0)?Lr("generateLayersText",t,e):Lr("generateSvgReplacementMutation",t,e)}let bn=new Set;c0.map(t=>{bn.add("fa-".concat(t))});Object.keys(os[Ue]).map(bn.add.bind(bn));Object.keys(os[Bt]).map(bn.add.bind(bn));Object.keys(os[$t]).map(bn.add.bind(bn));bn=[...bn];function __(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kn)return Promise.resolve();const n=Me.documentElement.classList,r=h=>n.add("".concat(o_,"-").concat(h)),s=h=>n.remove("".concat(o_,"-").concat(h)),i=re.autoFetchSvg?bn:c0.map(h=>"fa-".concat(h)).concat(Object.keys(oL));i.includes("fa")||i.push("fa");const o=[".".concat(u0,":not([").concat(ps,"])")].concat(i.map(h=>".".concat(h,":not([").concat(ps,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ti(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=yd.begin("onTree"),u=a.reduce((h,d)=>{try{const m=C0(d);m&&h.push(m)}catch(m){a0||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(m=>{R0(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(m=>{l(),d(m)})})}function aL(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;C0(t).then(n=>{n&&R0([n],e)})}function cL(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Rh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Rh(s||{})),t(r,{...n,mask:s})}}const lL=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=dn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return vl({type:"icon",...t},()=>(ms("beforeDOMElementCreation",{iconDefinition:t,params:e}),re.autoA11y&&(o?u["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(a||Mo()):(u["aria-hidden"]="true",u.focusable="false")),_d({icons:{main:Sh(g),mask:s?Sh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:{...dn,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var uL={mixout(){return{icon:cL(lL)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=__,t.nodeCallback=aL,t}}},provides(t){t.i2svg=function(e){const{node:n=Me,callback:r=()=>{}}=e;return __(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((m,g)=>{Promise.all([Ch(r,o),u.iconName?Ch(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[k,x]=R;m([e,_d({icons:{main:k,mask:x},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=gl(o);a.length>0&&(r.style=a);let l;return dd(i)&&(l=Lr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},hL={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return vl({type:"layer"},()=>{ms("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(re.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},fL={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return vl({type:"counter",content:t},()=>(ms("beforeDOMElementCreation",{content:t,params:e}),zD({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(re.cssPrefix,"-layers-counter"),...r]}})))}}}},dL={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=dn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return vl({type:"text",content:t},()=>(ms("beforeDOMElementCreation",{content:t,params:e}),h_({content:t,transform:{...dn,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(re.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(t0){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return re.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,h_({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const pL=new RegExp('"',"ug"),y_=[1105920,1112319],v_={FontAwesome:{normal:"fas",400:"fas"},...QN,...GN,...rD},Oh=Object.keys(v_).reduce((t,e)=>(t[e.toLowerCase()]=v_[e],t),{}),mL=Object.keys(Oh).reduce((t,e)=>{const n=Oh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function gL(t){const e=t.replace(pL,""),n=SD(e,0),r=n>=y_[0]&&n<=y_[1],s=e.length===2?e[0]===e[1]:!1;return{value:bh(s?e[0]:e),isSecondary:r||s}}function _L(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Oh[n]||{})[s]||mL[n]}function E_(t,e){const n="".concat(oD).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ti(t.children).filter(m=>m.getAttribute(vh)===e)[0],a=Nr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(hD),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=a.getPropertyValue("content");let g=_L(l,h);const{value:R,isSecondary:k}=gL(m),x=u[0].startsWith("FontAwesome");let N=md(g,R),S=N;if(x){const b=DD(R);b.iconName&&b.prefix&&(N=b.iconName,g=b.prefix)}if(N&&!k&&(!o||o.getAttribute(ud)!==g||o.getAttribute(hd)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);const b=iL(),{extra:O}=b;O.attributes[vh]=e,Ch(N,g).then(L=>{const M=_d({...b,icons:{main:L,mask:gd()},prefix:g,iconName:S,extra:O,watchable:!0}),w=Me.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=M.map(y=>na(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function yL(t){return Promise.all([E_(t,"::before"),E_(t,"::after")])}function vL(t){return t.parentNode!==document.head&&!~cD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function w_(t){if(Kn)return new Promise((e,n)=>{const r=Ti(t.querySelectorAll("*")).filter(vL).map(yL),s=yd.begin("searchPseudoElements");S0(),Promise.all(r).then(()=>{s(),kh(),e()}).catch(()=>{s(),kh(),n()})})}var EL={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=w_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Me}=e;re.searchPseudoElements&&w_(n)}}};let T_=!1;var wL={mixout(){return{dom:{unwatch(){S0(),T_=!0}}}},hooks(){return{bootstrap(){m_(Ah("mutationObserverCallbacks",{}))},noAuto(){tL()},watch(t){const{observeMutationsRoot:e}=t;T_?kh():m_(Ah("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const b_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var TL={mixout(){return{parse:{transform:t=>b_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=b_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:h,path:d};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const pu={x:0,y:0,width:"100%",height:"100%"};function I_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function bL(t){return t.tag==="g"?t.children:[t]}var IL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?yl(n.split(" ").map(s=>s.trim())):gd();return r.prefix||(r.prefix=Dr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,m=wD({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...pu,fill:"white"}},R=u.children?{children:u.children.map(I_)}:{},k={tag:"g",attributes:{...m.inner},children:[I_({tag:u.tag,attributes:{...u.attributes,...m.path},...R})]},x={tag:"g",attributes:{...m.outer},children:[k]},N="mask-".concat(o||Mo()),S="clip-".concat(o||Mo()),b={tag:"mask",attributes:{...pu,id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,x]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:bL(d)},b]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")"),...pu}}),{children:n,attributes:r}}}},AL={provides(t){let e=!1;Nr.matchMedia&&(e=Nr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},RL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},SL=[ID,uL,hL,fL,dL,EL,wL,TL,IL,AL,RL];FD(SL,{mixoutsTo:zt});zt.noAuto;const CL=zt.config,PL=zt.library;zt.dom;const xh=zt.parse;zt.findIconDefinition;zt.toHtml;const kL=zt.icon;zt.layer;zt.text;zt.counter;function A_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A_(Object(n),!0).forEach(function(r){Pt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function OL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xL(t){var e=OL(t,"string");return typeof e=="symbol"?e:e+""}function xc(t){"@babel/helpers - typeof";return xc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xc(t)}function Pt(t,e,n){return e=xL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function NL(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function DL(t,e){if(t==null)return{};var n=NL(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var LL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P0={exports:{}};(function(t){(function(e){var n=function(N,S,b){if(!u(S)||d(S)||m(S)||g(S)||l(S))return S;var O,L=0,M=0;if(h(S))for(O=[],M=S.length;L<M;L++)O.push(n(N,S[L],b));else{O={};for(var w in S)Object.prototype.hasOwnProperty.call(S,w)&&(O[N(w,b)]=n(N,S[w],b))}return O},r=function(N,S){S=S||{};var b=S.separator||"_",O=S.split||/(?=[A-Z])/;return N.split(O).join(b)},s=function(N){return R(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(S,b){return b?b.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var S=s(N);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(N,S){return r(N,S).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return a.call(N)=="[object Array]"},d=function(N){return a.call(N)=="[object Date]"},m=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},R=function(N){return N=N-0,N===N},k=function(N,S){var b=S&&"process"in S?S.process:S;return typeof b!="function"?N:function(O,L){return b(O,N,L)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,S){return n(k(s,S),N)},decamelizeKeys:function(N,S){return n(k(o,S),N,S)},pascalizeKeys:function(N,S){return n(k(i,S),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(LL)})(P0);var ML=P0.exports,VL=["class","style"];function FL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=ML.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function UL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function k0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return k0(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=UL(h);break;case"style":l.style=FL(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=DL(n,VL);return St(t.tag,kn(kn(kn({},e),{},{class:s.class,style:kn(kn({},s.style),o)},s.attrs),a),r)}var O0=!1;try{O0=!0}catch{}function jL(){if(!O0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function mu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Pt({},t,e):{}}function BL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Pt(Pt(Pt(Pt(Pt(Pt(Pt(Pt(Pt(Pt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Pt(Pt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function R_(t){if(t&&xc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xh.icon)return xh.icon(t);if(t===null)return null;if(xc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var $L=qn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ze(function(){return R_(e.icon)}),i=Ze(function(){return mu("classes",BL(e))}),o=Ze(function(){return mu("transform",typeof e.transform=="string"?xh.transform(e.transform):e.transform)}),a=Ze(function(){return mu("mask",R_(e.mask))}),l=Ze(function(){return kL(s.value,kn(kn(kn(kn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});mn(l,function(h){if(!h)return jL("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ze(function(){return l.value?k0(l.value.abstract[0],{},r):null});return function(){return u.value}}});const HL={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},qL={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},zL=qL,WL={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},KL={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},GL={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};CL.autoAddCss=!1;PL.add(HL,KL,zL,GL,WL);const QL=qt(t=>{t.vueApp.component("font-awesome-icon",$L)}),YL=!1;/*!
 * pinia v2.2.1
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let x0;const El=t=>x0=t,N0=Symbol();function Nh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fo||(fo={}));function XL(){const t=jh(!0),e=t.run(()=>jt({}));let n=[],r=[];const s=Kh({install(i){El(s),s._a=i,i.provide(N0,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!YL?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const D0=()=>{};function S_(t,e,n,r=D0){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Uo()&&nc(s),s}function Cs(t,...e){t.slice().forEach(n=>{n(...e)})}const JL=t=>t(),C_=Symbol(),gu=Symbol();function Dh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Nh(s)&&Nh(r)&&t.hasOwnProperty(n)&&!Je(r)&&!Er(r)?t[n]=Dh(s,r):t[n]=r}return t}const ZL=Symbol();function eM(t){return!Nh(t)||!t.hasOwnProperty(ZL)}const{assign:ir}=Object;function tM(t){return!!(Je(t)&&t.effect)}function nM(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=GT(n.state.value[t]);return ir(h,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Kh(Ze(()=>{El(n);const g=n._s.get(t);return o[m].call(g,g)})),d),{}))}return l=L0(t,u,e,n,r,!0),l}function L0(t,e,n={},r,s,i){let o;const a=ir({actions:{}},n),l={deep:!0};let u,h,d=[],m=[],g;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),jt({});let k;function x(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:fo.patchFunction,storeId:t,events:g}):(Dh(r.state.value[t],y),_={type:fo.patchObject,payload:y,storeId:t,events:g});const E=k=Symbol();In().then(()=>{k===E&&(u=!0)}),h=!0,Cs(d,_,r.state.value[t])}const N=i?function(){const{state:_}=n,E=_?_():{};this.$patch(C=>{ir(C,E)})}:D0;function S(){o.stop(),d=[],m=[],r._s.delete(t)}const b=(y,_="")=>{if(C_ in y)return y[gu]=_,y;const E=function(){El(r);const C=Array.from(arguments),A=[],T=[];function me(te){A.push(te)}function ye(te){T.push(te)}Cs(m,{args:C,name:E[gu],store:L,after:me,onError:ye});let J;try{J=y.apply(this&&this.$id===t?this:L,C)}catch(te){throw Cs(T,te),te}return J instanceof Promise?J.then(te=>(Cs(A,te),te)).catch(te=>(Cs(T,te),Promise.reject(te))):(Cs(A,J),J)};return E[C_]=!0,E[gu]=_,E},O={_p:r,$id:t,$onAction:S_.bind(null,m),$patch:x,$reset:N,$subscribe(y,_={}){const E=S_(d,y,_.detached,()=>C()),C=o.run(()=>mn(()=>r.state.value[t],A=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:fo.direct,events:g},A)},ir({},l,_)));return E},$dispose:S},L=Fr(O);r._s.set(t,L);const w=(r._a&&r._a.runWithContext||JL)(()=>r._e.run(()=>(o=jh()).run(()=>e({action:b}))));for(const y in w){const _=w[y];if(Je(_)&&!tM(_)||Er(_))i||(R&&eM(_)&&(Je(_)?_.value=R[y]:Dh(_,R[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const E=b(_,y);w[y]=E,a.actions[y]=_}}return ir(L,w),ir(Ae(L),w),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:y=>{x(_=>{ir(_,y)})}}),r._p.forEach(y=>{ir(L,o.run(()=>y({store:L,app:r._a,pinia:r,options:a})))}),R&&i&&n.hydrate&&n.hydrate(L.$state,R),u=!0,h=!0,L}function tV(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=tf();return a=a||(u?Tt(N0,null):null),a&&El(a),a=x0,a._s.has(r)||(i?L0(r,e,s,a):nM(r,s,a)),a._s.get(r)}return o.$id=r,o}function nV(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function rV(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const rM=qt(t=>{const e=XL();t.vueApp.use(e)});var P_=/^(GTM|G)-[0-9A-Z]+$/;function _u(t){if(typeof t!="string"||!P_.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${P_}).${n}`)}}function Yi(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function Ks(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(Yi(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function sM(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var iM=class{constructor(t){Vi(this,"id");Vi(this,"options");Vi(this,"scriptElements",[]);Vi(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)_u(typeof e=="string"?e:e.id);else _u(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!sM(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=Ks(n,{...this.options}):r=Ks(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=Ks(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?Yi(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&Yi(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&Yi(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&Yi(window,this.options.dataLayerName).push(t)}},ut;function oM(t,e={id:""}){e={trackOnNextTick:!1,...e},ut=new iM(e),t.config.globalProperties.$gtm=ut,ut.isInBrowserContext()&&(e.vueRouter&&aM(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),ut.options.enabled&&ut.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")Ks(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),Ks(n.id,r)}}):Ks(e.id,e))),t.provide("gtm",e)}function aM(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var m,g,R;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?ut!=null&&ut.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(ut!=null&&ut.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(m=o.meta)==null?void 0:m.gtmAdditionalEventData},d=((R=(g=e.options)==null?void 0:g.history)==null?void 0:R.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?In(()=>{ut==null||ut.trackView(u,d,h)}):ut==null||ut.trackView(u,d,h)})}function cM(t){return{install:e=>oM(e,t)}}const lM=qt(t=>{const e=mi().public,n=xO("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(cM({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:Ht(),trackOnNextTick:!1}))}),uM=[fR,pR,NS,DS,LS,MS,FS,US,jS,$N,QL,rM,lM],hM=qn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return rs(Ho,On(r)),()=>St(t.vnode,{ref:t.vnodeRef})}}),fM=qn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Qe(),i=jt(),o=Tt(Ho,null);let a;r({pageRef:i});const l=Tt(gv,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Ht().beforeEach(d)}return t.pageKey&&mn(()=>t.pageKey,(d,m)=>{d!==m&&s.callHook("page:loading:start")}),()=>St(Uv,{name:t.name,route:t.route,...e},{default:d=>{const m=pM(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(m&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const R=Qu(d,t.pageKey);!s.isHydrating&&!mM(o,d.route,d.Component)&&a===R&&s.callHook("page:loading:end"),a=R;const k=!!(t.transition??d.route.meta.pageTransition??Fu),x=k&&dM([t.transition,d.route.meta.pageTransition,Fu,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),N=t.keepalive??d.route.meta.keepalive??WA;return u=jv(Hc,k&&x,ES(N,St(of,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{In(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const S=St(hM,{key:R||void 0,vnode:n.default?St(Rt,void 0,n.default(d)):d.Component,route:d.route,renderKey:R||void 0,trackRootNodes:k,vnodeRef:i});return N&&(S.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),S}}))).default(),u}})}});function dM(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Ef(n.onAfterLeave):void 0}));return pv(...e)}function pM(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Qu({route:e,Component:n})!==Qu({route:t,Component:n})}function mM(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const gM=qn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await gr[t.name]().then(r=>r.default||r);return()=>St(n,t.layoutProps,e.slots)}}),_M=qn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Qe(),r=Tt(Ho),s=r===pf()?yS():r,i=Ze(()=>{let l=De(t.name)??s.meta.layout??"default";return l&&!(l in gr)&&t.fallback&&(l=De(t.fallback)),l}),o=jt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);Ht().beforeEach(l)}return()=>{const l=i.value&&i.value in gr,u=s.meta.layoutTransition??zA;return jv(Hc,l&&u,{default:()=>St(of,{suspensible:!0,onResolve:()=>{In(a)}},{default:()=>St(yM,{layoutProps:zy(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),yM=qn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&rs(gv,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in gr)?(s=(r=e.slots).default)==null?void 0:s.call(r):St(gM,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),vM=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},EM={};function wM(t,e){const n=fM,r=_M;return sn(),Pn(r,null,{default:Xh(()=>[He(n)]),_:1})}const TM=vM(EM,[["render",wM]]),bM={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?Tp(()=>Ge(()=>import("./xDoVEs-w.js"),__vite__mapDeps([33,1,34,35]),import.meta.url).then(d=>d.default||d)):Tp(()=>Ge(()=>import("./CmNRB8Iy.js"),__vite__mapDeps([36,34,37]),import.meta.url).then(d=>d.default||d));return(d,m)=>(sn(),Pn(De(h),_T(Hy({statusCode:De(r),statusMessage:De(i),description:De(o),stack:De(a)})),null,16))}},IM={key:0},k_={__name:"nuxt-root",setup(t){const e=()=>null,n=Qe(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Ht().beforeEach(l)}const s=!1;rs(Ho,pf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=qc(),o=!1;my((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),v1(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Ns(l)),!1});const a=!1;return(l,u)=>(sn(),Pn(of,{onResolve:De(r)},{default:Xh(()=>[De(o)?(sn(),Zb("div",IM)):De(i)?(sn(),Pn(De(bM),{key:1,error:De(i)},null,8,["error"])):De(a)?(sn(),Pn(De(e),{key:2,context:De(a)},null,8,["context"])):De(s)?(sn(),Pn(mb(De(s)),{key:3})):(sn(),Pn(De(TM),{key:4}))]),_:1},8,["onResolve"]))}};let O_;{let t;O_=async function(){var o,a;if(t)return t;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?UI(k_):FI(k_),s=YA({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||zc(l)}r.config.errorHandler=i;try{await ZA(s,uM)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(GA),await s.hooks.callHook("app:mounted",r),await In()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=O_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{tV as $,ub as A,Je as B,Fr as C,Ze as D,Er as E,Rt as F,Pr as G,Tt as H,rs as I,De as J,In as K,PM as L,NM as M,Pn as N,OM as O,Mc as P,Lc as Q,_T as R,Hy as S,Hc as T,Ho as U,jM as V,BM as W,xO as X,MM as Y,fM as Z,vM as _,$y as a,Qe as a0,YM as a1,JM as a2,ZM as a3,XM as a4,eV as a5,Ht as a6,qn as a7,Jh as a8,wf as a9,jm as aa,_1 as ab,HM as ac,St as ad,nA as ae,UM as af,_s as ag,hf as ah,mi as ai,Lu as aj,uf as ak,qM as al,WM as am,zM as an,He as b,Zb as c,qy as d,SM as e,xM as f,mn as g,Zh as h,$M as i,cb as j,ab as k,Hu as l,cf as m,nV as n,sn as o,RM as p,rV as q,jt as r,CM as s,wT as t,kM as u,VM as v,Xh as w,DM as x,LM as y,FM as z};
