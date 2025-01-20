const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BfJDudjD.js","./DjKMeUrx.js","./BWVFeOfv.js","./Da2LoXlF.js","./index.ASLudlX-.css","./ZDtejHgb.js","./CSnXrlVA.js","./Cn_FAXZ_.js","./DpnOiYyI.js","./Gallery.BdWwPq4R.css","./Film.D8qa6UOd.css","./Film.CyscwsSS.css","./BnFEuNYF.js","./Bio.BaV4dkSc.css","./Co3lqQqh.js","./Contact.Bq_tjq4M.css","./Bi_AaYvI.js","./Clocks.CaZdgkmv.css","./HfP1JSFk.js","./index.EfND0qCY.css","./C4nAI_TC.js","./C8bTWqY_.js","./index.CAtFJWG6.css","./CT9x4xqa.js","./Celebrities.BS01JuXe.css","./CXWJZgw6.js","./Clocks.Dmp-oUCd.css","./WeyQdF4M.js","./index.ByThmlNc.css","./DJ9Cebn9.js","./C7UdRcaz.js","./b2pOHY9Z.js","./Bn3BUln2.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var xT=Object.defineProperty;var NT=(t,e,n)=>e in t?xT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var rn=(t,e,n)=>NT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ni=[],xn=()=>{},DT=()=>!1,ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kf=t=>t.startsWith("onUpdate:"),st=Object.assign,Of=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},LT=Object.prototype.hasOwnProperty,xe=(t,e)=>LT.call(t,e),le=Array.isArray,ri=t=>xi(t)==="[object Map]",Oi=t=>xi(t)==="[object Set]",em=t=>xi(t)==="[object Date]",MT=t=>xi(t)==="[object RegExp]",pe=t=>typeof t=="function",ze=t=>typeof t=="string",vn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Ny=t=>(Me(t)||pe(t))&&pe(t.then)&&pe(t.catch),Dy=Object.prototype.toString,xi=t=>Dy.call(t),VT=t=>xi(t).slice(8,-1),Ly=t=>xi(t)==="[object Object]",xf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},FT=/-(\w)/g,hn=ol(t=>t.replace(FT,(e,n)=>n?n.toUpperCase():"")),UT=/\B([A-Z])/g,Os=ol(t=>t.replace(UT,"-$1").toLowerCase()),al=ol(t=>t.charAt(0).toUpperCase()+t.slice(1)),gu=ol(t=>t?`on${al(t)}`:""),Fr=(t,e)=>!Object.is(t,e),ii=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},My=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Vy=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let tm;const cl=()=>tm||(tm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?HT(r):ll(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Me(t))return t}const BT=/;(?![^(]*\))/g,jT=/:([^]+)/,$T=/\/\*[^]*?\*\//g;function HT(t){const e={};return t.replace($T,"").split(BT).forEach(n=>{if(n){const r=n.split(jT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ta(t){let e="";if(ze(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=ta(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function RU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=ta(e)),n&&(t.style=ll(n)),t}const qT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zT=Pf(qT);function Fy(t){return!!t||t===""}function WT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=na(t[r],e[r]);return n}function na(t,e){if(t===e)return!0;let n=em(t),r=em(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vn(t),r=vn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?WT(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!na(t[o],e[o]))return!1}}return String(t)===String(e)}function Nf(t,e){return t.findIndex(n=>na(n,e))}const Uy=t=>!!(t&&t.__v_isRef===!0),Df=t=>ze(t)?t:t==null?"":le(t)||Me(t)&&(t.toString===Dy||!pe(t.toString))?Uy(t)?Df(t.value):JSON.stringify(t,By,2):String(t),By=(t,e)=>Uy(e)?By(t,e.value):ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[_u(r,i)+" =>"]=s,n),{})}:Oi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_u(n))}:vn(e)?_u(e):Me(e)&&!le(e)&&!Ly(e)?String(e):e,_u=(t,e="")=>{var n;return vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class jy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lf(t){return new jy(t)}function ra(){return Bt}function bc(t,e=!1){Bt&&Bt.cleanups.push(t)}let Be;const yu=new WeakSet;class $y{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yu.has(this)&&(yu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nm(this),zy(this);const e=Be,n=_n;Be=this,_n=!0;try{return this.fn()}finally{Wy(this),Be=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ff(e);this.deps=this.depsTail=void 0,nm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ih(this)&&this.run()}get dirty(){return ih(this)}}let Hy=0,fo,po;function qy(t,e=!1){if(t.flags|=8,e){t.next=po,po=t;return}t.next=fo,fo=t}function Mf(){Hy++}function Vf(){if(--Hy>0)return;if(po){let e=po;for(po=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fo;){let e=fo;for(fo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function zy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ff(r),KT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ih(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ky(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ky(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oo))return;t.globalVersion=Oo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ih(t)){t.flags&=-3;return}const n=Be,r=_n;Be=t,_n=!0;try{zy(t);const s=t.fn(t._value);(e.version===0||Fr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,_n=r,Wy(t),t.flags&=-3}}function Ff(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ff(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function KT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const Gy=[];function ns(){Gy.push(_n),_n=!1}function rs(){const t=Gy.pop();_n=t===void 0?!0:t}function nm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let Oo=0;class GT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!_n||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new GT(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,Qy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,Oo++,this.notify(e)}notify(e){Mf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vf()}}}function Qy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tc=new WeakMap,vs=Symbol(""),oh=Symbol(""),xo=Symbol("");function Pt(t,e,n){if(_n&&Be){let r=Tc.get(t);r||Tc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ul),s.map=r,s.key=n),s.track()}}function Gn(t,e,n,r,s,i){const o=Tc.get(t);if(!o){Oo++;return}const a=l=>{l&&l.trigger()};if(Mf(),e==="clear")o.forEach(a);else{const l=le(t),u=l&&xf(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===xo||!vn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(xo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(vs)),ri(t)&&a(o.get(oh)));break;case"delete":l||(a(o.get(vs)),ri(t)&&a(o.get(oh)));break;case"set":ri(t)&&a(o.get(vs));break}}Vf()}function QT(t,e){const n=Tc.get(t);return n&&n.get(e)}function Hs(t){const e=Re(t);return e===t?e:(Pt(e,"iterate",xo),cn(t)?e:e.map(kt))}function hl(t){return Pt(t=Re(t),"iterate",xo),t}const YT={__proto__:null,[Symbol.iterator](){return vu(this,Symbol.iterator,kt)},concat(...t){return Hs(this).concat(...t.map(e=>le(e)?Hs(e):e))},entries(){return vu(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return qn(this,"every",t,e,void 0,arguments)},filter(t,e){return qn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return qn(this,"find",t,e,kt,arguments)},findIndex(t,e){return qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Eu(this,"includes",t)},indexOf(...t){return Eu(this,"indexOf",t)},join(t){return Hs(this).join(t)},lastIndexOf(...t){return Eu(this,"lastIndexOf",t)},map(t,e){return qn(this,"map",t,e,void 0,arguments)},pop(){return Zi(this,"pop")},push(...t){return Zi(this,"push",t)},reduce(t,...e){return rm(this,"reduce",t,e)},reduceRight(t,...e){return rm(this,"reduceRight",t,e)},shift(){return Zi(this,"shift")},some(t,e){return qn(this,"some",t,e,void 0,arguments)},splice(...t){return Zi(this,"splice",t)},toReversed(){return Hs(this).toReversed()},toSorted(t){return Hs(this).toSorted(t)},toSpliced(...t){return Hs(this).toSpliced(...t)},unshift(...t){return Zi(this,"unshift",t)},values(){return vu(this,"values",kt)}};function vu(t,e,n){const r=hl(t),s=r[e]();return r!==t&&!cn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const XT=Array.prototype;function qn(t,e,n,r,s,i){const o=hl(t),a=o!==t&&!cn(t),l=o[e];if(l!==XT[e]){const d=l.apply(t,i);return a?kt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,kt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function rm(t,e,n,r){const s=hl(t);let i=n;return s!==t&&(cn(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,kt(a),l,t)}),s[e](i,...r)}function Eu(t,e,n){const r=Re(t);Pt(r,"iterate",xo);const s=r[e](...n);return(s===-1||s===!1)&&jf(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function Zi(t,e,n=[]){ns(),Mf();const r=Re(t)[e].apply(t,n);return Vf(),rs(),r}const JT=Pf("__proto__,__v_isRef,__isVue"),Yy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vn));function ZT(t){vn(t)||(t=String(t));const e=Re(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class Xy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?lI:tv:i?ev:Zy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=YT[n]))return l;if(n==="hasOwnProperty")return ZT}const a=Reflect.get(e,n,Je(e)?e:r);return(vn(n)?Yy.has(n):JT(n))||(s||Pt(e,"get",n),i)?a:Je(a)?o&&xf(n)?a:a.value:Me(a)?s?nv(a):fr(a):a}}class Jy extends Xy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Wr(i);if(!cn(r)&&!Wr(r)&&(i=Re(i),r=Re(r)),!le(e)&&Je(i)&&!Je(r))return l?!1:(i.value=r,!0)}const o=le(e)&&xf(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Je(e)?e:s);return e===Re(s)&&(o?Fr(r,i)&&Gn(e,"set",n,r):Gn(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vn(n)||!Yy.has(n))&&Pt(e,"has",n),r}ownKeys(e){return Pt(e,"iterate",le(e)?"length":vs),Reflect.ownKeys(e)}}class eI extends Xy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tI=new Jy,nI=new eI,rI=new Jy(!0);const ah=t=>t,La=t=>Reflect.getPrototypeOf(t);function sI(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ri(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?ah:e?ch:kt;return!e&&Pt(i,"iterate",l?oh:vs),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function Ma(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iI(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(Fr(s,a)&&Pt(o,"get",s),Pt(o,"get",a));const{has:l}=La(o),u=e?ah:t?ch:kt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Pt(Re(s),"iterate",vs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(Fr(s,a)&&Pt(o,"has",s),Pt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Re(a),u=e?ah:t?ch:kt;return!t&&Pt(l,"iterate",vs),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return st(n,t?{add:Ma("add"),set:Ma("set"),delete:Ma("delete"),clear:Ma("clear")}:{add(s){!e&&!cn(s)&&!Wr(s)&&(s=Re(s));const i=Re(this);return La(i).has.call(i,s)||(i.add(s),Gn(i,"add",s,s)),this},set(s,i){!e&&!cn(i)&&!Wr(i)&&(i=Re(i));const o=Re(this),{has:a,get:l}=La(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Fr(i,h)&&Gn(o,"set",s,i):Gn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=La(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Gn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=sI(s,t,e)}),n}function Uf(t,e){const n=iI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const oI={get:Uf(!1,!1)},aI={get:Uf(!1,!0)},cI={get:Uf(!0,!1)};const Zy=new WeakMap,ev=new WeakMap,tv=new WeakMap,lI=new WeakMap;function uI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hI(t){return t.__v_skip||!Object.isExtensible(t)?0:uI(VT(t))}function fr(t){return Wr(t)?t:Bf(t,!1,tI,oI,Zy)}function Jn(t){return Bf(t,!1,rI,aI,ev)}function nv(t){return Bf(t,!0,nI,cI,tv)}function Bf(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=hI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rr(t){return Wr(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Wr(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function jf(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function $f(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&My(t,"__v_skip",!0),t}const kt=t=>Me(t)?fr(t):t,ch=t=>Me(t)?nv(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Et(t){return rv(t,!1)}function No(t){return rv(t,!0)}function rv(t,e){return Je(t)?t:new fI(t,e)}class fI{constructor(e,n){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||cn(e)||Wr(e);e=r?e:Re(e),Fr(e,n)&&(this._rawValue=e,this._value=r?e:kt(e),this.dep.trigger())}}function Qe(t){return Je(t)?t.value:t}const dI={get:(t,e,n)=>e==="__v_raw"?t:Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sv(t){return rr(t)?t:new Proxy(t,dI)}class pI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ul,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function mI(t){return new pI(t)}function gI(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=iv(t,n);return e}class _I{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return QT(Re(this._object),this._key)}}class yI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function vI(t,e,n){return Je(t)?t:pe(t)?new yI(t):Me(t)&&arguments.length>1?iv(t,e,n):Et(t)}function iv(t,e,n){const r=t[e];return Je(r)?r:new _I(t,e,n)}class EI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return qy(this,!0),!0}get value(){const e=this.dep.track();return Ky(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wI(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new EI(r,s,n)}const Va={},Ic=new WeakMap;let ms;function bI(t,e=!1,n=ms){if(n){let r=Ic.get(n);r||Ic.set(n,r=[]),r.push(t)}}function TI(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:cn(R)||s===!1||s===0?Qn(R,1):Qn(R);let h,d,p,g,w=!1,k=!1;if(Je(t)?(d=()=>t.value,w=cn(t)):rr(t)?(d=()=>u(t),w=!0):le(t)?(k=!0,w=t.some(R=>rr(R)||cn(R)),d=()=>t.map(R=>{if(Je(R))return R.value;if(rr(R))return u(R);if(pe(R))return l?l(R,2):R()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){ns();try{p()}finally{rs()}}const R=ms;ms=h;try{return l?l(t,3,[g]):t(g)}finally{ms=R}}:d=xn,e&&s){const R=d,D=s===!0?1/0:s;d=()=>Qn(R(),D)}const x=ra(),N=()=>{h.stop(),x&&x.active&&Of(x.effects,h)};if(i&&e){const R=e;e=(...D)=>{R(...D),N()}}let C=k?new Array(t.length).fill(Va):Va;const v=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const D=h.run();if(s||w||(k?D.some((M,T)=>Fr(M,C[T])):Fr(D,C))){p&&p();const M=ms;ms=h;try{const T=[D,C===Va?void 0:k&&C[0]===Va?[]:C,g];l?l(e,3,T):e(...T),C=D}finally{ms=M}}}else h.run()};return a&&a(v),h=new $y(d),h.scheduler=o?()=>o(v,!1):v,g=R=>bI(R,!1,h),p=h.onStop=()=>{const R=Ic.get(h);if(R){if(l)l(R,4);else for(const D of R)D();Ic.delete(h)}},e?r?v(!0):C=h.run():o?o(v.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function Qn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Qn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(Oi(t)||ri(t))t.forEach(r=>{Qn(r,e,n)});else if(Ly(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sa(t,e,n,r){try{return r?t(...r):t()}catch(s){Ni(s,e,n)}}function En(t,e,n,r){if(pe(t)){const s=sa(t,e,n,r);return s&&Ny(s)&&s.catch(i=>{Ni(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function Ni(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){ns(),sa(i,null,10,[t,l,u]),rs();return}}II(t,n,s,r,o)}function II(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const jt=[];let An=-1;const oi=[];let Ar=null,Ws=0;const ov=Promise.resolve();let Ac=null;function Bn(t){const e=Ac||ov;return t?e.then(this?t.bind(this):t):e}function AI(t){let e=An+1,n=jt.length;for(;e<n;){const r=e+n>>>1,s=jt[r],i=Do(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hf(t){if(!(t.flags&1)){const e=Do(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=Do(n)?jt.push(t):jt.splice(AI(e),0,t),t.flags|=1,av()}}function av(){Ac||(Ac=ov.then(cv))}function lh(t){le(t)?oi.push(...t):Ar&&t.id===-1?Ar.splice(Ws+1,0,t):t.flags&1||(oi.push(t),t.flags|=1),av()}function sm(t,e,n=An+1){for(;n<jt.length;n++){const r=jt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;jt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rc(t){if(oi.length){const e=[...new Set(oi)].sort((n,r)=>Do(n)-Do(r));if(oi.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ws=0;Ws<Ar.length;Ws++){const n=Ar[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Ws=0}}const Do=t=>t.id==null?t.flags&2?-1:1/0:t.id;function cv(t){try{for(An=0;An<jt.length;An++){const e=jt[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<jt.length;An++){const e=jt[An];e&&(e.flags&=-2)}An=-1,jt.length=0,Rc(),Ac=null,(jt.length||oi.length)&&cv()}}let ct=null,lv=null;function Sc(t){const e=ct;return ct=t,lv=t&&t.type.__scopeId||null,e}function Rn(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gm(-1);const i=Sc(e);let o;try{o=t(...s)}finally{Sc(i),r._d&&gm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function SU(t,e){if(ct===null)return t;const n=_l(ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Fe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Sn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ns(),En(l,n,8,[t.el,a,t,e]),rs())}}const RI=Symbol("_vte"),uv=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),Fa=Symbol("_enterCb");function SI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dl(()=>{t.isMounted=!0}),oa(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],hv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},fv=t=>{const e=t.subTree;return e.component?fv(e.component):e},CI={name:"BaseTransition",props:hv,setup(t,{slots:e}){const n=gl(),r=SI();return()=>{const s=e.default&&mv(e.default(),!0);if(!s||!s.length)return;const i=dv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return wu(i);const l=im(i);if(!l)return wu(i);let u=uh(l,o,r,n,d=>u=d);l.type!==it&&mi(l,u);let h=n.subTree&&im(n.subTree);if(h&&h.type!==it&&!gn(l,h)&&fv(n).type!==it){let d=uh(h,o,r,n);if(mi(h,d),a==="out-in"&&l.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},wu(i);a==="in-out"&&l.type!==it?d.delayLeave=(p,g,w)=>{const k=pv(r,h);k[String(h.key)]=h,p[Rr]=()=>{g(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function dv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const PI=CI;function pv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function uh(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:w,onLeaveCancelled:k,onBeforeAppear:x,onAppear:N,onAfterAppear:C,onAppearCancelled:v}=e,R=String(t.key),D=pv(n,t),M=(_,b)=>{_&&En(_,r,9,b)},T=(_,b)=>{const P=b[1];M(_,b),le(_)?_.every(S=>S.length<=1)&&P():_.length<=1&&P()},y={mode:o,persisted:a,beforeEnter(_){let b=l;if(!n.isMounted)if(i)b=x||l;else return;_[Rr]&&_[Rr](!0);const P=D[R];P&&gn(t,P)&&P.el[Rr]&&P.el[Rr](),M(b,[_])},enter(_){let b=u,P=h,S=d;if(!n.isMounted)if(i)b=N||u,P=C||h,S=v||d;else return;let I=!1;const ge=_[Fa]=ve=>{I||(I=!0,ve?M(S,[_]):M(P,[_]),y.delayedLeave&&y.delayedLeave(),_[Fa]=void 0)};b?T(b,[_,ge]):ge()},leave(_,b){const P=String(t.key);if(_[Fa]&&_[Fa](!0),n.isUnmounting)return b();M(p,[_]);let S=!1;const I=_[Rr]=ge=>{S||(S=!0,b(),ge?M(k,[_]):M(w,[_]),_[Rr]=void 0,D[P]===t&&delete D[P])};D[P]=t,g?T(g,[_,I]):I()},clone(_){const b=uh(_,e,n,r,s);return s&&s(b),b}};return y}function wu(t){if(ia(t))return t=ir(t),t.children=null,t}function im(t){if(!ia(t))return uv(t.type)&&t.children?dv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(mv(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?ir(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Tn(t,e){return pe(t)?st({name:t.name},e,{setup:t}):t}function qf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Lo(t,e,n,r,s=!1){if(le(t)){t.forEach((w,k)=>Lo(w,e&&(le(e)?e[k]:e),n,r,s));return}if(Ur(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Lo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?_l(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,d=a.setupState,p=Re(d),g=d===Fe?()=>!1:w=>xe(p,w);if(u!=null&&u!==l&&(ze(u)?(h[u]=null,g(u)&&(d[u]=null)):Je(u)&&(u.value=null)),pe(l))sa(l,a,12,[o,h]);else{const w=ze(l),k=Je(l);if(w||k){const x=()=>{if(t.f){const N=w?g(l)?d[l]:h[l]:l.value;s?le(N)&&Of(N,i):le(N)?N.includes(i)||N.push(i):w?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else w?(h[l]=o,g(l)&&(d[l]=o)):k&&(l.value=o,t.k&&(h[t.k]=o))};o?(x.id=-1,gt(x,n)):x()}}}let om=!1;const qs=()=>{om||(console.error("Hydration completed but contains mismatches."),om=!0)},kI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",OI=t=>t.namespaceURI.includes("MathML"),Ua=t=>{if(t.nodeType===1){if(kI(t))return"svg";if(OI(t))return"mathml"}},Js=t=>t.nodeType===8;function xI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(v,R)=>{if(!R.hasChildNodes()){n(null,v,R),Rc(),R._vnode=v;return}d(R.firstChild,v,null,null,null),Rc(),R._vnode=v},d=(v,R,D,M,T,y=!1)=>{y=y||!!R.dynamicChildren;const _=Js(v)&&v.data==="[",b=()=>k(v,R,D,M,T,_),{type:P,ref:S,shapeFlag:I,patchFlag:ge}=R;let ve=v.nodeType;R.el=v,ge===-2&&(y=!1,R.dynamicChildren=null);let Z=null;switch(P){case bs:ve!==3?R.children===""?(l(R.el=s(""),o(v),v),Z=v):Z=b():(v.data!==R.children&&(qs(),v.data=R.children),Z=i(v));break;case it:C(v)?(Z=i(v),N(R.el=v.content.firstChild,v,D)):ve!==8||_?Z=b():Z=i(v);break;case go:if(_&&(v=i(v),ve=v.nodeType),ve===1||ve===3){Z=v;const se=!R.children.length;for(let ne=0;ne<R.staticCount;ne++)se&&(R.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===R.staticCount-1&&(R.anchor=Z),Z=i(Z);return _?i(Z):Z}else b();break;case Ot:_?Z=w(v,R,D,M,T,y):Z=b();break;default:if(I&1)(ve!==1||R.type.toLowerCase()!==v.tagName.toLowerCase())&&!C(v)?Z=b():Z=p(v,R,D,M,T,y);else if(I&6){R.slotScopeIds=T;const se=o(v);if(_?Z=x(v):Js(v)&&v.data==="teleport start"?Z=x(v,v.data,"teleport end"):Z=i(v),e(R,se,null,D,M,Ua(se),y),Ur(R)&&!R.type.__asyncResolved){let ne;_?(ne=we(Ot),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=v.nodeType===3?an(""):we("div"),ne.el=v,R.component.subTree=ne}}else I&64?ve!==8?Z=b():Z=R.type.hydrate(v,R,D,M,T,y,t,g):I&128&&(Z=R.type.hydrate(v,R,D,M,Ua(o(v)),T,y,t,d))}return S!=null&&Lo(S,null,M,R),Z},p=(v,R,D,M,T,y)=>{y=y||!!R.dynamicChildren;const{type:_,props:b,patchFlag:P,shapeFlag:S,dirs:I,transition:ge}=R,ve=_==="input"||_==="option";if(ve||P!==-1){I&&Sn(R,null,D,"created");let Z=!1;if(C(v)){Z=Fv(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=v.content.firstChild;Z&&ge.beforeEnter(ne),N(ne,v,D),R.el=v=ne}if(S&16&&!(b&&(b.innerHTML||b.textContent))){let ne=g(v.firstChild,R,v,D,M,T,y);for(;ne;){Ba(v,1)||qs();const We=ne;ne=ne.nextSibling,a(We)}}else if(S&8){let ne=R.children;ne[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(ne=ne.slice(1)),v.textContent!==ne&&(Ba(v,0)||qs(),v.textContent=R.children)}if(b){if(ve||!y||P&48){const ne=v.tagName.includes("-");for(const We in b)(ve&&(We.endsWith("value")||We==="indeterminate")||ea(We)&&!si(We)||We[0]==="."||ne)&&r(v,We,null,b[We],void 0,D)}else if(b.onClick)r(v,"onClick",null,b.onClick,void 0,D);else if(P&4&&rr(b.style))for(const ne in b.style)b.style[ne]}let se;(se=b&&b.onVnodeBeforeMount)&&zt(se,D,R),I&&Sn(R,null,D,"beforeMount"),((se=b&&b.onVnodeMounted)||I||Z)&&qv(()=>{se&&zt(se,D,R),Z&&ge.enter(v),I&&Sn(R,null,D,"mounted")},M)}return v.nextSibling},g=(v,R,D,M,T,y,_)=>{_=_||!!R.dynamicChildren;const b=R.children,P=b.length;for(let S=0;S<P;S++){const I=_?b[S]:b[S]=Yt(b[S]),ge=I.type===bs;v?(ge&&!_&&S+1<P&&Yt(b[S+1]).type===bs&&(l(s(v.data.slice(I.children.length)),D,i(v)),v.data=I.children),v=d(v,I,M,T,y,_)):ge&&!I.children?l(I.el=s(""),D):(Ba(D,1)||qs(),n(null,I,D,null,M,T,Ua(D),y))}return v},w=(v,R,D,M,T,y)=>{const{slotScopeIds:_}=R;_&&(T=T?T.concat(_):_);const b=o(v),P=g(i(v),R,b,D,M,T,y);return P&&Js(P)&&P.data==="]"?i(R.anchor=P):(qs(),l(R.anchor=u("]"),b,P),P)},k=(v,R,D,M,T,y)=>{if(Ba(v.parentElement,1)||qs(),R.el=null,y){const P=x(v);for(;;){const S=i(v);if(S&&S!==P)a(S);else break}}const _=i(v),b=o(v);return a(v),n(null,R,b,_,D,M,Ua(b),T),D&&(D.vnode.el=R.el,ml(D,R.el)),_},x=(v,R="[",D="]")=>{let M=0;for(;v;)if(v=i(v),v&&Js(v)&&(v.data===R&&M++,v.data===D)){if(M===0)return i(v);M--}return v},N=(v,R,D)=>{const M=R.parentNode;M&&M.replaceChild(v,R);let T=D;for(;T;)T.vnode.el===R&&(T.vnode.el=T.subTree.el=v),T=T.parent},C=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[h,d]}const am="data-allow-mismatch",NI={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ba(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(am);)t=t.parentElement;const n=t&&t.getAttribute(am);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(NI[e])}}cl().requestIdleCallback;cl().cancelIdleCallback;function DI(t,e){if(Js(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Js(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Ur=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function LI(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const p=()=>(d++,u=null,g()),g=()=>{let w;return u||(w=u=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),l)return new Promise((x,N)=>{l(k,()=>x(p()),()=>N(k),d+1)});throw k}).then(k=>w!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),h=k,k)))};return Tn({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(w,k,x){const N=i?()=>{const C=i(x,v=>DI(w,v));C&&(k.bum||(k.bum=[])).push(C)}:x;h?N():g().then(()=>!k.isUnmounted&&N())},get __asyncResolved(){return h},setup(){const w=ot;if(qf(w),h)return()=>bu(h,w);const k=v=>{u=null,Ni(v,w,13,!r)};if(a&&w.suspense||_i)return g().then(v=>()=>bu(v,w)).catch(v=>(k(v),()=>r?we(r,{error:v}):null));const x=Et(!1),N=Et(),C=Et(!!s);return s&&setTimeout(()=>{C.value=!1},s),o!=null&&setTimeout(()=>{if(!x.value&&!N.value){const v=new Error(`Async component timed out after ${o}ms.`);k(v),N.value=v}},o),g().then(()=>{x.value=!0,w.parent&&ia(w.parent.vnode)&&w.parent.update()}).catch(v=>{k(v),N.value=v}),()=>{if(x.value&&h)return bu(h,w);if(N.value&&r)return we(r,{error:N.value});if(n&&!C.value)return we(n)}}})}function bu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=we(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ia=t=>t.type.__isKeepAlive,MI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=gl(),r=n.ctx;if(!r.renderer)return()=>{const C=e.default&&e.default();return C&&C.length===1?C[0]:C};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(C,v,R,D,M)=>{const T=C.component;u(C,v,R,0,a),l(T.vnode,C,v,R,T,a,D,C.slotScopeIds,M),gt(()=>{T.isDeactivated=!1,T.a&&ii(T.a);const y=C.props&&C.props.onVnodeMounted;y&&zt(y,T.parent,C)},a)},r.deactivate=C=>{const v=C.component;Pc(v.m),Pc(v.a),u(C,p,null,1,a),gt(()=>{v.da&&ii(v.da);const R=C.props&&C.props.onVnodeUnmounted;R&&zt(R,v.parent,C),v.isDeactivated=!0},a)};function g(C){Tu(C),h(C,n,a,!0)}function w(C){s.forEach((v,R)=>{const D=yh(v.type);D&&!C(D)&&k(R)})}function k(C){const v=s.get(C);v&&(!o||!gn(v,o))?g(v):o&&Tu(o),s.delete(C),i.delete(C)}yn(()=>[t.include,t.exclude],([C,v])=>{C&&w(R=>ro(C,R)),v&&w(R=>!ro(v,R))},{flush:"post",deep:!0});let x=null;const N=()=>{x!=null&&(kc(n.subTree.type)?gt(()=>{s.set(x,ja(n.subTree))},n.subTree.suspense):s.set(x,ja(n.subTree)))};return dl(N),vv(N),oa(()=>{s.forEach(C=>{const{subTree:v,suspense:R}=n,D=ja(v);if(C.type===D.type&&C.key===D.key){Tu(D);const M=D.component.da;M&&gt(M,R);return}g(C)})}),()=>{if(x=null,!e.default)return o=null;const C=e.default(),v=C[0];if(C.length>1)return o=null,C;if(!Is(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let R=ja(v);if(R.type===it)return o=null,R;const D=R.type,M=yh(Ur(R)?R.type.__asyncResolved||{}:D),{include:T,exclude:y,max:_}=t;if(T&&(!M||!ro(T,M))||y&&M&&ro(y,M))return R.shapeFlag&=-257,o=R,v;const b=R.key==null?D:R.key,P=s.get(b);return R.el&&(R=ir(R),v.shapeFlag&128&&(v.ssContent=R)),x=b,P?(R.el=P.el,R.component=P.component,R.transition&&mi(R,R.transition),R.shapeFlag|=512,i.delete(b),i.add(b)):(i.add(b),_&&i.size>parseInt(_,10)&&k(i.values().next().value)),R.shapeFlag|=256,o=R,kc(v.type)?v:R}}},VI=MI;function ro(t,e){return le(t)?t.some(n=>ro(n,e)):ze(t)?t.split(",").includes(e):MT(t)?(t.lastIndex=0,t.test(e)):!1}function gv(t,e){yv(t,"a",e)}function _v(t,e){yv(t,"da",e)}function yv(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ia(s.parent.vnode)&&FI(r,e,n,s),s=s.parent}}function FI(t,e,n,r){const s=fl(e,t,r,!0);Ev(()=>{Of(r[e],s)},n)}function Tu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ja(t){return t.shapeFlag&128?t.ssContent:t}function fl(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ns();const a=aa(n),l=En(e,n,t,o);return a(),rs(),l});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=ot)=>{(!_i||t==="sp")&&fl(t,(...r)=>e(...r),n)},UI=dr("bm"),dl=dr("m"),BI=dr("bu"),vv=dr("u"),oa=dr("bum"),Ev=dr("um"),jI=dr("sp"),$I=dr("rtg"),HI=dr("rtc");function wv(t,e=ot){fl("ec",t,e)}const bv="components";function Mo(t,e){return Iv(bv,t,!0,e)||t}const Tv=Symbol.for("v-ndc");function qI(t){return ze(t)?Iv(bv,t,!1)||t:t||Tv}function Iv(t,e,n=!0,r=!1){const s=ct||ot;if(s){const i=s.type;{const a=yh(i,!1);if(a&&(a===e||a===hn(e)||a===al(hn(e))))return i}const o=cm(s[t]||i[t],e)||cm(s.appContext[t],e);return!o&&r?i:o}}function cm(t,e){return t&&(t[e]||t[hn(e)]||t[al(hn(e))])}function CU(t,e,n,r){let s;const i=n,o=le(t);if(o||ze(t)){const a=o&&rr(t);let l=!1;a&&(l=!cn(t),t=hl(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?kt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function PU(t,e,n={},r,s){if(ct.ce||ct.parent&&Ur(ct.parent)&&ct.parent.ce)return $t(),Yn(Ot,null,[we("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),$t();const o=i&&Av(i(n)),a=n.key||o&&o.key,l=Yn(Ot,{key:(a&&!vn(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Av(t){return t.some(e=>Is(e)?!(e.type===it||e.type===Ot&&!Av(e.children)):!0)?t:null}const hh=t=>t?Qv(t)?_l(t):hh(t.parent):null,mo=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hh(t.parent),$root:t=>hh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zf(t),$forceUpdate:t=>t.f||(t.f=()=>{Hf(t.update)}),$nextTick:t=>t.n||(t.n=Bn.bind(t.proxy)),$watch:t=>hA.bind(t)}),Iu=(t,e)=>t!==Fe&&!t.__isScriptSetup&&xe(t,e),zI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Iu(r,e))return o[e]=1,r[e];if(s!==Fe&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==Fe&&xe(n,e))return o[e]=4,n[e];fh&&(o[e]=0)}}const h=mo[e];let d,p;if(h)return e==="$attrs"&&Pt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Fe&&xe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Iu(s,e)?(s[e]=n,!0):r!==Fe&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&xe(t,o)||Iu(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(mo,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lm(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fh=!0;function WI(t){const e=zf(t),n=t.proxy,r=t.ctx;fh=!1,e.beforeCreate&&um(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:k,deactivated:x,beforeDestroy:N,beforeUnmount:C,destroyed:v,unmounted:R,render:D,renderTracked:M,renderTriggered:T,errorCaptured:y,serverPrefetch:_,expose:b,inheritAttrs:P,components:S,directives:I,filters:ge}=e;if(u&&KI(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Me(se)&&(t.data=fr(se))}if(fh=!0,i)for(const se in i){const ne=i[se],We=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):xn,fn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):xn,tn=Ue({get:We,set:fn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const se in a)Rv(a[se],r,n,se);if(l){const se=pe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{ws(ne,se[ne])})}h&&um(h,t,"c");function Z(se,ne){le(ne)?ne.forEach(We=>se(We.bind(n))):ne&&se(ne.bind(n))}if(Z(UI,d),Z(dl,p),Z(BI,g),Z(vv,w),Z(gv,k),Z(_v,x),Z(wv,y),Z(HI,M),Z($I,T),Z(oa,C),Z(Ev,R),Z(jI,_),le(b))if(b.length){const se=t.exposed||(t.exposed={});b.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});D&&t.render===xn&&(t.render=D),P!=null&&(t.inheritAttrs=P),S&&(t.components=S),I&&(t.directives=I),_&&qf(t)}function KI(t,e,n=xn){le(t)&&(t=dh(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Nt(s.from||r,s.default,!0):i=Nt(s.from||r):i=Nt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function um(t,e,n){En(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rv(t,e,n,r){let s=r.includes(".")?jv(n,r):()=>n[r];if(ze(t)){const i=e[t];pe(i)&&yn(s,i)}else if(pe(t))yn(s,t.bind(n));else if(Me(t))if(le(t))t.forEach(i=>Rv(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&yn(s,i,t)}}function zf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Cc(l,u,o,!0)),Cc(l,e,o)),Me(e)&&i.set(e,l),l}function Cc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cc(t,i,n,!0),s&&s.forEach(o=>Cc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=GI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const GI={data:hm,props:fm,emits:fm,methods:so,computed:so,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:so,directives:so,watch:YI,provide:hm,inject:QI};function hm(t,e){return e?t?function(){return st(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function QI(t,e){return so(dh(t),dh(e))}function dh(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function so(t,e){return t?st(Object.create(null),t,e):e}function fm(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:st(Object.create(null),lm(t),lm(e??{})):e}function YI(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function Sv(){return{app:null,config:{isNativeTag:DT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let XI=0;function JI(t,e){return function(r,s=null){pe(r)||(r=st({},r)),s!=null&&!Me(s)&&(s=null);const i=Sv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:XI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xv,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||we(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,_l(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(En(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Es;Es=u;try{return h()}finally{Es=d}}};return u}}let Es=null;function ws(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=ot||ct;if(r||Es){const s=Es?Es._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Wf(){return!!(ot||ct||Es)}const Cv={},Pv=()=>Object.create(Cv),kv=t=>Object.getPrototypeOf(t)===Cv;function ZI(t,e,n,r=!1){const s={},i=Pv();t.propsDefaults=Object.create(null),Ov(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function eA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(pl(t.emitsOptions,p))continue;const g=e[p];if(l)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const w=hn(p);s[w]=ph(l,a,w,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Ov(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!xe(e,d)&&((h=Os(d))===d||!xe(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=ph(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&Gn(t.attrs,"set","")}function Ov(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(si(l))continue;const u=e[l];let h;s&&xe(s,h=hn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:pl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=a||Fe;for(let h=0;h<i.length;h++){const d=i[h];n[d]=ph(s,l,d,u[d],t,!xe(u,d))}}return o}function ph(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=aa(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Os(n))&&(r=!0))}return r}const tA=new WeakMap;function xv(t,e,n=!1){const r=n?tA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const h=d=>{l=!0;const[p,g]=xv(d,e,!0);st(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Me(t)&&r.set(t,ni),ni;if(le(i))for(let h=0;h<i.length;h++){const d=hn(i[h]);dm(d)&&(o[d]=Fe)}else if(i)for(const h in i){const d=hn(h);if(dm(d)){const p=i[h],g=o[d]=le(p)||pe(p)?{type:p}:st({},p),w=g.type;let k=!1,x=!0;if(le(w))for(let N=0;N<w.length;++N){const C=w[N],v=pe(C)&&C.name;if(v==="Boolean"){k=!0;break}else v==="String"&&(x=!1)}else k=pe(w)&&w.name==="Boolean";g[0]=k,g[1]=x,(k||xe(g,"default"))&&a.push(d)}}const u=[o,a];return Me(t)&&r.set(t,u),u}function dm(t){return t[0]!=="$"&&!si(t)}const Nv=t=>t[0]==="_"||t==="$stable",Kf=t=>le(t)?t.map(Yt):[Yt(t)],nA=(t,e,n)=>{if(e._n)return e;const r=Rn((...s)=>Kf(e(...s)),n);return r._c=!1,r},Dv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nv(s))continue;const i=t[s];if(pe(i))e[s]=nA(s,i,r);else if(i!=null){const o=Kf(i);e[s]=()=>o}}},Lv=(t,e)=>{const n=Kf(e);t.slots.default=()=>n},Mv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},rA=(t,e,n)=>{const r=t.slots=Pv();if(t.vnode.shapeFlag&32){const s=e._;s?(Mv(r,e,n),n&&My(r,"_",s,!0)):Dv(e,r)}else e&&Lv(t,e)},sA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Mv(s,e,n):(i=!e.$stable,Dv(e,s)),o=e}else e&&(Lv(t,e),o={default:1});if(i)for(const a in s)!Nv(a)&&o[a]==null&&delete s[a]},gt=qv;function iA(t){return Vv(t)}function oA(t){return Vv(t,xI)}function Vv(t,e){const n=cl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=xn,insertStaticContent:w}=t,k=(A,O,V,$=null,U=null,q=null,Y=void 0,G=null,K=!!O.dynamicChildren)=>{if(A===O)return;A&&!gn(A,O)&&($=B(A),Ke(A,U,q,!0),A=null),O.patchFlag===-2&&(K=!1,O.dynamicChildren=null);const{type:z,ref:ue,shapeFlag:J}=O;switch(z){case bs:x(A,O,V,$);break;case it:N(A,O,V,$);break;case go:A==null&&C(O,V,$,Y);break;case Ot:S(A,O,V,$,U,q,Y,G,K);break;default:J&1?D(A,O,V,$,U,q,Y,G,K):J&6?I(A,O,V,$,U,q,Y,G,K):(J&64||J&128)&&z.process(A,O,V,$,U,q,Y,G,K,re)}ue!=null&&U&&Lo(ue,A&&A.ref,q,O||A,!O)},x=(A,O,V,$)=>{if(A==null)r(O.el=a(O.children),V,$);else{const U=O.el=A.el;O.children!==A.children&&u(U,O.children)}},N=(A,O,V,$)=>{A==null?r(O.el=l(O.children||""),V,$):O.el=A.el},C=(A,O,V,$)=>{[A.el,A.anchor]=w(A.children,O,V,$,A.el,A.anchor)},v=({el:A,anchor:O},V,$)=>{let U;for(;A&&A!==O;)U=p(A),r(A,V,$),A=U;r(O,V,$)},R=({el:A,anchor:O})=>{let V;for(;A&&A!==O;)V=p(A),s(A),A=V;s(O)},D=(A,O,V,$,U,q,Y,G,K)=>{O.type==="svg"?Y="svg":O.type==="math"&&(Y="mathml"),A==null?M(O,V,$,U,q,Y,G,K):_(A,O,U,q,Y,G,K)},M=(A,O,V,$,U,q,Y,G)=>{let K,z;const{props:ue,shapeFlag:J,transition:oe,dirs:ie}=A;if(K=A.el=o(A.type,q,ue&&ue.is,ue),J&8?h(K,A.children):J&16&&y(A.children,K,null,$,U,Au(A,q),Y,G),ie&&Sn(A,null,$,"created"),T(K,A,A.scopeId,Y,$),ue){for(const Pe in ue)Pe!=="value"&&!si(Pe)&&i(K,Pe,null,ue[Pe],q,$);"value"in ue&&i(K,"value",null,ue.value,q),(z=ue.onVnodeBeforeMount)&&zt(z,$,A)}ie&&Sn(A,null,$,"beforeMount");const fe=Fv(U,oe);fe&&oe.beforeEnter(K),r(K,O,V),((z=ue&&ue.onVnodeMounted)||fe||ie)&&gt(()=>{z&&zt(z,$,A),fe&&oe.enter(K),ie&&Sn(A,null,$,"mounted")},U)},T=(A,O,V,$,U)=>{if(V&&g(A,V),$)for(let q=0;q<$.length;q++)g(A,$[q]);if(U){let q=U.subTree;if(O===q||kc(q.type)&&(q.ssContent===O||q.ssFallback===O)){const Y=U.vnode;T(A,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},y=(A,O,V,$,U,q,Y,G,K=0)=>{for(let z=K;z<A.length;z++){const ue=A[z]=G?Sr(A[z]):Yt(A[z]);k(null,ue,O,V,$,U,q,Y,G)}},_=(A,O,V,$,U,q,Y)=>{const G=O.el=A.el;let{patchFlag:K,dynamicChildren:z,dirs:ue}=O;K|=A.patchFlag&16;const J=A.props||Fe,oe=O.props||Fe;let ie;if(V&&hs(V,!1),(ie=oe.onVnodeBeforeUpdate)&&zt(ie,V,O,A),ue&&Sn(O,A,V,"beforeUpdate"),V&&hs(V,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&h(G,""),z?b(A.dynamicChildren,z,G,V,$,Au(O,U),q):Y||ne(A,O,G,null,V,$,Au(O,U),q,!1),K>0){if(K&16)P(G,J,oe,V,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const fe=O.dynamicProps;for(let Pe=0;Pe<fe.length;Pe++){const Se=fe[Pe],Tt=J[Se],ht=oe[Se];(ht!==Tt||Se==="value")&&i(G,Se,Tt,ht,U,V)}}K&1&&A.children!==O.children&&h(G,O.children)}else!Y&&z==null&&P(G,J,oe,V,U);((ie=oe.onVnodeUpdated)||ue)&&gt(()=>{ie&&zt(ie,V,O,A),ue&&Sn(O,A,V,"updated")},$)},b=(A,O,V,$,U,q,Y)=>{for(let G=0;G<O.length;G++){const K=A[G],z=O[G],ue=K.el&&(K.type===Ot||!gn(K,z)||K.shapeFlag&70)?d(K.el):V;k(K,z,ue,null,$,U,q,Y,!0)}},P=(A,O,V,$,U)=>{if(O!==V){if(O!==Fe)for(const q in O)!si(q)&&!(q in V)&&i(A,q,O[q],null,U,$);for(const q in V){if(si(q))continue;const Y=V[q],G=O[q];Y!==G&&q!=="value"&&i(A,q,G,Y,U,$)}"value"in V&&i(A,"value",O.value,V.value,U)}},S=(A,O,V,$,U,q,Y,G,K)=>{const z=O.el=A?A.el:a(""),ue=O.anchor=A?A.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=O;ie&&(G=G?G.concat(ie):ie),A==null?(r(z,V,$),r(ue,V,$),y(O.children||[],V,ue,U,q,Y,G,K)):J>0&&J&64&&oe&&A.dynamicChildren?(b(A.dynamicChildren,oe,V,U,q,Y,G),(O.key!=null||U&&O===U.subTree)&&Uv(A,O,!0)):ne(A,O,V,ue,U,q,Y,G,K)},I=(A,O,V,$,U,q,Y,G,K)=>{O.slotScopeIds=G,A==null?O.shapeFlag&512?U.ctx.activate(O,V,$,Y,K):ge(O,V,$,U,q,Y,K):ve(A,O,K)},ge=(A,O,V,$,U,q,Y)=>{const G=A.component=PA(A,$,U);if(ia(A)&&(G.ctx.renderer=re),kA(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,Z,Y),!A.el){const K=G.subTree=we(it);N(null,K,O,V)}}else Z(G,A,O,V,U,q,Y)},ve=(A,O,V)=>{const $=O.component=A.component;if(_A(A,O,V))if($.asyncDep&&!$.asyncResolved){se($,O,V);return}else $.next=O,$.update();else O.el=A.el,$.vnode=O},Z=(A,O,V,$,U,q,Y)=>{const G=()=>{if(A.isMounted){let{next:J,bu:oe,u:ie,parent:fe,vnode:Pe}=A;{const It=Bv(A);if(It){J&&(J.el=Pe.el,se(A,J,Y)),It.asyncDep.then(()=>{A.isUnmounted||G()});return}}let Se=J,Tt;hs(A,!1),J?(J.el=Pe.el,se(A,J,Y)):J=Pe,oe&&ii(oe),(Tt=J.props&&J.props.onVnodeBeforeUpdate)&&zt(Tt,fe,J,Pe),hs(A,!0);const ht=Ru(A),dt=A.subTree;A.subTree=ht,k(dt,ht,d(dt.el),B(dt),A,U,q),J.el=ht.el,Se===null&&ml(A,ht.el),ie&&gt(ie,U),(Tt=J.props&&J.props.onVnodeUpdated)&&gt(()=>zt(Tt,fe,J,Pe),U)}else{let J;const{el:oe,props:ie}=O,{bm:fe,m:Pe,parent:Se,root:Tt,type:ht}=A,dt=Ur(O);if(hs(A,!1),fe&&ii(fe),!dt&&(J=ie&&ie.onVnodeBeforeMount)&&zt(J,Se,O),hs(A,!0),oe&&Le){const It=()=>{A.subTree=Ru(A),Le(oe,A.subTree,A,U,null)};dt&&ht.__asyncHydrate?ht.__asyncHydrate(oe,A,It):It()}else{Tt.ce&&Tt.ce._injectChildStyle(ht);const It=A.subTree=Ru(A);k(null,It,V,$,A,U,q),O.el=It.el}if(Pe&&gt(Pe,U),!dt&&(J=ie&&ie.onVnodeMounted)){const It=O;gt(()=>zt(J,Se,It),U)}(O.shapeFlag&256||Se&&Ur(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&gt(A.a,U),A.isMounted=!0,O=V=$=null}};A.scope.on();const K=A.effect=new $y(G);A.scope.off();const z=A.update=K.run.bind(K),ue=A.job=K.runIfDirty.bind(K);ue.i=A,ue.id=A.uid,K.scheduler=()=>Hf(ue),hs(A,!0),z()},se=(A,O,V)=>{O.component=A;const $=A.vnode.props;A.vnode=O,A.next=null,eA(A,O.props,$,V),sA(A,O.children,V),ns(),sm(A),rs()},ne=(A,O,V,$,U,q,Y,G,K=!1)=>{const z=A&&A.children,ue=A?A.shapeFlag:0,J=O.children,{patchFlag:oe,shapeFlag:ie}=O;if(oe>0){if(oe&128){fn(z,J,V,$,U,q,Y,G,K);return}else if(oe&256){We(z,J,V,$,U,q,Y,G,K);return}}ie&8?(ue&16&&Ht(z,U,q),J!==z&&h(V,J)):ue&16?ie&16?fn(z,J,V,$,U,q,Y,G,K):Ht(z,U,q,!0):(ue&8&&h(V,""),ie&16&&y(J,V,$,U,q,Y,G,K))},We=(A,O,V,$,U,q,Y,G,K)=>{A=A||ni,O=O||ni;const z=A.length,ue=O.length,J=Math.min(z,ue);let oe;for(oe=0;oe<J;oe++){const ie=O[oe]=K?Sr(O[oe]):Yt(O[oe]);k(A[oe],ie,V,null,U,q,Y,G,K)}z>ue?Ht(A,U,q,!0,!1,J):y(O,V,$,U,q,Y,G,K,J)},fn=(A,O,V,$,U,q,Y,G,K)=>{let z=0;const ue=O.length;let J=A.length-1,oe=ue-1;for(;z<=J&&z<=oe;){const ie=A[z],fe=O[z]=K?Sr(O[z]):Yt(O[z]);if(gn(ie,fe))k(ie,fe,V,null,U,q,Y,G,K);else break;z++}for(;z<=J&&z<=oe;){const ie=A[J],fe=O[oe]=K?Sr(O[oe]):Yt(O[oe]);if(gn(ie,fe))k(ie,fe,V,null,U,q,Y,G,K);else break;J--,oe--}if(z>J){if(z<=oe){const ie=oe+1,fe=ie<ue?O[ie].el:$;for(;z<=oe;)k(null,O[z]=K?Sr(O[z]):Yt(O[z]),V,fe,U,q,Y,G,K),z++}}else if(z>oe)for(;z<=J;)Ke(A[z],U,q,!0),z++;else{const ie=z,fe=z,Pe=new Map;for(z=fe;z<=oe;z++){const Mt=O[z]=K?Sr(O[z]):Yt(O[z]);Mt.key!=null&&Pe.set(Mt.key,z)}let Se,Tt=0;const ht=oe-fe+1;let dt=!1,It=0;const _r=new Array(ht);for(z=0;z<ht;z++)_r[z]=0;for(z=ie;z<=J;z++){const Mt=A[z];if(Tt>=ht){Ke(Mt,U,q,!0);continue}let nn;if(Mt.key!=null)nn=Pe.get(Mt.key);else for(Se=fe;Se<=oe;Se++)if(_r[Se-fe]===0&&gn(Mt,O[Se])){nn=Se;break}nn===void 0?Ke(Mt,U,q,!0):(_r[nn-fe]=z+1,nn>=It?It=nn:dt=!0,k(Mt,O[nn],V,null,U,q,Y,G,K),Tt++)}const Vs=dt?aA(_r):ni;for(Se=Vs.length-1,z=ht-1;z>=0;z--){const Mt=fe+z,nn=O[Mt],Fs=Mt+1<ue?O[Mt+1].el:$;_r[z]===0?k(null,nn,V,Fs,U,q,Y,G,K):dt&&(Se<0||z!==Vs[Se]?tn(nn,V,Fs,2):Se--)}}},tn=(A,O,V,$,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:z}=A;if(z&6){tn(A.component.subTree,O,V,$);return}if(z&128){A.suspense.move(O,V,$);return}if(z&64){Y.move(A,O,V,re);return}if(Y===Ot){r(q,O,V);for(let J=0;J<K.length;J++)tn(K[J],O,V,$);r(A.anchor,O,V);return}if(Y===go){v(A,O,V);return}if($!==2&&z&1&&G)if($===0)G.beforeEnter(q),r(q,O,V),gt(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,fe=()=>r(q,O,V),Pe=()=>{J(q,()=>{fe(),ie&&ie()})};oe?oe(q,fe,Pe):Pe()}else r(q,O,V)},Ke=(A,O,V,$=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:z,shapeFlag:ue,patchFlag:J,dirs:oe,cacheIndex:ie}=A;if(J===-2&&(U=!1),G!=null&&Lo(G,null,V,A,!0),ie!=null&&(O.renderCache[ie]=void 0),ue&256){O.ctx.deactivate(A);return}const fe=ue&1&&oe,Pe=!Ur(A);let Se;if(Pe&&(Se=Y&&Y.onVnodeBeforeUnmount)&&zt(Se,O,A),ue&6)In(A.component,V,$);else{if(ue&128){A.suspense.unmount(V,$);return}fe&&Sn(A,null,O,"beforeUnmount"),ue&64?A.type.remove(A,O,V,re,$):z&&!z.hasOnce&&(q!==Ot||J>0&&J&64)?Ht(z,O,V,!1,!0):(q===Ot&&J&384||!U&&ue&16)&&Ht(K,O,V),$&&Ge(A)}(Pe&&(Se=Y&&Y.onVnodeUnmounted)||fe)&&gt(()=>{Se&&zt(Se,O,A),fe&&Sn(A,null,O,"unmounted")},V)},Ge=A=>{const{type:O,el:V,anchor:$,transition:U}=A;if(O===Ot){gr(V,$);return}if(O===go){R(A);return}const q=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(V,q);G?G(A.el,q,K):K()}else q()},gr=(A,O)=>{let V;for(;A!==O;)V=p(A),s(A),A=V;s(O)},In=(A,O,V)=>{const{bum:$,scope:U,job:q,subTree:Y,um:G,m:K,a:z}=A;Pc(K),Pc(z),$&&ii($),U.stop(),q&&(q.flags|=8,Ke(Y,A,O,V)),G&&gt(G,O),gt(()=>{A.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Ht=(A,O,V,$=!1,U=!1,q=0)=>{for(let Y=q;Y<A.length;Y++)Ke(A[Y],O,V,$,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const O=p(A.anchor||A.el),V=O&&O[RI];return V?p(V):O};let ee=!1;const X=(A,O,V)=>{A==null?O._vnode&&Ke(O._vnode,null,null,!0):k(O._vnode||null,A,O,null,null,null,V),O._vnode=A,ee||(ee=!0,sm(),Rc(),ee=!1)},re={p:k,um:Ke,m:tn,r:Ge,mt:ge,mc:y,pc:ne,pbc:b,n:B,o:t};let Te,Le;return e&&([Te,Le]=e(re)),{render:X,hydrate:Te,createApp:JI(X,Te)}}function Au({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uv(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Uv(o,a)),a.type===bs&&(a.el=o.el)}}function aA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bv(e)}function Pc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const cA=Symbol.for("v-scx"),lA=()=>Nt(cA);function uA(t,e){return Gf(t,null,e)}function yn(t,e,n){return Gf(t,e,n)}function Gf(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=st({},n),l=e&&r||!e&&i!=="post";let u;if(_i){if(i==="sync"){const g=lA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=xn,g.resume=xn,g.pause=xn,g}}const h=ot;a.call=(g,w,k)=>En(g,h,w,k);let d=!1;i==="post"?a.scheduler=g=>{gt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,w)=>{w?g():Hf(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=TI(t,e,a);return _i&&(u?u.push(p):l&&p()),p}function hA(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?jv(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=aa(this),a=Gf(s,i.bind(r),n);return o(),a}function jv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${Os(e)}Modifiers`];function dA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&fA(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ze(h)?h.trim():h)),o.number&&(s=n.map(wc)));let a,l=r[a=gu(e)]||r[a=gu(hn(e))];!l&&i&&(l=r[a=gu(Os(e))]),l&&En(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,En(u,t,6,s)}}function $v(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const h=$v(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Me(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):st(o,i),Me(t)&&r.set(t,o),o)}function pl(t,e){return!t||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Os(e))||xe(t,e))}function Ru(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:w,inheritAttrs:k}=t,x=Sc(t);let N,C;try{if(n.shapeFlag&4){const R=s||r,D=R;N=Yt(u.call(D,R,h,d,g,p,w)),C=a}else{const R=e;N=Yt(R.length>1?R(d,{attrs:a,slots:o,emit:l}):R(d,null)),C=e.props?a:mA(a)}}catch(R){_o.length=0,Ni(R,t,1),N=we(it)}let v=N;if(C&&k!==!1){const R=Object.keys(C),{shapeFlag:D}=v;R.length&&D&7&&(i&&R.some(kf)&&(C=gA(C,i)),v=ir(v,C,!1,!0))}return n.dirs&&(v=ir(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&mi(v,n.transition),N=v,Sc(x),N}function pA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Is(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const mA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ea(n))&&((e||(e={}))[n]=t[n]);return e},gA=(t,e)=>{const n={};for(const r in t)(!kf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _A(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?pm(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!pl(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?pm(r,o,u):!0:!!o;return!1}function pm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pl(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const kc=t=>t.__isSuspense;let mh=0;const yA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)vA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}EA(t,e,n,r,s,o,a,l,u)}},hydrate:wA,normalize:bA},Qf=yA;function Vo(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function vA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=Hv(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Vo(t,"onPending"),Vo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ai(p,t.ssFallback)):p.resolve(!1,!0)}function EA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:w,pendingBranch:k,isInFallback:x,isHydrating:N}=d;if(k)d.pendingBranch=p,gn(p,k)?(l(k,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():x&&(N||(l(w,g,n,r,s,null,i,o,a),ai(d,g)))):(d.pendingId=mh++,N?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),x?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(w,g,n,r,s,null,i,o,a),ai(d,g))):w&&gn(p,w)?(l(w,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(w&&gn(p,w))l(w,p,n,r,s,d,i,o,a),ai(d,p);else if(Vo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=mh++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:C,pendingId:v}=d;C>0?setTimeout(()=>{d.pendingId===v&&d.fallback(g)},C):C===0&&d.fallback(g)}}function Hv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:w,o:{parentNode:k,remove:x}}=u;let N;const C=TA(t);C&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const v=t.props?Vy(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:mh++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,T=!1){const{vnode:y,activeBranch:_,pendingBranch:b,pendingId:P,effects:S,parentComponent:I,container:ge}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:M||(ve=_&&b.transition&&b.transition.mode==="out-in",ve&&(_.transition.afterLeave=()=>{P===D.pendingId&&(p(b,ge,i===R?w(_):i,0),lh(S))}),_&&(k(_.el)===ge&&(i=w(_)),g(_,I,D,!0)),ve||p(b,ge,i,0)),ai(D,b),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...S),se=!0;break}Z=Z.parent}!se&&!ve&&lh(S),D.effects=[],C&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),Vo(y,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:T,activeBranch:y,parentComponent:_,container:b,namespace:P}=D;Vo(T,"onFallback");const S=w(y),I=()=>{D.isInFallback&&(d(null,M,b,S,_,null,P,a,l),ai(D,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(y.transition.afterLeave=I),D.isInFallback=!0,g(y,_,null,!0),ge||I()},move(M,T,y){D.activeBranch&&p(D.activeBranch,M,T,y),D.container=M},next(){return D.activeBranch&&w(D.activeBranch)},registerDep(M,T,y){const _=!!D.pendingBranch;_&&D.deps++;const b=M.vnode.el;M.asyncDep.catch(P=>{Ni(P,M,0)}).then(P=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:S}=M;_h(M,P,!1),b&&(S.el=b);const I=!b&&M.subTree.el;T(M,S,k(b||M.subTree.el),b?null:w(M.subTree),D,o,y),I&&x(I),ml(M,S.el),_&&--D.deps===0&&D.resolve()})},unmount(M,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,T),D.pendingBranch&&g(D.pendingBranch,n,M,T)}};return D}function wA(t,e,n,r,s,i,o,a,l){const u=e.suspense=Hv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function bA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=mm(r?n.default:n),t.ssFallback=r?mm(n.fallback):we(it)}function mm(t){let e;if(pe(t)){const n=gi&&t._c;n&&(t._d=!1,$t()),t=t(),n&&(t._d=!0,e=Gt,zv())}return le(t)&&(t=pA(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function qv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):lh(t)}function ai(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,ml(r,s))}function TA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ot=Symbol.for("v-fgt"),bs=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),_o=[];let Gt=null;function $t(t=!1){_o.push(Gt=t?null:[])}function zv(){_o.pop(),Gt=_o[_o.length-1]||null}let gi=1;function gm(t,e=!1){gi+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function Wv(t){return t.dynamicChildren=gi>0?Gt||ni:null,zv(),gi>0&&Gt&&Gt.push(t),t}function Fo(t,e,n,r,s,i){return Wv(He(t,e,n,r,s,i,!0))}function Yn(t,e,n,r,s){return Wv(we(t,e,n,r,s,!0))}function Is(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const Kv=({key:t})=>t??null,sc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Je(t)||pe(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kv(e),ref:e&&sc(e),scopeId:lv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return a?(Yf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),gi>0&&!o&&Gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Gt.push(l),l}const we=IA;function IA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tv)&&(t=it),Is(t)){const a=ir(t,e,!0);return n&&Yf(a,n),gi>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag=-2,a}if(DA(t)&&(t=t.__vccOpts),e){e=AA(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=ta(a)),Me(l)&&(jf(l)&&!le(l)&&(l=st({},l)),e.style=ll(l))}const o=ze(t)?1:kc(t)?128:uv(t)?64:Me(t)?4:pe(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function AA(t){return t?jf(t)||kv(t)?st({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Gv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Kv(u),ref:e&&e.ref?n&&i?le(i)?i.concat(sc(e)):[i,sc(e)]:sc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&mi(h,l.clone(h)),h}function an(t=" ",e=0){return we(bs,null,t,e)}function kU(t,e){const n=we(go,null,t);return n.staticCount=e,n}function RA(t="",e=!1){return e?($t(),Yn(it,null,t)):we(it,null,t)}function Yt(t){return t==null||typeof t=="boolean"?we(it):le(t)?we(Ot,null,t.slice()):Is(t)?Sr(t):we(bs,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function Yf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!kv(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ta([e.class,r.class]));else if(s==="style")e.style=ll([e.style,r.style]);else if(ea(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){En(t,e,7,[n,r])}const SA=Sv();let CA=0;function PA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||SA,i={uid:CA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xv(r,s),emitsOptions:$v(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dA.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const gl=()=>ot||ct;let Oc,gh;{const t=cl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oc=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),gh=e("__VUE_SSR_SETTERS__",n=>_i=n)}const aa=t=>{const e=ot;return Oc(t),t.scope.on(),()=>{t.scope.off(),Oc(e)}},_m=()=>{ot&&ot.scope.off(),Oc(null)};function Qv(t){return t.vnode.shapeFlag&4}let _i=!1;function kA(t,e=!1,n=!1){e&&gh(e);const{props:r,children:s}=t.vnode,i=Qv(t);ZI(t,r,i,e),rA(t,s,n);const o=i?OA(t,e):void 0;return e&&gh(!1),o}function OA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,zI);const{setup:r}=n;if(r){ns();const s=t.setupContext=r.length>1?NA(t):null,i=aa(t),o=sa(r,t,0,[t.props,s]),a=Ny(o);if(rs(),i(),(a||t.sp)&&!Ur(t)&&qf(t),a){if(o.then(_m,_m),e)return o.then(l=>{_h(t,l,e)}).catch(l=>{Ni(l,t,0)});t.asyncDep=o}else _h(t,o,e)}else Yv(t,e)}function _h(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=sv(e)),Yv(t,n)}let ym;function Yv(t,e,n){const r=t.type;if(!t.render){if(!e&&ym&&!r.render){const s=r.template||zf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=st(st({isCustomElement:i,delimiters:a},o),l);r.render=ym(s,u)}}t.render=r.render||xn}{const s=aa(t);ns();try{WI(t)}finally{rs(),s()}}}const xA={get(t,e){return Pt(t,"get",""),t[e]}};function NA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xA),slots:t.slots,emit:t.emit,expose:e}}function _l(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sv($f(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mo)return mo[n](t)},has(e,n){return n in e||n in mo}})):t.proxy}function yh(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function DA(t){return pe(t)&&"__vccOpts"in t}const Ue=(t,e)=>wI(t,e,_i);function vt(t,e,n){const r=arguments.length;return r===2?Me(e)&&!le(e)?Is(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Is(n)&&(n=[n]),we(t,e,n))}const Xv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vh;const vm=typeof window<"u"&&window.trustedTypes;if(vm)try{vh=vm.createPolicy("vue",{createHTML:t=>t})}catch{}const Jv=vh?t=>vh.createHTML(t):t=>t,LA="http://www.w3.org/2000/svg",MA="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,Em=Kn&&Kn.createElement("template"),VA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Kn.createElementNS(LA,t):e==="mathml"?Kn.createElementNS(MA,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Em.innerHTML=Jv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Em.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",eo="animation",Uo=Symbol("_vtc"),Zv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},FA=st({},hv,Zv),UA=t=>(t.displayName="Transition",t.props=FA,t),eE=UA((t,{slots:e})=>vt(PI,BA(t),e)),fs=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},wm=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function BA(t){const e={};for(const S in t)S in Zv||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=jA(s),k=w&&w[0],x=w&&w[1],{onBeforeEnter:N,onEnter:C,onEnterCancelled:v,onLeave:R,onLeaveCancelled:D,onBeforeAppear:M=N,onAppear:T=C,onAppearCancelled:y=v}=e,_=(S,I,ge,ve)=>{S._enterCancelled=ve,ds(S,I?h:a),ds(S,I?u:o),ge&&ge()},b=(S,I)=>{S._isLeaving=!1,ds(S,d),ds(S,g),ds(S,p),I&&I()},P=S=>(I,ge)=>{const ve=S?T:C,Z=()=>_(I,S,ge);fs(ve,[I,Z]),bm(()=>{ds(I,S?l:i),zn(I,S?h:a),wm(ve)||Tm(I,r,k,Z)})};return st(e,{onBeforeEnter(S){fs(N,[S]),zn(S,i),zn(S,o)},onBeforeAppear(S){fs(M,[S]),zn(S,l),zn(S,u)},onEnter:P(!1),onAppear:P(!0),onLeave(S,I){S._isLeaving=!0;const ge=()=>b(S,I);zn(S,d),S._enterCancelled?(zn(S,p),Rm()):(Rm(),zn(S,p)),bm(()=>{S._isLeaving&&(ds(S,d),zn(S,g),wm(R)||Tm(S,r,x,ge))}),fs(R,[S,ge])},onEnterCancelled(S){_(S,!1,void 0,!0),fs(v,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),fs(y,[S])},onLeaveCancelled(S){b(S),fs(D,[S])}})}function jA(t){if(t==null)return null;if(Me(t))return[Su(t.enter),Su(t.leave)];{const e=Su(t);return[e,e]}}function Su(t){return Vy(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Uo]||(t[Uo]=new Set)).add(e)}function ds(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Uo];n&&(n.delete(e),n.size||(t[Uo]=void 0))}function bm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let $A=0;function Tm(t,e,n,r){const s=t._endId=++$A,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=HA(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function HA(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${wr}Delay`),i=r(`${wr}Duration`),o=Im(s,i),a=r(`${eo}Delay`),l=r(`${eo}Duration`),u=Im(a,l);let h=null,d=0,p=0;e===wr?o>0&&(h=wr,d=o,p=i.length):e===eo?u>0&&(h=eo,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?wr:eo:null,p=h?h===wr?i.length:l.length:0);const g=h===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function Im(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Am(n)+Am(t[r])))}function Am(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Rm(){return document.body.offsetHeight}function qA(t,e,n){const r=t[Uo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Sm=Symbol("_vod"),zA=Symbol("_vsh"),WA=Symbol(""),KA=/(^|;)\s*display\s*:/;function GA(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ic(r,a,"")}else for(const o in e)n[o]==null&&ic(r,o,"");for(const o in n)o==="display"&&(i=!0),ic(r,o,n[o])}else if(s){if(e!==n){const o=r[WA];o&&(n+=";"+o),r.cssText=n,i=KA.test(n)}}else e&&t.removeAttribute("style");Sm in t&&(t[Sm]=i?r.display:"",t[zA]&&(r.display="none"))}const Cm=/\s*!important$/;function ic(t,e,n){if(le(n))n.forEach(r=>ic(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=QA(t,e);Cm.test(n)?t.setProperty(Os(r),n.replace(Cm,""),"important"):t[r]=n}}const Pm=["Webkit","Moz","ms"],Cu={};function QA(t,e){const n=Cu[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return Cu[e]=r;r=al(r);for(let s=0;s<Pm.length;s++){const i=Pm[s]+r;if(i in t)return Cu[e]=i}return e}const km="http://www.w3.org/1999/xlink";function Om(t,e,n,r,s,i=zT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(km,e.slice(6,e.length)):t.setAttributeNS(km,e,n):n==null||i&&!Fy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":vn(n)?String(n):n)}function xm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Fy(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function kr(t,e,n,r){t.addEventListener(e,n,r)}function YA(t,e,n,r){t.removeEventListener(e,n,r)}const Nm=Symbol("_vei");function XA(t,e,n,r,s=null){const i=t[Nm]||(t[Nm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=JA(e);if(r){const u=i[e]=t1(r,s);kr(t,a,u,l)}else o&&(YA(t,a,o,l),i[e]=void 0)}}const Dm=/(?:Once|Passive|Capture)$/;function JA(t){let e;if(Dm.test(t)){e={};let r;for(;r=t.match(Dm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Os(t.slice(2)),e]}let Pu=0;const ZA=Promise.resolve(),e1=()=>Pu||(ZA.then(()=>Pu=0),Pu=Date.now());function t1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(n1(r,n.value),e,5,[r])};return n.value=t,n.attached=e1(),n}function n1(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Lm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,r1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?qA(t,r,o):e==="style"?GA(t,n,r):ea(e)?kf(e)||XA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):s1(t,e,r,o))?(xm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Om(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?xm(t,hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Om(t,e,r,o))};function s1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lm(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lm(e)&&ze(n)?!1:e in t}const yi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ii(e,n):e};function i1(t){t.target.composing=!0}function Mm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sr=Symbol("_assign"),OU={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sr]=yi(s);const i=r||s.props&&s.props.type==="number";kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=wc(a)),t[sr](a)}),n&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",i1),kr(t,"compositionend",Mm),kr(t,"change",Mm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sr]=yi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?wc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},xU={deep:!0,created(t,e,n){t[sr]=yi(n),kr(t,"change",()=>{const r=t._modelValue,s=Bo(t),i=t.checked,o=t[sr];if(le(r)){const a=Nf(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Oi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(tE(t,i))})},mounted:Vm,beforeUpdate(t,e,n){t[sr]=yi(n),Vm(t,e,n)}};function Vm(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Nf(e,r.props.value)>-1;else if(Oi(e))s=e.has(r.props.value);else{if(e===n)return;s=na(e,tE(t,!0))}t.checked!==s&&(t.checked=s)}const NU={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Oi(e);kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wc(Bo(o)):Bo(o));t[sr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Bn(()=>{t._assigning=!1})}),t[sr]=yi(r)},mounted(t,{value:e}){Fm(t,e)},beforeUpdate(t,e,n){t[sr]=yi(n)},updated(t,{value:e}){t._assigning||Fm(t,e)}};function Fm(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Oi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Bo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Nf(e,a)>-1}else o.selected=e.has(a);else if(na(Bo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Bo(t){return"_value"in t?t._value:t.value}function tE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const o1=["ctrl","shift","alt","meta"],a1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>o1.some(n=>t[`${n}Key`]&&!e.includes(n))},DU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=a1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},nE=st({patchProp:r1},VA);let yo,Um=!1;function c1(){return yo||(yo=iA(nE))}function l1(){return yo=Um?yo:oA(nE),Um=!0,yo}const u1=(...t)=>{const e=c1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},h1=(...t)=>{const e=l1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(s)return n(s,!0,rE(s))},e};function rE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sE(t){return ze(t)?document.querySelector(t):t}const f1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,d1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,p1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function m1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){g1(t);return}return e}function g1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function jo(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!p1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(f1.test(t)||d1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,m1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const _1=/#/g,y1=/&/g,v1=/\//g,E1=/=/g,Xf=/\+/g,w1=/%5e/gi,b1=/%60/gi,T1=/%7c/gi,I1=/%20/gi;function A1(t){return encodeURI(""+t).replace(T1,"|")}function Eh(t){return A1(typeof t=="string"?t:JSON.stringify(t)).replace(Xf,"%2B").replace(I1,"+").replace(_1,"%23").replace(y1,"%26").replace(b1,"`").replace(w1,"^").replace(v1,"%2F")}function ku(t){return Eh(t).replace(E1,"%3D")}function xc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function R1(t){return xc(t.replace(Xf," "))}function S1(t){return xc(t.replace(Xf," "))}function iE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=R1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=S1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function C1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ku(t)}=${Eh(n)}`).join("&"):`${ku(t)}=${Eh(e)}`:ku(t)}function P1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>C1(e,t[e])).filter(Boolean).join("&")}const k1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,O1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,x1=/^([/\\]\s*){2,}[^/\\]/,N1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,D1=/\/$|\/\?|\/#/,L1=/^\.?\//;function pr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?k1.test(t):O1.test(t)||(e.acceptRelative?x1.test(t):!1)}function M1(t){return!!t&&N1.test(t)}function wh(t="",e){return e?D1.test(t):t.endsWith("/")}function yl(t="",e){if(!e)return(wh(t)?t.slice(0,-1):t)||"/";if(!wh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Nc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(wh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function V1(t=""){return t.startsWith("/")}function Bm(t=""){return V1(t)?t:"/"+t}function F1(t,e){if(aE(e)||pr(t))return t;const n=yl(e);return t.startsWith(n)?t:vl(n,t)}function jm(t,e){if(aE(e))return t;const n=yl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function oE(t,e){const n=j1(t),r={...iE(n.search),...e};return n.search=P1(r),$1(n)}function aE(t){return!t||t==="/"}function U1(t){return t&&t!=="/"}function vl(t,...e){let n=t||"";for(const r of e.filter(s=>U1(s)))if(n){const s=r.replace(L1,"");n=Nc(n)+s}else n=r;return n}function cE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&pr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function B1(t,e,n={}){return n.trailingSlash||(t=Nc(t),e=Nc(e)),n.leadingSlash||(t=Bm(t),e=Bm(e)),n.encoding||(t=xc(t),e=xc(e)),t===e}const lE=Symbol.for("ufo:protocolRelative");function j1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!pr(t,{acceptRelative:!0}))return $m(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=$m(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[lE]:!r}}function $m(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function $1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[lE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class H1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function q1(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new H1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,w]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[w]}});return a}const z1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Hm(t="GET"){return z1.has(t.toUpperCase())}function W1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const K1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),G1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Q1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return G1.test(e)?"json":K1.has(e)||e.startsWith("text/")?"text":"blob"}function Y1(t,e,n,r){const s=X1((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function X1(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function $a(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const J1=new Set([408,409,425,429,500,502,503,504]),Z1=new Set([101,204,205,304]);function uE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=Hm(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):J1.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=q1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:Y1(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await $a(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=F1(h.request,h.options.baseURL)),h.options.query&&(h.request=oE(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&Hm(h.options.method)&&(W1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const g=new r;d=setTimeout(()=>{const w=new Error("[TimeoutError]: The operation was aborted due to timeout");w.name="TimeoutError",w.code=23,g.abort(w)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await $a(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!Z1.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||Q1(h.response.headers.get("content-type")||"");switch(g){case"json":{const w=await h.response.text(),k=h.options.parseResponse||jo;h.response._data=k(w);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await $a(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await $a(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>uE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Dc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),eR=Dc.fetch?(...t)=>Dc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),tR=Dc.Headers,nR=Dc.AbortController,rR=uE({fetch:eR,Headers:tR,AbortController:nR}),sR=rR,iR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Lc=iR().app,oR=()=>Lc.baseURL,aR=()=>Lc.buildAssetsDir,Jf=(...t)=>cE(Zf(),aR(),...t),Zf=(...t)=>{const e=Lc.cdnURL||Lc.baseURL;return t.length?cE(e,...t):e};globalThis.__buildAssetsURL=Jf,globalThis.__publicAssetsURL=Zf;globalThis.$fetch||(globalThis.$fetch=sR.create({baseURL:oR()}));function bh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?bh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const cR={run:t=>t()},lR=()=>cR,hE=typeof console.createTask<"u"?console.createTask:lR;function uR(t,e){const n=e.shift(),r=hE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function hR(t,e){const n=e.shift(),r=hE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Ou(t,e){for(const n of[...t])n(e)}class fR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=bh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=bh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(uR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(hR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Ou(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Ou(this._after,s)}):(this._after&&s&&Ou(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function fE(){return new fR}function dR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Th.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Th.delete(u)}}}}function pR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=dR({...t,...r})),e[n]}}}const Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},qm="__unctx__",mR=Mc[qm]||(Mc[qm]=pR()),gR=(t,e={})=>mR.get(t,e),zm="__unctx_async_handlers__",Th=Mc[zm]||(Mc[zm]=new Set);function ci(t){const e=[];for(const s of Th){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ih={name:"page",mode:"out-in"},_R=!1,yR=!1,vR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},ER=null,wR="#__nuxt",dE="nuxt-app",Wm=36e5,bR="vite:preloadError";function pE(t=dE){return gR(t,{asyncContext:!1})}const TR="__nuxt_plugin";function IR(t){var s;let e=0;const n={_id:t.id||dE||"nuxt-app",_scope:Lf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.2"},get vue(){return n.vueApp.version}},payload:Jn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Jn({}),state:fr({}),once:new Set,_errors:Jn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!ra()?n._scope.run(()=>Km(n,i)):Km(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Jn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=fE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ha(n,a,o),Ha(n.vueApp.config.globalProperties,a,o)},Ha(n.vueApp,"$nuxt",n),Ha(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(bR,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||De;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function AR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function RR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function SR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=RR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)AR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[TR]:!0,_name:e})}function Km(t,e,n){const r=()=>e();return pE(t._id).set(t),t.vueApp.runWithContext(r)}function CR(t){var n;let e;return Wf()&&(e=(n=gl())==null?void 0:n.appContext.app.$nuxt),e=e||pE(t).tryUse(),e||null}function De(t){const e=CR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function xs(t){return De().$config}function Ha(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function PR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||kR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=OR(u,s)}i=a+1}return n}function kR(t){return t.includes("%")?decodeURIComponent(t):t}function OR(t,e){try{return e(t)}catch{return t}}const qa=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Gm(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!qa.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!qa.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!qa.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!qa.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!xR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function xR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Qm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Ym(t,e){e?e={...Qm,...e}:e=Qm;const n=mE(e);return n.dispatch(t),n.toString()}const NR=Object.freeze(["prototype","__proto__","constructor"]);function mE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!Xm(s)&&(h=NR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=mE(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),Xm(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const gE="[native code] }",DR=gE.length;function Xm(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-DR)===gE}function LR(t,e,n={}){return t===e||Ym(t,n)===Ym(e,n)}function MR(t,e){return{ctx:{table:t},matchAll:n=>yE(n,t)}}function _E(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,_E(s)])):new Map(Object.entries(t[n]));return e}function VR(t){return MR(_E(t))}function yE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Jm(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Jm(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...yE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Jm(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function xu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ah(t,e,n=".",r){if(!xu(e))return Ah(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:xu(o)&&xu(s[i])?s[i]=Ah(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function FR(t){return(...e)=>e.reduce((n,r)=>Ah(n,r,"",t),{})}const vE=FR();function UR(t,e){try{return e in t}catch{return!1}}class Rh extends Error{constructor(n,r={}){super(n,r);rn(this,"statusCode",500);rn(this,"fatal",!1);rn(this,"unhandled",!1);rn(this,"statusMessage");rn(this,"data");rn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Ch(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=EE(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}rn(Rh,"__h3_error__",!0);function Sh(t){if(typeof t=="string")return new Rh(t);if(BR(t))return t;const e=new Rh(t.message??t.statusMessage??"",{cause:t.cause||t});if(UR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Ch(t.statusCode,e.statusCode):t.status&&(e.statusCode=Ch(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;EE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function BR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const jR=/[^\u0009\u0020-\u007E]/g;function EE(t=""){return t.replace(jR,"")}function Ch(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const wE=Symbol("layout-meta"),ca=Symbol("route"),wt=()=>{var t;return(t=De())==null?void 0:t.$router},ed=()=>Wf()?Nt(ca,De()._route):De()._route;function LU(t){return t}const $R=()=>{try{if(De()._processingMiddleware)return!0}catch{return!1}return!1},HR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Ph(t):wt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=pr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&M1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=$R();if(!s&&i)return e!=null&&e.replace?typeof t=="string"?{path:t,replace:!0}:{...t,replace:!0}:t;const o=wt(),a=De();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Ph(t){return oE(t.path||"",t.query||{})+(t.hash||"")}const bE="__nuxt_error",El=()=>vI(De().payload,"error"),Zs=t=>{const e=wl(t);try{const n=De(),r=El();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},TE=async(t={})=>{const e=De(),n=El();e.callHook("app:error:cleared",t),t.redirect&&await wt().replace(t.redirect),n.value=ER},qR=t=>!!t&&typeof t=="object"&&bE in t,wl=t=>{const e=Sh(t);return Object.defineProperty(e,bE,{value:!0,configurable:!1,writable:!1}),e};function Zm(t){const e=WR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const zR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function WR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=zR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const KR=-1,GR=-2,QR=-3,YR=-4,XR=-5,JR=-6;function ZR(t,e){return eS(JSON.parse(t),e)}function eS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===KR)return;if(i===QR)return NaN;if(i===YR)return 1/0;if(i===XR)return-1/0;if(i===JR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],w=a[1],k=Zm(w),x=new g(k);r[i]=x;break}case"ArrayBuffer":{const g=a[1],w=Zm(g);r[i]=w;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==GR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const tS=new Set(["title","titleTemplate","script","style","noscript"]),oc=new Set(["base","meta","link","style","script","noscript"]),nS=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),rS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),IE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),sS=typeof window<"u";function Vc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function kh(t){if(t._h)return t._h;if(t._d)return Vc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Vc(e)}function iS(t,e){return t instanceof Promise?t.then(e):e(t)}function Oh(t,e,n,r){const s=r||RE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Oh(t,e,n,o));const i={tag:t,props:s};for(const o of IE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||tS.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function oS(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function AE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=oS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,AE(t,e,n,s)));if(!e&&!IE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function RE(t,e=!1){const n=AE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const aS=10;function SE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,SE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function cS(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!nS.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Oh(s,o,t));continue}e.push(Oh(s,i,t))}}if(e.length===0)return[];const r=[];return iS(SE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<aS)+i,s)))}const eg=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),tg={base:-10,title:10},ng={critical:-80,high:-10,low:20};function Fc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in tg&&(n=tg[t.tag]),e&&e in ng?n+ng[e]:n}const lS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],uS=["name","property","http-equiv"];function CE(t){const{props:e,tag:n}=t;if(rS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of uS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Cr="%separator";function hS(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const fS=new RegExp(`${Cr}(?:\\s*${Cr})*`,"g");function za(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Cr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Cr||!i.includes(a))return a;const l=hS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Cr)&&(t=t.slice(0,-Cr.length)),t.startsWith(Cr)&&(t=t.slice(Cr.length)),t=t.replace(fS,n).trim()),t}function rg(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function PE(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:oc.has(p.tag)?kh(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const g of["body","head"]){const w=(d=n[g])==null?void 0:d.children;for(const k of w){const x=k.tagName.toLowerCase();if(!oc.has(x))continue;const N={tag:x,props:await RE(k.getAttributeNames().reduce((D,M)=>({...D,[M]:k.getAttribute(M)}),{})),innerHTML:k.innerHTML},C=CE(N);let v=C,R=1;for(;v&&p.has(v);)v=`${C}:${R++}`;v&&(N._d=v,p.add(v)),o.elMap[k.getAttribute("data-hid")||kh(N)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,g,w){const k=`${p}:${g}`;o.sideEffects[k]=w,delete o.pendingSideEffects[k]}function l({id:p,$el:g,tag:w}){const k=w.tag.endsWith("Attrs");if(o.elMap[p]=g,k||(w.textContent&&w.textContent!==g.textContent&&(g.textContent=w.textContent),w.innerHTML&&w.innerHTML!==g.innerHTML&&(g.innerHTML=w.innerHTML),a(p,"el",()=>{var x;(x=o.elMap[p])==null||x.remove(),delete o.elMap[p]})),w._eventHandlers)for(const x in w._eventHandlers)Object.prototype.hasOwnProperty.call(w._eventHandlers,x)&&g.getAttribute(`data-${x}`)!==""&&((w.tag==="bodyAttrs"?n.defaultView:g).addEventListener(x.substring(2),w._eventHandlers[x].bind(g)),g.setAttribute(`data-${x}`,""));for(const x in w.props){if(!Object.prototype.hasOwnProperty.call(w.props,x))continue;const N=w.props[x],C=`attr:${x}`;if(x==="class"){if(!N)continue;for(const v of N.split(" "))k&&a(p,`${C}:${v}`,()=>g.classList.remove(v)),!g.classList.contains(v)&&g.classList.add(v)}else if(x==="style"){if(!N)continue;for(const v of N.split(";")){const R=v.indexOf(":"),D=v.substring(0,R).trim(),M=v.substring(R+1).trim();a(p,`${C}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,M)}}else g.getAttribute(x)!==N&&g.setAttribute(x,N===!0?"":String(N)),k&&a(p,C,()=>g.removeAttribute(x))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:g,shouldRender:w,id:k}=p;if(w){if(g.tag==="title"){n.title=g.textContent;continue}p.$el=p.$el||o.elMap[k],p.$el?l(p):oc.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function dS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>PE(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function pS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{dS(i,t)}}}}}const mS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),gS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=CE(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||kh(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&mS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Fc(r)>Fc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&oc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},_S=new Set(["script","link","bodyAttrs"]),yS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!_S.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&eg.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Vc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);eg.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),vS=new Set(["link","style","script","noscript"]),ES={hooks:{"tag:normalise":({tag:t})=>{t.key&&vS.has(t.tag)&&(t.props["data-hid"]=t._h=Vc(t.key))}}},wS={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},bS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of lS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Fc(n),i=Fc(r);return s<i?-1:s>i?1:n._p-r._p})}}},TS={meta:"content",link:"href",htmlAttrs:"lang"},IS=["innerHTML","textContent"],AS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=za(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=TS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=za(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of IS)typeof a[u]=="string"&&(a[u]=za(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=za(n.textContent,t._templateParams,t._separator))}}}),RS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=rg(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=rg(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},SS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};function CS(t={}){const e=PS(t);return e.use(pS()),e}function sg(t,e){return!t||t==="server"&&e||t==="client"&&!e}function PS(t={}){const e=fE();e.addHooks(t.hooks||{}),t.document=t.document||(sS?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),sg(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return sg(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const p of i)p._i===h._i&&(p.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await cS(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[gS,wS,yS,ES,bS,AS,RS,SS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}const kS=Xv[0]==="3";function OS(t){return typeof t=="function"?t():Qe(t)}function xh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=OS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>xh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=xh(e[r])}return n}return e}const xS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=xh(e.input)}}},NS="usehead";function DS(t){return{install(n){kS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(NS,t))}}.install}function LS(t={}){t.domDelayFn=t.domDelayFn||(n=>Bn(()=>setTimeout(()=>n(),0)));const e=CS(t);return e.use(xS),e.install=DS(e),e}const MS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},VS="__unhead_injection_handler__";function FS(t){MS[VS]=t}const US="modulepreload",BS=function(t,e){return new URL(t,e).href},ig={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=BS(u,r),u in ig)return;ig[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const k=o[w];if(k.href===u&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":US,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((w,k)=>{g.addEventListener("load",w),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let ac,cc;function jS(){return ac=$fetch(Jf(`builds/meta/${xs().app.buildId}.json`),{responseType:"json"}),ac.then(t=>{cc=VR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),ac}function bl(){return ac||jS()}async function td(t){const e=typeof t=="string"?t:t.path;if(await bl(),!cc)return console.error("[nuxt] Error creating app manifest matcher.",cc),{};try{return vE({},...cc.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function og(t,e={}){const n=await HS(t,e),r=De(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=OE(t).then(i=>i?kE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const $S="_payload.json";async function HS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||pr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=xs(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await OE(t)?i:r.app.baseURL;return vl(o,n.pathname,$S+(s?`?${s}`:""))}async function kE(t){const e=fetch(t).then(n=>n.text().then(xE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function OE(t=ed().path){const e=De();return t=yl(t),(await bl()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await td({path:t});return!!r.prerender&&!r.redirect})}let ps=null;async function qS(){var r;if(ps)return ps;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await xE(t.textContent||""),n=t.dataset.src?await kE(t.dataset.src):void 0;return ps={...e,...n,...window.__NUXT__},(r=ps.config)!=null&&r.public&&(ps.config.public=fr(ps.config.public)),ps}async function xE(t){return await ZR(t,De()._payloadRevivers)}function zS(t,e){De()._payloadRevivers[t]=e}const WS=[["NuxtError",t=>wl(t)],["EmptyShallowRef",t=>No(t==="_"?void 0:t==="0n"?BigInt(0):jo(t))],["EmptyRef",t=>Et(t==="_"?void 0:t==="0n"?BigInt(0):jo(t))],["ShallowRef",t=>No(t)],["ShallowReactive",t=>Jn(t)],["Ref",t=>Et(t)],["Reactive",t=>fr(t)]],KS=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of WS)zS(r,s);Object.assign(t.payload,([e,n]=ci(()=>t.runWithContext(qS)),e=await e,n(),e)),window.__NUXT__=t.payload}});let GS;function QS(){return GS}function YS(t){return typeof t=="function"?t():Qe(t)}function Nh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=YS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Nh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Nh(e[r])}return n}return e}const XS="usehead",ag=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cg="__unhead_injection_handler__";function JS(){return cg in ag?ag[cg]():Nt(XS)||QS()}function lg(t,e={}){const n=e.head||JS();if(n)return n.ssr?n.push(t,e):ZS(n,t,e)}function ZS(t,e,n={}){const r=Et(!1),s=Et({});uA(()=>{s.value=r.value?{}:Nh(e)});const i=t.push(s.value,n);return yn(s,a=>{i.patch(a)}),gl()&&(oa(()=>{i.dispose()}),_v(()=>{r.value=!0}),gv(()=>{r.value=!1})),i}const eC=[],tC=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=LS({plugins:eC});FS(()=>De().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await PE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof document<"u";function NE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&NE(t.default)}const Oe=Object.assign;function Nu(t,e){const n={};for(const r in e){const s=e[r];n[r]=wn(s)?s.map(t):t(s)}return n}const vo=()=>{},wn=Array.isArray,DE=/#/g,rC=/&/g,sC=/\//g,iC=/=/g,oC=/\?/g,LE=/\+/g,aC=/%5B/g,cC=/%5D/g,ME=/%5E/g,lC=/%60/g,VE=/%7B/g,uC=/%7C/g,FE=/%7D/g,hC=/%20/g;function nd(t){return encodeURI(""+t).replace(uC,"|").replace(aC,"[").replace(cC,"]")}function fC(t){return nd(t).replace(VE,"{").replace(FE,"}").replace(ME,"^")}function Dh(t){return nd(t).replace(LE,"%2B").replace(hC,"+").replace(DE,"%23").replace(rC,"%26").replace(lC,"`").replace(VE,"{").replace(FE,"}").replace(ME,"^")}function dC(t){return Dh(t).replace(iC,"%3D")}function pC(t){return nd(t).replace(DE,"%23").replace(oC,"%3F")}function mC(t){return t==null?"":pC(t).replace(sC,"%2F")}function $o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gC=/\/$/,_C=t=>t.replace(gC,"");function Du(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=wC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:$o(o)}}function yC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ug(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vi(e.matched[r],n.matched[s])&&UE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function UE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!EC(t[n],e[n]))return!1;return!0}function EC(t,e){return wn(t)?hg(t,e):wn(e)?hg(e,t):t===e}function hg(t,e){return wn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ho;(function(t){t.pop="pop",t.push="push"})(Ho||(Ho={}));var Eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Eo||(Eo={}));function bC(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_C(t)}const TC=/^[^#]+#/;function IC(t,e){return t.replace(TC,"#")+e}function AC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Tl=()=>({left:window.scrollX,top:window.scrollY});function RC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=AC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fg(t,e){return(history.state?history.state.position-e:-1)+t}const Lh=new Map;function SC(t,e){Lh.set(t,e)}function CC(t){const e=Lh.get(t);return Lh.delete(t),e}let PC=()=>location.protocol+"//"+location.host;function BE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ug(l,"")}return ug(n,t)+r+s}function kC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=BE(t,location),w=n.value,k=e.value;let x=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}x=k?p.position-k.position:0}else r(g);s.forEach(N=>{N(n.value,w,{delta:x,type:Ho.pop,direction:x?x>0?Eo.forward:Eo.back:Eo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Tl()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function dg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Tl():null}}function OC(t){const{history:e,location:n}=window,r={value:BE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:PC()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Oe({},e.state,dg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:Tl()});i(h.current,h,!0);const d=Oe({},dg(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function xC(t){t=bC(t);const e=OC(t),n=kC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:IC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function NC(t){return typeof t=="string"||t&&typeof t=="object"}function jE(t){return typeof t=="string"||typeof t=="symbol"}const $E=Symbol("");var pg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pg||(pg={}));function Ei(t,e){return Oe(new Error,{type:t,[$E]:!0},e)}function Wn(t,e){return t instanceof Error&&$E in t&&(e==null||!!(t.type&e))}const mg="[^/]+?",DC={sensitive:!1,strict:!1,start:!0,end:!0},LC=/[.+*?^${}()[\]/\\]/g;function MC(t,e){const n=Oe({},DC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(LC,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:k,optional:x,regexp:N}=p;i.push({name:w,repeatable:k,optional:x});const C=N||mg;if(C!==mg){g+=10;try{new RegExp(`(${C})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${w}" (${C}): `+R.message)}}let v=k?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(v=x&&u.length<2?`(?:/${v})`:"/"+v),x&&(v+="?"),s+=v,g+=20,x&&(g+=-8),k&&(g+=-20),C===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",w=i[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:w,repeatable:k,optional:x}=g,N=w in u?u[w]:"";if(wn(N)&&!k)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const C=wn(N)?N.join("/"):N;if(!C)if(x)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);h+=C}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function VC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function HE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=VC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gg(r))return 1;if(gg(s))return-1}return s.length-r.length}function gg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const FC={type:0,value:""},UC=/[a-zA-Z0-9_]/;function BC(t){if(!t)return[[]];if(t==="/")return[[FC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:UC.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function jC(t,e,n){const r=MC(BC(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $C(t,e){const n=[],r=new Map;e=Eg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const w=!g,k=yg(d);k.aliasOf=g&&g.record;const x=Eg(e,d),N=[k];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)N.push(yg(Oe({},k,{components:g?g.record.components:k.components,path:D,aliasOf:g?g.record:k})))}let C,v;for(const R of N){const{path:D}=R;if(p&&D[0]!=="/"){const M=p.record.path,T=M[M.length-1]==="/"?"":"/";R.path=p.record.path+(D&&T+D)}if(C=jC(R,p,x),g?g.alias.push(C):(v=v||C,v!==C&&v.alias.push(C),w&&d.name&&!vg(C)&&o(d.name)),qE(C)&&l(C),k.children){const M=k.children;for(let T=0;T<M.length;T++)i(M[T],C,g&&g.children[T])}g=g||C}return v?()=>{o(v)}:vo}function o(d){if(jE(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=zC(d,n);n.splice(p,0,d),d.record.name&&!vg(d)&&r.set(d.record.name,d)}function u(d,p){let g,w={},k,x;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Ei(1,{location:d});x=g.record.name,w=Oe(_g(p.params,g.keys.filter(v=>!v.optional).concat(g.parent?g.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),d.params&&_g(d.params,g.keys.map(v=>v.name))),k=g.stringify(w)}else if(d.path!=null)k=d.path,g=n.find(v=>v.re.test(k)),g&&(w=g.parse(k),x=g.record.name);else{if(g=p.name?r.get(p.name):n.find(v=>v.re.test(p.path)),!g)throw Ei(1,{location:d,currentLocation:p});x=g.record.name,w=Oe({},p.params,d.params),k=g.stringify(w)}const N=[];let C=g;for(;C;)N.unshift(C.record),C=C.parent;return{name:x,path:k,params:w,matched:N,meta:qC(N)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function _g(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function yg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:HC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function HC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function vg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qC(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Eg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function zC(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;HE(t,e[i])<0?r=i:n=i+1}const s=WC(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function WC(t){let e=t;for(;e=e.parent;)if(qE(e)&&HE(t,e)===0)return e}function qE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function KC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(LE," "),o=i.indexOf("="),a=$o(o<0?i:i.slice(0,o)),l=o<0?null:$o(i.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function wg(t){let e="";for(let n in t){const r=t[n];if(n=dC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(r)?r.map(i=>i&&Dh(i)):[r&&Dh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function GC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const QC=Symbol(""),bg=Symbol(""),rd=Symbol(""),sd=Symbol(""),Mh=Symbol("");function to(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ei(4,{from:n,to:e})):p instanceof Error?l(p):NC(p)?l(Ei(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Lu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(NE(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Pr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=nC(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Pr(g,n,r,o,a,s)()}))}}return i}function Tg(t){const e=Nt(rd),n=Nt(sd),r=Ue(()=>{const l=Qe(t.to);return e.resolve(l)}),s=Ue(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(vi.bind(null,h));if(p>-1)return p;const g=Ig(l[u-2]);return u>1&&Ig(h)===g&&d[d.length-1].path!==g?d.findIndex(vi.bind(null,l[u-2])):p}),i=Ue(()=>s.value>-1&&eP(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&UE(n.params,r.value.params));function a(l={}){if(ZC(l)){const u=e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(vo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function YC(t){return t.length===1?t[0]:t}const XC=Tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tg,setup(t,{slots:e}){const n=fr(Tg(t)),{options:r}=Nt(rd),s=Ue(()=>({[Ag(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ag(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&YC(e.default(n));return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),JC=XC;function ZC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!wn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ig(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ag=(t,e,n)=>t??e??n,tP=Tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Mh),s=Ue(()=>t.route||r.value),i=Nt(bg,0),o=Ue(()=>{let u=Qe(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ue(()=>s.value.matched[o.value]);ws(bg,Ue(()=>o.value+1)),ws(QC,a),ws(Mh,s);const l=Et();return yn(()=>[l.value,a.value,t.name],([u,h,d],[p,g,w])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!vi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Rg(n.default,{Component:p,route:u});const g=d.props[h],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=vt(p,Oe({},w,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Rg(n.default,{Component:x,route:u})||x}}});function Rg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zE=tP;function nP(t){const e=$C(t.routes,t),n=t.parseQuery||KC,r=t.stringifyQuery||wg,s=t.history,i=to(),o=to(),a=to(),l=No(pn);let u=pn;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Nu.bind(null,B=>""+B),d=Nu.bind(null,mC),p=Nu.bind(null,$o);function g(B,ee){let X,re;return jE(B)?(X=e.getRecordMatcher(B),re=ee):re=B,e.addRoute(re,X)}function w(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function k(){return e.getRoutes().map(B=>B.record)}function x(B){return!!e.getRecordMatcher(B)}function N(B,ee){if(ee=Oe({},ee||l.value),typeof B=="string"){const O=Du(n,B,ee.path),V=e.resolve({path:O.path},ee),$=s.createHref(O.fullPath);return Oe(O,V,{params:p(V.params),hash:$o(O.hash),redirectedFrom:void 0,href:$})}let X;if(B.path!=null)X=Oe({},B,{path:Du(n,B.path,ee.path).path});else{const O=Oe({},B.params);for(const V in O)O[V]==null&&delete O[V];X=Oe({},B,{params:d(O)}),ee.params=d(ee.params)}const re=e.resolve(X,ee),Te=B.hash||"";re.params=h(p(re.params));const Le=yC(r,Oe({},B,{hash:fC(Te),path:re.path})),A=s.createHref(Le);return Oe({fullPath:Le,hash:Te,query:r===wg?GC(B.query):B.query||{}},re,{redirectedFrom:void 0,href:A})}function C(B){return typeof B=="string"?Du(n,B,l.value.path):Oe({},B)}function v(B,ee){if(u!==B)return Ei(8,{from:ee,to:B})}function R(B){return T(B)}function D(B){return R(Oe(C(B),{replace:!0}))}function M(B){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(B):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=C(re):{path:re},re.params={}),Oe({query:B.query,hash:B.hash,params:re.path!=null?{}:B.params},re)}}function T(B,ee){const X=u=N(B),re=l.value,Te=B.state,Le=B.force,A=B.replace===!0,O=M(X);if(O)return T(Oe(C(O),{state:typeof O=="object"?Oe({},Te,O.state):Te,force:Le,replace:A}),ee||X);const V=X;V.redirectedFrom=ee;let $;return!Le&&vC(r,re,X)&&($=Ei(16,{to:V,from:re}),tn(re,re,!0,!1)),($?Promise.resolve($):b(V,re)).catch(U=>Wn(U)?Wn(U,2)?U:fn(U):ne(U,V,re)).then(U=>{if(U){if(Wn(U,2))return T(Oe({replace:A},C(U.to),{state:typeof U.to=="object"?Oe({},Te,U.to.state):Te,force:Le}),ee||V)}else U=S(V,re,!0,A,Te);return P(V,re,U),U})}function y(B,ee){const X=v(B,ee);return X?Promise.reject(X):Promise.resolve()}function _(B){const ee=gr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function b(B,ee){let X;const[re,Te,Le]=rP(B,ee);X=Lu(re.reverse(),"beforeRouteLeave",B,ee);for(const O of re)O.leaveGuards.forEach(V=>{X.push(Pr(V,B,ee))});const A=y.bind(null,B,ee);return X.push(A),Ht(X).then(()=>{X=[];for(const O of i.list())X.push(Pr(O,B,ee));return X.push(A),Ht(X)}).then(()=>{X=Lu(Te,"beforeRouteUpdate",B,ee);for(const O of Te)O.updateGuards.forEach(V=>{X.push(Pr(V,B,ee))});return X.push(A),Ht(X)}).then(()=>{X=[];for(const O of Le)if(O.beforeEnter)if(wn(O.beforeEnter))for(const V of O.beforeEnter)X.push(Pr(V,B,ee));else X.push(Pr(O.beforeEnter,B,ee));return X.push(A),Ht(X)}).then(()=>(B.matched.forEach(O=>O.enterCallbacks={}),X=Lu(Le,"beforeRouteEnter",B,ee,_),X.push(A),Ht(X))).then(()=>{X=[];for(const O of o.list())X.push(Pr(O,B,ee));return X.push(A),Ht(X)}).catch(O=>Wn(O,8)?O:Promise.reject(O))}function P(B,ee,X){a.list().forEach(re=>_(()=>re(B,ee,X)))}function S(B,ee,X,re,Te){const Le=v(B,ee);if(Le)return Le;const A=ee===pn,O=Ks?history.state:{};X&&(re||A?s.replace(B.fullPath,Oe({scroll:A&&O&&O.scroll},Te)):s.push(B.fullPath,Te)),l.value=B,tn(B,ee,X,A),fn()}let I;function ge(){I||(I=s.listen((B,ee,X)=>{if(!In.listening)return;const re=N(B),Te=M(re);if(Te){T(Oe(Te,{replace:!0,force:!0}),re).catch(vo);return}u=re;const Le=l.value;Ks&&SC(fg(Le.fullPath,X.delta),Tl()),b(re,Le).catch(A=>Wn(A,12)?A:Wn(A,2)?(T(Oe(C(A.to),{force:!0}),re).then(O=>{Wn(O,20)&&!X.delta&&X.type===Ho.pop&&s.go(-1,!1)}).catch(vo),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(A,re,Le))).then(A=>{A=A||S(re,Le,!1),A&&(X.delta&&!Wn(A,8)?s.go(-X.delta,!1):X.type===Ho.pop&&Wn(A,20)&&s.go(-1,!1)),P(re,Le,A)}).catch(vo)}))}let ve=to(),Z=to(),se;function ne(B,ee,X){fn(B);const re=Z.list();return re.length?re.forEach(Te=>Te(B,ee,X)):console.error(B),Promise.reject(B)}function We(){return se&&l.value!==pn?Promise.resolve():new Promise((B,ee)=>{ve.add([B,ee])})}function fn(B){return se||(se=!B,ge(),ve.list().forEach(([ee,X])=>B?X(B):ee()),ve.reset()),B}function tn(B,ee,X,re){const{scrollBehavior:Te}=t;if(!Ks||!Te)return Promise.resolve();const Le=!X&&CC(fg(B.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return Bn().then(()=>Te(B,ee,Le)).then(A=>A&&RC(A)).catch(A=>ne(A,B,ee))}const Ke=B=>s.go(B);let Ge;const gr=new Set,In={currentRoute:l,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:N,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:We,install(B){const ee=this;B.component("RouterLink",JC),B.component("RouterView",zE),B.config.globalProperties.$router=ee,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),Ks&&!Ge&&l.value===pn&&(Ge=!0,R(s.location).catch(Te=>{}));const X={};for(const Te in pn)Object.defineProperty(X,Te,{get:()=>l.value[Te],enumerable:!0});B.provide(rd,ee),B.provide(sd,Jn(X)),B.provide(Mh,l);const re=B.unmount;gr.add(B),B.unmount=function(){gr.delete(B),gr.size<1&&(u=pn,I&&I(),I=null,l.value=pn,Ge=!1,se=!1),re()}}};function Ht(B){return B.reduce((ee,X)=>ee.then(()=>_(X)),Promise.resolve())}return In}function rP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>vi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>vi(u,l))||s.push(l))}return[n,r,s]}function sP(t){return Nt(sd)}const iP=/(:\w+)\([^)]+\)/g,oP=/(:\w+)[?+*]/g,aP=/:\w+/g,cP=(t,e)=>e.path.replace(iP,"$1").replace(oP,"$1").replace(aP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Vh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&cP(t.route,n));return typeof r=="function"?r(t.route):r},lP=(t,e)=>({default:()=>t?vt(VI,t===!0?{}:t,e):e});function id(t){return Array.isArray(t)?t:[t]}const uP={middleware:"auth"},hP={middleware:"auth"},fP={middleware:"auth"};const Mu=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./B19-5ufz.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./CzycQ6k0.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./Cv2K4kdQ.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:uP,component:()=>ke(()=>import("./BfJDudjD.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"Admin",path:"/Admin",meta:hP,component:()=>ke(()=>import("./Da2LoXlF.js"),__vite__mapDeps([3,4]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./A6xEzgzi.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./D978tghd.js"),[],import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:fP,component:()=>ke(()=>import("./ZDtejHgb.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./DQxVaht-.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./B8cX3-PF.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./DXEJIN3e.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./2doYF_QL.js"),[],import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./D5idqsGu.js"),[],import.meta.url)},{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./BnFEuNYF.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./Co3lqQqh.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./Bi_AaYvI.js"),__vite__mapDeps([16,8,9,17]),import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./HfP1JSFk.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./C4nAI_TC.js"),__vite__mapDeps([20,8,9]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./BZCw00Ti.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./C8bTWqY_.js"),__vite__mapDeps([21,1,22]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./6g7dMiwl.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./CT9x4xqa.js"),__vite__mapDeps([23,8,9,24]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./CXWJZgw6.js"),__vite__mapDeps([25,8,9,26]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./Cn_FAXZ_.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./WeyQdF4M.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./DJ9Cebn9.js"),__vite__mapDeps([29,8,9]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./C7UdRcaz.js"),__vite__mapDeps([30,8,9]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./cXabxfV9.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./b2pOHY9Z.js"),__vite__mapDeps([31,8,9]),import.meta.url)}],WE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?vt(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),dP=/(:\w+)\([^)]+\)/g,pP=/(:\w+)[?+*]/g,mP=/:\w+/g;function Sg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(dP,"$1").replace(pP,"$1").replace(mP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function gP(t,e){return t===e||e===pn?!1:Sg(t)!==Sg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const _P={scrollBehavior(t,e,n){var u;const r=De(),s=((u=wt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&gP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Cg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Ih),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Cg(t.hash),behavior:s}),h(i)})})}};function Cg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const yP={hashMode:!1,scrollBehaviorType:"auto"},on={...yP,..._P},vP=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=De(),s=wt(),i=([e,n]=ci(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=wl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Zs(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},EP=async t=>{let e,n;const r=([e,n]=ci(()=>td({path:t.path})),e=await e,n(),e);if(r.redirect)return pr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},wP=[vP,EP],wo={auth:()=>ke(()=>import("./MncDUjf2.js"),[],import.meta.url)};function bP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),jm(h,"")}const a=jm(r,t),l=!n||B1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const TP=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var x;let e,n,r=xs().app.baseURL;const s=((x=on.history)==null?void 0:x.call(on,r))??xC(r),i=on.routes?([e,n]=ci(()=>on.routes(Mu)),e=await e,n(),e??Mu):Mu;let o;const a=nP({...on,scrollBehavior:(N,C,v)=>{if(C===pn){o=v;return}if(on.scrollBehavior){if(a.options.scrollBehavior=on.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return on.scrollBehavior(N,pn,o||v)}},history:s,routes:i});on.routes&&on.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=No(a.currentRoute.value);a.afterEach((N,C)=>{l.value=C}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=bP(r,window.location,t.payload.path),h=No(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((N,C)=>{var v,R,D,M;((R=(v=N.matched[0])==null?void 0:v.components)==null?void 0:R.default)===((M=(D=C.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&d()});const p={};for(const N in h.value)Object.defineProperty(p,N,{get:()=>h.value[N],enumerable:!0});t._route=Jn(p),t._middleware=t._middleware||{global:[],named:{}};const g=El();a.afterEach(async(N,C,v)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(TE),v&&await t.callHook("page:loading:end")});try{[e,n]=ci(()=>a.isReady()),await e,n()}catch(N){[e,n]=ci(()=>t.runWithContext(()=>Zs(N))),await e,n()}const w=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const k=t.payload.state._layout;return a.beforeEach(async(N,C)=>{var v;await t.callHook("page:loading:start"),N.meta=fr(N.meta),t.isHydrating&&k&&!Wr(N.meta.layout)&&(N.meta.layout=k),t._processingMiddleware=!0;{const R=new Set([...wP,...t._middleware.global]);for(const D of N.matched){const M=D.meta.middleware;if(M)for(const T of id(M))R.add(T)}{const D=await t.runWithContext(()=>td({path:N.path}));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?R.add(M):R.delete(M)}for(const D of R){const M=typeof D=="string"?t._middleware.named[D]||await((v=wo[D])==null?void 0:v.call(wo).then(y=>y.default||y)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);const T=await t.runWithContext(()=>M(N,C));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const y=T||Sh({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Zs(y)),!1}if(T!==!0&&(T||T===!1))return T}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(N,C)=>{N.matched.length===0&&await t.runWithContext(()=>Zs(Sh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${N.fullPath}`,data:{path:N.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in w&&(w.name=void 0),await a.replace({...w,force:!0}),a.options.scrollBehavior=on.scrollBehavior}catch(N){await t.runWithContext(()=>Zs(N))}}),{provide:{router:a}}}}),Fh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),IP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Il=t=>{const e=De();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Fh(()=>t())}):Fh(()=>t())},AP=Zt({name:"nuxt:payload",setup(t){wt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await og(e.path);r&&Object.assign(t.static.data,r.data)}),Il(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await og(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(bl,1e3)})}}),RP=Zt(()=>{const t=wt();Il(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),SP=Zt(t=>{let e;async function n(){const r=await bl();e&&clearTimeout(e),e=setTimeout(n,Wm);try{const s=await $fetch(Jf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Il(()=>{e=setTimeout(n,Wm)})});function CP(t={}){const e=t.path||window.location.pathname;let n={};try{n=jo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:De().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const PP=Zt({name:"nuxt:chunk-reload",setup(t){const e=wt(),n=xs(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:vl(n.app.baseURL,i.fullPath);CP({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),kP=Zt({name:"nuxt:global-components"}),Mr={default:LI(()=>ke(()=>import("./Bn3BUln2.js"),__vite__mapDeps([32,6,1,33]),import.meta.url).then(t=>t.default||t))},OP=Zt({name:"nuxt:prefetch",setup(t){const e=wt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Mr[r]=="function"&&await Mr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(pr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=id(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof wo[o]=="function"&&wo[o]();s&&typeof Mr[s]=="function"&&Mr[s]()})}});var Pg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},GE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new NP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DP=function(t){const e=KE(t);return GE.encodeByteArray(e,!0)},Uc=function(t){return DP(t).replace(/\./g,"")},QE=function(t){try{return GE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MP=()=>LP().__FIREBASE_DEFAULTS__,VP=()=>{if(typeof process>"u"||typeof Pg>"u")return;const t=Pg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&QE(t[1]);return e&&JSON.parse(e)},Al=()=>{try{return MP()||VP()||FP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},YE=t=>{var e,n;return(n=(e=Al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XE=t=>{const e=YE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JE=()=>{var t;return(t=Al())===null||t===void 0?void 0:t.config},ZE=t=>{var e;return(e=Al())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function e0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Uc(JSON.stringify(n)),Uc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function jP(){var t;const e=(t=Al())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function $P(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zP(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WP(){return!jP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KP(){try{return typeof indexedDB=="object"}catch{return!1}}function GP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QP,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,la.prototype.create)}}class la{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?YP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jn(s,a,r)}}function YP(t,e){return t.replace(XP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const XP=/\{\$([^}]+)}/g;function JP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kg(i)&&kg(o)){if(!Bc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZP(t,e){const n=new ek(t,e);return n.subscribe.bind(n)}class ek{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vu),s.error===void 0&&(s.error=Vu),s.complete===void 0&&(s.complete=Vu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vu(){}/**
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
 */class nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sk(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rk(t){return t===gs?void 0:t}function sk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const ok={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},ak=Ee.INFO,ck={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},lk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ck[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class od{constructor(e){this.name=e,this._logLevel=ak,this._logHandler=lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ok[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const uk=(t,e)=>e.some(n=>t instanceof n);let Og,xg;function hk(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fk(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,Uh=new WeakMap,n0=new WeakMap,Fu=new WeakMap,ad=new WeakMap;function dk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t0.set(n,t)}).catch(()=>{}),ad.set(e,t),e}function pk(t){if(Uh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uh.set(t,e)}let Bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mk(t){Bh=t(Bh)}function gk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uu(this),e,...n);return n0.set(r,e.sort?e.sort():[e]),Br(r)}:fk().includes(t)?function(...e){return t.apply(Uu(this),e),Br(t0.get(this))}:function(...e){return Br(t.apply(Uu(this),e))}}function _k(t){return typeof t=="function"?gk(t):(t instanceof IDBTransaction&&pk(t),uk(t,hk())?new Proxy(t,Bh):t)}function Br(t){if(t instanceof IDBRequest)return dk(t);if(Fu.has(t))return Fu.get(t);const e=_k(t);return e!==t&&(Fu.set(t,e),ad.set(e,t)),e}const Uu=t=>ad.get(t);function yk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vk=["get","getKey","getAll","getAllKeys","count"],Ek=["put","add","delete","clear"],Bu=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bu.get(e))return Bu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Bu.set(e,i),i}mk(t=>({...t,get:(e,n,r)=>Ng(e,n)||t.get(e,n,r),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",Dg="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new od("@firebase/app"),Tk="@firebase/app-compat",Ik="@firebase/analytics-compat",Ak="@firebase/analytics",Rk="@firebase/app-check-compat",Sk="@firebase/app-check",Ck="@firebase/auth",Pk="@firebase/auth-compat",kk="@firebase/database",Ok="@firebase/data-connect",xk="@firebase/database-compat",Nk="@firebase/functions",Dk="@firebase/functions-compat",Lk="@firebase/installations",Mk="@firebase/installations-compat",Vk="@firebase/messaging",Fk="@firebase/messaging-compat",Uk="@firebase/performance",Bk="@firebase/performance-compat",jk="@firebase/remote-config",$k="@firebase/remote-config-compat",Hk="@firebase/storage",qk="@firebase/storage-compat",zk="@firebase/firestore",Wk="@firebase/vertexai",Kk="@firebase/firestore-compat",Gk="firebase",Qk="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="[DEFAULT]",Yk={[jh]:"fire-core",[Tk]:"fire-core-compat",[Ak]:"fire-analytics",[Ik]:"fire-analytics-compat",[Sk]:"fire-app-check",[Rk]:"fire-app-check-compat",[Ck]:"fire-auth",[Pk]:"fire-auth-compat",[kk]:"fire-rtdb",[Ok]:"fire-data-connect",[xk]:"fire-rtdb-compat",[Nk]:"fire-fn",[Dk]:"fire-fn-compat",[Lk]:"fire-iid",[Mk]:"fire-iid-compat",[Vk]:"fire-fcm",[Fk]:"fire-fcm-compat",[Uk]:"fire-perf",[Bk]:"fire-perf-compat",[jk]:"fire-rc",[$k]:"fire-rc-compat",[Hk]:"fire-gcs",[qk]:"fire-gcs-compat",[zk]:"fire-fst",[Kk]:"fire-fst-compat",[Wk]:"fire-vertex","fire-js":"fire-js",[Gk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map,Xk=new Map,Hh=new Map;function Lg(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(Hh.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Hh.set(e,t);for(const n of jc.values())Lg(n,t);for(const n of Xk.values())Lg(n,t);return!0}function Rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new la("app","Firebase",Jk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=Qk;function r0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$h,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=JE()),!n)throw jr.create("no-options");const i=jc.get(s);if(i){if(Bc(n,i.options)&&Bc(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new ik(s);for(const l of Hh.values())o.addComponent(l);const a=new Zk(n,r,o);return jc.set(s,a),a}function cd(t=$h){const e=jc.get(t);if(!e&&t===$h&&JE())return r0();if(!e)throw jr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let s=(r=Yk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}As(new Kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eO="firebase-heartbeat-database",tO=1,qo="firebase-heartbeat-store";let ju=null;function s0(){return ju||(ju=yk(eO,tO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),ju}async function nO(t){try{const n=(await s0()).transaction(qo),r=await n.objectStore(qo).get(i0(t));return await n.done,r}catch(e){if(e instanceof jn)or.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Mg(t,e){try{const r=(await s0()).transaction(qo,"readwrite");await r.objectStore(qo).put(e,i0(t)),await r.done}catch(n){if(n instanceof jn)or.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function i0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rO=1024,sO=30*24*60*60*1e3;class iO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=sO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vg(),{heartbeatsToSend:r,unsentEntries:s}=oO(this._heartbeatsCache.heartbeats),i=Uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function Vg(){return new Date().toISOString().substring(0,10)}function oO(t,e=rO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KP()?GP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fg(t){return Uc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){As(new Kr("platform-logger",e=>new wk(e),"PRIVATE")),As(new Kr("heartbeat",e=>new iO(e),"PRIVATE")),Nn(jh,Dg,t),Nn(jh,Dg,"esm2017"),Nn("fire-js","")}cO("");var lO="firebase",uO="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(lO,uO,"app");function ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function o0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hO=o0,a0=new la("auth","Firebase",o0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new od("@firebase/auth");function fO(t,...e){$c.logLevel<=Ee.WARN&&$c.warn(`Auth (${Ns}): ${t}`,...e)}function lc(t,...e){$c.logLevel<=Ee.ERROR&&$c.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw ud(t,...e)}function Dn(t,...e){return ud(t,...e)}function c0(t,e,n){const r=Object.assign(Object.assign({},hO()),{[e]:n});return new la("auth","Firebase",r).create(e,{appName:t.name})}function $r(t){return c0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ud(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return a0.create(t,...e)}function de(t,e,...n){if(!t)throw ud(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function ar(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dO(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dO()||HP()||"connection"in navigator)?navigator.onLine:!0}function mO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=BP()||qP()}get(){return pO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _O=new ha(3e4,6e4);function Ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ss(t,e,n,r,s={}){return u0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ua(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return $P()||(u.referrerPolicy="no-referrer"),l0.fetch()(h0(t,t.config.apiHost,n,a),u)})}async function u0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gO),e);try{const s=new vO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wa(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw c0(t,h,u);bn(t,h)}}catch(s){if(s instanceof jn)throw s;bn(t,"network-request-failed",{message:String(s)})}}async function Sl(t,e,n,r,s={}){const i=await ss(t,e,n,r,s);return"mfaPendingCredential"in i&&bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function h0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hd(t.config,s):`${t.config.apiScheme}://${s}`}function yO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),_O.get())})}}function Wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dn(t,e,r);return s.customData._tokenResponse=n,s}function Bg(t){return t!==void 0&&t.enterprise!==void 0}class EO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wO(t,e){return ss(t,"GET","/v2/recaptchaConfig",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(t,e){return ss(t,"POST","/v1/accounts:delete",e)}async function f0(t,e){return ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TO(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=fd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bo($u(s.auth_time)),issuedAtTime:bo($u(s.iat)),expirationTime:bo($u(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $u(t){return Number(t)*1e3}function fd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const s=QE(n);return s?JSON.parse(s):(lc("Failed to decode base64 JWT payload"),null)}catch(s){return lc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jg(t){const e=fd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&IO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await zo(t,f0(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?d0(i.providerUserInfo):[],a=SO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function RO(t){const e=Ze(t);await Hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function d0(t){return t.map(e=>{var{providerId:n}=e,r=ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO(t,e){const n=await u0(t,{},async()=>{const r=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=h0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",l0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PO(t,e){return ss(t,"POST","/v2/accounts:revokeToken",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new li;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zo(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TO(this,e)}reload(){return RO(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject($r(this.auth));const e=await this.getIdToken();return await zo(this,bO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:R,isAnonymous:D,providerData:M,stsTokenManager:T}=n;de(v&&T,e,"internal-error");const y=li.fromJSON(this.name,T);de(typeof v=="string",e,"internal-error"),br(d,e.name),br(p,e.name),de(typeof R=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),br(g,e.name),br(w,e.name),br(k,e.name),br(x,e.name),br(N,e.name),br(C,e.name);const _=new tr({uid:v,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:w,phoneNumber:g,tenantId:k,stsTokenManager:y,createdAt:N,lastLoginAt:C});return M&&Array.isArray(M)&&(_.providerData=M.map(b=>Object.assign({},b))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new li;s.updateFromServerResponse(n);const i=new tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?d0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new li;a.updateFromIdToken(r);const l=new tr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function nr(t){ar(t instanceof Function,"Expected a class definition");let e=$g.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$g.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p0.type="NONE";const Hg=p0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uc(this.userKey,s.apiKey,i),this.fullPersistenceKey=uc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(nr(Hg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nr(Hg);const o=uc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=tr._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ui(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ui(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E0(e))return"Blackberry";if(w0(e))return"Webos";if(g0(e))return"Safari";if((e.includes("chrome/")||_0(e))&&!e.includes("edge/"))return"Chrome";if(v0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function m0(t=Dt()){return/firefox\//i.test(t)}function g0(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _0(t=Dt()){return/crios\//i.test(t)}function y0(t=Dt()){return/iemobile/i.test(t)}function v0(t=Dt()){return/android/i.test(t)}function E0(t=Dt()){return/blackberry/i.test(t)}function w0(t=Dt()){return/webos/i.test(t)}function dd(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kO(t=Dt()){var e;return dd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OO(){return zP()&&document.documentMode===10}function b0(t=Dt()){return dd(t)||v0(t)||w0(t)||E0(t)||/windows phone/i.test(t)||y0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e=[]){let n;switch(t){case"Browser":n=qg(Dt());break;case"Worker":n=`${qg(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
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
 */async function NO(t,e={}){return ss(t,"GET","/v2/passwordPolicy",Ds(t,e))}/**
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
 */class MO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new xO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await f0(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject($r(this));const n=e?Ze(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject($r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject($r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NO(this),n=new LO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new la("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(t){return Ze(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZP(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VO(t){Cl=t}function I0(t){return Cl.loadJS(t)}function FO(){return Cl.recaptchaEnterpriseScript}function UO(){return Cl.gapiScript}function BO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jO{constructor(){this.enterprise=new $O}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $O{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const HO="recaptcha-enterprise",A0="NO_RECAPTCHA";class qO{constructor(e){this.type=HO,this.auth=Di(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{wO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new EO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Bg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(A0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jO().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FO();l.length!==0&&(l+=a),I0(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Wg(t,e,n,r=!1,s=!1){const i=new qO(t);let o;if(s)o=A0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kg(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t,e){const n=Rl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Bc(i,e??{}))return s;bn(s,"already-initialized")}return n.initialize({options:e})}function WO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KO(t,e,n){const r=Di(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=R0(e),{host:o,port:a}=GO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),QO()}function R0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GO(t){const e=R0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gg(o)}}}function Gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function YO(t,e){return ss(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){return Sl(t,"POST","/v1/accounts:signInWithPassword",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}async function ZO(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends pd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kg(e,n,"signInWithPassword",XO);case"emailLink":return JO(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kg(e,r,"signUpPassword",YO);case"emailLink":return ZO(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return Sl(t,"POST","/v1/accounts:signInWithIdp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="http://localhost";class Rs extends pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ld(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:ex,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ua(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nx(t){const e=io(oo(t)).link,n=e?io(oo(e)).deep_link_id:null,r=io(oo(t)).deep_link_id;return(r?io(oo(r)).link:null)||r||n||e||t}class md{constructor(e){var n,r,s,i,o,a;const l=io(oo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=tx((s=l.mode)!==null&&s!==void 0?s:null);de(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nx(e);try{return new md(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=md.parseLink(n);return de(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends S0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends fa{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends fa{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends fa{constructor(){super("twitter.com")}static credential(e,n){return Rs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tr._fromIdTokenResponse(e,r,s),o=Qg(r);return new wi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qg(r);return new wi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends jn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qc(e,n,r,s)}}function C0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,i,e,r):i})}async function rx(t,e,n=!1){const r=await zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e,n=!1){const{auth:r}=t;if(Zn(r.app))return Promise.reject($r(r));const s="reauthenticate";try{const i=await zo(t,C0(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=fd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),wi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(t,e,n=!1){if(Zn(t.app))return Promise.reject($r(t));const r="signIn",s=await C0(t,r,e),i=await wi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ix(t,e){return P0(Di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t){const e=Di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ax(t,e,n){return Zn(t.app)?Promise.reject($r(t)):ix(Ze(t),Li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ox(t),r})}function cx(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function lx(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function ux(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function hx(t){return Ze(t).signOut()}const zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=1e3,dx=10;class O0 extends k0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);OO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}O0.type="LOCAL";const px=O0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends k0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x0.type="SESSION";const N0=x0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await mx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=gd("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function _x(t){Ln().location.href=t}/**
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
 */function D0(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function yx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ex(){return D0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firebaseLocalStorageDb",wx=1,Wc="firebaseLocalStorage",M0="fbase_key";class da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([Wc],e?"readwrite":"readonly").objectStore(Wc)}function bx(){const t=indexedDB.deleteDatabase(L0);return new da(t).toPromise()}function Wh(){const t=indexedDB.open(L0,wx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wc,{keyPath:M0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wc)?e(r):(r.close(),await bx(),e(await Wh()))})})}async function Yg(t,e,n){const r=kl(t,!0).put({[M0]:e,value:n});return new da(r).toPromise()}async function Tx(t,e){const n=kl(t,!1).get(e),r=await new da(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=kl(t,!0).delete(e);return new da(n).toPromise()}const Ix=800,Ax=3;class V0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(Ex()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yx(),!this.activeServiceWorker)return;this.sender=new gx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wh();return await Yg(e,zc,"1"),await Xg(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kl(s,!1).getAll();return new da(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ix)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V0.type="LOCAL";const Rx=V0;new ha(3e4,6e4);/**
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
 */function Sx(t,e){return e?nr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cx(t){return P0(t.auth,new _d(t),t.bypassAuthState)}function Px(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),sx(n,new _d(t),t.bypassAuthState)}async function kx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),rx(n,new _d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cx;case"linkViaPopup":case"linkViaRedirect":return kx;case"reauthViaPopup":case"reauthViaRedirect":return Px;default:bn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new ha(2e3,1e4);class ei extends F0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ox.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="pendingRedirect",hc=new Map;class Nx extends F0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const r=await Dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dx(t,e){const n=Vx(e),r=Mx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lx(t,e){hc.set(t._key(),e)}function Mx(t){return nr(t._redirectPersistence)}function Vx(t){return uc(xx,t.config.apiKey,t.name)}async function Fx(t,e,n=!1){if(Zn(t.app))return Promise.reject($r(t));const r=Di(t),s=Sx(r,e),o=await new Nx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=10*60*1e3;class Bx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ux&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e={}){return ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qx=/^https?/;async function zx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $x(t);for(const n of e)try{if(Wx(n))return}catch{}bn(t,"unauthorized-domain")}function Wx(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qx.test(n))return!1;if(Hx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Kx=new ha(3e4,6e4);function Zg(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gx(t){return new Promise((e,n)=>{var r,s,i;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(Dn(t,"network-request-failed"))},timeout:Kx.get()})}if(!((s=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ln().gapi)===null||i===void 0)&&i.load)o();else{const a=BO("iframefcb");return Ln()[a]=()=>{gapi.load?o():n(Dn(t,"network-request-failed"))},I0(`${UO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fc=null,e})}let fc=null;function Qx(t){return fc=fc||Gx(t),fc}/**
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
 */const Yx=new ha(5e3,15e3),Xx="__/auth/iframe",Jx="emulator/auth/iframe",Zx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hd(e,Jx):`https://${t.config.authDomain}/${Xx}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=eN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ua(r).slice(1)}`}async function nN(t){const e=await Qx(t),n=Ln().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:tN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),a=Ln().setTimeout(()=>{i(o)},Yx.get());function l(){Ln().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const rN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sN=500,iN=600,oN="_blank",aN="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cN(t,e,n,r=sN,s=iN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=_0(u)?oN:n),m0(u)&&(e=e||aN,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(kO(u)&&a!=="_self")return lN(e||"",a),new e_(null);const d=window.open(e||"",a,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new e_(d)}function lN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uN="__/auth/handler",hN="emulator/auth/handler",fN=encodeURIComponent("fac");async function t_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof S0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof fa){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${fN}=${encodeURIComponent(l)}`:"";return`${dN(t)}?${ua(a).slice(1)}${u}`}function dN({config:t}){return t.emulator?hd(t,hN):`https://${t.authDomain}/${uN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="webStorageSupport";class pN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N0,this._completeRedirectFn=Fx,this._overrideRedirectResult=Lx}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await t_(e,n,r,qh(),s);return cN(e,o,gd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await t_(e,n,r,qh(),s);return _x(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nN(e),r=new Bx(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hu];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b0()||g0()||dd()}}const mN=pN;var n_="@firebase/auth",r_="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function _N(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yN(t){As(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T0(t)},u=new MO(r,s,i,l);return WO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Kr("auth-internal",e=>{const n=Di(e.getProvider("auth").getImmediate());return(r=>new gN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(n_,r_,_N(t)),Nn(n_,r_,"esm2017")}/**
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
 */const vN=5*60,EN=ZE("authIdTokenMaxAge")||vN;let s_=null;const wN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>EN)return;const s=n==null?void 0:n.token;s_!==s&&(s_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bN(t=cd()){const e=Rl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zO(t,{popupRedirectResolver:mN,persistence:[Rx,px,N0]}),r=ZE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wN(i.toString());lx(n,o,()=>o(n.currentUser)),cx(n,a=>o(a))}}const s=YE("auth");return s&&KO(n,`http://${s}`),n}function TN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yN("Browser");function mn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=mn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:mn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=mn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=mn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(mn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(mn(i),mn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(mn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const IN={path:"/",watch:!0,decode:t=>jo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Ka=window.cookieStore;function AN(t,e){var l;const n={...IN,...e};n.filter??(n.filter=u=>u===t);const r=i_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=mn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?CN(o,s,n.watch&&n.watch!=="shallow"):Et(o);{let u=null;try{!Ka&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||LR(a.value,r[t])||(SN(t,a.value,n),r[t]=mn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=w=>{var x;const k=w.refresh?(x=i_(n))==null?void 0:x[t]:n.decode(w.value);p=!0,a.value=k,r[t]=mn(k),Bn(()=>{p=!1})};let p=!1;const g=!!ra();if(g&&bc(()=>{p=!0,h(),u==null||u.close()}),Ka){const w=k=>{const x=k.changed.find(C=>C.name===t),N=k.deleted.find(C=>C.name===t);x&&d({value:x.value}),N&&d({value:null})};Ka.addEventListener("change",w),g&&bc(()=>Ka.removeEventListener("change",w))}else u&&(u.onmessage=({data:w})=>d(w));n.watch?yn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function i_(t={}){return PR(document.cookie,t)}function RN(t,e,n={}){return e==null?Gm(t,e,{...n,maxAge:-1}):Gm(t,e,n)}function SN(t,e,n={}){document.cookie=RN(t,e,n)}const o_=2147483647;function CN(t,e,n){let r,s,i=0;const o=n?Et(t):{value:t};return ra()&&bc(()=>{s==null||s(),clearTimeout(r)}),mI((a,l)=>{n&&(s=yn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<o_?h:o_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function B0(t,e=wt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>B0(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const PN=(...t)=>t.find(e=>e!==void 0);function kN(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return a_(i,t.trailingSlash);const a="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:a_(a,t.trailingSlash)}}function s(i){const o=wt(),a=xs(),l=Ue(()=>!!i.target&&i.target!=="_self"),u=Ue(()=>{const x=i.to||i.href||"";return typeof x=="string"&&pr(x,{acceptRelative:!0})}),h=Mo("RouterLink"),d=h&&typeof h!="string"?h.useLink:void 0,p=Ue(()=>{if(i.external)return!0;const x=i.to||i.href||"";return typeof x=="object"?!1:x===""||u.value}),g=Ue(()=>{const x=i.to||i.href||"";return p.value?x:r(x,o.resolve)}),w=p.value||d==null?void 0:d({...i,to:g}),k=Ue(()=>{var x;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const N=typeof g.value=="object"&&"path"in g.value?Ph(g.value):g.value,C=typeof N=="object"?o.resolve(N).href:N;return r(C,o.resolve)}return typeof g.value=="object"?((x=o.resolve(g.value))==null?void 0:x.href)??null:r(vl(a.app.baseURL,g.value),o.resolve)});return{to:g,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:k,isActive:(w==null?void 0:w.isActive)??Ue(()=>g.value===o.currentRoute.value.path),isExactActive:(w==null?void 0:w.isExactActive)??Ue(()=>g.value===o.currentRoute.value.path),route:(w==null?void 0:w.route)??Ue(()=>o.resolve(g.value)),async navigate(){await HR(k.value,{replace:i.replace,external:p.value||l.value})}}}return Tn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=wt(),{to:l,href:u,navigate:h,isExternal:d,hasTarget:p,isAbsoluteUrl:g}=s(i),w=Et(!1),k=Et(null),x=v=>{var R;k.value=i.custom?(R=v==null?void 0:v.$el)==null?void 0:R.nextElementSibling:v==null?void 0:v.$el};function N(v){var R,D;return!w.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===v:((R=i.prefetchOn)==null?void 0:R[v])??((D=t.prefetchOn)==null?void 0:D[v]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!DN()}async function C(v=De()){if(w.value)return;w.value=!0;const R=typeof l.value=="string"?l.value:d.value?Ph(l.value):a.resolve(l.value).fullPath,D=d.value?new URL(R,window.location.href).href:R;await Promise.all([v.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&B0(l.value,a).catch(()=>{})])}if(N("visibility")){const v=De();let R,D=null;dl(()=>{const M=xN();Il(()=>{R=Fh(()=>{var T;(T=k==null?void 0:k.value)!=null&&T.tagName&&(D=M.observe(k.value,async()=>{D==null||D(),D=null,await C(v)}))})})}),oa(()=>{R&&IP(R),D==null||D(),D=null})}return()=>{var D;if(!d.value&&!p.value&&!n(l.value)){const M={ref:x,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(N("interaction")&&(M.onPointerenter=C.bind(null,void 0),M.onFocus=C.bind(null,void 0)),w.value&&(M.class=i.prefetchedClass||t.prefetchedClass),M.rel=i.rel||void 0),vt(Mo("RouterLink"),M,o.default)}const v=i.target||null,R=PN(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:h,prefetch:C,get route(){if(!u.value)return;const M=new URL(u.value,window.location.href);return{path:M.pathname,fullPath:M.pathname,get query(){return iE(M.search)},hash:M.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:R,target:v,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:vt("a",{ref:k,href:u.value||null,rel:R,target:v},(D=o.default)==null?void 0:D.call(o))}}})}const ON=kN(vR);function a_(t,e){const n=e==="append"?Nc:yl;return pr(t)&&!t.startsWith("http")?t:n(t,!0)}function xN(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const NN=/2g/;function DN(){const t=navigator.connection;return!!(t&&(t.saveData||NN.test(t.effectiveType)))}var c_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,j0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function _(){}_.prototype=y.prototype,T.D=y.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(b,P,S){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return y.prototype[P].apply(b,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)b[P]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(P=0;16>P;++P)b[P]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=T.g[0],_=T.g[1],P=T.g[2];var S=T.g[3],I=y+(S^_&(P^S))+b[0]+3614090360&4294967295;y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[1]+3905402710&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[2]+606105819&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[3]+3250441966&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(S^_&(P^S))+b[4]+4118548399&4294967295,y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[5]+1200080426&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[6]+2821735955&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[7]+4249261313&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(S^_&(P^S))+b[8]+1770035416&4294967295,y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[9]+2336552879&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[10]+4294925233&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[11]+2304563134&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(S^_&(P^S))+b[12]+1804603682&4294967295,y=_+(I<<7&4294967295|I>>>25),I=S+(P^y&(_^P))+b[13]+4254626195&4294967295,S=y+(I<<12&4294967295|I>>>20),I=P+(_^S&(y^_))+b[14]+2792965006&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(y^P&(S^y))+b[15]+1236535329&4294967295,_=P+(I<<22&4294967295|I>>>10),I=y+(P^S&(_^P))+b[1]+4129170786&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[6]+3225465664&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[11]+643717713&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[0]+3921069994&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(P^S&(_^P))+b[5]+3593408605&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[10]+38016083&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[15]+3634488961&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[4]+3889429448&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(P^S&(_^P))+b[9]+568446438&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[14]+3275163606&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[3]+4107603335&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[8]+1163531501&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(P^S&(_^P))+b[13]+2850285829&4294967295,y=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(y^_))+b[2]+4243563512&4294967295,S=y+(I<<9&4294967295|I>>>23),I=P+(y^_&(S^y))+b[7]+1735328473&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^y&(P^S))+b[12]+2368359562&4294967295,_=P+(I<<20&4294967295|I>>>12),I=y+(_^P^S)+b[5]+4294588738&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[8]+2272392833&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[11]+1839030562&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[14]+4259657740&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(_^P^S)+b[1]+2763975236&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[4]+1272893353&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[7]+4139469664&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[10]+3200236656&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(_^P^S)+b[13]+681279174&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[0]+3936430074&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[3]+3572445317&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[6]+76029189&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(_^P^S)+b[9]+3654602809&4294967295,y=_+(I<<4&4294967295|I>>>28),I=S+(y^_^P)+b[12]+3873151461&4294967295,S=y+(I<<11&4294967295|I>>>21),I=P+(S^y^_)+b[15]+530742520&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^y)+b[2]+3299628645&4294967295,_=P+(I<<23&4294967295|I>>>9),I=y+(P^(_|~S))+b[0]+4096336452&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[7]+1126891415&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[14]+2878612391&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[5]+4237533241&4294967295,_=P+(I<<21&4294967295|I>>>11),I=y+(P^(_|~S))+b[12]+1700485571&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[3]+2399980690&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[10]+4293915773&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[1]+2240044497&4294967295,_=P+(I<<21&4294967295|I>>>11),I=y+(P^(_|~S))+b[8]+1873313359&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[15]+4264355552&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[6]+2734768916&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[13]+1309151649&4294967295,_=P+(I<<21&4294967295|I>>>11),I=y+(P^(_|~S))+b[4]+4149444226&4294967295,y=_+(I<<6&4294967295|I>>>26),I=S+(_^(y|~P))+b[11]+3174756917&4294967295,S=y+(I<<10&4294967295|I>>>22),I=P+(y^(S|~_))+b[2]+718787259&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~y))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var _=y-this.blockSize,b=this.B,P=this.h,S=0;S<y;){if(P==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<y;)if(b[P++]=T.charCodeAt(S++),P==this.blockSize){s(this,b),P=0;break}}else for(;S<y;)if(b[P++]=T[S++],P==this.blockSize){s(this,b),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var _=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=_&255,_/=256;for(this.u(T),T=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)T[_++]=this.g[y]>>>b&255;return T};function i(T,y){var _=a;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=y(T)}function o(T,y){this.h=y;for(var _=[],b=!0,P=T.length-1;0<=P;P--){var S=T[P]|0;b&&S==y||(_[P]=S,b=!1)}this.g=_}var a={};function l(T){return-128<=T&&128>T?i(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return x(u(-T));for(var y=[],_=1,b=0;T>=_;b++)y[b]=T/_|0,_*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return x(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),b=d,P=0;P<T.length;P+=8){var S=Math.min(8,T.length-P),I=parseInt(T.substring(P,P+S),y);8>S?(S=u(Math.pow(y,S)),b=b.j(S).add(u(I))):(b=b.j(_),b=b.add(u(I)))}return b}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var T=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);T+=(0<=b?b:4294967296+b)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w(this))return"0";if(k(this))return"-"+x(this).toString(T);for(var y=u(Math.pow(T,6)),_=this,b="";;){var P=R(_,y).g;_=N(_,P.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=P,w(_))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function w(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=N(this,T),k(T)?-1:w(T)?0:1};function x(T){for(var y=T.g.length,_=[],b=0;b<y;b++)_[b]=~T.g[b];return new o(_,~T.h).add(p)}t.abs=function(){return k(this)?x(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0,P=0;P<=y;P++){var S=b+(this.i(P)&65535)+(T.i(P)&65535),I=(S>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);b=I>>>16,S&=65535,I&=65535,_[P]=I<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function N(T,y){return T.add(x(y))}t.j=function(T){if(w(this)||w(T))return d;if(k(this))return k(T)?x(this).j(x(T)):x(x(this).j(T));if(k(T))return x(this.j(x(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var y=this.g.length+T.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var P=0;P<T.g.length;P++){var S=this.i(b)>>>16,I=this.i(b)&65535,ge=T.i(P)>>>16,ve=T.i(P)&65535;_[2*b+2*P]+=I*ve,C(_,2*b+2*P),_[2*b+2*P+1]+=S*ve,C(_,2*b+2*P+1),_[2*b+2*P+1]+=I*ge,C(_,2*b+2*P+1),_[2*b+2*P+2]+=S*ge,C(_,2*b+2*P+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new o(_,0)};function C(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function v(T,y){this.g=T,this.h=y}function R(T,y){if(w(y))throw Error("division by zero");if(w(T))return new v(d,d);if(k(T))return y=R(x(T),y),new v(x(y.g),x(y.h));if(k(y))return y=R(T,x(y)),new v(x(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,b=y;0>=b.l(T);)_=D(_),b=D(b);var P=M(_,1),S=M(b,1);for(b=M(b,2),_=M(_,2);!w(b);){var I=S.add(b);0>=I.l(T)&&(P=P.add(_),S=I),b=M(b,1),_=M(_,1)}return y=N(T,P.j(y)),new v(P,y)}for(P=d;0<=T.l(y);){for(_=Math.max(1,Math.floor(T.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=u(_),I=S.j(y);k(I)||0<I.l(T);)_-=b,S=u(_),I=S.j(y);w(S)&&(S=p),P=P.add(S),T=N(T,I)}return new v(P,T)}t.A=function(T){return R(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&T.i(b);return new o(_,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|T.i(b);return new o(_,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^T.i(b);return new o(_,this.h^T.h)};function D(T){for(var y=T.g.length+1,_=[],b=0;b<y;b++)_[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(_,T.h)}function M(T,y){var _=y>>5;y%=32;for(var b=T.g.length-_,P=[],S=0;S<b;S++)P[S]=0<y?T.i(S+_)>>>y|T.i(S+_+1)<<32-y:T.i(S+_);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,j0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Hr=o}).apply(typeof c_<"u"?c_:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $0,ao,H0,dc,Kh,q0,z0,W0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var E=0;E<c.length-1;E++){var L=c[E];if(!(L in m))break e;m=m[L]}c=c[c.length-1],E=m[c],f=f(E),f!=E&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,E=!1,L={next:function(){if(!E&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function w(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(E,L,F){for(var Q=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Q[Ve-2]=arguments[Ve];return f.prototype[L].apply(E,Q)}}function k(c){const f=c.length;if(0<f){const m=Array(f);for(let E=0;E<f;E++)m[E]=c[E];return m}return[]}function x(c,f){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const L=c.length||0,F=E.length||0;c.length=L+F;for(let Q=0;Q<F;Q++)c[L+Q]=E[Q]}else c.push(E)}}class N{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function C(c){return/^[\s\xa0]*$/.test(c)}function v(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function M(c,f,m){for(const E in c)f.call(m,c[E],E,c)}function T(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function y(c){const f={};for(const m in c)f[m]=c[m];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,f){let m,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(m in E)c[m]=E[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(E,m)&&(c[m]=E[m])}}function P(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function I(){var c=We;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class ge{constructor(){this.h=this.g=null}add(f,m){const E=ve.get();E.set(f,m),this.h?this.h.next=E:this.g=E,this.h=E}}var ve=new N(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,We=new ge,fn=()=>{const c=a.Promise.resolve(void 0);se=()=>{c.then(tn)}};var tn=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(m){S(m)}var f=ve;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ne=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var gr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function In(c,f){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{R(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ht[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&In.aa.h.call(this)}}w(In,Ge);var Ht={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(c,f,m,E,L){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!E,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,f,m,E,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Q=A(c,f,E,L);return-1<Q?(f=c[Q],m||(f.fa=!1)):(f=new X(f,this.src,F,!!E,L),f.fa=m,c.push(f)),f};function Le(c,f){var m=f.type;if(m in c.g){var E=c.g[m],L=Array.prototype.indexOf.call(E,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(E,L,1),F&&(re(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function A(c,f,m,E){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==E)return L}return-1}var O="closure_lm_"+(1e6*Math.random()|0),V={};function $(c,f,m,E,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)$(c,f[F],m,E,L);return null}return m=oe(m),c&&c[B]?c.K(f,m,u(E)?!!E.capture:!!E,L):U(c,f,m,!1,E,L)}function U(c,f,m,E,L,F){if(!f)throw Error("Invalid event type");var Q=u(L)?!!L.capture:!!L,Ve=ue(c);if(Ve||(c[O]=Ve=new Te(c)),m=Ve.add(f,m,E,Q,F),m.proxy)return m;if(E=q(),m.proxy=E,E.src=c,E.listener=m,c.addEventListener)gr||(L=Q),L===void 0&&(L=!1),c.addEventListener(f.toString(),E,L);else if(c.attachEvent)c.attachEvent(K(f.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return f.call(c.src,c.listener,m)}const f=z;return c}function Y(c,f,m,E,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(c,f[F],m,E,L);else E=u(E)?!!E.capture:!!E,m=oe(m),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=A(F,m,E,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=ue(c))&&(f=c.g[f.toString()],c=-1,f&&(c=A(f,m,E,L)),(m=-1<c?f[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])Le(f.i,c);else{var m=c.type,E=c.proxy;f.removeEventListener?f.removeEventListener(m,E,c.capture):f.detachEvent?f.detachEvent(K(m),E):f.addListener&&f.removeListener&&f.removeListener(E),(m=ue(f))?(Le(m,c),m.h==0&&(m.src=null,f[O]=null)):re(c)}}}function K(c){return c in V?V[c]:V[c]="on"+c}function z(c,f){if(c.da)c=!0;else{f=new In(f,this);var m=c.listener,E=c.ha||c.src;c.fa&&G(c),c=m.call(E,f)}return c}function ue(c){return c=c[O],c instanceof Te?c:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[J]||(c[J]=function(f){return c.handleEvent(f)}),c[J])}function ie(){Ke.call(this),this.i=new Te(this),this.M=this,this.F=null}w(ie,Ke),ie.prototype[B]=!0,ie.prototype.removeEventListener=function(c,f,m,E){Y(this,c,f,m,E)};function fe(c,f){var m,E=c.F;if(E)for(m=[];E;E=E.F)m.push(E);if(c=c.M,E=f.type||f,typeof f=="string")f=new Ge(f,c);else if(f instanceof Ge)f.target=f.target||c;else{var L=f;f=new Ge(E,c),b(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Q=f.g=m[F];L=Pe(Q,E,!0,f)&&L}if(Q=f.g=c,L=Pe(Q,E,!0,f)&&L,L=Pe(Q,E,!1,f)&&L,m)for(F=0;F<m.length;F++)Q=f.g=m[F],L=Pe(Q,E,!1,f)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],E=0;E<m.length;E++)re(m[E]);delete c.g[f],c.h--}}this.F=null},ie.prototype.K=function(c,f,m,E){return this.i.add(String(c),f,!1,m,E)},ie.prototype.L=function(c,f,m,E){return this.i.add(String(c),f,!0,m,E)};function Pe(c,f,m,E){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var Q=f[F];if(Q&&!Q.da&&Q.capture==m){var Ve=Q.listener,pt=Q.ha||Q.src;Q.fa&&Le(c.i,Q),L=Ve.call(pt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Se(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Tt(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,Tt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class ht extends Ke{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(c){Ke.call(this),this.h=c,this.g={}}w(dt,Ke);var It=[];function _r(c){M(c.g,function(f,m){this.g.hasOwnProperty(m)&&G(f)},c),c.g={}}dt.prototype.N=function(){dt.aa.N.call(this),_r(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vs=a.JSON.stringify,Mt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Fs(){}Fs.prototype.h=null;function lp(c){return c.h||(c.h=c.i())}function up(){}var ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nu(){Ge.call(this,"d")}w(nu,Ge);function ru(){Ge.call(this,"c")}w(ru,Ge);var as={},hp=null;function Ea(){return hp=hp||new ie}as.La="serverreachability";function fp(c){Ge.call(this,as.La,c)}w(fp,Ge);function $i(c){const f=Ea();fe(f,new fp(f))}as.STAT_EVENT="statevent";function dp(c,f){Ge.call(this,as.STAT_EVENT,c),this.stat=f}w(dp,Ge);function Vt(c){const f=Ea();fe(f,new dp(f,c))}as.Ma="timingevent";function pp(c,f){Ge.call(this,as.Ma,c),this.size=f}w(pp,Ge);function Hi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function qi(){this.g=!0}qi.prototype.xa=function(){this.g=!1};function lT(c,f,m,E,L,F){c.info(function(){if(c.g)if(F)for(var Q="",Ve=F.split("&"),pt=0;pt<Ve.length;pt++){var Ce=Ve[pt].split("=");if(1<Ce.length){var At=Ce[0];Ce=Ce[1];var Rt=At.split("_");Q=2<=Rt.length&&Rt[1]=="type"?Q+(At+"="+Ce+"&"):Q+(At+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+m+`
`+Q})}function uT(c,f,m,E,L,F,Q){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+Q})}function Us(c,f,m,E){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+fT(c,m)+(E?" "+E:"")})}function hT(c,f){c.info(function(){return"TIMEOUT: "+f})}qi.prototype.info=function(){};function fT(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var E=m[c];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Vs(m)}catch{return f}}var wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},su;function ba(){}w(ba,Fs),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},su=new ba;function yr(c,f,m,E){this.j=c,this.i=f,this.l=m,this.R=E||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gp}function gp(){this.i=null,this.g="",this.h=!1}var _p={},iu={};function ou(c,f,m){c.L=1,c.v=Ra($n(f)),c.m=m,c.P=!0,yp(c,null)}function yp(c,f){c.F=Date.now(),Ta(c),c.A=$n(c.v);var m=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),xp(m.i,"t",E),c.C=0,m=c.j.J,c.h=new gp,c.g=Yp(c.j,m?f:null,!c.m),0<c.O&&(c.M=new ht(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,E=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(It[0]=L.toString()),L=It);for(var F=0;F<L.length;F++){var Q=$(m,L[F],E||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),$i(),lT(c.i,c.u,c.A,c.l,c.R,c.m)}yr.prototype.ca=function(c){c=c.target;const f=this.M;f&&Hn(c)==3?f.j():this.Y(c)},yr.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=Hn(this.g);var f=this.g.Ba();const $s=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Up(this.g)))){this.J||Rt!=4||f==7||(f==8||0>=$s?$i(3):$i(2)),au(this);var m=this.g.Z();this.X=m;t:if(vp(this)){var E=Up(this.g);c="";var L=E.length,F=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),zi(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(E[f],{stream:!(F&&f==L-1)});E.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,uT(this.i,this.u,this.A,this.l,this.R,Rt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,pt=this.g;if((Ve=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(Ve)){var Ce=Ve;break t}}Ce=null}if(m=Ce)Us(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cu(this,m);else{this.o=!1,this.s=3,Vt(12),cs(this),zi(this);break e}}if(this.P){m=!0;let dn;for(;!this.J&&this.C<Q.length;)if(dn=dT(this,Q),dn==iu){Rt==4&&(this.s=4,Vt(14),m=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==_p){this.s=4,Vt(15),Us(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else Us(this.i,this.l,dn,null),cu(this,dn);if(vp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||Q.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)Us(this.i,this.l,Q,"[Invalid Chunked Response]"),cs(this),zi(this);else if(0<Q.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),pu(At),At.M=!0,Vt(11))}}else Us(this.i,this.l,Q,null),cu(this,Q);Rt==4&&cs(this),this.o&&!this.J&&(Rt==4?Wp(this.j,this):(this.o=!1,Ta(this)))}else kT(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),cs(this),zi(this)}}}catch{}finally{}};function vp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function dT(c,f){var m=c.C,E=f.indexOf(`
`,m);return E==-1?iu:(m=Number(f.substring(m,E)),isNaN(m)?_p:(E+=1,E+m>f.length?iu:(f=f.slice(E,E+m),c.C=E+m,f)))}yr.prototype.cancel=function(){this.J=!0,cs(this)};function Ta(c){c.S=Date.now()+c.I,Ep(c,c.I)}function Ep(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Hi(p(c.ba,c),f)}function au(c){c.B&&(a.clearTimeout(c.B),c.B=null)}yr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(hT(this.i,this.A),this.L!=2&&($i(),Vt(17)),cs(this),this.s=2,zi(this)):Ep(this,this.S-c)};function zi(c){c.j.G==0||c.J||Wp(c.j,c)}function cs(c){au(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,_r(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function cu(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||lu(m.h,c))){if(!c.K&&lu(m.h,c)&&m.G==3){try{var E=m.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)xa(m),ka(m);else break e;du(m),Vt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Hi(p(m.Za,m),6e3));if(1>=Tp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else us(m,11)}else if((c.K||m.g==c)&&xa(m),!C(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Ce=L[f];if(m.T=Ce[0],Ce=Ce[1],m.G==2)if(Ce[0]=="c"){m.K=Ce[1],m.ia=Ce[2];const At=Ce[3];At!=null&&(m.la=At,m.j.info("VER="+m.la));const Rt=Ce[4];Rt!=null&&(m.Aa=Rt,m.j.info("SVER="+m.Aa));const $s=Ce[5];$s!=null&&typeof $s=="number"&&0<$s&&(E=1.5*$s,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const dn=c.g;if(dn){const Da=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Da){var F=E.h;F.g||Da.indexOf("spdy")==-1&&Da.indexOf("quic")==-1&&Da.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(uu(F,F.h),F.h=null))}if(E.D){const mu=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;mu&&(E.ya=mu,je(E.I,E.D,mu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var Q=c;if(E.qa=Qp(E,E.J?E.ia:null,E.W),Q.K){Ip(E.h,Q);var Ve=Q,pt=E.L;pt&&(Ve.I=pt),Ve.B&&(au(Ve),Ta(Ve)),E.g=Q}else qp(E);0<m.i.length&&Oa(m)}else Ce[0]!="stop"&&Ce[0]!="close"||us(m,7);else m.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?us(m,7):fu(m):Ce[0]!="noop"&&m.l&&m.l.ta(Ce),m.v=0)}}$i(4)}catch{}}var pT=class{constructor(c,f){this.g=c,this.map=f}};function wp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Tp(c){return c.h?1:c.g?c.g.size:0}function lu(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function uu(c,f){c.g?c.g.add(f):c.h=f}function Ip(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}wp.prototype.cancel=function(){if(this.i=Ap(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ap(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return k(c.i)}function mT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,E=0;E<m;E++)f.push(c[E]);return f}f=[],m=0;for(E in c)f[m++]=c[E];return f}function gT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const E in c)f[m++]=E;return f}}}function Rp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=gT(c),E=mT(c),L=E.length,F=0;F<L;F++)f.call(void 0,E[F],m&&m[F],c)}var Sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _T(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var E=c[m].indexOf("="),L=null;if(0<=E){var F=c[m].substring(0,E);L=c[m].substring(E+1)}else F=c[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ls(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ls){this.h=c.h,Ia(this,c.j),this.o=c.o,this.g=c.g,Aa(this,c.s),this.l=c.l;var f=c.i,m=new Gi;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Cp(this,m),this.m=c.m}else c&&(f=String(c).match(Sp))?(this.h=!1,Ia(this,f[1]||"",!0),this.o=Wi(f[2]||""),this.g=Wi(f[3]||"",!0),Aa(this,f[4]),this.l=Wi(f[5]||"",!0),Cp(this,f[6]||"",!0),this.m=Wi(f[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}ls.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Ki(f,Pp,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Ki(f,Pp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Ki(m,m.charAt(0)=="/"?ET:vT,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Ki(m,bT)),c.join("")};function $n(c){return new ls(c)}function Ia(c,f,m){c.j=m?Wi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Aa(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Cp(c,f,m){f instanceof Gi?(c.i=f,TT(c.i,c.h)):(m||(f=Ki(f,wT)),c.i=new Gi(f,c.h))}function je(c,f,m){c.i.set(f,m)}function Ra(c){return je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Wi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ki(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,yT),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Pp=/[#\/\?@]/g,vT=/[#\?:]/g,ET=/[#\?]/g,wT=/[#\?@]/g,bT=/#/g;function Gi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function vr(c){c.g||(c.g=new Map,c.h=0,c.i&&_T(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Gi.prototype,t.add=function(c,f){vr(this),this.i=null,c=Bs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function kp(c,f){vr(c),f=Bs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Op(c,f){return vr(c),f=Bs(c,f),c.g.has(f)}t.forEach=function(c,f){vr(this),this.g.forEach(function(m,E){m.forEach(function(L){c.call(f,L,E,this)},this)},this)},t.na=function(){vr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let E=0;E<f.length;E++){const L=c[E];for(let F=0;F<L.length;F++)m.push(f[E])}return m},t.V=function(c){vr(this);let f=[];if(typeof c=="string")Op(this,c)&&(f=f.concat(this.g.get(Bs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return vr(this),this.i=null,c=Bs(this,c),Op(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function xp(c,f,m){kp(c,f),0<m.length&&(c.i=null,c.g.set(Bs(c,f),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var E=f[m];const F=encodeURIComponent(String(E)),Q=this.V(E);for(E=0;E<Q.length;E++){var L=F;Q[E]!==""&&(L+="="+encodeURIComponent(String(Q[E]))),c.push(L)}}return this.i=c.join("&")};function Bs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function TT(c,f){f&&!c.j&&(vr(c),c.i=null,c.g.forEach(function(m,E){var L=E.toLowerCase();E!=L&&(kp(this,E),xp(this,L,m))},c)),c.j=f}function IT(c,f){const m=new qi;if(a.Image){const E=new Image;E.onload=g(Er,m,"TestLoadImage: loaded",!0,f,E),E.onerror=g(Er,m,"TestLoadImage: error",!1,f,E),E.onabort=g(Er,m,"TestLoadImage: abort",!1,f,E),E.ontimeout=g(Er,m,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else f(!1)}function AT(c,f){const m=new qi,E=new AbortController,L=setTimeout(()=>{E.abort(),Er(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:E.signal}).then(F=>{clearTimeout(L),F.ok?Er(m,"TestPingServer: ok",!0,f):Er(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Er(m,"TestPingServer: error",!1,f)})}function Er(c,f,m,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(m)}catch{}}function RT(){this.g=new nn}function ST(c,f,m){const E=m||"";try{Rp(c,function(L,F){let Q=L;u(L)&&(Q=Vs(L)),f.push(E+F+"="+encodeURIComponent(Q))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function Sa(c){this.l=c.Ub||null,this.j=c.eb||!1}w(Sa,Fs),Sa.prototype.g=function(){return new Ca(this.l,this.j)},Sa.prototype.i=function(c){return function(){return c}}({});function Ca(c,f){ie.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Ca,ie),t=Ca.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Yi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Np(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Np(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Qi(this):Yi(this),this.readyState==3&&Np(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Qi(this))},t.Qa=function(c){this.g&&(this.response=c,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Yi(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Yi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dp(c){let f="";return M(c,function(m,E){f+=E,f+=":",f+=m,f+=`\r
`}),f}function hu(c,f,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=Dp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):je(c,f,m))}function Xe(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Xe,ie);var CT=/^https?$/i,PT=["POST","PUT"];t=Xe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():su.g(),this.v=this.o?lp(this.o):lp(su),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){Lp(this,F);return}if(c=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)m.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())m.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(PT,f,void 0))||E||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of m)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Lp(this,F)}};function Lp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Mp(c),Pa(c)}function Mp(c){c.A||(c.A=!0,fe(c,"complete"),fe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,fe(this,"complete"),fe(this,"abort"),Pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pa(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vp(this):this.bb())},t.bb=function(){Vp(this)};function Vp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Hn(c)!=4||c.Z()!=2)){if(c.u&&Hn(c)==4)Se(c.Ea,0,c);else if(fe(c,"readystatechange"),Hn(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var E;if(E=Q===0){var L=String(c.D).match(Sp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),E=!CT.test(L?L.toLowerCase():"")}m=E}if(m)fe(c,"complete"),fe(c,"success");else{c.m=6;try{var F=2<Hn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Mp(c)}}finally{Pa(c)}}}}function Pa(c,f){if(c.g){Fp(c);const m=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||fe(c,"ready");try{m.onreadystatechange=E}catch{}}}function Fp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Hn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Mt(f)}};function Up(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function kT(c){const f={};c=(c.g&&2<=Hn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(C(c[E]))continue;var m=P(c[E]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}T(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Bp(c){this.Aa=0,this.i=[],this.j=new qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xi("baseRetryDelayMs",5e3,c),this.cb=Xi("retryDelaySeedMs",1e4,c),this.Wa=Xi("forwardChannelMaxRetries",2,c),this.wa=Xi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new wp(c&&c.concurrentRequestLimit),this.Da=new RT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bp.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,E){Vt(0),this.W=c,this.H=f||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=Qp(this,null,this.W),Oa(this)};function fu(c){if(jp(c),c.G==3){var f=c.U++,m=$n(c.I);if(je(m,"SID",c.K),je(m,"RID",f),je(m,"TYPE","terminate"),Ji(c,m),f=new yr(c,c.j,f),f.L=2,f.v=Ra($n(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Yp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ta(f)}Gp(c)}function ka(c){c.g&&(pu(c),c.g.cancel(),c.g=null)}function jp(c){ka(c),c.u&&(a.clearTimeout(c.u),c.u=null),xa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Oa(c){if(!bp(c.h)&&!c.s){c.s=!0;var f=c.Ga;se||fn(),ne||(se(),ne=!0),We.add(f,c),c.B=0}}function OT(c,f){return Tp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Hi(p(c.Ga,c,f),Kp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new yr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),b(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Hp(this,L,f),m=$n(this.I),je(m,"RID",c),je(m,"CVER",22),this.D&&je(m,"X-HTTP-Session-Id",this.D),Ji(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Dp(F)))+"&"+f:this.m&&hu(m,this.m,F)),uu(this.h,L),this.Ua&&je(m,"TYPE","init"),this.P?(je(m,"$req",f),je(m,"SID","null"),L.T=!0,ou(L,m,null)):ou(L,m,f),this.G=2}}else this.G==3&&(c?$p(this,c):this.i.length==0||bp(this.h)||$p(this))};function $p(c,f){var m;f?m=f.l:m=c.U++;const E=$n(c.I);je(E,"SID",c.K),je(E,"RID",m),je(E,"AID",c.T),Ji(c,E),c.m&&c.o&&hu(E,c.m,c.o),m=new yr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=Hp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),uu(c.h,m),ou(m,E,f)}function Ji(c,f){c.H&&M(c.H,function(m,E){je(f,E,m)}),c.l&&Rp({},function(m,E){je(f,E,m)})}function Hp(c,f,m){m=Math.min(c.i.length,m);var E=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Q=["count="+m];F==-1?0<m?(F=L[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Ve=!0;for(let pt=0;pt<m;pt++){let Ce=L[pt].g;const At=L[pt].map;if(Ce-=F,0>Ce)F=Math.max(0,L[pt].g-100),Ve=!1;else try{ST(At,Q,"req"+Ce+"_")}catch{E&&E(At)}}if(Ve){E=Q.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,E}function qp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;se||fn(),ne||(se(),ne=!0),We.add(f,c),c.v=0}}function du(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Hi(p(c.Fa,c),Kp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Hi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),ka(this),zp(this))};function pu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function zp(c){c.g=new yr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=$n(c.qa);je(f,"RID","rpc"),je(f,"SID",c.K),je(f,"AID",c.T),je(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&je(f,"TO",c.ja),je(f,"TYPE","xmlhttp"),Ji(c,f),c.m&&c.o&&hu(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Ra($n(f)),m.m=null,m.P=!0,yp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,ka(this),du(this),Vt(19))};function xa(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Wp(c,f){var m=null;if(c.g==f){xa(c),pu(c),c.g=null;var E=2}else if(lu(c.h,f))m=f.D,Ip(c.h,f),E=1;else return;if(c.G!=0){if(f.o)if(E==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;E=Ea(),fe(E,new pp(E,m)),Oa(c)}else qp(c);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&OT(c,f)||E==2&&du(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),L){case 1:us(c,5);break;case 4:us(c,10);break;case 3:us(c,6);break;default:us(c,2)}}}function Kp(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function us(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),E=c.Xa;const L=!E;E=new ls(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ia(E,"https"),Ra(E),L?IT(E.toString(),m):AT(E.toString(),m)}else Vt(2);c.G=0,c.l&&c.l.sa(f),Gp(c),jp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Gp(c){if(c.G=0,c.ka=[],c.l){const f=Ap(c.h);(f.length!=0||c.i.length!=0)&&(x(c.ka,f),x(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function Qp(c,f,m){var E=m instanceof ls?$n(m):new ls(m);if(E.g!="")f&&(E.g=f+"."+E.g),Aa(E,E.s);else{var L=a.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new ls(null);E&&Ia(F,E),f&&(F.g=f),L&&Aa(F,L),m&&(F.l=m),E=F}return m=c.D,f=c.ya,m&&f&&je(E,m,f),je(E,"VER",c.la),Ji(c,E),E}function Yp(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Xe(new Sa({eb:m})):new Xe(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xp(){}t=Xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Na(){}Na.prototype.g=function(c,f){return new Qt(c,f)};function Qt(c,f){ie.call(this),this.g=new Bp(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!C(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!C(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new js(this)}w(Qt,ie),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){fu(this.g)},Qt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Vs(c),c=m);f.i.push(new pT(f.Ya++,c)),f.G==3&&Oa(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,Qt.aa.N.call(this)};function Jp(c){nu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}w(Jp,nu);function Zp(){ru.call(this),this.status=1}w(Zp,ru);function js(c){this.g=c}w(js,Xp),js.prototype.ua=function(){fe(this.g,"a")},js.prototype.ta=function(c){fe(this.g,new Jp(c))},js.prototype.sa=function(c){fe(this.g,new Zp)},js.prototype.ra=function(){fe(this.g,"b")},Na.prototype.createWebChannel=Na.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,W0=function(){return new Na},z0=function(){return Ea()},q0=as,Kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,dc=wa,mp.COMPLETE="complete",H0=mp,up.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",ie.prototype.listen=ie.prototype.K,ao=up,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,$0=Xe}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});const l_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ss=new od("@firebase/firestore");function Gs(){return Ss.logLevel}function te(t,...e){if(Ss.logLevel<=Ee.DEBUG){const n=e.map(yd);Ss.debug(`Firestore (${Mi}): ${t}`,...n)}}function cr(t,...e){if(Ss.logLevel<=Ee.ERROR){const n=e.map(yd);Ss.error(`Firestore (${Mi}): ${t}`,...n)}}function bi(t,...e){if(Ss.logLevel<=Ee.WARN){const n=e.map(yd);Ss.warn(`Firestore (${Mi}): ${t}`,...n)}}function yd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Ne(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class K0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class MN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VN{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new K0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Ct(e)}}class FN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class UN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new FN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new BN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$N(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Cn.isNumericId(e),s=Cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Cn.extractNumericId(e).compare(Cn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class qe extends Cn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const HN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Cn{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return HN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(qe.fromString(e))}static fromName(e){return new he(qe.fromString(e).popFirst(5))}static empty(){return new he(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new qe(e.slice()))}}function qN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Gr(s,he.empty(),e)}function zN(t){return new Gr(t.readTime,t.key,-1)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(_e.min(),he.empty(),-1)}static max(){return new Gr(_e.max(),he.empty(),-1)}}function WN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Vi(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==KN)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function QN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ol.oe=-1;function xl(t){return t==null}function Kc(t){return t===0&&1/t==-1/0}function YN(t){return typeof t=="number"&&Number.isInteger(t)&&!Kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=u_(e)),e=JN(t.get(n),e);return u_(e)}function JN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function u_(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ut{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new f_(this.data.getIterator())}getIteratorFrom(e){return new f_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class f_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Y0("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const ZN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=ZN.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nl(t){const e=t.mapValue.fields.__previous_value__;return vd(e)?Nl(e):e}function Ko(t){const e=Qr(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Go{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vd(t)?4:n2(t)?9007199254740991:t2(t)?10:11:me()}function Fn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),a=Qr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Kc(o)===Kc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(h_(o)!==h_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fn(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function Qo(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return d_(t.timestampValue,e.timestampValue);case 4:return d_(Ko(t),Ko(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Yr(i),l=Yr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Ie(a[u],l[u]);if(h!==0)return h}return Ie(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ie(nt(i.latitude),nt(o.latitude));return a!==0?a:Ie(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return p_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=Ie(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:p_(g,w)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ya.mapValue&&o===Ya.mapValue)return 0;if(i===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Ie(l[d],h[d]);if(p!==0)return p;const g=Ii(a[l[d]],u[h[d]]);if(g!==0)return g}return Ie(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function d_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Qr(t),r=Qr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function p_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ii(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function Ai(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gh(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function pc(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nl(t);return e?16+pc(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+pc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return is(r.fields,(i,o)=>{s+=i.length+pc(o)}),s}(t.mapValue);default:throw me()}}function Qh(t){return!!t&&"integerValue"in t}function Ed(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mc(t){return!!t&&"mapValue"in t}function t2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function To(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=To(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=To(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!mc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=To(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];mc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(To(this.value))}}function X0(t){const e=[];return is(t.fields,(n,r)=>{const s=new yt([n]);if(mc(r)){const i=X0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gc{constructor(e,n){this.position=e,this.inclusive=n}}function __(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Ii(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class J0{}class at extends J0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new i2(e,n,r):n==="array-contains"?new c2(e,r):n==="in"?new l2(e,r):n==="not-in"?new u2(e,r):n==="array-contains-any"?new h2(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o2(e,r):new a2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ii(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends J0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Un(e,n)}matches(e){return Z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Z0(t){return t.op==="and"}function ew(t){return s2(t)&&Z0(t)}function s2(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Yh(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Ai(t.value);if(ew(t))return t.filters.map(e=>Yh(e)).join(",");{const e=t.filters.map(n=>Yh(n)).join(",");return`${t.op}(${e})`}}function tw(t,e){return t instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof Un?function(r,s){return s instanceof Un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&tw(o,s.filters[a]),!0):!1}(t,e):void me()}function nw(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Ai(n.value)}`}(t):t instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(nw).join(" ,")+"}"}(t):"Filter"}class i2 extends at{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class o2 extends at{constructor(e,n){super(e,"in",n),this.keys=rw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a2 extends at{constructor(e,n){super(e,"not-in",n),this.keys=rw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class c2 extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ed(n)&&Qo(n.arrayValue,this.value)}}class l2 extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class u2 extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qo(this.value.arrayValue,n)}}class h2 extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ed(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function v_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new f2(t,e,n,r,s,i,o)}function wd(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ai(r)).join(",")),e.ue=n}return e.ue}function bd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function Xh(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function d2(t,e,n,r,s,i,o,a){return new Dl(t,e,n,r,s,i,o,a)}function sw(t){return new Dl(t)}function E_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p2(t){return t.collectionGroup!==null}function Io(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Qc(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new Qc(yt.keyField(),r))}return e.ce}function Mn(t){const e=ye(t);return e.le||(e.le=m2(e,Io(t))),e.le}function m2(t,e){if(t.limitType==="F")return v_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qc(s.field,i)});const n=t.endAt?new Gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gc(t.startAt.position,t.startAt.inclusive):null;return v_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jh(t,e,n){return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return bd(Mn(t),Mn(e))&&t.limitType===e.limitType}function iw(t){return`${wd(Mn(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>nw(s)).join(", ")}]`),xl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ai(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ai(s)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function Ml(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Io(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=__(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Io(r),s)||r.endAt&&!function(o,a,l){const u=__(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Io(r),s))}(t,e)}function g2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ow(t){return(e,n)=>{let r=!1;for(const s of Io(t)){const i=_2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _2(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ii(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Q0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Ye(he.comparator);function lr(){return y2}const aw=new Ye(he.comparator);function co(...t){let e=aw;for(const n of t)e=e.insert(n.key,n);return e}function cw(t){let e=aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _s(){return Ao()}function lw(){return Ao()}function Ao(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const v2=new Ye(he.comparator),E2=new ut(he.comparator);function be(...t){let e=E2;for(const n of t)e=e.add(n);return e}const w2=new ut(Ie);function b2(){return w2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kc(e)?"-0":e}}function uw(t){return{integerValue:""+t}}function T2(t,e){return YN(e)?uw(e):Td(t,e)}/**
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
 */class Vl{constructor(){this._=void 0}}function I2(t,e,n){return t instanceof Yc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vd(i)&&(i=Nl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Yo?fw(t,e):t instanceof Xo?dw(t,e):function(s,i){const o=hw(s,i),a=w_(o)+w_(s.Pe);return Qh(o)&&Qh(s.Pe)?uw(a):Td(s.serializer,a)}(t,e)}function A2(t,e,n){return t instanceof Yo?fw(t,e):t instanceof Xo?dw(t,e):n}function hw(t,e){return t instanceof Xc?function(r){return Qh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yc extends Vl{}class Yo extends Vl{constructor(e){super(),this.elements=e}}function fw(t,e){const n=pw(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Vl{constructor(e){super(),this.elements=e}}function dw(t,e){let n=pw(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class Xc extends Vl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function w_(t){return nt(t.integerValue||t.doubleValue)}function pw(t){return Ed(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function R2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Yo&&s instanceof Yo||r instanceof Xo&&s instanceof Xo?Ti(r.elements,s.elements,Fn):r instanceof Xc&&s instanceof Xc?Fn(r.Pe,s.Pe):r instanceof Yc&&s instanceof Yc}(t.transform,e.transform)}class S2{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fl{}function mw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Id(t.key,ln.none()):new pa(t.key,t.data,ln.none());{const n=t.data,r=Kt.empty();let s=new ut(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new os(t.key,r,new Xt(s.toArray()),ln.none())}}function C2(t,e,n){t instanceof pa?function(s,i,o){const a=s.value.clone(),l=T_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,i,o){if(!gc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=T_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(gw(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof pa?function(i,o,a,l){if(!gc(i.precondition,o))return a;const u=i.value.clone(),h=I_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof os?function(i,o,a,l){if(!gc(i.precondition,o))return a;const u=I_(i.fieldTransforms,l,o),h=o.data;return h.setAll(gw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return gc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function P2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hw(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function b_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ti(r,s,(i,o)=>R2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends Fl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends Fl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function T_(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,A2(o,a,n[s]))}return r}function I_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,I2(i,o,e))}return r}class Id extends Fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k2 extends Fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&C2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=mw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(n,r)=>b_(n,r))&&Ti(this.baseMutations,e.baseMutations,(n,r)=>b_(n,r))}}class Ad{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return v2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ad(e,n,r,s)}}/**
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
 */var rt,Ae;function D2(t){switch(t){default:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function _w(t){if(t===void 0)return cr("GRPC error has no .code"),H.UNKNOWN;switch(t){case rt.OK:return H.OK;case rt.CANCELLED:return H.CANCELLED;case rt.UNKNOWN:return H.UNKNOWN;case rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case rt.INTERNAL:return H.INTERNAL;case rt.UNAVAILABLE:return H.UNAVAILABLE;case rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case rt.NOT_FOUND:return H.NOT_FOUND;case rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case rt.ABORTED:return H.ABORTED;case rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case rt.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Ae=rt||(rt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const M2=new Hr([4294967295,4294967295],0);function A_(t){const e=L2().encode(t),n=new j0;return n.update(e),new Uint8Array(n.digest())}function R_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Rd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Hr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(M2)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=A_(e),[r,s]=R_(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ee(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Rd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=A_(e),[r,s]=R_(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ul(_e.min(),s,new Ye(Ie),lr(),be())}}class ma{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ma(r,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class yw{constructor(e,n){this.targetId=e,this.me=n}}class vw{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class S_{constructor(){this.fe=0,this.ge=C_(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),n=be(),r=be();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new ma(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=C_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class V2{constructor(e){this.Be=e,this.Le=new Map,this.ke=lr(),this.qe=Xa(),this.Qe=Xa(),this.Ke=new Ye(Ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Xh(i))if(r===0){const o=new he(i.path);this.We(n,o,xt.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Yr(r).toUint8Array()}catch(l){if(l instanceof Y0)return bi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Rd(o,s,i)}catch(l){return bi(l instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Le.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Xh(a.target)){const l=new he(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,xt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=be();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ul(e,n,this.Ke,this.ke,r);return this.ke=lr(),this.qe=Xa(),this.Qe=Xa(),this.Ke=new Ye(Ie),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new S_,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ut(Ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new S_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new Ye(he.comparator)}function C_(){return new Ye(he.comparator)}const F2={asc:"ASCENDING",desc:"DESCENDING"},U2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},B2={and:"AND",or:"OR"};class j2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zh(t,e){return t.useProto3Json||xl(e)?e:{value:e}}function Jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ew(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $2(t,e){return Jc(t,e.toTimestamp())}function Vn(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=Qr(n);return new lt(r.seconds,r.nanos)}(t))}function Sd(t,e){return ef(t,e).canonicalString()}function ef(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ww(t){const e=qe.fromString(t);return Ne(Rw(e)),e}function tf(t,e){return Sd(t.databaseId,e.path)}function qu(t,e){const n=ww(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Tw(n))}function bw(t,e){return Sd(t.databaseId,e)}function H2(t){const e=ww(t);return e.length===4?qe.emptyPath():Tw(e)}function nf(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tw(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P_(t,e,n){return{name:tf(t,e),fields:n.value.mapValue.fields}}function q2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ne(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(Ne(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:_w(u.code);return new ce(h,u.message||"")}(o);n=new vw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qu(t,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):_e.min(),a=new Kt({mapValue:{fields:r.document.fields}}),l=xt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new _c(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qu(t,r.document),i=r.readTime?Vn(r.readTime):_e.min(),o=xt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new _c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qu(t,r.document),i=r.removedTargetIds||[];n=new _c([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new N2(s,i),a=r.targetId;n=new yw(a,o)}}return n}function z2(t,e){let n;if(e instanceof pa)n={update:P_(t,e.key,e.value)};else if(e instanceof Id)n={delete:tf(t,e.key)};else if(e instanceof os)n={update:P_(t,e.key,e.data),updateMask:eD(e.fieldMask)};else{if(!(e instanceof k2))return me();n={verify:tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Yc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function W2(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(_e.min())&&(o=Vn(i)),new S2(o,s.transformResults||[])}(n,e))):[]}function K2(t,e){return{documents:[bw(t,e.path)]}}function G2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bw(t,s);const i=function(u){if(u.length!==0)return Aw(Un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ys(p.field),direction:X2(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Zh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function Q2(t){let e=H2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=Iw(d);return p instanceof Un&&ew(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(w){return new Qc(Xs(w.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,xl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Gc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Gc(g,p)}(n.endAt)),d2(e,s,o,i,a,"F",l,u)}function Y2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Iw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xs(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(r=>Iw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function X2(t){return F2[t]}function J2(t){return U2[t]}function Z2(t){return B2[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return yt.fromServerFormat(t.fieldPath)}function Aw(t){return t instanceof at?function(n){if(n.op==="=="){if(g_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(m_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(m_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:J2(n.op),value:n.value}}}(t):t instanceof Un?function(n){const r=n.getFilters().map(s=>Aw(s));return r.length===1?r[0]:{compositeFilter:{op:Z2(n.op),filters:r}}}(t):me()}function eD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rD{constructor(){this.ln=new sD}addToCollectionParentIndex(e,n){return this.ln.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Gr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class sD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(qe.comparator)).toArray()}}/**
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
 */const k_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function O_([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class iD{constructor(e){this.Gn=e,this.buffer=new ut(O_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();O_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fi(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Yn(3e5)})}}class aD{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Ol.oe);const r=new iD(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(k_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),k_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Gs()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
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
 */class lD{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ro(r.mutation,s,Xt.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=co();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=lr();const o=Ao(),a=function(){return Ao()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof os)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ro(h.mutation,u,h.mutation.getFieldMask(),lt.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new uD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ao();let s=new Ye((o,a)=>o-a),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Xt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||be()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=lw();h.forEach(p=>{if(!i.has(p)){const g=mw(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(_s());let a=-1,l=i;return o.next(u=>j.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,be())).next(h=>({batchId:a,changes:cw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=co();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(d,p){return new Dl(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,xt.newInvalidDocument(h)))});let a=co();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Ro(h.mutation,u,Xt.empty(),lt.now()),Ml(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return j.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:nD(s.bundledQuery),readTime:Vn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class dD{constructor(){this.overlays=new Ye(he.comparator),this.dr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_s();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=_s(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=_s(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=_s(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return j.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new x2(n,r));let i=this.dr.get(n);i===void 0&&(i=be(),this.dr.set(n,i)),this.dr.set(n,i.add(r.key))}}/**
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
 */class pD{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Er=new ut(ft.Ar),this.Rr=new ut(ft.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ft(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new he(new qe([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new he(new qe([])),r=new ft(n,e),s=new ft(n,e+1);let i=be();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Er.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return he.comparator(e.key,n.key)||Ie(e.br,n.br)}static Vr(e,n){return Ie(e.br,n.br)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ut(ft.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new O2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new ft(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ie);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),j.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ft(new he(i),0);let a=new ut(Ie);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.br)),!0)},o),j.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return j.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,n){const r=new ft(n,0),s=this.vr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.Nr=e,this.docs=function(){return new Ye(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const o=n.path,a=new he(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WN(zN(h),r)<=0||(s.has(h.key)||Ml(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Br(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _D(this)}getSize(e){return j.resolve(this.size)}}class _D extends lD{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.persistence=e,this.Lr=new Ls(n=>wd(n),bd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new Cd,this.targetCount=0,this.Qr=Ri.qn()}forEachTarget(e,n){return this.Lr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),j.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Un(n),j.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Lr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Lr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Lr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ol(0),this.Ur=!1,this.Ur=!0,this.Wr=new pD,this.referenceDelegate=e(this),this.Gr=new yD(this),this.indexManager=new rD,this.remoteDocumentCache=function(s){return new gD(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new tD(n),this.jr=new fD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new mD(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new vD(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return j.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class vD extends GN{constructor(e){super(),this.currentSequenceNumber=e}}class Pd{constructor(e){this.persistence=e,this.Zr=new Cd,this.Xr=null}static ei(e){return new Pd(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),j.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,r=>{const s=he.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return j.or([()=>j.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Zc{constructor(e,n){this.persistence=e,this.ri=new Ls(r=>XN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cD(this,n)}static ei(e,n){return new Zc(e,n)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return j.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Br(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pc(e.data.value)),n}ir(e,n,r){return j.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kd(e,n.fromCache,r,s)}}/**
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
 */class wD{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return WP()?8:QN(Dt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ED;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Gs()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(Gs()<=Ee.DEBUG&&te("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Gs()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):j.resolve())}Xi(e,n){if(E_(n))return j.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jh(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(e,Jh(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,r,s){return E_(n)||s.isEqual(_e.min())?j.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?j.resolve(null):(Gs()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qs(n)),this.os(e,o,n,qN(s,-1)).next(a=>a))})}rs(e,n){let r=new ut(ow(e));return n.forEach((s,i)=>{Ml(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Gs()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.Zi.getDocumentsMatchingQuery(e,n,Gr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(Ie),this.cs=new Ls(i=>wd(i),bd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function TD(t,e,n,r){return new bD(t,e,n,r)}async function Cw(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=be();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function ID(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=j.resolve();return p.forEach(w=>{g=g.next(()=>h.getEntry(l,w)).next(k=>{const x=u.docVersions.get(w);Ne(x!==null),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=be();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Pw(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function AD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let l=lr(),u=be();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(RD(i,o,e.documentUpdates).next(h=>{l=h.Is,u=h.ds})),!r.isEqual(_e.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.us=s,i))}function RD(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=lr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,ds:s}})}function SD(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CD(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function rf(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function x_(t,e,n){const r=ye(t);let s=_e.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=ye(l),p=d.cs.get(h);return p!==void 0?j.resolve(d.us.get(p)):d.Gr.getTargetData(u,h)}(r,o,Mn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:be())).next(a=>(PD(r,g2(e),a),{documents:a,Es:i})))}function PD(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class N_{constructor(){this.activeTargetIds=b2()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kD{constructor(){this._o=new N_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new N_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class D_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const St="WebChannelConnection";class DD extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=zu(),l=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,i,o),this.Lo(n,l,u,s).then(h=>(te("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw bi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=xD[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,r,s){const i=zu();return new Promise((o,a)=>{const l=new $0;l.setWithCredentials(!0),l.listenOnce(H0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dc.NO_ERROR:const h=l.getResponseJson();te(St,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case dc.TIMEOUT:te(St,`RPC '${e}' ${i} timed out`),a(new ce(H.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const d=l.getStatus();if(te(St,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const w=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(N)>=0?N:H.UNKNOWN}(g.status);a(new ce(w,g.message))}else a(new ce(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(St,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(St,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}qo(e,n,r){const s=zu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=W0(),a=z0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");te(St,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const w=new ND({Eo:x=>{g?te(St,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(p||(te(St,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(St,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},Ao:()=>d.close()}),k=(x,N,C)=>{x.listen(N,v=>{try{C(v)}catch(R){setTimeout(()=>{throw R},0)}})};return k(d,ao.EventType.OPEN,()=>{g||(te(St,`RPC '${e}' stream ${s} transport opened.`),w.So())}),k(d,ao.EventType.CLOSE,()=>{g||(g=!0,te(St,`RPC '${e}' stream ${s} transport closed`),w.Do())}),k(d,ao.EventType.ERROR,x=>{g||(g=!0,bi(St,`RPC '${e}' stream ${s} transport errored:`,x),w.Do(new ce(H.UNAVAILABLE,"The operation could not be completed")))}),k(d,ao.EventType.MESSAGE,x=>{var N;if(!g){const C=x.data[0];Ne(!!C);const v=C,R=(v==null?void 0:v.error)||((N=v[0])===null||N===void 0?void 0:N.error);if(R){te(St,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let M=function(_){const b=rt[_];if(b!==void 0)return _w(b)}(D),T=R.message;M===void 0&&(M=H.INTERNAL,T="Unknown error status: "+D+" with message "+R.message),g=!0,w.Do(new ce(M,T)),d.close()}else te(St,`RPC '${e}' stream ${s} received:`,C),w.vo(C)}}),k(a,q0.STAT_EVENT,x=>{x.stat===Kh.PROXY?te(St,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Kh.NOPROXY&&te(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.bo()},0),w}}function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){return new j2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r,s,i,o,a,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new kw(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ce(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LD extends Ow{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=q2(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Vn(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=nf(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Xh(l)?{documents:K2(i,l)}:{query:G2(i,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ew(i,o.resumeToken);const u=Zh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=Jc(i,o.snapshotVersion.toTimestamp());const u=Zh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Y2(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=nf(this.serializer),n.removeTarget=e,this.c_(n)}}class MD extends Ow{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=W2(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=nf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>z2(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(cr(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.k_.add(4),await ga(u),u.K_.set("Unknown"),u.k_.delete(4),await jl(u)}(this))})}),this.K_=new FD(r,s)}}async function jl(t){if(Ms(t))for(const e of t.q_)await e(!0)}async function ga(t){for(const e of t.q_)await e(!1)}function xw(t,e){const n=ye(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Dd(n)?Nd(n):Ui(n).s_()&&xd(n,e))}function Od(t,e){const n=ye(t),r=Ui(n);n.L_.delete(e),r.s_()&&Nw(n,e),n.L_.size===0&&(r.s_()?r.a_():Ms(n)&&n.K_.set("Unknown"))}function xd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ui(t).V_(e)}function Nw(t,e){t.U_.xe(e),Ui(t).m_(e)}function Nd(t){t.U_=new V2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ui(t).start(),t.K_.F_()}function Dd(t){return Ms(t)&&!Ui(t).i_()&&t.L_.size>0}function Ms(t){return ye(t).k_.size===0}function Dw(t){t.U_=void 0}async function BD(t){t.K_.set("Online")}async function jD(t){t.L_.forEach((e,n)=>{xd(t,e)})}async function $D(t,e){Dw(t),Dd(t)?(t.K_.O_(e),Nd(t)):t.K_.set("Unknown")}async function HD(t,e,n){if(t.K_.set("Online"),e instanceof vw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.L_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.L_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await el(t,r)}else if(e instanceof _c?t.U_.$e(e):e instanceof yw?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await Pw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.L_.get(u);h&&i.L_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.L_.get(l);if(!h)return;i.L_.set(l,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),Nw(i,l);const d=new Vr(h.target,l,u,h.sequenceNumber);xd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await el(t,r)}}async function el(t,e,n){if(!Fi(e))throw e;t.k_.add(1),await ga(t),t.K_.set("Offline"),n||(n=()=>Pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await jl(t)})}function Lw(t,e){return e().catch(n=>el(t,n,e))}async function $l(t){const e=ye(t),n=Jr(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;qD(e);)try{const s=await SD(e.localStore,r);if(s===null){e.B_.length===0&&n.a_();break}r=s.batchId,zD(e,s)}catch(s){await el(e,s)}Mw(e)&&Vw(e)}function qD(t){return Ms(t)&&t.B_.length<10}function zD(t,e){t.B_.push(e);const n=Jr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Mw(t){return Ms(t)&&!Jr(t).i_()&&t.B_.length>0}function Vw(t){Jr(t).start()}async function WD(t){Jr(t).w_()}async function KD(t){const e=Jr(t);for(const n of t.B_)e.g_(n.mutations)}async function GD(t,e,n){const r=t.B_.shift(),s=Ad.from(r,e,n);await Lw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $l(t)}async function QD(t,e){e&&Jr(t).f_&&await async function(r,s){if(function(o){return D2(o)&&o!==H.ABORTED}(s.code)){const i=r.B_.shift();Jr(r).__(),await Lw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $l(r)}}(t,e),Mw(t)&&Vw(t)}async function L_(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Ms(n);n.k_.add(3),await ga(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await jl(n)}async function YD(t,e){const n=ye(t);e?(n.k_.delete(2),await jl(n)):e||(n.k_.add(2),await ga(n),n.K_.set("Unknown"))}function Ui(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new LD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:BD.bind(null,t),mo:jD.bind(null,t),po:$D.bind(null,t),R_:HD.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Dd(t)?Nd(t):t.K_.set("Unknown")):(await t.W_.stop(),Dw(t))})),t.W_}function Jr(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new MD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:WD.bind(null,t),po:QD.bind(null,t),p_:KD.bind(null,t),y_:GD.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await $l(t)):(await t.G_.stop(),t.B_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ld(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Fi(t))return new ce(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{static emptySet(e){return new fi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class M_{constructor(){this.z_=new Ye(he.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Si(e,n,fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class JD{constructor(){this.queries=V_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=V_(),i.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new ce(H.ABORTED,"Firestore shutting down"))}}function V_(){return new Ls(t=>iw(t),Ll)}async function ZD(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new XD,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Md(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Vd(n)}async function eL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tL(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&Vd(n)}function nL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Vd(t){t.X_.forEach(e=>{e.next()})}var sf,F_;(F_=sf||(sf={})).na="default",F_.Cache="cache";class rL{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==sf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.key=e}}class Uw{constructor(e){this.key=e}}class sL{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=ow(e),this.ma=new fi(this.Va)}get fa(){return this.Ea}ga(e,n){const r=n?n.pa:new M_,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Ml(this.query,d)?d:null,w=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?w!==k&&(r.track({type:3,doc:g}),x=!0):this.ya(p,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.Va(g,l)>0||u&&this.Va(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),x=!0):p&&!g&&(r.track({type:1,doc:p}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,w){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return k(g)-k(w)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new Si(this.query,e.ma,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new M_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Uw(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Fw(r))}),n}va(e){this.Ea=e.Es,this.Ra=be();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Si.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class iL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oL{constructor(e){this.key=e,this.Fa=!1}}class aL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ls(a=>iw(a),Ll),this.Oa=new Map,this.Na=new Set,this.Ba=new Ye(he.comparator),this.La=new Map,this.ka=new Cd,this.qa={},this.Qa=new Map,this.Ka=Ri.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function cL(t,e,n=!0){const r=zw(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Bw(r,e,n,!0),s}async function lL(t,e){const n=zw(t);await Bw(n,e,!0,!1)}async function Bw(t,e,n,r){const s=await CD(t.localStore,Mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await uL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&xw(t.remoteStore,s),a}async function uL(t,e,n,r,s){t.Ua=(d,p,g)=>async function(k,x,N,C){let v=x.view.ga(N);v.ss&&(v=await x_(k.localStore,x.query,!1).then(({documents:T})=>x.view.ga(T,v)));const R=C&&C.targetChanges.get(x.targetId),D=C&&C.targetMismatches.get(x.targetId)!=null,M=x.view.applyChanges(v,k.isPrimaryClient,R,D);return B_(k,x.targetId,M.ba),M.snapshot}(t,d,p,g);const i=await x_(t.localStore,e,!0),o=new sL(e,i.Es),a=o.ga(i.documents),l=ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);B_(t,n,u.ba);const h=new iL(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function hL(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Ll(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Od(r.remoteStore,s.targetId),of(r,s.targetId)}).catch(Vi)):(of(r,s.targetId),await rf(r.localStore,s.targetId,!0))}async function fL(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Od(n.remoteStore,r.targetId))}async function dL(t,e,n){const r=EL(t);try{const s=await function(o,a){const l=ye(o),u=lt.now(),h=a.reduce((g,w)=>g.add(w.key),be());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=lr(),k=be();return l.hs.getEntries(g,h).next(x=>{w=x,w.forEach((N,C)=>{C.isValidDocument()||(k=k.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(x=>{d=x;const N=[];for(const C of a){const v=P2(C,d.get(C.key).overlayedDocument);v!=null&&N.push(new os(C.key,v,X0(v.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,a)}).next(x=>{p=x;const N=x.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:p.batchId,changes:cw(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(Ie)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await _a(r,s.changes),await $l(r.remoteStore)}catch(s){const i=Md(s,"Failed to persist write");n.reject(i)}}async function jw(t,e){const n=ye(t);try{const r=await AD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.La.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await _a(n,r,e)}catch(r){await Vi(r)}}function U_(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.J_)p.ea(a)&&(u=!0)}),u&&Vd(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pL(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.La.get(e),i=s&&s.key;if(i){let o=new Ye(he.comparator);o=o.insert(i,xt.newNoDocument(i,_e.min()));const a=be().add(i),l=new Ul(_e.min(),new Map,new Ye(Ie),o,a);await jw(r,l),r.Ba=r.Ba.remove(i),r.La.delete(e),Fd(r)}else await rf(r.localStore,e,!1).then(()=>of(r,e,n)).catch(Vi)}async function mL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await ID(n.localStore,e);Hw(n,r,null),$w(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _a(n,s)}catch(s){await Vi(s)}}async function gL(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ne(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Hw(r,e,n),$w(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _a(r,s)}catch(s){await Vi(s)}}function $w(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function Hw(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||qw(t,r)})}function qw(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(Od(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),Fd(t))}function B_(t,e,n){for(const r of n)r instanceof Fw?(t.ka.addReference(r.key,e),_L(t,r)):r instanceof Uw?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||qw(t,r.key)):me()}function _L(t,e){const n=e.key,r=n.path.canonicalString();t.Ba.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),Fd(t))}function Fd(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new he(qe.fromString(e)),r=t.Ka.next();t.La.set(r,new oL(n)),t.Ba=t.Ba.insert(n,r),xw(t.remoteStore,new Vr(Mn(sw(n.path)),r,"TargetPurposeLimboResolution",Ol.oe))}}async function _a(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=kd.zi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,u){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(u,p=>j.forEach(p.Wi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>j.forEach(p.Gi,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Fi(d))throw d;te("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.us.get(p),w=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(w);h.us=h.us.insert(p,k)}}}(r.localStore,i))}async function yL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Cw(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(l=>{l.reject(new ce(H.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _a(n,r.Ts)}}function vL(t,e){const n=ye(t),r=n.La.get(e);if(r&&r.Fa)return be().add(r.key);{let s=be();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function zw(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pL.bind(null,e),e.Ma.R_=tL.bind(null,e.eventManager),e.Ma.Wa=nL.bind(null,e.eventManager),e}function EL(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gL.bind(null,e),e}class tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return TD(this.persistence,new wD,e.initialUser,this.serializer)}ja(e){return new Sw(Pd.ei,this.serializer)}za(e){return new kD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tl.provider={build:()=>new tl};class wL extends tl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof Zc);const r=this.persistence.referenceDelegate.garbageCollector;return new oD(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Sw(r=>Zc.ei(r,n),this.serializer)}}class af{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>U_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yL.bind(null,this.syncEngine),await YD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JD}()}createDatastore(e){const n=Bl(e.databaseInfo.databaseId),r=function(i){return new DD(i)}(e.databaseInfo);return function(i,o,a,l){return new VD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new UD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>U_(this.syncEngine,n,0),function(){return D_.p()?new D_:new OD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new aL(s,i,o,a,l,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ga(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}af.provider={build:()=>new af};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=G0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Md(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ku(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IL(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>L_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>L_(e.remoteStore,s)),t._onlineComponents=e}async function IL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;bi("Error using user provided cache. Falling back to memory cache: "+n),await Ku(t,new tl)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Ku(t,new wL(void 0));return t._offlineComponents}async function Ww(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await j_(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await j_(t,new af))),t._onlineComponents}function AL(t){return Ww(t).then(e=>e.syncEngine)}async function RL(t){const e=await Ww(t),n=e.eventManager;return n.onListen=cL.bind(null,e.syncEngine),n.onUnlisten=hL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fL.bind(null,e.syncEngine),n}function SL(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new bL({next:p=>{h.eu(),o.enqueueAndForget(()=>eL(i,d)),p.fromCache&&l.source==="server"?u.reject(new ce(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new rL(a,h,{includeMetadataChanges:!0,ua:!0});return ZD(i,d)}(await RL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Kw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Gw(t,e,n){if(!n)throw new ce(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CL(t,e,n,r){if(e===!0&&r===!0)throw new ce(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function H_(t){if(!he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if(he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Ci(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new ce(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LN;switch(r.type){case"firstParty":return new UN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$_.get(n);r&&(te("ComponentProvider","Removing Datastore"),$_.delete(n),r.terminate())}(this),Promise.resolve()}}function PL(t,e,n,r={}){var s;const i=(t=Ci(t,Hl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ct.MOCK_USER;else{a=e0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ct(u)}t._authCredentials=new MN(new K0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ql(this.firestore,e,this._query)}}class un{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class zr extends ql{constructor(e,n,r){super(e,n,sw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new he(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function UU(t,e,...n){if(t=Ze(t),Gw("collection","path",e),t instanceof Hl){const r=qe.fromString(e,...n);return q_(r),new zr(t,null,r)}{if(!(t instanceof un||t instanceof zr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return q_(r),new zr(t.firestore,null,r)}}function BU(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=G0.newId()),Gw("doc","path",e),t instanceof Hl){const r=qe.fromString(e,...n);return H_(r),new un(t,null,new he(r))}{if(!(t instanceof un||t instanceof zr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return H_(r),new un(t.firestore,t instanceof zr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new kw(this,"async_queue_retry"),this.fu=()=>{const r=Wu();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new qr;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Fi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Ld.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.Eu.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class zl extends Hl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new W_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new W_(e),this._firestoreClient=void 0,await e}}}function kL(t,e){const n=typeof t=="object"?t:cd(),r=typeof t=="string"?t:"(default)",s=Rl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=XE("firestore");i&&PL(s,...i)}return s}function Bd(t){if(t._terminated)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||OL(t),t._firestoreClient}function OL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new e2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Kw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new TL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */const xL=/^__.*__$/;class NL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}class Qw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Yw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class qd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return nl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Yw(this.Mu)&&xL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class DL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bl(e)}$u(e,n,r,s=!1){return new qd({Mu:e,methodName:n,Ku:r,path:yt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xw(t){const e=t._freezeSettings(),n=Bl(t._databaseId);return new DL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jw(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);zd("Data must be an object, but it was:",o,r);const a=Zw(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=cf(e,d,n);if(!o.contains(p))throw new ce(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);tb(h,p)||h.push(p)}l=new Xt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new NL(new Kt(a),l,u)}class Kl extends jd{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kl}}function LL(t,e,n,r){const s=t.$u(1,e,n);zd("Data must be an object, but it was:",s,r);const i=[],o=Kt.empty();is(r,(l,u)=>{const h=Wd(e,l,n);u=Ze(u);const d=s.Lu(h);if(u instanceof Kl)i.push(h);else{const p=Gl(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Xt(i);return new Qw(o,a,s.fieldTransforms)}function ML(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[cf(e,r,n)],l=[s];if(i.length%2!=0)throw new ce(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(cf(e,i[p])),l.push(i[p+1]);const u=[],h=Kt.empty();for(let p=a.length-1;p>=0;--p)if(!tb(u,a[p])){const g=a[p];let w=l[p];w=Ze(w);const k=o.Lu(g);if(w instanceof Kl)u.push(g);else{const x=Gl(w,k);x!=null&&(u.push(g),h.set(g,x))}}const d=new Xt(u);return new Qw(h,d,o.fieldTransforms)}function Gl(t,e){if(eb(t=Ze(t)))return zd("Unsupported field value:",e,t),Zw(t,e);if(t instanceof jd)return function(r,s){if(!Yw(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Gl(a,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:Jc(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jc(s.serializer,i)}}if(r instanceof $d)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pi)return{bytesValue:Ew(s.serializer,r._byteString)};if(r instanceof un){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return Td(a.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Ud(r)}`)}(t,e)}function Zw(t,e){const n={};return Q0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,s)=>{const i=Gl(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof $d||t instanceof Pi||t instanceof un||t instanceof jd||t instanceof Hd)}function zd(t,e,n){if(!eb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ud(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function cf(t,e,n){if((e=Ze(e))instanceof Wl)return e._internalPath;if(typeof e=="string")return Wd(t,e);throw nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const VL=new RegExp("[~\\*/\\[\\]]");function Wd(t,e,n){if(e.search(VL)>=0)throw nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wl(...e.split("."))._internalPath}catch{throw nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce(H.INVALID_ARGUMENT,a+t+l)}function tb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FL extends nb{data(){return super.data()}}function rb(t,e){return typeof e=="string"?Wd(t,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class BL{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new Hd(i)}convertGeoPoint(e){return new $d(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Ne(Rw(r));const s=new Go(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Za{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jL extends nb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yc extends jL{data(e={}){return super.data(e)}}class $L{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Za(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yc(this._firestore,this._userDataWriter,r.key,r,new Za(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new yc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Za(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new yc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Za(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:HL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class qL extends BL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,n)}}function jU(t){t=Ci(t,ql);const e=Ci(t.firestore,zl),n=Bd(e),r=new qL(e);return UL(t._query),SL(n,t._query).then(s=>new $L(e,r,t,s))}function $U(t,e,n){t=Ci(t,un);const r=Ci(t.firestore,zl),s=sb(t.converter,e,n);return ib(r,[Jw(Xw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function ib(t,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>dL(await AL(r),s,i)),i.promise}(Bd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Xw(e)}set(e,n,r){this._verifyNotCommitted();const s=Gu(e,this._firestore),i=sb(s.converter,n,r),o=Jw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,ln.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Gu(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof Wl?ML(this._dataReader,"WriteBatch.update",i._key,n,r,s):LL(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,ln.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Gu(e,this._firestore);return this._mutations=this._mutations.concat(new Id(n._key,ln.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Gu(t,e){if((t=Ze(t)).firestore!==e)throw new ce(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t){return Bd(t=Ci(t,zl)),new zL(t,e=>ib(t,e))}(function(e,n=!0){(function(s){Mi=s})(Ns),As(new Kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new zl(new VN(r.getProvider("auth-internal")),new jN(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Nn(l_,"4.7.6",e),Nn(l_,"4.7.6","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="firebasestorage.googleapis.com",ab="storageBucket",WL=2*60*1e3,KL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends jn{constructor(e,n,r=0){super(Qu(e),`Firebase Storage: ${n} (${Qu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function Qu(t){return"storage/"+t}function Kd(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function GL(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function QL(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function YL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function XL(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function JL(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ZL(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eM(){return new tt(et.CANCELED,"User canceled the upload/download.")}function tM(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function nM(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ab+"' property when initializing the app?")}function sM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function iM(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lf(t){return new tt(et.INVALID_ARGUMENT,t)}function cb(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function aM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function no(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw nM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),w={bucket:1,path:3},k=n===ob?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",N=new RegExp(`^https?://${k}/${s}/${x}`,"i"),v=[{regex:a,indices:l,postModify:i},{regex:g,indices:w,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<v.length;R++){const D=v[R],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let y=M[D.indices.path];y||(y=""),r=new Jt(T,y),D.postModify(r);break}}if(r==null)throw tM(e);return r}}class cM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...x){u||(u=!0,e.apply(null,x))}function d(x){s=setTimeout(()=>{s=null,t(g,l())},x)}function p(){i&&clearTimeout(i)}function g(x,...N){if(u){p();return}if(x){p(),h.call(null,x,...N);return}if(l()||o){p(),h.call(null,x,...N);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let w=!1;function k(x){w||(w=!0,p(),!u&&(s!==null?(x||(a=2),clearTimeout(s),d(0)):x||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function uM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){return t!==void 0}function fM(t){return typeof t=="object"&&!Array.isArray(t)}function Gd(t){return typeof t=="string"||t instanceof String}function K_(t){return Qd()&&t instanceof Blob}function Qd(){return typeof Blob<"u"}function G_(t,e,n,r){if(r<e)throw lf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw lf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ts||(Ts={}));/**
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
 */class pM{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ec(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ts.NO_ERROR,l=i.getStatus();if(!a||dM(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Ts.ABORT;r(!1,new ec(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ec(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Kd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?cb():eM();o(l)}else{const l=ZL();o(l)}};this.canceled_?n(!1,new ec(!1,null,!0)):this.backoffId_=lM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ec{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _M(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vM(t,e,n,r,s,i,o=!0){const a=lb(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return _M(u,e),mM(u,n),gM(u,i),yM(u,r),new pM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wM(...t){const e=EM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qd())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const Pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yu{constructor(e,n){this.data=e,this.contentType=n||null}}function IM(t,e){switch(t){case Pn.RAW:return new Yu(ub(e));case Pn.BASE64:case Pn.BASE64URL:return new Yu(hb(t,e));case Pn.DATA_URL:return new Yu(RM(e),SM(e))}throw Kd()}function ub(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function AM(t){let e;try{e=decodeURIComponent(t)}catch{throw So(Pn.DATA_URL,"Malformed data URL.")}return ub(e)}function hb(t,e){switch(t){case Pn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Pn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=TM(e)}catch(s){throw s.message.includes("polyfill")?s:So(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class fb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(Pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=CM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function RM(t){const e=new fb(t);return e.base64?hb(Pn.BASE64,e.rest):AM(e.rest)}function SM(t){return new fb(t).contentType}function CM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){let r=0,s="";K_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(K_(this.data_)){const r=this.data_,s=bM(r,e,n);return s===null?null:new Lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Lr(r,!0)}}static getBlob(...e){if(Qd()){const n=e.map(r=>r instanceof Lr?r.data_:r);return new Lr(wM.apply(null,n))}else{const n=e.map(o=>Gd(o)?IM(Pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){let e;try{e=JSON.parse(t)}catch{return null}return fM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function pb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t,e){return e}class Ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||OM}}let tc=null;function xM(t){return!Gd(t)||t.length<2?t:pb(t)}function mb(){if(tc)return tc;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(i,o){return xM(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ft("size");return s.xform=r,t.push(s),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),tc=t,tc}function NM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function DM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return NM(r,t),r}function gb(t,e,n){const r=db(e);return r===null?null:DM(t,r,n)}function LM(t,e,n,r){const s=db(e);if(s===null||!Gd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=Yd(p,n,r),w=lb({alt:"media",token:u});return g+w})[0]}function MM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class _b{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){if(!t)throw Kd()}function VM(t,e){function n(r,s){const i=gb(t,s,e);return yb(i!==null),i}return n}function FM(t,e){function n(r,s){const i=gb(t,s,e);return yb(i!==null),LM(i,s,t.host,t._protocol)}return n}function vb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=XL():s=YL():n.getStatus()===402?s=QL(t.bucket):n.getStatus()===403?s=JL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function UM(t){const e=vb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=GL(t.path)),i.serverResponse=s.serverResponse,i}return n}function BM(t,e,n){const r=e.fullServerUrl(),s=Yd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new _b(s,i,FM(t,n),o);return a.errorHandler=UM(e),a}function jM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $M(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=jM(null,e)),r}function HM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let R=0;R<2;R++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=$M(e,r,s),h=MM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Lr.getBlob(d,r,p);if(g===null)throw sM();const w={name:u.fullPath},k=Yd(i,t.host,t._protocol),x="POST",N=t.maxUploadRetryTime,C=new _b(k,x,VM(t,n),N);return C.urlParams=w,C.headers=o,C.body=g.uploadData(),C.errorHandler=vb(e),C}class qM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw no("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw no("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw no("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw no("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw no("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zM extends qM{initXhr(){this.xhr_.responseType="text"}}function Eb(){return new zM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cs(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pb(this._location.path)}get storage(){return this._service}get parent(){const e=PM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Cs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aM(e)}}function WM(t,e,n){t._throwIfRoot("uploadBytes");const r=HM(t.storage,t._location,mb(),new Lr(e,!0),n);return t.storage.makeRequestWithTokens(r,Eb).then(s=>({metadata:s,ref:t}))}function KM(t){t._throwIfRoot("getDownloadURL");const e=BM(t.storage,t._location,mb());return t.storage.makeRequestWithTokens(e,Eb).then(n=>{if(n===null)throw iM();return n})}function GM(t,e){const n=kM(t._location.path,e),r=new Jt(t._location.bucket,n);return new Cs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t){return/^[A-Za-z]+:\/\//.test(t)}function YM(t,e){return new Cs(t,e)}function wb(t,e){if(t instanceof Xd){const n=t;if(n._bucket==null)throw rM();const r=new Cs(n,n._bucket);return e!=null?wb(r,e):r}else return e!==void 0?GM(t,e):t}function XM(t,e){if(e&&QM(e)){if(t instanceof Xd)return YM(t,e);throw lf("To use ref(service, url), the first argument must be a Storage instance.")}else return wb(t,e)}function Q_(t,e){const n=e==null?void 0:e[ab];return n==null?null:Jt.makeFromBucketSpec(n,t)}function JM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:e0(s,t.app.options.projectId))}class Xd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ob,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WL,this._maxUploadRetryTime=KL,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=Q_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=Q_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new cM(cb());{const o=vM(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Y_="@firebase/storage",X_="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="storage";function qU(t,e,n){return t=Ze(t),WM(t,e,n)}function zU(t){return t=Ze(t),KM(t)}function WU(t,e){return t=Ze(t),XM(t,e)}function ZM(t=cd(),e){t=Ze(t);const r=Rl(t,bb).getImmediate({identifier:e}),s=XE("storage");return s&&eV(r,...s),r}function eV(t,e,n,r={}){JM(t,e,n,r)}function tV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Xd(n,r,s,e,Ns)}function nV(){As(new Kr(bb,tV,"PUBLIC").setMultipleInstances(!0)),Nn(Y_,X_,""),Nn(Y_,X_,"esm2017")}nV();const rV=Zt(t=>{const e=xs(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=r0(n),s=bN(r),i=kL(r),o=ZM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function sV(t,e,n){return(e=oV(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J_(Object(n),!0).forEach(function(r){sV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function iV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function oV(t){var e=iV(t,"string");return typeof e=="symbol"?e:e+""}const Z_=()=>{};let Jd={},Tb={},Ib=null,Ab={mark:Z_,measure:Z_};try{typeof window<"u"&&(Jd=window),typeof document<"u"&&(Tb=document),typeof MutationObserver<"u"&&(Ib=MutationObserver),typeof performance<"u"&&(Ab=performance)}catch{}const{userAgent:ey=""}=Jd.navigator||{},Zr=Jd,$e=Tb,ty=Ib,nc=Ab;Zr.document;const mr=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",Rb=~ey.indexOf("MSIE")||~ey.indexOf("Trident/");var aV=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,cV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Sb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},lV={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Lt="classic",Ql="duotone",uV="sharp",hV="sharp-duotone",Pb=[Lt,Ql,uV,hV],fV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},dV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},pV=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),mV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},gV=["fak","fa-kit","fakd","fa-kit-duotone"],ny={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_V=["kit"],yV={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},vV=["fak","fakd"],EV={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ry={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wV=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],bV=["fak","fa-kit","fakd","fa-kit-duotone"],TV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},IV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},AV={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},uf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},RV=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],hf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...wV,...RV],SV=["solid","regular","light","thin","duotone","brands"],kb=[1,2,3,4,5,6,7,8,9,10],CV=kb.concat([11,12,13,14,15,16,17,18,19,20]),PV=[...Object.keys(AV),...SV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rc.GROUP,rc.SWAP_OPACITY,rc.PRIMARY,rc.SECONDARY].concat(kb.map(t=>"".concat(t,"x"))).concat(CV.map(t=>"w-".concat(t))),kV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ur="___FONT_AWESOME___",ff=16,Ob="fa",xb="svg-inline--fa",Ps="data-fa-i2svg",df="data-fa-pseudo-element",OV="data-fa-pseudo-element-pending",Zd="data-prefix",ep="data-icon",sy="fontawesome-i2svg",xV="async",NV=["HTML","HEAD","STYLE","SCRIPT"],Nb=(()=>{try{return!0}catch{return!1}})();function ya(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Lt]}})}const Db=W({},Sb);Db[Lt]=W(W(W(W({},{"fa-duotone":"duotone"}),Sb[Lt]),ny.kit),ny["kit-duotone"]);const DV=ya(Db),pf=W({},mV);pf[Lt]=W(W(W(W({},{duotone:"fad"}),pf[Lt]),ry.kit),ry["kit-duotone"]);const iy=ya(pf),mf=W({},uf);mf[Lt]=W(W({},mf[Lt]),EV.kit);const tp=ya(mf),gf=W({},IV);gf[Lt]=W(W({},gf[Lt]),yV.kit);ya(gf);const LV=aV,Lb="fa-layers-text",MV=cV,VV=W({},fV);ya(VV);const FV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xu=lV,UV=[..._V,...PV],Co=Zr.FontAwesomeConfig||{};function BV(t){var e=$e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$e&&typeof $e.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=jV(BV(n));s!=null&&(Co[r]=s)});const Mb={styleDefault:"solid",familyDefault:Lt,cssPrefix:Ob,replacementClass:xb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Co.familyPrefix&&(Co.cssPrefix=Co.familyPrefix);const ki=W(W({},Mb),Co);ki.autoReplaceSvg||(ki.observeMutations=!1);const ae={};Object.keys(Mb).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){ki[t]=e,Po.forEach(n=>n(ae))},get:function(){return ki[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){ki.cssPrefix=t,Po.forEach(e=>e(ae))},get:function(){return ki.cssPrefix}});Zr.FontAwesomeConfig=ae;const Po=[];function $V(t){return Po.push(t),()=>{Po.splice(Po.indexOf(t),1)}}const Tr=ff,kn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HV(t){if(!t||!mr)return;const e=$e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$e.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $e.head.insertBefore(e,r),t}const qV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jo(){let t=12,e="";for(;t-- >0;)e+=qV[Math.random()*62|0];return e}function Bi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function np(t){return t.classList?Bi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Vb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Vb(t[n]),'" '),"").trim()}function Yl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function rp(t){return t.size!==kn.size||t.x!==kn.x||t.y!==kn.y||t.rotate!==kn.rotate||t.flipX||t.flipY}function WV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function KV(t){let{transform:e,width:n=ff,height:r=ff,startCentered:s=!1}=t,i="";return s&&Rb?i+="translate(".concat(e.x/Tr-n/2,"em, ").concat(e.y/Tr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Tr,"em), calc(-50% + ").concat(e.y/Tr,"em)) "):i+="translate(".concat(e.x/Tr,"em, ").concat(e.y/Tr,"em) "),i+="scale(".concat(e.size/Tr*(e.flipX?-1:1),", ").concat(e.size/Tr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var GV=`:root, :host {
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
}`;function Fb(){const t=Ob,e=xb,n=ae.cssPrefix,r=ae.replacementClass;let s=GV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let oy=!1;function Ju(){ae.autoAddCss&&!oy&&(HV(Fb()),oy=!0)}var QV={mixout(){return{dom:{css:Fb,insertCss:Ju}}},hooks(){return{beforeDOMElementCreation(){Ju()},beforeI2svg(){Ju()}}}};const hr=Zr||{};hr[ur]||(hr[ur]={});hr[ur].styles||(hr[ur].styles={});hr[ur].hooks||(hr[ur].hooks={});hr[ur].shims||(hr[ur].shims=[]);var On=hr[ur];const Ub=[],Bb=function(){$e.removeEventListener("DOMContentLoaded",Bb),rl=1,Ub.map(t=>t())};let rl=!1;mr&&(rl=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),rl||$e.addEventListener("DOMContentLoaded",Bb));function YV(t){mr&&(rl?setTimeout(t,0):Ub.push(t))}function va(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Vb(t):"<".concat(e," ").concat(zV(n),">").concat(r.map(va).join(""),"</").concat(e,">")}function ay(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Zu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function XV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function _f(t){const e=XV(t);return e.length===1?e[0].toString(16):null}function JV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function cy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function yf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=cy(e);typeof On.hooks.addPack=="function"&&!r?On.hooks.addPack(t,cy(e)):On.styles[t]=W(W({},On.styles[t]||{}),s),t==="fas"&&yf("fa",e)}const{styles:Zo,shims:ZV}=On,jb=Object.keys(tp),e4=jb.reduce((t,e)=>(t[e]=Object.keys(tp[e]),t),{});let sp=null,$b={},Hb={},qb={},zb={},Wb={};function t4(t){return~UV.indexOf(t)}function n4(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!t4(s)?s:null}const Kb=()=>{const t=r=>Zu(Zo,(s,i,o)=>(s[o]=Zu(i,r,{}),s),{});$b=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Hb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Wb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in Zo||ae.autoFetchSvg,n=Zu(ZV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});qb=n.names,zb=n.unicodes,sp=Xl(ae.styleDefault,{family:ae.familyDefault})};$V(t=>{sp=Xl(t.styleDefault,{family:ae.familyDefault})});Kb();function ip(t,e){return($b[t]||{})[e]}function r4(t,e){return(Hb[t]||{})[e]}function ys(t,e){return(Wb[t]||{})[e]}function Gb(t){return qb[t]||{prefix:null,iconName:null}}function s4(t){const e=zb[t],n=ip("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function es(){return sp}const Qb=()=>({prefix:null,iconName:null,rest:[]});function i4(t){let e=Lt;const n=jb.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return Pb.forEach(r=>{(t.includes(n[r])||t.some(s=>e4[r].includes(s)))&&(e=r)}),e}function Xl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Lt}=e,r=DV[n][t];if(n===Ql&&!t)return"fad";const s=iy[n][t]||iy[n][r],i=t in On.styles?t:null;return s||i||null}function o4(t){let e=[],n=null;return t.forEach(r=>{const s=n4(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function ly(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=hf.concat(bV),i=ly(t.filter(d=>s.includes(d))),o=ly(t.filter(d=>!hf.includes(d))),a=i.filter(d=>(r=d,!Cb.includes(d))),[l=null]=a,u=i4(i),h=W(W({},o4(o)),{},{prefix:Xl(l,{family:u})});return W(W(W({},h),u4({values:t,family:u,styles:Zo,config:ae,canonical:h,givenPrefix:r})),a4(n,r,h))}function a4(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Gb(s):{},o=ys(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Zo.far&&Zo.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const c4=Pb.filter(t=>t!==Lt||t!==Ql),l4=Object.keys(uf).filter(t=>t!==Lt).map(t=>Object.keys(uf[t])).flat();function u4(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===Ql,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&c4.includes(n)&&(Object.keys(i).find(p=>l4.includes(p))||o.autoFetchSvg)){const p=pV.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=ys(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=es()||"fas"),r}class h4{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),yf(i,s[i]);const o=tp[Lt][i];o&&yf(o,s[i]),Kb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let uy=[],ti={};const di={},f4=Object.keys(di);function d4(t,e){let{mixoutsTo:n}=e;return uy=t,ti={},Object.keys(di).forEach(r=>{f4.indexOf(r)===-1&&delete di[r]}),uy.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ti[o]||(ti[o]=[]),ti[o].push(i[o])})}r.provides&&r.provides(di)}),n}function vf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ti[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ti[t]||[]).forEach(i=>{i.apply(null,n)})}function ts(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return di[t]?di[t].apply(null,e):void 0}function Ef(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||es();if(e)return e=ys(n,e)||e,ay(Yb.definitions,n,e)||ay(On.styles,n,e)}const Yb=new h4,p4=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,ks("noAuto")},m4={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(ks("beforeI2svg",t),ts("pseudoElements2svg",t),ts("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,YV(()=>{_4({autoReplaceSvgRoot:e}),ks("watch",t)})}},g4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ys(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Xl(t[0]);return{prefix:n,iconName:ys(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(LV))){const e=Jl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||es(),iconName:ys(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=es();return{prefix:e,iconName:ys(e,t)||t}}}},en={noAuto:p4,config:ae,dom:m4,parse:g4,library:Yb,findIconDefinition:Ef,toHtml:va},_4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$e}=t;(Object.keys(On.styles).length>0||ae.autoFetchSvg)&&mr&&ae.autoReplaceSvg&&en.dom.i2svg({node:e})};function Zl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>va(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=$e.createElement("div");return n.innerHTML=t.html,n.children}}),t}function y4(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(rp(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Yl(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function v4(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function op(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,w=vV.includes(r),k=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let x={children:[],attributes:W(W({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const N=w&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(x.attributes[Ps]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Jo())},children:[a]}),delete x.attributes.title);const C=W(W({},x),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:W(W({},N),h.styles)}),{children:v,attributes:R}=n.found&&e.found?ts("generateAbstractMask",C)||{children:[],attributes:{}}:ts("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=v,C.attributes=R,o?v4(C):y4(C)}function hy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Ps]="");const u=W({},o.styles);rp(s)&&(u.transform=KV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Yl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function E4(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Yl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:eh}=On;function wf(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Xu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Xu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Xu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const w4={found:!1,width:512,height:512};function b4(t,e){!Nb&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function bf(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=es()),new Promise((r,s)=>{if(n==="fa"){const i=Gb(t);t=i.iconName||t,e=i.prefix||e}if(t&&e&&eh[e]&&eh[e][t]){const i=eh[e][t];return r(wf(i))}b4(t,e),r(W(W({},w4),{},{icon:ae.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}}))})}const fy=()=>{},Tf=ae.measurePerformance&&nc&&nc.mark&&nc.measure?nc:{mark:fy,measure:fy},uo='FA "6.7.2"',T4=t=>(Tf.mark("".concat(uo," ").concat(t," begins")),()=>Xb(t)),Xb=t=>{Tf.mark("".concat(uo," ").concat(t," ends")),Tf.measure("".concat(uo," ").concat(t),"".concat(uo," ").concat(t," begins"),"".concat(uo," ").concat(t," ends"))};var ap={begin:T4,end:Xb};const vc=()=>{};function dy(t){return typeof(t.getAttribute?t.getAttribute(Ps):null)=="string"}function I4(t){const e=t.getAttribute?t.getAttribute(Zd):null,n=t.getAttribute?t.getAttribute(ep):null;return e&&n}function A4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function R4(){return ae.autoReplaceSvg===!0?Ec.replace:Ec[ae.autoReplaceSvg]||Ec.replace}function S4(t){return $e.createElementNS("http://www.w3.org/2000/svg",t)}function C4(t){return $e.createElement(t)}function Jb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?S4:C4}=e;if(typeof t=="string")return $e.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Jb(i,{ceFn:n}))}),r}function P4(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ec={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Jb(n),e)}),e.getAttribute(Ps)===null&&ae.keepOriginalSource){let n=$e.createComment(P4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~np(e).indexOf(ae.replacementClass))return Ec.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>va(i)).join(`
`);e.setAttribute(Ps,""),e.innerHTML=s}};function py(t){t()}function Zb(t,e){const n=typeof e=="function"?e:vc;if(t.length===0)n();else{let r=py;ae.mutateApproach===xV&&(r=Zr.requestAnimationFrame||py),r(()=>{const s=R4(),i=ap.begin("mutate");t.map(s),i(),n()})}}let cp=!1;function eT(){cp=!0}function If(){cp=!1}let sl=null;function my(t){if(!ty||!ae.observeMutations)return;const{treeCallback:e=vc,nodeCallback:n=vc,pseudoElementsCallback:r=vc,observeMutationsRoot:s=$e}=t;sl=new ty(i=>{if(cp)return;const o=es();Bi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!dy(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&dy(a.target)&&~FV.indexOf(a.attributeName))if(a.attributeName==="class"&&I4(a.target)){const{prefix:l,iconName:u}=Jl(np(a.target));a.target.setAttribute(Zd,l||o),u&&a.target.setAttribute(ep,u)}else A4(a.target)&&n(a.target)})}),mr&&sl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function k4(){sl&&sl.disconnect()}function O4(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function x4(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Jl(np(t));return s.prefix||(s.prefix=es()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=r4(s.prefix,t.innerText)||ip(s.prefix,_f(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function N4(t){const e=Bi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||Jo()):(e["aria-hidden"]="true",e.focusable="false")),e}function D4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:kn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=x4(t),i=N4(t),o=vf("parseNodeAttributes",{},t);let a=e.styleParser?O4(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:kn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:L4}=On;function tT(t){const e=ae.autoReplaceSvg==="nest"?gy(t,{styleParser:!1}):gy(t);return~e.extra.classes.indexOf(Lb)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}function M4(){return[...gV,...hf]}function _y(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=$e.documentElement.classList,r=h=>n.add("".concat(sy,"-").concat(h)),s=h=>n.remove("".concat(sy,"-").concat(h)),i=ae.autoFetchSvg?M4():Cb.concat(Object.keys(L4));i.includes("fa")||i.push("fa");const o=[".".concat(Lb,":not([").concat(Ps,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ps,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Bi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=ap.begin("onTree"),u=a.reduce((h,d)=>{try{const p=tT(d);p&&h.push(p)}catch(p){Nb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{Zb(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function V4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tT(t).then(n=>{n&&Zb([n],e)})}function F4(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ef(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Ef(s||{})),t(r,W(W({},n),{},{mask:s}))}}const U4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=kn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return Zl(W({type:"icon"},t),()=>(ks("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||Jo()):(u["aria-hidden"]="true",u.focusable="false")),op({icons:{main:wf(g),mask:s?wf(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:W(W({},kn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var B4={mixout(){return{icon:F4(U4)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=_y,t.nodeCallback=V4,t}}},provides(t){t.i2svg=function(e){const{node:n=$e,callback:r=()=>{}}=e;return _y(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([bf(r,o),u.iconName?bf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[k,x]=w;p([e,op({icons:{main:k,mask:x},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Yl(o);a.length>0&&(r.style=a);let l;return rp(i)&&(l=ts("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},j4={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Zl({type:"layer"},()=>{ks("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},$4={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Zl({type:"counter",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),E4({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},H4={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=kn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Zl({type:"text",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),hy({content:t,transform:W(W({},kn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Rb){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,hy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const q4=new RegExp('"',"ug"),yy=[1105920,1112319],vy=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),dV),kV),TV),Af=Object.keys(vy).reduce((t,e)=>(t[e.toLowerCase()]=vy[e],t),{}),z4=Object.keys(Af).reduce((t,e)=>{const n=Af[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function W4(t){const e=t.replace(q4,""),n=JV(e,0),r=n>=yy[0]&&n<=yy[1],s=e.length===2?e[0]===e[1]:!1;return{value:_f(s?e[0]:e),isSecondary:r||s}}function K4(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Af[n]||{})[s]||z4[n]}function Ey(t,e){const n="".concat(OV).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Bi(t.children).filter(p=>p.getAttribute(df)===e)[0],a=Zr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(MV),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=K4(l,h);const{value:w,isSecondary:k}=W4(p),x=u[0].startsWith("FontAwesome");let N=ip(g,w),C=N;if(x){const v=s4(w);v.iconName&&v.prefix&&(N=v.iconName,g=v.prefix)}if(N&&!k&&(!o||o.getAttribute(Zd)!==g||o.getAttribute(ep)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);const v=D4(),{extra:R}=v;R.attributes[df]=e,bf(N,g).then(D=>{const M=op(W(W({},v),{},{icons:{main:D,mask:Qb()},prefix:g,iconName:C,extra:R,watchable:!0})),T=$e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=M.map(y=>va(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function G4(t){return Promise.all([Ey(t,"::before"),Ey(t,"::after")])}function Q4(t){return t.parentNode!==document.head&&!~NV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(df)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function wy(t){if(mr)return new Promise((e,n)=>{const r=Bi(t.querySelectorAll("*")).filter(Q4).map(G4),s=ap.begin("searchPseudoElements");eT(),Promise.all(r).then(()=>{s(),If(),e()}).catch(()=>{s(),If(),n()})})}var Y4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=wy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$e}=e;ae.searchPseudoElements&&wy(n)}}};let by=!1;var X4={mixout(){return{dom:{unwatch(){eT(),by=!0}}}},hooks(){return{bootstrap(){my(vf("mutationObserverCallbacks",{}))},noAuto(){k4()},watch(t){const{observeMutationsRoot:e}=t;by?If():my(vf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ty=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var J4={mixout(){return{parse:{transform:t=>Ty(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ty(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:W({},p.outer),children:[{tag:"g",attributes:W({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),p.path)}]}]}}}};const th={x:0,y:0,width:"100%",height:"100%"};function Iy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Z4(t){return t.tag==="g"?t.children:[t]}var eF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Jl(n.split(" ").map(s=>s.trim())):Qb();return r.prefix||(r.prefix=es()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=WV({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:W(W({},th),{},{fill:"white"})},w=u.children?{children:u.children.map(Iy)}:{},k={tag:"g",attributes:W({},p.inner),children:[Iy(W({tag:u.tag,attributes:W(W({},u.attributes),p.path)},w))]},x={tag:"g",attributes:W({},p.outer),children:[k]},N="mask-".concat(o||Jo()),C="clip-".concat(o||Jo()),v={tag:"mask",attributes:W(W({},th),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Z4(d)},v]};return n.push(R,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(N,")")},th)}),{children:n,attributes:r}}}},tF={provides(t){let e=!1;Zr.matchMedia&&(e=Zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},nF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},rF=[QV,B4,j4,$4,H4,Y4,X4,J4,eF,tF,nF];d4(rF,{mixoutsTo:en});en.noAuto;const sF=en.config,iF=en.library;en.dom;const Rf=en.parse;en.findIconDefinition;en.toHtml;const oF=en.icon;en.layer;en.text;en.counter;function Ay(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ay(Object(n),!0).forEach(function(r){qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ay(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function aF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cF(t){var e=aF(t,"string");return typeof e=="symbol"?e:e+""}function il(t){"@babel/helpers - typeof";return il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},il(t)}function qt(t,e,n){return e=cF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function uF(t,e){if(t==null)return{};var n=lF(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var hF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nT={exports:{}};(function(t){(function(e){var n=function(N,C,v){if(!u(C)||d(C)||p(C)||g(C)||l(C))return C;var R,D=0,M=0;if(h(C))for(R=[],M=C.length;D<M;D++)R.push(n(N,C[D],v));else{R={};for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(R[N(T,v)]=n(N,C[T],v))}return R},r=function(N,C){C=C||{};var v=C.separator||"_",R=C.split||/(?=[A-Z])/;return N.split(R).join(v)},s=function(N){return w(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(C,v){return v?v.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var C=s(N);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(N,C){return r(N,C).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return a.call(N)=="[object Array]"},d=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},w=function(N){return N=N-0,N===N},k=function(N,C){var v=C&&"process"in C?C.process:C;return typeof v!="function"?N:function(R,D){return v(R,N,D)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,C){return n(k(s,C),N)},decamelizeKeys:function(N,C){return n(k(o,C),N,C)},pascalizeKeys:function(N,C){return n(k(i,C),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(hF)})(nT);var fF=nT.exports,dF=["class","style"];function pF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=fF.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function mF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function rT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return rT(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=mF(h);break;case"style":l.style=pF(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=uF(n,dF);return vt(t.tag,Xn(Xn(Xn({},e),{},{class:s.class,style:Xn(Xn({},s.style),o)},s.attrs),a),r)}var sT=!1;try{sT=!0}catch{}function gF(){if(!sT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function nh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qt({},t,e):{}}function _F(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qt(qt(qt(qt(qt(qt(qt(qt(qt(qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),qt(qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ry(t){if(t&&il(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Rf.icon)return Rf.icon(t);if(t===null)return null;if(il(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var yF=Tn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return Ry(e.icon)}),i=Ue(function(){return nh("classes",_F(e))}),o=Ue(function(){return nh("transform",typeof e.transform=="string"?Rf.transform(e.transform):e.transform)}),a=Ue(function(){return nh("mask",Ry(e.mask))}),l=Ue(function(){return oF(s.value,Xn(Xn(Xn(Xn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});yn(l,function(h){if(!h)return gF("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ue(function(){return l.value?rT(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const vF={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const EF={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},wF=EF,bF={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},TF={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},IF={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};sF.autoAddCss=!1;iF.add(vF,TF,wF,IF,bF);const AF=Zt(t=>{t.vueApp.component("font-awesome-icon",yF)}),RF=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let iT;const eu=t=>iT=t,oT=Symbol();function Sf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ko;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ko||(ko={}));function SF(){const t=Lf(!0),e=t.run(()=>Et({}));let n=[],r=[];const s=$f({install(i){eu(s),s._a=i,i.provide(oT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!RF?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const aT=()=>{};function Sy(t,e,n,r=aT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ra()&&bc(s),s}function zs(t,...e){t.slice().forEach(n=>{n(...e)})}const CF=t=>t(),Cy=Symbol(),rh=Symbol();function Cf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Sf(s)&&Sf(r)&&t.hasOwnProperty(n)&&!Je(r)&&!rr(r)?t[n]=Cf(s,r):t[n]=r}return t}const PF=Symbol();function kF(t){return!Sf(t)||!t.hasOwnProperty(PF)}const{assign:Ir}=Object;function OF(t){return!!(Je(t)&&t.effect)}function xF(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=gI(n.state.value[t]);return Ir(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=$f(Ue(()=>{eu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=cT(t,u,e,n,r,!0),l}function cT(t,e,n={},r,s,i){let o;const a=Ir({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Et({});let k;function x(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:ko.patchFunction,storeId:t,events:g}):(Cf(r.state.value[t],y),_={type:ko.patchObject,payload:y,storeId:t,events:g});const b=k=Symbol();Bn().then(()=>{k===b&&(u=!0)}),h=!0,zs(d,_,r.state.value[t])}const N=i?function(){const{state:_}=n,b=_?_():{};this.$patch(P=>{Ir(P,b)})}:aT;function C(){o.stop(),d=[],p=[],r._s.delete(t)}const v=(y,_="")=>{if(Cy in y)return y[rh]=_,y;const b=function(){eu(r);const P=Array.from(arguments),S=[],I=[];function ge(se){S.push(se)}function ve(se){I.push(se)}zs(p,{args:P,name:b[rh],store:D,after:ge,onError:ve});let Z;try{Z=y.apply(this&&this.$id===t?this:D,P)}catch(se){throw zs(I,se),se}return Z instanceof Promise?Z.then(se=>(zs(S,se),se)).catch(se=>(zs(I,se),Promise.reject(se))):(zs(S,Z),Z)};return b[Cy]=!0,b[rh]=_,b},R={_p:r,$id:t,$onAction:Sy.bind(null,p),$patch:x,$reset:N,$subscribe(y,_={}){const b=Sy(d,y,_.detached,()=>P()),P=o.run(()=>yn(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:ko.direct,events:g},S)},Ir({},l,_)));return b},$dispose:C},D=fr(R);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||CF)(()=>r._e.run(()=>(o=Lf()).run(()=>e({action:v}))));for(const y in T){const _=T[y];if(Je(_)&&!OF(_)||rr(_))i||(w&&kF(_)&&(Je(_)?_.value=w[y]:Cf(_,w[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const b=v(_,y);T[y]=b,a.actions[y]=_}}return Ir(D,T),Ir(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:y=>{x(_=>{Ir(_,y)})}}),r._p.forEach(y=>{Ir(D,o.run(()=>y({store:D,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(D.$state,w),u=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function NF(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=Wf();return a=a||(u?Nt(oT,null):null),a&&eu(a),a=iT,a._s.has(r)||(i?cT(r,e,s,a):xF(r,s,a)),a._s.get(r)}return o.$id=r,o}function DF(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function LF(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const MF=Zt(t=>{const e=SF();t.vueApp.use(e)});var Py=/^(GTM|G)-[0-9A-Z]+$/;function sh(t){if(typeof t!="string"||!Py.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Py}).${n}`)}}function ho(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function pi(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(ho(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function VF(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var FF=class{constructor(t){rn(this,"id");rn(this,"options");rn(this,"scriptElements",[]);rn(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)sh(typeof e=="string"?e:e.id);else sh(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!VF(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=pi(n,{...this.options}):r=pi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=pi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?ho(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&ho(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&ho(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&ho(window,this.options.dataLayerName).push(t)}},mt;function UF(t,e={id:""}){e={trackOnNextTick:!1,...e},mt=new FF(e),t.config.globalProperties.$gtm=mt,mt.isInBrowserContext()&&(e.vueRouter&&BF(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),mt.options.enabled&&mt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")pi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),pi(n.id,r)}}):pi(e.id,e))),t.provide("gtm",e)}function BF(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,w;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?mt!=null&&mt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(mt!=null&&mt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((w=(g=e.options)==null?void 0:g.history)==null?void 0:w.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Bn(()=>{mt==null||mt.trackView(u,d,h)}):mt==null||mt.trackView(u,d,h)})}function jF(t){return{install:e=>UF(e,t)}}const $F=Zt(t=>{const e=xs().public,n=AN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(jF({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:wt(),trackOnNextTick:!1}))}),HF=[KS,tC,TP,AP,RP,SP,PP,kP,OP,rV,AF,MF,$F],qF=Tn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return ws(ca,Jn(r)),()=>vt(t.vnode,{ref:t.vnodeRef})}}),zF=Tn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=De(),i=Et(),o=Nt(ca,null);let a;r({pageRef:i});const l=Nt(wE,null);let u;const h=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",h);wt().beforeEach(p)}t.pageKey&&yn(()=>t.pageKey,(p,g)=>{p!==g&&s.callHook("page:loading:start")});let d=!1;return()=>vt(zE,{name:t.name,route:t.route,...e},{default:p=>{const g=KF(o,p.route,p.Component),w=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!w)return u;h();return}if(u&&l&&!l.isCurrent(p.route))return u;if(g&&o&&(!l||l!=null&&l.isCurrent(o)))return w?u:null;const k=Vh(p,t.pageKey);!s.isHydrating&&!GF(o,p.route,p.Component)&&a===k&&(s.callHook("page:loading:end"),d=!0),a=k;const x=!!(t.transition??p.route.meta.pageTransition??Ih),N=x&&WF([t.transition,p.route.meta.pageTransition,Ih,{onAfterLeave:()=>{s.callHook("page:transition:finish",p.Component)}}].filter(Boolean)),C=t.keepalive??p.route.meta.keepalive??yR;return u=WE(eE,x&&N,lP(C,vt(Qf,{suspensible:!0,onPending:()=>s.callHook("page:start",p.Component),onResolve:()=>{Bn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!d)return s.callHook("page:loading:end");d=!1}).finally(h))}},{default:()=>{const v=vt(qF,{key:k||void 0,vnode:n.default?vt(Ot,void 0,n.default(p)):p.Component,route:p.route,renderKey:k||void 0,trackRootNodes:x,vnodeRef:i});return C&&(v.type.name=p.Component.type.name||p.Component.type.__name||"RouteProvider"),v}}))).default(),u}})}});function WF(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?id(n.onAfterLeave):void 0}));return vE(...e)}function KF(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Vh({route:e,Component:n})!==Vh({route:t,Component:n})}function GF(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const QF=Tn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>vt(Mr[t.name],t.layoutProps,e.slots)}}),YF=Tn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=De(),r=Nt(ca),s=r===ed()?sP():r,i=Ue(()=>{let l=Qe(t.name)??s.meta.layout??"default";return l&&!(l in Mr)&&t.fallback&&(l=Qe(t.fallback)),l}),o=Et();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);wt().beforeEach(l)}return()=>{const l=i.value&&i.value in Mr,u=s.meta.layoutTransition??_R;return WE(eE,l&&u,{default:()=>vt(Qf,{suspensible:!0,onResolve:()=>{Bn(a)}},{default:()=>vt(XF,{layoutProps:Gv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),XF=Tn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&ws(wE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Mr)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(QF,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),tu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},JF={};function ZF(t,e){const n=zF,r=YF;return $t(),Yn(r,null,{default:Rn(()=>[we(n)]),_:1})}const eU=tu(JF,[["render",ZF]]),tU=Zf("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),ky=NF("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=De(),r=wt();try{const s=await ax(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=De();try{await hx(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=De();ux(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),nU={class:"navbar navbar-expand-md navbar-light bg-light"},rU={class:"navbar-nav"},sU={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},iU={class:"navbar-nav ml-auto"};function oU(t,e,n,r,s,i){const o=ON;return $t(),Fo("nav",nU,[we(o,{class:"navbar-brand",to:"/"},{default:Rn(()=>e[2]||(e[2]=[an("Who's Jimmy")])),_:1}),He("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[He("span",{class:"navbar-toggler-icon"},null,-1)])),He("div",{class:ta(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[He("ul",rU,[we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Rn(()=>e[4]||(e[4]=[an("Bio")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Rn(()=>e[5]||(e[5]=[an("Portfolio ")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Rn(()=>e[6]||(e[6]=[an("For Sale")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Rn(()=>e[7]||(e[7]=[an("Cool Stuff")])),_:1}),we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Rn(()=>e[8]||(e[8]=[an("Contact Us")])),_:1})])],2),s.isAuth?($t(),Fo("div",sU,[He("ul",iU,[we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Rn(()=>[an(Df(t.user?t.user.email:""),1)]),_:1}),He("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):RA("",!0)])}const aU={data(){return{visible:!1,isAuth:!1}},computed:{...DF(ky,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...LF(ky,{signOut:"signOut"})}},cU=tu(aU,[["render",oU]]),lU={class:"page-footer font-small bg-light navbar-fixed-bottom"},uU={class:"container"},hU={class:"py-3 pt-3"},fU={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},dU={href:"https://www.facebook.com/whosjimmy"},pU={href:"https://twitter.com/jimmyclaws"},mU={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function gU(t,e){const n=Mo("font-awesome-icon");return $t(),Fo("footer",lU,[He("div",uU,[He("div",hU,[He("a",fU,[we(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),He("a",dU,[we(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),He("a",pU,[we(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),He("a",mU,[we(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=He("div",{class:"footer-copyright text-center font-small"},[He("div",null,[an("© 2024 Copyright: "),He("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),He("div",null,"Disclaimer: All images are copyright to their respective owners."),He("div",null,[an("A "),He("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),an(" creation.")])],-1))])}const _U={},yU=tu(_U,[["render",gU],["__scopeId","data-v-063d9b19"]]),vU={class:"text-center my-0 page"},EU={class:"body"},wU={components:{appHeader:cU,appFooter:yU},head(){return{title:"Error"}}},bU=Tn({...wU,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=De();lg({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{lg({title:n.public.SITE_TITLE}),TE({redirect:"/"})};return(i,o)=>{var u;const a=Mo("app-header"),l=Mo("app-footer");return $t(),Fo("div",vU,[we(a),He("div",EU,[o[0]||(o[0]=He("img",{src:tU,alt:"Error Image"},null,-1)),He("h2",null,"Error: "+Df((u=t.error)==null?void 0:u.statusCode),1),He("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),we(l)])}}}),TU=tu(bU,[["__scopeId","data-v-a467a495"]]),IU={key:0},Oy={__name:"nuxt-root",setup(t){const e=()=>null,n=De(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);wt().beforeEach(l)}const s=!1;ws(ca,ed()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=El(),o=!1;wv((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),qR(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Zs(l)),!1});const a=!1;return(l,u)=>($t(),Yn(Qf,{onResolve:Qe(r)},{default:Rn(()=>[Qe(o)?($t(),Fo("div",IU)):Qe(i)?($t(),Yn(Qe(TU),{key:1,error:Qe(i)},null,8,["error"])):Qe(a)?($t(),Yn(Qe(e),{key:2,context:Qe(a)},null,8,["context"])):Qe(s)?($t(),Yn(qI(Qe(s)),{key:3})):($t(),Yn(Qe(eU),{key:4}))]),_:1},8,["onResolve"]))}};let xy;{let t;xy=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?h1(Oy):u1(Oy),s=IR({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||wl(l)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await SR(s,HF)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(wR),await s.hooks.callHook("app:mounted",r),await Bn()}catch(l){i(l)}return r},t=xy().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{yU as $,Je as A,fr as B,oa as C,Ue as D,rr as E,Ot as F,Wr as G,Nt as H,ws as I,Bn as J,Zf as K,Mo as L,kU as M,ll as N,Yn as O,PU as P,ta as Q,RU as R,AA as S,eE as T,ca as U,LU as V,HR as W,AN as X,xU as Y,cU as Z,tu as _,LF as a,zF as a0,NF as a1,De as a2,UU as a3,jU as a4,$U as a5,BU as a6,HU as a7,He as b,Fo as c,we as d,Rn as e,ON as f,an as g,Qe as h,DU as i,NU as j,RA as k,ZM as l,DF as m,WU as n,$t as o,qU as p,zU as q,CU as r,gl as s,Df as t,ky as u,OU as v,SU as w,Et as x,UI as y,yn as z};
