const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CG5J0ESt.js","./CFsda28j.js","./Cozn7pK2.js","./index.BeIzcci7.css","./eLTCcIik.js","./1V8O3WeF.js","./Film.RcEDhm2u.css","./CSgGFgPX.js","./Bio.UuHzcTUx.css","./DjsxxH3d.js","./Contact.BEX4NZs-.css","./CYZHw5WO.js","./CgiG9wj9.js","./Gallery.C5KrzdV4.css","./Clocks.CkpqjaRE.css","./DedIxEpE.js","./index.CRKUJhZW.css","./DlkKn1nV.js","./CLRjMiAH.js","./C9Mb9kRT.js","./Celebrities.CcuunyNG.css","./DCaLwmeC.js","./Clocks.vUUo-Xqj.css","./Bzm3CwVA.js","./Film.lR7kWmk3.css","./BkIBl9aD.js","./index.DvHgfU4N.css","./BMzM6KQO.js","./Cckl32vv.js","./DRLg5Zvd.js","./4U7EzCcu.js","./Dw-gyfU4.js","./default.BQrX2rPu.css","./DVWDi-n9.js","./B3qJtMxk.js","./error-404.CjGVuf6H.css","./BoLvq6K5.js","./error-500.DFBAsgKS.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function p_(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ve={},Ns=[],Wt=()=>{},Ww=()=>!1,Tc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),m_=t=>t.startsWith("onUpdate:"),Rt=Object.assign,Sh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kw=Object.prototype.hasOwnProperty,Ie=(t,e)=>Kw.call(t,e),fe=Array.isArray,xs=t=>Ro(t)==="[object Map]",g_=t=>Ro(t)==="[object Set]",Gw=t=>Ro(t)==="[object RegExp]",de=t=>typeof t=="function",nt=t=>typeof t=="string",fs=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",__=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),y_=Object.prototype.toString,Ro=t=>y_.call(t),Qw=t=>Ro(t).slice(8,-1),v_=t=>Ro(t)==="[object Object]",Ph=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=p_(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yw=/-(\w)/g,sn=bc(t=>t.replace(Yw,(e,n)=>n?n.toUpperCase():"")),Xw=/\B([A-Z])/g,So=bc(t=>t.replace(Xw,"-$1").toLowerCase()),Ch=bc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=bc(t=>t?`on${Ch(t)}`:""),Tr=(t,e)=>!Object.is(t,e),Bi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},E_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Jw=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Zw=t=>{const e=nt(t)?Number(t):NaN;return isNaN(e)?t:e};let np;const w_=()=>np||(np=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?rT(r):Ic(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(nt(t)||Le(t))return t}const eT=/;(?![^(]*\))/g,tT=/:([^]+)/,nT=/\/\*[^]*?\*\//g;function rT(t){const e={};return t.replace(nT,"").split(eT).forEach(n=>{if(n){const r=n.split(tT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ac(t){let e="";if(nt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Ac(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function sT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!nt(e)&&(t.class=Ac(e)),n&&(t.style=Ic(n)),t}const T_=t=>!!(t&&t.__v_isRef===!0),iT=t=>nt(t)?t:t==null?"":fe(t)||Le(t)&&(t.toString===y_||!de(t.toString))?T_(t)?iT(t.value):JSON.stringify(t,b_,2):String(t),b_=(t,e)=>T_(e)?b_(t,e.value):xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rl(r,i)+" =>"]=s,n),{})}:g_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rl(n))}:fs(e)?Rl(e):Le(e)&&!fe(e)&&!v_(e)?String(e):e,Rl=(t,e="")=>{var n;return fs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class I_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function kh(t){return new I_(t)}function oT(t,e=Lt){e&&e.active&&e.effects.push(t)}function Oh(){return Lt}function aT(t){Lt&&Lt.cleanups.push(t)}let Yr;class Nh{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,oT(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Or();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(cT(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Nr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=fr,n=Yr;try{return fr=!0,Yr=this,this._runnings++,rp(this),this.fn()}finally{sp(this),this._runnings--,Yr=n,fr=e}}stop(){this.active&&(rp(this),sp(this),this.onStop&&this.onStop(),this.active=!1)}}function cT(t){return t.value}function rp(t){t._trackId++,t._depsLength=0}function sp(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)A_(t.deps[e],t);t.deps.length=t._depsLength}}function A_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let fr=!0,au=0;const R_=[];function Or(){R_.push(fr),fr=!1}function Nr(){const t=R_.pop();fr=t===void 0?!0:t}function xh(){au++}function Dh(){for(au--;!au&&cu.length;)cu.shift()()}function S_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&A_(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const cu=[];function P_(t,e,n){xh();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&cu.push(r.scheduler)))}Dh()}const C_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ha=new WeakMap,Xr=Symbol(""),lu=Symbol("");function Nt(t,e,n){if(fr&&Yr){let r=Ha.get(t);r||Ha.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=C_(()=>r.delete(n))),S_(Yr,s)}}function On(t,e,n,r,s,i){const o=Ha.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&fe(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!fs(h)&&h>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":fe(t)?Ph(n)&&c.push(o.get("length")):(c.push(o.get(Xr)),xs(t)&&c.push(o.get(lu)));break;case"delete":fe(t)||(c.push(o.get(Xr)),xs(t)&&c.push(o.get(lu)));break;case"set":xs(t)&&c.push(o.get(Xr));break}xh();for(const l of c)l&&P_(l,4);Dh()}function lT(t,e){const n=Ha.get(t);return n&&n.get(e)}const uT=p_("__proto__,__v_isRef,__isVue"),k_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fs)),ip=hT();function hT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ae(this);for(let i=0,o=this.length;i<o;i++)Nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Or(),xh();const r=Ae(this)[e].apply(this,n);return Dh(),Nr(),r}}),t}function fT(t){fs(t)||(t=String(t));const e=Ae(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class O_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?AT:M_:i?D_:x_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){if(o&&Ie(ip,n))return Reflect.get(ip,n,r);if(n==="hasOwnProperty")return fT}const c=Reflect.get(e,n,r);return(fs(n)?k_.has(n):uT(n))||(s||Nt(e,"get",n),i)?c:Ye(c)?o&&Ph(n)?c:c.value:Le(c)?s?L_(c):xr(c):c}}class N_ extends O_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=br(i);if(!qs(r)&&!br(r)&&(i=Ae(i),r=Ae(r)),!fe(e)&&Ye(i)&&!Ye(r))return l?!1:(i.value=r,!0)}const o=fe(e)&&Ph(n)?Number(n)<e.length:Ie(e,n),c=Reflect.set(e,n,r,s);return e===Ae(s)&&(o?Tr(r,i)&&On(e,"set",n,r):On(e,"add",n,r)),c}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&On(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fs(n)||!k_.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",fe(e)?"length":Xr),Reflect.ownKeys(e)}}class dT extends O_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const pT=new N_,mT=new dT,gT=new N_(!0);const Mh=t=>t,Rc=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(Tr(e,i)&&Nt(s,"get",e),Nt(s,"get",i));const{has:o}=Rc(s),c=r?Mh:n?Uh:ro;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function aa(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(Tr(t,s)&&Nt(r,"has",t),Nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ca(t,e=!1){return t=t.__v_raw,!e&&Nt(Ae(t),"iterate",Xr),Reflect.get(t,"size",t)}function op(t,e=!1){!e&&!qs(t)&&!br(t)&&(t=Ae(t));const n=Ae(this);return Rc(n).has.call(n,t)||(n.add(t),On(n,"add",t,t)),this}function ap(t,e,n=!1){!n&&!qs(e)&&!br(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=Rc(r);let o=s.call(r,t);o||(t=Ae(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Tr(e,c)&&On(r,"set",t,e):On(r,"add",t,e),this}function cp(t){const e=Ae(this),{has:n,get:r}=Rc(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&On(e,"delete",t,void 0),i}function lp(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&On(t,"clear",void 0,void 0),n}function la(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ae(o),l=e?Mh:t?Uh:ro;return!t&&Nt(c,"iterate",Xr),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function ua(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=xs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Mh:e?Uh:ro;return!e&&Nt(i,"iterate",l?lu:Xr),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:c?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _T(){const t={get(i){return oa(this,i)},get size(){return ca(this)},has:aa,add:op,set:ap,delete:cp,clear:lp,forEach:la(!1,!1)},e={get(i){return oa(this,i,!1,!0)},get size(){return ca(this)},has:aa,add(i){return op.call(this,i,!0)},set(i,o){return ap.call(this,i,o,!0)},delete:cp,clear:lp,forEach:la(!1,!0)},n={get(i){return oa(this,i,!0)},get size(){return ca(this,!0)},has(i){return aa.call(this,i,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:la(!0,!1)},r={get(i){return oa(this,i,!0,!0)},get size(){return ca(this,!0)},has(i){return aa.call(this,i,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:la(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ua(i,!1,!1),n[i]=ua(i,!0,!1),e[i]=ua(i,!1,!0),r[i]=ua(i,!0,!0)}),[t,n,e,r]}const[yT,vT,ET,wT]=_T();function Lh(t,e){const n=e?t?wT:ET:t?vT:yT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const TT={get:Lh(!1,!1)},bT={get:Lh(!1,!0)},IT={get:Lh(!0,!1)};const x_=new WeakMap,D_=new WeakMap,M_=new WeakMap,AT=new WeakMap;function RT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ST(t){return t.__v_skip||!Object.isExtensible(t)?0:RT(Qw(t))}function xr(t){return br(t)?t:Vh(t,!1,pT,TT,x_)}function Rn(t){return Vh(t,!1,gT,bT,D_)}function L_(t){return Vh(t,!0,mT,IT,M_)}function Vh(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ST(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function dr(t){return br(t)?dr(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function qs(t){return!!(t&&t.__v_isShallow)}function V_(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Fh(t){return Object.isExtensible(t)&&E_(t,"__v_skip",!0),t}const ro=t=>Le(t)?xr(t):t,Uh=t=>Le(t)?L_(t):t;class F_{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Nh(()=>e(this._value),()=>Aa(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Tr(e._value,e._value=e.effect.run())&&Aa(e,4),U_(e),e.effect._dirtyLevel>=2&&Aa(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function PT(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Wt):(r=t.get,s=t.set),new F_(r,s,i||!s,n)}function U_(t){var e;fr&&Yr&&(t=Ae(t),S_(Yr,(e=t.dep)!=null?e:t.dep=C_(()=>t.dep=void 0,t instanceof F_?t:void 0)))}function Aa(t,e=4,n,r){t=Ae(t);const s=t.dep;s&&P_(s,e)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function rn(t){return j_(t,!1)}function so(t){return j_(t,!0)}function j_(t,e){return Ye(t)?t:new CT(t,e)}class CT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:ro(e)}get value(){return U_(this),this._value}set value(e){const n=this.__v_isShallow||qs(e)||br(e);e=n?e:Ae(e),Tr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ro(e),Aa(this,4))}}function Ne(t){return Ye(t)?t.value:t}const kT={get:(t,e,n)=>Ne(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function B_(t){return dr(t)?t:new Proxy(t,kT)}function OT(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=$_(t,n);return e}class NT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return lT(Ae(this._object),this._key)}}class xT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function DT(t,e,n){return Ye(t)?t:de(t)?new xT(t):Le(t)&&arguments.length>1?$_(t,e,n):rn(t)}function $_(t,e,n){const r=t[e];return Ye(r)?r:new NT(t,e,n)}/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pr(t,e,n,r){try{return r?t(...r):t()}catch(s){ai(s,e,n)}}function Kt(t,e,n,r){if(de(t)){const s=pr(t,e,n,r);return s&&__(s)&&s.catch(i=>{ai(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function ai(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Or(),pr(l,null,10,[t,o,c]),Nr();return}}MT(t,n,s,r)}function MT(t,e,n,r=!0){console.error(t)}let io=!1,uu=!1;const _t=[];let un=0;const Ms=[];let er=null,Wr=0;const H_=Promise.resolve();let jh=null;function Dr(t){const e=jh||H_;return t?e.then(this?t.bind(this):t):e}function LT(t){let e=un+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=oo(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Sc(t){(!_t.length||!_t.includes(t,io&&t.allowRecurse?un+1:un))&&(t.id==null?_t.push(t):_t.splice(LT(t.id),0,t),q_())}function q_(){!io&&!uu&&(uu=!0,jh=H_.then(z_))}function VT(t){const e=_t.indexOf(t);e>un&&_t.splice(e,1)}function hu(t){fe(t)?Ms.push(...t):(!er||!er.includes(t,t.allowRecurse?Wr+1:Wr))&&Ms.push(t),q_()}function up(t,e,n=io?un+1:0){for(;n<_t.length;n++){const r=_t[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r()}}}function qa(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,r)=>oo(n)-oo(r));if(Ms.length=0,er){er.push(...e);return}for(er=e,Wr=0;Wr<er.length;Wr++){const n=er[Wr];n.active!==!1&&n()}er=null,Wr=0}}const oo=t=>t.id==null?1/0:t.id,FT=(t,e)=>{const n=oo(t)-oo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function z_(t){uu=!1,io=!0,_t.sort(FT);try{for(un=0;un<_t.length;un++){const e=_t[un];e&&e.active!==!1&&pr(e,e.i,e.i?15:14)}}finally{un=0,_t.length=0,qa(),io=!1,jh=null,(_t.length||Ms.length)&&z_()}}let et=null,Pc=null;function za(t){const e=et;return et=t,Pc=t&&t.type.__scopeId||null,e}function tL(t){Pc=t}function nL(){Pc=null}function Bh(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Tp(-1);const i=za(e);let o;try{o=t(...s)}finally{za(i),r._d&&Tp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function rL(t,e){if(et===null)return t;const n=Oc(et),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&sr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function ln(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Or(),Kt(l,n,8,[t.el,c,t,e]),Nr())}}const tr=Symbol("_leaveCb"),ha=Symbol("_enterCb");function UT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $h(()=>{t.isMounted=!0}),Hh(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],W_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},K_=t=>{const e=t.subTree;return e.component?K_(e.component):e},jT={name:"BaseTransition",props:W_,setup(t,{slots:e}){const n=Xh(),r=UT();return()=>{const s=e.default&&Q_(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==ct){i=m;break}}const o=Ae(t),{mode:c}=o;if(r.isLeaving)return Sl(i);const l=hp(i);if(!l)return Sl(i);let u=fu(l,o,r,n,m=>u=m);ao(l,u);const h=n.subTree,d=h&&hp(h);if(d&&d.type!==ct&&!nn(l,d)&&K_(n).type!==ct){const m=fu(d,o,r,n);if(ao(d,m),c==="out-in"&&l.type!==ct)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Sl(i);c==="in-out"&&l.type!==ct&&(m.delayLeave=(g,P,k)=>{const N=G_(r,d);N[String(d.key)]=d,g[tr]=()=>{P(),g[tr]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return i}}},BT=jT;function G_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function fu(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:P,onLeaveCancelled:k,onBeforeAppear:N,onAppear:x,onAfterAppear:R,onAppearCancelled:b}=e,O=String(t.key),M=G_(n,t),L=(_,E)=>{_&&Kt(_,r,9,E)},w=(_,E)=>{const S=E[1];L(_,E),fe(_)?_.every(A=>A.length<=1)&&S():_.length<=1&&S()},y={mode:o,persisted:c,beforeEnter(_){let E=l;if(!n.isMounted)if(i)E=N||l;else return;_[tr]&&_[tr](!0);const S=M[O];S&&nn(t,S)&&S.el[tr]&&S.el[tr](),L(E,[_])},enter(_){let E=u,S=h,A=d;if(!n.isMounted)if(i)E=x||u,S=R||h,A=b||d;else return;let T=!1;const me=_[ha]=ye=>{T||(T=!0,ye?L(A,[_]):L(S,[_]),y.delayedLeave&&y.delayedLeave(),_[ha]=void 0)};E?w(E,[_,me]):me()},leave(_,E){const S=String(t.key);if(_[ha]&&_[ha](!0),n.isUnmounting)return E();L(m,[_]);let A=!1;const T=_[tr]=me=>{A||(A=!0,E(),me?L(k,[_]):L(P,[_]),_[tr]=void 0,M[S]===t&&delete M[S])};M[S]=t,g?w(g,[_,T]):T()},clone(_){const E=fu(_,e,n,r,s);return s&&s(E),E}};return y}function Sl(t){if(Po(t))return t=Nn(t),t.children=null,t}function hp(t){if(!Po(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function ao(t,e){t.shapeFlag&6&&t.component?ao(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Q_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===It?(o.patchFlag&128&&s++,r=r.concat(Q_(o.children,e,c))):(e||o.type!==ct)&&r.push(c!=null?Nn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Fn(t,e){return de(t)?Rt({name:t.name},e,{setup:t}):t}const Jr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function fp(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,h=0;const d=()=>(h++,l=null,m()),m=()=>{let g;return l||(g=l=e().catch(P=>{if(P=P instanceof Error?P:new Error(String(P)),c)return new Promise((k,N)=>{c(P,()=>k(d()),()=>N(P),h+1)});throw P}).then(P=>g!==l&&l?l:(P&&(P.__esModule||P[Symbol.toStringTag]==="Module")&&(P=P.default),u=P,P)))};return Fn({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return u},setup(){const g=Je;if(u)return()=>Pl(u,g);const P=R=>{l=null,ai(R,g,13,!r)};if(o&&g.suspense||ko)return m().then(R=>()=>Pl(R,g)).catch(R=>(P(R),()=>r?$e(r,{error:R}):null));const k=rn(!1),N=rn(),x=rn(!!s);return s&&setTimeout(()=>{x.value=!1},s),i!=null&&setTimeout(()=>{if(!k.value&&!N.value){const R=new Error(`Async component timed out after ${i}ms.`);P(R),N.value=R}},i),m().then(()=>{k.value=!0,g.parent&&Po(g.parent.vnode)&&(g.parent.effect.dirty=!0,Sc(g.parent.update))}).catch(R=>{P(R),N.value=R}),()=>{if(k.value&&u)return Pl(u,g);if(N.value&&r)return $e(r,{error:N.value});if(n&&!x.value)return $e(n)}}})}function Pl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=$e(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Po=t=>t.type.__isKeepAlive,$T={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Xh(),r=n.ctx;if(!r.renderer)return()=>{const R=e.default&&e.default();return R&&R.length===1?R[0]:R};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,m=d("div");r.activate=(R,b,O,M,L)=>{const w=R.component;u(R,b,O,0,c),l(w.vnode,R,b,O,w,c,M,R.slotScopeIds,L),rt(()=>{w.isDeactivated=!1,w.a&&Bi(w.a);const y=R.props&&R.props.onVnodeMounted;y&&Ct(y,w.parent,R)},c)},r.deactivate=R=>{const b=R.component;Ga(b.m),Ga(b.a),u(R,m,null,1,c),rt(()=>{b.da&&Bi(b.da);const O=R.props&&R.props.onVnodeUnmounted;O&&Ct(O,b.parent,R),b.isDeactivated=!0},c)};function g(R){Cl(R),h(R,n,c,!0)}function P(R){s.forEach((b,O)=>{const M=wu(b.type);M&&(!R||!R(M))&&k(O)})}function k(R){const b=s.get(R);!o||!nn(b,o)?g(b):o&&Cl(o),s.delete(R),i.delete(R)}mr(()=>[t.include,t.exclude],([R,b])=>{R&&P(O=>Ni(R,O)),b&&P(O=>!Ni(b,O))},{flush:"post",deep:!0});let N=null;const x=()=>{N!=null&&(_u(n.subTree.type)?rt(()=>{s.set(N,fa(n.subTree))},n.subTree.suspense):s.set(N,fa(n.subTree)))};return $h(x),X_(x),Hh(()=>{s.forEach(R=>{const{subTree:b,suspense:O}=n,M=fa(b);if(R.type===M.type&&R.key===M.key){Cl(M);const L=M.component.da;L&&rt(L,O);return}g(R)})}),()=>{if(N=null,!e.default)return null;const R=e.default(),b=R[0];if(R.length>1)return o=null,R;if(!Ws(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let O=fa(b);const M=O.type,L=wu(Jr(O)?O.type.__asyncResolved||{}:M),{include:w,exclude:y,max:_}=t;if(w&&(!L||!Ni(w,L))||y&&L&&Ni(y,L))return o=O,b;const E=O.key==null?M:O.key,S=s.get(E);return O.el&&(O=Nn(O),b.shapeFlag&128&&(b.ssContent=O)),N=E,S?(O.el=S.el,O.component=S.component,O.transition&&ao(O,O.transition),O.shapeFlag|=512,i.delete(E),i.add(E)):(i.add(E),_&&i.size>parseInt(_,10)&&k(i.values().next().value)),O.shapeFlag|=256,o=O,_u(b.type)?b:O}}},HT=$T;function Ni(t,e){return fe(t)?t.some(n=>Ni(n,e)):nt(t)?t.split(",").includes(e):Gw(t)?t.test(e):!1}function qT(t,e){Y_(t,"a",e)}function zT(t,e){Y_(t,"da",e)}function Y_(t,e,n=Je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Po(s.parent.vnode)&&WT(r,e,n,s),s=s.parent}}function WT(t,e,n,r){const s=Cc(e,t,r,!0);J_(()=>{Sh(r[e],s)},n)}function Cl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function fa(t){return t.shapeFlag&128?t.ssContent:t}function Cc(t,e,n=Je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Or();const c=Co(n),l=Kt(e,n,t,o);return c(),Nr(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=Je)=>{(!ko||t==="sp")&&Cc(t,(...r)=>e(...r),n)},KT=Un("bm"),$h=Un("m"),GT=Un("bu"),X_=Un("u"),Hh=Un("bum"),J_=Un("um"),QT=Un("sp"),YT=Un("rtg"),XT=Un("rtc");function Z_(t,e=Je){Cc("ec",t,e)}const ey="components";function sL(t,e){return ny(ey,t,!0,e)||t}const ty=Symbol.for("v-ndc");function JT(t){return nt(t)?ny(ey,t,!1)||t:t||ty}function ny(t,e,n=!0,r=!1){const s=et||Je;if(s){const i=s.type;{const c=wu(i,!1);if(c&&(c===e||c===sn(e)||c===Ch(sn(e))))return i}const o=dp(s[t]||i[t],e)||dp(s.appContext[t],e);return!o&&r?i:o}}function dp(t,e){return t&&(t[e]||t[sn(e)]||t[Ch(sn(e))])}function iL(t,e,n,r){let s;const i=n;if(fe(t)||nt(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}function oL(t,e,n={},r,s){if(et.isCE||et.parent&&Jr(et.parent)&&et.parent.isCE)return $e("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),tn();const o=i&&ry(i(n)),c=In(It,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function ry(t){return t.some(e=>Ws(e)?!(e.type===ct||e.type===It&&!ry(e.children)):!0)?t:null}const du=t=>t?ky(t)?Oc(t):du(t.parent):null,$i=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$emit:t=>t.emit,$options:t=>qh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Sc(t.update)}),$nextTick:t=>t.n||(t.n=Dr.bind(t.proxy)),$watch:t=>bb.bind(t)}),kl=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Ie(t,e),ZT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(kl(r,e))return o[e]=1,r[e];if(s!==Ve&&Ie(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ie(u,e))return o[e]=3,i[e];if(n!==Ve&&Ie(n,e))return o[e]=4,n[e];pu&&(o[e]=0)}}const h=$i[e];let d,m;if(h)return e==="$attrs"&&Nt(t.attrs,"get",""),h(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&Ie(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ie(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return kl(s,e)?(s[e]=n,!0):r!==Ve&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ve&&Ie(t,o)||kl(e,o)||(c=i[0])&&Ie(c,o)||Ie(r,o)||Ie($i,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pp(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pu=!0;function eb(t){const e=qh(t),n=t.proxy,r=t.ctx;pu=!1,e.beforeCreate&&mp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:P,activated:k,deactivated:N,beforeDestroy:x,beforeUnmount:R,destroyed:b,unmounted:O,render:M,renderTracked:L,renderTriggered:w,errorCaptured:y,serverPrefetch:_,expose:E,inheritAttrs:S,components:A,directives:T,filters:me}=e;if(u&&tb(u,r,null),o)for(const ne in o){const ee=o[ne];de(ee)&&(r[ne]=ee.bind(n))}if(s){const ne=s.call(n,n);Le(ne)&&(t.data=xr(ne))}if(pu=!0,i)for(const ne in i){const ee=i[ne],Et=de(ee)?ee.bind(n,n):de(ee.get)?ee.get.bind(n,n):Wt,Jt=!de(ee)&&de(ee.set)?ee.set.bind(n):Wt,$t=Xe({get:Et,set:Jt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>$t.value,set:je=>$t.value=je})}if(c)for(const ne in c)sy(c[ne],r,n,ne);if(l){const ne=de(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(ee=>{Zr(ee,ne[ee])})}h&&mp(h,t,"c");function J(ne,ee){fe(ee)?ee.forEach(Et=>ne(Et.bind(n))):ee&&ne(ee.bind(n))}if(J(KT,d),J($h,m),J(GT,g),J(X_,P),J(qT,k),J(zT,N),J(Z_,y),J(XT,L),J(YT,w),J(Hh,R),J(J_,O),J(QT,_),fe(E))if(E.length){const ne=t.exposed||(t.exposed={});E.forEach(ee=>{Object.defineProperty(ne,ee,{get:()=>n[ee],set:Et=>n[ee]=Et})})}else t.exposed||(t.exposed={});M&&t.render===Wt&&(t.render=M),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),T&&(t.directives=T)}function tb(t,e,n=Wt){fe(t)&&(t=mu(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=yt(s.from||r,s.default,!0):i=yt(s.from||r):i=yt(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mp(t,e,n){Kt(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sy(t,e,n,r){const s=r.includes(".")?vy(n,r):()=>n[r];if(nt(t)){const i=e[t];de(i)&&mr(s,i)}else if(de(t))mr(s,t.bind(n));else if(Le(t))if(fe(t))t.forEach(i=>sy(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&mr(s,i,t)}}function qh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Wa(l,u,o,!0)),Wa(l,e,o)),Le(e)&&i.set(e,l),l}function Wa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wa(t,i,n,!0),s&&s.forEach(o=>Wa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=nb[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const nb={data:gp,props:_p,emits:_p,methods:xi,computed:xi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:xi,directives:xi,watch:sb,provide:gp,inject:rb};function gp(t,e){return e?t?function(){return Rt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function rb(t,e){return xi(mu(t),mu(e))}function mu(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function xi(t,e){return t?Rt(Object.create(null),t,e):e}function _p(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Rt(Object.create(null),pp(t),pp(e??{})):e}function sb(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function iy(){return{app:null,config:{isNativeTag:Ww,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ib=0;function ob(t,e){return function(r,s=null){de(r)||(r=Rt({},r)),s!=null&&!Le(s)&&(s=null);const i=iy(),o=new WeakSet;let c=!1;const l=i.app={_uid:ib++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ny,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...h)):de(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,d){if(!c){const m=$e(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(m,u):t(m,u,d),c=!0,l._container=u,u.__vue_app__=l,Oc(m.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=Ls;Ls=l;try{return u()}finally{Ls=h}}};return l}}let Ls=null;function Zr(t,e){if(Je){let n=Je.provides;const r=Je.parent&&Je.parent.provides;r===n&&(n=Je.provides=Object.create(r)),n[t]=e}}function yt(t,e,n=!1){const r=Je||et;if(r||Ls){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ls._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function zh(){return!!(Je||et||Ls)}const oy={},ay=()=>Object.create(oy),cy=t=>Object.getPrototypeOf(t)===oy;function ab(t,e,n,r=!1){const s={},i=ay();t.propsDefaults=Object.create(null),ly(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function cb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(kc(t.emitsOptions,m))continue;const g=e[m];if(l)if(Ie(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const P=sn(m);s[P]=gu(l,c,P,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{ly(t,e,s,i)&&(u=!0);let h;for(const d in c)(!e||!Ie(e,d)&&((h=So(d))===d||!Ie(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=gu(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Ie(e,d))&&(delete i[d],u=!0)}u&&On(t.attrs,"set","")}function ly(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ds(l))continue;const u=e[l];let h;s&&Ie(s,h=sn(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:kc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=c||Ve;for(let h=0;h<i.length;h++){const d=i[h];n[d]=gu(s,l,d,u[d],t,!Ie(u,d))}}return o}function gu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ie(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Co(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===So(n))&&(r=!0))}return r}const lb=new WeakMap;function uy(t,e,n=!1){const r=n?lb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const h=d=>{l=!0;const[m,g]=uy(d,e,!0);Rt(o,m),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Le(t)&&r.set(t,Ns),Ns;if(fe(i))for(let h=0;h<i.length;h++){const d=sn(i[h]);yp(d)&&(o[d]=Ve)}else if(i)for(const h in i){const d=sn(h);if(yp(d)){const m=i[h],g=o[d]=fe(m)||de(m)?{type:m}:Rt({},m),P=g.type;let k=!1,N=!0;if(fe(P))for(let x=0;x<P.length;++x){const R=P[x],b=de(R)&&R.name;if(b==="Boolean"){k=!0;break}else b==="String"&&(N=!1)}else k=de(P)&&P.name==="Boolean";g[0]=k,g[1]=N,(k||Ie(g,"default"))&&c.push(d)}}const u=[o,c];return Le(t)&&r.set(t,u),u}function yp(t){return t[0]!=="$"&&!Ds(t)}const hy=t=>t[0]==="_"||t==="$stable",Wh=t=>fe(t)?t.map(Vt):[Vt(t)],ub=(t,e,n)=>{if(e._n)return e;const r=Bh((...s)=>Wh(e(...s)),n);return r._c=!1,r},fy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hy(s))continue;const i=t[s];if(de(i))e[s]=ub(s,i,r);else if(i!=null){const o=Wh(i);e[s]=()=>o}}},dy=(t,e)=>{const n=Wh(e);t.slots.default=()=>n},py=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},hb=(t,e,n)=>{const r=t.slots=ay();if(t.vnode.shapeFlag&32){const s=e._;s?(py(r,e,n),n&&E_(r,"_",s,!0)):fy(e,r)}else e&&dy(t,e)},fb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:py(s,e,n):(i=!e.$stable,fy(e,s)),o=e}else e&&(dy(t,e),o={default:1});if(i)for(const c in s)!hy(c)&&o[c]==null&&delete s[c]};function Ka(t,e,n,r,s=!1){if(fe(t)){t.forEach((m,g)=>Ka(m,e&&(fe(e)?e[g]:e),n,r,s));return}if(Jr(r)&&!s)return;const i=r.shapeFlag&4?Oc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Ve?c.refs={}:c.refs,d=c.setupState;if(u!=null&&u!==l&&(nt(u)?(h[u]=null,Ie(d,u)&&(d[u]=null)):Ye(u)&&(u.value=null)),de(l))pr(l,c,12,[o,h]);else{const m=nt(l),g=Ye(l);if(m||g){const P=()=>{if(t.f){const k=m?Ie(d,l)?d[l]:h[l]:l.value;s?fe(k)&&Sh(k,i):fe(k)?k.includes(i)||k.push(i):m?(h[l]=[i],Ie(d,l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else m?(h[l]=o,Ie(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(P.id=-1,rt(P,n)):P()}}}const db=Symbol("_vte"),pb=t=>t.__isTeleport;let vp=!1;const bs=()=>{vp||(console.error("Hydration completed but contains mismatches."),vp=!0)},mb=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",gb=t=>t.namespaceURI.includes("MathML"),da=t=>{if(mb(t))return"svg";if(gb(t))return"mathml"},pa=t=>t.nodeType===8;function _b(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,h=(b,O)=>{if(!O.hasChildNodes()){n(null,b,O),qa(),O._vnode=b;return}d(O.firstChild,b,null,null,null),qa(),O._vnode=b},d=(b,O,M,L,w,y=!1)=>{y=y||!!O.dynamicChildren;const _=pa(b)&&b.data==="[",E=()=>k(b,O,M,L,w,_),{type:S,ref:A,shapeFlag:T,patchFlag:me}=O;let ye=b.nodeType;O.el=b,me===-2&&(y=!1,O.dynamicChildren=null);let J=null;switch(S){case es:ye!==3?O.children===""?(l(O.el=s(""),o(b),b),J=b):J=E():(b.data!==O.children&&(bs(),b.data=O.children),J=i(b));break;case ct:R(b)?(J=i(b),x(O.el=b.content.firstChild,b,M)):ye!==8||_?J=E():J=i(b);break;case Hi:if(_&&(b=i(b),ye=b.nodeType),ye===1||ye===3){J=b;const ne=!O.children.length;for(let ee=0;ee<O.staticCount;ee++)ne&&(O.children+=J.nodeType===1?J.outerHTML:J.data),ee===O.staticCount-1&&(O.anchor=J),J=i(J);return _?i(J):J}else E();break;case It:_?J=P(b,O,M,L,w,y):J=E();break;default:if(T&1)(ye!==1||O.type.toLowerCase()!==b.tagName.toLowerCase())&&!R(b)?J=E():J=m(b,O,M,L,w,y);else if(T&6){O.slotScopeIds=w;const ne=o(b);if(_?J=N(b):pa(b)&&b.data==="teleport start"?J=N(b,b.data,"teleport end"):J=i(b),e(O,ne,null,M,L,da(ne),y),Jr(O)){let ee;_?(ee=$e(It),ee.anchor=J?J.previousSibling:ne.lastChild):ee=b.nodeType===3?Py(""):$e("div"),ee.el=b,O.component.subTree=ee}}else T&64?ye!==8?J=E():J=O.type.hydrate(b,O,M,L,w,y,t,g):T&128&&(J=O.type.hydrate(b,O,M,L,da(o(b)),w,y,t,d))}return A!=null&&Ka(A,null,L,O),J},m=(b,O,M,L,w,y)=>{y=y||!!O.dynamicChildren;const{type:_,props:E,patchFlag:S,shapeFlag:A,dirs:T,transition:me}=O,ye=_==="input"||_==="option";if(ye||S!==-1){T&&ln(O,null,M,"created");let J=!1;if(R(b)){J=gy(L,me)&&M&&M.vnode.props&&M.vnode.props.appear;const ee=b.content.firstChild;J&&me.beforeEnter(ee),x(ee,b,M),O.el=b=ee}if(A&16&&!(E&&(E.innerHTML||E.textContent))){let ee=g(b.firstChild,O,b,M,L,w,y);for(;ee;){bs();const Et=ee;ee=ee.nextSibling,c(Et)}}else A&8&&b.textContent!==O.children&&(bs(),b.textContent=O.children);if(E){if(ye||!y||S&48)for(const ee in E)(ye&&(ee.endsWith("value")||ee==="indeterminate")||Tc(ee)&&!Ds(ee)||ee[0]===".")&&r(b,ee,null,E[ee],void 0,M);else if(E.onClick)r(b,"onClick",null,E.onClick,void 0,M);else if(S&4&&dr(E.style))for(const ee in E.style)E.style[ee]}let ne;(ne=E&&E.onVnodeBeforeMount)&&Ct(ne,M,O),T&&ln(O,null,M,"beforeMount"),((ne=E&&E.onVnodeMounted)||T||J)&&Ty(()=>{ne&&Ct(ne,M,O),J&&me.enter(b),T&&ln(O,null,M,"mounted")},L)}return b.nextSibling},g=(b,O,M,L,w,y,_)=>{_=_||!!O.dynamicChildren;const E=O.children,S=E.length;for(let A=0;A<S;A++){const T=_?E[A]:E[A]=Vt(E[A]),me=T.type===es;if(b){if(me&&!_){let ye=E[A+1];ye&&(ye=Vt(ye)).type===es&&(l(s(b.data.slice(T.children.length)),M,i(b)),b.data=T.children)}b=d(b,T,L,w,y,_)}else me&&!T.children?l(T.el=s(""),M):(bs(),n(null,T,M,null,L,w,da(M),y))}return b},P=(b,O,M,L,w,y)=>{const{slotScopeIds:_}=O;_&&(w=w?w.concat(_):_);const E=o(b),S=g(i(b),O,E,M,L,w,y);return S&&pa(S)&&S.data==="]"?i(O.anchor=S):(bs(),l(O.anchor=u("]"),E,S),S)},k=(b,O,M,L,w,y)=>{if(bs(),O.el=null,y){const S=N(b);for(;;){const A=i(b);if(A&&A!==S)c(A);else break}}const _=i(b),E=o(b);return c(b),n(null,O,E,_,M,L,da(E),w),_},N=(b,O="[",M="]")=>{let L=0;for(;b;)if(b=i(b),b&&pa(b)&&(b.data===O&&L++,b.data===M)){if(L===0)return i(b);L--}return b},x=(b,O,M)=>{const L=O.parentNode;L&&L.replaceChild(b,O);let w=M;for(;w;)w.vnode.el===O&&(w.vnode.el=w.subTree.el=b),w=w.parent},R=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[h,d]}const rt=Ty;function yb(t){return my(t)}function vb(t){return my(t,_b)}function my(t,e){const n=w_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=Wt,insertStaticContent:P}=t,k=(I,C,V,B=null,U=null,z=null,Q=void 0,W=null,G=!!C.dynamicChildren)=>{if(I===C)return;I&&!nn(I,C)&&(B=j(I),je(I,U,z,!0),I=null),C.patchFlag===-2&&(G=!1,C.dynamicChildren=null);const{type:H,ref:X,shapeFlag:ae}=C;switch(H){case es:N(I,C,V,B);break;case ct:x(I,C,V,B);break;case Hi:I==null&&R(C,V,B,Q);break;case It:A(I,C,V,B,U,z,Q,W,G);break;default:ae&1?M(I,C,V,B,U,z,Q,W,G):ae&6?T(I,C,V,B,U,z,Q,W,G):(ae&64||ae&128)&&H.process(I,C,V,B,U,z,Q,W,G,te)}X!=null&&U&&Ka(X,I&&I.ref,z,C||I,!C)},N=(I,C,V,B)=>{if(I==null)r(C.el=c(C.children),V,B);else{const U=C.el=I.el;C.children!==I.children&&u(U,C.children)}},x=(I,C,V,B)=>{I==null?r(C.el=l(C.children||""),V,B):C.el=I.el},R=(I,C,V,B)=>{[I.el,I.anchor]=P(I.children,C,V,B,I.el,I.anchor)},b=({el:I,anchor:C},V,B)=>{let U;for(;I&&I!==C;)U=m(I),r(I,V,B),I=U;r(C,V,B)},O=({el:I,anchor:C})=>{let V;for(;I&&I!==C;)V=m(I),s(I),I=V;s(C)},M=(I,C,V,B,U,z,Q,W,G)=>{C.type==="svg"?Q="svg":C.type==="math"&&(Q="mathml"),I==null?L(C,V,B,U,z,Q,W,G):_(I,C,U,z,Q,W,G)},L=(I,C,V,B,U,z,Q,W)=>{let G,H;const{props:X,shapeFlag:ae,transition:oe,dirs:ie}=I;if(G=I.el=o(I.type,z,X&&X.is,X),ae&8?h(G,I.children):ae&16&&y(I.children,G,null,B,U,Ol(I,z),Q,W),ie&&ln(I,null,B,"created"),w(G,I,I.scopeId,Q,B),X){for(const Pe in X)Pe!=="value"&&!Ds(Pe)&&i(G,Pe,null,X[Pe],z,B);"value"in X&&i(G,"value",null,X.value,z),(H=X.onVnodeBeforeMount)&&Ct(H,B,I)}ie&&ln(I,null,B,"beforeMount");const le=gy(U,oe);le&&oe.beforeEnter(G),r(G,C,V),((H=X&&X.onVnodeMounted)||le||ie)&&rt(()=>{H&&Ct(H,B,I),le&&oe.enter(G),ie&&ln(I,null,B,"mounted")},U)},w=(I,C,V,B,U)=>{if(V&&g(I,V),B)for(let z=0;z<B.length;z++)g(I,B[z]);if(U){let z=U.subTree;if(C===z){const Q=U.vnode;w(I,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(I,C,V,B,U,z,Q,W,G=0)=>{for(let H=G;H<I.length;H++){const X=I[H]=W?nr(I[H]):Vt(I[H]);k(null,X,C,V,B,U,z,Q,W)}},_=(I,C,V,B,U,z,Q)=>{const W=C.el=I.el;let{patchFlag:G,dynamicChildren:H,dirs:X}=C;G|=I.patchFlag&16;const ae=I.props||Ve,oe=C.props||Ve;let ie;if(V&&Br(V,!1),(ie=oe.onVnodeBeforeUpdate)&&Ct(ie,V,C,I),X&&ln(C,I,V,"beforeUpdate"),V&&Br(V,!0),(ae.innerHTML&&oe.innerHTML==null||ae.textContent&&oe.textContent==null)&&h(W,""),H?E(I.dynamicChildren,H,W,V,B,Ol(C,U),z):Q||ee(I,C,W,null,V,B,Ol(C,U),z,!1),G>0){if(G&16)S(W,ae,oe,V,U);else if(G&2&&ae.class!==oe.class&&i(W,"class",null,oe.class,U),G&4&&i(W,"style",ae.style,oe.style,U),G&8){const le=C.dynamicProps;for(let Pe=0;Pe<le.length;Pe++){const be=le[Pe],ze=ae[be],xt=oe[be];(xt!==ze||be==="value")&&i(W,be,ze,xt,U,V)}}G&1&&I.children!==C.children&&h(W,C.children)}else!Q&&H==null&&S(W,ae,oe,V,U);((ie=oe.onVnodeUpdated)||X)&&rt(()=>{ie&&Ct(ie,V,C,I),X&&ln(C,I,V,"updated")},B)},E=(I,C,V,B,U,z,Q)=>{for(let W=0;W<C.length;W++){const G=I[W],H=C[W],X=G.el&&(G.type===It||!nn(G,H)||G.shapeFlag&70)?d(G.el):V;k(G,H,X,null,B,U,z,Q,!0)}},S=(I,C,V,B,U)=>{if(C!==V){if(C!==Ve)for(const z in C)!Ds(z)&&!(z in V)&&i(I,z,C[z],null,U,B);for(const z in V){if(Ds(z))continue;const Q=V[z],W=C[z];Q!==W&&z!=="value"&&i(I,z,W,Q,U,B)}"value"in V&&i(I,"value",C.value,V.value,U)}},A=(I,C,V,B,U,z,Q,W,G)=>{const H=C.el=I?I.el:c(""),X=C.anchor=I?I.anchor:c("");let{patchFlag:ae,dynamicChildren:oe,slotScopeIds:ie}=C;ie&&(W=W?W.concat(ie):ie),I==null?(r(H,V,B),r(X,V,B),y(C.children||[],V,X,U,z,Q,W,G)):ae>0&&ae&64&&oe&&I.dynamicChildren?(E(I.dynamicChildren,oe,V,U,z,Q,W),(C.key!=null||U&&C===U.subTree)&&_y(I,C,!0)):ee(I,C,V,X,U,z,Q,W,G)},T=(I,C,V,B,U,z,Q,W,G)=>{C.slotScopeIds=W,I==null?C.shapeFlag&512?U.ctx.activate(C,V,B,Q,G):me(C,V,B,U,z,Q,G):ye(I,C,G)},me=(I,C,V,B,U,z,Q)=>{const W=I.component=jb(I,B,U);if(Po(I)&&(W.ctx.renderer=te),Bb(W,!1,Q),W.asyncDep){if(U&&U.registerDep(W,J,Q),!I.el){const G=W.subTree=$e(ct);x(null,G,C,V)}}else J(W,I,C,V,U,z,Q)},ye=(I,C,V)=>{const B=C.component=I.component;if(Cb(I,C,V))if(B.asyncDep&&!B.asyncResolved){ne(B,C,V);return}else B.next=C,VT(B.update),B.effect.dirty=!0,B.update();else C.el=I.el,B.vnode=C},J=(I,C,V,B,U,z,Q)=>{const W=()=>{if(I.isMounted){let{next:X,bu:ae,u:oe,parent:ie,vnode:le}=I;{const Ht=yy(I);if(Ht){X&&(X.el=le.el,ne(I,X,Q)),Ht.asyncDep.then(()=>{I.isUnmounted||W()});return}}let Pe=X,be;Br(I,!1),X?(X.el=le.el,ne(I,X,Q)):X=le,ae&&Bi(ae),(be=X.props&&X.props.onVnodeBeforeUpdate)&&Ct(be,ie,X,le),Br(I,!0);const ze=Nl(I),xt=I.subTree;I.subTree=ze,k(xt,ze,d(xt.el),j(xt),I,U,z),X.el=ze.el,Pe===null&&Gh(I,ze.el),oe&&rt(oe,U),(be=X.props&&X.props.onVnodeUpdated)&&rt(()=>Ct(be,ie,X,le),U)}else{let X;const{el:ae,props:oe}=C,{bm:ie,m:le,parent:Pe}=I,be=Jr(C);if(Br(I,!1),ie&&Bi(ie),!be&&(X=oe&&oe.onVnodeBeforeMount)&&Ct(X,Pe,C),Br(I,!0),ae&&ke){const ze=()=>{I.subTree=Nl(I),ke(ae,I.subTree,I,U,null)};be?C.type.__asyncLoader().then(()=>!I.isUnmounted&&ze()):ze()}else{const ze=I.subTree=Nl(I);k(null,ze,V,B,I,U,z),C.el=ze.el}if(le&&rt(le,U),!be&&(X=oe&&oe.onVnodeMounted)){const ze=C;rt(()=>Ct(X,Pe,ze),U)}(C.shapeFlag&256||Pe&&Jr(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&I.a&&rt(I.a,U),I.isMounted=!0,C=V=B=null}},G=I.effect=new Nh(W,Wt,()=>Sc(H),I.scope),H=I.update=()=>{G.dirty&&G.run()};H.i=I,H.id=I.uid,Br(I,!0),H()},ne=(I,C,V)=>{C.component=I;const B=I.vnode.props;I.vnode=C,I.next=null,cb(I,C.props,B,V),fb(I,C.children,V),Or(),up(I),Nr()},ee=(I,C,V,B,U,z,Q,W,G=!1)=>{const H=I&&I.children,X=I?I.shapeFlag:0,ae=C.children,{patchFlag:oe,shapeFlag:ie}=C;if(oe>0){if(oe&128){Jt(H,ae,V,B,U,z,Q,W,G);return}else if(oe&256){Et(H,ae,V,B,U,z,Q,W,G);return}}ie&8?(X&16&&St(H,U,z),ae!==H&&h(V,ae)):X&16?ie&16?Jt(H,ae,V,B,U,z,Q,W,G):St(H,U,z,!0):(X&8&&h(V,""),ie&16&&y(ae,V,B,U,z,Q,W,G))},Et=(I,C,V,B,U,z,Q,W,G)=>{I=I||Ns,C=C||Ns;const H=I.length,X=C.length,ae=Math.min(H,X);let oe;for(oe=0;oe<ae;oe++){const ie=C[oe]=G?nr(C[oe]):Vt(C[oe]);k(I[oe],ie,V,null,U,z,Q,W,G)}H>X?St(I,U,z,!0,!1,ae):y(C,V,B,U,z,Q,W,G,ae)},Jt=(I,C,V,B,U,z,Q,W,G)=>{let H=0;const X=C.length;let ae=I.length-1,oe=X-1;for(;H<=ae&&H<=oe;){const ie=I[H],le=C[H]=G?nr(C[H]):Vt(C[H]);if(nn(ie,le))k(ie,le,V,null,U,z,Q,W,G);else break;H++}for(;H<=ae&&H<=oe;){const ie=I[ae],le=C[oe]=G?nr(C[oe]):Vt(C[oe]);if(nn(ie,le))k(ie,le,V,null,U,z,Q,W,G);else break;ae--,oe--}if(H>ae){if(H<=oe){const ie=oe+1,le=ie<X?C[ie].el:B;for(;H<=oe;)k(null,C[H]=G?nr(C[H]):Vt(C[H]),V,le,U,z,Q,W,G),H++}}else if(H>oe)for(;H<=ae;)je(I[H],U,z,!0),H++;else{const ie=H,le=H,Pe=new Map;for(H=le;H<=oe;H++){const wt=C[H]=G?nr(C[H]):Vt(C[H]);wt.key!=null&&Pe.set(wt.key,H)}let be,ze=0;const xt=oe-le+1;let Ht=!1,mi=0;const Hn=new Array(xt);for(H=0;H<xt;H++)Hn[H]=0;for(H=ie;H<=ae;H++){const wt=I[H];if(ze>=xt){je(wt,U,z,!0);continue}let qt;if(wt.key!=null)qt=Pe.get(wt.key);else for(be=le;be<=oe;be++)if(Hn[be-le]===0&&nn(wt,C[be])){qt=be;break}qt===void 0?je(wt,U,z,!0):(Hn[qt-le]=H+1,qt>=mi?mi=qt:Ht=!0,k(wt,C[qt],V,null,U,z,Q,W,G),ze++)}const _s=Ht?Eb(Hn):Ns;for(be=_s.length-1,H=xt-1;H>=0;H--){const wt=le+H,qt=C[wt],ys=wt+1<X?C[wt+1].el:B;Hn[H]===0?k(null,qt,V,ys,U,z,Q,W,G):Ht&&(be<0||H!==_s[be]?$t(qt,V,ys,2):be--)}}},$t=(I,C,V,B,U=null)=>{const{el:z,type:Q,transition:W,children:G,shapeFlag:H}=I;if(H&6){$t(I.component.subTree,C,V,B);return}if(H&128){I.suspense.move(C,V,B);return}if(H&64){Q.move(I,C,V,te);return}if(Q===It){r(z,C,V);for(let ae=0;ae<G.length;ae++)$t(G[ae],C,V,B);r(I.anchor,C,V);return}if(Q===Hi){b(I,C,V);return}if(B!==2&&H&1&&W)if(B===0)W.beforeEnter(z),r(z,C,V),rt(()=>W.enter(z),U);else{const{leave:ae,delayLeave:oe,afterLeave:ie}=W,le=()=>r(z,C,V),Pe=()=>{ae(z,()=>{le(),ie&&ie()})};oe?oe(z,le,Pe):Pe()}else r(z,C,V)},je=(I,C,V,B=!1,U=!1)=>{const{type:z,props:Q,ref:W,children:G,dynamicChildren:H,shapeFlag:X,patchFlag:ae,dirs:oe,cacheIndex:ie}=I;if(ae===-2&&(U=!1),W!=null&&Ka(W,null,V,I,!0),ie!=null&&(C.renderCache[ie]=void 0),X&256){C.ctx.deactivate(I);return}const le=X&1&&oe,Pe=!Jr(I);let be;if(Pe&&(be=Q&&Q.onVnodeBeforeUnmount)&&Ct(be,C,I),X&6)cn(I.component,V,B);else{if(X&128){I.suspense.unmount(V,B);return}le&&ln(I,null,C,"beforeUnmount"),X&64?I.type.remove(I,C,V,te,B):H&&!H.hasOnce&&(z!==It||ae>0&&ae&64)?St(H,C,V,!1,!0):(z===It&&ae&384||!U&&X&16)&&St(G,C,V),B&&Be(I)}(Pe&&(be=Q&&Q.onVnodeUnmounted)||le)&&rt(()=>{be&&Ct(be,C,I),le&&ln(I,null,C,"unmounted")},V)},Be=I=>{const{type:C,el:V,anchor:B,transition:U}=I;if(C===It){$n(V,B);return}if(C===Hi){O(I);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:W}=U,G=()=>Q(V,z);W?W(I.el,z,G):G()}else z()},$n=(I,C)=>{let V;for(;I!==C;)V=m(I),s(I),I=V;s(C)},cn=(I,C,V)=>{const{bum:B,scope:U,update:z,subTree:Q,um:W,m:G,a:H}=I;Ga(G),Ga(H),B&&Bi(B),U.stop(),z&&(z.active=!1,je(Q,I,C,V)),W&&rt(W,C),rt(()=>{I.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},St=(I,C,V,B=!1,U=!1,z=0)=>{for(let Q=z;Q<I.length;Q++)je(I[Q],C,V,B,U)},j=I=>{if(I.shapeFlag&6)return j(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=m(I.anchor||I.el),V=C&&C[db];return V?m(V):C};let Z=!1;const Y=(I,C,V)=>{I==null?C._vnode&&je(C._vnode,null,null,!0):k(C._vnode||null,I,C,null,null,null,V),Z||(Z=!0,up(),qa(),Z=!1),C._vnode=I},te={p:k,um:je,m:$t,r:Be,mt:me,mc:y,pc:ee,pbc:E,n:j,o:t};let Ee,ke;return e&&([Ee,ke]=e(te)),{render:Y,hydrate:Ee,createApp:ob(Y,Ee)}}function Ol({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Br({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _y(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&_y(o,c)),c.type===es&&(c.el=o.el)}}function Eb(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function yy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yy(e)}function Ga(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const wb=Symbol.for("v-scx"),Tb=()=>yt(wb);function aL(t,e){return Kh(t,null,e)}const ma={};function mr(t,e,n){return Kh(t,e,n)}function Kh(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ve){if(e&&i){const L=e;e=(...w)=>{L(...w),M()}}const l=Je,u=L=>r===!0?L:sr(L,r===!1?1:void 0);let h,d=!1,m=!1;if(Ye(t)?(h=()=>t.value,d=qs(t)):dr(t)?(h=()=>u(t),d=!0):fe(t)?(m=!0,d=t.some(L=>dr(L)||qs(L)),h=()=>t.map(L=>{if(Ye(L))return L.value;if(dr(L))return u(L);if(de(L))return pr(L,l,2)})):de(t)?e?h=()=>pr(t,l,2):h=()=>(g&&g(),Kt(t,l,3,[P])):h=Wt,e&&r){const L=h;h=()=>sr(L())}let g,P=L=>{g=b.onStop=()=>{pr(L,l,4),g=b.onStop=void 0}},k;if(ko)if(P=Wt,e?n&&Kt(e,l,3,[h(),m?[]:void 0,P]):h(),s==="sync"){const L=Tb();k=L.__watcherHandles||(L.__watcherHandles=[])}else return Wt;let N=m?new Array(t.length).fill(ma):ma;const x=()=>{if(!(!b.active||!b.dirty))if(e){const L=b.run();(r||d||(m?L.some((w,y)=>Tr(w,N[y])):Tr(L,N)))&&(g&&g(),Kt(e,l,3,[L,N===ma?void 0:m&&N[0]===ma?[]:N,P]),N=L)}else b.run()};x.allowRecurse=!!e;let R;s==="sync"?R=x:s==="post"?R=()=>rt(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),R=()=>Sc(x));const b=new Nh(h,Wt,R),O=Oh(),M=()=>{b.stop(),O&&Sh(O.effects,b)};return e?n?x():N=b.run():s==="post"?rt(b.run.bind(b),l&&l.suspense):b.run(),k&&k.push(M),M}function bb(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?vy(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Co(this),c=Kh(s,i.bind(r),n);return o(),c}function vy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function sr(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))sr(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)sr(t[r],e,n);else if(g_(t)||xs(t))t.forEach(r=>{sr(r,e,n)});else if(v_(t)){for(const r in t)sr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&sr(t[r],e,n)}return t}const Ib=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${sn(e)}Modifiers`]||t[`${So(e)}Modifiers`];function Ab(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&Ib(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>nt(h)?h.trim():h)),o.number&&(s=n.map(Jw)));let c,l=r[c=Al(e)]||r[c=Al(sn(e))];!l&&i&&(l=r[c=Al(So(e))]),l&&Kt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Kt(u,t,6,s)}}function Ey(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=u=>{const h=Ey(u,e,!0);h&&(c=!0,Rt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(fe(i)?i.forEach(l=>o[l]=null):Rt(o,i),Le(t)&&r.set(t,o),o)}function kc(t,e){return!t||!Tc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,So(e))||Ie(t,e))}function Nl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:P,inheritAttrs:k}=t,N=za(t);let x,R;try{if(n.shapeFlag&4){const O=s||r,M=O;x=Vt(u.call(M,O,h,d,g,m,P)),R=c}else{const O=e;x=Vt(O.length>1?O(d,{attrs:c,slots:o,emit:l}):O(d,null)),R=e.props?c:Sb(c)}}catch(O){qi.length=0,ai(O,t,1),x=$e(ct)}let b=x;if(R&&k!==!1){const O=Object.keys(R),{shapeFlag:M}=b;O.length&&M&7&&(i&&O.some(m_)&&(R=Pb(R,i)),b=Nn(b,R,!1,!0))}return n.dirs&&(b=Nn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),x=b,za(N),x}function Rb(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ws(s)){if(s.type!==ct||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Sb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tc(n))&&((e||(e={}))[n]=t[n]);return e},Pb=(t,e)=>{const n={};for(const r in t)(!m_(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Cb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ep(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==r[m]&&!kc(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ep(r,o,u):!0:!!o;return!1}function Ep(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!kc(n,i))return!0}return!1}function Gh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const _u=t=>t.__isSuspense;let yu=0;const kb={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)Ob(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Nb(t,e,n,r,s,o,c,l,u)}},hydrate:xb,normalize:Db},Qh=kb;function co(t,e){const n=t.props&&t.props[e];de(n)&&n()}function Ob(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:h}}=l,d=h("div"),m=t.suspense=wy(t,s,r,e,d,n,i,o,c,l);u(null,m.pendingBranch=t.ssContent,d,null,r,m,i,o),m.deps>0?(co(t,"onPending"),co(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Vs(m,t.ssFallback)):m.resolve(!1,!0)}function Nb(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const m=e.ssContent,g=e.ssFallback,{activeBranch:P,pendingBranch:k,isInFallback:N,isHydrating:x}=d;if(k)d.pendingBranch=m,nn(m,k)?(l(k,m,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():N&&(x||(l(P,g,n,r,s,null,i,o,c),Vs(d,g)))):(d.pendingId=yu++,x?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(l(null,m,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():(l(P,g,n,r,s,null,i,o,c),Vs(d,g))):P&&nn(m,P)?(l(P,m,n,r,s,d,i,o,c),d.resolve(!0)):(l(null,m,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0&&d.resolve()));else if(P&&nn(m,P))l(P,m,n,r,s,d,i,o,c),Vs(d,m);else if(co(e,"onPending"),d.pendingBranch=m,m.shapeFlag&512?d.pendingId=m.component.suspenseId:d.pendingId=yu++,l(null,m,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0)d.resolve();else{const{timeout:R,pendingId:b}=d;R>0?setTimeout(()=>{d.pendingId===b&&d.fallback(g)},R):R===0&&d.fallback(g)}}function wy(t,e,n,r,s,i,o,c,l,u,h=!1){const{p:d,m,um:g,n:P,o:{parentNode:k,remove:N}}=u;let x;const R=Mb(t);R&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const b=t.props?Zw(t.props.timeout):void 0,O=i,M={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:yu++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(L=!1,w=!1){const{vnode:y,activeBranch:_,pendingBranch:E,pendingId:S,effects:A,parentComponent:T,container:me}=M;let ye=!1;M.isHydrating?M.isHydrating=!1:L||(ye=_&&E.transition&&E.transition.mode==="out-in",ye&&(_.transition.afterLeave=()=>{S===M.pendingId&&(m(E,me,i===O?P(_):i,0),hu(A))}),_&&(k(_.el)!==M.hiddenContainer&&(i=P(_)),g(_,T,M,!0)),ye||m(E,me,i,0)),Vs(M,E),M.pendingBranch=null,M.isInFallback=!1;let J=M.parent,ne=!1;for(;J;){if(J.pendingBranch){J.effects.push(...A),ne=!0;break}J=J.parent}!ne&&!ye&&hu(A),M.effects=[],R&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),co(y,"onResolve")},fallback(L){if(!M.pendingBranch)return;const{vnode:w,activeBranch:y,parentComponent:_,container:E,namespace:S}=M;co(w,"onFallback");const A=P(y),T=()=>{M.isInFallback&&(d(null,L,E,A,_,null,S,c,l),Vs(M,L))},me=L.transition&&L.transition.mode==="out-in";me&&(y.transition.afterLeave=T),M.isInFallback=!0,g(y,_,null,!0),me||T()},move(L,w,y){M.activeBranch&&m(M.activeBranch,L,w,y),M.container=L},next(){return M.activeBranch&&P(M.activeBranch)},registerDep(L,w,y){const _=!!M.pendingBranch;_&&M.deps++;const E=L.vnode.el;L.asyncDep.catch(S=>{ai(S,L,0)}).then(S=>{if(L.isUnmounted||M.isUnmounted||M.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:A}=L;Eu(L,S,!1),E&&(A.el=E);const T=!E&&L.subTree.el;w(L,A,k(E||L.subTree.el),E?null:P(L.subTree),M,o,y),T&&N(T),Gh(L,A.el),_&&--M.deps===0&&M.resolve()})},unmount(L,w){M.isUnmounted=!0,M.activeBranch&&g(M.activeBranch,n,L,w),M.pendingBranch&&g(M.pendingBranch,n,L,w)}};return M}function xb(t,e,n,r,s,i,o,c,l){const u=e.suspense=wy(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function Db(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=wp(r?n.default:n),t.ssFallback=r?wp(n.fallback):$e(ct)}function wp(t){let e;if(de(t)){const n=zs&&t._c;n&&(t._d=!1,tn()),t=t(),n&&(t._d=!0,e=Ot,by())}return fe(t)&&(t=Rb(t)),t=Vt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Ty(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):hu(t)}function Vs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Gh(r,s))}function Mb(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const It=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),qi=[];let Ot=null;function tn(t=!1){qi.push(Ot=t?null:[])}function by(){qi.pop(),Ot=qi[qi.length-1]||null}let zs=1;function Tp(t){zs+=t,t<0&&Ot&&(Ot.hasOnce=!0)}function Iy(t){return t.dynamicChildren=zs>0?Ot||Ns:null,by(),zs>0&&Ot&&Ot.push(t),t}function Lb(t,e,n,r,s,i){return Iy(Ry(t,e,n,r,s,i,!0))}function In(t,e,n,r,s){return Iy($e(t,e,n,r,s,!0))}function Ws(t){return t?t.__v_isVNode===!0:!1}function nn(t,e){return t.type===e.type&&t.key===e.key}const Ay=({key:t})=>t??null,Ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Ye(t)||de(t)?{i:et,r:t,k:e,f:!!n}:t:null);function Ry(t,e=null,n=null,r=0,s=null,i=t===It?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ay(e),ref:e&&Ra(e),scopeId:Pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return c?(Yh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),zs>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const $e=Vb;function Vb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ty)&&(t=ct),Ws(t)){const c=Nn(t,e,!0);return n&&Yh(c,n),zs>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(zb(t)&&(t=t.__vccOpts),e){e=Sy(e);let{class:c,style:l}=e;c&&!nt(c)&&(e.class=Ac(c)),Le(l)&&(V_(l)&&!fe(l)&&(l=Rt({},l)),e.style=Ic(l))}const o=nt(t)?1:_u(t)?128:pb(t)?64:Le(t)?4:de(t)?2:0;return Ry(t,e,n,r,s,o,i,!0)}function Sy(t){return t?V_(t)||cy(t)?Rt({},t):t:null}function Nn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Cy(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ay(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(Ra(e)):[i,Ra(e)]:Ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nn(t.ssContent),ssFallback:t.ssFallback&&Nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ao(h,l.clone(h)),h}function Py(t=" ",e=0){return $e(es,null,t,e)}function cL(t,e){const n=$e(Hi,null,t);return n.staticCount=e,n}function lL(t="",e=!1){return e?(tn(),In(ct,null,t)):$e(ct,null,t)}function Vt(t){return t==null||typeof t=="boolean"?$e(ct):fe(t)?$e(It,null,t.slice()):typeof t=="object"?nr(t):$e(es,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nn(t)}function Yh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cy(e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[Py(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ac([e.class,r.class]));else if(s==="style")e.style=Ic([e.style,r.style]);else if(Tc(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ct(t,e,n,r=null){Kt(t,e,7,[n,r])}const Fb=iy();let Ub=0;function jb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Fb,i={uid:Ub++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new I_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uy(r,s),emitsOptions:Ey(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ab.bind(null,i),t.ce&&t.ce(i),i}let Je=null;const Xh=()=>Je||et;let Qa,vu;{const t=w_(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Qa=e("__VUE_INSTANCE_SETTERS__",n=>Je=n),vu=e("__VUE_SSR_SETTERS__",n=>ko=n)}const Co=t=>{const e=Je;return Qa(t),t.scope.on(),()=>{t.scope.off(),Qa(e)}},bp=()=>{Je&&Je.scope.off(),Qa(null)};function ky(t){return t.vnode.shapeFlag&4}let ko=!1;function Bb(t,e=!1,n=!1){e&&vu(e);const{props:r,children:s}=t.vnode,i=ky(t);ab(t,r,i,e),hb(t,s,n);const o=i?$b(t,e):void 0;return e&&vu(!1),o}function $b(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ZT);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?qb(t):null,i=Co(t);Or();const o=pr(r,t,0,[t.props,s]);if(Nr(),i(),__(o)){if(o.then(bp,bp),e)return o.then(c=>{Eu(t,c,e)}).catch(c=>{ai(c,t,0)});t.asyncDep=o}else Eu(t,o,e)}else Oy(t,e)}function Eu(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=B_(e)),Oy(t,n)}let Ip;function Oy(t,e,n){const r=t.type;if(!t.render){if(!e&&Ip&&!r.render){const s=r.template||qh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Rt(Rt({isCustomElement:i,delimiters:c},o),l);r.render=Ip(s,u)}}t.render=r.render||Wt}{const s=Co(t);Or();try{eb(t)}finally{Nr(),s()}}}const Hb={get(t,e){return Nt(t,"get",""),t[e]}};function qb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hb),slots:t.slots,emit:t.emit,expose:e}}function Oc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(B_(Fh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $i)return $i[n](t)},has(e,n){return n in e||n in $i}})):t.proxy}function wu(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function zb(t){return de(t)&&"__vccOpts"in t}const Xe=(t,e)=>PT(t,e,ko);function At(t,e,n){const r=arguments.length;return r===2?Le(e)&&!fe(e)?Ws(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ws(n)&&(n=[n]),$e(t,e,n))}const Ny="3.4.35";/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wb(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Kb=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gb=t=>t.startsWith("onUpdate:"),Jh=Object.assign,Ir=Array.isArray,xy=t=>My(t)==="[object Set]",Ap=t=>My(t)==="[object Date]",Dy=t=>typeof t=="function",lo=t=>typeof t=="string",Tu=t=>typeof t=="symbol",bu=t=>t!==null&&typeof t=="object",Qb=Object.prototype.toString,My=t=>Qb.call(t),Ly=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yb=/\B([A-Z])/g,Vy=Ly(t=>t.replace(Yb,"-$1").toLowerCase()),Xb=Ly(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jb=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Iu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Zb=t=>{const e=lo(t)?Number(t):NaN;return isNaN(e)?t:e},eI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tI=Wb(eI);function Fy(t){return!!t||t===""}function nI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Nc(t[r],e[r]);return n}function Nc(t,e){if(t===e)return!0;let n=Ap(t),r=Ap(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tu(t),r=Tu(e),n||r)return t===e;if(n=Ir(t),r=Ir(e),n||r)return n&&r?nI(t,e):!1;if(n=bu(t),r=bu(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Nc(t[o],e[o]))return!1}}return String(t)===String(e)}function rI(t,e){return t.findIndex(n=>Nc(n,e))}/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const sI="http://www.w3.org/2000/svg",iI="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,Rp=bn&&bn.createElement("template"),oI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bn.createElementNS(sI,t):e==="mathml"?bn.createElementNS(iI,t):n?bn.createElement(t,{is:n}):bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rp.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Rp.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gn="transition",Ci="animation",uo=Symbol("_vtc"),xc=(t,{slots:e})=>At(BT,aI(t),e);xc.displayName="Transition";const Uy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xc.props=Jh({},W_,Uy);const $r=(t,e=[])=>{Ir(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sp=t=>t?Ir(t)?t.some(e=>e.length>1):t.length>1:!1;function aI(t){const e={};for(const A in t)A in Uy||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,P=cI(s),k=P&&P[0],N=P&&P[1],{onBeforeEnter:x,onEnter:R,onEnterCancelled:b,onLeave:O,onLeaveCancelled:M,onBeforeAppear:L=x,onAppear:w=R,onAppearCancelled:y=b}=e,_=(A,T,me)=>{Hr(A,T?h:c),Hr(A,T?u:o),me&&me()},E=(A,T)=>{A._isLeaving=!1,Hr(A,d),Hr(A,g),Hr(A,m),T&&T()},S=A=>(T,me)=>{const ye=A?w:R,J=()=>_(T,A,me);$r(ye,[T,J]),Pp(()=>{Hr(T,A?l:i),Qn(T,A?h:c),Sp(ye)||Cp(T,r,k,J)})};return Jh(e,{onBeforeEnter(A){$r(x,[A]),Qn(A,i),Qn(A,o)},onBeforeAppear(A){$r(L,[A]),Qn(A,l),Qn(A,u)},onEnter:S(!1),onAppear:S(!0),onLeave(A,T){A._isLeaving=!0;const me=()=>E(A,T);Qn(A,d),Qn(A,m),hI(),Pp(()=>{A._isLeaving&&(Hr(A,d),Qn(A,g),Sp(O)||Cp(A,r,N,me))}),$r(O,[A,me])},onEnterCancelled(A){_(A,!1),$r(b,[A])},onAppearCancelled(A){_(A,!0),$r(y,[A])},onLeaveCancelled(A){E(A),$r(M,[A])}})}function cI(t){if(t==null)return null;if(bu(t))return[xl(t.enter),xl(t.leave)];{const e=xl(t);return[e,e]}}function xl(t){return Zb(t)}function Qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[uo]||(t[uo]=new Set)).add(e)}function Hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[uo];n&&(n.delete(e),n.size||(t[uo]=void 0))}function Pp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lI=0;function Cp(t,e,n,r){const s=t._endId=++lI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=uI(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},c+1),t.addEventListener(u,m)}function uI(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Gn}Delay`),i=r(`${Gn}Duration`),o=kp(s,i),c=r(`${Ci}Delay`),l=r(`${Ci}Duration`),u=kp(c,l);let h=null,d=0,m=0;e===Gn?o>0&&(h=Gn,d=o,m=i.length):e===Ci?u>0&&(h=Ci,d=u,m=l.length):(d=Math.max(o,u),h=d>0?o>u?Gn:Ci:null,m=h?h===Gn?i.length:l.length:0);const g=h===Gn&&/\b(transform|all)(,|$)/.test(r(`${Gn}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function kp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Op(n)+Op(t[r])))}function Op(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function hI(){return document.body.offsetHeight}function fI(t,e,n){const r=t[uo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Np=Symbol("_vod"),dI=Symbol("_vsh"),pI=Symbol(""),mI=/(^|;)\s*display\s*:/;function gI(t,e,n){const r=t.style,s=lo(n);let i=!1;if(n&&!s){if(e)if(lo(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Sa(r,c,"")}else for(const o in e)n[o]==null&&Sa(r,o,"");for(const o in n)o==="display"&&(i=!0),Sa(r,o,n[o])}else if(s){if(e!==n){const o=r[pI];o&&(n+=";"+o),r.cssText=n,i=mI.test(n)}}else e&&t.removeAttribute("style");Np in t&&(t[Np]=i?r.display:"",t[dI]&&(r.display="none"))}const xp=/\s*!important$/;function Sa(t,e,n){if(Ir(n))n.forEach(r=>Sa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_I(t,e);xp.test(n)?t.setProperty(Vy(r),n.replace(xp,""),"important"):t[r]=n}}const Dp=["Webkit","Moz","ms"],Dl={};function _I(t,e){const n=Dl[e];if(n)return n;let r=sn(e);if(r!=="filter"&&r in t)return Dl[e]=r;r=Xb(r);for(let s=0;s<Dp.length;s++){const i=Dp[s]+r;if(i in t)return Dl[e]=i}return e}const Mp="http://www.w3.org/1999/xlink";function Lp(t,e,n,r,s,i=tI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mp,e.slice(6,e.length)):t.setAttributeNS(Mp,e,n):n==null||i&&!Fy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tu(n)?String(n):n)}function yI(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Fy(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function vI(t,e,n,r){t.removeEventListener(e,n,r)}const Vp=Symbol("_vei");function EI(t,e,n,r,s=null){const i=t[Vp]||(t[Vp]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=wI(e);if(r){const u=i[e]=II(r,s);Kr(t,c,u,l)}else o&&(vI(t,c,o,l),i[e]=void 0)}}const Fp=/(?:Once|Passive|Capture)$/;function wI(t){let e;if(Fp.test(t)){e={};let r;for(;r=t.match(Fp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vy(t.slice(2)),e]}let Ml=0;const TI=Promise.resolve(),bI=()=>Ml||(TI.then(()=>Ml=0),Ml=Date.now());function II(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(AI(r,n.value),e,5,[r])};return n.value=t,n.attached=bI(),n}function AI(t,e){if(Ir(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Up=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,RI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?fI(t,r,o):e==="style"?gI(t,n,r):Kb(e)?Gb(e)||EI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SI(t,e,r,o))?(yI(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lp(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lp(t,e,r,o))};function SI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Up(e)&&Dy(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Up(e)&&lo(n)?!1:e in t}const Ya=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ir(e)?n=>Jb(e,n):e};function PI(t){t.target.composing=!0}function jp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fs=Symbol("_assign"),uL={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Fs]=Ya(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Iu(c)),t[Fs](c)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",PI),Kr(t,"compositionend",jp),Kr(t,"change",jp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Fs]=Ya(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Iu(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},hL={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xy(e);Kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Iu(Xa(o)):Xa(o));t[Fs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Dr(()=>{t._assigning=!1})}),t[Fs]=Ya(r)},mounted(t,{value:e,modifiers:{number:n}}){Bp(t,e)},beforeUpdate(t,e,n){t[Fs]=Ya(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Bp(t,e)}};function Bp(t,e,n){const r=t.multiple,s=Ir(e);if(!(r&&!s&&!xy(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Xa(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(h=>String(h)===String(l)):c.selected=rI(e,l)>-1}else c.selected=e.has(l);else if(Nc(Xa(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xa(t){return"_value"in t?t._value:t.value}const CI=["ctrl","shift","alt","meta"],kI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CI.some(n=>t[`${n}Key`]&&!e.includes(n))},fL=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=kI[e[o]];if(c&&c(s,e))return}return t(s,...i)})},jy=Jh({patchProp:RI},oI);let zi,$p=!1;function OI(){return zi||(zi=yb(jy))}function NI(){return zi=$p?zi:vb(jy),$p=!0,zi}const xI=(...t)=>{const e=OI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$y(r);if(!s)return;const i=e._component;!Dy(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,By(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},DI=(...t)=>{const e=NI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$y(r);if(s)return n(s,!0,By(s))},e};function By(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $y(t){return lo(t)?document.querySelector(t):t}const MI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,LI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,VI=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function FI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){UI(t);return}return e}function UI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ja(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!VI.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(MI.test(t)||LI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,FI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const jI=/#/g,BI=/&/g,$I=/\//g,HI=/=/g,Zh=/\+/g,qI=/%5e/gi,zI=/%60/gi,WI=/%7c/gi,KI=/%20/gi;function GI(t){return encodeURI(""+t).replace(WI,"|")}function Au(t){return GI(typeof t=="string"?t:JSON.stringify(t)).replace(Zh,"%2B").replace(KI,"+").replace(jI,"%23").replace(BI,"%26").replace(zI,"`").replace(qI,"^").replace($I,"%2F")}function Ll(t){return Au(t).replace(HI,"%3D")}function Za(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function QI(t){return Za(t.replace(Zh," "))}function YI(t){return Za(t.replace(Zh," "))}function XI(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=QI(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=YI(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function JI(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ll(t)}=${Au(n)}`).join("&"):`${Ll(t)}=${Au(e)}`:Ll(t)}function ZI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>JI(e,t[e])).filter(Boolean).join("&")}const eA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,tA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,nA=/^([/\\]\s*){2,}[^/\\]/,rA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,sA=/\/$|\/\?|\/#/,iA=/^\.?\//;function ds(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?eA.test(t):tA.test(t)||(e.acceptRelative?nA.test(t):!1)}function oA(t){return!!t&&rA.test(t)}function Ru(t="",e){return e?sA.test(t):t.endsWith("/")}function ef(t="",e){if(!e)return(Ru(t)?t.slice(0,-1):t)||"/";if(!Ru(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Su(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Ru(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function aA(t=""){return t.startsWith("/")}function Hp(t=""){return aA(t)?t:"/"+t}function cA(t,e){if(qy(e)||ds(t))return t;const n=ef(e);return t.startsWith(n)?t:tf(n,t)}function qp(t,e){if(qy(e))return t;const n=ef(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Hy(t,e){const n=hA(t),r={...XI(n.search),...e};return n.search=ZI(r),fA(n)}function qy(t){return!t||t==="/"}function lA(t){return t&&t!=="/"}function tf(t,...e){let n=t||"";for(const r of e.filter(s=>lA(s)))if(n){const s=r.replace(iA,"");n=Su(n)+s}else n=r;return n}function zy(...t){var o,c,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,m]of h.split(e).entries())if(!(!m||m===".")){if(m===".."){if(r.length===1&&ds(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+m;continue}r.push(m),s++}}let i=r.join("/");return s>=0?(c=n[0])!=null&&c.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function uA(t,e,n={}){return n.trailingSlash||(t=Su(t),e=Su(e)),n.leadingSlash||(t=Hp(t),e=Hp(e)),n.encoding||(t=Za(t),e=Za(e)),t===e}const Wy=Symbol.for("ufo:protocolRelative");function hA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,m=""]=n;return{protocol:d.toLowerCase(),pathname:m,href:d+m,auth:"",host:"",search:"",hash:""}}if(!ds(t,{acceptRelative:!0}))return zp(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",c=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(c=c.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=zp(c);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[Wy]:!r}}function zp(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function fA(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Wy]?(t.protocol||"")+"//":"")+s+i+e+n+r}class dA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function pA(t){var l,u,h,d,m;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((m=t.request)==null?void 0:m.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,c=new dA(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(c,g,{get(){return t[g]}});for(const[g,P]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(c,g,{get(){return t.response&&t.response[P]}});return c}const mA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Wp(t="GET"){return mA.has(t.toUpperCase())}function gA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const _A=new Set(["image/svg","application/xml","application/xhtml","application/html"]),yA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function vA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return yA.test(e)?"json":_A.has(e)||e.startsWith("text/")?"text":"blob"}function EA(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const wA=new Set([408,409,425,429,500,502,503,504]),TA=new Set([101,204,205,304]);function Ky(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(c){const l=c.error&&c.error.name==="AbortError"&&!c.options.timeout||!1;if(c.options.retry!==!1&&!l){let h;typeof c.options.retry=="number"?h=c.options.retry:h=Wp(c.options.method)?0:1;const d=c.response&&c.response.status||500;if(h>0&&(Array.isArray(c.options.retryStatusCodes)?c.options.retryStatusCodes.includes(d):wA.has(d))){const m=c.options.retryDelay||0;return m>0&&await new Promise(g=>setTimeout(g,m)),i(c.request,{...c.options,retry:h-1})}}const u=pA(c);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:EA(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=cA(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=Hy(h.request,{...h.options.params,...h.options.query}))),h.options.body&&Wp(h.options.method)&&(gA(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const P=new r;d=setTimeout(()=>P.abort(),h.options.timeout),h.options.signal=P.signal}try{h.response=await e(h.request,h.options)}catch(P){return h.error=P,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{d&&clearTimeout(d)}if(h.response.body&&!TA.has(h.response.status)&&h.options.method!=="HEAD"){const P=(h.options.parseResponse?"json":h.options.responseType)||vA(h.response.headers.get("content-type")||"");switch(P){case"json":{const k=await h.response.text(),N=h.options.parseResponse||Ja;h.response._data=N(k);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[P]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...c)=>e(...c),o.create=(c={})=>Ky({...t,defaults:{...t.defaults,...c}}),o}const nf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),bA=nf.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),IA=nf.Headers,AA=nf.AbortController,RA=Ky({fetch:bA,Headers:IA,AbortController:AA}),SA=RA,PA=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},ec=PA().app,CA=()=>ec.baseURL,kA=()=>ec.buildAssetsDir,rf=(...t)=>zy(Gy(),kA(),...t),Gy=(...t)=>{const e=ec.cdnURL||ec.baseURL;return t.length?zy(e,...t):e};globalThis.__buildAssetsURL=rf,globalThis.__publicAssetsURL=Gy;globalThis.$fetch||(globalThis.$fetch=SA.create({baseURL:CA()}));function Pu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Pu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const OA={run:t=>t()},NA=()=>OA,Qy=typeof console.createTask<"u"?console.createTask:NA;function xA(t,e){const n=e.shift(),r=Qy(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function DA(t,e){const n=e.shift(),r=Qy(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Vl(t,e){for(const n of[...t])n(e)}class MA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Pu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Pu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(xA,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(DA,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Vl(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Vl(this._after,s)}):(this._after&&s&&Vl(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Yy(){return new MA}function LA(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,c)=>{c||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,c)=>{r(o),e=o;try{return s?s.run(o,c):c()}finally{n||(e=void 0)}},async callAsync(o,c){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Cu.add(u);try{const h=s?s.run(o,c):c();return n||(e=void 0),await h}finally{Cu.delete(u)}}}}function VA(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=LA({...t,...r})),e[n],e[n]}}}const tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Kp="__unctx__",FA=tc[Kp]||(tc[Kp]=VA()),UA=(t,e={})=>FA.get(t,e),Gp="__unctx_async_handlers__",Cu=tc[Gp]||(tc[Gp]=new Set);function ho(t){const e=[];for(const s of Cu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const ku={name:"page",mode:"out-in"},jA=!1,BA=!1,dL={componentName:"NuxtLink"},$A=null,HA="#__nuxt",Xy="nuxt-app",Qp=36e5;function Jy(t=Xy){return UA(t,{asyncContext:!1})}const qA="__nuxt_plugin";function zA(t){let e=0;const n={_name:Xy,_scope:kh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.12.4"},get vue(){return n.vueApp.version}},payload:Rn({data:Rn({}),state:xr({}),once:new Set,_errors:Rn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Oh()?n._scope.run(()=>Yp(n,s)):Yp(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Rn({}),_payloadRevivers:{},...t};if(window.__NUXT__)for(const s in window.__NUXT__)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],window.__NUXT__[s]);break;default:n.payload[s]=window.__NUXT__[s]}n.hooks=Yy(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;ga(n,o,i),ga(n.vueApp.config.globalProperties,o,i)},ga(n.vueApp,"$nuxt",n),ga(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Ke;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function WA(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function KA(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function GA(t,e){const n=[],r=[],s=[],i=[];let o=0;async function c(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(m=>m._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=KA(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([m,g])=>{m.has(l._name)&&(m.delete(l._name),m.size===0&&(o++,await c(g)))})))});l.parallel?s.push(d.catch(m=>i.push(m))):await d}}for(const l of e)WA(t,l);for(const l of e)await c(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Xt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[qA]:!0,_name:e})}function Yp(t,e,n){const r=()=>e();return Jy(t._name).set(t),t.vueApp.runWithContext(r)}function QA(t){var n;let e;return zh()&&(e=(n=Xh())==null?void 0:n.appContext.app.$nuxt),e=e||Jy(t).tryUse(),e||null}function Ke(t){const e=QA(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Oo(t){return Ke().$config}function ga(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function YA(t,e){return{ctx:{table:t},matchAll:n=>ev(n,t)}}function Zy(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Zy(s)])):new Map(Object.entries(t[n]));return e}function XA(t){return YA(Zy(t))}function ev(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Xp(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Xp(e.dynamic))if(t.startsWith(i+"/")){const c="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...ev(c,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Xp(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Fl(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ou(t,e,n=".",r){if(!Fl(e))return Ou(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Fl(o)&&Fl(s[i])?s[i]=Ou(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function JA(t){return(...e)=>e.reduce((n,r)=>Ou(n,r,"",t),{})}const tv=JA();function ZA(t,e){try{return e in t}catch{return!1}}var e1=Object.defineProperty,t1=(t,e,n)=>e in t?e1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qr=(t,e,n)=>(t1(t,typeof e!="symbol"?e+"":e,n),n);class Nu extends Error{constructor(e,n={}){super(e,n),qr(this,"statusCode",500),qr(this,"fatal",!1),qr(this,"unhandled",!1),qr(this,"statusMessage"),qr(this,"data"),qr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Du(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=nv(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}qr(Nu,"__h3_error__",!0);function xu(t){if(typeof t=="string")return new Nu(t);if(n1(t))return t;const e=new Nu(t.message??t.statusMessage??"",{cause:t.cause||t});if(ZA(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Du(t.statusCode,e.statusCode):t.status&&(e.statusCode=Du(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;nv(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function n1(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const r1=/[^\u0009\u0020-\u007E]/g;function nv(t=""){return t.replace(r1,"")}function Du(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const rv=Symbol("layout-meta"),No=Symbol("route"),Yt=()=>{var t;return(t=Ke())==null?void 0:t.$router},sf=()=>zh()?yt(No,Ke()._route):Ke()._route;function pL(t){return t}const s1=()=>{try{if(Ke()._processingMiddleware)return!0}catch{return!1}return!1},mL=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?i1(t):Yt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,m])=>m!==void 0).map(([d,m])=>`${d.toLowerCase()}=${m}`).join(", ");return open(n,l,h),Promise.resolve()}const r=ds(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&oA(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=s1();if(!s&&i)return t;const o=Yt(),c=Ke();return s?(c._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?c.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function i1(t){return Hy(t.path||"",t.query||{})+(t.hash||"")}const sv="__nuxt_error",Dc=()=>DT(Ke().payload,"error"),Cs=t=>{const e=Mc(t);try{const n=Ke(),r=Dc();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},o1=async(t={})=>{const e=Ke(),n=Dc();e.callHook("app:error:cleared",t),t.redirect&&await Yt().replace(t.redirect),n.value=$A},a1=t=>!!t&&typeof t=="object"&&sv in t,Mc=t=>{const e=xu(t);return Object.defineProperty(e,sv,{value:!0,configurable:!1,writable:!1}),e},c1=-1,l1=-2,u1=-3,h1=-4,f1=-5,d1=-6;function p1(t,e){return m1(JSON.parse(t),e)}function m1(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===c1)return;if(i===u1)return NaN;if(i===h1)return 1/0;if(i===f1)return-1/0;if(i===d1)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const c=n[i];if(!c||typeof c!="object")r[i]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const l=c[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(c[1]));switch(l){case"Date":r[i]=new Date(c[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<c.length;g+=1)h.add(s(c[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<c.length;g+=2)d.set(s(c[g]),s(c[g+1]));break;case"RegExp":r[i]=new RegExp(c[1],c[2]);break;case"Object":r[i]=Object(c[1]);break;case"BigInt":r[i]=BigInt(c[1]);break;case"null":const m=Object.create(null);r[i]=m;for(let g=1;g<c.length;g+=2)m[c[g]]=s(c[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(c.length);r[i]=l;for(let u=0;u<c.length;u+=1){const h=c[u];h!==l1&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in c){const h=c[u];l[u]=s(h)}}return r[i]}return s(0)}function g1(t){return Array.isArray(t)?t:[t]}const _1=["title","titleTemplate","script","style","noscript"],Pa=["base","meta","link","style","script","noscript"],y1=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],v1=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],iv=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],E1=typeof window<"u";function of(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Jp(t){return t._h||of(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function ov(t,e){const{props:n,tag:r}=t;if(v1.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return`${r}:${i}:${o}`}return!1}function Zp(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function w1(t,e,n){const r={tag:t,props:await av(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return iv.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||_1.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function T1(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>s.trim()).filter(Boolean).join(n)}async function av(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=T1(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!iv.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const b1=10;async function I1(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&y1.includes(n)).forEach(([n,r])=>{const s=g1(r);e.push(...s.map(i=>w1(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<b1)+r,n))}const em={base:-10,title:10},tm={critical:-80,high:-10,low:20};function nc(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in em&&(e=em[t.tag]),typeof n=="string"&&n in tm?e+tm[n]:e)}const A1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],nm=["onload","onerror","onabort","onprogress","onloadstart"],Yn="%separator";function Ca(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let c;return["s","pageTitle"].includes(o)?c=e.pageTitle:o.includes(".")?c=o.split(".").reduce((l,u)=>l&&l[u]||void 0,e):c=e[o],typeof c<"u"?(c||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const c=r(o.slice(1));typeof c=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,u)=>`${c}${u}`).trim())}),t.includes(Yn)&&(t.endsWith(Yn)&&(t=t.slice(0,-Yn.length).trim()),t.startsWith(Yn)&&(t=t.slice(Yn.length).trim()),t=t.replace(new RegExp(`\\${Yn}\\s*\\${Yn}`,"g"),Yn),t=Ca(t,{separator:n},n)),t}async function cv(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(d=>({tag:d,id:Pa.includes(d.tag)?Jp(d):d.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const d of["body","head"]){const m=(h=n[d])==null?void 0:h.children,g=[];for(const P of[...m].filter(k=>Pa.includes(k.tagName.toLowerCase()))){const k={tag:P.tagName.toLowerCase(),props:await av(P.getAttributeNames().reduce((R,b)=>({...R,[b]:P.getAttribute(b)}),{})),innerHTML:P.innerHTML};let N=1,x=ov(k);for(;x&&g.find(R=>R._d===x);)x=`${x}:${N++}`;k._d=x||void 0,g.push(k),i.elMap[P.getAttribute("data-hid")||Jp(k)]=P}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(d,m,g){const P=`${d}:${m}`;i.sideEffects[P]=g,delete i.pendingSideEffects[P]}function c({id:d,$el:m,tag:g}){const P=g.tag.endsWith("Attrs");i.elMap[d]=m,P||(["textContent","innerHTML"].forEach(k=>{g[k]&&g[k]!==m[k]&&(m[k]=g[k])}),o(d,"el",()=>{var k;(k=i.elMap[d])==null||k.remove(),delete i.elMap[d]}));for(const[k,N]of Object.entries(g._eventHandlers||{}))m.getAttribute(`data-${k}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:m).addEventListener(k.replace("on",""),N.bind(m)),m.setAttribute(`data-${k}`,""));Object.entries(g.props).forEach(([k,N])=>{const x=`attr:${k}`;if(k==="class")for(const R of(N||"").split(" ").filter(Boolean))P&&o(d,`${x}:${R}`,()=>m.classList.remove(R)),!m.classList.contains(R)&&m.classList.add(R);else if(k==="style")for(const R of(N||"").split(";").filter(Boolean)){const[b,...O]=R.split(":").map(M=>M.trim());o(d,`${x}:${b}`,()=>{m.style.removeProperty(b)}),m.style.setProperty(b,O.join(":"))}else m.getAttribute(k)!==N&&m.setAttribute(k,N===!0?"":String(N)),P&&o(d,x,()=>m.removeAttribute(k))})}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of s){const{tag:m,shouldRender:g,id:P}=d;if(g){if(m.tag==="title"){n.title=m.textContent;continue}d.$el=d.$el||i.elMap[P],d.$el?c(d):Pa.includes(m.tag)&&l.push(d)}}for(const d of l){const m=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),c(d),u[m]=u[m]||n.createDocumentFragment(),u[m].appendChild(d.$el)}for(const d of s)await t.hooks.callHook("dom:renderTag",d,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(i.pendingSideEffects).forEach(d=>d()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function R1(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await cv(t,e),delete t._domUpdatePromise,r()}))}function S1(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){R1(i,t)}}}}}const P1=["templateParams","htmlAttrs","bodyAttrs"],C1={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=ov(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let c=r==null?void 0:r.tagDuplicateStrategy;if(!c&&P1.includes(r.tag)&&(c="merge"),c==="merge"){const l=i.props;["class","style"].forEach(u=>{l[u]&&(r.props[u]?(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),r.props[u]=`${l[u]} ${r.props[u]}`):r.props[u]=l[u])}),e[s].props={...l,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(nc(r)>nc(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Pa.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},k1={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},O1=["script","link","bodyAttrs"],N1=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(r=>O1.includes(r.tag)))Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(t.ssr&&nm.includes(r)?n.props[r]=`this.dataset.${r}fired = true`:delete n.props[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||of(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var r,s;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>nm.some(c=>`${c}fired`===o))){const o=i.replace("fired","");(s=(r=n._eventHandlers)==null?void 0:r[o])==null||s.call(e,new Event(o.replace("on","")))}}}}),x1=["link","style","script","noscript"],D1={hooks:{"tag:normalise":({tag:t})=>{t.key&&x1.includes(t.tag)&&(t.props["data-hid"]=t._h=of(t.key))}}},M1={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of A1)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>nc(n)-nc(r))}}},L1={meta:"content",link:"href",htmlAttrs:"lang"},V1=t=>({hooks:{"tags:resolve":e=>{var c;const{tags:n}=e,r=(c=n.find(l=>l.tag==="title"))==null?void 0:c.textContent,s=n.findIndex(l=>l.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=Ca(i.pageTitle||r||"",i,o);for(const l of n.filter(u=>u.processTemplateParams!==!1)){const u=L1[l.tag];u&&typeof l.props[u]=="string"?l.props[u]=Ca(l.props[u],i,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(h=>{typeof l[h]=="string"&&(l[h]=Ca(l[h],i,o))})}t._templateParams=i,t._separator=o,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),F1={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Zp(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=Zp(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},U1={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let lv;function j1(t={}){const e=B1(t);return e.use(S1()),lv=e}function rm(t,e){return!t||t==="server"&&e||t==="client"&&!e}function B1(t={}){const e=Yy();e.addHooks(t.hooks||{}),t.document=t.document||(E1?document:void 0);const n=!t.document,r=()=>{c.dirty=!0,e.callHook("entries:updated",c)};let s=0,i=[];const o=[],c={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(c):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),rm(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return rm(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),e.callHook("entries:updated",c),r()},patch(d){i=i.map(m=>(m._i===h._i&&(m.input=h.input=d),m)),r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await I1(u)){const m={tag:d,entry:u,resolvedOptions:c.resolvedOptions};await e.callHook("tag:normalise",m),l.tags.push(m.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[C1,k1,N1,D1,M1,V1,F1,U1,...(t==null?void 0:t.plugins)||[]].forEach(l=>c.use(l)),c.hooks.callHook("init",c),c}function $1(){return lv}const H1=Ny.startsWith("3");function q1(t){return typeof t=="function"?t():Ne(t)}function Mu(t,e=""){if(t instanceof Promise)return t;const n=q1(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Mu(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Ne(s)]:[r,Mu(s,r)])):n}const z1={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Mu(e.input)}}},uv="usehead";function W1(t){return{install(n){H1&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(uv,t))}}.install}function K1(t={}){t.domDelayFn=t.domDelayFn||(n=>Dr(()=>setTimeout(()=>n(),0)));const e=j1(t);return e.use(z1),e.install=W1(e),e}const Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vu="__unhead_injection_handler__";function G1(t){Lu[Vu]=t}function gL(){if(Vu in Lu)return Lu[Vu]();const t=yt(uv);return t||$1()}let ka,Oa;function Q1(){return ka=$fetch(rf(`builds/meta/${Oo().app.buildId}.json`),{responseType:"json"}),ka.then(t=>{Oa=XA(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),ka}function Lc(){return ka||Q1()}async function af(t){if(await Lc(),!Oa)return console.error("[nuxt] Error creating app manifest matcher.",Oa),{};try{return tv({},...Oa.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function sm(t,e={}){const n=await X1(t,e),r=Ke(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=fv(t).then(i=>i?hv(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const Y1="_payload.json";async function X1(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||ds(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Oo(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await fv(t)?i:r.app.baseURL;return tf(o,n.pathname,Y1+(s?`?${s}`:""))}async function hv(t){const e=fetch(t).then(n=>n.text().then(dv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function fv(t=sf().path){if(t=ef(t),(await Lc()).prerendered.includes(t))return!0;const n=await af(t);return!!n.prerender&&!n.redirect}let _a=null;async function J1(){if(_a)return _a;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await dv(t.textContent||""),n=t.dataset.src?await hv(t.dataset.src):void 0;return _a={...e,...n,...window.__NUXT__},_a}async function dv(t){return await p1(t,Ke()._payloadRevivers)}function Z1(t,e){Ke()._payloadRevivers[t]=e}const im={NuxtError:t=>Mc(t),EmptyShallowRef:t=>so(t==="_"?void 0:t==="0n"?BigInt(0):Ja(t)),EmptyRef:t=>rn(t==="_"?void 0:t==="0n"?BigInt(0):Ja(t)),ShallowRef:t=>so(t),ShallowReactive:t=>Rn(t),Ref:t=>rn(t),Reactive:t=>xr(t)},eR=Xt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in im)Z1(r,im[r]);Object.assign(t.payload,([e,n]=ho(()=>t.runWithContext(J1)),e=await e,n(),e)),window.__NUXT__=t.payload}}),tR=[],nR=Xt({name:"nuxt:head",enforce:"pre",setup(t){const e=K1({plugins:tR});G1(()=>Ke().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await cv(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function rR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function Ul(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const Wi=()=>{},on=Array.isArray,pv=/#/g,sR=/&/g,iR=/\//g,oR=/=/g,aR=/\?/g,mv=/\+/g,cR=/%5B/g,lR=/%5D/g,gv=/%5E/g,uR=/%60/g,_v=/%7B/g,hR=/%7C/g,yv=/%7D/g,fR=/%20/g;function cf(t){return encodeURI(""+t).replace(hR,"|").replace(cR,"[").replace(lR,"]")}function dR(t){return cf(t).replace(_v,"{").replace(yv,"}").replace(gv,"^")}function Fu(t){return cf(t).replace(mv,"%2B").replace(fR,"+").replace(pv,"%23").replace(sR,"%26").replace(uR,"`").replace(_v,"{").replace(yv,"}").replace(gv,"^")}function pR(t){return Fu(t).replace(oR,"%3D")}function mR(t){return cf(t).replace(pv,"%23").replace(aR,"%3F")}function gR(t){return t==null?"":mR(t).replace(iR,"%2F")}function fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _R=/\/$/,yR=t=>t.replace(_R,"");function jl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=TR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:fo(o)}}function vR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function om(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ER(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ks(e.matched[r],n.matched[s])&&vv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wR(t[n],e[n]))return!1;return!0}function wR(t,e){return on(t)?am(t,e):on(e)?am(e,t):t===e}function am(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function TR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var Ki;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ki||(Ki={}));function bR(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yR(t)}const IR=/^[^#]+#/;function AR(t,e){return t.replace(IR,"#")+e}function RR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Vc=()=>({left:window.scrollX,top:window.scrollY});function SR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=RR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cm(t,e){return(history.state?history.state.position-e:-1)+t}const Uu=new Map;function PR(t,e){Uu.set(t,e)}function CR(t){const e=Uu.get(t);return Uu.delete(t),e}let kR=()=>location.protocol+"//"+location.host;function Ev(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),om(l,"")}return om(n,t)+r+s}function OR(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const g=Ev(t,location),P=n.value,k=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===P){o=null;return}N=k?m.position-k.position:0}else r(g);s.forEach(x=>{x(n.value,P,{delta:N,type:po.pop,direction:N?N>0?Ki.forward:Ki.back:Ki.unknown})})};function l(){o=n.value}function u(m){s.push(m);const g=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Ce({},m.state,{scroll:Vc()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function lm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Vc():null}}function NR(t){const{history:e,location:n}=window,r={value:Ev(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:kR()+t+l;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(l,u){const h=Ce({},e.state,lm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=Ce({},s.value,e.state,{forward:l,scroll:Vc()});i(h.current,h,!0);const d=Ce({},lm(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function wv(t){t=bR(t);const e=NR(t),n=OR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:AR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xR(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),wv(t)}function DR(t){return typeof t=="string"||t&&typeof t=="object"}function Tv(t){return typeof t=="string"||typeof t=="symbol"}const bv=Symbol("");var um;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(um||(um={}));function Gs(t,e){return Ce(new Error,{type:t,[bv]:!0},e)}function Tn(t,e){return t instanceof Error&&bv in t&&(e==null||!!(t.type&e))}const hm="[^/]+?",MR={sensitive:!1,strict:!1,start:!0,end:!0},LR=/[.+*?^${}()[\]/\\]/g;function VR(t,e){const n=Ce({},MR,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(LR,"\\$&"),g+=40;else if(m.type===1){const{value:P,repeatable:k,optional:N,regexp:x}=m;i.push({name:P,repeatable:k,optional:N});const R=x||hm;if(R!==hm){g+=10;try{new RegExp(`(${R})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${P}" (${R}): `+O.message)}}let b=k?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(b=N&&u.length<2?`(?:/${b})`:"/"+b),N&&(b+="?"),s+=b,g+=20,N&&(g+=-8),k&&(g+=-20),R===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",P=i[m-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:P,repeatable:k,optional:N}=g,x=P in u?u[P]:"";if(on(x)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const R=on(x)?x.join("/"):x;if(!R)if(N)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);h+=R}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function FR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Iv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=FR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fm(r))return 1;if(fm(s))return-1}return s.length-r.length}function fm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UR={type:0,value:""},jR=/[a-zA-Z0-9_]/;function BR(t){if(!t)return[[]];if(t==="/")return[[UR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:jR.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function $R(t,e,n){const r=VR(BR(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HR(t,e){const n=[],r=new Map;e=mm({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const P=!g,k=qR(d);k.aliasOf=g&&g.record;const N=mm(e,d),x=[k];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of O)x.push(Ce({},k,{components:g?g.record.components:k.components,path:M,aliasOf:g?g.record:k}))}let R,b;for(const O of x){const{path:M}=O;if(m&&M[0]!=="/"){const L=m.record.path,w=L[L.length-1]==="/"?"":"/";O.path=m.record.path+(M&&w+M)}if(R=$R(O,m,N),g?g.alias.push(R):(b=b||R,b!==R&&b.alias.push(R),P&&d.name&&!pm(R)&&o(d.name)),Av(R)&&l(R),k.children){const L=k.children;for(let w=0;w<L.length;w++)i(L[w],R,g&&g.children[w])}g=g||R}return b?()=>{o(b)}:Wi}function o(d){if(Tv(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const m=KR(d,n);n.splice(m,0,d),d.record.name&&!pm(d)&&r.set(d.record.name,d)}function u(d,m){let g,P={},k,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Gs(1,{location:d});N=g.record.name,P=Ce(dm(m.params,g.keys.filter(b=>!b.optional).concat(g.parent?g.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),d.params&&dm(d.params,g.keys.map(b=>b.name))),k=g.stringify(P)}else if(d.path!=null)k=d.path,g=n.find(b=>b.re.test(k)),g&&(P=g.parse(k),N=g.record.name);else{if(g=m.name?r.get(m.name):n.find(b=>b.re.test(m.path)),!g)throw Gs(1,{location:d,currentLocation:m});N=g.record.name,P=Ce({},m.params,d.params),k=g.stringify(P)}const x=[];let R=g;for(;R;)x.unshift(R.record),R=R.parent;return{name:N,path:k,params:P,matched:x,meta:WR(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function dm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function qR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WR(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function mm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function KR(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Iv(t,e[i])<0?r=i:n=i+1}const s=GR(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GR(t){let e=t;for(;e=e.parent;)if(Av(e)&&Iv(t,e)===0)return e}function Av({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function QR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mv," "),o=i.indexOf("="),c=fo(o<0?i:i.slice(0,o)),l=o<0?null:fo(i.slice(o+1));if(c in e){let u=e[c];on(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function gm(t){let e="";for(let n in t){const r=t[n];if(n=pR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&Fu(i)):[r&&Fu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const XR=Symbol(""),_m=Symbol(""),lf=Symbol(""),uf=Symbol(""),ju=Symbol("");function ki(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Gs(4,{from:n,to:e})):m instanceof Error?l(m):DR(m)?l(Gs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function Bl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(JR(l)){const h=(l.__vccOpts||l)[e];h&&i.push(rr(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const d=rR(h)?h.default:h;o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&rr(g,n,r,o,c,s)()}))}}return i}function JR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ym(t){const e=yt(lf),n=yt(uf),r=Xe(()=>{const l=Ne(t.to);return e.resolve(l)}),s=Xe(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(Ks.bind(null,h));if(m>-1)return m;const g=vm(l[u-2]);return u>1&&vm(h)===g&&d[d.length-1].path!==g?d.findIndex(Ks.bind(null,l[u-2])):m}),i=Xe(()=>s.value>-1&&nS(n.params,r.value.params)),o=Xe(()=>s.value>-1&&s.value===n.matched.length-1&&vv(n.params,r.value.params));function c(l={}){return tS(l)?e[Ne(t.replace)?"replace":"push"](Ne(t.to)).catch(Wi):Promise.resolve()}return{route:r,href:Xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const ZR=Fn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ym,setup(t,{slots:e}){const n=xr(ym(t)),{options:r}=yt(lf),s=Xe(()=>({[Em(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Em(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:At("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eS=ZR;function tS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Em=(t,e,n)=>t??e??n,rS=Fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=yt(ju),s=Xe(()=>t.route||r.value),i=yt(_m,0),o=Xe(()=>{let u=Ne(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),c=Xe(()=>s.value.matched[o.value]);Zr(_m,Xe(()=>o.value+1)),Zr(XR,c),Zr(ju,s);const l=rn();return mr(()=>[l.value,c.value,t.name],([u,h,d],[m,g,P])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Ks(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=c.value,m=d&&d.components[h];if(!m)return wm(n.default,{Component:m,route:u});const g=d.props[h],P=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=At(m,Ce({},P,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return wm(n.default,{Component:N,route:u})||N}}});function wm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rv=rS;function sS(t){const e=HR(t.routes,t),n=t.parseQuery||QR,r=t.stringifyQuery||gm,s=t.history,i=ki(),o=ki(),c=ki(),l=so(en);let u=en;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ul.bind(null,j=>""+j),d=Ul.bind(null,gR),m=Ul.bind(null,fo);function g(j,Z){let Y,te;return Tv(j)?(Y=e.getRecordMatcher(j),te=Z):te=j,e.addRoute(te,Y)}function P(j){const Z=e.getRecordMatcher(j);Z&&e.removeRoute(Z)}function k(){return e.getRoutes().map(j=>j.record)}function N(j){return!!e.getRecordMatcher(j)}function x(j,Z){if(Z=Ce({},Z||l.value),typeof j=="string"){const C=jl(n,j,Z.path),V=e.resolve({path:C.path},Z),B=s.createHref(C.fullPath);return Ce(C,V,{params:m(V.params),hash:fo(C.hash),redirectedFrom:void 0,href:B})}let Y;if(j.path!=null)Y=Ce({},j,{path:jl(n,j.path,Z.path).path});else{const C=Ce({},j.params);for(const V in C)C[V]==null&&delete C[V];Y=Ce({},j,{params:d(C)}),Z.params=d(Z.params)}const te=e.resolve(Y,Z),Ee=j.hash||"";te.params=h(m(te.params));const ke=vR(r,Ce({},j,{hash:dR(Ee),path:te.path})),I=s.createHref(ke);return Ce({fullPath:ke,hash:Ee,query:r===gm?YR(j.query):j.query||{}},te,{redirectedFrom:void 0,href:I})}function R(j){return typeof j=="string"?jl(n,j,l.value.path):Ce({},j)}function b(j,Z){if(u!==j)return Gs(8,{from:Z,to:j})}function O(j){return w(j)}function M(j){return O(Ce(R(j),{replace:!0}))}function L(j){const Z=j.matched[j.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let te=typeof Y=="function"?Y(j):Y;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=R(te):{path:te},te.params={}),Ce({query:j.query,hash:j.hash,params:te.path!=null?{}:j.params},te)}}function w(j,Z){const Y=u=x(j),te=l.value,Ee=j.state,ke=j.force,I=j.replace===!0,C=L(Y);if(C)return w(Ce(R(C),{state:typeof C=="object"?Ce({},Ee,C.state):Ee,force:ke,replace:I}),Z||Y);const V=Y;V.redirectedFrom=Z;let B;return!ke&&ER(r,te,Y)&&(B=Gs(16,{to:V,from:te}),$t(te,te,!0,!1)),(B?Promise.resolve(B):E(V,te)).catch(U=>Tn(U)?Tn(U,2)?U:Jt(U):ee(U,V,te)).then(U=>{if(U){if(Tn(U,2))return w(Ce({replace:I},R(U.to),{state:typeof U.to=="object"?Ce({},Ee,U.to.state):Ee,force:ke}),Z||V)}else U=A(V,te,!0,I,Ee);return S(V,te,U),U})}function y(j,Z){const Y=b(j,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(j){const Z=$n.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(j):j()}function E(j,Z){let Y;const[te,Ee,ke]=iS(j,Z);Y=Bl(te.reverse(),"beforeRouteLeave",j,Z);for(const C of te)C.leaveGuards.forEach(V=>{Y.push(rr(V,j,Z))});const I=y.bind(null,j,Z);return Y.push(I),St(Y).then(()=>{Y=[];for(const C of i.list())Y.push(rr(C,j,Z));return Y.push(I),St(Y)}).then(()=>{Y=Bl(Ee,"beforeRouteUpdate",j,Z);for(const C of Ee)C.updateGuards.forEach(V=>{Y.push(rr(V,j,Z))});return Y.push(I),St(Y)}).then(()=>{Y=[];for(const C of ke)if(C.beforeEnter)if(on(C.beforeEnter))for(const V of C.beforeEnter)Y.push(rr(V,j,Z));else Y.push(rr(C.beforeEnter,j,Z));return Y.push(I),St(Y)}).then(()=>(j.matched.forEach(C=>C.enterCallbacks={}),Y=Bl(ke,"beforeRouteEnter",j,Z,_),Y.push(I),St(Y))).then(()=>{Y=[];for(const C of o.list())Y.push(rr(C,j,Z));return Y.push(I),St(Y)}).catch(C=>Tn(C,8)?C:Promise.reject(C))}function S(j,Z,Y){c.list().forEach(te=>_(()=>te(j,Z,Y)))}function A(j,Z,Y,te,Ee){const ke=b(j,Z);if(ke)return ke;const I=Z===en,C=As?history.state:{};Y&&(te||I?s.replace(j.fullPath,Ce({scroll:I&&C&&C.scroll},Ee)):s.push(j.fullPath,Ee)),l.value=j,$t(j,Z,Y,I),Jt()}let T;function me(){T||(T=s.listen((j,Z,Y)=>{if(!cn.listening)return;const te=x(j),Ee=L(te);if(Ee){w(Ce(Ee,{replace:!0}),te).catch(Wi);return}u=te;const ke=l.value;As&&PR(cm(ke.fullPath,Y.delta),Vc()),E(te,ke).catch(I=>Tn(I,12)?I:Tn(I,2)?(w(I.to,te).then(C=>{Tn(C,20)&&!Y.delta&&Y.type===po.pop&&s.go(-1,!1)}).catch(Wi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ee(I,te,ke))).then(I=>{I=I||A(te,ke,!1),I&&(Y.delta&&!Tn(I,8)?s.go(-Y.delta,!1):Y.type===po.pop&&Tn(I,20)&&s.go(-1,!1)),S(te,ke,I)}).catch(Wi)}))}let ye=ki(),J=ki(),ne;function ee(j,Z,Y){Jt(j);const te=J.list();return te.length?te.forEach(Ee=>Ee(j,Z,Y)):console.error(j),Promise.reject(j)}function Et(){return ne&&l.value!==en?Promise.resolve():new Promise((j,Z)=>{ye.add([j,Z])})}function Jt(j){return ne||(ne=!j,me(),ye.list().forEach(([Z,Y])=>j?Y(j):Z()),ye.reset()),j}function $t(j,Z,Y,te){const{scrollBehavior:Ee}=t;if(!As||!Ee)return Promise.resolve();const ke=!Y&&CR(cm(j.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return Dr().then(()=>Ee(j,Z,ke)).then(I=>I&&SR(I)).catch(I=>ee(I,j,Z))}const je=j=>s.go(j);let Be;const $n=new Set,cn={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:x,options:t,push:O,replace:M,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:J.add,isReady:Et,install(j){const Z=this;j.component("RouterLink",eS),j.component("RouterView",Rv),j.config.globalProperties.$router=Z,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Ne(l)}),As&&!Be&&l.value===en&&(Be=!0,O(s.location).catch(Ee=>{}));const Y={};for(const Ee in en)Object.defineProperty(Y,Ee,{get:()=>l.value[Ee],enumerable:!0});j.provide(lf,Z),j.provide(uf,Rn(Y)),j.provide(ju,l);const te=j.unmount;$n.add(j),j.unmount=function(){$n.delete(j),$n.size<1&&(u=en,T&&T(),T=null,l.value=en,Be=!1,ne=!1),te()}}};function St(j){return j.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return cn}function iS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ks(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ks(u,l))||s.push(l))}return[n,r,s]}function oS(t){return yt(uf)}const aS=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Bu=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&aS(t.route,n));return typeof r=="function"?r(t.route):r},cS=(t,e)=>({default:()=>t?At(HT,t===!0?{}:t,e):e});function hf(t){return Array.isArray(t)?t:[t]}const lS="modulepreload",uS=function(t,e){return t[0]==="."?new URL(t,e).href:t},Tm={},hS=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=uS(l,r),l in Tm)return;Tm[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const P=i[g];if(P.href===l&&(!u||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":lS,u||(m.as="script",m.crossOrigin=""),m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),u)return new Promise((g,P)=>{m.addEventListener("load",g),m.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},We=(...t)=>hS(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),fS={middleware:"auth"},dS={middleware:"auth"},bm=[{name:"Admin",path:"/Admin",meta:fS||{},component:()=>We(()=>import("./CG5J0ESt.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:dS||{},component:()=>We(()=>import("./eLTCcIik.js"),__vite__mapDeps([4,5,2,6]),import.meta.url).then(t=>t.default||t)},{name:"Bio",path:"/Bio",component:()=>We(()=>import("./CSgGFgPX.js"),__vite__mapDeps([7,8]),import.meta.url).then(t=>t.default||t)},{name:"Contact",path:"/Contact",component:()=>We(()=>import("./DjsxxH3d.js"),__vite__mapDeps([9,10]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>We(()=>import("./CYZHw5WO.js"),__vite__mapDeps([11,12,13,14]),import.meta.url).then(t=>t.default||t)},{name:"ForSale",path:"/ForSale",component:()=>We(()=>import("./DedIxEpE.js"),__vite__mapDeps([15,1,16]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>We(()=>import("./DlkKn1nV.js"),__vite__mapDeps([17,12,13]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>We(()=>import("./BeLaa6fR.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",component:()=>We(()=>import("./D0VIC4og.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Login",path:"/Login",component:()=>We(()=>import("./CLRjMiAH.js"),__vite__mapDeps([18,2]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>We(()=>import("./C9Mb9kRT.js"),__vite__mapDeps([19,12,13,20]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>We(()=>import("./DCaLwmeC.js"),__vite__mapDeps([21,12,13,22]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>We(()=>import("./Bzm3CwVA.js"),__vite__mapDeps([23,5,12,13,24]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio",path:"/Portfolio",component:()=>We(()=>import("./BkIBl9aD.js"),__vite__mapDeps([25,1,26]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>We(()=>import("./BMzM6KQO.js"),__vite__mapDeps([27,12,13]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>We(()=>import("./Cckl32vv.js"),__vite__mapDeps([28,12,13]),import.meta.url).then(t=>t.default||t)},{name:"Stuff",path:"/Stuff",component:()=>We(()=>import("./DRLg5Zvd.js"),__vite__mapDeps([29,12,13]),import.meta.url).then(t=>t.default||t)}],Sv=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?At(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Im(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function pS(t,e){return t===e||e===en?!1:Im(t)!==Im(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const mS={scrollBehavior(t,e,n){var u;const r=Ke(),s=((u=Yt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&pS(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Am(t.hash),behavior:s}:!1;const c=h=>!!(h.meta.pageTransition??ku),l=c(e)&&c(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Am(t.hash),behavior:s}),h(i)})})}};function Am(t){try{const e=document.querySelector(t);if(e)return Number.parseFloat(getComputedStyle(e).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const gS={hashMode:!1,scrollBehaviorType:"auto"},Mt={...gS,...mS},_S=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Ke(),s=Yt();if(([e,n]=ho(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Mc({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),c=s.beforeResolve(u=>{if(c(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Cs(o)),window.history.pushState({},"",t.fullPath)});return!1}})},yS=async t=>{let e,n;const r=([e,n]=ho(()=>af(t.path)),e=await e,n(),e);if(r.redirect)return ds(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},vS=[_S,yS],Gi={auth:()=>We(()=>import("./4U7EzCcu.js"),__vite__mapDeps([30,2]),import.meta.url)};function ES(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),qp(h,"")}const c=qp(r,t),l=!n||uA(c,n,{trailingSlash:!0})?c:n;return l+(l.includes("?")?"":s)+i}const wS=Xt({name:"nuxt:router",enforce:"pre",async setup(t){var N,x;let e,n,r=Oo().app.baseURL;Mt.hashMode&&!r.includes("#")&&(r+="#");const s=((N=Mt.history)==null?void 0:N.call(Mt,r))??(Mt.hashMode?xR(r):wv(r)),i=((x=Mt.routes)==null?void 0:x.call(Mt,bm))??bm;let o;const c=sS({...Mt,scrollBehavior:(R,b,O)=>{if(b===en){o=O;return}if(Mt.scrollBehavior){if(c.options.scrollBehavior=Mt.scrollBehavior,"scrollRestoration"in window.history){const M=c.beforeEach(()=>{M(),window.history.scrollRestoration="manual"})}return Mt.scrollBehavior(R,en,o||O)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(c);const l=so(c.currentRoute.value);c.afterEach((R,b)=>{l.value=b}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=ES(r,window.location,t.payload.path),h=so(c.currentRoute.value),d=()=>{h.value=c.currentRoute.value};t.hook("page:finish",d),c.afterEach((R,b)=>{var O,M,L,w;((M=(O=R.matched[0])==null?void 0:O.components)==null?void 0:M.default)===((w=(L=b.matched[0])==null?void 0:L.components)==null?void 0:w.default)&&d()});const m={};for(const R in h.value)Object.defineProperty(m,R,{get:()=>h.value[R]});t._route=Rn(m),t._middleware=t._middleware||{global:[],named:{}};const g=Dc();c.afterEach(async(R,b,O)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(o1),O&&await t.callHook("page:loading:end"),R.matched.length===0&&await t.runWithContext(()=>Cs(xu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${R.fullPath}`,data:{path:R.fullPath}})))});try{[e,n]=ho(()=>c.isReady()),await e,n()}catch(R){[e,n]=ho(()=>t.runWithContext(()=>Cs(R))),await e,n()}const P=u!==c.currentRoute.value.fullPath?c.resolve(u):c.currentRoute.value;d();const k=t.payload.state._layout;return c.beforeEach(async(R,b)=>{var O;await t.callHook("page:loading:start"),R.meta=xr(R.meta),t.isHydrating&&k&&!br(R.meta.layout)&&(R.meta.layout=k),t._processingMiddleware=!0;{const M=new Set([...vS,...t._middleware.global]);for(const L of R.matched){const w=L.meta.middleware;if(w)for(const y of hf(w))M.add(y)}{const L=await t.runWithContext(()=>af(R.path));if(L.appMiddleware)for(const w in L.appMiddleware)L.appMiddleware[w]?M.add(w):M.delete(w)}for(const L of M){const w=typeof L=="string"?t._middleware.named[L]||await((O=Gi[L])==null?void 0:O.call(Gi).then(_=>_.default||_)):L;if(!w)throw new Error(`Unknown route middleware: '${L}'.`);const y=await t.runWithContext(()=>w(R,b));if(!t.payload.serverRendered&&t.isHydrating&&(y===!1||y instanceof Error)){const _=y||xu({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Cs(_)),!1}if(y!==!0&&(y||y===!1))return y}}}),c.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in P&&(P.name=void 0),await c.replace({...P,force:!0}),c.options.scrollBehavior=Mt.scrollBehavior}catch(R){await t.runWithContext(()=>Cs(R))}}),{provide:{router:c}}}}),Rm=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),_L=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),ff=t=>{const e=Ke();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Rm(()=>t())}):Rm(()=>t())},TS=Xt({name:"nuxt:payload",setup(t){Yt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await sm(e.path);r&&Object.assign(t.static.data,r.data)}),ff(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await sm(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Lc,1e3)})}}),bS=Xt(()=>{const t=Yt();ff(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),IS=Xt(t=>{let e;async function n(){const r=await Lc();e&&clearTimeout(e),e=setTimeout(n,Qp);try{const s=await $fetch(rf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}ff(()=>{e=setTimeout(n,Qp)})});function AS(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ja(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ke().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const RS=Xt({name:"nuxt:chunk-reload",setup(t){const e=Yt(),n=Oo(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const c="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:tf(n.app.baseURL,i.fullPath);AS({path:c,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),SS=Xt({name:"nuxt:global-components"}),lr={default:()=>We(()=>import("./Dw-gyfU4.js"),__vite__mapDeps([31,2,5,1,32]),import.meta.url).then(t=>t.default||t)},PS=Xt({name:"nuxt:prefetch",setup(t){const e=Yt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof lr[r]=="function"&&await lr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(ds(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=hf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Gi[o]=="function"&&Gi[o]();s&&typeof lr[s]=="function"&&lr[s]()})}});var Sm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},CS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,g=u&63;l||(g=64,o||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new kS;const m=i<<2|c>>4;if(r.push(m),u!==64){const g=c<<4&240|u>>2;if(r.push(g),d!==64){const P=u<<6&192|d;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OS=function(t){const e=Pv(t);return Cv.encodeByteArray(e,!0)},rc=function(t){return OS(t).replace(/\./g,"")},kv=function(t){try{return Cv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xS=()=>NS().__FIREBASE_DEFAULTS__,DS=()=>{if(typeof process>"u"||typeof Sm>"u")return;const t=Sm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kv(t[1]);return e&&JSON.parse(e)},Fc=()=>{try{return xS()||DS()||MS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ov=t=>{var e,n;return(n=(e=Fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LS=t=>{const e=Ov(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nv=()=>{var t;return(t=Fc())===null||t===void 0?void 0:t.config},xv=t=>{var e;return(e=Fc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function FS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function US(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function jS(){var t;const e=(t=Fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function BS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $S(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qS(){return!jS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zS(){try{return typeof indexedDB=="object"}catch{return!1}}function WS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KS,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?GS(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new jn(s,c,r)}}function GS(t,e){return t.replace(QS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QS=/\{\$([^}]+)}/g;function YS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Pm(i)&&Pm(o)){if(!sc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XS(t,e){const n=new JS(t,e);return n.subscribe.bind(n)}class JS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$l),s.error===void 0&&(s.error=$l),s.complete===void 0&&(s.complete=$l);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $l(){}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nP(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tP(t){return t===zr?void 0:t}function nP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const sP={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},iP=we.INFO,oP={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},aP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=oP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=iP,this._logHandler=aP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const cP=(t,e)=>e.some(n=>t instanceof n);let Cm,km;function lP(){return Cm||(Cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uP(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dv=new WeakMap,$u=new WeakMap,Mv=new WeakMap,Hl=new WeakMap,pf=new WeakMap;function hP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dv.set(n,t)}).catch(()=>{}),pf.set(e,t),e}function fP(t){if($u.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$u.set(t,e)}let Hu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dP(t){Hu=t(Hu)}function pP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ql(this),e,...n);return Mv.set(r,e.sort?e.sort():[e]),gr(r)}:uP().includes(t)?function(...e){return t.apply(ql(this),e),gr(Dv.get(this))}:function(...e){return gr(t.apply(ql(this),e))}}function mP(t){return typeof t=="function"?pP(t):(t instanceof IDBTransaction&&fP(t),cP(t,lP())?new Proxy(t,Hu):t)}function gr(t){if(t instanceof IDBRequest)return hP(t);if(Hl.has(t))return Hl.get(t);const e=mP(t);return e!==t&&(Hl.set(t,e),pf.set(e,t)),e}const ql=t=>pf.get(t);function gP(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const _P=["get","getKey","getAll","getAllKeys","count"],yP=["put","add","delete","clear"],zl=new Map;function Om(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zl.get(e))return zl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_P.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return zl.set(e,i),i}dP(t=>({...t,get:(e,n,r)=>Om(e,n)||t.get(e,n,r),has:(e,n)=>!!Om(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qu="@firebase/app",Nm="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new df("@firebase/app"),wP="@firebase/app-compat",TP="@firebase/analytics-compat",bP="@firebase/analytics",IP="@firebase/app-check-compat",AP="@firebase/app-check",RP="@firebase/auth",SP="@firebase/auth-compat",PP="@firebase/database",CP="@firebase/database-compat",kP="@firebase/functions",OP="@firebase/functions-compat",NP="@firebase/installations",xP="@firebase/installations-compat",DP="@firebase/messaging",MP="@firebase/messaging-compat",LP="@firebase/performance",VP="@firebase/performance-compat",FP="@firebase/remote-config",UP="@firebase/remote-config-compat",jP="@firebase/storage",BP="@firebase/storage-compat",$P="@firebase/firestore",HP="@firebase/vertexai-preview",qP="@firebase/firestore-compat",zP="firebase",WP="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="[DEFAULT]",KP={[qu]:"fire-core",[wP]:"fire-core-compat",[bP]:"fire-analytics",[TP]:"fire-analytics-compat",[AP]:"fire-app-check",[IP]:"fire-app-check-compat",[RP]:"fire-auth",[SP]:"fire-auth-compat",[PP]:"fire-rtdb",[CP]:"fire-rtdb-compat",[kP]:"fire-fn",[OP]:"fire-fn-compat",[NP]:"fire-iid",[xP]:"fire-iid-compat",[DP]:"fire-fcm",[MP]:"fire-fcm-compat",[LP]:"fire-perf",[VP]:"fire-perf-compat",[FP]:"fire-rc",[UP]:"fire-rc-compat",[jP]:"fire-gcs",[BP]:"fire-gcs-compat",[$P]:"fire-fst",[qP]:"fire-fst-compat",[HP]:"fire-vertex","fire-js":"fire-js",[zP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Map,GP=new Map,Wu=new Map;function xm(t,e){try{t.container.addComponent(e)}catch(n){is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(Wu.has(e))return is.debug(`There were multiple attempts to register component ${e}.`),!1;Wu.set(e,t);for(const n of ic.values())xm(n,t);for(const n of GP.values())xm(n,t);return!0}function mf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new xo("app","Firebase",QP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=WP;function Lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _r.create("bad-app-name",{appName:String(s)});if(n||(n=Nv()),!n)throw _r.create("no-options");const i=ic.get(s);if(i){if(sc(n,i.options)&&sc(r,i.config))return i;throw _r.create("duplicate-app",{appName:s})}const o=new rP(s);for(const l of Wu.values())o.addComponent(l);const c=new YP(n,r,o);return ic.set(s,c),c}function Vv(t=zu){const e=ic.get(t);if(!e&&t===zu&&Nv())return Lv();if(!e)throw _r.create("no-app",{appName:t});return e}function yr(t,e,n){var r;let s=(r=KP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),is.warn(c.join(" "));return}Qs(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XP="firebase-heartbeat-database",JP=1,mo="firebase-heartbeat-store";let Wl=null;function Fv(){return Wl||(Wl=gP(XP,JP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Wl}async function ZP(t){try{const n=(await Fv()).transaction(mo),r=await n.objectStore(mo).get(Uv(t));return await n.done,r}catch(e){if(e instanceof jn)is.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});is.warn(n.message)}}}async function Dm(t,e){try{const r=(await Fv()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,Uv(t)),await r.done}catch(n){if(n instanceof jn)is.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(r.message)}}}function Uv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eC=1024,tC=30*24*60*60*1e3;class nC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=tC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mm(),{heartbeatsToSend:r,unsentEntries:s}=rC(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mm(){return new Date().toISOString().substring(0,10)}function rC(t,e=eC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zS()?WS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lm(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){Qs(new ss("platform-logger",e=>new vP(e),"PRIVATE")),Qs(new ss("heartbeat",e=>new nC(e),"PRIVATE")),yr(qu,Nm,t),yr(qu,Nm,"esm2017"),yr("fire-js","")}iC("");var oC="firebase",aC="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(oC,aC,"app");function gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cC=jv,Bv=new xo("auth","Firebase",jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new df("@firebase/auth");function lC(t,...e){oc.logLevel<=we.WARN&&oc.warn(`Auth (${ci}): ${t}`,...e)}function Na(t,...e){oc.logLevel<=we.ERROR&&oc.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw _f(t,...e)}function dn(t,...e){return _f(t,...e)}function $v(t,e,n){const r=Object.assign(Object.assign({},cC()),{[e]:n});return new xo("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return $v(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _f(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bv.create(t,...e)}function he(t,e,...n){if(!t)throw _f(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function xn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uC(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uC()||BS()||"connection"in navigator)?navigator.onLine:!0}function fC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=US()||$S()}get(){return hC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Mo(3e4,6e4);function ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mr(t,e,n,r,s={}){return qv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Do(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Hv.fetch()(zv(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function qv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dC),e);try{const s=new gC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ya(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $v(t,h,u);an(t,h)}}catch(s){if(s instanceof jn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function Uc(t,e,n,r,s={}){const i=await Mr(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,s):`${t.config.apiScheme}://${s}`}function mC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),pC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function Fm(t){return t!==void 0&&t.enterprise!==void 0}class _C{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yC(t,e){return Mr(t,"GET","/v2/recaptchaConfig",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return Mr(t,"POST","/v1/accounts:delete",e)}async function Wv(t,e){return Mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EC(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=vf(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qi(Kl(s.auth_time)),issuedAtTime:Qi(Kl(s.iat)),expirationTime:Qi(Kl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kl(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const s=kv(n);return s?JSON.parse(s):(Na("Failed to decode base64 JWT payload"),null)}catch(s){return Na("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Um(t){const e=vf(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&wC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(t){var e;const n=t.auth,r=await t.getIdToken(),s=await go(t,Wv(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kv(i.providerUserInfo):[],c=IC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Gu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function bC(t){const e=it(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kv(t){return t.map(e=>{var{providerId:n}=e,r=gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e){const n=await qv(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=zv(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Hv.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RC(t,e){return Mr(t,"POST","/v2/accounts:revokeToken",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await AC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await go(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EC(this,e)}reload(){return bC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await go(this,vC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,R=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:b,emailVerified:O,isAnonymous:M,providerData:L,stsTokenManager:w}=n;he(b&&w,e,"internal-error");const y=Us.fromJSON(this.name,w);he(typeof b=="string",e,"internal-error"),Xn(d,e.name),Xn(m,e.name),he(typeof O=="boolean",e,"internal-error"),he(typeof M=="boolean",e,"internal-error"),Xn(g,e.name),Xn(P,e.name),Xn(k,e.name),Xn(N,e.name),Xn(x,e.name),Xn(R,e.name);const _=new Cn({uid:b,auth:e,email:m,emailVerified:O,displayName:d,isAnonymous:M,photoURL:P,phoneNumber:g,tenantId:k,stsTokenManager:y,createdAt:x,lastLoginAt:R});return L&&Array.isArray(L)&&(_.providerData=L.map(E=>Object.assign({},E))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ac(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Us;c.updateFromIdToken(r);const l=new Cn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Map;function kn(t){xn(t instanceof Function,"Expected a class definition");let e=jm.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gv.type="NONE";const Bm=Gv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xa(this.userKey,s.apiKey,i),this.fullPersistenceKey=xa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(kn(Bm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||kn(Bm);const o=xa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Cn._fromJSON(e,h);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new js(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new js(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zv(e))return"Blackberry";if(eE(e))return"Webos";if(Ef(e))return"Safari";if((e.includes("chrome/")||Yv(e))&&!e.includes("edge/"))return"Chrome";if(Jv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qv(t=ht()){return/firefox\//i.test(t)}function Ef(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yv(t=ht()){return/crios\//i.test(t)}function Xv(t=ht()){return/iemobile/i.test(t)}function Jv(t=ht()){return/android/i.test(t)}function Zv(t=ht()){return/blackberry/i.test(t)}function eE(t=ht()){return/webos/i.test(t)}function jc(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SC(t=ht()){var e;return jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PC(){return HS()&&document.documentMode===10}function tE(t=ht()){return jc(t)||Jv(t)||eE(t)||Zv(t)||/windows phone/i.test(t)||Xv(t)}function CC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,e=[]){let n;switch(t){case"Browser":n=$m(ht());break;case"Worker":n=`${$m(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
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
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function OC(t,e={}){return Mr(t,"GET","/v2/passwordPolicy",ps(t,e))}/**
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
 */const NC=6;class xC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hm(this),this.idTokenSubscription=new Hm(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wv(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(vr(this));const n=e?it(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OC(this),n=new xC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function li(t){return it(t)}class Hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=XS(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MC(t){Bc=t}function rE(t){return Bc.loadJS(t)}function LC(){return Bc.recaptchaEnterpriseScript}function VC(){return Bc.gapiScript}function FC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UC="recaptcha-enterprise",jC="NO_RECAPTCHA";class BC{constructor(e){this.type=UC,this.auth=li(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{yC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new _C(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Fm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(jC)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Fm(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=LC();l.length!==0&&(l+=c),rE(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function qm(t,e,n,r=!1){const s=new BC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zm(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qm(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t,e){const n=mf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(sc(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function HC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qC(t,e,n){const r=li(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sE(e),{host:o,port:c}=zC(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),WC()}function sE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zC(t){const e=sE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wm(o)}}}function Wm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function KC(t,e){return Mr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e){return Uc(t,"POST","/v1/accounts:signInWithPassword",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return Uc(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}async function YC(t,e){return Uc(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends wf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zm(e,n,"signInWithPassword",GC);case"emailLink":return QC(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zm(e,r,"signUpPassword",KC);case"emailLink":return YC(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e){return Uc(t,"POST","/v1/accounts:signInWithIdp",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="http://localhost";class os extends wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new os(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZC(t){const e=Di(Mi(t)).link,n=e?Di(Mi(e)).deep_link_id:null,r=Di(Mi(t)).deep_link_id;return(r?Di(Mi(r)).link:null)||r||n||e||t}class Tf{constructor(e){var n,r,s,i,o,c;const l=Di(Mi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=JC((s=l.mode)!==null&&s!==void 0?s:null);he(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=ZC(e);try{return new Tf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tf.parseLink(n);return he(r,"argument-error"),_o._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends iE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Lo{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return os._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Lo{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Lo{constructor(){super("twitter.com")}static credential(e,n){return os._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=Km(r);return new Ys({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Km(r);return new Ys({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Km(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends jn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cc(e,n,r,s)}}function oE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,r):i})}async function ek(t,e,n=!1){const r=await go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await go(t,oE(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=vf(i.idToken);he(o,r,"internal-error");const{sub:c}=o;return he(t.uid===c,r,"user-mismatch"),Ys._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e,n=!1){if(Sn(t.app))return Promise.reject(vr(t));const r="signIn",s=await oE(t,r,e),i=await Ys._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nk(t,e){return aE(li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yL(t,e,n){return Sn(t.app)?Promise.reject(vr(t)):nk(it(t),ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rk(t),r})}function sk(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function ik(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function vL(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function EL(t){return it(t).signOut()}const lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(){const t=ht();return Ef(t)||jc(t)}const ak=1e3,ck=10;class lE extends cE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ok()&&CC(),this.fallbackToPolling=tE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);PC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ck):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lE.type="LOCAL";const lk=lE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE extends cE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uE.type="SESSION";const hE=uE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await uk(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=bf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function fk(t){pn().location.href=t}/**
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
 */function fE(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function dk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mk(){return fE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebaseLocalStorageDb",gk=1,uc="firebaseLocalStorage",pE="fbase_key";class Vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function _k(){const t=indexedDB.deleteDatabase(dE);return new Vo(t).toPromise()}function Qu(){const t=indexedDB.open(dE,gk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uc,{keyPath:pE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uc)?e(r):(r.close(),await _k(),e(await Qu()))})})}async function Gm(t,e,n){const r=Hc(t,!0).put({[pE]:e,value:n});return new Vo(r).toPromise()}async function yk(t,e){const n=Hc(t,!1).get(e),r=await new Vo(n).toPromise();return r===void 0?null:r.value}function Qm(t,e){const n=Hc(t,!0).delete(e);return new Vo(n).toPromise()}const vk=800,Ek=3;class mE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ek)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(mk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dk(),!this.activeServiceWorker)return;this.sender=new hk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qu();return await Gm(e,lc,"1"),await Qm(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hc(s,!1).getAll();return new Vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mE.type="LOCAL";const wk=mE;new Mo(3e4,6e4);/**
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
 */function Tk(t,e){return e?kn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bk(t){return aE(t.auth,new If(t),t.bypassAuthState)}function Ik(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),tk(n,new If(t),t.bypassAuthState)}async function Ak(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),ek(n,new If(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bk;case"linkViaPopup":case"linkViaRedirect":return Ak;case"reauthViaPopup":case"reauthViaRedirect":return Ik;default:an(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Mo(2e3,1e4);class ks extends gE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rk.get())};e()}}ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="pendingRedirect",Da=new Map;class Pk extends gE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await Ck(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ck(t,e){const n=Nk(e),r=Ok(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function kk(t,e){Da.set(t._key(),e)}function Ok(t){return kn(t._redirectPersistence)}function Nk(t){return xa(Sk,t.config.apiKey,t.name)}async function xk(t,e,n=!1){if(Sn(t.app))return Promise.reject(vr(t));const r=li(t),s=Tk(r,e),o=await new Pk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=10*60*1e3;class Mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_E(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ym(e))}saveEventToCache(e){this.cachedEventUids.add(Ym(e)),this.lastProcessedEventTime=Date.now()}}function Ym(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _E({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _E(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e={}){return Mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uk=/^https?/;async function jk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vk(t);for(const n of e)try{if(Bk(n))return}catch{}an(t,"unauthorized-domain")}function Bk(t){const e=Ku(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Uk.test(n))return!1;if(Fk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $k=new Mo(3e4,6e4);function Xm(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hk(t){return new Promise((e,n)=>{var r,s,i;function o(){Xm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xm(),n(dn(t,"network-request-failed"))},timeout:$k.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const c=FC("iframefcb");return pn()[c]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},rE(`${VC()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function qk(t){return Ma=Ma||Hk(t),Ma}/**
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
 */const zk=new Mo(5e3,15e3),Wk="__/auth/iframe",Kk="emulator/auth/iframe",Gk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yk(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,Kk):`https://${t.config.authDomain}/${Wk}`,r={apiKey:e.apiKey,appName:t.name,v:ci},s=Qk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Do(r).slice(1)}`}async function Xk(t){const e=await qk(t),n=pn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:Yk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},zk.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Jk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zk=500,e2=600,t2="_blank",n2="http://localhost";class Jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r2(t,e,n,r=Zk,s=e2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Jk),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ht().toLowerCase();n&&(c=Yv(u)?t2:n),Qv(u)&&(e=e||n2,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[g,P])=>`${m}${g}=${P},`,"");if(SC(u)&&c!=="_self")return s2(e||"",c),new Jm(null);const d=window.open(e||"",c,h);he(d,t,"popup-blocked");try{d.focus()}catch{}return new Jm(d)}function s2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const i2="__/auth/handler",o2="emulator/auth/handler",a2=encodeURIComponent("fac");async function Zm(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:s};if(e instanceof iE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Lo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${a2}=${encodeURIComponent(l)}`:"";return`${c2(t)}?${Do(c).slice(1)}${u}`}function c2({config:t}){return t.emulator?yf(t,o2):`https://${t.authDomain}/${i2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="webStorageSupport";class l2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hE,this._completeRedirectFn=xk,this._overrideRedirectResult=kk}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zm(e,n,r,Ku(),s);return r2(e,o,bf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zm(e,n,r,Ku(),s);return fk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Xk(e),r=new Mk(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gl,{type:Gl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gl];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tE()||Ef()||jc()}}const u2=l2;var eg="@firebase/auth",tg="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function d2(t){Qs(new ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nE(t)},u=new DC(r,s,i,l);return HC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qs(new ss("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new h2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(eg,tg,f2(t)),yr(eg,tg,"esm2017")}/**
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
 */const p2=5*60,m2=xv("authIdTokenMaxAge")||p2;let ng=null;const g2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>m2)return;const s=n==null?void 0:n.token;ng!==s&&(ng=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _2(t=Vv()){const e=mf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$C(t,{popupRedirectResolver:u2,persistence:[wk,lk,hE]}),r=xv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=g2(i.toString());ik(n,o,()=>o(n.currentUser)),sk(n,c=>o(c))}}const s=Ov("auth");return s&&qC(n,`http://${s}`),n}function y2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",y2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});d2("Browser");var rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,yE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,S,A){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return y.prototype[S].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,_){_||(_=0);var E=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)E[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)E[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],S=w.g[2];var A=w.g[3],T=y+(A^_&(S^A))+E[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=A+(S^y&(_^S))+E[1]+3905402710&4294967295,A=y+(T<<12&4294967295|T>>>20),T=S+(_^A&(y^_))+E[2]+606105819&4294967295,S=A+(T<<17&4294967295|T>>>15),T=_+(y^S&(A^y))+E[3]+3250441966&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(A^_&(S^A))+E[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(S^y&(_^S))+E[5]+1200080426&4294967295,A=y+(T<<12&4294967295|T>>>20),T=S+(_^A&(y^_))+E[6]+2821735955&4294967295,S=A+(T<<17&4294967295|T>>>15),T=_+(y^S&(A^y))+E[7]+4249261313&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(A^_&(S^A))+E[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(S^y&(_^S))+E[9]+2336552879&4294967295,A=y+(T<<12&4294967295|T>>>20),T=S+(_^A&(y^_))+E[10]+4294925233&4294967295,S=A+(T<<17&4294967295|T>>>15),T=_+(y^S&(A^y))+E[11]+2304563134&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(A^_&(S^A))+E[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(S^y&(_^S))+E[13]+4254626195&4294967295,A=y+(T<<12&4294967295|T>>>20),T=S+(_^A&(y^_))+E[14]+2792965006&4294967295,S=A+(T<<17&4294967295|T>>>15),T=_+(y^S&(A^y))+E[15]+1236535329&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(S^A&(_^S))+E[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^S&(y^_))+E[6]+3225465664&4294967295,A=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(A^y))+E[11]+643717713&4294967295,S=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(S^A))+E[0]+3921069994&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(S^A&(_^S))+E[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^S&(y^_))+E[10]+38016083&4294967295,A=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(A^y))+E[15]+3634488961&4294967295,S=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(S^A))+E[4]+3889429448&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(S^A&(_^S))+E[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^S&(y^_))+E[14]+3275163606&4294967295,A=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(A^y))+E[3]+4107603335&4294967295,S=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(S^A))+E[8]+1163531501&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(S^A&(_^S))+E[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^S&(y^_))+E[2]+4243563512&4294967295,A=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(A^y))+E[7]+1735328473&4294967295,S=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(S^A))+E[12]+2368359562&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(_^S^A)+E[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^S)+E[8]+2272392833&4294967295,A=y+(T<<11&4294967295|T>>>21),T=S+(A^y^_)+E[11]+1839030562&4294967295,S=A+(T<<16&4294967295|T>>>16),T=_+(S^A^y)+E[14]+4259657740&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(_^S^A)+E[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^S)+E[4]+1272893353&4294967295,A=y+(T<<11&4294967295|T>>>21),T=S+(A^y^_)+E[7]+4139469664&4294967295,S=A+(T<<16&4294967295|T>>>16),T=_+(S^A^y)+E[10]+3200236656&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(_^S^A)+E[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^S)+E[0]+3936430074&4294967295,A=y+(T<<11&4294967295|T>>>21),T=S+(A^y^_)+E[3]+3572445317&4294967295,S=A+(T<<16&4294967295|T>>>16),T=_+(S^A^y)+E[6]+76029189&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(_^S^A)+E[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^S)+E[12]+3873151461&4294967295,A=y+(T<<11&4294967295|T>>>21),T=S+(A^y^_)+E[15]+530742520&4294967295,S=A+(T<<16&4294967295|T>>>16),T=_+(S^A^y)+E[2]+3299628645&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(S^(_|~A))+E[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~S))+E[7]+1126891415&4294967295,A=y+(T<<10&4294967295|T>>>22),T=S+(y^(A|~_))+E[14]+2878612391&4294967295,S=A+(T<<15&4294967295|T>>>17),T=_+(A^(S|~y))+E[5]+4237533241&4294967295,_=S+(T<<21&4294967295|T>>>11),T=y+(S^(_|~A))+E[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~S))+E[3]+2399980690&4294967295,A=y+(T<<10&4294967295|T>>>22),T=S+(y^(A|~_))+E[10]+4293915773&4294967295,S=A+(T<<15&4294967295|T>>>17),T=_+(A^(S|~y))+E[1]+2240044497&4294967295,_=S+(T<<21&4294967295|T>>>11),T=y+(S^(_|~A))+E[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~S))+E[15]+4264355552&4294967295,A=y+(T<<10&4294967295|T>>>22),T=S+(y^(A|~_))+E[6]+2734768916&4294967295,S=A+(T<<15&4294967295|T>>>17),T=_+(A^(S|~y))+E[13]+1309151649&4294967295,_=S+(T<<21&4294967295|T>>>11),T=y+(S^(_|~A))+E[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~S))+E[11]+3174756917&4294967295,A=y+(T<<10&4294967295|T>>>22),T=S+(y^(A|~_))+E[2]+718787259&4294967295,S=A+(T<<15&4294967295|T>>>17),T=_+(A^(S|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,E=this.B,S=this.h,A=0;A<y;){if(S==0)for(;A<=_;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(E[S++]=w.charCodeAt(A++),S==this.blockSize){s(this,E),S=0;break}}else for(;A<y;)if(E[S++]=w[A++],S==this.blockSize){s(this,E),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var E=0;32>E;E+=8)w[_++]=this.g[y]>>>E&255;return w};function i(w,y){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],E=!0,S=w.length-1;0<=S;S--){var A=w[S]|0;E&&A==y||(_[S]=A,E=!1)}this.g=_}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return d;if(0>w)return N(u(-w));for(var y=[],_=1,E=0;w>=_;E++)y[E]=w/_|0,_*=4294967296;return new o(y,0)}function h(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return N(h(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),E=d,S=0;S<w.length;S+=8){var A=Math.min(8,w.length-S),T=parseInt(w.substring(S,S+A),y);8>A?(A=u(Math.pow(y,A)),E=E.j(A).add(u(T))):(E=E.j(_),E=E.add(u(T)))}return E}var d=l(0),m=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(k(this))return"-"+N(this).toString(w);for(var y=u(Math.pow(w,6)),_=this,E="";;){var S=O(_,y).g;_=x(_,S.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=S,P(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=x(this,w),k(w)?-1:P(w)?0:1};function N(w){for(var y=w.g.length,_=[],E=0;E<y;E++)_[E]=~w.g[E];return new o(_,~w.h).add(m)}t.abs=function(){return k(this)?N(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0,S=0;S<=y;S++){var A=E+(this.i(S)&65535)+(w.i(S)&65535),T=(A>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);E=T>>>16,A&=65535,T&=65535,_[S]=T<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(w,y){return w.add(N(y))}t.j=function(w){if(P(this)||P(w))return d;if(k(this))return k(w)?N(this).j(N(w)):N(N(this).j(w));if(k(w))return N(this.j(N(w)));if(0>this.l(g)&&0>w.l(g))return u(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<w.g.length;S++){var A=this.i(E)>>>16,T=this.i(E)&65535,me=w.i(S)>>>16,ye=w.i(S)&65535;_[2*E+2*S]+=T*ye,R(_,2*E+2*S),_[2*E+2*S+1]+=A*ye,R(_,2*E+2*S+1),_[2*E+2*S+1]+=T*me,R(_,2*E+2*S+1),_[2*E+2*S+2]+=A*me,R(_,2*E+2*S+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new o(_,0)};function R(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function b(w,y){this.g=w,this.h=y}function O(w,y){if(P(y))throw Error("division by zero");if(P(w))return new b(d,d);if(k(w))return y=O(N(w),y),new b(N(y.g),N(y.h));if(k(y))return y=O(w,N(y)),new b(N(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,E=y;0>=E.l(w);)_=M(_),E=M(E);var S=L(_,1),A=L(E,1);for(E=L(E,2),_=L(_,2);!P(E);){var T=A.add(E);0>=T.l(w)&&(S=S.add(_),A=T),E=L(E,1),_=L(_,1)}return y=x(w,S.j(y)),new b(S,y)}for(S=d;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=u(_),T=A.j(y);k(T)||0<T.l(w);)_-=E,A=u(_),T=A.j(y);P(A)&&(A=m),S=S.add(A),w=x(w,T)}return new b(S,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)&w.i(E);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)|w.i(E);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)^w.i(E);return new o(_,this.h^w.h)};function M(w){for(var y=w.g.length+1,_=[],E=0;E<y;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(_,w.h)}function L(w,y){var _=y>>5;y%=32;for(var E=w.g.length-_,S=[],A=0;A<E;A++)S[A]=0<y?w.i(A+_)>>>y|w.i(A+_+1)<<32-y:w.i(A+_);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ts=o}).apply(typeof rg<"u"?rg:typeof self<"u"?self:typeof window<"u"?window:{});var va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vE,EE,Li,wE,La,Yu,TE,bE,IE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof va=="object"&&va];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in p))break e;p=p[D]}a=a[a.length-1],v=p[a],f=f(v),f!=v&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,v=!1,D={next:function(){if(!v&&p<a.length){var F=p++;return{value:f(F,a[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),a.apply(f,D)}}return function(){return a.apply(f,arguments)}}function m(a,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function P(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,D,F){for(var K=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)K[Oe-2]=arguments[Oe];return f.prototype[D].apply(v,K)}}function k(a){const f=a.length;if(0<f){const p=Array(f);for(let v=0;v<f;v++)p[v]=a[v];return p}return[]}function N(a,f){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(l(v)){const D=a.length||0,F=v.length||0;a.length=D+F;for(let K=0;K<F;K++)a[D+K]=v[K]}else a.push(v)}}class x{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function R(a){return/^[\s\xa0]*$/.test(a)}function b(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function L(a,f,p){for(const v in a)f.call(p,a[v],v,a)}function w(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function y(a){const f={};for(const p in a)f[p]=a[p];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,f){let p,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(p in v)a[p]=v[p];for(let F=0;F<_.length;F++)p=_[F],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function S(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function A(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Et;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class me{constructor(){this.h=this.g=null}add(f,p){const v=ye.get();v.set(f,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new x(()=>new J,a=>a.reset());class J{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,ee=!1,Et=new me,Jt=()=>{const a=c.Promise.resolve(void 0);ne=()=>{a.then($t)}};var $t=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){A(p)}var f=ye;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}ee=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var $n=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,f),c.removeEventListener("test",p,f)}catch{}return a}();function cn(a,f){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(M){e:{try{O(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}P(cn,Be);var St={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(a,f,p,v,D){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!v,this.ha=D,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,f,p,v,D){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var K=I(a,f,v,D);return-1<K?(f=a[K],p||(f.fa=!1)):(f=new Y(f,this.src,F,!!v,D),f.fa=p,a.push(f)),f};function ke(a,f){var p=f.type;if(p in a.g){var v=a.g[p],D=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=D)&&Array.prototype.splice.call(v,D,1),F&&(te(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function I(a,f,p,v){for(var D=0;D<a.length;++D){var F=a[D];if(!F.da&&F.listener==f&&F.capture==!!p&&F.ha==v)return D}return-1}var C="closure_lm_"+(1e6*Math.random()|0),V={};function B(a,f,p,v,D){if(Array.isArray(f)){for(var F=0;F<f.length;F++)B(a,f[F],p,v,D);return null}return p=oe(p),a&&a[j]?a.K(f,p,u(v)?!!v.capture:!!v,D):U(a,f,p,!1,v,D)}function U(a,f,p,v,D,F){if(!f)throw Error("Invalid event type");var K=u(D)?!!D.capture:!!D,Oe=X(a);if(Oe||(a[C]=Oe=new Ee(a)),p=Oe.add(f,p,v,K,F),p.proxy)return p;if(v=z(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)$n||(D=K),D===void 0&&(D=!1),a.addEventListener(f.toString(),v,D);else if(a.attachEvent)a.attachEvent(G(f.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function z(){function a(p){return f.call(a.src,a.listener,p)}const f=H;return a}function Q(a,f,p,v,D){if(Array.isArray(f))for(var F=0;F<f.length;F++)Q(a,f[F],p,v,D);else v=u(v)?!!v.capture:!!v,p=oe(p),a&&a[j]?(a=a.i,f=String(f).toString(),f in a.g&&(F=a.g[f],p=I(F,p,v,D),-1<p&&(te(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete a.g[f],a.h--)))):a&&(a=X(a))&&(f=a.g[f.toString()],a=-1,f&&(a=I(f,p,v,D)),(p=-1<a?f[a]:null)&&W(p))}function W(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[j])ke(f.i,a);else{var p=a.type,v=a.proxy;f.removeEventListener?f.removeEventListener(p,v,a.capture):f.detachEvent?f.detachEvent(G(p),v):f.addListener&&f.removeListener&&f.removeListener(v),(p=X(f))?(ke(p,a),p.h==0&&(p.src=null,f[C]=null)):te(a)}}}function G(a){return a in V?V[a]:V[a]="on"+a}function H(a,f){if(a.da)a=!0;else{f=new cn(f,this);var p=a.listener,v=a.ha||a.src;a.fa&&W(a),a=p.call(v,f)}return a}function X(a){return a=a[C],a instanceof Ee?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(f){return a.handleEvent(f)}),a[ae])}function ie(){je.call(this),this.i=new Ee(this),this.M=this,this.F=null}P(ie,je),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(a,f,p,v){Q(this,a,f,p,v)};function le(a,f){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=f.type||f,typeof f=="string")f=new Be(f,a);else if(f instanceof Be)f.target=f.target||a;else{var D=f;f=new Be(v,a),E(f,D)}if(D=!0,p)for(var F=p.length-1;0<=F;F--){var K=f.g=p[F];D=Pe(K,v,!0,f)&&D}if(K=f.g=a,D=Pe(K,v,!0,f)&&D,D=Pe(K,v,!1,f)&&D,p)for(F=0;F<p.length;F++)K=f.g=p[F],D=Pe(K,v,!1,f)&&D}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],v=0;v<p.length;v++)te(p[v]);delete a.g[f],a.h--}}this.F=null},ie.prototype.K=function(a,f,p,v){return this.i.add(String(a),f,!1,p,v)},ie.prototype.L=function(a,f,p,v){return this.i.add(String(a),f,!0,p,v)};function Pe(a,f,p,v){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,F=0;F<f.length;++F){var K=f[F];if(K&&!K.da&&K.capture==p){var Oe=K.listener,ot=K.ha||K.src;K.fa&&ke(a.i,K),D=Oe.call(ot,v)!==!1&&D}}return D&&!v.defaultPrevented}function be(a,f,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(a,f||0)}function ze(a){a.g=be(()=>{a.g=null,a.i&&(a.i=!1,ze(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class xt extends je{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(a){je.call(this),this.h=a,this.g={}}P(Ht,je);var mi=[];function Hn(a){L(a.g,function(f,p){this.g.hasOwnProperty(p)&&W(f)},a),a.g={}}Ht.prototype.N=function(){Ht.aa.N.call(this),Hn(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _s=c.JSON.stringify,wt=c.JSON.parse,qt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ys(){}ys.prototype.h=null;function hd(a){return a.h||(a.h=a.i())}function fd(){}var gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hl(){Be.call(this,"d")}P(hl,Be);function fl(){Be.call(this,"c")}P(fl,Be);var Vr={},dd=null;function Wo(){return dd=dd||new ie}Vr.La="serverreachability";function pd(a){Be.call(this,Vr.La,a)}P(pd,Be);function _i(a){const f=Wo();le(f,new pd(f))}Vr.STAT_EVENT="statevent";function md(a,f){Be.call(this,Vr.STAT_EVENT,a),this.stat=f}P(md,Be);function Tt(a){const f=Wo();le(f,new md(f,a))}Vr.Ma="timingevent";function gd(a,f){Be.call(this,Vr.Ma,a),this.size=f}P(gd,Be);function yi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},f)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function bw(a,f,p,v,D,F){a.info(function(){if(a.g)if(F)for(var K="",Oe=F.split("&"),ot=0;ot<Oe.length;ot++){var Re=Oe[ot].split("=");if(1<Re.length){var ft=Re[0];Re=Re[1];var dt=ft.split("_");K=2<=dt.length&&dt[1]=="type"?K+(ft+"="+Re+"&"):K+(ft+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+f+`
`+p+`
`+K})}function Iw(a,f,p,v,D,F,K){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+f+`
`+p+`
`+F+" "+K})}function vs(a,f,p,v){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Rw(a,p)+(v?" "+v:"")})}function Aw(a,f){a.info(function(){return"TIMEOUT: "+f})}vi.prototype.info=function(){};function Rw(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<D.length;K++)D[K]=""}}}}return _s(p)}catch{return f}}var Ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_d={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dl;function Go(){}P(Go,ys),Go.prototype.g=function(){return new XMLHttpRequest},Go.prototype.i=function(){return{}},dl=new Go;function qn(a,f,p,v){this.j=a,this.i=f,this.l=p,this.R=v||1,this.U=new Ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yd}function yd(){this.i=null,this.g="",this.h=!1}var vd={},pl={};function ml(a,f,p){a.L=1,a.v=Jo(En(f)),a.m=p,a.P=!0,Ed(a,null)}function Ed(a,f){a.F=Date.now(),Qo(a),a.A=En(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Dd(p.i,"t",v),a.C=0,p=a.j.J,a.h=new yd,a.g=Jd(a.j,p?f:null,!a.m),0<a.O&&(a.M=new xt(m(a.Y,a,a.g),a.O)),f=a.U,p=a.g,v=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(mi[0]=D.toString()),D=mi);for(var F=0;F<D.length;F++){var K=B(p,D[F],v||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),_i(),bw(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const f=this.M;f&&wn(a)==3?f.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const dt=wn(this.g);var f=this.g.Ba();const Ts=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Bd(this.g)))){this.J||dt!=4||f==7||(f==8||0>=Ts?_i(3):_i(2)),gl(this);var p=this.g.Z();this.X=p;t:if(wd(this)){var v=Bd(this.g);a="";var D=v.length,F=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),Ei(this);var K="";break t}this.h.i=new c.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,a+=this.h.i.decode(v[f],{stream:!(F&&f==D-1)});v.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Iw(this.i,this.u,this.A,this.l,this.R,dt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,ot=this.g;if((Oe=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(Oe)){var Re=Oe;break t}}Re=null}if(p=Re)vs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_l(this,p);else{this.o=!1,this.s=3,Tt(12),Fr(this),Ei(this);break e}}if(this.P){p=!0;let Zt;for(;!this.J&&this.C<K.length;)if(Zt=Sw(this,K),Zt==pl){dt==4&&(this.s=4,Tt(14),p=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==vd){this.s=4,Tt(15),vs(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else vs(this.i,this.l,Zt,null),_l(this,Zt);if(wd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||K.length!=0||this.h.h||(this.s=1,Tt(16),p=!1),this.o=this.o&&p,!p)vs(this.i,this.l,K,"[Invalid Chunked Response]"),Fr(this),Ei(this);else if(0<K.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),bl(ft),ft.M=!0,Tt(11))}}else vs(this.i,this.l,K,null),_l(this,K);dt==4&&Fr(this),this.o&&!this.J&&(dt==4?Gd(this.j,this):(this.o=!1,Qo(this)))}else qw(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Fr(this),Ei(this)}}}catch{}finally{}};function wd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Sw(a,f){var p=a.C,v=f.indexOf(`
`,p);return v==-1?pl:(p=Number(f.substring(p,v)),isNaN(p)?vd:(v+=1,v+p>f.length?pl:(f=f.slice(v,v+p),a.C=v+p,f)))}qn.prototype.cancel=function(){this.J=!0,Fr(this)};function Qo(a){a.S=Date.now()+a.I,Td(a,a.I)}function Td(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(m(a.ba,a),f)}function gl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Aw(this.i,this.A),this.L!=2&&(_i(),Tt(17)),Fr(this),this.s=2,Ei(this)):Td(this,this.S-a)};function Ei(a){a.j.G==0||a.J||Gd(a.j,a)}function Fr(a){gl(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Hn(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function _l(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||yl(p.h,a))){if(!a.K&&yl(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ra(p),ta(p);else break e;Tl(p),Tt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=yi(m(p.Za,p),6e3));if(1>=Ad(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else jr(p,11)}else if((a.K||p.g==a)&&ra(p),!R(f))for(D=p.Da.g.parse(f),f=0;f<D.length;f++){let Re=D[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const ft=Re[3];ft!=null&&(p.la=ft,p.j.info("VER="+p.la));const dt=Re[4];dt!=null&&(p.Aa=dt,p.j.info("SVER="+p.Aa));const Ts=Re[5];Ts!=null&&typeof Ts=="number"&&0<Ts&&(v=1.5*Ts,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Zt=a.g;if(Zt){const ia=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var F=v.h;F.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(vl(F,F.h),F.h=null))}if(v.D){const Il=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(v.ya=Il,De(v.I,v.D,Il))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var K=a;if(v.qa=Xd(v,v.J?v.ia:null,v.W),K.K){Rd(v.h,K);var Oe=K,ot=v.L;ot&&(Oe.I=ot),Oe.B&&(gl(Oe),Qo(Oe)),v.g=K}else Wd(v);0<p.i.length&&na(p)}else Re[0]!="stop"&&Re[0]!="close"||jr(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?jr(p,7):wl(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}_i(4)}catch{}}var Pw=class{constructor(a,f){this.g=a,this.map=f}};function bd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Id(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ad(a){return a.h?1:a.g?a.g.size:0}function yl(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function vl(a,f){a.g?a.g.add(f):a.h=f}function Rd(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}bd.prototype.cancel=function(){if(this.i=Sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return k(a.i)}function Cw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var f=[],p=a.length,v=0;v<p;v++)f.push(a[v]);return f}f=[],p=0;for(v in a)f[p++]=a[v];return f}function kw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const v in a)f[p++]=v;return f}}}function Pd(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=kw(a),v=Cw(a),D=v.length,F=0;F<D;F++)f.call(void 0,v[F],p&&p[F],a)}var Cd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ow(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),D=null;if(0<=v){var F=a[p].substring(0,v);D=a[p].substring(v+1)}else F=a[p];f(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,Yo(this,a.j),this.o=a.o,this.g=a.g,Xo(this,a.s),this.l=a.l;var f=a.i,p=new bi;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),kd(this,p),this.m=a.m}else a&&(f=String(a).match(Cd))?(this.h=!1,Yo(this,f[1]||"",!0),this.o=wi(f[2]||""),this.g=wi(f[3]||"",!0),Xo(this,f[4]),this.l=wi(f[5]||"",!0),kd(this,f[6]||"",!0),this.m=wi(f[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}Ur.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Ti(f,Od,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Ti(f,Od,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ti(p,p.charAt(0)=="/"?Dw:xw,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ti(p,Lw)),a.join("")};function En(a){return new Ur(a)}function Yo(a,f,p){a.j=p?wi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Xo(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function kd(a,f,p){f instanceof bi?(a.i=f,Vw(a.i,a.h)):(p||(f=Ti(f,Mw)),a.i=new bi(f,a.h))}function De(a,f,p){a.i.set(f,p)}function Jo(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,Nw),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Nw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Od=/[#\/\?@]/g,xw=/[#\?:]/g,Dw=/[#\?]/g,Mw=/[#\?@]/g,Lw=/#/g;function bi(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ow(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=bi.prototype,t.add=function(a,f){zn(this),this.i=null,a=Es(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function Nd(a,f){zn(a),f=Es(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function xd(a,f){return zn(a),f=Es(a,f),a.g.has(f)}t.forEach=function(a,f){zn(this),this.g.forEach(function(p,v){p.forEach(function(D){a.call(f,D,v,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let v=0;v<f.length;v++){const D=a[v];for(let F=0;F<D.length;F++)p.push(f[v])}return p},t.V=function(a){zn(this);let f=[];if(typeof a=="string")xd(this,a)&&(f=f.concat(this.g.get(Es(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return zn(this),this.i=null,a=Es(this,a),xd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Dd(a,f,p){Nd(a,f),0<p.length&&(a.i=null,a.g.set(Es(a,f),k(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var v=f[p];const F=encodeURIComponent(String(v)),K=this.V(v);for(v=0;v<K.length;v++){var D=F;K[v]!==""&&(D+="="+encodeURIComponent(String(K[v]))),a.push(D)}}return this.i=a.join("&")};function Es(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Vw(a,f){f&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(p,v){var D=v.toLowerCase();v!=D&&(Nd(this,v),Dd(this,D,p))},a)),a.j=f}function Fw(a,f){const p=new vi;if(c.Image){const v=new Image;v.onload=g(Wn,p,"TestLoadImage: loaded",!0,f,v),v.onerror=g(Wn,p,"TestLoadImage: error",!1,f,v),v.onabort=g(Wn,p,"TestLoadImage: abort",!1,f,v),v.ontimeout=g(Wn,p,"TestLoadImage: timeout",!1,f,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else f(!1)}function Uw(a,f){const p=new vi,v=new AbortController,D=setTimeout(()=>{v.abort(),Wn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:v.signal}).then(F=>{clearTimeout(D),F.ok?Wn(p,"TestPingServer: ok",!0,f):Wn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Wn(p,"TestPingServer: error",!1,f)})}function Wn(a,f,p,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(p)}catch{}}function jw(){this.g=new qt}function Bw(a,f,p){const v=p||"";try{Pd(a,function(D,F){let K=D;u(D)&&(K=_s(D)),f.push(v+F+"="+encodeURIComponent(K))})}catch(D){throw f.push(v+"type="+encodeURIComponent("_badmap")),D}}function Ii(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ii,ys),Ii.prototype.g=function(){return new Zo(this.l,this.j)},Ii.prototype.i=function(a){return function(){return a}}({});function Zo(a,f){ie.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Zo,ie),t=Zo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Md(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Md(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Ai(this):Ri(this),this.readyState==3&&Md(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ri(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ld(a){let f="";return L(a,function(p,v){f+=v,f+=":",f+=p,f+=`\r
`}),f}function El(a,f,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Ld(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):De(a,f,p))}function qe(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(qe,ie);var $w=/^https?$/i,Hw=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dl.g(),this.v=this.o?hd(this.o):hd(dl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(F){Vd(this,F);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)p.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())p.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),D=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Hw,f,void 0))||v||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of p)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jd(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){Vd(this,F)}};function Vd(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Fd(a),ea(a)}function Fd(a){a.A||(a.A=!0,le(a,"complete"),le(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,le(this,"complete"),le(this,"abort"),ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ea(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ud(this):this.bb())},t.bb=function(){Ud(this)};function Ud(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)be(a.Ea,0,a);else if(le(a,"readystatechange"),wn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var v;if(v=K===0){var D=String(a.D).match(Cd)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),v=!$w.test(D?D.toLowerCase():"")}p=v}if(p)le(a,"complete"),le(a,"success");else{a.m=6;try{var F=2<wn(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",Fd(a)}}finally{ea(a)}}}}function ea(a,f){if(a.g){jd(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||le(a,"ready");try{p.onreadystatechange=v}catch{}}}function jd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),wt(f)}};function Bd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qw(a){const f={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(R(a[v]))continue;var p=S(a[v]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=f[D]||[];f[D]=F,F.push(p)}w(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function $d(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,a),this.cb=Si("retryDelaySeedMs",1e4,a),this.Wa=Si("forwardChannelMaxRetries",2,a),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bd(a&&a.concurrentRequestLimit),this.Da=new jw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$d.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,v){Tt(0),this.W=a,this.H=f||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Xd(this,null,this.W),na(this)};function wl(a){if(Hd(a),a.G==3){var f=a.U++,p=En(a.I);if(De(p,"SID",a.K),De(p,"RID",f),De(p,"TYPE","terminate"),Pi(a,p),f=new qn(a,a.j,f),f.L=2,f.v=Jo(En(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=f.v,p=!0),p||(f.g=Jd(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Qo(f)}Yd(a)}function ta(a){a.g&&(bl(a),a.g.cancel(),a.g=null)}function Hd(a){ta(a),a.u&&(c.clearTimeout(a.u),a.u=null),ra(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function na(a){if(!Id(a.h)&&!a.s){a.s=!0;var f=a.Ga;ne||Jt(),ee||(ne(),ee=!0),Et.add(f,a),a.B=0}}function zw(a,f){return Ad(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(m(a.Ga,a,f),Qd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new qn(this,this.j,a);let F=this.o;if(this.S&&(F?(F=y(F),E(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=zd(this,D,f),p=En(this.I),De(p,"RID",a),De(p,"CVER",22),this.D&&De(p,"X-HTTP-Session-Id",this.D),Pi(this,p),F&&(this.O?f="headers="+encodeURIComponent(String(Ld(F)))+"&"+f:this.m&&El(p,this.m,F)),vl(this.h,D),this.Ua&&De(p,"TYPE","init"),this.P?(De(p,"$req",f),De(p,"SID","null"),D.T=!0,ml(D,p,null)):ml(D,p,f),this.G=2}}else this.G==3&&(a?qd(this,a):this.i.length==0||Id(this.h)||qd(this))};function qd(a,f){var p;f?p=f.l:p=a.U++;const v=En(a.I);De(v,"SID",a.K),De(v,"RID",p),De(v,"AID",a.T),Pi(a,v),a.m&&a.o&&El(v,a.m,a.o),p=new qn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=zd(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),vl(a.h,p),ml(p,v,f)}function Pi(a,f){a.H&&L(a.H,function(p,v){De(f,v,p)}),a.l&&Pd({},function(p,v){De(f,v,p)})}function zd(a,f,p){p=Math.min(a.i.length,p);var v=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let F=-1;for(;;){const K=["count="+p];F==-1?0<p?(F=D[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let Oe=!0;for(let ot=0;ot<p;ot++){let Re=D[ot].g;const ft=D[ot].map;if(Re-=F,0>Re)F=Math.max(0,D[ot].g-100),Oe=!1;else try{Bw(ft,K,"req"+Re+"_")}catch{v&&v(ft)}}if(Oe){v=K.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,v}function Wd(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ne||Jt(),ee||(ne(),ee=!0),Et.add(f,a),a.v=0}}function Tl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(m(a.Fa,a),Qd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),ta(this),Kd(this))};function bl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Kd(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=En(a.qa);De(f,"RID","rpc"),De(f,"SID",a.K),De(f,"AID",a.T),De(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(f,"TO",a.ja),De(f,"TYPE","xmlhttp"),Pi(a,f),a.m&&a.o&&El(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Jo(En(f)),p.m=null,p.P=!0,Ed(p,a)}t.Za=function(){this.C!=null&&(this.C=null,ta(this),Tl(this),Tt(19))};function ra(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Gd(a,f){var p=null;if(a.g==f){ra(a),bl(a),a.g=null;var v=2}else if(yl(a.h,f))p=f.D,Rd(a.h,f),v=1;else return;if(a.G!=0){if(f.o)if(v==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var D=a.B;v=Wo(),le(v,new gd(v,p)),na(a)}else Wd(a);else if(D=f.s,D==3||D==0&&0<f.X||!(v==1&&zw(a,f)||v==2&&Tl(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),D){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function Qd(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function jr(a,f){if(a.j.info("Error code "+f),f==2){var p=m(a.fb,a),v=a.Xa;const D=!v;v=new Ur(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Yo(v,"https"),Jo(v),D?Fw(v.toString(),p):Uw(v.toString(),p)}else Tt(2);a.G=0,a.l&&a.l.sa(f),Yd(a),Hd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Yd(a){if(a.G=0,a.ka=[],a.l){const f=Sd(a.h);(f.length!=0||a.i.length!=0)&&(N(a.ka,f),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Xd(a,f,p){var v=p instanceof Ur?En(p):new Ur(p);if(v.g!="")f&&(v.g=f+"."+v.g),Xo(v,v.s);else{var D=c.location;v=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var F=new Ur(null);v&&Yo(F,v),f&&(F.g=f),D&&Xo(F,D),p&&(F.l=p),v=F}return p=a.D,f=a.ya,p&&f&&De(v,p,f),De(v,"VER",a.la),Pi(a,v),v}function Jd(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new qe(new Ii({eb:p})):new qe(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zd(){}t=Zd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function sa(){}sa.prototype.g=function(a,f){return new Dt(a,f)};function Dt(a,f){ie.call(this),this.g=new $d(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!R(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!R(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new ws(this)}P(Dt,ie),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){wl(this.g)},Dt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=_s(a),a=p);f.i.push(new Pw(f.Ya++,a)),f.G==3&&na(f)},Dt.prototype.N=function(){this.g.l=null,delete this.j,wl(this.g),delete this.g,Dt.aa.N.call(this)};function ep(a){hl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}P(ep,hl);function tp(){fl.call(this),this.status=1}P(tp,fl);function ws(a){this.g=a}P(ws,Zd),ws.prototype.ua=function(){le(this.g,"a")},ws.prototype.ta=function(a){le(this.g,new ep(a))},ws.prototype.sa=function(a){le(this.g,new tp)},ws.prototype.ra=function(){le(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,IE=function(){return new sa},bE=function(){return Wo()},TE=Vr,Yu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ko.NO_ERROR=0,Ko.TIMEOUT=8,Ko.HTTP_ERROR=6,La=Ko,_d.COMPLETE="complete",wE=_d,fd.EventType=gi,gi.OPEN="a",gi.CLOSE="b",gi.ERROR="c",gi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Li=fd,EE=Ii,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,vE=qe}).apply(typeof va<"u"?va:typeof self<"u"?self:typeof window<"u"?window:{});const sg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new df("@firebase/firestore");function Oi(){return as.logLevel}function re(t,...e){if(as.logLevel<=we.DEBUG){const n=e.map(Af);as.debug(`Firestore (${hi}): ${t}`,...n)}}function Dn(t,...e){if(as.logLevel<=we.ERROR){const n=e.map(Af);as.error(`Firestore (${hi}): ${t}`,...n)}}function Xs(t,...e){if(as.logLevel<=we.WARN){const n=e.map(Af);as.warn(`Firestore (${hi}): ${t}`,...n)}}function Af(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${hi}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function xe(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class v2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class E2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class w2{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Er,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new AE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new mt(e)}}class T2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class b2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new T2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new I2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=R2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function Js(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new tt(0,0))}static max(){return new ge(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends yo{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const S2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends yo{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return S2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ce($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ce($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Fe.fromString(e))}static fromName(e){return new ue(Fe.fromString(e).popFirst(5))}static empty(){return new ue(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Fe(e.slice()))}}function P2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Ar(s,ue.empty(),e)}function C2(t){return new Ar(t.readTime,t.key,-1)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(ge.min(),ue.empty(),-1)}static max(){return new Ar(ge.max(),ue.empty(),-1)}}function k2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==O2)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function x2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Uo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Rf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rf.oe=-1;function qc(t){return t==null}function hc(t){return t===0&&1/t==-1/0}function D2(t){return typeof t=="number"&&Number.isInteger(t)&&!hc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function SE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}}class Ea{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new og(this.data.getIterator())}getIteratorFrom(e){return new og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ut(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class PE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new PE("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const M2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=M2.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pf(t){const e=t.mapValue.fields.__previous_value__;return Sf(e)?Pf(e):e}function vo(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sf(t)?4:V2(t)?9007199254740991:10:pe()}function _n(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),c=Rr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return cs(s.bytesValue).isEqual(cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),c=Qe(i.doubleValue);return o===c?hc(o)===hc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ig(o)!==ig(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!_n(o[l],c[l])))return!1;return!0}(t,e);default:return pe()}}function wo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=ls(t),r=ls(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Qe(i.integerValue||i.doubleValue),l=Qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ag(t.timestampValue,e.timestampValue);case 4:return ag(vo(t),vo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const c=cs(i),l=cs(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=Se(c[u],l[u]);if(h!==0)return h}return Se(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Se(Qe(i.latitude),Qe(o.latitude));return c!==0?c:Se(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const h=Zs(c[u],l[u]);if(h)return h}return Se(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===wa.mapValue&&o===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(o===wa.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const m=Se(l[d],h[d]);if(m!==0)return m;const g=Zs(c[l[d]],u[h[d]]);if(g!==0)return g}return Se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Rr(t),r=Rr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function ei(t){return Xu(t)}function Xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Xu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Xu(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Ju(t){return!!t&&"integerValue"in t}function Cf(t){return!!t&&"arrayValue"in t}function cg(t){return!!t&&"nullValue"in t}function lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function V2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Yi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Va(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Yi(this.value))}}function CE(t){const e=[];return ms(t.fields,(n,r)=>{const s=new lt([n]);if(Va(r)){const i=CE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,ge.min(),ge.min(),ge.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,ge.min(),ge.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ge.min(),ge.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function ug(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Zs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dc{constructor(e,n="asc"){this.field=e,this.dir=n}}function F2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kE{}class Ze extends kE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new j2(e,n,r):n==="array-contains"?new H2(e,r):n==="in"?new q2(e,r):n==="not-in"?new z2(e,r):n==="array-contains-any"?new W2(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B2(e,r):new $2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zs(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends kE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return OE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function OE(t){return t.op==="and"}function NE(t){return U2(t)&&OE(t)}function U2(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Zu(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+ei(t.value);if(NE(t))return t.filters.map(e=>Zu(e)).join(",");{const e=t.filters.map(n=>Zu(n)).join(",");return`${t.op}(${e})`}}function xE(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&xE(o,s.filters[c]),!0):!1}(t,e):void pe()}function DE(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ei(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(DE).join(" ,")+"}"}(t):"Filter"}class j2 extends Ze{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class B2 extends Ze{constructor(e,n){super(e,"in",n),this.keys=ME("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $2 extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=ME("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ME(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class H2 extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cf(n)&&wo(n.arrayValue,this.value)}}class q2 extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class z2 extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wo(this.value.arrayValue,n)}}class W2 extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function fg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new K2(t,e,n,r,s,i,o)}function kf(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ei(r)).join(",")),e.ue=n}return e.ue}function Of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!F2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hg(t.startAt,e.startAt)&&hg(t.endAt,e.endAt)}function eh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function G2(t,e,n,r,s,i,o,c){return new zc(t,e,n,r,s,i,o,c)}function LE(t){return new zc(t)}function dg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Q2(t){return t.collectionGroup!==null}function Xi(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ut(lt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new dc(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new dc(lt.keyField(),r))}return e.ce}function mn(t){const e=_e(t);return e.le||(e.le=Y2(e,Xi(t))),e.le}function Y2(t,e){if(t.limitType==="F")return fg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new dc(s.field,i)});const n=t.endAt?new fc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fc(t.startAt.position,t.startAt.inclusive):null;return fg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function th(t,e,n){return new zc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wc(t,e){return Of(mn(t),mn(e))&&t.limitType===e.limitType}function VE(t){return`${kf(mn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>DE(s)).join(", ")}]`),qc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ei(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ei(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Kc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=ug(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Xi(r),s)||r.endAt&&!function(o,c,l){const u=ug(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Xi(r),s))}(t,e)}function X2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function FE(t){return(e,n)=>{let r=!1;for(const s of Xi(t)){const i=J2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function J2(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Zs(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return SE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=new He(ue.comparator);function Mn(){return Z2}const UE=new He(ue.comparator);function Vi(...t){let e=UE;for(const n of t)e=e.insert(n.key,n);return e}function jE(t){let e=UE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return Ji()}function BE(){return Ji()}function Ji(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const eO=new He(ue.comparator),tO=new ut(ue.comparator);function ve(...t){let e=tO;for(const n of t)e=e.add(n);return e}const nO=new ut(Se);function rO(){return nO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function HE(t){return{integerValue:""+t}}function sO(t,e){return D2(e)?HE(e):$E(t,e)}/**
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
 */class Gc{constructor(){this._=void 0}}function iO(t,e,n){return t instanceof pc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sf(i)&&(i=Pf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof To?zE(t,e):t instanceof bo?WE(t,e):function(s,i){const o=qE(s,i),c=pg(o)+pg(s.Pe);return Ju(o)&&Ju(s.Pe)?HE(c):$E(s.serializer,c)}(t,e)}function oO(t,e,n){return t instanceof To?zE(t,e):t instanceof bo?WE(t,e):n}function qE(t,e){return t instanceof mc?function(r){return Ju(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pc extends Gc{}class To extends Gc{constructor(e){super(),this.elements=e}}function zE(t,e){const n=KE(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends Gc{constructor(e){super(),this.elements=e}}function WE(t,e){let n=KE(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class mc extends Gc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function pg(t){return Qe(t.integerValue||t.doubleValue)}function KE(t){return Cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof To&&s instanceof To||r instanceof bo&&s instanceof bo?Js(r.elements,s.elements,_n):r instanceof mc&&s instanceof mc?_n(r.Pe,s.Pe):r instanceof pc&&s instanceof pc}(t.transform,e.transform)}class cO{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qc{}function GE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nf(t.key,Gt.none()):new jo(t.key,t.data,Gt.none());{const n=t.data,r=kt.empty();let s=new ut(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Ft(s.toArray()),Gt.none())}}function lO(t,e,n){t instanceof jo?function(s,i,o){const c=s.value.clone(),l=gg(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!Fa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=gg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(QE(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,r){return t instanceof jo?function(i,o,c,l){if(!Fa(i.precondition,o))return c;const u=i.value.clone(),h=_g(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,c,l){if(!Fa(i.precondition,o))return c;const u=_g(i.fieldTransforms,l,o),h=o.data;return h.setAll(QE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return Fa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function uO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qE(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Js(r,s,(i,o)=>aO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jo extends Qc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Qc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function QE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gg(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,oO(o,c,n[s]))}return r}function _g(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iO(i,o,e))}return r}class Nf extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hO extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=GE(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,r)=>mg(n,r))&&Js(this.baseMutations,e.baseMutations,(n,r)=>mg(n,r))}}class xf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return eO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new xf(e,n,r,s)}}/**
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
 */class dO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Te;function mO(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function YE(t){if(t===void 0)return Dn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ge.OK:return $.OK;case Ge.CANCELLED:return $.CANCELLED;case Ge.UNKNOWN:return $.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return $.INTERNAL;case Ge.UNAVAILABLE:return $.UNAVAILABLE;case Ge.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ge.NOT_FOUND:return $.NOT_FOUND;case Ge.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ge.ABORTED:return $.ABORTED;case Ge.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ge.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(Te=Ge||(Ge={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gO(){return new TextEncoder}/**
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
 */const _O=new ts([4294967295,4294967295],0);function yg(t){const e=gO().encode(t),n=new yE;return n.update(e),new Uint8Array(n.digest())}function vg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ts([n,r],0),new ts([s,i],0)]}class Df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fi(`Invalid padding: ${n}`);if(r<0)throw new Fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ts.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ts.fromNumber(r)));return s.compare(_O)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yg(e),[r,s]=vg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Df(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=yg(e),[r,s]=vg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yc(ge.min(),s,new He(Se),Mn(),ve())}}class Bo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bo(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class XE{constructor(e,n){this.targetId=e,this.me=n}}class JE{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Eg{constructor(){this.fe=0,this.ge=Tg(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Bo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Tg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=wg(),this.Qe=new He(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(eh(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,gt.newNoDocument(o,ge.min()))}else xe(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=cs(r).toUint8Array()}catch(l){if(l instanceof PE)return Xs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Df(o,s,i)}catch(l){return Xs(l instanceof Fi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&eh(c.target)){const l=new ue(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,gt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ve();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Yc(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=wg(),this.Qe=new He(Se),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Eg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Eg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wg(){return new He(ue.comparator)}function Tg(){return new He(ue.comparator)}const vO={asc:"ASCENDING",desc:"DESCENDING"},EO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wO={and:"AND",or:"OR"};class TO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nh(t,e){return t.useProto3Json||qc(e)?e:{value:e}}function gc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bO(t,e){return gc(t,e.toTimestamp())}function gn(t){return xe(!!t),ge.fromTimestamp(function(n){const r=Rr(n);return new tt(r.seconds,r.nanos)}(t))}function Mf(t,e){return rh(t,e).canonicalString()}function rh(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function e0(t){const e=Fe.fromString(t);return xe(i0(e)),e}function sh(t,e){return Mf(t.databaseId,e.path)}function Ql(t,e){const n=e0(e);if(n.get(1)!==t.databaseId.projectId)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(n0(n))}function t0(t,e){return Mf(t.databaseId,e)}function IO(t){const e=e0(t);return e.length===4?Fe.emptyPath():n0(e)}function ih(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function n0(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bg(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function AO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string"),vt.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),vt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?$.UNKNOWN:YE(u.code);return new ce(h,u.message||"")}(o);n=new JE(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ql(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ge.min(),c=new kt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ua(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ql(t,r.document),i=r.readTime?gn(r.readTime):ge.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ua([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ql(t,r.document),i=r.removedTargetIds||[];n=new Ua([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pO(s,i),c=r.targetId;n=new XE(c,o)}}return n}function RO(t,e){let n;if(e instanceof jo)n={update:bg(t,e.key,e.value)};else if(e instanceof Nf)n={delete:sh(t,e.key)};else if(e instanceof Lr)n={update:bg(t,e.key,e.data),updateMask:MO(e.fieldMask)};else{if(!(e instanceof hO))return pe();n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof To)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function SO(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(ge.min())&&(o=gn(i)),new cO(o,s.transformResults||[])}(n,e))):[]}function PO(t,e){return{documents:[t0(t,e.path)]}}function CO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=t0(t,s);const i=function(u){if(u.length!==0)return s0(yn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Ss(m.field),direction:NO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=nh(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function kO(t){let e=IO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=r0(d);return m instanceof yn&&NE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(P){return new dc(Ps(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(d){let m;return m=typeof d=="object"?d.value:d,qc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,g=d.values||[];return new fc(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new fc(g,m)}(n.endAt)),G2(e,s,o,i,c,"F",l,u)}function OO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function r0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>r0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function NO(t){return vO[t]}function xO(t){return EO[t]}function DO(t){return wO[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Ps(t){return lt.fromServerFormat(t.fieldPath)}function s0(t){return t instanceof Ze?function(n){if(n.op==="=="){if(lg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(cg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(cg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:xO(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>s0(s));return r.length===1?r[0]:{compositeFilter:{op:DO(n.op),filters:r}}}(t):pe()}function MO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function i0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=ge.min(),o=ge.min(),c=vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.ct=e}}function VO(t){const e=kO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this._n=new UO}addToCollectionParentIndex(e,n){return this._n.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Ar.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class UO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ti(0)}static Ln(){return new ti(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zi(r.mutation,s,Ft.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Vi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Mn();const o=Ji(),c=function(){return Ji()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Lr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Zi(h.mutation,u,h.mutation.getFieldMask(),tt.now())):o.set(u.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return c.set(u,new BO(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ji();let s=new He((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Ft.empty();h=c.applyToLocalView(u,h),r.set(l,h);const d=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,d=BE();h.forEach(m=>{if(!i.has(m)){const g=GE(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Q2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Qr());let c=-1,l=i;return o.next(u=>q.forEach(u,(h,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(h)?q.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:c,changes:jE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=Vi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Vi();return this.indexManager.getCollectionParents(e,i).next(c=>q.forEach(c,l=>{const u=function(d,m){return new zc(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,gt.newInvalidDocument(h)))});let c=Vi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Zi(h.mutation,u,Ft.empty(),tt.now()),Kc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return q.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:VO(s.bundledQuery),readTime:gn(s.readTime)}}(n)),q.resolve()}}/**
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
 */class qO{constructor(){this.overlays=new He(ue.comparator),this.hr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new ue(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Qr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Qr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return q.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dO(n,r));let i=this.hr.get(n);i===void 0&&(i=ve(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Pr=new ut(st.Ir),this.Tr=new ut(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new st(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ue(new Fe([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ue(new Fe([])),r=new st(n,e),s=new st(n,e+1);let i=ve();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ue.comparator(e.key,n.key)||Se(e.pr,n.pr)}static Er(e,n){return Se(e.pr,n.pr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ut(st.Ir)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fO(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new st(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Se);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),q.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new st(new ue(i),0);let c=new ut(Se);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),q.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return q.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new st(n,0),s=this.wr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.vr=e,this.docs=function(){return new He(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,c=new ue(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||k2(C2(h),r)<=0||(s.has(h.key)||Kc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Fr(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KO(this)}getSize(e){return q.resolve(this.size)}}class KO extends jO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.persistence=e,this.Mr=new fi(n=>kf(n),Of),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Lf,this.targetCount=0,this.Lr=ti.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),q.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ti(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.qn(n),q.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n){this.Br={},this.overlays={},this.kr=new Rf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new GO(this),this.indexManager=new FO,this.remoteDocumentCache=function(s){return new WO(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new LO(n),this.$r=new HO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new zO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new YO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return q.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class YO extends N2{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.zr=new Lf,this.jr=null}static Hr(e){return new Vf(e)}get Jr(){if(this.jr)return this.jr;throw pe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),q.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Jr,r=>{const s=ue.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return q.or([()=>q.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ff(e,n.fromCache,r,s)}}/**
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
 */class XO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return qS()?8:x2(ht())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XO;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Oi()<=we.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),q.resolve()):(Oi()<=we.DEBUG&&re("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Oi()<=we.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):q.resolve())}ji(e,n){if(dg(n))return q.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=th(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,th(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return dg(n)||s.isEqual(ge.min())?q.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?q.resolve(null):(Oi()<=we.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.es(e,o,n,P2(s,-1)).next(c=>c))})}Zi(e,n){let r=new ut(FE(e));return n.forEach((s,i)=>{Kc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Oi()<=we.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.zi.getDocumentsMatchingQuery(e,n,Ar.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new He(Se),this.rs=new fi(i=>kf(i),Of),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $O(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function eN(t,e,n,r){return new ZO(t,e,n,r)}async function o0(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function tN(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const d=u.batch,m=d.keys();let g=q.resolve();return m.forEach(P=>{g=g.next(()=>h.getEntry(l,P)).next(k=>{const N=u.docVersions.get(P);xe(N!==null),k.version.compareTo(N)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),g.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function a0(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function nN(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((h,d)=>{const m=s.get(d);if(!m)return;c.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(vt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(k,N,x){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,g,h)&&c.push(n.Qr.updateTargetData(i,g))});let l=Mn(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(rN(i,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!r.isEqual(ge.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(d=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return q.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function rN(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):re("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function sN(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iN(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function oh(t,e,n){const r=_e(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Uo(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Ig(t,e,n){const r=_e(t);let s=ge.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=_e(l),m=d.rs.get(h);return m!==void 0?q.resolve(d.ns.get(m)):d.Qr.getTargetData(u,h)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ve())).next(c=>(oN(r,X2(e),c),{documents:c,hs:i})))}function oN(t,e,n){let r=t.ss.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Ag{constructor(){this.activeTargetIds=rO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aN{constructor(){this.no=new Ag,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function Yl(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class hN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=Yl(),l=this.vo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(h=>(re("RestConnection",`Received RPC '${n}' ${c}: `,h),h),h=>{throw Xs("RestConnection",`RPC '${n}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=lN[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Yl();return new Promise((o,c)=>{const l=new vE;l.setWithCredentials(!0),l.listenOnce(wE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case La.NO_ERROR:const h=l.getResponseJson();re(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case La.TIMEOUT:re(pt,`RPC '${e}' ${i} timed out`),c(new ce($.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const d=l.getStatus();if(re(pt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const P=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(g.status);c(new ce(P,g.message))}else c(new ce($.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ce($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{re(pt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);re(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=Yl(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IE(),c=bE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new EE({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");re(pt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let m=!1,g=!1;const P=new uN({lo:N=>{g?re(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(re(pt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),re(pt,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},ho:()=>d.close()}),k=(N,x,R)=>{N.listen(x,b=>{try{R(b)}catch(O){setTimeout(()=>{throw O},0)}})};return k(d,Li.EventType.OPEN,()=>{g||(re(pt,`RPC '${e}' stream ${s} transport opened.`),P.mo())}),k(d,Li.EventType.CLOSE,()=>{g||(g=!0,re(pt,`RPC '${e}' stream ${s} transport closed`),P.po())}),k(d,Li.EventType.ERROR,N=>{g||(g=!0,Xs(pt,`RPC '${e}' stream ${s} transport errored:`,N),P.po(new ce($.UNAVAILABLE,"The operation could not be completed")))}),k(d,Li.EventType.MESSAGE,N=>{var x;if(!g){const R=N.data[0];xe(!!R);const b=R,O=b.error||((x=b[0])===null||x===void 0?void 0:x.error);if(O){re(pt,`RPC '${e}' stream ${s} received error:`,O);const M=O.status;let L=function(_){const E=Ge[_];if(E!==void 0)return YE(E)}(M),w=O.message;L===void 0&&(L=$.INTERNAL,w="Unknown error status: "+M+" with message "+O.message),g=!0,P.po(new ce(L,w)),d.close()}else re(pt,`RPC '${e}' stream ${s} received:`,R),P.yo(R)}}),k(c,TE.STAT_EVENT,N=>{N.stat===Yu.PROXY?re(pt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Yu.NOPROXY&&re(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function Xl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){return new TO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new c0(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new ce($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fN extends l0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=AO(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?gn(o.readTime):ge.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=ih(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=eh(l)?{documents:PO(i,l)}:{query:CO(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ZE(i,o.resumeToken);const u=nh(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){c.readTime=gc(i,o.snapshotVersion.toTimestamp());const u=nh(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=OO(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=ih(this.serializer),n.removeTarget=e,this.i_(n)}}class dN extends l0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=SO(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.A_(r,n)}return xe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=ih(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RO(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,rh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce($.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,rh(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce($.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class mN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Dn(n),this.y_=!1):re("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{gs(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.M_.add(4),await $o(u),u.N_.set("Unknown"),u.M_.delete(4),await Jc(u)}(this))})}),this.N_=new mN(r,s)}}async function Jc(t){if(gs(t))for(const e of t.x_)await e(!0)}async function $o(t){for(const e of t.x_)await e(!1)}function u0(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),$f(n)?Bf(n):di(n).Xo()&&jf(n,e))}function Uf(t,e){const n=_e(t),r=di(n);n.F_.delete(e),r.Xo()&&h0(n,e),n.F_.size===0&&(r.Xo()?r.n_():gs(n)&&n.N_.set("Unknown"))}function jf(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}di(t).P_(e)}function h0(t,e){t.L_.xe(e),di(t).I_(e)}function Bf(t){t.L_=new yO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),di(t).start(),t.N_.w_()}function $f(t){return gs(t)&&!di(t).Zo()&&t.F_.size>0}function gs(t){return _e(t).M_.size===0}function f0(t){t.L_=void 0}async function _N(t){t.N_.set("Online")}async function yN(t){t.F_.forEach((e,n)=>{jf(t,e)})}async function vN(t,e){f0(t),$f(t)?(t.N_.D_(e),Bf(t)):t.N_.set("Unknown")}async function EN(t,e,n){if(t.N_.set("Online"),e instanceof JE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _c(t,r)}else if(e instanceof Ua?t.L_.Ke(e):e instanceof XE?t.L_.He(e):t.L_.We(e),!n.isEqual(ge.min()))try{const r=await a0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.F_.get(u);h&&i.F_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.F_.get(l);if(!h)return;i.F_.set(l,h.withResumeToken(vt.EMPTY_BYTE_STRING,h.snapshotVersion)),h0(i,l);const d=new ur(h.target,l,u,h.sequenceNumber);jf(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await _c(t,r)}}async function _c(t,e,n){if(!Uo(e))throw e;t.M_.add(1),await $o(t),t.N_.set("Offline"),n||(n=()=>a0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Jc(t)})}function d0(t,e){return e().catch(n=>_c(t,n,e))}async function Zc(t){const e=_e(t),n=Sr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;wN(e);)try{const s=await sN(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,TN(e,s)}catch(s){await _c(e,s)}p0(e)&&m0(e)}function wN(t){return gs(t)&&t.v_.length<10}function TN(t,e){t.v_.push(e);const n=Sr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function p0(t){return gs(t)&&!Sr(t).Zo()&&t.v_.length>0}function m0(t){Sr(t).start()}async function bN(t){Sr(t).V_()}async function IN(t){const e=Sr(t);for(const n of t.v_)e.d_(n.mutations)}async function AN(t,e,n){const r=t.v_.shift(),s=xf.from(r,e,n);await d0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Zc(t)}async function RN(t,e){e&&Sr(t).E_&&await async function(r,s){if(function(o){return mO(o)&&o!==$.ABORTED}(s.code)){const i=r.v_.shift();Sr(r).t_(),await d0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zc(r)}}(t,e),p0(t)&&m0(t)}async function Sg(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=gs(n);n.M_.add(3),await $o(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Jc(n)}async function SN(t,e){const n=_e(t);e?(n.M_.delete(2),await Jc(n)):e||(n.M_.add(2),await $o(n),n.N_.set("Unknown"))}function di(t){return t.B_||(t.B_=function(n,r,s){const i=_e(n);return i.f_(),new fN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:_N.bind(null,t),To:yN.bind(null,t),Ao:vN.bind(null,t),h_:EN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),$f(t)?Bf(t):t.N_.set("Unknown")):(await t.B_.stop(),f0(t))})),t.B_}function Sr(t){return t.k_||(t.k_=function(n,r,s){const i=_e(n);return i.f_(),new dN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:bN.bind(null,t),Ao:RN.bind(null,t),R_:IN.bind(null,t),A_:AN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Zc(t)):(await t.k_.stop(),t.v_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Hf(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qf(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Uo(t))return new ce($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=Vi(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.q_=new He(ue.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):pe():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ni{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ni(e,n,$s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class CN{constructor(){this.queries=new fi(e=>VE(e),Wc),this.onlineState="Unknown",this.z_=new Set}}async function kN(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new PN,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=qf(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&zf(n)}async function ON(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NN(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&zf(n)}function xN(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function zf(t){t.z_.forEach(e=>{e.next()})}var ah,Cg;(Cg=ah||(ah={})).J_="default",Cg.Cache="cache";class DN{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ah.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.key=e}}class _0{constructor(e){this.key=e}}class MN{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ve(),this.mutatedKeys=ve(),this.Ia=FE(e),this.Ta=new $s(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Pg,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const m=s.get(h),g=Kc(this.query,d)?d:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?P!==k&&(r.track({type:3,doc:g}),N=!0):this.Ra(m,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Ia(g,l)>0||u&&this.Ia(g,u)<0)&&(c=!0)):!m&&g?(r.track({type:0,doc:g}),N=!0):m&&!g&&(r.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,d)=>function(g,P){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return k(g)-k(P)}(h.type,d.type)||this.Ia(h.doc,d.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new ni(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Pg,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ve(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new _0(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new g0(r))}),n}pa(e){this.la=e.hs,this.Pa=ve();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ni.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class LN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VN{constructor(e){this.key=e,this.wa=!1}}class FN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new fi(c=>VE(c),Wc),this.Da=new Map,this.Ca=new Set,this.va=new He(ue.comparator),this.Fa=new Map,this.Ma=new Lf,this.xa={},this.Oa=new Map,this.Na=ti.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function UN(t,e,n=!0){const r=b0(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await y0(r,e,n,!0),s}async function jN(t,e){const n=b0(t);await y0(n,e,!0,!1)}async function y0(t,e,n,r){const s=await iN(t.localStore,mn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await BN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&u0(t.remoteStore,s),c}async function BN(t,e,n,r,s){t.Ba=(d,m,g)=>async function(k,N,x,R){let b=N.view.da(x);b.Xi&&(b=await Ig(k.localStore,N.query,!1).then(({documents:w})=>N.view.da(w,b)));const O=R&&R.targetChanges.get(N.targetId),M=R&&R.targetMismatches.get(N.targetId)!=null,L=N.view.applyChanges(b,k.isPrimaryClient,O,M);return Og(k,N.targetId,L.fa),L.snapshot}(t,d,m,g);const i=await Ig(t.localStore,e,!0),o=new MN(e,i.hs),c=o.da(i.documents),l=Bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Og(t,n,u.fa);const h=new LN(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function $N(t,e,n){const r=_e(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Wc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uf(r.remoteStore,s.targetId),ch(r,s.targetId)}).catch(Fo)):(ch(r,s.targetId),await oh(r.localStore,s.targetId,!0))}async function HN(t,e){const n=_e(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uf(n.remoteStore,r.targetId))}async function qN(t,e,n){const r=XN(t);try{const s=await function(o,c){const l=_e(o),u=tt.now(),h=c.reduce((g,P)=>g.add(P.key),ve());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let P=Mn(),k=ve();return l.os.getEntries(g,h).next(N=>{P=N,P.forEach((x,R)=>{R.isValidDocument()||(k=k.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,P)).next(N=>{d=N;const x=[];for(const R of c){const b=uO(R,d.get(R.key).overlayedDocument);b!=null&&x.push(new Lr(R.key,b,CE(b.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,x,c)}).next(N=>{m=N;const x=N.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(g,N.batchId,x)})}).then(()=>({batchId:m.batchId,changes:jE(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new He(Se)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ho(r,s.changes),await Zc(r.remoteStore)}catch(s){const i=qf(s,"Failed to persist write");n.reject(i)}}async function v0(t,e){const n=_e(t);try{const r=await nN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?xe(o.wa):s.removedDocuments.size>0&&(xe(o.wa),o.wa=!1))}),await Ho(n,r,e)}catch(r){await Fo(r)}}function kg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((h,d)=>{for(const m of d.U_)m.j_(c)&&(u=!0)}),u&&zf(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zN(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new He(ue.comparator);o=o.insert(i,gt.newNoDocument(i,ge.min()));const c=ve().add(i),l=new Yc(ge.min(),new Map,new He(Se),o,c);await v0(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Wf(r)}else await oh(r.localStore,e,!1).then(()=>ch(r,e,n)).catch(Fo)}async function WN(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await tN(n.localStore,e);w0(n,r,null),E0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ho(n,s)}catch(s){await Fo(s)}}async function KN(t,e,n){const r=_e(t);try{const s=await function(o,c){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(d=>(xe(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);w0(r,e,n),E0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ho(r,s)}catch(s){await Fo(s)}}function E0(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function w0(t,e,n){const r=_e(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||T0(t,r)})}function T0(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Uf(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Wf(t))}function Og(t,e,n){for(const r of n)r instanceof g0?(t.Ma.addReference(r.key,e),GN(t,r)):r instanceof _0?(re("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||T0(t,r.key)):pe()}function GN(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(re("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Wf(t))}function Wf(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ue(Fe.fromString(e)),r=t.Na.next();t.Fa.set(r,new VN(n)),t.va=t.va.insert(n,r),u0(t.remoteStore,new ur(mn(LE(n.path)),r,"TargetPurposeLimboResolution",Rf.oe))}}async function Ho(t,e,n){const r=_e(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Ff.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>q.forEach(u,m=>q.forEach(m.qi,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>q.forEach(m.Qi,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!Uo(d))throw d;re("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.ns.get(m),P=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(P);h.ns=h.ns.insert(m,k)}}}(r.localStore,i))}async function QN(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await o0(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new ce($.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ho(n,r.us)}}function YN(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return ve().add(r.key);{let s=ve();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function b0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zN.bind(null,e),e.Sa.h_=NN.bind(null,e.eventManager),e.Sa.ka=xN.bind(null,e.eventManager),e}function XN(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KN.bind(null,e),e}class Ng{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eN(this.persistence,new JO,e.initialUser,this.serializer)}createPersistence(e){return new QO(Vf.Hr,this.serializer)}createSharedClientState(e){return new aN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QN.bind(null,this.syncEngine),await SN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CN}()}createDatastore(e){const n=Xc(e.databaseInfo.databaseId),r=function(i){return new hN(i)}(e.databaseInfo);return function(i,o,c,l){return new pN(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new gN(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>kg(this.syncEngine,n,0),function(){return Rg.D()?new Rg:new cN}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const d=new FN(s,i,o,c,l,u);return h&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=_e(r);re("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await $o(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=RE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{re("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(re("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jl(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await o0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nx(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Sg(e.remoteStore,s)),t._onlineComponents=e}function tx(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tx(n))throw n;Xs("Error using user provided cache. Falling back to memory cache: "+n),await Jl(t,new Ng)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Jl(t,new Ng);return t._offlineComponents}async function I0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await xg(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await xg(t,new JN))),t._onlineComponents}function rx(t){return I0(t).then(e=>e.syncEngine)}async function sx(t){const e=await I0(t),n=e.eventManager;return n.onListen=UN.bind(null,e.syncEngine),n.onUnlisten=$N.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HN.bind(null,e.syncEngine),n}function ix(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new ZN({next:m=>{o.enqueueAndForget(()=>ON(i,d)),m.fromCache&&l.source==="server"?u.reject(new ce($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new DN(c,h,{includeMetadataChanges:!0,ra:!0});return kN(i,d)}(await sx(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Dg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e,n){if(!n)throw new ce($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ox(t,e,n,r){if(e===!0&&r===!0)throw new ce($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mg(t){if(!ue.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lg(t){if(ue.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function ri(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kf(t);throw new ce($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ox("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class el{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new v2;switch(r.type){case"firstParty":return new b2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Dg.get(n);r&&(re("ComponentProvider","Removing Datastore"),Dg.delete(n),r.terminate())}(this),Promise.resolve()}}function ax(t,e,n,r={}){var s;const i=(t=ri(t,el))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=mt.MOCK_USER;else{c=FS(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(u)}t._authCredentials=new E2(new AE(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tl(this.firestore,e,this._query)}}class Qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class wr extends tl{constructor(e,n,r){super(e,n,LE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new ue(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function IL(t,e,...n){if(t=it(t),R0("collection","path",e),t instanceof el){const r=Fe.fromString(e,...n);return Lg(r),new wr(t,null,r)}{if(!(t instanceof Qt||t instanceof wr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Lg(r),new wr(t.firestore,null,r)}}function AL(t,e,...n){if(t=it(t),arguments.length===1&&(e=RE.newId()),R0("doc","path",e),t instanceof el){const r=Fe.fromString(e,...n);return Mg(r),new Qt(t,null,new ue(r))}{if(!(t instanceof Qt||t instanceof wr))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Mg(r),new Qt(t.firestore,t instanceof wr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new c0(this,"async_queue_retry"),this.hu=()=>{const n=Xl();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Xl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Er;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Uo(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Hf.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&pe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class nl extends el{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new cx}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||S0(this),this._firestoreClient.terminate()}}function lx(t,e){const n=typeof t=="object"?t:Vv(),r=typeof t=="string"?t:"(default)",s=mf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=LS("firestore");i&&ax(s,...i)}return s}function Gf(t){return t._firestoreClient||S0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function S0(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new L2(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,A0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ex(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(vt.fromBase64String(e))}catch(n){throw new ce($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new si(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=/^__.*__$/;class hx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new jo(e,this.data,n,this.fieldTransforms)}}class P0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function C0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Xf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return yc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(C0(this.fu)&&ux.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class fx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xc(e)}Fu(e,n,r,s=!1){return new Xf({fu:e,methodName:n,vu:r,path:lt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function k0(t){const e=t._freezeSettings(),n=Xc(t._databaseId);return new fx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O0(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);Jf("Data must be an object, but it was:",o,r);const c=N0(r,o);let l,u;if(i.merge)l=new Ft(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=lh(e,d,n);if(!o.contains(m))throw new ce($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);D0(h,m)||h.push(m)}l=new Ft(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new hx(new kt(c),l,u)}class sl extends Qf{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sl}}function dx(t,e,n,r){const s=t.Fu(1,e,n);Jf("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();ms(r,(l,u)=>{const h=Zf(e,l,n);u=it(u);const d=s.Su(h);if(u instanceof sl)i.push(h);else{const m=il(u,d);m!=null&&(i.push(h),o.set(h,m))}});const c=new Ft(i);return new P0(o,c,s.fieldTransforms)}function px(t,e,n,r,s,i){const o=t.Fu(1,e,n),c=[lh(e,r,n)],l=[s];if(i.length%2!=0)throw new ce($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(lh(e,i[m])),l.push(i[m+1]);const u=[],h=kt.empty();for(let m=c.length-1;m>=0;--m)if(!D0(u,c[m])){const g=c[m];let P=l[m];P=it(P);const k=o.Su(g);if(P instanceof sl)u.push(g);else{const N=il(P,k);N!=null&&(u.push(g),h.set(g,N))}}const d=new Ft(u);return new P0(h,d,o.fieldTransforms)}function il(t,e){if(x0(t=it(t)))return Jf("Unsupported field value:",e,t),N0(t,e);if(t instanceof Qf)return function(r,s){if(!C0(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=il(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:gc(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gc(s.serializer,i)}}if(r instanceof Yf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof si)return{bytesValue:ZE(s.serializer,r._byteString)};if(r instanceof Qt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mf(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Kf(r)}`)}(t,e)}function N0(t,e){const n={};return SE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=il(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function x0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Yf||t instanceof si||t instanceof Qt||t instanceof Qf)}function Jf(t,e,n){if(!x0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Kf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function lh(t,e,n){if((e=it(e))instanceof rl)return e._internalPath;if(typeof e=="string")return Zf(t,e);throw yc("Field path arguments must be of type string or ",t,!1,void 0,n)}const mx=new RegExp("[~\\*/\\[\\]]");function Zf(t,e,n){if(e.search(mx)>=0)throw yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rl(...e.split("."))._internalPath}catch{throw yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce($.INVALID_ARGUMENT,c+t+l)}function D0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(L0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gx extends M0{data(){return super.data()}}function L0(t,e){return typeof e=="string"?Zf(t,e):e instanceof rl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yx{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Yf(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);xe(i0(r));const s=new Eo(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ba{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vx extends M0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(L0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ja extends vx{data(e={}){return super.data(e)}}class Ex{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ba(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ja(this._firestore,this._userDataWriter,r.key,r,new ba(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ja(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ba(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ja(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ba(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:wx(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class Tx extends yx{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function RL(t){t=ri(t,tl);const e=ri(t.firestore,nl),n=Gf(e),r=new Tx(e);return _x(t._query),ix(n,t._query).then(s=>new Ex(e,r,t,s))}function SL(t,e,n){t=ri(t,Qt);const r=ri(t.firestore,nl),s=V0(t.converter,e,n);return F0(r,[O0(k0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Gt.none())])}function F0(t,e){return function(r,s){const i=new Er;return r.asyncQueue.enqueueAndForget(async()=>qN(await rx(r),s,i)),i.promise}(Gf(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=k0(e)}set(e,n,r){this._verifyNotCommitted();const s=Zl(e,this._firestore),i=V0(s.converter,n,r),o=O0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Gt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Zl(e,this._firestore);let o;return o=typeof(n=it(n))=="string"||n instanceof rl?px(this._dataReader,"WriteBatch.update",i._key,n,r,s):dx(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Zl(e,this._firestore);return this._mutations=this._mutations.concat(new Nf(n._key,Gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Zl(t,e){if((t=it(t)).firestore!==e)throw new ce($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t){return Gf(t=ri(t,nl)),new bx(t,e=>F0(t,e))}(function(e,n=!0){(function(s){hi=s})(ci),Qs(new ss("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new nl(new w2(r.getProvider("auth-internal")),new A2(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),yr(sg,"4.6.4",e),yr(sg,"4.6.4","esm2017")})();const Ix=Xt(t=>{const e=Oo(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Lv(n),s=_2(r),i=lx(r);t.provide("auth",s),t.provide("firestore",i)}),Fg=()=>{};let ed={},U0={},j0=null,B0={mark:Fg,measure:Fg};try{typeof window<"u"&&(ed=window),typeof document<"u"&&(U0=document),typeof MutationObserver<"u"&&(j0=MutationObserver),typeof performance<"u"&&(B0=performance)}catch{}const{userAgent:Ug=""}=ed.navigator||{},Pr=ed,Me=U0,jg=j0,Ia=B0;Pr.document;const Bn=!!Me.documentElement&&!!Me.head&&typeof Me.addEventListener=="function"&&typeof Me.createElement=="function",$0=~Ug.indexOf("MSIE")||~Ug.indexOf("Trident/");var Ue="classic",H0="duotone",Ut="sharp",jt="sharp-duotone",Ax=[Ue,H0,Ut,jt],Rx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Bg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Sx=["kit"],Px=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Cx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,kx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ox={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Nx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},xx={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Dx={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Mx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},q0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Lx=["solid","regular","light","thin","duotone","brands"],z0=[1,2,3,4,5,6,7,8,9,10],Vx=z0.concat([11,12,13,14,15,16,17,18,19,20]),Ui={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fx=[...Object.keys(xx),...Lx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ui.GROUP,Ui.SWAP_OPACITY,Ui.PRIMARY,Ui.SECONDARY].concat(z0.map(t=>"".concat(t,"x"))).concat(Vx.map(t=>"w-".concat(t))),Ux={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},jx={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Bx={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},$g={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ln="___FONT_AWESOME___",uh=16,W0="fa",K0="svg-inline--fa",us="data-fa-i2svg",hh="data-fa-pseudo-element",$x="data-fa-pseudo-element-pending",td="data-prefix",nd="data-icon",Hg="fontawesome-i2svg",Hx="async",qx=["HTML","HEAD","STYLE","SCRIPT"],G0=(()=>{try{return!0}catch{return!1}})(),Q0=[Ue,Ut,jt];function qo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ue]}})}const Y0={...q0};Y0[Ue]={...q0[Ue],...Bg.kit,...Bg["kit-duotone"]};const ns=qo(Y0),fh={...Mx};fh[Ue]={...fh[Ue],...$g.kit,...$g["kit-duotone"]};const Io=qo(fh),dh={...Dx};dh[Ue]={...dh[Ue],...Bx.kit};const rs=qo(dh),ph={...Nx};ph[Ue]={...ph[Ue],...jx.kit};const zx=qo(ph),Wx=Px,X0="fa-layers-text",Kx=Cx,Gx={...Rx};qo(Gx);const Qx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],eu=Ui,ii=new Set;Object.keys(Io[Ue]).map(ii.add.bind(ii));Object.keys(Io[Ut]).map(ii.add.bind(ii));Object.keys(Io[jt]).map(ii.add.bind(ii));const Yx=[...Sx,...Fx],eo=Pr.FontAwesomeConfig||{};function Xx(t){var e=Me.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Jx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Me&&typeof Me.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=Jx(Xx(n));s!=null&&(eo[r]=s)});const J0={styleDefault:"solid",familyDefault:"classic",cssPrefix:W0,replacementClass:K0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};eo.familyPrefix&&(eo.cssPrefix=eo.familyPrefix);const oi={...J0,...eo};oi.autoReplaceSvg||(oi.observeMutations=!1);const se={};Object.keys(J0).forEach(t=>{Object.defineProperty(se,t,{enumerable:!0,set:function(e){oi[t]=e,to.forEach(n=>n(se))},get:function(){return oi[t]}})});Object.defineProperty(se,"familyPrefix",{enumerable:!0,set:function(t){oi.cssPrefix=t,to.forEach(e=>e(se))},get:function(){return oi.cssPrefix}});Pr.FontAwesomeConfig=se;const to=[];function Zx(t){return to.push(t),()=>{to.splice(to.indexOf(t),1)}}const Jn=uh,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eD(t){if(!t||!Bn)return;const e=Me.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Me.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Me.head.insertBefore(e,r),t}const tD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ao(){let t=12,e="";for(;t-- >0;)e+=tD[Math.random()*62|0];return e}function pi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function rd(t){return t.classList?pi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Z0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Z0(t[n]),'" '),"").trim()}function ol(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function sd(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function rD(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function sD(t){let{transform:e,width:n=uh,height:r=uh,startCentered:s=!1}=t,i="";return s&&$0?i+="translate(".concat(e.x/Jn-n/2,"em, ").concat(e.y/Jn-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Jn,"em), calc(-50% + ").concat(e.y/Jn,"em)) "):i+="translate(".concat(e.x/Jn,"em, ").concat(e.y/Jn,"em) "),i+="scale(".concat(e.size/Jn*(e.flipX?-1:1),", ").concat(e.size/Jn*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var iD=`:root, :host {
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
}`;function ew(){const t=W0,e=K0,n=se.cssPrefix,r=se.replacementClass;let s=iD;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return s}let qg=!1;function tu(){se.autoAddCss&&!qg&&(eD(ew()),qg=!0)}var oD={mixout(){return{dom:{css:ew,insertCss:tu}}},hooks(){return{beforeDOMElementCreation(){tu()},beforeI2svg(){tu()}}}};const Vn=Pr||{};Vn[Ln]||(Vn[Ln]={});Vn[Ln].styles||(Vn[Ln].styles={});Vn[Ln].hooks||(Vn[Ln].hooks={});Vn[Ln].shims||(Vn[Ln].shims=[]);var fn=Vn[Ln];const tw=[],nw=function(){Me.removeEventListener("DOMContentLoaded",nw),vc=1,tw.map(t=>t())};let vc=!1;Bn&&(vc=(Me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Me.readyState),vc||Me.addEventListener("DOMContentLoaded",nw));function aD(t){Bn&&(vc?setTimeout(t,0):tw.push(t))}function zo(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Z0(t):"<".concat(e," ").concat(nD(n),">").concat(r.map(zo).join(""),"</").concat(e,">")}function zg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var nu=function(e,n,r,s){var i=Object.keys(e),o=i.length,c=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=c(h,e[u],u,e);return h};function cD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function mh(t){const e=cD(t);return e.length===1?e[0].toString(16):null}function lD(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Wg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function gh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Wg(e);typeof fn.hooks.addPack=="function"&&!r?fn.hooks.addPack(t,Wg(e)):fn.styles[t]={...fn.styles[t]||{},...s},t==="fas"&&gh("fa",e)}const{styles:Gr,shims:uD}=fn,hD={[Ue]:Object.values(rs[Ue]),[Ut]:Object.values(rs[Ut]),[jt]:Object.values(rs[jt])};let id=null,rw={},sw={},iw={},ow={},aw={};const fD={[Ue]:Object.keys(ns[Ue]),[Ut]:Object.keys(ns[Ut]),[jt]:Object.keys(ns[jt])};function dD(t){return~Yx.indexOf(t)}function pD(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!dD(s)?s:null}const cw=()=>{const t=r=>nu(Gr,(s,i,o)=>(s[o]=nu(i,r,{}),s),{});rw=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(c=>typeof c=="number").forEach(c=>{r[c.toString(16)]=i}),r)),sw=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(c=>typeof c=="string").forEach(c=>{r[c]=i}),r)),aw=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(c=>{r[c]=i}),r});const e="far"in Gr||se.autoFetchSvg,n=nu(uD,(r,s)=>{const i=s[0];let o=s[1];const c=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});iw=n.names,ow=n.unicodes,id=al(se.styleDefault,{family:se.familyDefault})};Zx(t=>{id=al(t.styleDefault,{family:se.familyDefault})});cw();function od(t,e){return(rw[t]||{})[e]}function mD(t,e){return(sw[t]||{})[e]}function hr(t,e){return(aw[t]||{})[e]}function lw(t){return iw[t]||{prefix:null,iconName:null}}function gD(t){const e=ow[t],n=od("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Cr(){return id}const ad=()=>({prefix:null,iconName:null,rest:[]});function al(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ue}=e,r=ns[n][t],s=Io[n][t]||Io[n][r],i=t in fn.styles?t:null;return s||i||null}const _D={[Ue]:Object.keys(rs[Ue]),[Ut]:Object.keys(rs[Ut]),[jt]:Object.keys(rs[jt])};function cl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ue]:"".concat(se.cssPrefix,"-").concat(Ue),[Ut]:"".concat(se.cssPrefix,"-").concat(Ut),[jt]:"".concat(se.cssPrefix,"-").concat(jt)};let s=null,i=Ue;const o=Ax.filter(l=>l!==H0);o.forEach(l=>{(t.includes(r[l])||t.some(u=>_D[l].includes(u)))&&(i=l)});const c=t.reduce((l,u)=>{const h=pD(se.cssPrefix,u);if(Gr[u]?(u=hD[i].includes(u)?zx[i][u]:u,s=u,l.prefix=u):fD[i].indexOf(u)>-1?(s=u,l.prefix=al(u,{family:i})):h?l.iconName=h:u!==se.replacementClass&&!o.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=s==="fa"?lw(l.iconName):{},m=hr(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Gr.far&&Gr.fas&&!se.autoFetchSvg&&(l.prefix="fas")}return l},ad());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&i===Ut&&(Gr.fass||se.autoFetchSvg)&&(c.prefix="fass",c.iconName=hr(c.prefix,c.iconName)||c.iconName),!c.prefix&&i===jt&&(Gr.fasds||se.autoFetchSvg)&&(c.prefix="fasds",c.iconName=hr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=Cr()||"fas"),c}class yD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},gh(i,s[i]);const o=rs[Ue][i];o&&gh(o,s[i]),cw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:c}=r[s],l=c[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=c)}),e[i][o]=c}),e}}let Kg=[],Os={};const Hs={},vD=Object.keys(Hs);function ED(t,e){let{mixoutsTo:n}=e;return Kg=t,Os={},Object.keys(Hs).forEach(r=>{vD.indexOf(r)===-1&&delete Hs[r]}),Kg.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Os[o]||(Os[o]=[]),Os[o].push(i[o])})}r.provides&&r.provides(Hs)}),n}function _h(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Os[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function hs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Os[t]||[]).forEach(i=>{i.apply(null,n)})}function kr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Hs[t]?Hs[t].apply(null,e):void 0}function yh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Cr();if(e)return e=hr(n,e)||e,zg(uw.definitions,n,e)||zg(fn.styles,n,e)}const uw=new yD,wD=()=>{se.autoReplaceSvg=!1,se.observeMutations=!1,hs("noAuto")},TD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bn?(hs("beforeI2svg",t),kr("pseudoElements2svg",t),kr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;se.autoReplaceSvg===!1&&(se.autoReplaceSvg=!0),se.observeMutations=!0,aD(()=>{ID({autoReplaceSvgRoot:e}),hs("watch",t)})}},bD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:hr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=al(t[0]);return{prefix:n,iconName:hr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(se.cssPrefix,"-"))>-1||t.match(Wx))){const e=cl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Cr(),iconName:hr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Cr();return{prefix:e,iconName:hr(e,t)||t}}}},Bt={noAuto:wD,config:se,dom:TD,parse:bD,library:uw,findIconDefinition:yh,toHtml:zo},ID=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Me}=t;(Object.keys(fn.styles).length>0||se.autoFetchSvg)&&Bn&&se.autoReplaceSvg&&Bt.dom.i2svg({node:e})};function ll(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>zo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Bn)return;const n=Me.createElement("div");return n.innerHTML=t.html,n.children}}),t}function AD(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(sd(o)&&n.found&&!r.found){const{width:c,height:l}=n,u={x:c/l/2,y:.5};s.style=ol({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function RD(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(se.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function cd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:c,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,P=r==="fak",k=[se.replacementClass,s?"".concat(se.cssPrefix,"-").concat(s):""].filter(M=>h.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(h.classes).join(" ");let N={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)}};const x=P&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(N.attributes[us]=""),c&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||Ao())},children:[c]}),delete N.attributes.title);const R={...N,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...x,...h.styles}},{children:b,attributes:O}=n.found&&e.found?kr("generateAbstractMask",R)||{children:[],attributes:{}}:kr("generateAbstractIcon",R)||{children:[],attributes:{}};return R.children=b,R.attributes=O,o?RD(R):AD(R)}function Gg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:c=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};c&&(l[us]="");const u={...o.styles};sd(s)&&(u.transform=sD({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=ol(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function SD(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=ol(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ru}=fn;function vh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(se.cssPrefix,"-").concat(eu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(eu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(eu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const PD={found:!1,width:512,height:512};function CD(t,e){!G0&&!se.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Eh(t,e){let n=e;return e==="fa"&&se.styleDefault!==null&&(e=Cr()),new Promise((r,s)=>{if(n==="fa"){const i=lw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ru[e]&&ru[e][t]){const i=ru[e][t];return r(vh(i))}CD(t,e),r({...PD,icon:se.showMissingIcons&&t?kr("missingIconAbstract")||{}:{}})})}const Qg=()=>{},wh=se.measurePerformance&&Ia&&Ia.mark&&Ia.measure?Ia:{mark:Qg,measure:Qg},ji='FA "6.6.0"',kD=t=>(wh.mark("".concat(ji," ").concat(t," begins")),()=>hw(t)),hw=t=>{wh.mark("".concat(ji," ").concat(t," ends")),wh.measure("".concat(ji," ").concat(t),"".concat(ji," ").concat(t," begins"),"".concat(ji," ").concat(t," ends"))};var ld={begin:kD,end:hw};const Ba=()=>{};function Yg(t){return typeof(t.getAttribute?t.getAttribute(us):null)=="string"}function OD(t){const e=t.getAttribute?t.getAttribute(td):null,n=t.getAttribute?t.getAttribute(nd):null;return e&&n}function ND(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(se.replacementClass)}function xD(){return se.autoReplaceSvg===!0?$a.replace:$a[se.autoReplaceSvg]||$a.replace}function DD(t){return Me.createElementNS("http://www.w3.org/2000/svg",t)}function MD(t){return Me.createElement(t)}function fw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?DD:MD}=e;if(typeof t=="string")return Me.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(fw(i,{ceFn:n}))}),r}function LD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const $a={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(fw(n),e)}),e.getAttribute(us)===null&&se.keepOriginalSource){let n=Me.createComment(LD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~rd(e).indexOf(se.replacementClass))return $a.replace(t);const r=new RegExp("".concat(se.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,c)=>(c===se.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>zo(i)).join(`
`);e.setAttribute(us,""),e.innerHTML=s}};function Xg(t){t()}function dw(t,e){const n=typeof e=="function"?e:Ba;if(t.length===0)n();else{let r=Xg;se.mutateApproach===Hx&&(r=Pr.requestAnimationFrame||Xg),r(()=>{const s=xD(),i=ld.begin("mutate");t.map(s),i(),n()})}}let ud=!1;function pw(){ud=!0}function Th(){ud=!1}let Ec=null;function Jg(t){if(!jg||!se.observeMutations)return;const{treeCallback:e=Ba,nodeCallback:n=Ba,pseudoElementsCallback:r=Ba,observeMutationsRoot:s=Me}=t;Ec=new jg(i=>{if(ud)return;const o=Cr();pi(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!Yg(c.addedNodes[0])&&(se.searchPseudoElements&&r(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&se.searchPseudoElements&&r(c.target.parentNode),c.type==="attributes"&&Yg(c.target)&&~Qx.indexOf(c.attributeName))if(c.attributeName==="class"&&OD(c.target)){const{prefix:l,iconName:u}=cl(rd(c.target));c.target.setAttribute(td,l||o),u&&c.target.setAttribute(nd,u)}else ND(c.target)&&n(c.target)})}),Bn&&Ec.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function VD(){Ec&&Ec.disconnect()}function FD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function UD(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=cl(rd(t));return s.prefix||(s.prefix=Cr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=mD(s.prefix,t.innerText)||od(s.prefix,mh(t.innerText))),!s.iconName&&se.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function jD(t){const e=pi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return se.autoA11y&&(n?e["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(r||Ao()):(e["aria-hidden"]="true",e.focusable="false")),e}function BD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=UD(t),i=jD(t),o=_h("parseNodeAttributes",{},t);let c=e.styleParser?FD(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:i},...o}}const{styles:$D}=fn;function mw(t){const e=se.autoReplaceSvg==="nest"?Zg(t,{styleParser:!1}):Zg(t);return~e.extra.classes.indexOf(X0)?kr("generateLayersText",t,e):kr("generateSvgReplacementMutation",t,e)}let vn=new Set;Q0.map(t=>{vn.add("fa-".concat(t))});Object.keys(ns[Ue]).map(vn.add.bind(vn));Object.keys(ns[Ut]).map(vn.add.bind(vn));Object.keys(ns[jt]).map(vn.add.bind(vn));vn=[...vn];function e_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bn)return Promise.resolve();const n=Me.documentElement.classList,r=h=>n.add("".concat(Hg,"-").concat(h)),s=h=>n.remove("".concat(Hg,"-").concat(h)),i=se.autoFetchSvg?vn:Q0.map(h=>"fa-".concat(h)).concat(Object.keys($D));i.includes("fa")||i.push("fa");const o=[".".concat(X0,":not([").concat(us,"])")].concat(i.map(h=>".".concat(h,":not([").concat(us,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=pi(t.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),s("complete");else return Promise.resolve();const l=ld.begin("onTree"),u=c.reduce((h,d)=>{try{const m=mw(d);m&&h.push(m)}catch(m){G0||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(m=>{dw(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(m=>{l(),d(m)})})}function HD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mw(t).then(n=>{n&&dw([n],e)})}function qD(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:yh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:yh(s||{})),t(r,{...n,mask:s})}}const zD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:c=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return ll({type:"icon",...t},()=>(hs("beforeDOMElementCreation",{iconDefinition:t,params:e}),se.autoA11y&&(o?u["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(c||Ao()):(u["aria-hidden"]="true",u.focusable="false")),cd({icons:{main:vh(g),mask:s?vh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:{...hn,...n},symbol:r,title:o,maskId:i,titleId:c,extra:{attributes:u,styles:h,classes:l}})))};var WD={mixout(){return{icon:qD(zD)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=e_,t.nodeCallback=HD,t}}},provides(t){t.i2svg=function(e){const{node:n=Me,callback:r=()=>{}}=e;return e_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:c,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((m,g)=>{Promise.all([Eh(r,o),u.iconName?Eh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[k,N]=P;m([e,cd({icons:{main:k,mask:N},prefix:o,iconName:r,transform:c,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const c=ol(o);c.length>0&&(r.style=c);let l;return sd(i)&&(l=kr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},KD={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ll({type:"layer"},()=>{hs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(se.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},GD={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return ll({type:"counter",content:t},()=>(hs("beforeDOMElementCreation",{content:t,params:e}),SD({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(se.cssPrefix,"-layers-counter"),...r]}})))}}}},QD={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return ll({type:"text",content:t},()=>(hs("beforeDOMElementCreation",{content:t,params:e}),Gg({content:t,transform:{...hn,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(se.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,c=null;if($0){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,c=u.height/l}return se.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Gg({content:e.innerHTML,width:o,height:c,transform:s,title:r,extra:i,watchable:!0})])}}};const YD=new RegExp('"',"ug"),t_=[1105920,1112319],n_={FontAwesome:{normal:"fas",400:"fas"},...Ox,...kx,...Ux},bh=Object.keys(n_).reduce((t,e)=>(t[e.toLowerCase()]=n_[e],t),{}),XD=Object.keys(bh).reduce((t,e)=>{const n=bh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function JD(t){const e=t.replace(YD,""),n=lD(e,0),r=n>=t_[0]&&n<=t_[1],s=e.length===2?e[0]===e[1]:!1;return{value:mh(s?e[0]:e),isSecondary:r||s}}function ZD(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(bh[n]||{})[s]||XD[n]}function r_(t,e){const n="".concat($x).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=pi(t.children).filter(m=>m.getAttribute(hh)===e)[0],c=Pr.getComputedStyle(t,e),l=c.getPropertyValue("font-family"),u=l.match(Kx),h=c.getPropertyValue("font-weight"),d=c.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=c.getPropertyValue("content");let g=ZD(l,h);const{value:P,isSecondary:k}=JD(m),N=u[0].startsWith("FontAwesome");let x=od(g,P),R=x;if(N){const b=gD(P);b.iconName&&b.prefix&&(x=b.iconName,g=b.prefix)}if(x&&!k&&(!o||o.getAttribute(td)!==g||o.getAttribute(nd)!==R)){t.setAttribute(n,R),o&&t.removeChild(o);const b=BD(),{extra:O}=b;O.attributes[hh]=e,Eh(x,g).then(M=>{const L=cd({...b,icons:{main:M,mask:ad()},prefix:g,iconName:R,extra:O,watchable:!0}),w=Me.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=L.map(y=>zo(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function eM(t){return Promise.all([r_(t,"::before"),r_(t,"::after")])}function tM(t){return t.parentNode!==document.head&&!~qx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(hh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function s_(t){if(Bn)return new Promise((e,n)=>{const r=pi(t.querySelectorAll("*")).filter(tM).map(eM),s=ld.begin("searchPseudoElements");pw(),Promise.all(r).then(()=>{s(),Th(),e()}).catch(()=>{s(),Th(),n()})})}var nM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=s_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Me}=e;se.searchPseudoElements&&s_(n)}}};let i_=!1;var rM={mixout(){return{dom:{unwatch(){pw(),i_=!0}}}},hooks(){return{bootstrap(){Jg(_h("mutationObserverCallbacks",{}))},noAuto(){VD()},watch(t){const{observeMutationsRoot:e}=t;i_?Th():Jg(_h("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const o_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var sM={mixout(){return{parse:{transform:t=>o_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=o_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:h,path:d};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const su={x:0,y:0,width:"100%",height:"100%"};function a_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function iM(t){return t.tag==="g"?t.children:[t]}var oM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?cl(n.split(" ").map(s=>s.trim())):ad();return r.prefix||(r.prefix=Cr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:c}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,m=rD({transform:c,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...su,fill:"white"}},P=u.children?{children:u.children.map(a_)}:{},k={tag:"g",attributes:{...m.inner},children:[a_({tag:u.tag,attributes:{...u.attributes,...m.path},...P})]},N={tag:"g",attributes:{...m.outer},children:[k]},x="mask-".concat(o||Ao()),R="clip-".concat(o||Ao()),b={tag:"mask",attributes:{...su,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,N]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:iM(d)},b]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(x,")"),...su}}),{children:n,attributes:r}}}},aM={provides(t){let e=!1;Pr.matchMedia&&(e=Pr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},cM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},lM=[oD,WD,KD,GD,QD,nM,rM,sM,oM,aM,cM];ED(lM,{mixoutsTo:Bt});Bt.noAuto;const uM=Bt.config,hM=Bt.library;Bt.dom;const Ih=Bt.parse;Bt.findIconDefinition;Bt.toHtml;const fM=Bt.icon;Bt.layer;Bt.text;Bt.counter;function c_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function An(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?c_(Object(n),!0).forEach(function(r){Pt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pM(t){var e=dM(t,"string");return typeof e=="symbol"?e:e+""}function wc(t){"@babel/helpers - typeof";return wc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wc(t)}function Pt(t,e,n){return e=pM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mM(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function gM(t,e){if(t==null)return{};var n=mM(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var _M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gw={exports:{}};(function(t){(function(e){var n=function(x,R,b){if(!u(R)||d(R)||m(R)||g(R)||l(R))return R;var O,M=0,L=0;if(h(R))for(O=[],L=R.length;M<L;M++)O.push(n(x,R[M],b));else{O={};for(var w in R)Object.prototype.hasOwnProperty.call(R,w)&&(O[x(w,b)]=n(x,R[w],b))}return O},r=function(x,R){R=R||{};var b=R.separator||"_",O=R.split||/(?=[A-Z])/;return x.split(O).join(b)},s=function(x){return P(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(R,b){return b?b.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var R=s(x);return R.substr(0,1).toUpperCase()+R.substr(1)},o=function(x,R){return r(x,R).toLowerCase()},c=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},h=function(x){return c.call(x)=="[object Array]"},d=function(x){return c.call(x)=="[object Date]"},m=function(x){return c.call(x)=="[object RegExp]"},g=function(x){return c.call(x)=="[object Boolean]"},P=function(x){return x=x-0,x===x},k=function(x,R){var b=R&&"process"in R?R.process:R;return typeof b!="function"?x:function(O,M){return b(O,x,M)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,R){return n(k(s,R),x)},decamelizeKeys:function(x,R){return n(k(o,R),x,R)},pascalizeKeys:function(x,R){return n(k(i,R),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(_M)})(gw);var yM=gw.exports,vM=["class","style"];function EM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=yM.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function wM(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function _w(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return _w(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=wM(h);break;case"style":l.style=EM(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,c=gM(n,vM);return At(t.tag,An(An(An({},e),{},{class:s.class,style:An(An({},s.style),o)},s.attrs),c),r)}var yw=!1;try{yw=!0}catch{}function TM(){if(!yw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function iu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Pt({},t,e):{}}function bM(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Pt(Pt(Pt(Pt(Pt(Pt(Pt(Pt(Pt(Pt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Pt(Pt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function l_(t){if(t&&wc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ih.icon)return Ih.icon(t);if(t===null)return null;if(wc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var IM=Fn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Xe(function(){return l_(e.icon)}),i=Xe(function(){return iu("classes",bM(e))}),o=Xe(function(){return iu("transform",typeof e.transform=="string"?Ih.transform(e.transform):e.transform)}),c=Xe(function(){return iu("mask",l_(e.mask))}),l=Xe(function(){return fM(s.value,An(An(An(An({},i.value),o.value),c.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});mr(l,function(h){if(!h)return TM("Could not find one or more icon(s)",s.value,c.value)},{immediate:!0});var u=Xe(function(){return l.value?_w(l.value.abstract[0],{},r):null});return function(){return u.value}}});const AM={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},RM={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},SM=RM,PM={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},CM={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},kM={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};uM.autoAddCss=!1;hM.add(AM,CM,SM,kM,PM);const OM=Xt(t=>{t.vueApp.component("font-awesome-icon",IM)}),NM=!1;/*!
 * pinia v2.2.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let vw;const ul=t=>vw=t,Ew=Symbol();function Ah(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var no;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(no||(no={}));function xM(){const t=kh(!0),e=t.run(()=>rn({}));let n=[],r=[];const s=Fh({install(i){ul(s),s._a=i,i.provide(Ew,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!NM?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ww=()=>{};function u_(t,e,n,r=ww){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Oh()&&aT(s),s}function Is(t,...e){t.slice().forEach(n=>{n(...e)})}const DM=t=>t(),h_=Symbol(),ou=Symbol();function Rh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ah(s)&&Ah(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!dr(r)?t[n]=Rh(s,r):t[n]=r}return t}const MM=Symbol();function LM(t){return!Ah(t)||!t.hasOwnProperty(MM)}const{assign:Zn}=Object;function VM(t){return!!(Ye(t)&&t.effect)}function FM(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const h=OT(n.state.value[t]);return Zn(h,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Fh(Xe(()=>{ul(n);const g=n._s.get(t);return o[m].call(g,g)})),d),{}))}return l=Tw(t,u,e,n,r,!0),l}function Tw(t,e,n={},r,s,i){let o;const c=Zn({actions:{}},n),l={deep:!0};let u,h,d=[],m=[],g;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),rn({});let k;function N(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:no.patchFunction,storeId:t,events:g}):(Rh(r.state.value[t],y),_={type:no.patchObject,payload:y,storeId:t,events:g});const E=k=Symbol();Dr().then(()=>{k===E&&(u=!0)}),h=!0,Is(d,_,r.state.value[t])}const x=i?function(){const{state:_}=n,E=_?_():{};this.$patch(S=>{Zn(S,E)})}:ww;function R(){o.stop(),d=[],m=[],r._s.delete(t)}const b=(y,_="")=>{if(h_ in y)return y[ou]=_,y;const E=function(){ul(r);const S=Array.from(arguments),A=[],T=[];function me(ne){A.push(ne)}function ye(ne){T.push(ne)}Is(m,{args:S,name:E[ou],store:M,after:me,onError:ye});let J;try{J=y.apply(this&&this.$id===t?this:M,S)}catch(ne){throw Is(T,ne),ne}return J instanceof Promise?J.then(ne=>(Is(A,ne),ne)).catch(ne=>(Is(T,ne),Promise.reject(ne))):(Is(A,J),J)};return E[h_]=!0,E[ou]=_,E},O={_p:r,$id:t,$onAction:u_.bind(null,m),$patch:N,$reset:x,$subscribe(y,_={}){const E=u_(d,y,_.detached,()=>S()),S=o.run(()=>mr(()=>r.state.value[t],A=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:no.direct,events:g},A)},Zn({},l,_)));return E},$dispose:R},M=xr(O);r._s.set(t,M);const w=(r._a&&r._a.runWithContext||DM)(()=>r._e.run(()=>(o=kh()).run(()=>e({action:b}))));for(const y in w){const _=w[y];if(Ye(_)&&!VM(_)||dr(_))i||(P&&LM(_)&&(Ye(_)?_.value=P[y]:Rh(_,P[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const E=b(_,y);w[y]=E,c.actions[y]=_}}return Zn(M,w),Zn(Ae(M),w),Object.defineProperty(M,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Zn(_,y)})}}),r._p.forEach(y=>{Zn(M,o.run(()=>y({store:M,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(M.$state,P),u=!0,h=!0,M}function CL(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const u=zh();return c=c||(u?yt(Ew,null):null),c&&ul(c),c=vw,c._s.has(r)||(i?Tw(r,e,s,c):FM(r,s,c)),c._s.get(r)}return o.$id=r,o}function kL(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function OL(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const UM=Xt(t=>{const e=xM();t.vueApp.use(e)}),jM=[eR,nR,wS,TS,bS,IS,RS,SS,PS,Ix,OM,UM],BM=Fn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return Zr(No,Rn(r)),()=>At(t.vnode,{ref:t.vnodeRef})}}),$M=Fn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ke(),i=rn(),o=yt(No,null);let c;r({pageRef:i});const l=yt(rv,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Yt().beforeEach(d)}return t.pageKey&&mr(()=>t.pageKey,(d,m)=>{d!==m&&s.callHook("page:loading:start")}),()=>At(Rv,{name:t.name,route:t.route,...e},{default:d=>{const m=qM(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(m&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const P=Bu(d,t.pageKey);!s.isHydrating&&!zM(o,d.route,d.Component)&&c===P&&s.callHook("page:loading:end"),c=P;const k=!!(t.transition??d.route.meta.pageTransition??ku),N=k&&HM([t.transition,d.route.meta.pageTransition,ku,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),x=t.keepalive??d.route.meta.keepalive??BA;return u=Sv(xc,k&&N,cS(x,At(Qh,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Dr(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const R=At(BM,{key:P||void 0,vnode:n.default?At(It,void 0,n.default(d)):d.Component,route:d.route,renderKey:P||void 0,trackRootNodes:k,vnodeRef:i});return x&&(R.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),R}}))).default(),u}})}});function HM(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?hf(n.onAfterLeave):void 0}));return tv(...e)}function qM(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,c,l;return((o=s.components)==null?void 0:o.default)!==((l=(c=t.matched[i])==null?void 0:c.components)==null?void 0:l.default)})||n&&Bu({route:e,Component:n})!==Bu({route:t,Component:n})}function zM(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const WM=Fn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await lr[t.name]().then(r=>r.default||r);return()=>At(n,t.layoutProps,e.slots)}}),KM=Fn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Ke(),r=yt(No),s=r===sf()?oS():r,i=Xe(()=>{let l=Ne(t.name)??s.meta.layout??"default";return l&&!(l in lr)&&t.fallback&&(l=Ne(t.fallback)),l}),o=rn();e.expose({layoutRef:o});const c=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",c);Yt().beforeEach(l)}return()=>{const l=i.value&&i.value in lr,u=s.meta.layoutTransition??jA;return Sv(xc,l&&u,{default:()=>At(Qh,{suspensible:!0,onResolve:()=>{Dr(c)}},{default:()=>At(GM,{layoutProps:Cy(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),GM=Fn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Zr(rv,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in lr)?(s=(r=e.slots).default)==null?void 0:s.call(r):At(WM,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),QM=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},YM={};function XM(t,e){const n=$M,r=KM;return tn(),In(r,null,{default:Bh(()=>[$e(n)]),_:1})}const JM=QM(YM,[["render",XM]]),ZM={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),c=void 0,h=s?fp(()=>We(()=>import("./DVWDi-n9.js"),__vite__mapDeps([33,1,34,35]),import.meta.url).then(d=>d.default||d)):fp(()=>We(()=>import("./BoLvq6K5.js"),__vite__mapDeps([36,34,37]),import.meta.url).then(d=>d.default||d));return(d,m)=>(tn(),In(Ne(h),sT(Sy({statusCode:Ne(r),statusMessage:Ne(i),description:Ne(o),stack:Ne(c)})),null,16))}},eL={key:0},f_={__name:"nuxt-root",setup(t){const e=()=>null,n=Ke(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Yt().beforeEach(l)}const s=!1;Zr(No,sf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Dc(),o=!1;Z_((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a1(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Cs(l)),!1});const c=!1;return(l,u)=>(tn(),In(Qh,{onResolve:Ne(r)},{default:Bh(()=>[Ne(o)?(tn(),Lb("div",eL)):Ne(i)?(tn(),In(Ne(ZM),{key:1,error:Ne(i)},null,8,["error"])):Ne(c)?(tn(),In(Ne(e),{key:2,context:Ne(c)},null,8,["context"])):Ne(s)?(tn(),In(JT(Ne(s)),{key:3})):(tn(),In(Ne(JM),{key:4}))]),_:1},8,["onResolve"]))}};let d_;{let t;d_=async function(){var o,c;if(t)return t;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((c=document.getElementById("__NUXT_DATA__"))==null?void 0:c.dataset.ssr)==="true")?DI(f_):xI(f_),s=zA({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Mc(l)}r.config.errorHandler=i;try{await GA(s,jM)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(HA),await s.hooks.callHook("app:mounted",r),await Dr()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=d_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{RL as $,KT as A,Ye as B,xr as C,Xe as D,dr as E,It as F,br as G,yt as H,Zr as I,Ne as J,Dr as K,sL as L,cL as M,In as N,oL as O,Ac as P,Ic as Q,sT as R,Sy as S,xc as T,pL as U,mL as V,$M as W,CL as X,Ke as Y,IL as Z,QM as _,Ry as a,SL as a0,AL as a1,PL as a2,Yt as a3,Fn as a4,$h as a5,ff as a6,Rm as a7,i1 as a8,_L as a9,At as aa,XI as ab,dL as ac,ds as ad,tf as ae,Oo as af,Su as ag,ef as ah,yL as ai,EL as aj,vL as ak,$e as b,Lb as c,Py as d,nL as e,aL as f,mr as g,Hh as h,gL as i,zT as j,qT as k,Mu as l,Xh as m,kL as n,tn as o,tL as p,OL as q,rn as r,rL as s,iT as t,iL as u,hL as v,Bh as w,lL as x,uL as y,fL as z};
