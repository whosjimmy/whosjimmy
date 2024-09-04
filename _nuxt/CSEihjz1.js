const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B-TC8uOw.js","./EzZ34dbq.js","./Ddbx9Co7.js","./I7uxATLv.js","./index.CwtG1KP7.css","./BszGO-75.js","./NFWHnx46.js","./OZNxI520.js","./Ca6lpOo8.js","./Gallery.B_nrwMtm.css","./Film.KBkYyf_R.css","./Film.RcEDhm2u.css","./CoGgHlgq.js","./Bio.BcnN8BQQ.css","./-po-wLuK.js","./Contact.2xyrHKtO.css","./BiJ6d7az.js","./Clocks.CkpqjaRE.css","./DEYtQEF4.js","./index.BANqCETR.css","./BKcfdV88.js","./D47Vzfur.js","./index.Dbrk1KBP.css","./QlzXYazu.js","./Celebrities.CcuunyNG.css","./Ds9k2XPf.js","./Clocks.vUUo-Xqj.css","./DqPds12i.js","./index.D3FkaTh1.css","./DsvLcpKG.js","./BWuMPQi1.js","./Bnt38UDO.js","./Dt2-WT0x.js","./default.BE-W7nGe.css"])))=>i.map(i=>d[i]);
var PT=Object.defineProperty;var CT=(t,e,n)=>e in t?PT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ji=(t,e,n)=>CT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tf(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ne={},ni=[],Sn=()=>{},kT=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),If=t=>t.startsWith("onUpdate:"),ct=Object.assign,Af=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},OT=Object.prototype.hasOwnProperty,Oe=(t,e)=>OT.call(t,e),ce=Array.isArray,ri=t=>xi(t)==="[object Map]",Oi=t=>xi(t)==="[object Set]",em=t=>xi(t)==="[object Date]",xT=t=>xi(t)==="[object RegExp]",de=t=>typeof t=="function",ze=t=>typeof t=="string",Nn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Py=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),Cy=Object.prototype.toString,xi=t=>Cy.call(t),NT=t=>xi(t).slice(8,-1),ky=t=>xi(t)==="[object Object]",Rf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Tf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},DT=/-(\w)/g,_n=al(t=>t.replace(DT,(e,n)=>n?n.toUpperCase():"")),LT=/\B([A-Z])/g,Ns=al(t=>t.replace(LT,"-$1").toLowerCase()),cl=al(t=>t.charAt(0).toUpperCase()+t.slice(1)),mu=al(t=>t?`on${cl(t)}`:""),qr=(t,e)=>!Object.is(t,e),ii=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oy=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xy=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let tm;const Ny=()=>tm||(tm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?UT(r):ll(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Le(t))return t}const MT=/;(?![^(]*\))/g,VT=/:([^]+)/,FT=/\/\*[^]*?\*\//g;function UT(t){const e={};return t.replace(FT,"").split(MT).forEach(n=>{if(n){const r=n.split(VT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sa(t){let e="";if(ze(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=sa(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function $F(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=sa(e)),n&&(t.style=ll(n)),t}const BT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jT=Tf(BT);function Dy(t){return!!t||t===""}function $T(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ia(t[r],e[r]);return n}function ia(t,e){if(t===e)return!0;let n=em(t),r=em(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Nn(t),r=Nn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?$T(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ia(t[o],e[o]))return!1}}return String(t)===String(e)}function Sf(t,e){return t.findIndex(n=>ia(n,e))}const Ly=t=>!!(t&&t.__v_isRef===!0),Pf=t=>ze(t)?t:t==null?"":ce(t)||Le(t)&&(t.toString===Cy||!de(t.toString))?Ly(t)?Pf(t.value):JSON.stringify(t,My,2):String(t),My=(t,e)=>Ly(e)?My(t,e.value):ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gu(r,i)+" =>"]=s,n),{})}:Oi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gu(n))}:Nn(e)?gu(e):Le(e)&&!ce(e)&&!ky(e)?String(e):e,gu=(t,e="")=>{var n;return Nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class Vy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cf(t){return new Vy(t)}function oa(){return Ft}function Ac(t,e=!1){Ft&&Ft.cleanups.push(t)}let Ue;const _u=new WeakSet;class Fy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_u.has(this)&&(_u.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=mo,mo=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nm(this),By(this);const e=Ue,n=pn;Ue=this,pn=!0;try{return this.fn()}finally{jy(this),Ue=e,pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xf(e);this.deps=this.depsTail=void 0,nm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_u.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sh(this)&&this.run()}get dirty(){return sh(this)}}let Uy=0,mo;function kf(){Uy++}function Of(){if(--Uy>0)return;let t;for(;mo;){let e=mo;for(mo=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function By(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jy(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),xf(r),HT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function sh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&$y(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!t._dirty}function $y(t){if(t.flags&2)return!1;if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xo))return;t.globalVersion=xo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!sh(t)){t.flags&=-3;return}const n=Ue,r=pn;Ue=t,pn=!0;try{By(t);const s=t.fn();(e.version===0||qr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,pn=r,jy(t),t.flags&=-3}}function xf(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)xf(s)}}function HT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pn=!0;const Hy=[];function Zr(){Hy.push(pn),pn=!1}function es(){const t=Hy.pop();pn=t===void 0?!0:t}function nm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let xo=0;class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!Ue||!pn)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink={dep:this,sub:Ue,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Ue.flags&4&&qy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,xo++,this.notify(e)}notify(e){kf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{Of()}}}function qy(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)qy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Rc=new WeakMap,_s=Symbol(""),ih=Symbol(""),No=Symbol("");function xt(t,e,n){if(pn&&Ue){let r=Rc.get(t);r||Rc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new ul),s.track()}}function Zn(t,e,n,r,s,i){const o=Rc.get(t);if(!o){xo++;return}let a=[];if(e==="clear")a=[...o.values()];else{const l=ce(t),u=l&&Rf(n);if(l&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===No||!Nn(p)&&p>=h)&&a.push(f)})}else{const h=f=>f&&a.push(f);switch(n!==void 0&&h(o.get(n)),u&&h(o.get(No)),e){case"add":l?u&&h(o.get("length")):(h(o.get(_s)),ri(t)&&h(o.get(ih)));break;case"delete":l||(h(o.get(_s)),ri(t)&&h(o.get(ih)));break;case"set":ri(t)&&h(o.get(_s));break}}}kf();for(const l of a)l.trigger();Of()}function qT(t,e){var n;return(n=Rc.get(t))==null?void 0:n.get(e)}function zs(t){const e=Se(t);return e===t?e:(xt(e,"iterate",No),mn(t)?e:e.map(Pt))}function hl(t){return xt(t=Se(t),"iterate",No),t}const zT={__proto__:null,[Symbol.iterator](){return yu(this,Symbol.iterator,Pt)},concat(...t){return zs(this).concat(...t.map(e=>ce(e)?zs(e):e))},entries(){return yu(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return $n(this,"find",t,e,Pt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return vu(this,"includes",t)},indexOf(...t){return vu(this,"indexOf",t)},join(t){return zs(this).join(t)},lastIndexOf(...t){return vu(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return Zi(this,"pop")},push(...t){return Zi(this,"push",t)},reduce(t,...e){return rm(this,"reduce",t,e)},reduceRight(t,...e){return rm(this,"reduceRight",t,e)},shift(){return Zi(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return Zi(this,"splice",t)},toReversed(){return zs(this).toReversed()},toSorted(t){return zs(this).toSorted(t)},toSpliced(...t){return zs(this).toSpliced(...t)},unshift(...t){return Zi(this,"unshift",t)},values(){return yu(this,"values",Pt)}};function yu(t,e,n){const r=hl(t),s=r[e]();return r!==t&&!mn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const WT=Array.prototype;function $n(t,e,n,r,s,i){const o=hl(t),a=o!==t&&!mn(t),l=o[e];if(l!==WT[e]){const f=l.apply(t,i);return a?Pt(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,Pt(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function rm(t,e,n,r){const s=hl(t);let i=n;return s!==t&&(mn(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Pt(a),l,t)}),s[e](i,...r)}function vu(t,e,n){const r=Se(t);xt(r,"iterate",No);const s=r[e](...n);return(s===-1||s===!1)&&Mf(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Zi(t,e,n=[]){Zr(),kf();const r=Se(t)[e].apply(t,n);return Of(),es(),r}const KT=Tf("__proto__,__v_isRef,__isVue"),zy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nn));function GT(t){Nn(t)||(t=String(t));const e=Se(this);return xt(e,"has",t),e.hasOwnProperty(t)}class Wy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?aI:Yy:i?Qy:Gy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=zT[n]))return l;if(n==="hasOwnProperty")return GT}const a=Reflect.get(e,n,Xe(e)?e:r);return(Nn(n)?zy.has(n):KT(n))||(s||xt(e,"get",n),i)?a:Xe(a)?o&&Rf(n)?a:a.value:Le(a)?s?Xy(a):lr(a):a}}class Ky extends Wy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=zr(i);if(!mn(r)&&!zr(r)&&(i=Se(i),r=Se(r)),!ce(e)&&Xe(i)&&!Xe(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Rf(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,r,Xe(e)?e:s);return e===Se(s)&&(o?qr(r,i)&&Zn(e,"set",n,r):Zn(e,"add",n,r)),a}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Zn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nn(n)||!zy.has(n))&&xt(e,"has",n),r}ownKeys(e){return xt(e,"iterate",ce(e)?"length":_s),Reflect.ownKeys(e)}}class QT extends Wy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const YT=new Ky,XT=new QT,JT=new Ky(!0);const Nf=t=>t,fl=t=>Reflect.getPrototypeOf(t);function Ua(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(qr(e,i)&&xt(s,"get",e),xt(s,"get",i));const{has:o}=fl(s),a=r?Nf:n?Ff:Pt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ba(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(qr(t,s)&&xt(r,"has",t),xt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ja(t,e=!1){return t=t.__v_raw,!e&&xt(Se(t),"iterate",_s),Reflect.get(t,"size",t)}function sm(t,e=!1){!e&&!mn(t)&&!zr(t)&&(t=Se(t));const n=Se(this);return fl(n).has.call(n,t)||(n.add(t),Zn(n,"add",t,t)),this}function im(t,e,n=!1){!n&&!mn(e)&&!zr(e)&&(e=Se(e));const r=Se(this),{has:s,get:i}=fl(r);let o=s.call(r,t);o||(t=Se(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?qr(e,a)&&Zn(r,"set",t,e):Zn(r,"add",t,e),this}function om(t){const e=Se(this),{has:n,get:r}=fl(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Zn(e,"delete",t,void 0),i}function am(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&Zn(t,"clear",void 0,void 0),n}function $a(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Se(o),l=e?Nf:t?Ff:Pt;return!t&&xt(a,"iterate",_s),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function Ha(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=ri(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Nf:e?Ff:Pt;return!e&&xt(i,"iterate",l?ih:_s),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function yr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ZT(){const t={get(i){return Ua(this,i)},get size(){return ja(this)},has:Ba,add:sm,set:im,delete:om,clear:am,forEach:$a(!1,!1)},e={get(i){return Ua(this,i,!1,!0)},get size(){return ja(this)},has:Ba,add(i){return sm.call(this,i,!0)},set(i,o){return im.call(this,i,o,!0)},delete:om,clear:am,forEach:$a(!1,!0)},n={get(i){return Ua(this,i,!0)},get size(){return ja(this,!0)},has(i){return Ba.call(this,i,!0)},add:yr("add"),set:yr("set"),delete:yr("delete"),clear:yr("clear"),forEach:$a(!0,!1)},r={get(i){return Ua(this,i,!0,!0)},get size(){return ja(this,!0)},has(i){return Ba.call(this,i,!0)},add:yr("add"),set:yr("set"),delete:yr("delete"),clear:yr("clear"),forEach:$a(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ha(i,!1,!1),n[i]=Ha(i,!0,!1),e[i]=Ha(i,!1,!0),r[i]=Ha(i,!0,!0)}),[t,n,e,r]}const[eI,tI,nI,rI]=ZT();function Df(t,e){const n=e?t?rI:nI:t?tI:eI;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const sI={get:Df(!1,!1)},iI={get:Df(!1,!0)},oI={get:Df(!0,!1)};const Gy=new WeakMap,Qy=new WeakMap,Yy=new WeakMap,aI=new WeakMap;function cI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lI(t){return t.__v_skip||!Object.isExtensible(t)?0:cI(NT(t))}function lr(t){return zr(t)?t:Lf(t,!1,YT,sI,Gy)}function Gn(t){return Lf(t,!1,JT,iI,Qy)}function Xy(t){return Lf(t,!0,XT,oI,Yy)}function Lf(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=lI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function er(t){return zr(t)?er(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function mn(t){return!!(t&&t.__v_isShallow)}function Mf(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Vf(t){return Object.isExtensible(t)&&Oy(t,"__v_skip",!0),t}const Pt=t=>Le(t)?lr(t):t,Ff=t=>Le(t)?Xy(t):t;function Xe(t){return t?t.__v_isRef===!0:!1}function zt(t){return Jy(t,!1)}function Do(t){return Jy(t,!0)}function Jy(t,e){return Xe(t)?t:new uI(t,e)}class uI{constructor(e,n){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||mn(e)||zr(e);e=r?e:Se(e),qr(e,n)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function tt(t){return Xe(t)?t.value:t}const hI={get:(t,e,n)=>tt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zy(t){return er(t)?t:new Proxy(t,hI)}class fI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ul,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function dI(t){return new fI(t)}function pI(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=ev(t,n);return e}class mI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qT(Se(this._object),this._key)}}class gI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function _I(t,e,n){return Xe(t)?t:de(t)?new gI(t):Le(t)&&arguments.length>1?ev(t,e,n):zt(t)}function ev(t,e,n){const r=t[e];return Xe(r)?r:new mI(t,e,n)}class yI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xo-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){Ue!==this&&(this.flags|=16,this.dep.notify())}get value(){const e=this.dep.track();return $y(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vI(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new yI(r,s,n)}const qa={},Sc=new WeakMap;let hs;function EI(t,e=!1,n=hs){if(n){let r=Sc.get(n);r||Sc.set(n,r=[]),r.push(t)}}function wI(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=A=>s?A:mn(A)||s===!1||s===0?zn(A,1):zn(A);let h,f,p,g,R=!1,O=!1;if(Xe(t)?(f=()=>t.value,R=mn(t)):er(t)?(f=()=>u(t),R=!0):ce(t)?(O=!0,R=t.some(A=>er(A)||mn(A)),f=()=>t.map(A=>{if(Xe(A))return A.value;if(er(A))return u(A);if(de(A))return l?l(A,2):A()})):de(t)?e?f=l?()=>l(t,2):t:f=()=>{if(p){Zr();try{p()}finally{es()}}const A=hs;hs=h;try{return l?l(t,3,[g]):t(g)}finally{hs=A}}:f=Sn,e&&s){const A=f,D=s===!0?1/0:s;f=()=>zn(A(),D)}const x=oa(),N=()=>{h.stop(),x&&Af(x.effects,h)};if(i)if(e){const A=e;e=(...D)=>{A(...D),N()}}else{const A=f;f=()=>{A(),N()}}let S=O?new Array(t.length).fill(qa):qa;const E=A=>{if(!(!(h.flags&1)||!h.dirty&&!A))if(e){const D=h.run();if(s||R||(O?D.some((V,b)=>qr(V,S[b])):qr(D,S))){p&&p();const V=hs;hs=h;try{const b=[D,S===qa?void 0:O&&S[0]===qa?[]:S,g];l?l(e,3,b):e(...b),S=D}finally{hs=V}}}else h.run()};return a&&a(E),h=new Fy(f),h.scheduler=o?()=>o(E,!1):E,g=A=>EI(A,!1,h),p=h.onStop=()=>{const A=Sc.get(h);if(A){if(l)l(A,4);else for(const D of A)D();Sc.delete(h)}},e?r?E(!0):S=h.run():o?o(E.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function zn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Xe(t))zn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)zn(t[r],e,n);else if(Oi(t)||ri(t))t.forEach(r=>{zn(r,e,n)});else if(ky(t)){for(const r in t)zn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&zn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aa(t,e,n,r){try{return r?t(...r):t()}catch(s){ca(s,e,n)}}function yn(t,e,n,r){if(de(t)){const s=aa(t,e,n,r);return s&&Py(s)&&s.catch(i=>{ca(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function ca(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,l,u)===!1)return}a=a.parent}if(i){Zr(),aa(i,null,10,[t,l,u]),es();return}}bI(t,n,s,r,o)}function bI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Lo=!1,oh=!1;const Gt=[];let ps=0;const oi=[];let Ir=null,Gs=0;const tv=Promise.resolve();let Uf=null;function Vn(t){const e=Uf||tv;return t?e.then(this?t.bind(this):t):e}function TI(t){let e=Lo?ps+1:0,n=Gt.length;for(;e<n;){const r=e+n>>>1,s=Gt[r],i=Mo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bf(t){if(!(t.flags&1)){const e=Mo(t),n=Gt[Gt.length-1];!n||!(t.flags&2)&&e>=Mo(n)?Gt.push(t):Gt.splice(TI(e),0,t),t.flags&4||(t.flags|=1),nv()}}function nv(){!Lo&&!oh&&(oh=!0,Uf=tv.then(rv))}function ah(t){ce(t)?oi.push(...t):Ir&&t.id===-1?Ir.splice(Gs+1,0,t):t.flags&1||(oi.push(t),t.flags&4||(t.flags|=1)),nv()}function cm(t,e,n=Lo?ps+1:0){for(;n<Gt.length;n++){const r=Gt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Gt.splice(n,1),n--,r(),r.flags&=-2}}}function Pc(t){if(oi.length){const e=[...new Set(oi)].sort((n,r)=>Mo(n)-Mo(r));if(oi.length=0,Ir){Ir.push(...e);return}for(Ir=e,Gs=0;Gs<Ir.length;Gs++){const n=Ir[Gs];n.flags&8||n(),n.flags&=-2}Ir=null,Gs=0}}const Mo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rv(t){oh=!1,Lo=!0;try{for(ps=0;ps<Gt.length;ps++){const e=Gt[ps];e&&!(e.flags&8)&&(aa(e,e.i,e.i?15:14),e.flags&=-2)}}finally{ps=0,Gt.length=0,Pc(),Lo=!1,Uf=null,(Gt.length||oi.length)&&rv()}}let ot=null,sv=null;function Cc(t){const e=ot;return ot=t,sv=t&&t.type.__scopeId||null,e}function bn(t,e=ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Em(-1);const i=Cc(e);let o;try{o=t(...s)}finally{Cc(i),r._d&&Em(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function HF(t,e){if(ot===null)return t;const n=vl(ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ne]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&zn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Tn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Zr(),yn(l,n,8,[t.el,a,t,e]),es())}}const II=Symbol("_vte"),iv=t=>t.__isTeleport,Ar=Symbol("_leaveCb"),za=Symbol("_enterCb");function AI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ml(()=>{t.isMounted=!0}),la(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],ov={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},av=t=>{const e=t.subTree;return e.component?av(e.component):e},RI={name:"BaseTransition",props:ov,setup(t,{slots:e}){const n=_l(),r=AI();return()=>{const s=e.default&&uv(e.default(),!0);if(!s||!s.length)return;const i=cv(s),o=Se(t),{mode:a}=o;if(r.isLeaving)return Eu(i);const l=lm(i);if(!l)return Eu(i);let u=ch(l,o,r,n,p=>u=p);l.type!==st&&Vo(l,u);const h=n.subTree,f=h&&lm(h);if(f&&f.type!==st&&!dn(l,f)&&av(n).type!==st){const p=ch(f,o,r,n);if(Vo(f,p),a==="out-in"&&l.type!==st)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update()},Eu(i);a==="in-out"&&l.type!==st&&(p.delayLeave=(g,R,O)=>{const x=lv(r,f);x[String(f.key)]=f,g[Ar]=()=>{R(),g[Ar]=void 0,delete u.delayedLeave},u.delayedLeave=O})}return i}}};function cv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==st){e=n;break}}return e}const SI=RI;function lv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ch(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:R,onLeaveCancelled:O,onBeforeAppear:x,onAppear:N,onAfterAppear:S,onAppearCancelled:E}=e,A=String(t.key),D=lv(n,t),V=(_,w)=>{_&&yn(_,r,9,w)},b=(_,w)=>{const C=w[1];V(_,w),ce(_)?_.every(P=>P.length<=1)&&C():_.length<=1&&C()},y={mode:o,persisted:a,beforeEnter(_){let w=l;if(!n.isMounted)if(i)w=x||l;else return;_[Ar]&&_[Ar](!0);const C=D[A];C&&dn(t,C)&&C.el[Ar]&&C.el[Ar](),V(w,[_])},enter(_){let w=u,C=h,P=f;if(!n.isMounted)if(i)w=N||u,C=S||h,P=E||f;else return;let T=!1;const me=_[za]=ye=>{T||(T=!0,ye?V(P,[_]):V(C,[_]),y.delayedLeave&&y.delayedLeave(),_[za]=void 0)};w?b(w,[_,me]):me()},leave(_,w){const C=String(t.key);if(_[za]&&_[za](!0),n.isUnmounting)return w();V(p,[_]);let P=!1;const T=_[Ar]=me=>{P||(P=!0,w(),me?V(O,[_]):V(R,[_]),_[Ar]=void 0,D[C]===t&&delete D[C])};D[C]=t,g?b(g,[_,T]):T()},clone(_){const w=ch(_,e,n,r,s);return s&&s(w),w}};return y}function Eu(t){if(dl(t))return t=nr(t),t.children=null,t}function lm(t){if(!dl(t))return iv(t.type)&&t.children?cv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Vo(t,e){t.shapeFlag&6&&t.component?Vo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function uv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ct?(o.patchFlag&128&&s++,r=r.concat(uv(o.children,e,a))):(e||o.type!==st)&&r.push(a!=null?nr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Fn(t,e){return de(t)?ct({name:t.name},e,{setup:t}):t}function hv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function kc(t,e,n,r,s=!1){if(ce(t)){t.forEach((g,R)=>kc(g,e&&(ce(e)?e[R]:e),n,r,s));return}if(Fr(r)&&!s)return;const i=r.shapeFlag&4?vl(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Ne?a.refs={}:a.refs,f=a.setupState,p=f===Ne?()=>!1:g=>Oe(f,g)&&!(Object.getOwnPropertyDescriptor(h,g)||Ne).get;if(u!=null&&u!==l&&(ze(u)?(h[u]=null,p(u)&&(f[u]=null)):Xe(u)&&(u.value=null)),de(l))aa(l,a,12,[o,h]);else{const g=ze(l),R=Xe(l);if(g||R){const O=()=>{if(t.f){const x=g?p(l)?f[l]:h[l]:l.value;s?ce(x)&&Af(x,i):ce(x)?x.includes(i)||x.push(i):g?(h[l]=[i],p(l)&&(f[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else g?(h[l]=o,p(l)&&(f[l]=o)):R&&(l.value=o,t.k&&(h[t.k]=o))};o?(O.id=-1,mt(O,n)):O()}}}let um=!1;const Ws=()=>{um||(console.error("Hydration completed but contains mismatches."),um=!0)},PI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",CI=t=>t.namespaceURI.includes("MathML"),Wa=t=>{if(t.nodeType===1){if(PI(t))return"svg";if(CI(t))return"mathml"}},Ka=t=>t.nodeType===8;function kI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(E,A)=>{if(!A.hasChildNodes()){n(null,E,A),Pc(),A._vnode=E;return}f(A.firstChild,E,null,null,null),Pc(),A._vnode=E},f=(E,A,D,V,b,y=!1)=>{y=y||!!A.dynamicChildren;const _=Ka(E)&&E.data==="[",w=()=>O(E,A,D,V,b,_),{type:C,ref:P,shapeFlag:T,patchFlag:me}=A;let ye=E.nodeType;A.el=E,me===-2&&(y=!1,A.dynamicChildren=null);let J=null;switch(C){case Es:ye!==3?A.children===""?(l(A.el=s(""),o(E),E),J=E):J=w():(E.data!==A.children&&(Ws(),E.data=A.children),J=i(E));break;case st:S(E)?(J=i(E),N(A.el=E.content.firstChild,E,D)):ye!==8||_?J=w():J=i(E);break;case _o:if(_&&(E=i(E),ye=E.nodeType),ye===1||ye===3){J=E;const te=!A.children.length;for(let ie=0;ie<A.staticCount;ie++)te&&(A.children+=J.nodeType===1?J.outerHTML:J.data),ie===A.staticCount-1&&(A.anchor=J),J=i(J);return _?i(J):J}else w();break;case Ct:_?J=R(E,A,D,V,b,y):J=w();break;default:if(T&1)(ye!==1||A.type.toLowerCase()!==E.tagName.toLowerCase())&&!S(E)?J=w():J=p(E,A,D,V,b,y);else if(T&6){A.slotScopeIds=b;const te=o(E);if(_?J=x(E):Ka(E)&&E.data==="teleport start"?J=x(E,E.data,"teleport end"):J=i(E),e(A,te,null,D,V,Wa(te),y),Fr(A)){let ie;_?(ie=Re(Ct),ie.anchor=J?J.previousSibling:te.lastChild):ie=E.nodeType===3?on(""):Re("div"),ie.el=E,A.component.subTree=ie}}else T&64?ye!==8?J=w():J=A.type.hydrate(E,A,D,V,b,y,t,g):T&128&&(J=A.type.hydrate(E,A,D,V,Wa(o(E)),b,y,t,f))}return P!=null&&kc(P,null,V,A),J},p=(E,A,D,V,b,y)=>{y=y||!!A.dynamicChildren;const{type:_,props:w,patchFlag:C,shapeFlag:P,dirs:T,transition:me}=A,ye=_==="input"||_==="option";if(ye||C!==-1){T&&Tn(A,null,D,"created");let J=!1;if(S(E)){J=Dv(V,me)&&D&&D.vnode.props&&D.vnode.props.appear;const ie=E.content.firstChild;J&&me.beforeEnter(ie),N(ie,E,D),A.el=E=ie}if(P&16&&!(w&&(w.innerHTML||w.textContent))){let ie=g(E.firstChild,A,E,D,V,b,y);for(;ie;){Ga(E,1)||Ws();const We=ie;ie=ie.nextSibling,a(We)}}else P&8&&E.textContent!==A.children&&(Ga(E,0)||Ws(),E.textContent=A.children);if(w){if(ye||!y||C&48){const ie=E.tagName.includes("-");for(const We in w)(ye&&(We.endsWith("value")||We==="indeterminate")||ra(We)&&!si(We)||We[0]==="."||ie)&&r(E,We,null,w[We],void 0,D)}else if(w.onClick)r(E,"onClick",null,w.onClick,void 0,D);else if(C&4&&er(w.style))for(const ie in w.style)w.style[ie]}let te;(te=w&&w.onVnodeBeforeMount)&&$t(te,D,A),T&&Tn(A,null,D,"beforeMount"),((te=w&&w.onVnodeMounted)||T||J)&&Bv(()=>{te&&$t(te,D,A),J&&me.enter(E),T&&Tn(A,null,D,"mounted")},V)}return E.nextSibling},g=(E,A,D,V,b,y,_)=>{_=_||!!A.dynamicChildren;const w=A.children,C=w.length;for(let P=0;P<C;P++){const T=_?w[P]:w[P]=Kt(w[P]),me=T.type===Es;E?(me&&!_&&P+1<C&&Kt(w[P+1]).type===Es&&(l(s(E.data.slice(T.children.length)),D,i(E)),E.data=T.children),E=f(E,T,V,b,y,_)):me&&!T.children?l(T.el=s(""),D):(Ga(D,1)||Ws(),n(null,T,D,null,V,b,Wa(D),y))}return E},R=(E,A,D,V,b,y)=>{const{slotScopeIds:_}=A;_&&(b=b?b.concat(_):_);const w=o(E),C=g(i(E),A,w,D,V,b,y);return C&&Ka(C)&&C.data==="]"?i(A.anchor=C):(Ws(),l(A.anchor=u("]"),w,C),C)},O=(E,A,D,V,b,y)=>{if(Ga(E.parentElement,1)||Ws(),A.el=null,y){const C=x(E);for(;;){const P=i(E);if(P&&P!==C)a(P);else break}}const _=i(E),w=o(E);return a(E),n(null,A,w,_,D,V,Wa(w),b),_},x=(E,A="[",D="]")=>{let V=0;for(;E;)if(E=i(E),E&&Ka(E)&&(E.data===A&&V++,E.data===D)){if(V===0)return i(E);V--}return E},N=(E,A,D)=>{const V=A.parentNode;V&&V.replaceChild(E,A);let b=D;for(;b;)b.vnode.el===A&&(b.vnode.el=b.subTree.el=E),b=b.parent},S=E=>E.nodeType===1&&E.tagName.toLowerCase()==="template";return[h,f]}const hm="data-allow-mismatch",OI={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ga(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(hm);)t=t.parentElement;const n=t&&t.getAttribute(hm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(OI[e])}}const Fr=t=>!!t.type.__asyncLoader,dl=t=>t.type.__isKeepAlive,xI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=_l(),r=n.ctx;if(!r.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:f}}}=r,p=f("div");r.activate=(S,E,A,D,V)=>{const b=S.component;u(S,E,A,0,a),l(b.vnode,S,E,A,b,a,D,S.slotScopeIds,V),mt(()=>{b.isDeactivated=!1,b.a&&ii(b.a);const y=S.props&&S.props.onVnodeMounted;y&&$t(y,b.parent,S)},a)},r.deactivate=S=>{const E=S.component;xc(E.m),xc(E.a),u(S,p,null,1,a),mt(()=>{E.da&&ii(E.da);const A=S.props&&S.props.onVnodeUnmounted;A&&$t(A,E.parent,S),E.isDeactivated=!0},a)};function g(S){wu(S),h(S,n,a,!0)}function R(S){s.forEach((E,A)=>{const D=gh(E.type);D&&!S(D)&&O(A)})}function O(S){const E=s.get(S);E&&(!o||!dn(E,o))?g(E):o&&wu(o),s.delete(S),i.delete(S)}gn(()=>[t.include,t.exclude],([S,E])=>{S&&R(A=>so(S,A)),E&&R(A=>!so(E,A))},{flush:"post",deep:!0});let x=null;const N=()=>{x!=null&&(Nc(n.subTree.type)?mt(()=>{s.set(x,Qa(n.subTree))},n.subTree.suspense):s.set(x,Qa(n.subTree)))};return ml(N),mv(N),la(()=>{s.forEach(S=>{const{subTree:E,suspense:A}=n,D=Qa(E);if(S.type===D.type&&S.key===D.key){wu(D);const V=D.component.da;V&&mt(V,A);return}g(S)})}),()=>{if(x=null,!e.default)return null;const S=e.default(),E=S[0];if(S.length>1)return o=null,S;if(!gi(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let A=Qa(E);if(A.type===st)return o=null,A;const D=A.type,V=gh(Fr(A)?A.type.__asyncResolved||{}:D),{include:b,exclude:y,max:_}=t;if(b&&(!V||!so(b,V))||y&&V&&so(y,V))return A.shapeFlag&=-257,o=A,E;const w=A.key==null?D:A.key,C=s.get(w);return A.el&&(A=nr(A),E.shapeFlag&128&&(E.ssContent=A)),x=w,C?(A.el=C.el,A.component=C.component,A.transition&&Vo(A,A.transition),A.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),_&&i.size>parseInt(_,10)&&O(i.values().next().value)),A.shapeFlag|=256,o=A,Nc(E.type)?E:A}}},NI=xI;function so(t,e){return ce(t)?t.some(n=>so(n,e)):ze(t)?t.split(",").includes(e):xT(t)?(t.lastIndex=0,t.test(e)):!1}function fv(t,e){pv(t,"a",e)}function dv(t,e){pv(t,"da",e)}function pv(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)dl(s.parent.vnode)&&DI(r,e,n,s),s=s.parent}}function DI(t,e,n,r){const s=pl(e,t,r,!0);gv(()=>{Af(r[e],s)},n)}function wu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Qa(t){return t.shapeFlag&128?t.ssContent:t}function pl(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Zr();const a=ua(n),l=yn(e,n,t,o);return a(),es(),l});return r?s.unshift(i):s.push(i),i}}const ur=t=>(e,n=ut)=>{(!yl||t==="sp")&&pl(t,(...r)=>e(...r),n)},LI=ur("bm"),ml=ur("m"),MI=ur("bu"),mv=ur("u"),la=ur("bum"),gv=ur("um"),VI=ur("sp"),FI=ur("rtg"),UI=ur("rtc");function _v(t,e=ut){pl("ec",t,e)}const yv="components";function Fo(t,e){return Ev(yv,t,!0,e)||t}const vv=Symbol.for("v-ndc");function BI(t){return ze(t)?Ev(yv,t,!1)||t:t||vv}function Ev(t,e,n=!0,r=!1){const s=ot||ut;if(s){const i=s.type;{const a=gh(i,!1);if(a&&(a===e||a===_n(e)||a===cl(_n(e))))return i}const o=fm(s[t]||i[t],e)||fm(s.appContext[t],e);return!o&&r?i:o}}function fm(t,e){return t&&(t[e]||t[_n(e)]||t[cl(_n(e))])}function qF(t,e,n,r){let s;const i=n,o=ce(t);if(o||ze(t)){const a=o&&er(t);a&&(t=hl(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(a?Pt(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function zF(t,e,n={},r,s){if(ot.ce||ot.parent&&Fr(ot.parent)&&ot.parent.ce)return Ut(),Wn(Ct,null,[Re("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ut();const o=i&&wv(i(n)),a=Wn(Ct,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),a}function wv(t){return t.some(e=>gi(e)?!(e.type===st||e.type===Ct&&!wv(e.children)):!0)?t:null}const lh=t=>t?zv(t)?vl(t):lh(t.parent):null,go=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lh(t.parent),$root:t=>lh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jf(t),$forceUpdate:t=>t.f||(t.f=()=>{Bf(t.update)}),$nextTick:t=>t.n||(t.n=Vn.bind(t.proxy)),$watch:t=>aA.bind(t)}),bu=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Oe(t,e),jI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bu(r,e))return o[e]=1,r[e];if(s!==Ne&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Ne&&Oe(n,e))return o[e]=4,n[e];uh&&(o[e]=0)}}const h=go[e];let f,p;if(h)return e==="$attrs"&&xt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Ne&&Oe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bu(s,e)?(s[e]=n,!0):r!==Ne&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&Oe(t,o)||bu(e,o)||(a=i[0])&&Oe(a,o)||Oe(r,o)||Oe(go,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uh=!0;function $I(t){const e=jf(t),n=t.proxy,r=t.ctx;uh=!1,e.beforeCreate&&pm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:R,activated:O,deactivated:x,beforeDestroy:N,beforeUnmount:S,destroyed:E,unmounted:A,render:D,renderTracked:V,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:w,inheritAttrs:C,components:P,directives:T,filters:me}=e;if(u&&HI(u,r,null),o)for(const te in o){const ie=o[te];de(ie)&&(r[te]=ie.bind(n))}if(s){const te=s.call(n,n);Le(te)&&(t.data=lr(te))}if(uh=!0,i)for(const te in i){const ie=i[te],We=de(ie)?ie.bind(n,n):de(ie.get)?ie.get.bind(n,n):Sn,ln=!de(ie)&&de(ie.set)?ie.set.bind(n):Sn,tn=Ve({get:We,set:ln});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const te in a)bv(a[te],r,n,te);if(l){const te=de(l)?l.call(n):l;Reflect.ownKeys(te).forEach(ie=>{vs(ie,te[ie])})}h&&pm(h,t,"c");function J(te,ie){ce(ie)?ie.forEach(We=>te(We.bind(n))):ie&&te(ie.bind(n))}if(J(LI,f),J(ml,p),J(MI,g),J(mv,R),J(fv,O),J(dv,x),J(_v,y),J(UI,V),J(FI,b),J(la,S),J(gv,A),J(VI,_),ce(w))if(w.length){const te=t.exposed||(t.exposed={});w.forEach(ie=>{Object.defineProperty(te,ie,{get:()=>n[ie],set:We=>n[ie]=We})})}else t.exposed||(t.exposed={});D&&t.render===Sn&&(t.render=D),C!=null&&(t.inheritAttrs=C),P&&(t.components=P),T&&(t.directives=T),_&&hv(t)}function HI(t,e,n=Sn){ce(t)&&(t=hh(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pm(t,e,n){yn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bv(t,e,n,r){let s=r.includes(".")?Vv(n,r):()=>n[r];if(ze(t)){const i=e[t];de(i)&&gn(s,i)}else if(de(t))gn(s,t.bind(n));else if(Le(t))if(ce(t))t.forEach(i=>bv(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&gn(s,i,t)}}function jf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Oc(l,u,o,!0)),Oc(l,e,o)),Le(e)&&i.set(e,l),l}function Oc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oc(t,i,n,!0),s&&s.forEach(o=>Oc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=qI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qI={data:mm,props:gm,emits:gm,methods:io,computed:io,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:io,directives:io,watch:WI,provide:mm,inject:zI};function mm(t,e){return e?t?function(){return ct(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function zI(t,e){return io(hh(t),hh(e))}function hh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?ct(Object.create(null),t,e):e}function gm(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ct(Object.create(null),dm(t),dm(e??{})):e}function WI(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function Tv(){return{app:null,config:{isNativeTag:kT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KI=0;function GI(t,e){return function(r,s=null){de(r)||(r=ct({},r)),s!=null&&!Le(s)&&(s=null);const i=Tv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:KI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Kv,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...f)):de(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!l){const g=u._ceVNode||Re(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,vl(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(yn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=ys;ys=u;try{return h()}finally{ys=f}}};return u}}let ys=null;function vs(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function Ot(t,e,n=!1){const r=ut||ot;if(r||ys){const s=ys?ys._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function $f(){return!!(ut||ot||ys)}const Iv={},Av=()=>Object.create(Iv),Rv=t=>Object.getPrototypeOf(t)===Iv;function QI(t,e,n,r=!1){const s={},i=Av();t.propsDefaults=Object.create(null),Sv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Gn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function YI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(gl(t.emitsOptions,p))continue;const g=e[p];if(l)if(Oe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const R=_n(p);s[R]=fh(l,a,R,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Sv(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=Ns(f))===f||!Oe(e,h)))&&(l?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=fh(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Oe(e,f))&&(delete i[f],u=!0)}u&&Zn(t.attrs,"set","")}function Sv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(si(l))continue;const u=e[l];let h;s&&Oe(s,h=_n(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:gl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=a||Ne;for(let h=0;h<i.length;h++){const f=i[h];n[f]=fh(s,l,f,u[f],t,!Oe(u,f))}}return o}function fh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ua(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ns(n))&&(r=!0))}return r}const XI=new WeakMap;function Pv(t,e,n=!1){const r=n?XI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=f=>{l=!0;const[p,g]=Pv(f,e,!0);ct(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Le(t)&&r.set(t,ni),ni;if(ce(i))for(let h=0;h<i.length;h++){const f=_n(i[h]);_m(f)&&(o[f]=Ne)}else if(i)for(const h in i){const f=_n(h);if(_m(f)){const p=i[h],g=o[f]=ce(p)||de(p)?{type:p}:ct({},p),R=g.type;let O=!1,x=!0;if(ce(R))for(let N=0;N<R.length;++N){const S=R[N],E=de(S)&&S.name;if(E==="Boolean"){O=!0;break}else E==="String"&&(x=!1)}else O=de(R)&&R.name==="Boolean";g[0]=O,g[1]=x,(O||Oe(g,"default"))&&a.push(f)}}const u=[o,a];return Le(t)&&r.set(t,u),u}function _m(t){return t[0]!=="$"&&!si(t)}const Cv=t=>t[0]==="_"||t==="$stable",Hf=t=>ce(t)?t.map(Kt):[Kt(t)],JI=(t,e,n)=>{if(e._n)return e;const r=bn((...s)=>Hf(e(...s)),n);return r._c=!1,r},kv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cv(s))continue;const i=t[s];if(de(i))e[s]=JI(s,i,r);else if(i!=null){const o=Hf(i);e[s]=()=>o}}},Ov=(t,e)=>{const n=Hf(e);t.slots.default=()=>n},xv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ZI=(t,e,n)=>{const r=t.slots=Av();if(t.vnode.shapeFlag&32){const s=e._;s?(xv(r,e,n),n&&Oy(r,"_",s,!0)):kv(e,r)}else e&&Ov(t,e)},eA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:xv(s,e,n):(i=!e.$stable,kv(e,s)),o=e}else e&&(Ov(t,e),o={default:1});if(i)for(const a in s)!Cv(a)&&o[a]==null&&delete s[a]},mt=Bv;function tA(t){return Nv(t)}function nA(t){return Nv(t,kI)}function Nv(t,e){const n=Ny();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=Sn,insertStaticContent:R}=t,O=(I,k,M,j=null,U=null,q=null,Q=void 0,K=null,W=!!k.dynamicChildren)=>{if(I===k)return;I&&!dn(I,k)&&(j=B(I),Ke(I,U,q,!0),I=null),k.patchFlag===-2&&(W=!1,k.dynamicChildren=null);const{type:z,ref:le,shapeFlag:X}=k;switch(z){case Es:x(I,k,M,j);break;case st:N(I,k,M,j);break;case _o:I==null&&S(k,M,j,Q);break;case Ct:P(I,k,M,j,U,q,Q,K,W);break;default:X&1?D(I,k,M,j,U,q,Q,K,W):X&6?T(I,k,M,j,U,q,Q,K,W):(X&64||X&128)&&z.process(I,k,M,j,U,q,Q,K,W,ee)}le!=null&&U&&kc(le,I&&I.ref,q,k||I,!k)},x=(I,k,M,j)=>{if(I==null)r(k.el=a(k.children),M,j);else{const U=k.el=I.el;k.children!==I.children&&u(U,k.children)}},N=(I,k,M,j)=>{I==null?r(k.el=l(k.children||""),M,j):k.el=I.el},S=(I,k,M,j)=>{[I.el,I.anchor]=R(I.children,k,M,j,I.el,I.anchor)},E=({el:I,anchor:k},M,j)=>{let U;for(;I&&I!==k;)U=p(I),r(I,M,j),I=U;r(k,M,j)},A=({el:I,anchor:k})=>{let M;for(;I&&I!==k;)M=p(I),s(I),I=M;s(k)},D=(I,k,M,j,U,q,Q,K,W)=>{k.type==="svg"?Q="svg":k.type==="math"&&(Q="mathml"),I==null?V(k,M,j,U,q,Q,K,W):_(I,k,U,q,Q,K,W)},V=(I,k,M,j,U,q,Q,K)=>{let W,z;const{props:le,shapeFlag:X,transition:oe,dirs:ne}=I;if(W=I.el=o(I.type,q,le&&le.is,le),X&8?h(W,I.children):X&16&&y(I.children,W,null,j,U,Tu(I,q),Q,K),ne&&Tn(I,null,j,"created"),b(W,I,I.scopeId,Q,j),le){for(const Pe in le)Pe!=="value"&&!si(Pe)&&i(W,Pe,null,le[Pe],q,j);"value"in le&&i(W,"value",null,le.value,q),(z=le.onVnodeBeforeMount)&&$t(z,j,I)}ne&&Tn(I,null,j,"beforeMount");const he=Dv(U,oe);he&&oe.beforeEnter(W),r(W,k,M),((z=le&&le.onVnodeMounted)||he||ne)&&mt(()=>{z&&$t(z,j,I),he&&oe.enter(W),ne&&Tn(I,null,j,"mounted")},U)},b=(I,k,M,j,U)=>{if(M&&g(I,M),j)for(let q=0;q<j.length;q++)g(I,j[q]);if(U){let q=U.subTree;if(k===q||Nc(q.type)&&(q.ssContent===k||q.ssFallback===k)){const Q=U.vnode;b(I,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(I,k,M,j,U,q,Q,K,W=0)=>{for(let z=W;z<I.length;z++){const le=I[z]=K?Rr(I[z]):Kt(I[z]);O(null,le,k,M,j,U,q,Q,K)}},_=(I,k,M,j,U,q,Q)=>{const K=k.el=I.el;let{patchFlag:W,dynamicChildren:z,dirs:le}=k;W|=I.patchFlag&16;const X=I.props||Ne,oe=k.props||Ne;let ne;if(M&&as(M,!1),(ne=oe.onVnodeBeforeUpdate)&&$t(ne,M,k,I),le&&Tn(k,I,M,"beforeUpdate"),M&&as(M,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&h(K,""),z?w(I.dynamicChildren,z,K,M,j,Tu(k,U),q):Q||ie(I,k,K,null,M,j,Tu(k,U),q,!1),W>0){if(W&16)C(K,X,oe,M,U);else if(W&2&&X.class!==oe.class&&i(K,"class",null,oe.class,U),W&4&&i(K,"style",X.style,oe.style,U),W&8){const he=k.dynamicProps;for(let Pe=0;Pe<he.length;Pe++){const Te=he[Pe],bt=X[Te],ht=oe[Te];(ht!==bt||Te==="value")&&i(K,Te,bt,ht,U,M)}}W&1&&I.children!==k.children&&h(K,k.children)}else!Q&&z==null&&C(K,X,oe,M,U);((ne=oe.onVnodeUpdated)||le)&&mt(()=>{ne&&$t(ne,M,k,I),le&&Tn(k,I,M,"updated")},j)},w=(I,k,M,j,U,q,Q)=>{for(let K=0;K<k.length;K++){const W=I[K],z=k[K],le=W.el&&(W.type===Ct||!dn(W,z)||W.shapeFlag&70)?f(W.el):M;O(W,z,le,null,j,U,q,Q,!0)}},C=(I,k,M,j,U)=>{if(k!==M){if(k!==Ne)for(const q in k)!si(q)&&!(q in M)&&i(I,q,k[q],null,U,j);for(const q in M){if(si(q))continue;const Q=M[q],K=k[q];Q!==K&&q!=="value"&&i(I,q,K,Q,U,j)}"value"in M&&i(I,"value",k.value,M.value,U)}},P=(I,k,M,j,U,q,Q,K,W)=>{const z=k.el=I?I.el:a(""),le=k.anchor=I?I.anchor:a("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ne}=k;ne&&(K=K?K.concat(ne):ne),I==null?(r(z,M,j),r(le,M,j),y(k.children||[],M,le,U,q,Q,K,W)):X>0&&X&64&&oe&&I.dynamicChildren?(w(I.dynamicChildren,oe,M,U,q,Q,K),(k.key!=null||U&&k===U.subTree)&&Lv(I,k,!0)):ie(I,k,M,le,U,q,Q,K,W)},T=(I,k,M,j,U,q,Q,K,W)=>{k.slotScopeIds=K,I==null?k.shapeFlag&512?U.ctx.activate(k,M,j,Q,W):me(k,M,j,U,q,Q,W):ye(I,k,W)},me=(I,k,M,j,U,q,Q)=>{const K=I.component=AA(I,j,U);if(dl(I)&&(K.ctx.renderer=ee),RA(K,!1,Q),K.asyncDep){if(U&&U.registerDep(K,J,Q),!I.el){const W=K.subTree=Re(st);N(null,W,k,M)}}else J(K,I,k,M,U,q,Q)},ye=(I,k,M)=>{const j=k.component=I.component;if(dA(I,k,M))if(j.asyncDep&&!j.asyncResolved){te(j,k,M);return}else j.next=k,j.update();else k.el=I.el,j.vnode=k},J=(I,k,M,j,U,q,Q)=>{const K=()=>{if(I.isMounted){let{next:X,bu:oe,u:ne,parent:he,vnode:Pe}=I;{const Tt=Mv(I);if(Tt){X&&(X.el=Pe.el,te(I,X,Q)),Tt.asyncDep.then(()=>{I.isUnmounted||K()});return}}let Te=X,bt;as(I,!1),X?(X.el=Pe.el,te(I,X,Q)):X=Pe,oe&&ii(oe),(bt=X.props&&X.props.onVnodeBeforeUpdate)&&$t(bt,he,X,Pe),as(I,!0);const ht=Iu(I),ft=I.subTree;I.subTree=ht,O(ft,ht,f(ft.el),B(ft),I,U,q),X.el=ht.el,Te===null&&zf(I,ht.el),ne&&mt(ne,U),(bt=X.props&&X.props.onVnodeUpdated)&&mt(()=>$t(bt,he,X,Pe),U)}else{let X;const{el:oe,props:ne}=k,{bm:he,m:Pe,parent:Te,root:bt,type:ht}=I,ft=Fr(k);if(as(I,!1),he&&ii(he),!ft&&(X=ne&&ne.onVnodeBeforeMount)&&$t(X,Te,k),as(I,!0),oe&&xe){const Tt=()=>{I.subTree=Iu(I),xe(oe,I.subTree,I,U,null)};ft?ht.__asyncHydrate(oe,I,Tt):Tt()}else{bt.ce&&bt.ce._injectChildStyle(ht);const Tt=I.subTree=Iu(I);O(null,Tt,M,j,I,U,q),k.el=Tt.el}if(Pe&&mt(Pe,U),!ft&&(X=ne&&ne.onVnodeMounted)){const Tt=k;mt(()=>$t(X,Te,Tt),U)}(k.shapeFlag&256||Te&&Fr(Te.vnode)&&Te.vnode.shapeFlag&256)&&I.a&&mt(I.a,U),I.isMounted=!0,k=M=j=null}};I.scope.on();const W=I.effect=new Fy(K);I.scope.off();const z=I.update=W.run.bind(W),le=I.job=W.runIfDirty.bind(W);le.i=I,le.id=I.uid,W.scheduler=()=>Bf(le),as(I,!0),z()},te=(I,k,M)=>{k.component=I;const j=I.vnode.props;I.vnode=k,I.next=null,YI(I,k.props,j,M),eA(I,k.children,M),Zr(),cm(I),es()},ie=(I,k,M,j,U,q,Q,K,W=!1)=>{const z=I&&I.children,le=I?I.shapeFlag:0,X=k.children,{patchFlag:oe,shapeFlag:ne}=k;if(oe>0){if(oe&128){ln(z,X,M,j,U,q,Q,K,W);return}else if(oe&256){We(z,X,M,j,U,q,Q,K,W);return}}ne&8?(le&16&&Bt(z,U,q),X!==z&&h(M,X)):le&16?ne&16?ln(z,X,M,j,U,q,Q,K,W):Bt(z,U,q,!0):(le&8&&h(M,""),ne&16&&y(X,M,j,U,q,Q,K,W))},We=(I,k,M,j,U,q,Q,K,W)=>{I=I||ni,k=k||ni;const z=I.length,le=k.length,X=Math.min(z,le);let oe;for(oe=0;oe<X;oe++){const ne=k[oe]=W?Rr(k[oe]):Kt(k[oe]);O(I[oe],ne,M,null,U,q,Q,K,W)}z>le?Bt(I,U,q,!0,!1,X):y(k,M,j,U,q,Q,K,W,X)},ln=(I,k,M,j,U,q,Q,K,W)=>{let z=0;const le=k.length;let X=I.length-1,oe=le-1;for(;z<=X&&z<=oe;){const ne=I[z],he=k[z]=W?Rr(k[z]):Kt(k[z]);if(dn(ne,he))O(ne,he,M,null,U,q,Q,K,W);else break;z++}for(;z<=X&&z<=oe;){const ne=I[X],he=k[oe]=W?Rr(k[oe]):Kt(k[oe]);if(dn(ne,he))O(ne,he,M,null,U,q,Q,K,W);else break;X--,oe--}if(z>X){if(z<=oe){const ne=oe+1,he=ne<le?k[ne].el:j;for(;z<=oe;)O(null,k[z]=W?Rr(k[z]):Kt(k[z]),M,he,U,q,Q,K,W),z++}}else if(z>oe)for(;z<=X;)Ke(I[z],U,q,!0),z++;else{const ne=z,he=z,Pe=new Map;for(z=he;z<=oe;z++){const Dt=k[z]=W?Rr(k[z]):Kt(k[z]);Dt.key!=null&&Pe.set(Dt.key,z)}let Te,bt=0;const ht=oe-he+1;let ft=!1,Tt=0;const pr=new Array(ht);for(z=0;z<ht;z++)pr[z]=0;for(z=ne;z<=X;z++){const Dt=I[z];if(bt>=ht){Ke(Dt,U,q,!0);continue}let nn;if(Dt.key!=null)nn=Pe.get(Dt.key);else for(Te=he;Te<=oe;Te++)if(pr[Te-he]===0&&dn(Dt,k[Te])){nn=Te;break}nn===void 0?Ke(Dt,U,q,!0):(pr[nn-he]=z+1,nn>=Tt?Tt=nn:ft=!0,O(Dt,k[nn],M,null,U,q,Q,K,W),bt++)}const Us=ft?rA(pr):ni;for(Te=Us.length-1,z=ht-1;z>=0;z--){const Dt=he+z,nn=k[Dt],Bs=Dt+1<le?k[Dt+1].el:j;pr[z]===0?O(null,nn,M,Bs,U,q,Q,K,W):ft&&(Te<0||z!==Us[Te]?tn(nn,M,Bs,2):Te--)}}},tn=(I,k,M,j,U=null)=>{const{el:q,type:Q,transition:K,children:W,shapeFlag:z}=I;if(z&6){tn(I.component.subTree,k,M,j);return}if(z&128){I.suspense.move(k,M,j);return}if(z&64){Q.move(I,k,M,ee);return}if(Q===Ct){r(q,k,M);for(let X=0;X<W.length;X++)tn(W[X],k,M,j);r(I.anchor,k,M);return}if(Q===_o){E(I,k,M);return}if(j!==2&&z&1&&K)if(j===0)K.beforeEnter(q),r(q,k,M),mt(()=>K.enter(q),U);else{const{leave:X,delayLeave:oe,afterLeave:ne}=K,he=()=>r(q,k,M),Pe=()=>{X(q,()=>{he(),ne&&ne()})};oe?oe(q,he,Pe):Pe()}else r(q,k,M)},Ke=(I,k,M,j=!1,U=!1)=>{const{type:q,props:Q,ref:K,children:W,dynamicChildren:z,shapeFlag:le,patchFlag:X,dirs:oe,cacheIndex:ne}=I;if(X===-2&&(U=!1),K!=null&&kc(K,null,M,I,!0),ne!=null&&(k.renderCache[ne]=void 0),le&256){k.ctx.deactivate(I);return}const he=le&1&&oe,Pe=!Fr(I);let Te;if(Pe&&(Te=Q&&Q.onVnodeBeforeUnmount)&&$t(Te,k,I),le&6)wn(I.component,M,j);else{if(le&128){I.suspense.unmount(M,j);return}he&&Tn(I,null,k,"beforeUnmount"),le&64?I.type.remove(I,k,M,ee,j):z&&!z.hasOnce&&(q!==Ct||X>0&&X&64)?Bt(z,k,M,!1,!0):(q===Ct&&X&384||!U&&le&16)&&Bt(W,k,M),j&&Ge(I)}(Pe&&(Te=Q&&Q.onVnodeUnmounted)||he)&&mt(()=>{Te&&$t(Te,k,I),he&&Tn(I,null,k,"unmounted")},M)},Ge=I=>{const{type:k,el:M,anchor:j,transition:U}=I;if(k===Ct){dr(M,j);return}if(k===_o){A(I);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,W=()=>Q(M,q);K?K(I.el,q,W):W()}else q()},dr=(I,k)=>{let M;for(;I!==k;)M=p(I),s(I),I=M;s(k)},wn=(I,k,M)=>{const{bum:j,scope:U,job:q,subTree:Q,um:K,m:W,a:z}=I;xc(W),xc(z),j&&ii(j),U.stop(),q&&(q.flags|=8,Ke(Q,I,k,M)),K&&mt(K,k),mt(()=>{I.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},Bt=(I,k,M,j=!1,U=!1,q=0)=>{for(let Q=q;Q<I.length;Q++)Ke(I[Q],k,M,j,U)},B=I=>{if(I.shapeFlag&6)return B(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const k=p(I.anchor||I.el),M=k&&k[II];return M?p(M):k};let Z=!1;const Y=(I,k,M)=>{I==null?k._vnode&&Ke(k._vnode,null,null,!0):O(k._vnode||null,I,k,null,null,null,M),k._vnode=I,Z||(Z=!0,cm(),Pc(),Z=!1)},ee={p:O,um:Ke,m:tn,r:Ge,mt:me,mc:y,pc:ie,pbc:w,n:B,o:t};let Ee,xe;return e&&([Ee,xe]=e(ee)),{render:Y,hydrate:Ee,createApp:GI(Y,Ee)}}function Tu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function as({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Dv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lv(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Lv(o,a)),a.type===Es&&(a.el=o.el)}}function rA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Mv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mv(e)}function xc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const sA=Symbol.for("v-scx"),iA=()=>Ot(sA);function oA(t,e){return qf(t,null,e)}function gn(t,e,n){return qf(t,e,n)}function qf(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,a=ct({},n);let l;if(yl)if(i==="sync"){const p=iA();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:Sn,resume:Sn,pause:Sn};const u=ut;a.call=(p,g,R)=>yn(p,u,g,R);let h=!1;i==="post"?a.scheduler=p=>{mt(p,u&&u.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Bf(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=wI(t,e,a);return l&&l.push(f),f}function aA(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Vv(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=ua(this),a=qf(s,i.bind(r),n);return o(),a}function Vv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const cA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_n(e)}Modifiers`]||t[`${Ns(e)}Modifiers`];function lA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&cA(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ze(h)?h.trim():h)),o.number&&(s=n.map(Ic)));let a,l=r[a=mu(e)]||r[a=mu(_n(e))];!l&&i&&(l=r[a=mu(Ns(e))]),l&&yn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(u,t,6,s)}}function Fv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=Fv(u,e,!0);h&&(a=!0,ct(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Le(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):ct(o,i),Le(t)&&r.set(t,o),o)}function gl(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Ns(e))||Oe(t,e))}function Iu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:f,data:p,setupState:g,ctx:R,inheritAttrs:O}=t,x=Cc(t);let N,S;try{if(n.shapeFlag&4){const A=s||r,D=A;N=Kt(u.call(D,A,h,f,g,p,R)),S=a}else{const A=e;N=Kt(A.length>1?A(f,{attrs:a,slots:o,emit:l}):A(f,null)),S=e.props?a:hA(a)}}catch(A){yo.length=0,ca(A,t,1),N=Re(st)}let E=N;if(S&&O!==!1){const A=Object.keys(S),{shapeFlag:D}=E;A.length&&D&7&&(i&&A.some(If)&&(S=fA(S,i)),E=nr(E,S,!1,!0))}return n.dirs&&(E=nr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),N=E,Cc(x),N}function uA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(gi(s)){if(s.type!==st||s.children==="v-if"){if(n)return;n=s}}else return}return n}const hA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},fA=(t,e)=>{const n={};for(const r in t)(!If(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ym(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!gl(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ym(r,o,u):!0:!!o;return!1}function ym(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!gl(n,i))return!0}return!1}function zf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Nc=t=>t.__isSuspense;let dh=0;const pA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)mA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}gA(t,e,n,r,s,o,a,l,u)}},hydrate:_A,normalize:yA},Wf=pA;function Uo(t,e){const n=t.props&&t.props[e];de(n)&&n()}function mA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,f=h("div"),p=t.suspense=Uv(t,s,r,e,f,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(Uo(t,"onPending"),Uo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ai(p,t.ssFallback)):p.resolve(!1,!0)}function gA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:R,pendingBranch:O,isInFallback:x,isHydrating:N}=f;if(O)f.pendingBranch=p,dn(p,O)?(l(O,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():x&&(N||(l(R,g,n,r,s,null,i,o,a),ai(f,g)))):(f.pendingId=dh++,N?(f.isHydrating=!1,f.activeBranch=O):u(O,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),x?(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(R,g,n,r,s,null,i,o,a),ai(f,g))):R&&dn(p,R)?(l(R,p,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(R&&dn(p,R))l(R,p,n,r,s,f,i,o,a),ai(f,p);else if(Uo(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=dh++,l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:S,pendingId:E}=f;S>0?setTimeout(()=>{f.pendingId===E&&f.fallback(g)},S):S===0&&f.fallback(g)}}function Uv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:f,m:p,um:g,n:R,o:{parentNode:O,remove:x}}=u;let N;const S=vA(t);S&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const E=t.props?xy(t.props.timeout):void 0,A=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:dh++,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(V=!1,b=!1){const{vnode:y,activeBranch:_,pendingBranch:w,pendingId:C,effects:P,parentComponent:T,container:me}=D;let ye=!1;D.isHydrating?D.isHydrating=!1:V||(ye=_&&w.transition&&w.transition.mode==="out-in",ye&&(_.transition.afterLeave=()=>{C===D.pendingId&&(p(w,me,i===A?R(_):i,0),ah(P))}),_&&(O(_.el)!==D.hiddenContainer&&(i=R(_)),g(_,T,D,!0)),ye||p(w,me,i,0)),ai(D,w),D.pendingBranch=null,D.isInFallback=!1;let J=D.parent,te=!1;for(;J;){if(J.pendingBranch){J.effects.push(...P),te=!0;break}J=J.parent}!te&&!ye&&ah(P),D.effects=[],S&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Uo(y,"onResolve")},fallback(V){if(!D.pendingBranch)return;const{vnode:b,activeBranch:y,parentComponent:_,container:w,namespace:C}=D;Uo(b,"onFallback");const P=R(y),T=()=>{D.isInFallback&&(f(null,V,w,P,_,null,C,a,l),ai(D,V))},me=V.transition&&V.transition.mode==="out-in";me&&(y.transition.afterLeave=T),D.isInFallback=!0,g(y,_,null,!0),me||T()},move(V,b,y){D.activeBranch&&p(D.activeBranch,V,b,y),D.container=V},next(){return D.activeBranch&&R(D.activeBranch)},registerDep(V,b,y){const _=!!D.pendingBranch;_&&D.deps++;const w=V.vnode.el;V.asyncDep.catch(C=>{ca(C,V,0)}).then(C=>{if(V.isUnmounted||D.isUnmounted||D.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:P}=V;mh(V,C,!1),w&&(P.el=w);const T=!w&&V.subTree.el;b(V,P,O(w||V.subTree.el),w?null:R(V.subTree),D,o,y),T&&x(T),zf(V,P.el),_&&--D.deps===0&&D.resolve()})},unmount(V,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,V,b),D.pendingBranch&&g(D.pendingBranch,n,V,b)}};return D}function _A(t,e,n,r,s,i,o,a,l){const u=e.suspense=Uv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function yA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=vm(r?n.default:n),t.ssFallback=r?vm(n.fallback):Re(st)}function vm(t){let e;if(de(t)){const n=mi&&t._c;n&&(t._d=!1,Ut()),t=t(),n&&(t._d=!0,e=qt,jv())}return ce(t)&&(t=uA(t)),t=Kt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Bv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):ah(t)}function ai(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,zf(r,s))}function vA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ct=Symbol.for("v-fgt"),Es=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),yo=[];let qt=null;function Ut(t=!1){yo.push(qt=t?null:[])}function jv(){yo.pop(),qt=yo[yo.length-1]||null}let mi=1;function Em(t){mi+=t,t<0&&qt&&(qt.hasOnce=!0)}function $v(t){return t.dynamicChildren=mi>0?qt||ni:null,jv(),mi>0&&qt&&qt.push(t),t}function Bo(t,e,n,r,s,i){return $v($e(t,e,n,r,s,i,!0))}function Wn(t,e,n,r,s){return $v(Re(t,e,n,r,s,!0))}function gi(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const Hv=({key:t})=>t??null,cc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Xe(t)||de(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function $e(t,e=null,n=null,r=0,s=null,i=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hv(e),ref:e&&cc(e),scopeId:sv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ot};return a?(Kf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),mi>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const Re=EA;function EA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vv)&&(t=st),gi(t)){const a=nr(t,e,!0);return n&&Kf(a,n),mi>0&&!i&&qt&&(a.shapeFlag&6?qt[qt.indexOf(t)]=a:qt.push(a)),a.patchFlag=-2,a}if(kA(t)&&(t=t.__vccOpts),e){e=wA(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=sa(a)),Le(l)&&(Mf(l)&&!ce(l)&&(l=ct({},l)),e.style=ll(l))}const o=ze(t)?1:Nc(t)?128:iv(t)?64:Le(t)?4:de(t)?2:0;return $e(t,e,n,r,s,o,i,!0)}function wA(t){return t?Mf(t)||Rv(t)?ct({},t):t:null}function nr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?qv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Hv(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(cc(e)):[i,cc(e)]:cc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nr(t.ssContent),ssFallback:t.ssFallback&&nr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Vo(h,l.clone(h)),h}function on(t=" ",e=0){return Re(Es,null,t,e)}function WF(t,e){const n=Re(_o,null,t);return n.staticCount=e,n}function bA(t="",e=!1){return e?(Ut(),Wn(st,null,t)):Re(st,null,t)}function Kt(t){return t==null||typeof t=="boolean"?Re(st):ce(t)?Re(Ct,null,t.slice()):typeof t=="object"?Rr(t):Re(Es,null,String(t))}function Rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:nr(t)}function Kf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Kf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Rv(e)?e._ctx=ot:s===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),r&64?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function qv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sa([e.class,r.class]));else if(s==="style")e.style=ll([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){yn(t,e,7,[n,r])}const TA=Tv();let IA=0;function AA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||TA,i={uid:IA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pv(r,s),emitsOptions:Fv(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lA.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const _l=()=>ut||ot;let Dc,ph;{const t=Ny(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Dc=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),ph=e("__VUE_SSR_SETTERS__",n=>yl=n)}const ua=t=>{const e=ut;return Dc(t),t.scope.on(),()=>{t.scope.off(),Dc(e)}},wm=()=>{ut&&ut.scope.off(),Dc(null)};function zv(t){return t.vnode.shapeFlag&4}let yl=!1;function RA(t,e=!1,n=!1){e&&ph(e);const{props:r,children:s}=t.vnode,i=zv(t);QI(t,r,i,e),ZI(t,s,n);const o=i?SA(t,e):void 0;return e&&ph(!1),o}function SA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,jI);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?CA(t):null,i=ua(t);Zr();const o=aa(r,t,0,[t.props,s]);if(es(),i(),Py(o)){if(Fr(t)||hv(t),o.then(wm,wm),e)return o.then(a=>{mh(t,a,e)}).catch(a=>{ca(a,t,0)});t.asyncDep=o}else mh(t,o,e)}else Wv(t,e)}function mh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Zy(e)),Wv(t,n)}let bm;function Wv(t,e,n){const r=t.type;if(!t.render){if(!e&&bm&&!r.render){const s=r.template||jf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ct(ct({isCustomElement:i,delimiters:a},o),l);r.render=bm(s,u)}}t.render=r.render||Sn}{const s=ua(t);Zr();try{$I(t)}finally{es(),s()}}}const PA={get(t,e){return xt(t,"get",""),t[e]}};function CA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,PA),slots:t.slots,emit:t.emit,expose:e}}function vl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zy(Vf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in go)return go[n](t)},has(e,n){return n in e||n in go}})):t.proxy}function gh(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function kA(t){return de(t)&&"__vccOpts"in t}const Ve=(t,e)=>vI(t,e,yl);function yt(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ce(e)?gi(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gi(n)&&(n=[n]),Re(t,e,n))}const Kv="3.5.1";/**
* @vue/runtime-dom v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _h;const Tm=typeof window<"u"&&window.trustedTypes;if(Tm)try{_h=Tm.createPolicy("vue",{createHTML:t=>t})}catch{}const Gv=_h?t=>_h.createHTML(t):t=>t,OA="http://www.w3.org/2000/svg",xA="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,Im=qn&&qn.createElement("template"),NA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?qn.createElementNS(OA,t):e==="mathml"?qn.createElementNS(xA,t):n?qn.createElement(t,{is:n}):qn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Im.innerHTML=Gv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Im.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vr="transition",eo="animation",jo=Symbol("_vtc"),Qv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},DA=ct({},ov,Qv),LA=t=>(t.displayName="Transition",t.props=DA,t),Yv=LA((t,{slots:e})=>yt(SI,MA(t),e)),cs=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Am=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function MA(t){const e={};for(const P in t)P in Qv||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,R=VA(s),O=R&&R[0],x=R&&R[1],{onBeforeEnter:N,onEnter:S,onEnterCancelled:E,onLeave:A,onLeaveCancelled:D,onBeforeAppear:V=N,onAppear:b=S,onAppearCancelled:y=E}=e,_=(P,T,me)=>{ls(P,T?h:a),ls(P,T?u:o),me&&me()},w=(P,T)=>{P._isLeaving=!1,ls(P,f),ls(P,g),ls(P,p),T&&T()},C=P=>(T,me)=>{const ye=P?b:S,J=()=>_(T,P,me);cs(ye,[T,J]),Rm(()=>{ls(T,P?l:i),Er(T,P?h:a),Am(ye)||Sm(T,r,O,J)})};return ct(e,{onBeforeEnter(P){cs(N,[P]),Er(P,i),Er(P,o)},onBeforeAppear(P){cs(V,[P]),Er(P,l),Er(P,u)},onEnter:C(!1),onAppear:C(!0),onLeave(P,T){P._isLeaving=!0;const me=()=>w(P,T);Er(P,f),Er(P,p),BA(),Rm(()=>{P._isLeaving&&(ls(P,f),Er(P,g),Am(A)||Sm(P,r,x,me))}),cs(A,[P,me])},onEnterCancelled(P){_(P,!1),cs(E,[P])},onAppearCancelled(P){_(P,!0),cs(y,[P])},onLeaveCancelled(P){w(P),cs(D,[P])}})}function VA(t){if(t==null)return null;if(Le(t))return[Au(t.enter),Au(t.leave)];{const e=Au(t);return[e,e]}}function Au(t){return xy(t)}function Er(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[jo]||(t[jo]=new Set)).add(e)}function ls(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[jo];n&&(n.delete(e),n.size||(t[jo]=void 0))}function Rm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let FA=0;function Sm(t,e,n,r){const s=t._endId=++FA,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=UA(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&f()};setTimeout(()=>{h<l&&f()},a+1),t.addEventListener(u,p)}function UA(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${vr}Delay`),i=r(`${vr}Duration`),o=Pm(s,i),a=r(`${eo}Delay`),l=r(`${eo}Duration`),u=Pm(a,l);let h=null,f=0,p=0;e===vr?o>0&&(h=vr,f=o,p=i.length):e===eo?u>0&&(h=eo,f=u,p=l.length):(f=Math.max(o,u),h=f>0?o>u?vr:eo:null,p=h?h===vr?i.length:l.length:0);const g=h===vr&&/\b(transform|all)(,|$)/.test(r(`${vr}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:g}}function Pm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Cm(n)+Cm(t[r])))}function Cm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function BA(){return document.body.offsetHeight}function jA(t,e,n){const r=t[jo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const km=Symbol("_vod"),$A=Symbol("_vsh"),HA=Symbol(""),qA=/(^|;)\s*display\s*:/;function zA(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&lc(r,a,"")}else for(const o in e)n[o]==null&&lc(r,o,"");for(const o in n)o==="display"&&(i=!0),lc(r,o,n[o])}else if(s){if(e!==n){const o=r[HA];o&&(n+=";"+o),r.cssText=n,i=qA.test(n)}}else e&&t.removeAttribute("style");km in t&&(t[km]=i?r.display:"",t[$A]&&(r.display="none"))}const Om=/\s*!important$/;function lc(t,e,n){if(ce(n))n.forEach(r=>lc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=WA(t,e);Om.test(n)?t.setProperty(Ns(r),n.replace(Om,""),"important"):t[r]=n}}const xm=["Webkit","Moz","ms"],Ru={};function WA(t,e){const n=Ru[e];if(n)return n;let r=_n(e);if(r!=="filter"&&r in t)return Ru[e]=r;r=cl(r);for(let s=0;s<xm.length;s++){const i=xm[s]+r;if(i in t)return Ru[e]=i}return e}const Nm="http://www.w3.org/1999/xlink";function Dm(t,e,n,r,s,i=jT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nm,e.slice(6,e.length)):t.setAttributeNS(Nm,e,n):n==null||i&&!Dy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Nn(n)?String(n):n)}function KA(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Gv(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Dy(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Cr(t,e,n,r){t.addEventListener(e,n,r)}function GA(t,e,n,r){t.removeEventListener(e,n,r)}const Lm=Symbol("_vei");function QA(t,e,n,r,s=null){const i=t[Lm]||(t[Lm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=YA(e);if(r){const u=i[e]=ZA(r,s);Cr(t,a,u,l)}else o&&(GA(t,a,o,l),i[e]=void 0)}}const Mm=/(?:Once|Passive|Capture)$/;function YA(t){let e;if(Mm.test(t)){e={};let r;for(;r=t.match(Mm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let Su=0;const XA=Promise.resolve(),JA=()=>Su||(XA.then(()=>Su=0),Su=Date.now());function ZA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(e1(r,n.value),e,5,[r])};return n.value=t,n.attached=JA(),n}function e1(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,t1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?jA(t,r,o):e==="style"?zA(t,n,r):ra(e)?If(e)||QA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n1(t,e,r,o))?(KA(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Dm(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Dm(t,e,r,o))};function n1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vm(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vm(e)&&ze(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!ze(n)))}const _i=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>ii(e,n):e};function r1(t){t.target.composing=!0}function Fm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),KF={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[tr]=_i(s);const i=r||s.props&&s.props.type==="number";Cr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ic(a)),t[tr](a)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",r1),Cr(t,"compositionend",Fm),Cr(t,"change",Fm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[tr]=_i(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ic(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},GF={deep:!0,created(t,e,n){t[tr]=_i(n),Cr(t,"change",()=>{const r=t._modelValue,s=$o(t),i=t.checked,o=t[tr];if(ce(r)){const a=Sf(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Oi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Xv(t,i))})},mounted:Um,beforeUpdate(t,e,n){t[tr]=_i(n),Um(t,e,n)}};function Um(t,{value:e,oldValue:n},r){t._modelValue=e;let s;ce(e)?s=Sf(e,r.props.value)>-1:Oi(e)?s=e.has(r.props.value):s=ia(e,Xv(t,!0)),t.checked!==s&&(t.checked=s)}const QF={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Oi(e);Cr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ic($o(o)):$o(o));t[tr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Vn(()=>{t._assigning=!1})}),t[tr]=_i(r)},mounted(t,{value:e,modifiers:{number:n}}){Bm(t,e)},beforeUpdate(t,e,n){t[tr]=_i(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Bm(t,e)}};function Bm(t,e,n){const r=t.multiple,s=ce(e);if(!(r&&!s&&!Oi(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=$o(a);if(r)if(s){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Sf(e,l)>-1}else a.selected=e.has(l);else if(ia($o(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $o(t){return"_value"in t?t._value:t.value}function Xv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const s1=["ctrl","shift","alt","meta"],i1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>s1.some(n=>t[`${n}Key`]&&!e.includes(n))},YF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=i1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Jv=ct({patchProp:t1},NA);let vo,jm=!1;function o1(){return vo||(vo=tA(Jv))}function a1(){return vo=jm?vo:nA(Jv),jm=!0,vo}const c1=(...t)=>{const e=o1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Zv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},l1=(...t)=>{const e=a1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eE(r);if(s)return n(s,!0,Zv(s))},e};function Zv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function eE(t){return ze(t)?document.querySelector(t):t}const u1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,h1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,f1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function d1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){p1(t);return}return e}function p1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ho(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!f1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(u1.test(t)||h1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,d1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const m1=/#/g,g1=/&/g,_1=/\//g,y1=/=/g,Gf=/\+/g,v1=/%5e/gi,E1=/%60/gi,w1=/%7c/gi,b1=/%20/gi;function T1(t){return encodeURI(""+t).replace(w1,"|")}function yh(t){return T1(typeof t=="string"?t:JSON.stringify(t)).replace(Gf,"%2B").replace(b1,"+").replace(m1,"%23").replace(g1,"%26").replace(E1,"`").replace(v1,"^").replace(_1,"%2F")}function Pu(t){return yh(t).replace(y1,"%3D")}function Lc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function I1(t){return Lc(t.replace(Gf," "))}function A1(t){return Lc(t.replace(Gf," "))}function tE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=I1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=A1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function R1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Pu(t)}=${yh(n)}`).join("&"):`${Pu(t)}=${yh(e)}`:Pu(t)}function S1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>R1(e,t[e])).filter(Boolean).join("&")}const P1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,C1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,k1=/^([/\\]\s*){2,}[^/\\]/,O1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,x1=/\/$|\/\?|\/#/,N1=/^\.?\//;function hr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?P1.test(t):C1.test(t)||(e.acceptRelative?k1.test(t):!1)}function D1(t){return!!t&&O1.test(t)}function vh(t="",e){return e?x1.test(t):t.endsWith("/")}function El(t="",e){if(!e)return(vh(t)?t.slice(0,-1):t)||"/";if(!vh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Mc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(vh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function L1(t=""){return t.startsWith("/")}function $m(t=""){return L1(t)?t:"/"+t}function M1(t,e){if(rE(e)||hr(t))return t;const n=El(e);return t.startsWith(n)?t:wl(n,t)}function Hm(t,e){if(rE(e))return t;const n=El(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function nE(t,e){const n=U1(t),r={...tE(n.search),...e};return n.search=S1(r),B1(n)}function rE(t){return!t||t==="/"}function V1(t){return t&&t!=="/"}function wl(t,...e){let n=t||"";for(const r of e.filter(s=>V1(s)))if(n){const s=r.replace(N1,"");n=Mc(n)+s}else n=r;return n}function sE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[f,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&hr(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function F1(t,e,n={}){return n.trailingSlash||(t=Mc(t),e=Mc(e)),n.leadingSlash||(t=$m(t),e=$m(e)),n.encoding||(t=Lc(t),e=Lc(e)),t===e}const iE=Symbol.for("ufo:protocolRelative");function U1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!hr(t,{acceptRelative:!0}))return qm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=qm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[iE]:!r}}function qm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function B1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[iE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class j1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function $1(t){var l,u,h,f,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((f=t.options)==null?void 0:f.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new j1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,R]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[R]}});return a}const H1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function zm(t="GET"){return H1.has(t.toUpperCase())}function q1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const z1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),W1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function K1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return W1.test(e)?"json":z1.has(e)||e.startsWith("text/")?"text":"blob"}function G1(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const Q1=new Set([408,409,425,429,500,502,503,504]),Y1=new Set([101,204,205,304]);function oE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=zm(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):Q1.has(f))){const p=a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=$1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:G1(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=M1(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=nE(h.request,{...h.options.params,...h.options.query}))),h.options.body&&zm(h.options.method)&&(q1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const R=new r;f=setTimeout(()=>R.abort(),h.options.timeout),h.options.signal=R.signal}try{h.response=await e(h.request,h.options)}catch(R){return h.error=R,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{f&&clearTimeout(f)}if(h.response.body&&!Y1.has(h.response.status)&&h.options.method!=="HEAD"){const R=(h.options.parseResponse?"json":h.options.responseType)||K1(h.response.headers.get("content-type")||"");switch(R){case"json":{const O=await h.response.text(),x=h.options.parseResponse||Ho;h.response._data=x(O);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[R]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>oE({...t,defaults:{...t.defaults,...a}}),o}const Qf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),X1=Qf.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),J1=Qf.Headers,Z1=Qf.AbortController,eR=oE({fetch:X1,Headers:J1,AbortController:Z1}),tR=eR,nR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Vc=nR().app,rR=()=>Vc.baseURL,sR=()=>Vc.buildAssetsDir,Yf=(...t)=>sE(Xf(),sR(),...t),Xf=(...t)=>{const e=Vc.cdnURL||Vc.baseURL;return t.length?sE(e,...t):e};globalThis.__buildAssetsURL=Yf,globalThis.__publicAssetsURL=Xf;globalThis.$fetch||(globalThis.$fetch=tR.create({baseURL:rR()}));function Eh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Eh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const iR={run:t=>t()},oR=()=>iR,aE=typeof console.createTask<"u"?console.createTask:oR;function aR(t,e){const n=e.shift(),r=aE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function cR(t,e){const n=e.shift(),r=aE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Cu(t,e){for(const n of[...t])n(e)}class lR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Eh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Eh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(aR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(cR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Cu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Cu(this._after,s)}):(this._after&&s&&Cu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function cE(){return new lR}function uR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;wh.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{wh.delete(u)}}}}function hR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=uR({...t,...r})),e[n],e[n]}}}const Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Wm="__unctx__",fR=Fc[Wm]||(Fc[Wm]=hR()),dR=(t,e={})=>fR.get(t,e),Km="__unctx_async_handlers__",wh=Fc[Km]||(Fc[Km]=new Set);function ci(t){const e=[];for(const s of wh){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const bh={name:"page",mode:"out-in"},pR=!1,mR=!1,gR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},_R=null,yR="#__nuxt",lE="nuxt-app",Gm=36e5;function uE(t=lE){return dR(t,{asyncContext:!1})}const vR="__nuxt_plugin";function ER(t){var s;let e=0;const n={_id:t.id||lE||"nuxt-app",_scope:Cf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.13.1"},get vue(){return n.vueApp.version}},payload:Gn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Gn({}),state:lr({}),once:new Set,_errors:Gn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!oa()?n._scope.run(()=>Qm(n,i)):Qm(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Gn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=cE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ya(n,a,o),Ya(n.vueApp.config.globalProperties,a,o)},Ya(n.vueApp,"$nuxt",n),Ya(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",o=>{n.callHook("app:chunkError",{error:o.payload})}),window.useNuxtApp=window.useNuxtApp||De;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function wR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function bR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function TR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(f=>e.some(p=>p._name===f)&&!n.includes(f)))??[];if(u.length>0)r.push([new Set(u),l]);else{const f=bR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(f.catch(p=>i.push(p))):await f}}for(const l of e)wR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[vR]:!0,_name:e})}function Qm(t,e,n){const r=()=>e();return uE(t._id).set(t),t.vueApp.runWithContext(r)}function IR(t){var n;let e;return $f()&&(e=(n=_l())==null?void 0:n.appContext.app.$nuxt),e=e||uE(t).tryUse(),e||null}function De(t){const e=IR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ds(t){return De().$config}function Ya(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function AR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||RR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=SR(u,s)}i=a+1}return n}function RR(t){return t.includes("%")?decodeURIComponent(t):t}function SR(t,e){try{return e(t)}catch{return t}}const Xa=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Ym(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Xa.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Xa.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Xa.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Xa.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!PR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function PR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Xm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Jm(t,e){e?e={...Xm,...e}:e=Xm;const n=hE(e);return n.dispatch(t),n.toString()}const CR=Object.freeze(["prototype","__proto__","constructor"]);function hE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!Zm(s)&&(h=CR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const f=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)f(p);for(const p of h)f(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=hE(t);u.dispatch(l);for(const[h,f]of u.getContext())o.set(h,f);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),Zm(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const fE="[native code] }",kR=fE.length;function Zm(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-kR)===fE}function OR(t,e,n={}){return t===e||Jm(t,n)===Jm(e,n)}function xR(t,e){return{ctx:{table:t},matchAll:n=>pE(n,t)}}function dE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,dE(s)])):new Map(Object.entries(t[n]));return e}function NR(t){return xR(dE(t))}function pE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of eg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of eg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...pE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function eg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function ku(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Th(t,e,n=".",r){if(!ku(e))return Th(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:ku(o)&&ku(s[i])?s[i]=Th(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function DR(t){return(...e)=>e.reduce((n,r)=>Th(n,r,"",t),{})}const mE=DR();function LR(t,e){try{return e in t}catch{return!1}}var MR=Object.defineProperty,VR=(t,e,n)=>e in t?MR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fs=(t,e,n)=>(VR(t,typeof e!="symbol"?e+"":e,n),n);class Ih extends Error{constructor(e,n={}){super(e,n),fs(this,"statusCode",500),fs(this,"fatal",!1),fs(this,"unhandled",!1),fs(this,"statusMessage"),fs(this,"data"),fs(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Rh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=gE(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}fs(Ih,"__h3_error__",!0);function Ah(t){if(typeof t=="string")return new Ih(t);if(FR(t))return t;const e=new Ih(t.message??t.statusMessage??"",{cause:t.cause||t});if(LR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Rh(t.statusCode,e.statusCode):t.status&&(e.statusCode=Rh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;gE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function FR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const UR=/[^\u0009\u0020-\u007E]/g;function gE(t=""){return t.replace(UR,"")}function Rh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const _E=Symbol("layout-meta"),ha=Symbol("route"),Et=()=>{var t;return(t=De())==null?void 0:t.$router},Jf=()=>$f()?Ot(ha,De()._route):De()._route;function XF(t){return t}const BR=()=>{try{if(De()._processingMiddleware)return!0}catch{return!1}return!1},jR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Sh(t):Et().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([f,p])=>p!==void 0).map(([f,p])=>`${f.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=hr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&D1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=BR();if(!s&&i)return t;const o=Et(),a=De();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Sh(t){return nE(t.path||"",t.query||{})+(t.hash||"")}const yE="__nuxt_error",bl=()=>_I(De().payload,"error"),Zs=t=>{const e=Tl(t);try{const n=De(),r=bl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},vE=async(t={})=>{const e=De(),n=bl();e.callHook("app:error:cleared",t),t.redirect&&await Et().replace(t.redirect),n.value=_R},$R=t=>!!t&&typeof t=="object"&&yE in t,Tl=t=>{const e=Ah(t);return Object.defineProperty(e,yE,{value:!0,configurable:!1,writable:!1}),e},HR=-1,qR=-2,zR=-3,WR=-4,KR=-5,GR=-6;function QR(t,e){return YR(JSON.parse(t),e)}function YR(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===HR)return;if(i===zR)return NaN;if(i===WR)return 1/0;if(i===KR)return-1/0;if(i===GR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const f=new Map;r[i]=f;for(let g=1;g<a.length;g+=2)f.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==qR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const XR=new Set(["title","titleTemplate","script","style","noscript"]),uc=new Set(["base","meta","link","style","script","noscript"]),JR=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),ZR=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),EE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),eS=typeof window<"u";function Uc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function tg(t){if(t._h)return t._h;if(t._d)return Uc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${t.props[n]},`;return Uc(e)}const tS=["name","property","http-equiv"];function wE(t){const{props:e,tag:n}=t;if(ZR.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of tS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}function ng(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function nS(t,e){return t instanceof Promise?t.then(e):e(t)}function Ph(t,e,n,r){const s=r||TE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Ph(t,e,n,o));const i={tag:t,props:s};for(const o of EE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||XR.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function rS(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function bE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=rS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,bE(t,e,n,s)));if(!e&&!EE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function TE(t,e=!1){const n=bE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const sS=10;function IE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,IE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function iS(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!JR.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Ph(s,o,t));continue}e.push(Ph(s,i,t))}}if(e.length===0)return[];const r=[];return nS(IE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<sS)+i,s)))}const rg={base:-10,title:10},sg={critical:-80,high:-10,low:20};function Bc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in rg&&(n=rg[t.tag]),e&&e in sg?n+sg[e]:n}const oS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],ig=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Sr="%separator";function aS(t,e){var r;let n;if(e==="s"||e==="pageTitle")n=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");n=(r=t[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else n=t[e];return n!==void 0?(n||"").replace(/"/g,'\\"'):void 0}const cS=new RegExp(`${Sr}(?:\\s*${Sr})*`,"g");function Ou(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const i=t.includes(Sr);return t=t.replace(/%\w+(?:\.\w+)?/g,o=>{if(o===Sr||!s.includes(o))return o;const a=aS(e,o.slice(1));return a!==void 0?a:o}).trim(),i&&(t.endsWith(Sr)&&(t=t.slice(0,-Sr.length)),t.startsWith(Sr)&&(t=t.slice(Sr.length)),t=t.replace(cS,n).trim()),t}async function AE(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(f=>({tag:f,id:uc.has(f.tag)?tg(f):f.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const p of["body","head"]){const g=(h=n[p])==null?void 0:h.children;for(const R of g){const O=R.tagName.toLowerCase();if(!uc.has(O))continue;const x={tag:O,props:await TE(R.getAttributeNames().reduce((A,D)=>({...A,[D]:R.getAttribute(D)}),{})),innerHTML:R.innerHTML},N=wE(x);let S=N,E=1;for(;S&&f.has(S);)S=`${N}:${E++}`;S&&(x._d=S,f.add(S)),i.elMap[R.getAttribute("data-hid")||tg(x)]=R}}}i.pendingSideEffects={...i.sideEffects},i.sideEffects={};function o(f,p,g){const R=`${f}:${p}`;i.sideEffects[R]=g,delete i.pendingSideEffects[R]}function a({id:f,$el:p,tag:g}){const R=g.tag.endsWith("Attrs");if(i.elMap[f]=p,R||(g.textContent&&g.textContent!==p.textContent&&(p.textContent=g.textContent),g.innerHTML&&g.innerHTML!==p.innerHTML&&(p.innerHTML=g.innerHTML),o(f,"el",()=>{var O;(O=i.elMap[f])==null||O.remove(),delete i.elMap[f]})),g._eventHandlers)for(const O in g._eventHandlers)Object.prototype.hasOwnProperty.call(g._eventHandlers,O)&&p.getAttribute(`data-${O}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:p).addEventListener(O.substring(2),g._eventHandlers[O].bind(p)),p.setAttribute(`data-${O}`,""));for(const O in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,O))continue;const x=g.props[O],N=`attr:${O}`;if(O==="class"){if(!x)continue;for(const S of x.split(" "))R&&o(f,`${N}:${S}`,()=>p.classList.remove(S)),!p.classList.contains(S)&&p.classList.add(S)}else if(O==="style"){if(!x)continue;for(const S of x.split(";")){const E=S.indexOf(":"),A=S.substring(0,E).trim(),D=S.substring(E+1).trim();o(f,`${N}:${A}`,()=>{p.style.removeProperty(A)}),p.style.setProperty(A,D)}}else p.getAttribute(O)!==x&&p.setAttribute(O,x===!0?"":String(x)),R&&o(f,N,()=>p.removeAttribute(O))}}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:p,shouldRender:g,id:R}=f;if(g){if(p.tag==="title"){n.title=p.textContent;continue}f.$el=f.$el||i.elMap[R],f.$el?a(f):uc.has(p.tag)&&l.push(f)}}for(const f of l){const p=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),u[p]=u[p]||n.createDocumentFragment(),u[p].appendChild(f.$el)}for(const f of s)await t.hooks.callHook("dom:renderTag",f,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const f in i.pendingSideEffects)i.pendingSideEffects[f]();t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}function lS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(()=>AE(t,e).then(()=>{delete t._domUpdatePromise,r()})))}function uS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{lS(i,t)}}}}}const hS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),fS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const n=wE(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&hS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Bc(r)>Bc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&uc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},dS={mode:"server",hooks:{"tags:resolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},pS=new Set(["script","link","bodyAttrs"]),mS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!pS.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&ig.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Uc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);ig.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),gS=new Set(["link","style","script","noscript"]),_S={hooks:{"tag:normalise":({tag:t})=>{t.key&&gS.has(t.tag)&&(t.props["data-hid"]=t._h=Uc(t.key))}}},yS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of oS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Bc(n),i=Bc(r);return s<i?-1:s>i?1:n._p-r._p})}}},vS={meta:"content",link:"href",htmlAttrs:"lang"},ES=["innerHTML","textContent"],wS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Ou(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=vS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Ou(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of ES)typeof a[u]=="string"&&(a[u]=Ou(a[u],s,i))}t._templateParams=s,t._separator=i}}}),bS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=ng(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=ng(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},TS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let RE;function IS(t={}){const e=AS(t);return e.use(uS()),RE=e}function og(t,e){return!t||t==="server"&&e||t==="client"&&!e}function AS(t={}){const e=cE();e.addHooks(t.hooks||{}),t.document=t.document||(eS?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),og(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return og(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(f=>f._i!==h._i),e.callHook("entries:updated",a),r()},patch(f){for(const p of i)p._i===h._i&&(p.input=h.input=f);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const f of await iS(u)){const p={tag:f,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[fS,dS,mS,_S,yS,wS,bS,TS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function RS(){return RE}const SS=Kv[0]==="3";function PS(t){return typeof t=="function"?t():tt(t)}function jc(t){if(t instanceof Promise)return t;const e=PS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>jc(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=tt(e[r]);continue}n[r]=jc(e[r])}return n}return e}const CS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=jc(e.input)}}},SE="usehead";function kS(t){return{install(n){SS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(SE,t))}}.install}function OS(t={}){t.domDelayFn=t.domDelayFn||(n=>Vn(()=>setTimeout(()=>n(),0)));const e=IS(t);return e.use(CS),e.install=kS(e),e}const Ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kh="__unhead_injection_handler__";function xS(t){Ch[kh]=t}function NS(){if(kh in Ch)return Ch[kh]();const t=Ot(SE);return t||RS()}function ag(t,e={}){const n=e.head||NS();if(n)return n.ssr?n.push(t,e):DS(n,t,e)}function DS(t,e,n={}){const r=zt(!1),s=zt({});oA(()=>{s.value=r.value?{}:jc(e)});const i=t.push(s.value,n);return gn(s,a=>{i.patch(a)}),_l()&&(la(()=>{i.dispose()}),dv(()=>{r.value=!0}),fv(()=>{r.value=!1})),i}let hc,fc;function LS(){return hc=$fetch(Yf(`builds/meta/${Ds().app.buildId}.json`),{responseType:"json"}),hc.then(t=>{fc=NR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),hc}function Il(){return hc||LS()}async function Zf(t){if(await Il(),!fc)return console.error("[nuxt] Error creating app manifest matcher.",fc),{};try{return mE({},...fc.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function cg(t,e={}){const n=await VS(t,e),r=De(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=CE(t).then(i=>i?PE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const MS="_payload.json";async function VS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||hr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ds(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await CE(t)?i:r.app.baseURL;return wl(o,n.pathname,MS+(s?`?${s}`:""))}async function PE(t){const e=fetch(t).then(n=>n.text().then(kE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function CE(t=Jf().path){if(t=El(t),(await Il()).prerendered.includes(t))return!0;const n=await Zf(t);return!!n.prerender&&!n.redirect}let us=null;async function FS(){var r;if(us)return us;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await kE(t.textContent||""),n=t.dataset.src?await PE(t.dataset.src):void 0;return us={...e,...n,...window.__NUXT__},(r=us.config)!=null&&r.public&&(us.config.public=lr(us.config.public)),us}async function kE(t){return await QR(t,De()._payloadRevivers)}function US(t,e){De()._payloadRevivers[t]=e}const lg={NuxtError:t=>Tl(t),EmptyShallowRef:t=>Do(t==="_"?void 0:t==="0n"?BigInt(0):Ho(t)),EmptyRef:t=>zt(t==="_"?void 0:t==="0n"?BigInt(0):Ho(t)),ShallowRef:t=>Do(t),ShallowReactive:t=>Gn(t),Ref:t=>zt(t),Reactive:t=>lr(t)},BS=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in lg)US(r,lg[r]);Object.assign(t.payload,([e,n]=ci(()=>t.runWithContext(FS)),e=await e,n(),e)),window.__NUXT__=t.payload}}),jS=[],$S=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=OS({plugins:jS});xS(()=>De().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await AE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof document<"u";function HS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function xu(t,e){const n={};for(const r in e){const s=e[r];n[r]=vn(s)?s.map(t):t(s)}return n}const Eo=()=>{},vn=Array.isArray,OE=/#/g,qS=/&/g,zS=/\//g,WS=/=/g,KS=/\?/g,xE=/\+/g,GS=/%5B/g,QS=/%5D/g,NE=/%5E/g,YS=/%60/g,DE=/%7B/g,XS=/%7C/g,LE=/%7D/g,JS=/%20/g;function ed(t){return encodeURI(""+t).replace(XS,"|").replace(GS,"[").replace(QS,"]")}function ZS(t){return ed(t).replace(DE,"{").replace(LE,"}").replace(NE,"^")}function Oh(t){return ed(t).replace(xE,"%2B").replace(JS,"+").replace(OE,"%23").replace(qS,"%26").replace(YS,"`").replace(DE,"{").replace(LE,"}").replace(NE,"^")}function eP(t){return Oh(t).replace(WS,"%3D")}function tP(t){return ed(t).replace(OE,"%23").replace(KS,"%3F")}function nP(t){return t==null?"":tP(t).replace(zS,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const rP=/\/$/,sP=t=>t.replace(rP,"");function Nu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=cP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qo(o)}}function iP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ug(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&yi(e.matched[r],n.matched[s])&&ME(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ME(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!aP(t[n],e[n]))return!1;return!0}function aP(t,e){return vn(t)?hg(t,e):vn(e)?hg(e,t):t===e}function hg(t,e){return vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zo;(function(t){t.pop="pop",t.push="push"})(zo||(zo={}));var wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wo||(wo={}));function lP(t){if(!t)if(Qs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),sP(t)}const uP=/^[^#]+#/;function hP(t,e){return t.replace(uP,"#")+e}function fP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Al=()=>({left:window.scrollX,top:window.scrollY});function dP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fg(t,e){return(history.state?history.state.position-e:-1)+t}const xh=new Map;function pP(t,e){xh.set(t,e)}function mP(t){const e=xh.get(t);return xh.delete(t),e}let gP=()=>location.protocol+"//"+location.host;function VE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ug(l,"")}return ug(n,t)+r+s}function _P(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=VE(t,location),R=n.value,O=e.value;let x=0;if(p){if(n.value=g,e.value=p,o&&o===R){o=null;return}x=O?p.position-O.position:0}else r(g);s.forEach(N=>{N(n.value,R,{delta:x,type:zo.pop,direction:x?x>0?wo.forward:wo.back:wo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(ke({},p.state,{scroll:Al()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function dg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Al():null}}function yP(t){const{history:e,location:n}=window,r={value:VE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:gP()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=ke({},e.state,dg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=ke({},s.value,e.state,{forward:l,scroll:Al()});i(h.current,h,!0);const f=ke({},dg(r.value,l,null),{position:h.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function FE(t){t=lP(t);const e=yP(t),n=_P(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:hP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),FE(t)}function EP(t){return typeof t=="string"||t&&typeof t=="object"}function UE(t){return typeof t=="string"||typeof t=="symbol"}const BE=Symbol("");var pg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pg||(pg={}));function vi(t,e){return ke(new Error,{type:t,[BE]:!0},e)}function Hn(t,e){return t instanceof Error&&BE in t&&(e==null||!!(t.type&e))}const mg="[^/]+?",wP={sensitive:!1,strict:!1,start:!0,end:!0},bP=/[.+*?^${}()[\]/\\]/g;function TP(t,e){const n=ke({},wP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(bP,"\\$&"),g+=40;else if(p.type===1){const{value:R,repeatable:O,optional:x,regexp:N}=p;i.push({name:R,repeatable:O,optional:x});const S=N||mg;if(S!==mg){g+=10;try{new RegExp(`(${S})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${R}" (${S}): `+A.message)}}let E=O?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=x&&u.length<2?`(?:/${E})`:"/"+E),x&&(E+="?"),s+=E,g+=20,x&&(g+=-8),O&&(g+=-20),S===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",R=i[p-1];f[R.name]=g&&R.repeatable?g.split("/"):g}return f}function l(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:R,repeatable:O,optional:x}=g,N=R in u?u[R]:"";if(vn(N)&&!O)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const S=vn(N)?N.join("/"):N;if(!S)if(x)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);h+=S}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function IP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=IP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gg(r))return 1;if(gg(s))return-1}return s.length-r.length}function gg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AP={type:0,value:""},RP=/[a-zA-Z0-9_]/;function SP(t){if(!t)return[[]];if(t==="/")return[[AP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:RP.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function PP(t,e,n){const r=TP(SP(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function CP(t,e){const n=[],r=new Map;e=vg({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const R=!g,O=kP(f);O.aliasOf=g&&g.record;const x=vg(e,f),N=[O];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of A)N.push(ke({},O,{components:g?g.record.components:O.components,path:D,aliasOf:g?g.record:O}))}let S,E;for(const A of N){const{path:D}=A;if(p&&D[0]!=="/"){const V=p.record.path,b=V[V.length-1]==="/"?"":"/";A.path=p.record.path+(D&&b+D)}if(S=PP(A,p,x),g?g.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),R&&f.name&&!yg(S)&&o(f.name)),$E(S)&&l(S),O.children){const V=O.children;for(let b=0;b<V.length;b++)i(V[b],S,g&&g.children[b])}g=g||S}return E?()=>{o(E)}:Eo}function o(f){if(UE(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const p=NP(f,n);n.splice(p,0,f),f.record.name&&!yg(f)&&r.set(f.record.name,f)}function u(f,p){let g,R={},O,x;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw vi(1,{location:f});x=g.record.name,R=ke(_g(p.params,g.keys.filter(E=>!E.optional).concat(g.parent?g.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&_g(f.params,g.keys.map(E=>E.name))),O=g.stringify(R)}else if(f.path!=null)O=f.path,g=n.find(E=>E.re.test(O)),g&&(R=g.parse(O),x=g.record.name);else{if(g=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!g)throw vi(1,{location:f,currentLocation:p});x=g.record.name,R=ke({},p.params,f.params),O=g.stringify(R)}const N=[];let S=g;for(;S;)N.unshift(S.record),S=S.parent;return{name:x,path:O,params:R,matched:N,meta:xP(N)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function _g(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:OP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function OP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function yg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xP(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function vg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function NP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;jE(t,e[i])<0?r=i:n=i+1}const s=DP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function DP(t){let e=t;for(;e=e.parent;)if($E(e)&&jE(t,e)===0)return e}function $E({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function LP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xE," "),o=i.indexOf("="),a=qo(o<0?i:i.slice(0,o)),l=o<0?null:qo(i.slice(o+1));if(a in e){let u=e[a];vn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Eg(t){let e="";for(let n in t){const r=t[n];if(n=eP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(r)?r.map(i=>i&&Oh(i)):[r&&Oh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=vn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const VP=Symbol(""),wg=Symbol(""),td=Symbol(""),nd=Symbol(""),Nh=Symbol("");function to(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(vi(4,{from:n,to:e})):p instanceof Error?l(p):EP(p)?l(vi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function Du(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(FP(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Pr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=HS(h)?h.default:h;o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Pr(g,n,r,o,a,s)()}))}}return i}function FP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bg(t){const e=Ot(td),n=Ot(nd),r=Ve(()=>{const l=tt(t.to);return e.resolve(l)}),s=Ve(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(yi.bind(null,h));if(p>-1)return p;const g=Tg(l[u-2]);return u>1&&Tg(h)===g&&f[f.length-1].path!==g?f.findIndex(yi.bind(null,l[u-2])):p}),i=Ve(()=>s.value>-1&&$P(n.params,r.value.params)),o=Ve(()=>s.value>-1&&s.value===n.matched.length-1&&ME(n.params,r.value.params));function a(l={}){return jP(l)?e[tt(t.replace)?"replace":"push"](tt(t.to)).catch(Eo):Promise.resolve()}return{route:r,href:Ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const UP=Fn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bg,setup(t,{slots:e}){const n=lr(bg(t)),{options:r}=Ot(td),s=Ve(()=>({[Ig(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ig(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),BP=UP;function jP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $P(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!vn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Tg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ig=(t,e,n)=>t??e??n,HP=Fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ot(Nh),s=Ve(()=>t.route||r.value),i=Ot(wg,0),o=Ve(()=>{let u=tt(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Ve(()=>s.value.matched[o.value]);vs(wg,Ve(()=>o.value+1)),vs(VP,a),vs(Nh,s);const l=zt();return gn(()=>[l.value,a.value,t.name],([u,h,f],[p,g,R])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!yi(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return Ag(n.default,{Component:p,route:u});const g=f.props[h],R=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=yt(p,ke({},R,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return Ag(n.default,{Component:x,route:u})||x}}});function Ag(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const HE=HP;function qP(t){const e=CP(t.routes,t),n=t.parseQuery||LP,r=t.stringifyQuery||Eg,s=t.history,i=to(),o=to(),a=to(),l=Do(hn);let u=hn;Qs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=xu.bind(null,B=>""+B),f=xu.bind(null,nP),p=xu.bind(null,qo);function g(B,Z){let Y,ee;return UE(B)?(Y=e.getRecordMatcher(B),ee=Z):ee=B,e.addRoute(ee,Y)}function R(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function O(){return e.getRoutes().map(B=>B.record)}function x(B){return!!e.getRecordMatcher(B)}function N(B,Z){if(Z=ke({},Z||l.value),typeof B=="string"){const k=Nu(n,B,Z.path),M=e.resolve({path:k.path},Z),j=s.createHref(k.fullPath);return ke(k,M,{params:p(M.params),hash:qo(k.hash),redirectedFrom:void 0,href:j})}let Y;if(B.path!=null)Y=ke({},B,{path:Nu(n,B.path,Z.path).path});else{const k=ke({},B.params);for(const M in k)k[M]==null&&delete k[M];Y=ke({},B,{params:f(k)}),Z.params=f(Z.params)}const ee=e.resolve(Y,Z),Ee=B.hash||"";ee.params=h(p(ee.params));const xe=iP(r,ke({},B,{hash:ZS(Ee),path:ee.path})),I=s.createHref(xe);return ke({fullPath:xe,hash:Ee,query:r===Eg?MP(B.query):B.query||{}},ee,{redirectedFrom:void 0,href:I})}function S(B){return typeof B=="string"?Nu(n,B,l.value.path):ke({},B)}function E(B,Z){if(u!==B)return vi(8,{from:Z,to:B})}function A(B){return b(B)}function D(B){return A(ke(S(B),{replace:!0}))}function V(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ee=typeof Y=="function"?Y(B):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=S(ee):{path:ee},ee.params={}),ke({query:B.query,hash:B.hash,params:ee.path!=null?{}:B.params},ee)}}function b(B,Z){const Y=u=N(B),ee=l.value,Ee=B.state,xe=B.force,I=B.replace===!0,k=V(Y);if(k)return b(ke(S(k),{state:typeof k=="object"?ke({},Ee,k.state):Ee,force:xe,replace:I}),Z||Y);const M=Y;M.redirectedFrom=Z;let j;return!xe&&oP(r,ee,Y)&&(j=vi(16,{to:M,from:ee}),tn(ee,ee,!0,!1)),(j?Promise.resolve(j):w(M,ee)).catch(U=>Hn(U)?Hn(U,2)?U:ln(U):ie(U,M,ee)).then(U=>{if(U){if(Hn(U,2))return b(ke({replace:I},S(U.to),{state:typeof U.to=="object"?ke({},Ee,U.to.state):Ee,force:xe}),Z||M)}else U=P(M,ee,!0,I,Ee);return C(M,ee,U),U})}function y(B,Z){const Y=E(B,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(B){const Z=dr.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function w(B,Z){let Y;const[ee,Ee,xe]=zP(B,Z);Y=Du(ee.reverse(),"beforeRouteLeave",B,Z);for(const k of ee)k.leaveGuards.forEach(M=>{Y.push(Pr(M,B,Z))});const I=y.bind(null,B,Z);return Y.push(I),Bt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(Pr(k,B,Z));return Y.push(I),Bt(Y)}).then(()=>{Y=Du(Ee,"beforeRouteUpdate",B,Z);for(const k of Ee)k.updateGuards.forEach(M=>{Y.push(Pr(M,B,Z))});return Y.push(I),Bt(Y)}).then(()=>{Y=[];for(const k of xe)if(k.beforeEnter)if(vn(k.beforeEnter))for(const M of k.beforeEnter)Y.push(Pr(M,B,Z));else Y.push(Pr(k.beforeEnter,B,Z));return Y.push(I),Bt(Y)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),Y=Du(xe,"beforeRouteEnter",B,Z,_),Y.push(I),Bt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(Pr(k,B,Z));return Y.push(I),Bt(Y)}).catch(k=>Hn(k,8)?k:Promise.reject(k))}function C(B,Z,Y){a.list().forEach(ee=>_(()=>ee(B,Z,Y)))}function P(B,Z,Y,ee,Ee){const xe=E(B,Z);if(xe)return xe;const I=Z===hn,k=Qs?history.state:{};Y&&(ee||I?s.replace(B.fullPath,ke({scroll:I&&k&&k.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,tn(B,Z,Y,I),ln()}let T;function me(){T||(T=s.listen((B,Z,Y)=>{if(!wn.listening)return;const ee=N(B),Ee=V(ee);if(Ee){b(ke(Ee,{replace:!0}),ee).catch(Eo);return}u=ee;const xe=l.value;Qs&&pP(fg(xe.fullPath,Y.delta),Al()),w(ee,xe).catch(I=>Hn(I,12)?I:Hn(I,2)?(b(I.to,ee).then(k=>{Hn(k,20)&&!Y.delta&&Y.type===zo.pop&&s.go(-1,!1)}).catch(Eo),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ie(I,ee,xe))).then(I=>{I=I||P(ee,xe,!1),I&&(Y.delta&&!Hn(I,8)?s.go(-Y.delta,!1):Y.type===zo.pop&&Hn(I,20)&&s.go(-1,!1)),C(ee,xe,I)}).catch(Eo)}))}let ye=to(),J=to(),te;function ie(B,Z,Y){ln(B);const ee=J.list();return ee.length?ee.forEach(Ee=>Ee(B,Z,Y)):console.error(B),Promise.reject(B)}function We(){return te&&l.value!==hn?Promise.resolve():new Promise((B,Z)=>{ye.add([B,Z])})}function ln(B){return te||(te=!B,me(),ye.list().forEach(([Z,Y])=>B?Y(B):Z()),ye.reset()),B}function tn(B,Z,Y,ee){const{scrollBehavior:Ee}=t;if(!Qs||!Ee)return Promise.resolve();const xe=!Y&&mP(fg(B.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return Vn().then(()=>Ee(B,Z,xe)).then(I=>I&&dP(I)).catch(I=>ie(I,B,Z))}const Ke=B=>s.go(B);let Ge;const dr=new Set,wn={currentRoute:l,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:O,resolve:N,options:t,push:A,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:We,install(B){const Z=this;B.component("RouterLink",BP),B.component("RouterView",HE),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(l)}),Qs&&!Ge&&l.value===hn&&(Ge=!0,A(s.location).catch(Ee=>{}));const Y={};for(const Ee in hn)Object.defineProperty(Y,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(td,Z),B.provide(nd,Gn(Y)),B.provide(Nh,l);const ee=B.unmount;dr.add(B),B.unmount=function(){dr.delete(B),dr.size<1&&(u=hn,T&&T(),T=null,l.value=hn,Ge=!1,te=!1),ee()}}};function Bt(B){return B.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return wn}function zP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>yi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>yi(u,l))||s.push(l))}return[n,r,s]}function WP(t){return Ot(nd)}const KP=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Dh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&KP(t.route,n));return typeof r=="function"?r(t.route):r},GP=(t,e)=>({default:()=>t?yt(NI,t===!0?{}:t,e):e});function rd(t){return Array.isArray(t)?t:[t]}const QP="modulepreload",YP=function(t,e){return new URL(t,e).href},Rg={},XP=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=YP(l,r),l in Rg)return;Rg[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const R=i[g];if(R.href===l&&(!u||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":QP,u||(p.as="script"),p.crossOrigin="",p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((g,R)=>{p.addEventListener("load",g),p.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ce=(...t)=>XP(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),JP={middleware:"auth"},ZP={middleware:"auth"},eC={middleware:"auth"},Lu=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Ce(()=>import("./E-B0J6p1.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Ce(()=>import("./w4jVbc50.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Ce(()=>import("./BhhoBMrG.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Home",path:"/Admin/Home",meta:JP||{},component:()=>Ce(()=>import("./B-TC8uOw.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default||t)},{name:"Admin",path:"/Admin",meta:ZP||{},component:()=>Ce(()=>import("./I7uxATLv.js"),__vite__mapDeps([3,4]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Ce(()=>import("./B68_R0lc.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Ce(()=>import("./BL_J9ONy.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:eC||{},component:()=>Ce(()=>import("./BszGO-75.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Ce(()=>import("./BgQDZbnR.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Ce(()=>import("./BxOpIzpo.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Ce(()=>import("./B3cF9viU.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Ce(()=>import("./DRI9gLgf.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Ce(()=>import("./CTzMdOBX.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Bio",path:"/Bio",component:()=>Ce(()=>import("./CoGgHlgq.js"),__vite__mapDeps([12,13]),import.meta.url).then(t=>t.default||t)},{name:"Contact",path:"/Contact",component:()=>Ce(()=>import("./-po-wLuK.js"),__vite__mapDeps([14,15]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Ce(()=>import("./BiJ6d7az.js"),__vite__mapDeps([16,8,9,17]),import.meta.url).then(t=>t.default||t)},{name:"ForSale",path:"/ForSale",component:()=>Ce(()=>import("./DEYtQEF4.js"),__vite__mapDeps([18,19]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Ce(()=>import("./BKcfdV88.js"),__vite__mapDeps([20,8,9]),import.meta.url).then(t=>t.default||t)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Ce(()=>import("./Djle4yLk.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",component:()=>Ce(()=>import("./D47Vzfur.js"),__vite__mapDeps([21,1,22]),import.meta.url).then(t=>t.default||t)},{name:"Login",path:"/Login",component:()=>Ce(()=>import("./CtOCpOR1.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Ce(()=>import("./QlzXYazu.js"),__vite__mapDeps([23,8,9,24]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Ce(()=>import("./Ds9k2XPf.js"),__vite__mapDeps([25,8,9,26]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Ce(()=>import("./OZNxI520.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio",path:"/Portfolio",component:()=>Ce(()=>import("./DqPds12i.js"),__vite__mapDeps([27,28]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Ce(()=>import("./DsvLcpKG.js"),__vite__mapDeps([29,8,9]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Ce(()=>import("./BWuMPQi1.js"),__vite__mapDeps([30,8,9]),import.meta.url).then(t=>t.default||t)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Ce(()=>import("./93egYGg5.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Stuff",path:"/Stuff",component:()=>Ce(()=>import("./Bnt38UDO.js"),__vite__mapDeps([31,8,9]),import.meta.url).then(t=>t.default||t)}],qE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?yt(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Sg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function tC(t,e){return t===e||e===hn?!1:Sg(t)!==Sg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const nC={scrollBehavior(t,e,n){var u;const r=De(),s=((u=Et().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&tC(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Pg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??bh),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(i={el:t.hash,top:Pg(t.hash),behavior:s}),h(i)})})}};function Pg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const rC={hashMode:!1,scrollBehaviorType:"auto"},sn={...rC,...nC},sC=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=De(),s=Et(),i=([e,n]=ci(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Tl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Zs(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},iC=async t=>{let e,n;const r=([e,n]=ci(()=>Zf(t.path)),e=await e,n(),e);if(r.redirect)return hr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},oC=[sC,iC],bo={auth:()=>Ce(()=>import("./DKn5D3so.js"),[],import.meta.url)};function aC(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Hm(h,"")}const a=Hm(r,t),l=!n||F1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const cC=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var x;let e,n,r=Ds().app.baseURL;sn.hashMode&&!r.includes("#")&&(r+="#");const s=((x=sn.history)==null?void 0:x.call(sn,r))??(sn.hashMode?vP(r):FE(r)),i=sn.routes?([e,n]=ci(()=>sn.routes(Lu)),e=await e,n(),e??Lu):Lu;let o;const a=qP({...sn,scrollBehavior:(N,S,E)=>{if(S===hn){o=E;return}if(sn.scrollBehavior){if(a.options.scrollBehavior=sn.scrollBehavior,"scrollRestoration"in window.history){const A=a.beforeEach(()=>{A(),window.history.scrollRestoration="manual"})}return sn.scrollBehavior(N,hn,o||E)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Do(a.currentRoute.value);a.afterEach((N,S)=>{l.value=S}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=aC(r,window.location,t.payload.path),h=Do(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((N,S)=>{var E,A,D,V;((A=(E=N.matched[0])==null?void 0:E.components)==null?void 0:A.default)===((V=(D=S.matched[0])==null?void 0:D.components)==null?void 0:V.default)&&f()});const p={};for(const N in h.value)Object.defineProperty(p,N,{get:()=>h.value[N]});t._route=Gn(p),t._middleware=t._middleware||{global:[],named:{}};const g=bl();a.afterEach(async(N,S,E)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(vE),E&&await t.callHook("page:loading:end"),N.matched.length===0&&await t.runWithContext(()=>Zs(Ah({statusCode:404,fatal:!1,statusMessage:`Page not found: ${N.fullPath}`,data:{path:N.fullPath}})))});try{[e,n]=ci(()=>a.isReady()),await e,n()}catch(N){[e,n]=ci(()=>t.runWithContext(()=>Zs(N))),await e,n()}const R=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const O=t.payload.state._layout;return a.beforeEach(async(N,S)=>{var E;await t.callHook("page:loading:start"),N.meta=lr(N.meta),t.isHydrating&&O&&!zr(N.meta.layout)&&(N.meta.layout=O),t._processingMiddleware=!0;{const A=new Set([...oC,...t._middleware.global]);for(const D of N.matched){const V=D.meta.middleware;if(V)for(const b of rd(V))A.add(b)}{const D=await t.runWithContext(()=>Zf(N.path));if(D.appMiddleware)for(const V in D.appMiddleware)D.appMiddleware[V]?A.add(V):A.delete(V)}for(const D of A){const V=typeof D=="string"?t._middleware.named[D]||await((E=bo[D])==null?void 0:E.call(bo).then(y=>y.default||y)):D;if(!V)throw new Error(`Unknown route middleware: '${D}'.`);const b=await t.runWithContext(()=>V(N,S));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const y=b||Ah({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Zs(y)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in R&&(R.name=void 0),await a.replace({...R,force:!0}),a.options.scrollBehavior=sn.scrollBehavior}catch(N){await t.runWithContext(()=>Zs(N))}}),{provide:{router:a}}}}),Lh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),lC=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Rl=t=>{const e=De();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Lh(()=>t())}):Lh(()=>t())},uC=Zt({name:"nuxt:payload",setup(t){Et().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await cg(e.path);r&&Object.assign(t.static.data,r.data)}),Rl(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await cg(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Il,1e3)})}}),hC=Zt(()=>{const t=Et();Rl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),fC=Zt(t=>{let e;async function n(){const r=await Il();e&&clearTimeout(e),e=setTimeout(n,Gm);try{const s=await $fetch(Yf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Rl(()=>{e=setTimeout(n,Gm)})});function dC(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ho(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:De().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const pC=Zt({name:"nuxt:chunk-reload",setup(t){const e=Et(),n=Ds(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:wl(n.app.baseURL,i.fullPath);dC({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),mC=Zt({name:"nuxt:global-components"}),Lr={default:()=>Ce(()=>import("./Dt2-WT0x.js"),__vite__mapDeps([32,6,1,33]),import.meta.url).then(t=>t.default||t)},gC=Zt({name:"nuxt:prefetch",setup(t){const e=Et();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Lr[r]=="function"&&await Lr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(hr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=rd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof bo[o]=="function"&&bo[o]();s&&typeof Lr[s]=="function"&&Lr[s]()})}});var Cg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_C=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},WE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_C(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new yC;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vC=function(t){const e=zE(t);return WE.encodeByteArray(e,!0)},$c=function(t){return vC(t).replace(/\./g,"")},KE=function(t){try{return WE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function EC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wC=()=>EC().__FIREBASE_DEFAULTS__,bC=()=>{if(typeof process>"u"||typeof Cg>"u")return;const t=Cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&KE(t[1]);return e&&JSON.parse(e)},Sl=()=>{try{return wC()||bC()||TC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},GE=t=>{var e,n;return(n=(e=Sl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QE=t=>{const e=GE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},YE=()=>{var t;return(t=Sl())===null||t===void 0?void 0:t.config},XE=t=>{var e;return(e=Sl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function JE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function RC(){var t;const e=(t=Sl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function SC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CC(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kC(){return!RC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function OC(){try{return typeof indexedDB=="object"}catch{return!1}}function xC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NC,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?DC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Un(s,a,r)}}function DC(t,e){return t.replace(LC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LC=/\{\$([^}]+)}/g;function MC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kg(i)&&kg(o)){if(!Hc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VC(t,e){const n=new FC(t,e);return n.subscribe.bind(n)}class FC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mu),s.error===void 0&&(s.error=Mu),s.complete===void 0&&(s.complete=Mu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mu(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($C(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(t){return t===ds?void 0:t}function $C(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const qC={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},zC=we.INFO,WC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},KC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=zC,this._logHandler=KC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const GC=(t,e)=>e.some(n=>t instanceof n);let Og,xg;function QC(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZE=new WeakMap,Mh=new WeakMap,ew=new WeakMap,Vu=new WeakMap,id=new WeakMap;function XC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ZE.set(n,t)}).catch(()=>{}),id.set(e,t),e}function JC(t){if(Mh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Mh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ew.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZC(t){Vh=t(Vh)}function ek(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fu(this),e,...n);return ew.set(r,e.sort?e.sort():[e]),Ur(r)}:YC().includes(t)?function(...e){return t.apply(Fu(this),e),Ur(ZE.get(this))}:function(...e){return Ur(t.apply(Fu(this),e))}}function tk(t){return typeof t=="function"?ek(t):(t instanceof IDBTransaction&&JC(t),GC(t,QC())?new Proxy(t,Vh):t)}function Ur(t){if(t instanceof IDBRequest)return XC(t);if(Vu.has(t))return Vu.get(t);const e=tk(t);return e!==t&&(Vu.set(t,e),id.set(e,t)),e}const Fu=t=>id.get(t);function nk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rk=["get","getKey","getAll","getAllKeys","count"],sk=["put","add","delete","clear"],Uu=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uu.get(e))return Uu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Uu.set(e,i),i}ZC(t=>({...t,get:(e,n,r)=>Ng(e,n)||t.get(e,n,r),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ok(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",Dg="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new sd("@firebase/app"),ak="@firebase/app-compat",ck="@firebase/analytics-compat",lk="@firebase/analytics",uk="@firebase/app-check-compat",hk="@firebase/app-check",fk="@firebase/auth",dk="@firebase/auth-compat",pk="@firebase/database",mk="@firebase/database-compat",gk="@firebase/functions",_k="@firebase/functions-compat",yk="@firebase/installations",vk="@firebase/installations-compat",Ek="@firebase/messaging",wk="@firebase/messaging-compat",bk="@firebase/performance",Tk="@firebase/performance-compat",Ik="@firebase/remote-config",Ak="@firebase/remote-config-compat",Rk="@firebase/storage",Sk="@firebase/storage-compat",Pk="@firebase/firestore",Ck="@firebase/vertexai-preview",kk="@firebase/firestore-compat",Ok="firebase",xk="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="[DEFAULT]",Nk={[Fh]:"fire-core",[ak]:"fire-core-compat",[lk]:"fire-analytics",[ck]:"fire-analytics-compat",[hk]:"fire-app-check",[uk]:"fire-app-check-compat",[fk]:"fire-auth",[dk]:"fire-auth-compat",[pk]:"fire-rtdb",[mk]:"fire-rtdb-compat",[gk]:"fire-fn",[_k]:"fire-fn-compat",[yk]:"fire-iid",[vk]:"fire-iid-compat",[Ek]:"fire-fcm",[wk]:"fire-fcm-compat",[bk]:"fire-perf",[Tk]:"fire-perf-compat",[Ik]:"fire-rc",[Ak]:"fire-rc-compat",[Rk]:"fire-gcs",[Sk]:"fire-gcs-compat",[Pk]:"fire-fst",[kk]:"fire-fst-compat",[Ck]:"fire-vertex","fire-js":"fire-js",[Ok]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Map,Dk=new Map,Bh=new Map;function Lg(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(Bh.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Bh.set(e,t);for(const n of qc.values())Lg(n,t);for(const n of Dk.values())Lg(n,t);return!0}function Pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new fa("app","Firebase",Lk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=xk;function tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Br.create("bad-app-name",{appName:String(s)});if(n||(n=YE()),!n)throw Br.create("no-options");const i=qc.get(s);if(i){if(Hc(n,i.options)&&Hc(r,i.config))return i;throw Br.create("duplicate-app",{appName:s})}const o=new HC(s);for(const l of Bh.values())o.addComponent(l);const a=new Mk(n,r,o);return qc.set(s,a),a}function od(t=Uh){const e=qc.get(t);if(!e&&t===Uh&&YE())return tw();if(!e)throw Br.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let s=(r=Nk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}As(new Wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vk="firebase-heartbeat-database",Fk=1,Wo="firebase-heartbeat-store";let Bu=null;function nw(){return Bu||(Bu=nk(Vk,Fk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function Uk(t){try{const n=(await nw()).transaction(Wo),r=await n.objectStore(Wo).get(rw(t));return await n.done,r}catch(e){if(e instanceof Un)rr.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Mg(t,e){try{const r=(await nw()).transaction(Wo,"readwrite");await r.objectStore(Wo).put(e,rw(t)),await r.done}catch(n){if(n instanceof Un)rr.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function rw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bk=1024,jk=30*24*60*60*1e3;class $k{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vg(),{heartbeatsToSend:r,unsentEntries:s}=Hk(this._heartbeatsCache.heartbeats),i=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return rr.warn(n),""}}}function Vg(){return new Date().toISOString().substring(0,10)}function Hk(t,e=Bk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OC()?xC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fg(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){As(new Wr("platform-logger",e=>new ik(e),"PRIVATE")),As(new Wr("heartbeat",e=>new $k(e),"PRIVATE")),Pn(Fh,Dg,t),Pn(Fh,Dg,"esm2017"),Pn("fire-js","")}zk("");var Wk="firebase",Kk="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(Wk,Kk,"app");function ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gk=sw,iw=new fa("auth","Firebase",sw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new sd("@firebase/auth");function Qk(t,...e){zc.logLevel<=we.WARN&&zc.warn(`Auth (${Ls}): ${t}`,...e)}function dc(t,...e){zc.logLevel<=we.ERROR&&zc.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw cd(t,...e)}function Cn(t,...e){return cd(t,...e)}function ow(t,e,n){const r=Object.assign(Object.assign({},Gk()),{[e]:n});return new fa("auth","Firebase",r).create(e,{appName:t.name})}function jr(t){return ow(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iw.create(t,...e)}function fe(t,e,...n){if(!t)throw cd(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dc(e),new Error(e)}function sr(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yk(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yk()||SC()||"connection"in navigator)?navigator.onLine:!0}function Jk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=AC()||PC()}get(){return Xk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=new pa(3e4,6e4);function Ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ts(t,e,n,r,s={}){return cw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=da(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),aw.fetch()(lw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zk),e);try{const s=new nO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ja(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ow(t,h,u);En(t,h)}}catch(s){if(s instanceof Un)throw s;En(t,"network-request-failed",{message:String(s)})}}async function Cl(t,e,n,r,s={}){const i=await ts(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function lw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ld(t.config,s):`${t.config.apiScheme}://${s}`}function tO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),eO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Cn(t,e,r);return s.customData._tokenResponse=n,s}function Bg(t){return t!==void 0&&t.enterprise!==void 0}class rO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function sO(t,e){return ts(t,"GET","/v2/recaptchaConfig",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(t,e){return ts(t,"POST","/v1/accounts:delete",e)}async function uw(t,e){return ts(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oO(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=ud(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:To(ju(s.auth_time)),issuedAtTime:To(ju(s.iat)),expirationTime:To(ju(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dc("JWT malformed, contained fewer than 3 sections"),null;try{const s=KE(n);return s?JSON.parse(s):(dc("Failed to decode base64 JWT payload"),null)}catch(s){return dc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jg(t){const e=ud(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&aO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ko(t,uw(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hw(i.providerUserInfo):[],a=uO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $h(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function lO(t){const e=Je(t);await Wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hw(t){return t.map(e=>{var{providerId:n}=e,r=ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(t,e){const n=await cw(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=lw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",aw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fO(t,e){return ts(t,"POST","/v2/accounts:revokeToken",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new li;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $h(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oO(this,e)}reload(){return lO(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await Ko(this,iO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:A,isAnonymous:D,providerData:V,stsTokenManager:b}=n;fe(E&&b,e,"internal-error");const y=li.fromJSON(this.name,b);fe(typeof E=="string",e,"internal-error"),wr(f,e.name),wr(p,e.name),fe(typeof A=="boolean",e,"internal-error"),fe(typeof D=="boolean",e,"internal-error"),wr(g,e.name),wr(R,e.name),wr(O,e.name),wr(x,e.name),wr(N,e.name),wr(S,e.name);const _=new Xn({uid:E,auth:e,email:p,emailVerified:A,displayName:f,isAnonymous:D,photoURL:R,phoneNumber:g,tenantId:O,stsTokenManager:y,createdAt:N,lastLoginAt:S});return V&&Array.isArray(V)&&(_.providerData=V.map(w=>Object.assign({},w))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new li;s.updateFromServerResponse(n);const i=new Xn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new li;a.updateFromIdToken(r);const l=new Xn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $h(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function Jn(t){sr(t instanceof Function,"Expected a class definition");let e=$g.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$g.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fw.type="NONE";const Hg=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pc(this.userKey,s.apiKey,i),this.fullPersistenceKey=pc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(Jn(Hg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Jn(Hg);const o=pc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=Xn._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ui(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ui(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yw(e))return"Blackberry";if(vw(e))return"Webos";if(pw(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(_w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dw(t=Nt()){return/firefox\//i.test(t)}function pw(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(t=Nt()){return/crios\//i.test(t)}function gw(t=Nt()){return/iemobile/i.test(t)}function _w(t=Nt()){return/android/i.test(t)}function yw(t=Nt()){return/blackberry/i.test(t)}function vw(t=Nt()){return/webos/i.test(t)}function hd(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dO(t=Nt()){var e;return hd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pO(){return CC()&&document.documentMode===10}function Ew(t=Nt()){return hd(t)||_w(t)||vw(t)||yw(t)||/windows phone/i.test(t)||gw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e=[]){let n;switch(t){case"Browser":n=qg(Nt());break;case"Worker":n=`${qg(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class mO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gO(t,e={}){return ts(t,"GET","/v2/passwordPolicy",Ms(t,e))}/**
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
 */const _O=6;class yO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_O,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new mO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uw(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(jr(this));const n=e?Je(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gO(this),n=new yO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Qk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(t){return Je(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=VC(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EO(t){kl=t}function bw(t){return kl.loadJS(t)}function wO(){return kl.recaptchaEnterpriseScript}function bO(){return kl.gapiScript}function TO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const IO="recaptcha-enterprise",AO="NO_RECAPTCHA";class RO{constructor(e){this.type=IO,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{sO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new rO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Bg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(AO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=wO();l.length!==0&&(l+=a),bw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Wg(t,e,n,r=!1){const s=new RO(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kg(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t,e){const n=Pl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hc(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function PO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CO(t,e,n){const r=Ni(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Tw(e),{host:o,port:a}=kO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),OO()}function Tw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kO(t){const e=Tw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gg(o)}}}function Gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function xO(t,e){return ts(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}async function LO(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends fd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kg(e,n,"signInWithPassword",NO);case"emailLink":return DO(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kg(e,r,"signUpPassword",xO);case"emailLink":return LO(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO="http://localhost";class Rs extends fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ad(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:MO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FO(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class dd{constructor(e){var n,r,s,i,o,a;const l=oo(ao(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=VO((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FO(e);try{return new dd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dd.parseLink(n);return fe(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Iw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ma{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ma{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ma{constructor(){super("twitter.com")}static credential(e,n){return Rs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xn._fromIdTokenResponse(e,r,s),o=Qg(r);return new Ei({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qg(r);return new Ei({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends Un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Kc(e,n,r,s)}}function Aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(t,i,e,r):i})}async function UO(t,e,n=!1){const r=await Ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(t,e,n=!1){const{auth:r}=t;if(Qn(r.app))return Promise.reject(jr(r));const s="reauthenticate";try{const i=await Ko(t,Aw(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=ud(i.idToken);fe(o,r,"internal-error");const{sub:a}=o;return fe(t.uid===a,r,"user-mismatch"),Ei._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e,n=!1){if(Qn(t.app))return Promise.reject(jr(t));const r="signIn",s=await Aw(t,r,e),i=await Ei._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function jO(t,e){return Rw(Ni(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $O(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function HO(t,e,n){return Qn(t.app)?Promise.reject(jr(t)):jO(Je(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$O(t),r})}function qO(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function zO(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function WO(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function KO(t){return Je(t).signOut()}const Gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=1e3,QO=10;class Pw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pw.type="LOCAL";const YO=Pw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cw.type="SESSION";const kw=Cw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await XO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ol.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=pd("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function ZO(t){kn().location.href=t}/**
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
 */function Ow(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nx(){return Ow()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="firebaseLocalStorageDb",rx=1,Qc="firebaseLocalStorage",Nw="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function sx(){const t=indexedDB.deleteDatabase(xw);return new ga(t).toPromise()}function Hh(){const t=indexedDB.open(xw,rx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:Nw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await sx(),e(await Hh()))})})}async function Yg(t,e,n){const r=xl(t,!0).put({[Nw]:e,value:n});return new ga(r).toPromise()}async function ix(t,e){const n=xl(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=xl(t,!0).delete(e);return new ga(n).toPromise()}const ox=800,ax=3;class Dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ol._getInstance(nx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ex(),!this.activeServiceWorker)return;this.sender=new JO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hh();return await Yg(e,Gc,"1"),await Xg(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ix(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xl(s,!1).getAll();return new ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dw.type="LOCAL";const cx=Dw;new pa(3e4,6e4);/**
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
 */function lx(t,e){return e?Jn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ux(t){return Rw(t.auth,new md(t),t.bypassAuthState)}function hx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),BO(n,new md(t),t.bypassAuthState)}async function fx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),UO(n,new md(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ux;case"linkViaPopup":case"linkViaRedirect":return fx;case"reauthViaPopup":case"reauthViaRedirect":return hx;default:En(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=new pa(2e3,1e4);class ei extends Lw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dx.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="pendingRedirect",mc=new Map;class mx extends Lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mc.get(this.auth._key());if(!e){try{const r=await gx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mc.set(this.auth._key(),e)}return this.bypassAuthState||mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gx(t,e){const n=vx(e),r=yx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _x(t,e){mc.set(t._key(),e)}function yx(t){return Jn(t._redirectPersistence)}function vx(t){return pc(px,t.config.apiKey,t.name)}async function Ex(t,e,n=!1){if(Qn(t.app))return Promise.reject(jr(t));const r=Ni(t),s=lx(r,e),o=await new mx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=10*60*1e3;class bx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(t,e={}){return ts(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rx=/^https?/;async function Sx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ix(t);for(const n of e)try{if(Px(n))return}catch{}En(t,"unauthorized-domain")}function Px(t){const e=jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Rx.test(n))return!1;if(Ax.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Cx=new pa(3e4,6e4);function Zg(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kx(t){return new Promise((e,n)=>{var r,s,i;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(Cn(t,"network-request-failed"))},timeout:Cx.get()})}if(!((s=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const a=TO("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},bw(`${bO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gc=null,e})}let gc=null;function Ox(t){return gc=gc||kx(t),gc}/**
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
 */const xx=new pa(5e3,15e3),Nx="__/auth/iframe",Dx="emulator/auth/iframe",Lx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vx(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ld(e,Dx):`https://${t.config.authDomain}/${Nx}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=Mx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${da(r).slice(1)}`}async function Fx(t){const e=await Ox(t),n=kn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:Vx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=kn().setTimeout(()=>{i(o)},xx.get());function l(){kn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Ux={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bx=500,jx=600,$x="_blank",Hx="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qx(t,e,n,r=Bx,s=jx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ux),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Nt().toLowerCase();n&&(a=mw(u)?$x:n),dw(u)&&(e=e||Hx,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,R])=>`${p}${g}=${R},`,"");if(dO(u)&&a!=="_self")return zx(e||"",a),new e_(null);const f=window.open(e||"",a,h);fe(f,t,"popup-blocked");try{f.focus()}catch{}return new e_(f)}function zx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Wx="__/auth/handler",Kx="emulator/auth/handler",Gx=encodeURIComponent("fac");async function t_(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof Iw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ma){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${Gx}=${encodeURIComponent(l)}`:"";return`${Qx(t)}?${da(a).slice(1)}${u}`}function Qx({config:t}){return t.emulator?ld(t,Kx):`https://${t.authDomain}/${Wx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="webStorageSupport";class Yx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kw,this._completeRedirectFn=Ex,this._overrideRedirectResult=_x}async _openPopup(e,n,r,s){var i;sr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await t_(e,n,r,jh(),s);return qx(e,o,pd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await t_(e,n,r,jh(),s);return ZO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Fx(e),r=new bx(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($u,{type:$u},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$u];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ew()||pw()||hd()}}const Xx=Yx;var n_="@firebase/auth",r_="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function e2(t){As(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ww(t)},u=new vO(r,s,i,l);return PO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Wr("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new Jx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(n_,r_,Zx(t)),Pn(n_,r_,"esm2017")}/**
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
 */const t2=5*60,n2=XE("authIdTokenMaxAge")||t2;let s_=null;const r2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>n2)return;const s=n==null?void 0:n.token;s_!==s&&(s_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function s2(t=od()){const e=Pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SO(t,{popupRedirectResolver:Xx,persistence:[cx,YO,kw]}),r=XE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=r2(i.toString());zO(n,o,()=>o(n.currentUser)),qO(n,a=>o(a))}}const s=GE("auth");return s&&CO(n,`http://${s}`),n}function i2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}EO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",i2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});e2("Browser");function fn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=fn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:fn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=fn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=fn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(fn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(fn(i),fn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(fn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const o2={path:"/",watch:!0,decode:t=>Ho(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Za=window.cookieStore;function a2(t,e){var l;const n={...o2,...e};n.filter??(n.filter=u=>u===t);const r=i_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=fn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?u2(o,s,n.watch&&n.watch!=="shallow"):zt(o);{let u=null;try{!Za&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||OR(a.value,r[t])||(l2(t,a.value,n),r[t]=fn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},f=R=>{var x;const O=R.refresh?(x=i_(n))==null?void 0:x[t]:n.decode(R.value);p=!0,a.value=O,r[t]=fn(O),Vn(()=>{p=!1})};let p=!1;const g=!!oa();if(g&&Ac(()=>{p=!0,h(),u==null||u.close()}),Za){const R=O=>{const x=O.changed.find(S=>S.name===t),N=O.deleted.find(S=>S.name===t);x&&f({value:x.value}),N&&f({value:null})};Za.addEventListener("change",R),g&&Ac(()=>Za.removeEventListener("change",R))}else u&&(u.onmessage=({data:R})=>f(R));n.watch?gn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function i_(t={}){return AR(document.cookie,t)}function c2(t,e,n={}){return e==null?Ym(t,e,{...n,maxAge:-1}):Ym(t,e,n)}function l2(t,e,n={}){document.cookie=c2(t,e,n)}const o_=2147483647;function u2(t,e,n){let r,s,i=0;const o=n?zt(t):{value:t};return oa()&&Ac(()=>{s==null||s(),clearTimeout(r)}),dI((a,l)=>{n&&(s=gn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,f=h<o_?h:o_;r=setTimeout(()=>{if(i+=f,i<e)return u();o.value=void 0,l()},f)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function Vw(t,e=Et()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>Vw(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const h2=(...t)=>t.find(e=>e!==void 0);function f2(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return a_(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:a_(o,t.trailingSlash)}}function r(s){const i=Et(),o=Ds(),a=Ve(()=>!!s.target&&s.target!=="_self"),l=Ve(()=>{const O=s.to||s.href||"";return typeof O=="string"&&hr(O,{acceptRelative:!0})}),u=Fo("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,f=Ve(()=>{if(s.external)return!0;const O=s.to||s.href||"";return typeof O=="object"?!1:O===""||l.value}),p=Ve(()=>{const O=s.to||s.href||"";return f.value?O:n(O,i.resolve)}),g=f.value||h==null?void 0:h({...s,to:p}),R=Ve(()=>{var O;if(!p.value||l.value)return p.value;if(f.value){const x=typeof p.value=="object"&&"path"in p.value?Sh(p.value):p.value,N=typeof x=="object"?i.resolve(x).href:x;return n(N,i.resolve)}return typeof p.value=="object"?((O=i.resolve(p.value))==null?void 0:O.href)??null:n(wl(o.app.baseURL,p.value),i.resolve)});return{to:p,hasTarget:a,isAbsoluteUrl:l,isExternal:f,href:R,isActive:(g==null?void 0:g.isActive)??Ve(()=>p.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Ve(()=>p.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Ve(()=>i.resolve(p.value)),async navigate(){await jR(R.value,{replace:s.replace,external:f.value||a.value})}}}return Fn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=Et(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:f,isAbsoluteUrl:p}=r(s),g=zt(!1),R=zt(null),O=S=>{var E;R.value=s.custom?(E=S==null?void 0:S.$el)==null?void 0:E.nextElementSibling:S==null?void 0:S.$el};function x(S){var E,A;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===S:((E=s.prefetchOn)==null?void 0:E[S])??((A=t.prefetchOn)==null?void 0:A[S]))&&(s.prefetch??t.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!m2()}async function N(S=De()){if(g.value)return;g.value=!0;const E=typeof a.value=="string"?a.value:h.value?Sh(a.value):o.resolve(a.value).fullPath;await Promise.all([S.hooks.callHook("link:prefetch",E).catch(()=>{}),!h.value&&!f.value&&Vw(a.value,o).catch(()=>{})])}if(x("visibility")){const S=De();let E,A=null;ml(()=>{const D=p2();Rl(()=>{E=Lh(()=>{var V;(V=R==null?void 0:R.value)!=null&&V.tagName&&(A=D.observe(R.value,async()=>{A==null||A(),A=null,await N(S)}))})})}),la(()=>{E&&lC(E),A==null||A(),A=null})}return()=>{var A;if(!h.value&&!f.value){const D={ref:O,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(x("interaction")&&(D.onPointerenter=N.bind(null,void 0),D.onFocus=N.bind(null,void 0)),g.value&&(D.class=s.prefetchedClass||t.prefetchedClass),D.rel=s.rel||void 0),yt(Fo("RouterLink"),D,i.default)}const S=s.target||null,E=h2(s.noRel?"":s.rel,t.externalRelAttribute,p.value||f.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,prefetch:N,get route(){if(!l.value)return;const D=new URL(l.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return tE(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:E,target:S,isExternal:h.value||f.value,isActive:!1,isExactActive:!1}):null:yt("a",{ref:R,href:l.value||null,rel:E,target:S},(A=i.default)==null?void 0:A.call(i))}}})}const d2=f2(gR);function a_(t,e){const n=e==="append"?Mc:El;return hr(t)&&!t.startsWith("http")?t:n(t,!0)}function p2(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}function m2(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}var c_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ws,Fw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(w,C,P){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return y.prototype[C].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var w=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)w[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)w[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],C=b.g[2];var P=b.g[3],T=y+(P^_&(C^P))+w[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=P+(C^y&(_^C))+w[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(_^P&(y^_))+w[2]+606105819&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(y^C&(P^y))+w[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(P^_&(C^P))+w[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=P+(C^y&(_^C))+w[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(_^P&(y^_))+w[6]+2821735955&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(y^C&(P^y))+w[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(P^_&(C^P))+w[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=P+(C^y&(_^C))+w[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(_^P&(y^_))+w[10]+4294925233&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(y^C&(P^y))+w[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(P^_&(C^P))+w[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=P+(C^y&(_^C))+w[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(_^P&(y^_))+w[14]+2792965006&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(y^C&(P^y))+w[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^P&(_^C))+w[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(y^_))+w[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(P^y))+w[11]+643717713&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(C^P))+w[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^P&(_^C))+w[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(y^_))+w[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(P^y))+w[15]+3634488961&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(C^P))+w[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^P&(_^C))+w[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(y^_))+w[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(P^y))+w[3]+4107603335&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(C^P))+w[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^P&(_^C))+w[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(y^_))+w[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(P^y))+w[7]+1735328473&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(C^P))+w[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^P)+w[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^C)+w[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^_)+w[11]+1839030562&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^y)+w[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^P)+w[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^C)+w[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^_)+w[7]+4139469664&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^y)+w[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^P)+w[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^C)+w[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^_)+w[3]+3572445317&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^y)+w[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^P)+w[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^C)+w[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^_)+w[15]+530742520&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^y)+w[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~P))+w[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~C))+w[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~_))+w[14]+2878612391&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~y))+w[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~P))+w[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~C))+w[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~_))+w[10]+4293915773&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~y))+w[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~P))+w[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~C))+w[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~_))+w[6]+2734768916&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~y))+w[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~P))+w[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~C))+w[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~_))+w[2]+718787259&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+P&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,w=this.B,C=this.h,P=0;P<y;){if(C==0)for(;P<=_;)s(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<y;)if(w[C++]=b.charCodeAt(P++),C==this.blockSize){s(this,w),C=0;break}}else for(;P<y;)if(w[C++]=b[P++],C==this.blockSize){s(this,w),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var w=0;32>w;w+=8)b[_++]=this.g[y]>>>w&255;return b};function i(b,y){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],w=!0,C=b.length-1;0<=C;C--){var P=b[C]|0;w&&P==y||(_[C]=P,w=!1)}this.g=_}var a={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return x(u(-b));for(var y=[],_=1,w=0;b>=_;w++)y[w]=b/_|0,_*=4294967296;return new o(y,0)}function h(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return x(h(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),w=f,C=0;C<b.length;C+=8){var P=Math.min(8,b.length-C),T=parseInt(b.substring(C,C+P),y);8>P?(P=u(Math.pow(y,P)),w=w.j(P).add(u(T))):(w=w.j(_),w=w.add(u(T)))}return w}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-x(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var w=this.i(_);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(O(this))return"-"+x(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,w="";;){var C=A(_,y).g;_=N(_,C.j(y));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=C,R(_))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=N(this,b),O(b)?-1:R(b)?0:1};function x(b){for(var y=b.g.length,_=[],w=0;w<y;w++)_[w]=~b.g[w];return new o(_,~b.h).add(p)}t.abs=function(){return O(this)?x(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0,C=0;C<=y;C++){var P=w+(this.i(C)&65535)+(b.i(C)&65535),T=(P>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);w=T>>>16,P&=65535,T&=65535,_[C]=T<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(x(y))}t.j=function(b){if(R(this)||R(b))return f;if(O(this))return O(b)?x(this).j(x(b)):x(x(this).j(b));if(O(b))return x(this.j(x(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<b.g.length;C++){var P=this.i(w)>>>16,T=this.i(w)&65535,me=b.i(C)>>>16,ye=b.i(C)&65535;_[2*w+2*C]+=T*ye,S(_,2*w+2*C),_[2*w+2*C+1]+=P*ye,S(_,2*w+2*C+1),_[2*w+2*C+1]+=T*me,S(_,2*w+2*C+1),_[2*w+2*C+2]+=P*me,S(_,2*w+2*C+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function S(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function E(b,y){this.g=b,this.h=y}function A(b,y){if(R(y))throw Error("division by zero");if(R(b))return new E(f,f);if(O(b))return y=A(x(b),y),new E(x(y.g),x(y.h));if(O(y))return y=A(b,x(y)),new E(x(y.g),y.h);if(30<b.g.length){if(O(b)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,w=y;0>=w.l(b);)_=D(_),w=D(w);var C=V(_,1),P=V(w,1);for(w=V(w,2),_=V(_,2);!R(w);){var T=P.add(w);0>=T.l(b)&&(C=C.add(_),P=T),w=V(w,1),_=V(_,1)}return y=N(b,C.j(y)),new E(C,y)}for(C=f;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=u(_),T=P.j(y);O(T)||0<T.l(b);)_-=w,P=u(_),T=P.j(y);R(P)&&(P=p),C=C.add(P),b=N(b,T)}return new E(C,b)}t.A=function(b){return A(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)&b.i(w);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)|b.i(w);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)^b.i(w);return new o(_,this.h^b.h)};function D(b){for(var y=b.g.length+1,_=[],w=0;w<y;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(_,b.h)}function V(b,y){var _=y>>5;y%=32;for(var w=b.g.length-_,C=[],P=0;P<w;P++)C[P]=0<y?b.i(P+_)>>>y|b.i(P+_+1)<<32-y:b.i(P+_);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ws=o}).apply(typeof c_<"u"?c_:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uw,Bw,co,jw,_c,qh,$w,Hw,qw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,m){return c==Array.prototype||c==Object.prototype||(c[d]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var d=0;d<c.length;++d){var m=c[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,d){if(d)e:{var m=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var L=c[v];if(!(L in m))break e;m=m[L]}c=c[c.length-1],v=m[c],d=d(v),d!=v&&d!=null&&e(m,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var m=0,v=!1,L={next:function(){if(!v&&m<c.length){var F=m++;return{value:d(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function u(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,m){return c.call.apply(c.bind,arguments)}function f(c,d,m){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),c.apply(d,L)}}return function(){return c.apply(d,arguments)}}function p(c,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(c,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function R(c,d){function m(){}m.prototype=d.prototype,c.aa=d.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(v,L,F){for(var G=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)G[Me-2]=arguments[Me];return d.prototype[L].apply(v,G)}}function O(c){const d=c.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=c[v];return m}return[]}function x(c,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const L=c.length||0,F=v.length||0;c.length=L+F;for(let G=0;G<F;G++)c[L+G]=v[G]}else c.push(v)}}class N{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function S(c){return/^[\s\xa0]*$/.test(c)}function E(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function A(c){return A[" "](c),c}A[" "]=function(){};var D=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function V(c,d,m){for(const v in c)d.call(m,c[v],v,c)}function b(c,d){for(const m in c)d.call(void 0,c[m],m,c)}function y(c){const d={};for(const m in c)d[m]=c[m];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,d){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)c[m]=v[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(v,m)&&(c[m]=v[m])}}function C(c){var d=1;c=c.split(":");const m=[];for(;0<d&&c.length;)m.push(c.shift()),d--;return c.length&&m.push(c.join(":")),m}function P(c){a.setTimeout(()=>{throw c},0)}function T(){var c=We;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,m){const v=ye.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new N(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ie=!1,We=new me,ln=()=>{const c=a.Promise.resolve(void 0);te=()=>{c.then(tn)}};var tn=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){P(m)}var d=ye;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}ie=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var dr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return c}();function wn(c,d){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(D){e:{try{A(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else m=="mouseover"?d=c.fromElement:m=="mouseout"&&(d=c.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Bt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&wn.aa.h.call(this)}}R(wn,Ge);var Bt={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(c,d,m,v,L){this.listener=c,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=L,this.key=++Z,this.da=this.fa=!1}function ee(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ee(c){this.src=c,this.g={},this.h=0}Ee.prototype.add=function(c,d,m,v,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var G=I(c,d,v,L);return-1<G?(d=c[G],m||(d.fa=!1)):(d=new Y(d,this.src,F,!!v,L),d.fa=m,c.push(d)),d};function xe(c,d){var m=d.type;if(m in c.g){var v=c.g[m],L=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(ee(d),c.g[m].length==0&&(delete c.g[m],c.h--))}}function I(c,d,m,v){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==v)return L}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function j(c,d,m,v,L){if(Array.isArray(d)){for(var F=0;F<d.length;F++)j(c,d[F],m,v,L);return null}return m=oe(m),c&&c[B]?c.K(d,m,u(v)?!!v.capture:!!v,L):U(c,d,m,!1,v,L)}function U(c,d,m,v,L,F){if(!d)throw Error("Invalid event type");var G=u(L)?!!L.capture:!!L,Me=le(c);if(Me||(c[k]=Me=new Ee(c)),m=Me.add(d,m,v,G,F),m.proxy)return m;if(v=q(),m.proxy=v,v.src=c,v.listener=m,c.addEventListener)dr||(L=G),L===void 0&&(L=!1),c.addEventListener(d.toString(),v,L);else if(c.attachEvent)c.attachEvent(W(d.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return d.call(c.src,c.listener,m)}const d=z;return c}function Q(c,d,m,v,L){if(Array.isArray(d))for(var F=0;F<d.length;F++)Q(c,d[F],m,v,L);else v=u(v)?!!v.capture:!!v,m=oe(m),c&&c[B]?(c=c.i,d=String(d).toString(),d in c.g&&(F=c.g[d],m=I(F,m,v,L),-1<m&&(ee(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[d],c.h--)))):c&&(c=le(c))&&(d=c.g[d.toString()],c=-1,d&&(c=I(d,m,v,L)),(m=-1<c?d[c]:null)&&K(m))}function K(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[B])xe(d.i,c);else{var m=c.type,v=c.proxy;d.removeEventListener?d.removeEventListener(m,v,c.capture):d.detachEvent?d.detachEvent(W(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=le(d))?(xe(m,c),m.h==0&&(m.src=null,d[k]=null)):ee(c)}}}function W(c){return c in M?M[c]:M[c]="on"+c}function z(c,d){if(c.da)c=!0;else{d=new wn(d,this);var m=c.listener,v=c.ha||c.src;c.fa&&K(c),c=m.call(v,d)}return c}function le(c){return c=c[k],c instanceof Ee?c:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[X]||(c[X]=function(d){return c.handleEvent(d)}),c[X])}function ne(){Ke.call(this),this.i=new Ee(this),this.M=this,this.F=null}R(ne,Ke),ne.prototype[B]=!0,ne.prototype.removeEventListener=function(c,d,m,v){Q(this,c,d,m,v)};function he(c,d){var m,v=c.F;if(v)for(m=[];v;v=v.F)m.push(v);if(c=c.M,v=d.type||d,typeof d=="string")d=new Ge(d,c);else if(d instanceof Ge)d.target=d.target||c;else{var L=d;d=new Ge(v,c),w(d,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var G=d.g=m[F];L=Pe(G,v,!0,d)&&L}if(G=d.g=c,L=Pe(G,v,!0,d)&&L,L=Pe(G,v,!1,d)&&L,m)for(F=0;F<m.length;F++)G=d.g=m[F],L=Pe(G,v,!1,d)&&L}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var m=c.g[d],v=0;v<m.length;v++)ee(m[v]);delete c.g[d],c.h--}}this.F=null},ne.prototype.K=function(c,d,m,v){return this.i.add(String(c),d,!1,m,v)},ne.prototype.L=function(c,d,m,v){return this.i.add(String(c),d,!0,m,v)};function Pe(c,d,m,v){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,F=0;F<d.length;++F){var G=d[F];if(G&&!G.da&&G.capture==m){var Me=G.listener,dt=G.ha||G.src;G.fa&&xe(c.i,G),L=Me.call(dt,v)!==!1&&L}}return L&&!v.defaultPrevented}function Te(c,d,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function bt(c){c.g=Te(()=>{c.g=null,c.i&&(c.i=!1,bt(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class ht extends Ke{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:bt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(c){Ke.call(this),this.h=c,this.g={}}R(ft,Ke);var Tt=[];function pr(c){V(c.g,function(d,m){this.g.hasOwnProperty(m)&&K(d)},c),c.g={}}ft.prototype.N=function(){ft.aa.N.call(this),pr(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Us=a.JSON.stringify,Dt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Bs(){}Bs.prototype.h=null;function lp(c){return c.h||(c.h=c.i())}function up(){}var Ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tu(){Ge.call(this,"d")}R(tu,Ge);function nu(){Ge.call(this,"c")}R(nu,Ge);var rs={},hp=null;function Aa(){return hp=hp||new ne}rs.La="serverreachability";function fp(c){Ge.call(this,rs.La,c)}R(fp,Ge);function Bi(c){const d=Aa();he(d,new fp(d))}rs.STAT_EVENT="statevent";function dp(c,d){Ge.call(this,rs.STAT_EVENT,c),this.stat=d}R(dp,Ge);function Lt(c){const d=Aa();he(d,new dp(d,c))}rs.Ma="timingevent";function pp(c,d){Ge.call(this,rs.Ma,c),this.size=d}R(pp,Ge);function ji(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function iT(c,d,m,v,L,F){c.info(function(){if(c.g)if(F)for(var G="",Me=F.split("&"),dt=0;dt<Me.length;dt++){var Ie=Me[dt].split("=");if(1<Ie.length){var It=Ie[0];Ie=Ie[1];var At=It.split("_");G=2<=At.length&&At[1]=="type"?G+(It+"="+Ie+"&"):G+(It+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+d+`
`+m+`
`+G})}function oT(c,d,m,v,L,F,G){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+d+`
`+m+`
`+F+" "+G})}function js(c,d,m,v){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+cT(c,m)+(v?" "+v:"")})}function aT(c,d){c.info(function(){return"TIMEOUT: "+d})}$i.prototype.info=function(){};function cT(c,d){if(!c.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var v=m[c];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return Us(m)}catch{return d}}var Ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ru;function Sa(){}R(Sa,Bs),Sa.prototype.g=function(){return new XMLHttpRequest},Sa.prototype.i=function(){return{}},ru=new Sa;function mr(c,d,m,v){this.j=c,this.i=d,this.l=m,this.R=v||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gp}function gp(){this.i=null,this.g="",this.h=!1}var _p={},su={};function iu(c,d,m){c.L=1,c.v=Oa(Bn(d)),c.m=m,c.P=!0,yp(c,null)}function yp(c,d){c.F=Date.now(),Pa(c),c.A=Bn(c.v);var m=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),xp(m.i,"t",v),c.C=0,m=c.j.J,c.h=new gp,c.g=Yp(c.j,m?d:null,!c.m),0<c.O&&(c.M=new ht(p(c.Y,c,c.g),c.O)),d=c.U,m=c.g,v=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(Tt[0]=L.toString()),L=Tt);for(var F=0;F<L.length;F++){var G=j(m,L[F],v||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),Bi(),iT(c.i,c.u,c.A,c.l,c.R,c.m)}mr.prototype.ca=function(c){c=c.target;const d=this.M;d&&jn(c)==3?d.j():this.Y(c)},mr.prototype.Y=function(c){try{if(c==this.g)e:{const At=jn(this.g);var d=this.g.Ba();const qs=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Up(this.g)))){this.J||At!=4||d==7||(d==8||0>=qs?Bi(3):Bi(2)),ou(this);var m=this.g.Z();this.X=m;t:if(vp(this)){var v=Up(this.g);c="";var L=v.length,F=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ss(this),Hi(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,c+=this.h.i.decode(v[d],{stream:!(F&&d==L-1)});v.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,oT(this.i,this.u,this.A,this.l,this.R,At,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,dt=this.g;if((Me=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(Me)){var Ie=Me;break t}}Ie=null}if(m=Ie)js(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,au(this,m);else{this.o=!1,this.s=3,Lt(12),ss(this),Hi(this);break e}}if(this.P){m=!0;let un;for(;!this.J&&this.C<G.length;)if(un=lT(this,G),un==su){At==4&&(this.s=4,Lt(14),m=!1),js(this.i,this.l,null,"[Incomplete Response]");break}else if(un==_p){this.s=4,Lt(15),js(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else js(this.i,this.l,un,null),au(this,un);if(vp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||G.length!=0||this.h.h||(this.s=1,Lt(16),m=!1),this.o=this.o&&m,!m)js(this.i,this.l,G,"[Invalid Chunked Response]"),ss(this),Hi(this);else if(0<G.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),du(It),It.M=!0,Lt(11))}}else js(this.i,this.l,G,null),au(this,G);At==4&&ss(this),this.o&&!this.J&&(At==4?Wp(this.j,this):(this.o=!1,Pa(this)))}else RT(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),ss(this),Hi(this)}}}catch{}finally{}};function vp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function lT(c,d){var m=c.C,v=d.indexOf(`
`,m);return v==-1?su:(m=Number(d.substring(m,v)),isNaN(m)?_p:(v+=1,v+m>d.length?su:(d=d.slice(v,v+m),c.C=v+m,d)))}mr.prototype.cancel=function(){this.J=!0,ss(this)};function Pa(c){c.S=Date.now()+c.I,Ep(c,c.I)}function Ep(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ji(p(c.ba,c),d)}function ou(c){c.B&&(a.clearTimeout(c.B),c.B=null)}mr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(aT(this.i,this.A),this.L!=2&&(Bi(),Lt(17)),ss(this),this.s=2,Hi(this)):Ep(this,this.S-c)};function Hi(c){c.j.G==0||c.J||Wp(c.j,c)}function ss(c){ou(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,pr(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function au(c,d){try{var m=c.j;if(m.G!=0&&(m.g==c||cu(m.h,c))){if(!c.K&&cu(m.h,c)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Ma(m),Da(m);else break e;fu(m),Lt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=ji(p(m.Za,m),6e3));if(1>=Tp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else os(m,11)}else if((c.K||m.g==c)&&Ma(m),!S(d))for(L=m.Da.g.parse(d),d=0;d<L.length;d++){let Ie=L[d];if(m.T=Ie[0],Ie=Ie[1],m.G==2)if(Ie[0]=="c"){m.K=Ie[1],m.ia=Ie[2];const It=Ie[3];It!=null&&(m.la=It,m.j.info("VER="+m.la));const At=Ie[4];At!=null&&(m.Aa=At,m.j.info("SVER="+m.Aa));const qs=Ie[5];qs!=null&&typeof qs=="number"&&0<qs&&(v=1.5*qs,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const un=c.g;if(un){const Fa=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var F=v.h;F.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(lu(F,F.h),F.h=null))}if(v.D){const pu=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;pu&&(v.ya=pu,Be(v.I,v.D,pu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var G=c;if(v.qa=Qp(v,v.J?v.ia:null,v.W),G.K){Ip(v.h,G);var Me=G,dt=v.L;dt&&(Me.I=dt),Me.B&&(ou(Me),Pa(Me)),v.g=G}else qp(v);0<m.i.length&&La(m)}else Ie[0]!="stop"&&Ie[0]!="close"||os(m,7);else m.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?os(m,7):hu(m):Ie[0]!="noop"&&m.l&&m.l.ta(Ie),m.v=0)}}Bi(4)}catch{}}var uT=class{constructor(c,d){this.g=c,this.map=d}};function wp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Tp(c){return c.h?1:c.g?c.g.size:0}function cu(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function lu(c,d){c.g?c.g.add(d):c.h=d}function Ip(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}wp.prototype.cancel=function(){if(this.i=Ap(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ap(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const m of c.g.values())d=d.concat(m.D);return d}return O(c.i)}function hT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],m=c.length,v=0;v<m;v++)d.push(c[v]);return d}d=[],m=0;for(v in c)d[m++]=c[v];return d}function fT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var m=0;m<c;m++)d.push(m);return d}d=[],m=0;for(const v in c)d[m++]=v;return d}}}function Rp(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var m=fT(c),v=hT(c),L=v.length,F=0;F<L;F++)d.call(void 0,v[F],m&&m[F],c)}var Sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dT(c,d){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var v=c[m].indexOf("="),L=null;if(0<=v){var F=c[m].substring(0,v);L=c[m].substring(v+1)}else F=c[m];d(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function is(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof is){this.h=c.h,Ca(this,c.j),this.o=c.o,this.g=c.g,ka(this,c.s),this.l=c.l;var d=c.i,m=new Wi;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Pp(this,m),this.m=c.m}else c&&(d=String(c).match(Sp))?(this.h=!1,Ca(this,d[1]||"",!0),this.o=qi(d[2]||""),this.g=qi(d[3]||"",!0),ka(this,d[4]),this.l=qi(d[5]||"",!0),Pp(this,d[6]||"",!0),this.m=qi(d[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}is.prototype.toString=function(){var c=[],d=this.j;d&&c.push(zi(d,Cp,!0),":");var m=this.g;return(m||d=="file")&&(c.push("//"),(d=this.o)&&c.push(zi(d,Cp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(zi(m,m.charAt(0)=="/"?gT:mT,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",zi(m,yT)),c.join("")};function Bn(c){return new is(c)}function Ca(c,d,m){c.j=m?qi(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function ka(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Pp(c,d,m){d instanceof Wi?(c.i=d,vT(c.i,c.h)):(m||(d=zi(d,_T)),c.i=new Wi(d,c.h))}function Be(c,d,m){c.i.set(d,m)}function Oa(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function qi(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function zi(c,d,m){return typeof c=="string"?(c=encodeURI(c).replace(d,pT),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function pT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Cp=/[#\/\?@]/g,mT=/[#\?:]/g,gT=/[#\?]/g,_T=/[#\?@]/g,yT=/#/g;function Wi(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function gr(c){c.g||(c.g=new Map,c.h=0,c.i&&dT(c.i,function(d,m){c.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Wi.prototype,t.add=function(c,d){gr(this),this.i=null,c=$s(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(d),this.h+=1,this};function kp(c,d){gr(c),d=$s(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function Op(c,d){return gr(c),d=$s(c,d),c.g.has(d)}t.forEach=function(c,d){gr(this),this.g.forEach(function(m,v){m.forEach(function(L){c.call(d,L,v,this)},this)},this)},t.na=function(){gr(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const L=c[v];for(let F=0;F<L.length;F++)m.push(d[v])}return m},t.V=function(c){gr(this);let d=[];if(typeof c=="string")Op(this,c)&&(d=d.concat(this.g.get($s(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)d=d.concat(c[m])}return d},t.set=function(c,d){return gr(this),this.i=null,c=$s(this,c),Op(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function xp(c,d,m){kp(c,d),0<m.length&&(c.i=null,c.g.set($s(c,d),O(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const F=encodeURIComponent(String(v)),G=this.V(v);for(v=0;v<G.length;v++){var L=F;G[v]!==""&&(L+="="+encodeURIComponent(String(G[v]))),c.push(L)}}return this.i=c.join("&")};function $s(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function vT(c,d){d&&!c.j&&(gr(c),c.i=null,c.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(kp(this,v),xp(this,L,m))},c)),c.j=d}function ET(c,d){const m=new $i;if(a.Image){const v=new Image;v.onload=g(_r,m,"TestLoadImage: loaded",!0,d,v),v.onerror=g(_r,m,"TestLoadImage: error",!1,d,v),v.onabort=g(_r,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=g(_r,m,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else d(!1)}function wT(c,d){const m=new $i,v=new AbortController,L=setTimeout(()=>{v.abort(),_r(m,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?_r(m,"TestPingServer: ok",!0,d):_r(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),_r(m,"TestPingServer: error",!1,d)})}function _r(c,d,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function bT(){this.g=new nn}function TT(c,d,m){const v=m||"";try{Rp(c,function(L,F){let G=L;u(L)&&(G=Us(L)),d.push(v+F+"="+encodeURIComponent(G))})}catch(L){throw d.push(v+"type="+encodeURIComponent("_badmap")),L}}function Ki(c){this.l=c.Ub||null,this.j=c.eb||!1}R(Ki,Bs),Ki.prototype.g=function(){return new xa(this.l,this.j)},Ki.prototype.i=function(c){return function(){return c}}({});function xa(c,d){ne.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(xa,ne),t=xa.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,Qi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Np(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Np(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Gi(this):Qi(this),this.readyState==3&&Np(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Gi(this))},t.Qa=function(c){this.g&&(this.response=c,Gi(this))},t.ga=function(){this.g&&Gi(this)};function Gi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Qi(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=d.next();return c.join(`\r
`)};function Qi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dp(c){let d="";return V(c,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function uu(c,d,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Dp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Be(c,d,m))}function Ye(c){ne.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ye,ne);var IT=/^https?$/i,AT=["POST","PUT"];t=Ye.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ru.g(),this.v=this.o?lp(this.o):lp(ru),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(F){Lp(this,F);return}if(c=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(AT,d,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of m)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Lp(this,F)}};function Lp(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Mp(c),Na(c)}function Mp(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),Na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Na(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vp(this):this.bb())},t.bb=function(){Vp(this)};function Vp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||jn(c)!=4||c.Z()!=2)){if(c.u&&jn(c)==4)Te(c.Ea,0,c);else if(he(c,"readystatechange"),jn(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var v;if(v=G===0){var L=String(c.D).match(Sp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!IT.test(L?L.toLowerCase():"")}m=v}if(m)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<jn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Mp(c)}}finally{Na(c)}}}}function Na(c,d){if(c.g){Fp(c);const m=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||he(c,"ready");try{m.onreadystatechange=v}catch{}}}function Fp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function jn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Dt(d)}};function Up(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function RT(c){const d={};c=(c.g&&2<=jn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(S(c[v]))continue;var m=C(c[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[L]||[];d[L]=F,F.push(m)}b(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yi(c,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||d}function Bp(c){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yi("baseRetryDelayMs",5e3,c),this.cb=Yi("retryDelaySeedMs",1e4,c),this.Wa=Yi("forwardChannelMaxRetries",2,c),this.wa=Yi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new wp(c&&c.concurrentRequestLimit),this.Da=new bT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bp.prototype,t.la=8,t.G=1,t.connect=function(c,d,m,v){Lt(0),this.W=c,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Qp(this,null,this.W),La(this)};function hu(c){if(jp(c),c.G==3){var d=c.U++,m=Bn(c.I);if(Be(m,"SID",c.K),Be(m,"RID",d),Be(m,"TYPE","terminate"),Xi(c,m),d=new mr(c,c.j,d),d.L=2,d.v=Oa(Bn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Yp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Pa(d)}Gp(c)}function Da(c){c.g&&(du(c),c.g.cancel(),c.g=null)}function jp(c){Da(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ma(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function La(c){if(!bp(c.h)&&!c.s){c.s=!0;var d=c.Ga;te||ln(),ie||(te(),ie=!0),We.add(d,c),c.B=0}}function ST(c,d){return Tp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ji(p(c.Ga,c,d),Kp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new mr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Hp(this,L,d),m=Bn(this.I),Be(m,"RID",c),Be(m,"CVER",22),this.D&&Be(m,"X-HTTP-Session-Id",this.D),Xi(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(Dp(F)))+"&"+d:this.m&&uu(m,this.m,F)),lu(this.h,L),this.Ua&&Be(m,"TYPE","init"),this.P?(Be(m,"$req",d),Be(m,"SID","null"),L.T=!0,iu(L,m,null)):iu(L,m,d),this.G=2}}else this.G==3&&(c?$p(this,c):this.i.length==0||bp(this.h)||$p(this))};function $p(c,d){var m;d?m=d.l:m=c.U++;const v=Bn(c.I);Be(v,"SID",c.K),Be(v,"RID",m),Be(v,"AID",c.T),Xi(c,v),c.m&&c.o&&uu(v,c.m,c.o),m=new mr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),d&&(c.i=d.D.concat(c.i)),d=Hp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),lu(c.h,m),iu(m,v,d)}function Xi(c,d){c.H&&V(c.H,function(m,v){Be(d,v,m)}),c.l&&Rp({},function(m,v){Be(d,v,m)})}function Hp(c,d,m){m=Math.min(c.i.length,m);var v=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const G=["count="+m];F==-1?0<m?(F=L[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Me=!0;for(let dt=0;dt<m;dt++){let Ie=L[dt].g;const It=L[dt].map;if(Ie-=F,0>Ie)F=Math.max(0,L[dt].g-100),Me=!1;else try{TT(It,G,"req"+Ie+"_")}catch{v&&v(It)}}if(Me){v=G.join("&");break e}}}return c=c.i.splice(0,m),d.D=c,v}function qp(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;te||ln(),ie||(te(),ie=!0),We.add(d,c),c.v=0}}function fu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ji(p(c.Fa,c),Kp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ji(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Da(this),zp(this))};function du(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function zp(c){c.g=new mr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=Bn(c.qa);Be(d,"RID","rpc"),Be(d,"SID",c.K),Be(d,"AID",c.T),Be(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(d,"TO",c.ja),Be(d,"TYPE","xmlhttp"),Xi(c,d),c.m&&c.o&&uu(d,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Oa(Bn(d)),m.m=null,m.P=!0,yp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Da(this),fu(this),Lt(19))};function Ma(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Wp(c,d){var m=null;if(c.g==d){Ma(c),du(c),c.g=null;var v=2}else if(cu(c.h,d))m=d.D,Ip(c.h,d),v=1;else return;if(c.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var L=c.B;v=Aa(),he(v,new pp(v,m)),La(c)}else qp(c);else if(L=d.s,L==3||L==0&&0<d.X||!(v==1&&ST(c,d)||v==2&&fu(c)))switch(m&&0<m.length&&(d=c.h,d.i=d.i.concat(m)),L){case 1:os(c,5);break;case 4:os(c,10);break;case 3:os(c,6);break;default:os(c,2)}}}function Kp(c,d){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*d}function os(c,d){if(c.j.info("Error code "+d),d==2){var m=p(c.fb,c),v=c.Xa;const L=!v;v=new is(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ca(v,"https"),Oa(v),L?ET(v.toString(),m):wT(v.toString(),m)}else Lt(2);c.G=0,c.l&&c.l.sa(d),Gp(c),jp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Gp(c){if(c.G=0,c.ka=[],c.l){const d=Ap(c.h);(d.length!=0||c.i.length!=0)&&(x(c.ka,d),x(c.ka,c.i),c.h.i.length=0,O(c.i),c.i.length=0),c.l.ra()}}function Qp(c,d,m){var v=m instanceof is?Bn(m):new is(m);if(v.g!="")d&&(v.g=d+"."+v.g),ka(v,v.s);else{var L=a.location;v=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var F=new is(null);v&&Ca(F,v),d&&(F.g=d),L&&ka(F,L),m&&(F.l=m),v=F}return m=c.D,d=c.ya,m&&d&&Be(v,m,d),Be(v,"VER",c.la),Xi(c,v),v}function Yp(c,d,m){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new Ye(new Ki({eb:m})):new Ye(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xp(){}t=Xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(c,d){return new Wt(c,d)};function Wt(c,d){ne.call(this),this.g=new Bp(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!S(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!S(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Hs(this)}R(Wt,ne),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){hu(this.g)},Wt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Us(c),c=m);d.i.push(new uT(d.Ya++,c)),d.G==3&&La(d)},Wt.prototype.N=function(){this.g.l=null,delete this.j,hu(this.g),delete this.g,Wt.aa.N.call(this)};function Jp(c){tu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const m in d){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}R(Jp,tu);function Zp(){nu.call(this),this.status=1}R(Zp,nu);function Hs(c){this.g=c}R(Hs,Xp),Hs.prototype.ua=function(){he(this.g,"a")},Hs.prototype.ta=function(c){he(this.g,new Jp(c))},Hs.prototype.sa=function(c){he(this.g,new Zp)},Hs.prototype.ra=function(){he(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,qw=function(){return new Va},Hw=function(){return Aa()},$w=rs,qh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,_c=Ra,mp.COMPLETE="complete",jw=mp,up.EventType=Ui,Ui.OPEN="a",Ui.CLOSE="b",Ui.ERROR="c",Ui.MESSAGE="d",ne.prototype.listen=ne.prototype.K,co=up,Bw=Ki,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Uw=Ye}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const l_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Li="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new sd("@firebase/firestore");function no(){return Ss.logLevel}function re(t,...e){if(Ss.logLevel<=we.DEBUG){const n=e.map(gd);Ss.debug(`Firestore (${Li}): ${t}`,...n)}}function ir(t,...e){if(Ss.logLevel<=we.ERROR){const n=e.map(gd);Ss.error(`Firestore (${Li}): ${t}`,...n)}}function wi(t,...e){if(Ss.logLevel<=we.WARN){const n=e.map(gd);Ss.warn(`Firestore (${Li}): ${t}`,...n)}}function gd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: `+t;throw ir(e),new Error(e)}function Fe(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class _2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class y2{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $r,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new zw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new St(e)}}class v2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class E2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new v2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new w2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=T2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new at(0,0))}static max(){return new ge(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends Qo{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const I2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Qo{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return I2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(He.fromString(e))}static fromName(e){return new ue(He.fromString(e).popFirst(5))}static empty(){return new ue(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new He(e.slice()))}}function A2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new Kr(s,ue.empty(),e)}function R2(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(ge.min(),ue.empty(),-1)}static max(){return new Kr(ge.max(),ue.empty(),-1)}}function S2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==P2)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function k2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ya(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _d{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_d.oe=-1;function Nl(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function O2(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=i??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new h_(this.data.getIterator())}getIteratorFrom(e){return new h_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class h_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new vt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Gw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gw("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const x2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=x2.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vd(t){const e=t.mapValue.fields.__previous_value__;return yd(e)?vd(e):e}function Yo(t){const e=Gr(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yd(t)?4:L2(t)?9007199254740991:D2(t)?10:11:pe()}function Dn(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gr(s.timestampValue),a=Gr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ps(s.bytesValue).isEqual(Ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Yc(o)===Yc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(u_(o)!==u_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function Jo(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=Cs(t),r=Cs(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return f_(t.timestampValue,e.timestampValue);case 4:return f_(Yo(t),Yo(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ps(i),l=Ps(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Ae(a[u],l[u]);if(h!==0)return h}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ae(nt(i.latitude),nt(o.latitude));return a!==0?a:Ae(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return d_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const f=i.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,R=(l=p.value)===null||l===void 0?void 0:l.arrayValue,O=Ae(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0);return O!==0?O:d_(g,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===nc.mapValue&&o===nc.mapValue)return 0;if(i===nc.mapValue)return 1;if(o===nc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=Ae(l[f],h[f]);if(p!==0)return p;const g=Ti(a[l[f]],u[h[f]]);if(g!==0)return g}return Ae(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function f_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Gr(t),r=Gr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function d_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ti(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function Ii(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zh(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Wh(t){return!!t&&"integerValue"in t}function Ed(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yc(t){return!!t&&"mapValue"in t}function D2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function L2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Io(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(Io(this.value))}}function Qw(t){const e=[];return Vs(t.fields,(n,r)=>{const s=new _t([n]);if(yc(r)){const i=Qw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ge.min(),ge.min(),ge.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new kt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new kt(e,2,n,ge.min(),ge.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ge.min(),ge.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function __(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jc{constructor(e,n="asc"){this.field=e,this.dir=n}}function M2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yw{}class it extends Yw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F2(e,n,r):n==="array-contains"?new j2(e,r):n==="in"?new $2(e,r):n==="not-in"?new H2(e,r):n==="array-contains-any"?new q2(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U2(e,r):new B2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ti(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends Yw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ln(e,n)}matches(e){return Xw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xw(t){return t.op==="and"}function Jw(t){return V2(t)&&Xw(t)}function V2(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Kh(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(Jw(t))return t.filters.map(e=>Kh(e)).join(",");{const e=t.filters.map(n=>Kh(n)).join(",");return`${t.op}(${e})`}}function Zw(t,e){return t instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)}(t,e):t instanceof Ln?function(r,s){return s instanceof Ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Zw(o,s.filters[a]),!0):!1}(t,e):void pe()}function e0(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(e0).join(" ,")+"}"}(t):"Filter"}class F2 extends it{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class U2 extends it{constructor(e,n){super(e,"in",n),this.keys=t0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class B2 extends it{constructor(e,n){super(e,"not-in",n),this.keys=t0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class j2 extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ed(n)&&Jo(n.arrayValue,this.value)}}class $2 extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class H2 extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class q2 extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ed(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function y_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new z2(t,e,n,r,s,i,o)}function wd(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ii(r)).join(",")),e.ue=n}return e.ue}function bd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!__(t.startAt,e.startAt)&&__(t.endAt,e.endAt)}function Gh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function W2(t,e,n,r,s,i,o,a){return new Dl(t,e,n,r,s,i,o,a)}function n0(t){return new Dl(t)}function v_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function K2(t){return t.collectionGroup!==null}function Ao(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Jc(i,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new Jc(_t.keyField(),r))}return e.ce}function On(t){const e=_e(t);return e.le||(e.le=G2(e,Ao(t))),e.le}function G2(t,e){if(t.limitType==="F")return y_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jc(s.field,i)});const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;return y_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qh(t,e,n){return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return bd(On(t),On(e))&&t.limitType===e.limitType}function r0(t){return`${wd(On(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>e0(s)).join(", ")}]`),Nl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ii(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ii(s)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Ml(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=g_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ao(r),s)||r.endAt&&!function(o,a,l){const u=g_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ao(r),s))}(t,e)}function Q2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s0(t){return(e,n)=>{let r=!1;for(const s of Ao(t)){const i=Y2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Y2(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ti(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=new Qe(ue.comparator);function or(){return X2}const i0=new Qe(ue.comparator);function lo(...t){let e=i0;for(const n of t)e=e.insert(n.key,n);return e}function o0(t){let e=i0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return Ro()}function a0(){return Ro()}function Ro(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const J2=new Qe(ue.comparator),Z2=new vt(ue.comparator);function ve(...t){let e=Z2;for(const n of t)e=e.add(n);return e}const eN=new vt(Ae);function tN(){return eN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function c0(t){return{integerValue:""+t}}function nN(t,e){return O2(e)?c0(e):Td(t,e)}/**
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
 */class Vl{constructor(){this._=void 0}}function rN(t,e,n){return t instanceof Zc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yd(i)&&(i=vd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zo?u0(t,e):t instanceof ea?h0(t,e):function(s,i){const o=l0(s,i),a=E_(o)+E_(s.Pe);return Wh(o)&&Wh(s.Pe)?c0(a):Td(s.serializer,a)}(t,e)}function sN(t,e,n){return t instanceof Zo?u0(t,e):t instanceof ea?h0(t,e):n}function l0(t,e){return t instanceof el?function(r){return Wh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zc extends Vl{}class Zo extends Vl{constructor(e){super(),this.elements=e}}function u0(t,e){const n=f0(e);for(const r of t.elements)n.some(s=>Dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends Vl{constructor(e){super(),this.elements=e}}function h0(t,e){let n=f0(e);for(const r of t.elements)n=n.filter(s=>!Dn(s,r));return{arrayValue:{values:n}}}class el extends Vl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function E_(t){return nt(t.integerValue||t.doubleValue)}function f0(t){return Ed(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zo&&s instanceof Zo||r instanceof ea&&s instanceof ea?bi(r.elements,s.elements,Dn):r instanceof el&&s instanceof el?Dn(r.Pe,s.Pe):r instanceof Zc&&s instanceof Zc}(t.transform,e.transform)}class oN{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fl{}function d0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Id(t.key,an.none()):new va(t.key,t.data,an.none());{const n=t.data,r=Ht.empty();let s=new vt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ns(t.key,r,new Qt(s.toArray()),an.none())}}function aN(t,e,n){t instanceof va?function(s,i,o){const a=s.value.clone(),l=b_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ns?function(s,i,o){if(!vc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=b_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(p0(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof va?function(i,o,a,l){if(!vc(i.precondition,o))return a;const u=i.value.clone(),h=T_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ns?function(i,o,a,l){if(!vc(i.precondition,o))return a;const u=T_(i.fieldTransforms,l,o),h=o.data;return h.setAll(p0(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return vc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function cN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=l0(r.transform,s||null);i!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,i))}return n||null}function w_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bi(r,s,(i,o)=>iN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Fl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends Fl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function p0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function b_(t,e,n){const r=new Map;Fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,sN(o,a,n[s]))}return r}function T_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rN(i,o,e))}return r}class Id extends Fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lN extends Fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=a0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=d0(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>w_(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>w_(n,r))}}class Ad{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length);let s=function(){return J2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ad(e,n,r,s)}}/**
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
 */class hN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,be;function dN(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function m0(t){if(t===void 0)return ir("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(be=rt||(rt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pN(){return new TextEncoder}/**
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
 */const mN=new ws([4294967295,4294967295],0);function I_(t){const e=pN().encode(t),n=new Fw;return n.update(e),new Uint8Array(n.digest())}function A_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ws([n,r],0),new ws([s,i],0)]}class Rd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ws.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ws.fromNumber(r)));return s.compare(mN)===1&&(s=new ws([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=I_(e),[r,s]=A_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Rd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=I_(e),[r,s]=A_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ul(ge.min(),s,new Qe(Ae),or(),ve())}}class Ea{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ea(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class g0{constructor(e,n){this.targetId=e,this.me=n}}class _0{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class R_{constructor(){this.fe=0,this.ge=P_(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Ea(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=P_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gN{constructor(e){this.Le=e,this.Be=new Map,this.ke=or(),this.qe=S_(),this.Qe=new Qe(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Gh(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,kt.newNoDocument(o,ge.min()))}else Fe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ps(r).toUint8Array()}catch(l){if(l instanceof Gw)return wi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Rd(o,s,i)}catch(l){return wi(l instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Gh(a.target)){const l=new ue(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,kt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ul(e,n,this.Qe,this.ke,r);return this.ke=or(),this.qe=S_(),this.Qe=new Qe(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new R_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new R_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function S_(){return new Qe(ue.comparator)}function P_(){return new Qe(ue.comparator)}const _N={asc:"ASCENDING",desc:"DESCENDING"},yN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vN={and:"AND",or:"OR"};class EN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yh(t,e){return t.useProto3Json||Nl(e)?e:{value:e}}function tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wN(t,e){return tl(t,e.toTimestamp())}function xn(t){return Fe(!!t),ge.fromTimestamp(function(n){const r=Gr(n);return new at(r.seconds,r.nanos)}(t))}function Sd(t,e){return Xh(t,e).canonicalString()}function Xh(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function v0(t){const e=He.fromString(t);return Fe(I0(e)),e}function Jh(t,e){return Sd(t.databaseId,e.path)}function Hu(t,e){const n=v0(e);if(n.get(1)!==t.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(w0(n))}function E0(t,e){return Sd(t.databaseId,e)}function bN(t){const e=v0(t);return e.length===4?He.emptyPath():w0(e)}function Zh(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function w0(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C_(t,e,n){return{name:Jh(t,e),fields:n.value.mapValue.fields}}function TN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Fe(h===void 0||typeof h=="string"),wt.fromBase64String(h||"")):(Fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),wt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:m0(u.code);return new ae(h,u.message||"")}(o);n=new _0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hu(t,r.document.name),i=xn(r.document.updateTime),o=r.document.createTime?xn(r.document.createTime):ge.min(),a=new Ht({mapValue:{fields:r.document.fields}}),l=kt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ec(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hu(t,r.document),i=r.readTime?xn(r.readTime):ge.min(),o=kt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ec([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hu(t,r.document),i=r.removedTargetIds||[];n=new Ec([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fN(s,i),a=r.targetId;n=new g0(a,o)}}return n}function IN(t,e){let n;if(e instanceof va)n={update:C_(t,e.key,e.value)};else if(e instanceof Id)n={delete:Jh(t,e.key)};else if(e instanceof ns)n={update:C_(t,e.key,e.data),updateMask:NN(e.fieldMask)};else{if(!(e instanceof lN))return pe();n={verify:Jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Zc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof el)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function AN(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?xn(s.updateTime):xn(i);return o.isEqual(ge.min())&&(o=xn(i)),new oN(o,s.transformResults||[])}(n,e))):[]}function RN(t,e){return{documents:[E0(t,e.path)]}}function SN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=E0(t,s);const i=function(u){if(u.length!==0)return T0(Ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Xs(p.field),direction:kN(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Yh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function PN(t){let e=bN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=b0(f);return p instanceof Ln&&Jw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(R){return new Jc(Js(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Nl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new Xc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new Xc(g,p)}(n.endAt)),W2(e,s,o,i,a,"F",l,u)}function CN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function b0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Js(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Js(n.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Js(n.unaryFilter.field);return it.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Js(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Js(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>b0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function kN(t){return _N[t]}function ON(t){return yN[t]}function xN(t){return vN[t]}function Xs(t){return{fieldPath:t.canonicalString()}}function Js(t){return _t.fromServerFormat(t.fieldPath)}function T0(t){return t instanceof it?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(n.field),op:ON(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(s=>T0(s));return r.length===1?r[0]:{compositeFilter:{op:xN(n.op),filters:r}}}(t):pe()}function NN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function I0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.ct=e}}function LN(t){const e=PN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.un=new VN}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Kr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class VN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new vt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new vt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ai(0)}static kn(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&So(r.mutation,s,Qt.empty(),at.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=lo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=or();const o=Ro(),a=function(){return Ro()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ns)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),So(h.mutation,u,h.mutation.getFieldMask(),at.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new UN(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ro();let s=new Qe((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Qt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(s.get(a.batchId)||ve()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=a0();h.forEach(p=>{if(!i.has(p)){const g=d0(n.get(p),r.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(gs());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:a,changes:o0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=lo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(f,p){return new Dl(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let a=lo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&So(h.mutation,u,Qt.empty(),at.now()),Ml(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:xn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:LN(s.bundledQuery),readTime:xn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class $N{constructor(){this.overlays=new Qe(ue.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=gs(),i=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=gs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=gs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hN(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class HN{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.Tr=new vt(lt.Er),this.dr=new vt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ue(new He([])),r=new lt(n,e),s=new lt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ue(new He([])),r=new lt(n,e),s=new lt(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ue.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new vt(lt.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uN(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new lt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),s=new lt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(Ae);return n.forEach(s=>{const i=new lt(s,0),o=new lt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new lt(new ue(i),0);let a=new vt(Ae);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new lt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new lt(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.Mr=e,this.docs=function(){return new Qe(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=or();const o=n.path,a=new ue(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||S2(R2(h),r)<=0||(s.has(h.key)||Ml(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WN(this)}getSize(e){return H.resolve(this.size)}}class WN extends FN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.persistence=e,this.Nr=new Mi(n=>wd(n),bd),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pd,this.targetCount=0,this.kr=Ai.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new _d(0),this.Kr=!1,this.Kr=!0,this.$r=new HN,this.referenceDelegate=e(this),this.Ur=new KN(this),this.indexManager=new MN,this.remoteDocumentCache=function(s){return new zN(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new DN(n),this.Gr=new jN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $N,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new qN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new QN(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class QN extends C2{constructor(e){super(),this.currentSequenceNumber=e}}class Cd{constructor(e){this.persistence=e,this.Jr=new Pd,this.Yr=null}static Zr(e){return new Cd(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=ue.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kd(e,n.fromCache,r,s)}}/**
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
 */class YN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kC()?8:k2(Nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YN;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(no()<=we.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(no()<=we.DEBUG&&re("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(no()<=we.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):H.resolve())}Yi(e,n){if(v_(n))return H.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qh(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,Qh(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return v_(n)||s.isEqual(ge.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(no()<=we.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ys(n)),this.rs(e,o,n,A2(s,-1)).next(a=>a))})}ts(e,n){let r=new vt(s0(e));return n.forEach((s,i)=>{Ml(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return no()<=we.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Qe(Ae),this._s=new Mi(i=>wd(i),bd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ZN(t,e,n,r){return new JN(t,e,n,r)}async function A0(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function eD(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,p=f.keys();let g=H.resolve();return p.forEach(R=>{g=g.next(()=>h.getEntry(l,R)).next(O=>{const x=u.docVersions.get(R);Fe(x!==null),O.version.compareTo(x)<0&&(f.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),h.addEntry(O)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function R0(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function tD(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(wt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(O,x,N){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(i,g))});let l=or(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(nD(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function nD(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=or();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function rD(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sD(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ef(t,e,n){const r=_e(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ya(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function k_(t,e,n){const r=_e(t);let s=ge.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=_e(l),p=f._s.get(h);return p!==void 0?H.resolve(f.os.get(p)):f.Ur.getTargetData(u,h)}(r,o,On(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ve())).next(a=>(iD(r,Q2(e),a),{documents:a,Ts:i})))}function iD(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class O_{constructor(){this.activeTargetIds=tN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oD{constructor(){this.so=new O_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new O_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rc=null;function qu(){return rc===null?rc=function(){return 268435456+Math.round(2147483648*Math.random())}():rc++,"0x"+rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class uD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=qu(),l=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(re("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw wi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Li}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=cD[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=qu();return new Promise((o,a)=>{const l=new Uw;l.setWithCredentials(!0),l.listenOnce(jw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _c.NO_ERROR:const h=l.getResponseJson();re(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case _c.TIMEOUT:re(Rt,`RPC '${e}' ${i} timed out`),a(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const f=l.getStatus();if(re(Rt,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const R=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(N)>=0?N:$.UNKNOWN}(g.status);a(new ae(R,g.message))}else a(new ae($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ae($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{re(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);re(Rt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=qu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qw(),a=Hw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Bw({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");re(Rt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const R=new lD({Io:x=>{g?re(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(p||(re(Rt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),re(Rt,`RPC '${e}' stream ${s} sending:`,x),f.send(x))},To:()=>f.close()}),O=(x,N,S)=>{x.listen(N,E=>{try{S(E)}catch(A){setTimeout(()=>{throw A},0)}})};return O(f,co.EventType.OPEN,()=>{g||(re(Rt,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),O(f,co.EventType.CLOSE,()=>{g||(g=!0,re(Rt,`RPC '${e}' stream ${s} transport closed`),R.So())}),O(f,co.EventType.ERROR,x=>{g||(g=!0,wi(Rt,`RPC '${e}' stream ${s} transport errored:`,x),R.So(new ae($.UNAVAILABLE,"The operation could not be completed")))}),O(f,co.EventType.MESSAGE,x=>{var N;if(!g){const S=x.data[0];Fe(!!S);const E=S,A=E.error||((N=E[0])===null||N===void 0?void 0:N.error);if(A){re(Rt,`RPC '${e}' stream ${s} received error:`,A);const D=A.status;let V=function(_){const w=rt[_];if(w!==void 0)return m0(w)}(D),b=A.message;V===void 0&&(V=$.INTERNAL,b="Unknown error status: "+D+" with message "+A.message),g=!0,R.So(new ae(V,b)),f.close()}else re(Rt,`RPC '${e}' stream ${s} received:`,S),R.bo(S)}}),O(a,$w.STAT_EVENT,x=>{x.stat===qh.PROXY?re(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===qh.NOPROXY&&re(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function zu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){return new EN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new S0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ae($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hD extends P0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=TN(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?xn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Zh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Gh(l)?{documents:RN(i,l)}:{query:SN(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=y0(i,o.resumeToken);const u=Yh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=tl(i,o.snapshotVersion.toTimestamp());const u=Yh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=CN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Zh(this.serializer),n.removeTarget=e,this.a_(n)}}class fD extends P0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=AN(e.writeResults,e.commitTime),r=xn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Zh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Xh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Xh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ir(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.L_.add(4),await wa(u),u.q_.set("Unknown"),u.L_.delete(4),await jl(u)}(this))})}),this.q_=new pD(r,s)}}async function jl(t){if(Fs(t))for(const e of t.B_)await e(!0)}async function wa(t){for(const e of t.B_)await e(!1)}function C0(t,e){const n=_e(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Dd(n)?Nd(n):Vi(n).r_()&&xd(n,e))}function Od(t,e){const n=_e(t),r=Vi(n);n.N_.delete(e),r.r_()&&k0(n,e),n.N_.size===0&&(r.r_()?r.o_():Fs(n)&&n.q_.set("Unknown"))}function xd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vi(t).A_(e)}function k0(t,e){t.Q_.xe(e),Vi(t).R_(e)}function Nd(t){t.Q_=new gN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vi(t).start(),t.q_.v_()}function Dd(t){return Fs(t)&&!Vi(t).n_()&&t.N_.size>0}function Fs(t){return _e(t).L_.size===0}function O0(t){t.Q_=void 0}async function gD(t){t.q_.set("Online")}async function _D(t){t.N_.forEach((e,n)=>{xd(t,e)})}async function yD(t,e){O0(t),Dd(t)?(t.q_.M_(e),Nd(t)):t.q_.set("Unknown")}async function vD(t,e,n){if(t.q_.set("Online"),e instanceof _0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nl(t,r)}else if(e instanceof Ec?t.Q_.Ke(e):e instanceof g0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await R0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(wt.EMPTY_BYTE_STRING,h.snapshotVersion)),k0(i,l);const f=new Mr(h.target,l,u,h.sequenceNumber);xd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await nl(t,r)}}async function nl(t,e,n){if(!ya(e))throw e;t.L_.add(1),await wa(t),t.q_.set("Offline"),n||(n=()=>R0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await jl(t)})}function x0(t,e){return e().catch(n=>nl(t,n,e))}async function $l(t){const e=_e(t),n=Qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ED(e);)try{const s=await rD(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,wD(e,s)}catch(s){await nl(e,s)}N0(e)&&D0(e)}function ED(t){return Fs(t)&&t.O_.length<10}function wD(t,e){t.O_.push(e);const n=Qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function N0(t){return Fs(t)&&!Qr(t).n_()&&t.O_.length>0}function D0(t){Qr(t).start()}async function bD(t){Qr(t).p_()}async function TD(t){const e=Qr(t);for(const n of t.O_)e.m_(n.mutations)}async function ID(t,e,n){const r=t.O_.shift(),s=Ad.from(r,e,n);await x0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $l(t)}async function AD(t,e){e&&Qr(t).V_&&await async function(r,s){if(function(o){return dN(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();Qr(r).s_(),await x0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $l(r)}}(t,e),N0(t)&&D0(t)}async function N_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=Fs(n);n.L_.add(3),await wa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await jl(n)}async function RD(t,e){const n=_e(t);e?(n.L_.delete(2),await jl(n)):e||(n.L_.add(2),await wa(n),n.q_.set("Unknown"))}function Vi(t){return t.K_||(t.K_=function(n,r,s){const i=_e(n);return i.w_(),new hD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:gD.bind(null,t),Ro:_D.bind(null,t),mo:yD.bind(null,t),d_:vD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Dd(t)?Nd(t):t.q_.set("Unknown")):(await t.K_.stop(),O0(t))})),t.K_}function Qr(t){return t.U_||(t.U_=function(n,r,s){const i=_e(n);return i.w_(),new fD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bD.bind(null,t),mo:AD.bind(null,t),f_:TD.bind(null,t),g_:ID.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await $l(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ld(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(t,e){if(ir("AsyncQueue",`${e}: ${t}`),ya(t))return new ae($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class D_{constructor(){this.W_=new Qe(ue.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ri{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ri(e,n,fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PD{constructor(){this.queries=L_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=L_(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ae($.ABORTED,"Firestore shutting down"))}}function L_(){return new Mi(t=>r0(t),Ll)}async function CD(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new SD,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Md(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Vd(n)}async function kD(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OD(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Vd(n)}function xD(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Vd(t){t.Y_.forEach(e=>{e.next()})}var tf,M_;(M_=tf||(tf={})).ea="default",M_.Cache="cache";class ND{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==tf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.key=e}}class M0{constructor(e){this.key=e}}class DD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=s0(e),this.Ra=new fi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new D_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),g=Ml(this.query,f)?f:null,R=!!p&&this.mutatedKeys.has(p.key),O=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?R!==O&&(r.track({type:3,doc:g}),x=!0):this.ga(p,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),x=!0):p&&!g&&(r.track({type:1,doc:p}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),i=O?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,R){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return O(g)-O(R)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ri(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new D_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new M0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new L0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ri.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MD{constructor(e){this.key=e,this.va=!1}}class VD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Mi(a=>r0(a),Ll),this.Ma=new Map,this.xa=new Set,this.Oa=new Qe(ue.comparator),this.Na=new Map,this.La=new Pd,this.Ba={},this.ka=new Map,this.qa=Ai.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function FD(t,e,n=!0){const r=$0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await V0(r,e,n,!0),s}async function UD(t,e){const n=$0(t);await V0(n,e,!0,!1)}async function V0(t,e,n,r){const s=await sD(t.localStore,On(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await BD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&C0(t.remoteStore,s),a}async function BD(t,e,n,r,s){t.Ka=(f,p,g)=>async function(O,x,N,S){let E=x.view.ma(N);E.ns&&(E=await k_(O.localStore,x.query,!1).then(({documents:b})=>x.view.ma(b,E)));const A=S&&S.targetChanges.get(x.targetId),D=S&&S.targetMismatches.get(x.targetId)!=null,V=x.view.applyChanges(E,O.isPrimaryClient,A,D);return F_(O,x.targetId,V.wa),V.snapshot}(t,f,p,g);const i=await k_(t.localStore,e,!0),o=new DD(e,i.Ts),a=o.ma(i.documents),l=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);F_(t,n,u.wa);const h=new LD(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function jD(t,e,n){const r=_e(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ll(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ef(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Od(r.remoteStore,s.targetId),nf(r,s.targetId)}).catch(_a)):(nf(r,s.targetId),await ef(r.localStore,s.targetId,!0))}async function $D(t,e){const n=_e(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Od(n.remoteStore,r.targetId))}async function HD(t,e,n){const r=YD(t);try{const s=await function(o,a){const l=_e(o),u=at.now(),h=a.reduce((g,R)=>g.add(R.key),ve());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=or(),O=ve();return l.cs.getEntries(g,h).next(x=>{R=x,R.forEach((N,S)=>{S.isValidDocument()||(O=O.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,R)).next(x=>{f=x;const N=[];for(const S of a){const E=cN(S,f.get(S.key).overlayedDocument);E!=null&&N.push(new ns(S.key,E,Qw(E.value.mapValue),an.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,a)}).next(x=>{p=x;const N=x.applyToLocalDocumentSet(f,O);return l.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:p.batchId,changes:o0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Qe(Ae)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await ba(r,s.changes),await $l(r.remoteStore)}catch(s){const i=Md(s,"Failed to persist write");n.reject(i)}}async function F0(t,e){const n=_e(t);try{const r=await tD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Fe(o.va):s.removedDocuments.size>0&&(Fe(o.va),o.va=!1))}),await ba(n,r,e)}catch(r){await _a(r)}}function V_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(u=!0)}),u&&Vd(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qD(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Qe(ue.comparator);o=o.insert(i,kt.newNoDocument(i,ge.min()));const a=ve().add(i),l=new Ul(ge.min(),new Map,new Qe(Ae),o,a);await F0(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Fd(r)}else await ef(r.localStore,e,!1).then(()=>nf(r,e,n)).catch(_a)}async function zD(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await eD(n.localStore,e);B0(n,r,null),U0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,s)}catch(s){await _a(s)}}async function WD(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Fe(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);B0(r,e,n),U0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,s)}catch(s){await _a(s)}}function U0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function B0(t,e,n){const r=_e(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||j0(t,r)})}function j0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Od(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Fd(t))}function F_(t,e,n){for(const r of n)r instanceof L0?(t.La.addReference(r.key,e),KD(t,r)):r instanceof M0?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||j0(t,r.key)):pe()}function KD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),Fd(t))}function Fd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ue(He.fromString(e)),r=t.qa.next();t.Na.set(r,new MD(n)),t.Oa=t.Oa.insert(n,r),C0(t.remoteStore,new Mr(On(n0(n.path)),r,"TargetPurposeLimboResolution",_d.oe))}}async function ba(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=kd.Wi(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,p=>H.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>H.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!ya(f))throw f;re("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),R=g.snapshotVersion,O=g.withLastLimboFreeSnapshotVersion(R);h.os=h.os.insert(p,O)}}}(r.localStore,i))}async function GD(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await A0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new ae($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r.hs)}}function QD(t,e){const n=_e(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function $0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=F0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qD.bind(null,e),e.Ca.d_=OD.bind(null,e.eventManager),e.Ca.$a=xD.bind(null,e.eventManager),e}function YD(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WD.bind(null,e),e}class U_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZN(this.persistence,new XN,e.initialUser,this.serializer)}createPersistence(e){return new GN(Cd.Zr,this.serializer)}createSharedClientState(e){return new oD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>V_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GD.bind(null,this.syncEngine),await RD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PD}()}createDatastore(e){const n=Bl(e.databaseInfo.databaseId),r=function(i){return new uD(i)}(e.databaseInfo);return function(i,o,a,l){return new dD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new mD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>V_(this.syncEngine,n,0),function(){return x_.D()?new x_:new aD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const f=new VD(s,i,o,a,l,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await wa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Ww.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{re("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(re("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Md(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wu(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await A0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tL(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>N_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>N_(e.remoteStore,s)),t._onlineComponents=e}function eL(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eL(n))throw n;wi("Error using user provided cache. Falling back to memory cache: "+n),await Wu(t,new U_)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Wu(t,new U_);return t._offlineComponents}async function H0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await B_(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await B_(t,new XD))),t._onlineComponents}function nL(t){return H0(t).then(e=>e.syncEngine)}async function rL(t){const e=await H0(t),n=e.eventManager;return n.onListen=FD.bind(null,e.syncEngine),n.onUnlisten=jD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$D.bind(null,e.syncEngine),n}function sL(t,e,n={}){const r=new $r;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new JD({next:p=>{o.enqueueAndForget(()=>kD(i,f)),p.fromCache&&l.source==="server"?u.reject(new ae($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new ND(a,h,{includeMetadataChanges:!0,_a:!0});return CD(i,f)}(await rL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function q0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function z0(t,e,n){if(!n)throw new ae($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iL(t,e,n,r){if(e===!0&&r===!0)throw new ae($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $_(t){if(!ue.isDocumentKey(t))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H_(t){if(ue.isDocumentKey(t))throw new ae($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function Si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new q_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new q_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new g2;switch(r.type){case"firstParty":return new E2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j_.get(n);r&&(re("ComponentProvider","Removing Datastore"),j_.delete(n),r.terminate())}(this),Promise.resolve()}}function oL(t,e,n,r={}){var s;const i=(t=Si(t,Hl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=St.MOCK_USER;else{a=JE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new St(u)}t._authCredentials=new _2(new zw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ql(this.firestore,e,this._query)}}class cn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class Hr extends ql{constructor(e,n,r){super(e,n,n0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new ue(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function tU(t,e,...n){if(t=Je(t),z0("collection","path",e),t instanceof Hl){const r=He.fromString(e,...n);return H_(r),new Hr(t,null,r)}{if(!(t instanceof cn||t instanceof Hr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return H_(r),new Hr(t.firestore,null,r)}}function nU(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Ww.newId()),z0("doc","path",e),t instanceof Hl){const r=He.fromString(e,...n);return $_(r),new cn(t,null,new ue(r))}{if(!(t instanceof cn||t instanceof Hr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return $_(r),new cn(t.firestore,t instanceof Hr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new S0(this,"async_queue_retry"),this.Eu=()=>{const n=zu();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=zu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=zu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new $r;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ya(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ir("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Ld.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&pe()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class zl extends Hl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new aL}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||W0(this),this._firestoreClient.terminate()}}function cL(t,e){const n=typeof t=="object"?t:od(),r=typeof t=="string"?t:"(default)",s=Pl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=QE("firestore");i&&oL(s,...i)}return s}function Bd(t){return t._firestoreClient||W0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function W0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new N2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,q0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ZD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(wt.fromBase64String(e))}catch(n){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pi(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */class Hd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL=/^__.*__$/;class uL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class K0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ns(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function G0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class qd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return rl(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(G0(this.wu)&&lL.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class hL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bl(e)}Nu(e,n,r,s=!1){return new qd({wu:e,methodName:n,Ou:r,path:_t.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Q0(t){const e=t._freezeSettings(),n=Bl(t._databaseId);return new hL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Y0(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);zd("Data must be an object, but it was:",o,r);const a=X0(r,o);let l,u;if(i.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=rf(e,f,n);if(!o.contains(p))throw new ae($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Z0(h,p)||h.push(p)}l=new Qt(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new uL(new Ht(a),l,u)}class Kl extends jd{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kl}}function fL(t,e,n,r){const s=t.Nu(1,e,n);zd("Data must be an object, but it was:",s,r);const i=[],o=Ht.empty();Vs(r,(l,u)=>{const h=Wd(e,l,n);u=Je(u);const f=s.Cu(h);if(u instanceof Kl)i.push(h);else{const p=Gl(u,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new Qt(i);return new K0(o,a,s.fieldTransforms)}function dL(t,e,n,r,s,i){const o=t.Nu(1,e,n),a=[rf(e,r,n)],l=[s];if(i.length%2!=0)throw new ae($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(rf(e,i[p])),l.push(i[p+1]);const u=[],h=Ht.empty();for(let p=a.length-1;p>=0;--p)if(!Z0(u,a[p])){const g=a[p];let R=l[p];R=Je(R);const O=o.Cu(g);if(R instanceof Kl)u.push(g);else{const x=Gl(R,O);x!=null&&(u.push(g),h.set(g,x))}}const f=new Qt(u);return new K0(h,f,o.fieldTransforms)}function Gl(t,e){if(J0(t=Je(t)))return zd("Unsupported field value:",e,t),X0(t,e);if(t instanceof jd)return function(r,s){if(!G0(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Gl(a,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:tl(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tl(s.serializer,i)}}if(r instanceof $d)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pi)return{bytesValue:y0(s.serializer,r._byteString)};if(r instanceof cn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return Td(a.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Ud(r)}`)}(t,e)}function X0(t,e){const n={};return Kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(r,s)=>{const i=Gl(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function J0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof $d||t instanceof Pi||t instanceof cn||t instanceof jd||t instanceof Hd)}function zd(t,e,n){if(!J0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ud(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function rf(t,e,n){if((e=Je(e))instanceof Wl)return e._internalPath;if(typeof e=="string")return Wd(t,e);throw rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const pL=new RegExp("[~\\*/\\[\\]]");function Wd(t,e,n){if(e.search(pL)>=0)throw rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wl(...e.split("."))._internalPath}catch{throw rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ae($.INVALID_ARGUMENT,a+t+l)}function Z0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mL extends eb{data(){return super.data()}}function tb(t,e){return typeof e=="string"?Wd(t,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _L{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new Hd(i)}convertGeoPoint(e){return new $d(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Fe(I0(r));const s=new Xo(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||ir(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yL extends eb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wc extends yL{data(e={}){return super.data(e)}}class vL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new sc(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wc(this._firestore,this._userDataWriter,r.key,r,new sc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new wc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new sc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new wc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new sc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:EL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class wL extends _L{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,n)}}function rU(t){t=Si(t,ql);const e=Si(t.firestore,zl),n=Bd(e),r=new wL(e);return gL(t._query),sL(n,t._query).then(s=>new vL(e,r,t,s))}function sU(t,e,n){t=Si(t,cn);const r=Si(t.firestore,zl),s=nb(t.converter,e,n);return rb(r,[Y0(Q0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function rb(t,e){return function(r,s){const i=new $r;return r.asyncQueue.enqueueAndForget(async()=>HD(await nL(r),s,i)),i.promise}(Bd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Q0(e)}set(e,n,r){this._verifyNotCommitted();const s=Ku(e,this._firestore),i=nb(s.converter,n,r),o=Y0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,an.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ku(e,this._firestore);let o;return o=typeof(n=Je(n))=="string"||n instanceof Wl?dL(this._dataReader,"WriteBatch.update",i._key,n,r,s):fL(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,an.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ku(e,this._firestore);return this._mutations=this._mutations.concat(new Id(n._key,an.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ku(t,e){if((t=Je(t)).firestore!==e)throw new ae($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(t){return Bd(t=Si(t,zl)),new bL(t,e=>rb(t,e))}(function(e,n=!0){(function(s){Li=s})(Ls),As(new Wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new zl(new y2(r.getProvider("auth-internal")),new b2(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pn(l_,"4.7.1",e),Pn(l_,"4.7.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="firebasestorage.googleapis.com",ib="storageBucket",TL=2*60*1e3,IL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Un{constructor(e,n,r=0){super(Gu(e),`Firebase Storage: ${n} (${Gu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function Gu(t){return"storage/"+t}function Kd(){const t="An unknown error occurred, please check the error payload for server response.";return new et(Ze.UNKNOWN,t)}function AL(t){return new et(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RL(t){return new et(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(Ze.UNAUTHENTICATED,t)}function PL(){return new et(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CL(t){return new et(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function kL(){return new et(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OL(){return new et(Ze.CANCELED,"User canceled the upload/download.")}function xL(t){return new et(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function NL(t){return new et(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DL(){return new et(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ib+"' property when initializing the app?")}function LL(){return new et(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ML(){return new et(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VL(t){return new et(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sf(t){return new et(Ze.INVALID_ARGUMENT,t)}function ob(){return new et(Ze.APP_DELETED,"The Firebase app was deleted.")}function FL(t){return new et(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Po(t,e){return new et(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ro(t){throw new et(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw NL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),R={bucket:1,path:3},O=n===sb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",N=new RegExp(`^https?://${O}/${s}/${x}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:g,indices:R,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<E.length;A++){const D=E[A],V=D.regex.exec(e);if(V){const b=V[D.indices.bucket];let y=V[D.indices.path];y||(y=""),r=new Yt(b,y),D.postModify(r);break}}if(r==null)throw xL(e);return r}}class UL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...x){u||(u=!0,e.apply(null,x))}function f(x){s=setTimeout(()=>{s=null,t(g,l())},x)}function p(){i&&clearTimeout(i)}function g(x,...N){if(u){p();return}if(x){p(),h.call(null,x,...N);return}if(l()||o){p(),h.call(null,x,...N);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let R=!1;function O(x){R||(R=!0,p(),!u&&(s!==null?(x||(a=2),clearTimeout(s),f(0)):x||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function jL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t){return t!==void 0}function HL(t){return typeof t=="object"&&!Array.isArray(t)}function Gd(t){return typeof t=="string"||t instanceof String}function z_(t){return Qd()&&t instanceof Blob}function Qd(){return typeof Blob<"u"}function W_(t,e,n,r){if(r<e)throw sf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw sf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ab(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var bs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bs||(bs={}));/**
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
 */function qL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n,r,s,i,o,a,l,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,R)=>{this.resolve_=g,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ic(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===bs.NO_ERROR,l=i.getStatus();if(!a||qL(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===bs.ABORT;r(!1,new ic(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ic(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());$L(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Kd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ob():OL();o(l)}else{const l=kL();o(l)}};this.canceled_?n(!1,new ic(!1,null,!0)):this.backoffId_=BL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ic{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YL(t,e,n,r,s,i,o=!0){const a=ab(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return GL(u,e),WL(u,n),KL(u,i),QL(u,r),new zL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JL(...t){const e=XL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qd())return new Blob(t);throw new et(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function eM(t){if(typeof atob>"u")throw VL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qu{constructor(e,n){this.data=e,this.contentType=n||null}}function tM(t,e){switch(t){case In.RAW:return new Qu(cb(e));case In.BASE64:case In.BASE64URL:return new Qu(lb(t,e));case In.DATA_URL:return new Qu(rM(e),sM(e))}throw Kd()}function cb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nM(t){let e;try{e=decodeURIComponent(t)}catch{throw Po(In.DATA_URL,"Malformed data URL.")}return cb(e)}function lb(t,e){switch(t){case In.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Po(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Po(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eM(e)}catch(s){throw s.message.includes("polyfill")?s:Po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ub{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Po(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rM(t){const e=new ub(t);return e.base64?lb(In.BASE64,e.rest):nM(e.rest)}function sM(t){return new ub(t).contentType}function iM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){let r=0,s="";z_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(z_(this.data_)){const r=this.data_,s=ZL(r,e,n);return s===null?null:new Dr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(Qd()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(JL.apply(null,n))}else{const n=e.map(o=>Gd(o)?tM(In.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Dr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){let e;try{e=JSON.parse(t)}catch{return null}return HL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function fb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cM(t,e){return e}class Mt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||cM}}let oc=null;function lM(t){return!Gd(t)||t.length<2?t:fb(t)}function db(){if(oc)return oc;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(i,o){return lM(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Mt("size");return s.xform=r,t.push(s),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),oc=t,oc}function uM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function hM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return uM(r,t),r}function pb(t,e,n){const r=hb(e);return r===null?null:hM(t,r,n)}function fM(t,e,n,r){const s=hb(e);if(s===null||!Gd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=Yd(p,n,r),R=ab({alt:"media",token:u});return g+R})[0]}function dM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class mb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){if(!t)throw Kd()}function pM(t,e){function n(r,s){const i=pb(t,s,e);return gb(i!==null),i}return n}function mM(t,e){function n(r,s){const i=pb(t,s,e);return gb(i!==null),fM(i,s,t.host,t._protocol)}return n}function _b(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=PL():s=SL():n.getStatus()===402?s=RL(t.bucket):n.getStatus()===403?s=CL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function gM(t){const e=_b(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=AL(t.path)),i.serverResponse=s.serverResponse,i}return n}function _M(t,e,n){const r=e.fullServerUrl(),s=Yd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new mb(s,i,mM(t,n),o);return a.errorHandler=gM(e),a}function yM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function vM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=yM(null,e)),r}function EM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let A=0;A<2;A++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=vM(e,r,s),h=dM(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Dr.getBlob(f,r,p);if(g===null)throw LL();const R={name:u.fullPath},O=Yd(i,t.host,t._protocol),x="POST",N=t.maxUploadRetryTime,S=new mb(O,x,pM(t,n),N);return S.urlParams=R,S.headers=o,S.body=g.uploadData(),S.errorHandler=_b(e),S}class wM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ro("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bM extends wM{initXhr(){this.xhr_.responseType="text"}}function yb(){return new bM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ks(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fb(this._location.path)}get storage(){return this._service}get parent(){const e=oM(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new ks(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FL(e)}}function TM(t,e,n){t._throwIfRoot("uploadBytes");const r=EM(t.storage,t._location,db(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,yb).then(s=>({metadata:s,ref:t}))}function IM(t){t._throwIfRoot("getDownloadURL");const e=_M(t.storage,t._location,db());return t.storage.makeRequestWithTokens(e,yb).then(n=>{if(n===null)throw ML();return n})}function AM(t,e){const n=aM(t._location.path,e),r=new Yt(t._location.bucket,n);return new ks(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(t){return/^[A-Za-z]+:\/\//.test(t)}function SM(t,e){return new ks(t,e)}function vb(t,e){if(t instanceof Xd){const n=t;if(n._bucket==null)throw DL();const r=new ks(n,n._bucket);return e!=null?vb(r,e):r}else return e!==void 0?AM(t,e):t}function PM(t,e){if(e&&RM(e)){if(t instanceof Xd)return SM(t,e);throw sf("To use ref(service, url), the first argument must be a Storage instance.")}else return vb(t,e)}function K_(t,e){const n=e==null?void 0:e[ib];return n==null?null:Yt.makeFromBucketSpec(n,t)}function CM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:JE(s,t.app.options.projectId))}class Xd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=sb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TL,this._maxUploadRetryTime=IL,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=K_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=K_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ks(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new UL(ob());{const o=YL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const G_="@firebase/storage",Q_="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="storage";function oU(t,e,n){return t=Je(t),TM(t,e,n)}function aU(t){return t=Je(t),IM(t)}function cU(t,e){return t=Je(t),PM(t,e)}function kM(t=od(),e){t=Je(t);const r=Pl(t,Eb).getImmediate({identifier:e}),s=QE("storage");return s&&OM(r,...s),r}function OM(t,e,n,r={}){CM(t,e,n,r)}function xM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Xd(n,r,s,e,Ls)}function NM(){As(new Wr(Eb,xM,"PUBLIC").setMultipleInstances(!0)),Pn(G_,Q_,""),Pn(G_,Q_,"esm2017")}NM();const DM=Zt(t=>{const e=Ds(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=tw(n),s=s2(r),i=cL(r),o=kM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)}),Y_=()=>{};let Jd={},wb={},bb=null,Tb={mark:Y_,measure:Y_};try{typeof window<"u"&&(Jd=window),typeof document<"u"&&(wb=document),typeof MutationObserver<"u"&&(bb=MutationObserver),typeof performance<"u"&&(Tb=performance)}catch{}const{userAgent:X_=""}=Jd.navigator||{},Yr=Jd,je=wb,J_=bb,ac=Tb;Yr.document;const fr=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",Ib=~X_.indexOf("MSIE")||~X_.indexOf("Trident/");var qe="classic",Ab="duotone",Xt="sharp",Jt="sharp-duotone",LM=[qe,Ab,Xt,Jt],MM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Z_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},VM=["kit"],FM=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,UM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,BM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},jM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},$M={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},HM={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},qM={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},zM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Rb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},WM=["solid","regular","light","thin","duotone","brands"],Sb=[1,2,3,4,5,6,7,8,9,10],KM=Sb.concat([11,12,13,14,15,16,17,18,19,20]),ho={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},GM=[...Object.keys(HM),...WM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ho.GROUP,ho.SWAP_OPACITY,ho.PRIMARY,ho.SECONDARY].concat(Sb.map(t=>"".concat(t,"x"))).concat(KM.map(t=>"w-".concat(t))),QM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},YM={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},XM={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ey={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const ar="___FONT_AWESOME___",of=16,Pb="fa",Cb="svg-inline--fa",Os="data-fa-i2svg",af="data-fa-pseudo-element",JM="data-fa-pseudo-element-pending",Zd="data-prefix",ep="data-icon",ty="fontawesome-i2svg",ZM="async",eV=["HTML","HEAD","STYLE","SCRIPT"],kb=(()=>{try{return!0}catch{return!1}})(),Ob=[qe,Xt,Jt];function Ta(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[qe]}})}const xb={...Rb};xb[qe]={...Rb[qe],...Z_.kit,...Z_["kit-duotone"]};const Ts=Ta(xb),cf={...zM};cf[qe]={...cf[qe],...ey.kit,...ey["kit-duotone"]};const ta=Ta(cf),lf={...qM};lf[qe]={...lf[qe],...XM.kit};const Is=Ta(lf),uf={...$M};uf[qe]={...uf[qe],...YM.kit};const tV=Ta(uf),nV=FM,Nb="fa-layers-text",rV=UM,sV={...MM};Ta(sV);const iV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yu=ho,Ci=new Set;Object.keys(ta[qe]).map(Ci.add.bind(Ci));Object.keys(ta[Xt]).map(Ci.add.bind(Ci));Object.keys(ta[Jt]).map(Ci.add.bind(Ci));const oV=[...VM,...GM],Co=Yr.FontAwesomeConfig||{};function aV(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}je&&typeof je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=cV(aV(n));s!=null&&(Co[r]=s)});const Db={styleDefault:"solid",familyDefault:"classic",cssPrefix:Pb,replacementClass:Cb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Co.familyPrefix&&(Co.cssPrefix=Co.familyPrefix);const ki={...Db,...Co};ki.autoReplaceSvg||(ki.observeMutations=!1);const se={};Object.keys(Db).forEach(t=>{Object.defineProperty(se,t,{enumerable:!0,set:function(e){ki[t]=e,ko.forEach(n=>n(se))},get:function(){return ki[t]}})});Object.defineProperty(se,"familyPrefix",{enumerable:!0,set:function(t){ki.cssPrefix=t,ko.forEach(e=>e(se))},get:function(){return ki.cssPrefix}});Yr.FontAwesomeConfig=se;const ko=[];function lV(t){return ko.push(t),()=>{ko.splice(ko.indexOf(t),1)}}const br=of,An={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uV(t){if(!t||!fr)return;const e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=je.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return je.head.insertBefore(e,r),t}const hV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function na(){let t=12,e="";for(;t-- >0;)e+=hV[Math.random()*62|0];return e}function Fi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function tp(t){return t.classList?Fi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Lb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Lb(t[n]),'" '),"").trim()}function Ql(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function np(t){return t.size!==An.size||t.x!==An.x||t.y!==An.y||t.rotate!==An.rotate||t.flipX||t.flipY}function dV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function pV(t){let{transform:e,width:n=of,height:r=of,startCentered:s=!1}=t,i="";return s&&Ib?i+="translate(".concat(e.x/br-n/2,"em, ").concat(e.y/br-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/br,"em), calc(-50% + ").concat(e.y/br,"em)) "):i+="translate(".concat(e.x/br,"em, ").concat(e.y/br,"em) "),i+="scale(".concat(e.size/br*(e.flipX?-1:1),", ").concat(e.size/br*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var mV=`:root, :host {
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
}`;function Mb(){const t=Pb,e=Cb,n=se.cssPrefix,r=se.replacementClass;let s=mV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let ny=!1;function Xu(){se.autoAddCss&&!ny&&(uV(Mb()),ny=!0)}var gV={mixout(){return{dom:{css:Mb,insertCss:Xu}}},hooks(){return{beforeDOMElementCreation(){Xu()},beforeI2svg(){Xu()}}}};const cr=Yr||{};cr[ar]||(cr[ar]={});cr[ar].styles||(cr[ar].styles={});cr[ar].hooks||(cr[ar].hooks={});cr[ar].shims||(cr[ar].shims=[]);var Rn=cr[ar];const Vb=[],Fb=function(){je.removeEventListener("DOMContentLoaded",Fb),sl=1,Vb.map(t=>t())};let sl=!1;fr&&(sl=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),sl||je.addEventListener("DOMContentLoaded",Fb));function _V(t){fr&&(sl?setTimeout(t,0):Vb.push(t))}function Ia(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Lb(t):"<".concat(e," ").concat(fV(n),">").concat(r.map(Ia).join(""),"</").concat(e,">")}function ry(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ju=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function yV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function hf(t){const e=yV(t);return e.length===1?e[0].toString(16):null}function vV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function sy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function ff(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=sy(e);typeof Rn.hooks.addPack=="function"&&!r?Rn.hooks.addPack(t,sy(e)):Rn.styles[t]={...Rn.styles[t]||{},...s},t==="fas"&&ff("fa",e)}const{styles:ms,shims:EV}=Rn,wV={[qe]:Object.values(Is[qe]),[Xt]:Object.values(Is[Xt]),[Jt]:Object.values(Is[Jt])};let rp=null,Ub={},Bb={},jb={},$b={},Hb={};const bV={[qe]:Object.keys(Ts[qe]),[Xt]:Object.keys(Ts[Xt]),[Jt]:Object.keys(Ts[Jt])};function TV(t){return~oV.indexOf(t)}function IV(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!TV(s)?s:null}const qb=()=>{const t=r=>Ju(ms,(s,i,o)=>(s[o]=Ju(i,r,{}),s),{});Ub=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Bb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Hb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ms||se.autoFetchSvg,n=Ju(EV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});jb=n.names,$b=n.unicodes,rp=Yl(se.styleDefault,{family:se.familyDefault})};lV(t=>{rp=Yl(t.styleDefault,{family:se.familyDefault})});qb();function sp(t,e){return(Ub[t]||{})[e]}function AV(t,e){return(Bb[t]||{})[e]}function Vr(t,e){return(Hb[t]||{})[e]}function zb(t){return jb[t]||{prefix:null,iconName:null}}function RV(t){const e=$b[t],n=sp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xr(){return rp}const ip=()=>({prefix:null,iconName:null,rest:[]});function Yl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=qe}=e,r=Ts[n][t],s=ta[n][t]||ta[n][r],i=t in Rn.styles?t:null;return s||i||null}const SV={[qe]:Object.keys(Is[qe]),[Xt]:Object.keys(Is[Xt]),[Jt]:Object.keys(Is[Jt])};function Xl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[qe]:"".concat(se.cssPrefix,"-").concat(qe),[Xt]:"".concat(se.cssPrefix,"-").concat(Xt),[Jt]:"".concat(se.cssPrefix,"-").concat(Jt)};let s=null,i=qe;const o=LM.filter(l=>l!==Ab);o.forEach(l=>{(t.includes(r[l])||t.some(u=>SV[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const h=IV(se.cssPrefix,u);if(ms[u]?(u=wV[i].includes(u)?tV[i][u]:u,s=u,l.prefix=u):bV[i].indexOf(u)>-1?(s=u,l.prefix=Yl(u,{family:i})):h?l.iconName=h:u!==se.replacementClass&&!o.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=s==="fa"?zb(l.iconName):{},p=Vr(l.prefix,l.iconName);f.prefix&&(s=null),l.iconName=f.iconName||p||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!ms.far&&ms.fas&&!se.autoFetchSvg&&(l.prefix="fas")}return l},ip());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Xt&&(ms.fass||se.autoFetchSvg)&&(a.prefix="fass",a.iconName=Vr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===Jt&&(ms.fasds||se.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Vr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Xr()||"fas"),a}class PV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},ff(i,s[i]);const o=Is[qe][i];o&&ff(o,s[i]),qb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let iy=[],ti={};const di={},CV=Object.keys(di);function kV(t,e){let{mixoutsTo:n}=e;return iy=t,ti={},Object.keys(di).forEach(r=>{CV.indexOf(r)===-1&&delete di[r]}),iy.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ti[o]||(ti[o]=[]),ti[o].push(i[o])})}r.provides&&r.provides(di)}),n}function df(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ti[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function xs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ti[t]||[]).forEach(i=>{i.apply(null,n)})}function Jr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return di[t]?di[t].apply(null,e):void 0}function pf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Xr();if(e)return e=Vr(n,e)||e,ry(Wb.definitions,n,e)||ry(Rn.styles,n,e)}const Wb=new PV,OV=()=>{se.autoReplaceSvg=!1,se.observeMutations=!1,xs("noAuto")},xV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return fr?(xs("beforeI2svg",t),Jr("pseudoElements2svg",t),Jr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;se.autoReplaceSvg===!1&&(se.autoReplaceSvg=!0),se.observeMutations=!0,_V(()=>{DV({autoReplaceSvgRoot:e}),xs("watch",t)})}},NV={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Vr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Yl(t[0]);return{prefix:n,iconName:Vr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(se.cssPrefix,"-"))>-1||t.match(nV))){const e=Xl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Xr(),iconName:Vr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Xr();return{prefix:e,iconName:Vr(e,t)||t}}}},en={noAuto:OV,config:se,dom:xV,parse:NV,library:Wb,findIconDefinition:pf,toHtml:Ia},DV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=je}=t;(Object.keys(Rn.styles).length>0||se.autoFetchSvg)&&fr&&se.autoReplaceSvg&&en.dom.i2svg({node:e})};function Jl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ia(n))}}),Object.defineProperty(t,"node",{get:function(){if(!fr)return;const n=je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function LV(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(np(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Ql({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function MV(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(se.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function op(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:f=!1}=t,{width:p,height:g}=n.found?n:e,R=r==="fak",O=[se.replacementClass,s?"".concat(se.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let x={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:O,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const N=R&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};f&&(x.attributes[Os]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||na())},children:[a]}),delete x.attributes.title);const S={...x,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...N,...h.styles}},{children:E,attributes:A}=n.found&&e.found?Jr("generateAbstractMask",S)||{children:[],attributes:{}}:Jr("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=E,S.attributes=A,o?MV(S):LV(S)}function oy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[Os]="");const u={...o.styles};np(s)&&(u.transform=pV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Ql(u);h.length>0&&(l.style=h);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function VV(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Ql(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Zu}=Rn;function mf(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(se.cssPrefix,"-").concat(Yu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Yu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Yu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const FV={found:!1,width:512,height:512};function UV(t,e){!kb&&!se.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function gf(t,e){let n=e;return e==="fa"&&se.styleDefault!==null&&(e=Xr()),new Promise((r,s)=>{if(n==="fa"){const i=zb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Zu[e]&&Zu[e][t]){const i=Zu[e][t];return r(mf(i))}UV(t,e),r({...FV,icon:se.showMissingIcons&&t?Jr("missingIconAbstract")||{}:{}})})}const ay=()=>{},_f=se.measurePerformance&&ac&&ac.mark&&ac.measure?ac:{mark:ay,measure:ay},fo='FA "6.6.0"',BV=t=>(_f.mark("".concat(fo," ").concat(t," begins")),()=>Kb(t)),Kb=t=>{_f.mark("".concat(fo," ").concat(t," ends")),_f.measure("".concat(fo," ").concat(t),"".concat(fo," ").concat(t," begins"),"".concat(fo," ").concat(t," ends"))};var ap={begin:BV,end:Kb};const bc=()=>{};function cy(t){return typeof(t.getAttribute?t.getAttribute(Os):null)=="string"}function jV(t){const e=t.getAttribute?t.getAttribute(Zd):null,n=t.getAttribute?t.getAttribute(ep):null;return e&&n}function $V(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(se.replacementClass)}function HV(){return se.autoReplaceSvg===!0?Tc.replace:Tc[se.autoReplaceSvg]||Tc.replace}function qV(t){return je.createElementNS("http://www.w3.org/2000/svg",t)}function zV(t){return je.createElement(t)}function Gb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?qV:zV}=e;if(typeof t=="string")return je.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Gb(i,{ceFn:n}))}),r}function WV(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Tc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Gb(n),e)}),e.getAttribute(Os)===null&&se.keepOriginalSource){let n=je.createComment(WV(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~tp(e).indexOf(se.replacementClass))return Tc.replace(t);const r=new RegExp("".concat(se.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===se.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Ia(i)).join(`
`);e.setAttribute(Os,""),e.innerHTML=s}};function ly(t){t()}function Qb(t,e){const n=typeof e=="function"?e:bc;if(t.length===0)n();else{let r=ly;se.mutateApproach===ZM&&(r=Yr.requestAnimationFrame||ly),r(()=>{const s=HV(),i=ap.begin("mutate");t.map(s),i(),n()})}}let cp=!1;function Yb(){cp=!0}function yf(){cp=!1}let il=null;function uy(t){if(!J_||!se.observeMutations)return;const{treeCallback:e=bc,nodeCallback:n=bc,pseudoElementsCallback:r=bc,observeMutationsRoot:s=je}=t;il=new J_(i=>{if(cp)return;const o=Xr();Fi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!cy(a.addedNodes[0])&&(se.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&se.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&cy(a.target)&&~iV.indexOf(a.attributeName))if(a.attributeName==="class"&&jV(a.target)){const{prefix:l,iconName:u}=Xl(tp(a.target));a.target.setAttribute(Zd,l||o),u&&a.target.setAttribute(ep,u)}else $V(a.target)&&n(a.target)})}),fr&&il.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function KV(){il&&il.disconnect()}function GV(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function QV(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Xl(tp(t));return s.prefix||(s.prefix=Xr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=AV(s.prefix,t.innerText)||sp(s.prefix,hf(t.innerText))),!s.iconName&&se.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function YV(t){const e=Fi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return se.autoA11y&&(n?e["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(r||na()):(e["aria-hidden"]="true",e.focusable="false")),e}function XV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:An,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=QV(t),i=YV(t),o=df("parseNodeAttributes",{},t);let a=e.styleParser?GV(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:An,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:JV}=Rn;function Xb(t){const e=se.autoReplaceSvg==="nest"?hy(t,{styleParser:!1}):hy(t);return~e.extra.classes.indexOf(Nb)?Jr("generateLayersText",t,e):Jr("generateSvgReplacementMutation",t,e)}let Mn=new Set;Ob.map(t=>{Mn.add("fa-".concat(t))});Object.keys(Ts[qe]).map(Mn.add.bind(Mn));Object.keys(Ts[Xt]).map(Mn.add.bind(Mn));Object.keys(Ts[Jt]).map(Mn.add.bind(Mn));Mn=[...Mn];function fy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!fr)return Promise.resolve();const n=je.documentElement.classList,r=h=>n.add("".concat(ty,"-").concat(h)),s=h=>n.remove("".concat(ty,"-").concat(h)),i=se.autoFetchSvg?Mn:Ob.map(h=>"fa-".concat(h)).concat(Object.keys(JV));i.includes("fa")||i.push("fa");const o=[".".concat(Nb,":not([").concat(Os,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Os,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Fi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=ap.begin("onTree"),u=a.reduce((h,f)=>{try{const p=Xb(f);p&&h.push(p)}catch(p){kb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,f)=>{Promise.all(u).then(p=>{Qb(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),f(p)})})}function ZV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xb(t).then(n=>{n&&Qb([n],e)})}function e4(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:pf(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:pf(s||{})),t(r,{...n,mask:s})}}const t4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:g}=t;return Jl({type:"icon",...t},()=>(xs("beforeDOMElementCreation",{iconDefinition:t,params:e}),se.autoA11y&&(o?u["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(a||na()):(u["aria-hidden"]="true",u.focusable="false")),op({icons:{main:mf(g),mask:s?mf(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:{...An,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var n4={mixout(){return{icon:e4(t4)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=fy,t.nodeCallback=ZV,t}}},provides(t){t.i2svg=function(e){const{node:n=je,callback:r=()=>{}}=e;return fy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:f}=n;return new Promise((p,g)=>{Promise.all([gf(r,o),u.iconName?gf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[O,x]=R;p([e,op({icons:{main:O,mask:x},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Ql(o);a.length>0&&(r.style=a);let l;return np(i)&&(l=Jr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},r4={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Jl({type:"layer"},()=>{xs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(se.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},s4={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Jl({type:"counter",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),VV({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(se.cssPrefix,"-layers-counter"),...r]}})))}}}},i4={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Jl({type:"text",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),oy({content:t,transform:{...An,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(se.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Ib){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return se.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,oy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const o4=new RegExp('"',"ug"),dy=[1105920,1112319],py={FontAwesome:{normal:"fas",400:"fas"},...jM,...BM,...QM},vf=Object.keys(py).reduce((t,e)=>(t[e.toLowerCase()]=py[e],t),{}),a4=Object.keys(vf).reduce((t,e)=>{const n=vf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function c4(t){const e=t.replace(o4,""),n=vV(e,0),r=n>=dy[0]&&n<=dy[1],s=e.length===2?e[0]===e[1]:!1;return{value:hf(s?e[0]:e),isSecondary:r||s}}function l4(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(vf[n]||{})[s]||a4[n]}function my(t,e){const n="".concat(JM).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Fi(t.children).filter(p=>p.getAttribute(af)===e)[0],a=Yr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(rV),h=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){const p=a.getPropertyValue("content");let g=l4(l,h);const{value:R,isSecondary:O}=c4(p),x=u[0].startsWith("FontAwesome");let N=sp(g,R),S=N;if(x){const E=RV(R);E.iconName&&E.prefix&&(N=E.iconName,g=E.prefix)}if(N&&!O&&(!o||o.getAttribute(Zd)!==g||o.getAttribute(ep)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);const E=XV(),{extra:A}=E;A.attributes[af]=e,gf(N,g).then(D=>{const V=op({...E,icons:{main:D,mask:ip()},prefix:g,iconName:S,extra:A,watchable:!0}),b=je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=V.map(y=>Ia(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function u4(t){return Promise.all([my(t,"::before"),my(t,"::after")])}function h4(t){return t.parentNode!==document.head&&!~eV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(af)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function gy(t){if(fr)return new Promise((e,n)=>{const r=Fi(t.querySelectorAll("*")).filter(h4).map(u4),s=ap.begin("searchPseudoElements");Yb(),Promise.all(r).then(()=>{s(),yf(),e()}).catch(()=>{s(),yf(),n()})})}var f4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=gy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=je}=e;se.searchPseudoElements&&gy(n)}}};let _y=!1;var d4={mixout(){return{dom:{unwatch(){Yb(),_y=!0}}}},hooks(){return{bootstrap(){uy(df("mutationObserverCallbacks",{}))},noAuto(){KV()},watch(t){const{observeMutationsRoot:e}=t;_y?yf():uy(df("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const yy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var p4={mixout(){return{parse:{transform:t=>yy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=yy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:f};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const eh={x:0,y:0,width:"100%",height:"100%"};function vy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function m4(t){return t.tag==="g"?t.children:[t]}var g4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Xl(n.split(" ").map(s=>s.trim())):ip();return r.prefix||(r.prefix=Xr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:f}=i,p=dV({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...eh,fill:"white"}},R=u.children?{children:u.children.map(vy)}:{},O={tag:"g",attributes:{...p.inner},children:[vy({tag:u.tag,attributes:{...u.attributes,...p.path},...R})]},x={tag:"g",attributes:{...p.outer},children:[O]},N="mask-".concat(o||na()),S="clip-".concat(o||na()),E={tag:"mask",attributes:{...eh,id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,x]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:m4(f)},E]};return n.push(A,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")"),...eh}}),{children:n,attributes:r}}}},_4={provides(t){let e=!1;Yr.matchMedia&&(e=Yr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},y4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},v4=[gV,n4,r4,s4,i4,f4,d4,p4,g4,_4,y4];kV(v4,{mixoutsTo:en});en.noAuto;const E4=en.config,w4=en.library;en.dom;const Ef=en.parse;en.findIconDefinition;en.toHtml;const b4=en.icon;en.layer;en.text;en.counter;function Ey(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ey(Object(n),!0).forEach(function(r){jt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ey(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function T4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function I4(t){var e=T4(t,"string");return typeof e=="symbol"?e:e+""}function ol(t){"@babel/helpers - typeof";return ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ol(t)}function jt(t,e,n){return e=I4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function R4(t,e){if(t==null)return{};var n=A4(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var S4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jb={exports:{}};(function(t){(function(e){var n=function(N,S,E){if(!u(S)||f(S)||p(S)||g(S)||l(S))return S;var A,D=0,V=0;if(h(S))for(A=[],V=S.length;D<V;D++)A.push(n(N,S[D],E));else{A={};for(var b in S)Object.prototype.hasOwnProperty.call(S,b)&&(A[N(b,E)]=n(N,S[b],E))}return A},r=function(N,S){S=S||{};var E=S.separator||"_",A=S.split||/(?=[A-Z])/;return N.split(A).join(E)},s=function(N){return R(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(S,E){return E?E.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var S=s(N);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(N,S){return r(N,S).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return a.call(N)=="[object Array]"},f=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},R=function(N){return N=N-0,N===N},O=function(N,S){var E=S&&"process"in S?S.process:S;return typeof E!="function"?N:function(A,D){return E(A,N,D)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,S){return n(O(s,S),N)},decamelizeKeys:function(N,S){return n(O(o,S),N,S)},pascalizeKeys:function(N,S){return n(O(i,S),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(S4)})(Jb);var P4=Jb.exports,C4=["class","style"];function k4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=P4.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function O4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Zb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Zb(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=O4(h);break;case"style":l.style=k4(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=R4(n,C4);return yt(t.tag,Kn(Kn(Kn({},e),{},{class:s.class,style:Kn(Kn({},s.style),o)},s.attrs),a),r)}var eT=!1;try{eT=!0}catch{}function x4(){if(!eT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function th(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?jt({},t,e):{}}function N4(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},jt(jt(jt(jt(jt(jt(jt(jt(jt(jt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),jt(jt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function wy(t){if(t&&ol(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ef.icon)return Ef.icon(t);if(t===null)return null;if(ol(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var D4=Fn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ve(function(){return wy(e.icon)}),i=Ve(function(){return th("classes",N4(e))}),o=Ve(function(){return th("transform",typeof e.transform=="string"?Ef.transform(e.transform):e.transform)}),a=Ve(function(){return th("mask",wy(e.mask))}),l=Ve(function(){return b4(s.value,Kn(Kn(Kn(Kn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});gn(l,function(h){if(!h)return x4("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ve(function(){return l.value?Zb(l.value.abstract[0],{},r):null});return function(){return u.value}}});const L4={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},M4={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},V4=M4,F4={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},U4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},B4={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};E4.autoAddCss=!1;w4.add(L4,U4,V4,B4,F4);const j4=Zt(t=>{t.vueApp.component("font-awesome-icon",D4)}),$4=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let tT;const Zl=t=>tT=t,nT=Symbol();function wf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Oo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Oo||(Oo={}));function H4(){const t=Cf(!0),e=t.run(()=>zt({}));let n=[],r=[];const s=Vf({install(i){Zl(s),s._a=i,i.provide(nT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!$4?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const rT=()=>{};function by(t,e,n,r=rT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&oa()&&Ac(s),s}function Ks(t,...e){t.slice().forEach(n=>{n(...e)})}const q4=t=>t(),Ty=Symbol(),nh=Symbol();function bf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];wf(s)&&wf(r)&&t.hasOwnProperty(n)&&!Xe(r)&&!er(r)?t[n]=bf(s,r):t[n]=r}return t}const z4=Symbol();function W4(t){return!wf(t)||!t.hasOwnProperty(z4)}const{assign:Tr}=Object;function K4(t){return!!(Xe(t)&&t.effect)}function G4(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=pI(n.state.value[t]);return Tr(h,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=Vf(Ve(()=>{Zl(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return l=sT(t,u,e,n,r,!0),l}function sT(t,e,n={},r,s,i){let o;const a=Tr({actions:{}},n),l={deep:!0};let u,h,f=[],p=[],g;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),zt({});let O;function x(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Oo.patchFunction,storeId:t,events:g}):(bf(r.state.value[t],y),_={type:Oo.patchObject,payload:y,storeId:t,events:g});const w=O=Symbol();Vn().then(()=>{O===w&&(u=!0)}),h=!0,Ks(f,_,r.state.value[t])}const N=i?function(){const{state:_}=n,w=_?_():{};this.$patch(C=>{Tr(C,w)})}:rT;function S(){o.stop(),f=[],p=[],r._s.delete(t)}const E=(y,_="")=>{if(Ty in y)return y[nh]=_,y;const w=function(){Zl(r);const C=Array.from(arguments),P=[],T=[];function me(te){P.push(te)}function ye(te){T.push(te)}Ks(p,{args:C,name:w[nh],store:D,after:me,onError:ye});let J;try{J=y.apply(this&&this.$id===t?this:D,C)}catch(te){throw Ks(T,te),te}return J instanceof Promise?J.then(te=>(Ks(P,te),te)).catch(te=>(Ks(T,te),Promise.reject(te))):(Ks(P,J),J)};return w[Ty]=!0,w[nh]=_,w},A={_p:r,$id:t,$onAction:by.bind(null,p),$patch:x,$reset:N,$subscribe(y,_={}){const w=by(f,y,_.detached,()=>C()),C=o.run(()=>gn(()=>r.state.value[t],P=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:Oo.direct,events:g},P)},Tr({},l,_)));return w},$dispose:S},D=lr(A);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||q4)(()=>r._e.run(()=>(o=Cf()).run(()=>e({action:E}))));for(const y in b){const _=b[y];if(Xe(_)&&!K4(_)||er(_))i||(R&&W4(_)&&(Xe(_)?_.value=R[y]:bf(_,R[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const w=E(_,y);b[y]=w,a.actions[y]=_}}return Tr(D,b),Tr(Se(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:y=>{x(_=>{Tr(_,y)})}}),r._p.forEach(y=>{Tr(D,o.run(()=>y({store:D,app:r._a,pinia:r,options:a})))}),R&&i&&n.hydrate&&n.hydrate(D.$state,R),u=!0,h=!0,D}function Q4(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=$f();return a=a||(u?Ot(nT,null):null),a&&Zl(a),a=tT,a._s.has(r)||(i?sT(r,e,s,a):G4(r,s,a)),a._s.get(r)}return o.$id=r,o}function Y4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function X4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const J4=Zt(t=>{const e=H4();t.vueApp.use(e)});var Iy=/^(GTM|G)-[0-9A-Z]+$/;function rh(t){if(typeof t!="string"||!Iy.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Iy}).${n}`)}}function po(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function pi(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(po(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function Z4(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var eF=class{constructor(t){Ji(this,"id");Ji(this,"options");Ji(this,"scriptElements",[]);Ji(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)rh(typeof e=="string"?e:e.id);else rh(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!Z4(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=pi(n,{...this.options}):r=pi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=pi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?po(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&po(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&po(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&po(window,this.options.dataLayerName).push(t)}},pt;function tF(t,e={id:""}){e={trackOnNextTick:!1,...e},pt=new eF(e),t.config.globalProperties.$gtm=pt,pt.isInBrowserContext()&&(e.vueRouter&&nF(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),pt.options.enabled&&pt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")pi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),pi(n.id,r)}}):pi(e.id,e))),t.provide("gtm",e)}function nF(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,R;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?pt!=null&&pt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(pt!=null&&pt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},f=((R=(g=e.options)==null?void 0:g.history)==null?void 0:R.base)??"";f.endsWith("/")||(f+="/"),f+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Vn(()=>{pt==null||pt.trackView(u,f,h)}):pt==null||pt.trackView(u,f,h)})}function rF(t){return{install:e=>tF(e,t)}}const sF=Zt(t=>{const e=Ds().public,n=a2("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(rF({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:Et(),trackOnNextTick:!1}))}),iF=[BS,$S,cC,uC,hC,fC,pC,mC,gC,DM,j4,J4,sF],oF=Fn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return vs(ha,Gn(r)),()=>yt(t.vnode,{ref:t.vnodeRef})}}),aF=Fn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=De(),i=zt(),o=Ot(ha,null);let a;r({pageRef:i});const l=Ot(_E,null);let u;const h=s.deferHydration();if(s.isHydrating){const f=s.hooks.hookOnce("app:error",h);Et().beforeEach(f)}return t.pageKey&&gn(()=>t.pageKey,(f,p)=>{f!==p&&s.callHook("page:loading:start")}),()=>yt(HE,{name:t.name,route:t.route,...e},{default:f=>{const p=lF(o,f.route,f.Component),g=o&&o.matched.length===f.route.matched.length;if(!f.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(f.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const R=Dh(f,t.pageKey);!s.isHydrating&&!uF(o,f.route,f.Component)&&a===R&&s.callHook("page:loading:end"),a=R;const O=!!(t.transition??f.route.meta.pageTransition??bh),x=O&&cF([t.transition,f.route.meta.pageTransition,bh,{onAfterLeave:()=>{s.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),N=t.keepalive??f.route.meta.keepalive??mR;return u=qE(Yv,O&&x,GP(N,yt(Wf,{suspensible:!0,onPending:()=>s.callHook("page:start",f.Component),onResolve:()=>{Vn(()=>s.callHook("page:finish",f.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const S=yt(oF,{key:R||void 0,vnode:n.default?yt(Ct,void 0,n.default(f)):f.Component,route:f.route,renderKey:R||void 0,trackRootNodes:O,vnodeRef:i});return N&&(S.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),S}}))).default(),u}})}});function cF(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?rd(n.onAfterLeave):void 0}));return mE(...e)}function lF(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Dh({route:e,Component:n})!==Dh({route:t,Component:n})}function uF(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const hF=Fn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Lr[t.name]().then(r=>r.default||r);return()=>yt(n,t.layoutProps,e.slots)}}),fF=Fn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=De(),r=Ot(ha),s=r===Jf()?WP():r,i=Ve(()=>{let l=tt(t.name)??s.meta.layout??"default";return l&&!(l in Lr)&&t.fallback&&(l=tt(t.fallback)),l}),o=zt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);Et().beforeEach(l)}return()=>{const l=i.value&&i.value in Lr,u=s.meta.layoutTransition??pR;return qE(Yv,l&&u,{default:()=>yt(Wf,{suspensible:!0,onResolve:()=>{Vn(a)}},{default:()=>yt(dF,{layoutProps:qv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),dF=Fn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&vs(_E,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Lr)?(s=(r=e.slots).default)==null?void 0:s.call(r):yt(hF,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),eu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},pF={};function mF(t,e){const n=aF,r=fF;return Ut(),Wn(r,null,{default:bn(()=>[Re(n)]),_:1})}const gF=eu(pF,[["render",mF]]),_F=Xf("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Ay=Q4("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=De(),r=Et();try{const s=await HO(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=De();try{await KO(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=De();WO(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),yF={class:"navbar navbar-expand-md navbar-light bg-light"},vF={class:"navbar-nav"},EF={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},wF={class:"navbar-nav ml-auto"};function bF(t,e,n,r,s,i){const o=d2;return Ut(),Bo("nav",yF,[Re(o,{class:"navbar-brand",to:"/"},{default:bn(()=>e[2]||(e[2]=[on("Who's Jimmy")])),_:1}),$e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[$e("span",{class:"navbar-toggler-icon"},null,-1)])),$e("div",{class:sa(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[$e("ul",vF,[Re(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:bn(()=>e[4]||(e[4]=[on("Bio")])),_:1}),Re(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:bn(()=>e[5]||(e[5]=[on("Portfolio ")])),_:1}),Re(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:bn(()=>e[6]||(e[6]=[on("For Sale")])),_:1}),Re(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:bn(()=>e[7]||(e[7]=[on("Cool Stuff")])),_:1}),Re(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:bn(()=>e[8]||(e[8]=[on("Contact Us")])),_:1})])],2),s.isAuth?(Ut(),Bo("div",EF,[$e("ul",wF,[Re(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:bn(()=>[on(Pf(t.user?t.user.email:""),1)]),_:1}),$e("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):bA("",!0)])}const TF={data(){return{visible:!1,isAuth:!1}},computed:{...Y4(Ay,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...X4(Ay,{signOut:"signOut"})}},IF=eu(TF,[["render",bF]]),AF={class:"page-footer font-small bg-light navbar-fixed-bottom"},RF={class:"container"},SF={class:"py-3 pt-3"},PF={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},CF={href:"https://www.facebook.com/whosjimmy"},kF={href:"https://twitter.com/jimmyclaws"},OF={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function xF(t,e){const n=Fo("font-awesome-icon");return Ut(),Bo("footer",AF,[$e("div",RF,[$e("div",SF,[$e("a",PF,[Re(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),$e("a",CF,[Re(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),$e("a",kF,[Re(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),$e("a",OF,[Re(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=$e("div",{class:"footer-copyright text-center font-small"},[$e("div",null,[on("© 2024 Copyright: "),$e("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),$e("div",null,"Disclaimer: All images are copyright to their respective owners."),$e("div",null,[on("A "),$e("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),on(" creation.")])],-1))])}const NF={},DF=eu(NF,[["render",xF],["__scopeId","data-v-063d9b19"]]),LF={class:"text-center my-0 page"},MF={class:"body"},VF={head(){return{title:"Error"}},components:{appHeader:IF,appFooter:DF}},FF=Fn({...VF,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=De();ag({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{ag({title:n.public.SITE_TITLE}),vE({redirect:"/"})};return(i,o)=>{var u;const a=Fo("app-header"),l=Fo("app-footer");return Ut(),Bo("div",LF,[Re(a),$e("div",MF,[o[0]||(o[0]=$e("img",{src:_F,alt:"Error Image"},null,-1)),$e("h2",null,"Error: "+Pf((u=t.error)==null?void 0:u.statusCode),1),$e("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Re(l)])}}}),UF=eu(FF,[["__scopeId","data-v-5f25e24b"]]),BF={key:0},Ry={__name:"nuxt-root",setup(t){const e=()=>null,n=De(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Et().beforeEach(l)}const s=!1;vs(ha,Jf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=bl(),o=!1;_v((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),$R(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Zs(l)),!1});const a=!1;return(l,u)=>(Ut(),Wn(Wf,{onResolve:tt(r)},{default:bn(()=>[tt(o)?(Ut(),Bo("div",BF)):tt(i)?(Ut(),Wn(tt(UF),{key:1,error:tt(i)},null,8,["error"])):tt(a)?(Ut(),Wn(tt(e),{key:2,context:tt(a)},null,8,["context"])):tt(s)?(Ut(),Wn(BI(tt(s)),{key:3})):(Ut(),Wn(tt(gF),{key:4}))]),_:1},8,["onResolve"]))}};let Sy;{let t;Sy=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?l1(Ry):c1(Ry),s=ER({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Tl(l)}r.config.errorHandler=i;try{await TR(s,iF)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(yR),await s.hooks.callHook("app:mounted",r),await Vn()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=Sy().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{DF as $,Xe as A,lr as B,la as C,Ve as D,er as E,Ct as F,zr as G,Ot as H,vs as I,Vn as J,Xf as K,Fo as L,WF as M,ll as N,Wn as O,zF as P,sa as Q,$F as R,wA as S,Yv as T,ha as U,XF as V,jR as W,a2 as X,GF as Y,IF as Z,eu as _,X4 as a,aF as a0,Q4 as a1,De as a2,tU as a3,rU as a4,sU as a5,nU as a6,iU as a7,$e as b,Bo as c,Re as d,bn as e,d2 as f,on as g,tt as h,YF as i,QF as j,bA as k,kM as l,Y4 as m,cU as n,Ut as o,oU as p,aU as q,qF as r,_l as s,Pf as t,Ay as u,KF as v,HF as w,zt as x,LI as y,gn as z};
