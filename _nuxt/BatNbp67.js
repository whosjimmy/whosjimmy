const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./r0HZMSln.js","./nDzkinUQ.js","./B-VwGFdT.js","./CZECtqJf.js","./index.CwtG1KP7.css","./Xpjbf6RL.js","./C2hvXDBp.js","./jShaJRVj.js","./BmUpNknZ.js","./Gallery.B_nrwMtm.css","./Film.KBkYyf_R.css","./Film.RcEDhm2u.css","./CYbTXvQZ.js","./Bio.BcnN8BQQ.css","./D7Ea-ysL.js","./Contact.2xyrHKtO.css","./B8CIVp09.js","./Clocks.CkpqjaRE.css","./B9tZ3dkZ.js","./index.BANqCETR.css","./B8-AwvQ3.js","./CIGuAByB.js","./index.Dbrk1KBP.css","./CMOBDb2G.js","./Celebrities.CcuunyNG.css","./H0J77kPz.js","./Clocks.vUUo-Xqj.css","./Z5vOhlPp.js","./index.D3FkaTh1.css","./CIiJAWS9.js","./CQC-tlfR.js","./B2QeR3Er.js","./aLuFmHpV.js","./default.BE-W7nGe.css"])))=>i.map(i=>d[i]);
var kT=Object.defineProperty;var OT=(t,e,n)=>e in t?kT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Zi=(t,e,n)=>OT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function If(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},ni=[],Pn=()=>{},xT=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Af=t=>t.startsWith("onUpdate:"),ct=Object.assign,Rf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},NT=Object.prototype.hasOwnProperty,ke=(t,e)=>NT.call(t,e),ce=Array.isArray,ri=t=>Ni(t)==="[object Map]",xi=t=>Ni(t)==="[object Set]",tm=t=>Ni(t)==="[object Date]",DT=t=>Ni(t)==="[object RegExp]",de=t=>typeof t=="function",We=t=>typeof t=="string",Dn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Cy=t=>(De(t)||de(t))&&de(t.then)&&de(t.catch),ky=Object.prototype.toString,Ni=t=>ky.call(t),LT=t=>Ni(t).slice(8,-1),Oy=t=>Ni(t)==="[object Object]",Sf=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=If(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},MT=/-(\w)/g,_n=cl(t=>t.replace(MT,(e,n)=>n?n.toUpperCase():"")),VT=/\B([A-Z])/g,Ns=cl(t=>t.replace(VT,"-$1").toLowerCase()),ll=cl(t=>t.charAt(0).toUpperCase()+t.slice(1)),gu=cl(t=>t?`on${ll(t)}`:""),Wr=(t,e)=>!Object.is(t,e),ii=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xy=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ac=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ny=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let nm;const Dy=()=>nm||(nm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ul(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?jT(r):ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||De(t))return t}const FT=/;(?![^(]*\))/g,UT=/:([^]+)/,BT=/\/\*[^]*?\*\//g;function jT(t){const e={};return t.replace(BT,"").split(FT).forEach(n=>{if(n){const r=n.split(UT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sa(t){let e="";if(We(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=sa(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function HF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!We(e)&&(t.class=sa(e)),n&&(t.style=ul(n)),t}const $T="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",HT=If($T);function Ly(t){return!!t||t===""}function qT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ia(t[r],e[r]);return n}function ia(t,e){if(t===e)return!0;let n=tm(t),r=tm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Dn(t),r=Dn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?qT(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ia(t[o],e[o]))return!1}}return String(t)===String(e)}function Pf(t,e){return t.findIndex(n=>ia(n,e))}const My=t=>!!(t&&t.__v_isRef===!0),Cf=t=>We(t)?t:t==null?"":ce(t)||De(t)&&(t.toString===ky||!de(t.toString))?My(t)?Cf(t.value):JSON.stringify(t,Vy,2):String(t),Vy=(t,e)=>My(e)?Vy(t,e.value):ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[_u(r,i)+" =>"]=s,n),{})}:xi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_u(n))}:Dn(e)?_u(e):De(e)&&!ce(e)&&!Oy(e)?String(e):e,_u=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class Fy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function kf(t){return new Fy(t)}function oa(){return Ft}function Rc(t,e=!1){Ft&&Ft.cleanups.push(t)}let Me;const yu=new WeakSet;class Uy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yu.has(this)&&(yu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=go,go=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rm(this),jy(this);const e=Me,n=mn;Me=this,mn=!0;try{return this.fn()}finally{$y(this),Me=e,mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nf(e);this.deps=this.depsTail=void 0,rm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sh(this)&&this.run()}get dirty(){return sh(this)}}let By=0,go;function Of(){By++}function xf(){if(--By>0)return;let t;for(;go;){let e=go;for(go=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function jy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $y(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Nf(r),WT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function sh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Hy(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Hy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===No))return;t.globalVersion=No;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!sh(t)){t.flags&=-3;return}const n=Me,r=mn;Me=t,mn=!0;try{jy(t);const s=t.fn(t._value);(e.version===0||Wr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,mn=r,$y(t),t.flags&=-3}}function Nf(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Nf(s)}}function WT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mn=!0;const qy=[];function es(){qy.push(mn),mn=!1}function ts(){const t=qy.pop();mn=t===void 0?!0:t}function rm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let No=0;class zT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!Me||!mn||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new zT(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Me.flags&4&&Wy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,No++,this.notify(e)}notify(e){Of();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{xf()}}}function Wy(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Sc=new WeakMap,_s=Symbol(""),ih=Symbol(""),Do=Symbol("");function xt(t,e,n){if(mn&&Me){let r=Sc.get(t);r||Sc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new hl),s.track()}}function er(t,e,n,r,s,i){const o=Sc.get(t);if(!o){No++;return}const a=l=>{l&&l.trigger()};if(Of(),e==="clear")o.forEach(a);else{const l=ce(t),u=l&&Sf(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===Do||!Dn(p)&&p>=h)&&a(d)})}else switch(n!==void 0&&a(o.get(n)),u&&a(o.get(Do)),e){case"add":l?u&&a(o.get("length")):(a(o.get(_s)),ri(t)&&a(o.get(ih)));break;case"delete":l||(a(o.get(_s)),ri(t)&&a(o.get(ih)));break;case"set":ri(t)&&a(o.get(_s));break}}xf()}function KT(t,e){var n;return(n=Sc.get(t))==null?void 0:n.get(e)}function Ws(t){const e=Te(t);return e===t?e:(xt(e,"iterate",Do),an(t)?e:e.map(Pt))}function fl(t){return xt(t=Te(t),"iterate",Do),t}const GT={__proto__:null,[Symbol.iterator](){return vu(this,Symbol.iterator,Pt)},concat(...t){return Ws(this).concat(...t.map(e=>ce(e)?Ws(e):e))},entries(){return vu(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return Hn(this,"every",t,e,void 0,arguments)},filter(t,e){return Hn(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return Hn(this,"find",t,e,Pt,arguments)},findIndex(t,e){return Hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Hn(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return Hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Eu(this,"includes",t)},indexOf(...t){return Eu(this,"indexOf",t)},join(t){return Ws(this).join(t)},lastIndexOf(...t){return Eu(this,"lastIndexOf",t)},map(t,e){return Hn(this,"map",t,e,void 0,arguments)},pop(){return eo(this,"pop")},push(...t){return eo(this,"push",t)},reduce(t,...e){return sm(this,"reduce",t,e)},reduceRight(t,...e){return sm(this,"reduceRight",t,e)},shift(){return eo(this,"shift")},some(t,e){return Hn(this,"some",t,e,void 0,arguments)},splice(...t){return eo(this,"splice",t)},toReversed(){return Ws(this).toReversed()},toSorted(t){return Ws(this).toSorted(t)},toSpliced(...t){return Ws(this).toSpliced(...t)},unshift(...t){return eo(this,"unshift",t)},values(){return vu(this,"values",Pt)}};function vu(t,e,n){const r=fl(t),s=r[e]();return r!==t&&!an(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const QT=Array.prototype;function Hn(t,e,n,r,s,i){const o=fl(t),a=o!==t&&!an(t),l=o[e];if(l!==QT[e]){const d=l.apply(t,i);return a?Pt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,Pt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function sm(t,e,n,r){const s=fl(t);let i=n;return s!==t&&(an(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Pt(a),l,t)}),s[e](i,...r)}function Eu(t,e,n){const r=Te(t);xt(r,"iterate",Do);const s=r[e](...n);return(s===-1||s===!1)&&Vf(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function eo(t,e,n=[]){es(),Of();const r=Te(t)[e].apply(t,n);return xf(),ts(),r}const YT=If("__proto__,__v_isRef,__isVue"),zy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn));function XT(t){Dn(t)||(t=String(t));const e=Te(this);return xt(e,"has",t),e.hasOwnProperty(t)}class Ky{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uI:Xy:i?Yy:Qy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=GT[n]))return l;if(n==="hasOwnProperty")return XT}const a=Reflect.get(e,n,Xe(e)?e:r);return(Dn(n)?zy.has(n):YT(n))||(s||xt(e,"get",n),i)?a:Xe(a)?o&&Sf(n)?a:a.value:De(a)?s?Jy(a):ur(a):a}}class Gy extends Ky{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=zr(i);if(!an(r)&&!zr(r)&&(i=Te(i),r=Te(r)),!ce(e)&&Xe(i)&&!Xe(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Sf(n)?Number(n)<e.length:ke(e,n),a=Reflect.set(e,n,r,Xe(e)?e:s);return e===Te(s)&&(o?Wr(r,i)&&er(e,"set",n,r):er(e,"add",n,r)),a}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&er(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dn(n)||!zy.has(n))&&xt(e,"has",n),r}ownKeys(e){return xt(e,"iterate",ce(e)?"length":_s),Reflect.ownKeys(e)}}class JT extends Ky{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ZT=new Gy,eI=new JT,tI=new Gy(!0);const Df=t=>t,dl=t=>Reflect.getPrototypeOf(t);function Ua(t,e,n=!1,r=!1){t=t.__v_raw;const s=Te(t),i=Te(e);n||(Wr(e,i)&&xt(s,"get",e),xt(s,"get",i));const{has:o}=dl(s),a=r?Df:n?Uf:Pt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ba(t,e=!1){const n=this.__v_raw,r=Te(n),s=Te(t);return e||(Wr(t,s)&&xt(r,"has",t),xt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ja(t,e=!1){return t=t.__v_raw,!e&&xt(Te(t),"iterate",_s),Reflect.get(t,"size",t)}function im(t,e=!1){!e&&!an(t)&&!zr(t)&&(t=Te(t));const n=Te(this);return dl(n).has.call(n,t)||(n.add(t),er(n,"add",t,t)),this}function om(t,e,n=!1){!n&&!an(e)&&!zr(e)&&(e=Te(e));const r=Te(this),{has:s,get:i}=dl(r);let o=s.call(r,t);o||(t=Te(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Wr(e,a)&&er(r,"set",t,e):er(r,"add",t,e),this}function am(t){const e=Te(this),{has:n,get:r}=dl(e);let s=n.call(e,t);s||(t=Te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&er(e,"delete",t,void 0),i}function cm(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&er(t,"clear",void 0,void 0),n}function $a(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Te(o),l=e?Df:t?Uf:Pt;return!t&&xt(a,"iterate",_s),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function Ha(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=ri(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Df:e?Uf:Pt;return!e&&xt(i,"iterate",l?ih:_s),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function vr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nI(){const t={get(i){return Ua(this,i)},get size(){return ja(this)},has:Ba,add:im,set:om,delete:am,clear:cm,forEach:$a(!1,!1)},e={get(i){return Ua(this,i,!1,!0)},get size(){return ja(this)},has:Ba,add(i){return im.call(this,i,!0)},set(i,o){return om.call(this,i,o,!0)},delete:am,clear:cm,forEach:$a(!1,!0)},n={get(i){return Ua(this,i,!0)},get size(){return ja(this,!0)},has(i){return Ba.call(this,i,!0)},add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear"),forEach:$a(!0,!1)},r={get(i){return Ua(this,i,!0,!0)},get size(){return ja(this,!0)},has(i){return Ba.call(this,i,!0)},add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear"),forEach:$a(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ha(i,!1,!1),n[i]=Ha(i,!0,!1),e[i]=Ha(i,!1,!0),r[i]=Ha(i,!0,!0)}),[t,n,e,r]}const[rI,sI,iI,oI]=nI();function Lf(t,e){const n=e?t?oI:iI:t?sI:rI;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const aI={get:Lf(!1,!1)},cI={get:Lf(!1,!0)},lI={get:Lf(!0,!1)};const Qy=new WeakMap,Yy=new WeakMap,Xy=new WeakMap,uI=new WeakMap;function hI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fI(t){return t.__v_skip||!Object.isExtensible(t)?0:hI(LT(t))}function ur(t){return zr(t)?t:Mf(t,!1,ZT,aI,Qy)}function Qn(t){return Mf(t,!1,tI,cI,Yy)}function Jy(t){return Mf(t,!0,eI,lI,Xy)}function Mf(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=fI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tr(t){return zr(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function an(t){return!!(t&&t.__v_isShallow)}function Vf(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Ff(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&xy(t,"__v_skip",!0),t}const Pt=t=>De(t)?ur(t):t,Uf=t=>De(t)?Jy(t):t;function Xe(t){return t?t.__v_isRef===!0:!1}function zt(t){return Zy(t,!1)}function Lo(t){return Zy(t,!0)}function Zy(t,e){return Xe(t)?t:new dI(t,e)}class dI{constructor(e,n){this.dep=new hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||an(e)||zr(e);e=r?e:Te(e),Wr(e,n)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function tt(t){return Xe(t)?t.value:t}const pI={get:(t,e,n)=>e==="__v_raw"?t:tt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ev(t){return tr(t)?t:new Proxy(t,pI)}class mI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new hl,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function gI(t){return new mI(t)}function _I(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=tv(t,n);return e}class yI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return KT(Te(this._object),this._key)}}class vI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function EI(t,e,n){return Xe(t)?t:de(t)?new vI(t):De(t)&&arguments.length>1?tv(t,e,n):zt(t)}function tv(t,e,n){const r=t[e];return Xe(r)?r:new yI(t,e,n)}class wI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=No-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,Me!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Hy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bI(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new wI(r,s,n)}const qa={},Pc=new WeakMap;let fs;function TI(t,e=!1,n=fs){if(n){let r=Pc.get(n);r||Pc.set(n,r=[]),r.push(t)}}function II(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:an(R)||s===!1||s===0?zn(R,1):zn(R);let h,d,p,g,I=!1,x=!1;if(Xe(t)?(d=()=>t.value,I=an(t)):tr(t)?(d=()=>u(t),I=!0):ce(t)?(x=!0,I=t.some(R=>tr(R)||an(R)),d=()=>t.map(R=>{if(Xe(R))return R.value;if(tr(R))return u(R);if(de(R))return l?l(R,2):R()})):de(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){es();try{p()}finally{ts()}}const R=fs;fs=h;try{return l?l(t,3,[g]):t(g)}finally{fs=R}}:d=Pn,e&&s){const R=d,D=s===!0?1/0:s;d=()=>zn(R(),D)}const N=oa(),O=()=>{h.stop(),N&&Rf(N.effects,h)};if(i)if(e){const R=e;e=(...D)=>{R(...D),O()}}else{const R=d;d=()=>{R(),O()}}let P=x?new Array(t.length).fill(qa):qa;const E=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const D=h.run();if(s||I||(x?D.some((V,b)=>Wr(V,P[b])):Wr(D,P))){p&&p();const V=fs;fs=h;try{const b=[D,P===qa?void 0:x&&P[0]===qa?[]:P,g];l?l(e,3,b):e(...b),P=D}finally{fs=V}}}else h.run()};return a&&a(E),h=new Uy(d),h.scheduler=o?()=>o(E,!1):E,g=R=>TI(R,!1,h),p=h.onStop=()=>{const R=Pc.get(h);if(R){if(l)l(R,4);else for(const D of R)D();Pc.delete(h)}},e?r?E(!0):P=h.run():o?o(E.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function zn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Xe(t))zn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)zn(t[r],e,n);else if(xi(t)||ri(t))t.forEach(r=>{zn(r,e,n)});else if(Oy(t)){for(const r in t)zn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&zn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aa(t,e,n,r){try{return r?t(...r):t()}catch(s){ca(s,e,n)}}function yn(t,e,n,r){if(de(t)){const s=aa(t,e,n,r);return s&&Cy(s)&&s.catch(i=>{ca(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function ca(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){es(),aa(i,null,10,[t,l,u]),ts();return}}AI(t,n,s,r,o)}function AI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Mo=!1,oh=!1;const Ut=[];let bn=0;const oi=[];let Ar=null,Gs=0;const nv=Promise.resolve();let Bf=null;function Fn(t){const e=Bf||nv;return t?e.then(this?t.bind(this):t):e}function RI(t){let e=Mo?bn+1:0,n=Ut.length;for(;e<n;){const r=e+n>>>1,s=Ut[r],i=Vo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function jf(t){if(!(t.flags&1)){const e=Vo(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=Vo(n)?Ut.push(t):Ut.splice(RI(e),0,t),t.flags|=1,rv()}}function rv(){!Mo&&!oh&&(oh=!0,Bf=nv.then(sv))}function ah(t){ce(t)?oi.push(...t):Ar&&t.id===-1?Ar.splice(Gs+1,0,t):t.flags&1||(oi.push(t),t.flags|=1),rv()}function lm(t,e,n=Mo?bn+1:0){for(;n<Ut.length;n++){const r=Ut[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ut.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Cc(t){if(oi.length){const e=[...new Set(oi)].sort((n,r)=>Vo(n)-Vo(r));if(oi.length=0,Ar){Ar.push(...e);return}for(Ar=e,Gs=0;Gs<Ar.length;Gs++){const n=Ar[Gs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Gs=0}}const Vo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sv(t){oh=!1,Mo=!0;try{for(bn=0;bn<Ut.length;bn++){const e=Ut[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),aa(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;bn<Ut.length;bn++){const e=Ut[bn];e&&(e.flags&=-2)}bn=0,Ut.length=0,Cc(),Mo=!1,Bf=null,(Ut.length||oi.length)&&sv()}}let ot=null,iv=null;function kc(t){const e=ot;return ot=t,iv=t&&t.type.__scopeId||null,e}function Tn(t,e=ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wm(-1);const i=kc(e);let o;try{o=t(...s)}finally{kc(i),r._d&&wm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qF(t,e){if(ot===null)return t;const n=El(ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ve]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&zn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function In(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(es(),yn(l,n,8,[t.el,a,t,e]),ts())}}const SI=Symbol("_vte"),ov=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),Wa=Symbol("_enterCb");function PI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gl(()=>{t.isMounted=!0}),la(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],av={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},cv=t=>{const e=t.subTree;return e.component?cv(e.component):e},CI={name:"BaseTransition",props:av,setup(t,{slots:e}){const n=yl(),r=PI();return()=>{const s=e.default&&hv(e.default(),!0);if(!s||!s.length)return;const i=lv(s),o=Te(t),{mode:a}=o;if(r.isLeaving)return wu(i);const l=um(i);if(!l)return wu(i);let u=ch(l,o,r,n,p=>u=p);l.type!==st&&mi(l,u);const h=n.subTree,d=h&&um(h);if(d&&d.type!==st&&!pn(l,d)&&cv(n).type!==st){const p=ch(d,o,r,n);if(mi(d,p),a==="out-in"&&l.type!==st)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave},wu(i);a==="in-out"&&l.type!==st&&(p.delayLeave=(g,I,x)=>{const N=uv(r,d);N[String(d.key)]=d,g[Rr]=()=>{I(),g[Rr]=void 0,delete u.delayedLeave},u.delayedLeave=x})}return i}}};function lv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==st){e=n;break}}return e}const kI=CI;function uv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ch(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:I,onLeaveCancelled:x,onBeforeAppear:N,onAppear:O,onAfterAppear:P,onAppearCancelled:E}=e,R=String(t.key),D=uv(n,t),V=(_,w)=>{_&&yn(_,r,9,w)},b=(_,w)=>{const C=w[1];V(_,w),ce(_)?_.every(S=>S.length<=1)&&C():_.length<=1&&C()},y={mode:o,persisted:a,beforeEnter(_){let w=l;if(!n.isMounted)if(i)w=N||l;else return;_[Rr]&&_[Rr](!0);const C=D[R];C&&pn(t,C)&&C.el[Rr]&&C.el[Rr](),V(w,[_])},enter(_){let w=u,C=h,S=d;if(!n.isMounted)if(i)w=O||u,C=P||h,S=E||d;else return;let T=!1;const pe=_[Wa]=ye=>{T||(T=!0,ye?V(S,[_]):V(C,[_]),y.delayedLeave&&y.delayedLeave(),_[Wa]=void 0)};w?b(w,[_,pe]):pe()},leave(_,w){const C=String(t.key);if(_[Wa]&&_[Wa](!0),n.isUnmounting)return w();V(p,[_]);let S=!1;const T=_[Rr]=pe=>{S||(S=!0,w(),pe?V(x,[_]):V(I,[_]),_[Rr]=void 0,D[C]===t&&delete D[C])};D[C]=t,g?b(g,[_,T]):T()},clone(_){const w=ch(_,e,n,r,s);return s&&s(w),w}};return y}function wu(t){if(pl(t))return t=rr(t),t.children=null,t}function um(t){if(!pl(t))return ov(t.type)&&t.children?lv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ct?(o.patchFlag&128&&s++,r=r.concat(hv(o.children,e,a))):(e||o.type!==st)&&r.push(a!=null?rr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Un(t,e){return de(t)?ct({name:t.name},e,{setup:t}):t}function fv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oc(t,e,n,r,s=!1){if(ce(t)){t.forEach((I,x)=>Oc(I,e&&(ce(e)?e[x]:e),n,r,s));return}if(Ur(r)&&!s)return;const i=r.shapeFlag&4?El(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Ve?a.refs={}:a.refs,d=a.setupState,p=Te(d),g=d===Ve?()=>!1:I=>ke(p,I);if(u!=null&&u!==l&&(We(u)?(h[u]=null,g(u)&&(d[u]=null)):Xe(u)&&(u.value=null)),de(l))aa(l,a,12,[o,h]);else{const I=We(l),x=Xe(l);if(I||x){const N=()=>{if(t.f){const O=I?g(l)?d[l]:h[l]:l.value;s?ce(O)&&Rf(O,i):ce(O)?O.includes(i)||O.push(i):I?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else I?(h[l]=o,g(l)&&(d[l]=o)):x&&(l.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,mt(N,n)):N()}}}let hm=!1;const zs=()=>{hm||(console.error("Hydration completed but contains mismatches."),hm=!0)},OI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",xI=t=>t.namespaceURI.includes("MathML"),za=t=>{if(t.nodeType===1){if(OI(t))return"svg";if(xI(t))return"mathml"}},Ka=t=>t.nodeType===8;function NI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(E,R)=>{if(!R.hasChildNodes()){n(null,E,R),Cc(),R._vnode=E;return}d(R.firstChild,E,null,null,null),Cc(),R._vnode=E},d=(E,R,D,V,b,y=!1)=>{y=y||!!R.dynamicChildren;const _=Ka(E)&&E.data==="[",w=()=>x(E,R,D,V,b,_),{type:C,ref:S,shapeFlag:T,patchFlag:pe}=R;let ye=E.nodeType;R.el=E,pe===-2&&(y=!1,R.dynamicChildren=null);let J=null;switch(C){case Es:ye!==3?R.children===""?(l(R.el=s(""),o(E),E),J=E):J=w():(E.data!==R.children&&(zs(),E.data=R.children),J=i(E));break;case st:P(E)?(J=i(E),O(R.el=E.content.firstChild,E,D)):ye!==8||_?J=w():J=i(E);break;case yo:if(_&&(E=i(E),ye=E.nodeType),ye===1||ye===3){J=E;const ne=!R.children.length;for(let ee=0;ee<R.staticCount;ee++)ne&&(R.children+=J.nodeType===1?J.outerHTML:J.data),ee===R.staticCount-1&&(R.anchor=J),J=i(J);return _?i(J):J}else w();break;case Ct:_?J=I(E,R,D,V,b,y):J=w();break;default:if(T&1)(ye!==1||R.type.toLowerCase()!==E.tagName.toLowerCase())&&!P(E)?J=w():J=p(E,R,D,V,b,y);else if(T&6){R.slotScopeIds=b;const ne=o(E);if(_?J=N(E):Ka(E)&&E.data==="teleport start"?J=N(E,E.data,"teleport end"):J=i(E),e(R,ne,null,D,V,za(ne),y),Ur(R)){let ee;_?(ee=Se(Ct),ee.anchor=J?J.previousSibling:ne.lastChild):ee=E.nodeType===3?on(""):Se("div"),ee.el=E,R.component.subTree=ee}}else T&64?ye!==8?J=w():J=R.type.hydrate(E,R,D,V,b,y,t,g):T&128&&(J=R.type.hydrate(E,R,D,V,za(o(E)),b,y,t,d))}return S!=null&&Oc(S,null,V,R),J},p=(E,R,D,V,b,y)=>{y=y||!!R.dynamicChildren;const{type:_,props:w,patchFlag:C,shapeFlag:S,dirs:T,transition:pe}=R,ye=_==="input"||_==="option";if(ye||C!==-1){T&&In(R,null,D,"created");let J=!1;if(P(E)){J=Lv(V,pe)&&D&&D.vnode.props&&D.vnode.props.appear;const ee=E.content.firstChild;J&&pe.beforeEnter(ee),O(ee,E,D),R.el=E=ee}if(S&16&&!(w&&(w.innerHTML||w.textContent))){let ee=g(E.firstChild,R,E,D,V,b,y);for(;ee;){Ga(E,1)||zs();const ze=ee;ee=ee.nextSibling,a(ze)}}else if(S&8){let ee=R.children;ee[0]===`
`&&(E.tagName==="PRE"||E.tagName==="TEXTAREA")&&(ee=ee.slice(1)),E.textContent!==ee&&(Ga(E,0)||zs(),E.textContent=R.children)}if(w){if(ye||!y||C&48){const ee=E.tagName.includes("-");for(const ze in w)(ye&&(ze.endsWith("value")||ze==="indeterminate")||ra(ze)&&!si(ze)||ze[0]==="."||ee)&&r(E,ze,null,w[ze],void 0,D)}else if(w.onClick)r(E,"onClick",null,w.onClick,void 0,D);else if(C&4&&tr(w.style))for(const ee in w.style)w.style[ee]}let ne;(ne=w&&w.onVnodeBeforeMount)&&Ht(ne,D,R),T&&In(R,null,D,"beforeMount"),((ne=w&&w.onVnodeMounted)||T||J)&&jv(()=>{ne&&Ht(ne,D,R),J&&pe.enter(E),T&&In(R,null,D,"mounted")},V)}return E.nextSibling},g=(E,R,D,V,b,y,_)=>{_=_||!!R.dynamicChildren;const w=R.children,C=w.length;for(let S=0;S<C;S++){const T=_?w[S]:w[S]=Gt(w[S]),pe=T.type===Es;E?(pe&&!_&&S+1<C&&Gt(w[S+1]).type===Es&&(l(s(E.data.slice(T.children.length)),D,i(E)),E.data=T.children),E=d(E,T,V,b,y,_)):pe&&!T.children?l(T.el=s(""),D):(Ga(D,1)||zs(),n(null,T,D,null,V,b,za(D),y))}return E},I=(E,R,D,V,b,y)=>{const{slotScopeIds:_}=R;_&&(b=b?b.concat(_):_);const w=o(E),C=g(i(E),R,w,D,V,b,y);return C&&Ka(C)&&C.data==="]"?i(R.anchor=C):(zs(),l(R.anchor=u("]"),w,C),C)},x=(E,R,D,V,b,y)=>{if(Ga(E.parentElement,1)||zs(),R.el=null,y){const C=N(E);for(;;){const S=i(E);if(S&&S!==C)a(S);else break}}const _=i(E),w=o(E);return a(E),n(null,R,w,_,D,V,za(w),b),_},N=(E,R="[",D="]")=>{let V=0;for(;E;)if(E=i(E),E&&Ka(E)&&(E.data===R&&V++,E.data===D)){if(V===0)return i(E);V--}return E},O=(E,R,D)=>{const V=R.parentNode;V&&V.replaceChild(E,R);let b=D;for(;b;)b.vnode.el===R&&(b.vnode.el=b.subTree.el=E),b=b.parent},P=E=>E.nodeType===1&&E.tagName==="TEMPLATE";return[h,d]}const fm="data-allow-mismatch",DI={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ga(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(fm);)t=t.parentElement;const n=t&&t.getAttribute(fm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(DI[e])}}const Ur=t=>!!t.type.__asyncLoader,pl=t=>t.type.__isKeepAlive,LI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=yl(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(P,E,R,D,V)=>{const b=P.component;u(P,E,R,0,a),l(b.vnode,P,E,R,b,a,D,P.slotScopeIds,V),mt(()=>{b.isDeactivated=!1,b.a&&ii(b.a);const y=P.props&&P.props.onVnodeMounted;y&&Ht(y,b.parent,P)},a)},r.deactivate=P=>{const E=P.component;Nc(E.m),Nc(E.a),u(P,p,null,1,a),mt(()=>{E.da&&ii(E.da);const R=P.props&&P.props.onVnodeUnmounted;R&&Ht(R,E.parent,P),E.isDeactivated=!0},a)};function g(P){bu(P),h(P,n,a,!0)}function I(P){s.forEach((E,R)=>{const D=gh(E.type);D&&!P(D)&&x(R)})}function x(P){const E=s.get(P);E&&(!o||!pn(E,o))?g(E):o&&bu(o),s.delete(P),i.delete(P)}gn(()=>[t.include,t.exclude],([P,E])=>{P&&I(R=>io(P,R)),E&&I(R=>!io(E,R))},{flush:"post",deep:!0});let N=null;const O=()=>{N!=null&&(Dc(n.subTree.type)?mt(()=>{s.set(N,Qa(n.subTree))},n.subTree.suspense):s.set(N,Qa(n.subTree)))};return gl(O),gv(O),la(()=>{s.forEach(P=>{const{subTree:E,suspense:R}=n,D=Qa(E);if(P.type===D.type&&P.key===D.key){bu(D);const V=D.component.da;V&&mt(V,R);return}g(P)})}),()=>{if(N=null,!e.default)return o=null;const P=e.default(),E=P[0];if(P.length>1)return o=null,P;if(!_i(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let R=Qa(E);if(R.type===st)return o=null,R;const D=R.type,V=gh(Ur(R)?R.type.__asyncResolved||{}:D),{include:b,exclude:y,max:_}=t;if(b&&(!V||!io(b,V))||y&&V&&io(y,V))return R.shapeFlag&=-257,o=R,E;const w=R.key==null?D:R.key,C=s.get(w);return R.el&&(R=rr(R),E.shapeFlag&128&&(E.ssContent=R)),N=w,C?(R.el=C.el,R.component=C.component,R.transition&&mi(R,R.transition),R.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),_&&i.size>parseInt(_,10)&&x(i.values().next().value)),R.shapeFlag|=256,o=R,Dc(E.type)?E:R}}},MI=LI;function io(t,e){return ce(t)?t.some(n=>io(n,e)):We(t)?t.split(",").includes(e):DT(t)?(t.lastIndex=0,t.test(e)):!1}function dv(t,e){mv(t,"a",e)}function pv(t,e){mv(t,"da",e)}function mv(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ml(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pl(s.parent.vnode)&&VI(r,e,n,s),s=s.parent}}function VI(t,e,n,r){const s=ml(e,t,r,!0);_v(()=>{Rf(r[e],s)},n)}function bu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Qa(t){return t.shapeFlag&128?t.ssContent:t}function ml(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{es();const a=ua(n),l=yn(e,n,t,o);return a(),ts(),l});return r?s.unshift(i):s.push(i),i}}const hr=t=>(e,n=ht)=>{(!vl||t==="sp")&&ml(t,(...r)=>e(...r),n)},FI=hr("bm"),gl=hr("m"),UI=hr("bu"),gv=hr("u"),la=hr("bum"),_v=hr("um"),BI=hr("sp"),jI=hr("rtg"),$I=hr("rtc");function yv(t,e=ht){ml("ec",t,e)}const vv="components";function Fo(t,e){return wv(vv,t,!0,e)||t}const Ev=Symbol.for("v-ndc");function HI(t){return We(t)?wv(vv,t,!1)||t:t||Ev}function wv(t,e,n=!0,r=!1){const s=ot||ht;if(s){const i=s.type;{const a=gh(i,!1);if(a&&(a===e||a===_n(e)||a===ll(_n(e))))return i}const o=dm(s[t]||i[t],e)||dm(s.appContext[t],e);return!o&&r?i:o}}function dm(t,e){return t&&(t[e]||t[_n(e)]||t[ll(_n(e))])}function WF(t,e,n,r){let s;const i=n,o=ce(t);if(o||We(t)){const a=o&&tr(t);let l=!1;a&&(l=!an(t),t=fl(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?Pt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function zF(t,e,n={},r,s){if(ot.ce||ot.parent&&Ur(ot.parent)&&ot.parent.ce)return Bt(),Kn(Ct,null,[Se("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Bt();const o=i&&bv(i(n)),a=Kn(Ct,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),a}function bv(t){return t.some(e=>_i(e)?!(e.type===st||e.type===Ct&&!bv(e.children)):!0)?t:null}const lh=t=>t?zv(t)?El(t):lh(t.parent):null,_o=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lh(t.parent),$root:t=>lh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$f(t),$forceUpdate:t=>t.f||(t.f=()=>{jf(t.update)}),$nextTick:t=>t.n||(t.n=Fn.bind(t.proxy)),$watch:t=>uA.bind(t)}),Tu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&ke(t,e),qI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tu(r,e))return o[e]=1,r[e];if(s!==Ve&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ve&&ke(n,e))return o[e]=4,n[e];uh&&(o[e]=0)}}const h=_o[e];let d,p;if(h)return e==="$attrs"&&xt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&ke(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ke(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tu(s,e)?(s[e]=n,!0):r!==Ve&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&ke(t,o)||Tu(e,o)||(a=i[0])&&ke(a,o)||ke(r,o)||ke(_o,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uh=!0;function WI(t){const e=$f(t),n=t.proxy,r=t.ctx;uh=!1,e.beforeCreate&&mm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:I,activated:x,deactivated:N,beforeDestroy:O,beforeUnmount:P,destroyed:E,unmounted:R,render:D,renderTracked:V,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:w,inheritAttrs:C,components:S,directives:T,filters:pe}=e;if(u&&zI(u,r,null),o)for(const ne in o){const ee=o[ne];de(ee)&&(r[ne]=ee.bind(n))}if(s){const ne=s.call(n,n);De(ne)&&(t.data=ur(ne))}if(uh=!0,i)for(const ne in i){const ee=i[ne],ze=de(ee)?ee.bind(n,n):de(ee.get)?ee.get.bind(n,n):Pn,un=!de(ee)&&de(ee.set)?ee.set.bind(n):Pn,tn=Fe({get:ze,set:un});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const ne in a)Tv(a[ne],r,n,ne);if(l){const ne=de(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(ee=>{vs(ee,ne[ee])})}h&&mm(h,t,"c");function J(ne,ee){ce(ee)?ee.forEach(ze=>ne(ze.bind(n))):ee&&ne(ee.bind(n))}if(J(FI,d),J(gl,p),J(UI,g),J(gv,I),J(dv,x),J(pv,N),J(yv,y),J($I,V),J(jI,b),J(la,P),J(_v,R),J(BI,_),ce(w))if(w.length){const ne=t.exposed||(t.exposed={});w.forEach(ee=>{Object.defineProperty(ne,ee,{get:()=>n[ee],set:ze=>n[ee]=ze})})}else t.exposed||(t.exposed={});D&&t.render===Pn&&(t.render=D),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),T&&(t.directives=T),_&&fv(t)}function zI(t,e,n=Pn){ce(t)&&(t=hh(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mm(t,e,n){yn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tv(t,e,n,r){let s=r.includes(".")?Fv(n,r):()=>n[r];if(We(t)){const i=e[t];de(i)&&gn(s,i)}else if(de(t))gn(s,t.bind(n));else if(De(t))if(ce(t))t.forEach(i=>Tv(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&gn(s,i,t)}}function $f(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>xc(l,u,o,!0)),xc(l,e,o)),De(e)&&i.set(e,l),l}function xc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xc(t,i,n,!0),s&&s.forEach(o=>xc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=KI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const KI={data:gm,props:_m,emits:_m,methods:oo,computed:oo,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:oo,directives:oo,watch:QI,provide:gm,inject:GI};function gm(t,e){return e?t?function(){return ct(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function GI(t,e){return oo(hh(t),hh(e))}function hh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function oo(t,e){return t?ct(Object.create(null),t,e):e}function _m(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ct(Object.create(null),pm(t),pm(e??{})):e}function QI(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function Iv(){return{app:null,config:{isNativeTag:xT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let YI=0;function XI(t,e){return function(r,s=null){de(r)||(r=ct({},r)),s!=null&&!De(s)&&(s=null);const i=Iv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:YI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gv,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...d)):de(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||Se(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,El(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(yn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=ys;ys=u;try{return h()}finally{ys=d}}};return u}}let ys=null;function vs(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function Ot(t,e,n=!1){const r=ht||ot;if(r||ys){const s=ys?ys._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Hf(){return!!(ht||ot||ys)}const Av={},Rv=()=>Object.create(Av),Sv=t=>Object.getPrototypeOf(t)===Av;function JI(t,e,n,r=!1){const s={},i=Rv();t.propsDefaults=Object.create(null),Pv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ZI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Te(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(_l(t.emitsOptions,p))continue;const g=e[p];if(l)if(ke(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const I=_n(p);s[I]=fh(l,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Pv(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!ke(e,d)&&((h=Ns(d))===d||!ke(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=fh(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!ke(e,d))&&(delete i[d],u=!0)}u&&er(t.attrs,"set","")}function Pv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(si(l))continue;const u=e[l];let h;s&&ke(s,h=_n(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:_l(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Te(n),u=a||Ve;for(let h=0;h<i.length;h++){const d=i[h];n[d]=fh(s,l,d,u[d],t,!ke(u,d))}}return o}function fh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ua(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ns(n))&&(r=!0))}return r}const eA=new WeakMap;function Cv(t,e,n=!1){const r=n?eA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=d=>{l=!0;const[p,g]=Cv(d,e,!0);ct(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return De(t)&&r.set(t,ni),ni;if(ce(i))for(let h=0;h<i.length;h++){const d=_n(i[h]);ym(d)&&(o[d]=Ve)}else if(i)for(const h in i){const d=_n(h);if(ym(d)){const p=i[h],g=o[d]=ce(p)||de(p)?{type:p}:ct({},p),I=g.type;let x=!1,N=!0;if(ce(I))for(let O=0;O<I.length;++O){const P=I[O],E=de(P)&&P.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(N=!1)}else x=de(I)&&I.name==="Boolean";g[0]=x,g[1]=N,(x||ke(g,"default"))&&a.push(d)}}const u=[o,a];return De(t)&&r.set(t,u),u}function ym(t){return t[0]!=="$"&&!si(t)}const kv=t=>t[0]==="_"||t==="$stable",qf=t=>ce(t)?t.map(Gt):[Gt(t)],tA=(t,e,n)=>{if(e._n)return e;const r=Tn((...s)=>qf(e(...s)),n);return r._c=!1,r},Ov=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kv(s))continue;const i=t[s];if(de(i))e[s]=tA(s,i,r);else if(i!=null){const o=qf(i);e[s]=()=>o}}},xv=(t,e)=>{const n=qf(e);t.slots.default=()=>n},Nv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},nA=(t,e,n)=>{const r=t.slots=Rv();if(t.vnode.shapeFlag&32){const s=e._;s?(Nv(r,e,n),n&&xy(r,"_",s,!0)):Ov(e,r)}else e&&xv(t,e)},rA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Nv(s,e,n):(i=!e.$stable,Ov(e,s)),o=e}else e&&(xv(t,e),o={default:1});if(i)for(const a in s)!kv(a)&&o[a]==null&&delete s[a]},mt=jv;function sA(t){return Dv(t)}function iA(t){return Dv(t,NI)}function Dv(t,e){const n=Dy();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Pn,insertStaticContent:I}=t,x=(A,k,M,j=null,U=null,q=null,Q=void 0,K=null,z=!!k.dynamicChildren)=>{if(A===k)return;A&&!pn(A,k)&&(j=B(A),Ke(A,U,q,!0),A=null),k.patchFlag===-2&&(z=!1,k.dynamicChildren=null);const{type:W,ref:le,shapeFlag:X}=k;switch(W){case Es:N(A,k,M,j);break;case st:O(A,k,M,j);break;case yo:A==null&&P(k,M,j,Q);break;case Ct:S(A,k,M,j,U,q,Q,K,z);break;default:X&1?D(A,k,M,j,U,q,Q,K,z):X&6?T(A,k,M,j,U,q,Q,K,z):(X&64||X&128)&&W.process(A,k,M,j,U,q,Q,K,z,te)}le!=null&&U&&Oc(le,A&&A.ref,q,k||A,!k)},N=(A,k,M,j)=>{if(A==null)r(k.el=a(k.children),M,j);else{const U=k.el=A.el;k.children!==A.children&&u(U,k.children)}},O=(A,k,M,j)=>{A==null?r(k.el=l(k.children||""),M,j):k.el=A.el},P=(A,k,M,j)=>{[A.el,A.anchor]=I(A.children,k,M,j,A.el,A.anchor)},E=({el:A,anchor:k},M,j)=>{let U;for(;A&&A!==k;)U=p(A),r(A,M,j),A=U;r(k,M,j)},R=({el:A,anchor:k})=>{let M;for(;A&&A!==k;)M=p(A),s(A),A=M;s(k)},D=(A,k,M,j,U,q,Q,K,z)=>{k.type==="svg"?Q="svg":k.type==="math"&&(Q="mathml"),A==null?V(k,M,j,U,q,Q,K,z):_(A,k,U,q,Q,K,z)},V=(A,k,M,j,U,q,Q,K)=>{let z,W;const{props:le,shapeFlag:X,transition:oe,dirs:re}=A;if(z=A.el=o(A.type,q,le&&le.is,le),X&8?h(z,A.children):X&16&&y(A.children,z,null,j,U,Iu(A,q),Q,K),re&&In(A,null,j,"created"),b(z,A,A.scopeId,Q,j),le){for(const Pe in le)Pe!=="value"&&!si(Pe)&&i(z,Pe,null,le[Pe],q,j);"value"in le&&i(z,"value",null,le.value,q),(W=le.onVnodeBeforeMount)&&Ht(W,j,A)}re&&In(A,null,j,"beforeMount");const he=Lv(U,oe);he&&oe.beforeEnter(z),r(z,k,M),((W=le&&le.onVnodeMounted)||he||re)&&mt(()=>{W&&Ht(W,j,A),he&&oe.enter(z),re&&In(A,null,j,"mounted")},U)},b=(A,k,M,j,U)=>{if(M&&g(A,M),j)for(let q=0;q<j.length;q++)g(A,j[q]);if(U){let q=U.subTree;if(k===q||Dc(q.type)&&(q.ssContent===k||q.ssFallback===k)){const Q=U.vnode;b(A,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(A,k,M,j,U,q,Q,K,z=0)=>{for(let W=z;W<A.length;W++){const le=A[W]=K?Sr(A[W]):Gt(A[W]);x(null,le,k,M,j,U,q,Q,K)}},_=(A,k,M,j,U,q,Q)=>{const K=k.el=A.el;let{patchFlag:z,dynamicChildren:W,dirs:le}=k;z|=A.patchFlag&16;const X=A.props||Ve,oe=k.props||Ve;let re;if(M&&cs(M,!1),(re=oe.onVnodeBeforeUpdate)&&Ht(re,M,k,A),le&&In(k,A,M,"beforeUpdate"),M&&cs(M,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&h(K,""),W?w(A.dynamicChildren,W,K,M,j,Iu(k,U),q):Q||ee(A,k,K,null,M,j,Iu(k,U),q,!1),z>0){if(z&16)C(K,X,oe,M,U);else if(z&2&&X.class!==oe.class&&i(K,"class",null,oe.class,U),z&4&&i(K,"style",X.style,oe.style,U),z&8){const he=k.dynamicProps;for(let Pe=0;Pe<he.length;Pe++){const Ie=he[Pe],bt=X[Ie],lt=oe[Ie];(lt!==bt||Ie==="value")&&i(K,Ie,bt,lt,U,M)}}z&1&&A.children!==k.children&&h(K,k.children)}else!Q&&W==null&&C(K,X,oe,M,U);((re=oe.onVnodeUpdated)||le)&&mt(()=>{re&&Ht(re,M,k,A),le&&In(k,A,M,"updated")},j)},w=(A,k,M,j,U,q,Q)=>{for(let K=0;K<k.length;K++){const z=A[K],W=k[K],le=z.el&&(z.type===Ct||!pn(z,W)||z.shapeFlag&70)?d(z.el):M;x(z,W,le,null,j,U,q,Q,!0)}},C=(A,k,M,j,U)=>{if(k!==M){if(k!==Ve)for(const q in k)!si(q)&&!(q in M)&&i(A,q,k[q],null,U,j);for(const q in M){if(si(q))continue;const Q=M[q],K=k[q];Q!==K&&q!=="value"&&i(A,q,K,Q,U,j)}"value"in M&&i(A,"value",k.value,M.value,U)}},S=(A,k,M,j,U,q,Q,K,z)=>{const W=k.el=A?A.el:a(""),le=k.anchor=A?A.anchor:a("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:re}=k;re&&(K=K?K.concat(re):re),A==null?(r(W,M,j),r(le,M,j),y(k.children||[],M,le,U,q,Q,K,z)):X>0&&X&64&&oe&&A.dynamicChildren?(w(A.dynamicChildren,oe,M,U,q,Q,K),(k.key!=null||U&&k===U.subTree)&&Mv(A,k,!0)):ee(A,k,M,le,U,q,Q,K,z)},T=(A,k,M,j,U,q,Q,K,z)=>{k.slotScopeIds=K,A==null?k.shapeFlag&512?U.ctx.activate(k,M,j,Q,z):pe(k,M,j,U,q,Q,z):ye(A,k,z)},pe=(A,k,M,j,U,q,Q)=>{const K=A.component=PA(A,j,U);if(pl(A)&&(K.ctx.renderer=te),CA(K,!1,Q),K.asyncDep){if(U&&U.registerDep(K,J,Q),!A.el){const z=K.subTree=Se(st);O(null,z,k,M)}}else J(K,A,k,M,U,q,Q)},ye=(A,k,M)=>{const j=k.component=A.component;if(gA(A,k,M))if(j.asyncDep&&!j.asyncResolved){ne(j,k,M);return}else j.next=k,j.update();else k.el=A.el,j.vnode=k},J=(A,k,M,j,U,q,Q)=>{const K=()=>{if(A.isMounted){let{next:X,bu:oe,u:re,parent:he,vnode:Pe}=A;{const Tt=Vv(A);if(Tt){X&&(X.el=Pe.el,ne(A,X,Q)),Tt.asyncDep.then(()=>{A.isUnmounted||K()});return}}let Ie=X,bt;cs(A,!1),X?(X.el=Pe.el,ne(A,X,Q)):X=Pe,oe&&ii(oe),(bt=X.props&&X.props.onVnodeBeforeUpdate)&&Ht(bt,he,X,Pe),cs(A,!0);const lt=Au(A),ft=A.subTree;A.subTree=lt,x(ft,lt,d(ft.el),B(ft),A,U,q),X.el=lt.el,Ie===null&&zf(A,lt.el),re&&mt(re,U),(bt=X.props&&X.props.onVnodeUpdated)&&mt(()=>Ht(bt,he,X,Pe),U)}else{let X;const{el:oe,props:re}=k,{bm:he,m:Pe,parent:Ie,root:bt,type:lt}=A,ft=Ur(k);if(cs(A,!1),he&&ii(he),!ft&&(X=re&&re.onVnodeBeforeMount)&&Ht(X,Ie,k),cs(A,!0),oe&&xe){const Tt=()=>{A.subTree=Au(A),xe(oe,A.subTree,A,U,null)};ft&&lt.__asyncHydrate?lt.__asyncHydrate(oe,A,Tt):Tt()}else{bt.ce&&bt.ce._injectChildStyle(lt);const Tt=A.subTree=Au(A);x(null,Tt,M,j,A,U,q),k.el=Tt.el}if(Pe&&mt(Pe,U),!ft&&(X=re&&re.onVnodeMounted)){const Tt=k;mt(()=>Ht(X,Ie,Tt),U)}(k.shapeFlag&256||Ie&&Ur(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&A.a&&mt(A.a,U),A.isMounted=!0,k=M=j=null}};A.scope.on();const z=A.effect=new Uy(K);A.scope.off();const W=A.update=z.run.bind(z),le=A.job=z.runIfDirty.bind(z);le.i=A,le.id=A.uid,z.scheduler=()=>jf(le),cs(A,!0),W()},ne=(A,k,M)=>{k.component=A;const j=A.vnode.props;A.vnode=k,A.next=null,ZI(A,k.props,j,M),rA(A,k.children,M),es(),lm(A),ts()},ee=(A,k,M,j,U,q,Q,K,z=!1)=>{const W=A&&A.children,le=A?A.shapeFlag:0,X=k.children,{patchFlag:oe,shapeFlag:re}=k;if(oe>0){if(oe&128){un(W,X,M,j,U,q,Q,K,z);return}else if(oe&256){ze(W,X,M,j,U,q,Q,K,z);return}}re&8?(le&16&&jt(W,U,q),X!==W&&h(M,X)):le&16?re&16?un(W,X,M,j,U,q,Q,K,z):jt(W,U,q,!0):(le&8&&h(M,""),re&16&&y(X,M,j,U,q,Q,K,z))},ze=(A,k,M,j,U,q,Q,K,z)=>{A=A||ni,k=k||ni;const W=A.length,le=k.length,X=Math.min(W,le);let oe;for(oe=0;oe<X;oe++){const re=k[oe]=z?Sr(k[oe]):Gt(k[oe]);x(A[oe],re,M,null,U,q,Q,K,z)}W>le?jt(A,U,q,!0,!1,X):y(k,M,j,U,q,Q,K,z,X)},un=(A,k,M,j,U,q,Q,K,z)=>{let W=0;const le=k.length;let X=A.length-1,oe=le-1;for(;W<=X&&W<=oe;){const re=A[W],he=k[W]=z?Sr(k[W]):Gt(k[W]);if(pn(re,he))x(re,he,M,null,U,q,Q,K,z);else break;W++}for(;W<=X&&W<=oe;){const re=A[X],he=k[oe]=z?Sr(k[oe]):Gt(k[oe]);if(pn(re,he))x(re,he,M,null,U,q,Q,K,z);else break;X--,oe--}if(W>X){if(W<=oe){const re=oe+1,he=re<le?k[re].el:j;for(;W<=oe;)x(null,k[W]=z?Sr(k[W]):Gt(k[W]),M,he,U,q,Q,K,z),W++}}else if(W>oe)for(;W<=X;)Ke(A[W],U,q,!0),W++;else{const re=W,he=W,Pe=new Map;for(W=he;W<=oe;W++){const Dt=k[W]=z?Sr(k[W]):Gt(k[W]);Dt.key!=null&&Pe.set(Dt.key,W)}let Ie,bt=0;const lt=oe-he+1;let ft=!1,Tt=0;const mr=new Array(lt);for(W=0;W<lt;W++)mr[W]=0;for(W=re;W<=X;W++){const Dt=A[W];if(bt>=lt){Ke(Dt,U,q,!0);continue}let nn;if(Dt.key!=null)nn=Pe.get(Dt.key);else for(Ie=he;Ie<=oe;Ie++)if(mr[Ie-he]===0&&pn(Dt,k[Ie])){nn=Ie;break}nn===void 0?Ke(Dt,U,q,!0):(mr[nn-he]=W+1,nn>=Tt?Tt=nn:ft=!0,x(Dt,k[nn],M,null,U,q,Q,K,z),bt++)}const Us=ft?oA(mr):ni;for(Ie=Us.length-1,W=lt-1;W>=0;W--){const Dt=he+W,nn=k[Dt],Bs=Dt+1<le?k[Dt+1].el:j;mr[W]===0?x(null,nn,M,Bs,U,q,Q,K,z):ft&&(Ie<0||W!==Us[Ie]?tn(nn,M,Bs,2):Ie--)}}},tn=(A,k,M,j,U=null)=>{const{el:q,type:Q,transition:K,children:z,shapeFlag:W}=A;if(W&6){tn(A.component.subTree,k,M,j);return}if(W&128){A.suspense.move(k,M,j);return}if(W&64){Q.move(A,k,M,te);return}if(Q===Ct){r(q,k,M);for(let X=0;X<z.length;X++)tn(z[X],k,M,j);r(A.anchor,k,M);return}if(Q===yo){E(A,k,M);return}if(j!==2&&W&1&&K)if(j===0)K.beforeEnter(q),r(q,k,M),mt(()=>K.enter(q),U);else{const{leave:X,delayLeave:oe,afterLeave:re}=K,he=()=>r(q,k,M),Pe=()=>{X(q,()=>{he(),re&&re()})};oe?oe(q,he,Pe):Pe()}else r(q,k,M)},Ke=(A,k,M,j=!1,U=!1)=>{const{type:q,props:Q,ref:K,children:z,dynamicChildren:W,shapeFlag:le,patchFlag:X,dirs:oe,cacheIndex:re}=A;if(X===-2&&(U=!1),K!=null&&Oc(K,null,M,A,!0),re!=null&&(k.renderCache[re]=void 0),le&256){k.ctx.deactivate(A);return}const he=le&1&&oe,Pe=!Ur(A);let Ie;if(Pe&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&Ht(Ie,k,A),le&6)wn(A.component,M,j);else{if(le&128){A.suspense.unmount(M,j);return}he&&In(A,null,k,"beforeUnmount"),le&64?A.type.remove(A,k,M,te,j):W&&!W.hasOnce&&(q!==Ct||X>0&&X&64)?jt(W,k,M,!1,!0):(q===Ct&&X&384||!U&&le&16)&&jt(z,k,M),j&&Ge(A)}(Pe&&(Ie=Q&&Q.onVnodeUnmounted)||he)&&mt(()=>{Ie&&Ht(Ie,k,A),he&&In(A,null,k,"unmounted")},M)},Ge=A=>{const{type:k,el:M,anchor:j,transition:U}=A;if(k===Ct){pr(M,j);return}if(k===yo){R(A);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,z=()=>Q(M,q);K?K(A.el,q,z):z()}else q()},pr=(A,k)=>{let M;for(;A!==k;)M=p(A),s(A),A=M;s(k)},wn=(A,k,M)=>{const{bum:j,scope:U,job:q,subTree:Q,um:K,m:z,a:W}=A;Nc(z),Nc(W),j&&ii(j),U.stop(),q&&(q.flags|=8,Ke(Q,A,k,M)),K&&mt(K,k),mt(()=>{A.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},jt=(A,k,M,j=!1,U=!1,q=0)=>{for(let Q=q;Q<A.length;Q++)Ke(A[Q],k,M,j,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const k=p(A.anchor||A.el),M=k&&k[SI];return M?p(M):k};let Z=!1;const Y=(A,k,M)=>{A==null?k._vnode&&Ke(k._vnode,null,null,!0):x(k._vnode||null,A,k,null,null,null,M),k._vnode=A,Z||(Z=!0,lm(),Cc(),Z=!1)},te={p:x,um:Ke,m:tn,r:Ge,mt:pe,mc:y,pc:ee,pbc:w,n:B,o:t};let Ee,xe;return e&&([Ee,xe]=e(te)),{render:Y,hydrate:Ee,createApp:XI(Y,Ee)}}function Iu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Lv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Mv(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Mv(o,a)),a.type===Es&&(a.el=o.el)}}function oA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vv(e)}function Nc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const aA=Symbol.for("v-scx"),cA=()=>Ot(aA);function lA(t,e){return Wf(t,null,e)}function gn(t,e,n){return Wf(t,e,n)}function Wf(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,a=ct({},n);let l;if(vl)if(i==="sync"){const p=cA();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:Pn,resume:Pn,pause:Pn};const u=ht;a.call=(p,g,I)=>yn(p,u,g,I);let h=!1;i==="post"?a.scheduler=p=>{mt(p,u&&u.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():jf(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=II(t,e,a);return l&&l.push(d),d}function uA(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Fv(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=ua(this),a=Wf(s,i.bind(r),n);return o(),a}function Fv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const hA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_n(e)}Modifiers`]||t[`${Ns(e)}Modifiers`];function fA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&hA(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>We(h)?h.trim():h)),o.number&&(s=n.map(Ac)));let a,l=r[a=gu(e)]||r[a=gu(_n(e))];!l&&i&&(l=r[a=gu(Ns(e))]),l&&yn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(u,t,6,s)}}function Uv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=Uv(u,e,!0);h&&(a=!0,ct(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(De(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):ct(o,i),De(t)&&r.set(t,o),o)}function _l(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Ns(e))||ke(t,e))}function Au(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:I,inheritAttrs:x}=t,N=kc(t);let O,P;try{if(n.shapeFlag&4){const R=s||r,D=R;O=Gt(u.call(D,R,h,d,g,p,I)),P=a}else{const R=e;O=Gt(R.length>1?R(d,{attrs:a,slots:o,emit:l}):R(d,null)),P=e.props?a:pA(a)}}catch(R){vo.length=0,ca(R,t,1),O=Se(st)}let E=O;if(P&&x!==!1){const R=Object.keys(P),{shapeFlag:D}=E;R.length&&D&7&&(i&&R.some(Af)&&(P=mA(P,i)),E=rr(E,P,!1,!0))}return n.dirs&&(E=rr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&mi(E,n.transition),O=E,kc(N),O}function dA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(_i(s)){if(s.type!==st||s.children==="v-if"){if(n)return;n=s}}else return}return n}const pA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},mA=(t,e)=>{const n={};for(const r in t)(!Af(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vm(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!_l(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?vm(r,o,u):!0:!!o;return!1}function vm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_l(n,i))return!0}return!1}function zf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dc=t=>t.__isSuspense;let dh=0;const _A={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)yA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}vA(t,e,n,r,s,o,a,l,u)}},hydrate:EA,normalize:wA},Kf=_A;function Uo(t,e){const n=t.props&&t.props[e];de(n)&&n()}function yA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=Bv(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Uo(t,"onPending"),Uo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ai(p,t.ssFallback)):p.resolve(!1,!0)}function vA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:I,pendingBranch:x,isInFallback:N,isHydrating:O}=d;if(x)d.pendingBranch=p,pn(p,x)?(l(x,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(O||(l(I,g,n,r,s,null,i,o,a),ai(d,g)))):(d.pendingId=dh++,O?(d.isHydrating=!1,d.activeBranch=x):u(x,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(I,g,n,r,s,null,i,o,a),ai(d,g))):I&&pn(p,I)?(l(I,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(I&&pn(p,I))l(I,p,n,r,s,d,i,o,a),ai(d,p);else if(Uo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=dh++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:P,pendingId:E}=d;P>0?setTimeout(()=>{d.pendingId===E&&d.fallback(g)},P):P===0&&d.fallback(g)}}function Bv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:I,o:{parentNode:x,remove:N}}=u;let O;const P=bA(t);P&&e&&e.pendingBranch&&(O=e.pendingId,e.deps++);const E=t.props?Ny(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:dh++,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(V=!1,b=!1){const{vnode:y,activeBranch:_,pendingBranch:w,pendingId:C,effects:S,parentComponent:T,container:pe}=D;let ye=!1;D.isHydrating?D.isHydrating=!1:V||(ye=_&&w.transition&&w.transition.mode==="out-in",ye&&(_.transition.afterLeave=()=>{C===D.pendingId&&(p(w,pe,i===R?I(_):i,0),ah(S))}),_&&(x(_.el)===pe&&(i=I(_)),g(_,T,D,!0)),ye||p(w,pe,i,0)),ai(D,w),D.pendingBranch=null,D.isInFallback=!1;let J=D.parent,ne=!1;for(;J;){if(J.pendingBranch){J.effects.push(...S),ne=!0;break}J=J.parent}!ne&&!ye&&ah(S),D.effects=[],P&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Uo(y,"onResolve")},fallback(V){if(!D.pendingBranch)return;const{vnode:b,activeBranch:y,parentComponent:_,container:w,namespace:C}=D;Uo(b,"onFallback");const S=I(y),T=()=>{D.isInFallback&&(d(null,V,w,S,_,null,C,a,l),ai(D,V))},pe=V.transition&&V.transition.mode==="out-in";pe&&(y.transition.afterLeave=T),D.isInFallback=!0,g(y,_,null,!0),pe||T()},move(V,b,y){D.activeBranch&&p(D.activeBranch,V,b,y),D.container=V},next(){return D.activeBranch&&I(D.activeBranch)},registerDep(V,b,y){const _=!!D.pendingBranch;_&&D.deps++;const w=V.vnode.el;V.asyncDep.catch(C=>{ca(C,V,0)}).then(C=>{if(V.isUnmounted||D.isUnmounted||D.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:S}=V;mh(V,C,!1),w&&(S.el=w);const T=!w&&V.subTree.el;b(V,S,x(w||V.subTree.el),w?null:I(V.subTree),D,o,y),T&&N(T),zf(V,S.el),_&&--D.deps===0&&D.resolve()})},unmount(V,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,V,b),D.pendingBranch&&g(D.pendingBranch,n,V,b)}};return D}function EA(t,e,n,r,s,i,o,a,l){const u=e.suspense=Bv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function wA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Em(r?n.default:n),t.ssFallback=r?Em(n.fallback):Se(st)}function Em(t){let e;if(de(t)){const n=gi&&t._c;n&&(t._d=!1,Bt()),t=t(),n&&(t._d=!0,e=Wt,$v())}return ce(t)&&(t=dA(t)),t=Gt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function jv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):ah(t)}function ai(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,zf(r,s))}function bA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ct=Symbol.for("v-fgt"),Es=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),yo=Symbol.for("v-stc"),vo=[];let Wt=null;function Bt(t=!1){vo.push(Wt=t?null:[])}function $v(){vo.pop(),Wt=vo[vo.length-1]||null}let gi=1;function wm(t){gi+=t,t<0&&Wt&&(Wt.hasOnce=!0)}function Hv(t){return t.dynamicChildren=gi>0?Wt||ni:null,$v(),gi>0&&Wt&&Wt.push(t),t}function Bo(t,e,n,r,s,i){return Hv($e(t,e,n,r,s,i,!0))}function Kn(t,e,n,r,s){return Hv(Se(t,e,n,r,s,!0))}function _i(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const qv=({key:t})=>t??null,lc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Xe(t)||de(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function $e(t,e=null,n=null,r=0,s=null,i=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qv(e),ref:e&&lc(e),scopeId:iv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ot};return a?(Gf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),gi>0&&!o&&Wt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Wt.push(l),l}const Se=TA;function TA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ev)&&(t=st),_i(t)){const a=rr(t,e,!0);return n&&Gf(a,n),gi>0&&!i&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag=-2,a}if(NA(t)&&(t=t.__vccOpts),e){e=IA(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=sa(a)),De(l)&&(Vf(l)&&!ce(l)&&(l=ct({},l)),e.style=ul(l))}const o=We(t)?1:Dc(t)?128:ov(t)?64:De(t)?4:de(t)?2:0;return $e(t,e,n,r,s,o,i,!0)}function IA(t){return t?Vf(t)||Sv(t)?ct({},t):t:null}function rr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Wv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qv(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(lc(e)):[i,lc(e)]:lc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rr(t.ssContent),ssFallback:t.ssFallback&&rr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&mi(h,l.clone(h)),h}function on(t=" ",e=0){return Se(Es,null,t,e)}function KF(t,e){const n=Se(yo,null,t);return n.staticCount=e,n}function AA(t="",e=!1){return e?(Bt(),Kn(st,null,t)):Se(st,null,t)}function Gt(t){return t==null||typeof t=="boolean"?Se(st):ce(t)?Se(Ct,null,t.slice()):typeof t=="object"?Sr(t):Se(Es,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rr(t)}function Gf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Sv(e)?e._ctx=ot:s===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),r&64?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sa([e.class,r.class]));else if(s==="style")e.style=ul([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ht(t,e,n,r=null){yn(t,e,7,[n,r])}const RA=Iv();let SA=0;function PA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||RA,i={uid:SA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cv(r,s),emitsOptions:Uv(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fA.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const yl=()=>ht||ot;let Lc,ph;{const t=Dy(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Lc=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),ph=e("__VUE_SSR_SETTERS__",n=>vl=n)}const ua=t=>{const e=ht;return Lc(t),t.scope.on(),()=>{t.scope.off(),Lc(e)}},bm=()=>{ht&&ht.scope.off(),Lc(null)};function zv(t){return t.vnode.shapeFlag&4}let vl=!1;function CA(t,e=!1,n=!1){e&&ph(e);const{props:r,children:s}=t.vnode,i=zv(t);JI(t,r,i,e),nA(t,s,n);const o=i?kA(t,e):void 0;return e&&ph(!1),o}function kA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qI);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?xA(t):null,i=ua(t);es();const o=aa(r,t,0,[t.props,s]);if(ts(),i(),Cy(o)){if(Ur(t)||fv(t),o.then(bm,bm),e)return o.then(a=>{mh(t,a,e)}).catch(a=>{ca(a,t,0)});t.asyncDep=o}else mh(t,o,e)}else Kv(t,e)}function mh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=ev(e)),Kv(t,n)}let Tm;function Kv(t,e,n){const r=t.type;if(!t.render){if(!e&&Tm&&!r.render){const s=r.template||$f(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ct(ct({isCustomElement:i,delimiters:a},o),l);r.render=Tm(s,u)}}t.render=r.render||Pn}{const s=ua(t);es();try{WI(t)}finally{ts(),s()}}}const OA={get(t,e){return xt(t,"get",""),t[e]}};function xA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,OA),slots:t.slots,emit:t.emit,expose:e}}function El(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ev(Ff(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}})):t.proxy}function gh(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function NA(t){return de(t)&&"__vccOpts"in t}const Fe=(t,e)=>bI(t,e,vl);function yt(t,e,n){const r=arguments.length;return r===2?De(e)&&!ce(e)?_i(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_i(n)&&(n=[n]),Se(t,e,n))}const Gv="3.5.5";/**
* @vue/runtime-dom v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _h;const Im=typeof window<"u"&&window.trustedTypes;if(Im)try{_h=Im.createPolicy("vue",{createHTML:t=>t})}catch{}const Qv=_h?t=>_h.createHTML(t):t=>t,DA="http://www.w3.org/2000/svg",LA="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Am=Wn&&Wn.createElement("template"),MA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Wn.createElementNS(DA,t):e==="mathml"?Wn.createElementNS(LA,t):n?Wn.createElement(t,{is:n}):Wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Am.innerHTML=Qv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Am.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Er="transition",to="animation",jo=Symbol("_vtc"),Yv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},VA=ct({},av,Yv),FA=t=>(t.displayName="Transition",t.props=VA,t),Xv=FA((t,{slots:e})=>yt(kI,UA(t),e)),ls=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Rm=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function UA(t){const e={};for(const S in t)S in Yv||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,I=BA(s),x=I&&I[0],N=I&&I[1],{onBeforeEnter:O,onEnter:P,onEnterCancelled:E,onLeave:R,onLeaveCancelled:D,onBeforeAppear:V=O,onAppear:b=P,onAppearCancelled:y=E}=e,_=(S,T,pe)=>{us(S,T?h:a),us(S,T?u:o),pe&&pe()},w=(S,T)=>{S._isLeaving=!1,us(S,d),us(S,g),us(S,p),T&&T()},C=S=>(T,pe)=>{const ye=S?b:P,J=()=>_(T,S,pe);ls(ye,[T,J]),Sm(()=>{us(T,S?l:i),wr(T,S?h:a),Rm(ye)||Pm(T,r,x,J)})};return ct(e,{onBeforeEnter(S){ls(O,[S]),wr(S,i),wr(S,o)},onBeforeAppear(S){ls(V,[S]),wr(S,l),wr(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,T){S._isLeaving=!0;const pe=()=>w(S,T);wr(S,d),wr(S,p),HA(),Sm(()=>{S._isLeaving&&(us(S,d),wr(S,g),Rm(R)||Pm(S,r,N,pe))}),ls(R,[S,pe])},onEnterCancelled(S){_(S,!1),ls(E,[S])},onAppearCancelled(S){_(S,!0),ls(y,[S])},onLeaveCancelled(S){w(S),ls(D,[S])}})}function BA(t){if(t==null)return null;if(De(t))return[Ru(t.enter),Ru(t.leave)];{const e=Ru(t);return[e,e]}}function Ru(t){return Ny(t)}function wr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[jo]||(t[jo]=new Set)).add(e)}function us(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[jo];n&&(n.delete(e),n.size||(t[jo]=void 0))}function Sm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let jA=0;function Pm(t,e,n,r){const s=t._endId=++jA,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=$A(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function $A(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${Er}Delay`),i=r(`${Er}Duration`),o=Cm(s,i),a=r(`${to}Delay`),l=r(`${to}Duration`),u=Cm(a,l);let h=null,d=0,p=0;e===Er?o>0&&(h=Er,d=o,p=i.length):e===to?u>0&&(h=to,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?Er:to:null,p=h?h===Er?i.length:l.length:0);const g=h===Er&&/\b(transform|all)(,|$)/.test(r(`${Er}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function Cm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>km(n)+km(t[r])))}function km(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function HA(){return document.body.offsetHeight}function qA(t,e,n){const r=t[jo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Om=Symbol("_vod"),WA=Symbol("_vsh"),zA=Symbol(""),KA=/(^|;)\s*display\s*:/;function GA(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&uc(r,a,"")}else for(const o in e)n[o]==null&&uc(r,o,"");for(const o in n)o==="display"&&(i=!0),uc(r,o,n[o])}else if(s){if(e!==n){const o=r[zA];o&&(n+=";"+o),r.cssText=n,i=KA.test(n)}}else e&&t.removeAttribute("style");Om in t&&(t[Om]=i?r.display:"",t[WA]&&(r.display="none"))}const xm=/\s*!important$/;function uc(t,e,n){if(ce(n))n.forEach(r=>uc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=QA(t,e);xm.test(n)?t.setProperty(Ns(r),n.replace(xm,""),"important"):t[r]=n}}const Nm=["Webkit","Moz","ms"],Su={};function QA(t,e){const n=Su[e];if(n)return n;let r=_n(e);if(r!=="filter"&&r in t)return Su[e]=r;r=ll(r);for(let s=0;s<Nm.length;s++){const i=Nm[s]+r;if(i in t)return Su[e]=i}return e}const Dm="http://www.w3.org/1999/xlink";function Lm(t,e,n,r,s,i=HT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dm,e.slice(6,e.length)):t.setAttributeNS(Dm,e,n):n==null||i&&!Ly(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dn(n)?String(n):n)}function YA(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qv(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Ly(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function kr(t,e,n,r){t.addEventListener(e,n,r)}function XA(t,e,n,r){t.removeEventListener(e,n,r)}const Mm=Symbol("_vei");function JA(t,e,n,r,s=null){const i=t[Mm]||(t[Mm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=ZA(e);if(r){const u=i[e]=n1(r,s);kr(t,a,u,l)}else o&&(XA(t,a,o,l),i[e]=void 0)}}const Vm=/(?:Once|Passive|Capture)$/;function ZA(t){let e;if(Vm.test(t)){e={};let r;for(;r=t.match(Vm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let Pu=0;const e1=Promise.resolve(),t1=()=>Pu||(e1.then(()=>Pu=0),Pu=Date.now());function n1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(r1(r,n.value),e,5,[r])};return n.value=t,n.attached=t1(),n}function r1(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Fm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,s1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?qA(t,r,o):e==="style"?GA(t,n,r):ra(e)?Af(e)||JA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):i1(t,e,r,o))?(YA(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lm(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lm(t,e,r,o))};function i1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fm(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Fm(e)&&We(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!We(n)))}const yi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>ii(e,n):e};function o1(t){t.target.composing=!0}function Um(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nr=Symbol("_assign"),GF={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[nr]=yi(s);const i=r||s.props&&s.props.type==="number";kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ac(a)),t[nr](a)}),n&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",o1),kr(t,"compositionend",Um),kr(t,"change",Um))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[nr]=yi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ac(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},QF={deep:!0,created(t,e,n){t[nr]=yi(n),kr(t,"change",()=>{const r=t._modelValue,s=$o(t),i=t.checked,o=t[nr];if(ce(r)){const a=Pf(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(xi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Jv(t,i))})},mounted:Bm,beforeUpdate(t,e,n){t[nr]=yi(n),Bm(t,e,n)}};function Bm(t,{value:e,oldValue:n},r){t._modelValue=e;let s;ce(e)?s=Pf(e,r.props.value)>-1:xi(e)?s=e.has(r.props.value):s=ia(e,Jv(t,!0)),t.checked!==s&&(t.checked=s)}const YF={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xi(e);kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ac($o(o)):$o(o));t[nr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Fn(()=>{t._assigning=!1})}),t[nr]=yi(r)},mounted(t,{value:e,modifiers:{number:n}}){jm(t,e)},beforeUpdate(t,e,n){t[nr]=yi(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||jm(t,e)}};function jm(t,e,n){const r=t.multiple,s=ce(e);if(!(r&&!s&&!xi(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=$o(a);if(r)if(s){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Pf(e,l)>-1}else a.selected=e.has(l);else if(ia($o(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $o(t){return"_value"in t?t._value:t.value}function Jv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const a1=["ctrl","shift","alt","meta"],c1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>a1.some(n=>t[`${n}Key`]&&!e.includes(n))},XF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=c1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Zv=ct({patchProp:s1},MA);let Eo,$m=!1;function l1(){return Eo||(Eo=sA(Zv))}function u1(){return Eo=$m?Eo:iA(Zv),$m=!0,Eo}const h1=(...t)=>{const e=l1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,eE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},f1=(...t)=>{const e=u1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tE(r);if(s)return n(s,!0,eE(s))},e};function eE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tE(t){return We(t)?document.querySelector(t):t}const d1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,p1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,m1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function g1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){_1(t);return}return e}function _1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ho(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!m1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(d1.test(t)||p1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,g1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const y1=/#/g,v1=/&/g,E1=/\//g,w1=/=/g,Qf=/\+/g,b1=/%5e/gi,T1=/%60/gi,I1=/%7c/gi,A1=/%20/gi;function R1(t){return encodeURI(""+t).replace(I1,"|")}function yh(t){return R1(typeof t=="string"?t:JSON.stringify(t)).replace(Qf,"%2B").replace(A1,"+").replace(y1,"%23").replace(v1,"%26").replace(T1,"`").replace(b1,"^").replace(E1,"%2F")}function Cu(t){return yh(t).replace(w1,"%3D")}function Mc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function S1(t){return Mc(t.replace(Qf," "))}function P1(t){return Mc(t.replace(Qf," "))}function nE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=S1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=P1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function C1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Cu(t)}=${yh(n)}`).join("&"):`${Cu(t)}=${yh(e)}`:Cu(t)}function k1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>C1(e,t[e])).filter(Boolean).join("&")}const O1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,x1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,N1=/^([/\\]\s*){2,}[^/\\]/,D1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,L1=/\/$|\/\?|\/#/,M1=/^\.?\//;function fr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?O1.test(t):x1.test(t)||(e.acceptRelative?N1.test(t):!1)}function V1(t){return!!t&&D1.test(t)}function vh(t="",e){return e?L1.test(t):t.endsWith("/")}function wl(t="",e){if(!e)return(vh(t)?t.slice(0,-1):t)||"/";if(!vh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Vc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(vh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function F1(t=""){return t.startsWith("/")}function Hm(t=""){return F1(t)?t:"/"+t}function U1(t,e){if(sE(e)||fr(t))return t;const n=wl(e);return t.startsWith(n)?t:bl(n,t)}function qm(t,e){if(sE(e))return t;const n=wl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function rE(t,e){const n=$1(t),r={...nE(n.search),...e};return n.search=k1(r),H1(n)}function sE(t){return!t||t==="/"}function B1(t){return t&&t!=="/"}function bl(t,...e){let n=t||"";for(const r of e.filter(s=>B1(s)))if(n){const s=r.replace(M1,"");n=Vc(n)+s}else n=r;return n}function iE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&fr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function j1(t,e,n={}){return n.trailingSlash||(t=Vc(t),e=Vc(e)),n.leadingSlash||(t=Hm(t),e=Hm(e)),n.encoding||(t=Mc(t),e=Mc(e)),t===e}const oE=Symbol.for("ufo:protocolRelative");function $1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!fr(t,{acceptRelative:!0}))return Wm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=Wm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[oE]:!r}}function Wm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function H1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[oE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class q1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function W1(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new q1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[I]}});return a}const z1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function zm(t="GET"){return z1.has(t.toUpperCase())}function K1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const G1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Q1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Y1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Q1.test(e)?"json":G1.has(e)||e.startsWith("text/")?"text":"blob"}function X1(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const J1=new Set([408,409,425,429,500,502,503,504]),Z1=new Set([101,204,205,304]);function aE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=zm(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):J1.has(d))){const p=a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=W1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:X1(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=U1(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=rE(h.request,{...h.options.params,...h.options.query}))),h.options.body&&zm(h.options.method)&&(K1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const I=new r;d=setTimeout(()=>I.abort(),h.options.timeout),h.options.signal=I.signal}try{h.response=await e(h.request,h.options)}catch(I){return h.error=I,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{d&&clearTimeout(d)}if(h.response.body&&!Z1.has(h.response.status)&&h.options.method!=="HEAD"){const I=(h.options.parseResponse?"json":h.options.responseType)||Y1(h.response.headers.get("content-type")||"");switch(I){case"json":{const x=await h.response.text(),N=h.options.parseResponse||Ho;h.response._data=N(x);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[I]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>aE({...t,defaults:{...t.defaults,...a}}),o}const Yf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),eR=Yf.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),tR=Yf.Headers,nR=Yf.AbortController,rR=aE({fetch:eR,Headers:tR,AbortController:nR}),sR=rR,iR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Fc=iR().app,oR=()=>Fc.baseURL,aR=()=>Fc.buildAssetsDir,Xf=(...t)=>iE(Jf(),aR(),...t),Jf=(...t)=>{const e=Fc.cdnURL||Fc.baseURL;return t.length?iE(e,...t):e};globalThis.__buildAssetsURL=Xf,globalThis.__publicAssetsURL=Jf;globalThis.$fetch||(globalThis.$fetch=sR.create({baseURL:oR()}));function Eh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Eh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const cR={run:t=>t()},lR=()=>cR,cE=typeof console.createTask<"u"?console.createTask:lR;function uR(t,e){const n=e.shift(),r=cE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function hR(t,e){const n=e.shift(),r=cE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function ku(t,e){for(const n of[...t])n(e)}class fR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Eh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Eh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(uR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(hR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&ku(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&ku(this._after,s)}):(this._after&&s&&ku(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function lE(){return new fR}function dR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;wh.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{wh.delete(u)}}}}function pR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=dR({...t,...r})),e[n],e[n]}}}const Uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Km="__unctx__",mR=Uc[Km]||(Uc[Km]=pR()),gR=(t,e={})=>mR.get(t,e),Gm="__unctx_async_handlers__",wh=Uc[Gm]||(Uc[Gm]=new Set);function ci(t){const e=[];for(const s of wh){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const bh={name:"page",mode:"out-in"},_R=!1,yR=!1,vR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},ER=null,wR="#__nuxt",uE="nuxt-app",Qm=36e5,bR="vite:preloadError";function hE(t=uE){return gR(t,{asyncContext:!1})}const TR="__nuxt_plugin";function IR(t){var s;let e=0;const n={_id:t.id||uE||"nuxt-app",_scope:kf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.13.2"},get vue(){return n.vueApp.version}},payload:Qn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Qn({}),state:ur({}),once:new Set,_errors:Qn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!oa()?n._scope.run(()=>Ym(n,i)):Ym(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Qn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=lE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ya(n,a,o),Ya(n.vueApp.config.globalProperties,a,o)},Ya(n.vueApp,"$nuxt",n),Ya(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(bR,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Ne;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function AR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function RR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function SR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=RR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)AR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[TR]:!0,_name:e})}function Ym(t,e,n){const r=()=>e();return hE(t._id).set(t),t.vueApp.runWithContext(r)}function PR(t){var n;let e;return Hf()&&(e=(n=yl())==null?void 0:n.appContext.app.$nuxt),e=e||hE(t).tryUse(),e||null}function Ne(t){const e=PR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ds(t){return Ne().$config}function Ya(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function CR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||kR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=OR(u,s)}i=a+1}return n}function kR(t){return t.includes("%")?decodeURIComponent(t):t}function OR(t,e){try{return e(t)}catch{return t}}const Xa=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Xm(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Xa.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Xa.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Xa.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Xa.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!xR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function xR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Jm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Zm(t,e){e?e={...Jm,...e}:e=Jm;const n=fE(e);return n.dispatch(t),n.toString()}const NR=Object.freeze(["prototype","__proto__","constructor"]);function fE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!eg(s)&&(h=NR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=fE(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),eg(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const dE="[native code] }",DR=dE.length;function eg(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-DR)===dE}function LR(t,e,n={}){return t===e||Zm(t,n)===Zm(e,n)}function MR(t,e){return{ctx:{table:t},matchAll:n=>mE(n,t)}}function pE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,pE(s)])):new Map(Object.entries(t[n]));return e}function VR(t){return MR(pE(t))}function mE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of tg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of tg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...mE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function tg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Ou(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Th(t,e,n=".",r){if(!Ou(e))return Th(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Ou(o)&&Ou(s[i])?s[i]=Th(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function FR(t){return(...e)=>e.reduce((n,r)=>Th(n,r,"",t),{})}const gE=FR();function UR(t,e){try{return e in t}catch{return!1}}var BR=Object.defineProperty,jR=(t,e,n)=>e in t?BR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ds=(t,e,n)=>(jR(t,typeof e!="symbol"?e+"":e,n),n);class Ih extends Error{constructor(e,n={}){super(e,n),ds(this,"statusCode",500),ds(this,"fatal",!1),ds(this,"unhandled",!1),ds(this,"statusMessage"),ds(this,"data"),ds(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Rh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=_E(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}ds(Ih,"__h3_error__",!0);function Ah(t){if(typeof t=="string")return new Ih(t);if($R(t))return t;const e=new Ih(t.message??t.statusMessage??"",{cause:t.cause||t});if(UR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Rh(t.statusCode,e.statusCode):t.status&&(e.statusCode=Rh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;_E(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function $R(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const HR=/[^\u0009\u0020-\u007E]/g;function _E(t=""){return t.replace(HR,"")}function Rh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const yE=Symbol("layout-meta"),ha=Symbol("route"),Et=()=>{var t;return(t=Ne())==null?void 0:t.$router},Zf=()=>Hf()?Ot(ha,Ne()._route):Ne()._route;function JF(t){return t}const qR=()=>{try{if(Ne()._processingMiddleware)return!0}catch{return!1}return!1},WR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Sh(t):Et().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=fr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&V1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=qR();if(!s&&i)return t;const o=Et(),a=Ne();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Sh(t){return rE(t.path||"",t.query||{})+(t.hash||"")}const vE="__nuxt_error",Tl=()=>EI(Ne().payload,"error"),Zs=t=>{const e=Il(t);try{const n=Ne(),r=Tl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},EE=async(t={})=>{const e=Ne(),n=Tl();e.callHook("app:error:cleared",t),t.redirect&&await Et().replace(t.redirect),n.value=ER},zR=t=>!!t&&typeof t=="object"&&vE in t,Il=t=>{const e=Ah(t);return Object.defineProperty(e,vE,{value:!0,configurable:!1,writable:!1}),e},KR=-1,GR=-2,QR=-3,YR=-4,XR=-5,JR=-6;function ZR(t,e){return eS(JSON.parse(t),e)}function eS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===KR)return;if(i===QR)return NaN;if(i===YR)return 1/0;if(i===XR)return-1/0;if(i===JR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==GR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const tS=new Set(["title","titleTemplate","script","style","noscript"]),hc=new Set(["base","meta","link","style","script","noscript"]),nS=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),rS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),wE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),sS=typeof window<"u";function Bc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ph(t){if(t._h)return t._h;if(t._d)return Bc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Bc(e)}function iS(t,e){return t instanceof Promise?t.then(e):e(t)}function Ch(t,e,n,r){const s=r||TE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Ch(t,e,n,o));const i={tag:t,props:s};for(const o of wE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||tS.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function oS(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function bE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=oS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,bE(t,e,n,s)));if(!e&&!wE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function TE(t,e=!1){const n=bE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const aS=10;function IE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,IE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function cS(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!nS.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Ch(s,o,t));continue}e.push(Ch(s,i,t))}}if(e.length===0)return[];const r=[];return iS(IE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<aS)+i,s)))}const ng=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),rg={base:-10,title:10},sg={critical:-80,high:-10,low:20};function jc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in rg&&(n=rg[t.tag]),e&&e in sg?n+sg[e]:n}const lS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],uS=["name","property","http-equiv"];function AE(t){const{props:e,tag:n}=t;if(rS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of uS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Pr="%separator";function hS(t,e){var r;let n;if(e==="s"||e==="pageTitle")n=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");n=(r=t[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else n=t[e];return n!==void 0?(n||"").replace(/"/g,'\\"'):void 0}const fS=new RegExp(`${Pr}(?:\\s*${Pr})*`,"g");function Ja(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const i=t.includes(Pr);return t=t.replace(/%\w+(?:\.\w+)?/g,o=>{if(o===Pr||!s.includes(o))return o;const a=hS(e,o.slice(1));return a!==void 0?a:o}).trim(),i&&(t.endsWith(Pr)&&(t=t.slice(0,-Pr.length)),t.startsWith(Pr)&&(t=t.slice(Pr.length)),t=t.replace(fS,n).trim()),t}function ig(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function RE(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:hc.has(p.tag)?Ph(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const g of["body","head"]){const I=(d=n[g])==null?void 0:d.children;for(const x of I){const N=x.tagName.toLowerCase();if(!hc.has(N))continue;const O={tag:N,props:await TE(x.getAttributeNames().reduce((D,V)=>({...D,[V]:x.getAttribute(V)}),{})),innerHTML:x.innerHTML},P=AE(O);let E=P,R=1;for(;E&&p.has(E);)E=`${P}:${R++}`;E&&(O._d=E,p.add(E)),o.elMap[x.getAttribute("data-hid")||Ph(O)]=x}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,g,I){const x=`${p}:${g}`;o.sideEffects[x]=I,delete o.pendingSideEffects[x]}function l({id:p,$el:g,tag:I}){const x=I.tag.endsWith("Attrs");if(o.elMap[p]=g,x||(I.textContent&&I.textContent!==g.textContent&&(g.textContent=I.textContent),I.innerHTML&&I.innerHTML!==g.innerHTML&&(g.innerHTML=I.innerHTML),a(p,"el",()=>{var N;(N=o.elMap[p])==null||N.remove(),delete o.elMap[p]})),I._eventHandlers)for(const N in I._eventHandlers)Object.prototype.hasOwnProperty.call(I._eventHandlers,N)&&g.getAttribute(`data-${N}`)!==""&&((I.tag==="bodyAttrs"?n.defaultView:g).addEventListener(N.substring(2),I._eventHandlers[N].bind(g)),g.setAttribute(`data-${N}`,""));for(const N in I.props){if(!Object.prototype.hasOwnProperty.call(I.props,N))continue;const O=I.props[N],P=`attr:${N}`;if(N==="class"){if(!O)continue;for(const E of O.split(" "))x&&a(p,`${P}:${E}`,()=>g.classList.remove(E)),!g.classList.contains(E)&&g.classList.add(E)}else if(N==="style"){if(!O)continue;for(const E of O.split(";")){const R=E.indexOf(":"),D=E.substring(0,R).trim(),V=E.substring(R+1).trim();a(p,`${P}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,V)}}else g.getAttribute(N)!==O&&g.setAttribute(N,O===!0?"":String(O)),x&&a(p,P,()=>g.removeAttribute(N))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:g,shouldRender:I,id:x}=p;if(I){if(g.tag==="title"){n.title=g.textContent;continue}p.$el=p.$el||o.elMap[x],p.$el?l(p):hc.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function dS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>RE(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function pS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{dS(i,t)}}}}}const mS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),gS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=AE(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Ph(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&mS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(jc(r)>jc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&hc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},_S=new Set(["script","link","bodyAttrs"]),yS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!_S.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&ng.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Bc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);ng.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),vS=new Set(["link","style","script","noscript"]),ES={hooks:{"tag:normalise":({tag:t})=>{t.key&&vS.has(t.tag)&&(t.props["data-hid"]=t._h=Bc(t.key))}}},wS={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},bS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of lS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=jc(n),i=jc(r);return s<i?-1:s>i?1:n._p-r._p})}}},TS={meta:"content",link:"href",htmlAttrs:"lang"},IS=["innerHTML","textContent"],AS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Ja(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=TS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Ja(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of IS)typeof a[u]=="string"&&(a[u]=Ja(a[u],s,i))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Ja(n.textContent,t._templateParams,t._separator))}}}),RS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=ig(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=ig(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},SS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let SE;function PS(t={}){const e=CS(t);return e.use(pS()),SE=e}function og(t,e){return!t||t==="server"&&e||t==="client"&&!e}function CS(t={}){const e=lE();e.addHooks(t.hooks||{}),t.document=t.document||(sS?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),og(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return og(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const p of i)p._i===h._i&&(p.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await cS(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[gS,wS,yS,ES,bS,AS,RS,SS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function kS(){return SE}const OS=Gv[0]==="3";function xS(t){return typeof t=="function"?t():tt(t)}function $c(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=xS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>$c(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=tt(e[r]);continue}n[r]=$c(e[r])}return n}return e}const NS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=$c(e.input)}}},PE="usehead";function DS(t){return{install(n){OS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(PE,t))}}.install}function LS(t={}){t.domDelayFn=t.domDelayFn||(n=>Fn(()=>setTimeout(()=>n(),0)));const e=PS(t);return e.use(NS),e.install=DS(e),e}const kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Oh="__unhead_injection_handler__";function MS(t){kh[Oh]=t}function VS(){if(Oh in kh)return kh[Oh]();const t=Ot(PE);return t||kS()}function ag(t,e={}){const n=e.head||VS();if(n)return n.ssr?n.push(t,e):FS(n,t,e)}function FS(t,e,n={}){const r=zt(!1),s=zt({});lA(()=>{s.value=r.value?{}:$c(e)});const i=t.push(s.value,n);return gn(s,a=>{i.patch(a)}),yl()&&(la(()=>{i.dispose()}),pv(()=>{r.value=!0}),dv(()=>{r.value=!1})),i}let fc,dc;function US(){return fc=$fetch(Xf(`builds/meta/${Ds().app.buildId}.json`),{responseType:"json"}),fc.then(t=>{dc=VR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),fc}function Al(){return fc||US()}async function ed(t){if(await Al(),!dc)return console.error("[nuxt] Error creating app manifest matcher.",dc),{};try{return gE({},...dc.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function cg(t,e={}){const n=await jS(t,e),r=Ne(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=kE(t).then(i=>i?CE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const BS="_payload.json";async function jS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||fr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ds(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await kE(t)?i:r.app.baseURL;return bl(o,n.pathname,BS+(s?`?${s}`:""))}async function CE(t){const e=fetch(t).then(n=>n.text().then(OE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function kE(t=Zf().path){if(t=wl(t),(await Al()).prerendered.includes(t))return!0;const n=await ed(t);return!!n.prerender&&!n.redirect}let hs=null;async function $S(){var r;if(hs)return hs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await OE(t.textContent||""),n=t.dataset.src?await CE(t.dataset.src):void 0;return hs={...e,...n,...window.__NUXT__},(r=hs.config)!=null&&r.public&&(hs.config.public=ur(hs.config.public)),hs}async function OE(t){return await ZR(t,Ne()._payloadRevivers)}function HS(t,e){Ne()._payloadRevivers[t]=e}const lg={NuxtError:t=>Il(t),EmptyShallowRef:t=>Lo(t==="_"?void 0:t==="0n"?BigInt(0):Ho(t)),EmptyRef:t=>zt(t==="_"?void 0:t==="0n"?BigInt(0):Ho(t)),ShallowRef:t=>Lo(t),ShallowReactive:t=>Qn(t),Ref:t=>zt(t),Reactive:t=>ur(t)},qS=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in lg)HS(r,lg[r]);Object.assign(t.payload,([e,n]=ci(()=>t.runWithContext($S)),e=await e,n(),e)),window.__NUXT__=t.payload}}),WS=[],zS=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=LS({plugins:WS});MS(()=>Ne().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await RE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof document<"u";function xE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function KS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xE(t.default)}const Oe=Object.assign;function xu(t,e){const n={};for(const r in e){const s=e[r];n[r]=vn(s)?s.map(t):t(s)}return n}const wo=()=>{},vn=Array.isArray,NE=/#/g,GS=/&/g,QS=/\//g,YS=/=/g,XS=/\?/g,DE=/\+/g,JS=/%5B/g,ZS=/%5D/g,LE=/%5E/g,eP=/%60/g,ME=/%7B/g,tP=/%7C/g,VE=/%7D/g,nP=/%20/g;function td(t){return encodeURI(""+t).replace(tP,"|").replace(JS,"[").replace(ZS,"]")}function rP(t){return td(t).replace(ME,"{").replace(VE,"}").replace(LE,"^")}function xh(t){return td(t).replace(DE,"%2B").replace(nP,"+").replace(NE,"%23").replace(GS,"%26").replace(eP,"`").replace(ME,"{").replace(VE,"}").replace(LE,"^")}function sP(t){return xh(t).replace(YS,"%3D")}function iP(t){return td(t).replace(NE,"%23").replace(XS,"%3F")}function oP(t){return t==null?"":iP(t).replace(QS,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const aP=/\/$/,cP=t=>t.replace(aP,"");function Nu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=fP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qo(o)}}function lP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ug(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vi(e.matched[r],n.matched[s])&&FE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function FE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hP(t[n],e[n]))return!1;return!0}function hP(t,e){return vn(t)?hg(t,e):vn(e)?hg(e,t):t===e}function hg(t,e){return vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wo;(function(t){t.pop="pop",t.push="push"})(Wo||(Wo={}));var bo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bo||(bo={}));function dP(t){if(!t)if(Qs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cP(t)}const pP=/^[^#]+#/;function mP(t,e){return t.replace(pP,"#")+e}function gP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rl=()=>({left:window.scrollX,top:window.scrollY});function _P(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fg(t,e){return(history.state?history.state.position-e:-1)+t}const Nh=new Map;function yP(t,e){Nh.set(t,e)}function vP(t){const e=Nh.get(t);return Nh.delete(t),e}let EP=()=>location.protocol+"//"+location.host;function UE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ug(l,"")}return ug(n,t)+r+s}function wP(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=UE(t,location),I=n.value,x=e.value;let N=0;if(p){if(n.value=g,e.value=p,o&&o===I){o=null;return}N=x?p.position-x.position:0}else r(g);s.forEach(O=>{O(n.value,I,{delta:N,type:Wo.pop,direction:N?N>0?bo.forward:bo.back:bo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const I=s.indexOf(p);I>-1&&s.splice(I,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Rl()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function dg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Rl():null}}function bP(t){const{history:e,location:n}=window,r={value:UE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:EP()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Oe({},e.state,dg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:Rl()});i(h.current,h,!0);const d=Oe({},dg(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function BE(t){t=dP(t);const e=bP(t),n=wP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:mP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function TP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),BE(t)}function IP(t){return typeof t=="string"||t&&typeof t=="object"}function jE(t){return typeof t=="string"||typeof t=="symbol"}const $E=Symbol("");var pg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pg||(pg={}));function Ei(t,e){return Oe(new Error,{type:t,[$E]:!0},e)}function qn(t,e){return t instanceof Error&&$E in t&&(e==null||!!(t.type&e))}const mg="[^/]+?",AP={sensitive:!1,strict:!1,start:!0,end:!0},RP=/[.+*?^${}()[\]/\\]/g;function SP(t,e){const n=Oe({},AP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(RP,"\\$&"),g+=40;else if(p.type===1){const{value:I,repeatable:x,optional:N,regexp:O}=p;i.push({name:I,repeatable:x,optional:N});const P=O||mg;if(P!==mg){g+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${I}" (${P}): `+R.message)}}let E=x?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(E=N&&u.length<2?`(?:/${E})`:"/"+E),N&&(E+="?"),s+=E,g+=20,N&&(g+=-8),x&&(g+=-20),P===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",I=i[p-1];d[I.name]=g&&I.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:I,repeatable:x,optional:N}=g,O=I in u?u[I]:"";if(vn(O)&&!x)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const P=vn(O)?O.join("/"):O;if(!P)if(N)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);h+=P}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function PP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function HE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=PP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gg(r))return 1;if(gg(s))return-1}return s.length-r.length}function gg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CP={type:0,value:""},kP=/[a-zA-Z0-9_]/;function OP(t){if(!t)return[[]];if(t==="/")return[[CP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:kP.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function xP(t,e,n){const r=SP(OP(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NP(t,e){const n=[],r=new Map;e=Eg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const I=!g,x=yg(d);x.aliasOf=g&&g.record;const N=Eg(e,d),O=[x];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)O.push(yg(Oe({},x,{components:g?g.record.components:x.components,path:D,aliasOf:g?g.record:x})))}let P,E;for(const R of O){const{path:D}=R;if(p&&D[0]!=="/"){const V=p.record.path,b=V[V.length-1]==="/"?"":"/";R.path=p.record.path+(D&&b+D)}if(P=xP(R,p,N),g?g.alias.push(P):(E=E||P,E!==P&&E.alias.push(P),I&&d.name&&!vg(P)&&o(d.name)),qE(P)&&l(P),x.children){const V=x.children;for(let b=0;b<V.length;b++)i(V[b],P,g&&g.children[b])}g=g||P}return E?()=>{o(E)}:wo}function o(d){if(jE(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=MP(d,n);n.splice(p,0,d),d.record.name&&!vg(d)&&r.set(d.record.name,d)}function u(d,p){let g,I={},x,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Ei(1,{location:d});N=g.record.name,I=Oe(_g(p.params,g.keys.filter(E=>!E.optional).concat(g.parent?g.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&_g(d.params,g.keys.map(E=>E.name))),x=g.stringify(I)}else if(d.path!=null)x=d.path,g=n.find(E=>E.re.test(x)),g&&(I=g.parse(x),N=g.record.name);else{if(g=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!g)throw Ei(1,{location:d,currentLocation:p});N=g.record.name,I=Oe({},p.params,d.params),x=g.stringify(I)}const O=[];let P=g;for(;P;)O.unshift(P.record),P=P.parent;return{name:N,path:x,params:I,matched:O,meta:LP(O)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function _g(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function yg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:DP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function DP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function vg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Eg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function MP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;HE(t,e[i])<0?r=i:n=i+1}const s=VP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function VP(t){let e=t;for(;e=e.parent;)if(qE(e)&&HE(t,e)===0)return e}function qE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function FP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(DE," "),o=i.indexOf("="),a=qo(o<0?i:i.slice(0,o)),l=o<0?null:qo(i.slice(o+1));if(a in e){let u=e[a];vn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function wg(t){let e="";for(let n in t){const r=t[n];if(n=sP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(r)?r.map(i=>i&&xh(i)):[r&&xh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function UP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=vn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const BP=Symbol(""),bg=Symbol(""),nd=Symbol(""),rd=Symbol(""),Dh=Symbol("");function no(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ei(4,{from:n,to:e})):p instanceof Error?l(p):IP(p)?l(Ei(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Du(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xE(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Cr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=KS(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Cr(g,n,r,o,a,s)()}))}}return i}function Tg(t){const e=Ot(nd),n=Ot(rd),r=Fe(()=>{const l=tt(t.to);return e.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(vi.bind(null,h));if(p>-1)return p;const g=Ig(l[u-2]);return u>1&&Ig(h)===g&&d[d.length-1].path!==g?d.findIndex(vi.bind(null,l[u-2])):p}),i=Fe(()=>s.value>-1&&qP(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&FE(n.params,r.value.params));function a(l={}){return HP(l)?e[tt(t.replace)?"replace":"push"](tt(t.to)).catch(wo):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const jP=Un({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tg,setup(t,{slots:e}){const n=ur(Tg(t)),{options:r}=Ot(nd),s=Fe(()=>({[Ag(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ag(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$P=jP;function HP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!vn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ig(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ag=(t,e,n)=>t??e??n,WP=Un({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ot(Dh),s=Fe(()=>t.route||r.value),i=Ot(bg,0),o=Fe(()=>{let u=tt(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Fe(()=>s.value.matched[o.value]);vs(bg,Fe(()=>o.value+1)),vs(BP,a),vs(Dh,s);const l=zt();return gn(()=>[l.value,a.value,t.name],([u,h,d],[p,g,I])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!vi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Rg(n.default,{Component:p,route:u});const g=d.props[h],I=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=yt(p,Oe({},I,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Rg(n.default,{Component:N,route:u})||N}}});function Rg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WE=WP;function zP(t){const e=NP(t.routes,t),n=t.parseQuery||FP,r=t.stringifyQuery||wg,s=t.history,i=no(),o=no(),a=no(),l=Lo(fn);let u=fn;Qs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=xu.bind(null,B=>""+B),d=xu.bind(null,oP),p=xu.bind(null,qo);function g(B,Z){let Y,te;return jE(B)?(Y=e.getRecordMatcher(B),te=Z):te=B,e.addRoute(te,Y)}function I(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function x(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function O(B,Z){if(Z=Oe({},Z||l.value),typeof B=="string"){const k=Nu(n,B,Z.path),M=e.resolve({path:k.path},Z),j=s.createHref(k.fullPath);return Oe(k,M,{params:p(M.params),hash:qo(k.hash),redirectedFrom:void 0,href:j})}let Y;if(B.path!=null)Y=Oe({},B,{path:Nu(n,B.path,Z.path).path});else{const k=Oe({},B.params);for(const M in k)k[M]==null&&delete k[M];Y=Oe({},B,{params:d(k)}),Z.params=d(Z.params)}const te=e.resolve(Y,Z),Ee=B.hash||"";te.params=h(p(te.params));const xe=lP(r,Oe({},B,{hash:rP(Ee),path:te.path})),A=s.createHref(xe);return Oe({fullPath:xe,hash:Ee,query:r===wg?UP(B.query):B.query||{}},te,{redirectedFrom:void 0,href:A})}function P(B){return typeof B=="string"?Nu(n,B,l.value.path):Oe({},B)}function E(B,Z){if(u!==B)return Ei(8,{from:Z,to:B})}function R(B){return b(B)}function D(B){return R(Oe(P(B),{replace:!0}))}function V(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let te=typeof Y=="function"?Y(B):Y;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=P(te):{path:te},te.params={}),Oe({query:B.query,hash:B.hash,params:te.path!=null?{}:B.params},te)}}function b(B,Z){const Y=u=O(B),te=l.value,Ee=B.state,xe=B.force,A=B.replace===!0,k=V(Y);if(k)return b(Oe(P(k),{state:typeof k=="object"?Oe({},Ee,k.state):Ee,force:xe,replace:A}),Z||Y);const M=Y;M.redirectedFrom=Z;let j;return!xe&&uP(r,te,Y)&&(j=Ei(16,{to:M,from:te}),tn(te,te,!0,!1)),(j?Promise.resolve(j):w(M,te)).catch(U=>qn(U)?qn(U,2)?U:un(U):ee(U,M,te)).then(U=>{if(U){if(qn(U,2))return b(Oe({replace:A},P(U.to),{state:typeof U.to=="object"?Oe({},Ee,U.to.state):Ee,force:xe}),Z||M)}else U=S(M,te,!0,A,Ee);return C(M,te,U),U})}function y(B,Z){const Y=E(B,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(B){const Z=pr.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function w(B,Z){let Y;const[te,Ee,xe]=KP(B,Z);Y=Du(te.reverse(),"beforeRouteLeave",B,Z);for(const k of te)k.leaveGuards.forEach(M=>{Y.push(Cr(M,B,Z))});const A=y.bind(null,B,Z);return Y.push(A),jt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(Cr(k,B,Z));return Y.push(A),jt(Y)}).then(()=>{Y=Du(Ee,"beforeRouteUpdate",B,Z);for(const k of Ee)k.updateGuards.forEach(M=>{Y.push(Cr(M,B,Z))});return Y.push(A),jt(Y)}).then(()=>{Y=[];for(const k of xe)if(k.beforeEnter)if(vn(k.beforeEnter))for(const M of k.beforeEnter)Y.push(Cr(M,B,Z));else Y.push(Cr(k.beforeEnter,B,Z));return Y.push(A),jt(Y)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),Y=Du(xe,"beforeRouteEnter",B,Z,_),Y.push(A),jt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(Cr(k,B,Z));return Y.push(A),jt(Y)}).catch(k=>qn(k,8)?k:Promise.reject(k))}function C(B,Z,Y){a.list().forEach(te=>_(()=>te(B,Z,Y)))}function S(B,Z,Y,te,Ee){const xe=E(B,Z);if(xe)return xe;const A=Z===fn,k=Qs?history.state:{};Y&&(te||A?s.replace(B.fullPath,Oe({scroll:A&&k&&k.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,tn(B,Z,Y,A),un()}let T;function pe(){T||(T=s.listen((B,Z,Y)=>{if(!wn.listening)return;const te=O(B),Ee=V(te);if(Ee){b(Oe(Ee,{replace:!0}),te).catch(wo);return}u=te;const xe=l.value;Qs&&yP(fg(xe.fullPath,Y.delta),Rl()),w(te,xe).catch(A=>qn(A,12)?A:qn(A,2)?(b(A.to,te).then(k=>{qn(k,20)&&!Y.delta&&Y.type===Wo.pop&&s.go(-1,!1)}).catch(wo),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ee(A,te,xe))).then(A=>{A=A||S(te,xe,!1),A&&(Y.delta&&!qn(A,8)?s.go(-Y.delta,!1):Y.type===Wo.pop&&qn(A,20)&&s.go(-1,!1)),C(te,xe,A)}).catch(wo)}))}let ye=no(),J=no(),ne;function ee(B,Z,Y){un(B);const te=J.list();return te.length?te.forEach(Ee=>Ee(B,Z,Y)):console.error(B),Promise.reject(B)}function ze(){return ne&&l.value!==fn?Promise.resolve():new Promise((B,Z)=>{ye.add([B,Z])})}function un(B){return ne||(ne=!B,pe(),ye.list().forEach(([Z,Y])=>B?Y(B):Z()),ye.reset()),B}function tn(B,Z,Y,te){const{scrollBehavior:Ee}=t;if(!Qs||!Ee)return Promise.resolve();const xe=!Y&&vP(fg(B.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return Fn().then(()=>Ee(B,Z,xe)).then(A=>A&&_P(A)).catch(A=>ee(A,B,Z))}const Ke=B=>s.go(B);let Ge;const pr=new Set,wn={currentRoute:l,listening:!0,addRoute:g,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:x,resolve:O,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ze,install(B){const Z=this;B.component("RouterLink",$P),B.component("RouterView",WE),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(l)}),Qs&&!Ge&&l.value===fn&&(Ge=!0,R(s.location).catch(Ee=>{}));const Y={};for(const Ee in fn)Object.defineProperty(Y,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(nd,Z),B.provide(rd,Qn(Y)),B.provide(Dh,l);const te=B.unmount;pr.add(B),B.unmount=function(){pr.delete(B),pr.size<1&&(u=fn,T&&T(),T=null,l.value=fn,Ge=!1,ne=!1),te()}}};function jt(B){return B.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return wn}function KP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>vi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>vi(u,l))||s.push(l))}return[n,r,s]}function GP(t){return Ot(rd)}const QP=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Lh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&QP(t.route,n));return typeof r=="function"?r(t.route):r},YP=(t,e)=>({default:()=>t?yt(MI,t===!0?{}:t,e):e});function sd(t){return Array.isArray(t)?t:[t]}const XP="modulepreload",JP=function(t,e){return new URL(t,e).href},Sg={},Ce=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=JP(u,r),u in Sg)return;Sg[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let I=o.length-1;I>=0;I--){const x=o[I];if(x.href===u&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":XP,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((I,x)=>{g.addEventListener("load",I),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},ZP={middleware:"auth"},eC={middleware:"auth"},tC={middleware:"auth"},Lu=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Ce(()=>import("./DEwOKj3_.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Ce(()=>import("./CmiQtNr7.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Ce(()=>import("./DHOOMpdp.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:ZP||{},component:()=>Ce(()=>import("./r0HZMSln.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"Admin",path:"/Admin",meta:eC||{},component:()=>Ce(()=>import("./CZECtqJf.js"),__vite__mapDeps([3,4]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Ce(()=>import("./wnwaxzNC.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Ce(()=>import("./Cm7HU1EA.js"),[],import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:tC||{},component:()=>Ce(()=>import("./Xpjbf6RL.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Ce(()=>import("./CW5fri6z.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Ce(()=>import("./BB42n-PT.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Ce(()=>import("./BRq5kFi4.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Ce(()=>import("./DC7xsgOt.js"),[],import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Ce(()=>import("./T7jP7Q3x.js"),[],import.meta.url)},{name:"Bio",path:"/Bio",component:()=>Ce(()=>import("./CYbTXvQZ.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>Ce(()=>import("./D7Ea-ysL.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Ce(()=>import("./B8CIVp09.js"),__vite__mapDeps([16,8,9,17]),import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>Ce(()=>import("./B9tZ3dkZ.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Ce(()=>import("./B8-AwvQ3.js"),__vite__mapDeps([20,8,9]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Ce(()=>import("./Bf3iFt5P.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>Ce(()=>import("./CIGuAByB.js"),__vite__mapDeps([21,1,22]),import.meta.url)},{name:"Login",path:"/Login",component:()=>Ce(()=>import("./Bpfz2yan.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Ce(()=>import("./CMOBDb2G.js"),__vite__mapDeps([23,8,9,24]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Ce(()=>import("./H0J77kPz.js"),__vite__mapDeps([25,8,9,26]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Ce(()=>import("./jShaJRVj.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>Ce(()=>import("./Z5vOhlPp.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Ce(()=>import("./CIiJAWS9.js"),__vite__mapDeps([29,8,9]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Ce(()=>import("./CQC-tlfR.js"),__vite__mapDeps([30,8,9]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Ce(()=>import("./DeN3zC7e.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>Ce(()=>import("./B2QeR3Er.js"),__vite__mapDeps([31,8,9]),import.meta.url)}],zE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?yt(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Pg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function nC(t,e){return t===e||e===fn?!1:Pg(t)!==Pg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const rC={scrollBehavior(t,e,n){var u;const r=Ne(),s=((u=Et().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&nC(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Cg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??bh),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Cg(t.hash),behavior:s}),h(i)})})}};function Cg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const sC={hashMode:!1,scrollBehaviorType:"auto"},sn={...sC,...rC},iC=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Ne(),s=Et(),i=([e,n]=ci(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Il({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Zs(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},oC=async t=>{let e,n;const r=([e,n]=ci(()=>ed(t.path)),e=await e,n(),e);if(r.redirect)return fr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},aC=[iC,oC],To={auth:()=>Ce(()=>import("./DWlQq8q2.js"),[],import.meta.url)};function cC(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),qm(h,"")}const a=qm(r,t),l=!n||j1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const lC=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=Ds().app.baseURL;sn.hashMode&&!r.includes("#")&&(r+="#");const s=((N=sn.history)==null?void 0:N.call(sn,r))??(sn.hashMode?TP(r):BE(r)),i=sn.routes?([e,n]=ci(()=>sn.routes(Lu)),e=await e,n(),e??Lu):Lu;let o;const a=zP({...sn,scrollBehavior:(O,P,E)=>{if(P===fn){o=E;return}if(sn.scrollBehavior){if(a.options.scrollBehavior=sn.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return sn.scrollBehavior(O,fn,o||E)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Lo(a.currentRoute.value);a.afterEach((O,P)=>{l.value=P}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=cC(r,window.location,t.payload.path),h=Lo(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((O,P)=>{var E,R,D,V;((R=(E=O.matched[0])==null?void 0:E.components)==null?void 0:R.default)===((V=(D=P.matched[0])==null?void 0:D.components)==null?void 0:V.default)&&d()});const p={};for(const O in h.value)Object.defineProperty(p,O,{get:()=>h.value[O],enumerable:!0});t._route=Qn(p),t._middleware=t._middleware||{global:[],named:{}};const g=Tl();a.afterEach(async(O,P,E)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(EE),E&&await t.callHook("page:loading:end"),O.matched.length===0&&await t.runWithContext(()=>Zs(Ah({statusCode:404,fatal:!1,statusMessage:`Page not found: ${O.fullPath}`,data:{path:O.fullPath}})))});try{[e,n]=ci(()=>a.isReady()),await e,n()}catch(O){[e,n]=ci(()=>t.runWithContext(()=>Zs(O))),await e,n()}const I=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const x=t.payload.state._layout;return a.beforeEach(async(O,P)=>{var E;await t.callHook("page:loading:start"),O.meta=ur(O.meta),t.isHydrating&&x&&!zr(O.meta.layout)&&(O.meta.layout=x),t._processingMiddleware=!0;{const R=new Set([...aC,...t._middleware.global]);for(const D of O.matched){const V=D.meta.middleware;if(V)for(const b of sd(V))R.add(b)}{const D=await t.runWithContext(()=>ed(O.path));if(D.appMiddleware)for(const V in D.appMiddleware)D.appMiddleware[V]?R.add(V):R.delete(V)}for(const D of R){const V=typeof D=="string"?t._middleware.named[D]||await((E=To[D])==null?void 0:E.call(To).then(y=>y.default||y)):D;if(!V)throw new Error(`Unknown route middleware: '${D}'.`);const b=await t.runWithContext(()=>V(O,P));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const y=b||Ah({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Zs(y)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await a.replace({...I,force:!0}),a.options.scrollBehavior=sn.scrollBehavior}catch(O){await t.runWithContext(()=>Zs(O))}}),{provide:{router:a}}}}),Mh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),uC=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Sl=t=>{const e=Ne();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Mh(()=>t())}):Mh(()=>t())},hC=Zt({name:"nuxt:payload",setup(t){Et().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await cg(e.path);r&&Object.assign(t.static.data,r.data)}),Sl(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await cg(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Al,1e3)})}}),fC=Zt(()=>{const t=Et();Sl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),dC=Zt(t=>{let e;async function n(){const r=await Al();e&&clearTimeout(e),e=setTimeout(n,Qm);try{const s=await $fetch(Xf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Sl(()=>{e=setTimeout(n,Qm)})});function pC(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ho(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ne().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const mC=Zt({name:"nuxt:chunk-reload",setup(t){const e=Et(),n=Ds(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:bl(n.app.baseURL,i.fullPath);pC({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),gC=Zt({name:"nuxt:global-components"}),Mr={default:()=>Ce(()=>import("./aLuFmHpV.js"),__vite__mapDeps([32,6,1,33]),import.meta.url)},_C=Zt({name:"nuxt:prefetch",setup(t){const e=Et();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Mr[r]=="function"&&await Mr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(fr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=sd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof To[o]=="function"&&To[o]();s&&typeof Mr[s]=="function"&&Mr[s]()})}});var kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},GE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new vC;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const I=u<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EC=function(t){const e=KE(t);return GE.encodeByteArray(e,!0)},Hc=function(t){return EC(t).replace(/\./g,"")},QE=function(t){try{return GE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bC=()=>wC().__FIREBASE_DEFAULTS__,TC=()=>{if(typeof process>"u"||typeof kg>"u")return;const t=kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&QE(t[1]);return e&&JSON.parse(e)},Pl=()=>{try{return bC()||TC()||IC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},YE=t=>{var e,n;return(n=(e=Pl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XE=t=>{const e=YE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JE=()=>{var t;return(t=Pl())===null||t===void 0?void 0:t.config},ZE=t=>{var e;return(e=Pl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hc(JSON.stringify(n)),Hc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function SC(){var t;const e=(t=Pl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function PC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kC(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OC(){return!SC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xC(){try{return typeof indexedDB=="object"}catch{return!1}}function NC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DC,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?LC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,a,r)}}function LC(t,e){return t.replace(MC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const MC=/\{\$([^}]+)}/g;function VC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Og(i)&&Og(o)){if(!qc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Og(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function FC(t,e){const n=new UC(t,e);return n.subscribe.bind(n)}class UC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mu),s.error===void 0&&(s.error=Mu),s.complete===void 0&&(s.complete=Mu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mu(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HC(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$C(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $C(t){return t===ps?void 0:t}function HC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const WC={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},zC=we.INFO,KC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},GC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=zC,this._logHandler=GC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const QC=(t,e)=>e.some(n=>t instanceof n);let xg,Ng;function YC(){return xg||(xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XC(){return Ng||(Ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,Vh=new WeakMap,nw=new WeakMap,Vu=new WeakMap,od=new WeakMap;function JC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tw.set(n,t)}).catch(()=>{}),od.set(e,t),e}function ZC(t){if(Vh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vh.set(t,e)}let Fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ek(t){Fh=t(Fh)}function tk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fu(this),e,...n);return nw.set(r,e.sort?e.sort():[e]),Br(r)}:XC().includes(t)?function(...e){return t.apply(Fu(this),e),Br(tw.get(this))}:function(...e){return Br(t.apply(Fu(this),e))}}function nk(t){return typeof t=="function"?tk(t):(t instanceof IDBTransaction&&ZC(t),QC(t,YC())?new Proxy(t,Fh):t)}function Br(t){if(t instanceof IDBRequest)return JC(t);if(Vu.has(t))return Vu.get(t);const e=nk(t);return e!==t&&(Vu.set(t,e),od.set(e,t)),e}const Fu=t=>od.get(t);function rk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sk=["get","getKey","getAll","getAllKeys","count"],ik=["put","add","delete","clear"],Uu=new Map;function Dg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uu.get(e))return Uu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ik.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Uu.set(e,i),i}ek(t=>({...t,get:(e,n,r)=>Dg(e,n)||t.get(e,n,r),has:(e,n)=>!!Dg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ak(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ak(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uh="@firebase/app",Lg="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new id("@firebase/app"),ck="@firebase/app-compat",lk="@firebase/analytics-compat",uk="@firebase/analytics",hk="@firebase/app-check-compat",fk="@firebase/app-check",dk="@firebase/auth",pk="@firebase/auth-compat",mk="@firebase/database",gk="@firebase/database-compat",_k="@firebase/functions",yk="@firebase/functions-compat",vk="@firebase/installations",Ek="@firebase/installations-compat",wk="@firebase/messaging",bk="@firebase/messaging-compat",Tk="@firebase/performance",Ik="@firebase/performance-compat",Ak="@firebase/remote-config",Rk="@firebase/remote-config-compat",Sk="@firebase/storage",Pk="@firebase/storage-compat",Ck="@firebase/firestore",kk="@firebase/vertexai-preview",Ok="@firebase/firestore-compat",xk="firebase",Nk="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="[DEFAULT]",Dk={[Uh]:"fire-core",[ck]:"fire-core-compat",[uk]:"fire-analytics",[lk]:"fire-analytics-compat",[fk]:"fire-app-check",[hk]:"fire-app-check-compat",[dk]:"fire-auth",[pk]:"fire-auth-compat",[mk]:"fire-rtdb",[gk]:"fire-rtdb-compat",[_k]:"fire-fn",[yk]:"fire-fn-compat",[vk]:"fire-iid",[Ek]:"fire-iid-compat",[wk]:"fire-fcm",[bk]:"fire-fcm-compat",[Tk]:"fire-perf",[Ik]:"fire-perf-compat",[Ak]:"fire-rc",[Rk]:"fire-rc-compat",[Sk]:"fire-gcs",[Pk]:"fire-gcs-compat",[Ck]:"fire-fst",[Ok]:"fire-fst-compat",[kk]:"fire-vertex","fire-js":"fire-js",[xk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Map,Lk=new Map,jh=new Map;function Mg(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(jh.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of Wc.values())Mg(n,t);for(const n of Lk.values())Mg(n,t);return!0}function Cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new fa("app","Firebase",Mk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=Nk;function rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=JE()),!n)throw jr.create("no-options");const i=Wc.get(s);if(i){if(qc(n,i.options)&&qc(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new qC(s);for(const l of jh.values())o.addComponent(l);const a=new Vk(n,r,o);return Wc.set(s,a),a}function ad(t=Bh){const e=Wc.get(t);if(!e&&t===Bh&&JE())return rw();if(!e)throw jr.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let s=(r=Dk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}As(new Kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fk="firebase-heartbeat-database",Uk=1,zo="firebase-heartbeat-store";let Bu=null;function sw(){return Bu||(Bu=rk(Fk,Uk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function Bk(t){try{const n=(await sw()).transaction(zo),r=await n.objectStore(zo).get(iw(t));return await n.done,r}catch(e){if(e instanceof Bn)sr.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function Vg(t,e){try{const r=(await sw()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,iw(t)),await r.done}catch(n){if(n instanceof Bn)sr.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function iw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jk=1024,$k=30*24*60*60*1e3;class Hk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$k}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:r,unsentEntries:s}=qk(this._heartbeatsCache.heartbeats),i=Hc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sr.warn(n),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function qk(t,e=jk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ug(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xC()?NC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return Hc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){As(new Kr("platform-logger",e=>new ok(e),"PRIVATE")),As(new Kr("heartbeat",e=>new Hk(e),"PRIVATE")),Cn(Uh,Lg,t),Cn(Uh,Lg,"esm2017"),Cn("fire-js","")}zk("");var Kk="firebase",Gk="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(Kk,Gk,"app");function cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qk=ow,aw=new fa("auth","Firebase",ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new id("@firebase/auth");function Yk(t,...e){zc.logLevel<=we.WARN&&zc.warn(`Auth (${Ls}): ${t}`,...e)}function pc(t,...e){zc.logLevel<=we.ERROR&&zc.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw ld(t,...e)}function kn(t,...e){return ld(t,...e)}function cw(t,e,n){const r=Object.assign(Object.assign({},Qk()),{[e]:n});return new fa("auth","Firebase",r).create(e,{appName:t.name})}function $r(t){return cw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aw.create(t,...e)}function fe(t,e,...n){if(!t)throw ld(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pc(e),new Error(e)}function ir(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xk(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xk()||PC()||"connection"in navigator)?navigator.onLine:!0}function Zk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=RC()||CC()}get(){return Jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new pa(3e4,6e4);function Ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ns(t,e,n,r,s={}){return uw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=da(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),lw.fetch()(hw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function uw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eO),e);try{const s=new rO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Za(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cw(t,h,u);En(t,h)}}catch(s){if(s instanceof Bn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function kl(t,e,n,r,s={}){const i=await ns(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,s):`${t.config.apiScheme}://${s}`}function nO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),tO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}function jg(t){return t!==void 0&&t.enterprise!==void 0}class sO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function iO(t,e){return ns(t,"GET","/v2/recaptchaConfig",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function fw(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aO(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=hd(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Io(ju(s.auth_time)),issuedAtTime:Io(ju(s.iat)),expirationTime:Io(ju(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pc("JWT malformed, contained fewer than 3 sections"),null;try{const s=QE(n);return s?JSON.parse(s):(pc("Failed to decode base64 JWT payload"),null)}catch(s){return pc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $g(t){const e=hd(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&cO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ko(t,fw(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dw(i.providerUserInfo):[],a=hO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function uO(t){const e=Je(t);await Kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dw(t){return t.map(e=>{var{providerId:n}=e,r=cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fO(t,e){const n=await uw(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dO(t,e){return ns(t,"POST","/v2/accounts:revokeToken",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=$g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new li;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aO(this,e)}reload(){return uO(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject($r(this.auth));const e=await this.getIdToken();return await Ko(this,oO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:R,isAnonymous:D,providerData:V,stsTokenManager:b}=n;fe(E&&b,e,"internal-error");const y=li.fromJSON(this.name,b);fe(typeof E=="string",e,"internal-error"),br(d,e.name),br(p,e.name),fe(typeof R=="boolean",e,"internal-error"),fe(typeof D=="boolean",e,"internal-error"),br(g,e.name),br(I,e.name),br(x,e.name),br(N,e.name),br(O,e.name),br(P,e.name);const _=new Jn({uid:E,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:I,phoneNumber:g,tenantId:x,stsTokenManager:y,createdAt:O,lastLoginAt:P});return V&&Array.isArray(V)&&(_.providerData=V.map(w=>Object.assign({},w))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new li;s.updateFromServerResponse(n);const i=new Jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new li;a.updateFromIdToken(r);const l=new Jn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;function Zn(t){ir(t instanceof Function,"Expected a class definition");let e=Hg.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pw.type="NONE";const qg=pw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mc(this.userKey,s.apiKey,i),this.fullPersistenceKey=mc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(Zn(qg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Zn(qg);const o=mc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Jn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ui(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ui(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(ww(e))return"Webos";if(gw(e))return"Safari";if((e.includes("chrome/")||_w(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mw(t=Nt()){return/firefox\//i.test(t)}function gw(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _w(t=Nt()){return/crios\//i.test(t)}function yw(t=Nt()){return/iemobile/i.test(t)}function vw(t=Nt()){return/android/i.test(t)}function Ew(t=Nt()){return/blackberry/i.test(t)}function ww(t=Nt()){return/webos/i.test(t)}function fd(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pO(t=Nt()){var e;return fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mO(){return kC()&&document.documentMode===10}function bw(t=Nt()){return fd(t)||vw(t)||ww(t)||Ew(t)||/windows phone/i.test(t)||yw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e=[]){let n;switch(t){case"Browser":n=Wg(Nt());break;case"Worker":n=`${Wg(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class gO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _O(t,e={}){return ns(t,"GET","/v2/passwordPolicy",Ms(t,e))}/**
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
 */const yO=6;class vO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new gO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fw(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject($r(this));const n=e?Je(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject($r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject($r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _O(this),n=new vO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(t){return Je(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=FC(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wO(t){Ol=t}function Iw(t){return Ol.loadJS(t)}function bO(){return Ol.recaptchaEnterpriseScript}function TO(){return Ol.gapiScript}function IO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AO="recaptcha-enterprise",RO="NO_RECAPTCHA";class SO{constructor(e){this.type=AO,this.auth=Di(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{iO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new sO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;jg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(RO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&jg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=bO();l.length!==0&&(l+=a),Iw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Kg(t,e,n,r=!1){const s=new SO(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gg(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t,e){const n=Cl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qc(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function CO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kO(t,e,n){const r=Di(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Aw(e),{host:o,port:a}=OO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),xO()}function Aw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OO(t){const e=Aw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function NO(t,e){return ns(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(t,e){return kl(t,"POST","/v1/accounts:signInWithPassword",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}async function MO(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends dd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,n,"signInWithPassword",DO);case"emailLink":return LO(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,r,"signUpPassword",NO);case"emailLink":return MO(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return kl(t,"POST","/v1/accounts:signInWithIdp",Ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO="http://localhost";class Rs extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:VO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UO(t){const e=ao(co(t)).link,n=e?ao(co(e)).deep_link_id:null,r=ao(co(t)).deep_link_id;return(r?ao(co(r)).link:null)||r||n||e||t}class pd{constructor(e){var n,r,s,i,o,a;const l=ao(co(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=FO((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UO(e);try{return new pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pd.parseLink(n);return fe(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Rw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends ma{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ma{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends ma{constructor(){super("twitter.com")}static credential(e,n){return Rs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jn._fromIdTokenResponse(e,r,s),o=Yg(r);return new wi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yg(r);return new wi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gc(e,n,r,s)}}function Sw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,i,e,r):i})}async function BO(t,e,n=!1){const r=await Ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jO(t,e,n=!1){const{auth:r}=t;if(Yn(r.app))return Promise.reject($r(r));const s="reauthenticate";try{const i=await Ko(t,Sw(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=hd(i.idToken);fe(o,r,"internal-error");const{sub:a}=o;return fe(t.uid===a,r,"user-mismatch"),wi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(t,e,n=!1){if(Yn(t.app))return Promise.reject($r(t));const r="signIn",s=await Sw(t,r,e),i=await wi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $O(t,e){return Pw(Di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t){const e=Di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function qO(t,e,n){return Yn(t.app)?Promise.reject($r(t)):$O(Je(t),Li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HO(t),r})}function WO(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function zO(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function KO(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function GO(t){return Je(t).signOut()}const Qc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qc,"1"),this.storage.removeItem(Qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=1e3,YO=10;class kw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,YO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kw.type="LOCAL";const XO=kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ow.type="SESSION";const xw=Ow;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await JO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=md("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function ex(t){On().location.href=t}/**
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
 */function Nw(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function tx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rx(){return Nw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebaseLocalStorageDb",sx=1,Yc="firebaseLocalStorage",Lw="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function ix(){const t=indexedDB.deleteDatabase(Dw);return new ga(t).toPromise()}function qh(){const t=indexedDB.open(Dw,sx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yc,{keyPath:Lw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yc)?e(r):(r.close(),await ix(),e(await qh()))})})}async function Xg(t,e,n){const r=Nl(t,!0).put({[Lw]:e,value:n});return new ga(r).toPromise()}async function ox(t,e){const n=Nl(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Jg(t,e){const n=Nl(t,!0).delete(e);return new ga(n).toPromise()}const ax=800,cx=3;class Mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xl._getInstance(rx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tx(),!this.activeServiceWorker)return;this.sender=new ZO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qh();return await Xg(e,Qc,"1"),await Jg(e,Qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ox(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Nl(s,!1).getAll();return new ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mw.type="LOCAL";const lx=Mw;new pa(3e4,6e4);/**
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
 */function ux(t,e){return e?Zn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hx(t){return Pw(t.auth,new gd(t),t.bypassAuthState)}function fx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),jO(n,new gd(t),t.bypassAuthState)}async function dx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),BO(n,new gd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hx;case"linkViaPopup":case"linkViaRedirect":return dx;case"reauthViaPopup":case"reauthViaRedirect":return fx;default:En(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=new pa(2e3,1e4);class ei extends Vw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,px.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="pendingRedirect",gc=new Map;class gx extends Vw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gc.get(this.auth._key());if(!e){try{const r=await _x(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gc.set(this.auth._key(),e)}return this.bypassAuthState||gc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _x(t,e){const n=Ex(e),r=vx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yx(t,e){gc.set(t._key(),e)}function vx(t){return Zn(t._redirectPersistence)}function Ex(t){return mc(mx,t.config.apiKey,t.name)}async function wx(t,e,n=!1){if(Yn(t.app))return Promise.reject($r(t));const r=Di(t),s=ux(r,e),o=await new gx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=10*60*1e3;class Tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ix(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zg(e))}saveEventToCache(e){this.cachedEventUids.add(Zg(e)),this.lastProcessedEventTime=Date.now()}}function Zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ix(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sx=/^https?/;async function Px(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ax(t);for(const n of e)try{if(Cx(n))return}catch{}En(t,"unauthorized-domain")}function Cx(t){const e=$h(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sx.test(n))return!1;if(Rx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kx=new pa(3e4,6e4);function e_(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ox(t){return new Promise((e,n)=>{var r,s,i;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(kn(t,"network-request-failed"))},timeout:kx.get()})}if(!((s=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=On().gapi)===null||i===void 0)&&i.load)o();else{const a=IO("iframefcb");return On()[a]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},Iw(`${TO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _c=null,e})}let _c=null;function xx(t){return _c=_c||Ox(t),_c}/**
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
 */const Nx=new pa(5e3,15e3),Dx="__/auth/iframe",Lx="emulator/auth/iframe",Mx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fx(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,Lx):`https://${t.config.authDomain}/${Dx}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=Vx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${da(r).slice(1)}`}async function Ux(t){const e=await xx(t),n=On().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:Fx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=On().setTimeout(()=>{i(o)},Nx.get());function l(){On().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Bx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jx=500,$x=600,Hx="_blank",qx="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wx(t,e,n,r=jx,s=$x){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bx),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Nt().toLowerCase();n&&(a=_w(u)?Hx:n),mw(u)&&(e=e||qx,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(pO(u)&&a!=="_self")return zx(e||"",a),new t_(null);const d=window.open(e||"",a,h);fe(d,t,"popup-blocked");try{d.focus()}catch{}return new t_(d)}function zx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kx="__/auth/handler",Gx="emulator/auth/handler",Qx=encodeURIComponent("fac");async function n_(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof Rw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ma){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${Qx}=${encodeURIComponent(l)}`:"";return`${Yx(t)}?${da(a).slice(1)}${u}`}function Yx({config:t}){return t.emulator?ud(t,Gx):`https://${t.authDomain}/${Kx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="webStorageSupport";class Xx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xw,this._completeRedirectFn=wx,this._overrideRedirectResult=yx}async _openPopup(e,n,r,s){var i;ir((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,$h(),s);return Wx(e,o,md())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await n_(e,n,r,$h(),s);return ex(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ux(e),r=new Tx(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($u,{type:$u},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$u];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Px(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bw()||gw()||fd()}}const Jx=Xx;var r_="@firebase/auth",s_="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t2(t){As(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(t)},u=new EO(r,s,i,l);return CO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Kr("auth-internal",e=>{const n=Di(e.getProvider("auth").getImmediate());return(r=>new Zx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(r_,s_,e2(t)),Cn(r_,s_,"esm2017")}/**
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
 */const n2=5*60,r2=ZE("authIdTokenMaxAge")||n2;let i_=null;const s2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r2)return;const s=n==null?void 0:n.token;i_!==s&&(i_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function i2(t=ad()){const e=Cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PO(t,{popupRedirectResolver:Jx,persistence:[lx,XO,xw]}),r=ZE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=s2(i.toString());zO(n,o,()=>o(n.currentUser)),WO(n,a=>o(a))}}const s=YE("auth");return s&&kO(n,`http://${s}`),n}function o2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",o2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t2("Browser");function dn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=dn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:dn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=dn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=dn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(dn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(dn(i),dn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(dn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const a2={path:"/",watch:!0,decode:t=>Ho(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},ec=window.cookieStore;function c2(t,e){var l;const n={...a2,...e};n.filter??(n.filter=u=>u===t);const r=o_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=dn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?h2(o,s,n.watch&&n.watch!=="shallow"):zt(o);{let u=null;try{!ec&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||LR(a.value,r[t])||(u2(t,a.value,n),r[t]=dn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=I=>{var N;const x=I.refresh?(N=o_(n))==null?void 0:N[t]:n.decode(I.value);p=!0,a.value=x,r[t]=dn(x),Fn(()=>{p=!1})};let p=!1;const g=!!oa();if(g&&Rc(()=>{p=!0,h(),u==null||u.close()}),ec){const I=x=>{const N=x.changed.find(P=>P.name===t),O=x.deleted.find(P=>P.name===t);N&&d({value:N.value}),O&&d({value:null})};ec.addEventListener("change",I),g&&Rc(()=>ec.removeEventListener("change",I))}else u&&(u.onmessage=({data:I})=>d(I));n.watch?gn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function o_(t={}){return CR(document.cookie,t)}function l2(t,e,n={}){return e==null?Xm(t,e,{...n,maxAge:-1}):Xm(t,e,n)}function u2(t,e,n={}){document.cookie=l2(t,e,n)}const a_=2147483647;function h2(t,e,n){let r,s,i=0;const o=n?zt(t):{value:t};return oa()&&Rc(()=>{s==null||s(),clearTimeout(r)}),gI((a,l)=>{n&&(s=gn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<a_?h:a_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function Uw(t,e=Et()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>Uw(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const f2=(...t)=>t.find(e=>e!==void 0);function d2(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return c_(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:c_(o,t.trailingSlash)}}function r(s){const i=Et(),o=Ds(),a=Fe(()=>!!s.target&&s.target!=="_self"),l=Fe(()=>{const x=s.to||s.href||"";return typeof x=="string"&&fr(x,{acceptRelative:!0})}),u=Fo("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,d=Fe(()=>{if(s.external)return!0;const x=s.to||s.href||"";return typeof x=="object"?!1:x===""||l.value}),p=Fe(()=>{const x=s.to||s.href||"";return d.value?x:n(x,i.resolve)}),g=d.value||h==null?void 0:h({...s,to:p}),I=Fe(()=>{var x;if(!p.value||l.value)return p.value;if(d.value){const N=typeof p.value=="object"&&"path"in p.value?Sh(p.value):p.value,O=typeof N=="object"?i.resolve(N).href:N;return n(O,i.resolve)}return typeof p.value=="object"?((x=i.resolve(p.value))==null?void 0:x.href)??null:n(bl(o.app.baseURL,p.value),i.resolve)});return{to:p,hasTarget:a,isAbsoluteUrl:l,isExternal:d,href:I,isActive:(g==null?void 0:g.isActive)??Fe(()=>p.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Fe(()=>p.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Fe(()=>i.resolve(p.value)),async navigate(){await WR(I.value,{replace:s.replace,external:d.value||a.value})}}}return Un({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=Et(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:d,isAbsoluteUrl:p}=r(s),g=zt(!1),I=zt(null),x=P=>{var E;I.value=s.custom?(E=P==null?void 0:P.$el)==null?void 0:E.nextElementSibling:P==null?void 0:P.$el};function N(P){var E,R;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===P:((E=s.prefetchOn)==null?void 0:E[P])??((R=t.prefetchOn)==null?void 0:R[P]))&&(s.prefetch??t.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!g2()}async function O(P=Ne()){if(g.value)return;g.value=!0;const E=typeof a.value=="string"?a.value:h.value?Sh(a.value):o.resolve(a.value).fullPath;await Promise.all([P.hooks.callHook("link:prefetch",E).catch(()=>{}),!h.value&&!d.value&&Uw(a.value,o).catch(()=>{})])}if(N("visibility")){const P=Ne();let E,R=null;gl(()=>{const D=m2();Sl(()=>{E=Mh(()=>{var V;(V=I==null?void 0:I.value)!=null&&V.tagName&&(R=D.observe(I.value,async()=>{R==null||R(),R=null,await O(P)}))})})}),la(()=>{E&&uC(E),R==null||R(),R=null})}return()=>{var R;if(!h.value&&!d.value){const D={ref:x,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(N("interaction")&&(D.onPointerenter=O.bind(null,void 0),D.onFocus=O.bind(null,void 0)),g.value&&(D.class=s.prefetchedClass||t.prefetchedClass),D.rel=s.rel||void 0),yt(Fo("RouterLink"),D,i.default)}const P=s.target||null,E=f2(s.noRel?"":s.rel,t.externalRelAttribute,p.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,prefetch:O,get route(){if(!l.value)return;const D=new URL(l.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return nE(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:E,target:P,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:yt("a",{ref:I,href:l.value||null,rel:E,target:P},(R=i.default)==null?void 0:R.call(i))}}})}const p2=d2(vR);function c_(t,e){const n=e==="append"?Vc:wl;return fr(t)&&!t.startsWith("http")?t:n(t,!0)}function m2(){const t=Ne();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}function g2(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ws,Bw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(w,C,S){for(var T=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)T[pe-2]=arguments[pe];return y.prototype[C].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var w=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)w[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)w[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],C=b.g[2];var S=b.g[3],T=y+(S^_&(C^S))+w[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+w[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+w[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+w[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+w[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+w[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+w[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^S&(_^C))+w[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+w[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+w[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+w[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+w[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+w[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+w[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^S)+w[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+w[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+w[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+w[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+w[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+w[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+w[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~S))+w[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+w[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+w[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+w[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+w[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+w[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,w=this.B,C=this.h,S=0;S<y;){if(C==0)for(;S<=_;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(w[C++]=b.charCodeAt(S++),C==this.blockSize){s(this,w),C=0;break}}else for(;S<y;)if(w[C++]=b[S++],C==this.blockSize){s(this,w),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var w=0;32>w;w+=8)b[_++]=this.g[y]>>>w&255;return b};function i(b,y){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],w=!0,C=b.length-1;0<=C;C--){var S=b[C]|0;w&&S==y||(_[C]=S,w=!1)}this.g=_}var a={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return N(u(-b));for(var y=[],_=1,w=0;b>=_;w++)y[w]=b/_|0,_*=4294967296;return new o(y,0)}function h(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(h(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),w=d,C=0;C<b.length;C+=8){var S=Math.min(8,b.length-C),T=parseInt(b.substring(C,C+S),y);8>S?(S=u(Math.pow(y,S)),w=w.j(S).add(u(T))):(w=w.j(_),w=w.add(u(T)))}return w}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(x(this))return-N(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var w=this.i(_);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I(this))return"0";if(x(this))return"-"+N(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,w="";;){var C=R(_,y).g;_=O(_,C.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=C,I(_))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function I(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function x(b){return b.h==-1}t.l=function(b){return b=O(this,b),x(b)?-1:I(b)?0:1};function N(b){for(var y=b.g.length,_=[],w=0;w<y;w++)_[w]=~b.g[w];return new o(_,~b.h).add(p)}t.abs=function(){return x(this)?N(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0,C=0;C<=y;C++){var S=w+(this.i(C)&65535)+(b.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);w=T>>>16,S&=65535,T&=65535,_[C]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function O(b,y){return b.add(N(y))}t.j=function(b){if(I(this)||I(b))return d;if(x(this))return x(b)?N(this).j(N(b)):N(N(this).j(b));if(x(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<b.g.length;C++){var S=this.i(w)>>>16,T=this.i(w)&65535,pe=b.i(C)>>>16,ye=b.i(C)&65535;_[2*w+2*C]+=T*ye,P(_,2*w+2*C),_[2*w+2*C+1]+=S*ye,P(_,2*w+2*C+1),_[2*w+2*C+1]+=T*pe,P(_,2*w+2*C+1),_[2*w+2*C+2]+=S*pe,P(_,2*w+2*C+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function P(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function E(b,y){this.g=b,this.h=y}function R(b,y){if(I(y))throw Error("division by zero");if(I(b))return new E(d,d);if(x(b))return y=R(N(b),y),new E(N(y.g),N(y.h));if(x(y))return y=R(b,N(y)),new E(N(y.g),y.h);if(30<b.g.length){if(x(b)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,w=y;0>=w.l(b);)_=D(_),w=D(w);var C=V(_,1),S=V(w,1);for(w=V(w,2),_=V(_,2);!I(w);){var T=S.add(w);0>=T.l(b)&&(C=C.add(_),S=T),w=V(w,1),_=V(_,1)}return y=O(b,C.j(y)),new E(C,y)}for(C=d;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=u(_),T=S.j(y);x(T)||0<T.l(b);)_-=w,S=u(_),T=S.j(y);I(S)&&(S=p),C=C.add(S),b=O(b,T)}return new E(C,b)}t.A=function(b){return R(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)&b.i(w);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)|b.i(w);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)^b.i(w);return new o(_,this.h^b.h)};function D(b){for(var y=b.g.length+1,_=[],w=0;w<y;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(_,b.h)}function V(b,y){var _=y>>5;y%=32;for(var w=b.g.length-_,C=[],S=0;S<w;S++)C[S]=0<y?b.i(S+_)>>>y|b.i(S+_+1)<<32-y:b.i(S+_);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ws=o}).apply(typeof l_<"u"?l_:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jw,$w,lo,Hw,yc,Wh,qw,Ww,zw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var L=c[v];if(!(L in m))break e;m=m[L]}c=c[c.length-1],v=m[c],f=f(v),f!=v&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,v=!1,L={next:function(){if(!v&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function I(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(v,L,F){for(var G=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)G[Le-2]=arguments[Le];return f.prototype[L].apply(v,G)}}function x(c){const f=c.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=c[v];return m}return[]}function N(c,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const L=c.length||0,F=v.length||0;c.length=L+F;for(let G=0;G<F;G++)c[L+G]=v[G]}else c.push(v)}}class O{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(c){return/^[\s\xa0]*$/.test(c)}function E(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function V(c,f,m){for(const v in c)f.call(m,c[v],v,c)}function b(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function y(c){const f={};for(const m in c)f[m]=c[m];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,f){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)c[m]=v[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(v,m)&&(c[m]=v[m])}}function C(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function T(){var c=ze;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class pe{constructor(){this.h=this.g=null}add(f,m){const v=ye.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new O(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,ee=!1,ze=new pe,un=()=>{const c=a.Promise.resolve(void 0);ne=()=>{c.then(tn)}};var tn=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){S(m)}var f=ye;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ee=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var pr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function wn(c,f){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{R(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:jt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&wn.aa.h.call(this)}}I(wn,Ge);var jt={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(c,f,m,v,L){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=L,this.key=++Z,this.da=this.fa=!1}function te(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ee(c){this.src=c,this.g={},this.h=0}Ee.prototype.add=function(c,f,m,v,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var G=A(c,f,v,L);return-1<G?(f=c[G],m||(f.fa=!1)):(f=new Y(f,this.src,F,!!v,L),f.fa=m,c.push(f)),f};function xe(c,f){var m=f.type;if(m in c.g){var v=c.g[m],L=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(te(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function A(c,f,m,v){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==v)return L}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function j(c,f,m,v,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)j(c,f[F],m,v,L);return null}return m=oe(m),c&&c[B]?c.K(f,m,u(v)?!!v.capture:!!v,L):U(c,f,m,!1,v,L)}function U(c,f,m,v,L,F){if(!f)throw Error("Invalid event type");var G=u(L)?!!L.capture:!!L,Le=le(c);if(Le||(c[k]=Le=new Ee(c)),m=Le.add(f,m,v,G,F),m.proxy)return m;if(v=q(),m.proxy=v,v.src=c,v.listener=m,c.addEventListener)pr||(L=G),L===void 0&&(L=!1),c.addEventListener(f.toString(),v,L);else if(c.attachEvent)c.attachEvent(z(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return f.call(c.src,c.listener,m)}const f=W;return c}function Q(c,f,m,v,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Q(c,f[F],m,v,L);else v=u(v)?!!v.capture:!!v,m=oe(m),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=A(F,m,v,L),-1<m&&(te(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=le(c))&&(f=c.g[f.toString()],c=-1,f&&(c=A(f,m,v,L)),(m=-1<c?f[c]:null)&&K(m))}function K(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])xe(f.i,c);else{var m=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(m,v,c.capture):f.detachEvent?f.detachEvent(z(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=le(f))?(xe(m,c),m.h==0&&(m.src=null,f[k]=null)):te(c)}}}function z(c){return c in M?M[c]:M[c]="on"+c}function W(c,f){if(c.da)c=!0;else{f=new wn(f,this);var m=c.listener,v=c.ha||c.src;c.fa&&K(c),c=m.call(v,f)}return c}function le(c){return c=c[k],c instanceof Ee?c:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[X]||(c[X]=function(f){return c.handleEvent(f)}),c[X])}function re(){Ke.call(this),this.i=new Ee(this),this.M=this,this.F=null}I(re,Ke),re.prototype[B]=!0,re.prototype.removeEventListener=function(c,f,m,v){Q(this,c,f,m,v)};function he(c,f){var m,v=c.F;if(v)for(m=[];v;v=v.F)m.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new Ge(f,c);else if(f instanceof Ge)f.target=f.target||c;else{var L=f;f=new Ge(v,c),w(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var G=f.g=m[F];L=Pe(G,v,!0,f)&&L}if(G=f.g=c,L=Pe(G,v,!0,f)&&L,L=Pe(G,v,!1,f)&&L,m)for(F=0;F<m.length;F++)G=f.g=m[F],L=Pe(G,v,!1,f)&&L}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],v=0;v<m.length;v++)te(m[v]);delete c.g[f],c.h--}}this.F=null},re.prototype.K=function(c,f,m,v){return this.i.add(String(c),f,!1,m,v)},re.prototype.L=function(c,f,m,v){return this.i.add(String(c),f,!0,m,v)};function Pe(c,f,m,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var G=f[F];if(G&&!G.da&&G.capture==m){var Le=G.listener,dt=G.ha||G.src;G.fa&&xe(c.i,G),L=Le.call(dt,v)!==!1&&L}}return L&&!v.defaultPrevented}function Ie(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function bt(c){c.g=Ie(()=>{c.g=null,c.i&&(c.i=!1,bt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class lt extends Ke{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:bt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(c){Ke.call(this),this.h=c,this.g={}}I(ft,Ke);var Tt=[];function mr(c){V(c.g,function(f,m){this.g.hasOwnProperty(m)&&K(f)},c),c.g={}}ft.prototype.N=function(){ft.aa.N.call(this),mr(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Us=a.JSON.stringify,Dt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Bs(){}Bs.prototype.h=null;function up(c){return c.h||(c.h=c.i())}function hp(){}var Bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nu(){Ge.call(this,"d")}I(nu,Ge);function ru(){Ge.call(this,"c")}I(ru,Ge);var ss={},fp=null;function Aa(){return fp=fp||new re}ss.La="serverreachability";function dp(c){Ge.call(this,ss.La,c)}I(dp,Ge);function ji(c){const f=Aa();he(f,new dp(f))}ss.STAT_EVENT="statevent";function pp(c,f){Ge.call(this,ss.STAT_EVENT,c),this.stat=f}I(pp,Ge);function Lt(c){const f=Aa();he(f,new pp(f,c))}ss.Ma="timingevent";function mp(c,f){Ge.call(this,ss.Ma,c),this.size=f}I(mp,Ge);function $i(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function aT(c,f,m,v,L,F){c.info(function(){if(c.g)if(F)for(var G="",Le=F.split("&"),dt=0;dt<Le.length;dt++){var Ae=Le[dt].split("=");if(1<Ae.length){var It=Ae[0];Ae=Ae[1];var At=It.split("_");G=2<=At.length&&At[1]=="type"?G+(It+"="+Ae+"&"):G+(It+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+f+`
`+m+`
`+G})}function cT(c,f,m,v,L,F,G){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+G})}function js(c,f,m,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+uT(c,m)+(v?" "+v:"")})}function lT(c,f){c.info(function(){return"TIMEOUT: "+f})}Hi.prototype.info=function(){};function uT(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var v=m[c];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return Us(m)}catch{return f}}var Ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},su;function Sa(){}I(Sa,Bs),Sa.prototype.g=function(){return new XMLHttpRequest},Sa.prototype.i=function(){return{}},su=new Sa;function gr(c,f,m,v){this.j=c,this.i=f,this.l=m,this.R=v||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _p}function _p(){this.i=null,this.g="",this.h=!1}var yp={},iu={};function ou(c,f,m){c.L=1,c.v=Oa(jn(f)),c.m=m,c.P=!0,vp(c,null)}function vp(c,f){c.F=Date.now(),Pa(c),c.A=jn(c.v);var m=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),Np(m.i,"t",v),c.C=0,m=c.j.J,c.h=new _p,c.g=Xp(c.j,m?f:null,!c.m),0<c.O&&(c.M=new lt(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,v=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(Tt[0]=L.toString()),L=Tt);for(var F=0;F<L.length;F++){var G=j(m,L[F],v||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),ji(),aT(c.i,c.u,c.A,c.l,c.R,c.m)}gr.prototype.ca=function(c){c=c.target;const f=this.M;f&&$n(c)==3?f.j():this.Y(c)},gr.prototype.Y=function(c){try{if(c==this.g)e:{const At=$n(this.g);var f=this.g.Ba();const qs=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Bp(this.g)))){this.J||At!=4||f==7||(f==8||0>=qs?ji(3):ji(2)),au(this);var m=this.g.Z();this.X=m;t:if(Ep(this)){var v=Bp(this.g);c="";var L=v.length,F=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),qi(this);var G="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(v[f],{stream:!(F&&f==L-1)});v.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,cT(this.i,this.u,this.A,this.l,this.R,At,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,dt=this.g;if((Le=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Le)){var Ae=Le;break t}}Ae=null}if(m=Ae)js(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cu(this,m);else{this.o=!1,this.s=3,Lt(12),is(this),qi(this);break e}}if(this.P){m=!0;let hn;for(;!this.J&&this.C<G.length;)if(hn=hT(this,G),hn==iu){At==4&&(this.s=4,Lt(14),m=!1),js(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==yp){this.s=4,Lt(15),js(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else js(this.i,this.l,hn,null),cu(this,hn);if(Ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||G.length!=0||this.h.h||(this.s=1,Lt(16),m=!1),this.o=this.o&&m,!m)js(this.i,this.l,G,"[Invalid Chunked Response]"),is(this),qi(this);else if(0<G.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),pu(It),It.M=!0,Lt(11))}}else js(this.i,this.l,G,null),cu(this,G);At==4&&is(this),this.o&&!this.J&&(At==4?Kp(this.j,this):(this.o=!1,Pa(this)))}else PT(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),is(this),qi(this)}}}catch{}finally{}};function Ep(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function hT(c,f){var m=c.C,v=f.indexOf(`
`,m);return v==-1?iu:(m=Number(f.substring(m,v)),isNaN(m)?yp:(v+=1,v+m>f.length?iu:(f=f.slice(v,v+m),c.C=v+m,f)))}gr.prototype.cancel=function(){this.J=!0,is(this)};function Pa(c){c.S=Date.now()+c.I,wp(c,c.I)}function wp(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=$i(p(c.ba,c),f)}function au(c){c.B&&(a.clearTimeout(c.B),c.B=null)}gr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(lT(this.i,this.A),this.L!=2&&(ji(),Lt(17)),is(this),this.s=2,qi(this)):wp(this,this.S-c)};function qi(c){c.j.G==0||c.J||Kp(c.j,c)}function is(c){au(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,mr(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function cu(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||lu(m.h,c))){if(!c.K&&lu(m.h,c)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Ma(m),Da(m);else break e;du(m),Lt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=$i(p(m.Za,m),6e3));if(1>=Ip(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else as(m,11)}else if((c.K||m.g==c)&&Ma(m),!P(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Ae=L[f];if(m.T=Ae[0],Ae=Ae[1],m.G==2)if(Ae[0]=="c"){m.K=Ae[1],m.ia=Ae[2];const It=Ae[3];It!=null&&(m.la=It,m.j.info("VER="+m.la));const At=Ae[4];At!=null&&(m.Aa=At,m.j.info("SVER="+m.Aa));const qs=Ae[5];qs!=null&&typeof qs=="number"&&0<qs&&(v=1.5*qs,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const hn=c.g;if(hn){const Fa=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var F=v.h;F.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(uu(F,F.h),F.h=null))}if(v.D){const mu=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;mu&&(v.ya=mu,Be(v.I,v.D,mu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var G=c;if(v.qa=Yp(v,v.J?v.ia:null,v.W),G.K){Ap(v.h,G);var Le=G,dt=v.L;dt&&(Le.I=dt),Le.B&&(au(Le),Pa(Le)),v.g=G}else Wp(v);0<m.i.length&&La(m)}else Ae[0]!="stop"&&Ae[0]!="close"||as(m,7);else m.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?as(m,7):fu(m):Ae[0]!="noop"&&m.l&&m.l.ta(Ae),m.v=0)}}ji(4)}catch{}}var fT=class{constructor(c,f){this.g=c,this.map=f}};function bp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ip(c){return c.h?1:c.g?c.g.size:0}function lu(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function uu(c,f){c.g?c.g.add(f):c.h=f}function Ap(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}bp.prototype.cancel=function(){if(this.i=Rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Rp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return x(c.i)}function dT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,v=0;v<m;v++)f.push(c[v]);return f}f=[],m=0;for(v in c)f[m++]=c[v];return f}function pT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const v in c)f[m++]=v;return f}}}function Sp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=pT(c),v=dT(c),L=v.length,F=0;F<L;F++)f.call(void 0,v[F],m&&m[F],c)}var Pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mT(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var v=c[m].indexOf("="),L=null;if(0<=v){var F=c[m].substring(0,v);L=c[m].substring(v+1)}else F=c[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function os(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof os){this.h=c.h,Ca(this,c.j),this.o=c.o,this.g=c.g,ka(this,c.s),this.l=c.l;var f=c.i,m=new Ki;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Cp(this,m),this.m=c.m}else c&&(f=String(c).match(Pp))?(this.h=!1,Ca(this,f[1]||"",!0),this.o=Wi(f[2]||""),this.g=Wi(f[3]||"",!0),ka(this,f[4]),this.l=Wi(f[5]||"",!0),Cp(this,f[6]||"",!0),this.m=Wi(f[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}os.prototype.toString=function(){var c=[],f=this.j;f&&c.push(zi(f,kp,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(zi(f,kp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(zi(m,m.charAt(0)=="/"?yT:_T,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",zi(m,ET)),c.join("")};function jn(c){return new os(c)}function Ca(c,f,m){c.j=m?Wi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function ka(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Cp(c,f,m){f instanceof Ki?(c.i=f,wT(c.i,c.h)):(m||(f=zi(f,vT)),c.i=new Ki(f,c.h))}function Be(c,f,m){c.i.set(f,m)}function Oa(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Wi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function zi(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,gT),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var kp=/[#\/\?@]/g,_T=/[#\?:]/g,yT=/[#\?]/g,vT=/[#\?@]/g,ET=/#/g;function Ki(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function _r(c){c.g||(c.g=new Map,c.h=0,c.i&&mT(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Ki.prototype,t.add=function(c,f){_r(this),this.i=null,c=$s(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Op(c,f){_r(c),f=$s(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function xp(c,f){return _r(c),f=$s(c,f),c.g.has(f)}t.forEach=function(c,f){_r(this),this.g.forEach(function(m,v){m.forEach(function(L){c.call(f,L,v,this)},this)},this)},t.na=function(){_r(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const L=c[v];for(let F=0;F<L.length;F++)m.push(f[v])}return m},t.V=function(c){_r(this);let f=[];if(typeof c=="string")xp(this,c)&&(f=f.concat(this.g.get($s(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return _r(this),this.i=null,c=$s(this,c),xp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Np(c,f,m){Op(c,f),0<m.length&&(c.i=null,c.g.set($s(c,f),x(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const F=encodeURIComponent(String(v)),G=this.V(v);for(v=0;v<G.length;v++){var L=F;G[v]!==""&&(L+="="+encodeURIComponent(String(G[v]))),c.push(L)}}return this.i=c.join("&")};function $s(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function wT(c,f){f&&!c.j&&(_r(c),c.i=null,c.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(Op(this,v),Np(this,L,m))},c)),c.j=f}function bT(c,f){const m=new Hi;if(a.Image){const v=new Image;v.onload=g(yr,m,"TestLoadImage: loaded",!0,f,v),v.onerror=g(yr,m,"TestLoadImage: error",!1,f,v),v.onabort=g(yr,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=g(yr,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function TT(c,f){const m=new Hi,v=new AbortController,L=setTimeout(()=>{v.abort(),yr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?yr(m,"TestPingServer: ok",!0,f):yr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),yr(m,"TestPingServer: error",!1,f)})}function yr(c,f,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function IT(){this.g=new nn}function AT(c,f,m){const v=m||"";try{Sp(c,function(L,F){let G=L;u(L)&&(G=Us(L)),f.push(v+F+"="+encodeURIComponent(G))})}catch(L){throw f.push(v+"type="+encodeURIComponent("_badmap")),L}}function Gi(c){this.l=c.Ub||null,this.j=c.eb||!1}I(Gi,Bs),Gi.prototype.g=function(){return new xa(this.l,this.j)},Gi.prototype.i=function(c){return function(){return c}}({});function xa(c,f){re.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(xa,re),t=xa.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Yi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Qi(this):Yi(this),this.readyState==3&&Dp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Qi(this))},t.Qa=function(c){this.g&&(this.response=c,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Yi(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Yi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Lp(c){let f="";return V(c,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function hu(c,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Lp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Be(c,f,m))}function Ye(c){re.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Ye,re);var RT=/^https?$/i,ST=["POST","PUT"];t=Ye.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():su.g(),this.v=this.o?up(this.o):up(su),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){Mp(this,F);return}if(c=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ST,f,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of m)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Up(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Mp(this,F)}};function Mp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Vp(c),Na(c)}function Vp(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),Na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Na(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fp(this):this.bb())},t.bb=function(){Fp(this)};function Fp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||$n(c)!=4||c.Z()!=2)){if(c.u&&$n(c)==4)Ie(c.Ea,0,c);else if(he(c,"readystatechange"),$n(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=G===0){var L=String(c.D).match(Pp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!RT.test(L?L.toLowerCase():"")}m=v}if(m)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<$n(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Vp(c)}}finally{Na(c)}}}}function Na(c,f){if(c.g){Up(c);const m=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||he(c,"ready");try{m.onreadystatechange=v}catch{}}}function Up(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function $n(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Dt(f)}};function Bp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function PT(c){const f={};c=(c.g&&2<=$n(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(P(c[v]))continue;var m=C(c[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}b(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function jp(c){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xi("baseRetryDelayMs",5e3,c),this.cb=Xi("retryDelaySeedMs",1e4,c),this.Wa=Xi("forwardChannelMaxRetries",2,c),this.wa=Xi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new bp(c&&c.concurrentRequestLimit),this.Da=new IT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jp.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,v){Lt(0),this.W=c,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Yp(this,null,this.W),La(this)};function fu(c){if($p(c),c.G==3){var f=c.U++,m=jn(c.I);if(Be(m,"SID",c.K),Be(m,"RID",f),Be(m,"TYPE","terminate"),Ji(c,m),f=new gr(c,c.j,f),f.L=2,f.v=Oa(jn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Xp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Pa(f)}Qp(c)}function Da(c){c.g&&(pu(c),c.g.cancel(),c.g=null)}function $p(c){Da(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ma(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function La(c){if(!Tp(c.h)&&!c.s){c.s=!0;var f=c.Ga;ne||un(),ee||(ne(),ee=!0),ze.add(f,c),c.B=0}}function CT(c,f){return Ip(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=$i(p(c.Ga,c,f),Gp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new gr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=qp(this,L,f),m=jn(this.I),Be(m,"RID",c),Be(m,"CVER",22),this.D&&Be(m,"X-HTTP-Session-Id",this.D),Ji(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Lp(F)))+"&"+f:this.m&&hu(m,this.m,F)),uu(this.h,L),this.Ua&&Be(m,"TYPE","init"),this.P?(Be(m,"$req",f),Be(m,"SID","null"),L.T=!0,ou(L,m,null)):ou(L,m,f),this.G=2}}else this.G==3&&(c?Hp(this,c):this.i.length==0||Tp(this.h)||Hp(this))};function Hp(c,f){var m;f?m=f.l:m=c.U++;const v=jn(c.I);Be(v,"SID",c.K),Be(v,"RID",m),Be(v,"AID",c.T),Ji(c,v),c.m&&c.o&&hu(v,c.m,c.o),m=new gr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=qp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),uu(c.h,m),ou(m,v,f)}function Ji(c,f){c.H&&V(c.H,function(m,v){Be(f,v,m)}),c.l&&Sp({},function(m,v){Be(f,v,m)})}function qp(c,f,m){m=Math.min(c.i.length,m);var v=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const G=["count="+m];F==-1?0<m?(F=L[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Le=!0;for(let dt=0;dt<m;dt++){let Ae=L[dt].g;const It=L[dt].map;if(Ae-=F,0>Ae)F=Math.max(0,L[dt].g-100),Le=!1;else try{AT(It,G,"req"+Ae+"_")}catch{v&&v(It)}}if(Le){v=G.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,v}function Wp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;ne||un(),ee||(ne(),ee=!0),ze.add(f,c),c.v=0}}function du(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=$i(p(c.Fa,c),Gp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=$i(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Da(this),zp(this))};function pu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function zp(c){c.g=new gr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=jn(c.qa);Be(f,"RID","rpc"),Be(f,"SID",c.K),Be(f,"AID",c.T),Be(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(f,"TO",c.ja),Be(f,"TYPE","xmlhttp"),Ji(c,f),c.m&&c.o&&hu(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Oa(jn(f)),m.m=null,m.P=!0,vp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Da(this),du(this),Lt(19))};function Ma(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Kp(c,f){var m=null;if(c.g==f){Ma(c),pu(c),c.g=null;var v=2}else if(lu(c.h,f))m=f.D,Ap(c.h,f),v=1;else return;if(c.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;v=Aa(),he(v,new mp(v,m)),La(c)}else Wp(c);else if(L=f.s,L==3||L==0&&0<f.X||!(v==1&&CT(c,f)||v==2&&du(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),L){case 1:as(c,5);break;case 4:as(c,10);break;case 3:as(c,6);break;default:as(c,2)}}}function Gp(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function as(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),v=c.Xa;const L=!v;v=new os(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ca(v,"https"),Oa(v),L?bT(v.toString(),m):TT(v.toString(),m)}else Lt(2);c.G=0,c.l&&c.l.sa(f),Qp(c),$p(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Qp(c){if(c.G=0,c.ka=[],c.l){const f=Rp(c.h);(f.length!=0||c.i.length!=0)&&(N(c.ka,f),N(c.ka,c.i),c.h.i.length=0,x(c.i),c.i.length=0),c.l.ra()}}function Yp(c,f,m){var v=m instanceof os?jn(m):new os(m);if(v.g!="")f&&(v.g=f+"."+v.g),ka(v,v.s);else{var L=a.location;v=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new os(null);v&&Ca(F,v),f&&(F.g=f),L&&ka(F,L),m&&(F.l=m),v=F}return m=c.D,f=c.ya,m&&f&&Be(v,m,f),Be(v,"VER",c.la),Ji(c,v),v}function Xp(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Ye(new Gi({eb:m})):new Ye(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jp(){}t=Jp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(c,f){return new Kt(c,f)};function Kt(c,f){re.call(this),this.g=new jp(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!P(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!P(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Hs(this)}I(Kt,re),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){fu(this.g)},Kt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Us(c),c=m);f.i.push(new fT(f.Ya++,c)),f.G==3&&La(f)},Kt.prototype.N=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,Kt.aa.N.call(this)};function Zp(c){nu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}I(Zp,nu);function em(){ru.call(this),this.status=1}I(em,ru);function Hs(c){this.g=c}I(Hs,Jp),Hs.prototype.ua=function(){he(this.g,"a")},Hs.prototype.ta=function(c){he(this.g,new Zp(c))},Hs.prototype.sa=function(c){he(this.g,new em)},Hs.prototype.ra=function(){he(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,zw=function(){return new Va},Ww=function(){return Aa()},qw=ss,Wh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,yc=Ra,gp.COMPLETE="complete",Hw=gp,hp.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",re.prototype.listen=re.prototype.K,lo=hp,$w=Gi,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,jw=Ye}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const u_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Mi="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new id("@firebase/firestore");function ro(){return Ss.logLevel}function se(t,...e){if(Ss.logLevel<=we.DEBUG){const n=e.map(_d);Ss.debug(`Firestore (${Mi}): ${t}`,...n)}}function or(t,...e){if(Ss.logLevel<=we.ERROR){const n=e.map(_d);Ss.error(`Firestore (${Mi}): ${t}`,...n)}}function bi(t,...e){if(Ss.logLevel<=we.WARN){const n=e.map(_d);Ss.warn(`Firestore (${Mi}): ${t}`,...n)}}function _d(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function Ue(t,e){t||me()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class y2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class v2{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new Kw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new St(e)}}class E2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class w2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new E2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new b2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=I2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends Qo{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const A2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Qo{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return A2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(He.fromString(e))}static fromName(e){return new ue(He.fromString(e).popFirst(5))}static empty(){return new ue(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new He(e.slice()))}}function R2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new Gr(s,ue.empty(),e)}function S2(t){return new Gr(t.readTime,t.key,-1)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(ge.min(),ue.empty(),-1)}static max(){return new Gr(ge.max(),ue.empty(),-1)}}function P2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==C2)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function O2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ya(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}yd.oe=-1;function Dl(t){return t==null}function Xc(t){return t===0&&1/t==-1/0}function x2(t){return typeof t=="number"&&Number.isInteger(t)&&!Xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=i??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new f_(this.data.getIterator())}getIteratorFrom(e){return new f_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class f_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new vt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Yw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yw("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const N2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=N2.exec(t);if(Ue(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ed(t){const e=t.mapValue.fields.__previous_value__;return vd(e)?Ed(e):e}function Yo(t){const e=Qr(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vd(t)?4:M2(t)?9007199254740991:L2(t)?10:11:me()}function Ln(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),a=Qr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ps(s.bytesValue).isEqual(Ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Xc(o)===Xc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(h_(o)!==h_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ln(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function Jo(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=Cs(t),r=Cs(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return d_(t.timestampValue,e.timestampValue);case 4:return d_(Yo(t),Yo(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ps(i),l=Ps(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Re(a[u],l[u]);if(h!==0)return h}return Re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Re(nt(i.latitude),nt(o.latitude));return a!==0?a:Re(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return p_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=Re(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return x!==0?x:p_(g,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===rc.mapValue&&o===rc.mapValue)return 0;if(i===rc.mapValue)return 1;if(o===rc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Re(l[d],h[d]);if(p!==0)return p;const g=Ii(a[l[d]],u[h[d]]);if(g!==0)return g}return Re(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function d_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Qr(t),r=Qr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function p_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ii(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Ai(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zh(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function Kh(t){return!!t&&"integerValue"in t}function wd(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vc(t){return!!t&&"mapValue"in t}function L2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function M2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ao(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ao(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(Ao(this.value))}}function Xw(t){const e=[];return Vs(t.fields,(n,r)=>{const s=new _t([n]);if(vc(r)){const i=Xw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ge.min(),ge.min(),ge.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new kt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new kt(e,2,n,ge.min(),ge.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ge.min(),ge.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jc{constructor(e,n){this.position=e,this.inclusive=n}}function __(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Ii(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zc{constructor(e,n="asc"){this.field=e,this.dir=n}}function V2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jw{}class it extends Jw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new U2(e,n,r):n==="array-contains"?new $2(e,r):n==="in"?new H2(e,r):n==="not-in"?new q2(e,r):n==="array-contains-any"?new W2(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B2(e,r):new j2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ii(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(Ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends Jw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return Zw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zw(t){return t.op==="and"}function e0(t){return F2(t)&&Zw(t)}function F2(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Gh(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Ai(t.value);if(e0(t))return t.filters.map(e=>Gh(e)).join(",");{const e=t.filters.map(n=>Gh(n)).join(",");return`${t.op}(${e})`}}function t0(t,e){return t instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Ln(r.value,s.value)}(t,e):t instanceof Mn?function(r,s){return s instanceof Mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&t0(o,s.filters[a]),!0):!1}(t,e):void me()}function n0(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Ai(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(n0).join(" ,")+"}"}(t):"Filter"}class U2 extends it{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class B2 extends it{constructor(e,n){super(e,"in",n),this.keys=r0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j2 extends it{constructor(e,n){super(e,"not-in",n),this.keys=r0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function r0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class $2 extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wd(n)&&Jo(n.arrayValue,this.value)}}class H2 extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class q2 extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class W2 extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function v_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new z2(t,e,n,r,s,i,o)}function bd(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Dl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ai(r)).join(",")),e.ue=n}return e.ue}function Td(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!V2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function Qh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function K2(t,e,n,r,s,i,o,a){return new Ll(t,e,n,r,s,i,o,a)}function s0(t){return new Ll(t)}function E_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function G2(t){return t.collectionGroup!==null}function Ro(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Zc(i,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new Zc(_t.keyField(),r))}return e.ce}function xn(t){const e=_e(t);return e.le||(e.le=Q2(e,Ro(t))),e.le}function Q2(t,e){if(t.limitType==="F")return v_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Zc(s.field,i)});const n=t.endAt?new Jc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jc(t.startAt.position,t.startAt.inclusive):null;return v_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yh(t,e,n){return new Ll(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ml(t,e){return Td(xn(t),xn(e))&&t.limitType===e.limitType}function i0(t){return`${bd(xn(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>n0(s)).join(", ")}]`),Dl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ai(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ai(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function Vl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=__(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ro(r),s)||r.endAt&&!function(o,a,l){const u=__(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ro(r),s))}(t,e)}function Y2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function o0(t){return(e,n)=>{let r=!1;for(const s of Ro(t)){const i=X2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function X2(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ii(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Qw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new Qe(ue.comparator);function ar(){return J2}const a0=new Qe(ue.comparator);function uo(...t){let e=a0;for(const n of t)e=e.insert(n.key,n);return e}function c0(t){let e=a0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return So()}function l0(){return So()}function So(){return new Vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z2=new Qe(ue.comparator),eN=new vt(ue.comparator);function ve(...t){let e=eN;for(const n of t)e=e.add(n);return e}const tN=new vt(Re);function nN(){return tN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(e)?"-0":e}}function u0(t){return{integerValue:""+t}}function rN(t,e){return x2(e)?u0(e):Id(t,e)}/**
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
 */class Fl{constructor(){this._=void 0}}function sN(t,e,n){return t instanceof el?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vd(i)&&(i=Ed(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zo?f0(t,e):t instanceof ea?d0(t,e):function(s,i){const o=h0(s,i),a=w_(o)+w_(s.Pe);return Kh(o)&&Kh(s.Pe)?u0(a):Id(s.serializer,a)}(t,e)}function iN(t,e,n){return t instanceof Zo?f0(t,e):t instanceof ea?d0(t,e):n}function h0(t,e){return t instanceof tl?function(r){return Kh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class el extends Fl{}class Zo extends Fl{constructor(e){super(),this.elements=e}}function f0(t,e){const n=p0(e);for(const r of t.elements)n.some(s=>Ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends Fl{constructor(e){super(),this.elements=e}}function d0(t,e){let n=p0(e);for(const r of t.elements)n=n.filter(s=>!Ln(s,r));return{arrayValue:{values:n}}}class tl extends Fl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function w_(t){return nt(t.integerValue||t.doubleValue)}function p0(t){return wd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zo&&s instanceof Zo||r instanceof ea&&s instanceof ea?Ti(r.elements,s.elements,Ln):r instanceof tl&&s instanceof tl?Ln(r.Pe,s.Pe):r instanceof el&&s instanceof el}(t.transform,e.transform)}class aN{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function m0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ad(t.key,cn.none()):new va(t.key,t.data,cn.none());{const n=t.data,r=qt.empty();let s=new vt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rs(t.key,r,new Qt(s.toArray()),cn.none())}}function cN(t,e,n){t instanceof va?function(s,i,o){const a=s.value.clone(),l=T_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(s,i,o){if(!Ec(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=T_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(g0(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,r){return t instanceof va?function(i,o,a,l){if(!Ec(i.precondition,o))return a;const u=i.value.clone(),h=I_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof rs?function(i,o,a,l){if(!Ec(i.precondition,o))return a;const u=I_(i.fieldTransforms,l,o),h=o.data;return h.setAll(g0(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Ec(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=h0(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function b_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ti(r,s,(i,o)=>oN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Ul{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rs extends Ul{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function g0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function T_(t,e,n){const r=new Map;Ue(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,iN(o,a,n[s]))}return r}function I_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sN(i,o,e))}return r}class Ad extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uN extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=l0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=m0(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(n,r)=>b_(n,r))&&Ti(this.baseMutations,e.baseMutations,(n,r)=>b_(n,r))}}class Rd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ue(e.mutations.length===r.length);let s=function(){return Z2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Rd(e,n,r,s)}}/**
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
 */class fN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,be;function pN(t){switch(t){default:return me();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function _0(t){if(t===void 0)return or("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return me()}}(be=rt||(rt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mN(){return new TextEncoder}/**
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
 */const gN=new ws([4294967295,4294967295],0);function A_(t){const e=mN().encode(t),n=new Bw;return n.update(e),new Uint8Array(n.digest())}function R_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ws([n,r],0),new ws([s,i],0)]}class Sd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ws.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ws.fromNumber(r)));return s.compare(gN)===1&&(s=new ws([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=A_(e),[r,s]=R_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=A_(e),[r,s]=R_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bl(ge.min(),s,new Qe(Re),ar(),ve())}}class Ea{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ea(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class y0{constructor(e,n){this.targetId=e,this.me=n}}class v0{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class S_{constructor(){this.fe=0,this.ge=C_(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new Ea(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=C_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _N{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=P_(),this.Qe=new Qe(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Qh(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,kt.newNoDocument(o,ge.min()))}else Ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ps(r).toUint8Array()}catch(l){if(l instanceof Yw)return bi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Sd(o,s,i)}catch(l){return bi(l instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Qh(a.target)){const l=new ue(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,kt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Bl(e,n,this.Qe,this.ke,r);return this.ke=ar(),this.qe=P_(),this.Qe=new Qe(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new S_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new S_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function P_(){return new Qe(ue.comparator)}function C_(){return new Qe(ue.comparator)}const yN={asc:"ASCENDING",desc:"DESCENDING"},vN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EN={and:"AND",or:"OR"};class wN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xh(t,e){return t.useProto3Json||Dl(e)?e:{value:e}}function nl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bN(t,e){return nl(t,e.toTimestamp())}function Nn(t){return Ue(!!t),ge.fromTimestamp(function(n){const r=Qr(n);return new at(r.seconds,r.nanos)}(t))}function Pd(t,e){return Jh(t,e).canonicalString()}function Jh(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function w0(t){const e=He.fromString(t);return Ue(R0(e)),e}function Zh(t,e){return Pd(t.databaseId,e.path)}function Hu(t,e){const n=w0(e);if(n.get(1)!==t.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(T0(n))}function b0(t,e){return Pd(t.databaseId,e)}function TN(t){const e=w0(t);return e.length===4?He.emptyPath():T0(e)}function ef(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T0(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function k_(t,e,n){return{name:Zh(t,e),fields:n.value.mapValue.fields}}function IN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ue(h===void 0||typeof h=="string"),wt.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),wt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:_0(u.code);return new ae(h,u.message||"")}(o);n=new v0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hu(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):ge.min(),a=new qt({mapValue:{fields:r.document.fields}}),l=kt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new wc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hu(t,r.document),i=r.readTime?Nn(r.readTime):ge.min(),o=kt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hu(t,r.document),i=r.removedTargetIds||[];n=new wc([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dN(s,i),a=r.targetId;n=new y0(a,o)}}return n}function AN(t,e){let n;if(e instanceof va)n={update:k_(t,e.key,e.value)};else if(e instanceof Ad)n={delete:Zh(t,e.key)};else if(e instanceof rs)n={update:k_(t,e.key,e.data),updateMask:DN(e.fieldMask)};else{if(!(e instanceof uN))return me();n={verify:Zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof el)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof tl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function RN(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(ge.min())&&(o=Nn(i)),new aN(o,s.transformResults||[])}(n,e))):[]}function SN(t,e){return{documents:[b0(t,e.path)]}}function PN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=b0(t,s);const i=function(u){if(u.length!==0)return A0(Mn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Xs(p.field),direction:ON(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function CN(t){let e=TN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ue(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=I0(d);return p instanceof Mn&&e0(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(I){return new Zc(Js(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Dl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Jc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Jc(g,p)}(n.endAt)),K2(e,s,o,i,a,"F",l,u)}function kN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function I0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Js(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Js(n.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Js(n.unaryFilter.field);return it.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Js(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Js(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>I0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function ON(t){return yN[t]}function xN(t){return vN[t]}function NN(t){return EN[t]}function Xs(t){return{fieldPath:t.canonicalString()}}function Js(t){return _t.fromServerFormat(t.fieldPath)}function A0(t){return t instanceof it?function(n){if(n.op==="=="){if(g_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NAN"}};if(m_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NAN"}};if(m_(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(n.field),op:xN(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(s=>A0(s));return r.length===1?r[0]:{compositeFilter:{op:NN(n.op),filters:r}}}(t):me()}function DN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function R0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.ct=e}}function MN(t){const e=CN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.un=new FN}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Gr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class FN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new vt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new vt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ri(0)}static kn(){return new Ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.changes=new Vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Po(r.mutation,s,Qt.empty(),at.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=uo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ar();const o=So(),a=function(){return So()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof rs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Po(h.mutation,u,h.mutation.getFieldMask(),at.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new BN(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=So();let s=new Qe((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Qt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||ve()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=l0();h.forEach(p=>{if(!i.has(p)){const g=m0(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):G2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(gs());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:a,changes:c0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(d,p){return new Ll(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let a=uo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Po(h.mutation,u,Qt.empty(),at.now()),Vl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:MN(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class HN{constructor(){this.overlays=new Qe(ue.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=gs(),i=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=gs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=gs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fN(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class qN{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Tr=new vt(ut.Er),this.dr=new vt(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ut(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ue(new He([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ue(new He([])),r=new ut(n,e),s=new ut(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ue.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new vt(ut.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hN(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(Re);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ut(new ue(i),0);let a=new vt(Re);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ut(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.Mr=e,this.docs=function(){return new Qe(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,a=new ue(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||P2(S2(h),r)<=0||(s.has(h.key)||Vl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KN(this)}getSize(e){return H.resolve(this.size)}}class KN extends UN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.persistence=e,this.Nr=new Vi(n=>bd(n),Td),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cd,this.targetCount=0,this.kr=Ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new yd(0),this.Kr=!1,this.Kr=!0,this.$r=new qN,this.referenceDelegate=e(this),this.Ur=new GN(this),this.indexManager=new VN,this.remoteDocumentCache=function(s){return new zN(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new LN(n),this.Gr=new $N(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new YN(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YN extends k2{constructor(e){super(),this.currentSequenceNumber=e}}class kd{constructor(e){this.persistence=e,this.Jr=new Cd,this.Yr=null}static Zr(e){return new kd(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=ue.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Od(e,n.fromCache,r,s)}}/**
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
 */class XN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return OC()?8:O2(Nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XN;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ro()<=we.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(ro()<=we.DEBUG&&se("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ro()<=we.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):H.resolve())}Yi(e,n){if(E_(n))return H.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yh(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,Yh(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return E_(n)||s.isEqual(ge.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(ro()<=we.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ys(n)),this.rs(e,o,n,R2(s,-1)).next(a=>a))})}ts(e,n){let r=new vt(o0(e));return n.forEach((s,i)=>{Vl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ro()<=we.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.Ji.getDocumentsMatchingQuery(e,n,Gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Qe(Re),this._s=new Vi(i=>bd(i),Td),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eD(t,e,n,r){return new ZN(t,e,n,r)}async function S0(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function tD(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=H.resolve();return p.forEach(I=>{g=g.next(()=>h.getEntry(l,I)).next(x=>{const N=u.docVersions.get(I);Ue(N!==null),x.version.compareTo(N)<0&&(d.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),h.addEntry(x)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function P0(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nD(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(wt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(x,N,O){return x.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(i,g))});let l=ar(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(rD(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function rD(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ar();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):se("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function sD(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iD(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tf(t,e,n){const r=_e(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ya(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function O_(t,e,n){const r=_e(t);let s=ge.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=_e(l),p=d._s.get(h);return p!==void 0?H.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(r,o,xn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ve())).next(a=>(oD(r,Y2(e),a),{documents:a,Ts:i})))}function oD(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class x_{constructor(){this.activeTargetIds=nN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aD{constructor(){this.so=new x_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new x_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sc=null;function qu(){return sc===null?sc=function(){return 268435456+Math.round(2147483648*Math.random())}():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class hD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=qu(),l=this.xo(n,r.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(se("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw bi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=lD[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=qu();return new Promise((o,a)=>{const l=new jw;l.setWithCredentials(!0),l.listenOnce(Hw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yc.NO_ERROR:const h=l.getResponseJson();se(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case yc.TIMEOUT:se(Rt,`RPC '${e}' ${i} timed out`),a(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const d=l.getStatus();if(se(Rt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(O)>=0?O:$.UNKNOWN}(g.status);a(new ae(I,g.message))}else a(new ae($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ae($.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{se(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);se(Rt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=qu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zw(),a=Ww(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new $w({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");se(Rt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const I=new uD({Io:N=>{g?se(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(se(Rt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),se(Rt,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},To:()=>d.close()}),x=(N,O,P)=>{N.listen(O,E=>{try{P(E)}catch(R){setTimeout(()=>{throw R},0)}})};return x(d,lo.EventType.OPEN,()=>{g||(se(Rt,`RPC '${e}' stream ${s} transport opened.`),I.yo())}),x(d,lo.EventType.CLOSE,()=>{g||(g=!0,se(Rt,`RPC '${e}' stream ${s} transport closed`),I.So())}),x(d,lo.EventType.ERROR,N=>{g||(g=!0,bi(Rt,`RPC '${e}' stream ${s} transport errored:`,N),I.So(new ae($.UNAVAILABLE,"The operation could not be completed")))}),x(d,lo.EventType.MESSAGE,N=>{var O;if(!g){const P=N.data[0];Ue(!!P);const E=P,R=E.error||((O=E[0])===null||O===void 0?void 0:O.error);if(R){se(Rt,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let V=function(_){const w=rt[_];if(w!==void 0)return _0(w)}(D),b=R.message;V===void 0&&(V=$.INTERNAL,b="Unknown error status: "+D+" with message "+R.message),g=!0,I.So(new ae(V,b)),d.close()}else se(Rt,`RPC '${e}' stream ${s} received:`,P),I.bo(P)}}),x(a,qw.STAT_EVENT,N=>{N.stat===Wh.PROXY?se(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Wh.NOPROXY&&se(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){return new wN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new C0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ae($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fD extends k0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=IN(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Nn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ef(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Qh(l)?{documents:SN(i,l)}:{query:PN(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=E0(i,o.resumeToken);const u=Xh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=nl(i,o.snapshotVersion.toTimestamp());const u=Xh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=kN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ef(this.serializer),n.removeTarget=e,this.a_(n)}}class dD extends k0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=RN(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ef(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Jh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Jh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(or(n),this.D_=!1):se("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.L_.add(4),await wa(u),u.q_.set("Unknown"),u.L_.delete(4),await $l(u)}(this))})}),this.q_=new mD(r,s)}}async function $l(t){if(Fs(t))for(const e of t.B_)await e(!0)}async function wa(t){for(const e of t.B_)await e(!1)}function O0(t,e){const n=_e(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ld(n)?Dd(n):Fi(n).r_()&&Nd(n,e))}function xd(t,e){const n=_e(t),r=Fi(n);n.N_.delete(e),r.r_()&&x0(n,e),n.N_.size===0&&(r.r_()?r.o_():Fs(n)&&n.q_.set("Unknown"))}function Nd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fi(t).A_(e)}function x0(t,e){t.Q_.xe(e),Fi(t).R_(e)}function Dd(t){t.Q_=new _N({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Fi(t).start(),t.q_.v_()}function Ld(t){return Fs(t)&&!Fi(t).n_()&&t.N_.size>0}function Fs(t){return _e(t).L_.size===0}function N0(t){t.Q_=void 0}async function _D(t){t.q_.set("Online")}async function yD(t){t.N_.forEach((e,n)=>{Nd(t,e)})}async function vD(t,e){N0(t),Ld(t)?(t.q_.M_(e),Dd(t)):t.q_.set("Unknown")}async function ED(t,e,n){if(t.q_.set("Online"),e instanceof v0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rl(t,r)}else if(e instanceof wc?t.Q_.Ke(e):e instanceof y0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await P0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(wt.EMPTY_BYTE_STRING,h.snapshotVersion)),x0(i,l);const d=new Vr(h.target,l,u,h.sequenceNumber);Nd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await rl(t,r)}}async function rl(t,e,n){if(!ya(e))throw e;t.L_.add(1),await wa(t),t.q_.set("Offline"),n||(n=()=>P0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await $l(t)})}function D0(t,e){return e().catch(n=>rl(t,n,e))}async function Hl(t){const e=_e(t),n=Yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wD(e);)try{const s=await sD(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,bD(e,s)}catch(s){await rl(e,s)}L0(e)&&M0(e)}function wD(t){return Fs(t)&&t.O_.length<10}function bD(t,e){t.O_.push(e);const n=Yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function L0(t){return Fs(t)&&!Yr(t).n_()&&t.O_.length>0}function M0(t){Yr(t).start()}async function TD(t){Yr(t).p_()}async function ID(t){const e=Yr(t);for(const n of t.O_)e.m_(n.mutations)}async function AD(t,e,n){const r=t.O_.shift(),s=Rd.from(r,e,n);await D0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hl(t)}async function RD(t,e){e&&Yr(t).V_&&await async function(r,s){if(function(o){return pN(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();Yr(r).s_(),await D0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hl(r)}}(t,e),L0(t)&&M0(t)}async function D_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=Fs(n);n.L_.add(3),await wa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await $l(n)}async function SD(t,e){const n=_e(t);e?(n.L_.delete(2),await $l(n)):e||(n.L_.add(2),await wa(n),n.q_.set("Unknown"))}function Fi(t){return t.K_||(t.K_=function(n,r,s){const i=_e(n);return i.w_(),new fD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:_D.bind(null,t),Ro:yD.bind(null,t),mo:vD.bind(null,t),d_:ED.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ld(t)?Dd(t):t.q_.set("Unknown")):(await t.K_.stop(),N0(t))})),t.K_}function Yr(t){return t.U_||(t.U_=function(n,r,s){const i=_e(n);return i.w_(),new dD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TD.bind(null,t),mo:RD.bind(null,t),f_:ID.bind(null,t),g_:AD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Hl(t)):(await t.U_.stop(),t.O_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Md(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vd(t,e){if(or("AsyncQueue",`${e}: ${t}`),ya(t))return new ae($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class L_{constructor(){this.W_=new Qe(ue.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Si(e,n,fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ml(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class CD{constructor(){this.queries=M_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=M_(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ae($.ABORTED,"Firestore shutting down"))}}function M_(){return new Vi(t=>i0(t),Ml)}async function kD(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new PD,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Vd(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Fd(n)}async function OD(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xD(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Fd(n)}function ND(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Fd(t){t.Y_.forEach(e=>{e.next()})}var nf,V_;(V_=nf||(nf={})).ea="default",V_.Cache="cache";class DD{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.key=e}}class F0{constructor(e){this.key=e}}class LD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=o0(e),this.Ra=new fi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new L_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Vl(this.query,d)?d:null,I=!!p&&this.mutatedKeys.has(p.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;p&&g?p.data.isEqual(g.data)?I!==x&&(r.track({type:3,doc:g}),N=!0):this.ga(p,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),N=!0):p&&!g&&(r.track({type:1,doc:p}),N=!0,(l||u)&&(a=!0)),N&&(g?(o=o.add(g),i=x?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(g,I){const x=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return x(g)-x(I)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Si(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new L_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new F0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new V0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class MD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VD{constructor(e){this.key=e,this.va=!1}}class FD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vi(a=>i0(a),Ml),this.Ma=new Map,this.xa=new Set,this.Oa=new Qe(ue.comparator),this.Na=new Map,this.La=new Cd,this.Ba={},this.ka=new Map,this.qa=Ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UD(t,e,n=!0){const r=q0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await U0(r,e,n,!0),s}async function BD(t,e){const n=q0(t);await U0(n,e,!0,!1)}async function U0(t,e,n,r){const s=await iD(t.localStore,xn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await jD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&O0(t.remoteStore,s),a}async function jD(t,e,n,r,s){t.Ka=(d,p,g)=>async function(x,N,O,P){let E=N.view.ma(O);E.ns&&(E=await O_(x.localStore,N.query,!1).then(({documents:b})=>N.view.ma(b,E)));const R=P&&P.targetChanges.get(N.targetId),D=P&&P.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(E,x.isPrimaryClient,R,D);return U_(x,N.targetId,V.wa),V.snapshot}(t,d,p,g);const i=await O_(t.localStore,e,!0),o=new LD(e,i.Ts),a=o.ma(i.documents),l=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);U_(t,n,u.wa);const h=new MD(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function $D(t,e,n){const r=_e(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ml(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xd(r.remoteStore,s.targetId),rf(r,s.targetId)}).catch(_a)):(rf(r,s.targetId),await tf(r.localStore,s.targetId,!0))}async function HD(t,e){const n=_e(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xd(n.remoteStore,r.targetId))}async function qD(t,e,n){const r=XD(t);try{const s=await function(o,a){const l=_e(o),u=at.now(),h=a.reduce((g,I)=>g.add(I.key),ve());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=ar(),x=ve();return l.cs.getEntries(g,h).next(N=>{I=N,I.forEach((O,P)=>{P.isValidDocument()||(x=x.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,I)).next(N=>{d=N;const O=[];for(const P of a){const E=lN(P,d.get(P.key).overlayedDocument);E!=null&&O.push(new rs(P.key,E,Xw(E.value.mapValue),cn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,O,a)}).next(N=>{p=N;const O=N.applyToLocalDocumentSet(d,x);return l.documentOverlayCache.saveOverlays(g,N.batchId,O)})}).then(()=>({batchId:p.batchId,changes:c0(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Qe(Re)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await ba(r,s.changes),await Hl(r.remoteStore)}catch(s){const i=Vd(s,"Failed to persist write");n.reject(i)}}async function B0(t,e){const n=_e(t);try{const r=await nD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ue(o.va):s.removedDocuments.size>0&&(Ue(o.va),o.va=!1))}),await ba(n,r,e)}catch(r){await _a(r)}}function F_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&Fd(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WD(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Qe(ue.comparator);o=o.insert(i,kt.newNoDocument(i,ge.min()));const a=ve().add(i),l=new Bl(ge.min(),new Map,new Qe(Re),o,a);await B0(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ud(r)}else await tf(r.localStore,e,!1).then(()=>rf(r,e,n)).catch(_a)}async function zD(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await tD(n.localStore,e);$0(n,r,null),j0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,s)}catch(s){await _a(s)}}async function KD(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ue(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);$0(r,e,n),j0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,s)}catch(s){await _a(s)}}function j0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function $0(t,e,n){const r=_e(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||H0(t,r)})}function H0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ud(t))}function U_(t,e,n){for(const r of n)r instanceof V0?(t.La.addReference(r.key,e),GD(t,r)):r instanceof F0?(se("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||H0(t,r.key)):me()}function GD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(se("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ud(t))}function Ud(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ue(He.fromString(e)),r=t.qa.next();t.Na.set(r,new VD(n)),t.Oa=t.Oa.insert(n,r),O0(t.remoteStore,new Vr(xn(s0(n.path)),r,"TargetPurposeLimboResolution",yd.oe))}}async function ba(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Od.Wi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>H.forEach(u,p=>H.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>H.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!ya(d))throw d;se("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.os.get(p),I=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(p,x)}}}(r.localStore,i))}async function QD(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await S0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new ae($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r.hs)}}function YD(t,e){const n=_e(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function q0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=B0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WD.bind(null,e),e.Ca.d_=xD.bind(null,e.eventManager),e.Ca.$a=ND.bind(null,e.eventManager),e}function XD(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KD.bind(null,e),e}class B_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eD(this.persistence,new JN,e.initialUser,this.serializer)}createPersistence(e){return new QN(kd.Zr,this.serializer)}createSharedClientState(e){return new aD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QD.bind(null,this.syncEngine),await SD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CD}()}createDatastore(e){const n=jl(e.databaseInfo.databaseId),r=function(i){return new hD(i)}(e.databaseInfo);return function(i,o,a,l){return new pD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new gD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>F_(this.syncEngine,n,0),function(){return N_.D()?new N_:new cD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new FD(s,i,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);se("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await wa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Gw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{se("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(se("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zu(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await S0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nL(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>D_(e.remoteStore,s)),t._onlineComponents=e}function tL(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await zu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tL(n))throw n;bi("Error using user provided cache. Falling back to memory cache: "+n),await zu(t,new B_)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await zu(t,new B_);return t._offlineComponents}async function W0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await j_(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await j_(t,new JD))),t._onlineComponents}function rL(t){return W0(t).then(e=>e.syncEngine)}async function sL(t){const e=await W0(t),n=e.eventManager;return n.onListen=UD.bind(null,e.syncEngine),n.onUnlisten=$D.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HD.bind(null,e.syncEngine),n}function iL(t,e,n={}){const r=new Hr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new ZD({next:p=>{o.enqueueAndForget(()=>OD(i,d)),p.fromCache&&l.source==="server"?u.reject(new ae($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new DD(a,h,{includeMetadataChanges:!0,_a:!0});return kD(i,d)}(await sL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function z0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t,e,n){if(!n)throw new ae($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oL(t,e,n,r){if(e===!0&&r===!0)throw new ae($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function H_(t){if(!ue.isDocumentKey(t))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if(ue.isDocumentKey(t))throw new ae($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Pi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bd(t);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=z0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ql{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _2;switch(r.type){case"firstParty":return new w2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$_.get(n);r&&(se("ComponentProvider","Removing Datastore"),$_.delete(n),r.terminate())}(this),Promise.resolve()}}function aL(t,e,n,r={}){var s;const i=(t=Pi(t,ql))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=St.MOCK_USER;else{a=ew(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new St(u)}t._authCredentials=new y2(new Kw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wl(this.firestore,e,this._query)}}class ln{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class qr extends Wl{constructor(e,n,r){super(e,n,s0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new ue(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function nU(t,e,...n){if(t=Je(t),K0("collection","path",e),t instanceof ql){const r=He.fromString(e,...n);return q_(r),new qr(t,null,r)}{if(!(t instanceof ln||t instanceof qr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return q_(r),new qr(t.firestore,null,r)}}function rU(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Gw.newId()),K0("doc","path",e),t instanceof ql){const r=He.fromString(e,...n);return H_(r),new ln(t,null,new ue(r))}{if(!(t instanceof ln||t instanceof qr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return H_(r),new ln(t.firestore,t instanceof qr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new C0(this,"async_queue_retry"),this.Eu=()=>{const n=Wu();n&&se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Wu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Hr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ya(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw or("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Md.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&me()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class zl extends ql{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new cL}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||G0(this),this._firestoreClient.terminate()}}function lL(t,e){const n=typeof t=="object"?t:ad(),r=typeof t=="string"?t:"(default)",s=Cl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=XE("firestore");i&&aL(s,...i)}return s}function jd(t){return t._firestoreClient||G0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function G0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new D2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,z0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new eL(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ci(wt.fromBase64String(e))}catch(n){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ci(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */const uL=/^__.*__$/;class hL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class Q0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Y0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Wd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return sl(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Y0(this.wu)&&uL.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class fL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jl(e)}Nu(e,n,r,s=!1){return new Wd({wu:e,methodName:n,Ou:r,path:_t.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X0(t){const e=t._freezeSettings(),n=jl(t._databaseId);return new fL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J0(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);zd("Data must be an object, but it was:",o,r);const a=Z0(r,o);let l,u;if(i.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=sf(e,d,n);if(!o.contains(p))throw new ae($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);tb(h,p)||h.push(p)}l=new Qt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new hL(new qt(a),l,u)}class Gl extends $d{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gl}}function dL(t,e,n,r){const s=t.Nu(1,e,n);zd("Data must be an object, but it was:",s,r);const i=[],o=qt.empty();Vs(r,(l,u)=>{const h=Kd(e,l,n);u=Je(u);const d=s.Cu(h);if(u instanceof Gl)i.push(h);else{const p=Ql(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Qt(i);return new Q0(o,a,s.fieldTransforms)}function pL(t,e,n,r,s,i){const o=t.Nu(1,e,n),a=[sf(e,r,n)],l=[s];if(i.length%2!=0)throw new ae($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(sf(e,i[p])),l.push(i[p+1]);const u=[],h=qt.empty();for(let p=a.length-1;p>=0;--p)if(!tb(u,a[p])){const g=a[p];let I=l[p];I=Je(I);const x=o.Cu(g);if(I instanceof Gl)u.push(g);else{const N=Ql(I,x);N!=null&&(u.push(g),h.set(g,N))}}const d=new Qt(u);return new Q0(h,d,o.fieldTransforms)}function Ql(t,e){if(eb(t=Je(t)))return zd("Unsupported field value:",e,t),Z0(t,e);if(t instanceof $d)return function(r,s){if(!Y0(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ql(a,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:nl(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nl(s.serializer,i)}}if(r instanceof Hd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ci)return{bytesValue:E0(s.serializer,r._byteString)};if(r instanceof ln){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return Id(a.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Bd(r)}`)}(t,e)}function Z0(t,e){const n={};return Qw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(r,s)=>{const i=Ql(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Hd||t instanceof Ci||t instanceof ln||t instanceof $d||t instanceof qd)}function zd(t,e,n){if(!eb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Bd(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function sf(t,e,n){if((e=Je(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return Kd(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const mL=new RegExp("[~\\*/\\[\\]]");function Kd(t,e,n){if(e.search(mL)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ae($.INVALID_ARGUMENT,a+t+l)}function tb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gL extends nb{data(){return super.data()}}function rb(t,e){return typeof e=="string"?Kd(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yL{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new qd(i)}convertGeoPoint(e){return new Hd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ed(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Ue(R0(r));const s=new Xo(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vL extends nb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bc extends vL{data(e={}){return super.data(e)}}class EL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ic(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bc(this._firestore,this._userDataWriter,r.key,r,new ic(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new bc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ic(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new bc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ic(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:wL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class bL extends yL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ci(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,n)}}function sU(t){t=Pi(t,Wl);const e=Pi(t.firestore,zl),n=jd(e),r=new bL(e);return _L(t._query),iL(n,t._query).then(s=>new EL(e,r,t,s))}function iU(t,e,n){t=Pi(t,ln);const r=Pi(t.firestore,zl),s=sb(t.converter,e,n);return ib(r,[J0(X0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,cn.none())])}function ib(t,e){return function(r,s){const i=new Hr;return r.asyncQueue.enqueueAndForget(async()=>qD(await rL(r),s,i)),i.promise}(jd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=X0(e)}set(e,n,r){this._verifyNotCommitted();const s=Ku(e,this._firestore),i=sb(s.converter,n,r),o=J0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,cn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ku(e,this._firestore);let o;return o=typeof(n=Je(n))=="string"||n instanceof Kl?pL(this._dataReader,"WriteBatch.update",i._key,n,r,s):dL(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,cn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ku(e,this._firestore);return this._mutations=this._mutations.concat(new Ad(n._key,cn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ku(t,e){if((t=Je(t)).firestore!==e)throw new ae($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(t){return jd(t=Pi(t,zl)),new TL(t,e=>ib(t,e))}(function(e,n=!0){(function(s){Mi=s})(Ls),As(new Kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new zl(new v2(r.getProvider("auth-internal")),new T2(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Cn(u_,"4.7.1",e),Cn(u_,"4.7.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="firebasestorage.googleapis.com",ab="storageBucket",IL=2*60*1e3,AL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Bn{constructor(e,n,r=0){super(Gu(e),`Firebase Storage: ${n} (${Gu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function Gu(t){return"storage/"+t}function Gd(){const t="An unknown error occurred, please check the error payload for server response.";return new et(Ze.UNKNOWN,t)}function RL(t){return new et(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function SL(t){return new et(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function PL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(Ze.UNAUTHENTICATED,t)}function CL(){return new et(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kL(t){return new et(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function OL(){return new et(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xL(){return new et(Ze.CANCELED,"User canceled the upload/download.")}function NL(t){return new et(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function DL(t){return new et(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LL(){return new et(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ab+"' property when initializing the app?")}function ML(){return new et(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VL(){return new et(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FL(t){return new et(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function of(t){return new et(Ze.INVALID_ARGUMENT,t)}function cb(){return new et(Ze.APP_DELETED,"The Firebase app was deleted.")}function UL(t){return new et(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Co(t,e){return new et(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function so(t){throw new et(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw DL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),I={bucket:1,path:3},x=n===ob?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",O=new RegExp(`^https?://${x}/${s}/${N}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:g,indices:I,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<E.length;R++){const D=E[R],V=D.regex.exec(e);if(V){const b=V[D.indices.bucket];let y=V[D.indices.path];y||(y=""),r=new Yt(b,y),D.postModify(r);break}}if(r==null)throw NL(e);return r}}class BL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function d(N){s=setTimeout(()=>{s=null,t(g,l())},N)}function p(){i&&clearTimeout(i)}function g(N,...O){if(u){p();return}if(N){p(),h.call(null,N,...O);return}if(l()||o){p(),h.call(null,N,...O);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,d(E)}let I=!1;function x(N){I||(I=!0,p(),!u&&(s!==null?(N||(a=2),clearTimeout(s),d(0)):N||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,x(!0)},n),x}function $L(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t){return t!==void 0}function qL(t){return typeof t=="object"&&!Array.isArray(t)}function Qd(t){return typeof t=="string"||t instanceof String}function z_(t){return Yd()&&t instanceof Blob}function Yd(){return typeof Blob<"u"}function K_(t,e,n,r){if(r<e)throw of(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw of(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var bs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bs||(bs={}));/**
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
 */function WL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new oc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===bs.NO_ERROR,l=i.getStatus();if(!a||WL(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===bs.ABORT;r(!1,new oc(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new oc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HL(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Gd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?cb():xL();o(l)}else{const l=OL();o(l)}};this.canceled_?n(!1,new oc(!1,null,!0)):this.backoffId_=jL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$L(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function KL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XL(t,e,n,r,s,i,o=!0){const a=lb(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return QL(u,e),KL(u,n),GL(u,i),YL(u,r),new zL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZL(...t){const e=JL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yd())return new Blob(t);throw new et(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function tM(t){if(typeof atob>"u")throw FL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qu{constructor(e,n){this.data=e,this.contentType=n||null}}function nM(t,e){switch(t){case An.RAW:return new Qu(ub(e));case An.BASE64:case An.BASE64URL:return new Qu(hb(t,e));case An.DATA_URL:return new Qu(sM(e),iM(e))}throw Gd()}function ub(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function rM(t){let e;try{e=decodeURIComponent(t)}catch{throw Co(An.DATA_URL,"Malformed data URL.")}return ub(e)}function hb(t,e){switch(t){case An.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Co(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Co(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tM(e)}catch(s){throw s.message.includes("polyfill")?s:Co(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class fb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Co(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=oM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sM(t){const e=new fb(t);return e.base64?hb(An.BASE64,e.rest):rM(e.rest)}function iM(t){return new fb(t).contentType}function oM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){let r=0,s="";z_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(z_(this.data_)){const r=this.data_,s=eM(r,e,n);return s===null?null:new Lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Lr(r,!0)}}static getBlob(...e){if(Yd()){const n=e.map(r=>r instanceof Lr?r.data_:r);return new Lr(ZL.apply(null,n))}else{const n=e.map(o=>Qd(o)?nM(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){let e;try{e=JSON.parse(t)}catch{return null}return qL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function pb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t,e){return e}class Mt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||lM}}let ac=null;function uM(t){return!Qd(t)||t.length<2?t:pb(t)}function mb(){if(ac)return ac;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(i,o){return uM(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Mt("size");return s.xform=r,t.push(s),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),ac=t,ac}function hM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function fM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return hM(r,t),r}function gb(t,e,n){const r=db(e);return r===null?null:fM(t,r,n)}function dM(t,e,n,r){const s=db(e);if(s===null||!Qd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=Xd(p,n,r),I=lb({alt:"media",token:u});return g+I})[0]}function pM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class _b{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){if(!t)throw Gd()}function mM(t,e){function n(r,s){const i=gb(t,s,e);return yb(i!==null),i}return n}function gM(t,e){function n(r,s){const i=gb(t,s,e);return yb(i!==null),dM(i,s,t.host,t._protocol)}return n}function vb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=CL():s=PL():n.getStatus()===402?s=SL(t.bucket):n.getStatus()===403?s=kL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function _M(t){const e=vb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=RL(t.path)),i.serverResponse=s.serverResponse,i}return n}function yM(t,e,n){const r=e.fullServerUrl(),s=Xd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new _b(s,i,gM(t,n),o);return a.errorHandler=_M(e),a}function vM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function EM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vM(null,e)),r}function wM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let R=0;R<2;R++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=EM(e,r,s),h=pM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Lr.getBlob(d,r,p);if(g===null)throw ML();const I={name:u.fullPath},x=Xd(i,t.host,t._protocol),N="POST",O=t.maxUploadRetryTime,P=new _b(x,N,mM(t,n),O);return P.urlParams=I,P.headers=o,P.body=g.uploadData(),P.errorHandler=vb(e),P}class bM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw so("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw so("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw so("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw so("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw so("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TM extends bM{initXhr(){this.xhr_.responseType="text"}}function Eb(){return new TM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ks(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pb(this._location.path)}get storage(){return this._service}get parent(){const e=aM(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new ks(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UL(e)}}function IM(t,e,n){t._throwIfRoot("uploadBytes");const r=wM(t.storage,t._location,mb(),new Lr(e,!0),n);return t.storage.makeRequestWithTokens(r,Eb).then(s=>({metadata:s,ref:t}))}function AM(t){t._throwIfRoot("getDownloadURL");const e=yM(t.storage,t._location,mb());return t.storage.makeRequestWithTokens(e,Eb).then(n=>{if(n===null)throw VL();return n})}function RM(t,e){const n=cM(t._location.path,e),r=new Yt(t._location.bucket,n);return new ks(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){return/^[A-Za-z]+:\/\//.test(t)}function PM(t,e){return new ks(t,e)}function wb(t,e){if(t instanceof Jd){const n=t;if(n._bucket==null)throw LL();const r=new ks(n,n._bucket);return e!=null?wb(r,e):r}else return e!==void 0?RM(t,e):t}function CM(t,e){if(e&&SM(e)){if(t instanceof Jd)return PM(t,e);throw of("To use ref(service, url), the first argument must be a Storage instance.")}else return wb(t,e)}function G_(t,e){const n=e==null?void 0:e[ab];return n==null?null:Yt.makeFromBucketSpec(n,t)}function kM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ew(s,t.app.options.projectId))}class Jd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ob,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IL,this._maxUploadRetryTime=AL,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=G_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=G_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){K_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){K_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ks(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new BL(cb());{const o=XL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Q_="@firebase/storage",Y_="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="storage";function aU(t,e,n){return t=Je(t),IM(t,e,n)}function cU(t){return t=Je(t),AM(t)}function lU(t,e){return t=Je(t),CM(t,e)}function OM(t=ad(),e){t=Je(t);const r=Cl(t,bb).getImmediate({identifier:e}),s=XE("storage");return s&&xM(r,...s),r}function xM(t,e,n,r={}){kM(t,e,n,r)}function NM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Jd(n,r,s,e,Ls)}function DM(){As(new Kr(bb,NM,"PUBLIC").setMultipleInstances(!0)),Cn(Q_,Y_,""),Cn(Q_,Y_,"esm2017")}DM();const LM=Zt(t=>{const e=Ds(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=rw(n),s=i2(r),i=lL(r),o=OM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)}),X_=()=>{};let Zd={},Tb={},Ib=null,Ab={mark:X_,measure:X_};try{typeof window<"u"&&(Zd=window),typeof document<"u"&&(Tb=document),typeof MutationObserver<"u"&&(Ib=MutationObserver),typeof performance<"u"&&(Ab=performance)}catch{}const{userAgent:J_=""}=Zd.navigator||{},Xr=Zd,je=Tb,Z_=Ib,cc=Ab;Xr.document;const dr=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",Rb=~J_.indexOf("MSIE")||~J_.indexOf("Trident/");var qe="classic",Sb="duotone",Xt="sharp",Jt="sharp-duotone",MM=[qe,Sb,Xt,Jt],VM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ey={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},FM=["kit"],UM=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,BM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,jM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$M={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},HM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},qM={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},WM={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},zM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Pb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},KM=["solid","regular","light","thin","duotone","brands"],Cb=[1,2,3,4,5,6,7,8,9,10],GM=Cb.concat([11,12,13,14,15,16,17,18,19,20]),fo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},QM=[...Object.keys(qM),...KM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fo.GROUP,fo.SWAP_OPACITY,fo.PRIMARY,fo.SECONDARY].concat(Cb.map(t=>"".concat(t,"x"))).concat(GM.map(t=>"w-".concat(t))),YM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},XM={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},JM={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ty={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const cr="___FONT_AWESOME___",af=16,kb="fa",Ob="svg-inline--fa",Os="data-fa-i2svg",cf="data-fa-pseudo-element",ZM="data-fa-pseudo-element-pending",ep="data-prefix",tp="data-icon",ny="fontawesome-i2svg",eV="async",tV=["HTML","HEAD","STYLE","SCRIPT"],xb=(()=>{try{return!0}catch{return!1}})(),Nb=[qe,Xt,Jt];function Ta(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[qe]}})}const Db={...Pb};Db[qe]={...Pb[qe],...ey.kit,...ey["kit-duotone"]};const Ts=Ta(Db),lf={...zM};lf[qe]={...lf[qe],...ty.kit,...ty["kit-duotone"]};const ta=Ta(lf),uf={...WM};uf[qe]={...uf[qe],...JM.kit};const Is=Ta(uf),hf={...HM};hf[qe]={...hf[qe],...XM.kit};const nV=Ta(hf),rV=UM,Lb="fa-layers-text",sV=BM,iV={...VM};Ta(iV);const oV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yu=fo,ki=new Set;Object.keys(ta[qe]).map(ki.add.bind(ki));Object.keys(ta[Xt]).map(ki.add.bind(ki));Object.keys(ta[Jt]).map(ki.add.bind(ki));const aV=[...FM,...QM],ko=Xr.FontAwesomeConfig||{};function cV(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function lV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}je&&typeof je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=lV(cV(n));s!=null&&(ko[r]=s)});const Mb={styleDefault:"solid",familyDefault:"classic",cssPrefix:kb,replacementClass:Ob,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ko.familyPrefix&&(ko.cssPrefix=ko.familyPrefix);const Oi={...Mb,...ko};Oi.autoReplaceSvg||(Oi.observeMutations=!1);const ie={};Object.keys(Mb).forEach(t=>{Object.defineProperty(ie,t,{enumerable:!0,set:function(e){Oi[t]=e,Oo.forEach(n=>n(ie))},get:function(){return Oi[t]}})});Object.defineProperty(ie,"familyPrefix",{enumerable:!0,set:function(t){Oi.cssPrefix=t,Oo.forEach(e=>e(ie))},get:function(){return Oi.cssPrefix}});Xr.FontAwesomeConfig=ie;const Oo=[];function uV(t){return Oo.push(t),()=>{Oo.splice(Oo.indexOf(t),1)}}const Tr=af,Rn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hV(t){if(!t||!dr)return;const e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=je.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return je.head.insertBefore(e,r),t}const fV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function na(){let t=12,e="";for(;t-- >0;)e+=fV[Math.random()*62|0];return e}function Ui(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function np(t){return t.classList?Ui(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Vb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Vb(t[n]),'" '),"").trim()}function Yl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function rp(t){return t.size!==Rn.size||t.x!==Rn.x||t.y!==Rn.y||t.rotate!==Rn.rotate||t.flipX||t.flipY}function pV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function mV(t){let{transform:e,width:n=af,height:r=af,startCentered:s=!1}=t,i="";return s&&Rb?i+="translate(".concat(e.x/Tr-n/2,"em, ").concat(e.y/Tr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Tr,"em), calc(-50% + ").concat(e.y/Tr,"em)) "):i+="translate(".concat(e.x/Tr,"em, ").concat(e.y/Tr,"em) "),i+="scale(".concat(e.size/Tr*(e.flipX?-1:1),", ").concat(e.size/Tr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var gV=`:root, :host {
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
}`;function Fb(){const t=kb,e=Ob,n=ie.cssPrefix,r=ie.replacementClass;let s=gV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let ry=!1;function Xu(){ie.autoAddCss&&!ry&&(hV(Fb()),ry=!0)}var _V={mixout(){return{dom:{css:Fb,insertCss:Xu}}},hooks(){return{beforeDOMElementCreation(){Xu()},beforeI2svg(){Xu()}}}};const lr=Xr||{};lr[cr]||(lr[cr]={});lr[cr].styles||(lr[cr].styles={});lr[cr].hooks||(lr[cr].hooks={});lr[cr].shims||(lr[cr].shims=[]);var Sn=lr[cr];const Ub=[],Bb=function(){je.removeEventListener("DOMContentLoaded",Bb),il=1,Ub.map(t=>t())};let il=!1;dr&&(il=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),il||je.addEventListener("DOMContentLoaded",Bb));function yV(t){dr&&(il?setTimeout(t,0):Ub.push(t))}function Ia(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Vb(t):"<".concat(e," ").concat(dV(n),">").concat(r.map(Ia).join(""),"</").concat(e,">")}function sy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ju=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function vV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function ff(t){const e=vV(t);return e.length===1?e[0].toString(16):null}function EV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function iy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function df(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=iy(e);typeof Sn.hooks.addPack=="function"&&!r?Sn.hooks.addPack(t,iy(e)):Sn.styles[t]={...Sn.styles[t]||{},...s},t==="fas"&&df("fa",e)}const{styles:ms,shims:wV}=Sn,bV={[qe]:Object.values(Is[qe]),[Xt]:Object.values(Is[Xt]),[Jt]:Object.values(Is[Jt])};let sp=null,jb={},$b={},Hb={},qb={},Wb={};const TV={[qe]:Object.keys(Ts[qe]),[Xt]:Object.keys(Ts[Xt]),[Jt]:Object.keys(Ts[Jt])};function IV(t){return~aV.indexOf(t)}function AV(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!IV(s)?s:null}const zb=()=>{const t=r=>Ju(ms,(s,i,o)=>(s[o]=Ju(i,r,{}),s),{});jb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),$b=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Wb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ms||ie.autoFetchSvg,n=Ju(wV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Hb=n.names,qb=n.unicodes,sp=Xl(ie.styleDefault,{family:ie.familyDefault})};uV(t=>{sp=Xl(t.styleDefault,{family:ie.familyDefault})});zb();function ip(t,e){return(jb[t]||{})[e]}function RV(t,e){return($b[t]||{})[e]}function Fr(t,e){return(Wb[t]||{})[e]}function Kb(t){return Hb[t]||{prefix:null,iconName:null}}function SV(t){const e=qb[t],n=ip("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jr(){return sp}const op=()=>({prefix:null,iconName:null,rest:[]});function Xl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=qe}=e,r=Ts[n][t],s=ta[n][t]||ta[n][r],i=t in Sn.styles?t:null;return s||i||null}const PV={[qe]:Object.keys(Is[qe]),[Xt]:Object.keys(Is[Xt]),[Jt]:Object.keys(Is[Jt])};function Jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[qe]:"".concat(ie.cssPrefix,"-").concat(qe),[Xt]:"".concat(ie.cssPrefix,"-").concat(Xt),[Jt]:"".concat(ie.cssPrefix,"-").concat(Jt)};let s=null,i=qe;const o=MM.filter(l=>l!==Sb);o.forEach(l=>{(t.includes(r[l])||t.some(u=>PV[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const h=AV(ie.cssPrefix,u);if(ms[u]?(u=bV[i].includes(u)?nV[i][u]:u,s=u,l.prefix=u):TV[i].indexOf(u)>-1?(s=u,l.prefix=Xl(u,{family:i})):h?l.iconName=h:u!==ie.replacementClass&&!o.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=s==="fa"?Kb(l.iconName):{},p=Fr(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!ms.far&&ms.fas&&!ie.autoFetchSvg&&(l.prefix="fas")}return l},op());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Xt&&(ms.fass||ie.autoFetchSvg)&&(a.prefix="fass",a.iconName=Fr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===Jt&&(ms.fasds||ie.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Fr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Jr()||"fas"),a}class CV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},df(i,s[i]);const o=Is[qe][i];o&&df(o,s[i]),zb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let oy=[],ti={};const di={},kV=Object.keys(di);function OV(t,e){let{mixoutsTo:n}=e;return oy=t,ti={},Object.keys(di).forEach(r=>{kV.indexOf(r)===-1&&delete di[r]}),oy.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ti[o]||(ti[o]=[]),ti[o].push(i[o])})}r.provides&&r.provides(di)}),n}function pf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ti[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function xs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ti[t]||[]).forEach(i=>{i.apply(null,n)})}function Zr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return di[t]?di[t].apply(null,e):void 0}function mf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Jr();if(e)return e=Fr(n,e)||e,sy(Gb.definitions,n,e)||sy(Sn.styles,n,e)}const Gb=new CV,xV=()=>{ie.autoReplaceSvg=!1,ie.observeMutations=!1,xs("noAuto")},NV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?(xs("beforeI2svg",t),Zr("pseudoElements2svg",t),Zr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ie.autoReplaceSvg===!1&&(ie.autoReplaceSvg=!0),ie.observeMutations=!0,yV(()=>{LV({autoReplaceSvgRoot:e}),xs("watch",t)})}},DV={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Xl(t[0]);return{prefix:n,iconName:Fr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ie.cssPrefix,"-"))>-1||t.match(rV))){const e=Jl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Jr(),iconName:Fr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Jr();return{prefix:e,iconName:Fr(e,t)||t}}}},en={noAuto:xV,config:ie,dom:NV,parse:DV,library:Gb,findIconDefinition:mf,toHtml:Ia},LV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=je}=t;(Object.keys(Sn.styles).length>0||ie.autoFetchSvg)&&dr&&ie.autoReplaceSvg&&en.dom.i2svg({node:e})};function Zl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ia(n))}}),Object.defineProperty(t,"node",{get:function(){if(!dr)return;const n=je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function MV(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(rp(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Yl({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function VV(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ie.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function ap(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,I=r==="fak",x=[ie.replacementClass,s?"".concat(ie.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let N={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:x,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const O=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(N.attributes[Os]=""),a&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||na())},children:[a]}),delete N.attributes.title);const P={...N,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...O,...h.styles}},{children:E,attributes:R}=n.found&&e.found?Zr("generateAbstractMask",P)||{children:[],attributes:{}}:Zr("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=E,P.attributes=R,o?VV(P):MV(P)}function ay(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[Os]="");const u={...o.styles};rp(s)&&(u.transform=mV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Yl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function FV(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Yl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Zu}=Sn;function gf(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ie.cssPrefix,"-").concat(Yu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(Yu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(Yu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const UV={found:!1,width:512,height:512};function BV(t,e){!xb&&!ie.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _f(t,e){let n=e;return e==="fa"&&ie.styleDefault!==null&&(e=Jr()),new Promise((r,s)=>{if(n==="fa"){const i=Kb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Zu[e]&&Zu[e][t]){const i=Zu[e][t];return r(gf(i))}BV(t,e),r({...UV,icon:ie.showMissingIcons&&t?Zr("missingIconAbstract")||{}:{}})})}const cy=()=>{},yf=ie.measurePerformance&&cc&&cc.mark&&cc.measure?cc:{mark:cy,measure:cy},po='FA "6.6.0"',jV=t=>(yf.mark("".concat(po," ").concat(t," begins")),()=>Qb(t)),Qb=t=>{yf.mark("".concat(po," ").concat(t," ends")),yf.measure("".concat(po," ").concat(t),"".concat(po," ").concat(t," begins"),"".concat(po," ").concat(t," ends"))};var cp={begin:jV,end:Qb};const Tc=()=>{};function ly(t){return typeof(t.getAttribute?t.getAttribute(Os):null)=="string"}function $V(t){const e=t.getAttribute?t.getAttribute(ep):null,n=t.getAttribute?t.getAttribute(tp):null;return e&&n}function HV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ie.replacementClass)}function qV(){return ie.autoReplaceSvg===!0?Ic.replace:Ic[ie.autoReplaceSvg]||Ic.replace}function WV(t){return je.createElementNS("http://www.w3.org/2000/svg",t)}function zV(t){return je.createElement(t)}function Yb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?WV:zV}=e;if(typeof t=="string")return je.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Yb(i,{ceFn:n}))}),r}function KV(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ic={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Yb(n),e)}),e.getAttribute(Os)===null&&ie.keepOriginalSource){let n=je.createComment(KV(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~np(e).indexOf(ie.replacementClass))return Ic.replace(t);const r=new RegExp("".concat(ie.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ie.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Ia(i)).join(`
`);e.setAttribute(Os,""),e.innerHTML=s}};function uy(t){t()}function Xb(t,e){const n=typeof e=="function"?e:Tc;if(t.length===0)n();else{let r=uy;ie.mutateApproach===eV&&(r=Xr.requestAnimationFrame||uy),r(()=>{const s=qV(),i=cp.begin("mutate");t.map(s),i(),n()})}}let lp=!1;function Jb(){lp=!0}function vf(){lp=!1}let ol=null;function hy(t){if(!Z_||!ie.observeMutations)return;const{treeCallback:e=Tc,nodeCallback:n=Tc,pseudoElementsCallback:r=Tc,observeMutationsRoot:s=je}=t;ol=new Z_(i=>{if(lp)return;const o=Jr();Ui(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!ly(a.addedNodes[0])&&(ie.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ie.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&ly(a.target)&&~oV.indexOf(a.attributeName))if(a.attributeName==="class"&&$V(a.target)){const{prefix:l,iconName:u}=Jl(np(a.target));a.target.setAttribute(ep,l||o),u&&a.target.setAttribute(tp,u)}else HV(a.target)&&n(a.target)})}),dr&&ol.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function GV(){ol&&ol.disconnect()}function QV(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function YV(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Jl(np(t));return s.prefix||(s.prefix=Jr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=RV(s.prefix,t.innerText)||ip(s.prefix,ff(t.innerText))),!s.iconName&&ie.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function XV(t){const e=Ui(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ie.autoA11y&&(n?e["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(r||na()):(e["aria-hidden"]="true",e.focusable="false")),e}function JV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=YV(t),i=XV(t),o=pf("parseNodeAttributes",{},t);let a=e.styleParser?QV(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Rn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:ZV}=Sn;function Zb(t){const e=ie.autoReplaceSvg==="nest"?fy(t,{styleParser:!1}):fy(t);return~e.extra.classes.indexOf(Lb)?Zr("generateLayersText",t,e):Zr("generateSvgReplacementMutation",t,e)}let Vn=new Set;Nb.map(t=>{Vn.add("fa-".concat(t))});Object.keys(Ts[qe]).map(Vn.add.bind(Vn));Object.keys(Ts[Xt]).map(Vn.add.bind(Vn));Object.keys(Ts[Jt]).map(Vn.add.bind(Vn));Vn=[...Vn];function dy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();const n=je.documentElement.classList,r=h=>n.add("".concat(ny,"-").concat(h)),s=h=>n.remove("".concat(ny,"-").concat(h)),i=ie.autoFetchSvg?Vn:Nb.map(h=>"fa-".concat(h)).concat(Object.keys(ZV));i.includes("fa")||i.push("fa");const o=[".".concat(Lb,":not([").concat(Os,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Os,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ui(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=cp.begin("onTree"),u=a.reduce((h,d)=>{try{const p=Zb(d);p&&h.push(p)}catch(p){xb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{Xb(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function e4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zb(t).then(n=>{n&&Xb([n],e)})}function t4(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:mf(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:mf(s||{})),t(r,{...n,mask:s})}}const n4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Rn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return Zl({type:"icon",...t},()=>(xs("beforeDOMElementCreation",{iconDefinition:t,params:e}),ie.autoA11y&&(o?u["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(a||na()):(u["aria-hidden"]="true",u.focusable="false")),ap({icons:{main:gf(g),mask:s?gf(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{...Rn,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var r4={mixout(){return{icon:t4(n4)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=dy,t.nodeCallback=e4,t}}},provides(t){t.i2svg=function(e){const{node:n=je,callback:r=()=>{}}=e;return dy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([_f(r,o),u.iconName?_f(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[x,N]=I;p([e,ap({icons:{main:x,mask:N},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Yl(o);a.length>0&&(r.style=a);let l;return rp(i)&&(l=Zr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},s4={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Zl({type:"layer"},()=>{xs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ie.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},i4={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Zl({type:"counter",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),FV({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ie.cssPrefix,"-layers-counter"),...r]}})))}}}},o4={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Rn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Zl({type:"text",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),ay({content:t,transform:{...Rn,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(ie.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Rb){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ie.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ay({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const a4=new RegExp('"',"ug"),py=[1105920,1112319],my={FontAwesome:{normal:"fas",400:"fas"},...$M,...jM,...YM},Ef=Object.keys(my).reduce((t,e)=>(t[e.toLowerCase()]=my[e],t),{}),c4=Object.keys(Ef).reduce((t,e)=>{const n=Ef[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function l4(t){const e=t.replace(a4,""),n=EV(e,0),r=n>=py[0]&&n<=py[1],s=e.length===2?e[0]===e[1]:!1;return{value:ff(s?e[0]:e),isSecondary:r||s}}function u4(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Ef[n]||{})[s]||c4[n]}function gy(t,e){const n="".concat(ZM).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ui(t.children).filter(p=>p.getAttribute(cf)===e)[0],a=Xr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(sV),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=u4(l,h);const{value:I,isSecondary:x}=l4(p),N=u[0].startsWith("FontAwesome");let O=ip(g,I),P=O;if(N){const E=SV(I);E.iconName&&E.prefix&&(O=E.iconName,g=E.prefix)}if(O&&!x&&(!o||o.getAttribute(ep)!==g||o.getAttribute(tp)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);const E=JV(),{extra:R}=E;R.attributes[cf]=e,_f(O,g).then(D=>{const V=ap({...E,icons:{main:D,mask:op()},prefix:g,iconName:P,extra:R,watchable:!0}),b=je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=V.map(y=>Ia(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function h4(t){return Promise.all([gy(t,"::before"),gy(t,"::after")])}function f4(t){return t.parentNode!==document.head&&!~tV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _y(t){if(dr)return new Promise((e,n)=>{const r=Ui(t.querySelectorAll("*")).filter(f4).map(h4),s=cp.begin("searchPseudoElements");Jb(),Promise.all(r).then(()=>{s(),vf(),e()}).catch(()=>{s(),vf(),n()})})}var d4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=_y,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=je}=e;ie.searchPseudoElements&&_y(n)}}};let yy=!1;var p4={mixout(){return{dom:{unwatch(){Jb(),yy=!0}}}},hooks(){return{bootstrap(){hy(pf("mutationObserverCallbacks",{}))},noAuto(){GV()},watch(t){const{observeMutationsRoot:e}=t;yy?vf():hy(pf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const vy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var m4={mixout(){return{parse:{transform:t=>vy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=vy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const eh={x:0,y:0,width:"100%",height:"100%"};function Ey(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function g4(t){return t.tag==="g"?t.children:[t]}var _4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Jl(n.split(" ").map(s=>s.trim())):op();return r.prefix||(r.prefix=Jr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=pV({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...eh,fill:"white"}},I=u.children?{children:u.children.map(Ey)}:{},x={tag:"g",attributes:{...p.inner},children:[Ey({tag:u.tag,attributes:{...u.attributes,...p.path},...I})]},N={tag:"g",attributes:{...p.outer},children:[x]},O="mask-".concat(o||na()),P="clip-".concat(o||na()),E={tag:"mask",attributes:{...eh,id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,N]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:g4(d)},E]};return n.push(R,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(O,")"),...eh}}),{children:n,attributes:r}}}},y4={provides(t){let e=!1;Xr.matchMedia&&(e=Xr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},v4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},E4=[_V,r4,s4,i4,o4,d4,p4,m4,_4,y4,v4];OV(E4,{mixoutsTo:en});en.noAuto;const w4=en.config,b4=en.library;en.dom;const wf=en.parse;en.findIconDefinition;en.toHtml;const T4=en.icon;en.layer;en.text;en.counter;function wy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wy(Object(n),!0).forEach(function(r){$t(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function I4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function A4(t){var e=I4(t,"string");return typeof e=="symbol"?e:e+""}function al(t){"@babel/helpers - typeof";return al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},al(t)}function $t(t,e,n){return e=A4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function S4(t,e){if(t==null)return{};var n=R4(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var P4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},eT={exports:{}};(function(t){(function(e){var n=function(O,P,E){if(!u(P)||d(P)||p(P)||g(P)||l(P))return P;var R,D=0,V=0;if(h(P))for(R=[],V=P.length;D<V;D++)R.push(n(O,P[D],E));else{R={};for(var b in P)Object.prototype.hasOwnProperty.call(P,b)&&(R[O(b,E)]=n(O,P[b],E))}return R},r=function(O,P){P=P||{};var E=P.separator||"_",R=P.split||/(?=[A-Z])/;return O.split(R).join(E)},s=function(O){return I(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var P=s(O);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(O,P){return r(O,P).toLowerCase()},a=Object.prototype.toString,l=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},h=function(O){return a.call(O)=="[object Array]"},d=function(O){return a.call(O)=="[object Date]"},p=function(O){return a.call(O)=="[object RegExp]"},g=function(O){return a.call(O)=="[object Boolean]"},I=function(O){return O=O-0,O===O},x=function(O,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?O:function(R,D){return E(R,O,D)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(O,P){return n(x(s,P),O)},decamelizeKeys:function(O,P){return n(x(o,P),O,P)},pascalizeKeys:function(O,P){return n(x(i,P),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(P4)})(eT);var C4=eT.exports,k4=["class","style"];function O4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=C4.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function x4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function tT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return tT(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=x4(h);break;case"style":l.style=O4(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=S4(n,k4);return yt(t.tag,Gn(Gn(Gn({},e),{},{class:s.class,style:Gn(Gn({},s.style),o)},s.attrs),a),r)}var nT=!1;try{nT=!0}catch{}function N4(){if(!nT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function th(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$t({},t,e):{}}function D4(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},$t($t($t($t($t($t($t($t($t($t(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),$t($t(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function by(t){if(t&&al(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(wf.icon)return wf.icon(t);if(t===null)return null;if(al(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var L4=Un({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return by(e.icon)}),i=Fe(function(){return th("classes",D4(e))}),o=Fe(function(){return th("transform",typeof e.transform=="string"?wf.transform(e.transform):e.transform)}),a=Fe(function(){return th("mask",by(e.mask))}),l=Fe(function(){return T4(s.value,Gn(Gn(Gn(Gn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});gn(l,function(h){if(!h)return N4("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Fe(function(){return l.value?tT(l.value.abstract[0],{},r):null});return function(){return u.value}}});const M4={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},V4={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},F4=V4,U4={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},B4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},j4={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};w4.autoAddCss=!1;b4.add(M4,B4,F4,j4,U4);const $4=Zt(t=>{t.vueApp.component("font-awesome-icon",L4)}),H4=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let rT;const eu=t=>rT=t,sT=Symbol();function bf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xo||(xo={}));function q4(){const t=kf(!0),e=t.run(()=>zt({}));let n=[],r=[];const s=Ff({install(i){eu(s),s._a=i,i.provide(sT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!H4?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const iT=()=>{};function Ty(t,e,n,r=iT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&oa()&&Rc(s),s}function Ks(t,...e){t.slice().forEach(n=>{n(...e)})}const W4=t=>t(),Iy=Symbol(),nh=Symbol();function Tf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bf(s)&&bf(r)&&t.hasOwnProperty(n)&&!Xe(r)&&!tr(r)?t[n]=Tf(s,r):t[n]=r}return t}const z4=Symbol();function K4(t){return!bf(t)||!t.hasOwnProperty(z4)}const{assign:Ir}=Object;function G4(t){return!!(Xe(t)&&t.effect)}function Q4(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=_I(n.state.value[t]);return Ir(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Ff(Fe(()=>{eu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=oT(t,u,e,n,r,!0),l}function oT(t,e,n={},r,s,i){let o;const a=Ir({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),zt({});let x;function N(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:xo.patchFunction,storeId:t,events:g}):(Tf(r.state.value[t],y),_={type:xo.patchObject,payload:y,storeId:t,events:g});const w=x=Symbol();Fn().then(()=>{x===w&&(u=!0)}),h=!0,Ks(d,_,r.state.value[t])}const O=i?function(){const{state:_}=n,w=_?_():{};this.$patch(C=>{Ir(C,w)})}:iT;function P(){o.stop(),d=[],p=[],r._s.delete(t)}const E=(y,_="")=>{if(Iy in y)return y[nh]=_,y;const w=function(){eu(r);const C=Array.from(arguments),S=[],T=[];function pe(ne){S.push(ne)}function ye(ne){T.push(ne)}Ks(p,{args:C,name:w[nh],store:D,after:pe,onError:ye});let J;try{J=y.apply(this&&this.$id===t?this:D,C)}catch(ne){throw Ks(T,ne),ne}return J instanceof Promise?J.then(ne=>(Ks(S,ne),ne)).catch(ne=>(Ks(T,ne),Promise.reject(ne))):(Ks(S,J),J)};return w[Iy]=!0,w[nh]=_,w},R={_p:r,$id:t,$onAction:Ty.bind(null,p),$patch:N,$reset:O,$subscribe(y,_={}){const w=Ty(d,y,_.detached,()=>C()),C=o.run(()=>gn(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:xo.direct,events:g},S)},Ir({},l,_)));return w},$dispose:P},D=ur(R);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||W4)(()=>r._e.run(()=>(o=kf()).run(()=>e({action:E}))));for(const y in b){const _=b[y];if(Xe(_)&&!G4(_)||tr(_))i||(I&&K4(_)&&(Xe(_)?_.value=I[y]:Tf(_,I[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const w=E(_,y);b[y]=w,a.actions[y]=_}}return Ir(D,b),Ir(Te(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Ir(_,y)})}}),r._p.forEach(y=>{Ir(D,o.run(()=>y({store:D,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(D.$state,I),u=!0,h=!0,D}function Y4(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=Hf();return a=a||(u?Ot(sT,null):null),a&&eu(a),a=rT,a._s.has(r)||(i?oT(r,e,s,a):Q4(r,s,a)),a._s.get(r)}return o.$id=r,o}function X4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function J4(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const Z4=Zt(t=>{const e=q4();t.vueApp.use(e)});var Ay=/^(GTM|G)-[0-9A-Z]+$/;function rh(t){if(typeof t!="string"||!Ay.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Ay}).${n}`)}}function mo(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function pi(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(mo(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function eF(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var tF=class{constructor(t){Zi(this,"id");Zi(this,"options");Zi(this,"scriptElements",[]);Zi(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)rh(typeof e=="string"?e:e.id);else rh(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!eF(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=pi(n,{...this.options}):r=pi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=pi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?mo(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&mo(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&mo(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&mo(window,this.options.dataLayerName).push(t)}},pt;function nF(t,e={id:""}){e={trackOnNextTick:!1,...e},pt=new tF(e),t.config.globalProperties.$gtm=pt,pt.isInBrowserContext()&&(e.vueRouter&&rF(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),pt.options.enabled&&pt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")pi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),pi(n.id,r)}}):pi(e.id,e))),t.provide("gtm",e)}function rF(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,I;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?pt!=null&&pt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(pt!=null&&pt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((I=(g=e.options)==null?void 0:g.history)==null?void 0:I.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Fn(()=>{pt==null||pt.trackView(u,d,h)}):pt==null||pt.trackView(u,d,h)})}function sF(t){return{install:e=>nF(e,t)}}const iF=Zt(t=>{const e=Ds().public,n=c2("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(sF({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:Et(),trackOnNextTick:!1}))}),oF=[qS,zS,lC,hC,fC,dC,mC,gC,_C,LM,$4,Z4,iF],aF=Un({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return vs(ha,Qn(r)),()=>yt(t.vnode,{ref:t.vnodeRef})}}),cF=Un({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ne(),i=zt(),o=Ot(ha,null);let a;r({pageRef:i});const l=Ot(yE,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Et().beforeEach(d)}return t.pageKey&&gn(()=>t.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")}),()=>yt(WE,{name:t.name,route:t.route,...e},{default:d=>{const p=uF(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const I=Lh(d,t.pageKey);!s.isHydrating&&!hF(o,d.route,d.Component)&&a===I&&s.callHook("page:loading:end"),a=I;const x=!!(t.transition??d.route.meta.pageTransition??bh),N=x&&lF([t.transition,d.route.meta.pageTransition,bh,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),O=t.keepalive??d.route.meta.keepalive??yR;return u=zE(Xv,x&&N,YP(O,yt(Kf,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Fn(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const P=yt(aF,{key:I||void 0,vnode:n.default?yt(Ct,void 0,n.default(d)):d.Component,route:d.route,renderKey:I||void 0,trackRootNodes:x,vnodeRef:i});return O&&(P.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),P}}))).default(),u}})}});function lF(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?sd(n.onAfterLeave):void 0}));return gE(...e)}function uF(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Lh({route:e,Component:n})!==Lh({route:t,Component:n})}function hF(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const fF=Un({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Mr[t.name]().then(r=>r.default||r);return()=>yt(n,t.layoutProps,e.slots)}}),dF=Un({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Ne(),r=Ot(ha),s=r===Zf()?GP():r,i=Fe(()=>{let l=tt(t.name)??s.meta.layout??"default";return l&&!(l in Mr)&&t.fallback&&(l=tt(t.fallback)),l}),o=zt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);Et().beforeEach(l)}return()=>{const l=i.value&&i.value in Mr,u=s.meta.layoutTransition??_R;return zE(Xv,l&&u,{default:()=>yt(Kf,{suspensible:!0,onResolve:()=>{Fn(a)}},{default:()=>yt(pF,{layoutProps:Wv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),pF=Un({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&vs(yE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Mr)?(s=(r=e.slots).default)==null?void 0:s.call(r):yt(fF,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),tu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},mF={};function gF(t,e){const n=cF,r=dF;return Bt(),Kn(r,null,{default:Tn(()=>[Se(n)]),_:1})}const _F=tu(mF,[["render",gF]]),yF=Jf("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Ry=Y4("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Ne(),r=Et();try{const s=await qO(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Ne();try{await GO(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Ne();KO(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),vF={class:"navbar navbar-expand-md navbar-light bg-light"},EF={class:"navbar-nav"},wF={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},bF={class:"navbar-nav ml-auto"};function TF(t,e,n,r,s,i){const o=p2;return Bt(),Bo("nav",vF,[Se(o,{class:"navbar-brand",to:"/"},{default:Tn(()=>e[2]||(e[2]=[on("Who's Jimmy")])),_:1}),$e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[$e("span",{class:"navbar-toggler-icon"},null,-1)])),$e("div",{class:sa(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[$e("ul",EF,[Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Tn(()=>e[4]||(e[4]=[on("Bio")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Tn(()=>e[5]||(e[5]=[on("Portfolio ")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Tn(()=>e[6]||(e[6]=[on("For Sale")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Tn(()=>e[7]||(e[7]=[on("Cool Stuff")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Tn(()=>e[8]||(e[8]=[on("Contact Us")])),_:1})])],2),s.isAuth?(Bt(),Bo("div",wF,[$e("ul",bF,[Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Tn(()=>[on(Cf(t.user?t.user.email:""),1)]),_:1}),$e("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):AA("",!0)])}const IF={data(){return{visible:!1,isAuth:!1}},computed:{...X4(Ry,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...J4(Ry,{signOut:"signOut"})}},AF=tu(IF,[["render",TF]]),RF={class:"page-footer font-small bg-light navbar-fixed-bottom"},SF={class:"container"},PF={class:"py-3 pt-3"},CF={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},kF={href:"https://www.facebook.com/whosjimmy"},OF={href:"https://twitter.com/jimmyclaws"},xF={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function NF(t,e){const n=Fo("font-awesome-icon");return Bt(),Bo("footer",RF,[$e("div",SF,[$e("div",PF,[$e("a",CF,[Se(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),$e("a",kF,[Se(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),$e("a",OF,[Se(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),$e("a",xF,[Se(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=$e("div",{class:"footer-copyright text-center font-small"},[$e("div",null,[on("© 2024 Copyright: "),$e("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),$e("div",null,"Disclaimer: All images are copyright to their respective owners."),$e("div",null,[on("A "),$e("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),on(" creation.")])],-1))])}const DF={},LF=tu(DF,[["render",NF],["__scopeId","data-v-063d9b19"]]),MF={class:"text-center my-0 page"},VF={class:"body"},FF={head(){return{title:"Error"}},components:{appHeader:AF,appFooter:LF}},UF=Un({...FF,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Ne();ag({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{ag({title:n.public.SITE_TITLE}),EE({redirect:"/"})};return(i,o)=>{var u;const a=Fo("app-header"),l=Fo("app-footer");return Bt(),Bo("div",MF,[Se(a),$e("div",VF,[o[0]||(o[0]=$e("img",{src:yF,alt:"Error Image"},null,-1)),$e("h2",null,"Error: "+Cf((u=t.error)==null?void 0:u.statusCode),1),$e("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Se(l)])}}}),BF=tu(UF,[["__scopeId","data-v-5f25e24b"]]),jF={key:0},Sy={__name:"nuxt-root",setup(t){const e=()=>null,n=Ne(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Et().beforeEach(l)}const s=!1;vs(ha,Zf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Tl(),o=!1;yv((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),zR(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Zs(l)),!1});const a=!1;return(l,u)=>(Bt(),Kn(Kf,{onResolve:tt(r)},{default:Tn(()=>[tt(o)?(Bt(),Bo("div",jF)):tt(i)?(Bt(),Kn(tt(BF),{key:1,error:tt(i)},null,8,["error"])):tt(a)?(Bt(),Kn(tt(e),{key:2,context:tt(a)},null,8,["context"])):tt(s)?(Bt(),Kn(HI(tt(s)),{key:3})):(Bt(),Kn(tt(_F),{key:4}))]),_:1},8,["onResolve"]))}};let Py;{let t;Py=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?f1(Sy):h1(Sy),s=IR({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Il(l)}r.config.errorHandler=i;try{await SR(s,oF)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(wR),await s.hooks.callHook("app:mounted",r),await Fn()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=Py().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{LF as $,Xe as A,ur as B,la as C,Fe as D,tr as E,Ct as F,zr as G,Ot as H,vs as I,Fn as J,Jf as K,Fo as L,KF as M,ul as N,Kn as O,zF as P,sa as Q,HF as R,IA as S,Xv as T,ha as U,JF as V,WR as W,c2 as X,QF as Y,AF as Z,tu as _,J4 as a,cF as a0,Y4 as a1,Ne as a2,nU as a3,sU as a4,iU as a5,rU as a6,oU as a7,$e as b,Bo as c,Se as d,Tn as e,p2 as f,on as g,tt as h,XF as i,YF as j,AA as k,OM as l,X4 as m,lU as n,Bt as o,aU as p,cU as q,WF as r,yl as s,Cf as t,Ry as u,GF as v,qF as w,zt as x,FI as y,gn as z};
