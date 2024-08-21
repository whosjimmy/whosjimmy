const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B61zVxAy.js","./index.BeIzcci7.css","./DHWZiD8k.js","./S_usHSFY.js","./Film.RcEDhm2u.css","./B8uRW2nV.js","./Bio.BcnN8BQQ.css","./rf7gf5UB.js","./Contact.BEX4NZs-.css","./CKycfFDQ.js","./D80YAmU2.js","./Gallery.B_nrwMtm.css","./Clocks.CkpqjaRE.css","./0imhfkf9.js","./index.BANqCETR.css","./4T6-A8rs.js","./R0ktAfV5.js","./Celebrities.CcuunyNG.css","./BiosoXAw.js","./Clocks.vUUo-Xqj.css","./DW_w67jn.js","./Film.KBkYyf_R.css","./ChrCrtOO.js","./index.D3FkaTh1.css","./DjjT5Nnc.js","./9XWuRBum.js","./6zqRVLrm.js","./CwNA6NJ5.js","./default.BCcRiun0.css"])))=>i.map(i=>d[i]);
var vb=Object.defineProperty;var Eb=(t,e,n)=>e in t?vb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ui=(t,e,n)=>Eb(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wh(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ue={},js=[],Zt=()=>{},wb=()=>!1,Bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kh=t=>t.startsWith("onUpdate:"),ct=Object.assign,Gh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bb=Object.prototype.hasOwnProperty,Ie=(t,e)=>bb.call(t,e),le=Array.isArray,Bs=t=>_i(t)==="[object Map]",gi=t=>_i(t)==="[object Set]",Ep=t=>_i(t)==="[object Date]",Tb=t=>_i(t)==="[object RegExp]",de=t=>typeof t=="function",We=t=>typeof t=="string",Tn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",H_=t=>(xe(t)||de(t))&&de(t.then)&&de(t.catch),q_=Object.prototype.toString,_i=t=>q_.call(t),Ib=t=>_i(t).slice(8,-1),z_=t=>_i(t)==="[object Object]",Qh=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=Wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ab=/-(\w)/g,un=jc(t=>t.replace(Ab,(e,n)=>n?n.toUpperCase():"")),Rb=/\B([A-Z])/g,Es=jc(t=>t.replace(Rb,"-$1").toLowerCase()),Bc=jc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kl=jc(t=>t?`on${Bc(t)}`:""),Nr=(t,e)=>!Object.is(t,e),Hs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},W_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},oc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},K_=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let wp;const G_=()=>wp||(wp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $c(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?kb(r):$c(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||xe(t))return t}const Sb=/;(?![^(]*\))/g,Cb=/:([^]+)/,Pb=/\/\*[^]*?\*\//g;function kb(t){const e={};return t.replace(Pb,"").split(Sb).forEach(n=>{if(n){const r=n.split(Cb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $o(t){let e="";if(We(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=$o(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function TV(t){if(!t)return null;let{class:e,style:n}=t;return e&&!We(e)&&(t.class=$o(e)),n&&(t.style=$c(n)),t}const Ob="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xb=Wh(Ob);function Q_(t){return!!t||t===""}function Nb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ho(t[r],e[r]);return n}function Ho(t,e){if(t===e)return!0;let n=Ep(t),r=Ep(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?Nb(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ho(t[o],e[o]))return!1}}return String(t)===String(e)}function Yh(t,e){return t.findIndex(n=>Ho(n,e))}const Y_=t=>!!(t&&t.__v_isRef===!0),Xh=t=>We(t)?t:t==null?"":le(t)||xe(t)&&(t.toString===q_||!de(t.toString))?Y_(t)?Xh(t.value):JSON.stringify(t,X_,2):String(t),X_=(t,e)=>Y_(e)?X_(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Gl(r,i)+" =>"]=s,n),{})}:gi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gl(n))}:Tn(e)?Gl(e):xe(e)&&!le(e)&&!z_(e)?String(e):e,Gl=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class J_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jh(t){return new J_(t)}function Db(t,e=Bt){e&&e.active&&e.effects.push(t)}function qo(){return Bt}function ac(t){Bt&&Bt.cleanups.push(t)}let ss;class Zh{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Db(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Br();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Lb(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),$r()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ir,n=ss;try{return Ir=!0,ss=this,this._runnings++,bp(this),this.fn()}finally{Tp(this),this._runnings--,ss=n,Ir=e}}stop(){this.active&&(bp(this),Tp(this),this.onStop&&this.onStop(),this.active=!1)}}function Lb(t){return t.value}function bp(t){t._trackId++,t._depsLength=0}function Tp(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Z_(t.deps[e],t);t.deps.length=t._depsLength}}function Z_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ir=!0,Pu=0;const ey=[];function Br(){ey.push(Ir),Ir=!1}function $r(){const t=ey.pop();Ir=t===void 0?!0:t}function ef(){Pu++}function tf(){for(Pu--;!Pu&&ku.length;)ku.shift()()}function ty(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Z_(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ku=[];function ny(t,e,n){ef();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&ku.push(r.scheduler)))}tf()}const ry=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},cc=new WeakMap,is=Symbol(""),Ou=Symbol("");function Mt(t,e,n){if(Ir&&ss){let r=cc.get(t);r||cc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ry(()=>r.delete(n))),ty(ss,s)}}function Un(t,e,n,r,s,i){const o=cc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Tn(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Qh(n)&&a.push(o.get("length")):(a.push(o.get(is)),Bs(t)&&a.push(o.get(Ou)));break;case"delete":le(t)||(a.push(o.get(is)),Bs(t)&&a.push(o.get(Ou)));break;case"set":Bs(t)&&a.push(o.get(is));break}ef();for(const l of a)l&&ny(l,4);tf()}function Mb(t,e){const n=cc.get(t);return n&&n.get(e)}const Vb=Wh("__proto__,__v_isRef,__isVue"),sy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn)),Ip=Fb();function Fb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ae(this);for(let i=0,o=this.length;i<o;i++)Mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Br(),ef();const r=Ae(this)[e].apply(this,n);return tf(),$r(),r}}),t}function Ub(t){Tn(t)||(t=String(t));const e=Ae(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class iy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Jb:ly:i?cy:ay).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Ie(Ip,n))return Reflect.get(Ip,n,r);if(n==="hasOwnProperty")return Ub}const a=Reflect.get(e,n,r);return(Tn(n)?sy.has(n):Vb(n))||(s||Mt(e,"get",n),i)?a:et(a)?o&&Qh(n)?a:a.value:xe(a)?s?uy(a):Hr(a):a}}class oy extends iy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Dr(i);if(!Js(r)&&!Dr(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&et(i)&&!et(r))return l?!1:(i.value=r,!0)}const o=le(e)&&Qh(n)?Number(n)<e.length:Ie(e,n),a=Reflect.set(e,n,r,s);return e===Ae(s)&&(o?Nr(r,i)&&Un(e,"set",n,r):Un(e,"add",n,r)),a}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!sy.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",le(e)?"length":is),Reflect.ownKeys(e)}}class jb extends iy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bb=new oy,$b=new jb,Hb=new oy(!0);const nf=t=>t,Hc=t=>Reflect.getPrototypeOf(t);function ba(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(Nr(e,i)&&Mt(s,"get",e),Mt(s,"get",i));const{has:o}=Hc(s),a=r?nf:n?af:go;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ta(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(Nr(t,s)&&Mt(r,"has",t),Mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ia(t,e=!1){return t=t.__v_raw,!e&&Mt(Ae(t),"iterate",is),Reflect.get(t,"size",t)}function Ap(t,e=!1){!e&&!Js(t)&&!Dr(t)&&(t=Ae(t));const n=Ae(this);return Hc(n).has.call(n,t)||(n.add(t),Un(n,"add",t,t)),this}function Rp(t,e,n=!1){!n&&!Js(e)&&!Dr(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=Hc(r);let o=s.call(r,t);o||(t=Ae(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Nr(e,a)&&Un(r,"set",t,e):Un(r,"add",t,e),this}function Sp(t){const e=Ae(this),{has:n,get:r}=Hc(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Un(e,"delete",t,void 0),i}function Cp(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&Un(t,"clear",void 0,void 0),n}function Aa(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ae(o),l=e?nf:t?af:go;return!t&&Mt(a,"iterate",is),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function Ra(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Bs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?nf:e?af:go;return!e&&Mt(i,"iterate",l?Ou:is),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function rr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qb(){const t={get(i){return ba(this,i)},get size(){return Ia(this)},has:Ta,add:Ap,set:Rp,delete:Sp,clear:Cp,forEach:Aa(!1,!1)},e={get(i){return ba(this,i,!1,!0)},get size(){return Ia(this)},has:Ta,add(i){return Ap.call(this,i,!0)},set(i,o){return Rp.call(this,i,o,!0)},delete:Sp,clear:Cp,forEach:Aa(!1,!0)},n={get(i){return ba(this,i,!0)},get size(){return Ia(this,!0)},has(i){return Ta.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Aa(!0,!1)},r={get(i){return ba(this,i,!0,!0)},get size(){return Ia(this,!0)},has(i){return Ta.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ra(i,!1,!1),n[i]=Ra(i,!0,!1),e[i]=Ra(i,!1,!0),r[i]=Ra(i,!0,!0)}),[t,n,e,r]}const[zb,Wb,Kb,Gb]=qb();function rf(t,e){const n=e?t?Gb:Kb:t?Wb:zb;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const Qb={get:rf(!1,!1)},Yb={get:rf(!1,!0)},Xb={get:rf(!0,!1)};const ay=new WeakMap,cy=new WeakMap,ly=new WeakMap,Jb=new WeakMap;function Zb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eT(t){return t.__v_skip||!Object.isExtensible(t)?0:Zb(Ib(t))}function Hr(t){return Dr(t)?t:sf(t,!1,Bb,Qb,ay)}function Dn(t){return sf(t,!1,Hb,Yb,cy)}function uy(t){return sf(t,!0,$b,Xb,ly)}function sf(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=eT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ar(t){return Dr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function Js(t){return!!(t&&t.__v_isShallow)}function hy(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function of(t){return Object.isExtensible(t)&&W_(t,"__v_skip",!0),t}const go=t=>xe(t)?Hr(t):t,af=t=>xe(t)?uy(t):t;class fy{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zh(()=>e(this._value),()=>Zi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Nr(e._value,e._value=e.effect.run())&&Zi(e,4),cf(e),e.effect._dirtyLevel>=2&&Zi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function tT(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Zt):(r=t.get,s=t.set),new fy(r,s,i||!s,n)}function cf(t){var e;Ir&&ss&&(t=Ae(t),ty(ss,(e=t.dep)!=null?e:t.dep=ry(()=>t.dep=void 0,t instanceof fy?t:void 0)))}function Zi(t,e=4,n,r){t=Ae(t);const s=t.dep;s&&ny(s,e)}function et(t){return!!(t&&t.__v_isRef===!0)}function Vt(t){return dy(t,!1)}function _o(t){return dy(t,!0)}function dy(t,e){return et(t)?t:new nT(t,e)}class nT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:go(e)}get value(){return cf(this),this._value}set value(e){const n=this.__v_isShallow||Js(e)||Dr(e);e=n?e:Ae(e),Nr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:go(e),Zi(this,4))}}function Ye(t){return et(t)?t.value:t}const rT={get:(t,e,n)=>Ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return et(s)&&!et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function py(t){return Ar(t)?t:new Proxy(t,rT)}class sT{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>cf(this),()=>Zi(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function iT(t){return new sT(t)}function oT(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=my(t,n);return e}class aT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Mb(Ae(this._object),this._key)}}class cT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function lT(t,e,n){return et(t)?t:de(t)?new cT(t):xe(t)&&arguments.length>1?my(t,e,n):Vt(t)}function my(t,e,n){const r=t[e];return et(r)?r:new aT(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rr(t,e,n,r){try{return r?t(...r):t()}catch(s){zo(s,e,n)}}function en(t,e,n,r){if(de(t)){const s=Rr(t,e,n,r);return s&&H_(s)&&s.catch(i=>{zo(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function zo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Br(),Rr(l,null,10,[t,o,a]),$r();return}}uT(t,n,s,r)}function uT(t,e,n,r=!0){console.error(t)}let yo=!1,xu=!1;const Tt=[];let gn=0;const qs=[];let ur=null,ts=0;const gy=Promise.resolve();let lf=null;function Sn(t){const e=lf||gy;return t?e.then(this?t.bind(this):t):e}function hT(t){let e=gn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=vo(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function uf(t){(!Tt.length||!Tt.includes(t,yo&&t.allowRecurse?gn+1:gn))&&(t.id==null?Tt.push(t):Tt.splice(hT(t.id),0,t),_y())}function _y(){!yo&&!xu&&(xu=!0,lf=gy.then(yy))}function fT(t){const e=Tt.indexOf(t);e>gn&&Tt.splice(e,1)}function Nu(t){le(t)?qs.push(...t):(!ur||!ur.includes(t,t.allowRecurse?ts+1:ts))&&qs.push(t),_y()}function Pp(t,e,n=yo?gn+1:0){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r()}}}function lc(t){if(qs.length){const e=[...new Set(qs)].sort((n,r)=>vo(n)-vo(r));if(qs.length=0,ur){ur.push(...e);return}for(ur=e,ts=0;ts<ur.length;ts++){const n=ur[ts];n.active!==!1&&n()}ur=null,ts=0}}const vo=t=>t.id==null?1/0:t.id,dT=(t,e)=>{const n=vo(t)-vo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yy(t){xu=!1,yo=!0,Tt.sort(dT);try{for(gn=0;gn<Tt.length;gn++){const e=Tt[gn];e&&e.active!==!1&&Rr(e,e.i,e.i?15:14)}}finally{gn=0,Tt.length=0,lc(),yo=!1,lf=null,(Tt.length||qs.length)&&yy()}}let nt=null,qc=null;function uc(t){const e=nt;return nt=t,qc=t&&t.type.__scopeId||null,e}function vy(t){qc=t}function Ey(){qc=null}function pn(t,e=nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&jp(-1);const i=uc(e);let o;try{o=t(...s)}finally{uc(i),r._d&&jp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function IV(t,e){if(nt===null)return t;const n=Xc(nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ue]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&pr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function mn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Br(),en(l,n,8,[t.el,a,t,e]),$r())}}const hr=Symbol("_leaveCb"),Sa=Symbol("_enterCb");function pT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kc(()=>{t.isMounted=!0}),Wo(()=>{t.isUnmounting=!0}),t}const Xt=[Function,Array],wy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},by=t=>{const e=t.subTree;return e.component?by(e.component):e},mT={name:"BaseTransition",props:wy,setup(t,{slots:e}){const n=Qc(),r=pT();return()=>{const s=e.default&&Iy(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==ot){i=p;break}}const o=Ae(t),{mode:a}=o;if(r.isLeaving)return Ql(i);const l=kp(i);if(!l)return Ql(i);let u=Du(l,o,r,n,p=>u=p);Eo(l,u);const h=n.subTree,d=h&&kp(h);if(d&&d.type!==ot&&!cn(l,d)&&by(n).type!==ot){const p=Du(d,o,r,n);if(Eo(d,p),a==="out-in"&&l.type!==ot)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ql(i);a==="in-out"&&l.type!==ot&&(p.delayLeave=(g,R,k)=>{const x=Ty(r,d);x[String(d.key)]=d,g[hr]=()=>{R(),g[hr]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return i}}},gT=mT;function Ty(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Du(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:R,onLeaveCancelled:k,onBeforeAppear:x,onAppear:N,onAfterAppear:S,onAppearCancelled:w}=e,O=String(t.key),L=Ty(n,t),M=(_,E)=>{_&&en(_,r,9,E)},b=(_,E)=>{const C=E[1];M(_,E),le(_)?_.every(A=>A.length<=1)&&C():_.length<=1&&C()},y={mode:o,persisted:a,beforeEnter(_){let E=l;if(!n.isMounted)if(i)E=x||l;else return;_[hr]&&_[hr](!0);const C=L[O];C&&cn(t,C)&&C.el[hr]&&C.el[hr](),M(E,[_])},enter(_){let E=u,C=h,A=d;if(!n.isMounted)if(i)E=N||u,C=S||h,A=w||d;else return;let T=!1;const me=_[Sa]=ye=>{T||(T=!0,ye?M(A,[_]):M(C,[_]),y.delayedLeave&&y.delayedLeave(),_[Sa]=void 0)};E?b(E,[_,me]):me()},leave(_,E){const C=String(t.key);if(_[Sa]&&_[Sa](!0),n.isUnmounting)return E();M(p,[_]);let A=!1;const T=_[hr]=me=>{A||(A=!0,E(),me?M(k,[_]):M(R,[_]),_[hr]=void 0,L[C]===t&&delete L[C])};L[C]=t,g?b(g,[_,T]):T()},clone(_){const E=Du(_,e,n,r,s);return s&&s(E),E}};return y}function Ql(t){if(zc(t))return t=Bn(t),t.children=null,t}function kp(t){if(!zc(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Eo(t,e){t.shapeFlag&6&&t.component?Eo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Iy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Pt?(o.patchFlag&128&&s++,r=r.concat(Iy(o.children,e,a))):(e||o.type!==ot)&&r.push(a!=null?Bn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Cn(t,e){return de(t)?ct({name:t.name},e,{setup:t}):t}const os=t=>!!t.type.__asyncLoader,zc=t=>t.type.__isKeepAlive,_T={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Qc(),r=n.ctx;if(!r.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(S,w,O,L,M)=>{const b=S.component;u(S,w,O,0,a),l(b.vnode,S,w,O,b,a,L,S.slotScopeIds,M),st(()=>{b.isDeactivated=!1,b.a&&Hs(b.a);const y=S.props&&S.props.onVnodeMounted;y&&xt(y,b.parent,S)},a)},r.deactivate=S=>{const w=S.component;dc(w.m),dc(w.a),u(S,p,null,1,a),st(()=>{w.da&&Hs(w.da);const O=S.props&&S.props.onVnodeUnmounted;O&&xt(O,w.parent,S),w.isDeactivated=!0},a)};function g(S){Yl(S),h(S,n,a,!0)}function R(S){s.forEach((w,O)=>{const L=Hu(w.type);L&&(!S||!S(L))&&k(O)})}function k(S){const w=s.get(S);w&&(!o||!cn(w,o))?g(w):o&&Yl(o),s.delete(S),i.delete(S)}ln(()=>[t.include,t.exclude],([S,w])=>{S&&R(O=>Hi(S,O)),w&&R(O=>!Hi(w,O))},{flush:"post",deep:!0});let x=null;const N=()=>{x!=null&&(Uu(n.subTree.type)?st(()=>{s.set(x,Ca(n.subTree))},n.subTree.suspense):s.set(x,Ca(n.subTree)))};return Kc(N),Cy(N),Wo(()=>{s.forEach(S=>{const{subTree:w,suspense:O}=n,L=Ca(w);if(S.type===L.type&&S.key===L.key){Yl(L);const M=L.component.da;M&&st(M,O);return}g(S)})}),()=>{if(x=null,!e.default)return null;const S=e.default(),w=S[0];if(S.length>1)return o=null,S;if(!ei(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let O=Ca(w);if(O.type===ot)return o=null,O;const L=O.type,M=Hu(os(O)?O.type.__asyncResolved||{}:L),{include:b,exclude:y,max:_}=t;if(b&&(!M||!Hi(b,M))||y&&M&&Hi(y,M))return o=O,w;const E=O.key==null?L:O.key,C=s.get(E);return O.el&&(O=Bn(O),w.shapeFlag&128&&(w.ssContent=O)),x=E,C?(O.el=C.el,O.component=C.component,O.transition&&Eo(O,O.transition),O.shapeFlag|=512,i.delete(E),i.add(E)):(i.add(E),_&&i.size>parseInt(_,10)&&k(i.values().next().value)),O.shapeFlag|=256,o=O,Uu(w.type)?w:O}}},yT=_T;function Hi(t,e){return le(t)?t.some(n=>Hi(n,e)):We(t)?t.split(",").includes(e):Tb(t)?t.test(e):!1}function Ay(t,e){Sy(t,"a",e)}function Ry(t,e){Sy(t,"da",e)}function Sy(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zc(s.parent.vnode)&&vT(r,e,n,s),s=s.parent}}function vT(t,e,n,r){const s=Wc(e,t,r,!0);Py(()=>{Gh(r[e],s)},n)}function Yl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ca(t){return t.shapeFlag&128?t.ssContent:t}function Wc(t,e,n=at,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Br();const a=Ko(n),l=en(e,n,t,o);return a(),$r(),l});return r?s.unshift(i):s.push(i),i}}const Gn=t=>(e,n=at)=>{(!Yc||t==="sp")&&Wc(t,(...r)=>e(...r),n)},ET=Gn("bm"),Kc=Gn("m"),wT=Gn("bu"),Cy=Gn("u"),Wo=Gn("bum"),Py=Gn("um"),bT=Gn("sp"),TT=Gn("rtg"),IT=Gn("rtc");function ky(t,e=at){Wc("ec",t,e)}const Oy="components";function wo(t,e){return Ny(Oy,t,!0,e)||t}const xy=Symbol.for("v-ndc");function AT(t){return We(t)?Ny(Oy,t,!1)||t:t||xy}function Ny(t,e,n=!0,r=!1){const s=nt||at;if(s){const i=s.type;{const a=Hu(i,!1);if(a&&(a===e||a===un(e)||a===Bc(un(e))))return i}const o=Op(s[t]||i[t],e)||Op(s.appContext[t],e);return!o&&r?i:o}}function Op(t,e){return t&&(t[e]||t[un(e)]||t[Bc(un(e))])}function AV(t,e,n,r){let s;const i=n;if(le(t)||We(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}function RV(t,e,n={},r,s){if(nt.isCE||nt.parent&&os(nt.parent)&&nt.parent.isCE)return Ce("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),Nt();const o=i&&Dy(i(n)),a=mr(Pt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),a}function Dy(t){return t.some(e=>ei(e)?!(e.type===ot||e.type===Pt&&!Dy(e.children)):!0)?t:null}const Lu=t=>t?sv(t)?Xc(t):Lu(t.parent):null,eo=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lu(t.parent),$root:t=>Lu(t.root),$emit:t=>t.emit,$options:t=>hf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,uf(t.update)}),$nextTick:t=>t.n||(t.n=Sn.bind(t.proxy)),$watch:t=>XT.bind(t)}),Xl=(t,e)=>t!==Ue&&!t.__isScriptSetup&&Ie(t,e),RT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xl(r,e))return o[e]=1,r[e];if(s!==Ue&&Ie(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ie(u,e))return o[e]=3,i[e];if(n!==Ue&&Ie(n,e))return o[e]=4,n[e];Mu&&(o[e]=0)}}const h=eo[e];let d,p;if(h)return e==="$attrs"&&Mt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ue&&Ie(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ie(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xl(s,e)?(s[e]=n,!0):r!==Ue&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ue&&Ie(t,o)||Xl(e,o)||(a=i[0])&&Ie(a,o)||Ie(r,o)||Ie(eo,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xp(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Mu=!0;function ST(t){const e=hf(t),n=t.proxy,r=t.ctx;Mu=!1,e.beforeCreate&&Np(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:R,activated:k,deactivated:x,beforeDestroy:N,beforeUnmount:S,destroyed:w,unmounted:O,render:L,renderTracked:M,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:E,inheritAttrs:C,components:A,directives:T,filters:me}=e;if(u&&CT(u,r,null),o)for(const te in o){const ie=o[te];de(ie)&&(r[te]=ie.bind(n))}if(s){const te=s.call(n,n);xe(te)&&(t.data=Hr(te))}if(Mu=!0,i)for(const te in i){const ie=i[te],He=de(ie)?ie.bind(n,n):de(ie.get)?ie.get.bind(n,n):Zt,rn=!de(ie)&&de(ie.set)?ie.set.bind(n):Zt,Gt=De({get:He,set:rn});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:qe=>Gt.value=qe})}if(a)for(const te in a)Ly(a[te],r,n,te);if(l){const te=de(l)?l.call(n):l;Reflect.ownKeys(te).forEach(ie=>{cs(ie,te[ie])})}h&&Np(h,t,"c");function J(te,ie){le(ie)?ie.forEach(He=>te(He.bind(n))):ie&&te(ie.bind(n))}if(J(ET,d),J(Kc,p),J(wT,g),J(Cy,R),J(Ay,k),J(Ry,x),J(ky,y),J(IT,M),J(TT,b),J(Wo,S),J(Py,O),J(bT,_),le(E))if(E.length){const te=t.exposed||(t.exposed={});E.forEach(ie=>{Object.defineProperty(te,ie,{get:()=>n[ie],set:He=>n[ie]=He})})}else t.exposed||(t.exposed={});L&&t.render===Zt&&(t.render=L),C!=null&&(t.inheritAttrs=C),A&&(t.components=A),T&&(t.directives=T)}function CT(t,e,n=Zt){le(t)&&(t=Vu(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=It(s.from||r,s.default,!0):i=It(s.from||r):i=It(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Np(t,e,n){en(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ly(t,e,n,r){const s=r.includes(".")?Yy(n,r):()=>n[r];if(We(t)){const i=e[t];de(i)&&ln(s,i)}else if(de(t))ln(s,t.bind(n));else if(xe(t))if(le(t))t.forEach(i=>Ly(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&ln(s,i,t)}}function hf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>hc(l,u,o,!0)),hc(l,e,o)),xe(e)&&i.set(e,l),l}function hc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&hc(t,i,n,!0),s&&s.forEach(o=>hc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=PT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const PT={data:Dp,props:Lp,emits:Lp,methods:qi,computed:qi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:qi,directives:qi,watch:OT,provide:Dp,inject:kT};function Dp(t,e){return e?t?function(){return ct(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function kT(t,e){return qi(Vu(t),Vu(e))}function Vu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function qi(t,e){return t?ct(Object.create(null),t,e):e}function Lp(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ct(Object.create(null),xp(t),xp(e??{})):e}function OT(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function My(){return{app:null,config:{isNativeTag:wb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xT=0;function NT(t,e){return function(r,s=null){de(r)||(r=ct({},r)),s!=null&&!xe(s)&&(s=null);const i=My(),o=new WeakSet;let a=!1;const l=i.app={_uid:xT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ov,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...h)):de(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,d){if(!a){const p=Ce(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),a=!0,l._container=u,u.__vue_app__=l,Xc(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=as;as=l;try{return u()}finally{as=h}}};return l}}let as=null;function cs(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function It(t,e,n=!1){const r=at||nt;if(r||as){const s=as?as._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function ff(){return!!(at||nt||as)}const Vy={},Fy=()=>Object.create(Vy),Uy=t=>Object.getPrototypeOf(t)===Vy;function DT(t,e,n,r=!1){const s={},i=Fy();t.propsDefaults=Object.create(null),jy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function LT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(Gc(t.emitsOptions,p))continue;const g=e[p];if(l)if(Ie(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const R=un(p);s[R]=Fu(l,a,R,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{jy(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ie(e,d)&&((h=Es(d))===d||!Ie(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Fu(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ie(e,d))&&(delete i[d],u=!0)}u&&Un(t.attrs,"set","")}function jy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($s(l))continue;const u=e[l];let h;s&&Ie(s,h=un(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Gc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=a||Ue;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Fu(s,l,d,u[d],t,!Ie(u,d))}}return o}function Fu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Ko(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Es(n))&&(r=!0))}return r}const MT=new WeakMap;function By(t,e,n=!1){const r=n?MT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=d=>{l=!0;const[p,g]=By(d,e,!0);ct(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return xe(t)&&r.set(t,js),js;if(le(i))for(let h=0;h<i.length;h++){const d=un(i[h]);Mp(d)&&(o[d]=Ue)}else if(i)for(const h in i){const d=un(h);if(Mp(d)){const p=i[h],g=o[d]=le(p)||de(p)?{type:p}:ct({},p),R=g.type;let k=!1,x=!0;if(le(R))for(let N=0;N<R.length;++N){const S=R[N],w=de(S)&&S.name;if(w==="Boolean"){k=!0;break}else w==="String"&&(x=!1)}else k=de(R)&&R.name==="Boolean";g[0]=k,g[1]=x,(k||Ie(g,"default"))&&a.push(d)}}const u=[o,a];return xe(t)&&r.set(t,u),u}function Mp(t){return t[0]!=="$"&&!$s(t)}const $y=t=>t[0]==="_"||t==="$stable",df=t=>le(t)?t.map($t):[$t(t)],VT=(t,e,n)=>{if(e._n)return e;const r=pn((...s)=>df(e(...s)),n);return r._c=!1,r},Hy=(t,e,n)=>{const r=t._ctx;for(const s in t){if($y(s))continue;const i=t[s];if(de(i))e[s]=VT(s,i,r);else if(i!=null){const o=df(i);e[s]=()=>o}}},qy=(t,e)=>{const n=df(e);t.slots.default=()=>n},zy=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},FT=(t,e,n)=>{const r=t.slots=Fy();if(t.vnode.shapeFlag&32){const s=e._;s?(zy(r,e,n),n&&W_(r,"_",s,!0)):Hy(e,r)}else e&&qy(t,e)},UT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:zy(s,e,n):(i=!e.$stable,Hy(e,s)),o=e}else e&&(qy(t,e),o={default:1});if(i)for(const a in s)!$y(a)&&o[a]==null&&delete s[a]};function fc(t,e,n,r,s=!1){if(le(t)){t.forEach((p,g)=>fc(p,e&&(le(e)?e[g]:e),n,r,s));return}if(os(r)&&!s)return;const i=r.shapeFlag&4?Xc(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Ue?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==l&&(We(u)?(h[u]=null,Ie(d,u)&&(d[u]=null)):et(u)&&(u.value=null)),de(l))Rr(l,a,12,[o,h]);else{const p=We(l),g=et(l);if(p||g){const R=()=>{if(t.f){const k=p?Ie(d,l)?d[l]:h[l]:l.value;s?le(k)&&Gh(k,i):le(k)?k.includes(i)||k.push(i):p?(h[l]=[i],Ie(d,l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,Ie(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(R.id=-1,st(R,n)):R()}}}const jT=Symbol("_vte"),BT=t=>t.__isTeleport;let Vp=!1;const Os=()=>{Vp||(console.error("Hydration completed but contains mismatches."),Vp=!0)},$T=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",HT=t=>t.namespaceURI.includes("MathML"),Pa=t=>{if($T(t))return"svg";if(HT(t))return"mathml"},ka=t=>t.nodeType===8;function qT(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(w,O)=>{if(!O.hasChildNodes()){n(null,w,O),lc(),O._vnode=w;return}d(O.firstChild,w,null,null,null),lc(),O._vnode=w},d=(w,O,L,M,b,y=!1)=>{y=y||!!O.dynamicChildren;const _=ka(w)&&w.data==="[",E=()=>k(w,O,L,M,b,_),{type:C,ref:A,shapeFlag:T,patchFlag:me}=O;let ye=w.nodeType;O.el=w,me===-2&&(y=!1,O.dynamicChildren=null);let J=null;switch(C){case ls:ye!==3?O.children===""?(l(O.el=s(""),o(w),w),J=w):J=E():(w.data!==O.children&&(Os(),w.data=O.children),J=i(w));break;case ot:S(w)?(J=i(w),N(O.el=w.content.firstChild,w,L)):ye!==8||_?J=E():J=i(w);break;case to:if(_&&(w=i(w),ye=w.nodeType),ye===1||ye===3){J=w;const te=!O.children.length;for(let ie=0;ie<O.staticCount;ie++)te&&(O.children+=J.nodeType===1?J.outerHTML:J.data),ie===O.staticCount-1&&(O.anchor=J),J=i(J);return _?i(J):J}else E();break;case Pt:_?J=R(w,O,L,M,b,y):J=E();break;default:if(T&1)(ye!==1||O.type.toLowerCase()!==w.tagName.toLowerCase())&&!S(w)?J=E():J=p(w,O,L,M,b,y);else if(T&6){O.slotScopeIds=b;const te=o(w);if(_?J=x(w):ka(w)&&w.data==="teleport start"?J=x(w,w.data,"teleport end"):J=i(w),e(O,te,null,L,M,Pa(te),y),os(O)){let ie;_?(ie=Ce(Pt),ie.anchor=J?J.previousSibling:te.lastChild):ie=w.nodeType===3?Jt(""):Ce("div"),ie.el=w,O.component.subTree=ie}}else T&64?ye!==8?J=E():J=O.type.hydrate(w,O,L,M,b,y,t,g):T&128&&(J=O.type.hydrate(w,O,L,M,Pa(o(w)),b,y,t,d))}return A!=null&&fc(A,null,M,O),J},p=(w,O,L,M,b,y)=>{y=y||!!O.dynamicChildren;const{type:_,props:E,patchFlag:C,shapeFlag:A,dirs:T,transition:me}=O,ye=_==="input"||_==="option";if(ye||C!==-1){T&&mn(O,null,L,"created");let J=!1;if(S(w)){J=Ky(M,me)&&L&&L.vnode.props&&L.vnode.props.appear;const ie=w.content.firstChild;J&&me.beforeEnter(ie),N(ie,w,L),O.el=w=ie}if(A&16&&!(E&&(E.innerHTML||E.textContent))){let ie=g(w.firstChild,O,w,L,M,b,y);for(;ie;){Os();const He=ie;ie=ie.nextSibling,a(He)}}else A&8&&w.textContent!==O.children&&(Os(),w.textContent=O.children);if(E){if(ye||!y||C&48){const ie=w.tagName.includes("-");for(const He in E)(ye&&(He.endsWith("value")||He==="indeterminate")||Bo(He)&&!$s(He)||He[0]==="."||ie)&&r(w,He,null,E[He],void 0,L)}else if(E.onClick)r(w,"onClick",null,E.onClick,void 0,L);else if(C&4&&Ar(E.style))for(const ie in E.style)E.style[ie]}let te;(te=E&&E.onVnodeBeforeMount)&&xt(te,L,O),T&&mn(O,null,L,"beforeMount"),((te=E&&E.onVnodeMounted)||T||J)&&Zy(()=>{te&&xt(te,L,O),J&&me.enter(w),T&&mn(O,null,L,"mounted")},M)}return w.nextSibling},g=(w,O,L,M,b,y,_)=>{_=_||!!O.dynamicChildren;const E=O.children,C=E.length;for(let A=0;A<C;A++){const T=_?E[A]:E[A]=$t(E[A]),me=T.type===ls;if(w){if(me&&!_){let ye=E[A+1];ye&&(ye=$t(ye)).type===ls&&(l(s(w.data.slice(T.children.length)),L,i(w)),w.data=T.children)}w=d(w,T,M,b,y,_)}else me&&!T.children?l(T.el=s(""),L):(Os(),n(null,T,L,null,M,b,Pa(L),y))}return w},R=(w,O,L,M,b,y)=>{const{slotScopeIds:_}=O;_&&(b=b?b.concat(_):_);const E=o(w),C=g(i(w),O,E,L,M,b,y);return C&&ka(C)&&C.data==="]"?i(O.anchor=C):(Os(),l(O.anchor=u("]"),E,C),C)},k=(w,O,L,M,b,y)=>{if(Os(),O.el=null,y){const C=x(w);for(;;){const A=i(w);if(A&&A!==C)a(A);else break}}const _=i(w),E=o(w);return a(w),n(null,O,E,_,L,M,Pa(E),b),_},x=(w,O="[",L="]")=>{let M=0;for(;w;)if(w=i(w),w&&ka(w)&&(w.data===O&&M++,w.data===L)){if(M===0)return i(w);M--}return w},N=(w,O,L)=>{const M=O.parentNode;M&&M.replaceChild(w,O);let b=L;for(;b;)b.vnode.el===O&&(b.vnode.el=b.subTree.el=w),b=b.parent},S=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[h,d]}const st=Zy;function zT(t){return Wy(t)}function WT(t){return Wy(t,qT)}function Wy(t,e){const n=G_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Zt,insertStaticContent:R}=t,k=(I,P,V,B=null,U=null,z=null,Q=void 0,W=null,G=!!P.dynamicChildren)=>{if(I===P)return;I&&!cn(I,P)&&(B=j(I),qe(I,U,z,!0),I=null),P.patchFlag===-2&&(G=!1,P.dynamicChildren=null);const{type:q,ref:X,shapeFlag:ae}=P;switch(q){case ls:x(I,P,V,B);break;case ot:N(I,P,V,B);break;case to:I==null&&S(P,V,B,Q);break;case Pt:A(I,P,V,B,U,z,Q,W,G);break;default:ae&1?L(I,P,V,B,U,z,Q,W,G):ae&6?T(I,P,V,B,U,z,Q,W,G):(ae&64||ae&128)&&q.process(I,P,V,B,U,z,Q,W,G,ee)}X!=null&&U&&fc(X,I&&I.ref,z,P||I,!P)},x=(I,P,V,B)=>{if(I==null)r(P.el=a(P.children),V,B);else{const U=P.el=I.el;P.children!==I.children&&u(U,P.children)}},N=(I,P,V,B)=>{I==null?r(P.el=l(P.children||""),V,B):P.el=I.el},S=(I,P,V,B)=>{[I.el,I.anchor]=R(I.children,P,V,B,I.el,I.anchor)},w=({el:I,anchor:P},V,B)=>{let U;for(;I&&I!==P;)U=p(I),r(I,V,B),I=U;r(P,V,B)},O=({el:I,anchor:P})=>{let V;for(;I&&I!==P;)V=p(I),s(I),I=V;s(P)},L=(I,P,V,B,U,z,Q,W,G)=>{P.type==="svg"?Q="svg":P.type==="math"&&(Q="mathml"),I==null?M(P,V,B,U,z,Q,W,G):_(I,P,U,z,Q,W,G)},M=(I,P,V,B,U,z,Q,W)=>{let G,q;const{props:X,shapeFlag:ae,transition:oe,dirs:se}=I;if(G=I.el=o(I.type,z,X&&X.is,X),ae&8?h(G,I.children):ae&16&&y(I.children,G,null,B,U,Jl(I,z),Q,W),se&&mn(I,null,B,"created"),b(G,I,I.scopeId,Q,B),X){for(const Pe in X)Pe!=="value"&&!$s(Pe)&&i(G,Pe,null,X[Pe],z,B);"value"in X&&i(G,"value",null,X.value,z),(q=X.onVnodeBeforeMount)&&xt(q,B,I)}se&&mn(I,null,B,"beforeMount");const ue=Ky(U,oe);ue&&oe.beforeEnter(G),r(G,P,V),((q=X&&X.onVnodeMounted)||ue||se)&&st(()=>{q&&xt(q,B,I),ue&&oe.enter(G),se&&mn(I,null,B,"mounted")},U)},b=(I,P,V,B,U)=>{if(V&&g(I,V),B)for(let z=0;z<B.length;z++)g(I,B[z]);if(U){let z=U.subTree;if(P===z){const Q=U.vnode;b(I,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(I,P,V,B,U,z,Q,W,G=0)=>{for(let q=G;q<I.length;q++){const X=I[q]=W?fr(I[q]):$t(I[q]);k(null,X,P,V,B,U,z,Q,W)}},_=(I,P,V,B,U,z,Q)=>{const W=P.el=I.el;let{patchFlag:G,dynamicChildren:q,dirs:X}=P;G|=I.patchFlag&16;const ae=I.props||Ue,oe=P.props||Ue;let se;if(V&&Yr(V,!1),(se=oe.onVnodeBeforeUpdate)&&xt(se,V,P,I),X&&mn(P,I,V,"beforeUpdate"),V&&Yr(V,!0),(ae.innerHTML&&oe.innerHTML==null||ae.textContent&&oe.textContent==null)&&h(W,""),q?E(I.dynamicChildren,q,W,V,B,Jl(P,U),z):Q||ie(I,P,W,null,V,B,Jl(P,U),z,!1),G>0){if(G&16)C(W,ae,oe,V,U);else if(G&2&&ae.class!==oe.class&&i(W,"class",null,oe.class,U),G&4&&i(W,"style",ae.style,oe.style,U),G&8){const ue=P.dynamicProps;for(let Pe=0;Pe<ue.length;Pe++){const Te=ue[Pe],Qe=ae[Te],Ft=oe[Te];(Ft!==Qe||Te==="value")&&i(W,Te,Qe,Ft,U,V)}}G&1&&I.children!==P.children&&h(W,P.children)}else!Q&&q==null&&C(W,ae,oe,V,U);((se=oe.onVnodeUpdated)||X)&&st(()=>{se&&xt(se,V,P,I),X&&mn(P,I,V,"updated")},B)},E=(I,P,V,B,U,z,Q)=>{for(let W=0;W<P.length;W++){const G=I[W],q=P[W],X=G.el&&(G.type===Pt||!cn(G,q)||G.shapeFlag&70)?d(G.el):V;k(G,q,X,null,B,U,z,Q,!0)}},C=(I,P,V,B,U)=>{if(P!==V){if(P!==Ue)for(const z in P)!$s(z)&&!(z in V)&&i(I,z,P[z],null,U,B);for(const z in V){if($s(z))continue;const Q=V[z],W=P[z];Q!==W&&z!=="value"&&i(I,z,W,Q,U,B)}"value"in V&&i(I,"value",P.value,V.value,U)}},A=(I,P,V,B,U,z,Q,W,G)=>{const q=P.el=I?I.el:a(""),X=P.anchor=I?I.anchor:a("");let{patchFlag:ae,dynamicChildren:oe,slotScopeIds:se}=P;se&&(W=W?W.concat(se):se),I==null?(r(q,V,B),r(X,V,B),y(P.children||[],V,X,U,z,Q,W,G)):ae>0&&ae&64&&oe&&I.dynamicChildren?(E(I.dynamicChildren,oe,V,U,z,Q,W),(P.key!=null||U&&P===U.subTree)&&Gy(I,P,!0)):ie(I,P,V,X,U,z,Q,W,G)},T=(I,P,V,B,U,z,Q,W,G)=>{P.slotScopeIds=W,I==null?P.shapeFlag&512?U.ctx.activate(P,V,B,Q,G):me(P,V,B,U,z,Q,G):ye(I,P,G)},me=(I,P,V,B,U,z,Q)=>{const W=I.component=mI(I,B,U);if(zc(I)&&(W.ctx.renderer=ee),gI(W,!1,Q),W.asyncDep){if(U&&U.registerDep(W,J,Q),!I.el){const G=W.subTree=Ce(ot);N(null,G,P,V)}}else J(W,I,P,V,U,z,Q)},ye=(I,P,V)=>{const B=P.component=I.component;if(rI(I,P,V))if(B.asyncDep&&!B.asyncResolved){te(B,P,V);return}else B.next=P,fT(B.update),B.effect.dirty=!0,B.update();else P.el=I.el,B.vnode=P},J=(I,P,V,B,U,z,Q)=>{const W=()=>{if(I.isMounted){let{next:X,bu:ae,u:oe,parent:se,vnode:ue}=I;{const Qt=Qy(I);if(Qt){X&&(X.el=ue.el,te(I,X,Q)),Qt.asyncDep.then(()=>{I.isUnmounted||W()});return}}let Pe=X,Te;Yr(I,!1),X?(X.el=ue.el,te(I,X,Q)):X=ue,ae&&Hs(ae),(Te=X.props&&X.props.onVnodeBeforeUpdate)&&xt(Te,se,X,ue),Yr(I,!0);const Qe=Zl(I),Ft=I.subTree;I.subTree=Qe,k(Ft,Qe,d(Ft.el),j(Ft),I,U,z),X.el=Qe.el,Pe===null&&mf(I,Qe.el),oe&&st(oe,U),(Te=X.props&&X.props.onVnodeUpdated)&&st(()=>xt(Te,se,X,ue),U)}else{let X;const{el:ae,props:oe}=P,{bm:se,m:ue,parent:Pe}=I,Te=os(P);if(Yr(I,!1),se&&Hs(se),!Te&&(X=oe&&oe.onVnodeBeforeMount)&&xt(X,Pe,P),Yr(I,!0),ae&&Oe){const Qe=()=>{I.subTree=Zl(I),Oe(ae,I.subTree,I,U,null)};Te?P.type.__asyncLoader().then(()=>!I.isUnmounted&&Qe()):Qe()}else{const Qe=I.subTree=Zl(I);k(null,Qe,V,B,I,U,z),P.el=Qe.el}if(ue&&st(ue,U),!Te&&(X=oe&&oe.onVnodeMounted)){const Qe=P;st(()=>xt(X,Pe,Qe),U)}(P.shapeFlag&256||Pe&&os(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&I.a&&st(I.a,U),I.isMounted=!0,P=V=B=null}},G=I.effect=new Zh(W,Zt,()=>uf(q),I.scope),q=I.update=()=>{G.dirty&&G.run()};q.i=I,q.id=I.uid,Yr(I,!0),q()},te=(I,P,V)=>{P.component=I;const B=I.vnode.props;I.vnode=P,I.next=null,LT(I,P.props,B,V),UT(I,P.children,V),Br(),Pp(I),$r()},ie=(I,P,V,B,U,z,Q,W,G=!1)=>{const q=I&&I.children,X=I?I.shapeFlag:0,ae=P.children,{patchFlag:oe,shapeFlag:se}=P;if(oe>0){if(oe&128){rn(q,ae,V,B,U,z,Q,W,G);return}else if(oe&256){He(q,ae,V,B,U,z,Q,W,G);return}}se&8?(X&16&&kt(q,U,z),ae!==q&&h(V,ae)):X&16?se&16?rn(q,ae,V,B,U,z,Q,W,G):kt(q,U,z,!0):(X&8&&h(V,""),se&16&&y(ae,V,B,U,z,Q,W,G))},He=(I,P,V,B,U,z,Q,W,G)=>{I=I||js,P=P||js;const q=I.length,X=P.length,ae=Math.min(q,X);let oe;for(oe=0;oe<ae;oe++){const se=P[oe]=G?fr(P[oe]):$t(P[oe]);k(I[oe],se,V,null,U,z,Q,W,G)}q>X?kt(I,U,z,!0,!1,ae):y(P,V,B,U,z,Q,W,G,ae)},rn=(I,P,V,B,U,z,Q,W,G)=>{let q=0;const X=P.length;let ae=I.length-1,oe=X-1;for(;q<=ae&&q<=oe;){const se=I[q],ue=P[q]=G?fr(P[q]):$t(P[q]);if(cn(se,ue))k(se,ue,V,null,U,z,Q,W,G);else break;q++}for(;q<=ae&&q<=oe;){const se=I[ae],ue=P[oe]=G?fr(P[oe]):$t(P[oe]);if(cn(se,ue))k(se,ue,V,null,U,z,Q,W,G);else break;ae--,oe--}if(q>ae){if(q<=oe){const se=oe+1,ue=se<X?P[se].el:B;for(;q<=oe;)k(null,P[q]=G?fr(P[q]):$t(P[q]),V,ue,U,z,Q,W,G),q++}}else if(q>oe)for(;q<=ae;)qe(I[q],U,z,!0),q++;else{const se=q,ue=q,Pe=new Map;for(q=ue;q<=oe;q++){const Rt=P[q]=G?fr(P[q]):$t(P[q]);Rt.key!=null&&Pe.set(Rt.key,q)}let Te,Qe=0;const Ft=oe-ue+1;let Qt=!1,Ai=0;const Zn=new Array(Ft);for(q=0;q<Ft;q++)Zn[q]=0;for(q=se;q<=ae;q++){const Rt=I[q];if(Qe>=Ft){qe(Rt,U,z,!0);continue}let Yt;if(Rt.key!=null)Yt=Pe.get(Rt.key);else for(Te=ue;Te<=oe;Te++)if(Zn[Te-ue]===0&&cn(Rt,P[Te])){Yt=Te;break}Yt===void 0?qe(Rt,U,z,!0):(Zn[Yt-ue]=q+1,Yt>=Ai?Ai=Yt:Qt=!0,k(Rt,P[Yt],V,null,U,z,Q,W,G),Qe++)}const As=Qt?KT(Zn):js;for(Te=As.length-1,q=Ft-1;q>=0;q--){const Rt=ue+q,Yt=P[Rt],Rs=Rt+1<X?P[Rt+1].el:B;Zn[q]===0?k(null,Yt,V,Rs,U,z,Q,W,G):Qt&&(Te<0||q!==As[Te]?Gt(Yt,V,Rs,2):Te--)}}},Gt=(I,P,V,B,U=null)=>{const{el:z,type:Q,transition:W,children:G,shapeFlag:q}=I;if(q&6){Gt(I.component.subTree,P,V,B);return}if(q&128){I.suspense.move(P,V,B);return}if(q&64){Q.move(I,P,V,ee);return}if(Q===Pt){r(z,P,V);for(let ae=0;ae<G.length;ae++)Gt(G[ae],P,V,B);r(I.anchor,P,V);return}if(Q===to){w(I,P,V);return}if(B!==2&&q&1&&W)if(B===0)W.beforeEnter(z),r(z,P,V),st(()=>W.enter(z),U);else{const{leave:ae,delayLeave:oe,afterLeave:se}=W,ue=()=>r(z,P,V),Pe=()=>{ae(z,()=>{ue(),se&&se()})};oe?oe(z,ue,Pe):Pe()}else r(z,P,V)},qe=(I,P,V,B=!1,U=!1)=>{const{type:z,props:Q,ref:W,children:G,dynamicChildren:q,shapeFlag:X,patchFlag:ae,dirs:oe,cacheIndex:se}=I;if(ae===-2&&(U=!1),W!=null&&fc(W,null,V,I,!0),se!=null&&(P.renderCache[se]=void 0),X&256){P.ctx.deactivate(I);return}const ue=X&1&&oe,Pe=!os(I);let Te;if(Pe&&(Te=Q&&Q.onVnodeBeforeUnmount)&&xt(Te,P,I),X&6)dn(I.component,V,B);else{if(X&128){I.suspense.unmount(V,B);return}ue&&mn(I,null,P,"beforeUnmount"),X&64?I.type.remove(I,P,V,ee,B):q&&!q.hasOnce&&(z!==Pt||ae>0&&ae&64)?kt(q,P,V,!1,!0):(z===Pt&&ae&384||!U&&X&16)&&kt(G,P,V),B&&ze(I)}(Pe&&(Te=Q&&Q.onVnodeUnmounted)||ue)&&st(()=>{Te&&xt(Te,P,I),ue&&mn(I,null,P,"unmounted")},V)},ze=I=>{const{type:P,el:V,anchor:B,transition:U}=I;if(P===Pt){Jn(V,B);return}if(P===to){O(I);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:W}=U,G=()=>Q(V,z);W?W(I.el,z,G):G()}else z()},Jn=(I,P)=>{let V;for(;I!==P;)V=p(I),s(I),I=V;s(P)},dn=(I,P,V)=>{const{bum:B,scope:U,update:z,subTree:Q,um:W,m:G,a:q}=I;dc(G),dc(q),B&&Hs(B),U.stop(),z&&(z.active=!1,qe(Q,I,P,V)),W&&st(W,P),st(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},kt=(I,P,V,B=!1,U=!1,z=0)=>{for(let Q=z;Q<I.length;Q++)qe(I[Q],P,V,B,U)},j=I=>{if(I.shapeFlag&6)return j(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=p(I.anchor||I.el),V=P&&P[jT];return V?p(V):P};let Z=!1;const Y=(I,P,V)=>{I==null?P._vnode&&qe(P._vnode,null,null,!0):k(P._vnode||null,I,P,null,null,null,V),P._vnode=I,Z||(Z=!0,Pp(),lc(),Z=!1)},ee={p:k,um:qe,m:Gt,r:ze,mt:me,mc:y,pc:ie,pbc:E,n:j,o:t};let Ee,Oe;return e&&([Ee,Oe]=e(ee)),{render:Y,hydrate:Ee,createApp:NT(Y,Ee)}}function Jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ky(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gy(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=fr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Gy(o,a)),a.type===ls&&(a.el=o.el)}}function KT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Qy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qy(e)}function dc(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const GT=Symbol.for("v-scx"),QT=()=>It(GT);function YT(t,e){return pf(t,null,e)}const Oa={};function ln(t,e,n){return pf(t,e,n)}function pf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ue){if(e&&i){const M=e;e=(...b)=>{M(...b),L()}}const l=at,u=M=>r===!0?M:pr(M,r===!1?1:void 0);let h,d=!1,p=!1;if(et(t)?(h=()=>t.value,d=Js(t)):Ar(t)?(h=()=>u(t),d=!0):le(t)?(p=!0,d=t.some(M=>Ar(M)||Js(M)),h=()=>t.map(M=>{if(et(M))return M.value;if(Ar(M))return u(M);if(de(M))return Rr(M,l,2)})):de(t)?e?h=()=>Rr(t,l,2):h=()=>(g&&g(),en(t,l,3,[R])):h=Zt,e&&r){const M=h;h=()=>pr(M())}let g,R=M=>{g=w.onStop=()=>{Rr(M,l,4),g=w.onStop=void 0}},k;if(Yc)if(R=Zt,e?n&&en(e,l,3,[h(),p?[]:void 0,R]):h(),s==="sync"){const M=QT();k=M.__watcherHandles||(M.__watcherHandles=[])}else return Zt;let x=p?new Array(t.length).fill(Oa):Oa;const N=()=>{if(!(!w.active||!w.dirty))if(e){const M=w.run();(r||d||(p?M.some((b,y)=>Nr(b,x[y])):Nr(M,x)))&&(g&&g(),en(e,l,3,[M,x===Oa?void 0:p&&x[0]===Oa?[]:x,R]),x=M)}else w.run()};N.allowRecurse=!!e;let S;s==="sync"?S=N:s==="post"?S=()=>st(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),S=()=>uf(N));const w=new Zh(h,Zt,S),O=qo(),L=()=>{w.stop(),O&&Gh(O.effects,w)};return e?n?N():x=w.run():s==="post"?st(w.run.bind(w),l&&l.suspense):w.run(),k&&k.push(L),L}function XT(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Yy(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Ko(this),a=pf(s,i.bind(r),n);return o(),a}function Yy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function pr(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,et(t))pr(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)pr(t[r],e,n);else if(gi(t)||Bs(t))t.forEach(r=>{pr(r,e,n)});else if(z_(t)){for(const r in t)pr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pr(t[r],e,n)}return t}const JT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${un(e)}Modifiers`]||t[`${Es(e)}Modifiers`];function ZT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&JT(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>We(h)?h.trim():h)),o.number&&(s=n.map(oc)));let a,l=r[a=Kl(e)]||r[a=Kl(un(e))];!l&&i&&(l=r[a=Kl(Es(e))]),l&&en(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,en(u,t,6,s)}}function Xy(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=Xy(u,e,!0);h&&(a=!0,ct(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(xe(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):ct(o,i),xe(t)&&r.set(t,o),o)}function Gc(t,e){return!t||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Es(e))||Ie(t,e))}function Zl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:R,inheritAttrs:k}=t,x=uc(t);let N,S;try{if(n.shapeFlag&4){const O=s||r,L=O;N=$t(u.call(L,O,h,d,g,p,R)),S=a}else{const O=e;N=$t(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),S=e.props?a:tI(a)}}catch(O){no.length=0,zo(O,t,1),N=Ce(ot)}let w=N;if(S&&k!==!1){const O=Object.keys(S),{shapeFlag:L}=w;O.length&&L&7&&(i&&O.some(Kh)&&(S=nI(S,i)),w=Bn(w,S,!1,!0))}return n.dirs&&(w=Bn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),N=w,uc(x),N}function eI(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(ei(s)){if(s.type!==ot||s.children==="v-if"){if(n)return;n=s}}else return}return n}const tI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bo(n))&&((e||(e={}))[n]=t[n]);return e},nI=(t,e)=>{const n={};for(const r in t)(!Kh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Fp(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!Gc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Fp(r,o,u):!0:!!o;return!1}function Fp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gc(n,i))return!0}return!1}function mf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Uu=t=>t.__isSuspense;let ju=0;const sI={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)iI(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}oI(t,e,n,r,s,o,a,l,u)}},hydrate:aI,normalize:cI},gf=sI;function bo(t,e){const n=t.props&&t.props[e];de(n)&&n()}function iI(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=Jy(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(bo(t,"onPending"),bo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),zs(p,t.ssFallback)):p.resolve(!1,!0)}function oI(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:R,pendingBranch:k,isInFallback:x,isHydrating:N}=d;if(k)d.pendingBranch=p,cn(p,k)?(l(k,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():x&&(N||(l(R,g,n,r,s,null,i,o,a),zs(d,g)))):(d.pendingId=ju++,N?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),x?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(R,g,n,r,s,null,i,o,a),zs(d,g))):R&&cn(p,R)?(l(R,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(R&&cn(p,R))l(R,p,n,r,s,d,i,o,a),zs(d,p);else if(bo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=ju++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:S,pendingId:w}=d;S>0?setTimeout(()=>{d.pendingId===w&&d.fallback(g)},S):S===0&&d.fallback(g)}}function Jy(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:R,o:{parentNode:k,remove:x}}=u;let N;const S=lI(t);S&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const w=t.props?K_(t.props.timeout):void 0,O=i,L={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:ju++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,b=!1){const{vnode:y,activeBranch:_,pendingBranch:E,pendingId:C,effects:A,parentComponent:T,container:me}=L;let ye=!1;L.isHydrating?L.isHydrating=!1:M||(ye=_&&E.transition&&E.transition.mode==="out-in",ye&&(_.transition.afterLeave=()=>{C===L.pendingId&&(p(E,me,i===O?R(_):i,0),Nu(A))}),_&&(k(_.el)!==L.hiddenContainer&&(i=R(_)),g(_,T,L,!0)),ye||p(E,me,i,0)),zs(L,E),L.pendingBranch=null,L.isInFallback=!1;let J=L.parent,te=!1;for(;J;){if(J.pendingBranch){J.effects.push(...A),te=!0;break}J=J.parent}!te&&!ye&&Nu(A),L.effects=[],S&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),bo(y,"onResolve")},fallback(M){if(!L.pendingBranch)return;const{vnode:b,activeBranch:y,parentComponent:_,container:E,namespace:C}=L;bo(b,"onFallback");const A=R(y),T=()=>{L.isInFallback&&(d(null,M,E,A,_,null,C,a,l),zs(L,M))},me=M.transition&&M.transition.mode==="out-in";me&&(y.transition.afterLeave=T),L.isInFallback=!0,g(y,_,null,!0),me||T()},move(M,b,y){L.activeBranch&&p(L.activeBranch,M,b,y),L.container=M},next(){return L.activeBranch&&R(L.activeBranch)},registerDep(M,b,y){const _=!!L.pendingBranch;_&&L.deps++;const E=M.vnode.el;M.asyncDep.catch(C=>{zo(C,M,0)}).then(C=>{if(M.isUnmounted||L.isUnmounted||L.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:A}=M;$u(M,C,!1),E&&(A.el=E);const T=!E&&M.subTree.el;b(M,A,k(E||M.subTree.el),E?null:R(M.subTree),L,o,y),T&&x(T),mf(M,A.el),_&&--L.deps===0&&L.resolve()})},unmount(M,b){L.isUnmounted=!0,L.activeBranch&&g(L.activeBranch,n,M,b),L.pendingBranch&&g(L.pendingBranch,n,M,b)}};return L}function aI(t,e,n,r,s,i,o,a,l){const u=e.suspense=Jy(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function cI(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Up(r?n.default:n),t.ssFallback=r?Up(n.fallback):Ce(ot)}function Up(t){let e;if(de(t)){const n=Zs&&t._c;n&&(t._d=!1,Nt()),t=t(),n&&(t._d=!0,e=Lt,ev())}return le(t)&&(t=eI(t)),t=$t(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Zy(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Nu(t)}function zs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,mf(r,s))}function lI(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Pt=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),no=[];let Lt=null;function Nt(t=!1){no.push(Lt=t?null:[])}function ev(){no.pop(),Lt=no[no.length-1]||null}let Zs=1;function jp(t){Zs+=t,t<0&&Lt&&(Lt.hasOnce=!0)}function tv(t){return t.dynamicChildren=Zs>0?Lt||js:null,ev(),Zs>0&&Lt&&Lt.push(t),t}function To(t,e,n,r,s,i){return tv(je(t,e,n,r,s,i,!0))}function mr(t,e,n,r,s){return tv(Ce(t,e,n,r,s,!0))}function ei(t){return t?t.__v_isVNode===!0:!1}function cn(t,e){return t.type===e.type&&t.key===e.key}const nv=({key:t})=>t??null,Ha=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||et(t)||de(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function je(t,e=null,n=null,r=0,s=null,i=t===Pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nv(e),ref:e&&Ha(e),scopeId:qc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return a?(_f(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),Zs>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const Ce=uI;function uI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===xy)&&(t=ot),ei(t)){const a=Bn(t,e,!0);return n&&_f(a,n),Zs>0&&!i&&Lt&&(a.shapeFlag&6?Lt[Lt.indexOf(t)]=a:Lt.push(a)),a.patchFlag=-2,a}if(EI(t)&&(t=t.__vccOpts),e){e=hI(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=$o(a)),xe(l)&&(hy(l)&&!le(l)&&(l=ct({},l)),e.style=$c(l))}const o=We(t)?1:Uu(t)?128:BT(t)?64:xe(t)?4:de(t)?2:0;return je(t,e,n,r,s,o,i,!0)}function hI(t){return t?hy(t)||Uy(t)?ct({},t):t:null}function Bn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?rv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&nv(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Ha(e)):[i,Ha(e)]:Ha(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Eo(h,l.clone(h)),h}function Jt(t=" ",e=0){return Ce(ls,null,t,e)}function SV(t,e){const n=Ce(to,null,t);return n.staticCount=e,n}function fI(t="",e=!1){return e?(Nt(),mr(ot,null,t)):Ce(ot,null,t)}function $t(t){return t==null||typeof t=="boolean"?Ce(ot):le(t)?Ce(Pt,null,t.slice()):typeof t=="object"?fr(t):Ce(ls,null,String(t))}function fr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function _f(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_f(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Uy(e)?e._ctx=nt:s===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),r&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function rv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$o([e.class,r.class]));else if(s==="style")e.style=$c([e.style,r.style]);else if(Bo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xt(t,e,n,r=null){en(t,e,7,[n,r])}const dI=My();let pI=0;function mI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dI,i={uid:pI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new J_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:By(r,s),emitsOptions:Xy(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ZT.bind(null,i),t.ce&&t.ce(i),i}let at=null;const Qc=()=>at||nt;let pc,Bu;{const t=G_(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};pc=e("__VUE_INSTANCE_SETTERS__",n=>at=n),Bu=e("__VUE_SSR_SETTERS__",n=>Yc=n)}const Ko=t=>{const e=at;return pc(t),t.scope.on(),()=>{t.scope.off(),pc(e)}},Bp=()=>{at&&at.scope.off(),pc(null)};function sv(t){return t.vnode.shapeFlag&4}let Yc=!1;function gI(t,e=!1,n=!1){e&&Bu(e);const{props:r,children:s}=t.vnode,i=sv(t);DT(t,r,i,e),FT(t,s,n);const o=i?_I(t,e):void 0;return e&&Bu(!1),o}function _I(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,RT);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?vI(t):null,i=Ko(t);Br();const o=Rr(r,t,0,[t.props,s]);if($r(),i(),H_(o)){if(o.then(Bp,Bp),e)return o.then(a=>{$u(t,a,e)}).catch(a=>{zo(a,t,0)});t.asyncDep=o}else $u(t,o,e)}else iv(t,e)}function $u(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=py(e)),iv(t,n)}let $p;function iv(t,e,n){const r=t.type;if(!t.render){if(!e&&$p&&!r.render){const s=r.template||hf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ct(ct({isCustomElement:i,delimiters:a},o),l);r.render=$p(s,u)}}t.render=r.render||Zt}{const s=Ko(t);Br();try{ST(t)}finally{$r(),s()}}}const yI={get(t,e){return Mt(t,"get",""),t[e]}};function vI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yI),slots:t.slots,emit:t.emit,expose:e}}function Xc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(py(of(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in eo)return eo[n](t)},has(e,n){return n in e||n in eo}})):t.proxy}function Hu(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function EI(t){return de(t)&&"__vccOpts"in t}const De=(t,e)=>tT(t,e,Yc);function pt(t,e,n){const r=arguments.length;return r===2?xe(e)&&!le(e)?ei(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ei(n)&&(n=[n]),Ce(t,e,n))}const ov="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wI="http://www.w3.org/2000/svg",bI="http://www.w3.org/1998/Math/MathML",xn=typeof document<"u"?document:null,Hp=xn&&xn.createElement("template"),TI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?xn.createElementNS(wI,t):e==="mathml"?xn.createElementNS(bI,t):n?xn.createElement(t,{is:n}):xn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hp.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Hp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sr="transition",ji="animation",Io=Symbol("_vtc"),Jc=(t,{slots:e})=>pt(gT,II(t),e);Jc.displayName="Transition";const av={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jc.props=ct({},wy,av);const Xr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},qp=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function II(t){const e={};for(const A in t)A in av||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,R=AI(s),k=R&&R[0],x=R&&R[1],{onBeforeEnter:N,onEnter:S,onEnterCancelled:w,onLeave:O,onLeaveCancelled:L,onBeforeAppear:M=N,onAppear:b=S,onAppearCancelled:y=w}=e,_=(A,T,me)=>{Jr(A,T?h:a),Jr(A,T?u:o),me&&me()},E=(A,T)=>{A._isLeaving=!1,Jr(A,d),Jr(A,g),Jr(A,p),T&&T()},C=A=>(T,me)=>{const ye=A?b:S,J=()=>_(T,A,me);Xr(ye,[T,J]),zp(()=>{Jr(T,A?l:i),ir(T,A?h:a),qp(ye)||Wp(T,r,k,J)})};return ct(e,{onBeforeEnter(A){Xr(N,[A]),ir(A,i),ir(A,o)},onBeforeAppear(A){Xr(M,[A]),ir(A,l),ir(A,u)},onEnter:C(!1),onAppear:C(!0),onLeave(A,T){A._isLeaving=!0;const me=()=>E(A,T);ir(A,d),ir(A,p),CI(),zp(()=>{A._isLeaving&&(Jr(A,d),ir(A,g),qp(O)||Wp(A,r,x,me))}),Xr(O,[A,me])},onEnterCancelled(A){_(A,!1),Xr(w,[A])},onAppearCancelled(A){_(A,!0),Xr(y,[A])},onLeaveCancelled(A){E(A),Xr(L,[A])}})}function AI(t){if(t==null)return null;if(xe(t))return[eu(t.enter),eu(t.leave)];{const e=eu(t);return[e,e]}}function eu(t){return K_(t)}function ir(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Io]||(t[Io]=new Set)).add(e)}function Jr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Io];n&&(n.delete(e),n.size||(t[Io]=void 0))}function zp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let RI=0;function Wp(t,e,n,r){const s=t._endId=++RI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=SI(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function SI(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${sr}Delay`),i=r(`${sr}Duration`),o=Kp(s,i),a=r(`${ji}Delay`),l=r(`${ji}Duration`),u=Kp(a,l);let h=null,d=0,p=0;e===sr?o>0&&(h=sr,d=o,p=i.length):e===ji?u>0&&(h=ji,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?sr:ji:null,p=h?h===sr?i.length:l.length:0);const g=h===sr&&/\b(transform|all)(,|$)/.test(r(`${sr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function Kp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Gp(n)+Gp(t[r])))}function Gp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function CI(){return document.body.offsetHeight}function PI(t,e,n){const r=t[Io];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qp=Symbol("_vod"),kI=Symbol("_vsh"),OI=Symbol(""),xI=/(^|;)\s*display\s*:/;function NI(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qa(r,a,"")}else for(const o in e)n[o]==null&&qa(r,o,"");for(const o in n)o==="display"&&(i=!0),qa(r,o,n[o])}else if(s){if(e!==n){const o=r[OI];o&&(n+=";"+o),r.cssText=n,i=xI.test(n)}}else e&&t.removeAttribute("style");Qp in t&&(t[Qp]=i?r.display:"",t[kI]&&(r.display="none"))}const Yp=/\s*!important$/;function qa(t,e,n){if(le(n))n.forEach(r=>qa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=DI(t,e);Yp.test(n)?t.setProperty(Es(r),n.replace(Yp,""),"important"):t[r]=n}}const Xp=["Webkit","Moz","ms"],tu={};function DI(t,e){const n=tu[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return tu[e]=r;r=Bc(r);for(let s=0;s<Xp.length;s++){const i=Xp[s]+r;if(i in t)return tu[e]=i}return e}const Jp="http://www.w3.org/1999/xlink";function Zp(t,e,n,r,s,i=xb(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Jp,e.slice(6,e.length)):t.setAttributeNS(Jp,e,n):n==null||i&&!Q_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tn(n)?String(n):n)}function LI(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Q_(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function gr(t,e,n,r){t.addEventListener(e,n,r)}function MI(t,e,n,r){t.removeEventListener(e,n,r)}const em=Symbol("_vei");function VI(t,e,n,r,s=null){const i=t[em]||(t[em]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=FI(e);if(r){const u=i[e]=BI(r,s);gr(t,a,u,l)}else o&&(MI(t,a,o,l),i[e]=void 0)}}const tm=/(?:Once|Passive|Capture)$/;function FI(t){let e;if(tm.test(t)){e={};let r;for(;r=t.match(tm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Es(t.slice(2)),e]}let nu=0;const UI=Promise.resolve(),jI=()=>nu||(UI.then(()=>nu=0),nu=Date.now());function BI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;en($I(r,n.value),e,5,[r])};return n.value=t,n.attached=jI(),n}function $I(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const nm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,HI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?PI(t,r,o):e==="style"?NI(t,n,r):Bo(e)?Kh(e)||VI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qI(t,e,r,o))?(LI(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zp(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zp(t,e,r,o))};function qI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&nm(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return nm(e)&&We(n)?!1:e in t}const ti=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Hs(e,n):e};function zI(t){t.target.composing=!0}function rm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jn=Symbol("_assign"),CV={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jn]=ti(s);const i=r||s.props&&s.props.type==="number";gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=oc(a)),t[jn](a)}),n&&gr(t,"change",()=>{t.value=t.value.trim()}),e||(gr(t,"compositionstart",zI),gr(t,"compositionend",rm),gr(t,"change",rm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[jn]=ti(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?oc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},PV={deep:!0,created(t,e,n){t[jn]=ti(n),gr(t,"change",()=>{const r=t._modelValue,s=Ao(t),i=t.checked,o=t[jn];if(le(r)){const a=Yh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(gi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(cv(t,i))})},mounted:sm,beforeUpdate(t,e,n){t[jn]=ti(n),sm(t,e,n)}};function sm(t,{value:e,oldValue:n},r){t._modelValue=e,le(e)?t.checked=Yh(e,r.props.value)>-1:gi(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Ho(e,cv(t,!0)))}const kV={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=gi(e);gr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?oc(Ao(o)):Ao(o));t[jn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Sn(()=>{t._assigning=!1})}),t[jn]=ti(r)},mounted(t,{value:e,modifiers:{number:n}}){im(t,e)},beforeUpdate(t,e,n){t[jn]=ti(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||im(t,e)}};function im(t,e,n){const r=t.multiple,s=le(e);if(!(r&&!s&&!gi(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=Ao(a);if(r)if(s){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Yh(e,l)>-1}else a.selected=e.has(l);else if(Ho(Ao(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ao(t){return"_value"in t?t._value:t.value}function cv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const WI=["ctrl","shift","alt","meta"],KI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>WI.some(n=>t[`${n}Key`]&&!e.includes(n))},OV=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=KI[e[o]];if(a&&a(s,e))return}return t(s,...i)})},lv=ct({patchProp:HI},TI);let ro,om=!1;function GI(){return ro||(ro=zT(lv))}function QI(){return ro=om?ro:WT(lv),om=!0,ro}const YI=(...t)=>{const e=GI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=hv(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,uv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},XI=(...t)=>{const e=QI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=hv(r);if(s)return n(s,!0,uv(s))},e};function uv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function hv(t){return We(t)?document.querySelector(t):t}const JI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,ZI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,eA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function tA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){nA(t);return}return e}function nA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ro(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!eA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(JI.test(t)||ZI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,tA)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const rA=/#/g,sA=/&/g,iA=/\//g,oA=/=/g,yf=/\+/g,aA=/%5e/gi,cA=/%60/gi,lA=/%7c/gi,uA=/%20/gi;function hA(t){return encodeURI(""+t).replace(lA,"|")}function qu(t){return hA(typeof t=="string"?t:JSON.stringify(t)).replace(yf,"%2B").replace(uA,"+").replace(rA,"%23").replace(sA,"%26").replace(cA,"`").replace(aA,"^").replace(iA,"%2F")}function ru(t){return qu(t).replace(oA,"%3D")}function mc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function fA(t){return mc(t.replace(yf," "))}function dA(t){return mc(t.replace(yf," "))}function fv(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=fA(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=dA(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function pA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ru(t)}=${qu(n)}`).join("&"):`${ru(t)}=${qu(e)}`:ru(t)}function mA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>pA(e,t[e])).filter(Boolean).join("&")}const gA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,_A=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,yA=/^([/\\]\s*){2,}[^/\\]/,vA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,EA=/\/$|\/\?|\/#/,wA=/^\.?\//;function Qn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?gA.test(t):_A.test(t)||(e.acceptRelative?yA.test(t):!1)}function bA(t){return!!t&&vA.test(t)}function zu(t="",e){return e?EA.test(t):t.endsWith("/")}function Zc(t="",e){if(!e)return(zu(t)?t.slice(0,-1):t)||"/";if(!zu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function gc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(zu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function TA(t=""){return t.startsWith("/")}function am(t=""){return TA(t)?t:"/"+t}function IA(t,e){if(pv(e)||Qn(t))return t;const n=Zc(e);return t.startsWith(n)?t:el(n,t)}function cm(t,e){if(pv(e))return t;const n=Zc(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function dv(t,e){const n=SA(t),r={...fv(n.search),...e};return n.search=mA(r),CA(n)}function pv(t){return!t||t==="/"}function AA(t){return t&&t!=="/"}function el(t,...e){let n=t||"";for(const r of e.filter(s=>AA(s)))if(n){const s=r.replace(wA,"");n=gc(n)+s}else n=r;return n}function mv(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&Qn(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function RA(t,e,n={}){return n.trailingSlash||(t=gc(t),e=gc(e)),n.leadingSlash||(t=am(t),e=am(e)),n.encoding||(t=mc(t),e=mc(e)),t===e}const gv=Symbol.for("ufo:protocolRelative");function SA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!Qn(t,{acceptRelative:!0}))return lm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=lm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[gv]:!r}}function lm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function CA(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[gv]?(t.protocol||"")+"//":"")+s+i+e+n+r}class PA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function kA(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new PA(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,R]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[R]}});return a}const OA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function um(t="GET"){return OA.has(t.toUpperCase())}function xA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const NA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),DA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function LA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return DA.test(e)?"json":NA.has(e)||e.startsWith("text/")?"text":"blob"}function MA(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const VA=new Set([408,409,425,429,500,502,503,504]),FA=new Set([101,204,205,304]);function _v(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=um(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):VA.has(d))){const p=a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=kA(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:MA(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=IA(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=dv(h.request,{...h.options.params,...h.options.query}))),h.options.body&&um(h.options.method)&&(xA(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const R=new r;d=setTimeout(()=>R.abort(),h.options.timeout),h.options.signal=R.signal}try{h.response=await e(h.request,h.options)}catch(R){return h.error=R,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{d&&clearTimeout(d)}if(h.response.body&&!FA.has(h.response.status)&&h.options.method!=="HEAD"){const R=(h.options.parseResponse?"json":h.options.responseType)||LA(h.response.headers.get("content-type")||"");switch(R){case"json":{const k=await h.response.text(),x=h.options.parseResponse||Ro;h.response._data=x(k);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[R]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>_v({...t,defaults:{...t.defaults,...a}}),o}const vf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),UA=vf.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),jA=vf.Headers,BA=vf.AbortController,$A=_v({fetch:UA,Headers:jA,AbortController:BA}),HA=$A,qA=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},_c=qA().app,zA=()=>_c.baseURL,WA=()=>_c.buildAssetsDir,Ef=(...t)=>mv(wf(),WA(),...t),wf=(...t)=>{const e=_c.cdnURL||_c.baseURL;return t.length?mv(e,...t):e};globalThis.__buildAssetsURL=Ef,globalThis.__publicAssetsURL=wf;globalThis.$fetch||(globalThis.$fetch=HA.create({baseURL:zA()}));function Wu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Wu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const KA={run:t=>t()},GA=()=>KA,yv=typeof console.createTask<"u"?console.createTask:GA;function QA(t,e){const n=e.shift(),r=yv(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function YA(t,e){const n=e.shift(),r=yv(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function su(t,e){for(const n of[...t])n(e)}class XA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Wu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Wu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(QA,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(YA,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&su(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&su(this._after,s)}):(this._after&&s&&su(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function vv(){return new XA}function JA(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Ku.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Ku.delete(u)}}}}function ZA(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=JA({...t,...r})),e[n],e[n]}}}const yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},hm="__unctx__",e1=yc[hm]||(yc[hm]=ZA()),t1=(t,e={})=>e1.get(t,e),fm="__unctx_async_handlers__",Ku=yc[fm]||(yc[fm]=new Set);function So(t){const e=[];for(const s of Ku){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Gu={name:"page",mode:"out-in"},n1=!1,r1=!1,s1={componentName:"NuxtLink"},i1=null,o1="#__nuxt",Ev="nuxt-app",dm=36e5;function wv(t=Ev){return t1(t,{asyncContext:!1})}const a1="__nuxt_plugin";function c1(t){let e=0;const n={_name:Ev,_scope:Jh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.12.4"},get vue(){return n.vueApp.version}},payload:Dn({data:Dn({}),state:Hr({}),once:new Set,_errors:Dn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!qo()?n._scope.run(()=>pm(n,s)):pm(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Dn({}),_payloadRevivers:{},...t};if(window.__NUXT__)for(const s in window.__NUXT__)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],window.__NUXT__[s]);break;default:n.payload[s]=window.__NUXT__[s]}n.hooks=vv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;xa(n,o,i),xa(n.vueApp.config.globalProperties,o,i)},xa(n.vueApp,"$nuxt",n),xa(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Le;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function l1(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function u1(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function h1(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=u1(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)l1(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Wt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[a1]:!0,_name:e})}function pm(t,e,n){const r=()=>e();return wv(t._name).set(t),t.vueApp.runWithContext(r)}function f1(t){var n;let e;return ff()&&(e=(n=Qc())==null?void 0:n.appContext.app.$nuxt),e=e||wv(t).tryUse(),e||null}function Le(t){const e=f1(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function ws(t){return Le().$config}function xa(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function d1(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||p1;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=m1(u,s)}i=a+1}return n}function p1(t){return t.includes("%")?decodeURIComponent(t):t}function m1(t,e){try{return e(t)}catch{return t}}const Na=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function mm(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Na.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Na.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Na.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Na.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!g1(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function g1(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const gm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function _m(t,e){e?e={...gm,...e}:e=gm;const n=bv(e);return n.dispatch(t),n.toString()}const _1=Object.freeze(["prototype","__proto__","constructor"]);function bv(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!ym(s)&&(h=_1),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=bv(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),ym(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const Tv="[native code] }",y1=Tv.length;function ym(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-y1)===Tv}function v1(t,e,n={}){return t===e||_m(t,n)===_m(e,n)}function E1(t,e){return{ctx:{table:t},matchAll:n=>Av(n,t)}}function Iv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Iv(s)])):new Map(Object.entries(t[n]));return e}function w1(t){return E1(Iv(t))}function Av(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of vm(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of vm(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Av(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function vm(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function iu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Qu(t,e,n=".",r){if(!iu(e))return Qu(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:iu(o)&&iu(s[i])?s[i]=Qu(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function b1(t){return(...e)=>e.reduce((n,r)=>Qu(n,r,"",t),{})}const Rv=b1();function T1(t,e){try{return e in t}catch{return!1}}var I1=Object.defineProperty,A1=(t,e,n)=>e in t?I1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Zr=(t,e,n)=>(A1(t,typeof e!="symbol"?e+"":e,n),n);class Yu extends Error{constructor(e,n={}){super(e,n),Zr(this,"statusCode",500),Zr(this,"fatal",!1),Zr(this,"unhandled",!1),Zr(this,"statusMessage"),Zr(this,"data"),Zr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Ju(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Sv(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Zr(Yu,"__h3_error__",!0);function Xu(t){if(typeof t=="string")return new Yu(t);if(R1(t))return t;const e=new Yu(t.message??t.statusMessage??"",{cause:t.cause||t});if(T1(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Ju(t.statusCode,e.statusCode):t.status&&(e.statusCode=Ju(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Sv(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function R1(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const S1=/[^\u0009\u0020-\u007E]/g;function Sv(t=""){return t.replace(S1,"")}function Ju(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Cv=Symbol("layout-meta"),Go=Symbol("route"),gt=()=>{var t;return(t=Le())==null?void 0:t.$router},bf=()=>ff()?It(Go,Le()._route):Le()._route;function xV(t){return t}const C1=()=>{try{if(Le()._processingMiddleware)return!0}catch{return!1}return!1},P1=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Zu(t):gt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=Qn(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&bA(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=C1();if(!s&&i)return t;const o=gt(),a=Le();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Zu(t){return dv(t.path||"",t.query||{})+(t.hash||"")}const Pv="__nuxt_error",tl=()=>lT(Le().payload,"error"),Vs=t=>{const e=nl(t);try{const n=Le(),r=tl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},kv=async(t={})=>{const e=Le(),n=tl();e.callHook("app:error:cleared",t),t.redirect&&await gt().replace(t.redirect),n.value=i1},k1=t=>!!t&&typeof t=="object"&&Pv in t,nl=t=>{const e=Xu(t);return Object.defineProperty(e,Pv,{value:!0,configurable:!1,writable:!1}),e},O1=-1,x1=-2,N1=-3,D1=-4,L1=-5,M1=-6;function V1(t,e){return F1(JSON.parse(t),e)}function F1(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===O1)return;if(i===N1)return NaN;if(i===D1)return 1/0;if(i===L1)return-1/0;if(i===M1)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==x1&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}function U1(t){return Array.isArray(t)?t:[t]}const j1=["title","titleTemplate","script","style","noscript"],za=["base","meta","link","style","script","noscript"],B1=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],$1=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Ov=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],H1=typeof window<"u";function Tf(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Em(t){return t._h||Tf(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function xv(t,e){const{props:n,tag:r}=t;if($1.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return`${r}:${i}:${o}`}return!1}function wm(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function q1(t,e,n){const r={tag:t,props:await Nv(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return Ov.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||j1.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function z1(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>s.trim()).filter(Boolean).join(n)}async function Nv(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=z1(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!Ov.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const W1=10;async function K1(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&B1.includes(n)).forEach(([n,r])=>{const s=U1(r);e.push(...s.map(i=>q1(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<W1)+r,n))}const bm={base:-10,title:10},Tm={critical:-80,high:-10,low:20};function vc(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in bm&&(e=bm[t.tag]),typeof n=="string"&&n in Tm?e+Tm[n]:e)}const G1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Im=["onload","onerror","onabort","onprogress","onloadstart"],or="%separator";function Wa(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,u)=>l&&l[u]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,u)=>`${a}${u}`).trim())}),t.includes(or)&&(t.endsWith(or)&&(t=t.slice(0,-or.length).trim()),t.startsWith(or)&&(t=t.slice(or.length).trim()),t=t.replace(new RegExp(`\\${or}\\s*\\${or}`,"g"),or),t=Wa(t,{separator:n},n)),t}async function Dv(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(d=>({tag:d,id:za.includes(d.tag)?Em(d):d.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const d of["body","head"]){const p=(h=n[d])==null?void 0:h.children,g=[];for(const R of[...p].filter(k=>za.includes(k.tagName.toLowerCase()))){const k={tag:R.tagName.toLowerCase(),props:await Nv(R.getAttributeNames().reduce((S,w)=>({...S,[w]:R.getAttribute(w)}),{})),innerHTML:R.innerHTML};let x=1,N=xv(k);for(;N&&g.find(S=>S._d===N);)N=`${N}:${x++}`;k._d=N||void 0,g.push(k),i.elMap[R.getAttribute("data-hid")||Em(k)]=R}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(d,p,g){const R=`${d}:${p}`;i.sideEffects[R]=g,delete i.pendingSideEffects[R]}function a({id:d,$el:p,tag:g}){const R=g.tag.endsWith("Attrs");i.elMap[d]=p,R||(["textContent","innerHTML"].forEach(k=>{g[k]&&g[k]!==p[k]&&(p[k]=g[k])}),o(d,"el",()=>{var k;(k=i.elMap[d])==null||k.remove(),delete i.elMap[d]}));for(const[k,x]of Object.entries(g._eventHandlers||{}))p.getAttribute(`data-${k}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:p).addEventListener(k.replace("on",""),x.bind(p)),p.setAttribute(`data-${k}`,""));Object.entries(g.props).forEach(([k,x])=>{const N=`attr:${k}`;if(k==="class")for(const S of(x||"").split(" ").filter(Boolean))R&&o(d,`${N}:${S}`,()=>p.classList.remove(S)),!p.classList.contains(S)&&p.classList.add(S);else if(k==="style")for(const S of(x||"").split(";").filter(Boolean)){const[w,...O]=S.split(":").map(L=>L.trim());o(d,`${N}:${w}`,()=>{p.style.removeProperty(w)}),p.style.setProperty(w,O.join(":"))}else p.getAttribute(k)!==x&&p.setAttribute(k,x===!0?"":String(x)),R&&o(d,N,()=>p.removeAttribute(k))})}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of s){const{tag:p,shouldRender:g,id:R}=d;if(g){if(p.tag==="title"){n.title=p.textContent;continue}d.$el=d.$el||i.elMap[R],d.$el?a(d):za.includes(p.tag)&&l.push(d)}}for(const d of l){const p=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),a(d),u[p]=u[p]||n.createDocumentFragment(),u[p].appendChild(d.$el)}for(const d of s)await t.hooks.callHook("dom:renderTag",d,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(i.pendingSideEffects).forEach(d=>d()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function Q1(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await Dv(t,e),delete t._domUpdatePromise,r()}))}function Y1(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){Q1(i,t)}}}}}const X1=["templateParams","htmlAttrs","bodyAttrs"],J1={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=xv(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&X1.includes(r.tag)&&(a="merge"),a==="merge"){const l=i.props;["class","style"].forEach(u=>{l[u]&&(r.props[u]?(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),r.props[u]=`${l[u]} ${r.props[u]}`):r.props[u]=l[u])}),e[s].props={...l,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(vc(r)>vc(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(za.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Z1={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},eR=["script","link","bodyAttrs"],tR=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(r=>eR.includes(r.tag)))Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(t.ssr&&Im.includes(r)?n.props[r]=`this.dataset.${r}fired = true`:delete n.props[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Tf(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var r,s;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>Im.some(a=>`${a}fired`===o))){const o=i.replace("fired","");(s=(r=n._eventHandlers)==null?void 0:r[o])==null||s.call(e,new Event(o.replace("on","")))}}}}),nR=["link","style","script","noscript"],rR={hooks:{"tag:normalise":({tag:t})=>{t.key&&nR.includes(t.tag)&&(t.props["data-hid"]=t._h=Tf(t.key))}}},sR={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of G1)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>vc(n)-vc(r))}}},iR={meta:"content",link:"href",htmlAttrs:"lang"},oR=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,r=(a=n.find(l=>l.tag==="title"))==null?void 0:a.textContent,s=n.findIndex(l=>l.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=Wa(i.pageTitle||r||"",i,o);for(const l of n.filter(u=>u.processTemplateParams!==!1)){const u=iR[l.tag];u&&typeof l.props[u]=="string"?l.props[u]=Wa(l.props[u],i,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(h=>{typeof l[h]=="string"&&(l[h]=Wa(l[h],i,o))})}t._templateParams=i,t._separator=o,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),aR={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=wm(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=wm(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},cR={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Lv;function lR(t={}){const e=uR(t);return e.use(Y1()),Lv=e}function Am(t,e){return!t||t==="server"&&e||t==="client"&&!e}function uR(t={}){const e=vv();e.addHooks(t.hooks||{}),t.document=t.document||(H1?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),Am(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return Am(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),e.callHook("entries:updated",a),r()},patch(d){i=i.map(p=>(p._i===h._i&&(p.input=h.input=d),p)),r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await K1(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[J1,Z1,tR,rR,sR,oR,aR,cR,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function hR(){return Lv}const fR=ov.startsWith("3");function dR(t){return typeof t=="function"?t():Ye(t)}function Ec(t,e=""){if(t instanceof Promise)return t;const n=dR(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Ec(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Ye(s)]:[r,Ec(s,r)])):n}const pR={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Ec(e.input)}}},Mv="usehead";function mR(t){return{install(n){fR&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Mv,t))}}.install}function gR(t={}){t.domDelayFn=t.domDelayFn||(n=>Sn(()=>setTimeout(()=>n(),0)));const e=lR(t);return e.use(pR),e.install=mR(e),e}const eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},th="__unhead_injection_handler__";function _R(t){eh[th]=t}function yR(){if(th in eh)return eh[th]();const t=It(Mv);return t||hR()}function Rm(t,e={}){const n=e.head||yR();if(n)return n.ssr?n.push(t,e):vR(n,t,e)}function vR(t,e,n={}){const r=Vt(!1),s=Vt({});YT(()=>{s.value=r.value?{}:Ec(e)});const i=t.push(s.value,n);return ln(s,a=>{i.patch(a)}),Qc()&&(Wo(()=>{i.dispose()}),Ry(()=>{r.value=!0}),Ay(()=>{r.value=!1})),i}let Ka,Ga;function ER(){return Ka=$fetch(Ef(`builds/meta/${ws().app.buildId}.json`),{responseType:"json"}),Ka.then(t=>{Ga=w1(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Ka}function rl(){return Ka||ER()}async function If(t){if(await rl(),!Ga)return console.error("[nuxt] Error creating app manifest matcher.",Ga),{};try{return Rv({},...Ga.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function Sm(t,e={}){const n=await bR(t,e),r=Le(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=Fv(t).then(i=>i?Vv(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const wR="_payload.json";async function bR(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Qn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=ws(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Fv(t)?i:r.app.baseURL;return el(o,n.pathname,wR+(s?`?${s}`:""))}async function Vv(t){const e=fetch(t).then(n=>n.text().then(Uv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Fv(t=bf().path){if(t=Zc(t),(await rl()).prerendered.includes(t))return!0;const n=await If(t);return!!n.prerender&&!n.redirect}let Da=null;async function TR(){if(Da)return Da;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Uv(t.textContent||""),n=t.dataset.src?await Vv(t.dataset.src):void 0;return Da={...e,...n,...window.__NUXT__},Da}async function Uv(t){return await V1(t,Le()._payloadRevivers)}function IR(t,e){Le()._payloadRevivers[t]=e}const Cm={NuxtError:t=>nl(t),EmptyShallowRef:t=>_o(t==="_"?void 0:t==="0n"?BigInt(0):Ro(t)),EmptyRef:t=>Vt(t==="_"?void 0:t==="0n"?BigInt(0):Ro(t)),ShallowRef:t=>_o(t),ShallowReactive:t=>Dn(t),Ref:t=>Vt(t),Reactive:t=>Hr(t)},AR=Wt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in Cm)IR(r,Cm[r]);Object.assign(t.payload,([e,n]=So(()=>t.runWithContext(TR)),e=await e,n(),e)),window.__NUXT__=t.payload}}),RR=[],SR=Wt({name:"nuxt:head",enforce:"pre",setup(t){const e=gR({plugins:RR});_R(()=>Le().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Dv(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ns=typeof document<"u";function CR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function ou(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const so=()=>{},hn=Array.isArray,jv=/#/g,PR=/&/g,kR=/\//g,OR=/=/g,xR=/\?/g,Bv=/\+/g,NR=/%5B/g,DR=/%5D/g,$v=/%5E/g,LR=/%60/g,Hv=/%7B/g,MR=/%7C/g,qv=/%7D/g,VR=/%20/g;function Af(t){return encodeURI(""+t).replace(MR,"|").replace(NR,"[").replace(DR,"]")}function FR(t){return Af(t).replace(Hv,"{").replace(qv,"}").replace($v,"^")}function nh(t){return Af(t).replace(Bv,"%2B").replace(VR,"+").replace(jv,"%23").replace(PR,"%26").replace(LR,"`").replace(Hv,"{").replace(qv,"}").replace($v,"^")}function UR(t){return nh(t).replace(OR,"%3D")}function jR(t){return Af(t).replace(jv,"%23").replace(xR,"%3F")}function BR(t){return t==null?"":jR(t).replace(kR,"%2F")}function Co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $R=/\/$/,HR=t=>t.replace($R,"");function au(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=KR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Co(o)}}function qR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ni(e.matched[r],n.matched[s])&&zv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ni(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WR(t[n],e[n]))return!1;return!0}function WR(t,e){return hn(t)?km(t,e):hn(e)?km(e,t):t===e}function km(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function KR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Po;(function(t){t.pop="pop",t.push="push"})(Po||(Po={}));var io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(io||(io={}));function GR(t){if(!t)if(Ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HR(t)}const QR=/^[^#]+#/;function YR(t,e){return t.replace(QR,"#")+e}function XR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const sl=()=>({left:window.scrollX,top:window.scrollY});function JR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Om(t,e){return(history.state?history.state.position-e:-1)+t}const rh=new Map;function ZR(t,e){rh.set(t,e)}function eS(t){const e=rh.get(t);return rh.delete(t),e}let tS=()=>location.protocol+"//"+location.host;function Wv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Pm(l,"")}return Pm(n,t)+r+s}function nS(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Wv(t,location),R=n.value,k=e.value;let x=0;if(p){if(n.value=g,e.value=p,o&&o===R){o=null;return}x=k?p.position-k.position:0}else r(g);s.forEach(N=>{N(n.value,R,{delta:x,type:Po.pop,direction:x?x>0?io.forward:io.back:io.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(ke({},p.state,{scroll:sl()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function xm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?sl():null}}function rS(t){const{history:e,location:n}=window,r={value:Wv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:tS()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=ke({},e.state,xm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=ke({},s.value,e.state,{forward:l,scroll:sl()});i(h.current,h,!0);const d=ke({},xm(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Kv(t){t=GR(t);const e=rS(t),n=nS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:YR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function sS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Kv(t)}function iS(t){return typeof t=="string"||t&&typeof t=="object"}function Gv(t){return typeof t=="string"||typeof t=="symbol"}const Qv=Symbol("");var Nm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nm||(Nm={}));function ri(t,e){return ke(new Error,{type:t,[Qv]:!0},e)}function On(t,e){return t instanceof Error&&Qv in t&&(e==null||!!(t.type&e))}const Dm="[^/]+?",oS={sensitive:!1,strict:!1,start:!0,end:!0},aS=/[.+*?^${}()[\]/\\]/g;function cS(t,e){const n=ke({},oS,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(aS,"\\$&"),g+=40;else if(p.type===1){const{value:R,repeatable:k,optional:x,regexp:N}=p;i.push({name:R,repeatable:k,optional:x});const S=N||Dm;if(S!==Dm){g+=10;try{new RegExp(`(${S})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${S}): `+O.message)}}let w=k?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(w=x&&u.length<2?`(?:/${w})`:"/"+w),x&&(w+="?"),s+=w,g+=20,x&&(g+=-8),k&&(g+=-20),S===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",R=i[p-1];d[R.name]=g&&R.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:x}=g,N=R in u?u[R]:"";if(hn(N)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const S=hn(N)?N.join("/"):N;if(!S)if(x)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);h+=S}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function lS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Yv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=lS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Lm(r))return 1;if(Lm(s))return-1}return s.length-r.length}function Lm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uS={type:0,value:""},hS=/[a-zA-Z0-9_]/;function fS(t){if(!t)return[[]];if(t==="/")return[[uS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:hS.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function dS(t,e,n){const r=cS(fS(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pS(t,e){const n=[],r=new Map;e=Fm({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const R=!g,k=mS(d);k.aliasOf=g&&g.record;const x=Fm(e,d),N=[k];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of O)N.push(ke({},k,{components:g?g.record.components:k.components,path:L,aliasOf:g?g.record:k}))}let S,w;for(const O of N){const{path:L}=O;if(p&&L[0]!=="/"){const M=p.record.path,b=M[M.length-1]==="/"?"":"/";O.path=p.record.path+(L&&b+L)}if(S=dS(O,p,x),g?g.alias.push(S):(w=w||S,w!==S&&w.alias.push(S),R&&d.name&&!Vm(S)&&o(d.name)),Xv(S)&&l(S),k.children){const M=k.children;for(let b=0;b<M.length;b++)i(M[b],S,g&&g.children[b])}g=g||S}return w?()=>{o(w)}:so}function o(d){if(Gv(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=yS(d,n);n.splice(p,0,d),d.record.name&&!Vm(d)&&r.set(d.record.name,d)}function u(d,p){let g,R={},k,x;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw ri(1,{location:d});x=g.record.name,R=ke(Mm(p.params,g.keys.filter(w=>!w.optional).concat(g.parent?g.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Mm(d.params,g.keys.map(w=>w.name))),k=g.stringify(R)}else if(d.path!=null)k=d.path,g=n.find(w=>w.re.test(k)),g&&(R=g.parse(k),x=g.record.name);else{if(g=p.name?r.get(p.name):n.find(w=>w.re.test(p.path)),!g)throw ri(1,{location:d,currentLocation:p});x=g.record.name,R=ke({},p.params,d.params),k=g.stringify(R)}const N=[];let S=g;for(;S;)N.unshift(S.record),S=S.parent;return{name:x,path:k,params:R,matched:N,meta:_S(N)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Mm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _S(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Fm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Yv(t,e[i])<0?r=i:n=i+1}const s=vS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vS(t){let e=t;for(;e=e.parent;)if(Xv(e)&&Yv(t,e)===0)return e}function Xv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ES(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Bv," "),o=i.indexOf("="),a=Co(o<0?i:i.slice(0,o)),l=o<0?null:Co(i.slice(o+1));if(a in e){let u=e[a];hn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Um(t){let e="";for(let n in t){const r=t[n];if(n=UR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(i=>i&&nh(i)):[r&&nh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const bS=Symbol(""),jm=Symbol(""),Rf=Symbol(""),Sf=Symbol(""),sh=Symbol("");function Bi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(ri(4,{from:n,to:e})):p instanceof Error?l(p):iS(p)?l(ri(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function cu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(TS(l)){const h=(l.__vccOpts||l)[e];h&&i.push(dr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=CR(h)?h.default:h;o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&dr(g,n,r,o,a,s)()}))}}return i}function TS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bm(t){const e=It(Rf),n=It(Sf),r=De(()=>{const l=Ye(t.to);return e.resolve(l)}),s=De(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(ni.bind(null,h));if(p>-1)return p;const g=$m(l[u-2]);return u>1&&$m(h)===g&&d[d.length-1].path!==g?d.findIndex(ni.bind(null,l[u-2])):p}),i=De(()=>s.value>-1&&SS(n.params,r.value.params)),o=De(()=>s.value>-1&&s.value===n.matched.length-1&&zv(n.params,r.value.params));function a(l={}){return RS(l)?e[Ye(t.replace)?"replace":"push"](Ye(t.to)).catch(so):Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const IS=Cn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bm,setup(t,{slots:e}){const n=Hr(Bm(t)),{options:r}=It(Rf),s=De(()=>({[Hm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),AS=IS;function RS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $m(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hm=(t,e,n)=>t??e??n,CS=Cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=It(sh),s=De(()=>t.route||r.value),i=It(jm,0),o=De(()=>{let u=Ye(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=De(()=>s.value.matched[o.value]);cs(jm,De(()=>o.value+1)),cs(bS,a),cs(sh,s);const l=Vt();return ln(()=>[l.value,a.value,t.name],([u,h,d],[p,g,R])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!ni(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return qm(n.default,{Component:p,route:u});const g=d.props[h],R=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=pt(p,ke({},R,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return qm(n.default,{Component:x,route:u})||x}}});function qm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jv=CS;function PS(t){const e=pS(t.routes,t),n=t.parseQuery||ES,r=t.stringifyQuery||Um,s=t.history,i=Bi(),o=Bi(),a=Bi(),l=_o(on);let u=on;Ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ou.bind(null,j=>""+j),d=ou.bind(null,BR),p=ou.bind(null,Co);function g(j,Z){let Y,ee;return Gv(j)?(Y=e.getRecordMatcher(j),ee=Z):ee=j,e.addRoute(ee,Y)}function R(j){const Z=e.getRecordMatcher(j);Z&&e.removeRoute(Z)}function k(){return e.getRoutes().map(j=>j.record)}function x(j){return!!e.getRecordMatcher(j)}function N(j,Z){if(Z=ke({},Z||l.value),typeof j=="string"){const P=au(n,j,Z.path),V=e.resolve({path:P.path},Z),B=s.createHref(P.fullPath);return ke(P,V,{params:p(V.params),hash:Co(P.hash),redirectedFrom:void 0,href:B})}let Y;if(j.path!=null)Y=ke({},j,{path:au(n,j.path,Z.path).path});else{const P=ke({},j.params);for(const V in P)P[V]==null&&delete P[V];Y=ke({},j,{params:d(P)}),Z.params=d(Z.params)}const ee=e.resolve(Y,Z),Ee=j.hash||"";ee.params=h(p(ee.params));const Oe=qR(r,ke({},j,{hash:FR(Ee),path:ee.path})),I=s.createHref(Oe);return ke({fullPath:Oe,hash:Ee,query:r===Um?wS(j.query):j.query||{}},ee,{redirectedFrom:void 0,href:I})}function S(j){return typeof j=="string"?au(n,j,l.value.path):ke({},j)}function w(j,Z){if(u!==j)return ri(8,{from:Z,to:j})}function O(j){return b(j)}function L(j){return O(ke(S(j),{replace:!0}))}function M(j){const Z=j.matched[j.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ee=typeof Y=="function"?Y(j):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=S(ee):{path:ee},ee.params={}),ke({query:j.query,hash:j.hash,params:ee.path!=null?{}:j.params},ee)}}function b(j,Z){const Y=u=N(j),ee=l.value,Ee=j.state,Oe=j.force,I=j.replace===!0,P=M(Y);if(P)return b(ke(S(P),{state:typeof P=="object"?ke({},Ee,P.state):Ee,force:Oe,replace:I}),Z||Y);const V=Y;V.redirectedFrom=Z;let B;return!Oe&&zR(r,ee,Y)&&(B=ri(16,{to:V,from:ee}),Gt(ee,ee,!0,!1)),(B?Promise.resolve(B):E(V,ee)).catch(U=>On(U)?On(U,2)?U:rn(U):ie(U,V,ee)).then(U=>{if(U){if(On(U,2))return b(ke({replace:I},S(U.to),{state:typeof U.to=="object"?ke({},Ee,U.to.state):Ee,force:Oe}),Z||V)}else U=A(V,ee,!0,I,Ee);return C(V,ee,U),U})}function y(j,Z){const Y=w(j,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(j){const Z=Jn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(j):j()}function E(j,Z){let Y;const[ee,Ee,Oe]=kS(j,Z);Y=cu(ee.reverse(),"beforeRouteLeave",j,Z);for(const P of ee)P.leaveGuards.forEach(V=>{Y.push(dr(V,j,Z))});const I=y.bind(null,j,Z);return Y.push(I),kt(Y).then(()=>{Y=[];for(const P of i.list())Y.push(dr(P,j,Z));return Y.push(I),kt(Y)}).then(()=>{Y=cu(Ee,"beforeRouteUpdate",j,Z);for(const P of Ee)P.updateGuards.forEach(V=>{Y.push(dr(V,j,Z))});return Y.push(I),kt(Y)}).then(()=>{Y=[];for(const P of Oe)if(P.beforeEnter)if(hn(P.beforeEnter))for(const V of P.beforeEnter)Y.push(dr(V,j,Z));else Y.push(dr(P.beforeEnter,j,Z));return Y.push(I),kt(Y)}).then(()=>(j.matched.forEach(P=>P.enterCallbacks={}),Y=cu(Oe,"beforeRouteEnter",j,Z,_),Y.push(I),kt(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(dr(P,j,Z));return Y.push(I),kt(Y)}).catch(P=>On(P,8)?P:Promise.reject(P))}function C(j,Z,Y){a.list().forEach(ee=>_(()=>ee(j,Z,Y)))}function A(j,Z,Y,ee,Ee){const Oe=w(j,Z);if(Oe)return Oe;const I=Z===on,P=Ns?history.state:{};Y&&(ee||I?s.replace(j.fullPath,ke({scroll:I&&P&&P.scroll},Ee)):s.push(j.fullPath,Ee)),l.value=j,Gt(j,Z,Y,I),rn()}let T;function me(){T||(T=s.listen((j,Z,Y)=>{if(!dn.listening)return;const ee=N(j),Ee=M(ee);if(Ee){b(ke(Ee,{replace:!0}),ee).catch(so);return}u=ee;const Oe=l.value;Ns&&ZR(Om(Oe.fullPath,Y.delta),sl()),E(ee,Oe).catch(I=>On(I,12)?I:On(I,2)?(b(I.to,ee).then(P=>{On(P,20)&&!Y.delta&&Y.type===Po.pop&&s.go(-1,!1)}).catch(so),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ie(I,ee,Oe))).then(I=>{I=I||A(ee,Oe,!1),I&&(Y.delta&&!On(I,8)?s.go(-Y.delta,!1):Y.type===Po.pop&&On(I,20)&&s.go(-1,!1)),C(ee,Oe,I)}).catch(so)}))}let ye=Bi(),J=Bi(),te;function ie(j,Z,Y){rn(j);const ee=J.list();return ee.length?ee.forEach(Ee=>Ee(j,Z,Y)):console.error(j),Promise.reject(j)}function He(){return te&&l.value!==on?Promise.resolve():new Promise((j,Z)=>{ye.add([j,Z])})}function rn(j){return te||(te=!j,me(),ye.list().forEach(([Z,Y])=>j?Y(j):Z()),ye.reset()),j}function Gt(j,Z,Y,ee){const{scrollBehavior:Ee}=t;if(!Ns||!Ee)return Promise.resolve();const Oe=!Y&&eS(Om(j.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return Sn().then(()=>Ee(j,Z,Oe)).then(I=>I&&JR(I)).catch(I=>ie(I,j,Z))}const qe=j=>s.go(j);let ze;const Jn=new Set,dn={currentRoute:l,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:N,options:t,push:O,replace:L,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:He,install(j){const Z=this;j.component("RouterLink",AS),j.component("RouterView",Jv),j.config.globalProperties.$router=Z,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Ye(l)}),Ns&&!ze&&l.value===on&&(ze=!0,O(s.location).catch(Ee=>{}));const Y={};for(const Ee in on)Object.defineProperty(Y,Ee,{get:()=>l.value[Ee],enumerable:!0});j.provide(Rf,Z),j.provide(Sf,Dn(Y)),j.provide(sh,l);const ee=j.unmount;Jn.add(j),j.unmount=function(){Jn.delete(j),Jn.size<1&&(u=on,T&&T(),T=null,l.value=on,ze=!1,te=!1),ee()}}};function kt(j){return j.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return dn}function kS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ni(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>ni(u,l))||s.push(l))}return[n,r,s]}function OS(t){return It(Sf)}const xS=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),ih=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&xS(t.route,n));return typeof r=="function"?r(t.route):r},NS=(t,e)=>({default:()=>t?pt(yT,t===!0?{}:t,e):e});function Cf(t){return Array.isArray(t)?t:[t]}const DS="modulepreload",LS=function(t,e){return t[0]==="."?new URL(t,e).href:t},zm={},MS=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=LS(l,r),l in zm)return;zm[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const R=i[g];if(R.href===l&&(!u||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":DS,u||(p.as="script",p.crossOrigin=""),p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((g,R)=>{p.addEventListener("load",g),p.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Je=(...t)=>MS(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),VS={middleware:"auth"},FS={middleware:"auth"},Wm=[{name:"Admin",path:"/Admin",meta:VS||{},component:()=>Je(()=>import("./B61zVxAy.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:FS||{},component:()=>Je(()=>import("./DHWZiD8k.js"),__vite__mapDeps([2,3,4]),import.meta.url).then(t=>t.default||t)},{name:"Bio",path:"/Bio",component:()=>Je(()=>import("./B8uRW2nV.js"),__vite__mapDeps([5,6]),import.meta.url).then(t=>t.default||t)},{name:"Contact",path:"/Contact",component:()=>Je(()=>import("./rf7gf5UB.js"),__vite__mapDeps([7,8]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Je(()=>import("./CKycfFDQ.js"),__vite__mapDeps([9,10,11,12]),import.meta.url).then(t=>t.default||t)},{name:"ForSale",path:"/ForSale",component:()=>Je(()=>import("./0imhfkf9.js"),__vite__mapDeps([13,14]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Je(()=>import("./4T6-A8rs.js"),__vite__mapDeps([15,10,11]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Je(()=>import("./BOpW_TQK.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",component:()=>Je(()=>import("./B0eh2ayo.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Login",path:"/Login",component:()=>Je(()=>import("./DQb9P0X5.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Je(()=>import("./R0ktAfV5.js"),__vite__mapDeps([16,10,11,17]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Je(()=>import("./BiosoXAw.js"),__vite__mapDeps([18,10,11,19]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Je(()=>import("./DW_w67jn.js"),__vite__mapDeps([20,3,10,11,21]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio",path:"/Portfolio",component:()=>Je(()=>import("./ChrCrtOO.js"),__vite__mapDeps([22,23]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Je(()=>import("./DjjT5Nnc.js"),__vite__mapDeps([24,10,11]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Je(()=>import("./9XWuRBum.js"),__vite__mapDeps([25,10,11]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Je(()=>import("./Cb_A2sJE.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Stuff",path:"/Stuff",component:()=>Je(()=>import("./6zqRVLrm.js"),__vite__mapDeps([26,10,11]),import.meta.url).then(t=>t.default||t)}],Zv=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?pt(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Km(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function US(t,e){return t===e||e===on?!1:Km(t)!==Km(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const jS={scrollBehavior(t,e,n){var u;const r=Le(),s=((u=gt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&US(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Gm(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Gu),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Gm(t.hash),behavior:s}),h(i)})})}};function Gm(t){try{const e=document.querySelector(t);if(e)return Number.parseFloat(getComputedStyle(e).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const BS={hashMode:!1,scrollBehaviorType:"auto"},jt={...BS,...jS},$S=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Le(),s=gt();if(([e,n]=So(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=nl({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Vs(o)),window.history.pushState({},"",t.fullPath)});return!1}})},HS=async t=>{let e,n;const r=([e,n]=So(()=>If(t.path)),e=await e,n(),e);if(r.redirect)return Qn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},qS=[$S,HS],oo={auth:()=>Je(()=>import("./C0S6ZUVg.js"),[],import.meta.url)};function zS(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),cm(h,"")}const a=cm(r,t),l=!n||RA(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const WS=Wt({name:"nuxt:router",enforce:"pre",async setup(t){var x,N;let e,n,r=ws().app.baseURL;jt.hashMode&&!r.includes("#")&&(r+="#");const s=((x=jt.history)==null?void 0:x.call(jt,r))??(jt.hashMode?sS(r):Kv(r)),i=((N=jt.routes)==null?void 0:N.call(jt,Wm))??Wm;let o;const a=PS({...jt,scrollBehavior:(S,w,O)=>{if(w===on){o=O;return}if(jt.scrollBehavior){if(a.options.scrollBehavior=jt.scrollBehavior,"scrollRestoration"in window.history){const L=a.beforeEach(()=>{L(),window.history.scrollRestoration="manual"})}return jt.scrollBehavior(S,on,o||O)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=_o(a.currentRoute.value);a.afterEach((S,w)=>{l.value=w}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=zS(r,window.location,t.payload.path),h=_o(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((S,w)=>{var O,L,M,b;((L=(O=S.matched[0])==null?void 0:O.components)==null?void 0:L.default)===((b=(M=w.matched[0])==null?void 0:M.components)==null?void 0:b.default)&&d()});const p={};for(const S in h.value)Object.defineProperty(p,S,{get:()=>h.value[S]});t._route=Dn(p),t._middleware=t._middleware||{global:[],named:{}};const g=tl();a.afterEach(async(S,w,O)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(kv),O&&await t.callHook("page:loading:end"),S.matched.length===0&&await t.runWithContext(()=>Vs(Xu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))});try{[e,n]=So(()=>a.isReady()),await e,n()}catch(S){[e,n]=So(()=>t.runWithContext(()=>Vs(S))),await e,n()}const R=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const k=t.payload.state._layout;return a.beforeEach(async(S,w)=>{var O;await t.callHook("page:loading:start"),S.meta=Hr(S.meta),t.isHydrating&&k&&!Dr(S.meta.layout)&&(S.meta.layout=k),t._processingMiddleware=!0;{const L=new Set([...qS,...t._middleware.global]);for(const M of S.matched){const b=M.meta.middleware;if(b)for(const y of Cf(b))L.add(y)}{const M=await t.runWithContext(()=>If(S.path));if(M.appMiddleware)for(const b in M.appMiddleware)M.appMiddleware[b]?L.add(b):L.delete(b)}for(const M of L){const b=typeof M=="string"?t._middleware.named[M]||await((O=oo[M])==null?void 0:O.call(oo).then(_=>_.default||_)):M;if(!b)throw new Error(`Unknown route middleware: '${M}'.`);const y=await t.runWithContext(()=>b(S,w));if(!t.payload.serverRendered&&t.isHydrating&&(y===!1||y instanceof Error)){const _=y||Xu({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Vs(_)),!1}if(y!==!0&&(y||y===!1))return y}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in R&&(R.name=void 0),await a.replace({...R,force:!0}),a.options.scrollBehavior=jt.scrollBehavior}catch(S){await t.runWithContext(()=>Vs(S))}}),{provide:{router:a}}}}),oh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),KS=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),il=t=>{const e=Le();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{oh(()=>t())}):oh(()=>t())},GS=Wt({name:"nuxt:payload",setup(t){gt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Sm(e.path);r&&Object.assign(t.static.data,r.data)}),il(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Sm(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(rl,1e3)})}}),QS=Wt(()=>{const t=gt();il(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),YS=Wt(t=>{let e;async function n(){const r=await rl();e&&clearTimeout(e),e=setTimeout(n,dm);try{const s=await $fetch(Ef("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}il(()=>{e=setTimeout(n,dm)})});function XS(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ro(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Le().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const JS=Wt({name:"nuxt:chunk-reload",setup(t){const e=gt(),n=ws(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:el(n.app.baseURL,i.fullPath);XS({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),ZS=Wt({name:"nuxt:global-components"}),wr={default:()=>Je(()=>import("./CwNA6NJ5.js"),__vite__mapDeps([27,3,28]),import.meta.url).then(t=>t.default||t)},eC=Wt({name:"nuxt:prefetch",setup(t){const e=gt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof wr[r]=="function"&&await wr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Qn(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Cf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof oo[o]=="function"&&oo[o]();s&&typeof wr[s]=="function"&&wr[s]()})}});var Qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new nC;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const R=u<<6&192|d;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rC=function(t){const e=eE(t);return tE.encodeByteArray(e,!0)},wc=function(t){return rC(t).replace(/\./g,"")},nE=function(t){try{return tE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iC=()=>sC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof Qm>"u")return;const t=Qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nE(t[1]);return e&&JSON.parse(e)},ol=()=>{try{return iC()||oC()||aC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rE=t=>{var e,n;return(n=(e=ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cC=t=>{const e=rE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=ol())===null||t===void 0?void 0:t.config},iE=t=>{var e;return(e=ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function uC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wc(JSON.stringify(n)),wc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function fC(){var t;const e=(t=ol())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function dC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mC(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gC(){return!fC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _C(){try{return typeof indexedDB=="object"}catch{return!1}}function yC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vC,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qo.prototype.create)}}class Qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,a,r)}}function EC(t,e){return t.replace(wC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wC=/\{\$([^}]+)}/g;function bC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ym(i)&&Ym(o)){if(!bc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Wi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TC(t,e){const n=new IC(t,e);return n.subscribe.bind(n)}class IC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lu),s.error===void 0&&(s.error=lu),s.complete===void 0&&(s.complete=lu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lu(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CC(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SC(t){return t===es?void 0:t}function CC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const kC={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},OC=we.INFO,xC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},NC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pf{constructor(e){this.name=e,this._logLevel=OC,this._logHandler=NC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const DC=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function LC(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,ah=new WeakMap,aE=new WeakMap,uu=new WeakMap,kf=new WeakMap;function VC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oE.set(n,t)}).catch(()=>{}),kf.set(e,t),e}function FC(t){if(ah.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ah.set(t,e)}let ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UC(t){ch=t(ch)}function jC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hu(this),e,...n);return aE.set(r,e.sort?e.sort():[e]),Sr(r)}:MC().includes(t)?function(...e){return t.apply(hu(this),e),Sr(oE.get(this))}:function(...e){return Sr(t.apply(hu(this),e))}}function BC(t){return typeof t=="function"?jC(t):(t instanceof IDBTransaction&&FC(t),DC(t,LC())?new Proxy(t,ch):t)}function Sr(t){if(t instanceof IDBRequest)return VC(t);if(uu.has(t))return uu.get(t);const e=BC(t);return e!==t&&(uu.set(t,e),kf.set(e,t)),e}const hu=t=>kf.get(t);function $C(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const HC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],fu=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||HC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return fu.set(e,i),i}UC(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lh="@firebase/app",eg="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Pf("@firebase/app"),KC="@firebase/app-compat",GC="@firebase/analytics-compat",QC="@firebase/analytics",YC="@firebase/app-check-compat",XC="@firebase/app-check",JC="@firebase/auth",ZC="@firebase/auth-compat",eP="@firebase/database",tP="@firebase/database-compat",nP="@firebase/functions",rP="@firebase/functions-compat",sP="@firebase/installations",iP="@firebase/installations-compat",oP="@firebase/messaging",aP="@firebase/messaging-compat",cP="@firebase/performance",lP="@firebase/performance-compat",uP="@firebase/remote-config",hP="@firebase/remote-config-compat",fP="@firebase/storage",dP="@firebase/storage-compat",pP="@firebase/firestore",mP="@firebase/vertexai-preview",gP="@firebase/firestore-compat",_P="firebase",yP="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="[DEFAULT]",vP={[lh]:"fire-core",[KC]:"fire-core-compat",[QC]:"fire-analytics",[GC]:"fire-analytics-compat",[XC]:"fire-app-check",[YC]:"fire-app-check-compat",[JC]:"fire-auth",[ZC]:"fire-auth-compat",[eP]:"fire-rtdb",[tP]:"fire-rtdb-compat",[nP]:"fire-fn",[rP]:"fire-fn-compat",[sP]:"fire-iid",[iP]:"fire-iid-compat",[oP]:"fire-fcm",[aP]:"fire-fcm-compat",[cP]:"fire-perf",[lP]:"fire-perf-compat",[uP]:"fire-rc",[hP]:"fire-rc-compat",[fP]:"fire-gcs",[dP]:"fire-gcs-compat",[pP]:"fire-fst",[gP]:"fire-fst-compat",[mP]:"fire-vertex","fire-js":"fire-js",[_P]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map,EP=new Map,hh=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(hh.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;hh.set(e,t);for(const n of Tc.values())tg(n,t);for(const n of EP.values())tg(n,t);return!0}function Of(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new Qo("app","Firebase",wP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=yP;function cE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cr.create("bad-app-name",{appName:String(s)});if(n||(n=sE()),!n)throw Cr.create("no-options");const i=Tc.get(s);if(i){if(bc(n,i.options)&&bc(r,i.config))return i;throw Cr.create("duplicate-app",{appName:s})}const o=new PC(s);for(const l of hh.values())o.addComponent(l);const a=new bP(n,r,o);return Tc.set(s,a),a}function lE(t=uh){const e=Tc.get(t);if(!e&&t===uh&&sE())return cE();if(!e)throw Cr.create("no-app",{appName:t});return e}function Pr(t,e,n){var r;let s=(r=vP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}si(new ds(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const TP="firebase-heartbeat-database",IP=1,ko="firebase-heartbeat-store";let du=null;function uE(){return du||(du=$C(TP,IP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),du}async function AP(t){try{const n=(await uE()).transaction(ko),r=await n.objectStore(ko).get(hE(t));return await n.done,r}catch(e){if(e instanceof Yn)$n.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function ng(t,e){try{const r=(await uE()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,hE(t)),await r.done}catch(n){if(n instanceof Yn)$n.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RP=1024,SP=30*24*60*60*1e3;class CP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=rg();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=SP}),this._storage.overwrite(this._heartbeatsCache))}catch(s){$n.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rg(),{heartbeatsToSend:r,unsentEntries:s}=PP(this._heartbeatsCache.heartbeats),i=wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function rg(){return new Date().toISOString().substring(0,10)}function PP(t,e=RP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _C()?yC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sg(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){si(new ds("platform-logger",e=>new zC(e),"PRIVATE")),si(new ds("heartbeat",e=>new CP(e),"PRIVATE")),Pr(lh,eg,t),Pr(lh,eg,"esm2017"),Pr("fire-js","")}OP("");var xP="firebase",NP="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(xP,NP,"app");function xf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DP=fE,dE=new Qo("auth","Firebase",fE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Pf("@firebase/auth");function LP(t,...e){Ic.logLevel<=we.WARN&&Ic.warn(`Auth (${yi}): ${t}`,...e)}function Qa(t,...e){Ic.logLevel<=we.ERROR&&Ic.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Nf(t,...e)}function vn(t,...e){return Nf(t,...e)}function pE(t,e,n){const r=Object.assign(Object.assign({},DP()),{[e]:n});return new Qo("auth","Firebase",r).create(e,{appName:t.name})}function kr(t){return pE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dE.create(t,...e)}function fe(t,e,...n){if(!t)throw Nf(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function Hn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MP(){return ig()==="http:"||ig()==="https:"}function ig(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MP()||dC()||"connection"in navigator)?navigator.onLine:!0}function FP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=hC()||pC()}get(){return VP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new Xo(3e4,6e4);function bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,s={}){return gE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mE.fetch()(_E(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function gE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UP),e);try{const s=new $P(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw La(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pE(t,h,u);fn(t,h)}}catch(s){if(s instanceof Yn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function al(t,e,n,r,s={}){const i=await qr(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _E(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Df(t.config,s):`${t.config.apiScheme}://${s}`}function BP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),jP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=vn(t,e,r);return s.customData._tokenResponse=n,s}function og(t){return t!==void 0&&t.enterprise!==void 0}class HP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return BP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qP(t,e){return qr(t,"GET","/v2/recaptchaConfig",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function yE(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WP(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=Lf(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ao(pu(s.auth_time)),issuedAtTime:ao(pu(s.iat)),expirationTime:ao(pu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pu(t){return Number(t)*1e3}function Lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const s=nE(n);return s?JSON.parse(s):(Qa("Failed to decode base64 JWT payload"),null)}catch(s){return Qa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ag(t){const e=Lf(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&KP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Oo(t,yE(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vE(i.providerUserInfo):[],a=YP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function QP(t){const e=lt(t);await Ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vE(t){return t.map(e=>{var{providerId:n}=e,r=xf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,e){const n=await gE(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_E(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JP(t,e){return qr(t,"POST","/v2/accounts:revokeToken",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=ag(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await XP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ws;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WP(this,e)}reload(){return QP(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await Oo(this,zP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:O,isAnonymous:L,providerData:M,stsTokenManager:b}=n;fe(w&&b,e,"internal-error");const y=Ws.fromJSON(this.name,b);fe(typeof w=="string",e,"internal-error"),ar(d,e.name),ar(p,e.name),fe(typeof O=="boolean",e,"internal-error"),fe(typeof L=="boolean",e,"internal-error"),ar(g,e.name),ar(R,e.name),ar(k,e.name),ar(x,e.name),ar(N,e.name),ar(S,e.name);const _=new Vn({uid:w,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:L,photoURL:R,phoneNumber:g,tenantId:k,stsTokenManager:y,createdAt:N,lastLoginAt:S});return M&&Array.isArray(M)&&(_.providerData=M.map(E=>Object.assign({},E))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ws;s.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ac(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?vE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ws;a.updateFromIdToken(r);const l=new Vn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new dh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new Map;function Fn(t){Hn(t instanceof Function,"Expected a class definition");let e=cg.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}EE.type="NONE";const lg=EE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ya(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ya("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(Fn(lg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(lg);const o=Ya(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Vn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ks(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ks(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RE(e))return"Blackberry";if(SE(e))return"Webos";if(bE(e))return"Safari";if((e.includes("chrome/")||TE(e))&&!e.includes("edge/"))return"Chrome";if(AE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wE(t=At()){return/firefox\//i.test(t)}function bE(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TE(t=At()){return/crios\//i.test(t)}function IE(t=At()){return/iemobile/i.test(t)}function AE(t=At()){return/android/i.test(t)}function RE(t=At()){return/blackberry/i.test(t)}function SE(t=At()){return/webos/i.test(t)}function Mf(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZP(t=At()){var e;return Mf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ek(){return mC()&&document.documentMode===10}function CE(t=At()){return Mf(t)||AE(t)||SE(t)||RE(t)||/windows phone/i.test(t)||IE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e=[]){let n;switch(t){case"Browser":n=ug(At());break;case"Worker":n=`${ug(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nk(t,e={}){return qr(t,"GET","/v2/passwordPolicy",bs(t,e))}/**
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
 */const rk=6;class sk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hg(this),this.idTokenSubscription=new hg(this),this.beforeStateQueue=new tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yE(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(kr(this));const n=e?lt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nk(this),n=new sk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vi(t){return lt(t)}class hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=TC(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ok(t){cl=t}function kE(t){return cl.loadJS(t)}function ak(){return cl.recaptchaEnterpriseScript}function ck(){return cl.gapiScript}function lk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uk="recaptcha-enterprise",hk="NO_RECAPTCHA";class fk{constructor(e){this.type=uk,this.auth=vi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{qP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new HP(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;og(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(hk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&og(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ak();l.length!==0&&(l+=a),kE(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function fg(t,e,n,r=!1){const s=new fk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function dg(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await fg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t,e){const n=Of(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bc(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function pk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mk(t,e,n){const r=vi(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=OE(e),{host:o,port:a}=gk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),_k()}function OE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gk(t){const e=OE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pg(o)}}}function pg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _k(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function yk(t,e){return qr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(t,e){return al(t,"POST","/v1/accounts:signInWithPassword",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}async function wk(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Vf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dg(e,n,"signInWithPassword",vk);case"emailLink":return Ek(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dg(e,r,"signUpPassword",yk);case"emailLink":return wk(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t,e){return al(t,"POST","/v1/accounts:signInWithIdp",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="http://localhost";class ps extends Vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:bk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ik(t){const e=zi(Wi(t)).link,n=e?zi(Wi(e)).deep_link_id:null,r=zi(Wi(t)).deep_link_id;return(r?zi(Wi(r)).link:null)||r||n||e||t}class Ff{constructor(e){var n,r,s,i,o,a;const l=zi(Wi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Tk((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ik(e);try{return new Ff(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ff.parseLink(n);return fe(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends xE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Jo{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Jo{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Jo{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vn._fromIdTokenResponse(e,r,s),o=mg(r);return new ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mg(r);return new ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends Yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Rc(e,n,r,s)}}function NE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(t,i,e,r):i})}async function Ak(t,e,n=!1){const r=await Oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(kr(r));const s="reauthenticate";try{const i=await Oo(t,NE(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Lf(i.idToken);fe(o,r,"internal-error");const{sub:a}=o;return fe(t.uid===a,r,"user-mismatch"),ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(t,e,n=!1){if(Ln(t.app))return Promise.reject(kr(t));const r="signIn",s=await NE(t,r,e),i=await ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Sk(t,e){return DE(vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(t){const e=vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Pk(t,e,n){return Ln(t.app)?Promise.reject(kr(t)):Sk(lt(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ck(t),r})}function kk(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function Ok(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function xk(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function Nk(t){return lt(t).signOut()}const Sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=1e3,Lk=10;class ME extends LE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ek()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ME.type="LOCAL";const Mk=ME;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE extends LE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}VE.type="SESSION";const FE=VE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ll(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await Vk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ll.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Uf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function Uk(t){En().location.href=t}/**
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
 */function UE(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function jk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $k(){return UE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="firebaseLocalStorageDb",Hk=1,Cc="firebaseLocalStorage",BE="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function qk(){const t=indexedDB.deleteDatabase(jE);return new Zo(t).toPromise()}function ph(){const t=indexedDB.open(jE,Hk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:BE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await qk(),e(await ph()))})})}async function gg(t,e,n){const r=ul(t,!0).put({[BE]:e,value:n});return new Zo(r).toPromise()}async function zk(t,e){const n=ul(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function _g(t,e){const n=ul(t,!0).delete(e);return new Zo(n).toPromise()}const Wk=800,Kk=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Kk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ll._getInstance($k()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jk(),!this.activeServiceWorker)return;this.sender=new Fk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ph();return await gg(e,Sc,"1"),await _g(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_g(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ul(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const Gk=$E;new Xo(3e4,6e4);/**
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
 */function Qk(t,e){return e?Fn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yk(t){return DE(t.auth,new jf(t),t.bypassAuthState)}function Xk(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),Rk(n,new jf(t),t.bypassAuthState)}async function Jk(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),Ak(n,new jf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yk;case"linkViaPopup":case"linkViaRedirect":return Jk;case"reauthViaPopup":case"reauthViaRedirect":return Xk;default:fn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Xo(2e3,1e4);class Fs extends HE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zk.get())};e()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="pendingRedirect",Xa=new Map;class tO extends HE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await nO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nO(t,e){const n=iO(e),r=sO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rO(t,e){Xa.set(t._key(),e)}function sO(t){return Fn(t._redirectPersistence)}function iO(t){return Ya(eO,t.config.apiKey,t.name)}async function oO(t,e,n=!1){if(Ln(t.app))return Promise.reject(kr(t));const r=vi(t),s=Qk(r,e),o=await new tO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=10*60*1e3;class cO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aO&&this.cachedEventUids.clear(),this.cachedEventUids.has(yg(e))}saveEventToCache(e){this.cachedEventUids.add(yg(e)),this.lastProcessedEventTime=Date.now()}}function yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fO=/^https?/;async function dO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uO(t);for(const n of e)try{if(pO(n))return}catch{}fn(t,"unauthorized-domain")}function pO(t){const e=fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fO.test(n))return!1;if(hO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mO=new Xo(3e4,6e4);function vg(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gO(t){return new Promise((e,n)=>{var r,s,i;function o(){vg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vg(),n(vn(t,"network-request-failed"))},timeout:mO.get()})}if(!((s=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=En().gapi)===null||i===void 0)&&i.load)o();else{const a=lk("iframefcb");return En()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},kE(`${ck()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function _O(t){return Ja=Ja||gO(t),Ja}/**
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
 */const yO=new Xo(5e3,15e3),vO="__/auth/iframe",EO="emulator/auth/iframe",wO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TO(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,EO):`https://${t.config.authDomain}/${vO}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=bO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yo(r).slice(1)}`}async function IO(t){const e=await _O(t),n=En().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:TO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=En().setTimeout(()=>{i(o)},yO.get());function l(){En().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const AO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RO=500,SO=600,CO="_blank",PO="http://localhost";class Eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kO(t,e,n,r=RO,s=SO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},AO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=At().toLowerCase();n&&(a=TE(u)?CO:n),wE(u)&&(e=e||PO,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,R])=>`${p}${g}=${R},`,"");if(ZP(u)&&a!=="_self")return OO(e||"",a),new Eg(null);const d=window.open(e||"",a,h);fe(d,t,"popup-blocked");try{d.focus()}catch{}return new Eg(d)}function OO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xO="__/auth/handler",NO="emulator/auth/handler",DO=encodeURIComponent("fac");async function wg(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof xE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Jo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${DO}=${encodeURIComponent(l)}`:"";return`${LO(t)}?${Yo(a).slice(1)}${u}`}function LO({config:t}){return t.emulator?Df(t,NO):`https://${t.authDomain}/${xO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="webStorageSupport";class MO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FE,this._completeRedirectFn=oO,this._overrideRedirectResult=rO}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wg(e,n,r,fh(),s);return kO(e,o,Uf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wg(e,n,r,fh(),s);return Uk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IO(e),r=new cO(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mu,{type:mu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mu];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CE()||bE()||Mf()}}const VO=MO;var bg="@firebase/auth",Tg="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jO(t){si(new ds("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PE(t)},u=new ik(r,s,i,l);return pk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),si(new ds("auth-internal",e=>{const n=vi(e.getProvider("auth").getImmediate());return(r=>new FO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(bg,Tg,UO(t)),Pr(bg,Tg,"esm2017")}/**
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
 */const BO=5*60,$O=iE("authIdTokenMaxAge")||BO;let Ig=null;const HO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$O)return;const s=n==null?void 0:n.token;Ig!==s&&(Ig=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qO(t=lE()){const e=Of(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dk(t,{popupRedirectResolver:VO,persistence:[Gk,Mk,FE]}),r=iE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=HO(i.toString());Ok(n,o,()=>o(n.currentUser)),kk(n,a=>o(a))}}const s=rE("auth");return s&&mk(n,`http://${s}`),n}function zO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ok({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jO("Browser");function an(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=an(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:an(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=an(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=an(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(an(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(an(i),an(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(an(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const WO={path:"/",watch:!0,decode:t=>Ro(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Ma=window.cookieStore;function KO(t,e){var l;const n={...WO,...e},r=Ag(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=an(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?YO(o,s,n.watch&&n.watch!=="shallow"):Vt(o);{let u=null;try{!Ma&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||v1(a.value,r[t])||(QO(t,a.value,n),r[t]=an(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=R=>{var x;const k=R.refresh?(x=Ag(n))==null?void 0:x[t]:n.decode(R.value);p=!0,a.value=k,r[t]=an(k),Sn(()=>{p=!1})};let p=!1;const g=!!qo();if(g&&ac(()=>{p=!0,h(),u==null||u.close()}),Ma){const R=k=>{const x=k.changed.find(N=>N.name===t);x&&d({value:x.value})};Ma.addEventListener("change",R),g&&ac(()=>Ma.removeEventListener("change",R))}else u&&(u.onmessage=({data:R})=>d(R));n.watch?ln(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function Ag(t={}){return d1(document.cookie,t)}function GO(t,e,n={}){return e==null?mm(t,e,{...n,maxAge:-1}):mm(t,e,n)}function QO(t,e,n={}){document.cookie=GO(t,e,n)}const Rg=2147483647;function YO(t,e,n){let r,s,i=0;const o=n?Vt(t):{value:t};return qo()&&ac(()=>{s==null||s(),clearTimeout(r)}),iT((a,l)=>{n&&(s=ln(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<Rg?h:Rg;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function zE(t,e=gt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>zE(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const XO=(...t)=>t.find(e=>e!==void 0);function JO(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return Sg(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:Sg(o,t.trailingSlash)}}function r(s){const i=gt(),o=ws(),a=De(()=>!!s.target&&s.target!=="_self"),l=De(()=>{const k=s.to||s.href||"";return typeof k=="string"&&Qn(k,{acceptRelative:!0})}),u=wo("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,d=De(()=>{if(s.external)return!0;const k=s.to||s.href||"";return typeof k=="object"?!1:k===""||l.value}),p=De(()=>{const k=s.to||s.href||"";return d.value?k:n(k,i.resolve)}),g=d.value||h==null?void 0:h({...s,to:p}),R=De(()=>{var k;if(!p.value||l.value)return p.value;if(d.value){const x=typeof p.value=="object"&&"path"in p.value?Zu(p.value):p.value,N=typeof x=="object"?i.resolve(x).href:x;return n(N,i.resolve)}return typeof p.value=="object"?((k=i.resolve(p.value))==null?void 0:k.href)??null:n(el(o.app.baseURL,p.value),i.resolve)});return{to:p,hasTarget:a,isAbsoluteUrl:l,isExternal:d,href:R,isActive:(g==null?void 0:g.isActive)??De(()=>p.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??De(()=>p.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??De(()=>i.resolve(p.value)),async navigate(){await P1(R.value,{replace:s.replace,external:d.value||a.value})}}}return Cn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=gt(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:d,isAbsoluteUrl:p}=r(s),g=Vt(!1),R=Vt(null),k=x=>{var N;R.value=s.custom?(N=x==null?void 0:x.$el)==null?void 0:N.nextElementSibling:x==null?void 0:x.$el};if(s.prefetch!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!t2()){const N=Le();let S,w=null;Kc(()=>{const O=e2();il(()=>{S=oh(()=>{var L;(L=R==null?void 0:R.value)!=null&&L.tagName&&(w=O.observe(R.value,async()=>{w==null||w(),w=null;const M=typeof a.value=="string"?a.value:h.value?Zu(a.value):o.resolve(a.value).fullPath;await Promise.all([N.hooks.callHook("link:prefetch",M).catch(()=>{}),!h.value&&!d.value&&zE(a.value,o).catch(()=>{})]),g.value=!0}))})})}),Wo(()=>{S&&KS(S),w==null||w(),w=null})}return()=>{var S;if(!h.value&&!d.value){const w={ref:k,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(g.value&&(w.class=s.prefetchedClass||t.prefetchedClass),w.rel=s.rel||void 0),pt(wo("RouterLink"),w,i.default)}const x=s.target||null,N=XO(s.noRel?"":s.rel,t.externalRelAttribute,p.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,get route(){if(!l.value)return;const w=new URL(l.value,window.location.href);return{path:w.pathname,fullPath:w.pathname,get query(){return fv(w.search)},hash:w.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:N,target:x,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:pt("a",{ref:R,href:l.value||null,rel:N,target:x},(S=i.default)==null?void 0:S.call(i))}}})}const ZO=JO(s1);function Sg(t,e){const n=e==="append"?gc:Zc;return Qn(t)&&!t.startsWith("http")?t:n(t,!0)}function e2(){const t=Le();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}function t2(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}var Cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var us,WE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(E,C,A){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return y.prototype[C].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var E=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)E[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)E[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],C=b.g[2];var A=b.g[3],T=y+(A^_&(C^A))+E[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[1]+3905402710&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[2]+606105819&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(A^_&(C^A))+E[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[5]+1200080426&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[6]+2821735955&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(A^_&(C^A))+E[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[9]+2336552879&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[10]+4294925233&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(A^_&(C^A))+E[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(C^y&(_^C))+E[13]+4254626195&4294967295,A=y+(T<<12&4294967295|T>>>20),T=C+(_^A&(y^_))+E[14]+2792965006&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(y^C&(A^y))+E[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^A&(_^C))+E[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[6]+3225465664&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[11]+643717713&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^A&(_^C))+E[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[10]+38016083&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[15]+3634488961&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^A&(_^C))+E[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[14]+3275163606&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[3]+4107603335&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^A&(_^C))+E[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(y^_))+E[2]+4243563512&4294967295,A=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(A^y))+E[7]+1735328473&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(C^A))+E[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^A)+E[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[8]+2272392833&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[11]+1839030562&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^A)+E[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[4]+1272893353&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[7]+4139469664&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^A)+E[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[0]+3936430074&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[3]+3572445317&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^A)+E[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^C)+E[12]+3873151461&4294967295,A=y+(T<<11&4294967295|T>>>21),T=C+(A^y^_)+E[15]+530742520&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^y)+E[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~A))+E[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[7]+1126891415&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[14]+2878612391&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~A))+E[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[3]+2399980690&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[10]+4293915773&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~A))+E[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[15]+4264355552&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[6]+2734768916&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~A))+E[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~C))+E[11]+3174756917&4294967295,A=y+(T<<10&4294967295|T>>>22),T=C+(y^(A|~_))+E[2]+718787259&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~y))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,E=this.B,C=this.h,A=0;A<y;){if(C==0)for(;A<=_;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(E[C++]=b.charCodeAt(A++),C==this.blockSize){s(this,E),C=0;break}}else for(;A<y;)if(E[C++]=b[A++],C==this.blockSize){s(this,E),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var E=0;32>E;E+=8)b[_++]=this.g[y]>>>E&255;return b};function i(b,y){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],E=!0,C=b.length-1;0<=C;C--){var A=b[C]|0;E&&A==y||(_[C]=A,E=!1)}this.g=_}var a={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return x(u(-b));for(var y=[],_=1,E=0;b>=_;E++)y[E]=b/_|0,_*=4294967296;return new o(y,0)}function h(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return x(h(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),E=d,C=0;C<b.length;C+=8){var A=Math.min(8,b.length-C),T=parseInt(b.substring(C,C+A),y);8>A?(A=u(Math.pow(y,A)),E=E.j(A).add(u(T))):(E=E.j(_),E=E.add(u(T)))}return E}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var E=this.i(_);b+=(0<=E?E:4294967296+E)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(k(this))return"-"+x(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,E="";;){var C=O(_,y).g;_=N(_,C.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=C,R(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=N(this,b),k(b)?-1:R(b)?0:1};function x(b){for(var y=b.g.length,_=[],E=0;E<y;E++)_[E]=~b.g[E];return new o(_,~b.h).add(p)}t.abs=function(){return k(this)?x(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],E=0,C=0;C<=y;C++){var A=E+(this.i(C)&65535)+(b.i(C)&65535),T=(A>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);E=T>>>16,A&=65535,T&=65535,_[C]=T<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(x(y))}t.j=function(b){if(R(this)||R(b))return d;if(k(this))return k(b)?x(this).j(x(b)):x(x(this).j(b));if(k(b))return x(this.j(x(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<b.g.length;C++){var A=this.i(E)>>>16,T=this.i(E)&65535,me=b.i(C)>>>16,ye=b.i(C)&65535;_[2*E+2*C]+=T*ye,S(_,2*E+2*C),_[2*E+2*C+1]+=A*ye,S(_,2*E+2*C+1),_[2*E+2*C+1]+=T*me,S(_,2*E+2*C+1),_[2*E+2*C+2]+=A*me,S(_,2*E+2*C+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new o(_,0)};function S(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function w(b,y){this.g=b,this.h=y}function O(b,y){if(R(y))throw Error("division by zero");if(R(b))return new w(d,d);if(k(b))return y=O(x(b),y),new w(x(y.g),x(y.h));if(k(y))return y=O(b,x(y)),new w(x(y.g),y.h);if(30<b.g.length){if(k(b)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,E=y;0>=E.l(b);)_=L(_),E=L(E);var C=M(_,1),A=M(E,1);for(E=M(E,2),_=M(_,2);!R(E);){var T=A.add(E);0>=T.l(b)&&(C=C.add(_),A=T),E=M(E,1),_=M(_,1)}return y=N(b,C.j(y)),new w(C,y)}for(C=d;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=u(_),T=A.j(y);k(T)||0<T.l(b);)_-=E,A=u(_),T=A.j(y);R(A)&&(A=p),C=C.add(A),b=N(b,T)}return new w(C,b)}t.A=function(b){return O(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)&b.i(E);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)|b.i(E);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)^b.i(E);return new o(_,this.h^b.h)};function L(b){for(var y=b.g.length+1,_=[],E=0;E<y;E++)_[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(_,b.h)}function M(b,y){var _=y>>5;y%=32;for(var E=b.g.length-_,C=[],A=0;A<E;A++)C[A]=0<y?b.i(A+_)>>>y|b.i(A+_+1)<<32-y:b.i(A+_);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,WE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,us=o}).apply(typeof Cg<"u"?Cg:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KE,GE,Ki,QE,Za,mh,YE,XE,JE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in m))break e;m=m[D]}c=c[c.length-1],v=m[c],f=f(v),f!=v&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,v=!1,D={next:function(){if(!v&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),c.apply(f,D)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function R(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(v,D,F){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return f.prototype[D].apply(v,K)}}function k(c){const f=c.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=c[v];return m}return[]}function x(c,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const D=c.length||0,F=v.length||0;c.length=D+F;for(let K=0;K<F;K++)c[D+K]=v[K]}else c.push(v)}}class N{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(c){return/^[\s\xa0]*$/.test(c)}function w(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function O(c){return O[" "](c),c}O[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function M(c,f,m){for(const v in c)f.call(m,c[v],v,c)}function b(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function y(c){const f={};for(const m in c)f[m]=c[m];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(c,f){let m,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(m in v)c[m]=v[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(v,m)&&(c[m]=v[m])}}function C(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function A(c){a.setTimeout(()=>{throw c},0)}function T(){var c=He;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class me{constructor(){this.h=this.g=null}add(f,m){const v=ye.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new N(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ie=!1,He=new me,rn=()=>{const c=a.Promise.resolve(void 0);te=()=>{c.then(Gt)}};var Gt=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){A(m)}var f=ye;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ie=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Jn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function dn(c,f){if(ze.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(L){e:{try{O(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:kt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&dn.aa.h.call(this)}}R(dn,ze);var kt={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(c,f,m,v,D){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=D,this.key=++Z,this.da=this.fa=!1}function ee(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ee(c){this.src=c,this.g={},this.h=0}Ee.prototype.add=function(c,f,m,v,D){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var K=I(c,f,v,D);return-1<K?(f=c[K],m||(f.fa=!1)):(f=new Y(f,this.src,F,!!v,D),f.fa=m,c.push(f)),f};function Oe(c,f){var m=f.type;if(m in c.g){var v=c.g[m],D=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=D)&&Array.prototype.splice.call(v,D,1),F&&(ee(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function I(c,f,m,v){for(var D=0;D<c.length;++D){var F=c[D];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==v)return D}return-1}var P="closure_lm_"+(1e6*Math.random()|0),V={};function B(c,f,m,v,D){if(Array.isArray(f)){for(var F=0;F<f.length;F++)B(c,f[F],m,v,D);return null}return m=oe(m),c&&c[j]?c.K(f,m,u(v)?!!v.capture:!!v,D):U(c,f,m,!1,v,D)}function U(c,f,m,v,D,F){if(!f)throw Error("Invalid event type");var K=u(D)?!!D.capture:!!D,Ne=X(c);if(Ne||(c[P]=Ne=new Ee(c)),m=Ne.add(f,m,v,K,F),m.proxy)return m;if(v=z(),m.proxy=v,v.src=c,v.listener=m,c.addEventListener)Jn||(D=K),D===void 0&&(D=!1),c.addEventListener(f.toString(),v,D);else if(c.attachEvent)c.attachEvent(G(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function z(){function c(m){return f.call(c.src,c.listener,m)}const f=q;return c}function Q(c,f,m,v,D){if(Array.isArray(f))for(var F=0;F<f.length;F++)Q(c,f[F],m,v,D);else v=u(v)?!!v.capture:!!v,m=oe(m),c&&c[j]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=I(F,m,v,D),-1<m&&(ee(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=X(c))&&(f=c.g[f.toString()],c=-1,f&&(c=I(f,m,v,D)),(m=-1<c?f[c]:null)&&W(m))}function W(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[j])Oe(f.i,c);else{var m=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(m,v,c.capture):f.detachEvent?f.detachEvent(G(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=X(f))?(Oe(m,c),m.h==0&&(m.src=null,f[P]=null)):ee(c)}}}function G(c){return c in V?V[c]:V[c]="on"+c}function q(c,f){if(c.da)c=!0;else{f=new dn(f,this);var m=c.listener,v=c.ha||c.src;c.fa&&W(c),c=m.call(v,f)}return c}function X(c){return c=c[P],c instanceof Ee?c:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[ae]||(c[ae]=function(f){return c.handleEvent(f)}),c[ae])}function se(){qe.call(this),this.i=new Ee(this),this.M=this,this.F=null}R(se,qe),se.prototype[j]=!0,se.prototype.removeEventListener=function(c,f,m,v){Q(this,c,f,m,v)};function ue(c,f){var m,v=c.F;if(v)for(m=[];v;v=v.F)m.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new ze(f,c);else if(f instanceof ze)f.target=f.target||c;else{var D=f;f=new ze(v,c),E(f,D)}if(D=!0,m)for(var F=m.length-1;0<=F;F--){var K=f.g=m[F];D=Pe(K,v,!0,f)&&D}if(K=f.g=c,D=Pe(K,v,!0,f)&&D,D=Pe(K,v,!1,f)&&D,m)for(F=0;F<m.length;F++)K=f.g=m[F],D=Pe(K,v,!1,f)&&D}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],v=0;v<m.length;v++)ee(m[v]);delete c.g[f],c.h--}}this.F=null},se.prototype.K=function(c,f,m,v){return this.i.add(String(c),f,!1,m,v)},se.prototype.L=function(c,f,m,v){return this.i.add(String(c),f,!0,m,v)};function Pe(c,f,m,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,F=0;F<f.length;++F){var K=f[F];if(K&&!K.da&&K.capture==m){var Ne=K.listener,ut=K.ha||K.src;K.fa&&Oe(c.i,K),D=Ne.call(ut,v)!==!1&&D}}return D&&!v.defaultPrevented}function Te(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Qe(c){c.g=Te(()=>{c.g=null,c.i&&(c.i=!1,Qe(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Ft extends qe{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qt(c){qe.call(this),this.h=c,this.g={}}R(Qt,qe);var Ai=[];function Zn(c){M(c.g,function(f,m){this.g.hasOwnProperty(m)&&W(f)},c),c.g={}}Qt.prototype.N=function(){Qt.aa.N.call(this),Zn(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var As=a.JSON.stringify,Rt=a.JSON.parse,Yt=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Rs(){}Rs.prototype.h=null;function Pd(c){return c.h||(c.h=c.i())}function kd(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nl(){ze.call(this,"d")}R(Nl,ze);function Dl(){ze.call(this,"c")}R(Dl,ze);var Wr={},Od=null;function ca(){return Od=Od||new se}Wr.La="serverreachability";function xd(c){ze.call(this,Wr.La,c)}R(xd,ze);function Si(c){const f=ca();ue(f,new xd(f))}Wr.STAT_EVENT="statevent";function Nd(c,f){ze.call(this,Wr.STAT_EVENT,c),this.stat=f}R(Nd,ze);function St(c){const f=ca();ue(f,new Nd(f,c))}Wr.Ma="timingevent";function Dd(c,f){ze.call(this,Wr.Ma,c),this.size=f}R(Dd,ze);function Ci(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function Yw(c,f,m,v,D,F){c.info(function(){if(c.g)if(F)for(var K="",Ne=F.split("&"),ut=0;ut<Ne.length;ut++){var Re=Ne[ut].split("=");if(1<Re.length){var yt=Re[0];Re=Re[1];var vt=yt.split("_");K=2<=vt.length&&vt[1]=="type"?K+(yt+"="+Re+"&"):K+(yt+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+f+`
`+m+`
`+K})}function Xw(c,f,m,v,D,F,K){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+f+`
`+m+`
`+F+" "+K})}function Ss(c,f,m,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+Zw(c,m)+(v?" "+v:"")})}function Jw(c,f){c.info(function(){return"TIMEOUT: "+f})}Pi.prototype.info=function(){};function Zw(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var v=m[c];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<D.length;K++)D[K]=""}}}}return As(m)}catch{return f}}var la={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ld={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ll;function ua(){}R(ua,Rs),ua.prototype.g=function(){return new XMLHttpRequest},ua.prototype.i=function(){return{}},Ll=new ua;function er(c,f,m,v){this.j=c,this.i=f,this.l=m,this.R=v||1,this.U=new Qt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Md}function Md(){this.i=null,this.g="",this.h=!1}var Vd={},Ml={};function Vl(c,f,m){c.L=1,c.v=pa(Pn(f)),c.m=m,c.P=!0,Fd(c,null)}function Fd(c,f){c.F=Date.now(),ha(c),c.A=Pn(c.v);var m=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),Jd(m.i,"t",v),c.C=0,m=c.j.J,c.h=new Md,c.g=gp(c.j,m?f:null,!c.m),0<c.O&&(c.M=new Ft(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,v=c.ca;var D="readystatechange";Array.isArray(D)||(D&&(Ai[0]=D.toString()),D=Ai);for(var F=0;F<D.length;F++){var K=B(m,D[F],v||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Si(),Yw(c.i,c.u,c.A,c.l,c.R,c.m)}er.prototype.ca=function(c){c=c.target;const f=this.M;f&&kn(c)==3?f.j():this.Y(c)},er.prototype.Y=function(c){try{if(c==this.g)e:{const vt=kn(this.g);var f=this.g.Ba();const ks=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||ip(this.g)))){this.J||vt!=4||f==7||(f==8||0>=ks?Si(3):Si(2)),Fl(this);var m=this.g.Z();this.X=m;t:if(Ud(this)){var v=ip(this.g);c="";var D=v.length,F=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),ki(this);var K="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,c+=this.h.i.decode(v[f],{stream:!(F&&f==D-1)});v.length=0,this.h.g+=c,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=m==200,Xw(this.i,this.u,this.A,this.l,this.R,vt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ut=this.g;if((Ne=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(Ne)){var Re=Ne;break t}}Re=null}if(m=Re)Ss(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,m);else{this.o=!1,this.s=3,St(12),Kr(this),ki(this);break e}}if(this.P){m=!0;let sn;for(;!this.J&&this.C<K.length;)if(sn=eb(this,K),sn==Ml){vt==4&&(this.s=4,St(14),m=!1),Ss(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Vd){this.s=4,St(15),Ss(this.i,this.l,K,"[Invalid Chunk]"),m=!1;break}else Ss(this.i,this.l,sn,null),Ul(this,sn);if(Ud(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||K.length!=0||this.h.h||(this.s=1,St(16),m=!1),this.o=this.o&&m,!m)Ss(this.i,this.l,K,"[Invalid Chunked Response]"),Kr(this),ki(this);else if(0<K.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),zl(yt),yt.M=!0,St(11))}}else Ss(this.i,this.l,K,null),Ul(this,K);vt==4&&Kr(this),this.o&&!this.J&&(vt==4?fp(this.j,this):(this.o=!1,ha(this)))}else _b(this.g),m==400&&0<K.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Kr(this),ki(this)}}}catch{}finally{}};function Ud(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function eb(c,f){var m=c.C,v=f.indexOf(`
`,m);return v==-1?Ml:(m=Number(f.substring(m,v)),isNaN(m)?Vd:(v+=1,v+m>f.length?Ml:(f=f.slice(v,v+m),c.C=v+m,f)))}er.prototype.cancel=function(){this.J=!0,Kr(this)};function ha(c){c.S=Date.now()+c.I,jd(c,c.I)}function jd(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ci(p(c.ba,c),f)}function Fl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}er.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Jw(this.i,this.A),this.L!=2&&(Si(),St(17)),Kr(this),this.s=2,ki(this)):jd(this,this.S-c)};function ki(c){c.j.G==0||c.J||fp(c.j,c)}function Kr(c){Fl(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,Zn(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function Ul(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||jl(m.h,c))){if(!c.K&&jl(m.h,c)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)va(m),_a(m);else break e;ql(m),St(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ci(p(m.Za,m),6e3));if(1>=Hd(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Qr(m,11)}else if((c.K||m.g==c)&&va(m),!S(f))for(D=m.Da.g.parse(f),f=0;f<D.length;f++){let Re=D[f];if(m.T=Re[0],Re=Re[1],m.G==2)if(Re[0]=="c"){m.K=Re[1],m.ia=Re[2];const yt=Re[3];yt!=null&&(m.la=yt,m.j.info("VER="+m.la));const vt=Re[4];vt!=null&&(m.Aa=vt,m.j.info("SVER="+m.Aa));const ks=Re[5];ks!=null&&typeof ks=="number"&&0<ks&&(v=1.5*ks,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const sn=c.g;if(sn){const wa=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wa){var F=v.h;F.g||wa.indexOf("spdy")==-1&&wa.indexOf("quic")==-1&&wa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Bl(F,F.h),F.h=null))}if(v.D){const Wl=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wl&&(v.ya=Wl,Ve(v.I,v.D,Wl))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var K=c;if(v.qa=mp(v,v.J?v.ia:null,v.W),K.K){qd(v.h,K);var Ne=K,ut=v.L;ut&&(Ne.I=ut),Ne.B&&(Fl(Ne),ha(Ne)),v.g=K}else up(v);0<m.i.length&&ya(m)}else Re[0]!="stop"&&Re[0]!="close"||Qr(m,7);else m.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Qr(m,7):Hl(m):Re[0]!="noop"&&m.l&&m.l.ta(Re),m.v=0)}}Si(4)}catch{}}var tb=class{constructor(c,f){this.g=c,this.map=f}};function Bd(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $d(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Hd(c){return c.h?1:c.g?c.g.size:0}function jl(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Bl(c,f){c.g?c.g.add(f):c.h=f}function qd(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Bd.prototype.cancel=function(){if(this.i=zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function zd(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return k(c.i)}function nb(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,v=0;v<m;v++)f.push(c[v]);return f}f=[],m=0;for(v in c)f[m++]=c[v];return f}function rb(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const v in c)f[m++]=v;return f}}}function Wd(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=rb(c),v=nb(c),D=v.length,F=0;F<D;F++)f.call(void 0,v[F],m&&m[F],c)}var Kd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var v=c[m].indexOf("="),D=null;if(0<=v){var F=c[m].substring(0,v);D=c[m].substring(v+1)}else F=c[m];f(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Gr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Gr){this.h=c.h,fa(this,c.j),this.o=c.o,this.g=c.g,da(this,c.s),this.l=c.l;var f=c.i,m=new Ni;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Gd(this,m),this.m=c.m}else c&&(f=String(c).match(Kd))?(this.h=!1,fa(this,f[1]||"",!0),this.o=Oi(f[2]||""),this.g=Oi(f[3]||"",!0),da(this,f[4]),this.l=Oi(f[5]||"",!0),Gd(this,f[6]||"",!0),this.m=Oi(f[7]||"")):(this.h=!1,this.i=new Ni(null,this.h))}Gr.prototype.toString=function(){var c=[],f=this.j;f&&c.push(xi(f,Qd,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(xi(f,Qd,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(xi(m,m.charAt(0)=="/"?ab:ob,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",xi(m,lb)),c.join("")};function Pn(c){return new Gr(c)}function fa(c,f,m){c.j=m?Oi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function da(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Gd(c,f,m){f instanceof Ni?(c.i=f,ub(c.i,c.h)):(m||(f=xi(f,cb)),c.i=new Ni(f,c.h))}function Ve(c,f,m){c.i.set(f,m)}function pa(c){return Ve(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Oi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function xi(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,ib),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ib(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Qd=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,cb=/[#\?@]/g,lb=/#/g;function Ni(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function tr(c){c.g||(c.g=new Map,c.h=0,c.i&&sb(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Ni.prototype,t.add=function(c,f){tr(this),this.i=null,c=Cs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Yd(c,f){tr(c),f=Cs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Xd(c,f){return tr(c),f=Cs(c,f),c.g.has(f)}t.forEach=function(c,f){tr(this),this.g.forEach(function(m,v){m.forEach(function(D){c.call(f,D,v,this)},this)},this)},t.na=function(){tr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const D=c[v];for(let F=0;F<D.length;F++)m.push(f[v])}return m},t.V=function(c){tr(this);let f=[];if(typeof c=="string")Xd(this,c)&&(f=f.concat(this.g.get(Cs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return tr(this),this.i=null,c=Cs(this,c),Xd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Jd(c,f,m){Yd(c,f),0<m.length&&(c.i=null,c.g.set(Cs(c,f),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const F=encodeURIComponent(String(v)),K=this.V(v);for(v=0;v<K.length;v++){var D=F;K[v]!==""&&(D+="="+encodeURIComponent(String(K[v]))),c.push(D)}}return this.i=c.join("&")};function Cs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function ub(c,f){f&&!c.j&&(tr(c),c.i=null,c.g.forEach(function(m,v){var D=v.toLowerCase();v!=D&&(Yd(this,v),Jd(this,D,m))},c)),c.j=f}function hb(c,f){const m=new Pi;if(a.Image){const v=new Image;v.onload=g(nr,m,"TestLoadImage: loaded",!0,f,v),v.onerror=g(nr,m,"TestLoadImage: error",!1,f,v),v.onabort=g(nr,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=g(nr,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function fb(c,f){const m=new Pi,v=new AbortController,D=setTimeout(()=>{v.abort(),nr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(D),F.ok?nr(m,"TestPingServer: ok",!0,f):nr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),nr(m,"TestPingServer: error",!1,f)})}function nr(c,f,m,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(m)}catch{}}function db(){this.g=new Yt}function pb(c,f,m){const v=m||"";try{Wd(c,function(D,F){let K=D;u(D)&&(K=As(D)),f.push(v+F+"="+encodeURIComponent(K))})}catch(D){throw f.push(v+"type="+encodeURIComponent("_badmap")),D}}function Di(c){this.l=c.Ub||null,this.j=c.eb||!1}R(Di,Rs),Di.prototype.g=function(){return new ma(this.l,this.j)},Di.prototype.i=function(c){return function(){return c}}({});function ma(c,f){se.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ma,se),t=ma.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Mi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Mi(this)),this.g&&(this.readyState=3,Mi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zd(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zd(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Li(this):Mi(this),this.readyState==3&&Zd(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Li(this))},t.Qa=function(c){this.g&&(this.response=c,Li(this))},t.ga=function(){this.g&&Li(this)};function Li(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Mi(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Mi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ep(c){let f="";return M(c,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function $l(c,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=ep(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Ve(c,f,m))}function Ge(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ge,se);var mb=/^https?$/i,gb=["POST","PUT"];t=Ge.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ll.g(),this.v=this.o?Pd(this.o):Pd(Ll),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){tp(this,F);return}if(c=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)m.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),D=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gb,f,void 0))||v||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of m)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){tp(this,F)}};function tp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,np(c),ga(c)}function np(c){c.A||(c.A=!0,ue(c,"complete"),ue(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ue(this,"complete"),ue(this,"abort"),ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ga(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rp(this):this.bb())},t.bb=function(){rp(this)};function rp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||kn(c)!=4||c.Z()!=2)){if(c.u&&kn(c)==4)Te(c.Ea,0,c);else if(ue(c,"readystatechange"),kn(c)==4){c.h=!1;try{const K=c.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=K===0){var D=String(c.D).match(Kd)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),v=!mb.test(D?D.toLowerCase():"")}m=v}if(m)ue(c,"complete"),ue(c,"success");else{c.m=6;try{var F=2<kn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",np(c)}}finally{ga(c)}}}}function ga(c,f){if(c.g){sp(c);const m=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ue(c,"ready");try{m.onreadystatechange=v}catch{}}}function sp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function kn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Rt(f)}};function ip(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function _b(c){const f={};c=(c.g&&2<=kn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(S(c[v]))continue;var m=C(c[v]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[D]||[];f[D]=F,F.push(m)}b(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function op(c){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vi("baseRetryDelayMs",5e3,c),this.cb=Vi("retryDelaySeedMs",1e4,c),this.Wa=Vi("forwardChannelMaxRetries",2,c),this.wa=Vi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Bd(c&&c.concurrentRequestLimit),this.Da=new db,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=op.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,v){St(0),this.W=c,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=mp(this,null,this.W),ya(this)};function Hl(c){if(ap(c),c.G==3){var f=c.U++,m=Pn(c.I);if(Ve(m,"SID",c.K),Ve(m,"RID",f),Ve(m,"TYPE","terminate"),Fi(c,m),f=new er(c,c.j,f),f.L=2,f.v=pa(Pn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=gp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ha(f)}pp(c)}function _a(c){c.g&&(zl(c),c.g.cancel(),c.g=null)}function ap(c){_a(c),c.u&&(a.clearTimeout(c.u),c.u=null),va(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function ya(c){if(!$d(c.h)&&!c.s){c.s=!0;var f=c.Ga;te||rn(),ie||(te(),ie=!0),He.add(f,c),c.B=0}}function yb(c,f){return Hd(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ci(p(c.Ga,c,f),dp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const D=new er(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),E(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=lp(this,D,f),m=Pn(this.I),Ve(m,"RID",c),Ve(m,"CVER",22),this.D&&Ve(m,"X-HTTP-Session-Id",this.D),Fi(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(ep(F)))+"&"+f:this.m&&$l(m,this.m,F)),Bl(this.h,D),this.Ua&&Ve(m,"TYPE","init"),this.P?(Ve(m,"$req",f),Ve(m,"SID","null"),D.T=!0,Vl(D,m,null)):Vl(D,m,f),this.G=2}}else this.G==3&&(c?cp(this,c):this.i.length==0||$d(this.h)||cp(this))};function cp(c,f){var m;f?m=f.l:m=c.U++;const v=Pn(c.I);Ve(v,"SID",c.K),Ve(v,"RID",m),Ve(v,"AID",c.T),Fi(c,v),c.m&&c.o&&$l(v,c.m,c.o),m=new er(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=lp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Bl(c.h,m),Vl(m,v,f)}function Fi(c,f){c.H&&M(c.H,function(m,v){Ve(f,v,m)}),c.l&&Wd({},function(m,v){Ve(f,v,m)})}function lp(c,f,m){m=Math.min(c.i.length,m);var v=c.l?p(c.l.Na,c.l,c):null;e:{var D=c.i;let F=-1;for(;;){const K=["count="+m];F==-1?0<m?(F=D[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let Ne=!0;for(let ut=0;ut<m;ut++){let Re=D[ut].g;const yt=D[ut].map;if(Re-=F,0>Re)F=Math.max(0,D[ut].g-100),Ne=!1;else try{pb(yt,K,"req"+Re+"_")}catch{v&&v(yt)}}if(Ne){v=K.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,v}function up(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;te||rn(),ie||(te(),ie=!0),He.add(f,c),c.v=0}}function ql(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ci(p(c.Fa,c),dp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,hp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ci(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),_a(this),hp(this))};function zl(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function hp(c){c.g=new er(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Pn(c.qa);Ve(f,"RID","rpc"),Ve(f,"SID",c.K),Ve(f,"AID",c.T),Ve(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ve(f,"TO",c.ja),Ve(f,"TYPE","xmlhttp"),Fi(c,f),c.m&&c.o&&$l(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=pa(Pn(f)),m.m=null,m.P=!0,Fd(m,c)}t.Za=function(){this.C!=null&&(this.C=null,_a(this),ql(this),St(19))};function va(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function fp(c,f){var m=null;if(c.g==f){va(c),zl(c),c.g=null;var v=2}else if(jl(c.h,f))m=f.D,qd(c.h,f),v=1;else return;if(c.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var D=c.B;v=ca(),ue(v,new Dd(v,m)),ya(c)}else up(c);else if(D=f.s,D==3||D==0&&0<f.X||!(v==1&&yb(c,f)||v==2&&ql(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),D){case 1:Qr(c,5);break;case 4:Qr(c,10);break;case 3:Qr(c,6);break;default:Qr(c,2)}}}function dp(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function Qr(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),v=c.Xa;const D=!v;v=new Gr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fa(v,"https"),pa(v),D?hb(v.toString(),m):fb(v.toString(),m)}else St(2);c.G=0,c.l&&c.l.sa(f),pp(c),ap(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function pp(c){if(c.G=0,c.ka=[],c.l){const f=zd(c.h);(f.length!=0||c.i.length!=0)&&(x(c.ka,f),x(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function mp(c,f,m){var v=m instanceof Gr?Pn(m):new Gr(m);if(v.g!="")f&&(v.g=f+"."+v.g),da(v,v.s);else{var D=a.location;v=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var F=new Gr(null);v&&fa(F,v),f&&(F.g=f),D&&da(F,D),m&&(F.l=m),v=F}return m=c.D,f=c.ya,m&&f&&Ve(v,m,f),Ve(v,"VER",c.la),Fi(c,v),v}function gp(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Ge(new Di({eb:m})):new Ge(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _p(){}t=_p.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ea(){}Ea.prototype.g=function(c,f){return new Ut(c,f)};function Ut(c,f){se.call(this),this.g=new op(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!S(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!S(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Ps(this)}R(Ut,se),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Hl(this.g)},Ut.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=As(c),c=m);f.i.push(new tb(f.Ya++,c)),f.G==3&&ya(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Hl(this.g),delete this.g,Ut.aa.N.call(this)};function yp(c){Nl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}R(yp,Nl);function vp(){Dl.call(this),this.status=1}R(vp,Dl);function Ps(c){this.g=c}R(Ps,_p),Ps.prototype.ua=function(){ue(this.g,"a")},Ps.prototype.ta=function(c){ue(this.g,new yp(c))},Ps.prototype.sa=function(c){ue(this.g,new vp)},Ps.prototype.ra=function(){ue(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,JE=function(){return new Ea},XE=function(){return ca()},YE=Wr,mh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},la.NO_ERROR=0,la.TIMEOUT=8,la.HTTP_ERROR=6,Za=la,Ld.COMPLETE="complete",QE=Ld,kd.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",se.prototype.listen=se.prototype.K,Ki=kd,GE=Di,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,KE=Ge}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const Pg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Pf("@firebase/firestore");function $i(){return ms.logLevel}function ne(t,...e){if(ms.logLevel<=we.DEBUG){const n=e.map(Bf);ms.debug(`Firestore (${wi}): ${t}`,...n)}}function qn(t,...e){if(ms.logLevel<=we.ERROR){const n=e.map(Bf);ms.error(`Firestore (${wi}): ${t}`,...n)}}function oi(t,...e){if(ms.logLevel<=we.WARN){const n=e.map(Bf);ms.warn(`Firestore (${wi}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function Me(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class r2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class s2{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new ZE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new wt(e)}}class i2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class o2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new i2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new a2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=l2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class No{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return No.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof No?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends No{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const u2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends No{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return u2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Be.fromString(e))}static fromName(e){return new he(Be.fromString(e).popFirst(5))}static empty(){return new he(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Be(e.slice()))}}function h2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Lr(s,he.empty(),e)}function f2(t){return new Lr(t.readTime,t.key,-1)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(ge.min(),he.empty(),-1)}static max(){return new Lr(ge.max(),he.empty(),-1)}}function d2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==p2)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function g2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ta(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $f{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$f.oe=-1;function hl(t){return t==null}function Pc(t){return t===0&&1/t==-1/0}function _2(t){return typeof t=="number"&&Number.isInteger(t)&&!Pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fa(this.root,e,this.comparator,!0)}}class Fa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Og(this.data.getIterator())}getIteratorFrom(e){return new Og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class Og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new mt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class n0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n0("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const y2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(Me(!!t),typeof t=="string"){let e=0;const n=y2.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qf(t){const e=t.mapValue.fields.__previous_value__;return Hf(e)?qf(e):e}function Do(t){const e=Mr(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _s(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hf(t)?4:w2(t)?9007199254740991:E2(t)?10:11:pe()}function In(t,e){if(t===e)return!0;const n=_s(t);if(n!==_s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Mr(s.timestampValue),a=Mr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gs(s.bytesValue).isEqual(gs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),a=Xe(i.doubleValue);return o===a?Pc(o)===Pc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(kg(o)!==kg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!In(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function Mo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function ci(t,e){if(t===e)return 0;const n=_s(t),r=_s(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Xe(i.integerValue||i.doubleValue),l=Xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return xg(t.timestampValue,e.timestampValue);case 4:return xg(Do(t),Do(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const a=gs(i),l=gs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Se(a[u],l[u]);if(h!==0)return h}return Se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Se(Xe(i.latitude),Xe(o.latitude));return a!==0?a:Se(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ng(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,R=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=Se(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:Ng(g,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ua.mapValue&&o===Ua.mapValue)return 0;if(i===Ua.mapValue)return 1;if(o===Ua.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Se(l[d],h[d]);if(p!==0)return p;const g=ci(a[l[d]],u[h[d]]);if(g!==0)return g}return Se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function xg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Mr(t),r=Mr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function Ng(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ci(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function li(t){return gh(t)}function gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gh(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function _h(t){return!!t&&"integerValue"in t}function zf(t){return!!t&&"arrayValue"in t}function Dg(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ec(t){return!!t&&"mapValue"in t}function E2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function w2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ec(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=co(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ec(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ec(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ts(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(co(this.value))}}function r0(t){const e=[];return Ts(t.fields,(n,r)=>{const s=new dt([n]);if(ec(r)){const i=r0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,ge.min(),ge.min(),ge.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,ge.min(),ge.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,ge.min(),ge.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kc{constructor(e,n){this.position=e,this.inclusive=n}}function Mg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=ci(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oc{constructor(e,n="asc"){this.field=e,this.dir=n}}function b2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class s0{}class tt extends s0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new I2(e,n,r):n==="array-contains"?new S2(e,r):n==="in"?new C2(e,r):n==="not-in"?new P2(e,r):n==="array-contains-any"?new k2(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new A2(e,r):new R2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ci(n,this.value)):n!==null&&_s(this.value)===_s(n)&&this.matchesComparison(ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends s0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new An(e,n)}matches(e){return i0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function i0(t){return t.op==="and"}function o0(t){return T2(t)&&i0(t)}function T2(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function yh(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+li(t.value);if(o0(t))return t.filters.map(e=>yh(e)).join(",");{const e=t.filters.map(n=>yh(n)).join(",");return`${t.op}(${e})`}}function a0(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof An?function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&a0(o,s.filters[a]),!0):!1}(t,e):void pe()}function c0(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${li(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(c0).join(" ,")+"}"}(t):"Filter"}class I2 extends tt{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class A2 extends tt{constructor(e,n){super(e,"in",n),this.keys=l0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R2 extends tt{constructor(e,n){super(e,"not-in",n),this.keys=l0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class S2 extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zf(n)&&Mo(n.arrayValue,this.value)}}class C2 extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class P2 extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class k2 extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Fg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new O2(t,e,n,r,s,i,o)}function Wf(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>li(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>li(r)).join(",")),e.ue=n}return e.ue}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!b2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vg(t.startAt,e.startAt)&&Vg(t.endAt,e.endAt)}function vh(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function x2(t,e,n,r,s,i,o,a){return new fl(t,e,n,r,s,i,o,a)}function u0(t){return new fl(t)}function Ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function N2(t){return t.collectionGroup!==null}function lo(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new mt(dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Oc(i,r))}),n.has(dt.keyField().canonicalString())||e.ce.push(new Oc(dt.keyField(),r))}return e.ce}function wn(t){const e=_e(t);return e.le||(e.le=D2(e,lo(t))),e.le}function D2(t,e){if(t.limitType==="F")return Fg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oc(s.field,i)});const n=t.endAt?new kc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kc(t.startAt.position,t.startAt.inclusive):null;return Fg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Eh(t,e,n){return new fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dl(t,e){return Kf(wn(t),wn(e))&&t.limitType===e.limitType}function h0(t){return`${Wf(wn(t))}|lt:${t.limitType}`}function Ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>c0(s)).join(", ")}]`),hl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>li(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>li(s)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function pl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of lo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Mg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,lo(r),s)||r.endAt&&!function(o,a,l){const u=Mg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,lo(r),s))}(t,e)}function L2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function f0(t){return(e,n)=>{let r=!1;for(const s of lo(t)){const i=M2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function M2(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?ci(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return t0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=new Ke(he.comparator);function zn(){return V2}const d0=new Ke(he.comparator);function Gi(...t){let e=d0;for(const n of t)e=e.insert(n.key,n);return e}function p0(t){let e=d0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rs(){return uo()}function m0(){return uo()}function uo(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const F2=new Ke(he.comparator),U2=new mt(he.comparator);function ve(...t){let e=U2;for(const n of t)e=e.add(n);return e}const j2=new mt(Se);function B2(){return j2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function g0(t){return{integerValue:""+t}}function $2(t,e){return _2(e)?g0(e):Gf(t,e)}/**
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
 */class ml{constructor(){this._=void 0}}function H2(t,e,n){return t instanceof xc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hf(i)&&(i=qf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Vo?y0(t,e):t instanceof Fo?v0(t,e):function(s,i){const o=_0(s,i),a=jg(o)+jg(s.Pe);return _h(o)&&_h(s.Pe)?g0(a):Gf(s.serializer,a)}(t,e)}function q2(t,e,n){return t instanceof Vo?y0(t,e):t instanceof Fo?v0(t,e):n}function _0(t,e){return t instanceof Nc?function(r){return _h(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xc extends ml{}class Vo extends ml{constructor(e){super(),this.elements=e}}function y0(t,e){const n=E0(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends ml{constructor(e){super(),this.elements=e}}function v0(t,e){let n=E0(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Nc extends ml{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jg(t){return Xe(t.integerValue||t.doubleValue)}function E0(t){return zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function z2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Vo&&s instanceof Vo||r instanceof Fo&&s instanceof Fo?ai(r.elements,s.elements,In):r instanceof Nc&&s instanceof Nc?In(r.Pe,s.Pe):r instanceof xc&&s instanceof xc}(t.transform,e.transform)}class W2{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gl{}function w0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qf(t.key,tn.none()):new na(t.key,t.data,tn.none());{const n=t.data,r=Dt.empty();let s=new mt(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(t.key,r,new Ht(s.toArray()),tn.none())}}function K2(t,e,n){t instanceof na?function(s,i,o){const a=s.value.clone(),l=$g(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(s,i,o){if(!tc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=$g(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(b0(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof na?function(i,o,a,l){if(!tc(i.precondition,o))return a;const u=i.value.clone(),h=Hg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,o,a,l){if(!tc(i.precondition,o))return a;const u=Hg(i.fieldTransforms,l,o),h=o.data;return h.setAll(b0(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return tc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function G2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=_0(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function Bg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,(i,o)=>z2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends gl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends gl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $g(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,q2(o,a,n[s]))}return r}function Hg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,H2(i,o,e))}return r}class Qf extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q2 extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&K2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=m0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=w0(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,(n,r)=>Bg(n,r))&&ai(this.baseMutations,e.baseMutations,(n,r)=>Bg(n,r))}}class Yf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return F2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yf(e,n,r,s)}}/**
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
 */class X2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,be;function Z2(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function T0(t){if(t===void 0)return qn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ze.OK:return $.OK;case Ze.CANCELLED:return $.CANCELLED;case Ze.UNKNOWN:return $.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return $.INTERNAL;case Ze.UNAVAILABLE:return $.UNAVAILABLE;case Ze.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ze.NOT_FOUND:return $.NOT_FOUND;case Ze.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ze.ABORTED:return $.ABORTED;case Ze.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ze.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(be=Ze||(Ze={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ex(){return new TextEncoder}/**
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
 */const tx=new us([4294967295,4294967295],0);function qg(t){const e=ex().encode(t),n=new WE;return n.update(e),new Uint8Array(n.digest())}function zg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new us([n,r],0),new us([s,i],0)]}class Xf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qi(`Invalid padding: ${n}`);if(r<0)throw new Qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=us.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(us.fromNumber(r)));return s.compare(tx)===1&&(s=new us([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=qg(e),[r,s]=zg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=qg(e),[r,s]=zg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _l(ge.min(),s,new Ke(Se),zn(),ve())}}class ra{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class I0{constructor(e,n){this.targetId=e,this.me=n}}class A0{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Wg{constructor(){this.fe=0,this.ge=Gg(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new ra(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Gg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nx{constructor(e){this.Le=e,this.Be=new Map,this.ke=zn(),this.qe=Kg(),this.Qe=new Ke(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(vh(i))if(r===0){const o=new he(i.path);this.Ue(n,o,bt.newNoDocument(o,ge.min()))}else Me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=gs(r).toUint8Array()}catch(l){if(l instanceof n0)return oi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Xf(o,s,i)}catch(l){return oi(l instanceof Qi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&vh(a.target)){const l=new he(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,bt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new _l(e,n,this.Qe,this.ke,r);return this.ke=zn(),this.qe=Kg(),this.Qe=new Ke(Se),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Kg(){return new Ke(he.comparator)}function Gg(){return new Ke(he.comparator)}const rx={asc:"ASCENDING",desc:"DESCENDING"},sx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ix={and:"AND",or:"OR"};class ox{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wh(t,e){return t.useProto3Json||hl(e)?e:{value:e}}function Dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ax(t,e){return Dc(t,e.toTimestamp())}function bn(t){return Me(!!t),ge.fromTimestamp(function(n){const r=Mr(n);return new rt(r.seconds,r.nanos)}(t))}function Jf(t,e){return bh(t,e).canonicalString()}function bh(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function S0(t){const e=Be.fromString(t);return Me(x0(e)),e}function Th(t,e){return Jf(t.databaseId,e.path)}function gu(t,e){const n=S0(e);if(n.get(1)!==t.databaseId.projectId)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(P0(n))}function C0(t,e){return Jf(t.databaseId,e)}function cx(t){const e=S0(t);return e.length===4?Be.emptyPath():P0(e)}function Ih(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P0(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qg(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function lx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string"),_t.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),_t.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:T0(u.code);return new ce(h,u.message||"")}(o);n=new A0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gu(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ge.min(),a=new Dt({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new nc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gu(t,r.document),i=r.readTime?bn(r.readTime):ge.min(),o=bt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new nc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gu(t,r.document),i=r.removedTargetIds||[];n=new nc([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new J2(s,i),a=r.targetId;n=new I0(a,o)}}return n}function ux(t,e){let n;if(e instanceof na)n={update:Qg(t,e.key,e.value)};else if(e instanceof Qf)n={delete:Th(t,e.key)};else if(e instanceof zr)n={update:Qg(t,e.key,e.data),updateMask:vx(e.fieldMask)};else{if(!(e instanceof Q2))return pe();n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof xc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ax(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function hx(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(ge.min())&&(o=bn(i)),new W2(o,s.transformResults||[])}(n,e))):[]}function fx(t,e){return{documents:[C0(t,e.path)]}}function dx(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=C0(t,s);const i=function(u){if(u.length!==0)return O0(An.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ls(p.field),direction:gx(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function px(t){let e=cx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=k0(d);return p instanceof An&&o0(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(R){return new Oc(Ms(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,hl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new kc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new kc(g,p)}(n.endAt)),x2(e,s,o,i,a,"F",l,u)}function mx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ms(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ms(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(Ms(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>k0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function gx(t){return rx[t]}function _x(t){return sx[t]}function yx(t){return ix[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function Ms(t){return dt.fromServerFormat(t.fieldPath)}function O0(t){return t instanceof tt?function(n){if(n.op==="=="){if(Lg(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NAN"}};if(Dg(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lg(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NAN"}};if(Dg(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(n.field),op:_x(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(s=>O0(s));return r.length===1?r[0]:{compositeFilter:{op:yx(n.op),filters:r}}}(t):pe()}function vx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.ct=e}}function wx(t){const e=px({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.un=new Tx}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Lr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class Tx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new mt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new mt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ui(0)}static kn(){return new ui(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ax{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ho(r.mutation,s,Ht.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=zn();const o=uo(),a=function(){return uo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof zr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ho(h.mutation,u,h.mutation.getFieldMask(),rt.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new Ax(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=uo();let s=new Ke((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Ht.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||ve()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=m0();h.forEach(p=>{if(!i.has(p)){const g=w0(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):N2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(rs());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:a,changes:p0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=Gi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Gi();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(d,p){return new fl(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let a=Gi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&ho(h.mutation,u,Ht.empty(),rt.now()),pl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:wx(s.bundledQuery),readTime:bn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class Cx{constructor(){this.overlays=new Ke(he.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rs();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=rs(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=rs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=rs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new X2(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Px{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.Tr=new mt(it.Er),this.dr=new mt(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new it(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new he(new Be([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new he(new Be([])),r=new it(n,e),s=new it(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return he.comparator(e.key,n.key)||Se(e.wr,n.wr)}static Ar(e,n){return Se(e.wr,n.wr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(it.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Y2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(Se);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new it(new he(i),0);let a=new mt(Se);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new it(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.Mr=e,this.docs=function(){return new Ke(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=zn();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||d2(f2(h),r)<=0||(s.has(h.key)||pl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xx(this)}getSize(e){return H.resolve(this.size)}}class xx extends Ix{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.persistence=e,this.Nr=new bi(n=>Wf(n),Kf),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zf,this.targetCount=0,this.kr=ui.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ui(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new $f(0),this.Kr=!1,this.Kr=!0,this.$r=new Px,this.referenceDelegate=e(this),this.Ur=new Nx(this),this.indexManager=new bx,this.remoteDocumentCache=function(s){return new Ox(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ex(n),this.Gr=new Sx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Cx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new kx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new Lx(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Lx extends m2{constructor(e){super(),this.currentSequenceNumber=e}}class ed{constructor(e){this.persistence=e,this.Jr=new Zf,this.Yr=null}static Zr(e){return new ed(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=he.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new td(e,n.fromCache,r,s)}}/**
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
 */class Mx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gC()?8:g2(At())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Mx;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?($i()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):($i()<=we.DEBUG&&ne("QueryEngine","Query:",Ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?($i()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):H.resolve())}Yi(e,n){if(Ug(n))return H.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Eh(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,Eh(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return Ug(n)||s.isEqual(ge.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):($i()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ds(n)),this.rs(e,o,n,h2(s,-1)).next(a=>a))})}ts(e,n){let r=new mt(f0(e));return n.forEach((s,i)=>{pl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return $i()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ds(n)),this.Ji.getDocumentsMatchingQuery(e,n,Lr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ke(Se),this._s=new bi(i=>Wf(i),Kf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Ux(t,e,n,r){return new Fx(t,e,n,r)}async function N0(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function jx(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=H.resolve();return p.forEach(R=>{g=g.next(()=>h.getEntry(l,R)).next(k=>{const x=u.docVersions.get(R);Me(x!==null),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function D0(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Bx(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(_t.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(i,g))});let l=zn(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push($x(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function $x(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=zn();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Hx(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qx(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ah(t,e,n){const r=_e(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ta(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Yg(t,e,n){const r=_e(t);let s=ge.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=_e(l),p=d._s.get(h);return p!==void 0?H.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(r,o,wn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ve())).next(a=>(zx(r,L2(e),a),{documents:a,Ts:i})))}function zx(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Xg{constructor(){this.activeTargetIds=B2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wx{constructor(){this.so=new Xg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ja=null;function _u(){return ja===null?ja=function(){return 268435456+Math.round(2147483648*Math.random())}():ja++,"0x"+ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class Yx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=_u(),l=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw oi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Gx[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=_u();return new Promise((o,a)=>{const l=new KE;l.setWithCredentials(!0),l.listenOnce(QE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Za.NO_ERROR:const h=l.getResponseJson();ne(Et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Za.TIMEOUT:ne(Et,`RPC '${e}' ${i} timed out`),a(new ce($.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const d=l.getStatus();if(ne(Et,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const R=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(N)>=0?N:$.UNKNOWN}(g.status);a(new ce(R,g.message))}else a(new ce($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ne(Et,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(Et,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=_u(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JE(),a=XE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new GE({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ne(Et,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const R=new Qx({Io:x=>{g?ne(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(p||(ne(Et,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),ne(Et,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},To:()=>d.close()}),k=(x,N,S)=>{x.listen(N,w=>{try{S(w)}catch(O){setTimeout(()=>{throw O},0)}})};return k(d,Ki.EventType.OPEN,()=>{g||(ne(Et,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),k(d,Ki.EventType.CLOSE,()=>{g||(g=!0,ne(Et,`RPC '${e}' stream ${s} transport closed`),R.So())}),k(d,Ki.EventType.ERROR,x=>{g||(g=!0,oi(Et,`RPC '${e}' stream ${s} transport errored:`,x),R.So(new ce($.UNAVAILABLE,"The operation could not be completed")))}),k(d,Ki.EventType.MESSAGE,x=>{var N;if(!g){const S=x.data[0];Me(!!S);const w=S,O=w.error||((N=w[0])===null||N===void 0?void 0:N.error);if(O){ne(Et,`RPC '${e}' stream ${s} received error:`,O);const L=O.status;let M=function(_){const E=Ze[_];if(E!==void 0)return T0(E)}(L),b=O.message;M===void 0&&(M=$.INTERNAL,b="Unknown error status: "+L+" with message "+O.message),g=!0,R.So(new ce(M,b)),d.close()}else ne(Et,`RPC '${e}' stream ${s} received:`,S),R.bo(S)}}),k(a,YE.STAT_EVENT,x=>{x.stat===mh.PROXY?ne(Et,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===mh.NOPROXY&&ne(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function yu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){return new ox(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new L0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ce($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xx extends M0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=lx(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?bn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ih(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=vh(l)?{documents:fx(i,l)}:{query:dx(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R0(i,o.resumeToken);const u=wh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Dc(i,o.snapshotVersion.toTimestamp());const u=wh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=mx(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ih(this.serializer),n.removeTarget=e,this.a_(n)}}class Jx extends M0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=hx(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ih(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ux(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,bh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,bh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class eN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qn(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Is(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.L_.add(4),await sa(u),u.q_.set("Unknown"),u.L_.delete(4),await vl(u)}(this))})}),this.q_=new eN(r,s)}}async function vl(t){if(Is(t))for(const e of t.B_)await e(!0)}async function sa(t){for(const e of t.B_)await e(!1)}function V0(t,e){const n=_e(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),id(n)?sd(n):Ti(n).r_()&&rd(n,e))}function nd(t,e){const n=_e(t),r=Ti(n);n.N_.delete(e),r.r_()&&F0(n,e),n.N_.size===0&&(r.r_()?r.o_():Is(n)&&n.q_.set("Unknown"))}function rd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ti(t).A_(e)}function F0(t,e){t.Q_.xe(e),Ti(t).R_(e)}function sd(t){t.Q_=new nx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ti(t).start(),t.q_.v_()}function id(t){return Is(t)&&!Ti(t).n_()&&t.N_.size>0}function Is(t){return _e(t).L_.size===0}function U0(t){t.Q_=void 0}async function nN(t){t.q_.set("Online")}async function rN(t){t.N_.forEach((e,n)=>{rd(t,e)})}async function sN(t,e){U0(t),id(t)?(t.q_.M_(e),sd(t)):t.q_.set("Unknown")}async function iN(t,e,n){if(t.q_.set("Online"),e instanceof A0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lc(t,r)}else if(e instanceof nc?t.Q_.Ke(e):e instanceof I0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await D0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(_t.EMPTY_BYTE_STRING,h.snapshotVersion)),F0(i,l);const d=new br(h.target,l,u,h.sequenceNumber);rd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Lc(t,r)}}async function Lc(t,e,n){if(!ta(e))throw e;t.L_.add(1),await sa(t),t.q_.set("Offline"),n||(n=()=>D0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vl(t)})}function j0(t,e){return e().catch(n=>Lc(t,n,e))}async function El(t){const e=_e(t),n=Vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;oN(e);)try{const s=await Hx(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,aN(e,s)}catch(s){await Lc(e,s)}B0(e)&&$0(e)}function oN(t){return Is(t)&&t.O_.length<10}function aN(t,e){t.O_.push(e);const n=Vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function B0(t){return Is(t)&&!Vr(t).n_()&&t.O_.length>0}function $0(t){Vr(t).start()}async function cN(t){Vr(t).p_()}async function lN(t){const e=Vr(t);for(const n of t.O_)e.m_(n.mutations)}async function uN(t,e,n){const r=t.O_.shift(),s=Yf.from(r,e,n);await j0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await El(t)}async function hN(t,e){e&&Vr(t).V_&&await async function(r,s){if(function(o){return Z2(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();Vr(r).s_(),await j0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await El(r)}}(t,e),B0(t)&&$0(t)}async function Zg(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Is(n);n.L_.add(3),await sa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vl(n)}async function fN(t,e){const n=_e(t);e?(n.L_.delete(2),await vl(n)):e||(n.L_.add(2),await sa(n),n.q_.set("Unknown"))}function Ti(t){return t.K_||(t.K_=function(n,r,s){const i=_e(n);return i.w_(),new Xx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:nN.bind(null,t),Ro:rN.bind(null,t),mo:sN.bind(null,t),d_:iN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),id(t)?sd(t):t.q_.set("Unknown")):(await t.K_.stop(),U0(t))})),t.K_}function Vr(t){return t.U_||(t.U_=function(n,r,s){const i=_e(n);return i.w_(),new Jx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cN.bind(null,t),mo:hN.bind(null,t),f_:lN.bind(null,t),g_:uN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await El(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new od(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ad(t,e){if(qn("AsyncQueue",`${e}: ${t}`),ta(t))return new ce($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Gi(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.W_=new Ke(he.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hi(e,n,Qs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class pN{constructor(){this.queries=t_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=t_(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ce($.ABORTED,"Firestore shutting down"))}}function t_(){return new bi(t=>h0(t),dl)}async function mN(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new dN,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=ad(o,`Initialization of query '${Ds(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&cd(n)}async function gN(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _N(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&cd(n)}function yN(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function cd(t){t.Y_.forEach(e=>{e.next()})}var Rh,n_;(n_=Rh||(Rh={})).ea="default",n_.Cache="cache";class vN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.key=e}}class q0{constructor(e){this.key=e}}class EN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=f0(e),this.Ra=new Qs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new e_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=pl(this.query,d)?d:null,R=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?R!==k&&(r.track({type:3,doc:g}),x=!0):this.ga(p,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),x=!0):p&&!g&&(r.track({type:1,doc:p}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(g,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return k(g)-k(R)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new hi(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new e_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new q0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new H0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return hi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bN{constructor(e){this.key=e,this.va=!1}}class TN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new bi(a=>h0(a),dl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ke(he.comparator),this.Na=new Map,this.La=new Zf,this.Ba={},this.ka=new Map,this.qa=ui.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function IN(t,e,n=!0){const r=Y0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await z0(r,e,n,!0),s}async function AN(t,e){const n=Y0(t);await z0(n,e,!0,!1)}async function z0(t,e,n,r){const s=await qx(t.localStore,wn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await RN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&V0(t.remoteStore,s),a}async function RN(t,e,n,r,s){t.Ka=(d,p,g)=>async function(k,x,N,S){let w=x.view.ma(N);w.ns&&(w=await Yg(k.localStore,x.query,!1).then(({documents:b})=>x.view.ma(b,w)));const O=S&&S.targetChanges.get(x.targetId),L=S&&S.targetMismatches.get(x.targetId)!=null,M=x.view.applyChanges(w,k.isPrimaryClient,O,L);return s_(k,x.targetId,M.wa),M.snapshot}(t,d,p,g);const i=await Yg(t.localStore,e,!0),o=new EN(e,i.Ts),a=o.ma(i.documents),l=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);s_(t,n,u.wa);const h=new wN(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function SN(t,e,n){const r=_e(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!dl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ah(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&nd(r.remoteStore,s.targetId),Sh(r,s.targetId)}).catch(ea)):(Sh(r,s.targetId),await Ah(r.localStore,s.targetId,!0))}async function CN(t,e){const n=_e(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nd(n.remoteStore,r.targetId))}async function PN(t,e,n){const r=MN(t);try{const s=await function(o,a){const l=_e(o),u=rt.now(),h=a.reduce((g,R)=>g.add(R.key),ve());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=zn(),k=ve();return l.cs.getEntries(g,h).next(x=>{R=x,R.forEach((N,S)=>{S.isValidDocument()||(k=k.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,R)).next(x=>{d=x;const N=[];for(const S of a){const w=G2(S,d.get(S.key).overlayedDocument);w!=null&&N.push(new zr(S.key,w,r0(w.value.mapValue),tn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,a)}).next(x=>{p=x;const N=x.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:p.batchId,changes:p0(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ke(Se)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await ia(r,s.changes),await El(r.remoteStore)}catch(s){const i=ad(s,"Failed to persist write");n.reject(i)}}async function W0(t,e){const n=_e(t);try{const r=await Bx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Me(o.va):s.removedDocuments.size>0&&(Me(o.va),o.va=!1))}),await ia(n,r,e)}catch(r){await ea(r)}}function r_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&cd(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kN(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ke(he.comparator);o=o.insert(i,bt.newNoDocument(i,ge.min()));const a=ve().add(i),l=new _l(ge.min(),new Map,new Ke(Se),o,a);await W0(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),ld(r)}else await Ah(r.localStore,e,!1).then(()=>Sh(r,e,n)).catch(ea)}async function ON(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await jx(n.localStore,e);G0(n,r,null),K0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ia(n,s)}catch(s){await ea(s)}}async function xN(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Me(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);G0(r,e,n),K0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ia(r,s)}catch(s){await ea(s)}}function K0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function G0(t,e,n){const r=_e(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Sh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Q0(t,r)})}function Q0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(nd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ld(t))}function s_(t,e,n){for(const r of n)r instanceof H0?(t.La.addReference(r.key,e),NN(t,r)):r instanceof q0?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Q0(t,r.key)):pe()}function NN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),ld(t))}function ld(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new he(Be.fromString(e)),r=t.qa.next();t.Na.set(r,new bN(n)),t.Oa=t.Oa.insert(n,r),V0(t.remoteStore,new br(wn(u0(n.path)),r,"TargetPurposeLimboResolution",$f.oe))}}async function ia(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=td.Wi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>H.forEach(u,p=>H.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>H.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!ta(d))throw d;ne("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.os.get(p),R=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(R);h.os=h.os.insert(p,k)}}}(r.localStore,i))}async function DN(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await N0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new ce($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ia(n,r.hs)}}function LN(t,e){const n=_e(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function Y0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kN.bind(null,e),e.Ca.d_=_N.bind(null,e.eventManager),e.Ca.$a=yN.bind(null,e.eventManager),e}function MN(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ON.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xN.bind(null,e),e}class i_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Ux(this.persistence,new Vx,e.initialUser,this.serializer)}createPersistence(e){return new Dx(ed.Zr,this.serializer)}createSharedClientState(e){return new Wx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DN.bind(null,this.syncEngine),await fN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pN}()}createDatastore(e){const n=yl(e.databaseInfo.databaseId),r=function(i){return new Yx(i)}(e.databaseInfo);return function(i,o,a,l){return new Zx(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new tN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>r_(this.syncEngine,n,0),function(){return Jg.D()?new Jg:new Kx}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new TN(s,i,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);ne("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await sa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=e0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ne("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ne("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ad(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vu(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await N0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BN(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zg(e.remoteStore,s)),t._onlineComponents=e}function jN(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await vu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jN(n))throw n;oi("Error using user provided cache. Falling back to memory cache: "+n),await vu(t,new i_)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await vu(t,new i_);return t._offlineComponents}async function X0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await o_(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await o_(t,new VN))),t._onlineComponents}function $N(t){return X0(t).then(e=>e.syncEngine)}async function HN(t){const e=await X0(t),n=e.eventManager;return n.onListen=IN.bind(null,e.syncEngine),n.onUnlisten=SN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CN.bind(null,e.syncEngine),n}function qN(t,e,n={}){const r=new Or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new FN({next:p=>{o.enqueueAndForget(()=>gN(i,d)),p.fromCache&&l.source==="server"?u.reject(new ce($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new vN(a,h,{includeMetadataChanges:!0,_a:!0});return mN(i,d)}(await HN(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function J0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t,e,n){if(!n)throw new ce($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zN(t,e,n,r){if(e===!0&&r===!0)throw new ce($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c_(t){if(!he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function l_(t){if(he.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function fi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ud(t);throw new ce($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new n2;switch(r.type){case"firstParty":return new o2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=a_.get(n);r&&(ne("ComponentProvider","Removing Datastore"),a_.delete(n),r.terminate())}(this),Promise.resolve()}}function WN(t,e,n,r={}){var s;const i=(t=fi(t,wl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=wt.MOCK_USER;else{a=uC(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(u)}t._authCredentials=new r2(new ZE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bl(this.firestore,e,this._query)}}class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class xr extends bl{constructor(e,n,r){super(e,n,u0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new he(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function MV(t,e,...n){if(t=lt(t),Z0("collection","path",e),t instanceof wl){const r=Be.fromString(e,...n);return l_(r),new xr(t,null,r)}{if(!(t instanceof nn||t instanceof xr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return l_(r),new xr(t.firestore,null,r)}}function VV(t,e,...n){if(t=lt(t),arguments.length===1&&(e=e0.newId()),Z0("doc","path",e),t instanceof wl){const r=Be.fromString(e,...n);return c_(r),new nn(t,null,new he(r))}{if(!(t instanceof nn||t instanceof xr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return c_(r),new nn(t.firestore,t instanceof xr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new L0(this,"async_queue_retry"),this.Eu=()=>{const n=yu();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=yu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=yu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Or;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ta(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw qn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=od.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&pe()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Tl extends wl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new KN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ew(this),this._firestoreClient.terminate()}}function GN(t,e){const n=typeof t=="object"?t:lE(),r=typeof t=="string"?t:"(default)",s=Of(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cC("firestore");i&&WN(s,...i)}return s}function hd(t){return t._firestoreClient||ew(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ew(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new v2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,J0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new UN(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new di(_t.fromBase64String(e))}catch(n){throw new ce($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new di(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class pd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=/^__.*__$/;class YN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class md{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Mc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(nw(this.wu)&&QN.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class XN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yl(e)}Nu(e,n,r,s=!1){return new md({wu:e,methodName:n,Ou:r,path:dt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rw(t){const e=t._freezeSettings(),n=yl(t._databaseId);return new XN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sw(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);gd("Data must be an object, but it was:",o,r);const a=iw(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=Ch(e,d,n);if(!o.contains(p))throw new ce($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);aw(h,p)||h.push(p)}l=new Ht(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new YN(new Dt(a),l,u)}class Al extends fd{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Al}}function JN(t,e,n,r){const s=t.Nu(1,e,n);gd("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();Ts(r,(l,u)=>{const h=_d(e,l,n);u=lt(u);const d=s.Cu(h);if(u instanceof Al)i.push(h);else{const p=Rl(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Ht(i);return new tw(o,a,s.fieldTransforms)}function ZN(t,e,n,r,s,i){const o=t.Nu(1,e,n),a=[Ch(e,r,n)],l=[s];if(i.length%2!=0)throw new ce($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Ch(e,i[p])),l.push(i[p+1]);const u=[],h=Dt.empty();for(let p=a.length-1;p>=0;--p)if(!aw(u,a[p])){const g=a[p];let R=l[p];R=lt(R);const k=o.Cu(g);if(R instanceof Al)u.push(g);else{const x=Rl(R,k);x!=null&&(u.push(g),h.set(g,x))}}const d=new Ht(u);return new tw(h,d,o.fieldTransforms)}function Rl(t,e){if(ow(t=lt(t)))return gd("Unsupported field value:",e,t),iw(t,e);if(t instanceof fd)return function(r,s){if(!nw(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Rl(a,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:Dc(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dc(s.serializer,i)}}if(r instanceof dd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof di)return{bytesValue:R0(s.serializer,r._byteString)};if(r instanceof nn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return Gf(a.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${ud(r)}`)}(t,e)}function iw(t,e){const n={};return t0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(t,(r,s)=>{const i=Rl(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ow(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof dd||t instanceof di||t instanceof nn||t instanceof fd||t instanceof pd)}function gd(t,e,n){if(!ow(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ud(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Ch(t,e,n){if((e=lt(e))instanceof Il)return e._internalPath;if(typeof e=="string")return _d(t,e);throw Mc("Field path arguments must be of type string or ",t,!1,void 0,n)}const eD=new RegExp("[~\\*/\\[\\]]");function _d(t,e,n){if(e.search(eD)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Il(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce($.INVALID_ARGUMENT,a+t+l)}function aw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tD extends cw{data(){return super.data()}}function lw(t,e){return typeof e=="string"?_d(t,e):e instanceof Il?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rD{convertValue(e,n="none"){switch(_s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ts(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new pd(i)}convertGeoPoint(e){return new dd(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=Mr(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Me(x0(r));const s=new Lo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sD extends cw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rc extends sD{data(e={}){return super.data(e)}}class iD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ba(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rc(this._firestore,this._userDataWriter,r.key,r,new Ba(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new rc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ba(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new rc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ba(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:oD(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class aD extends rD{constructor(e){super(),this.firestore=e}convertBytes(e){return new di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function FV(t){t=fi(t,bl);const e=fi(t.firestore,Tl),n=hd(e),r=new aD(e);return nD(t._query),qN(n,t._query).then(s=>new iD(e,r,t,s))}function UV(t,e,n){t=fi(t,nn);const r=fi(t.firestore,Tl),s=uw(t.converter,e,n);return hw(r,[sw(rw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function hw(t,e){return function(r,s){const i=new Or;return r.asyncQueue.enqueueAndForget(async()=>PN(await $N(r),s,i)),i.promise}(hd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=rw(e)}set(e,n,r){this._verifyNotCommitted();const s=Eu(e,this._firestore),i=uw(s.converter,n,r),o=sw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,tn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Eu(e,this._firestore);let o;return o=typeof(n=lt(n))=="string"||n instanceof Il?ZN(this._dataReader,"WriteBatch.update",i._key,n,r,s):JN(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,tn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Eu(e,this._firestore);return this._mutations=this._mutations.concat(new Qf(n._key,tn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Eu(t,e){if((t=lt(t)).firestore!==e)throw new ce($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jV(t){return hd(t=fi(t,Tl)),new cD(t,e=>hw(t,e))}(function(e,n=!0){(function(s){wi=s})(yi),si(new ds("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Tl(new s2(r.getProvider("auth-internal")),new c2(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pr(Pg,"4.7.0",e),Pr(Pg,"4.7.0","esm2017")})();const lD=Wt(t=>{const e=ws(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=cE(n),s=qO(r),i=GN(r);t.provide("auth",s),t.provide("firestore",i)}),h_=()=>{};let yd={},fw={},dw=null,pw={mark:h_,measure:h_};try{typeof window<"u"&&(yd=window),typeof document<"u"&&(fw=document),typeof MutationObserver<"u"&&(dw=MutationObserver),typeof performance<"u"&&(pw=performance)}catch{}const{userAgent:f_=""}=yd.navigator||{},Fr=yd,Fe=fw,d_=dw,$a=pw;Fr.document;const Xn=!!Fe.documentElement&&!!Fe.head&&typeof Fe.addEventListener=="function"&&typeof Fe.createElement=="function",mw=~f_.indexOf("MSIE")||~f_.indexOf("Trident/");var $e="classic",gw="duotone",qt="sharp",zt="sharp-duotone",uD=[$e,gw,qt,zt],hD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},p_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fD=["kit"],dD=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,pD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,mD={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},gD={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},_D={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},yD={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},vD={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ED={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},_w={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},wD=["solid","regular","light","thin","duotone","brands"],yw=[1,2,3,4,5,6,7,8,9,10],bD=yw.concat([11,12,13,14,15,16,17,18,19,20]),Yi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},TD=[...Object.keys(yD),...wD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yi.GROUP,Yi.SWAP_OPACITY,Yi.PRIMARY,Yi.SECONDARY].concat(yw.map(t=>"".concat(t,"x"))).concat(bD.map(t=>"w-".concat(t))),ID={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},AD={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},RD={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},m_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Wn="___FONT_AWESOME___",Ph=16,vw="fa",Ew="svg-inline--fa",ys="data-fa-i2svg",kh="data-fa-pseudo-element",SD="data-fa-pseudo-element-pending",vd="data-prefix",Ed="data-icon",g_="fontawesome-i2svg",CD="async",PD=["HTML","HEAD","STYLE","SCRIPT"],ww=(()=>{try{return!0}catch{return!1}})(),bw=[$e,qt,zt];function oa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[$e]}})}const Tw={..._w};Tw[$e]={..._w[$e],...p_.kit,...p_["kit-duotone"]};const hs=oa(Tw),Oh={...ED};Oh[$e]={...Oh[$e],...m_.kit,...m_["kit-duotone"]};const Uo=oa(Oh),xh={...vD};xh[$e]={...xh[$e],...RD.kit};const fs=oa(xh),Nh={..._D};Nh[$e]={...Nh[$e],...AD.kit};const kD=oa(Nh),OD=dD,Iw="fa-layers-text",xD=pD,ND={...hD};oa(ND);const DD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wu=Yi,pi=new Set;Object.keys(Uo[$e]).map(pi.add.bind(pi));Object.keys(Uo[qt]).map(pi.add.bind(pi));Object.keys(Uo[zt]).map(pi.add.bind(pi));const LD=[...fD,...TD],fo=Fr.FontAwesomeConfig||{};function MD(t){var e=Fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function VD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Fe&&typeof Fe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=VD(MD(n));s!=null&&(fo[r]=s)});const Aw={styleDefault:"solid",familyDefault:"classic",cssPrefix:vw,replacementClass:Ew,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fo.familyPrefix&&(fo.cssPrefix=fo.familyPrefix);const mi={...Aw,...fo};mi.autoReplaceSvg||(mi.observeMutations=!1);const re={};Object.keys(Aw).forEach(t=>{Object.defineProperty(re,t,{enumerable:!0,set:function(e){mi[t]=e,po.forEach(n=>n(re))},get:function(){return mi[t]}})});Object.defineProperty(re,"familyPrefix",{enumerable:!0,set:function(t){mi.cssPrefix=t,po.forEach(e=>e(re))},get:function(){return mi.cssPrefix}});Fr.FontAwesomeConfig=re;const po=[];function FD(t){return po.push(t),()=>{po.splice(po.indexOf(t),1)}}const cr=Ph,_n={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function UD(t){if(!t||!Xn)return;const e=Fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Fe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Fe.head.insertBefore(e,r),t}const jD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jo(){let t=12,e="";for(;t-- >0;)e+=jD[Math.random()*62|0];return e}function Ii(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function wd(t){return t.classList?Ii(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Rw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Rw(t[n]),'" '),"").trim()}function Sl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function bd(t){return t.size!==_n.size||t.x!==_n.x||t.y!==_n.y||t.rotate!==_n.rotate||t.flipX||t.flipY}function $D(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function HD(t){let{transform:e,width:n=Ph,height:r=Ph,startCentered:s=!1}=t,i="";return s&&mw?i+="translate(".concat(e.x/cr-n/2,"em, ").concat(e.y/cr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/cr,"em), calc(-50% + ").concat(e.y/cr,"em)) "):i+="translate(".concat(e.x/cr,"em, ").concat(e.y/cr,"em) "),i+="scale(".concat(e.size/cr*(e.flipX?-1:1),", ").concat(e.size/cr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var qD=`:root, :host {
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
}`;function Sw(){const t=vw,e=Ew,n=re.cssPrefix,r=re.replacementClass;let s=qD;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let __=!1;function bu(){re.autoAddCss&&!__&&(UD(Sw()),__=!0)}var zD={mixout(){return{dom:{css:Sw,insertCss:bu}}},hooks(){return{beforeDOMElementCreation(){bu()},beforeI2svg(){bu()}}}};const Kn=Fr||{};Kn[Wn]||(Kn[Wn]={});Kn[Wn].styles||(Kn[Wn].styles={});Kn[Wn].hooks||(Kn[Wn].hooks={});Kn[Wn].shims||(Kn[Wn].shims=[]);var yn=Kn[Wn];const Cw=[],Pw=function(){Fe.removeEventListener("DOMContentLoaded",Pw),Vc=1,Cw.map(t=>t())};let Vc=!1;Xn&&(Vc=(Fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Fe.readyState),Vc||Fe.addEventListener("DOMContentLoaded",Pw));function WD(t){Xn&&(Vc?setTimeout(t,0):Cw.push(t))}function aa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Rw(t):"<".concat(e," ").concat(BD(n),">").concat(r.map(aa).join(""),"</").concat(e,">")}function y_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Tu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function KD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Dh(t){const e=KD(t);return e.length===1?e[0].toString(16):null}function GD(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function v_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Lh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=v_(e);typeof yn.hooks.addPack=="function"&&!r?yn.hooks.addPack(t,v_(e)):yn.styles[t]={...yn.styles[t]||{},...s},t==="fas"&&Lh("fa",e)}const{styles:ns,shims:QD}=yn,YD={[$e]:Object.values(fs[$e]),[qt]:Object.values(fs[qt]),[zt]:Object.values(fs[zt])};let Td=null,kw={},Ow={},xw={},Nw={},Dw={};const XD={[$e]:Object.keys(hs[$e]),[qt]:Object.keys(hs[qt]),[zt]:Object.keys(hs[zt])};function JD(t){return~LD.indexOf(t)}function ZD(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!JD(s)?s:null}const Lw=()=>{const t=r=>Tu(ns,(s,i,o)=>(s[o]=Tu(i,r,{}),s),{});kw=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Ow=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Dw=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ns||re.autoFetchSvg,n=Tu(QD,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});xw=n.names,Nw=n.unicodes,Td=Cl(re.styleDefault,{family:re.familyDefault})};FD(t=>{Td=Cl(t.styleDefault,{family:re.familyDefault})});Lw();function Id(t,e){return(kw[t]||{})[e]}function eL(t,e){return(Ow[t]||{})[e]}function Tr(t,e){return(Dw[t]||{})[e]}function Mw(t){return xw[t]||{prefix:null,iconName:null}}function tL(t){const e=Nw[t],n=Id("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ur(){return Td}const Ad=()=>({prefix:null,iconName:null,rest:[]});function Cl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=$e}=e,r=hs[n][t],s=Uo[n][t]||Uo[n][r],i=t in yn.styles?t:null;return s||i||null}const nL={[$e]:Object.keys(fs[$e]),[qt]:Object.keys(fs[qt]),[zt]:Object.keys(fs[zt])};function Pl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[$e]:"".concat(re.cssPrefix,"-").concat($e),[qt]:"".concat(re.cssPrefix,"-").concat(qt),[zt]:"".concat(re.cssPrefix,"-").concat(zt)};let s=null,i=$e;const o=uD.filter(l=>l!==gw);o.forEach(l=>{(t.includes(r[l])||t.some(u=>nL[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const h=ZD(re.cssPrefix,u);if(ns[u]?(u=YD[i].includes(u)?kD[i][u]:u,s=u,l.prefix=u):XD[i].indexOf(u)>-1?(s=u,l.prefix=Cl(u,{family:i})):h?l.iconName=h:u!==re.replacementClass&&!o.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=s==="fa"?Mw(l.iconName):{},p=Tr(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!ns.far&&ns.fas&&!re.autoFetchSvg&&(l.prefix="fas")}return l},Ad());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===qt&&(ns.fass||re.autoFetchSvg)&&(a.prefix="fass",a.iconName=Tr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===zt&&(ns.fasds||re.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Tr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Ur()||"fas"),a}class rL{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},Lh(i,s[i]);const o=fs[$e][i];o&&Lh(o,s[i]),Lw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let E_=[],Us={};const Ys={},sL=Object.keys(Ys);function iL(t,e){let{mixoutsTo:n}=e;return E_=t,Us={},Object.keys(Ys).forEach(r=>{sL.indexOf(r)===-1&&delete Ys[r]}),E_.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Us[o]||(Us[o]=[]),Us[o].push(i[o])})}r.provides&&r.provides(Ys)}),n}function Mh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Us[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function vs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Us[t]||[]).forEach(i=>{i.apply(null,n)})}function jr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ys[t]?Ys[t].apply(null,e):void 0}function Vh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ur();if(e)return e=Tr(n,e)||e,y_(Vw.definitions,n,e)||y_(yn.styles,n,e)}const Vw=new rL,oL=()=>{re.autoReplaceSvg=!1,re.observeMutations=!1,vs("noAuto")},aL={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xn?(vs("beforeI2svg",t),jr("pseudoElements2svg",t),jr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;re.autoReplaceSvg===!1&&(re.autoReplaceSvg=!0),re.observeMutations=!0,WD(()=>{lL({autoReplaceSvgRoot:e}),vs("watch",t)})}},cL={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Cl(t[0]);return{prefix:n,iconName:Tr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(re.cssPrefix,"-"))>-1||t.match(OD))){const e=Pl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ur(),iconName:Tr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ur();return{prefix:e,iconName:Tr(e,t)||t}}}},Kt={noAuto:oL,config:re,dom:aL,parse:cL,library:Vw,findIconDefinition:Vh,toHtml:aa},lL=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Fe}=t;(Object.keys(yn.styles).length>0||re.autoFetchSvg)&&Xn&&re.autoReplaceSvg&&Kt.dom.i2svg({node:e})};function kl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>aa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Xn)return;const n=Fe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function uL(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(bd(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Sl({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function hL(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(re.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function Rd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,R=r==="fak",k=[re.replacementClass,s?"".concat(re.cssPrefix,"-").concat(s):""].filter(L=>h.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(h.classes).join(" ");let x={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const N=R&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(x.attributes[ys]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||jo())},children:[a]}),delete x.attributes.title);const S={...x,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...N,...h.styles}},{children:w,attributes:O}=n.found&&e.found?jr("generateAbstractMask",S)||{children:[],attributes:{}}:jr("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=w,S.attributes=O,o?hL(S):uL(S)}function w_(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[ys]="");const u={...o.styles};bd(s)&&(u.transform=HD({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Sl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function fL(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Sl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Iu}=yn;function Fh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(re.cssPrefix,"-").concat(wu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(wu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(wu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const dL={found:!1,width:512,height:512};function pL(t,e){!ww&&!re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Uh(t,e){let n=e;return e==="fa"&&re.styleDefault!==null&&(e=Ur()),new Promise((r,s)=>{if(n==="fa"){const i=Mw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Iu[e]&&Iu[e][t]){const i=Iu[e][t];return r(Fh(i))}pL(t,e),r({...dL,icon:re.showMissingIcons&&t?jr("missingIconAbstract")||{}:{}})})}const b_=()=>{},jh=re.measurePerformance&&$a&&$a.mark&&$a.measure?$a:{mark:b_,measure:b_},Xi='FA "6.6.0"',mL=t=>(jh.mark("".concat(Xi," ").concat(t," begins")),()=>Fw(t)),Fw=t=>{jh.mark("".concat(Xi," ").concat(t," ends")),jh.measure("".concat(Xi," ").concat(t),"".concat(Xi," ").concat(t," begins"),"".concat(Xi," ").concat(t," ends"))};var Sd={begin:mL,end:Fw};const sc=()=>{};function T_(t){return typeof(t.getAttribute?t.getAttribute(ys):null)=="string"}function gL(t){const e=t.getAttribute?t.getAttribute(vd):null,n=t.getAttribute?t.getAttribute(Ed):null;return e&&n}function _L(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(re.replacementClass)}function yL(){return re.autoReplaceSvg===!0?ic.replace:ic[re.autoReplaceSvg]||ic.replace}function vL(t){return Fe.createElementNS("http://www.w3.org/2000/svg",t)}function EL(t){return Fe.createElement(t)}function Uw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?vL:EL}=e;if(typeof t=="string")return Fe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Uw(i,{ceFn:n}))}),r}function wL(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ic={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Uw(n),e)}),e.getAttribute(ys)===null&&re.keepOriginalSource){let n=Fe.createComment(wL(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~wd(e).indexOf(re.replacementClass))return ic.replace(t);const r=new RegExp("".concat(re.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===re.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>aa(i)).join(`
`);e.setAttribute(ys,""),e.innerHTML=s}};function I_(t){t()}function jw(t,e){const n=typeof e=="function"?e:sc;if(t.length===0)n();else{let r=I_;re.mutateApproach===CD&&(r=Fr.requestAnimationFrame||I_),r(()=>{const s=yL(),i=Sd.begin("mutate");t.map(s),i(),n()})}}let Cd=!1;function Bw(){Cd=!0}function Bh(){Cd=!1}let Fc=null;function A_(t){if(!d_||!re.observeMutations)return;const{treeCallback:e=sc,nodeCallback:n=sc,pseudoElementsCallback:r=sc,observeMutationsRoot:s=Fe}=t;Fc=new d_(i=>{if(Cd)return;const o=Ur();Ii(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!T_(a.addedNodes[0])&&(re.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&re.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&T_(a.target)&&~DD.indexOf(a.attributeName))if(a.attributeName==="class"&&gL(a.target)){const{prefix:l,iconName:u}=Pl(wd(a.target));a.target.setAttribute(vd,l||o),u&&a.target.setAttribute(Ed,u)}else _L(a.target)&&n(a.target)})}),Xn&&Fc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bL(){Fc&&Fc.disconnect()}function TL(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function IL(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Pl(wd(t));return s.prefix||(s.prefix=Ur()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=eL(s.prefix,t.innerText)||Id(s.prefix,Dh(t.innerText))),!s.iconName&&re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function AL(t){const e=Ii(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return re.autoA11y&&(n?e["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(r||jo()):(e["aria-hidden"]="true",e.focusable="false")),e}function RL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_n,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function R_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=IL(t),i=AL(t),o=Mh("parseNodeAttributes",{},t);let a=e.styleParser?TL(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_n,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:SL}=yn;function $w(t){const e=re.autoReplaceSvg==="nest"?R_(t,{styleParser:!1}):R_(t);return~e.extra.classes.indexOf(Iw)?jr("generateLayersText",t,e):jr("generateSvgReplacementMutation",t,e)}let Rn=new Set;bw.map(t=>{Rn.add("fa-".concat(t))});Object.keys(hs[$e]).map(Rn.add.bind(Rn));Object.keys(hs[qt]).map(Rn.add.bind(Rn));Object.keys(hs[zt]).map(Rn.add.bind(Rn));Rn=[...Rn];function S_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xn)return Promise.resolve();const n=Fe.documentElement.classList,r=h=>n.add("".concat(g_,"-").concat(h)),s=h=>n.remove("".concat(g_,"-").concat(h)),i=re.autoFetchSvg?Rn:bw.map(h=>"fa-".concat(h)).concat(Object.keys(SL));i.includes("fa")||i.push("fa");const o=[".".concat(Iw,":not([").concat(ys,"])")].concat(i.map(h=>".".concat(h,":not([").concat(ys,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ii(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Sd.begin("onTree"),u=a.reduce((h,d)=>{try{const p=$w(d);p&&h.push(p)}catch(p){ww||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{jw(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function CL(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$w(t).then(n=>{n&&jw([n],e)})}function PL(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Vh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Vh(s||{})),t(r,{...n,mask:s})}}const kL=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_n,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return kl({type:"icon",...t},()=>(vs("beforeDOMElementCreation",{iconDefinition:t,params:e}),re.autoA11y&&(o?u["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(a||jo()):(u["aria-hidden"]="true",u.focusable="false")),Rd({icons:{main:Fh(g),mask:s?Fh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{..._n,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var OL={mixout(){return{icon:PL(kL)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=S_,t.nodeCallback=CL,t}}},provides(t){t.i2svg=function(e){const{node:n=Fe,callback:r=()=>{}}=e;return S_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([Uh(r,o),u.iconName?Uh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[k,x]=R;p([e,Rd({icons:{main:k,mask:x},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Sl(o);a.length>0&&(r.style=a);let l;return bd(i)&&(l=jr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},xL={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return kl({type:"layer"},()=>{vs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(re.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},NL={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return kl({type:"counter",content:t},()=>(vs("beforeDOMElementCreation",{content:t,params:e}),fL({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(re.cssPrefix,"-layers-counter"),...r]}})))}}}},DL={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_n,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return kl({type:"text",content:t},()=>(vs("beforeDOMElementCreation",{content:t,params:e}),w_({content:t,transform:{..._n,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(re.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(mw){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return re.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,w_({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const LL=new RegExp('"',"ug"),C_=[1105920,1112319],P_={FontAwesome:{normal:"fas",400:"fas"},...gD,...mD,...ID},$h=Object.keys(P_).reduce((t,e)=>(t[e.toLowerCase()]=P_[e],t),{}),ML=Object.keys($h).reduce((t,e)=>{const n=$h[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function VL(t){const e=t.replace(LL,""),n=GD(e,0),r=n>=C_[0]&&n<=C_[1],s=e.length===2?e[0]===e[1]:!1;return{value:Dh(s?e[0]:e),isSecondary:r||s}}function FL(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return($h[n]||{})[s]||ML[n]}function k_(t,e){const n="".concat(SD).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ii(t.children).filter(p=>p.getAttribute(kh)===e)[0],a=Fr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(xD),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=FL(l,h);const{value:R,isSecondary:k}=VL(p),x=u[0].startsWith("FontAwesome");let N=Id(g,R),S=N;if(x){const w=tL(R);w.iconName&&w.prefix&&(N=w.iconName,g=w.prefix)}if(N&&!k&&(!o||o.getAttribute(vd)!==g||o.getAttribute(Ed)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);const w=RL(),{extra:O}=w;O.attributes[kh]=e,Uh(N,g).then(L=>{const M=Rd({...w,icons:{main:L,mask:Ad()},prefix:g,iconName:S,extra:O,watchable:!0}),b=Fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=M.map(y=>aa(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function UL(t){return Promise.all([k_(t,"::before"),k_(t,"::after")])}function jL(t){return t.parentNode!==document.head&&!~PD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function O_(t){if(Xn)return new Promise((e,n)=>{const r=Ii(t.querySelectorAll("*")).filter(jL).map(UL),s=Sd.begin("searchPseudoElements");Bw(),Promise.all(r).then(()=>{s(),Bh(),e()}).catch(()=>{s(),Bh(),n()})})}var BL={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=O_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Fe}=e;re.searchPseudoElements&&O_(n)}}};let x_=!1;var $L={mixout(){return{dom:{unwatch(){Bw(),x_=!0}}}},hooks(){return{bootstrap(){A_(Mh("mutationObserverCallbacks",{}))},noAuto(){bL()},watch(t){const{observeMutationsRoot:e}=t;x_?Bh():A_(Mh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const N_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var HL={mixout(){return{parse:{transform:t=>N_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=N_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const Au={x:0,y:0,width:"100%",height:"100%"};function D_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qL(t){return t.tag==="g"?t.children:[t]}var zL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Pl(n.split(" ").map(s=>s.trim())):Ad();return r.prefix||(r.prefix=Ur()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=$D({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...Au,fill:"white"}},R=u.children?{children:u.children.map(D_)}:{},k={tag:"g",attributes:{...p.inner},children:[D_({tag:u.tag,attributes:{...u.attributes,...p.path},...R})]},x={tag:"g",attributes:{...p.outer},children:[k]},N="mask-".concat(o||jo()),S="clip-".concat(o||jo()),w={tag:"mask",attributes:{...Au,id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,x]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:qL(d)},w]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")"),...Au}}),{children:n,attributes:r}}}},WL={provides(t){let e=!1;Fr.matchMedia&&(e=Fr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},KL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},GL=[zD,OL,xL,NL,DL,BL,$L,HL,zL,WL,KL];iL(GL,{mixoutsTo:Kt});Kt.noAuto;const QL=Kt.config,YL=Kt.library;Kt.dom;const Hh=Kt.parse;Kt.findIconDefinition;Kt.toHtml;const XL=Kt.icon;Kt.layer;Kt.text;Kt.counter;function L_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Nn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L_(Object(n),!0).forEach(function(r){Ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function JL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ZL(t){var e=JL(t,"string");return typeof e=="symbol"?e:e+""}function Uc(t){"@babel/helpers - typeof";return Uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uc(t)}function Ot(t,e,n){return e=ZL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eM(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function tM(t,e){if(t==null)return{};var n=eM(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var nM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hw={exports:{}};(function(t){(function(e){var n=function(N,S,w){if(!u(S)||d(S)||p(S)||g(S)||l(S))return S;var O,L=0,M=0;if(h(S))for(O=[],M=S.length;L<M;L++)O.push(n(N,S[L],w));else{O={};for(var b in S)Object.prototype.hasOwnProperty.call(S,b)&&(O[N(b,w)]=n(N,S[b],w))}return O},r=function(N,S){S=S||{};var w=S.separator||"_",O=S.split||/(?=[A-Z])/;return N.split(O).join(w)},s=function(N){return R(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(S,w){return w?w.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var S=s(N);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(N,S){return r(N,S).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return a.call(N)=="[object Array]"},d=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},R=function(N){return N=N-0,N===N},k=function(N,S){var w=S&&"process"in S?S.process:S;return typeof w!="function"?N:function(O,L){return w(O,N,L)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,S){return n(k(s,S),N)},decamelizeKeys:function(N,S){return n(k(o,S),N,S)},pascalizeKeys:function(N,S){return n(k(i,S),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(nM)})(Hw);var rM=Hw.exports,sM=["class","style"];function iM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=rM.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function oM(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return qw(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=oM(h);break;case"style":l.style=iM(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=tM(n,sM);return pt(t.tag,Nn(Nn(Nn({},e),{},{class:s.class,style:Nn(Nn({},s.style),o)},s.attrs),a),r)}var zw=!1;try{zw=!0}catch{}function aM(){if(!zw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ru(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}function cM(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ot(Ot(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function M_(t){if(t&&Uc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Hh.icon)return Hh.icon(t);if(t===null)return null;if(Uc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var lM=Cn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=De(function(){return M_(e.icon)}),i=De(function(){return Ru("classes",cM(e))}),o=De(function(){return Ru("transform",typeof e.transform=="string"?Hh.transform(e.transform):e.transform)}),a=De(function(){return Ru("mask",M_(e.mask))}),l=De(function(){return XL(s.value,Nn(Nn(Nn(Nn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});ln(l,function(h){if(!h)return aM("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=De(function(){return l.value?qw(l.value.abstract[0],{},r):null});return function(){return u.value}}});const uM={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},hM={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},fM=hM,dM={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},pM={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},mM={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};QL.autoAddCss=!1;YL.add(uM,pM,fM,mM,dM);const gM=Wt(t=>{t.vueApp.component("font-awesome-icon",lM)}),_M=!1;/*!
 * pinia v2.2.1
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Ww;const Ol=t=>Ww=t,Kw=Symbol();function qh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var mo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(mo||(mo={}));function yM(){const t=Jh(!0),e=t.run(()=>Vt({}));let n=[],r=[];const s=of({install(i){Ol(s),s._a=i,i.provide(Kw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_M?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Gw=()=>{};function V_(t,e,n,r=Gw){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&qo()&&ac(s),s}function xs(t,...e){t.slice().forEach(n=>{n(...e)})}const vM=t=>t(),F_=Symbol(),Su=Symbol();function zh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];qh(s)&&qh(r)&&t.hasOwnProperty(n)&&!et(r)&&!Ar(r)?t[n]=zh(s,r):t[n]=r}return t}const EM=Symbol();function wM(t){return!qh(t)||!t.hasOwnProperty(EM)}const{assign:lr}=Object;function bM(t){return!!(et(t)&&t.effect)}function TM(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=oT(n.state.value[t]);return lr(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=of(De(()=>{Ol(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=Qw(t,u,e,n,r,!0),l}function Qw(t,e,n={},r,s,i){let o;const a=lr({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Vt({});let k;function x(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:mo.patchFunction,storeId:t,events:g}):(zh(r.state.value[t],y),_={type:mo.patchObject,payload:y,storeId:t,events:g});const E=k=Symbol();Sn().then(()=>{k===E&&(u=!0)}),h=!0,xs(d,_,r.state.value[t])}const N=i?function(){const{state:_}=n,E=_?_():{};this.$patch(C=>{lr(C,E)})}:Gw;function S(){o.stop(),d=[],p=[],r._s.delete(t)}const w=(y,_="")=>{if(F_ in y)return y[Su]=_,y;const E=function(){Ol(r);const C=Array.from(arguments),A=[],T=[];function me(te){A.push(te)}function ye(te){T.push(te)}xs(p,{args:C,name:E[Su],store:L,after:me,onError:ye});let J;try{J=y.apply(this&&this.$id===t?this:L,C)}catch(te){throw xs(T,te),te}return J instanceof Promise?J.then(te=>(xs(A,te),te)).catch(te=>(xs(T,te),Promise.reject(te))):(xs(A,J),J)};return E[F_]=!0,E[Su]=_,E},O={_p:r,$id:t,$onAction:V_.bind(null,p),$patch:x,$reset:N,$subscribe(y,_={}){const E=V_(d,y,_.detached,()=>C()),C=o.run(()=>ln(()=>r.state.value[t],A=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:mo.direct,events:g},A)},lr({},l,_)));return E},$dispose:S},L=Hr(O);r._s.set(t,L);const b=(r._a&&r._a.runWithContext||vM)(()=>r._e.run(()=>(o=Jh()).run(()=>e({action:w}))));for(const y in b){const _=b[y];if(et(_)&&!bM(_)||Ar(_))i||(R&&wM(_)&&(et(_)?_.value=R[y]:zh(_,R[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const E=w(_,y);b[y]=E,a.actions[y]=_}}return lr(L,b),lr(Ae(L),b),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:y=>{x(_=>{lr(_,y)})}}),r._p.forEach(y=>{lr(L,o.run(()=>y({store:L,app:r._a,pinia:r,options:a})))}),R&&i&&n.hydrate&&n.hydrate(L.$state,R),u=!0,h=!0,L}function IM(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=ff();return a=a||(u?It(Kw,null):null),a&&Ol(a),a=Ww,a._s.has(r)||(i?Qw(r,e,s,a):TM(r,s,a)),a._s.get(r)}return o.$id=r,o}function AM(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function RM(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const SM=Wt(t=>{const e=yM();t.vueApp.use(e)});var U_=/^(GTM|G)-[0-9A-Z]+$/;function Cu(t){if(typeof t!="string"||!U_.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${U_}).${n}`)}}function Ji(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function Xs(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(Ji(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function CM(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var PM=class{constructor(t){Ui(this,"id");Ui(this,"options");Ui(this,"scriptElements",[]);Ui(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)Cu(typeof e=="string"?e:e.id);else Cu(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!CM(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=Xs(n,{...this.options}):r=Xs(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=Xs(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?Ji(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&Ji(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&Ji(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&Ji(window,this.options.dataLayerName).push(t)}},ht;function kM(t,e={id:""}){e={trackOnNextTick:!1,...e},ht=new PM(e),t.config.globalProperties.$gtm=ht,ht.isInBrowserContext()&&(e.vueRouter&&OM(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),ht.options.enabled&&ht.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")Xs(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),Xs(n.id,r)}}):Xs(e.id,e))),t.provide("gtm",e)}function OM(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,R;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?ht!=null&&ht.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(ht!=null&&ht.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((R=(g=e.options)==null?void 0:g.history)==null?void 0:R.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Sn(()=>{ht==null||ht.trackView(u,d,h)}):ht==null||ht.trackView(u,d,h)})}function xM(t){return{install:e=>kM(e,t)}}const NM=Wt(t=>{const e=ws().public,n=KO("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(xM({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:gt(),trackOnNextTick:!1}))}),DM=[AR,SR,WS,GS,QS,YS,JS,ZS,eC,lD,gM,SM,NM],LM=Cn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return cs(Go,Dn(r)),()=>pt(t.vnode,{ref:t.vnodeRef})}}),MM=Cn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Le(),i=Vt(),o=It(Go,null);let a;r({pageRef:i});const l=It(Cv,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);gt().beforeEach(d)}return t.pageKey&&ln(()=>t.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")}),()=>pt(Jv,{name:t.name,route:t.route,...e},{default:d=>{const p=FM(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const R=ih(d,t.pageKey);!s.isHydrating&&!UM(o,d.route,d.Component)&&a===R&&s.callHook("page:loading:end"),a=R;const k=!!(t.transition??d.route.meta.pageTransition??Gu),x=k&&VM([t.transition,d.route.meta.pageTransition,Gu,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),N=t.keepalive??d.route.meta.keepalive??r1;return u=Zv(Jc,k&&x,NS(N,pt(gf,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Sn(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const S=pt(LM,{key:R||void 0,vnode:n.default?pt(Pt,void 0,n.default(d)):d.Component,route:d.route,renderKey:R||void 0,trackRootNodes:k,vnodeRef:i});return N&&(S.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),S}}))).default(),u}})}});function VM(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Cf(n.onAfterLeave):void 0}));return Rv(...e)}function FM(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&ih({route:e,Component:n})!==ih({route:t,Component:n})}function UM(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const jM=Cn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await wr[t.name]().then(r=>r.default||r);return()=>pt(n,t.layoutProps,e.slots)}}),BM=Cn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Le(),r=It(Go),s=r===bf()?OS():r,i=De(()=>{let l=Ye(t.name)??s.meta.layout??"default";return l&&!(l in wr)&&t.fallback&&(l=Ye(t.fallback)),l}),o=Vt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);gt().beforeEach(l)}return()=>{const l=i.value&&i.value in wr,u=s.meta.layoutTransition??n1;return Zv(Jc,l&&u,{default:()=>pt(gf,{suspensible:!0,onResolve:()=>{Sn(a)}},{default:()=>pt($M,{layoutProps:rv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),$M=Cn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&cs(Cv,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in wr)?(s=(r=e.slots).default)==null?void 0:s.call(r):pt(jM,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),xl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},HM={};function qM(t,e){const n=MM,r=BM;return Nt(),mr(r,null,{default:pn(()=>[Ce(n)]),_:1})}const zM=xl(HM,[["render",qM]]),WM=wf("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),j_=IM("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Le(),r=gt();try{const s=await Pk(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Le();try{await Nk(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Le();xk(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),KM={class:"navbar navbar-expand-md navbar-light bg-light"},GM=je("span",{class:"navbar-toggler-icon"},null,-1),QM=[GM],YM={class:"navbar-nav"},XM={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},JM={class:"navbar-nav ml-auto"};function ZM(t,e,n,r,s,i){const o=ZO;return Nt(),To("nav",KM,[Ce(o,{class:"navbar-brand",to:"/"},{default:pn(()=>[Jt("Who's Jimmy")]),_:1}),je("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},QM),je("div",{class:$o(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[je("ul",YM,[Ce(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:pn(()=>[Jt("Bio")]),_:1}),Ce(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:pn(()=>[Jt("Portfolio ")]),_:1}),Ce(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:pn(()=>[Jt("For Sale")]),_:1}),Ce(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:pn(()=>[Jt("Cool Stuff")]),_:1}),Ce(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:pn(()=>[Jt("Contact Us")]),_:1})])],2),s.isAuth?(Nt(),To("div",XM,[je("ul",JM,[Ce(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:pn(()=>[Jt(Xh(t.user?t.user.email:""),1)]),_:1}),je("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):fI("",!0)])}const eV={data(){return{visible:!1,isAuth:!1}},computed:{...AM(j_,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...RM(j_,{signOut:"signOut"})}},tV=xl(eV,[["render",ZM]]),nV=t=>(vy("data-v-063d9b19"),t=t(),Ey(),t),rV={class:"page-footer font-small bg-light navbar-fixed-bottom"},sV={class:"container"},iV={class:"py-3 pt-3"},oV={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},aV={href:"https://www.facebook.com/whosjimmy"},cV={href:"https://twitter.com/jimmyclaws"},lV={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"},uV=nV(()=>je("div",{class:"footer-copyright text-center font-small"},[je("div",null,[Jt("© 2024 Copyright: "),je("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),je("div",null,"Disclaimer: All images are copyright to their respective owners."),je("div",null,[Jt("A "),je("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),Jt(" creation.")])],-1));function hV(t,e){const n=wo("font-awesome-icon");return Nt(),To("footer",rV,[je("div",sV,[je("div",iV,[je("a",oV,[Ce(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),je("a",aV,[Ce(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),je("a",cV,[Ce(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),je("a",lV,[Ce(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),uV])}const fV={},dV=xl(fV,[["render",hV],["__scopeId","data-v-063d9b19"]]),pV=t=>(vy("data-v-5f25e24b"),t=t(),Ey(),t),mV={class:"text-center my-0 page"},gV={class:"body"},_V=pV(()=>je("img",{src:WM,alt:"Error Image"},null,-1)),yV={head(){return{title:"Error"}},components:{appHeader:tV,appFooter:dV}},vV=Cn({...yV,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Le();Rm({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{Rm({title:n.public.SITE_TITLE}),kv({redirect:"/"})};return(i,o)=>{var u;const a=wo("app-header"),l=wo("app-footer");return Nt(),To("div",mV,[Ce(a),je("div",gV,[_V,je("h2",null,"Error: "+Xh((u=t.error)==null?void 0:u.statusCode),1),je("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Ce(l)])}}}),EV=xl(vV,[["__scopeId","data-v-5f25e24b"]]),wV={key:0},B_={__name:"nuxt-root",setup(t){const e=()=>null,n=Le(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);gt().beforeEach(l)}const s=!1;cs(Go,bf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=tl(),o=!1;ky((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),k1(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Vs(l)),!1});const a=!1;return(l,u)=>(Nt(),mr(gf,{onResolve:Ye(r)},{default:pn(()=>[Ye(o)?(Nt(),To("div",wV)):Ye(i)?(Nt(),mr(Ye(EV),{key:1,error:Ye(i)},null,8,["error"])):Ye(a)?(Nt(),mr(Ye(e),{key:2,context:Ye(a)},null,8,["context"])):Ye(s)?(Nt(),mr(AT(Ye(s)),{key:3})):(Nt(),mr(Ye(zM),{key:4}))]),_:1},8,["onResolve"]))}};let $_;{let t;$_=async function(){var o,a;if(t)return t;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?XI(B_):YI(B_),s=c1({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||nl(l)}r.config.errorHandler=i;try{await h1(s,DM)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(o1),await s.hooks.callHook("app:mounted",r),await Sn()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=$_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{IM as $,De as A,Ar as B,Dr as C,It as D,cs as E,Pt as F,Ye as G,Sn as H,wo as I,SV as J,mr as K,wf as L,RV as M,$o as N,$c as O,TV as P,hI as Q,Go as R,xV as S,Jc as T,P1 as U,KO as V,PV as W,tV as X,dV as Y,MM as Z,xl as _,RM as a,Le as a0,MV as a1,FV as a2,UV as a3,VV as a4,jV as a5,je as b,To as c,Ce as d,ZO as e,Jt as f,Ey as g,IV as h,fI as i,CV as j,OV as k,Qc as l,AM as m,Vt as n,Nt as o,vy as p,ET as q,AV as r,ln as s,Xh as t,j_ as u,kV as v,pn as w,et as x,Hr as y,Wo as z};
